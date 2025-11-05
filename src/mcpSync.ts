import axios from "axios";
import { MCPListToolsResponse, MCPTool } from "./types";
import { normalizeSchema, validateToolList } from "./validation";

export async function fetchTools(
  serverUrl: string,
  token?: string
): Promise<MCPTool[]> {
  if (!serverUrl) {
    return [];
  }
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const payload = { jsonrpc: "2.0", id: 1, method: "listTools", params: {} };
  const res = await axios.post<MCPListToolsResponse>(serverUrl, payload, { headers });
  const toolList = res.data?.result?.tools ?? [];
  const validated = validateToolList(toolList).map((tool) => ({
    ...tool,
    input_schema: normalizeSchema(tool.input_schema)
  }));
  return validated;
}
