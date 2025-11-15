[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / WorkflowState

# Type Alias: WorkflowState

> **WorkflowState** = `"pending"` \| `"classifying"` \| `"executing"` \| `"processing"` \| `"needs-clarification"` \| `"completed"` \| `"failed"`

Defined in: [src/types/workflow.types.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L28)

Workflow state during lifecycle

State transitions:
- pending → classifying
- classifying → executing | needs-clarification
- executing → processing | failed
- processing → completed | failed
- needs-clarification → (waiting for user)

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - State Machine section
