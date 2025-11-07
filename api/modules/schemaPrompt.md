[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / schemaPrompt

# Module: schemaPrompt

## Table of contents

### Functions

- [promptForArgs](schemaPrompt.md#promptforargs)

## Functions

### promptForArgs

▸ **promptForArgs**(`tool`): `Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

Prompts the user for all required tool arguments.

The prompt adapts to schema metadata by offering quick picks for enumerations
and booleans, plus validation for numbers and required fields.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tool` | [`MCPTool`](../interfaces/mcpSync.MCPTool.md) | Tool definition with input schema. |

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

User-provided arguments keyed by schema property name.

#### Defined in

[src/schemaPrompt.ts:60](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/schemaPrompt.ts#L60)
