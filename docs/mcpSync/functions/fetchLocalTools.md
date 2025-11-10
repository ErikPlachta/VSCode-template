[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / [mcpSync](../README.md) / fetchLocalTools

# Function: fetchLocalTools()

> **fetchLocalTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/extension/mcpSync.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpSync.ts#L119)

Fetch tools from the locally embedded server module when running in stdio mode.
This avoids HTTP and reads the exported tool catalogue directly.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Normalized tool list from the embedded server.
