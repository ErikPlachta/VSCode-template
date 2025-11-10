[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / InvocationWrapper

# Interface: InvocationWrapper()

Defined in: [src/mcp/telemetry.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/mcp/telemetry.ts#L46)

Function signature returned by [createInvocationLogger](../functions/createInvocationLogger.md).

> **InvocationWrapper**\<`T`\>(`operation`, `fn`, `metadata?`): `Promise`\<`T`\>

Defined in: [src/mcp/telemetry.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/mcp/telemetry.ts#L47)

Function signature returned by [createInvocationLogger](../functions/createInvocationLogger.md).

## Type Parameters

### T

`T`

## Parameters

### operation

`string`

### fn

() => `Promise`\<`T`\>

### metadata?

`Record`\<`string`, `unknown`\>

## Returns

`Promise`\<`T`\>
