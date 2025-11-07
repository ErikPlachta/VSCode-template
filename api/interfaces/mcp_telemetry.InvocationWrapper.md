[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcp/telemetry](../modules/mcp_telemetry.md) / InvocationWrapper

# Interface: InvocationWrapper

[mcp/telemetry](../modules/mcp_telemetry.md).InvocationWrapper

## Callable

### InvocationWrapper

▸ **InvocationWrapper**\<`T`\>(`operation`, `fn`, `metadata?`): `Promise`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation` | `string` |
| `fn` | () => `Promise`\<`T`\> |
| `metadata?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/mcp/telemetry.ts:31](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L31)
