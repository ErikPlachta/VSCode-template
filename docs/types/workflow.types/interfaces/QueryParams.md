[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / QueryParams

# Interface: QueryParams

Defined in: [src/types/workflow.types.ts:379](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L379)

Parameters for DatabaseAgent.executeQuery()

All fields optional to support data-driven querying

## Properties

### category?

> `optional` **category**: `string`

Defined in: [src/types/workflow.types.ts:381](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L381)

Category to query. If undefined, agent determines from context

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:390](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L390)

Fields to return. If undefined, returns all fields

***

### filters?

> `optional` **filters**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/workflow.types.ts:384](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L384)

Filters to apply. Structure depends on category schema

***

### limit?

> `optional` **limit**: `number`

Defined in: [src/types/workflow.types.ts:387](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L387)

Maximum number of results. Defaults to agent-specific limit

***

### sort?

> `optional` **sort**: `Record`\<`string`, `"asc"` \| `"desc"`\>

Defined in: [src/types/workflow.types.ts:393](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L393)

Sort order. Format: { field: 'asc' | 'desc' }
