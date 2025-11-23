[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / getTools

# Function: getTools()

> **getTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/server/index.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L59)

Build dynamic MCP tool descriptors using live category metadata.
Falls back to minimal static descriptors if enumeration fails.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Promise resolving to array of MCPTool definitions.
