[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / ExplorationStep

# Interface: ExplorationStep

[agents/dataAgent](../modules/agents_dataAgent.md).ExplorationStep

Individual step inside an exploration plan.

## Table of contents

### Properties

- [description](agents_dataAgent.ExplorationStep.md#description)
- [hints](agents_dataAgent.ExplorationStep.md#hints)
- [recommendedCategory](agents_dataAgent.ExplorationStep.md#recommendedcategory)
- [title](agents_dataAgent.ExplorationStep.md#title)

## Properties

### description

• **description**: `string`

Explanation of the action to take.

#### Defined in

[src/agents/dataAgent.ts:99](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L99)

___

### hints

• **hints**: `string`[]

Additional hints or nudges to guide investigation.

#### Defined in

[src/agents/dataAgent.ts:101](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L101)

___

### recommendedCategory

• **recommendedCategory**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category that should be explored in this step.

#### Defined in

[src/agents/dataAgent.ts:100](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L100)

___

### title

• **title**: `string`

Short step title.

#### Defined in

[src/agents/dataAgent.ts:98](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L98)
