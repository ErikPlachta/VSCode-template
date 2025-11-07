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

• **connections**: \{ `records`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[] ; `relationship`: `string` ; `targetCategory`: `string`  }[]

List of resolved relationships.

#### Defined in

[src/agents/dataAgent.ts:60](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/dataAgent.ts#L60)

___

### focus

• **focus**: `Object`

Record that serves as the anchor for the exploration.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categoryId` | `string` |
| `record` | [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord) |

#### Defined in

[src/agents/dataAgent.ts:56](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/dataAgent.ts#L56)

___

### narrative

• **narrative**: `string`[]

Human-readable relationship statements for UI rendering.

#### Defined in

[src/agents/dataAgent.ts:65](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/dataAgent.ts#L65)
