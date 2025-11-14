[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowResult

# Interface: WorkflowResult

Defined in: [src/types/workflow.types.ts:351](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L351)

Workflow result returned to the caller.

Contains final state and formatted response.

## Properties

### data?

> `optional` **data**: `unknown`

Defined in: [src/types/workflow.types.ts:356](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L356)

Result data (if completed)

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:359](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L359)

Error (if failed)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/workflow.types.ts:362](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L362)

Formatted response for user display

#### markdown?

> `optional` **markdown**: `string`

#### message

> **message**: `string`

***

### metrics?

> `optional` **metrics**: [`PerformanceMetrics`](PerformanceMetrics.md)

Defined in: [src/types/workflow.types.ts:368](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L368)

Performance metrics

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:353](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L353)

Final workflow state

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:371](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L371)

Workflow identifier for diagnostics
