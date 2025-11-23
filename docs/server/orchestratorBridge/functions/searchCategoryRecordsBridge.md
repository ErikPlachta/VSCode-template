[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / searchCategoryRecordsBridge

# Function: searchCategoryRecordsBridge()

> **searchCategoryRecordsBridge**(`topicOrId`, `filters`): `Promise`\<[`BridgeResult`](../interfaces/BridgeResult.md)\>

Defined in: [src/server/orchestratorBridge.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/orchestratorBridge.ts#L188)

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
