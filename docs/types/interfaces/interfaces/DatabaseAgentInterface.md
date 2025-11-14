[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / DatabaseAgentInterface

# Interface: DatabaseAgentInterface

Defined in: [src/types/interfaces.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/interfaces.ts#L50)

Interface for database agents that handle data retrieval operations.

## Example

```ts
// Orchestrator calling a DatabaseAgent
const records = await db.executeQuery("people", { department: "engineering" }, { useCache: true });
```

## Methods

### executeQuery()

> **executeQuery**(`categoryId`, `criteria`, `options?`): `Promise`\<[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]\>

Defined in: [src/types/interfaces.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/interfaces.ts#L51)

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
