[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / describeCategoryBridge

# Function: describeCategoryBridge()

> **describeCategoryBridge**(`topicOrId`): `Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

Defined in: [src/server/orchestratorBridge.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/server/orchestratorBridge.ts#L120)

Describe a category by id, name, or alias and return a formatted message.
Enumerates available categories in error metadata for clarification.

## Parameters

### topicOrId

`string`

Category identifier, name, or alias.

## Returns

`Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

A formatted message suitable for MCP tool content.
