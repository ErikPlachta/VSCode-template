[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / DataAgentInterface

# Interface: DataAgentInterface

Defined in: [src/types/interfaces.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/interfaces.ts#L119)

DataAgentInterface interface.

## Methods

### analyzeConnection()

> **analyzeConnection**(`sourceData`, `targetData`, `relationship`): `Promise`\<[`CrossCategoryConnection`](CrossCategoryConnection.md)\>

Defined in: [src/types/interfaces.ts:126](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/interfaces.ts#L126)

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

Defined in: [src/types/interfaces.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/interfaces.ts#L120)

#### Parameters

##### input

[`AnalysisInput`](AnalysisInput.md)

#### Returns

`Promise`\<[`DataInsight`](DataInsight.md)[]\>

***

### generateExplorationPlan()

> **generateExplorationPlan**(`categoryId`, `question`, `availableData`): `Promise`\<[`ExplorationPlan`](ExplorationPlan.md)\>

Defined in: [src/types/interfaces.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/interfaces.ts#L121)

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

Defined in: [src/types/interfaces.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/interfaces.ts#L131)

#### Parameters

##### keyword

`string`

##### data

[`AnalysisInput`](AnalysisInput.md)[]

#### Returns

[`TopicSearchResult`](TopicSearchResult.md)[]
