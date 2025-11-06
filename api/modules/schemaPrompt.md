[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / schemaPrompt

# Module: schemaPrompt

## Table of contents

### Functions

- [promptForArgs](schemaPrompt.md#promptforargs)

## Functions

### promptForArgs

▸ **promptForArgs**(`tool`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Prompts the user for all required tool arguments.

The prompt adapts to schema metadata by offering quick picks for enumerations
and booleans, plus validation for numbers and required fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`MCPTool`](../interfaces/mcpSync.MCPTool.md) | Tool definition with input schema. |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

User-provided arguments keyed by schema property name.

#### Defined in

[src/schemaPrompt.ts:60](https://github.com/ErikPlachta/VSCode-template/blob/cdb46a59e46fc5b0b0e1bb6229c876631a15aa98/src/schemaPrompt.ts#L60)
