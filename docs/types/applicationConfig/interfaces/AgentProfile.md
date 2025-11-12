[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentProfile

# Interface: AgentProfile

Defined in: [src/types/applicationConfig.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L121)

Agent profile configuration.

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L127)

Enable caching for this agent.

***

### priority

> **priority**: [`AgentPriority`](../type-aliases/AgentPriority.md)

Defined in: [src/types/applicationConfig.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L123)

Execution priority for the agent.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L125)

Maximum execution timeout in milliseconds.
