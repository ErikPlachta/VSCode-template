[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / createInvocationLogger

# Function: createInvocationLogger()

> **createInvocationLogger**(`agent`, `logger`): [`InvocationWrapper`](../interfaces/InvocationWrapper.md)

Defined in: [src/mcp/telemetry.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L63)

Create a helper that wraps asynchronous operations and emits telemetry events.

## Parameters

### agent

`string`

Identifier of the calling agent/tool.

### logger

[`InvocationLogger`](../interfaces/InvocationLogger.md) = `...`

Destination for emitted events (defaults to console logger).

## Returns

[`InvocationWrapper`](../interfaces/InvocationWrapper.md)

Function that wraps async operations and records timing + status.

## Throws

Propagates any error thrown by the wrapped function after logging it.

## See

InvocationLogger
