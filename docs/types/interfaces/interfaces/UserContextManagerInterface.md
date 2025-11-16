[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/interfaces](../README.md) / UserContextManagerInterface

# Interface: UserContextManagerInterface

Defined in: [src/types/interfaces.ts:240](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L240)

UserContextManagerInterface interface (renamed from RelevantDataManagerInterface).
Provides forward-compatible method names while delegating to legacy implementations.

## Extends

- [`RelevantDataManagerInterface`](RelevantDataManagerInterface.md)

## Methods

### getBusinessDataCatalog()

> **getBusinessDataCatalog**(): [`BusinessDataCatalog`](BusinessDataCatalog.md)

Defined in: [src/types/interfaces.ts:220](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L220)

Primary American English method returning the business data catalog.

#### Returns

[`BusinessDataCatalog`](BusinessDataCatalog.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getBusinessDataCatalog`](RelevantDataManagerInterface.md#getbusinessdatacatalog)

***

### ~~getBusinessDataCatalogue()~~

> **getBusinessDataCatalogue**(): [`BusinessDataCatalog`](BusinessDataCatalog.md)

Defined in: [src/types/interfaces.ts:226](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L226)

Deprecated British English variant retained for migration window.

#### Returns

[`BusinessDataCatalog`](BusinessDataCatalog.md)

#### Deprecated

Use getBusinessDataCatalog instead.

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getBusinessDataCatalogue`](RelevantDataManagerInterface.md#getbusinessdatacatalogue)

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/types/interfaces.ts:227](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L227)

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

Defined in: [src/types/interfaces.ts:228](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L228)

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

Defined in: [src/types/interfaces.ts:233](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L233)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`getRelationships`](RelevantDataManagerInterface.md#getrelationships)

***

### getUserContextCatalog()?

> `optional` **getUserContextCatalog**(): [`BusinessDataCatalog`](BusinessDataCatalog.md)

Defined in: [src/types/interfaces.ts:245](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L245)

Optional American English method returning the user context catalog.

#### Returns

[`BusinessDataCatalog`](BusinessDataCatalog.md)

***

### ~~getUserContextCatalogue()?~~

> `optional` **getUserContextCatalogue**(): [`BusinessDataCatalog`](BusinessDataCatalog.md)

Defined in: [src/types/interfaces.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L251)

Optional deprecated British English variant.

#### Returns

[`BusinessDataCatalog`](BusinessDataCatalog.md)

#### Deprecated

Use getUserContextCatalog instead.

***

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/types/interfaces.ts:229](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/interfaces.ts#L229)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](../../agentConfig/interfaces/CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)

#### Inherited from

[`RelevantDataManagerInterface`](RelevantDataManagerInterface.md).[`validateCategoryData`](RelevantDataManagerInterface.md#validatecategorydata)
