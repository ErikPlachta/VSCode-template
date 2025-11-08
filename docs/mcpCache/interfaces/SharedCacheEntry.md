[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / SharedCacheEntry

# Interface: SharedCacheEntry\<T\>

Defined in: [src/extension/mcpCache.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L20)

Minimal representation of a cached artefact that can be exchanged across

## Type Parameters

### T

`T` = `unknown`

## Properties

### key

> **key**: `string`

Defined in: [src/extension/mcpCache.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L22)

Uniquely identifies the record on disk.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L30)

Optional metadata hints for downstream orchestration.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L26)

Timestamp recorded when the value was persisted.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L24)

Name of the tool that produced the cached payload.

***

### value

> **value**: `T`

Defined in: [src/extension/mcpCache.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/extension/mcpCache.ts#L28)

Arbitrary payload produced by the tool.
