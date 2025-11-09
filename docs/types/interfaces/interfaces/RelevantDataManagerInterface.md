[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / RelevantDataManagerInterface

# Interface: RelevantDataManagerInterface

Defined in: [src/types/interfaces.ts:199](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L199)

RelevantDataManagerInterface interface.

## Extended by

- [`UserContextManagerInterface`](UserContextManagerInterface.md)

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/types/interfaces.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L200)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/types/interfaces.ts:201](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L201)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategoryInfo`](CategoryInfo.md)

***

### getCategorySchema()

> **getCategorySchema**(`categoryId`): [`CategorySchema`](CategorySchema.md)[]

Defined in: [src/types/interfaces.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L202)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategorySchema`](CategorySchema.md)[]

***

### getRelationships()

> **getRelationships**(`categoryId`): [`RelationshipDescription`](RelationshipDescription.md)[]

Defined in: [src/types/interfaces.ts:207](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L207)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/types/interfaces.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/interfaces.ts#L203)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)
