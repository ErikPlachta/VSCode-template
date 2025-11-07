/**
 * @fileoverview Provides local MCP tool implementations backed by the bundled
 * datasets. This removes the need for a standalone HTTP MCP server because the
 * VS Code extension can now invoke the tools directly.
 */

import { readFile, readdir } from "fs/promises";
import * as path from "path";
import { MCPTool } from "../shared/mcpTypes";

interface DescribeCategoryResult {
  category: Record<string, unknown>;
  relationships: unknown[];
  schemas: unknown[];
  examples: unknown[];
  queries: unknown[];
}

/** Error thrown when a local tool cannot be executed. */
export class LocalToolError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = "LocalToolError";
  }
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

async function describeCategory(categoryId: string): Promise<DescribeCategoryResult> {
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

/** Local MCP tool catalogue used by the VS Code extension. */
export const LOCAL_MCP_TOOLS: MCPTool[] = [
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

/**
 * Return the locally available MCP tool catalogue.
 */
export async function listLocalTools(): Promise<MCPTool[]> {
  return LOCAL_MCP_TOOLS;
}

/**
 * Execute a local MCP tool implementation.
 *
 * @param {string} name Tool identifier to run.
 * @param {Record<string, unknown>} [args] Arguments supplied by the chat participant.
 * @returns {Promise<unknown>} Tool result payload.
 * @throws {LocalToolError} When validation fails or the tool is unknown.
 */
export async function invokeLocalTool(
  name: string,
  args: Record<string, unknown> = {}
): Promise<unknown> {
  try {
    switch (name) {
      case "relevant-data.describeCategory": {
        const categoryId = String(args.categoryId ?? "");
        if (!categoryId) {
          throw new LocalToolError("'categoryId' is required.");
        }
        return await describeCategory(categoryId);
      }
      case "relevant-data.searchRecords": {
        const categoryId = String(args.categoryId ?? "");
        if (!categoryId) {
          throw new LocalToolError("'categoryId' is required.");
        }
        const filters = (args.filters as Record<string, unknown> | undefined) ?? {};
        return await searchRecords(categoryId, filters);
      }
      default:
        throw new LocalToolError(`Unknown tool: ${name}`);
    }
  } catch (error) {
    if (error instanceof LocalToolError) {
      throw error;
    }
    throw new LocalToolError((error as Error).message, error);
  }
}
