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

[src/agents/dataAgent.ts:85](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L85)

___

### recommendedQueries

• **recommendedQueries**: `string`[]

Names of saved queries that can help answer the question.

#### Defined in

[src/agents/dataAgent.ts:87](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L87)

___

### steps

• **steps**: [`ExplorationStep`](agents_dataAgent.ExplorationStep.md)[]

Ordered list of recommended analysis actions.

#### Defined in

[src/agents/dataAgent.ts:86](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L86)

___

### supportingResources

• **supportingResources**: \{ `categoryId`: `string` ; `ids`: `string`[]  }[]

References to related records for quick access.

#### Defined in

[src/agents/dataAgent.ts:88](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L88)

___

### topic

• **topic**: `string`

Canonical category identifier.

#### Defined in

[src/agents/dataAgent.ts:84](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/dataAgent.ts#L84)
