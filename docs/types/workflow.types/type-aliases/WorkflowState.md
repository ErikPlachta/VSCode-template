[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowState

# Type Alias: WorkflowState

> **WorkflowState** = `"pending"` \| `"classifying"` \| `"executing"` \| `"processing"` \| `"needs-clarification"` \| `"completed"` \| `"failed"`

Defined in: [src/types/workflow.types.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L28)

Workflow state during lifecycle

State transitions:
- pending → classifying
- classifying → executing | needs-clarification
- executing → processing | failed
- processing → completed | failed
- needs-clarification → (waiting for user)

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - State Machine section
