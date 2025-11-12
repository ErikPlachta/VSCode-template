[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/types/userContext.types.ts:356](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L356)

Agent orchestration guidance for specific agents

## Properties

### focus

> **focus**: `string`

Defined in: [src/types/userContext.types.ts:358](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L358)

Core responsibility for the agent when invoked for this category

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/types/userContext.types.ts:362](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L362)

Prompt starters that the orchestrator can feed to the agent

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:360](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L360)

Signals that hint the orchestrator should route the request to this agent
