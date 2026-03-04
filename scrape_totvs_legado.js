#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: API TOTVS Legado (apitotvslegado.z15.web.core.windows.net)
 * =============================================================================
 * Faz crawl completo da documentação pública, salva cada página em Markdown
 * e gera INDEX.md + manifest.json.
 *
 * Uso:
 *   npm install axios cheerio turndown
 *   node scrape_totvs_legado.js [--delay 200] [--output ./totvs_legado_docs]
 *
 * =============================================================================
 */

const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

// ===========================================================================
// Configuração
// ===========================================================================

const START_URL = "https://apitotvslegado.z15.web.core.windows.net/";
const BASE_HOST = new URL(START_URL).host;

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
};

// ===========================================================================
// Estado
// ===========================================================================

const visited = new Set();
const pageIndex = [];
const failedPages = [];
let totalSaved = 0;

// ===========================================================================
// Parse de argumentos CLI
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./totvs_legado_docs",
    delay: 200,
    verbose: false,
    maxPages: 0, // 0 = sem limite
    maxDepth: 30,
    url: null,
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
      case "--url":
      case "-u":
        config.url = args[++i];
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_totvs_legado.js [opções]

Opções:
  -o, --output <dir>      Diretório de saída (default: ./totvs_legado_docs)
      --delay <ms>        Delay entre requests em ms (default: 200)
  -m, --max-pages <n>     Máximo de páginas (0 = todas, default: 0)
  -d, --max-depth <n>     Profundidade máxima de crawl (default: 30)
  -u, --url <url>         Raspa somente a URL informada (sem crawl)
  -v, --verbose           Logs detalhados
  -h, --help              Mostra esta ajuda
`);
        process.exit(0);
    }
  }

  config.output = path.resolve(config.output);
  return config;
}

// ===========================================================================
// Utilitários
// ===========================================================================

function sanitizeFilename(name) {
  try {
    name = decodeURIComponent(name);
  } catch {
    // manter original
  }
  name = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
  name = name.replace(/\s+/g, "_");
  name = name.replace(/_+/g, "_");
  name = name.replace(/^[_. ]+|[_. ]+$/g, "");
  return name.substring(0, 160);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

function normalizeUrl(url, base = START_URL) {
  try {
    const u = new URL(url, base);

    if (!["http:", "https:"].includes(u.protocol)) return null;
    if (u.host !== BASE_HOST) return null;

    u.hash = "";

    // Normalização simples
    if (u.pathname !== "/") {
      u.pathname = u.pathname.replace(/\/+/g, "/").replace(/\/$/, "");
      if (u.pathname === "") u.pathname = "/";
    }

    return u.toString();
  } catch {
    return null;
  }
}

function shouldCrawl(url) {
  try {
    const u = new URL(url);
    if (u.host !== BASE_HOST) return false;

    const p = u.pathname.toLowerCase();
    if (p === "/") return true;

    // Foca em páginas de documentação
    if (p.endsWith(".html") || p.endsWith(".htm")) return true;

    // Alguns servidores servem sem extensão
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
  if (c.includes("iso-8859-1") || c.includes("latin1") || c.includes("windows-1252")) {
    return "latin1";
  }
  return "utf8";
}

function decodeHtml(buffer, contentType) {
  let html = buffer.toString(guessEncodingFromHeaders(contentType));

  // Heurística para páginas antigas em Latin1
  const suspicious = (html.match(/Ã|Â|�/g) || []).length;
  if (suspicious > 20) {
    const latin = buffer.toString("latin1");
    const betterSuspicious = (latin.match(/Ã|Â|�/g) || []).length;
    if (betterSuspicious < suspicious) {
      html = latin;
    }
  }

  return html;
}

function resolveHref(href, baseUrl) {
  if (!href) return null;
  if (href.startsWith("#")) return null;
  if (href.startsWith("javascript:")) return null;
  if (href.startsWith("mailto:")) return null;
  return normalizeUrl(href, baseUrl);
}

// ===========================================================================
// Turndown (HTML → Markdown)
// ===========================================================================

function createTurndownService() {
  const td = new TurndownService({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    fence: "```",
    emDelimiter: "*",
    strongDelimiter: "**",
  });

  // Preservar tabelas em HTML (evita perda de estrutura)
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

// ===========================================================================
// Fetch
// ===========================================================================

async function fetchPage(url, delay, retries = 3) {
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
        const html = decodeHtml(Buffer.from(resp.data), resp.headers["content-type"]);
        return {
          html,
          finalUrl: normalizeUrl(resp.request?.res?.responseUrl || url) || url,
        };
      }

      if (resp.status === 404) {
        return null;
      }

      if (resp.status === 429) {
        const wait = delay * (attempt + 3);
        log(0, "⏳", `Rate limited. Aguardando ${wait}ms...`);
        await sleep(wait);
        continue;
      }

      if (resp.status >= 400) {
        if (attempt < retries - 1) {
          await sleep(delay * 2);
          continue;
        }
        return null;
      }
    } catch (err) {
      if (attempt < retries - 1) {
        await sleep(delay * 2);
        continue;
      }
      return null;
    }
  }
  return null;
}

// ===========================================================================
// Extração
// ===========================================================================

function extractTitle($) {
  const h1 = $("h1").first().text().trim();
  if (h1) return h1;

  const h2 = $("h2").first().text().trim();
  if (h2) return h2;

  const t = $("title").text().trim();
  if (t) return t;

  return "Sem título";
}

function findMainContent($) {
  const selectors = [
    "main",
    "article",
    "#main-content",
    "#content",
    ".content",
    "body",
  ];

  for (const sel of selectors) {
    const el = $(sel).first();
    if (el.length && (el.html() || "").trim().length > 30) {
      return el.clone();
    }
  }

  return $("body").first().clone();
}

function cleanContent($, content) {
  content.find("script, style, noscript").remove();

  // Remove trechos muito comuns de navegação/redundância
  content
    .find("nav, header, footer, .breadcrumb, .breadcrumbs, .menu, .navbar")
    .remove();

  // Corrigir links relativos
  content.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    const abs = resolveHref(href, START_URL);
    if (abs) {
      $(el).attr("href", abs);
    }
  });

  return content;
}

function extractLinks($, pageUrl) {
  const links = [];
  const seen = new Set();

  $("a[href], area[href]").each((_, el) => {
    const href = $(el).attr("href");
    const resolved = resolveHref(href, pageUrl);
    if (!resolved) return;
    if (!shouldCrawl(resolved)) return;
    if (seen.has(resolved)) return;

    seen.add(resolved);
    links.push(resolved);
  });

  return links;
}

function urlToFileInfo(url, outputDir) {
  const u = new URL(url);

  const rawSegments = u.pathname
    .split("/")
    .filter(Boolean)
    .map(sanitizeFilename)
    .filter(Boolean);

  const dirSegments = rawSegments.length > 1 ? rawSegments.slice(0, -1) : [];

  const pathnameBase = rawSegments.length > 0
    ? rawSegments[rawSegments.length - 1].replace(/\.(html?|php|aspx?)$/i, "")
    : "index";

  let filename = pathnameBase || "index";

  if (u.search) {
    const queryPart = sanitizeFilename(u.search.slice(1).replace(/&/g, "__"));
    if (queryPart) {
      filename += `__${queryPart}`;
    }
  }

  filename = sanitizeFilename(filename) + ".md";

  const dir = path.join(outputDir, ...dirSegments);
  const filePath = path.join(dir, filename);
  const relPath = path.relative(outputDir, filePath);

  return { filePath, relPath, filename };
}

function pageToMarkdown(html, pageUrl, title) {
  const $ = cheerio.load(html, { decodeEntities: false });
  const turndown = createTurndownService();

  const content = findMainContent($);
  cleanContent($, content);

  let md = "";
  try {
    md = turndown.turndown(content.html() || "");
  } catch {
    md = "*[Erro ao converter conteúdo]*";
  }

  md = md.replace(/\n{4,}/g, "\n\n\n").replace(/[ \t]+\n/g, "\n");

  const lines = [
    `# ${title}`,
    "",
    `> **Fonte:** [${pageUrl}](${pageUrl})`,
    "",
    "---",
    "",
    md.trim() || "*[Conteúdo vazio]*",
    "",
  ];

  return lines.join("\n");
}

// ===========================================================================
// Crawl
// ===========================================================================

async function crawl(config) {
  const seedUrl = config.url || START_URL;
  const queue = [{ url: seedUrl, depth: 0 }];

  while (queue.length > 0) {
    const { url, depth } = queue.shift();

    if (visited.has(url)) continue;
    if (depth > config.maxDepth) continue;
    if (config.maxPages > 0 && totalSaved >= config.maxPages) break;

    visited.add(url);

    log(depth, "📄", url);

    const result = await fetchPage(url, config.delay);
    if (!result) {
      failedPages.push({ url, depth, reason: "fetch error" });
      log(depth, "❌", "falha ao carregar");
      continue;
    }

    const html = result.html;
    const finalUrl = result.finalUrl || url;

    const $ = cheerio.load(html, { decodeEntities: false });
    const title = extractTitle($);
    const links = extractLinks($, finalUrl);

    const markdown = pageToMarkdown(html, finalUrl, title);
    const { filePath, relPath, filename } = urlToFileInfo(finalUrl, config.output);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, markdown, "utf-8");

    // Dump (flat)
    const dumpDir = path.join(config.output, "dump");
    fs.mkdirSync(dumpDir, { recursive: true });
    const dumpBase = sanitizeFilename(
      `${new URL(finalUrl).pathname}_${path.basename(filename, ".md")}`
    );
    const dumpFile = path.join(dumpDir, `${dumpBase}.md`);
    fs.writeFileSync(dumpFile, markdown, "utf-8");

    pageIndex.push({
      title,
      url: finalUrl,
      file: relPath,
      depth,
      linksFound: links.length,
    });

    totalSaved++;
    log(depth, "✅", `${relPath} (${links.length} links)`);

    if (!config.url) {
      for (const nextUrl of links) {
        if (visited.has(nextUrl)) continue;
        queue.push({ url: nextUrl, depth: depth + 1 });
      }
    }

    if (config.verbose) {
      log(depth, "📥", `Fila pendente: ${queue.length}`);
    }
  }
}

// ===========================================================================
// Índice e Manifest
// ===========================================================================

function createIndex(outputDir, sourceUrl) {
  const lines = [
    "# 📚 API TOTVS Legado — Documentação raspada",
    "",
    `**Fonte:** [${sourceUrl}](${sourceUrl})`,
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
    const link = entry.file.replace(/ /g, "%20");
    lines.push(`${indent}- [${entry.title}](${link})`);
  }

  if (failedPages.length > 0) {
    lines.push("", "---", "", "## ⚠️ Páginas com erro", "");
    for (const fp of failedPages) {
      lines.push(`- [${fp.url}](${fp.url}) — ${fp.reason}`);
    }
  }

  const indexPath = path.join(outputDir, "INDEX.md");
  fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\n📋 Índice criado: ${indexPath}`);
}

function createManifest(outputDir, sourceUrl) {
  const manifest = {
    source: sourceUrl,
    total_pages: pageIndex.length,
    failed_pages: failedPages.length,
    scraped_at: new Date().toISOString(),
    pages: pageIndex,
    failed: failedPages,
  };

  const manifestPath = path.join(outputDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`📦 Manifest criado: ${manifestPath}`);
}

// ===========================================================================
// Main
// ===========================================================================

async function main() {
  const config = parseArgs();

  if (config.url) {
    const normalized = normalizeUrl(config.url, START_URL);
    if (!normalized || !shouldCrawl(normalized)) {
      console.error("❌ URL inválida para o domínio do TOTVS Legado.");
      process.exit(1);
    }
    config.url = normalized;
    config.maxPages = 1;
    config.maxDepth = 0;
  }

  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(70));
  console.log("🚀 Scraper API TOTVS Legado");
  console.log("=".repeat(70));
  console.log(`  URL:              ${config.url || START_URL}`);
  console.log(`  Saída:            ${config.output}`);
  console.log(`  Max páginas:      ${config.maxPages === 0 ? "todas" : config.maxPages}`);
  console.log(`  Max profundidade: ${config.maxDepth}`);
  console.log(`  Delay:            ${config.delay}ms`);
  console.log("=".repeat(70));
  console.log();

  await crawl(config);

  createIndex(config.output, config.url || START_URL);
  createManifest(config.output, config.url || START_URL);

  console.log();
  console.log("=".repeat(70));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Páginas salvas:   ${pageIndex.length}`);
  console.log(`  ❌ Páginas com erro: ${failedPages.length}`);
  console.log(`  📁 Diretório:        ${config.output}`);
  console.log("=".repeat(70));
}

main().catch((err) => {
  console.error("💥 Erro fatal:", err);
  process.exit(1);
});
