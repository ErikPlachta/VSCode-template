[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / TopicOverview

# Interface: TopicOverview

[agents/dataAgent](../modules/agents_dataAgent.md).TopicOverview

Summary of a topic including schemas, examples, and queries.

## Table of contents

### Properties

- [examples](agents_dataAgent.TopicOverview.md#examples)
- [highlightRecords](agents_dataAgent.TopicOverview.md#highlightrecords)
- [queries](agents_dataAgent.TopicOverview.md#queries)
- [relationships](agents_dataAgent.TopicOverview.md#relationships)
- [schemas](agents_dataAgent.TopicOverview.md#schemas)
- [snapshot](agents_dataAgent.TopicOverview.md#snapshot)
- [types](agents_dataAgent.TopicOverview.md#types)
- [validation](agents_dataAgent.TopicOverview.md#validation)

## Properties

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

Example datasets that illustrate typical records.

#### Defined in

[src/agents/dataAgent.ts:46](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L46)

___

### highlightRecords

• **highlightRecords**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Example records that should be highlighted to the user.

#### Defined in

[src/agents/dataAgent.ts:48](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L48)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Remote query blueprints for the authoritative systems.

#### Defined in

[src/agents/dataAgent.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L47)

___

### relationships

• **relationships**: [`RelationshipDescription`](agents_relevantDataManagerAgent.RelationshipDescription.md)[]

Relationship definitions originating from the topic.

#### Defined in

[src/agents/dataAgent.ts:43](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L43)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

JSON schema descriptors associated with the topic.

#### Defined in

[src/agents/dataAgent.ts:44](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L44)

___

### snapshot

• **snapshot**: [`CategorySnapshot`](agents_relevantDataManagerAgent.CategorySnapshot.md)

Snapshot metadata persisted in the shared cache.

#### Defined in

[src/agents/dataAgent.ts:42](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L42)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

Structured typing hints that mirror the schemas.

#### Defined in

[src/agents/dataAgent.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L45)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

Validation summary describing data quality checks.

#### Defined in

[src/agents/dataAgent.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L49)
