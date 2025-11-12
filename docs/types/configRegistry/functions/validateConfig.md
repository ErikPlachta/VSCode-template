[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:286](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L286)

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
