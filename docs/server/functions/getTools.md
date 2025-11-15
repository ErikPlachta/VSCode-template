[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / getTools

# Function: getTools()

> **getTools**(): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/server/index.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/index.ts#L59)

Build dynamic MCP tool descriptors using live category metadata.
Falls back to minimal static descriptors if enumeration fails.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Promise resolving to array of MCPTool definitions.
