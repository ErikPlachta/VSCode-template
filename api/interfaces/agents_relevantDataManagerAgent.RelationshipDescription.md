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

[src/agents/relevantDataManagerAgent.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L52)

___

### description

• **description**: `string`

Narrative description of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:54](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L54)

___

### name

• **name**: `string`

Relationship label.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:46](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L46)

___

### targetCategory

• **targetCategory**: `string`

Category on the other side of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:48](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L48)

___

### viaField

• **viaField**: `string`

Field or property used to establish the link.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L50)
