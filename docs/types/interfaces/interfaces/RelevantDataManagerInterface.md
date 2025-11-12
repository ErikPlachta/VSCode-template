[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / RelevantDataManagerInterface

# Interface: RelevantDataManagerInterface

Defined in: [src/types/interfaces.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L188)

RelevantDataManagerInterface interface.

## Extended by

- [`UserContextManagerInterface`](UserContextManagerInterface.md)

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/types/interfaces.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L189)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/types/interfaces.ts:190](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L190)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategoryInfo`](CategoryInfo.md)

***

### getCategorySchema()

> **getCategorySchema**(`categoryId`): [`CategorySchema`](CategorySchema.md)[]

Defined in: [src/types/interfaces.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L191)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategorySchema`](CategorySchema.md)[]

***

### getRelationships()

> **getRelationships**(`categoryId`): [`RelationshipDescription`](RelationshipDescription.md)[]

Defined in: [src/types/interfaces.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L196)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/types/interfaces.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/interfaces.ts#L192)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)
