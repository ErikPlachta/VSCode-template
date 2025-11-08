---
title: Data Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/dataAgent](../README.md) / DataAgent

# Class: DataAgent

Defined in: [src/agent/dataAgent/index.ts:99](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L99)

Agent that analyzes data and generates insights.
Focuses purely on data analysis without managing other agents or data sources.

## Example

```ts
const agent = new DataAgent();
const insights = await agent.analyzeData(analysisInput);
console.log(insights.map(insight => insight.description));
```

## Constructors

### Constructor

> **new DataAgent**(): `DataAgent`

Defined in: [src/agent/dataAgent/index.ts:106](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L106)

Create a new DataAgent.

#### Returns

`DataAgent`

## Methods

### analyzeConnection()

> **analyzeConnection**(`sourceData`, `targetData`, `relationship`): `Promise`\<[`CrossCategoryConnection`](../interfaces/CrossCategoryConnection.md)\>

Defined in: [src/agent/dataAgent/index.ts:221](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L221)

Analyze relationships between categories.

#### Parameters

##### sourceData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

Source category data.

##### targetData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

Target category data.

##### relationship

[`RelationshipDescription`](../interfaces/RelationshipDescription.md)

Relationship definition.

#### Returns

`Promise`\<[`CrossCategoryConnection`](../interfaces/CrossCategoryConnection.md)\>

- Cross-category connection analysis.

***

### analyzeData()

> **analyzeData**(`input`): `Promise`\<[`DataInsight`](../interfaces/DataInsight.md)[]\>

Defined in: [src/agent/dataAgent/index.ts:116](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L116)

Analyze data and generate insights.

#### Parameters

##### input

[`AnalysisInput`](../interfaces/AnalysisInput.md)

Data to analyze including records, schemas, and relationships.

#### Returns

`Promise`\<[`DataInsight`](../interfaces/DataInsight.md)[]\>

- Promise resolving to array of generated insights.

***

### generateExplorationPlan()

> **generateExplorationPlan**(`categoryId`, `question`, `availableData`): `Promise`\<[`ExplorationPlan`](../interfaces/ExplorationPlan.md)\>

Defined in: [src/agent/dataAgent/index.ts:163](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L163)

Generate an exploration plan for data analysis.

#### Parameters

##### categoryId

`string`

Category to create plan for.

##### question

`string`

Specific question to answer.

##### availableData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

Available data for analysis.

#### Returns

`Promise`\<[`ExplorationPlan`](../interfaces/ExplorationPlan.md)\>

- Exploration plan with recommended steps.

***

### searchData()

> **searchData**(`keyword`, `data`): [`TopicSearchResult`](../interfaces/TopicSearchResult.md)[]

Defined in: [src/agent/dataAgent/index.ts:251](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/index.ts#L251)

Search for patterns in data records.

#### Parameters

##### keyword

`string`

Search term.

##### data

[`AnalysisInput`](../interfaces/AnalysisInput.md)[]

Data to search through.

#### Returns

[`TopicSearchResult`](../interfaces/TopicSearchResult.md)[]

- Search results with relevance scoring.


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
