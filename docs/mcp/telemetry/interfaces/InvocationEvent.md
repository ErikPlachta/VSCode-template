[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [mcp/telemetry](../README.md) / InvocationEvent

# Interface: InvocationEvent

Defined in: [src/mcp/telemetry.ts:9](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L9)

InvocationEvent interface.

## Properties

### agent

> **agent**: `string`

Defined in: [src/mcp/telemetry.ts:10](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L10)

***

### durationMs

> **durationMs**: `number`

Defined in: [src/mcp/telemetry.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L15)

***

### error?

> `optional` **error**: `object`

Defined in: [src/mcp/telemetry.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L17)

#### message

> **message**: `string`

#### name

> **name**: `string`

***

### finishedAt

> **finishedAt**: `number`

Defined in: [src/mcp/telemetry.ts:14](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L14)

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/mcp/telemetry.ts:16](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L16)

***

### operation

> **operation**: `string`

Defined in: [src/mcp/telemetry.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L11)

***

### startedAt

> **startedAt**: `number`

Defined in: [src/mcp/telemetry.ts:13](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L13)

***

### status

> **status**: `"success"` \| `"error"`

Defined in: [src/mcp/telemetry.ts:12](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/mcp/telemetry.ts#L12)
