[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryDiscoveryResult

# Interface: CategoryDiscoveryResult

Defined in: [src/types/userContext.types.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L106)

Result of a bulk category discovery operation from DataLoaderAgent

## Properties

### categories

> **categories**: `Map`\<`string`, \{ `config`: [`CategoryConfig`](CategoryConfig.md); `records`: [`BaseRecord`](BaseRecord.md)[]; \}\>

Defined in: [src/types/userContext.types.ts:108](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L108)

Successfully loaded categories

***

### errors

> **errors**: `object`[]

Defined in: [src/types/userContext.types.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L110)

Errors encountered during discovery

#### categoryName

> **categoryName**: `string`

#### error

> **error**: `Error`

***

### warnings

> **warnings**: `string`[]

Defined in: [src/types/userContext.types.ts:112](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L112)

Warnings for skipped or partial categories
