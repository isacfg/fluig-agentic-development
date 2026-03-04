#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: TOTVS Fluig - Desenvolvimento sobre a Plataforma
 * =============================================================================
 * Faz scrape recursivo de todas as páginas e subpáginas da documentação de
 * desenvolvimento Fluig no TDN, criando arquivos Markdown organizados.
 *
 * Uso:
 *   npm install axios cheerio turndown
 *   node scrape_fluig_docs.js [--max-depth 3] [--delay 1500] [--output ./fluig_docs]
 *
 * =============================================================================
 */

const axios = require("axios");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

// ===========================================================================
// Configuração
// ===========================================================================

const BASE_URL = "https://tdn.totvs.com";
const START_URL = `${BASE_URL}/display/public/fluig/Desenvolvimento+sobre+a+plataforma`;

const KNOWN_CHILD_PAGES = [
  { url: "/display/public/fluig/Primeiros+passos", title: "Primeiros passos" },
  { url: "/display/public/fluig/Fluig+Studio", title: "Fluig Studio" },
  { url: "/display/public/fluig/Guia+de+Estilos", title: "Guia de Estilos" },
  { url: "/pages/viewpage.action?pageId=840778303", title: "Integrações" },
  { url: "/pages/viewpage.action?pageId=146181468", title: "Fluig Serviços" },
  {
    url: "/display/public/fluig/Desenvolvimento+de+Eventos",
    title: "Desenvolvimento de Eventos",
  },
  {
    url: "/display/public/fluig/Desenvolvimento+de+Datasets",
    title: "Desenvolvimento de Datasets",
  },
  {
    url: "/pages/viewpage.action?pageId=840778342",
    title: "Desenvolvimento de Páginas/Widgets (WCM)",
  },
  {
    url: "/pages/viewpage.action?pageId=73084007",
    title: "Utilização de Webservices",
  },
  {
    url: "/display/public/fluig/Aceleradores+de+desenvolvimento+Fluig",
    title: "Aceleradores de desenvolvimento Fluig",
  },
  {
    url: "/display/public/fluig/Guia+de+Propriedades+dos+Objetos",
    title: "Guia de Propriedades dos Objetos",
  },
  {
    url: "/pages/viewpage.action?pageId=976127718",
    title: "Principais Mudanças de Front-end - Fluig Voyager 2.0.0",
  },
  {
    url: "/pages/viewpage.action?pageId=867141925",
    title: "Documentação para desenvolvedores Fluig",
  },
];

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

// ===========================================================================
// Parse de argumentos CLI
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./fluig_docs",
    maxDepth: 100,
    delay: 100,
    verbose: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--output":
      case "-o":
        config.output = args[++i];
        break;
      case "--max-depth":
      case "-d":
        config.maxDepth = parseInt(args[++i], 10);
        break;
      case "--delay":
        config.delay = parseInt(args[++i], 10);
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_fluig_docs.js [opções]

Opções:
  -o, --output <dir>    Diretório de saída (default: ./fluig_docs)
  -d, --max-depth <n>   Profundidade máxima (default: 3)
      --delay <ms>      Delay entre requests em ms (default: 1500)
  -v, --verbose         Logs detalhados
  -h, --help            Mostra esta ajuda
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
  name = decodeURIComponent(name);
  name = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
  name = name.replace(/\s+/g, "_");
  name = name.replace(/_+/g, "_");
  name = name.replace(/^[_. ]+|[_. ]+$/g, "");
  return name.substring(0, 150);
}

function normalizeUrl(url) {
  if (url.startsWith("/")) url = BASE_URL + url;
  const hashIdx = url.indexOf("#");
  if (hashIdx !== -1) url = url.substring(0, hashIdx);
  url = url.replace(/\/+$/, "");
  return url;
}

function isFluigDocUrl(url) {
  url = normalizeUrl(url);
  if (!url.includes("tdn.totvs.com")) return false;
  if (url.includes("login.action")) return false;
  if (!url.includes("/fluig/") && !url.includes("key=fluig")) return false;
  return url.includes("/display/") || url.includes("viewpage.action");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
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

  // Regra customizada: preservar blocos de código Confluence
  td.addRule("confluenceCode", {
    filter: (node) => {
      return (
        node.nodeName === "DIV" &&
        node.getAttribute("class") &&
        node.getAttribute("class").includes("code panel")
      );
    },
    replacement: (content, node) => {
      const pre = node.querySelector("pre");
      if (pre) {
        const lang =
          node.getAttribute("class")?.match(/language-(\w+)/)?.[1] || "";
        return `\n\`\`\`${lang}\n${pre.textContent.trim()}\n\`\`\`\n`;
      }
      return content;
    },
  });

  // Remove imagens de ícones do Confluence
  td.addRule("removeConfluenceIcons", {
    filter: (node) => {
      if (node.nodeName !== "IMG") return false;
      const src = node.getAttribute("src") || "";
      return (
        src.includes("/images/icons/") ||
        src.includes("emoticons/") ||
        src.includes("attachments/")
      );
    },
    replacement: () => "",
  });

  return td;
}

// ===========================================================================
// Fetch
// ===========================================================================

async function fetchPage(url, delay, retries = 3) {
  url = normalizeUrl(url);

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await sleep(delay);
      const resp = await axios.get(url, {
        headers: HEADERS,
        timeout: 30000,
        maxRedirects: 5,
        validateStatus: (status) => status < 500,
      });

      if (resp.status === 404) {
        log(0, "⚠️", `404 Not Found: ${url}`);
        return null;
      }
      if (resp.status === 429) {
        const wait = delay * (attempt + 2);
        log(0, "⏳", `Rate limited. Aguardando ${wait}ms...`);
        await sleep(wait);
        continue;
      }
      if (resp.status >= 400) {
        log(0, "❌", `HTTP ${resp.status}: ${url}`);
        if (attempt < retries - 1) continue;
        return null;
      }

      return cheerio.load(resp.data);
    } catch (err) {
      log(
        0,
        "❌",
        `Erro (tentativa ${attempt + 1}/${retries}): ${err.message}`
      );
      if (attempt < retries - 1) await sleep(delay * 2);
    }
  }
  return null;
}

// ===========================================================================
// Extração
// ===========================================================================

function extractTitle($) {
  // Título principal do Confluence
  const titleEl = $("#title-text");
  if (titleEl.length) {
    const aTag = titleEl.find("a");
    if (aTag.length) return aTag.text().trim();
    return titleEl.text().trim();
  }

  // Fallback h1
  const h1 = $("h1").first();
  if (h1.length) return h1.text().trim();

  // Fallback title tag
  const titleTag = $("title").text().trim();
  return titleTag
    .replace(/ - TOTVS Fluig - TDN$/, "")
    .replace(/ - TDN$/, "")
    .trim() || "Sem_Titulo";
}

function extractMainContent($) {
  const selectors = [
    "#main-content",
    ".wiki-content",
    ".page-content",
    "main",
    "#main",
  ];

  for (const sel of selectors) {
    const el = $(sel);
    if (el.length && el.html().trim().length > 50) return el;
  }
  return null;
}

function cleanContent($, content) {
  // Remove noise
  content.find("script, style, nav, noscript").remove();

  const removeClasses = [
    "page-metadata",
    "labels-section",
    "content-metadata-section",
    "plugin_pagetree",
    "expand-control",
    "aui-button",
    "page-restrictions",
  ];
  for (const cls of removeClasses) {
    content.find(`[class*="${cls}"]`).remove();
  }

  const removeIds = [
    "likes-and-labels-container",
    "comments-section",
    "page-metadata-banner",
    "footer",
  ];
  for (const id of removeIds) {
    content.find(`#${id}`).remove();
  }

  return content;
}

function htmlToMarkdown($, content, title, sourceUrl) {
  const cleaned = cleanContent($, content);

  // Fix relative URLs
  cleaned.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (href && href.startsWith("/")) {
      $(el).attr("href", BASE_URL + href);
    }
  });

  const turndown = createTurndownService();
  let markdown = turndown.turndown(cleaned.html());

  // Limpeza final
  markdown = markdown.replace(/\n{4,}/g, "\n\n\n");
  markdown = markdown.replace(/[ \t]+\n/g, "\n");
  markdown = markdown.replace(
    /!\[.*?\]\(https?:\/\/tdn\.totvs\.com\/images\/icons\/.*?\)/g,
    ""
  );
  markdown = markdown.replace(/!\[\]\(.*?\)/g, "");
  markdown = markdown.replace(/\n[ \t]+\n/g, "\n\n");

  const header =
    `# ${title}\n\n` +
    `> **Fonte:** [${sourceUrl}](${sourceUrl})\n\n` +
    `---\n\n`;

  return header + markdown.trim() + "\n";
}

function extractChildLinks($) {
  const links = new Map();
  const content = extractMainContent($);
  if (!content) return [];

  content.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    const fullUrl = normalizeUrl(href);

    if (isFluigDocUrl(fullUrl) && !visited.has(fullUrl) && !links.has(fullUrl)) {
      const text = $(el).text().trim();
      if (text) {
        links.set(fullUrl, { url: fullUrl, title: text });
      }
    }
  });

  return Array.from(links.values());
}

function extractTreeLinks($) {
  const links = new Map();
  const tree = $(".plugin_pagetree, .plugin_pagetree_children_list").first();
  if (!tree.length) return [];

  tree.find("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    const fullUrl = normalizeUrl(href);

    if (isFluigDocUrl(fullUrl) && !visited.has(fullUrl) && !links.has(fullUrl)) {
      const text = $(el).text().trim();
      if (text) {
        links.set(fullUrl, { url: fullUrl, title: text });
      }
    }
  });

  return Array.from(links.values());
}

function getPageId($) {
  const meta = $('meta[name="ajs-page-id"]');
  if (meta.length) return meta.attr("content");

  let pageId = null;
  $("script").each((_, el) => {
    const text = $(el).html() || "";
    const match = text.match(/pageId["'\s:=]+["']?(\d+)/);
    if (match) pageId = match[1];
  });

  return pageId;
}

async function fetchRestChildren(pageId, delay) {
  const apiUrl = `${BASE_URL}/rest/api/content/${pageId}/child/page?limit=100&expand=metadata.labels`;
  try {
    await sleep(Math.floor(delay / 3));
    const resp = await axios.get(apiUrl, {
      headers: HEADERS,
      timeout: 15000,
      validateStatus: (s) => s < 500,
    });

    if (resp.status === 200 && resp.data?.results) {
      return resp.data.results.map((r) => {
        const webui = r._links?.webui || "";
        const childUrl = webui
          ? `${BASE_URL}${webui}`
          : `${BASE_URL}/pages/viewpage.action?pageId=${r.id}`;
        return {
          url: normalizeUrl(childUrl),
          title: r.title || "",
          pageId: r.id,
        };
      });
    }
  } catch (err) {
    // silently fail - REST is a bonus strategy
  }
  return [];
}

// ===========================================================================
// Scraping Recursivo
// ===========================================================================

async function scrapePage(url, depth, parentDir, config) {
  url = normalizeUrl(url);

  if (visited.has(url)) return;
  if (depth > config.maxDepth) {
    log(depth, "⚠️", `Max depth atingido`);
    return;
  }

  visited.add(url);

  const shortName = url.includes("/fluig/")
    ? decodeURIComponent(url.split("/fluig/").pop())
    : url;
  log(depth, "📄", `[${depth}] ${shortName}`);

  const $ = await fetchPage(url, config.delay);
  if (!$) {
    failedPages.push({ url, depth, reason: "fetch error" });
    return;
  }

  const title = extractTitle($);
  const content = extractMainContent($);

  if (!content) {
    log(depth, "⚠️", `Sem conteúdo: ${title}`);
    failedPages.push({ url, depth, reason: "no content" });
    return;
  }

  // Converte e salva
  const markdown = htmlToMarkdown($, content, title, url);
  const filename = sanitizeFilename(title) + ".md";
  const outDir = parentDir ? path.join(config.output, parentDir) : config.output;
  fs.mkdirSync(outDir, { recursive: true });
  const filepath = path.join(outDir, filename);

  fs.writeFileSync(filepath, markdown, "utf-8");

  // Salva também na pasta dump
  const dumpDir = path.join(config.output, "dump");
  fs.mkdirSync(dumpDir, { recursive: true });
  const dumpPath = path.join(dumpDir, filename);
  fs.writeFileSync(dumpPath, markdown, "utf-8");

  const relPath = path.relative(config.output, filepath);
  pageIndex.push({ title, url, file: relPath, depth });
  log(depth, "✅", relPath);

  // Descobre subpáginas (3 estratégias)
  const contentLinks = extractChildLinks($);
  const treeLinks = extractTreeLinks($);

  const pageId = getPageId($);
  const restLinks = pageId
    ? await fetchRestChildren(pageId, config.delay)
    : [];

  // Merge e deduplica
  const allLinks = new Map();
  for (const link of [...contentLinks, ...treeLinks, ...restLinks]) {
    const lUrl = normalizeUrl(link.url);
    if (!visited.has(lUrl) && !allLinks.has(lUrl)) {
      allLinks.set(lUrl, link);
    }
  }

  if (allLinks.size > 0) {
    const childDir = parentDir
      ? path.join(parentDir, sanitizeFilename(title))
      : sanitizeFilename(title);
    log(depth, "📂", `${allLinks.size} subpáginas encontradas`);

    for (const [childUrl, childInfo] of allLinks) {
      await scrapePage(childUrl, depth + 1, childDir, config);
    }
  }
}

// ===========================================================================
// Índice e Manifest
// ===========================================================================

function createIndex(outputDir) {
  let lines = [
    "# 📚 Documentação Fluig - Desenvolvimento sobre a Plataforma\n",
    "",
    `**Total de páginas:** ${pageIndex.length}`,
    `**Páginas com erro:** ${failedPages.length}`,
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
      lines.push(`- [${fp.url}](${fp.url}) — ${fp.reason || "fetch error"}`);
    }
  }

  const indexPath = path.join(outputDir, "INDEX.md");
  fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\n📋 Índice criado: ${indexPath}`);
}

function createManifest(outputDir) {
  const manifest = {
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
  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(65));
  console.log("🚀 Scraper Fluig - Desenvolvimento sobre a Plataforma");
  console.log("=".repeat(65));
  console.log(`  URL:            ${START_URL}`);
  console.log(`  Saída:          ${config.output}`);
  console.log(`  Max depth:      ${config.maxDepth}`);
  console.log(`  Delay:          ${config.delay}ms`);
  console.log("=".repeat(65));
  console.log();

  // 1. Scrape da página raiz
  await scrapePage(START_URL, 0, "", config);

  // 2. Garante que páginas conhecidas sejam processadas
  for (const child of KNOWN_CHILD_PAGES) {
    const childUrl = normalizeUrl(child.url);
    if (!visited.has(childUrl)) {
      log(0, "📌", `Página conhecida: ${child.title}`);
      await scrapePage(
        childUrl,
        1,
        sanitizeFilename("Desenvolvimento sobre a plataforma"),
        config
      );
    }
  }

  // 3. Índice e manifest
  createIndex(config.output);
  createManifest(config.output);

  // 4. Resumo
  console.log();
  console.log("=".repeat(65));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Páginas salvas:   ${pageIndex.length}`);
  console.log(`  ❌ Páginas com erro: ${failedPages.length}`);
  console.log(`  📁 Diretório:        ${config.output}`);
  console.log("=".repeat(65));

  if (failedPages.length > 0) {
    console.log(`\n⚠️  ${failedPages.length} páginas falharam:`);
    for (const fp of failedPages.slice(0, 10)) {
      console.log(`   - ${fp.url}`);
    }
    if (failedPages.length > 10) {
      console.log(`   ... e mais ${failedPages.length - 10}`);
    }
  }
}

main().catch((err) => {
  console.error("💥 Erro fatal:", err);
  process.exit(1);
});