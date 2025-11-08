[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/interfaces](../README.md) / RelevantDataManagerInterface

# Interface: RelevantDataManagerInterface

Defined in: [src/agent/interfaces.ts:193](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L193)

Interface for managing business data schemas, metadata, and relationships.

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/agent/interfaces.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L194)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/agent/interfaces.ts:195](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L195)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategoryInfo`](CategoryInfo.md)

***

### getCategorySchema()

> **getCategorySchema**(`categoryId`): [`CategorySchema`](CategorySchema.md)[]

Defined in: [src/agent/interfaces.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L196)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategorySchema`](CategorySchema.md)[]

***

### getRelationships()

> **getRelationships**(`categoryId`): [`RelationshipDescription`](RelationshipDescription.md)[]

Defined in: [src/agent/interfaces.ts:201](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L201)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/agent/interfaces.ts:197](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/interfaces.ts#L197)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)
