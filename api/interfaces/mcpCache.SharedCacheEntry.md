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

[src/mcpCache.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L19)

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

Optional metadata hints for downstream orchestration.

#### Defined in

[src/mcpCache.ts:27](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L27)

___

### timestamp

• **timestamp**: `string`

Timestamp recorded when the value was persisted.

#### Defined in

[src/mcpCache.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L23)

___

### toolName

• **toolName**: `string`

Name of the tool that produced the cached payload.

#### Defined in

[src/mcpCache.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L21)

___

### value

• **value**: `T`

Arbitrary payload produced by the tool.

#### Defined in

[src/mcpCache.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L25)
