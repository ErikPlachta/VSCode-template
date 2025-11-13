[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / resolveMcpConfigPath

# Function: resolveMcpConfigPath()

> **resolveMcpConfigPath**(`options?`): `string`

Defined in: [src/extension/mcpRegistration.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/extension/mcpRegistration.ts#L128)

Resolve the full path to the MCP configuration file (mcp.json) for the current VS Code build.

## Parameters

### options?

[`McpConfigPathOptions`](../interfaces/McpConfigPathOptions.md) = `{}`

Optional overrides used primarily for unit testing.

## Returns

`string`

Absolute path to the target `mcp.json` file.
