[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowState

# Type Alias: WorkflowState

> **WorkflowState** = `"pending"` \| `"classifying"` \| `"executing"` \| `"processing"` \| `"needs-clarification"` \| `"completed"` \| `"failed"`

Defined in: [src/types/workflow.types.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/workflow.types.ts#L28)

Workflow state during lifecycle

State transitions:
- pending → classifying
- classifying → executing | needs-clarification
- executing → processing | failed
- processing → completed | failed
- needs-clarification → (waiting for user)

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - State Machine section
