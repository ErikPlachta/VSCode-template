[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ErrorHandlingConfig

# Interface: ErrorHandlingConfig

Defined in: [src/types/agentConfig.ts:297](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L297)

Error handling preferences for an agent.

## Example

```ts
const errorHandling: ErrorHandlingConfig = {
retryStrategy: "exponential",
maxRetries: 3,
};
```

## Properties

### fallbackAgent?

> `optional` **fallbackAgent**: `string`

Defined in: [src/types/agentConfig.ts:300](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L300)

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L299)

***

### retryStrategy

> **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

Defined in: [src/types/agentConfig.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L298)
