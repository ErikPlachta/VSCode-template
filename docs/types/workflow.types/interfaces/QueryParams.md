[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / QueryParams

# Interface: QueryParams

Defined in: [src/types/workflow.types.ts:393](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L393)

Parameters for DatabaseAgent.executeQuery()

All fields optional to support data-driven querying

## Properties

### category?

> `optional` **category**: `string`

Defined in: [src/types/workflow.types.ts:395](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L395)

Category to query. If undefined, agent determines from context

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:404](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L404)

Fields to return. If undefined, returns all fields

***

### filters?

> `optional` **filters**: `Record`\<`string`, `unknown`\>

Defined in: [src/types/workflow.types.ts:398](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L398)

Filters to apply. Structure depends on category schema

***

### limit?

> `optional` **limit**: `number`

Defined in: [src/types/workflow.types.ts:401](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L401)

Maximum number of results. Defaults to agent-specific limit

***

### sort?

> `optional` **sort**: `Record`\<`string`, `"asc"` \| `"desc"`\>

Defined in: [src/types/workflow.types.ts:407](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L407)

Sort order. Format: { field: 'asc' | 'desc' }
