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

End-user question that motivated the plan.

#### Defined in

[src/agents/dataAgent.ts:79](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L79)

___

### recommendedQueries

• **recommendedQueries**: `string`[]

Names of saved queries that can help answer the question.

#### Defined in

[src/agents/dataAgent.ts:81](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L81)

___

### steps

• **steps**: [`ExplorationStep`](agents_dataAgent.ExplorationStep.md)[]

Ordered list of recommended analysis actions.

#### Defined in

[src/agents/dataAgent.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L80)

___

### supportingResources

• **supportingResources**: \{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `ids`: `string`[]  }[]

References to related records for quick access.

#### Defined in

[src/agents/dataAgent.ts:82](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L82)

___

### topic

• **topic**: `string`

Canonical category identifier.

#### Defined in

[src/agents/dataAgent.ts:78](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L78)
