[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [mcp/knowledgeBase](../README.md) / KnowledgeBase

# Class: KnowledgeBase

Defined in: [src/mcp/knowledgeBase.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/mcp/knowledgeBase.ts#L30)

## Constructors

### Constructor

> **new KnowledgeBase**(): `KnowledgeBase`

#### Returns

`KnowledgeBase`

## Methods

### indexDocument()

> **indexDocument**(`document`): `void`

Defined in: [src/mcp/knowledgeBase.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/mcp/knowledgeBase.ts#L38)

indexDocument function.

#### Parameters

##### document

[`KnowledgeDocument`](../interfaces/KnowledgeDocument.md)

document parameter.

#### Returns

`void`

***

### indexDocuments()

> **indexDocuments**(`documents`): `void`

Defined in: [src/mcp/knowledgeBase.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/mcp/knowledgeBase.ts#L47)

indexDocuments function.

#### Parameters

##### documents

[`KnowledgeDocument`](../interfaces/KnowledgeDocument.md)[]

documents parameter.

#### Returns

`void`

***

### query()

> **query**(`term`, `limit`): [`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]

Defined in: [src/mcp/knowledgeBase.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/mcp/knowledgeBase.ts#L58)

query function.

#### Parameters

##### term

`string`

term parameter.

##### limit

`number` = `3`

limit parameter.

#### Returns

[`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]

- TODO: describe return value.
