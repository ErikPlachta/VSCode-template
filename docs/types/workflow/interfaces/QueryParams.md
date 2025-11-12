[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / QueryParams

# Interface: QueryParams

Defined in: [src/types/workflow.types.ts:380](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L380)

Parameters for DatabaseAgent.executeQuery()

All fields optional to support data-driven querying

## Properties

### category?

> `optional` **category**: `string`

Defined in: [src/types/workflow.types.ts:382](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L382)

Category to query. If undefined, agent determines from context

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:391](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L391)

Fields to return. If undefined, returns all fields

***

### filters?

> `optional` **filters**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/workflow.types.ts:385](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L385)

Filters to apply. Structure depends on category schema

***

### limit?

> `optional` **limit**: `number`

Defined in: [src/types/workflow.types.ts:388](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L388)

Maximum number of results. Defaults to agent-specific limit

***

### sort?

> `optional` **sort**: `Record`\<`string`, `"asc"` \| `"desc"`\>

Defined in: [src/types/workflow.types.ts:394](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L394)

Sort order. Format: { field: 'asc' | 'desc' }
