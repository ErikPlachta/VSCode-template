[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/types/userContext.types.ts:339](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L339)

Agent orchestration guidance for specific agents

## Properties

### focus

> **focus**: `string`

Defined in: [src/types/userContext.types.ts:341](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L341)

Core responsibility for the agent when invoked for this category

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/types/userContext.types.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L345)

Prompt starters that the orchestrator can feed to the agent

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:343](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L343)

Signals that hint the orchestrator should route the request to this agent
