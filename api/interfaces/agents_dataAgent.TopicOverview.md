[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / TopicOverview

# Interface: TopicOverview

[agents/dataAgent](../modules/agents_dataAgent.md).TopicOverview

Summary of a topic including schemas, examples, and queries.

## Table of contents

### Properties

- [examples](agents_dataAgent.TopicOverview.md#examples)
- [highlightRecords](agents_dataAgent.TopicOverview.md#highlightrecords)
- [pythonTypes](agents_dataAgent.TopicOverview.md#pythontypes)
- [queries](agents_dataAgent.TopicOverview.md#queries)
- [relationships](agents_dataAgent.TopicOverview.md#relationships)
- [schemas](agents_dataAgent.TopicOverview.md#schemas)
- [snapshot](agents_dataAgent.TopicOverview.md#snapshot)

## Properties

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

Example datasets that illustrate typical records.

#### Defined in

[src/agents/dataAgent.ts:42](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L42)

___

### highlightRecords

• **highlightRecords**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Example records that should be highlighted to the user.

#### Defined in

[src/agents/dataAgent.ts:44](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L44)

___

### pythonTypes

• **pythonTypes**: [`PythonTypeDefinition`](agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

Python typing hints that mirror the schemas.

#### Defined in

[src/agents/dataAgent.ts:41](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L41)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Remote query blueprints for the authoritative systems.

#### Defined in

[src/agents/dataAgent.ts:43](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L43)

___

### relationships

• **relationships**: [`RelationshipDescription`](agents_relevantDataManagerAgent.RelationshipDescription.md)[]

Relationship definitions originating from the topic.

#### Defined in

[src/agents/dataAgent.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L39)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

JSON schema descriptors associated with the topic.

#### Defined in

[src/agents/dataAgent.ts:40](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L40)

___

### snapshot

• **snapshot**: [`CategorySnapshot`](agents_relevantDataManagerAgent.CategorySnapshot.md)

Snapshot metadata persisted in the shared cache.

#### Defined in

[src/agents/dataAgent.ts:38](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/dataAgent.ts#L38)
