[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / CacheConfig

# Interface: CacheConfig

Defined in: [src/types/applicationConfig.ts:255](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L255)

Cache configuration settings.

## Example

```ts
const cache: CacheConfig = {
  enabled: true,
  directory: ".cache",
  maxSize: "256mb",
  ttl: 60000,
};
```

## Properties

### directory

> **directory**: `string`

Defined in: [src/types/applicationConfig.ts:259](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L259)

Cache directory path.

***

### enabled

> **enabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:257](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L257)

Enable caching.

***

### maxSize

> **maxSize**: `string`

Defined in: [src/types/applicationConfig.ts:261](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L261)

Maximum cache size.

***

### ttl

> **ttl**: `number`

Defined in: [src/types/applicationConfig.ts:263](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L263)

Time-to-live for cached items in milliseconds.
