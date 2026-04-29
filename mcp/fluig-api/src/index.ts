import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfigFromEnv } from "./config.js";
import { registerTools } from "./tools.js";

const server = new McpServer(
  {
    name: "fluig-readonly-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
      logging: {},
    },
  },
);

process.on("SIGINT", async () => {
  await server.close();
  process.exit(0);
});

async function runServer() {
  const config = loadConfigFromEnv();
  registerTools(server, config);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Fluig Readonly MCP running on stdio");
}

runServer().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Fatal error running Fluig Readonly MCP: ${message}`);
  process.exit(1);
});
