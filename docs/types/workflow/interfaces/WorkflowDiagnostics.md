[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowDiagnostics

# Interface: WorkflowDiagnostics

Defined in: [src/types/workflow.types.ts:213](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L213)

Workflow diagnostic snapshot

Used for debugging and monitoring active workflows

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Diagnostics section

## Properties

### classification?

> `optional` **classification**: `object`

Defined in: [src/types/workflow.types.ts:228](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L228)

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

Defined in: [src/types/workflow.types.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L239)

Number of completed actions

***

### currentAction

> **currentAction**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\> \| `null`

Defined in: [src/types/workflow.types.ts:245](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L245)

Action currently being executed

***

### elapsedTime

> **elapsedTime**: `number`

Defined in: [src/types/workflow.types.ts:257](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L257)

Time elapsed since start in milliseconds

***

### errors

> **errors**: `Error`[]

Defined in: [src/types/workflow.types.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L251)

Errors encountered

***

### estimatedRemainingTime?

> `optional` **estimatedRemainingTime**: `number`

Defined in: [src/types/workflow.types.ts:260](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L260)

Estimated remaining time in milliseconds (if calculable)

***

### failedActions

> **failedActions**: `number`

Defined in: [src/types/workflow.types.ts:242](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L242)

Number of failed actions

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:221](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L221)

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

Defined in: [src/types/workflow.types.ts:248](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L248)

Actions waiting to be executed

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:254](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L254)

Workflow start timestamp

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:218](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L218)

Current workflow state

***

### totalActions

> **totalActions**: `number`

Defined in: [src/types/workflow.types.ts:236](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L236)

Total number of planned actions

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:215](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L215)

Unique workflow identifier
