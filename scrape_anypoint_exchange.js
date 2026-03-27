#!/usr/bin/env node
/**
 * Scraper para documentação em portais do Anypoint Exchange (MuleSoft).
 *
 * Uso:
 *   node scrape_anypoint_exchange.js \
 *     --url "https://.../pages/home/" \
 *     --output ./mulesoft_docs
 */

const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
};

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

turndown.keep(["table", "thead", "tbody", "tr", "th", "td"]);

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    url: "",
    output: "./mulesoft_docs",
    delay: 150,
    maxPages: 0,
    verbose: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--url" || arg === "-u") config.url = args[++i];
    else if (arg === "--output" || arg === "-o") config.output = args[++i];
    else if (arg === "--delay") config.delay = Number(args[++i]);
    else if (arg === "--max-pages" || arg === "-m") config.maxPages = Number(args[++i]);
    else if (arg === "--verbose" || arg === "-v") config.verbose = true;
    else if (arg === "--help" || arg === "-h") {
      console.log(`
Uso:
  node scrape_anypoint_exchange.js --url <url-inicial> [opções]

Opções:
  -u, --url <url>         URL inicial (obrigatória)
  -o, --output <dir>      Diretório de saída (default: ./mulesoft_docs)
      --delay <ms>        Delay entre páginas (default: 150)
  -m, --max-pages <n>     Limite de páginas (0 = todas)
  -v, --verbose           Logs detalhados
`);
      process.exit(0);
    }
  }

  if (!config.url) {
    console.error("❌ Informe a URL com --url");
    process.exit(1);
  }

  config.output = path.resolve(config.output);
  return config;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizeFilename(name) {
  try {
    name = decodeURIComponent(name);
  } catch {
    // noop
  }
  return String(name)
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "_")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[. ]+$/g, "")
    .substring(0, 160);
}

function normalizeUrl(url, base) {
  if (!url) return null;
  try {
    const parsed = new URL(url, base);
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    parsed.hash = "";
    parsed.search = "";
    parsed.pathname = parsed.pathname.replace(/\/+/g, "/");
    return parsed.toString();
  } catch {
    return null;
  }
}

function getPortalRoot(startUrl) {
  const normalized = normalizeUrl(startUrl, startUrl);
  if (!normalized) throw new Error("URL inicial inválida");

  const url = new URL(normalized);
  const marker = "/pages/";
  const idx = url.pathname.indexOf(marker);
  if (idx === -1) {
    throw new Error("URL inicial precisa conter /pages/");
  }

  return `${url.origin}${url.pathname.slice(0, idx + marker.length)}`;
}

function isPortalPage(url, portalRoot) {
  if (!url || !url.startsWith(portalRoot)) return false;
  const tail = url.slice(portalRoot.length);
  if (!tail) return true;
  if (/\[|\]/.test(tail)) return false;
  if (/%2f/i.test(tail)) return false;
  if (/\.md($|\?)/i.test(tail)) return false;
  return true;
}

function pageSlug(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean);
  const idx = parts.indexOf("pages");
  if (idx === -1) return "page";
  const tail = parts.slice(idx + 1);

  if (tail.length === 1) return sanitizeFilename(tail[0]).toLowerCase();
  return sanitizeFilename(tail[tail.length - 1] || tail[0] || "page").toLowerCase();
}

function markdownFileFromUrl(url) {
  return `${pageSlug(url)}.md`;
}

function extractTitle($) {
  const candidate = [
    '[data-test-id="asset-page-content"] h1:first',
    '[data-test-id="asset-page-content"] h2:first',
    "article h1:first",
    "article h2:first",
  ];

  for (const selector of candidate) {
    const text = $(selector).first().text().replace(/\s+/g, " ").trim();
    if (text) return text;
  }

  return $("title").text().replace(/\s+/g, " ").trim() || "Sem título";
}

function pickContent($) {
  const candidates = [
    '[data-test-id="asset-page-content"]',
    "article:last .content-rCsmc",
    "article:last",
    "main",
  ];

  for (const selector of candidates) {
    const el = $(selector).first();
    if (!el.length) continue;

    const text = el.text().replace(/\s+/g, " ").trim();
    if (text.length > 80) return el.clone();
  }

  return null;
}

function rewriteInternalLinks(container, currentUrl, portalRoot) {
  container.find("a[href]").each((_, a) => {
    const el = container.find(a);
    const href = (el.attr("href") || "").trim();
    if (!href || href.startsWith("#")) return;

    const normalized = normalizeUrl(href, currentUrl);
    if (!normalized || !isPortalPage(normalized, portalRoot)) return;
    el.attr("href", markdownFileFromUrl(normalized));
  });
}

function cleanContent(container, currentUrl, portalRoot) {
  container.find("script, style, noscript, iframe").remove();
  container.find("button, [role='button']").remove();
  container.find('[data-test-id="asset-page-name"]').remove();
  container.find(".visually-hidden").remove();

  rewriteInternalLinks(container, currentUrl, portalRoot);
  return container.html() || "";
}

function extractLinks($, currentUrl, portalRoot) {
  const links = new Set();
  $("a[href]").each((_, a) => {
    const href = ($(a).attr("href") || "").trim();
    if (!href) return;
    if (/\[|\]/.test(href)) return;
    if (/%2f/i.test(href)) return;
    if (/\.md($|\?)/i.test(href)) return;

    const normalized = normalizeUrl(href, currentUrl);
    if (!normalized || !isPortalPage(normalized, portalRoot)) return;

    links.add(normalized);
  });
  return Array.from(links);
}

function extractSections(containerHtml) {
  const $ = cheerio.load(containerHtml);
  const sections = [];
  const seen = new Set();
  $("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]").each((_, el) => {
    const id = ($(el).attr("id") || "").trim();
    if (!id || seen.has(id)) return;
    seen.add(id);
    const text = $(el).text().replace(/\s+/g, " ").trim();
    sections.push({ id, text: text || id });
  });
  return sections;
}

function buildMarkdown({ title, url, sectionCount, sections, body }) {
  const lines = [
    `# ${title}`,
    "",
    `**Fonte:** [${url}](${url})`,
    `**Subseções detectadas:** ${sectionCount}`,
    "",
  ];

  if (sections.length > 0) {
    lines.push("## Navegação interna", "");
    for (const s of sections) {
      lines.push(`- [${s.text}](#${s.id})`);
    }
    lines.push("");
  }

  lines.push("---", "", body.trim(), "");
  return lines.join("\n");
}

async function fetchHtml(url) {
  const response = await axios.get(url, {
    headers: HEADERS,
    responseType: "text",
    timeout: 45000,
    validateStatus: (s) => s >= 200 && s < 400,
  });

  return String(response.data);
}

async function run() {
  const config = parseArgs();
  const portalRoot = getPortalRoot(config.url);

  const visited = new Set();
  const failures = [];
  const pages = [];
  const queue = [normalizeUrl(config.url, config.url)];

  fs.mkdirSync(config.output, { recursive: true });
  fs.mkdirSync(path.join(config.output, "dump"), { recursive: true });

  console.log("=".repeat(68));
  console.log("🚀 Scraper Anypoint Exchange");
  console.log("=".repeat(68));
  console.log(`  URL inicial: ${config.url}`);
  console.log(`  Portal raiz: ${portalRoot}`);
  console.log(`  Saída:       ${config.output}`);
  console.log("=".repeat(68));

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || visited.has(current)) continue;
    if (config.maxPages > 0 && pages.length >= config.maxPages) break;

    visited.add(current);
    console.log(`🌐 ${current}`);

    try {
      const html = await fetchHtml(current);
      const $ = cheerio.load(html);
      const title = extractTitle($);

      const contentRoot = pickContent($);
      if (!contentRoot) {
        throw new Error("conteúdo principal não encontrado");
      }

      const cleanedHtml = cleanContent(contentRoot, current, portalRoot);
      const sections = extractSections(cleanedHtml);
      const bodyMd = turndown.turndown(cleanedHtml).replace(/\n{4,}/g, "\n\n\n");
      const fileName = markdownFileFromUrl(current);

      const markdown = buildMarkdown({
        title,
        url: current,
        sectionCount: sections.length,
        sections,
        body: bodyMd,
      });

      fs.writeFileSync(path.join(config.output, fileName), markdown, "utf-8");
      fs.writeFileSync(path.join(config.output, "dump", fileName), markdown, "utf-8");

      pages.push({
        title,
        url: current,
        file: fileName,
        section: pageSlug(current),
        sections,
      });

      const nextLinks = extractLinks($, current, portalRoot);
      for (const next of nextLinks) {
        if (!visited.has(next)) queue.push(next);
      }

      if (config.verbose) {
        console.log(`  ✅ ${fileName} (${sections.length} seções) | fila: ${queue.length}`);
      } else {
        console.log(`  ✅ ${fileName}`);
      }

      if (config.delay > 0) await sleep(config.delay);
    } catch (err) {
      failures.push({ url: current, reason: err.message });
      console.log(`  ❌ ${err.message}`);
    }
  }

  const indexLines = [
    "# 📚 Documentação Anypoint Exchange",
    "",
    `**Total de páginas:** ${pages.length}`,
    `**Páginas com erro:** ${failures.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const page of pages) {
    indexLines.push(`## ${page.title}`);
    indexLines.push("");
    indexLines.push(`- Página: [${page.file}](${page.file})`);
    indexLines.push(`- URL: [${page.url}](${page.url})`);
    indexLines.push(`- Seções detectadas: ${page.sections.length}`);
    indexLines.push("");
  }

  if (failures.length > 0) {
    indexLines.push("## ⚠️ Páginas com erro", "");
    for (const f of failures) {
      indexLines.push(`- [${f.url}](${f.url}) — ${f.reason}`);
    }
    indexLines.push("");
  }

  fs.writeFileSync(path.join(config.output, "INDEX.md"), indexLines.join("\n"), "utf-8");

  fs.writeFileSync(
    path.join(config.output, "manifest.json"),
    JSON.stringify(
      {
        source: config.url,
        portalRoot,
        total_pages: pages.length,
        failed_pages: failures.length,
        scraped_at: new Date().toISOString(),
        pages,
        failed: failures,
      },
      null,
      2
    ),
    "utf-8"
  );

  console.log("=".repeat(68));
  console.log("✅ Scraping concluído");
  console.log(`  📄 Páginas: ${pages.length}`);
  console.log(`  ❌ Erros:   ${failures.length}`);
  console.log(`  📁 Saída:   ${config.output}`);
  console.log("=".repeat(68));
}

if (require.main === module) {
  run().catch((err) => {
    console.error("💥 Erro fatal:", err.message);
    process.exit(1);
  });
}
