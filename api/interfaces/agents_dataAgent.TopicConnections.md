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

[src/agents/dataAgent.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L39)

___

### focus

• **focus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `categoryId` | [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) |
| `record` | [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord) |

#### Defined in

[src/agents/dataAgent.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L35)

___

### narrative

• **narrative**: `string`[]

#### Defined in

[src/agents/dataAgent.ts:44](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L44)
