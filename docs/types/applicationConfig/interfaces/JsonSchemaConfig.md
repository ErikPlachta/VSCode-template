[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / JsonSchemaConfig

# Interface: JsonSchemaConfig

Defined in: [src/types/applicationConfig.ts:400](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L400)

JSON schema validation configuration.

## Example

```ts
const schema: JsonSchemaConfig = {
  pattern: "docs/*.json",
  schema: "schemas/doc.schema.json",
  description: "Validate docs JSON files",
};
```

## See

docs/tools/validateJson/README.md

## Properties

### description

> **description**: `string`

Defined in: [src/types/applicationConfig.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L406)

Human-readable description of validation purpose.

***

### pattern

> **pattern**: `string`

Defined in: [src/types/applicationConfig.ts:402](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L402)

File pattern to match.

***

### schema

> **schema**: `string`

Defined in: [src/types/applicationConfig.ts:404](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L404)

Path to JSON schema file.
