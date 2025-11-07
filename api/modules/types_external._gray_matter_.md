[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [types/external](types_external.md) / "gray-matter"

# Namespace: "gray-matter"

[types/external](types_external.md)."gray-matter"

## Table of contents

### Interfaces

- [GrayMatterFile](../interfaces/types_external._gray_matter_.GrayMatterFile.md)
- [GrayMatterOptions](../interfaces/types_external._gray_matter_.GrayMatterOptions.md)

### Type Aliases

- [GrayMatterInput](types_external._gray_matter_.md#graymatterinput)

### Functions

- [default](types_external._gray_matter_.md#default)

## Type Aliases

### GrayMatterInput

Ƭ **GrayMatterInput**: `string` \| `Buffer`

#### Defined in

[src/types/external.d.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/types/external.d.ts#L25)

## Functions

### default

▸ **default**\<`T`\>(`input`, `options?`): [`GrayMatterFile`](../interfaces/types_external._gray_matter_.GrayMatterFile.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Record`\<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`GrayMatterInput`](types_external._gray_matter_.md#graymatterinput) |
| `options?` | [`GrayMatterOptions`](../interfaces/types_external._gray_matter_.GrayMatterOptions.md)\<`T`\> |

#### Returns

[`GrayMatterFile`](../interfaces/types_external._gray_matter_.GrayMatterFile.md)\<`T`\>

#### Defined in

[src/types/external.d.ts:33](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/types/external.d.ts#L33)
