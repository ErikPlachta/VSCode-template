[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / mcp/telemetry

# mcp/telemetry

telemetry implementation for mcp module.
Captures timing, success/error status, and lightweight metadata for
agent and tool invocations to aid debugging and performance analysis.

These utilities are lightweight and safe to use in production flows.
Use the [createInvocationLogger](functions/createInvocationLogger.md) helper to wrap async operations and
automatically emit [telemetry events](interfaces/InvocationEvent.md).

## Interfaces

- [InvocationEvent](interfaces/InvocationEvent.md)
- [InvocationLogger](interfaces/InvocationLogger.md)
- [InvocationWrapper](interfaces/InvocationWrapper.md)

## Functions

- [createInvocationLogger](functions/createInvocationLogger.md)
