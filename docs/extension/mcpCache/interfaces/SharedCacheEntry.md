[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / SharedCacheEntry

# Interface: SharedCacheEntry\<T\>

Defined in: [src/extension/mcpCache.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L32)

Minimal representation of a cached artefact that can be exchanged across tools.

## Type Parameters

### T

`T` = `unknown`

Payload type stored in the cache entry.

## Properties

### key

> **key**: `string`

Defined in: [src/extension/mcpCache.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L34)

Uniquely identifies the record on disk.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L42)

Optional metadata hints for downstream orchestration.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L38)

Timestamp recorded when the value was persisted.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L36)

Name of the tool that produced the cached payload.

***

### value

> **value**: `T`

Defined in: [src/extension/mcpCache.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/extension/mcpCache.ts#L40)

Arbitrary payload produced by the tool.
