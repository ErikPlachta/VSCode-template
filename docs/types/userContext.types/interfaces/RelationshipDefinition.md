[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDefinition

# Interface: RelationshipDefinition

Defined in: [src/types/userContext.types.ts:183](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L183)

Relationship definition between categories

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:198](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L198)

Description of the relationship

***

### fields

> **fields**: `object`

Defined in: [src/types/userContext.types.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L191)

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

Defined in: [src/types/userContext.types.ts:185](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L185)

Source category ID

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/types/userContext.types.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L200)

Whether the relationship is required

***

### to

> **to**: `string`

Defined in: [src/types/userContext.types.ts:187](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L187)

Target category ID

***

### type

> **type**: `string`

Defined in: [src/types/userContext.types.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L189)

Type of relationship
