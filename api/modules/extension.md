[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / extension

# Module: extension

## Table of contents

### Functions

- [activate](extension.md#activate)
- [deactivate](extension.md#deactivate)

## Functions

### activate

▸ **activate**(`context`): `Promise`\<`void`\>

Activates the extension, registering MCP slash commands, mentions, and
automation hooks.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `ExtensionContext` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/extension.ts:200](https://github.com/ErikPlachta/VSCode-template/blob/cdb46a59e46fc5b0b0e1bb6229c876631a15aa98/src/extension.ts#L200)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the extension.

#### Returns

`void`

#### Defined in

[src/extension.ts:322](https://github.com/ErikPlachta/VSCode-template/blob/cdb46a59e46fc5b0b0e1bb6229c876631a15aa98/src/extension.ts#L322)
