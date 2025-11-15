[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / MemoryConfig

# Interface: MemoryConfig

Defined in: [src/types/applicationConfig.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L340)

Memory management configuration.

## Example

```ts
const mem: MemoryConfig = {
  maxHeapSize: "1gb",
  gcThreshold: 0.7,
};
```

## Properties

### gcThreshold

> **gcThreshold**: `number`

Defined in: [src/types/applicationConfig.ts:344](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L344)

Garbage collection threshold (0-1).

***

### maxHeapSize

> **maxHeapSize**: `string`

Defined in: [src/types/applicationConfig.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L342)

Maximum heap size.
