[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / AgentRegistry

# Interface: AgentRegistry

Defined in: [src/types/workflow.types.ts:326](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L326)

Agent registry mapping agent IDs to instances

Maps agent identifiers to their instantiated classes.
The actual agent classes are imported by the Orchestrator.

Agent IDs:
- "database-agent": DatabaseAgent instance
- "data-agent": DataAgent instance
- "user-context-agent": UserContextAgent instance

Note: Using 'unknown' to avoid circular dependencies.
The Orchestrator imports and properly types the actual agent classes.

Reference: ORCHESTRATOR_WORKFLOW_ANALYSIS.md - Agent Coordination section

## Properties

### data-agent

> **data-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L328)

***

### database-agent

> **database-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:327](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L327)

***

### user-context-agent

> **user-context-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:329](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L329)
