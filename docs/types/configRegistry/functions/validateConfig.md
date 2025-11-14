[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / validateConfig

# Function: validateConfig()

> **validateConfig**(`config`): `boolean`

Defined in: [src/types/configRegistry.ts:325](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L325)

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

Phase 1 Inventory: simple presence/registry validator slated for migration to shared validation utilities (Phase 3). Maintain current console side-effects for parity.
