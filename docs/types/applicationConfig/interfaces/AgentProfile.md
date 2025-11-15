[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentProfile

# Interface: AgentProfile

Defined in: [src/types/applicationConfig.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L188)

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

Defined in: [src/types/applicationConfig.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L194)

Enable caching for this agent.

***

### priority

> **priority**: [`AgentPriority`](../type-aliases/AgentPriority.md)

Defined in: [src/types/applicationConfig.ts:190](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L190)

Execution priority for the agent.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L192)

Maximum execution timeout in milliseconds.
