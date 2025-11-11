[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / DatabaseAgentInterface

# Interface: DatabaseAgentInterface

Defined in: [src/types/interfaces.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/interfaces.ts#L40)

Interface for database agents that handle data retrieval operations.

## Methods

### executeQuery()

> **executeQuery**(`categoryId`, `criteria`, `options?`): `Promise`\<[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]\>

Defined in: [src/types/interfaces.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/interfaces.ts#L41)

#### Parameters

##### categoryId

`string`

##### criteria

`Record`\<`string`, `unknown`\>

##### options?

###### cacheKeyPrefix?

`string`

###### useCache?

`boolean`

#### Returns

`Promise`\<[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]\>
