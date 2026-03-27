const test = require("node:test");
const assert = require("node:assert/strict");

const {
  DEFAULT_SOURCE,
  normalizeUrl,
  shouldCrawl,
  extractSectionAnchors,
  groupPagesByTopSection,
  cleanContentHtml,
} = require("../scrape_fluig_styleguide");

test("DEFAULT_SOURCE aponta para a raiz do style guide", () => {
  assert.equal(DEFAULT_SOURCE, "https://style.fluig.com/");
});

test("normalizeUrl mantém páginas HTML do host e remove hash", () => {
  assert.equal(
    normalizeUrl("/components.html#buttons", DEFAULT_SOURCE),
    "https://style.fluig.com/components.html"
  );
});

test("shouldCrawl aceita páginas HTML do style guide e rejeita links externos e hashes", () => {
  assert.equal(shouldCrawl("https://style.fluig.com/components.html"), true);
  assert.equal(shouldCrawl("https://style.fluig.com/components.html#buttons"), true);
  assert.equal(shouldCrawl("https://api.fluig.com/"), false);
  assert.equal(shouldCrawl("mailto:contato@totvs.com.br"), false);
  assert.equal(shouldCrawl("#buttons"), false);
});

test("extractSectionAnchors coleta headings com id e remove duplicidades", () => {
  const html = `
    <div class="content">
      <h1 id="buttons">Buttons</h1>
      <h2 id="buttons-options">Options</h2>
      <h2 id="buttons-options">Options</h2>
      <h3>Sem ancora</h3>
      <section id="custom-switches-tab"><h2>Custom Switches</h2></section>
    </div>
  `;

  assert.deepEqual(extractSectionAnchors(html), [
    { id: "buttons", text: "Buttons" },
    { id: "buttons-options", text: "Options" },
    { id: "custom-switches-tab", text: "Custom Switches" },
  ]);
});

test("groupPagesByTopSection agrupa páginas pela raiz do caminho", () => {
  const grouped = groupPagesByTopSection([
    { section: "components", title: "Buttons" },
    { section: "css", title: "Grid" },
    { section: "components", title: "Cards" },
  ]);

  assert.equal(grouped.components.length, 2);
  assert.equal(grouped.css.length, 1);
});

test("cleanContentHtml reescreve links internos para markdown sem quebrar o DOM clonado", () => {
  const html = `
    <div class="content">
      <a href="/components.html">Components</a>
      <a href="#buttons">Buttons</a>
    </div>
  `;

  const cleaned = cleanContentHtml(html, DEFAULT_SOURCE);

  assert.match(cleaned, /href="components\.md"/);
  assert.match(cleaned, /href="#buttons"/);
});
