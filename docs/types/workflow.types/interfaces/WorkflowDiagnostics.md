[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowDiagnostics

# Interface: WorkflowDiagnostics

Defined in: [src/types/workflow.types.ts:212](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L212)

Workflow diagnostic snapshot

Used for debugging and monitoring active workflows

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Diagnostics section

## Properties

### classification?

> `optional` **classification**: `object`

Defined in: [src/types/workflow.types.ts:227](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L227)

Classification result (if completed)

#### Index Signature

\[`key`: `string`\]: `unknown`

#### agent

> **agent**: `string`

#### confidence?

> `optional` **confidence**: `number`

#### intent

> **intent**: `string`

***

### completedActions

> **completedActions**: `number`

Defined in: [src/types/workflow.types.ts:238](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L238)

Number of completed actions

***

### currentAction

> **currentAction**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\> \| `null`

Defined in: [src/types/workflow.types.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L244)

Action currently being executed

***

### elapsedTime

> **elapsedTime**: `number`

Defined in: [src/types/workflow.types.ts:256](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L256)

Time elapsed since start in milliseconds

***

### errors

> **errors**: `Error`[]

Defined in: [src/types/workflow.types.ts:250](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L250)

Errors encountered

***

### estimatedRemainingTime?

> `optional` **estimatedRemainingTime**: `number`

Defined in: [src/types/workflow.types.ts:259](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L259)

Estimated remaining time in milliseconds (if calculable)

***

### failedActions

> **failedActions**: `number`

Defined in: [src/types/workflow.types.ts:241](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L241)

Number of failed actions

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:220](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L220)

Original user input

#### Index Signature

\[`key`: `string`\]: `unknown`

#### question

> **question**: `string`

#### topic?

> `optional` **topic**: `string`

***

### pendingActions

> **pendingActions**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\>[]

Defined in: [src/types/workflow.types.ts:247](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L247)

Actions waiting to be executed

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L253)

Workflow start timestamp

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L217)

Current workflow state

***

### totalActions

> **totalActions**: `number`

Defined in: [src/types/workflow.types.ts:235](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L235)

Total number of planned actions

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L214)

Unique workflow identifier
