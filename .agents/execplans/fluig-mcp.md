# Fluig Readonly MCP

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds.

This plan follows `.agents/PLANS.md` from the repository root.

## Purpose / Big Picture

After this change, an assistant can connect to one local Model Context Protocol server and query readonly Fluig REST dataset endpoints across multiple authenticated Fluig environments. A user can configure aliases such as `cliente-a-hml` and `cliente-a-prod`, list those aliases through MCP, and call `/ecm/dataset/search` without creating temporary Rhino scripts inside Fluig. The feature is observable by building the MCP server, running the test suite, and using MCP Inspector or a compatible MCP client to call `fluig_list_instances` and `fluig_dataset_search`.

## Progress

- [x] (2026-04-26) Create this ExecPlan before implementation.
- [x] (2026-04-26) Add the TypeScript MCP subproject under `mcp/fluig-api`.
- [x] (2026-04-26) Add readonly Fluig config loading, OAuth 1.0a request signing, and dataset search normalization.
- [x] (2026-04-26) Add the bundled skill at `mcp/fluig-api/skill/SKILL.md`.
- [x] (2026-04-26) Add automated tests for config validation, secret redaction, dataset request construction, and response normalization.
- [x] (2026-04-26) Build and test the MCP subproject.

## Surprises & Discoveries

- Observation: The repository did not have an existing MCP package, so the implementation is an additive subproject rather than an extension of existing runtime code.
  Evidence: `find mcp -maxdepth 4 -type f -print` reported `find: mcp: No such file or directory` before implementation.

## Decision Log

- Decision: Put the skill in `mcp/fluig-api/skill/SKILL.md` instead of `building-skills/Fluig`.
  Rationale: The user explicitly asked to bundle the MCP skill in the same folder as the MCP so the runtime and usage guidance ship together.
  Date/Author: 2026-04-26 / Codex.

- Decision: Use POST as the default method for `/ecm/dataset/search`, while allowing GET through a `method` input.
  Rationale: POST preserves array inputs such as `filterFields` and `resultFields` more clearly, but the Fluig documentation lists both GET and POST for this readonly endpoint.
  Date/Author: 2026-04-26 / Codex.

- Decision: Load secrets from a local JSON file selected by `FLUIG_MCP_CONFIG`.
  Rationale: The user preferred repository-local JSON configuration, and an environment variable avoids hard-coding a machine-specific secret path.
  Date/Author: 2026-04-26 / Codex.

## Outcomes & Retrospective

The implementation is complete for the first increment. The MCP builds to `mcp/fluig-api/dist/index.cjs`, exposes `fluig_list_instances` and `fluig_dataset_search`, includes a bundled skill with Dataset Handle examples, and has tests covering the expected offline behavior. A real Fluig HML/PROD smoke test remains optional because this repository does not contain real credentials.

## Context and Orientation

This repository is primarily a collection of Fluig and TOTVS RM skills and scraped reference documentation. The root `README.md` lists available skills. There was no prior `mcp/` directory, so the new MCP lives at `mcp/fluig-api`.

MCP means Model Context Protocol: a standard way for AI clients to discover and call tools exposed by a local or remote server. This implementation uses the TypeScript MCP SDK and stdio transport, meaning an MCP client starts `node mcp/fluig-api/dist/index.cjs` and communicates through standard input and output.

Fluig datasets are tabular responses produced by Fluig. The REST endpoint `/ecm/dataset/search` accepts a dataset id plus optional filters and returns a wrapper that commonly contains `content.values`, `content.columns`, and `message`.

## Plan of Work

Create a TypeScript package in `mcp/fluig-api` modeled after `MatthewDailey/mcp-starter`. Add config loading in `src/config.ts`, a readonly Fluig HTTP client in `src/fluigClient.ts`, MCP tool registration in `src/tools.ts`, and the stdio entrypoint in `src/index.ts`. The client signs requests with OAuth 1.0a, builds either POST bodies or GET query strings for `/ecm/dataset/search`, and normalizes common Fluig dataset response shapes.

Add `fluig-mcp.config.example.json` and ignore real config files. Add a bundled skill in `mcp/fluig-api/skill/SKILL.md` that explains setup, expected dataset returns, and Dataset Handle input examples. Update the root `README.md` to point to this bundled skill.

Add offline tests in `mcp/fluig-api/tests` using Node's built-in test runner. Bundle tests with esbuild so the project does not require a separate test framework.

## Concrete Steps

From the repository root, install and validate the subproject:

    cd mcp/fluig-api
    npm install
    npm run build
    npm test

To configure a real local MCP client, copy the example config to an untracked file, fill in real OAuth credentials, build, and point the client at the compiled entrypoint:

    cp fluig-mcp.config.example.json fluig-mcp.config.json
    npm run build
    FLUIG_MCP_CONFIG=/absolute/path/to/mcp/fluig-api/fluig-mcp.config.json node dist/index.cjs

For Claude Desktop-style clients, the server command is `node` and the args contain the absolute path to `mcp/fluig-api/dist/index.cjs`; set `FLUIG_MCP_CONFIG` in the server environment.

## Validation and Acceptance

Run `npm run build` in `mcp/fluig-api` and expect `dist/index.cjs` to exist. Run `npm test` and expect all Node tests to pass. The config tests prove that missing files, duplicate aliases, and incomplete OAuth credentials are rejected. The dataset tests prove that `fluig_dataset_search` constructs `/ecm/dataset/search`, sends readonly inputs, signs the request with OAuth, redacts secrets, and normalizes `content.values` and `content.columns`.

With real Fluig credentials, calling `fluig_list_instances` must return configured aliases without secrets. Calling `fluig_dataset_search` with `{ "instanceAlias": "cliente-a-hml", "datasetId": "colleague", "limit": 5 }` should return at most five rows or a sanitized Fluig HTTP error.

## Idempotence and Recovery

The implementation is additive. Re-running `npm install`, `npm run build`, and `npm test` is safe. Real credential files named `fluig-mcp.config.json` are ignored and should not be committed. If a real Fluig call fails with 401 or 403, verify the alias credentials and base URL in the local config rather than changing code.

## Artifacts and Notes

Important files:

    mcp/fluig-api/src/index.ts
    mcp/fluig-api/src/config.ts
    mcp/fluig-api/src/fluigClient.ts
    mcp/fluig-api/src/tools.ts
    mcp/fluig-api/skill/SKILL.md
    mcp/fluig-api/fluig-mcp.config.example.json

## Interfaces and Dependencies

The package depends on `@modelcontextprotocol/sdk`, `zod`, `axios`, and `oauth-1.0a`. It uses Node.js 18 or newer.

The MCP tools are:

    fluig_list_instances(input: {}) -> text/json
    fluig_dataset_search(input: {
      instanceAlias: string;
      datasetId: string;
      limit?: number;
      method?: "GET" | "POST";
      searchField?: string;
      searchValue?: string;
      filterFields?: string[];
      resultFields?: string[];
      likeField?: string;
      likeValue?: string;
      orderBy?: string;
    }) -> text/json

The config file shape is:

    {
      "instances": [
        {
          "alias": "cliente-a-hml",
          "companyName": "Cliente A",
          "environment": "hml",
          "baseUrl": "https://cliente-a-hml.fluig.com",
          "auth": {
            "type": "oauth1",
            "consumerKey": "...",
            "consumerSecret": "...",
            "token": "...",
            "tokenSecret": "..."
          }
        }
      ]
    }
