[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / InvocationEvent

# Interface: InvocationEvent

Defined in: [src/mcp/telemetry.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L11)

Invocation event envelope emitted for each wrapped operation.

## Properties

### agent

> **agent**: `string`

Defined in: [src/mcp/telemetry.ts:12](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L12)

***

### durationMs

> **durationMs**: `number`

Defined in: [src/mcp/telemetry.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L17)

***

### error?

> `optional` **error**: `object`

Defined in: [src/mcp/telemetry.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L19)

#### message

> **message**: `string`

#### name

> **name**: `string`

***

### finishedAt

> **finishedAt**: `number`

Defined in: [src/mcp/telemetry.ts:16](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L16)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/mcp/telemetry.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L18)

***

### operation

> **operation**: `string`

Defined in: [src/mcp/telemetry.ts:13](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L13)

***

### startedAt

> **startedAt**: `number`

Defined in: [src/mcp/telemetry.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L15)

***

### status

> **status**: `"success"` \| `"error"`

Defined in: [src/mcp/telemetry.ts:14](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/mcp/telemetry.ts#L14)
