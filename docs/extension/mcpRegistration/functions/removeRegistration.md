[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / removeRegistration

# Function: removeRegistration()

> **removeRegistration**(`id`, `pathOptions?`): `Promise`\<`string`\>

Defined in: [src/extension/mcpRegistration.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/extension/mcpRegistration.ts#L298)

Remove our server entry from mcp.json if present.

## Parameters

### id

`string`

id parameter.

### pathOptions?

[`McpConfigPathOptions`](../interfaces/McpConfigPathOptions.md) = `{}`

Optional overrides used to resolve the configuration path.

## Returns

`Promise`\<`string`\>

Absolute path to the updated `mcp.json` file.
