[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / PerformanceMetrics

# Interface: PerformanceMetrics

Defined in: [src/types/workflow.types.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L159)

Performance metrics for workflow execution

Tracks timing for each phase and action

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Performance Monitoring

## Properties

### actionMetrics

> **actionMetrics**: `object`[]

Defined in: [src/types/workflow.types.ts:179](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L179)

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

Defined in: [src/types/workflow.types.ts:167](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L167)

Time spent classifying intent

***

### endTime

> **endTime**: `number`

Defined in: [src/types/workflow.types.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L203)

Workflow end timestamp

***

### executionDuration

> **executionDuration**: `number`

Defined in: [src/types/workflow.types.ts:173](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L173)

Time spent executing actions

***

### formattingDuration

> **formattingDuration**: `number`

Defined in: [src/types/workflow.types.ts:176](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L176)

Time spent formatting response

***

### planningDuration

> **planningDuration**: `number`

Defined in: [src/types/workflow.types.ts:170](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L170)

Time spent planning actions

***

### startTime

> **startTime**: `number`

Defined in: [src/types/workflow.types.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L200)

Workflow start timestamp

***

### totalDuration

> **totalDuration**: `number`

Defined in: [src/types/workflow.types.ts:164](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L164)

Total workflow duration in milliseconds

***

### workflowId

> **workflowId**: `string`

Defined in: [src/types/workflow.types.ts:161](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L161)

Unique workflow identifier
