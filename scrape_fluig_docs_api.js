#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: Fluig Docs API (latest + old)
 * =============================================================================
 * Faz crawl da documentação em:
 *   - https://api.fluig.com/latest/index.html
 *   - https://api.fluig.com/old/
 *
 * Salva conteúdo em Markdown, gera dump flat, INDEX.md, manifest.json
 * e índice consolidado em /index (similar ao padrão fluiggers_docs).
 *
 * Uso:
 *   node scrape_fluig_docs_api.js [--delay 250] [--output ./fluig_docs_api]
 * =============================================================================
 */

const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

const DEFAULT_SOURCES = [
  "https://api.fluig.com/latest/index.html",
  "https://api.fluig.com/old/",
];

const KNOWN_LATEST_SWAGGER_URLS = [
  "https://api.fluig.com/latest/content-management/swagger-ui/",
  "https://api.fluig.com/latest/page-management/swagger-ui/",
  "https://api.fluig.com/latest/process-management/swagger-ui/",
  "https://api.fluig.com/latest/ecm-forms/swagger-ui/",
  "https://api.fluig.com/latest/dataservice/swagger-ui/",
  "https://api.fluig.com/latest/collaboration/swagger-ui/",
  "https://api.fluig.com/latest/admin/swagger-ui/",
  "https://api.fluig.com/latest/dataset/swagger-ui/",
  "https://api.fluig.com/latest/environment/swagger-ui/",
  "https://api.fluig.com/latest/use-policy/swagger-ui/",
  "https://api.fluig.com/latest/form-management/swagger-ui/",
];

const BASE_HOST = "api.fluig.com";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
};

const visited = new Set();
const pageIndex = [];
const failedPages = [];
let totalSaved = 0;

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./fluig_docs_api",
    delay: 250,
    verbose: false,
    maxPages: 0,
    maxDepth: 30,
    only: "all", // all | latest | old
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
      case "--only": {
        const value = (args[++i] || "all").toLowerCase();
        if (["all", "latest", "old"].includes(value)) {
          config.only = value;
        }
        break;
      }
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_fluig_docs_api.js [opções]

Opções:
  -o, --output <dir>    Diretório de saída (default: ./fluig_docs_api)
      --delay <ms>      Delay entre requests em ms (default: 250)
  -m, --max-pages <n>   Máximo de páginas (0 = todas, default: 0)
  -d, --max-depth <n>   Profundidade máxima de crawl (default: 30)
      --only <target>   all | latest | old (default: all)
  -v, --verbose         Logs detalhados
  -h, --help            Mostra esta ajuda
`);
        process.exit(0);
    }
  }

  config.output = path.resolve(config.output);
  return config;
}

function sanitizeFilename(name) {
  try {
    name = decodeURIComponent(name);
  } catch {
    // mantém original
  }
  name = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
  name = name.replace(/\s+/g, "_");
  name = name.replace(/_+/g, "_");
  name = name.replace(/^[_. ]+|[_. ]+$/g, "");
  return name.substring(0, 180);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

function normalizeUrl(url, base) {
  try {
    const u = new URL(url, base);
    if (!["http:", "https:"].includes(u.protocol)) return null;
    if (u.host !== BASE_HOST) return null;

    u.hash = "";

    // normalizar duplicidade de /
    if (u.pathname !== "/") {
      u.pathname = u.pathname.replace(/\/+/g, "/");

      // Canonicalizar diretórios sem extensão para terminar com '/'
      const lastSegment = u.pathname.split("/").filter(Boolean).pop() || "";
      const hasExt = /\.[A-Za-z0-9]+$/.test(lastSegment);
      if (!hasExt && !u.pathname.endsWith("/")) {
        u.pathname += "/";
      }
    }

    return u.toString();
  } catch {
    return null;
  }
}

function buildSources(only) {
  const sources = DEFAULT_SOURCES.filter((url) => {
    if (only === "latest") return url.includes("/latest/");
    if (only === "old") return url.includes("/old/");
    return true;
  });

  if (only !== "old") {
    for (const url of KNOWN_LATEST_SWAGGER_URLS) {
      sources.push(url);
    }
  }

  // dedup + normalize
  const unique = new Set();
  for (const url of sources) {
    const normalized = normalizeUrl(url, url);
    if (normalized) unique.add(normalized);
  }

  return Array.from(unique);
}

function getSectionFromUrl(url) {
  try {
    const p = new URL(url).pathname.split("/").filter(Boolean);
    return p[0] || "root";
  } catch {
    return "root";
  }
}

function shouldCrawl(url, only = "all") {
  try {
    const u = new URL(url);
    if (u.host !== BASE_HOST) return false;

    const p = u.pathname.toLowerCase();
    if (decodeURIComponent(p).includes(" ")) return false;
    const isLatest = p === "/latest" || p.startsWith("/latest/");
    const isOld = p === "/old" || p.startsWith("/old/");

    if (only === "latest" && !isLatest) return false;
    if (only === "old" && !isOld) return false;
    if (!isLatest && !isOld) return false;

    // arquivos de documentação e páginas
    if (
      p.endsWith(".html") ||
      p.endsWith(".htm") ||
      p.endsWith(".json") ||
      p.endsWith(".yaml") ||
      p.endsWith(".yml") ||
      p.endsWith(".xml") ||
      p.endsWith(".wadl") ||
      p.endsWith(".wsdl") ||
      p.endsWith(".txt") ||
      p.endsWith("/")
    ) {
      return true;
    }

    // URLs sem extensão (ex: /old, /latest)
    if (!p.includes(".")) return true;

    return false;
  } catch {
    return false;
  }
}

function guessEncodingFromHeaders(contentType) {
  if (!contentType) return "utf8";
  const m = String(contentType).match(/charset=([^;]+)/i);
  if (!m) return "utf8";
  const c = m[1].trim().toLowerCase();
  if (c.includes("utf-8") || c.includes("utf8")) return "utf8";
  if (c.includes("latin1") || c.includes("iso-8859-1") || c.includes("windows-1252")) {
    return "latin1";
  }
  return "utf8";
}

function decodeBuffer(buffer, contentType) {
  const preferred = guessEncodingFromHeaders(contentType);
  let text = buffer.toString(preferred);

  // heurística para latin1
  const suspicious = (text.match(/Ã|Â|�/g) || []).length;
  if (suspicious > 20) {
    const latin = buffer.toString("latin1");
    const latinSuspicious = (latin.match(/Ã|Â|�/g) || []).length;
    if (latinSuspicious < suspicious) {
      text = latin;
    }
  }

  return text;
}

async function fetchUrl(url, delay, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await sleep(delay);
      const resp = await axios.get(url, {
        headers: HEADERS,
        timeout: 45000,
        maxRedirects: 5,
        responseType: "arraybuffer",
        validateStatus: (status) => status < 500,
      });

      if (resp.status === 200) {
        const finalUrl = normalizeUrl(resp.request?.res?.responseUrl || url, url) || url;
        const contentType = resp.headers["content-type"] || "";
        const buffer = Buffer.from(resp.data);
        const text = decodeBuffer(buffer, contentType);
        return { text, contentType, finalUrl };
      }

      if (resp.status === 404) return null;
      if (resp.status === 429) {
        await sleep(delay * (attempt + 2));
        continue;
      }

      if (resp.status >= 400) {
        if (attempt < retries - 1) {
          await sleep(delay * 2);
          continue;
        }
        return null;
      }
    } catch {
      if (attempt < retries - 1) {
        await sleep(delay * 2);
        continue;
      }
      return null;
    }
  }
  return null;
}

function createTurndownService() {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    fence: "```",
    emDelimiter: "*",
    strongDelimiter: "**",
  });

  td.keep(["table", "thead", "tbody", "tr", "th", "td"]);

  td.addRule("codeBlocks", {
    filter: (node) => node.nodeName === "PRE",
    replacement: (content, node) => {
      const raw = node.textContent || "";
      if (!raw.trim()) return "";
      return `\n\`\`\`\n${raw.trim()}\n\`\`\`\n`;
    },
  });

  td.addRule("removeJunk", {
    filter: ["script", "style", "noscript"],
    replacement: () => "",
  });

  return td;
}

function extractTitle($) {
  return (
    $("h1").first().text().trim() ||
    $("h2").first().text().trim() ||
    $("title").text().trim() ||
    "Sem título"
  );
}

function findMainContent($) {
  const selectors = [
    "main",
    "article",
    "#swagger-ui",
    ".swagger-ui",
    "#content",
    ".content",
    "body",
  ];

  for (const sel of selectors) {
    const el = $(sel).first();
    if (el.length && (el.html() || "").trim().length > 20) {
      return el.clone();
    }
  }

  return $("body").first().clone();
}

function cleanContent($, content, pageUrl) {
  content.find("script, style, noscript").remove();

  content.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    const resolved = normalizeUrl(href, pageUrl);
    if (resolved) $(el).attr("href", resolved);
  });

  return content;
}

function resolveHref(href, baseUrl) {
  if (!href) return null;
  if (href.startsWith("#")) return null;
  if (href.startsWith("javascript:")) return null;
  if (href.startsWith("mailto:")) return null;
  return normalizeUrl(href, baseUrl);
}

function extractLinks($, pageUrl, only) {
  const links = [];
  const seen = new Set();

  $("a[href], area[href], link[href]").each((_, el) => {
    const href = $(el).attr("href");
    const resolved = resolveHref(href, pageUrl);
    if (!resolved) return;
    if (!shouldCrawl(resolved, only)) return;
    if (seen.has(resolved)) return;

    seen.add(resolved);
    links.push(resolved);
  });

  return links;
}

function extractSwaggerSpecUrls(html, pageUrl) {
  const found = new Set();

  // SwaggerUIBundle({ url: "swagger.json" })
  const singleUrlRegex = /\burl\s*:\s*["']([^"']+)["']/gi;
  let match;
  while ((match = singleUrlRegex.exec(html)) !== null) {
    const resolved = normalizeUrl(match[1], pageUrl);
    if (resolved && /\.(json|ya?ml)$/i.test(new URL(resolved).pathname)) {
      found.add(resolved);
    }
  }

  // SwaggerUIBundle({ urls: [{url: "..."}, ...] })
  const urlsArrayRegex = /\burls\s*:\s*\[([\s\S]*?)\]/gi;
  while ((match = urlsArrayRegex.exec(html)) !== null) {
    const chunk = match[1];
    const urlInsideChunk = /\burl\s*:\s*["']([^"']+)["']/gi;
    let m2;
    while ((m2 = urlInsideChunk.exec(chunk)) !== null) {
      const resolved = normalizeUrl(m2[1], pageUrl);
      if (resolved && /\.(json|ya?ml)$/i.test(new URL(resolved).pathname)) {
        found.add(resolved);
      }
    }
  }

  // fallback: links diretos para specs
  const linkRegex = /["']([^"']*?(?:swagger|openapi|api-docs)[^"']*?\.(?:json|ya?ml))["']/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    const resolved = normalizeUrl(match[1], pageUrl);
    if (resolved) found.add(resolved);
  }

  return Array.from(found);
}

function isHtmlLike(contentType, url) {
  if ((contentType || "").toLowerCase().includes("text/html")) return true;
  const p = new URL(url).pathname.toLowerCase();
  return p.endsWith(".html") || p.endsWith(".htm") || p.endsWith("/") || !p.includes(".");
}

function urlToFileInfo(url, outputDir) {
  const u = new URL(url);

  const segments = u.pathname
    .split("/")
    .filter(Boolean)
    .map(sanitizeFilename)
    .filter(Boolean);

  let dirSegments = [];
  let filename = "index";

  if (segments.length === 0) {
    dirSegments = [];
    filename = "index";
  } else {
    const last = segments[segments.length - 1];
    const hasExt = /\.[A-Za-z0-9]+$/.test(last);

    if (hasExt) {
      dirSegments = segments.slice(0, -1);
      filename = last.replace(/\.(html?|json|ya?ml|xml|wadl|wsdl|txt)$/i, "");
      if (!filename) filename = "index";
    } else {
      dirSegments = segments;
      filename = "index";
    }
  }

  if (u.search) {
    const query = sanitizeFilename(u.search.slice(1).replace(/&/g, "__"));
    if (query) filename += `__${query}`;
  }

  filename = sanitizeFilename(filename) + ".md";
  const filePath = path.join(outputDir, ...dirSegments, filename);
  const relPath = path.relative(outputDir, filePath);

  return { filePath, relPath, filename };
}

function htmlToMarkdown(html, pageUrl, title) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const turndown = createTurndownService();
  const content = findMainContent($);
  cleanContent($, content, pageUrl);

  let md = "";
  try {
    md = turndown.turndown(content.html() || "");
  } catch {
    md = "*[Erro ao converter conteúdo]*";
  }

  md = md.replace(/\n{4,}/g, "\n\n\n").replace(/[ \t]+\n/g, "\n");

  return [
    `# ${title}`,
    "",
    `> **Fonte:** [${pageUrl}](${pageUrl})`,
    "",
    "---",
    "",
    md.trim() || "*[Conteúdo vazio]*",
    "",
  ].join("\n");
}

function textDocToMarkdown(text, pageUrl) {
  const title = path.basename(new URL(pageUrl).pathname) || "documento";

  return [
    `# ${title}`,
    "",
    `> **Fonte:** [${pageUrl}](${pageUrl})`,
    "",
    "---",
    "",
    "```",
    text.trim(),
    "```",
    "",
  ].join("\n");
}

function groupPagesByTopSection(entries) {
  const grouped = {};
  for (const entry of entries) {
    const key = entry.section || "root";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(entry);
  }
  return grouped;
}

function createConsolidatedIndex(outputDir) {
  const indexDir = path.join(outputDir, "index");
  if (fs.existsSync(indexDir)) {
    fs.rmSync(indexDir, { recursive: true });
  }
  fs.mkdirSync(indexDir, { recursive: true });

  const grouped = groupPagesByTopSection(pageIndex);
  const sectionEntries = [];

  for (const [section, entries] of Object.entries(grouped)) {
    const lines = [];
    lines.push(`# ${section}`);
    lines.push("");
    lines.push(`> **${entries.length} páginas**`);
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push("## Sumário");
    lines.push("");

    const sorted = [...entries].sort((a, b) => a.file.localeCompare(b.file));

    for (const entry of sorted) {
      lines.push(`- [${entry.title}](${encodeURIComponent(entry.file)})`);
    }

    lines.push("");
    lines.push("---");
    lines.push("");

    for (const entry of sorted) {
      const absolute = path.join(outputDir, entry.file);
      if (!fs.existsSync(absolute)) continue;
      const raw = fs.readFileSync(absolute, "utf-8");
      lines.push(raw.trim());
      lines.push("");
      lines.push("---");
      lines.push("");
    }

    const outName = sanitizeFilename(section) + ".md";
    const outPath = path.join(indexDir, outName);
    fs.writeFileSync(outPath, lines.join("\n"), "utf-8");

    sectionEntries.push({ section, file: outName, count: entries.length });
  }

  const idxLines = [
    "# 📚 Fluig API Docs — Índice Consolidado por Seção",
    "",
    `**Total de seções:** ${sectionEntries.length}`,
    `**Total de páginas:** ${pageIndex.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const s of sectionEntries) {
    idxLines.push(
      `- [${s.section}](${encodeURIComponent(s.file)}) — ${s.count} páginas`
    );
  }

  fs.writeFileSync(path.join(indexDir, "INDEX.md"), idxLines.join("\n") + "\n", "utf-8");
}

function createIndex(outputDir, sources) {
  const lines = [
    "# 📚 Fluig API Docs (latest + old)",
    "",
    "**Fontes:**",
    ...sources.map((s) => `- [${s}](${s})`),
    "",
    `**Total de páginas:** ${pageIndex.length}`,
    `**Páginas com erro:** ${failedPages.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const entry of pageIndex) {
    const indent = "  ".repeat(entry.depth);
    lines.push(`${indent}- [${entry.title}](${entry.file.replace(/ /g, "%20")})`);
  }

  if (failedPages.length > 0) {
    lines.push("", "---", "", "## ⚠️ Páginas com erro", "");
    for (const fp of failedPages) {
      lines.push(`- [${fp.url}](${fp.url}) — ${fp.reason}`);
    }
  }

  fs.writeFileSync(path.join(outputDir, "INDEX.md"), lines.join("\n") + "\n", "utf-8");
}

function createManifest(outputDir, sources) {
  const manifest = {
    sources,
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

async function crawl(config, sources) {
  const queue = sources.map((url) => ({ url, depth: 0 }));

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item || !item.url) continue;

    const { url, depth } = item;

    if (visited.has(url)) continue;
    if (depth > config.maxDepth) continue;
    if (config.maxPages > 0 && totalSaved >= config.maxPages) break;

    visited.add(url);

    log(depth, "📄", url);

    const result = await fetchUrl(url, config.delay);
    if (!result) {
      failedPages.push({ url, depth, reason: "fetch error" });
      log(depth, "❌", "falha ao carregar");
      continue;
    }

    const finalUrl = normalizeUrl(result.finalUrl, url) || url;
    const section = getSectionFromUrl(finalUrl);

    let markdown;
    let title;
    let links = [];

    if (isHtmlLike(result.contentType, finalUrl)) {
      const $ = cheerio.load(result.text, { decodeEntities: false });
      title = extractTitle($);
      markdown = htmlToMarkdown(result.text, finalUrl, title);
      links = extractLinks($, finalUrl, config.only);

      // Em páginas swagger-ui, descobrir swagger.json/openapi e enfileirar
      if (new URL(finalUrl).pathname.includes("/swagger-ui")) {
        const specs = extractSwaggerSpecUrls(result.text, finalUrl).filter((u) =>
          shouldCrawl(u, config.only)
        );
        for (const spec of specs) {
          if (!visited.has(spec)) {
            queue.push({ url: spec, depth: depth + 1 });
          }
        }
      }
    } else {
      title = path.basename(new URL(finalUrl).pathname) || "documento";
      markdown = textDocToMarkdown(result.text, finalUrl);
    }

    const { filePath, relPath } = urlToFileInfo(finalUrl, config.output);
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, markdown, "utf-8");

    // dump flat
    const dumpDir = path.join(config.output, "dump");
    fs.mkdirSync(dumpDir, { recursive: true });
    const dumpName = sanitizeFilename(
      `${section}_${new URL(finalUrl).pathname}_${new URL(finalUrl).search}`
    );
    fs.writeFileSync(path.join(dumpDir, `${dumpName}.md`), markdown, "utf-8");

    pageIndex.push({
      title,
      url: finalUrl,
      file: relPath,
      depth,
      section,
      linksFound: links.length,
    });

    totalSaved++;
    log(depth, "✅", `${relPath} (${links.length} links)`);

    for (const nextUrl of links) {
      if (visited.has(nextUrl)) continue;
      queue.push({ url: nextUrl, depth: depth + 1 });
    }

    if (config.verbose) {
      log(depth, "📥", `Fila pendente: ${queue.length}`);
    }
  }
}

async function main() {
  const config = parseArgs();
  fs.mkdirSync(config.output, { recursive: true });

  const sources = buildSources(config.only);

  console.log("=".repeat(70));
  console.log("🚀 Scraper Fluig API Docs (latest + old)");
  console.log("=".repeat(70));
  console.log(`  Fontes:           ${sources.join(" | ")}`);
  console.log(`  Saída:            ${config.output}`);
  console.log(`  Escopo:           ${config.only}`);
  console.log(`  Max páginas:      ${config.maxPages === 0 ? "todas" : config.maxPages}`);
  console.log(`  Max profundidade: ${config.maxDepth}`);
  console.log(`  Delay:            ${config.delay}ms`);
  console.log("=".repeat(70));
  console.log();

  await crawl(config, sources);

  createConsolidatedIndex(config.output);
  createIndex(config.output, sources);
  createManifest(config.output, sources);

  console.log();
  console.log("=".repeat(70));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Páginas salvas:   ${pageIndex.length}`);
  console.log(`  ❌ Páginas com erro: ${failedPages.length}`);
  console.log(`  📁 Diretório:        ${config.output}`);
  console.log("=".repeat(70));
}

if (require.main === module) {
  main().catch((err) => {
    console.error("💥 Erro fatal:", err);
    process.exit(1);
  });
}

module.exports = {
  DEFAULT_SOURCES,
  extractSwaggerSpecUrls,
  groupPagesByTopSection,
  buildSources,
};
