[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [mcpSync](../README.md) / fetchLocalTools

# Function: fetchLocalTools()

> **fetchLocalTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/extension/mcpSync.ts:169](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/extension/mcpSync.ts#L169)

Fetch tools from the locally embedded server module when running in stdio mode.
This avoids HTTP and reads the exported tool catalogue directly.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Normalized tool list from the embedded server.
