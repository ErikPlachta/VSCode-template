[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / resolveMcpConfigPath

# Function: resolveMcpConfigPath()

> **resolveMcpConfigPath**(`options?`): `string`

Defined in: [src/extension/mcpRegistration.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpRegistration.ts#L128)

Resolve the full path to the MCP configuration file (mcp.json) for the current VS Code build.

## Parameters

### options?

[`McpConfigPathOptions`](../interfaces/McpConfigPathOptions.md) = `{}`

Optional overrides used primarily for unit testing.

## Returns

`string`

Absolute path to the target `mcp.json` file.
