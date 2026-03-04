#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: Fluig SDK JavaDoc (api.fluig.com)
 * =============================================================================
 * Faz scrape de todas as classes e interfaces do JavaDoc da SDK do Fluig,
 * convertendo o conteúdo HTML em Markdown organizado por pacotes.
 *
 * Uso:
 *   npm install axios cheerio turndown
 *   node scrape_javadoc.js [--delay 300] [--output ./javadoc_docs]
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

const BASE_URL = "https://api.fluig.com/old/sdk";

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

const classIndex = [];
const failedClasses = [];
let totalClassesSaved = 0;

// ===========================================================================
// Parse de argumentos CLI
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./javadoc_docs",
    delay: 300,
    verbose: false,
    maxClasses: 0, // 0 = sem limite
    skipPackages: [], // pacotes para pular
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
      case "--max-classes":
      case "-m":
        config.maxClasses = parseInt(args[++i], 10);
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--skip-packages":
        config.skipPackages = args[++i].split(",");
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_javadoc.js [opções]

Opções:
  -o, --output <dir>          Diretório de saída (default: ./javadoc_docs)
  -m, --max-classes <n>       Máximo de classes (0 = todas, default: 0)
      --delay <ms>            Delay entre requests em ms (default: 300)
      --skip-packages <pkgs>  Pacotes separados por vírgula para pular
  -v, --verbose               Logs detalhados
  -h, --help                  Mostra esta ajuda
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

// ===========================================================================
// Turndown (HTML → Markdown) — customizado para JavaDoc
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

  // Preservar blocos <pre> com <code> dentro
  td.addRule("javadocCode", {
    filter: (node) => {
      return (
        node.nodeName === "PRE" &&
        node.querySelector("code")
      );
    },
    replacement: (content, node) => {
      const code = node.querySelector("code");
      if (code) {
        const lang = (code.getAttribute("class") || "")
          .replace("lang-", "")
          .replace("language-", "")
          .split(" ")[0] || "java";
        return `\n\`\`\`${lang}\n${code.textContent.trim()}\n\`\`\`\n`;
      }
      return content;
    },
  });

  // Inline code para nomes de tipos
  td.addRule("javadocTypeLink", {
    filter: (node) => {
      if (node.nodeName !== "A") return false;
      const href = node.getAttribute("href") || "";
      return href.includes("docs.oracle.com") || href.includes("is-external=true");
    },
    replacement: (content) => {
      return `\`${content.trim()}\``;
    },
  });

  // Remove navigation links
  td.addRule("removeNavLinks", {
    filter: (node) => {
      if (node.nodeName !== "A") return false;
      const href = node.getAttribute("href") || "";
      return href.includes("#skip.navbar") || href.includes("#navbar");
    },
    replacement: () => "",
  });

  return td;
}

// ===========================================================================
// Fetch HTML
// ===========================================================================

async function fetchPage(url, delay, retries = 3) {
  if (!url.startsWith("http")) {
    url = `${BASE_URL}/${url}`;
  }

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      await sleep(delay);
      const resp = await axios.get(url, {
        headers: HEADERS,
        timeout: 30000,
        maxRedirects: 5,
        validateStatus: (status) => status < 500,
      });

      if (resp.status === 200) {
        return cheerio.load(resp.data);
      }
      if (resp.status === 404) {
        log(0, "⚠️", `404 Not Found: ${url}`);
        return null;
      }
      if (resp.status === 429) {
        const wait = delay * (attempt + 3);
        log(0, "⏳", `Rate limited. Aguardando ${wait}ms...`);
        await sleep(wait);
        continue;
      }
      if (resp.status >= 400) {
        log(0, "❌", `HTTP ${resp.status}: ${url}`);
        if (attempt < retries - 1) {
          await sleep(delay * 2);
          continue;
        }
        return null;
      }
    } catch (err) {
      log(
        0,
        "❌",
        `Erro (tentativa ${attempt + 1}/${retries}): ${err.message}`
      );
      if (attempt < retries - 1) await sleep(delay * 3);
    }
  }
  return null;
}

// ===========================================================================
// Fetch lista de pacotes da página overview
// ===========================================================================

async function fetchPackages(config) {
  log(0, "📦", "Buscando lista de pacotes...");
  const $ = await fetchPage(`${BASE_URL}/index.html`, config.delay);
  if (!$) {
    log(0, "❌", "Falha ao carregar overview");
    return [];
  }

  const packages = [];
  // Tabela de pacotes no overview (class="overviewSummary")
  // Estrutura: <th><a href="...">com.fluig.sdk.api</a></th><td>desc</td>
  $("table.overviewSummary").find("tbody tr").each((_, tr) => {
    const ths = $(tr).find("th");
    const tds = $(tr).find("td");
    // Skip header row (all th, no td)
    if (tds.length === 0) return;
    // Data row: th has the link, td has description
    const link = ths.eq(0).find("a");
    if (link.length) {
      const href = link.attr("href");
      const name = link.text().trim();
      if (name && name.startsWith("com.fluig")) {
        const description = tds.length >= 1 ? tds.eq(0).text().trim() : "";
        packages.push({
          name,
          href: href.startsWith("http") ? href : `${BASE_URL}/${href}`,
          description: description === "\u00a0" ? "" : description,
        });
      }
    }
  });

  // Dedup
  const seen = new Set();
  const unique = packages.filter((p) => {
    if (seen.has(p.name)) return false;
    seen.add(p.name);
    return true;
  });

  log(0, "✅", `${unique.length} pacotes encontrados`);
  return unique;
}

// ===========================================================================
// Fetch "All Classes" para obter URLs de todas as classes
// ===========================================================================

async function fetchAllClasses(config) {
  log(0, "📋", "Buscando lista de todas as classes...");
  const $ = await fetchPage(`${BASE_URL}/allclasses.html`, config.delay);
  if (!$) {
    log(0, "❌", "Falha ao carregar allclasses.html");
    return [];
  }

  const classes = [];
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    const name = $(el).text().trim();
    if (!href || !name) return;
    if (!href.includes("com/fluig/")) return;
    // Extrair pacote do href
    // Ex: com/fluig/sdk/service/AlertService.html → com.fluig.sdk.service
    const parts = href.replace(/\.html$/, "").split("/");
    const className = parts.pop();
    const packageName = parts.join(".");

    const fullUrl = href.startsWith("http")
      ? href
      : `${BASE_URL}/${href.replace(/^\.\//, "")}`;

    classes.push({
      name,
      className,
      packageName,
      url: fullUrl,
    });
  });

  // Dedup
  const seen = new Set();
  const unique = classes.filter((c) => {
    const key = `${c.packageName}.${c.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  log(0, "✅", `${unique.length} classes encontradas`);
  return unique;
}

// ===========================================================================
// Extrair conteúdo de uma página de classe JavaDoc
// ===========================================================================

function extractClassContent($, className, packageName, sourceUrl) {
  const turndown = createTurndownService();
  const lines = [];

  // ---- Header ----
  const typeHeader = $("h1.title, h2.title").first().text().trim() ||
    $(".header h2").first().text().trim() || "";
  const typeKind = typeHeader.match(/^(Interface|Class|Enum|Annotation Type)/i)?.[1] || "Class";

  lines.push(`# ${typeKind} ${className}`);
  lines.push("");
  lines.push(`> **Pacote:** \`${packageName}\``);
  lines.push(`> **Fonte:** [${sourceUrl}](${sourceUrl})`);
  lines.push("");

  // ---- Hierarquia / Superclasses ----
  const inheritanceTree = $(".inheritance, .description .blockList .blockList").first();
  if (inheritanceTree.length) {
    const treeText = inheritanceTree.text().trim();
    if (treeText && treeText.includes(".")) {
      lines.push("**Hierarquia:**");
      lines.push("```");
      lines.push(treeText.replace(/\n\s+/g, "\n  "));
      lines.push("```");
      lines.push("");
    }
  }

  // ---- Interface tipo / extends / implements ----
  const typeSignature = $(".typeSignature, .description pre").first();
  if (typeSignature.length) {
    const sigText = typeSignature.text().trim();
    if (sigText) {
      lines.push("```java");
      lines.push(sigText);
      lines.push("```");
      lines.push("");
    }
  }

  // ---- Descrição da classe ----
  const descBlock = $(".description .block, .contentContainer .description .block").first();
  if (descBlock.length) {
    const descHtml = descBlock.html();
    if (descHtml) {
      const descMd = turndown.turndown(descHtml).trim();
      if (descMd) {
        lines.push(descMd);
        lines.push("");
      }
    }
  }

  // ---- Metadados: Since, Author, See Also ----
  $(".description dl dt, .contentContainer .description dl dt").each((_, dt) => {
    const label = $(dt).text().trim();
    const dd = $(dt).next("dd");
    if (dd.length) {
      const value = dd.text().trim();
      if (value) {
        lines.push(`- **${label}** ${value}`);
      }
    }
  });
  lines.push("");
  lines.push("---");
  lines.push("");

  // ---- Field Summary ----
  const fieldSummary = extractSummaryTable($, "field.summary", "fieldSummary", "Campos (Fields)", turndown);
  if (fieldSummary) {
    lines.push(fieldSummary);
    lines.push("");
  }

  // ---- Constructor Summary ----
  const ctorSummary = extractSummaryTable($, "constructor.summary", "constructorSummary", "Construtores", turndown);
  if (ctorSummary) {
    lines.push(ctorSummary);
    lines.push("");
  }

  // ---- Method Summary ----
  const methodSummary = extractSummaryTable($, "method.summary", "methodSummary", "Métodos", turndown);
  if (methodSummary) {
    lines.push(methodSummary);
    lines.push("");
  }

  // ---- Enum Constants Summary ----
  const enumSummary = extractSummaryTable($, "enum.constant.summary", "enum-constant-summary", "Constantes do Enum", turndown);
  if (enumSummary) {
    lines.push(enumSummary);
    lines.push("");
  }

  lines.push("---");
  lines.push("");

  // ---- Field Detail ----
  const fieldDetail = extractDetailSection($, "field.detail", "fieldDetail", "Detalhes dos Campos", turndown);
  if (fieldDetail) {
    lines.push(fieldDetail);
    lines.push("");
  }

  // ---- Constructor Detail ----
  const ctorDetail = extractDetailSection($, "constructor.detail", "constructorDetail", "Detalhes dos Construtores", turndown);
  if (ctorDetail) {
    lines.push(ctorDetail);
    lines.push("");
  }

  // ---- Method Detail ----
  const methodDetail = extractDetailSection($, "method.detail", "methodDetail", "Detalhes dos Métodos", turndown);
  if (methodDetail) {
    lines.push(methodDetail);
    lines.push("");
  }

  // ---- Enum Constant Detail ----
  const enumDetail = extractDetailSection($, "enum.constant.detail", "enum-constant-detail", "Detalhes das Constantes", turndown);
  if (enumDetail) {
    lines.push(enumDetail);
    lines.push("");
  }

  return lines.join("\n");
}

// ===========================================================================
// Extrai tabela de sumário (fields, constructors, methods) do JavaDoc
// ===========================================================================

function extractSummaryTable($, anchorId, tableClass, title, turndown) {
  // Encontrar a tabela pelo caption que contém palavras-chave
  const keywordMap = {
    "Campos (Fields)": ["field"],
    "Construtores": ["constructor"],
    "Métodos": ["method"],
    "Constantes do Enum": ["enum constant"],
  };

  const keywords = keywordMap[title] || [title.toLowerCase().split(" ")[0]];

  let table = null;
  $("table").each((_, t) => {
    const caption = $(t).find("caption").text().trim().toLowerCase();
    if (keywords.some((kw) => caption.includes(kw))) {
      table = $(t);
      return false; // break
    }
  });

  if (!table) return null;

  // Detect header structure: count header TH columns
  const headerRow = table.find("tr").first();
  const headerThCount = headerRow.find("th").length;
  const isTwoColumn = headerThCount === 2; // Constructor/Enum: Name + Description

  const rows = [];
  table.find("tr").each((i, tr) => {
    const allThs = $(tr).find("th");
    const tds = $(tr).find("td");

    // Skip pure header row (all th, no td)
    if (tds.length === 0 && allThs.length > 1) return;

    if (allThs.length === 1 && tds.length >= 1) {
      const name = allThs.eq(0).text().trim().replace(/\n/g, " ").replace(/\s+/g, " ");
      if (isTwoColumn) {
        // Constructor/Enum: th=name, td[0]=description
        const desc = tds.eq(0).text().trim();
        rows.push(`| \`${name}\` | ${desc} |`);
      } else {
        // Method/field: th=name, td[0]=type, td[1]=description
        const returnType = tds.eq(0).text().trim().replace(/\n/g, " ").replace(/\s+/g, " ");
        const desc = tds.length >= 2 ? tds.eq(1).text().trim() : "";
        rows.push(`| \`${returnType}\` | \`${name}\` | ${desc} |`);
      }
    } else if (tds.length >= 2 && allThs.length === 0) {
      if (isTwoColumn) {
        const col1 = tds.eq(0).text().trim().replace(/\n/g, " ").replace(/\s+/g, " ");
        const col2 = tds.eq(1).text().trim();
        rows.push(`| \`${col1}\` | ${col2} |`);
      } else {
        const modifier = tds.eq(0).text().trim().replace(/\n/g, " ").replace(/\s+/g, " ");
        const method = tds.eq(1).text().trim().replace(/\n/g, " ").replace(/\s+/g, " ");
        const desc = tds.length >= 3 ? tds.eq(2).text().trim() : "";
        rows.push(`| \`${modifier}\` | \`${method}\` | ${desc} |`);
      }
    }
  });

  if (rows.length === 0) return null;

  let header, divider;
  if (isTwoColumn) {
    header = "| Nome | Descrição |";
    divider = "| --- | --- |";
  } else {
    header = "| Modificador/Tipo | Método | Descrição |";
    divider = "| --- | --- | --- |";
  }

  return `## ${title}\n\n${header}\n${divider}\n${rows.join("\n")}\n`;
}

function cleanInlineHtml(turndown, html) {
  if (!html) return "";
  let md = turndown.turndown(html);
  // Inline: remove newlines, collapse spaces
  md = md.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
  // Escape pipes for table compatibility
  md = md.replace(/\|/g, "\\|");
  return md;
}

// ===========================================================================
// Extrai seções de detalhe (method detail, field detail, etc.)
// ===========================================================================

function extractDetailSection($, anchorId, sectionClass, title, turndown) {
  // Encontrar a âncora da seção de detalhes
  let anchor = $(`a[id="${anchorId}"], a[name="${anchorId}"]`);
  if (!anchor.length) return null;

  // O container é o <li class="blockList"> pai da âncora
  const container = anchor.closest("li.blockList");
  if (!container.length) return null;

  // Cada método é um <ul class="blockList"> ou <ul class="blockListLast">
  // dentro do container, contendo <li class="blockList"> com o detalhe
  const detailSections = [];

  container.find("ul.blockList > li.blockList, ul.blockListLast > li.blockList").each((_, li) => {
    const itemLines = [];

    // Título do membro (h4 ou h3)
    const memberTitle = $(li).find("h4, h3").first().text().trim();
    if (memberTitle) {
      itemLines.push(`### ${memberTitle}`);
      itemLines.push("");
    }

    // Signature (pre)
    const pre = $(li).find("pre").first();
    if (pre.length) {
      const sig = pre.text().trim();
      if (sig) {
        itemLines.push("```java");
        itemLines.push(sig);
        itemLines.push("```");
        itemLines.push("");
      }
    }

    // Description (.block)
    const block = $(li).find(".block").first();
    if (block.length) {
      const blockHtml = block.html();
      if (blockHtml) {
        const md = turndown.turndown(blockHtml).trim();
        if (md) {
          itemLines.push(md);
          itemLines.push("");
        }
      }
    }

    // Parameters, Returns, Throws, Since (dl)
    $(li).find("dl").each((_, dl) => {
      $(dl).children("dt").each((_, dt) => {
        const label = $(dt).text().trim();
        const dd = $(dt).next("dd");
        if (dd.length) {
          const ddHtml = dd.html();
          const ddMd = ddHtml ? turndown.turndown(ddHtml).trim() : "";
          if (ddMd) {
            itemLines.push(`- **${label}** ${ddMd}`);
          }
        }
      });
    });

    if (itemLines.length > 0) {
      detailSections.push(itemLines.join("\n"));
    }
  });

  if (detailSections.length === 0) return null;

  return `## ${title}\n\n${detailSections.join("\n\n---\n\n")}\n`;
}

// ===========================================================================
// Converter página de package-summary.html em Markdown
// ===========================================================================

function extractPackageSummary($, packageName, sourceUrl) {
  const turndown = createTurndownService();
  const lines = [];

  lines.push(`# Pacote ${packageName}`);
  lines.push("");
  lines.push(`> **Fonte:** [${sourceUrl}](${sourceUrl})`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Descrição do pacote
  const pkgDesc = $(".contentContainer .block, .packageDescription .block").first();
  if (pkgDesc.length) {
    const descHtml = pkgDesc.html();
    if (descHtml) {
      const md = turndown.turndown(descHtml).trim();
      if (md) {
        lines.push(md);
        lines.push("");
        lines.push("---");
        lines.push("");
      }
    }
  }

  // Tabelas: Interfaces, Classes, Enums, Exceptions
  const tableTypes = [
    { label: "Interfaces", keywords: ["interface"] },
    { label: "Classes", keywords: ["class"] },
    { label: "Enums", keywords: ["enum"] },
    { label: "Exceptions", keywords: ["exception", "error"] },
    { label: "Annotation Types", keywords: ["annotation"] },
  ];

  $("table").each((_, table) => {
    const caption = $(table).find("caption").text().trim();
    if (!caption) return;

    lines.push(`## ${caption}`);
    lines.push("");
    lines.push("| Nome | Descrição |");
    lines.push("| --- | --- |");

    $(table).find("tbody tr, tr").each((_, tr) => {
      const tds = $(tr).find("td");
      if (tds.length >= 2) {
        const nameLink = $(tds[0]).find("a");
        const name = nameLink.length ? nameLink.text().trim() : $(tds[0]).text().trim();
        const desc = $(tds[1]).text().trim();
        if (name) {
          lines.push(`| \`${name}\` | ${desc} |`);
        }
      }
    });

    lines.push("");
  });

  return lines.join("\n");
}

// ===========================================================================
// Scraping principal: processar todas as classes
// ===========================================================================

async function scrapeClass(classInfo, config) {
  const { name, className, packageName, url } = classInfo;

  const $ = await fetchPage(url, config.delay);
  if (!$) {
    failedClasses.push({
      name,
      packageName,
      url,
      reason: "fetch error",
    });
    return null;
  }

  // Extrair conteúdo
  const markdown = extractClassContent($, name, packageName, url);
  if (!markdown || markdown.trim().length < 50) {
    failedClasses.push({
      name,
      packageName,
      url,
      reason: "empty content",
    });
    return null;
  }

  return markdown;
}

async function scrapePackageSummary(pkg, config) {
  const $ = await fetchPage(pkg.href, config.delay);
  if (!$) return null;

  return extractPackageSummary($, pkg.name, pkg.href);
}

async function main() {
  const config = parseArgs();
  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(65));
  console.log("🚀 Scraper Fluig SDK JavaDoc");
  console.log("=".repeat(65));
  console.log(`  URL:            ${BASE_URL}`);
  console.log(`  Saída:          ${config.output}`);
  console.log(
    `  Max classes:    ${config.maxClasses === 0 ? "todas" : config.maxClasses}`
  );
  console.log(`  Delay:          ${config.delay}ms`);
  if (config.skipPackages.length > 0) {
    console.log(`  Pular pacotes:  ${config.skipPackages.join(", ")}`);
  }
  console.log("=".repeat(65));
  console.log();

  // 1. Buscar pacotes
  const packages = await fetchPackages(config);
  if (packages.length === 0) {
    console.error("❌ Nenhum pacote encontrado. Abortando.");
    process.exit(1);
  }

  console.log();
  console.log("Pacotes encontrados:");
  for (const pkg of packages) {
    console.log(`  - ${pkg.name}${pkg.description ? ` — ${pkg.description}` : ""}`);
  }
  console.log();

  // 2. Buscar todas as classes
  let allClasses = await fetchAllClasses(config);
  if (allClasses.length === 0) {
    console.error("❌ Nenhuma classe encontrada. Abortando.");
    process.exit(1);
  }

  // Filtrar pacotes a pular
  if (config.skipPackages.length > 0) {
    allClasses = allClasses.filter(
      (c) => !config.skipPackages.some((p) => c.packageName.startsWith(p))
    );
  }

  // Limitar
  if (config.maxClasses > 0) {
    allClasses = allClasses.slice(0, config.maxClasses);
  }

  console.log(`\n📋 Total de classes a processar: ${allClasses.length}\n`);

  // Criar dump dir
  const dumpDir = path.join(config.output, "dump");
  fs.mkdirSync(dumpDir, { recursive: true });

  // 3. Scrape de package-summary para cada pacote
  log(0, "📦", "Processando resumos de pacotes...");
  const packageMap = new Map();
  for (const pkg of packages) {
    if (config.skipPackages.some((p) => pkg.name.startsWith(p))) continue;

    const pkgDirName = sanitizeFilename(pkg.name);
    const pkgDir = path.join(config.output, pkgDirName);
    fs.mkdirSync(pkgDir, { recursive: true });
    packageMap.set(pkg.name, { dir: pkgDir, dirName: pkgDirName, classes: [] });

    const markdown = await scrapePackageSummary(pkg, config);
    if (markdown) {
      const filepath = path.join(pkgDir, "README.md");
      fs.writeFileSync(filepath, markdown, "utf-8");
      log(1, "✅", `${pkgDirName}/README.md`);
    }
  }

  // 4. Scrape de cada classe
  log(0, "📄", "Processando classes...");
  for (let i = 0; i < allClasses.length; i++) {
    const classInfo = allClasses[i];
    log(
      1,
      "📄",
      `[${i + 1}/${allClasses.length}] ${classInfo.packageName}.${classInfo.name}`
    );

    const markdown = await scrapeClass(classInfo, config);
    if (!markdown) continue;

    // Garantir que o diretório do pacote existe
    const pkgDirName = sanitizeFilename(classInfo.packageName);
    let pkgEntry = packageMap.get(classInfo.packageName);
    if (!pkgEntry) {
      const pkgDir = path.join(config.output, pkgDirName);
      fs.mkdirSync(pkgDir, { recursive: true });
      pkgEntry = { dir: pkgDir, dirName: pkgDirName, classes: [] };
      packageMap.set(classInfo.packageName, pkgEntry);
    }

    // Salvar no diretório do pacote
    const filename = sanitizeFilename(classInfo.name) + ".md";
    const filepath = path.join(pkgEntry.dir, filename);
    fs.writeFileSync(filepath, markdown, "utf-8");

    // Salvar no dump
    const dumpFilename = sanitizeFilename(`${classInfo.packageName}.${classInfo.name}`) + ".md";
    const dumpPath = path.join(dumpDir, dumpFilename);
    fs.writeFileSync(dumpPath, markdown, "utf-8");

    const relPath = path.relative(config.output, filepath);
    pkgEntry.classes.push(classInfo.name);

    classIndex.push({
      name: classInfo.name,
      packageName: classInfo.packageName,
      url: classInfo.url,
      file: relPath,
    });

    totalClassesSaved++;
    log(2, "✅", relPath);
  }

  // 5. Consolidar por pacote em /index
  buildPackageIndex(config.output, packageMap);

  // 6. Índice e manifest
  createIndex(config.output, packages, packageMap);
  createManifest(config.output, packages);

  // 7. Resumo
  console.log();
  console.log("=".repeat(65));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Classes salvas:   ${totalClassesSaved}`);
  console.log(`  📦 Pacotes:          ${packageMap.size}`);
  console.log(`  ❌ Classes com erro: ${failedClasses.length}`);
  console.log(`  📁 Diretório:        ${config.output}`);
  console.log("=".repeat(65));

  if (failedClasses.length > 0) {
    console.log(`\n⚠️  ${failedClasses.length} classes falharam:`);
    for (const fc of failedClasses.slice(0, 10)) {
      console.log(`   - [${fc.packageName}] ${fc.name} — ${fc.reason}`);
    }
    if (failedClasses.length > 10) {
      console.log(`   ... e mais ${failedClasses.length - 10}`);
    }
  }
}

// ===========================================================================
// Consolidar todas as classes de cada pacote em /index (um .md por pacote)
// ===========================================================================

function buildPackageIndex(outputDir, packageMap) {
  const indexDir = path.join(outputDir, "index");
  fs.mkdirSync(indexDir, { recursive: true });

  log(0, "🗂️", "Consolidando classes por pacote em /index...");

  let totalFiles = 0;
  let totalTopics = 0;
  const indexEntries = [];

  for (const [pkgName, pkgEntry] of packageMap) {
    // Ler todos os .md do diretório do pacote (exceto README.md)
    const pkgDir = pkgEntry.dir;
    if (!fs.existsSync(pkgDir)) continue;

    const mdFiles = fs
      .readdirSync(pkgDir)
      .filter((f) => f.endsWith(".md") && f !== "README.md" && f !== "INDEX.md")
      .sort()
      .map((f) => path.join(pkgDir, f));

    if (mdFiles.length === 0) continue;

    const sections = [];

    // Cabeçalho
    sections.push(`# ${pkgName}`);
    sections.push("");
    sections.push(`> **${mdFiles.length} classes**`);
    sections.push("");

    // Incluir README (package summary) se existir
    const readmePath = path.join(pkgDir, "README.md");
    if (fs.existsSync(readmePath)) {
      const readmeContent = fs.readFileSync(readmePath, "utf-8").trim();
      // Pegar apenas a descrição, pular o título que já foi incluído
      const lines = readmeContent.split("\n");
      const afterTitle = lines.slice(1).join("\n").trim();
      if (afterTitle) {
        sections.push(afterTitle);
        sections.push("");
      }
    }

    sections.push("---");
    sections.push("");

    // Sumário com links para âncoras
    sections.push("## Sumário");
    sections.push("");
    for (const filePath of mdFiles) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const titleMatch = raw.match(/^#\s+(.+)$/m);
      const title = titleMatch
        ? titleMatch[1].trim()
        : path.basename(filePath, ".md");
      const anchor = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      sections.push(`- [${title}](#${anchor})`);
    }
    sections.push("");
    sections.push("---");
    sections.push("");

    // Conteúdo de cada classe
    for (const filePath of mdFiles) {
      const raw = fs.readFileSync(filePath, "utf-8");
      sections.push(raw.trim());
      sections.push("");
      sections.push("---");
      sections.push("");
    }

    const outputName = sanitizeFilename(pkgName) + ".md";
    const outputPath = path.join(indexDir, outputName);
    fs.writeFileSync(outputPath, sections.join("\n"), "utf-8");

    indexEntries.push({ name: pkgName, file: outputName, count: mdFiles.length });
    totalTopics += mdFiles.length;
    totalFiles++;

    log(1, "✅", `index/${outputName} (${mdFiles.length} classes)`);
  }

  // INDEX.md dentro de /index
  if (indexEntries.length > 0) {
    const idxLines = [
      "# 📚 Fluig SDK JavaDoc — Índice Consolidado por Pacote",
      "",
      `**Total de pacotes:** ${totalFiles}`,
      `**Total de classes:**  ${totalTopics}`,
      `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
      "",
      "---",
      "",
    ];

    for (const entry of indexEntries) {
      idxLines.push(
        `- [${entry.name}](${encodeURIComponent(entry.file)}) — ${entry.count} classes`
      );
    }

    const idxPath = path.join(indexDir, "INDEX.md");
    fs.writeFileSync(idxPath, idxLines.join("\n") + "\n", "utf-8");
    log(0, "📋", `Índice consolidado: ${idxPath}`);
  }
}

// ===========================================================================
// Índice e Manifest
// ===========================================================================

function createIndex(outputDir, packages, packageMap) {
  const lines = [
    "# 📚 Fluig SDK - JavaDoc API 2.0.0",
    "",
    `**Fonte:** [${BASE_URL}/index.html](${BASE_URL}/index.html)`,
    "",
    `**Total de classes:** ${classIndex.length}`,
    `**Total de pacotes:** ${packageMap.size}`,
    `**Classes com erro:** ${failedClasses.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
    "## Pacotes",
    "",
  ];

  // Agrupar por pacote
  const byPackage = {};
  for (const entry of classIndex) {
    if (!byPackage[entry.packageName]) {
      byPackage[entry.packageName] = [];
    }
    byPackage[entry.packageName].push(entry);
  }

  for (const pkg of packages) {
    const pkgClasses = byPackage[pkg.name] || [];
    if (pkgClasses.length === 0) continue;

    lines.push(`### ${pkg.name} (${pkgClasses.length} classes)`);
    if (pkg.description) {
      lines.push(`*${pkg.description}*`);
    }
    lines.push("");

    // Ordenar alfabeticamente
    pkgClasses.sort((a, b) => a.name.localeCompare(b.name));

    for (const cls of pkgClasses) {
      const link = cls.file.replace(/ /g, "%20");
      lines.push(`- [${cls.name}](${link})`);
    }
    lines.push("");
  }

  // Classes de pacotes não listados no overview
  const unknownPkgs = Object.keys(byPackage).filter(
    (p) => !packages.find((pkg) => pkg.name === p)
  );
  for (const pkgName of unknownPkgs) {
    const pkgClasses = byPackage[pkgName];
    lines.push(`### ${pkgName} (${pkgClasses.length} classes)`);
    lines.push("");
    pkgClasses.sort((a, b) => a.name.localeCompare(b.name));
    for (const cls of pkgClasses) {
      const link = cls.file.replace(/ /g, "%20");
      lines.push(`- [${cls.name}](${link})`);
    }
    lines.push("");
  }

  if (failedClasses.length > 0) {
    lines.push("---", "", "## ⚠️ Classes com erro", "");
    for (const fc of failedClasses) {
      lines.push(
        `- [${fc.packageName}.${fc.name}](${fc.url}) — ${fc.reason}`
      );
    }
  }

  const indexPath = path.join(outputDir, "INDEX.md");
  fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\n📋 Índice criado: ${indexPath}`);
}

function createManifest(outputDir, packages) {
  const manifest = {
    source: BASE_URL,
    api_version: "2.0.0",
    total_classes: classIndex.length,
    failed_classes: failedClasses.length,
    scraped_at: new Date().toISOString(),
    packages: packages.map((p) => ({
      name: p.name,
      description: p.description,
    })),
    classes: classIndex,
    failed: failedClasses,
  };
  const manifestPath = path.join(outputDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`📦 Manifest criado: ${manifestPath}`);
}

// ===========================================================================
// Go!
// ===========================================================================

main().catch((err) => {
  console.error("💥 Erro fatal:", err);
  process.exit(1);
});
