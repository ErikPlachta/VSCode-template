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

[src/agents/dataAgent.ts:65](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L65)

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

[src/agents/dataAgent.ts:61](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L61)

___

### narrative

• **narrative**: `string`[]

Human-readable relationship statements for UI rendering.

#### Defined in

[src/agents/dataAgent.ts:70](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/dataAgent.ts#L70)
