[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowAction

# Interface: WorkflowAction\<T\>

Defined in: [src/types/workflow.types.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L62)

Workflow action definition

Represents a single step in the workflow execution plan

## Type Parameters

### T

`T` = `unknown`

Result type for the action

## Properties

### agent?

> `optional` **agent**: `string`

Defined in: [src/types/workflow.types.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L70)

Agent identifier if type is 'execute-agent'

***

### dependencies?

> `optional` **dependencies**: `string`[]

Defined in: [src/types/workflow.types.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L79)

Action IDs this action depends on (must complete first)

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/workflow.types.ts:97](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L97)

Duration in milliseconds

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/workflow.types.ts:94](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L94)

Timestamp when action completed

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L88)

Error if failed

***

### id

> **id**: `string`

Defined in: [src/types/workflow.types.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L64)

Unique action identifier

***

### method?

> `optional` **method**: `string`

Defined in: [src/types/workflow.types.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L73)

Method name to call on the agent

***

### params?

> `optional` **params**: `unknown`

Defined in: [src/types/workflow.types.ts:76](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L76)

Parameters to pass to the method

***

### result?

> `optional` **result**: `T`

Defined in: [src/types/workflow.types.ts:85](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L85)

Result data if completed successfully

***

### startTime?

> `optional` **startTime**: `number`

Defined in: [src/types/workflow.types.ts:91](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L91)

Timestamp when action started

***

### status

> **status**: [`WorkflowActionStatus`](../type-aliases/WorkflowActionStatus.md)

Defined in: [src/types/workflow.types.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L82)

Current execution status

***

### type

> **type**: [`WorkflowActionType`](../type-aliases/WorkflowActionType.md)

Defined in: [src/types/workflow.types.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L67)

Type of action to perform
