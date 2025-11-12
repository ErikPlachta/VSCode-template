[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / AgentRegistry

# Interface: AgentRegistry

Defined in: [src/types/workflow.types.ts:327](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L327)

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

Defined in: [src/types/workflow.types.ts:329](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L329)

***

### database-agent

> **database-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L328)

***

### user-context-agent

> **user-context-agent**: `unknown`

Defined in: [src/types/workflow.types.ts:330](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/workflow.types.ts#L330)
