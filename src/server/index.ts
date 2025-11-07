/**
 * Minimal JSON-RPC server that exposes the mock business datasets through the
 * Model Context Protocol (MCP). It is intentionally lightweight so the VS Code
 * extension can connect to a local endpoint during development.
 */

import { createServer, IncomingMessage, ServerResponse } from "http";
import { readFile, readdir } from "fs/promises";
import * as path from "path";
import { MCPTool } from "../shared/mcpTypes";

interface JsonRpcRequest {
  jsonrpc: string;
  id: number | string | null;
  method: string;
  params?: Record<string, unknown>;
}

interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: number | string | null;
  result?: unknown;
  error?: { code: number; message: string; data?: unknown };
}

interface InvokeParams {
  name?: string;
  arguments?: Record<string, unknown>;
}

const DATA_ROOT = process.env.VSCODE_TEMPLATE_DATA_ROOT
  ? path.resolve(process.env.VSCODE_TEMPLATE_DATA_ROOT)
  : path.join(__dirname, "..", "..", "data");

async function loadJson<T>(...segments: string[]): Promise<T> {
  const filePath = path.join(DATA_ROOT, ...segments);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw) as T;
}

async function loadOptionalJson<T>(...segments: string[]): Promise<T | undefined> {
  try {
    return await loadJson<T>(...segments);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}

async function loadJsonCollection(categoryId: string, folder: string): Promise<unknown[]> {
  try {
    const directory = path.join(DATA_ROOT, categoryId, folder);
    const entries = await readdir(directory);
    const jsonFiles = entries.filter((file) => file.endsWith(".json"));
    const results: unknown[] = [];
    for (const file of jsonFiles) {
      results.push(await loadJson(categoryId, folder, file));
    }
    return results;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function describeCategory(categoryId: string): Promise<unknown> {
  const [category, relationships, schemas, examples, queries] = await Promise.all([
    loadJson<Record<string, unknown>>(categoryId, "category.json"),
    loadOptionalJson<unknown[]>(categoryId, "relationships.json"),
    loadJsonCollection(categoryId, "schemas"),
    loadJsonCollection(categoryId, "examples"),
    loadJsonCollection(categoryId, "queries")
  ]);
  return {
    category,
    relationships: relationships ?? [],
    schemas,
    examples,
    queries
  };
}

async function searchRecords(
  categoryId: string,
  filters: Record<string, unknown> = {}
): Promise<unknown[]> {
  const records = await loadJson<Record<string, unknown>[]>(categoryId, "records.json");
  const activeFilters = Object.entries(filters).filter(([, value]) => value !== undefined && value !== "");
  if (activeFilters.length === 0) {
    return records;
  }
  return records.filter((record) =>
    activeFilters.every(([key, value]) => {
      const recordValue = record[key];
      if (Array.isArray(recordValue)) {
        return value !== undefined && recordValue.includes(value);
      }
      return recordValue === value;
    })
  );
}

const tools: MCPTool[] = [
  {
    name: "relevant-data.describeCategory",
    title: "Describe category",
    description:
      "Return the configuration, schema catalogue, and relationship metadata for a business category.",
    tags: ["metadata", "documentation"],
    input_schema: {
      required: ["categoryId"],
      properties: {
        categoryId: {
          name: "categoryId",
          type: "string",
          description: "Identifier of the category to describe.",
          required: true
        }
      }
    }
  },
  {
    name: "relevant-data.searchRecords",
    title: "Search category records",
    description:
      "Search the mock dataset for a category using optional equality filters over structured fields.",
    tags: ["records", "query"],
    input_schema: {
      required: ["categoryId"],
      properties: {
        categoryId: {
          name: "categoryId",
          type: "string",
          description: "Identifier of the category to query.",
          required: true
        },
        filters: {
          name: "filters",
          type: "object",
          description: "Map of field names to equality values used when filtering records."
        }
      }
    }
  }
];

async function handleInvoke(name: string, args: Record<string, unknown> = {}): Promise<unknown> {
  switch (name) {
    case "relevant-data.describeCategory": {
      const categoryId = String(args.categoryId ?? "");
      if (!categoryId) {
        throw new Error("'categoryId' is required.");
      }
      return describeCategory(categoryId);
    }
    case "relevant-data.searchRecords": {
      const categoryId = String(args.categoryId ?? "");
      if (!categoryId) {
        throw new Error("'categoryId' is required.");
      }
      const filters = (args.filters as Record<string, unknown> | undefined) ?? {};
      return searchRecords(categoryId, filters);
    }
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

function sendJson(res: ServerResponse, response: JsonRpcResponse): void {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(response));
}

async function handleRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== "POST") {
    res.writeHead(405, { "Allow": "POST" });
    res.end();
    return;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  let payload: JsonRpcRequest;
  try {
    payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch (error) {
    sendJson(res, {
      jsonrpc: "2.0",
      id: null,
      error: { code: -32700, message: "Invalid JSON", data: (error as Error).message }
    });
    return;
  }

  if (payload.method === "listTools") {
    sendJson(res, { jsonrpc: "2.0", id: payload.id ?? null, result: { tools } });
    return;
  }

  if (payload.method !== "invokeTool") {
    sendJson(res, {
      jsonrpc: "2.0",
      id: payload.id ?? null,
      error: { code: -32601, message: `Unknown method: ${payload.method}` }
    });
    return;
  }

  const params = (payload.params ?? {}) as InvokeParams;
  const toolName = params.name;
  if (!toolName) {
    sendJson(res, {
      jsonrpc: "2.0",
      id: payload.id ?? null,
      error: { code: -32602, message: "Tool name is required" }
    });
    return;
  }

  try {
    const result = await handleInvoke(toolName, params.arguments ?? {});
    sendJson(res, { jsonrpc: "2.0", id: payload.id ?? null, result: { content: result } });
  } catch (error) {
    sendJson(res, {
      jsonrpc: "2.0",
      id: payload.id ?? null,
      error: { code: -32000, message: (error as Error).message }
    });
  }
}

export function createMcpServer(port = Number(process.env.MCP_PORT ?? 3030)) {
  const server = createServer((req, res) => {
    void handleRequest(req, res).catch((error) => {
      sendJson(res, {
        jsonrpc: "2.0",
        id: null,
        error: { code: -32603, message: "Internal error", data: (error as Error).message }
      });
    });
  });
  return server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`MCP mock server listening on http://localhost:${port}`);
  });
}

if (require.main === module) {
  createMcpServer();
}

export { tools };
