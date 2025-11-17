[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/workflow.types

# types/workflow.types

Workflow coordination types for Orchestrator.

Defines types for workflow state management, action execution,
diagnostics, and performance monitoring.

## Remarks

These types model orchestration without importing agent implementations.
They are safe to use in tests and diagnostics and are decoupled from
presentation formatting handled by the CommunicationAgent.

## See

ORCHESTRATOR_WORKFLOW_ANALYSIS.md

## Interfaces

- [AgentRegistry](interfaces/AgentRegistry.md)
- [AnalyzeParams](interfaces/AnalyzeParams.md)
- [GetSnapshotParams](interfaces/GetSnapshotParams.md)
- [PerformanceMetrics](interfaces/PerformanceMetrics.md)
- [QueryParams](interfaces/QueryParams.md)
- [WorkflowAction](interfaces/WorkflowAction.md)
- [WorkflowContext](interfaces/WorkflowContext.md)
- [WorkflowDiagnostics](interfaces/WorkflowDiagnostics.md)
- [WorkflowHistory](interfaces/WorkflowHistory.md)
- [WorkflowResult](interfaces/WorkflowResult.md)

## Type Aliases

- [WorkflowActionStatus](type-aliases/WorkflowActionStatus.md)
- [WorkflowActionType](type-aliases/WorkflowActionType.md)
- [WorkflowState](type-aliases/WorkflowState.md)
