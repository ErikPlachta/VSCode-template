[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/env](../README.md) / getExtensionName

# Function: getExtensionName()

> **getExtensionName**(): `string`

Defined in: [src/shared/env.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/env.ts#L26)

Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
Falls back to a safe default when not set.

## Returns

`string`

Canonical extension name used for cache folder naming.
