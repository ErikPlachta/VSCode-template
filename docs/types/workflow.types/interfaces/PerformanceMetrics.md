[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / PerformanceMetrics

# Interface: PerformanceMetrics

Defined in: [src/types/workflow.types.ts:172](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L172)

Performance metrics for workflow execution.

Tracks timing for each phase and action.

## See

ORCHESTRATOR_WORKFLOW_ANALYSIS.md (Performance Monitoring)

## Properties

### actionMetrics

> **actionMetrics**: `object`[]

Defined in: [src/types/workflow.types.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L192)

Per-action timing details

#### actionId

> **actionId**: `string`

Action identifier

#### agent

> **agent**: `string`

Agent that executed the action

#### duration

> **duration**: `number`

Execution duration in milliseconds

#### method

> **method**: `string`

Method that was called

#### recordCount?

> `optional` **recordCount**: `number`

Number of records processed (if applicable)

#### timestamp

> **timestamp**: `number`

Timestamp when action started

***

### classificationDuration

> **classificationDuration**: `number`

Defined in: [src/types/workflow.types.ts:180](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L180)

Time spent classifying intent

***

### endTime

> **endTime**: `number`

Defined in: [src/types/workflow.types.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L216)

Workflow end timestamp

***

### executionDuration

> **executionDuration**: `number`

Defined in: [src/types/workflow.types.ts:186](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L186)

Time spent executing actions

***

### formattingDuration

> **formattingDuration**: `number`

Defined in: [src/types/workflow.types.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L189)

Time spent formatting response

***

### planningDuration

> **planningDuration**: `number`

Defined in: [src/types/workflow.types.ts:183](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L183)

Time spent planning actions

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:213](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L213)

Workflow start timestamp

***

### totalDuration

> **totalDuration**: `number`

Defined in: [src/types/workflow.types.ts:177](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L177)

Total workflow duration in milliseconds

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L174)

Unique workflow identifier
