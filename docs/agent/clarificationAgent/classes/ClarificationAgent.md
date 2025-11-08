[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationAgent

# Class: ClarificationAgent

Defined in: [src/agent/clarificationAgent/index.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/clarificationAgent/index.ts#L43)

Agent responsible for handling ambiguous user requests and providing clarification guidance.

## Constructors

### Constructor

> **new ClarificationAgent**(`knowledgeBase?`): `ClarificationAgent`

Defined in: [src/agent/clarificationAgent/index.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/clarificationAgent/index.ts#L59)

Creates a new clarification agent instance.

#### Parameters

##### knowledgeBase?

[`KnowledgeBase`](../../../mcp/knowledgeBase/classes/KnowledgeBase.md)

knowledgeBase parameter.

#### Returns

`ClarificationAgent`

- TODO: describe return value.

## Methods

### clarify()

> **clarify**(`input`): `Promise`\<[`ClarificationResponse`](../interfaces/ClarificationResponse.md)\>

Defined in: [src/agent/clarificationAgent/index.ts:81](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/clarificationAgent/index.ts#L81)

Generates clarification guidance for ambiguous user requests.

#### Parameters

##### input

[`ClarificationAgentInput`](../interfaces/ClarificationAgentInput.md)

input parameter.

#### Returns

`Promise`\<[`ClarificationResponse`](../interfaces/ClarificationResponse.md)\>

- TODO: describe return value.

***

### loadKnowledge()

> **loadKnowledge**(`documents`): `void`

Defined in: [src/agent/clarificationAgent/index.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/clarificationAgent/index.ts#L69)

Loads documents into the knowledge base for context retrieval.

#### Parameters

##### documents

[`KnowledgeDocument`](../../../mcp/knowledgeBase/interfaces/KnowledgeDocument.md)[]

documents parameter.

#### Returns

`void`
