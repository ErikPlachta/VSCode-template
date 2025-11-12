[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / WorkflowState

# Type Alias: WorkflowState

> **WorkflowState** = `"pending"` \| `"classifying"` \| `"executing"` \| `"processing"` \| `"needs-clarification"` \| `"completed"` \| `"failed"`

Defined in: [src/types/workflow.types.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L24)

Workflow state during lifecycle

State transitions:
- pending → classifying
- classifying → executing | needs-clarification
- executing → processing | failed
- processing → completed | failed
- needs-clarification → (waiting for user)

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - State Machine section
