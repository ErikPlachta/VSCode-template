[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowHistory

# Interface: WorkflowHistory

Defined in: [src/types/workflow.types.ts:269](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L269)

Workflow history record

Stored for replay and debugging failed workflows

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Workflow History section

## Properties

### duration

> **duration**: `number`

Defined in: [src/types/workflow.types.ts:292](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L292)

Total duration in milliseconds

***

### events

> **events**: `object`[]

Defined in: [src/types/workflow.types.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L298)

Event log for replay

#### data

> **data**: `unknown`

Event-specific data

#### timestamp

> **timestamp**: `number`

Event timestamp

#### type

> **type**: `"state-change"` \| `"action-start"` \| `"action-complete"` \| `"action-failed"`

Event type

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:274](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L274)

Original user input

#### Index Signature

\[`key`: `string`\]: `unknown`

#### question

> **question**: `string`

#### topic?

> `optional` **topic**: `string`

***

### result

> **result**: `object`

Defined in: [src/types/workflow.types.ts:281](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L281)

Final workflow result

#### data?

> `optional` **data**: `unknown`

#### error?

> `optional` **error**: `Error`

#### formatted?

> `optional` **formatted**: `object`

##### formatted.markdown?

> `optional` **markdown**: `string`

##### formatted.message

> **message**: `string`

#### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

***

### timestamp

> **timestamp**: `number`

Defined in: [src/types/workflow.types.ts:295](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L295)

Completion timestamp

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:271](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L271)

Unique workflow identifier
