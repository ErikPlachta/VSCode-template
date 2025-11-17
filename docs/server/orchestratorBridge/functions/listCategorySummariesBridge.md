[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / listCategorySummariesBridge

# Function: listCategorySummariesBridge()

> **listCategorySummariesBridge**(): `Promise`\<`object`[]\>

Defined in: [src/server/orchestratorBridge.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/server/orchestratorBridge.ts#L239)

List available business categories (id + name) without formatting.
Used by server to derive dynamic tool descriptor metadata.

## Returns

`Promise`\<`object`[]\>

Array of category summary objects.
