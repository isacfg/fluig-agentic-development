const fs = require("fs");
const path = require("path");
const test = require("node:test");
const assert = require("node:assert/strict");

test("scrape_totvs_rm uses Gestão Contábil as the default start section", () => {
  const script = fs.readFileSync(
    path.join(__dirname, "..", "scrape_totvs_rm.js"),
    "utf8"
  );

  assert.match(script, /1500000830382-TOTVS-Gest%C3%A3o-Cont%C3%A1bil/);
});
