[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / AgentRegistry

# Interface: AgentRegistry

Defined in: [src/types/workflow.types.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L340)

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

Defined in: [src/types/workflow.types.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L342)

***

### database-agent

> **database-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:341](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L341)

***

### user-context-agent

> **user-context-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:343](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L343)
