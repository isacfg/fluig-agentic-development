import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { findInstance, publicInstanceInfo, type FluigMcpConfig } from "./config.js";
import { FluigApiError, FluigClient } from "./fluigClient.js";

const DatasetSearchToolSchema = {
  instanceAlias: z.string().min(1).describe("Alias da instancia Fluig configurada, por exemplo cliente-a-hml."),
  datasetId: z.string().min(1).describe("Identificador do dataset Fluig, por exemplo colleague."),
  limit: z.number().int().positive().max(500).optional().describe("Limite de registros. Default 50, maximo 500."),
  method: z.enum(["GET", "POST"]).optional().describe("Metodo HTTP para /ecm/dataset/search. Default POST."),
  searchField: z.string().optional().describe("Campo usado para filtro sob demanda."),
  searchValue: z.string().optional().describe("Valor usado com searchField."),
  filterFields: z.array(z.string()).optional().describe("Campos de pre-filtro em pares campo/valor, conforme Dataset Handle."),
  resultFields: z.array(z.string()).optional().describe("Colunas desejadas no retorno."),
  likeField: z.string().optional().describe("Campo usado para busca aproximada. Em metadados, troque # por _ quando necessario."),
  likeValue: z.string().optional().describe("Valor usado com likeField."),
  orderBy: z.string().optional().describe("Campo de ordenacao aceito pelo Fluig."),
};

export function registerTools(server: McpServer, config: FluigMcpConfig): void {
  server.tool(
    "fluig_list_instances",
    "Lista as instancias Fluig configuradas sem expor credenciais.",
    {},
    async () => {
      return jsonText({
        instances: config.instances.map(publicInstanceInfo),
      });
    },
  );

  server.tool(
    "fluig_dataset_search",
    "Consulta readonly o endpoint /ecm/dataset/search de uma instancia Fluig autenticada.",
    DatasetSearchToolSchema,
    async (input) => {
      try {
        const instance = findInstance(config, input.instanceAlias);
        const client = new FluigClient(instance);
        const result = await client.datasetSearch({
          method: input.method,
          datasetId: input.datasetId,
          limit: input.limit,
          searchField: input.searchField,
          searchValue: input.searchValue,
          filterFields: input.filterFields,
          resultFields: input.resultFields,
          likeField: input.likeField,
          likeValue: input.likeValue,
          orderBy: input.orderBy,
        });

        return jsonText(result);
      } catch (error) {
        return jsonText(formatToolError(error), true);
      }
    },
  );
}

function jsonText(value: unknown, isError = false) {
  return {
    isError,
    content: [
      {
        type: "text" as const,
        text: JSON.stringify(value, null, 2),
      },
    ],
  };
}

function formatToolError(error: unknown) {
  if (error instanceof FluigApiError) {
    return {
      error: error.message,
      details: error.details,
    };
  }

  return {
    error: error instanceof Error ? error.message : String(error),
  };
}
