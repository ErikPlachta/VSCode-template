[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / UserContextManagerInterface

# Interface: UserContextManagerInterface

Defined in: [src/types/interfaces.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L214)

UserContextManagerInterface interface (renamed from RelevantDataManagerInterface).
Provides forward-compatible method names while delegating to legacy implementations.

## Extends

- [`RelevantDataManagerInterface`](RelevantDataManagerInterface.md)

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/types/interfaces.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L200)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getBusinessDataCatalogue`](RelevantDataManagerInterface.md#getbusinessdatacatalogue)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/types/interfaces.ts:201](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L201)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategoryInfo`](CategoryInfo.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getCategoryInfo`](RelevantDataManagerInterface.md#getcategoryinfo)

***

### getCategorySchema()

> **getCategorySchema**(`categoryId`): [`CategorySchema`](CategorySchema.md)[]

Defined in: [src/types/interfaces.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L202)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategorySchema`](CategorySchema.md)[]

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getCategorySchema`](RelevantDataManagerInterface.md#getcategoryschema)

***

### getRelationships()

> **getRelationships**(`categoryId`): [`RelationshipDescription`](RelationshipDescription.md)[]

Defined in: [src/types/interfaces.ts:207](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L207)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getRelationships`](RelevantDataManagerInterface.md#getrelationships)

***

### getUserContextCatalogue()?

> `optional` **getUserContextCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/types/interfaces.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L217)

Optional transitional method returning the renamed catalogue type.

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/types/interfaces.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/interfaces.ts#L203)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`validateCategoryData`](RelevantDataManagerInterface.md#validatecategorydata)
