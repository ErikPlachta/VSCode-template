export type JSONSchemaPrimitive = "string" | "number" | "integer" | "boolean" | "object" | "array";

export interface JSONSchemaProperty {
  type: JSONSchemaPrimitive;
  description?: string;
  enum?: Array<string | number | boolean>;
  format?: string;
  items?: JSONSchemaProperty | JSONSchemaProperty[];
  default?: unknown;
}

export interface ToolInputSchema {
  type: "object";
  description?: string;
  properties?: Record<string, JSONSchemaProperty>;
  required?: string[];
  additionalProperties?: boolean;
}

export interface MCPTool {
  name: string;
  title: string;
  description: string;
  input_schema?: ToolInputSchema;
}

export interface MCPInvocationPayload {
  jsonrpc: "2.0";
  id: number;
  method: "invokeTool";
  params: {
    name: string;
    arguments: Record<string, unknown>;
  };
}

export interface MCPListToolsResponse {
  jsonrpc: "2.0";
  id: number;
  result?: {
    tools?: MCPTool[];
  };
  error?: {
    code: number;
    message: string;
  };
}
