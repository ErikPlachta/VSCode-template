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

[src/agents/dataAgent.ts:136](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/dataAgent.ts#L136)

___

### relationship

• **relationship**: `string`

Human-readable name for the relationship.

#### Defined in

[src/agents/dataAgent.ts:135](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/dataAgent.ts#L135)

___

### sourceRecord

• **sourceRecord**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Record in the source category used to find links.

#### Defined in

[src/agents/dataAgent.ts:133](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/dataAgent.ts#L133)

___

### targetCategory

• **targetCategory**: `string`

Category that was connected through a relationship.

#### Defined in

[src/agents/dataAgent.ts:134](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/dataAgent.ts#L134)
