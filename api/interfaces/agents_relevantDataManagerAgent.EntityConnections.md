[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / EntityConnections

# Interface: EntityConnections

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).EntityConnections

Connections resolved for a specific record.

## Table of contents

### Properties

- [categoryId](agents_relevantDataManagerAgent.EntityConnections.md#categoryid)
- [connections](agents_relevantDataManagerAgent.EntityConnections.md#connections)
- [recordId](agents_relevantDataManagerAgent.EntityConnections.md#recordid)

## Properties

### categoryId

• **categoryId**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category the record belongs to.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:211](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L211)

___

### connections

• **connections**: \{ `records`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[] ; `relationship`: `string` ; `targetCategory`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)  }[]

Related records grouped by relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:213](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L213)

___

### recordId

• **recordId**: `string`

Identifier for the record being analysed.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:212](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L212)
