[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [mcpSync](../README.md) / fetchLocalTools

# Function: fetchLocalTools()

> **fetchLocalTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/extension/mcpSync.ts:169](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/extension/mcpSync.ts#L169)

Fetch tools from the locally embedded server module when running in stdio mode.
This avoids HTTP and reads the exported tool catalogue directly.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Normalized tool list from the embedded server.
