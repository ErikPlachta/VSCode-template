[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / listCategorySummariesBridge

# Function: listCategorySummariesBridge()

> **listCategorySummariesBridge**(): `Promise`\<`object`[]\>

Defined in: [src/server/orchestratorBridge.ts:186](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/server/orchestratorBridge.ts#L186)

List available business categories (id + name) without formatting.
Used by server to derive dynamic tool descriptor metadata.

## Returns

`Promise`\<`object`[]\>

Array of category summary objects.
