---
title: Prompt For Args
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../README.md)

---

[mybusiness-mcp-extension](../../modules.md) / [schemaPrompt](../README.md) / promptForArgs

# Function: promptForArgs()

> **promptForArgs**(`tool`): `Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

Defined in: [src/extension/schemaPrompt.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/schemaPrompt.ts#L79)

Prompts the user for all required tool arguments.

The prompt adapts to schema metadata by offering quick picks for enumerations
and booleans, plus validation for numbers and required fields.

## Parameters

### tool

[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)

Tool definition with input schema.

## Returns

`Promise`\<`Record`\<`string`, `unknown`\> \| `undefined`\>

- User-provided arguments keyed by schema property name, or `undefined` when the prompt is cancelled.

## Example

```ts
const args = await promptForArgs(tool);
if (args) {
  console.log(args);
}
```

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
