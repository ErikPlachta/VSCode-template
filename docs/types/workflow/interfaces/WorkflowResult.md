[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowResult

# Interface: WorkflowResult

Defined in: [src/types/workflow.types.ts:338](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L338)

Workflow result returned to caller

Contains final state and formatted response

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/workflow.types.ts:343](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L343)

Result data (if completed)

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:346](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L346)

Error (if failed)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/workflow.types.ts:349](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L349)

Formatted response for user display

#### markdown?

> `optional` **markdown**: `string`

#### message

> **message**: `string`

***

### metrics?

> `optional` **metrics**: [`PerformanceMetrics`](PerformanceMetrics.md)

Defined in: [src/types/workflow.types.ts:355](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L355)

Performance metrics

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L340)

Final workflow state

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:358](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L358)

Workflow identifier for diagnostics
