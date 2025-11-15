[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDefinition

# Interface: RelationshipDefinition

Defined in: [src/types/userContext.types.ts:208](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L208)

Relationship definition between categories

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:223](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L223)

Description of the relationship

***

### fields

> **fields**: `object`

Defined in: [src/types/userContext.types.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L216)

Fields used to join/link records

#### source

> **source**: `string`

Field in source category

#### target

> **target**: `string`

Field in target category

***

### from

> **from**: `string`

Defined in: [src/types/userContext.types.ts:210](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L210)

Source category ID

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/types/userContext.types.ts:225](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L225)

Whether the relationship is required

***

### to

> **to**: `string`

Defined in: [src/types/userContext.types.ts:212](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L212)

Target category ID

***

### type

> **type**: `string`

Defined in: [src/types/userContext.types.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L214)

Type of relationship
