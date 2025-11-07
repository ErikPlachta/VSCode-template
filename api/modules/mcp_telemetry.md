[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcp/telemetry

# Module: mcp/telemetry

## Table of contents

### Interfaces

- [InvocationEvent](../interfaces/mcp_telemetry.InvocationEvent.md)
- [InvocationLogger](../interfaces/mcp_telemetry.InvocationLogger.md)
- [InvocationWrapper](../interfaces/mcp_telemetry.InvocationWrapper.md)

### Functions

- [createInvocationLogger](mcp_telemetry.md#createinvocationlogger)

## Functions

### createInvocationLogger

▸ **createInvocationLogger**(`agent`, `logger?`): [`InvocationWrapper`](../interfaces/mcp_telemetry.InvocationWrapper.md)

Create a helper that wraps asynchronous operations and emits telemetry events.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | `string` |
| `logger` | [`InvocationLogger`](../interfaces/mcp_telemetry.InvocationLogger.md) |

#### Returns

[`InvocationWrapper`](../interfaces/mcp_telemetry.InvocationWrapper.md)

#### Defined in

[src/mcp/telemetry.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcp/telemetry.ts#L37)
