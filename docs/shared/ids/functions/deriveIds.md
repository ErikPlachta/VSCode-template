[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/ids](../README.md) / deriveIds

# Function: deriveIds()

> **deriveIds**(`env`): [`DerivedIds`](../interfaces/DerivedIds.md)

Defined in: [src/shared/ids.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/ids.ts#L44)

Compute IDs given environment variables. If no env provided, uses process.env.

## Parameters

### env

`RawEnv` = `...`

Raw environment object containing optional overrides.

## Returns

[`DerivedIds`](../interfaces/DerivedIds.md)

Fully derived ids.
