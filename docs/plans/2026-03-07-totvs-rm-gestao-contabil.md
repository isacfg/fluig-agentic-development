# TOTVS RM Gestão Contábil Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Alterar o scraper padrão de TOTVS RM para iniciar na seção `TOTVS Gestão Contábil` em vez da seção `NUCLEUS`.

**Architecture:** A mudança é deliberadamente pequena. Um teste de regressão baseado em leitura do arquivo garante o valor esperado de `START_SECTION`, depois o script é atualizado para apontar para a nova seção mantendo o restante do comportamento intacto.

**Tech Stack:** Node.js, `node:test`, JavaScript CommonJS

---

### Task 1: Cobrir o alvo padrão do scraper

**Files:**
- Create: `tests/scrape_totvs_rm_start_section.test.js`
- Test: `tests/scrape_totvs_rm_start_section.test.js`

**Step 1: Write the failing test**

```js
const fs = require("fs");
const path = require("path");
const test = require("node:test");
const assert = require("node:assert/strict");

test("scrape_totvs_rm uses Gestão Contábil as the default start section", () => {
  const script = fs.readFileSync(
    path.join(__dirname, "..", "scrape_totvs_rm.js"),
    "utf8"
  );

  assert.match(
    script,
    /1500000830382-TOTVS-Gest%C3%A3o-Cont%C3%A1bil/
  );
});
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/scrape_totvs_rm_start_section.test.js`
Expected: FAIL because the script still references the `NUCLEUS` section.

### Task 2: Atualizar o scraper

**Files:**
- Modify: `scrape_totvs_rm.js`
- Test: `tests/scrape_totvs_rm_start_section.test.js`

**Step 3: Write minimal implementation**

```js
const START_SECTION =
  "/hc/pt-br/sections/1500000830382-TOTVS-Gest%C3%A3o-Cont%C3%A1bil";
```

**Step 4: Run test to verify it passes**

Run: `node --test tests/scrape_totvs_rm_start_section.test.js`
Expected: PASS

**Step 5: Commit**

```bash
git add scrape_totvs_rm.js tests/scrape_totvs_rm_start_section.test.js docs/plans/2026-03-07-totvs-rm-gestao-contabil-design.md docs/plans/2026-03-07-totvs-rm-gestao-contabil.md
git commit -m "chore: point TOTVS RM scraper to gestão contábil"
```
