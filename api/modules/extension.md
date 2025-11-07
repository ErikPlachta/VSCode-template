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

[src/extension.ts:200](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/extension.ts#L200)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the extension.

#### Returns

`void`

#### Defined in

[src/extension.ts:323](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/extension.ts#L323)
