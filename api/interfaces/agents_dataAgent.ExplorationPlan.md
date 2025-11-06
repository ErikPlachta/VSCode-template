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

[src/agents/dataAgent.ts:48](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L48)

___

### recommendedQueries

• **recommendedQueries**: `string`[]

#### Defined in

[src/agents/dataAgent.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L50)

___

### steps

• **steps**: [`ExplorationStep`](agents_dataAgent.ExplorationStep.md)[]

#### Defined in

[src/agents/dataAgent.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L49)

___

### supportingResources

• **supportingResources**: \{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `ids`: `string`[]  }[]

#### Defined in

[src/agents/dataAgent.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L51)

___

### topic

• **topic**: `string`

#### Defined in

[src/agents/dataAgent.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/agents/dataAgent.ts#L47)
