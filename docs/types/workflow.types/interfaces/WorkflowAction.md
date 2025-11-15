[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowAction

# Interface: WorkflowAction\<T\>

Defined in: [src/types/workflow.types.ts:75](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L75)

Workflow action definition.

Represents a single step in the workflow execution plan.

## Example

```ts
const classify: WorkflowAction = {
  id: "a1",
  type: "classify",
  status: "pending"
};
```

## Type Parameters

### T

`T` = `unknown`

Result type for the action.

## Properties

### agent?

> `optional` **agent**: `string`

Defined in: [src/types/workflow.types.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L83)

Agent identifier if type is 'execute-agent'

***

### dependencies?

> `optional` **dependencies**: `string`[]

Defined in: [src/types/workflow.types.ts:92](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L92)

Action IDs this action depends on (must complete first)

***

### duration?

> `optional` **duration**: `number`

Defined in: [src/types/workflow.types.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L110)

Duration in milliseconds

***

### endTime?

> `optional` **endTime**: `number`

Defined in: [src/types/workflow.types.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L107)

Timestamp when action completed

***

### error?

> `optional` **error**: `Error`

Defined in: [src/types/workflow.types.ts:101](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L101)

Error if failed

***

### id

> **id**: `string`

Defined in: [src/types/workflow.types.ts:77](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L77)

Unique action identifier

***

### method?

> `optional` **method**: `string`

Defined in: [src/types/workflow.types.ts:86](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L86)

Method name to call on the agent

***

### params?

> `optional` **params**: `unknown`

Defined in: [src/types/workflow.types.ts:89](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L89)

Parameters to pass to the method

***

### result?

> `optional` **result**: `T`

Defined in: [src/types/workflow.types.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L98)

Result data if completed successfully

***

### startTime?

> `optional` **startTime**: `number`

Defined in: [src/types/workflow.types.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L104)

Timestamp when action started

***

### status

> **status**: [`WorkflowActionStatus`](../type-aliases/WorkflowActionStatus.md)

Defined in: [src/types/workflow.types.ts:95](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L95)

Current execution status

***

### type

> **type**: [`WorkflowActionType`](../type-aliases/WorkflowActionType.md)

Defined in: [src/types/workflow.types.ts:80](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L80)

Type of action to perform
