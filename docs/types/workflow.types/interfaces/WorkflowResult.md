[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowResult

# Interface: WorkflowResult

Defined in: [src/types/workflow.types.ts:337](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L337)

Workflow result returned to caller

Contains final state and formatted response

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/workflow.types.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L342)

Result data (if completed)

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L345)

Error (if failed)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/workflow.types.ts:348](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L348)

Formatted response for user display

#### markdown?

> `optional` **markdown**: `string`

#### message

> **message**: `string`

***

### metrics?

> `optional` **metrics**: [`PerformanceMetrics`](PerformanceMetrics.md)

Defined in: [src/types/workflow.types.ts:354](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L354)

Performance metrics

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:339](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L339)

Final workflow state

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:357](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L357)

Workflow identifier for diagnostics
