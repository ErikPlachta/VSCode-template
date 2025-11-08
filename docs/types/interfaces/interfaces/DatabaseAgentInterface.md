[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / DatabaseAgentInterface

# Interface: DatabaseAgentInterface

Defined in: [src/types/interfaces.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L51)

Interface for database agents that handle data retrieval operations.

## Methods

### executeQuery()

> **executeQuery**(`categoryId`, `criteria`, `options?`): `Promise`\<[`CategoryRecord`](CategoryRecord.md)[]\>

Defined in: [src/types/interfaces.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L52)

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

`Promise`\<[`CategoryRecord`](CategoryRecord.md)[]\>
