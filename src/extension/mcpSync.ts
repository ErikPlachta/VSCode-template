/**
 * @fileoverview Fetches and normalises Model Context Protocol (MCP) tool
 * definitions.
 *
 * @module mcpSync
 */

import axios, { AxiosError } from "axios";
import {
  MCPInputSchema,
  MCPListToolsResponse,
  MCPProperty,
  MCPTool
} from "../shared/mcpTypes";

/**
 * Error wrapper that provides additional context for MCP failures.
 *
 * @example
 * ```ts
 * throw new MCPDiscoveryError("Unable to list tools");
 * ```
 */
export class MCPDiscoveryError extends Error {
  /**
   * @param {string} message Human-readable error message.
   * @param {unknown} [cause] Optional root cause supplied by axios or the MCP server.
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
 * @param {MCPTool} tool Tool metadata as returned by the MCP server.
 * @returns {MCPTool} Tool with enriched `input_schema` metadata.
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
 * @param {string} serverUrl Base URL of the MCP server.
 * @param {string} [token] Optional Bearer token.
 * @returns {Promise<MCPTool[]>} Array of available MCP tools with enriched metadata.
 * @throws {MCPDiscoveryError} When the server cannot be reached or returns an invalid payload.
 * @example
 * ```ts
 * const tools = await fetchTools("https://mcp.example.com", "token");
 * console.log(tools.length);
 * ```
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

export type { MCPInputSchema, MCPListToolsResponse, MCPProperty, MCPTool } from "../shared/mcpTypes";
