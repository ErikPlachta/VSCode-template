[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpCache](../modules/mcpCache.md) / SharedCacheEntry

# Interface: SharedCacheEntry\<T\>

[mcpCache](../modules/mcpCache.md).SharedCacheEntry

Minimal representation of a cached artefact that can be exchanged across
MCP tools.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Table of contents

### Properties

- [key](mcpCache.SharedCacheEntry.md#key)
- [metadata](mcpCache.SharedCacheEntry.md#metadata)
- [timestamp](mcpCache.SharedCacheEntry.md#timestamp)
- [toolName](mcpCache.SharedCacheEntry.md#toolname)
- [value](mcpCache.SharedCacheEntry.md#value)

## Properties

### key

• **key**: `string`

Uniquely identifies the record on disk.

#### Defined in

[src/mcpCache.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpCache.ts#L21)

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional metadata hints for downstream orchestration.

#### Defined in

[src/mcpCache.ts:29](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpCache.ts#L29)

___

### timestamp

• **timestamp**: `string`

Timestamp recorded when the value was persisted.

#### Defined in

[src/mcpCache.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpCache.ts#L25)

___

### toolName

• **toolName**: `string`

Name of the tool that produced the cached payload.

#### Defined in

[src/mcpCache.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpCache.ts#L23)

___

### value

• **value**: `T`

Arbitrary payload produced by the tool.

#### Defined in

[src/mcpCache.ts:27](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpCache.ts#L27)
