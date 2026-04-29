import test from "node:test";
import assert from "node:assert/strict";
import { FluigClient, normalizeDatasetResponse, redactSecrets, sanitizeDatasetSearchInput, type FluigHttpClient } from "../src/fluigClient.js";
import type { FluigInstanceConfig } from "../src/config.js";

test("sanitizes dataset search input with default and max limit", () => {
  assert.deepEqual(sanitizeDatasetSearchInput({ datasetId: "colleague" }), {
    method: "POST",
    datasetId: "colleague",
    limit: 50,
  });

  assert.equal(sanitizeDatasetSearchInput({ datasetId: "colleague", limit: 999 }).limit, 500);
});

test("normalizes content values and columns from dataset response", () => {
  const normalized = normalizeDatasetResponse(
    instance,
    "POST",
    "https://cliente-a-hml.fluig.com/ecm/dataset/search",
    sanitizeDatasetSearchInput({ datasetId: "colleague", limit: 2 }),
    {
      content: {
        columns: ["login", "colleagueName"],
        values: [
          { login: "adm", colleagueName: "Admin" },
          { login: "maria", colleagueName: "Maria" },
        ],
      },
      message: null,
    },
  );

  assert.equal(normalized.dataset?.rowCount, 2);
  assert.deepEqual(normalized.dataset?.columns, ["login", "colleagueName"]);
});

test("dataset search posts to /ecm/dataset/search with oauth header", async () => {
  const requests: unknown[] = [];
  const httpClient: FluigHttpClient = {
    async request(config) {
      requests.push(config);
      return {
        data: {
          content: {
            columns: ["login"],
            values: [{ login: "adm" }],
          },
          message: null,
        },
      };
    },
  };
  const client = new FluigClient(instance, httpClient);

  const result = await client.datasetSearch({
    datasetId: "colleague",
    resultFields: ["login"],
    limit: 1,
  });

  assert.equal(result.endpoint, "https://cliente-a-hml.fluig.com/ecm/dataset/search");
  assert.equal(result.dataset?.rowCount, 1);
  assert.equal(requests.length, 1);

  const request = requests[0] as {
    url: string;
    method: string;
    data: { datasetId: string; resultFields: string[]; limit: number };
    headers: Record<string, string>;
  };
  assert.equal(request.url, "https://cliente-a-hml.fluig.com/ecm/dataset/search");
  assert.equal(request.method, "POST");
  assert.equal(request.data.datasetId, "colleague");
  assert.deepEqual(request.data.resultFields, ["login"]);
  assert.match(request.headers.Authorization, /^OAuth /);
});

test("dataset search supports GET query params", async () => {
  const requests: unknown[] = [];
  const httpClient: FluigHttpClient = {
    async request(config) {
      requests.push(config);
      return { data: { content: { values: [] }, message: null } };
    },
  };
  const client = new FluigClient(instance, httpClient);

  await client.datasetSearch({
    method: "GET",
    datasetId: "colleague",
    searchField: "login",
    searchValue: "adm",
    limit: 5,
  });

  const request = requests[0] as {
    method: string;
    params: { datasetId: string; searchField: string; searchValue: string; limit: number };
    data?: unknown;
  };
  assert.equal(request.method, "GET");
  assert.equal(request.params.datasetId, "colleague");
  assert.equal(request.params.searchField, "login");
  assert.equal(request.params.searchValue, "adm");
  assert.equal(request.data, undefined);
});

test("redacts secret-like fields recursively", () => {
  assert.deepEqual(
    redactSecrets({
      token: "abc",
      nested: {
        consumerSecret: "def",
        safe: "ok",
      },
    }),
    {
      token: "[REDACTED]",
      nested: {
        consumerSecret: "[REDACTED]",
        safe: "ok",
      },
    },
  );
});

const instance: FluigInstanceConfig = {
  alias: "cliente-a-hml",
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
