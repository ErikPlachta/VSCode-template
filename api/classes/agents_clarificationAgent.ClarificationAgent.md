[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/clarificationAgent](../modules/agents_clarificationAgent.md) / ClarificationAgent

# Class: ClarificationAgent

[agents/clarificationAgent](../modules/agents_clarificationAgent.md).ClarificationAgent

## Table of contents

### Constructors

- [constructor](agents_clarificationAgent.ClarificationAgent.md#constructor)

### Methods

- [clarify](agents_clarificationAgent.ClarificationAgent.md#clarify)
- [loadKnowledge](agents_clarificationAgent.ClarificationAgent.md#loadknowledge)

## Constructors

### constructor

• **new ClarificationAgent**(`knowledgeBase?`): [`ClarificationAgent`](agents_clarificationAgent.ClarificationAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `knowledgeBase?` | [`KnowledgeBase`](mcp_knowledgeBase.KnowledgeBase.md) |

#### Returns

[`ClarificationAgent`](agents_clarificationAgent.ClarificationAgent.md)

#### Defined in

[src/agents/clarificationAgent.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/clarificationAgent.ts#L25)

## Methods

### clarify

▸ **clarify**(`input`): `Promise`\<[`ClarificationResponse`](../interfaces/agents_clarificationAgent.ClarificationResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`ClarificationAgentInput`](../interfaces/agents_clarificationAgent.ClarificationAgentInput.md) |

#### Returns

`Promise`\<[`ClarificationResponse`](../interfaces/agents_clarificationAgent.ClarificationResponse.md)\>

#### Defined in

[src/agents/clarificationAgent.ts:33](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/clarificationAgent.ts#L33)

___

### loadKnowledge

▸ **loadKnowledge**(`documents`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `documents` | [`KnowledgeDocument`](../interfaces/mcp_knowledgeBase.KnowledgeDocument.md)[] |

#### Returns

`void`

#### Defined in

[src/agents/clarificationAgent.ts:29](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/clarificationAgent.ts#L29)
