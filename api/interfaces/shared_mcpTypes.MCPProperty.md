[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [shared/mcpTypes](../modules/shared_mcpTypes.md) / MCPProperty

# Interface: MCPProperty

[shared/mcpTypes](../modules/shared_mcpTypes.md).MCPProperty

JSON schema fragment describing a tool argument.

## Table of contents

### Properties

- [default](shared_mcpTypes.MCPProperty.md#default)
- [description](shared_mcpTypes.MCPProperty.md#description)
- [enum](shared_mcpTypes.MCPProperty.md#enum)
- [items](shared_mcpTypes.MCPProperty.md#items)
- [name](shared_mcpTypes.MCPProperty.md#name)
- [required](shared_mcpTypes.MCPProperty.md#required)
- [type](shared_mcpTypes.MCPProperty.md#type)

## Properties

### default

• `Optional` **default**: `unknown`

Suggested default value supplied by the backend.

#### Defined in

[src/shared/mcpTypes.ts:17](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L17)

___

### description

• `Optional` **description**: `string`

Human readable description for prompts and docs.

#### Defined in

[src/shared/mcpTypes.ts:13](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L13)

___

### enum

• `Optional` **enum**: `string`[]

Static enumeration, if provided by the schema.

#### Defined in

[src/shared/mcpTypes.ts:15](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L15)

___

### items

• `Optional` **items**: [`MCPProperty`](shared_mcpTypes.MCPProperty.md)

Nested item type for array arguments.

#### Defined in

[src/shared/mcpTypes.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L19)

___

### name

• **name**: `string`

Argument identifier used when invoking the tool.

#### Defined in

[src/shared/mcpTypes.ts:9](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L9)

___

### required

• `Optional` **required**: `boolean`

Whether the parameter is required.

#### Defined in

[src/shared/mcpTypes.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L21)

___

### type

• `Optional` **type**: `string` \| `string`[]

Primitive type such as `string`, `number`, `boolean`, or `array`.

#### Defined in

[src/shared/mcpTypes.ts:11](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L11)
