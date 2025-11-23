[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / listCategorySummariesBridge

# Function: listCategorySummariesBridge()

> **listCategorySummariesBridge**(): `Promise`\<`object`[]\>

Defined in: [src/server/orchestratorBridge.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/orchestratorBridge.ts#L239)

List available business categories (id + name) without formatting.
Used by server to derive dynamic tool descriptor metadata.

## Returns

`Promise`\<`object`[]\>

Array of category summary objects.
