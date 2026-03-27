const test = require("node:test");
const assert = require("node:assert/strict");

const {
  DEFAULT_SOURCES,
  extractSwaggerSpecUrls,
  groupPagesByTopSection,
} = require("../scrape_fluig_docs_api");

test("DEFAULT_SOURCES inclui latest e old", () => {
  assert.deepEqual(DEFAULT_SOURCES, [
    "https://api.fluig.com/latest/index.html",
    "https://api.fluig.com/old/",
  ]);
});

test("extractSwaggerSpecUrls encontra swagger.json relativo", () => {
  const html = `
    <script>
      const ui = SwaggerUIBundle({
        url: "swagger.json",
      });
    </script>
  `;

  const specs = extractSwaggerSpecUrls(
    html,
    "https://api.fluig.com/latest/content-management/swagger-ui/"
  );

  assert.deepEqual(specs, [
    "https://api.fluig.com/latest/content-management/swagger-ui/swagger.json",
  ]);
});

test("groupPagesByTopSection agrupa latest e old", () => {
  const grouped = groupPagesByTopSection([
    { section: "latest", title: "A" },
    { section: "old", title: "B" },
    { section: "latest", title: "C" },
  ]);

  assert.equal(grouped.latest.length, 2);
  assert.equal(grouped.old.length, 1);
});
