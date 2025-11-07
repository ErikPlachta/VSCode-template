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

[src/agents/dataAgent.ts:62](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L62)

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

[src/agents/dataAgent.ts:58](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L58)

___

### narrative

• **narrative**: `string`[]

Human-readable relationship statements for UI rendering.

#### Defined in

[src/agents/dataAgent.ts:67](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L67)
