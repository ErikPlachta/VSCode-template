[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / CrossTopicConnection

# Interface: CrossTopicConnection

[agents/dataAgent](../modules/agents_dataAgent.md).CrossTopicConnection

Result describing connections between two topics via a specific record.

## Table of contents

### Properties

- [relatedRecords](agents_dataAgent.CrossTopicConnection.md#relatedrecords)
- [relationship](agents_dataAgent.CrossTopicConnection.md#relationship)
- [sourceRecord](agents_dataAgent.CrossTopicConnection.md#sourcerecord)
- [targetCategory](agents_dataAgent.CrossTopicConnection.md#targetcategory)

## Properties

### relatedRecords

• **relatedRecords**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Records in the target category that satisfy the relationship.

#### Defined in

[src/agents/dataAgent.ts:139](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L139)

___

### relationship

• **relationship**: `string`

Human-readable name for the relationship.

#### Defined in

[src/agents/dataAgent.ts:138](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L138)

___

### sourceRecord

• **sourceRecord**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Record in the source category used to find links.

#### Defined in

[src/agents/dataAgent.ts:136](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L136)

___

### targetCategory

• **targetCategory**: `string`

Category that was connected through a relationship.

#### Defined in

[src/agents/dataAgent.ts:137](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L137)
