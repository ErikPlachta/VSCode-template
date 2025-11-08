[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/env](../README.md) / getExtensionName

# Function: getExtensionName()

> **getExtensionName**(): `string`

Defined in: src/shared/env.ts:26

Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
Falls back to a safe default when not set.

## Returns

`string`

Canonical extension name used for cache folder naming.
