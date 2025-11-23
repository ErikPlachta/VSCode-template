[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowHistory

# Interface: WorkflowHistory

Defined in: [src/types/workflow.types.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L283)

Workflow history record.

Stored for replay and debugging failed workflows.

## See

ORCHESTRATOR_WORKFLOW_ANALYSIS.md (Workflow History)

## Properties

### duration

> **duration**: `number`

Defined in: [src/types/workflow.types.ts:306](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L306)

Total duration in milliseconds

***

### events

> **events**: `object`[]

Defined in: [src/types/workflow.types.ts:312](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L312)

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

Defined in: [src/types/workflow.types.ts:288](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L288)

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

Defined in: [src/types/workflow.types.ts:295](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L295)

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

Defined in: [src/types/workflow.types.ts:309](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L309)

Completion timestamp

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L285)

Unique workflow identifier
