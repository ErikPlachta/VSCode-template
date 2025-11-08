---
title: Knowledge Base
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

***

[mybusiness-mcp-extension](../../../modules.md) / [mcp/knowledgeBase](../README.md) / KnowledgeBase

# Class: KnowledgeBase

Defined in: [src/mcp/knowledgeBase.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/knowledgeBase.ts#L19)

## Constructors

### Constructor

> **new KnowledgeBase**(): `KnowledgeBase`

#### Returns

`KnowledgeBase`

## Methods

### indexDocument()

> **indexDocument**(`document`): `void`

Defined in: [src/mcp/knowledgeBase.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/knowledgeBase.ts#L22)

#### Parameters

##### document

[`KnowledgeDocument`](../interfaces/KnowledgeDocument.md)

#### Returns

`void`

***

### indexDocuments()

> **indexDocuments**(`documents`): `void`

Defined in: [src/mcp/knowledgeBase.ts:26](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/knowledgeBase.ts#L26)

#### Parameters

##### documents

[`KnowledgeDocument`](../interfaces/KnowledgeDocument.md)[]

#### Returns

`void`

***

### query()

> **query**(`term`, `limit`): [`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]

Defined in: [src/mcp/knowledgeBase.ts:30](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/knowledgeBase.ts#L30)

#### Parameters

##### term

`string`

##### limit

`number` = `3`

#### Returns

[`KnowledgeHit`](../interfaces/KnowledgeHit.md)[]


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
