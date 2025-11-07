/**
 * @fileoverview Fetches and normalises Model Context Protocol (MCP) tool
 * definitions.
 *
 * @module mcpSync
 */

import axios, { AxiosError } from "axios";

/**
 * JSON schema fragment describing a tool argument.
 */
export interface MCPProperty {
  /**
   * Argument identifier used when invoking the tool.
   *
   * @type {string}
   */
  name: string;
  /**
   * Primitive type such as `string`, `number`, `boolean`, or `array`.
   *
   * @type {string | string[]=}
   */
  type?: string | string[];
  /**
   * Human readable description for prompts and docs.
   *
   * @type {string=}
   */
  description?: string;
  /**
   * Static enumeration, if provided by the schema.
   *
   * @type {string[]=}
   */
  enum?: string[];
  /**
   * Suggested default value supplied by the backend.
   *
   * @type {unknown=}
   */
  default?: unknown;
  /**
   * Nested item type for array arguments.
   *
   * @type {MCPProperty=}
   */
  items?: MCPProperty;
  /**
   * Whether the parameter is required.
   *
   * @type {boolean=}
   */
  required?: boolean;
}

/**
 * Minimal JSON schema definition used by MCP tool payloads.
 */
export interface MCPInputSchema {
  /**
   * Map of argument names to property descriptors.
   *
   * @type {Record<string, MCPProperty & Record<string, unknown>>=}
   */
  properties?: Record<string, MCPProperty & Record<string, unknown>>;
  /**
   * List of keys that must be present.
   *
   * @type {string[]=}
   */
  required?: string[];
}

/**
 * Full MCP tool definition returned by `listTools`.
 */
export interface MCPTool {
  /**
   * Machine-readable tool identifier.
   *
   * @type {string}
   */
  name: string;
  /**
   * Title displayed to VS Code users.
   *
   * @type {string}
   */
  title: string;
  /**
   * Rich description detailing the tool purpose.
   *
   * @type {string}
   */
  description: string;
  /**
   * Optional extended summary for reference content.
   *
   * @type {string=}
   */
  summary?: string;
  /**
   * Optional category or tags provided by the MCP server.
   *
   * @type {string[]=}
   */
  tags?: string[];
  /**
   * JSON schema describing the tool arguments.
   *
   * @type {MCPInputSchema=}
   */
  input_schema?: MCPInputSchema;
}

/**
 * JSON-RPC 2.0 payload returned by the MCP server.
 */
export interface MCPListToolsResponse {
  /**
   * JSON-RPC protocol version.
   *
   * @type {string}
   */
  jsonrpc: string;
  /**
   * Identifier matching the request.
   *
   * @type {number | string}
   */
  id: number | string;
  /**
   * Successful response payload wrapper.
   *
   * @type {{ tools?: MCPTool[] }=}
   */
  result?: { tools?: MCPTool[] };
  /**
   * Error payload returned when the call fails.
   *
   * @type {{ code?: number; message: string; data?: unknown }=}
   */
  error?: { code?: number; message: string; data?: unknown };
}

/**
 * Error wrapper that provides additional context for MCP failures.
 */
export class MCPDiscoveryError extends Error {
  /**
   * Create a new discovery error.
   *
   * @param {string} message - Description of what went wrong.
   * @param {unknown} [cause] - Underlying error for diagnostics.
   */
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = "MCPDiscoveryError";
  }
}

/**
 * Normalise the tool properties by merging schema metadata so prompts can
 * surface richer descriptions.
 *
 * @param {MCPTool} tool - Tool definition returned by the MCP server.
 * @returns {MCPTool} New tool object containing enriched schema metadata.
 * @example
 * const tool = normaliseTool(rawTool);
 */
function normaliseTool(tool: MCPTool): MCPTool {
  if (!tool.input_schema?.properties) {
    return tool;
  }
  const required = new Set(tool.input_schema.required ?? []);
  const properties: Record<string, MCPProperty & Record<string, unknown>> = {};
  for (const [key, value] of Object.entries(tool.input_schema.properties)) {
    properties[key] = {
      ...(value as MCPProperty),
      name: key,
      required: required.has(key)
    };
  }
  return {
    ...tool,
    input_schema: {
      ...tool.input_schema,
      properties
    }
  };
}

/**
 * Fetch all available MCP tools from the configured server.
 *
 * @param {string} serverUrl - Base URL of the MCP server.
 * @param {string=} token - Optional Bearer token.
 * @returns {Promise<MCPTool[]>} Array of available MCP tools with enriched metadata.
 * @throws {MCPDiscoveryError} When the server cannot be reached or returns an invalid payload.
 * @example
 * const tools = await fetchTools("https://mcp.example.com", "token");
 */
export async function fetchTools(
  serverUrl: string,
  token?: string
): Promise<MCPTool[]> {
  if (!serverUrl) {
    throw new MCPDiscoveryError("The MCP server URL is not configured.");
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const payload = { jsonrpc: "2.0", id: Date.now(), method: "listTools", params: {} };

  try {
    const res = await axios.post<MCPListToolsResponse>(serverUrl, payload, {
      headers,
      timeout: 15000
    });
    if (res.data?.error) {
      throw new MCPDiscoveryError(
        `MCP server responded with an error: ${res.data.error.message}`,
        res.data.error
      );
    }
    const tools = res.data?.result?.tools ?? [];
    return tools.map(normaliseTool);
  } catch (error) {
    if (error instanceof MCPDiscoveryError) {
      throw error;
    }
    const axiosError = error as AxiosError;
    const message = axiosError.response?.data
      ? `Unable to fetch tools. Server responded with status ${axiosError.response.status}.`
      : `Unable to reach MCP server at ${serverUrl}.`;
    throw new MCPDiscoveryError(message, error);
  }
}
