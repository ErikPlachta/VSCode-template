[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / ExplorationPlan

# Interface: ExplorationPlan

[agents/dataAgent](../modules/agents_dataAgent.md).ExplorationPlan

A plan that helps a user explore or solve a problem.

## Table of contents

### Properties

- [question](agents_dataAgent.ExplorationPlan.md#question)
- [recommendedQueries](agents_dataAgent.ExplorationPlan.md#recommendedqueries)
- [steps](agents_dataAgent.ExplorationPlan.md#steps)
- [supportingResources](agents_dataAgent.ExplorationPlan.md#supportingresources)
- [topic](agents_dataAgent.ExplorationPlan.md#topic)

## Properties

### question

• **question**: `string`

#### Defined in

[src/agents/dataAgent.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L50)

___

### recommendedQueries

• **recommendedQueries**: `string`[]

#### Defined in

[src/agents/dataAgent.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L52)

___

### steps

• **steps**: [`ExplorationStep`](agents_dataAgent.ExplorationStep.md)[]

#### Defined in

[src/agents/dataAgent.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L51)

___

### supportingResources

• **supportingResources**: \{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `ids`: `string`[]  }[]

#### Defined in

[src/agents/dataAgent.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L53)

___

### topic

• **topic**: `string`

#### Defined in

[src/agents/dataAgent.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/dataAgent.ts#L49)
