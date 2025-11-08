---
title: Clarification Agent
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

---

[mybusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationAgent

# Class: ClarificationAgent

Defined in: [src/agent/clarificationAgent/index.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L41)

Agent responsible for handling ambiguous user requests and providing clarification guidance.

## Constructors

### Constructor

> **new ClarificationAgent**(`knowledgeBase?`): `ClarificationAgent`

Defined in: [src/agent/clarificationAgent/index.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L56)

Creates a new clarification agent instance.

#### Parameters

##### knowledgeBase?

[`KnowledgeBase`](../../../mcp/knowledgeBase/classes/KnowledgeBase.md)

Optional knowledge base instance, creates new one if not provided.

#### Returns

`ClarificationAgent`

## Methods

### clarify()

> **clarify**(`input`): `Promise`\<[`ClarificationResponse`](../interfaces/ClarificationResponse.md)\>

Defined in: [src/agent/clarificationAgent/index.ts:78](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L78)

Generates clarification guidance for ambiguous user requests.

#### Parameters

##### input

[`ClarificationAgentInput`](../interfaces/ClarificationAgentInput.md)

The clarification request containing question and context.

#### Returns

`Promise`\<[`ClarificationResponse`](../interfaces/ClarificationResponse.md)\>

- Promise resolving to clarification response with guidance and context.

---

### loadKnowledge()

> **loadKnowledge**(`documents`): `void`

Defined in: [src/agent/clarificationAgent/index.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L66)

Loads documents into the knowledge base for context retrieval.

#### Parameters

##### documents

[`KnowledgeDocument`](../../../mcp/knowledgeBase/interfaces/KnowledgeDocument.md)[]

The documents to index in the knowledge base.

#### Returns

`void`

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
