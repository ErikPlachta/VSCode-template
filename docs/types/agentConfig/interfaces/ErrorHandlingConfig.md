[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ErrorHandlingConfig

# Interface: ErrorHandlingConfig

Defined in: [src/types/agentConfig.ts:297](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L297)

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

Defined in: [src/types/agentConfig.ts:300](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L300)

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L299)

***

### retryStrategy

> **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

Defined in: [src/types/agentConfig.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L298)
