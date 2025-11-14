[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / searchCategoryRecordsBridge

# Function: searchCategoryRecordsBridge()

> **searchCategoryRecordsBridge**(`topicOrId`, `filters`): `Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

Defined in: [src/server/orchestratorBridge.ts:138](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/server/orchestratorBridge.ts#L138)

Search records within a category resolved by id, name, or alias.
Returns a formatted result and includes available categories on error.

## Parameters

### topicOrId

`string`

Category identifier, name, or alias.

### filters

`Record`\<`string`, `unknown`\> = `{}`

Equality filters applied to structured fields.

## Returns

`Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

A formatted message suitable for MCP tool content.
