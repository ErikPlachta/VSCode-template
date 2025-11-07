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

[src/agents/dataAgent.ts:133](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L133)

___

### relationship

• **relationship**: `string`

Human-readable name for the relationship.

#### Defined in

[src/agents/dataAgent.ts:132](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L132)

___

### sourceRecord

• **sourceRecord**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Record in the source category used to find links.

#### Defined in

[src/agents/dataAgent.ts:130](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L130)

___

### targetCategory

• **targetCategory**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category that was connected through a relationship.

#### Defined in

[src/agents/dataAgent.ts:131](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L131)
