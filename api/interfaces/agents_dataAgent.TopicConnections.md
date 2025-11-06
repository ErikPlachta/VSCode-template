[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / TopicConnections

# Interface: TopicConnections

[agents/dataAgent](../modules/agents_dataAgent.md).TopicConnections

Mapping of a record's connections to other categories.

## Table of contents

### Properties

- [connections](agents_dataAgent.TopicConnections.md#connections)
- [focus](agents_dataAgent.TopicConnections.md#focus)
- [narrative](agents_dataAgent.TopicConnections.md#narrative)

## Properties

### connections

• **connections**: \{ `records`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[] ; `relationship`: `string` ; `targetCategory`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)  }[]

#### Defined in

[src/agents/dataAgent.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L37)

___

### focus

• **focus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categoryId` | [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) |
| `record` | [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord) |

#### Defined in

[src/agents/dataAgent.ts:33](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L33)

___

### narrative

• **narrative**: `string`[]

#### Defined in

[src/agents/dataAgent.ts:42](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L42)
