[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / schemaPrompt

# Module: schemaPrompt

**`Fileoverview`**

Generates VS Code input prompts for MCP tool schemas.

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

User-provided arguments keyed by schema property name, or `undefined` when the prompt is cancelled.

**`Example`**

```ts
const args = await promptForArgs(tool);
if (args) {
  console.log(args);
}
```

#### Defined in

[src/schemaPrompt.ts:77](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/schemaPrompt.ts#L77)
