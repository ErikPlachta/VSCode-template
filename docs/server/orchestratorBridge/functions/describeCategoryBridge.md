[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / describeCategoryBridge

# Function: describeCategoryBridge()

> **describeCategoryBridge**(`topicOrId`): `Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

Defined in: [src/server/orchestratorBridge.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/orchestratorBridge.ts#L120)

Describe a category by id, name, or alias and return a formatted message.
Enumerates available categories in error metadata for clarification.

## Parameters

### topicOrId

`string`

Category identifier, name, or alias.

## Returns

`Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

A formatted message suitable for MCP tool content.
