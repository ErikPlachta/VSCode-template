[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / extension

# Module: extension

**`Fileoverview`**

Entry point for MyBusiness MCP VS Code extension.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `ExtensionContext` | VS Code extension context for managing subscriptions. |

#### Returns

`Promise`\<`void`\>

Resolves once activation completes.

**`Example`**

```ts
export async function activate(ctx: vscode.ExtensionContext) {
  await activate(ctx);
}
```

#### Defined in

[src/extension.ts:294](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/extension.ts#L294)

___

### deactivate

▸ **deactivate**(): `void`

Deactivates the extension.

#### Returns

`void`

#### Defined in

[src/extension.ts:503](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/extension.ts#L503)
