[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / removeRegistration

# Function: removeRegistration()

> **removeRegistration**(`id`, `pathOptions?`): `Promise`\<`string`\>

Defined in: [src/extension/mcpRegistration.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/extension/mcpRegistration.ts#L298)

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
