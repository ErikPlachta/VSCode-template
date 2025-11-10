[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / UserContextManagerInterface

# Interface: UserContextManagerInterface

Defined in: [src/types/interfaces.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L203)

UserContextManagerInterface interface (renamed from RelevantDataManagerInterface).
Provides forward-compatible method names while delegating to legacy implementations.

## Extends

- [`RelevantDataManagerInterface`](RelevantDataManagerInterface.md)

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/types/interfaces.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L189)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getBusinessDataCatalogue`](RelevantDataManagerInterface.md#getbusinessdatacatalogue)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/types/interfaces.ts:190](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L190)

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

Defined in: [src/types/interfaces.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L191)

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

Defined in: [src/types/interfaces.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L196)

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

Defined in: [src/types/interfaces.ts:206](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L206)

Optional transitional method returning the renamed catalogue type.

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/types/interfaces.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/interfaces.ts#L192)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`validateCategoryData`](RelevantDataManagerInterface.md#validatecategorydata)
