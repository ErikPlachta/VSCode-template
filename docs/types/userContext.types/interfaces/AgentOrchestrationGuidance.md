[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/types/userContext.types.ts:364](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L364)

Agent orchestration guidance for specific agents

## Properties

### focus

> **focus**: `string`

Defined in: [src/types/userContext.types.ts:366](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L366)

Core responsibility for the agent when invoked for this category

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/types/userContext.types.ts:370](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L370)

Prompt starters that the orchestrator can feed to the agent

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:368](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L368)

Signals that hint the orchestrator should route the request to this agent
