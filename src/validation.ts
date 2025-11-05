import Ajv, { DefinedError } from "ajv";
import { MCPTool, JSONSchemaProperty, ToolInputSchema } from "./types";

const ajv = new Ajv({ allErrors: true, strict: false });

type ToolArray = MCPTool[];

const jsonSchemaPropertySchema = {
  type: "object",
  required: ["type"],
  additionalProperties: false,
  properties: {
    type: { type: "string", enum: ["string", "number", "integer", "boolean", "object", "array"] },
    description: { type: "string" },
    enum: { type: "array" },
    format: { type: "string" },
    items: {
      anyOf: [
        { $ref: "#/definitions/jsonSchemaProperty" },
        {
          type: "array",
          items: { $ref: "#/definitions/jsonSchemaProperty" }
        }
      ]
    },
    default: {}
  }
};

const toolInputSchemaSchema = {
  type: "object",
  required: ["type"],
  additionalProperties: false,
  properties: {
    type: { type: "string", const: "object" },
    description: { type: "string" },
    properties: {
      type: "object",
      default: {},
      additionalProperties: { $ref: "#/definitions/jsonSchemaProperty" }
    },
    required: {
      type: "array",
      items: { type: "string" }
    },
    additionalProperties: { type: "boolean" }
  }
};

const toolSchema = {
  $id: "https://schemas.mcp.local/tool.json",
  type: "object",
  required: ["name", "title", "description"],
  additionalProperties: false,
  properties: {
    name: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },
    description: { type: "string", minLength: 1 },
    input_schema: { $ref: "#/definitions/toolInputSchema" }
  },
  definitions: {
    jsonSchemaProperty: jsonSchemaPropertySchema,
    toolInputSchema: toolInputSchemaSchema
  }
};

const toolArraySchema = {
  $id: "https://schemas.mcp.local/tool-list.json",
  type: "array",
  items: { $ref: "https://schemas.mcp.local/tool.json" }
};

ajv.addSchema(toolSchema);

const validateToolArray = ajv.compile<ToolArray>(toolArraySchema);

function formatErrors(errors: DefinedError[] | null | undefined): string {
  if (!errors?.length) {
    return "Unknown schema validation error.";
  }
  return errors
    .map((error) => {
      const instancePath = error.instancePath || "<root>";
      return `${instancePath} ${error.message ?? "failed validation"}`.trim();
    })
    .join("; ");
}

export function validateToolList(data: unknown): MCPTool[] {
  if (!validateToolArray(data)) {
    throw new Error(formatErrors(validateToolArray.errors as DefinedError[]));
  }
  return data as MCPTool[];
}

export function normalizeSchema(schema?: ToolInputSchema): ToolInputSchema | undefined {
  if (!schema) return undefined;
  return {
    type: "object",
    description: schema.description,
    additionalProperties: schema.additionalProperties ?? false,
    required: Array.isArray(schema.required) ? [...schema.required] : [],
    properties: normalizeProperties(schema.properties ?? {})
  };
}

function normalizeProperties(properties: Record<string, JSONSchemaProperty>): Record<string, JSONSchemaProperty> {
  return Object.entries(properties).reduce<Record<string, JSONSchemaProperty>>((acc, [key, value]) => {
    acc[key] = {
      type: value.type,
      description: value.description,
      enum: value.enum,
      format: value.format,
      items: value.items,
      default: value.default
    };
    return acc;
  }, {});
}
