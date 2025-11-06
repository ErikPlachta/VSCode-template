[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / DataAgent

# Class: DataAgent

[agents/dataAgent](../modules/agents_dataAgent.md).DataAgent

Agent that understands data relationships between categories.

## Table of contents

### Constructors

- [constructor](agents_dataAgent.DataAgent.md#constructor)

### Methods

- [buildExplorationPlan](agents_dataAgent.DataAgent.md#buildexplorationplan)
- [findCrossTopicConnection](agents_dataAgent.DataAgent.md#findcrosstopicconnection)
- [getDatabaseAgent](agents_dataAgent.DataAgent.md#getdatabaseagent)
- [getTopicOverview](agents_dataAgent.DataAgent.md#gettopicoverview)
- [mapTopicConnections](agents_dataAgent.DataAgent.md#maptopicconnections)
- [search](agents_dataAgent.DataAgent.md#search)

## Constructors

### constructor

• **new DataAgent**(`manager?`, `databaseAgent?`): [`DataAgent`](agents_dataAgent.DataAgent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager?` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) |
| `databaseAgent?` | [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md) |

#### Returns

[`DataAgent`](agents_dataAgent.DataAgent.md)

#### Defined in

[src/agents/dataAgent.ts:86](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L86)

## Methods

### buildExplorationPlan

▸ **buildExplorationPlan**(`topic`, `question`): `Promise`\<[`ExplorationPlan`](../interfaces/agents_dataAgent.ExplorationPlan.md)\>

Build an exploration plan for answering a specific user question.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `question` | `string` |

#### Returns

`Promise`\<[`ExplorationPlan`](../interfaces/agents_dataAgent.ExplorationPlan.md)\>

#### Defined in

[src/agents/dataAgent.ts:129](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L129)

___

### findCrossTopicConnection

▸ **findCrossTopicConnection**(`sourceTopic`, `sourceRecordId`, `targetTopic`): `Promise`\<`undefined` \| [`CrossTopicConnection`](../interfaces/agents_dataAgent.CrossTopicConnection.md)\>

Retrieve the records in the target topic that are connected to the source
record via declared relationships.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceTopic` | `string` |
| `sourceRecordId` | `string` |
| `targetTopic` | `string` |

#### Returns

`Promise`\<`undefined` \| [`CrossTopicConnection`](../interfaces/agents_dataAgent.CrossTopicConnection.md)\>

#### Defined in

[src/agents/dataAgent.ts:169](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L169)

___

### getDatabaseAgent

▸ **getDatabaseAgent**(): [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

Access to the underlying database agent for orchestration workflows.

#### Returns

[`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

#### Defined in

[src/agents/dataAgent.ts:204](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L204)

___

### getTopicOverview

▸ **getTopicOverview**(`topic`): `Promise`\<[`TopicOverview`](../interfaces/agents_dataAgent.TopicOverview.md)\>

Summarise a topic including schema references and highlight data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |

#### Returns

`Promise`\<[`TopicOverview`](../interfaces/agents_dataAgent.TopicOverview.md)\>

#### Defined in

[src/agents/dataAgent.ts:92](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L92)

___

### mapTopicConnections

▸ **mapTopicConnections**(`topic`, `recordId?`): `Promise`\<[`TopicConnections`](../interfaces/agents_dataAgent.TopicConnections.md)\>

Map the connections from a given record to other categories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topic` | `string` |
| `recordId?` | `string` |

#### Returns

`Promise`\<[`TopicConnections`](../interfaces/agents_dataAgent.TopicConnections.md)\>

#### Defined in

[src/agents/dataAgent.ts:108](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L108)

___

### search

▸ **search**(`keyword`): [`TopicSearchResult`](../interfaces/agents_dataAgent.TopicSearchResult.md)[]

Run a keyword search across every category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

[`TopicSearchResult`](../interfaces/agents_dataAgent.TopicSearchResult.md)[]

#### Defined in

[src/agents/dataAgent.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L194)
