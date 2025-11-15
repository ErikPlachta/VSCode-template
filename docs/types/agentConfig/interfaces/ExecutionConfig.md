[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ExecutionConfig

# Interface: ExecutionConfig

Defined in: [src/types/agentConfig.ts:242](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L242)

Runtime execution configuration for an agent.

## Example

```ts
const exec: ExecutionConfig = {
  priority: "high",
  timeout: 8000,
  cacheEnabled: true,
  retryStrategy: "exponential",
  maxRetries: 2,
};
```

## Properties

### cacheEnabled?

> `optional` **cacheEnabled**: `boolean`

Defined in: [src/types/agentConfig.ts:245](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L245)

***

### maxRetries?

> `optional` **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:247](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L247)

***

### priority

> **priority**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/types/agentConfig.ts:243](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L243)

***

### retryStrategy?

> `optional` **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

Defined in: [src/types/agentConfig.ts:246](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L246)

***

### timeout

> **timeout**: `number`

Defined in: [src/types/agentConfig.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L244)
