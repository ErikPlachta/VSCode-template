[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / CategoryRequirements

# Interface: CategoryRequirements

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).CategoryRequirements

Requirements that each category must satisfy before being processed.

## Table of contents

### Properties

- [notes](agents_relevantDataManagerAgent.CategoryRequirements.md#notes)
- [requiredRecordFields](agents_relevantDataManagerAgent.CategoryRequirements.md#requiredrecordfields)
- [requiredRelationshipFields](agents_relevantDataManagerAgent.CategoryRequirements.md#requiredrelationshipfields)

## Properties

### notes

• `Optional` **notes**: `string`[]

Free-form notes surfaced to orchestration layers.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:66](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L66)

___

### requiredRecordFields

• **requiredRecordFields**: `string`[]

Fields that every record must provide.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:62](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L62)

___

### requiredRelationshipFields

• `Optional` **requiredRelationshipFields**: `string`[]

Record properties that should align with relationship definitions.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:64](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L64)
