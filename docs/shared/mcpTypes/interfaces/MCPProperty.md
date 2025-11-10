[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPProperty

# Interface: MCPProperty

Defined in: [src/shared/mcpTypes.ts:8](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L8)

Shared MCP type definitions consumed by both the VS Code extension client

## Properties

### default?

> `optional` **default**: `unknown`

Defined in: [src/shared/mcpTypes.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L18)

Suggested default value supplied by the backend.

***

### description?

> `optional` **description**: `string`

Defined in: [src/shared/mcpTypes.ts:14](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L14)

Human readable description for prompts and docs.

***

### enum?

> `optional` **enum**: `string`[]

Defined in: [src/shared/mcpTypes.ts:16](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L16)

Static enumeration, if provided by the schema.

***

### items?

> `optional` **items**: `MCPProperty`

Defined in: [src/shared/mcpTypes.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L20)

Nested item type for array arguments.

***

### name

> **name**: `string`

Defined in: [src/shared/mcpTypes.ts:10](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L10)

Argument identifier used when invoking the tool.

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/shared/mcpTypes.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L22)

Whether the parameter is required.

***

### type?

> `optional` **type**: `string` \| `string`[]

Defined in: [src/shared/mcpTypes.ts:12](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/mcpTypes.ts#L12)

Primitive type such as `string`, `number`, `boolean`, or `array`.
