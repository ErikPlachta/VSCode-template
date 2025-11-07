[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / RelationshipDescription

# Interface: RelationshipDescription

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).RelationshipDescription

High-level relationship metadata surfaced to consumers.

## Table of contents

### Properties

- [cardinality](agents_relevantDataManagerAgent.RelationshipDescription.md#cardinality)
- [description](agents_relevantDataManagerAgent.RelationshipDescription.md#description)
- [name](agents_relevantDataManagerAgent.RelationshipDescription.md#name)
- [targetCategory](agents_relevantDataManagerAgent.RelationshipDescription.md#targetcategory)
- [viaField](agents_relevantDataManagerAgent.RelationshipDescription.md#viafield)

## Properties

### cardinality

• **cardinality**: ``"one"`` \| ``"many"``

Expected cardinality of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:55](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L55)

___

### description

• **description**: `string`

Narrative description of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:56](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L56)

___

### name

• **name**: `string`

Relationship label.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L52)

___

### targetCategory

• **targetCategory**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category on the other side of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L53)

___

### viaField

• **viaField**: `string`

Field or property used to establish the link.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:54](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L54)
