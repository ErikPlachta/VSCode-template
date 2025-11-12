[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowHistory

# Interface: WorkflowHistory

Defined in: [src/types/workflow.types.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L270)

Workflow history record

Stored for replay and debugging failed workflows

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Workflow History section

## Properties

### duration

> **duration**: `number`

Defined in: [src/types/workflow.types.ts:293](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L293)

Total duration in milliseconds

***

### events

> **events**: `object`[]

Defined in: [src/types/workflow.types.ts:299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L299)

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

Defined in: [src/types/workflow.types.ts:275](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L275)

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

Defined in: [src/types/workflow.types.ts:282](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L282)

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

Defined in: [src/types/workflow.types.ts:296](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L296)

Completion timestamp

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:272](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L272)

Unique workflow identifier
