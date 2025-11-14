[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowContext

# Interface: WorkflowContext

Defined in: [src/types/workflow.types.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L118)

Workflow execution context.

Maintains state throughout the workflow lifecycle.

## Properties

### classification?

> `optional` **classification**: `object`

Defined in: [src/types/workflow.types.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L133)

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

> **completedActions**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\>[]

Defined in: [src/types/workflow.types.ts:144](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L144)

Actions that have been completed

***

### currentAction

> **currentAction**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\> \| `null`

Defined in: [src/types/workflow.types.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L141)

Action currently being executed

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/workflow.types.ts:162](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L162)

Workflow end timestamp (when completed or failed)

***

### errors

> **errors**: `Error`[]

Defined in: [src/types/workflow.types.ts:153](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L153)

Errors encountered during execution

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:126](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L126)

Original user input

#### Index Signature

\[`key`: `string`\]: `unknown`

#### question

> **question**: `string`

#### topic?

> `optional` **topic**: `string`

***

### metrics?

> `optional` **metrics**: [`PerformanceMetrics`](PerformanceMetrics.md)

Defined in: [src/types/workflow.types.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L156)

Performance metrics

***

### pendingActions

> **pendingActions**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\>[]

Defined in: [src/types/workflow.types.ts:147](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L147)

Actions waiting to be executed

***

### results

> **results**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/workflow.types.ts:150](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L150)

Results map keyed by action ID

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L159)

Workflow start timestamp

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L123)

Current workflow state

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L120)

Unique workflow identifier
