[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / describeCategoryBridge

# Function: describeCategoryBridge()

> **describeCategoryBridge**(`topicOrId`): `Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

Defined in: [src/server/orchestratorBridge.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/server/orchestratorBridge.ts#L73)

Describe a category by id, name, or alias and return a formatted message.
Enumerates available categories in error metadata for clarification.

## Parameters

### topicOrId

`string`

Category identifier, name, or alias.

## Returns

`Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

A formatted message suitable for MCP tool content.
