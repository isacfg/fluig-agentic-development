#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: TOTVS Backoffice (Linha RM) — Central de Atendimento (Zendesk HC)
 * =============================================================================
 * Faz scrape recursivo de todas as seções e artigos da Central de Atendimento
 * TOTVS para a Linha RM, convertendo o conteúdo HTML em Markdown organizado
 * por seção/subseção.
 *
 * Usa Puppeteer + Stealth para contornar proteção Cloudflare.
 *
 * Funcionalidades:
 *   - Descoberta recursiva de subseções (sem limite de profundidade)
 *   - Paginação automática de artigos dentro de cada seção
 *   - Segue links para artigos em outros domínios TOTVS (TDN, etc.)
 *   - Gera índice consolidado por seção (pasta /index)
 *   - Gera dump flat de todos os artigos (pasta /dump)
 *
 * Uso:
 *   PUPPETEER_SKIP_DOWNLOAD=true npm install puppeteer puppeteer-core \
 *     puppeteer-extra puppeteer-extra-plugin-stealth cheerio turndown
 *   node scrape_totvs_rm.js [--delay 800] [--output ./totvs_rm_docs]
 *
 * =============================================================================
 */

const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const cheerio = require("cheerio");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

puppeteer.use(StealthPlugin());

// ===========================================================================
// Configuração
// ===========================================================================

const BASE_URL = "https://centraldeatendimento.totvs.com";
const START_SECTION =
  "/hc/pt-br/sections/1500000830262-TOTVS-Gest%C3%A3o-de-Estoque-Compras-e-Faturamento-NUCLEUS";

// Domínios permitidos para seguir links de artigos
const ALLOWED_DOMAINS = [
  "centraldeatendimento.totvs.com",
  "tdn.totvs.com",
  "tdn.engpro.totvs.com.br",
  "totvscst.zendesk.com",
  "totvssuporte.zendesk.com",
];

// ===========================================================================
// Estado global
// ===========================================================================

const articleIndex = [];
const failedArticles = [];
const visitedSections = new Set();
const visitedArticles = new Set();
let totalArticlesSaved = 0;

/** @type {import('puppeteer').Browser} */
let browser = null;
/** @type {import('puppeteer').Page} */
let page = null;

// ===========================================================================
// Parse de argumentos CLI
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./totvs_rm_docs",
    delay: 800,
    verbose: false,
    maxArticles: 0,
    maxDepth: 20,
    followExternal: true,
    headless: true,
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
      case "--max-articles":
      case "-m":
        config.maxArticles = parseInt(args[++i], 10);
        break;
      case "--max-depth":
        config.maxDepth = parseInt(args[++i], 10);
        break;
      case "--no-external":
        config.followExternal = false;
        break;
      case "--no-headless":
        config.headless = false;
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_totvs_rm.js [opções]

Opções:
  -o, --output <dir>         Diretório de saída (default: ./totvs_rm_docs)
  -m, --max-articles <n>     Máximo de artigos por seção (0 = todos, default: 0)
      --delay <ms>           Delay entre requests em ms (default: 800)
      --max-depth <n>        Profundidade máxima de subseções (default: 20)
      --no-external          Não seguir links para outros domínios TOTVS
      --no-headless          Mostrar o navegador (útil para debug)
  -v, --verbose              Logs detalhados
  -h, --help                 Mostra esta ajuda
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
  try { name = decodeURIComponent(name); } catch { /* keep original */ }
  name = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_");
  name = name.replace(/\s+/g, "_");
  name = name.replace(/_+/g, "_");
  name = name.replace(/^[_. ]+|[_. ]+$/g, "");
  return name.substring(0, 150);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function resolveUrl(href, baseUrl) {
  if (!href) return null;
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return null;
  }
}

function getDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

function isAllowedDomain(url) {
  const domain = getDomain(url);
  if (!domain) return false;
  return ALLOWED_DOMAINS.some(
    (d) => domain === d || domain.endsWith("." + d)
  );
}

function articleIdFromUrl(url) {
  const match = url.match(/articles\/(\d+)/);
  return match ? match[1] : null;
}

function sectionIdFromUrl(url) {
  const match = url.match(/sections\/(\d+)/);
  return match ? match[1] : null;
}

function cleanSectionUrl(url) {
  return url.split("?")[0].split("#")[0];
}

// ===========================================================================
// Browser: inicializar e navegar
// ===========================================================================

async function initBrowser(config) {
  log(0, "🌐", "Iniciando navegador...");
  browser = await puppeteer.launch({
    headless: config.headless ? "new" : false,
    executablePath: "/usr/bin/google-chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--window-size=1920,1080",
      "--lang=pt-BR",
    ],
    defaultViewport: { width: 1920, height: 1080 },
  });

  page = await browser.newPage();

  // Configurar idioma
  await page.setExtraHTTPHeaders({
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
  });

  // Bloquear recursos pesados que não precisamos
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const resourceType = req.resourceType();
    if (["image", "media", "font"].includes(resourceType)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  log(0, "✅", "Navegador iniciado");
}

async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
    page = null;
  }
}

/**
 * Navega para uma URL, aguarda o conteúdo carregar e retorna o HTML.
 * Lida com challenges do Cloudflare esperando o conteúdo real aparecer.
 */
async function navigateAndGetHtml(url, delay, retries = 3) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await sleep(delay);

      const response = await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });

      if (!response) {
        log(0, "❌", `Sem resposta: ${url}`);
        if (attempt < retries - 1) continue;
        return null;
      }

      const status = response.status();

      // Se Cloudflare challenge, esperar resolver
      if (status === 403 || status === 503) {
        log(
          0,
          "🔄",
          `Challenge CF (${status}), aguardando resolução... (tentativa ${
            attempt + 1
          })`
        );
        // Esperar pelo Cloudflare resolver o challenge JS
        await sleep(8000);
        // Recarregar depois de esperar
        try {
          await page.reload({ waitUntil: "networkidle2", timeout: 30000 });
          await sleep(3000);
        } catch {
          // ignorar timeout de reload
        }

        // Verificar se passou
        const html = await page.content();
        if (
          html.includes("article") ||
          html.includes("section") ||
          html.includes("Seguir")
        ) {
          return { html, finalUrl: page.url() };
        }

        if (attempt < retries - 1) {
          await sleep(delay * 3);
          continue;
        }
        return null;
      }

      if (status === 404) {
        log(0, "⚠️", `404 Not Found: ${url}`);
        return null;
      }

      if (status >= 400) {
        log(0, "❌", `HTTP ${status}: ${url}`);
        if (attempt < retries - 1) {
          await sleep(delay * 2);
          continue;
        }
        return null;
      }

      // Esperar conteúdo principal aparecer
      try {
        await page.waitForSelector(
          "h1, .article-title, .section-tree, a[href*='sections'], a[href*='articles']",
          { timeout: 10000 }
        );
      } catch {
        // Continuar mesmo sem seletor
      }

      // Pequena pausa extra para JS renderizar
      await sleep(1000);

      const html = await page.content();
      const finalUrl = page.url();

      return { html, finalUrl };
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

  // Preservar blocos de código
  td.addRule("codeBlocks", {
    filter: (node) =>
      node.nodeName === "PRE" && node.querySelector("code"),
    replacement: (content, node) => {
      const code = node.querySelector("code");
      if (code) {
        const lang =
          (code.getAttribute("class") || "")
            .replace("lang-", "")
            .replace("language-", "")
            .split(" ")[0] || "";
        return `\n\`\`\`${lang}\n${code.textContent.trim()}\n\`\`\`\n`;
      }
      return content;
    },
  });

  // Imagens — preservar com URL completa
  td.addRule("images", {
    filter: "img",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "Imagem";
      if (!src) return "";
      const fullSrc = src.startsWith("/") ? `${BASE_URL}${src}` : src;
      return `\n![${alt}](${fullSrc})\n`;
    },
  });

  // Remover scripts e estilos
  td.addRule("removeJunk", {
    filter: ["script", "style", "noscript"],
    replacement: () => "",
  });

  // Iframes (vídeos)
  td.addRule("iframes", {
    filter: "iframe",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      return src ? `\n[🎥 Vídeo](${src})\n` : "";
    },
  });

  return td;
}

// ===========================================================================
// Descobrir subseções de uma seção
// ===========================================================================

function extractSubsectionsFromHtml(html, sectionUrl) {
  const $ = cheerio.load(html);
  const subsections = [];
  const seen = new Set();
  const selfId = sectionIdFromUrl(sectionUrl);

  // Coletar links de breadcrumbs para excluí-los
  const breadcrumbIds = new Set();
  $(".breadcrumbs a, nav[aria-label] a, ol.breadcrumb a").each((_, el) => {
    const href = $(el).attr("href") || "";
    const bid = sectionIdFromUrl(href);
    if (bid) breadcrumbIds.add(bid);
  });

  // Coletar links para subseções
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;

    const fullUrl = resolveUrl(href, sectionUrl);
    if (!fullUrl) return;
    if (!fullUrl.includes("/hc/pt-br/sections/")) return;

    const targetId = sectionIdFromUrl(fullUrl);
    if (!targetId || targetId === selfId) return;
    if (breadcrumbIds.has(targetId)) return;

    const cleanUrl = cleanSectionUrl(fullUrl);
    if (seen.has(cleanUrl)) return;
    seen.add(cleanUrl);

    const name = $(el).text().trim();
    if (!name || name === "›" || name === "»" || name.length < 2) return;

    subsections.push({
      url: cleanUrl,
      name,
      id: targetId,
    });
  });

  return subsections;
}

// ===========================================================================
// Descobrir artigos de uma seção (com paginação)
// ===========================================================================

function extractArticlesFromHtml(html, sectionUrl) {
  const $ = cheerio.load(html);
  const articles = [];
  const seenIds = new Set();

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;

    const fullUrl = resolveUrl(href, sectionUrl);
    if (!fullUrl) return;
    if (!fullUrl.includes("/hc/pt-br/articles/")) return;

    const artId = articleIdFromUrl(fullUrl);
    if (!artId || seenIds.has(artId)) return;
    seenIds.add(artId);

    const title = $(el).text().trim();
    if (!title || title.length < 3) return;

    articles.push({
      id: artId,
      title,
      url: fullUrl.split("#")[0],
    });
  });

  return articles;
}

function hasNextPage(html, currentPage) {
  const $ = cheerio.load(html);
  let found = false;
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (
      href.includes(`page=${currentPage + 1}`) &&
      href.includes("sections/")
    ) {
      found = true;
      return false;
    }
  });
  return found;
}

async function discoverAllArticles(sectionUrl, config) {
  const allArticles = [];
  const seenIds = new Set();
  let currentPage = 1;
  let hasMore = true;

  while (hasMore) {
    const pageUrl =
      currentPage === 1
        ? sectionUrl
        : `${sectionUrl}?page=${currentPage}#articles`;

    const result = await navigateAndGetHtml(pageUrl, config.delay);
    if (!result) break;

    const pageArticles = extractArticlesFromHtml(result.html, sectionUrl);
    let newCount = 0;
    for (const art of pageArticles) {
      if (!seenIds.has(art.id)) {
        seenIds.add(art.id);
        allArticles.push(art);
        newCount++;
      }
    }

    if (config.verbose && newCount > 0) {
      log(
        2,
        "📄",
        `Página ${currentPage}: +${newCount} artigos (total: ${allArticles.length})`
      );
    }

    if (!hasNextPage(result.html, currentPage) || newCount === 0) {
      hasMore = false;
    }

    if (config.maxArticles > 0 && allArticles.length >= config.maxArticles) {
      hasMore = false;
    }

    currentPage++;
  }

  return config.maxArticles > 0
    ? allArticles.slice(0, config.maxArticles)
    : allArticles;
}

// ===========================================================================
// Extrair conteúdo de um artigo
// ===========================================================================

function extractArticleContent(html, articleUrl) {
  const $ = cheerio.load(html);
  const turndown = createTurndownService();
  const lines = [];

  // Título
  const title =
    $("h1.article-title").first().text().trim() ||
    $("article h1").first().text().trim() ||
    $("h1").first().text().trim() ||
    $("title").text().trim().split(" – ")[0] ||
    "Sem título";

  // Data
  const dateEl = $("time, .article-updated, [datetime]").first();
  const date = dateEl.attr("datetime") || dateEl.text().trim() || "";

  // Breadcrumbs
  const breadcrumbs = [];
  $(".breadcrumbs a, nav[aria-label='Breadcrumb'] a, ol.breadcrumb a").each(
    (_, el) => {
      const text = $(el).text().trim();
      if (text && text !== "›" && text !== "»" && text.length > 1) {
        breadcrumbs.push(text);
      }
    }
  );

  // Header
  lines.push(`# ${title}`);
  lines.push("");
  lines.push(`> **Fonte:** [${articleUrl}](${articleUrl})`);
  if (breadcrumbs.length > 0) {
    lines.push(`> **Caminho:** ${breadcrumbs.join(" > ")}`);
  }
  if (date) {
    lines.push(`> **Data:** ${formatDate(date)}`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // Conteúdo do artigo
  const contentSelectors = [
    ".article-body",
    ".article__body",
    '[itemprop="articleBody"]',
    ".article-content",
    "#article-container .article-body",
    ".content-body",
    ".post-content",
    ".entry-content",
    "article .content",
  ];

  let contentHtml = null;
  for (const sel of contentSelectors) {
    const el = $(sel).first();
    if (el.length) {
      contentHtml = el.html();
      if (contentHtml && contentHtml.trim().length > 30) break;
    }
  }

  // Fallback: article ou main
  if (!contentHtml || contentHtml.trim().length < 30) {
    const el = $("article").first();
    if (el.length) {
      el.find(
        "header, footer, .article-header, .article-footer, .article-votes"
      ).remove();
      contentHtml = el.html();
    }
  }

  if (!contentHtml || contentHtml.trim().length < 30) {
    const el = $("main, #main-content, .main-column").first();
    if (el.length) {
      el.find("nav, header, footer, .breadcrumbs").remove();
      contentHtml = el.html();
    }
  }

  if (contentHtml && contentHtml.trim().length > 30) {
    try {
      let md = turndown.turndown(contentHtml);
      md = md.replace(/\n{4,}/g, "\n\n\n");
      md = md.replace(/[ \t]+\n/g, "\n");
      md = md.replace(/\]\(\//g, `](${BASE_URL}/`);
      lines.push(md);
    } catch {
      lines.push("*[Erro ao converter conteúdo]*");
    }
  } else {
    lines.push("*[Conteúdo não encontrado ou vazio]*");
  }

  // Links externos no artigo
  const externalLinks = [];
  const seenExtLinks = new Set();
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href) return;
    const fullUrl = resolveUrl(href, articleUrl);
    if (!fullUrl) return;
    const domain = getDomain(fullUrl);
    if (!domain) return;
    if (domain === getDomain(articleUrl)) return;
    if (!isAllowedDomain(fullUrl)) return;
    if (fullUrl.includes("/login") || fullUrl.includes("/access")) return;

    const cleanUrl = fullUrl.split("#")[0];
    if (seenExtLinks.has(cleanUrl)) return;
    seenExtLinks.add(cleanUrl);

    const text = $(el).text().trim();
    if (text && text.length > 3) {
      externalLinks.push({ url: cleanUrl, title: text, domain });
    }
  });

  lines.push("");
  return { title, markdown: lines.join("\n"), date, breadcrumbs, externalLinks };
}

// ===========================================================================
// Extrair conteúdo de página TDN
// ===========================================================================

function extractTdnContent(html, articleUrl) {
  const $ = cheerio.load(html);
  const turndown = createTurndownService();
  const lines = [];

  const title =
    $("h1").first().text().trim() ||
    $(".page-title").first().text().trim() ||
    $("title").text().trim().split(" - ")[0] ||
    "Sem título";

  lines.push(`# ${title}`);
  lines.push("");
  lines.push(`> **Fonte:** [${articleUrl}](${articleUrl})`);
  lines.push(`> **Domínio:** TDN (TOTVS Developer Network)`);
  lines.push("");
  lines.push("---");
  lines.push("");

  const contentSelectors = [
    ".wiki-content",
    ".confluence-content",
    "#main-content",
    ".page-content",
    ".article-body",
    "article",
    "#content",
    "main",
    ".content",
  ];

  let contentHtml = null;
  for (const sel of contentSelectors) {
    const el = $(sel).first();
    if (el.length) {
      contentHtml = el.html();
      if (contentHtml && contentHtml.trim().length > 50) break;
    }
  }

  if (contentHtml && contentHtml.trim().length > 50) {
    try {
      let md = turndown.turndown(contentHtml);
      md = md.replace(/\n{4,}/g, "\n\n\n");
      md = md.replace(/[ \t]+\n/g, "\n");
      lines.push(md);
    } catch {
      lines.push("*[Erro ao converter conteúdo]*");
    }
  }

  lines.push("");
  return {
    title,
    markdown: lines.join("\n"),
    date: "",
    breadcrumbs: [],
    externalLinks: [],
  };
}

// ===========================================================================
// Fetch e converter artigo
// ===========================================================================

async function fetchArticle(article, config, sectionPath) {
  const cleanUrl = article.url.split("#")[0];
  if (visitedArticles.has(cleanUrl)) return null;
  visitedArticles.add(cleanUrl);

  const result = await navigateAndGetHtml(cleanUrl, config.delay);
  if (!result) {
    failedArticles.push({
      id: article.id,
      title: article.title,
      url: cleanUrl,
      section: sectionPath,
      reason: "fetch error",
    });
    return null;
  }

  const { html, finalUrl } = result;
  const domain = getDomain(finalUrl);

  let extracted;
  if (domain === "tdn.totvs.com" || domain === "tdn.engpro.totvs.com.br") {
    extracted = extractTdnContent(html, finalUrl);
  } else {
    extracted = extractArticleContent(html, finalUrl);
  }

  if (!extracted.markdown || extracted.markdown.trim().length < 80) {
    failedArticles.push({
      id: article.id,
      title: article.title,
      url: cleanUrl,
      section: sectionPath,
      reason: "empty content",
    });
    return null;
  }

  return {
    ...extracted,
    id: article.id,
    url: cleanUrl,
    finalUrl,
    sectionPath,
  };
}

// ===========================================================================
// Scrape recursivo de seções
// ===========================================================================

async function scrapeSection(
  sectionUrl,
  sectionName,
  sectionPath,
  config,
  depth
) {
  if (depth > config.maxDepth) {
    log(depth, "⚠️", `Profundidade máxima atingida: ${sectionPath}`);
    return;
  }

  const cleanUrl = cleanSectionUrl(sectionUrl);
  const sectionId = sectionIdFromUrl(cleanUrl);
  if (visitedSections.has(sectionId)) return;
  visitedSections.add(sectionId);

  log(depth, "📂", `[${sectionName}]`);

  // 1. Navegar para seção e extrair subseções + artigos da primeira página
  const result = await navigateAndGetHtml(cleanUrl, config.delay);
  if (!result) {
    log(depth, "❌", `Falha ao acessar seção: ${sectionName}`);
    return;
  }

  // Extrair subseções do HTML já carregado
  const subsections = extractSubsectionsFromHtml(result.html, cleanUrl);
  if (subsections.length > 0) {
    log(depth + 1, "📁", `${subsections.length} subseções encontradas`);
  }

  // 2. Descobrir artigos (com paginação)
  // Primeiro extrair da página atual
  const firstPageArticles = extractArticlesFromHtml(result.html, cleanUrl);
  let articles = [...firstPageArticles];
  const seenIds = new Set(articles.map((a) => a.id));

  // Verificar se há mais páginas
  if (hasNextPage(result.html, 1)) {
    let currentPage = 2;
    let hasMore = true;

    while (hasMore) {
      const pageUrl = `${cleanUrl}?page=${currentPage}#articles`;
      const pageResult = await navigateAndGetHtml(pageUrl, config.delay);
      if (!pageResult) break;

      const pageArticles = extractArticlesFromHtml(
        pageResult.html,
        cleanUrl
      );
      let newCount = 0;
      for (const art of pageArticles) {
        if (!seenIds.has(art.id)) {
          seenIds.add(art.id);
          articles.push(art);
          newCount++;
        }
      }

      if (config.verbose && newCount > 0) {
        log(
          depth + 1,
          "📄",
          `Página ${currentPage}: +${newCount} artigos (total: ${articles.length})`
        );
      }

      if (!hasNextPage(pageResult.html, currentPage) || newCount === 0) {
        hasMore = false;
      }

      if (config.maxArticles > 0 && articles.length >= config.maxArticles) {
        hasMore = false;
        articles = articles.slice(0, config.maxArticles);
      }

      currentPage++;
    }
  }

  if (articles.length > 0) {
    log(depth + 1, "📋", `${articles.length} artigos encontrados`);
  }

  // 3. Preparar diretório
  const pathSegments = sectionPath.split("/").map(sanitizeFilename);
  const sectionDir = path.join(config.output, ...pathSegments);
  fs.mkdirSync(sectionDir, { recursive: true });

  const dumpDir = path.join(config.output, "dump");
  fs.mkdirSync(dumpDir, { recursive: true });

  // 4. Processar artigos
  const sectionArticles = [];

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];

    log(
      depth + 1,
      "📄",
      `[${i + 1}/${articles.length}] ${article.title.substring(0, 70)}...`
    );

    const articleData = await fetchArticle(article, config, sectionPath);
    if (!articleData) continue;

    // Salvar no diretório da seção
    const filename = sanitizeFilename(article.title) + ".md";
    const filepath = path.join(sectionDir, filename);
    fs.writeFileSync(filepath, articleData.markdown, "utf-8");

    // Salvar no dump
    const dumpFilename =
      sanitizeFilename(
        `${sectionPath.replace(/\//g, "_")}_${article.title}`
      ) + ".md";
    const dumpPath = path.join(dumpDir, dumpFilename);
    fs.writeFileSync(dumpPath, articleData.markdown, "utf-8");

    const relPath = path.relative(config.output, filepath);

    const entry = {
      id: article.id,
      title: articleData.title || article.title,
      url: article.url,
      finalUrl: articleData.finalUrl,
      section: sectionPath,
      sectionName,
      file: relPath,
      date: articleData.date,
    };

    articleIndex.push(entry);
    sectionArticles.push(entry);
    totalArticlesSaved++;

    log(depth + 2, "✅", relPath);

    // Seguir links externos
    if (
      config.followExternal &&
      articleData.externalLinks &&
      articleData.externalLinks.length > 0
    ) {
      const uniqueExtLinks = articleData.externalLinks.filter(
        (l) => !visitedArticles.has(l.url)
      );

      if (uniqueExtLinks.length > 0) {
        const extDir = path.join(sectionDir, "_links_externos");
        fs.mkdirSync(extDir, { recursive: true });

        for (const extLink of uniqueExtLinks) {
          if (visitedArticles.has(extLink.url)) continue;
          visitedArticles.add(extLink.url);

          if (config.verbose) {
            log(
              depth + 2,
              "🔗",
              `${extLink.domain}: ${extLink.title.substring(0, 60)}...`
            );
          }

          const extResult = await navigateAndGetHtml(
            extLink.url,
            config.delay
          );
          if (!extResult) continue;

          const extDomain = getDomain(extResult.finalUrl);
          let extExtracted;
          if (
            extDomain === "tdn.totvs.com" ||
            extDomain === "tdn.engpro.totvs.com.br"
          ) {
            extExtracted = extractTdnContent(
              extResult.html,
              extResult.finalUrl
            );
          } else {
            extExtracted = extractArticleContent(
              extResult.html,
              extResult.finalUrl
            );
          }

          if (
            !extExtracted.markdown ||
            extExtracted.markdown.trim().length < 80
          )
            continue;

          const extFilename =
            sanitizeFilename(extLink.title || "external") + ".md";
          const extFilepath = path.join(extDir, extFilename);
          fs.writeFileSync(extFilepath, extExtracted.markdown, "utf-8");

          const extRelPath = path.relative(config.output, extFilepath);

          const extDumpFilename =
            sanitizeFilename(
              `ext_${extDomain}_${extLink.title || "page"}`
            ) + ".md";
          const extDumpPath = path.join(dumpDir, extDumpFilename);
          fs.writeFileSync(extDumpPath, extExtracted.markdown, "utf-8");

          articleIndex.push({
            id: `ext-${Date.now()}`,
            title: extExtracted.title || extLink.title,
            url: extLink.url,
            finalUrl: extResult.finalUrl,
            section: sectionPath + "/_links_externos",
            sectionName: sectionName + " (Links Externos)",
            file: extRelPath,
            date: "",
            external: true,
            domain: extDomain,
          });

          totalArticlesSaved++;
          log(depth + 2, "🔗", `✅ ${extRelPath}`);
        }
      }
    }
  }

  // 5. Recursar nas subseções
  for (const sub of subsections) {
    const subSectionId = sectionIdFromUrl(sub.url);
    if (visitedSections.has(subSectionId)) continue;

    const subPath = `${sectionPath}/${sub.name}`;
    await scrapeSection(sub.url, sub.name, subPath, config, depth + 1);
  }

  // 6. Criar README da seção
  createSectionReadme(sectionDir, sectionName, sectionArticles, subsections);

  log(
    depth,
    "✅",
    `[${sectionName}] ${sectionArticles.length} artigos salvos`
  );
}

// ===========================================================================
// README por seção
// ===========================================================================

function createSectionReadme(dir, name, articles, subsections) {
  const lines = [`# ${name}`, ""];

  if (articles.length > 0) {
    lines.push(`**Total de artigos:** ${articles.length}`);
    lines.push("");
  }

  if (subsections && subsections.length > 0) {
    lines.push("## Subseções");
    lines.push("");
    for (const sub of subsections) {
      const subDirName = sanitizeFilename(sub.name);
      lines.push(`- [${sub.name}](${encodeURIComponent(subDirName)}/)`);
    }
    lines.push("");
  }

  if (articles.length > 0) {
    lines.push("## Artigos");
    lines.push("");
    for (const art of articles) {
      const filename = path.basename(art.file);
      lines.push(`- [${art.title}](${encodeURIComponent(filename)})`);
    }
    lines.push("");
  }

  const readmePath = path.join(dir, "README.md");
  fs.writeFileSync(readmePath, lines.join("\n") + "\n", "utf-8");
}

// ===========================================================================
// Consolidar por seção em /index
// ===========================================================================

function buildSectionIndex(outputDir) {
  const indexDir = path.join(outputDir, "index");
  fs.mkdirSync(indexDir, { recursive: true });

  log(0, "🗂️", "Consolidando artigos por seção em /index...");

  // Agrupar por seção de nível 1 (depois do root)
  const bySection = {};
  for (const entry of articleIndex) {
    const parts = entry.section.split("/");
    const topSection = parts.length > 1 ? parts[1] : parts[0];
    if (!bySection[topSection]) {
      bySection[topSection] = [];
    }
    bySection[topSection].push(entry);
  }

  const indexEntries = [];

  for (const [sectionName, entries] of Object.entries(bySection)) {
    if (entries.length === 0) continue;

    const sections = [];
    sections.push(`# ${sectionName}`);
    sections.push("");
    sections.push(`> **${entries.length} artigos**`);
    sections.push("");
    sections.push("---");
    sections.push("");

    // Sumário
    sections.push("## Sumário");
    sections.push("");
    for (const entry of entries) {
      const ext = entry.external ? " 🔗" : "";
      sections.push(`- ${entry.title}${ext}`);
    }
    sections.push("");
    sections.push("---");
    sections.push("");

    // Conteúdo
    for (const entry of entries) {
      const filePath = path.join(outputDir, entry.file);
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        sections.push(raw.trim());
        sections.push("");
        sections.push("---");
        sections.push("");
      }
    }

    const outputName = sanitizeFilename(sectionName) + ".md";
    const outputPath = path.join(indexDir, outputName);
    fs.writeFileSync(outputPath, sections.join("\n"), "utf-8");

    indexEntries.push({
      name: sectionName,
      file: outputName,
      count: entries.length,
    });

    log(1, "✅", `index/${outputName} (${entries.length} artigos)`);
  }

  // INDEX.md
  if (indexEntries.length > 0) {
    const idxLines = [
      "# 📚 TOTVS Backoffice (Linha RM) — Índice Consolidado por Seção",
      "",
      `**Total de seções:** ${indexEntries.length}`,
      `**Total de artigos:** ${articleIndex.length}`,
      `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
      "",
      "---",
      "",
    ];

    for (const entry of indexEntries) {
      idxLines.push(
        `- [${entry.name}](${encodeURIComponent(entry.file)}) — ${entry.count} artigos`
      );
    }

    const idxPath = path.join(indexDir, "INDEX.md");
    fs.writeFileSync(idxPath, idxLines.join("\n") + "\n", "utf-8");
    log(0, "📋", `Índice consolidado: ${idxPath}`);
  }
}

// ===========================================================================
// Índice principal e Manifest
// ===========================================================================

function createIndex(outputDir) {
  const lines = [
    "# 📚 TOTVS Backoffice (Linha RM) — Central de Atendimento",
    "",
    `**Fonte:** [${BASE_URL}${START_SECTION}](${BASE_URL}${START_SECTION})`,
    "",
    `**Total de artigos:** ${articleIndex.length}`,
    `**Artigos com erro:** ${failedArticles.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  // Agrupar por seção
  const bySection = {};
  for (const entry of articleIndex) {
    const section = entry.sectionName || entry.section;
    if (!bySection[section]) {
      bySection[section] = [];
    }
    bySection[section].push(entry);
  }

  for (const [section, entries] of Object.entries(bySection)) {
    lines.push(`## ${section} (${entries.length} artigos)`);
    lines.push("");

    for (const art of entries) {
      const link = art.file.replace(/ /g, "%20");
      const ext = art.external ? " 🔗" : "";
      lines.push(`- [${art.title}${ext}](${link})`);
    }
    lines.push("");
  }

  if (failedArticles.length > 0) {
    lines.push("---", "", "## ⚠️ Artigos com erro", "");
    for (const fa of failedArticles) {
      lines.push(`- [${fa.title}](${fa.url}) — ${fa.reason} (${fa.section})`);
    }
  }

  const indexPath = path.join(outputDir, "INDEX.md");
  fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\n📋 Índice criado: ${indexPath}`);
}

function createManifest(outputDir) {
  const manifest = {
    source: `${BASE_URL}${START_SECTION}`,
    total_articles: articleIndex.length,
    failed_articles: failedArticles.length,
    scraped_at: new Date().toISOString(),
    sections: [
      ...new Set(articleIndex.map((a) => a.sectionName).filter(Boolean)),
    ],
    articles: articleIndex,
    failed: failedArticles,
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

  const startUrl = `${BASE_URL}${START_SECTION}`;

  console.log("=".repeat(70));
  console.log(
    "🚀 Scraper TOTVS Backoffice (Linha RM) — Central de Atendimento"
  );
  console.log("=".repeat(70));
  console.log(`  URL:              ${startUrl}`);
  console.log(`  Saída:            ${config.output}`);
  console.log(
    `  Max artigos:      ${
      config.maxArticles === 0 ? "todos" : config.maxArticles + " por seção"
    }`
  );
  console.log(`  Max profundidade: ${config.maxDepth}`);
  console.log(`  Delay:            ${config.delay}ms`);
  console.log(`  Links externos:   ${config.followExternal ? "sim" : "não"}`);
  console.log(`  Headless:         ${config.headless ? "sim" : "não"}`);
  console.log("=".repeat(70));
  console.log();

  // Inicializar browser
  await initBrowser(config);

  try {
    // Scrape recursivo
    const rootName = "TOTVS Backoffice (Linha RM)";
    await scrapeSection(startUrl, rootName, rootName, config, 0);

    // Consolidar
    buildSectionIndex(config.output);
    createIndex(config.output);
    createManifest(config.output);
  } finally {
    await closeBrowser();
  }

  // Resumo final
  console.log();
  console.log("=".repeat(70));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Artigos salvos:    ${totalArticlesSaved}`);
  console.log(
    `  📁 Seções:            ${
      new Set(articleIndex.map((a) => a.sectionName).filter(Boolean)).size
    }`
  );
  console.log(`  ❌ Artigos com erro:  ${failedArticles.length}`);
  console.log(`  📁 Diretório:         ${config.output}`);
  console.log("=".repeat(70));

  if (failedArticles.length > 0) {
    console.log(`\n⚠️  ${failedArticles.length} artigos falharam:`);
    for (const fa of failedArticles.slice(0, 10)) {
      console.log(`   - [${fa.section}] ${fa.title} — ${fa.reason}`);
    }
    if (failedArticles.length > 10) {
      console.log(`   ... e mais ${failedArticles.length - 10}`);
    }
  }
}

main().catch(async (err) => {
  console.error("💥 Erro fatal:", err);
  await closeBrowser();
  process.exit(1);
});
