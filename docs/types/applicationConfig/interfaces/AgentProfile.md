[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentProfile

# Interface: AgentProfile

Defined in: [src/types/applicationConfig.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L188)

Agent profile configuration.

## Example

```ts
const profile: AgentProfile = {
  priority: "high",
  timeout: 5000,
  cacheEnabled: true,
};
```

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L194)

Enable caching for this agent.

***

### priority

> **priority**: [`AgentPriority`](../type-aliases/AgentPriority.md)

Defined in: [src/types/applicationConfig.ts:190](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L190)

Execution priority for the agent.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L192)

Maximum execution timeout in milliseconds.
