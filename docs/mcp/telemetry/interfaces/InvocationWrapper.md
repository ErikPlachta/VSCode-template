[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / InvocationWrapper

# Interface: InvocationWrapper()

Defined in: [src/mcp/telemetry.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/mcp/telemetry.ts#L54)

InvocationWrapper interface.

> **InvocationWrapper**\<`T`\>(`operation`, `fn`, `metadata?`): `Promise`\<`T`\>

Defined in: [src/mcp/telemetry.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/mcp/telemetry.ts#L55)

InvocationWrapper interface.

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
