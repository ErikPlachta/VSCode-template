[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / DataAgentInterface

# Interface: DataAgentInterface

Defined in: [src/types/interfaces.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L130)

DataAgentInterface interface.

## Methods

### analyzeConnection()

> **analyzeConnection**(`sourceData`, `targetData`, `relationship`): `Promise`\<[`CrossCategoryConnection`](CrossCategoryConnection.md)\>

Defined in: [src/types/interfaces.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L137)

#### Parameters

##### sourceData

[`AnalysisInput`](AnalysisInput.md)

##### targetData

[`AnalysisInput`](AnalysisInput.md)

##### relationship

[`RelationshipDescription`](RelationshipDescription.md)

#### Returns

`Promise`\<[`CrossCategoryConnection`](CrossCategoryConnection.md)\>

***

### analyzeData()

> **analyzeData**(`input`): `Promise`\<[`DataInsight`](DataInsight.md)[]\>

Defined in: [src/types/interfaces.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L131)

#### Parameters

##### input

[`AnalysisInput`](AnalysisInput.md)

#### Returns

`Promise`\<[`DataInsight`](DataInsight.md)[]\>

***

### generateExplorationPlan()

> **generateExplorationPlan**(`categoryId`, `question`, `availableData`): `Promise`\<[`ExplorationPlan`](ExplorationPlan.md)\>

Defined in: [src/types/interfaces.ts:132](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L132)

#### Parameters

##### categoryId

`string`

##### question

`string`

##### availableData

[`AnalysisInput`](AnalysisInput.md)

#### Returns

`Promise`\<[`ExplorationPlan`](ExplorationPlan.md)\>

***

### searchData()

> **searchData**(`keyword`, `data`): [`TopicSearchResult`](TopicSearchResult.md)[]

Defined in: [src/types/interfaces.ts:142](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L142)

#### Parameters

##### keyword

`string`

##### data

[`AnalysisInput`](AnalysisInput.md)[]

#### Returns

[`TopicSearchResult`](TopicSearchResult.md)[]
