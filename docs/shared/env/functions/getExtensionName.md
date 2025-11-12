[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/env](../README.md) / getExtensionName

# Function: getExtensionName()

> **getExtensionName**(): `string`

Defined in: [src/shared/env.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/env.ts#L11)

Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
Falls back to a safe default when not set.

## Returns

`string`

Canonical extension name used for cache folder naming.
