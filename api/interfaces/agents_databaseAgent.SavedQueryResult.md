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

[src/agents/databaseAgent.ts:144](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/databaseAgent.ts#L144)

___

### results

• **results**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Matching records from the mock dataset.

#### Defined in

[src/agents/databaseAgent.ts:145](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/databaseAgent.ts#L145)
