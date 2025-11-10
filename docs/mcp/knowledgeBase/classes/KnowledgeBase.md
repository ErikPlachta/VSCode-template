[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [mcp/knowledgeBase](../README.md) / KnowledgeBase

# Class: KnowledgeBase

Defined in: [src/mcp/knowledgeBase.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/mcp/knowledgeBase.ts#L30)

## Constructors

### Constructor

> **new KnowledgeBase**(): `KnowledgeBase`

#### Returns

`KnowledgeBase`

## Methods

### indexDocument()

> **indexDocument**(`document`): `void`

Defined in: [src/mcp/knowledgeBase.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/mcp/knowledgeBase.ts#L38)

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

Defined in: [src/mcp/knowledgeBase.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/mcp/knowledgeBase.ts#L47)

indexDocuments function.

#### Parameters

##### documents

[`KnowledgeDocument`](../interfaces/KnowledgeDocument.md)[]

documents parameter.

#### Returns

`void`

***

### query()

> **query**(`term`, `limit?`): [`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]

Defined in: [src/mcp/knowledgeBase.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/mcp/knowledgeBase.ts#L61)

Performs a keyword-based query over indexed knowledge documents.
Extracts simple word tokens (>=3 chars, alphanumeric or hyphen) from the
search term, scores each document by keyword presence, builds a summary
snippet, then returns the highest scoring hits.

#### Parameters

##### term

`string`

Raw search term entered by the user.

##### limit?

`number` = `3`

Maximum number of results to return after sorting by descending score.

#### Returns

[`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]

- Ranked list of matching documents including id, title, summary snippet and score.
