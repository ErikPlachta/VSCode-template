import axios from "axios";

export interface MCPProperty {
  name: string;
  type?: string;
  description?: string;
  required?: boolean;
}

export interface MCPTool {
  name: string;
  title: string;
  description: string;
  input_schema?: {
    properties?: Record<string, any>;
    required?: string[];
  };
}

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
