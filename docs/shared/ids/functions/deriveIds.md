[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/ids](../README.md) / deriveIds

# Function: deriveIds()

> **deriveIds**(`env`): [`DerivedIds`](../interfaces/DerivedIds.md)

Defined in: [src/shared/ids.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/shared/ids.ts#L44)

Compute IDs given environment variables. If no env provided, uses process.env.

## Parameters

### env

`RawEnv` = `...`

Raw environment object containing optional overrides.

## Returns

[`DerivedIds`](../interfaces/DerivedIds.md)

Fully derived ids.
