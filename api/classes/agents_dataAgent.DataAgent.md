[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / DataAgent

# Class: DataAgent

[agents/dataAgent](../modules/agents_dataAgent.md).DataAgent

Agent that understands data relationships between categories.

**`Example`**

```ts
const agent = new DataAgent();
const overview = await agent.getTopicOverview("departments");
console.log(overview.schemas.map((schema) => schema.name));
```

## Table of contents

### Constructors

- [constructor](agents_dataAgent.DataAgent.md#constructor)

### Methods

- [buildExplorationPlan](agents_dataAgent.DataAgent.md#buildexplorationplan)
- [findCrossTopicConnection](agents_dataAgent.DataAgent.md#findcrosstopicconnection)
- [getCategoryToolkit](agents_dataAgent.DataAgent.md#getcategorytoolkit)
- [getDatabaseAgent](agents_dataAgent.DataAgent.md#getdatabaseagent)
- [getDatasetCatalogue](agents_dataAgent.DataAgent.md#getdatasetcatalogue)
- [getTopicOverview](agents_dataAgent.DataAgent.md#gettopicoverview)
- [mapTopicConnections](agents_dataAgent.DataAgent.md#maptopicconnections)
- [search](agents_dataAgent.DataAgent.md#search)

## Constructors

### constructor

• **new DataAgent**(`manager?`, `databaseAgent?`): [`DataAgent`](agents_dataAgent.DataAgent.md)

Create a new [DataAgent](agents_dataAgent.DataAgent.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager?` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) | Optional manager responsible for dataset access. |
| `databaseAgent?` | [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md) | Optional database agent instance to reuse. |

#### Returns

[`DataAgent`](agents_dataAgent.DataAgent.md)

#### Defined in

[src/agents/dataAgent.ts:183](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L183)

## Methods

### buildExplorationPlan

▸ **buildExplorationPlan**(`topic`, `question`): `Promise`\<[`ExplorationPlan`](../interfaces/agents_dataAgent.ExplorationPlan.md)\>

Build an exploration plan for answering a specific user question.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Category that anchors the exploration. |
| `question` | `string` | Natural language problem that needs to be solved. |

#### Returns

`Promise`\<[`ExplorationPlan`](../interfaces/agents_dataAgent.ExplorationPlan.md)\>

Plan describing steps, queries, and supporting resources.

**`Throws`**

When the topic cannot be resolved.

**`Example`**

```ts
const plan = await agent.buildExplorationPlan("departments", "How is the analytics team structured?");
console.log(plan.steps.map((step) => step.title));
```

#### Defined in

[src/agents/dataAgent.ts:281](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L281)

___

### findCrossTopicConnection

▸ **findCrossTopicConnection**(`sourceTopic`, `sourceRecordId`, `targetTopic`): `Promise`\<`undefined` \| [`CrossTopicConnection`](../interfaces/agents_dataAgent.CrossTopicConnection.md)\>

Retrieve the records in the target topic that are connected to the source
record via declared relationships.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceTopic` | `string` | Category that contains the anchor record. |
| `sourceRecordId` | `string` | Identifier for the anchor record. |
| `targetTopic` | `string` | Category whose records should be matched. |

#### Returns

`Promise`\<`undefined` \| [`CrossTopicConnection`](../interfaces/agents_dataAgent.CrossTopicConnection.md)\>

Relationship details when a link exists, otherwise `undefined`.

**`Throws`**

When the source record cannot be found.

**`Example`**

```ts
const connection = await agent.findCrossTopicConnection("people", "person-001", "departments");
console.log(connection?.relationship);
```

#### Defined in

[src/agents/dataAgent.ts:336](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L336)

___

### getCategoryToolkit

▸ **getCategoryToolkit**(`topic`): [`CategoryToolkit`](../interfaces/agents_dataAgent.CategoryToolkit.md)

Gather the test, schema, and query artefacts for a category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Category identifier or alias. |

#### Returns

[`CategoryToolkit`](../interfaces/agents_dataAgent.CategoryToolkit.md)

Collection of supporting artefacts.

**`Throws`**

When the category cannot be resolved.

#### Defined in

[src/agents/dataAgent.ts:398](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L398)

___

### getDatabaseAgent

▸ **getDatabaseAgent**(): [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

Access to the underlying database agent for orchestration workflows.

#### Returns

[`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

Database-like helper that exposes query primitives.

#### Defined in

[src/agents/dataAgent.ts:387](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L387)

___

### getDatasetCatalogue

▸ **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Expose the consolidated dataset catalogue built from on-disk data sources.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Summaries for each category with key metadata.

#### Defined in

[src/agents/dataAgent.ts:193](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L193)

___

### getTopicOverview

▸ **getTopicOverview**(`topic`): `Promise`\<[`TopicOverview`](../interfaces/agents_dataAgent.TopicOverview.md)\>

Summarise a topic including schema references and highlight data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Category identifier or alias to summarise. |

#### Returns

`Promise`\<[`TopicOverview`](../interfaces/agents_dataAgent.TopicOverview.md)\>

Snapshot of the category and related artefacts.

**`Throws`**

When the topic cannot be resolved.

**`Example`**

```ts
const overview = await agent.getTopicOverview("people");
console.log(overview.examples[0]?.file);
```

#### Defined in

[src/agents/dataAgent.ts:209](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L209)

___

### mapTopicConnections

▸ **mapTopicConnections**(`topic`, `recordId?`): `Promise`\<[`TopicConnections`](../interfaces/agents_dataAgent.TopicConnections.md)\>

Map the connections from a given record to other categories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topic` | `string` | Category that owns the record being inspected. |
| `recordId?` | `string` | Optional record identifier. Defaults to the first record in the category. |

#### Returns

`Promise`\<[`TopicConnections`](../interfaces/agents_dataAgent.TopicConnections.md)\>

Structured description of relationships originating from the record.

**`Throws`**

When no records are available for the category.

**`Example`**

```ts
const connections = await agent.mapTopicConnections("applications", "app-aurora");
connections.connections.forEach((link) => console.log(link.relationship));
```

#### Defined in

[src/agents/dataAgent.ts:246](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L246)

___

### search

▸ **search**(`keyword`): [`TopicSearchResult`](../interfaces/agents_dataAgent.TopicSearchResult.md)[]

Run a keyword search across every category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyword` | `string` | Case-insensitive search string. |

#### Returns

[`TopicSearchResult`](../interfaces/agents_dataAgent.TopicSearchResult.md)[]

Matching records grouped by category.

**`Example`**

```ts
const matches = agent.search("analytics");
console.log(matches[0]?.displayName);
```

#### Defined in

[src/agents/dataAgent.ts:373](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L373)
