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

List of resolved relationships.

#### Defined in

[src/agents/dataAgent.ts:59](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L59)

___

### focus

• **focus**: `Object`

Record that serves as the anchor for the exploration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categoryId` | [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) |
| `record` | [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord) |

#### Defined in

[src/agents/dataAgent.ts:55](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L55)

___

### narrative

• **narrative**: `string`[]

Human-readable relationship statements for UI rendering.

#### Defined in

[src/agents/dataAgent.ts:64](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L64)
