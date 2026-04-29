import crypto from "node:crypto";
import axios, { AxiosError, type AxiosRequestConfig } from "axios";
import OAuth from "oauth-1.0a";
import type { FluigInstanceConfig } from "./config.js";

export type DatasetSearchInput = {
  method?: "GET" | "POST";
  datasetId: string;
  limit?: number;
  searchField?: string;
  searchValue?: string;
  filterFields?: string[];
  resultFields?: string[];
  likeField?: string;
  likeValue?: string;
  orderBy?: string;
};

export type NormalizedDatasetResponse = {
  instance: {
    alias: string;
    companyName: string;
    environment: "hml" | "prod";
    baseUrl: string;
  };
  endpoint: string;
  request: {
    method: "GET" | "POST";
    datasetId: string;
    limit: number;
    searchField?: string;
    searchValue?: string;
    filterFields?: string[];
    resultFields?: string[];
    likeField?: string;
    likeValue?: string;
    orderBy?: string;
  };
  dataset?: {
    columns?: string[];
    rows?: unknown[];
    rowCount?: number;
  };
  raw: unknown;
};

export type FluigHttpClient = {
  request(config: AxiosRequestConfig): Promise<{ data: unknown }>;
};

const DATASET_SEARCH_PATH = "/ecm/dataset/search";
const DEFAULT_LIMIT = 50;
const MAX_LIMIT = 500;

export class FluigApiError extends Error {
  constructor(
    message: string,
    public readonly details: {
      alias: string;
      endpoint: string;
      status?: number;
      response?: unknown;
    },
  ) {
    super(message);
    this.name = "FluigApiError";
  }
}

export class FluigClient {
  private readonly httpClient: FluigHttpClient;
  private readonly oauth: OAuth;

  constructor(
    private readonly instance: FluigInstanceConfig,
    httpClient?: FluigHttpClient,
  ) {
    this.httpClient = httpClient ?? axios.create({ timeout: 30000 });
    this.oauth = new OAuth({
      consumer: {
        key: instance.auth.consumerKey,
        secret: instance.auth.consumerSecret,
      },
      signature_method: "HMAC-SHA1",
      hash_function(baseString, key) {
        return crypto.createHmac("sha1", key).update(baseString).digest("base64");
      },
    });
  }

  async datasetSearch(input: DatasetSearchInput): Promise<NormalizedDatasetResponse> {
    const method = input.method ?? "POST";
    const requestPayload = sanitizeDatasetSearchInput(input);
    const endpointUrl = new URL(DATASET_SEARCH_PATH, withTrailingSlash(this.instance.baseUrl)).toString();
    const axiosRequest = this.buildSignedRequest(method, endpointUrl, requestPayload);

    try {
      const response = await this.httpClient.request(axiosRequest);

      return normalizeDatasetResponse(this.instance, method, endpointUrl, requestPayload, response.data);
    } catch (error) {
      throw this.toFluigApiError(error, endpointUrl);
    }
  }

  private buildSignedRequest(
    method: "GET" | "POST",
    url: string,
    requestPayload: ReturnType<typeof sanitizeDatasetSearchInput>,
  ): AxiosRequestConfig {
    const token = {
      key: this.instance.auth.token,
      secret: this.instance.auth.tokenSecret,
    };
    const requestData = {
      url,
      method,
      data: method === "GET" ? requestPayload : undefined,
    };
    const authHeader = this.oauth.toHeader(this.oauth.authorize(requestData, token));

    const baseRequest: AxiosRequestConfig = {
      url,
      method,
      headers: {
        ...authHeader,
        Accept: "application/json",
      },
    };

    if (method === "GET") {
      return {
        ...baseRequest,
        params: requestPayload,
      };
    }

    return {
      ...baseRequest,
      headers: {
        ...baseRequest.headers,
        "Content-Type": "application/json",
      },
      data: requestPayload,
    };
  }

  private toFluigApiError(error: unknown, endpoint: string): FluigApiError {
    if (isAxiosError(error)) {
      const status = error.response?.status;
      const response = redactSecrets(error.response?.data);
      const statusMessage = status ? `HTTP ${status}` : "HTTP request failed";
      const message = `Fluig API error on alias "${this.instance.alias}" at ${endpoint}: ${statusMessage}`;

      return new FluigApiError(message, {
        alias: this.instance.alias,
        endpoint,
        status,
        response,
      });
    }

    const message = error instanceof Error ? error.message : String(error);

    return new FluigApiError(`Fluig API error on alias "${this.instance.alias}" at ${endpoint}: ${message}`, {
      alias: this.instance.alias,
      endpoint,
    });
  }
}

export function sanitizeDatasetSearchInput(input: DatasetSearchInput) {
  const limit = Math.min(Math.max(input.limit ?? DEFAULT_LIMIT, 1), MAX_LIMIT);
  const request: NormalizedDatasetResponse["request"] = {
    method: input.method ?? "POST",
    datasetId: input.datasetId,
    limit,
  };

  copyIfDefined(request, "searchField", input.searchField);
  copyIfDefined(request, "searchValue", input.searchValue);
  copyIfDefined(request, "filterFields", input.filterFields);
  copyIfDefined(request, "resultFields", input.resultFields);
  copyIfDefined(request, "likeField", input.likeField);
  copyIfDefined(request, "likeValue", input.likeValue);
  copyIfDefined(request, "orderBy", input.orderBy);

  return request;
}

export function normalizeDatasetResponse(
  instance: FluigInstanceConfig,
  method: "GET" | "POST",
  endpoint: string,
  request: ReturnType<typeof sanitizeDatasetSearchInput>,
  raw: unknown,
): NormalizedDatasetResponse {
  const content = isRecord(raw) ? raw.content : undefined;
  const columns = extractColumns(content);
  const rows = extractRows(content);

  return {
    instance: {
      alias: instance.alias,
      companyName: instance.companyName,
      environment: instance.environment,
      baseUrl: instance.baseUrl,
    },
    endpoint,
    request: {
      ...request,
      method,
    },
    dataset:
      columns || rows
        ? {
            ...(columns ? { columns } : {}),
            ...(rows ? { rows, rowCount: rows.length } : {}),
          }
        : undefined,
    raw,
  };
}

export function redactSecrets(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => redactSecrets(item));
  }

  if (!isRecord(value)) {
    return value;
  }

  const redacted: Record<string, unknown> = {};
  for (const [key, nestedValue] of Object.entries(value)) {
    if (/secret|token|consumerKey|consumerSecret|authorization/i.test(key)) {
      redacted[key] = "[REDACTED]";
    } else {
      redacted[key] = redactSecrets(nestedValue);
    }
  }

  return redacted;
}

function copyIfDefined<T extends Record<string, unknown>, K extends keyof T>(target: T, key: K, value: T[K] | undefined): void {
  if (value !== undefined) {
    target[key] = value;
  }
}

function extractColumns(content: unknown): string[] | undefined {
  if (!isRecord(content) || !Array.isArray(content.columns)) {
    return undefined;
  }

  return content.columns.map((column) => String(column));
}

function extractRows(content: unknown): unknown[] | undefined {
  if (!isRecord(content)) {
    return undefined;
  }

  if (Array.isArray(content.values)) {
    return content.values;
  }

  if (Array.isArray(content)) {
    return content;
  }

  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAxiosError(error: unknown): error is AxiosError {
  return axios.isAxiosError(error);
}

function withTrailingSlash(url: string): string {
  return url.endsWith("/") ? url : `${url}/`;
}
