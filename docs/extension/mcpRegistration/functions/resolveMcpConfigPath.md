[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / resolveMcpConfigPath

# Function: resolveMcpConfigPath()

> **resolveMcpConfigPath**(`options?`): `string`

Defined in: [src/extension/mcpRegistration.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/extension/mcpRegistration.ts#L128)

Resolve the full path to the MCP configuration file (mcp.json) for the current VS Code build.

## Parameters

### options?

[`McpConfigPathOptions`](../interfaces/McpConfigPathOptions.md) = `{}`

Optional overrides used primarily for unit testing.

## Returns

`string`

Absolute path to the target `mcp.json` file.
