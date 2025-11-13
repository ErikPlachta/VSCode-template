[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentProfile

# Interface: AgentProfile

Defined in: [src/types/applicationConfig.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/applicationConfig.ts#L121)

Agent profile configuration.

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/applicationConfig.ts#L127)

Enable caching for this agent.

***

### priority

> **priority**: [`AgentPriority`](../type-aliases/AgentPriority.md)

Defined in: [src/types/applicationConfig.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/applicationConfig.ts#L123)

Execution priority for the agent.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/applicationConfig.ts#L125)

Maximum execution timeout in milliseconds.
