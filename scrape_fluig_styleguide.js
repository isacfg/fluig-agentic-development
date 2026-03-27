#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: Fluig Style Guide
 * =============================================================================
 * Faz crawl de https://style.fluig.com/ e suas páginas HTML internas,
 * salvando uma página Markdown por documento, dump flat, INDEX.md,
 * manifest.json e índice consolidado em /index.
 *
 * Uso:
 *   node scrape_fluig_styleguide.js [--delay 250] [--output ./fluig_styleguide]
 * =============================================================================
 */

const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

const DEFAULT_SOURCE = "https://style.fluig.com/";
const BASE_HOST = "style.fluig.com";
const PAGE_TITLE_BY_KEY = {
  overview: "Overview",
  css: "CSS",
  javascript: "JavaScript",
  components: "Components",
  chart: "Chart",
  miscellaneous: "Miscellaneous",
};

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
};

const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

turndownService.keep(["table", "thead", "tbody", "tr", "th", "td"]);

const visited = new Set();
const pageIndex = [];
const failedPages = [];

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./fluig_styleguide",
    delay: 250,
    verbose: false,
    maxPages: 0,
    maxDepth: 10,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--output":
      case "-o":
        config.output = args[++i];
        break;
      case "--delay":
        config.delay = parseInt(args[++i], 10);
        break;
      case "--max-pages":
      case "-m":
        config.maxPages = parseInt(args[++i], 10);
        break;
      case "--max-depth":
      case "-d":
        config.maxDepth = parseInt(args[++i], 10);
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_fluig_styleguide.js [opções]

Opções:
  -o, --output <dir>    Diretório de saída (default: ./fluig_styleguide)
      --delay <ms>      Delay entre requests em ms (default: 250)
  -m, --max-pages <n>   Máximo de páginas (0 = todas, default: 0)
  -d, --max-depth <n>   Profundidade máxima de crawl (default: 10)
  -v, --verbose         Logs detalhados
  -h, --help            Mostra esta ajuda
`);
        process.exit(0);
    }
  }

  config.output = path.resolve(config.output);
  return config;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

function sanitizeFilename(name) {
  try {
    name = decodeURIComponent(name);
  } catch {
    // keep original
  }

  name = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
  name = name.replace(/\s+/g, "_");
  name = name.replace(/_+/g, "_");
  name = name.replace(/^[_. ]+|[_. ]+$/g, "");
  return name.substring(0, 160);
}

function prettifySlug(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalizeUrl(url, base = DEFAULT_SOURCE) {
  try {
    if (!url || url.startsWith("#")) return null;

    const parsed = new URL(url, base);
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    if (parsed.host !== BASE_HOST) return null;

    parsed.hash = "";
    parsed.search = "";

    if (parsed.pathname === "/index.html") {
      parsed.pathname = "/";
    }

    parsed.pathname = parsed.pathname.replace(/\/+/g, "/");
    return parsed.toString();
  } catch {
    return null;
  }
}

function shouldCrawl(url, base = DEFAULT_SOURCE) {
  if (!url || url.startsWith("#")) return false;

  const normalized = normalizeUrl(url, base);
  if (!normalized) return false;

  try {
    const pathname = new URL(normalized).pathname.toLowerCase();
    if (pathname === "/") return true;
    return pathname.endsWith(".html") || pathname.endsWith(".htm");
  } catch {
    return false;
  }
}

function pageKeyFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    if (pathname === "/") return "overview";

    const base = path.basename(pathname).replace(/\.(html?|md)$/i, "");
    return sanitizeFilename(base || "page").toLowerCase();
  } catch {
    return "page";
  }
}

function markdownFilenameFromUrl(url) {
  return `${pageKeyFromUrl(url)}.md`;
}

function titleFromUrl(url) {
  const key = pageKeyFromUrl(url);
  return PAGE_TITLE_BY_KEY[key] || prettifySlug(key);
}

function groupPagesByTopSection(entries) {
  return entries.reduce((acc, entry) => {
    const key = entry.section || "root";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(entry);
    return acc;
  }, {});
}

function getContentRoot($) {
  return $(".content").first().length ? $(".content").first() : $("body");
}

function extractSectionAnchors(html) {
  const $ = cheerio.load(html);
  const root = getContentRoot($);
  const results = [];
  const seen = new Set();
  const anchorLabels = new Map();

  root.find('a[href^="#"]').each((_, link) => {
    const href = ($(link).attr("href") || "").trim();
    const text = $(link).text().replace(/\s+/g, " ").trim();
    if (!href || href === "#") return;

    const id = href.slice(1).trim();
    if (!id || seen.has(`candidate:${id}`)) return;
    if (text) {
      anchorLabels.set(id, text);
    }
    seen.add(`candidate:${id}`);
  });

  const addSection = (id, text) => {
    if (!id || seen.has(`section:${id}`)) return;
    const normalizedText = (text || "").replace(/\s+/g, " ").trim();
    results.push({
      id,
      text: normalizedText || prettifySlug(id),
    });
    seen.add(`section:${id}`);
  };

  for (const [id, anchorText] of anchorLabels.entries()) {
    const target = root.find(`#${cssEscape(id)}`).first();
    if (!target.length) continue;

    let text = anchorText;
    if (!text) {
      if (/^h[1-6]$/i.test(target[0].tagName)) {
        text = target.text();
      } else {
        text = target.find("h1, h2, h3, h4, h5, h6").first().text();
      }
    }
    addSection(id, text);
  }

  root.find("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").each((_, el) => {
    addSection($(el).attr("id"), $(el).text());
  });

  root.find("section[id], .tab-pane[id], .panel[id], .collapse[id]").each((_, el) => {
    const id = $(el).attr("id");
    const text = $(el).find("h1, h2, h3, h4, h5, h6").first().text();
    addSection(id, text);
  });

  return results;
}

function cssEscape(value) {
  return String(value).replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g, "\\$1");
}

function rewriteInternalLinks(container, currentUrl) {
  container.find("a[href]").each((_, link) => {
    const element = container.find(link);
    const href = (element.attr("href") || "").trim();
    if (!href || href === "#") return;

    if (href.startsWith("#")) {
      return;
    }

    const normalized = normalizeUrl(href, currentUrl);
    if (!normalized || !shouldCrawl(normalized, currentUrl)) {
      return;
    }

    const currentNormalized = normalizeUrl(currentUrl, currentUrl);
    const currentTarget = new URL(normalized);
    const currentPage = currentNormalized ? new URL(currentNormalized) : null;

    if (currentPage && currentTarget.pathname === currentPage.pathname) {
      element.attr("href", "#");
      return;
    }

    element.attr("href", markdownFilenameFromUrl(normalized));
  });
}

function cleanContentHtml(html, pageUrl) {
  const $ = cheerio.load(html);
  const root = getContentRoot($).clone();

  root.find("script, style, noscript, iframe").remove();
  root.find("svg").remove();
  root.find("[hidden]").remove();
  root.find(".footer-description").remove();

  rewriteInternalLinks(root, pageUrl);
  return root.html() || "";
}

function extractInternalLinks(html, pageUrl) {
  const $ = cheerio.load(html);
  const links = new Set();

  $("a[href]").each((_, link) => {
    const href = ($(link).attr("href") || "").trim();
    if (!href || href === "#") return;
    if (!shouldCrawl(href, pageUrl)) return;

    const normalized = normalizeUrl(href, pageUrl);
    if (!normalized) return;

    links.add(normalized);
  });

  return Array.from(links).sort();
}

async function fetchPage(url) {
  const response = await axios.get(url, {
    headers: HEADERS,
    responseType: "text",
    timeout: 30000,
    validateStatus(status) {
      return status >= 200 && status < 400;
    },
  });

  return String(response.data);
}

function buildPageMarkdown(entry, markdownBody) {
  const lines = [
    `# ${entry.title}`,
    "",
    `**Fonte:** [${entry.url}](${entry.url})`,
    `**Seção:** ${entry.section}`,
    `**Subseções detectadas:** ${entry.sections.length}`,
    "",
  ];

  if (entry.sections.length > 0) {
    lines.push("## Navegação interna", "");
    for (const section of entry.sections) {
      lines.push(`- [${section.text}](#${section.id})`);
    }
    lines.push("");
  }

  lines.push("---", "", markdownBody.trim(), "");
  return lines.join("\n");
}

function savePage(outputDir, entry, markdown) {
  const pagePath = path.join(outputDir, entry.file);
  fs.writeFileSync(pagePath, markdown, "utf-8");

  const dumpDir = path.join(outputDir, "dump");
  fs.mkdirSync(dumpDir, { recursive: true });
  fs.writeFileSync(path.join(dumpDir, entry.file), markdown, "utf-8");
}

async function crawl(config, startUrl) {
  const queue = [{ url: normalizeUrl(startUrl, startUrl), depth: 0 }];

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || !current.url) continue;
    if (visited.has(current.url)) continue;
    if (current.depth > config.maxDepth) continue;
    if (config.maxPages > 0 && pageIndex.length >= config.maxPages) break;

    visited.add(current.url);
    log(current.depth, "🌐", current.url);

    try {
      const html = await fetchPage(current.url);
      const cleanedHtml = cleanContentHtml(html, current.url);
      const markdown = turndownService.turndown(cleanedHtml);
      const sections = extractSectionAnchors(html);
      const pageFile = markdownFilenameFromUrl(current.url);
      const entry = {
        title: titleFromUrl(current.url),
        url: current.url,
        file: pageFile,
        section: pageKeyFromUrl(current.url),
        sections,
      };

      savePage(config.output, entry, buildPageMarkdown(entry, markdown));
      pageIndex.push(entry);
      log(current.depth, "✅", `${pageFile} (${sections.length} seções)`);

      const nextLinks = extractInternalLinks(html, current.url);
      for (const nextUrl of nextLinks) {
        if (!visited.has(nextUrl)) {
          queue.push({ url: nextUrl, depth: current.depth + 1 });
        }
      }

      if (config.verbose) {
        log(current.depth, "📥", `Fila pendente: ${queue.length}`);
      }

      if (config.delay > 0) {
        await sleep(config.delay);
      }
    } catch (error) {
      failedPages.push({
        url: current.url,
        reason: error.message,
      });
      log(current.depth, "❌", `${current.url} — ${error.message}`);
    }
  }
}

function createConsolidatedIndex(outputDir) {
  const indexDir = path.join(outputDir, "index");
  fs.mkdirSync(indexDir, { recursive: true });

  const grouped = groupPagesByTopSection(pageIndex);
  const indexEntries = [];

  for (const [section, entries] of Object.entries(grouped)) {
    const first = entries[0];
    const lines = [
      `# ${first.title}`,
      "",
      `**Página:** [${first.file}](../${first.file})`,
      `**Origem:** [${first.url}](${first.url})`,
      "",
      "## Seções",
      "",
    ];

    if (first.sections.length === 0) {
      lines.push("- Nenhuma subseção detectada.", "");
    } else {
      for (const item of first.sections) {
        lines.push(`- [${item.text}](../${first.file}#${item.id})`);
      }
      lines.push("");
    }

    const fileName = `${sanitizeFilename(section)}.md`;
    fs.writeFileSync(path.join(indexDir, fileName), lines.join("\n"), "utf-8");
    indexEntries.push({
      title: first.title,
      file: fileName,
      count: first.sections.length,
    });
  }

  const idxLines = [
    "# 📚 Fluig Style Guide — Índice Consolidado",
    "",
    `**Total de páginas:** ${pageIndex.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const entry of indexEntries) {
    idxLines.push(`- [${entry.title}](${entry.file}) — ${entry.count} seções`);
  }

  fs.writeFileSync(path.join(indexDir, "INDEX.md"), idxLines.join("\n") + "\n", "utf-8");
}

function createIndex(outputDir) {
  const lines = [
    "# 📚 Fluig Style Guide",
    "",
    `**Fonte:** [${DEFAULT_SOURCE}](${DEFAULT_SOURCE})`,
    `**Total de páginas:** ${pageIndex.length}`,
    `**Páginas com erro:** ${failedPages.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const entry of pageIndex) {
    lines.push(`## ${entry.title}`);
    lines.push("");
    lines.push(`- Página: [${entry.file}](${entry.file})`);
    lines.push(`- URL: [${entry.url}](${entry.url})`);
    lines.push(`- Seções detectadas: ${entry.sections.length}`);
    lines.push("");
  }

  if (failedPages.length > 0) {
    lines.push("## ⚠️ Páginas com erro", "");
    for (const failure of failedPages) {
      lines.push(`- [${failure.url}](${failure.url}) — ${failure.reason}`);
    }
    lines.push("");
  }

  fs.writeFileSync(path.join(outputDir, "INDEX.md"), lines.join("\n"), "utf-8");
}

function createManifest(outputDir) {
  const manifest = {
    source: DEFAULT_SOURCE,
    total_pages: pageIndex.length,
    failed_pages: failedPages.length,
    scraped_at: new Date().toISOString(),
    pages: pageIndex,
    failed: failedPages,
  };

  fs.writeFileSync(
    path.join(outputDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );
}

async function main() {
  const config = parseArgs();
  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(70));
  console.log("🚀 Scraper Fluig Style Guide");
  console.log("=".repeat(70));
  console.log(`  Fonte:            ${DEFAULT_SOURCE}`);
  console.log(`  Saída:            ${config.output}`);
  console.log(`  Max páginas:      ${config.maxPages === 0 ? "todas" : config.maxPages}`);
  console.log(`  Max profundidade: ${config.maxDepth}`);
  console.log(`  Delay:            ${config.delay}ms`);
  console.log("=".repeat(70));
  console.log();

  await crawl(config, DEFAULT_SOURCE);
  createConsolidatedIndex(config.output);
  createIndex(config.output);
  createManifest(config.output);

  console.log();
  console.log("=".repeat(70));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Páginas salvas:   ${pageIndex.length}`);
  console.log(`  ❌ Páginas com erro: ${failedPages.length}`);
  console.log(`  📁 Diretório:        ${config.output}`);
  console.log("=".repeat(70));
}

if (require.main === module) {
  main().catch((error) => {
    console.error("💥 Erro fatal:", error);
    process.exit(1);
  });
}

module.exports = {
  DEFAULT_SOURCE,
  normalizeUrl,
  shouldCrawl,
  extractSectionAnchors,
  groupPagesByTopSection,
  cleanContentHtml,
};
