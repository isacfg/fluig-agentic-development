#!/usr/bin/env node
/**
 * =============================================================================
 * build_index.js — Consolida tópicos por categoria em /index
 * =============================================================================
 * Lê todos os .md de cada pasta de categoria em fluiggers_docs e gera
 * um único arquivo Markdown por categoria em /index.
 *
 * Uso:
 *   node build_index.js [--input ./fluiggers_docs] [--output ./fluiggers_docs/index]
 * =============================================================================
 */

const fs = require("fs");
const path = require("path");

// ===========================================================================
// Args
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    input: "./fluiggers_docs",
    output: "./fluiggers_docs/index",
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--input":
      case "-i":
        config.input = args[++i];
        break;
      case "--output":
      case "-o":
        config.output = args[++i];
        break;
      case "--help":
      case "-h":
        console.log(`
Uso: node build_index.js [opções]

Opções:
  -i, --input  <dir>  Diretório do fluiggers_docs (default: ./fluiggers_docs)
  -o, --output <dir>  Diretório de saída do index  (default: ./fluiggers_docs/index)
  -h, --help          Mostra esta ajuda
`);
        process.exit(0);
    }
  }

  config.input = path.resolve(config.input);
  config.output = path.resolve(config.output);
  return config;
}

// ===========================================================================
// Helpers
// ===========================================================================

// Arquivos e pastas especiais que devem ser ignorados
const SKIP_NAMES = new Set([
  "INDEX.md",
  "manifest.json",
  "dump",
  "index",
  "README.md",
]);

function getCategoryDirs(inputDir) {
  return fs
    .readdirSync(inputDir)
    .filter((name) => !SKIP_NAMES.has(name))
    .map((name) => ({ name, fullPath: path.join(inputDir, name) }))
    .filter(({ fullPath }) => fs.statSync(fullPath).isDirectory());
}

function getTopicFiles(categoryDir) {
  return fs
    .readdirSync(categoryDir)
    .filter(
      (f) => f.endsWith(".md") && f !== "README.md" && f !== "INDEX.md"
    )
    .map((f) => path.join(categoryDir, f))
    .sort(); // alfabético
}

function sanitizeOutputName(name) {
  return name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").replace(/_+/g, "_");
}

// ===========================================================================
// Main
// ===========================================================================

function main() {
  const config = parseArgs();

  if (!fs.existsSync(config.input)) {
    console.error(`❌ Diretório de entrada não encontrado: ${config.input}`);
    process.exit(1);
  }

  fs.mkdirSync(config.output, { recursive: true });

  console.log("=".repeat(60));
  console.log("🗂️  build_index — Consolidando tópicos por categoria");
  console.log("=".repeat(60));
  console.log(`  Entrada: ${config.input}`);
  console.log(`  Saída:   ${config.output}`);
  console.log("=".repeat(60));
  console.log();

  const categories = getCategoryDirs(config.input);
  if (categories.length === 0) {
    console.error("❌ Nenhuma pasta de categoria encontrada.");
    process.exit(1);
  }

  let totalFiles = 0;
  let totalTopics = 0;
  const indexEntries = [];

  for (const { name, fullPath } of categories) {
    const topicFiles = getTopicFiles(fullPath);
    if (topicFiles.length === 0) {
      console.log(`⏭️  [${name}] — sem tópicos, pulando`);
      continue;
    }

    const outputName = sanitizeOutputName(name) + ".md";
    const outputPath = path.join(config.output, outputName);

    const sections = [];

    // Cabeçalho da categoria
    sections.push(`# ${name}`);
    sections.push("");
    sections.push(`> **${topicFiles.length} tópicos**`);
    sections.push("");
    sections.push("---");
    sections.push("");

    // Sumário rápido (lista de títulos com âncoras)
    sections.push("## Sumário");
    sections.push("");
    for (const filePath of topicFiles) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const titleMatch = raw.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, ".md");
      // âncora GitHub-style
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

    // Conteúdo de cada tópico
    for (const filePath of topicFiles) {
      const raw = fs.readFileSync(filePath, "utf-8");
      sections.push(raw.trim());
      sections.push("");
      sections.push("---");
      sections.push("");
    }

    const content = sections.join("\n");
    fs.writeFileSync(outputPath, content, "utf-8");

    indexEntries.push({
      category: name,
      file: outputName,
      topics: topicFiles.length,
    });

    totalTopics += topicFiles.length;
    totalFiles++;

    console.log(`✅ ${outputName.padEnd(45)} (${topicFiles.length} tópicos)`);
  }

  // Gerar index/INDEX.md com links para cada arquivo de categoria
  const indexLines = [
    "# 📚 Fluiggers — Índice por Categoria",
    "",
    `**Total de categorias:** ${totalFiles}`,
    `**Total de tópicos:**    ${totalTopics}`,
    `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
    "",
    "---",
    "",
  ];

  for (const entry of indexEntries) {
    indexLines.push(
      `- [${entry.category}](${encodeURIComponent(entry.file)}) — ${entry.topics} tópicos`
    );
  }

  const indexPath = path.join(config.output, "INDEX.md");
  fs.writeFileSync(indexPath, indexLines.join("\n") + "\n", "utf-8");

  console.log();
  console.log("=".repeat(60));
  console.log("✅ Concluído!");
  console.log(`  📁 Arquivos gerados: ${totalFiles}`);
  console.log(`  📄 Tópicos indexados: ${totalTopics}`);
  console.log(`  📋 Índice: ${indexPath}`);
  console.log("=".repeat(60));
}

main();
