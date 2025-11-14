[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / listCategorySummariesBridge

# Function: listCategorySummariesBridge()

> **listCategorySummariesBridge**(): `Promise`\<`object`[]\>

Defined in: [src/server/orchestratorBridge.ts:186](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/server/orchestratorBridge.ts#L186)

List available business categories (id + name) without formatting.
Used by server to derive dynamic tool descriptor metadata.

## Returns

`Promise`\<`object`[]\>

Array of category summary objects.
