[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpSync](../modules/mcpSync.md) / MCPProperty

# Interface: MCPProperty

[mcpSync](../modules/mcpSync.md).MCPProperty

JSON schema fragment describing a tool argument.

## Table of contents

### Properties

- [default](mcpSync.MCPProperty.md#default)
- [description](mcpSync.MCPProperty.md#description)
- [enum](mcpSync.MCPProperty.md#enum)
- [items](mcpSync.MCPProperty.md#items)
- [name](mcpSync.MCPProperty.md#name)
- [required](mcpSync.MCPProperty.md#required)
- [type](mcpSync.MCPProperty.md#type)

## Properties

### default

• `Optional` **default**: `unknown`

Suggested default value supplied by the backend.

#### Defined in

[src/mcpSync.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L23)

___

### description

• `Optional` **description**: `string`

Human readable description for prompts and docs.

#### Defined in

[src/mcpSync.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L19)

___

### enum

• `Optional` **enum**: `string`[]

Static enumeration, if provided by the schema.

#### Defined in

[src/mcpSync.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L21)

___

### items

• `Optional` **items**: [`MCPProperty`](mcpSync.MCPProperty.md)

Nested item type for array arguments.

#### Defined in

[src/mcpSync.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L25)

___

### name

• **name**: `string`

Argument identifier used when invoking the tool.

#### Defined in

[src/mcpSync.ts:15](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L15)

___

### required

• `Optional` **required**: `boolean`

Whether the parameter is required.

#### Defined in

[src/mcpSync.ts:27](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L27)

___

### type

• `Optional` **type**: `string` \| `string`[]

Primitive type such as `string`, `number`, `boolean`, or `array`.

#### Defined in

[src/mcpSync.ts:17](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/mcpSync.ts#L17)
