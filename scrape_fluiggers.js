#!/usr/bin/env node
/**
 * =============================================================================
 * Scraper: Fluiggers.com.br (Discourse Forum)
 * =============================================================================
 * Faz scrape de todos os tópicos e posts do fórum Fluiggers usando a API
 * JSON do Discourse, convertendo o conteúdo HTML em Markdown organizado
 * por categorias.
 *
 * Uso:
 *   npm install axios cheerio turndown
 *   node scrape_fluiggers.js [--max-topics 0] [--delay 300] [--output ./fluiggers_docs]
 *
 * =============================================================================
 */

const axios = require("axios");
const TurndownService = require("turndown");
const fs = require("fs");
const path = require("path");

// ===========================================================================
// Configuração
// ===========================================================================

const BASE_URL = "https://fluiggers.com.br";

const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "application/json",
  "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
};

// ===========================================================================
// Estado
// ===========================================================================

const topicIndex = [];
const failedTopics = [];
let totalPostsSaved = 0;

// ===========================================================================
// Parse de argumentos CLI
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    output: "./fluiggers_docs",
    maxTopics: 0, // 0 = sem limite
    delay: 300,
    verbose: false,
    skipCategories: [], // IDs de categorias para pular
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--output":
      case "-o":
        config.output = args[++i];
        break;
      case "--max-topics":
      case "-m":
        config.maxTopics = parseInt(args[++i], 10);
        break;
      case "--delay":
        config.delay = parseInt(args[++i], 10);
        break;
      case "--verbose":
      case "-v":
        config.verbose = true;
        break;
      case "--skip-categories":
        config.skipCategories = args[++i].split(",").map(Number);
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node scrape_fluiggers.js [opções]

Opções:
  -o, --output <dir>         Diretório de saída (default: ./fluiggers_docs)
  -m, --max-topics <n>       Máximo de tópicos por categoria (0 = todos, default: 0)
      --delay <ms>           Delay entre requests em ms (default: 300)
      --skip-categories <ids> IDs de categorias separados por vírgula para pular
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

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
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

  // Preservar blocos de código do Discourse
  td.addRule("discourseCode", {
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
          .split(" ")[0] || "";
        return `\n\`\`\`${lang}\n${code.textContent.trim()}\n\`\`\`\n`;
      }
      return content;
    },
  });

  // Blockquotes do Discourse (aside)
  td.addRule("discourseQuote", {
    filter: (node) => {
      return (
        node.nodeName === "ASIDE" &&
        node.getAttribute("class") &&
        node.getAttribute("class").includes("quote")
      );
    },
    replacement: (content) => {
      const lines = content.trim().split("\n");
      return "\n" + lines.map((l) => `> ${l}`).join("\n") + "\n";
    },
  });

  // Remover lightbox wrappers do Discourse
  td.addRule("discourseLightbox", {
    filter: (node) => {
      return (
        node.nodeName === "DIV" &&
        node.getAttribute("class") &&
        node.getAttribute("class").includes("lightbox-wrapper")
      );
    },
    replacement: (content, node) => {
      const img = node.querySelector("img");
      if (img) {
        const src = img.getAttribute("src") || "";
        const alt = img.getAttribute("alt") || "imagem";
        const fullSrc = src.startsWith("/") ? `${BASE_URL}${src}` : src;
        return `\n![${alt}](${fullSrc})\n`;
      }
      return content;
    },
  });

  // Emoji do Discourse
  td.addRule("discourseEmoji", {
    filter: (node) => {
      return (
        node.nodeName === "IMG" &&
        node.getAttribute("class") &&
        node.getAttribute("class").includes("emoji")
      );
    },
    replacement: (content, node) => {
      const title = node.getAttribute("title") || node.getAttribute("alt") || "";
      return title;
    },
  });

  return td;
}

// ===========================================================================
// API Discourse
// ===========================================================================

async function apiGet(endpoint, delay, retries = 3) {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${BASE_URL}${endpoint}`;

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
        return resp.data;
      }
      if (resp.status === 429) {
        const retryAfter = parseInt(resp.headers["retry-after"] || "10", 10);
        const wait = Math.max(retryAfter * 1000, delay * (attempt + 3));
        log(0, "⏳", `Rate limited. Aguardando ${wait}ms...`);
        await sleep(wait);
        continue;
      }
      if (resp.status === 404) {
        return null;
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
// Fetch categorias
// ===========================================================================

async function fetchCategories(config) {
  log(0, "📂", "Buscando categorias...");
  const data = await apiGet("/categories.json", config.delay);
  if (!data || !data.category_list || !data.category_list.categories) {
    log(0, "❌", "Falha ao buscar categorias");
    return [];
  }

  const categories = data.category_list.categories
    .filter((c) => !config.skipCategories.includes(c.id))
    .map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description_text || "",
      topicCount: c.topic_count || 0,
      color: c.color,
    }));

  log(0, "✅", `${categories.length} categorias encontradas`);
  return categories;
}

// ===========================================================================
// Fetch tópicos de uma categoria (paginado)
// ===========================================================================

async function fetchCategoryTopics(category, config) {
  const allTopics = [];
  let page = 0;
  let hasMore = true;

  while (hasMore) {
    const endpoint = `/c/${category.slug}/${category.id}.json?page=${page}`;
    const data = await apiGet(endpoint, config.delay);

    if (!data || !data.topic_list || !data.topic_list.topics) {
      hasMore = false;
      break;
    }

    const topics = data.topic_list.topics.filter(
      (t) => t.archetype === "regular" && t.visible
    );

    if (topics.length === 0) {
      hasMore = false;
      break;
    }

    allTopics.push(...topics);

    if (config.verbose) {
      log(
        1,
        "📄",
        `Página ${page}: ${topics.length} tópicos (total: ${allTopics.length})`
      );
    }

    // Se retornou menos que 30 (tamanho padrão da página), é a última
    if (data.topic_list.topics.length < 30) {
      hasMore = false;
    }

    // Limitar se configurado
    if (config.maxTopics > 0 && allTopics.length >= config.maxTopics) {
      hasMore = false;
    }

    page++;
  }

  if (config.maxTopics > 0) {
    return allTopics.slice(0, config.maxTopics);
  }

  return allTopics;
}

// ===========================================================================
// Fetch tópico completo com todos os posts
// ===========================================================================

async function fetchTopicFull(topicId, config) {
  const data = await apiGet(`/t/${topicId}.json`, config.delay);
  if (!data) return null;

  // Se o tópico tem mais posts do que o stream inicial carrega,
  // precisamos buscar os posts restantes
  const postStream = data.post_stream;
  if (postStream && postStream.stream && postStream.posts) {
    const loadedIds = new Set(postStream.posts.map((p) => p.id));
    const missingIds = postStream.stream.filter((id) => !loadedIds.has(id));

    if (missingIds.length > 0) {
      // Buscar em lotes de 20
      for (let i = 0; i < missingIds.length; i += 20) {
        const batch = missingIds.slice(i, i + 20);
        const idsParam = batch.map((id) => `post_ids[]=${id}`).join("&");
        const extraData = await apiGet(
          `/t/${topicId}/posts.json?${idsParam}`,
          config.delay
        );

        if (extraData && extraData.post_stream && extraData.post_stream.posts) {
          postStream.posts.push(...extraData.post_stream.posts);
        }
      }

      // Reordenar posts pela ordem do stream
      const orderMap = new Map();
      postStream.stream.forEach((id, idx) => orderMap.set(id, idx));
      postStream.posts.sort(
        (a, b) => (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0)
      );
    }
  }

  return data;
}

// ===========================================================================
// Converter tópico em Markdown
// ===========================================================================

function topicToMarkdown(topicData, categoryName) {
  const turndown = createTurndownService();
  const lines = [];

  const title = topicData.title || "Sem título";
  const slug = topicData.slug || "";
  const topicUrl = `${BASE_URL}/t/${slug}/${topicData.id}`;
  const createdAt = formatDate(topicData.created_at);
  const views = topicData.views || 0;
  const likeCount = topicData.like_count || 0;
  const replyCount = topicData.reply_count || 0;
  const postsCount = topicData.posts_count || 0;

  // Tags
  const rawTags = topicData.tags || [];
  const tags = rawTags.map((t) => (typeof t === "object" && t.name ? t.name : String(t)));
  const tagsStr = tags.length > 0 ? tags.map((t) => `\`${t}\``).join(", ") : "";

  // Header
  lines.push(`# ${title}`);
  lines.push("");
  lines.push(`> **Fonte:** [${topicUrl}](${topicUrl})`);
  lines.push(`> **Categoria:** ${categoryName}`);
  if (tagsStr) lines.push(`> **Tags:** ${tagsStr}`);
  lines.push(`> **Criado em:** ${createdAt}`);
  lines.push(
    `> **Visualizações:** ${views} | **Likes:** ${likeCount} | **Respostas:** ${replyCount}`
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  // Posts
  const posts = topicData.post_stream?.posts || [];
  const acceptedAnswerId = topicData.accepted_answer?.post_number;

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const username = post.username || "anônimo";
    const displayName = post.name || username;
    const postDate = formatDate(post.created_at);
    const postLikes = post.actions_summary?.find((a) => a.id === 2)?.count || 0;
    const isAccepted = post.post_number === acceptedAnswerId;

    // Post header
    if (i === 0) {
      lines.push(`## Pergunta original`);
    } else {
      const acceptedLabel = isAccepted ? " ✅ RESPOSTA ACEITA" : "";
      lines.push(`## Resposta #${i}${acceptedLabel}`);
    }
    lines.push("");
    lines.push(
      `**${displayName}** (@${username}) — ${postDate}${
        postLikes > 0 ? ` | ❤️ ${postLikes}` : ""
      }`
    );
    lines.push("");

    // Converter HTML para Markdown
    const cooked = post.cooked || "";
    if (cooked) {
      try {
        let md = turndown.turndown(cooked);
        // Limpeza
        md = md.replace(/\n{4,}/g, "\n\n\n");
        md = md.replace(/[ \t]+\n/g, "\n");
        // Fix relative URLs
        md = md.replace(
          /\]\(\/(uploads\/[^)]+)\)/g,
          `](${BASE_URL}/$1)`
        );
        md = md.replace(
          /\]\(\/(t\/[^)]+)\)/g,
          `](${BASE_URL}/$1)`
        );
        md = md.replace(
          /\]\(\/(c\/[^)]+)\)/g,
          `](${BASE_URL}/$1)`
        );
        lines.push(md);
      } catch (err) {
        lines.push("*[Erro ao converter conteúdo]*");
      }
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

// ===========================================================================
// Scraping principal
// ===========================================================================

async function scrapeCategory(category, config) {
  const catDir = path.join(config.output, sanitizeFilename(category.name));
  fs.mkdirSync(catDir, { recursive: true });

  log(
    0,
    "📂",
    `[${category.name}] Buscando tópicos (${category.topicCount} estimados)...`
  );

  const topics = await fetchCategoryTopics(category, config);
  log(1, "📋", `${topics.length} tópicos encontrados`);

  let savedCount = 0;

  for (let i = 0; i < topics.length; i++) {
    const topicSummary = topics[i];
    const topicId = topicSummary.id;
    const topicTitle = topicSummary.title || `topic_${topicId}`;

    log(
      1,
      "📄",
      `[${i + 1}/${topics.length}] ${topicTitle.substring(0, 60)}...`
    );

    const topicData = await fetchTopicFull(topicId, config);
    if (!topicData) {
      failedTopics.push({
        id: topicId,
        title: topicTitle,
        category: category.name,
        reason: "fetch error",
      });
      continue;
    }

    // Converter para Markdown
    const markdown = topicToMarkdown(topicData, category.name);

    // Salvar arquivo
    const filename = sanitizeFilename(topicTitle) + ".md";
    const filepath = path.join(catDir, filename);
    fs.writeFileSync(filepath, markdown, "utf-8");

    // Salvar também na pasta dump (flat, todos os arquivos juntos)
    const dumpDir = path.join(config.output, "dump");
    fs.mkdirSync(dumpDir, { recursive: true });
    const dumpPath = path.join(dumpDir, filename);
    fs.writeFileSync(dumpPath, markdown, "utf-8");

    const relPath = path.relative(config.output, filepath);
    const postCount = topicData.post_stream?.posts?.length || 0;
    totalPostsSaved += postCount;

    topicIndex.push({
      title: topicTitle,
      id: topicId,
      category: category.name,
      categorySlug: category.slug,
      url: `${BASE_URL}/t/${topicSummary.slug}/${topicId}`,
      file: relPath,
      posts: postCount,
      views: topicSummary.views || 0,
      likes: topicSummary.like_count || 0,
      replies: topicSummary.reply_count || 0,
      tags: (topicData.tags || topicSummary.tags || []).map((t) =>
        typeof t === "object" && t.name ? t.name : String(t)
      ),
      createdAt: topicSummary.created_at,
      hasAcceptedAnswer: topicSummary.has_accepted_answer || false,
    });

    savedCount++;
    log(2, "✅", `${relPath} (${postCount} posts)`);
  }

  return savedCount;
}

// ===========================================================================
// Índice e Manifest
// ===========================================================================

function createIndex(outputDir, categories) {
  const lines = [
    "# 📚 Fluiggers - A maior comunidade Fluig do Brasil",
    "",
    `**Fonte:** [https://fluiggers.com.br](https://fluiggers.com.br)`,
    "",
    `**Total de tópicos:** ${topicIndex.length}`,
    `**Total de posts:** ${totalPostsSaved}`,
    `**Tópicos com erro:** ${failedTopics.length}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
    "## Categorias",
    "",
  ];

  // Agrupar por categoria
  const byCategory = {};
  for (const entry of topicIndex) {
    if (!byCategory[entry.category]) {
      byCategory[entry.category] = [];
    }
    byCategory[entry.category].push(entry);
  }

  for (const cat of categories) {
    const catTopics = byCategory[cat.name] || [];
    if (catTopics.length === 0) continue;

    lines.push(`### ${cat.name} (${catTopics.length} tópicos)`);
    if (cat.description) {
      lines.push(`*${cat.description}*`);
    }
    lines.push("");

    // Ordenar por views (mais populares primeiro)
    catTopics.sort((a, b) => (b.views || 0) - (a.views || 0));

    for (const topic of catTopics) {
      const link = topic.file.replace(/ /g, "%20");
      const tags =
        topic.tags.length > 0 ? ` [${topic.tags.join(", ")}]` : "";
      const accepted = topic.hasAcceptedAnswer ? " ✅" : "";
      lines.push(
        `- [${topic.title}](${link})${accepted} — 👁 ${topic.views} | 💬 ${topic.replies}${tags}`
      );
    }
    lines.push("");
  }

  if (failedTopics.length > 0) {
    lines.push("---", "", "## ⚠️ Tópicos com erro", "");
    for (const ft of failedTopics) {
      lines.push(
        `- [${ft.title}](${BASE_URL}/t/${ft.id}) — ${ft.reason} (${ft.category})`
      );
    }
  }

  const indexPath = path.join(outputDir, "INDEX.md");
  fs.writeFileSync(indexPath, lines.join("\n") + "\n", "utf-8");
  console.log(`\n📋 Índice criado: ${indexPath}`);
}

function createManifest(outputDir, categories) {
  const manifest = {
    source: BASE_URL,
    total_topics: topicIndex.length,
    total_posts: totalPostsSaved,
    failed_topics: failedTopics.length,
    scraped_at: new Date().toISOString(),
    categories: categories.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description,
      topicCount: c.topicCount,
    })),
    topics: topicIndex,
    failed: failedTopics,
  };
  const manifestPath = path.join(outputDir, "manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf-8");
  console.log(`📦 Manifest criado: ${manifestPath}`);
}

// ===========================================================================
// Gerar arquivo de resumo por categoria
// ===========================================================================

function createCategoryReadme(category, outputDir) {
  const catDir = path.join(outputDir, sanitizeFilename(category.name));
  const catTopics = topicIndex.filter((t) => t.category === category.name);

  if (catTopics.length === 0) return;

  const lines = [
    `# ${category.name}`,
    "",
  ];

  if (category.description) {
    lines.push(`> ${category.description}`);
    lines.push("");
  }

  lines.push(`**Total de tópicos:** ${catTopics.length}`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Tópicos com resposta aceita primeiro, depois por views
  const withAnswer = catTopics
    .filter((t) => t.hasAcceptedAnswer)
    .sort((a, b) => b.views - a.views);
  const withoutAnswer = catTopics
    .filter((t) => !t.hasAcceptedAnswer)
    .sort((a, b) => b.views - a.views);

  if (withAnswer.length > 0) {
    lines.push("## ✅ Com resposta aceita", "");
    for (const t of withAnswer) {
      const filename = path.basename(t.file);
      const tags = t.tags.length > 0 ? ` [${t.tags.join(", ")}]` : "";
      lines.push(
        `- [${t.title}](${encodeURIComponent(filename)}) — 👁 ${t.views} | 💬 ${t.replies}${tags}`
      );
    }
    lines.push("");
  }

  if (withoutAnswer.length > 0) {
    lines.push("## 💬 Discussões", "");
    for (const t of withoutAnswer) {
      const filename = path.basename(t.file);
      const tags = t.tags.length > 0 ? ` [${t.tags.join(", ")}]` : "";
      lines.push(
        `- [${t.title}](${encodeURIComponent(filename)}) — 👁 ${t.views} | 💬 ${t.replies}${tags}`
      );
    }
    lines.push("");
  }

  const readmePath = path.join(catDir, "README.md");
  fs.writeFileSync(readmePath, lines.join("\n") + "\n", "utf-8");
}

// ===========================================================================
// Main
// ===========================================================================

async function main() {
  const config = parseArgs();
  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(65));
  console.log("🚀 Scraper Fluiggers.com.br (Discourse Forum)");
  console.log("=".repeat(65));
  console.log(`  URL:            ${BASE_URL}`);
  console.log(`  Saída:          ${config.output}`);
  console.log(
    `  Max tópicos:    ${config.maxTopics === 0 ? "todos" : config.maxTopics + " por categoria"}`
  );
  console.log(`  Delay:          ${config.delay}ms`);
  if (config.skipCategories.length > 0) {
    console.log(
      `  Pular cats:     ${config.skipCategories.join(", ")}`
    );
  }
  console.log("=".repeat(65));
  console.log();

  // 1. Buscar categorias
  const categories = await fetchCategories(config);
  if (categories.length === 0) {
    console.error("❌ Nenhuma categoria encontrada. Abortando.");
    process.exit(1);
  }

  console.log();
  console.log("Categorias encontradas:");
  for (const cat of categories) {
    console.log(`  - ${cat.name} (${cat.topicCount} tópicos) [id: ${cat.id}]`);
  }
  console.log();

  // 2. Scrape de cada categoria
  let totalSaved = 0;
  for (const category of categories) {
    if (category.topicCount === 0) {
      log(0, "⏭️", `[${category.name}] Sem tópicos, pulando...`);
      continue;
    }

    const saved = await scrapeCategory(category, config);
    totalSaved += saved;

    // Criar README da categoria
    createCategoryReadme(category, config.output);

    log(
      0,
      "✅",
      `[${category.name}] ${saved} tópicos salvos`
    );
    console.log();
  }

  // 3. Índice e manifest
  createIndex(config.output, categories);
  createManifest(config.output, categories);

  // 4. Resumo final
  console.log();
  console.log("=".repeat(65));
  console.log("✅ Scraping concluído!");
  console.log(`  📄 Tópicos salvos:    ${totalSaved}`);
  console.log(`  💬 Posts salvos:       ${totalPostsSaved}`);
  console.log(`  ❌ Tópicos com erro:  ${failedTopics.length}`);
  console.log(`  📁 Diretório:         ${config.output}`);
  console.log("=".repeat(65));

  if (failedTopics.length > 0) {
    console.log(`\n⚠️  ${failedTopics.length} tópicos falharam:`);
    for (const ft of failedTopics.slice(0, 10)) {
      console.log(`   - [${ft.category}] ${ft.title}`);
    }
    if (failedTopics.length > 10) {
      console.log(`   ... e mais ${failedTopics.length - 10}`);
    }
  }
}

main().catch((err) => {
  console.error("💥 Erro fatal:", err);
  process.exit(1);
});
