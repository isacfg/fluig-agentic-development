import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { loadConfigFromPath, publicInstanceInfo } from "../src/config.js";

test("loads config and exposes public instance info without secrets", () => {
  const configPath = writeTempConfig({
    instances: [validInstance("cliente-a-hml")],
  });

  const config = loadConfigFromPath(configPath);
  assert.equal(config.instances.length, 1);
  assert.deepEqual(publicInstanceInfo(config.instances[0]), {
    alias: "cliente-a-hml",
    companyName: "Cliente A",
    environment: "hml",
    baseUrl: "https://cliente-a-hml.fluig.com",
  });
  assert.equal(JSON.stringify(publicInstanceInfo(config.instances[0])).includes("secret"), false);
});

test("rejects duplicate aliases", () => {
  const configPath = writeTempConfig({
    instances: [validInstance("cliente-a-hml"), validInstance("cliente-a-hml")],
  });

  assert.throws(() => loadConfigFromPath(configPath), /Duplicate Fluig instance alias/);
});

test("rejects incomplete oauth credentials", () => {
  const instance = validInstance("cliente-a-hml");
  instance.auth.tokenSecret = "";
  const configPath = writeTempConfig({
    instances: [instance],
  });

  assert.throws(() => loadConfigFromPath(configPath), /tokenSecret/);
});

test("rejects missing config file", () => {
  assert.throws(() => loadConfigFromPath("/tmp/fluig-mcp-does-not-exist.json"), /not found/);
});

function validInstance(alias: string) {
  return {
    alias,
    companyName: "Cliente A",
    environment: "hml",
    baseUrl: "https://cliente-a-hml.fluig.com",
    auth: {
      type: "oauth1",
      consumerKey: "consumer-key",
      consumerSecret: "consumer-secret",
      token: "token",
      tokenSecret: "token-secret",
    },
  };
}

function writeTempConfig(config: unknown): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "fluig-mcp-config-"));
  const configPath = path.join(dir, "fluig-mcp.config.json");
  fs.writeFileSync(configPath, JSON.stringify(config), "utf8");
  return configPath;
}
