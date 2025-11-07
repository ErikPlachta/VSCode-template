[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / agents/databaseAgent

# Module: agents/databaseAgent

**`Fileoverview`**

Database-oriented agent that simulates querying the MCP
relevant-data workspace as if it were backed by persistent stores. The agent
focuses on structured retrieval with filtering, joins, and saved queries.

## Table of contents

### Classes

- [DatabaseAgent](../classes/agents_databaseAgent.DatabaseAgent.md)

### Interfaces

- [ApplicationQuery](../interfaces/agents_databaseAgent.ApplicationQuery.md)
- [DepartmentQuery](../interfaces/agents_databaseAgent.DepartmentQuery.md)
- [PeopleQuery](../interfaces/agents_databaseAgent.PeopleQuery.md)
- [PolicyQuery](../interfaces/agents_databaseAgent.PolicyQuery.md)
- [QueryOptions](../interfaces/agents_databaseAgent.QueryOptions.md)
- [ResourceQuery](../interfaces/agents_databaseAgent.ResourceQuery.md)
- [SavedQueryResult](../interfaces/agents_databaseAgent.SavedQueryResult.md)

### Functions

- [createDatabaseAgent](agents_databaseAgent.md#createdatabaseagent)

## Functions

### createDatabaseAgent

▸ **createDatabaseAgent**(`manager?`): [`DatabaseAgent`](../classes/agents_databaseAgent.DatabaseAgent.md)

Factory helper that produces a [DatabaseAgent](../classes/agents_databaseAgent.DatabaseAgent.md) with a default manager.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager?` | [`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) | Optional manager to reuse. |

#### Returns

[`DatabaseAgent`](../classes/agents_databaseAgent.DatabaseAgent.md)

Instantiated database agent.

**`Example`**

```ts
const agent = createDatabaseAgent();
const policies = await agent.queryPolicies({ category: "security" });
```

#### Defined in

[src/agents/databaseAgent.ts:506](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/databaseAgent.ts#L506)
