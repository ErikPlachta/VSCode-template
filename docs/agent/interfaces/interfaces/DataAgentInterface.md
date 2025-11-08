---
title: Data Agent Interface
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/interfaces](../README.md) / DataAgentInterface

# Interface: DataAgentInterface

Defined in: [src/agent/interfaces.ts:102](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L102)

## Methods

### analyzeConnection()

> **analyzeConnection**(`sourceData`, `targetData`, `relationship`): `Promise`\<[`CrossCategoryConnection`](CrossCategoryConnection.md)\>

Defined in: [src/agent/interfaces.ts:109](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L109)

#### Parameters

##### sourceData

[`AnalysisInput`](AnalysisInput.md)

##### targetData

[`AnalysisInput`](AnalysisInput.md)

##### relationship

[`RelationshipDescription`](RelationshipDescription.md)

#### Returns

`Promise`\<[`CrossCategoryConnection`](CrossCategoryConnection.md)\>

---

### analyzeData()

> **analyzeData**(`input`): `Promise`\<[`DataInsight`](DataInsight.md)[]\>

Defined in: [src/agent/interfaces.ts:103](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L103)

#### Parameters

##### input

[`AnalysisInput`](AnalysisInput.md)

#### Returns

`Promise`\<[`DataInsight`](DataInsight.md)[]\>

---

### generateExplorationPlan()

> **generateExplorationPlan**(`categoryId`, `question`, `availableData`): `Promise`\<[`ExplorationPlan`](ExplorationPlan.md)\>

Defined in: [src/agent/interfaces.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L104)

#### Parameters

##### categoryId

`string`

##### question

`string`

##### availableData

[`AnalysisInput`](AnalysisInput.md)

#### Returns

`Promise`\<[`ExplorationPlan`](ExplorationPlan.md)\>

---

### searchData()

> **searchData**(`keyword`, `data`): [`TopicSearchResult`](TopicSearchResult.md)[]

Defined in: [src/agent/interfaces.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L114)

#### Parameters

##### keyword

`string`

##### data

[`AnalysisInput`](AnalysisInput.md)[]

#### Returns

[`TopicSearchResult`](TopicSearchResult.md)[]

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
