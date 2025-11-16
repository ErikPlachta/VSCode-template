[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:325](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/configRegistry.ts#L325)

Validation helper for configuration objects.

## Parameters

### config

Object to validate for a known configuration id.

#### $configId?

`string`

## Returns

`boolean`

True when a valid `$configId` exists in the registry; otherwise false.

## Example

```ts
const ok = validateConfig({ $configId: CONFIG_IDS.ORCHESTRATOR });
```

## Remarks

Simple presence/registry validator maintained for parity; runtime logic lives in shared validation modules. Console side-effects remain for discoverability.
