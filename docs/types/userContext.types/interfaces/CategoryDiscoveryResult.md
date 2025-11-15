[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryDiscoveryResult

# Interface: CategoryDiscoveryResult

Defined in: [src/types/userContext.types.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L104)

Result of a bulk category discovery operation from DataLoaderAgent

## Properties

### categories

> **categories**: `Map`\<`string`, \{ `config`: [`CategoryConfig`](CategoryConfig.md); `records`: [`BaseRecord`](BaseRecord.md)[]; \}\>

Defined in: [src/types/userContext.types.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L106)

Successfully loaded categories

***

### errors

> **errors**: `object`[]

Defined in: [src/types/userContext.types.ts:108](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L108)

Errors encountered during discovery

#### categoryName

> **categoryName**: `string`

#### error

> **error**: `Error`

***

### warnings

> **warnings**: `string`[]

Defined in: [src/types/userContext.types.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L110)

Warnings for skipped or partial categories
