[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / AgentResponse

# Interface: AgentResponse\<T\>

Defined in: [src/types/interfaces.ts:328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L328)

Generic agent response shape used by orchestration helpers.

## Type Parameters

### T

`T` = `unknown`

Response payload type.

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/interfaces.ts:332](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L332)

***

### data?

> `optional` **data**: `T`

Defined in: [src/types/interfaces.ts:330](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L330)

***

### error?

> `optional` **error**: `string`

Defined in: [src/types/interfaces.ts:331](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L331)

***

### operation

> **operation**: `string`

Defined in: [src/types/interfaces.ts:333](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L333)

***

### success

> **success**: `boolean`

Defined in: [src/types/interfaces.ts:329](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L329)
