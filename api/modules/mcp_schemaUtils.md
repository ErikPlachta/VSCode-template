[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcp/schemaUtils

# Module: mcp/schemaUtils

## Table of contents

### Interfaces

- [RelationshipIntegrityIssue](../interfaces/mcp_schemaUtils.RelationshipIntegrityIssue.md)
- [SchemaValidationSummary](../interfaces/mcp_schemaUtils.SchemaValidationSummary.md)

### Functions

- [detectDuplicateSchemas](mcp_schemaUtils.md#detectduplicateschemas)
- [normaliseSchemaName](mcp_schemaUtils.md#normaliseschemaname)
- [validateCategorySchemas](mcp_schemaUtils.md#validatecategoryschemas)
- [validateRelationships](mcp_schemaUtils.md#validaterelationships)

## Functions

### detectDuplicateSchemas

▸ **detectDuplicateSchemas**(`schemas`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemas` | [`CategorySchema`](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)[] |

#### Returns

`string`[]

#### Defined in

[src/mcp/schemaUtils.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/schemaUtils.ts#L23)

___

### normaliseSchemaName

▸ **normaliseSchemaName**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[src/mcp/schemaUtils.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/schemaUtils.ts#L19)

___

### validateCategorySchemas

▸ **validateCategorySchemas**(`categories`): [`SchemaValidationSummary`](../interfaces/mcp_schemaUtils.SchemaValidationSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `categories` | [`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)[] |

#### Returns

[`SchemaValidationSummary`](../interfaces/mcp_schemaUtils.SchemaValidationSummary.md)

#### Defined in

[src/mcp/schemaUtils.ts:57](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/schemaUtils.ts#L57)

___

### validateRelationships

▸ **validateRelationships**(`categories`): [`RelationshipIntegrityIssue`](../interfaces/mcp_schemaUtils.RelationshipIntegrityIssue.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `categories` | [`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)[] |

#### Returns

[`RelationshipIntegrityIssue`](../interfaces/mcp_schemaUtils.RelationshipIntegrityIssue.md)[]

#### Defined in

[src/mcp/schemaUtils.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/schemaUtils.ts#L37)
