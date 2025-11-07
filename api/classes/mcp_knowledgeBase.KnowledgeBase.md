[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcp/knowledgeBase](../modules/mcp_knowledgeBase.md) / KnowledgeBase

# Class: KnowledgeBase

[mcp/knowledgeBase](../modules/mcp_knowledgeBase.md).KnowledgeBase

## Table of contents

### Constructors

- [constructor](mcp_knowledgeBase.KnowledgeBase.md#constructor)

### Methods

- [indexDocument](mcp_knowledgeBase.KnowledgeBase.md#indexdocument)
- [indexDocuments](mcp_knowledgeBase.KnowledgeBase.md#indexdocuments)
- [query](mcp_knowledgeBase.KnowledgeBase.md#query)

## Constructors

### constructor

• **new KnowledgeBase**(): [`KnowledgeBase`](mcp_knowledgeBase.KnowledgeBase.md)

#### Returns

[`KnowledgeBase`](mcp_knowledgeBase.KnowledgeBase.md)

## Methods

### indexDocument

▸ **indexDocument**(`document`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`KnowledgeDocument`](../interfaces/mcp_knowledgeBase.KnowledgeDocument.md) |

#### Returns

`void`

#### Defined in

[src/mcp/knowledgeBase.ts:18](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/knowledgeBase.ts#L18)

___

### indexDocuments

▸ **indexDocuments**(`documents`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `documents` | [`KnowledgeDocument`](../interfaces/mcp_knowledgeBase.KnowledgeDocument.md)[] |

#### Returns

`void`

#### Defined in

[src/mcp/knowledgeBase.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/knowledgeBase.ts#L22)

___

### query

▸ **query**(`term`, `limit?`): [`KnowledgeHit`](../interfaces/mcp_knowledgeBase.KnowledgeHit.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `term` | `string` | `undefined` |
| `limit` | `number` | `3` |

#### Returns

[`KnowledgeHit`](../interfaces/mcp_knowledgeBase.KnowledgeHit.md)[]

#### Defined in

[src/mcp/knowledgeBase.ts:26](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/mcp/knowledgeBase.ts#L26)
