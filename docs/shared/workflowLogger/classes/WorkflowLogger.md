[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/workflowLogger](../README.md) / WorkflowLogger

# Class: WorkflowLogger

Defined in: [src/shared/workflowLogger.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L31)

Workflow logger for structured logging

All log messages include workflowId for request tracing

Usage:
```typescript
const logger = new WorkflowLogger();
logger.logWorkflowStart(workflowId, input);
logger.logClassification(workflowId, classification);
logger.logWorkflowComplete(workflowId, result);
```

## Constructors

### Constructor

> **new WorkflowLogger**(): `WorkflowLogger`

#### Returns

`WorkflowLogger`

## Methods

### logActionComplete()

> **logActionComplete**(`workflowId`, `action`): `void`

Defined in: [src/shared/workflowLogger.ts:84](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L84)

Log action completion

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### action

[`WorkflowAction`](../../../types/workflow.types/interfaces/WorkflowAction.md)

Completed action

#### Returns

`void`

***

### logActionFailed()

> **logActionFailed**(`workflowId`, `action`, `error`): `void`

Defined in: [src/shared/workflowLogger.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L98)

Log action failure

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### action

[`WorkflowAction`](../../../types/workflow.types/interfaces/WorkflowAction.md)

Failed action

##### error

`Error`

Error that caused failure

#### Returns

`void`

***

### logActionPlanned()

> **logActionPlanned**(`workflowId`, `action`): `void`

Defined in: [src/shared/workflowLogger.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L58)

Log action planning

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### action

[`WorkflowAction`](../../../types/workflow.types/interfaces/WorkflowAction.md)

Planned workflow action

#### Returns

`void`

***

### logActionStart()

> **logActionStart**(`workflowId`, `action`): `void`

Defined in: [src/shared/workflowLogger.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L71)

Log action start

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### action

[`WorkflowAction`](../../../types/workflow.types/interfaces/WorkflowAction.md)

Action being started

#### Returns

`void`

***

### logClassification()

> **logClassification**(`workflowId`, `classification`): `void`

Defined in: [src/shared/workflowLogger.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L48)

Log classification result

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### classification

`unknown`

Intent classification result

#### Returns

`void`

***

### logInfo()

> **logInfo**(`workflowId`, `message`, `data?`): `void`

Defined in: [src/shared/workflowLogger.ts:155](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L155)

Log general information

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### message

`string`

Information message

##### data?

`unknown`

Optional additional data

#### Returns

`void`

***

### logStateTransition()

> **logStateTransition**(`workflowId`, `fromState`, `toState`): `void`

Defined in: [src/shared/workflowLogger.ts:117](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L117)

Log state transition

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### fromState

[`WorkflowState`](../../../types/workflow.types/type-aliases/WorkflowState.md)

Previous state

##### toState

[`WorkflowState`](../../../types/workflow.types/type-aliases/WorkflowState.md)

New state

#### Returns

`void`

***

### logWorkflowComplete()

> **logWorkflowComplete**(`workflowId`, `result`): `void`

Defined in: [src/shared/workflowLogger.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L134)

Log workflow completion

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### result

`unknown`

Final workflow result

#### Returns

`void`

***

### logWorkflowFailed()

> **logWorkflowFailed**(`workflowId`, `error`): `void`

Defined in: [src/shared/workflowLogger.ts:144](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L144)

Log workflow failure

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### error

`Error`

Error that caused failure

#### Returns

`void`

***

### logWorkflowStart()

> **logWorkflowStart**(`workflowId`, `input`): `void`

Defined in: [src/shared/workflowLogger.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/workflowLogger.ts#L38)

Log workflow start

#### Parameters

##### workflowId

`string`

Unique workflow identifier

##### input

`unknown`

User input that initiated the workflow

#### Returns

`void`
