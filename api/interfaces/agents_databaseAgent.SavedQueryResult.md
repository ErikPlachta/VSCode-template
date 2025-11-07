[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/databaseAgent](../modules/agents_databaseAgent.md) / SavedQueryResult

# Interface: SavedQueryResult

[agents/databaseAgent](../modules/agents_databaseAgent.md).SavedQueryResult

Structure returned when executing a saved remote query blueprint.

## Table of contents

### Properties

- [blueprint](agents_databaseAgent.SavedQueryResult.md#blueprint)
- [results](agents_databaseAgent.SavedQueryResult.md#results)

## Properties

### blueprint

• **blueprint**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)

Blueprint that was executed.

#### Defined in

[src/agents/databaseAgent.ts:147](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/databaseAgent.ts#L147)

___

### results

• **results**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Matching records from the mock dataset.

#### Defined in

[src/agents/databaseAgent.ts:148](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/databaseAgent.ts#L148)
