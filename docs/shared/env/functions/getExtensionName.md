[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/env](../README.md) / getExtensionName

# Function: getExtensionName()

> **getExtensionName**(): `string`

Defined in: [src/shared/env.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/env.ts#L11)

Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
Falls back to a safe default when not set.

## Returns

`string`

Canonical extension name used for cache folder naming.
