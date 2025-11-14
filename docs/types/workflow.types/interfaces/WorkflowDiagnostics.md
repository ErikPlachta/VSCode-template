[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowDiagnostics

# Interface: WorkflowDiagnostics

Defined in: [src/types/workflow.types.ts:226](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L226)

Workflow diagnostic snapshot.

Used for debugging and monitoring active workflows.

## See

ORCHESTRATOR_WORKFLOW_ANALYSIS.md (Diagnostics)

## Properties

### classification?

> `optional` **classification**: `object`

Defined in: [src/types/workflow.types.ts:241](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L241)

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

Defined in: [src/types/workflow.types.ts:252](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L252)

Number of completed actions

***

### currentAction

> **currentAction**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\> \| `null`

Defined in: [src/types/workflow.types.ts:258](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L258)

Action currently being executed

***

### elapsedTime

> **elapsedTime**: `number`

Defined in: [src/types/workflow.types.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L270)

Time elapsed since start in milliseconds

***

### errors

> **errors**: `Error`[]

Defined in: [src/types/workflow.types.ts:264](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L264)

Errors encountered

***

### estimatedRemainingTime?

> `optional` **estimatedRemainingTime**: `number`

Defined in: [src/types/workflow.types.ts:273](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L273)

Estimated remaining time in milliseconds (if calculable)

***

### failedActions

> **failedActions**: `number`

Defined in: [src/types/workflow.types.ts:255](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L255)

Number of failed actions

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:234](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L234)

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

Defined in: [src/types/workflow.types.ts:261](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L261)

Actions waiting to be executed

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:267](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L267)

Workflow start timestamp

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:231](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L231)

Current workflow state

***

### totalActions

> **totalActions**: `number`

Defined in: [src/types/workflow.types.ts:249](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L249)

Total number of planned actions

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:228](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L228)

Unique workflow identifier
