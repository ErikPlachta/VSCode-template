/**
 * @fileoverview Fetches and types Model Context Protocol (MCP) tools.
 */

import axios from "axios";

/** Property definition for an MCP tool input. */
export interface MCPProperty {
  name: string;
  type?: string;
  description?: string;
  required?: boolean;
}

/** Full MCP tool definition returned by `listTools`. */
export interface MCPTool {
  name: string;
  title: string;
  description: string;
  input_schema?: {
    properties?: Record<string, any>;
    required?: string[];
  };
}

/**
 * Fetch all available MCP tools from the configured server.
 * @param {string} serverUrl - Base URL of the MCP server.
 * @param {string} [token] - Optional Bearer token.
 * @returns {Promise<MCPTool[]>} - Array of available MCP tools.
 */
export async function fetchTools(
  serverUrl: string,
  token?: string
): Promise<MCPTool[]> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const payload = { jsonrpc: "2.0", id: 1, method: "listTools", params: {} };
  const res = await axios.post(serverUrl, payload, { headers });
  return res.data?.result?.tools ?? [];
}
