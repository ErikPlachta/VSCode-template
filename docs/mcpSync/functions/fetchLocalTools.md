[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / [mcpSync](../README.md) / fetchLocalTools

# Function: fetchLocalTools()

> **fetchLocalTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/extension/mcpSync.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/extension/mcpSync.ts#L119)

Fetch tools from the locally embedded server module when running in stdio mode.
This avoids HTTP and reads the exported tool catalogue directly.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Normalized tool list from the embedded server.
