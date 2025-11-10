[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L283)

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
