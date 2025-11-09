[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:268](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/types/configRegistry.ts#L268)

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
