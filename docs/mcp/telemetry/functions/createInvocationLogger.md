[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / createInvocationLogger

# Function: createInvocationLogger()

> **createInvocationLogger**(`agent`, `logger`): [`InvocationWrapper`](../interfaces/InvocationWrapper.md)

Defined in: [src/mcp/telemetry.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/mcp/telemetry.ts#L63)

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
