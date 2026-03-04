#!/usr/bin/env node
/**
 * =============================================================================
 * build_index_totvs_rm.js
 * =============================================================================
 * Lê o manifest.json gerado pelo scrape_totvs_rm.js e reconstrói a pasta
 * /index com um .md consolidado por subseção — sem precisar re-rodar o scraper.
 *
 * Uso:
 *   node build_index_totvs_rm.js [--output ./totvs_rm_docs]
 * =============================================================================
 */

const fs = require("fs");
const path = require("path");

// ===========================================================================
// Args
// ===========================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  let output = "./totvs_rm_docs";
  for (let i = 0; i < args.length; i++) {
    if ((args[i] === "--output" || args[i] === "-o") && args[i + 1]) {
      output = args[++i];
    }
  }
  return path.resolve(output);
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

function log(depth, emoji, msg) {
  const indent = "  ".repeat(depth);
  const time = new Date().toLocaleTimeString("pt-BR");
  console.log(`${time} ${indent}${emoji} ${msg}`);
}

// ===========================================================================
// buildSectionIndex: agrupa por subseção, gera um .md por grupo
// ===========================================================================

function buildSectionIndex(outputDir, articleIndex) {
  const indexDir = path.join(outputDir, "index");

  // Limpar index anterior
  if (fs.existsSync(indexDir)) {
    fs.rmSync(indexDir, { recursive: true });
  }
  fs.mkdirSync(indexDir, { recursive: true });

  log(0, "🗂️", "Consolidando artigos por subseção em /index...");

  // --------------------------------------------------------------------------
  // Agrupar por subseção de nível 1 após o root
  // Ex: "TOTVS Backoffice (Linha RM)/Documentos Eletrônicos/NFE" → "Documentos Eletrônicos"
  //     "TOTVS Gestão de Estoque.../Faturamento/..." → "Faturamento"
  // --------------------------------------------------------------------------
  const bySection = {};

  for (const entry of articleIndex) {
    // entry.section ex: "TOTVS Gestão de.../Faturamento/Subfoo"
    const parts = entry.section.split("/");
    // Pegar o nível 1 (índice 1) se existir, senão o root
    const topSection = parts.length > 1 ? parts[1] : parts[0];
    if (!bySection[topSection]) bySection[topSection] = [];
    bySection[topSection].push(entry);
  }

  const indexEntries = [];

  for (const [sectionName, entries] of Object.entries(bySection)) {
    if (entries.length === 0) continue;

    const lines = [];
    lines.push(`# ${sectionName}`);
    lines.push("");
    lines.push(`> **${entries.length} artigos**`);
    lines.push("");
    lines.push("---");
    lines.push("");

    // Sumário
    lines.push("## Sumário");
    lines.push("");
    for (const entry of entries) {
      const ext = entry.external ? " 🔗" : "";
      // Subseção do artigo para contexto
      const subPath = entry.section.split("/").slice(2).join(" / ");
      const subLabel = subPath ? ` _(${subPath})_` : "";
      lines.push(`- ${entry.title}${ext}${subLabel}`);
    }
    lines.push("");
    lines.push("---");
    lines.push("");

    // Conteúdo de cada artigo
    let included = 0;
    for (const entry of entries) {
      const filePath = path.join(outputDir, entry.file);
      if (!fs.existsSync(filePath)) {
        log(1, "⚠️", `Arquivo não encontrado: ${entry.file}`);
        continue;
      }
      const raw = fs.readFileSync(filePath, "utf-8");
      lines.push(raw.trim());
      lines.push("");
      lines.push("---");
      lines.push("");
      included++;
    }

    const outputName = sanitizeFilename(sectionName) + ".md";
    const outputPath = path.join(indexDir, outputName);
    fs.writeFileSync(outputPath, lines.join("\n"), "utf-8");

    indexEntries.push({ name: sectionName, file: outputName, count: included });
    log(1, "✅", `index/${outputName}  (${included} artigos)`);
  }

  // INDEX.md dentro de /index
  if (indexEntries.length > 0) {
    const idxLines = [
      "# 📚 TOTVS RM — Índice Consolidado por Subseção",
      "",
      `**Total de subseções:** ${indexEntries.length}`,
      `**Total de artigos:**   ${articleIndex.length}`,
      `**Gerado em:** ${new Date().toLocaleString("pt-BR")}`,
      "",
      "---",
      "",
    ];

    for (const e of indexEntries) {
      idxLines.push(
        `- [${e.name}](${encodeURIComponent(e.file)}) — ${e.count} artigos`
      );
    }

    const idxPath = path.join(indexDir, "INDEX.md");
    fs.writeFileSync(idxPath, idxLines.join("\n") + "\n", "utf-8");
    log(0, "📋", `INDEX.md: ${idxPath}`);
  }

  return indexEntries;
}

// ===========================================================================
// Main
// ===========================================================================

function main() {
  const outputDir = parseArgs();

  const manifestPath = path.join(outputDir, "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    console.error(`❌ manifest.json não encontrado em: ${outputDir}`);
    console.error(`   Rode primeiro: node scrape_totvs_rm.js --output ${outputDir}`);
    process.exit(1);
  }

  console.log("=".repeat(60));
  console.log("🚀 build_index_totvs_rm — Reconstruindo /index");
  console.log("=".repeat(60));
  console.log(`  Diretório: ${outputDir}`);
  console.log("=".repeat(60));
  console.log();

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  const articleIndex = manifest.articles || [];

  if (articleIndex.length === 0) {
    console.error("❌ Nenhum artigo encontrado no manifest.json.");
    process.exit(1);
  }

  log(0, "📦", `${articleIndex.length} artigos no manifest`);
  console.log();

  const result = buildSectionIndex(outputDir, articleIndex);

  console.log();
  console.log("=".repeat(60));
  console.log("✅ Concluído!");
  console.log(`  📁 Subseções geradas: ${result.length}`);
  console.log(`  📄 Total de artigos:  ${articleIndex.length}`);
  console.log(`  📁 Saída:             ${path.join(outputDir, "index")}`);
  console.log("=".repeat(60));
}

main();
