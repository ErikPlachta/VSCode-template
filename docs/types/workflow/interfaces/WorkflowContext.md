[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowContext

# Interface: WorkflowContext

Defined in: [src/types/workflow.types.ts:105](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L105)

Workflow execution context

Maintains state throughout workflow lifecycle

## Properties

### classification?

> `optional` **classification**: `object`

Defined in: [src/types/workflow.types.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L120)

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

Defined in: [src/types/workflow.types.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L131)

Actions that have been completed

***

### currentAction

> **currentAction**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\> \| `null`

Defined in: [src/types/workflow.types.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L128)

Action currently being executed

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/workflow.types.ts:149](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L149)

Workflow end timestamp (when completed or failed)

***

### errors

> **errors**: `Error`[]

Defined in: [src/types/workflow.types.ts:140](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L140)

Errors encountered during execution

***

### input

> **input**: `object`

Defined in: [src/types/workflow.types.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L113)

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

Defined in: [src/types/workflow.types.ts:143](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L143)

Performance metrics

***

### pendingActions

> **pendingActions**: [`WorkflowAction`](WorkflowAction.md)\<`unknown`\>[]

Defined in: [src/types/workflow.types.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L134)

Actions waiting to be executed

***

### results

> **results**: `Map`\<`string`, `unknown`\>

Defined in: [src/types/workflow.types.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L137)

Results map keyed by action ID

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:146](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L146)

Workflow start timestamp

***

### state

> **state**: [`WorkflowState`](../type-aliases/WorkflowState.md)

Defined in: [src/types/workflow.types.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L110)

Current workflow state

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/workflow.types.ts#L107)

Unique workflow identifier
