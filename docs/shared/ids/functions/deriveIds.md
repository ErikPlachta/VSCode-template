[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/ids](../README.md) / deriveIds

# Function: deriveIds()

> **deriveIds**(`env`): [`DerivedIds`](../interfaces/DerivedIds.md)

Defined in: [src/shared/ids.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/ids.ts#L44)

Compute IDs given environment variables. If no env provided, uses process.env.

## Parameters

### env

`RawEnv` = `...`

Raw environment object containing optional overrides.

## Returns

[`DerivedIds`](../interfaces/DerivedIds.md)

Fully derived ids.
