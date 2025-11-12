[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDefinition

# Interface: RelationshipDefinition

Defined in: [src/types/userContext.types.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L200)

Relationship definition between categories

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:215](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L215)

Description of the relationship

***

### fields

> **fields**: `object`

Defined in: [src/types/userContext.types.ts:208](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L208)

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

Defined in: [src/types/userContext.types.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L202)

Source category ID

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/types/userContext.types.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L217)

Whether the relationship is required

***

### to

> **to**: `string`

Defined in: [src/types/userContext.types.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L204)

Target category ID

***

### type

> **type**: `string`

Defined in: [src/types/userContext.types.ts:206](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L206)

Type of relationship
