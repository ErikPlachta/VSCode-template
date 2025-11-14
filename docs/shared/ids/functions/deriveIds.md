[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/ids](../README.md) / deriveIds

# Function: deriveIds()

> **deriveIds**(`env`): [`DerivedIds`](../interfaces/DerivedIds.md)

Defined in: [src/shared/ids.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/ids.ts#L44)

Compute IDs given environment variables. If no env provided, uses process.env.

## Parameters

### env

`RawEnv` = `...`

Raw environment object containing optional overrides.

## Returns

[`DerivedIds`](../interfaces/DerivedIds.md)

Fully derived ids.
