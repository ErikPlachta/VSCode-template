[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcp/telemetry](../modules/mcp_telemetry.md) / InvocationEvent

# Interface: InvocationEvent

[mcp/telemetry](../modules/mcp_telemetry.md).InvocationEvent

## Table of contents

### Properties

- [agent](mcp_telemetry.InvocationEvent.md#agent)
- [durationMs](mcp_telemetry.InvocationEvent.md#durationms)
- [error](mcp_telemetry.InvocationEvent.md#error)
- [finishedAt](mcp_telemetry.InvocationEvent.md#finishedat)
- [metadata](mcp_telemetry.InvocationEvent.md#metadata)
- [operation](mcp_telemetry.InvocationEvent.md#operation)
- [startedAt](mcp_telemetry.InvocationEvent.md#startedat)
- [status](mcp_telemetry.InvocationEvent.md#status)

## Properties

### agent

• **agent**: `string`

#### Defined in

[src/mcp/telemetry.ts:2](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L2)

___

### durationMs

• **durationMs**: `number`

#### Defined in

[src/mcp/telemetry.ts:7](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L7)

___

### error

• `Optional` **error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `name` | `string` |

#### Defined in

[src/mcp/telemetry.ts:9](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L9)

___

### finishedAt

• **finishedAt**: `number`

#### Defined in

[src/mcp/telemetry.ts:6](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L6)

___

### metadata

• `Optional` **metadata**: `Record`\<`string`, `unknown`\>

#### Defined in

[src/mcp/telemetry.ts:8](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L8)

___

### operation

• **operation**: `string`

#### Defined in

[src/mcp/telemetry.ts:3](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L3)

___

### startedAt

• **startedAt**: `number`

#### Defined in

[src/mcp/telemetry.ts:5](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L5)

___

### status

• **status**: ``"success"`` \| ``"error"``

#### Defined in

[src/mcp/telemetry.ts:4](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/telemetry.ts#L4)
