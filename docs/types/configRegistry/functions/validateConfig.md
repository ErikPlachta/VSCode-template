[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:268](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/types/configRegistry.ts#L268)

Validation function for configuration objects

## Parameters

### config

Object to validate for a known configuration id.

#### $configId?

`string`

Configuration ID to validate against the registry.

## Returns

`boolean`

True when a valid $configId exists in the registry; otherwise false.
