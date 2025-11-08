[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/dataAgent](../README.md) / DataAgent

# Class: DataAgent

Defined in: [src/agent/dataAgent/index.ts:138](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L138)

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

Defined in: [src/agent/dataAgent/index.ts:147](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L147)

Create a new DataAgent.

#### Returns

`DataAgent`

- TODO: describe return value.

## Methods

### analyzeConnection()

> **analyzeConnection**(`sourceData`, `targetData`, `relationship`): `Promise`\<[`CrossCategoryConnection`](../interfaces/CrossCategoryConnection.md)\>

Defined in: [src/agent/dataAgent/index.ts:262](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L262)

Analyze relationships between categories.

#### Parameters

##### sourceData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

sourceData parameter.

##### targetData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

targetData parameter.

##### relationship

[`RelationshipDescription`](../interfaces/RelationshipDescription.md)

relationship parameter.

#### Returns

`Promise`\<[`CrossCategoryConnection`](../interfaces/CrossCategoryConnection.md)\>

- TODO: describe return value.

***

### analyzeData()

> **analyzeData**(`input`): `Promise`\<[`DataInsight`](../interfaces/DataInsight.md)[]\>

Defined in: [src/agent/dataAgent/index.ts:157](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L157)

Analyze data and generate insights.

#### Parameters

##### input

[`AnalysisInput`](../interfaces/AnalysisInput.md)

input parameter.

#### Returns

`Promise`\<[`DataInsight`](../interfaces/DataInsight.md)[]\>

- TODO: describe return value.

***

### generateExplorationPlan()

> **generateExplorationPlan**(`categoryId`, `question`, `availableData`): `Promise`\<[`ExplorationPlan`](../interfaces/ExplorationPlan.md)\>

Defined in: [src/agent/dataAgent/index.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L204)

Generate an exploration plan for data analysis.

#### Parameters

##### categoryId

`string`

categoryId parameter.

##### question

`string`

question parameter.

##### availableData

[`AnalysisInput`](../interfaces/AnalysisInput.md)

availableData parameter.

#### Returns

`Promise`\<[`ExplorationPlan`](../interfaces/ExplorationPlan.md)\>

- TODO: describe return value.

***

### searchData()

> **searchData**(`keyword`, `data`): [`TopicSearchResult`](../interfaces/TopicSearchResult.md)[]

Defined in: [src/agent/dataAgent/index.ts:292](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/index.ts#L292)

Search for patterns in data records.

#### Parameters

##### keyword

`string`

keyword parameter.

##### data

[`AnalysisInput`](../interfaces/AnalysisInput.md)[]

data parameter.

#### Returns

[`TopicSearchResult`](../interfaces/TopicSearchResult.md)[]

- TODO: describe return value.
