[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/env](../README.md) / getExtensionName

# Function: getExtensionName()

> **getExtensionName**(): `string`

Defined in: [src/shared/env.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/env.ts#L26)

Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
Falls back to a safe default when not set.

## Returns

`string`

Canonical extension name used for cache folder naming.
