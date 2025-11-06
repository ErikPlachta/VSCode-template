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

[src/extension.ts:200](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/extension.ts#L200)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the extension.

#### Returns

`void`

#### Defined in

[src/extension.ts:322](https://github.com/ErikPlachta/VSCode-template/blob/5380b1fac572540a316e76ef0d5cd06590a74558/src/extension.ts#L322)
