import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const OAuthConfigSchema = z.object({
  type: z.literal("oauth1"),
  consumerKey: z.string().min(1),
  consumerSecret: z.string().min(1),
  token: z.string().min(1),
  tokenSecret: z.string().min(1),
});

const InstanceSchema = z.object({
  alias: z.string().min(1).regex(/^[a-zA-Z0-9._-]+$/, "use only letters, numbers, dot, underscore, or hyphen"),
  companyName: z.string().min(1),
  environment: z.enum(["hml", "prod"]),
  baseUrl: z.string().url(),
  auth: OAuthConfigSchema,
});

const ConfigSchema = z.object({
  instances: z.array(InstanceSchema).min(1),
});

export type FluigInstanceConfig = z.infer<typeof InstanceSchema>;
export type FluigMcpConfig = z.infer<typeof ConfigSchema>;

export function getConfigPathFromEnv(env: NodeJS.ProcessEnv = process.env): string {
  const configPath = env.FLUIG_MCP_CONFIG;

  if (!configPath) {
    throw new Error("FLUIG_MCP_CONFIG is required and must point to a fluig-mcp.config.json file.");
  }

  return path.resolve(configPath);
}

export function loadConfigFromEnv(env: NodeJS.ProcessEnv = process.env): FluigMcpConfig {
  return loadConfigFromPath(getConfigPathFromEnv(env));
}

export function loadConfigFromPath(configPath: string): FluigMcpConfig {
  if (!fs.existsSync(configPath)) {
    throw new Error(`Fluig MCP config file not found: ${configPath}`);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    throw new Error(`Unable to parse Fluig MCP config JSON at ${configPath}: ${getErrorMessage(error)}`);
  }

  const config = ConfigSchema.parse(parsed);
  assertUniqueAliases(config);

  return config;
}

export function publicInstanceInfo(instance: FluigInstanceConfig) {
  return {
    alias: instance.alias,
    companyName: instance.companyName,
    environment: instance.environment,
    baseUrl: instance.baseUrl,
  };
}

export function findInstance(config: FluigMcpConfig, alias: string): FluigInstanceConfig {
  const instance = config.instances.find((item) => item.alias === alias);

  if (!instance) {
    const availableAliases = config.instances.map((item) => item.alias).join(", ");
    throw new Error(`Unknown Fluig instance alias "${alias}". Available aliases: ${availableAliases}`);
  }

  return instance;
}

function assertUniqueAliases(config: FluigMcpConfig): void {
  const aliases = new Set<string>();

  for (const instance of config.instances) {
    if (aliases.has(instance.alias)) {
      throw new Error(`Duplicate Fluig instance alias "${instance.alias}" in config.`);
    }

    aliases.add(instance.alias);
  }
}

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
