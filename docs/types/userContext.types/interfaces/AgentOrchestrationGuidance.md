[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/types/userContext.types.ts:356](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L356)

Agent orchestration guidance for specific agents

## Properties

### focus

> **focus**: `string`

Defined in: [src/types/userContext.types.ts:358](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L358)

Core responsibility for the agent when invoked for this category

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/types/userContext.types.ts:362](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L362)

Prompt starters that the orchestrator can feed to the agent

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:360](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L360)

Signals that hint the orchestrator should route the request to this agent
