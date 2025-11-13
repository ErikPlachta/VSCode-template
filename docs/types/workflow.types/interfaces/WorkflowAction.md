[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowAction

# Interface: WorkflowAction\<T\>

Defined in: [src/types/workflow.types.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L61)

Workflow action definition

Represents a single step in the workflow execution plan

## Type Parameters

### T

`T` = `unknown`

Result type for the action

## Properties

### agent?

> `optional` **agent**: `string`

Defined in: [src/types/workflow.types.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L69)

Agent identifier if type is 'execute-agent'

***

### dependencies?

> `optional` **dependencies**: `string`[]

Defined in: [src/types/workflow.types.ts:78](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L78)

Action IDs this action depends on (must complete first)

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/workflow.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L96)

Duration in milliseconds

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/workflow.types.ts:93](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L93)

Timestamp when action completed

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:87](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L87)

Error if failed

***

### id

> **id**: `string`

Defined in: [src/types/workflow.types.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L63)

Unique action identifier

***

### method?

> `optional` **method**: `string`

Defined in: [src/types/workflow.types.ts:72](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L72)

Method name to call on the agent

***

### params?

> `optional` **params**: `unknown`

Defined in: [src/types/workflow.types.ts:75](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L75)

Parameters to pass to the method

***

### result?

> `optional` **result**: `T`

Defined in: [src/types/workflow.types.ts:84](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L84)

Result data if completed successfully

***

### startTime?

> `optional` **startTime**: `number`

Defined in: [src/types/workflow.types.ts:90](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L90)

Timestamp when action started

***

### status

> **status**: [`WorkflowActionStatus`](../type-aliases/WorkflowActionStatus.md)

Defined in: [src/types/workflow.types.ts:81](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L81)

Current execution status

***

### type

> **type**: [`WorkflowActionType`](../type-aliases/WorkflowActionType.md)

Defined in: [src/types/workflow.types.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L66)

Type of action to perform
