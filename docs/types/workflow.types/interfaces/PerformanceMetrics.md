[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / PerformanceMetrics

# Interface: PerformanceMetrics

Defined in: [src/types/workflow.types.ts:158](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L158)

Performance metrics for workflow execution

Tracks timing for each phase and action

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Performance Monitoring

## Properties

### actionMetrics

> **actionMetrics**: `object`[]

Defined in: [src/types/workflow.types.ts:178](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L178)

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

Defined in: [src/types/workflow.types.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L166)

Time spent classifying intent

***

### endTime

> **endTime**: `number`

Defined in: [src/types/workflow.types.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L202)

Workflow end timestamp

***

### executionDuration

> **executionDuration**: `number`

Defined in: [src/types/workflow.types.ts:172](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L172)

Time spent executing actions

***

### formattingDuration

> **formattingDuration**: `number`

Defined in: [src/types/workflow.types.ts:175](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L175)

Time spent formatting response

***

### planningDuration

> **planningDuration**: `number`

Defined in: [src/types/workflow.types.ts:169](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L169)

Time spent planning actions

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:199](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L199)

Workflow start timestamp

***

### totalDuration

> **totalDuration**: `number`

Defined in: [src/types/workflow.types.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L163)

Total workflow duration in milliseconds

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:160](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L160)

Unique workflow identifier
