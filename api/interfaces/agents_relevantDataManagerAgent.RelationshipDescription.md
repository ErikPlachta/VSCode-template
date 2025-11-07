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

[src/agents/relevantDataManagerAgent.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L51)

___

### description

• **description**: `string`

Narrative description of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L53)

___

### name

• **name**: `string`

Relationship label.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L45)

___

### targetCategory

• **targetCategory**: `string`

Category on the other side of the relationship.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L47)

___

### viaField

• **viaField**: `string`

Field or property used to establish the link.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L49)
