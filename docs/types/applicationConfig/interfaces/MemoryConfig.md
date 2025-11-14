[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / MemoryConfig

# Interface: MemoryConfig

Defined in: [src/types/applicationConfig.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L340)

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

Defined in: [src/types/applicationConfig.ts:344](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L344)

Garbage collection threshold (0-1).

***

### maxHeapSize

> **maxHeapSize**: `string`

Defined in: [src/types/applicationConfig.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L342)

Maximum heap size.
