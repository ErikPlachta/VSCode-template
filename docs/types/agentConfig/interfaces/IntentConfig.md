[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / IntentConfig

# Interface: IntentConfig

Defined in: [src/types/agentConfig.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L56)

Intent configuration for the Orchestrator routing system.

Associates a named intent with a target agent and optional detection signals.

## Example

```ts
const classifyIntent: IntentConfig = {
  name: "fetch-metadata",
  description: "Retrieve category metadata and schemas",
  targetAgent: "data-agent",
  signals: ["schema", "fields", "metadata"],
};
```

## Properties

### description

> **description**: `string`

Defined in: [src/types/agentConfig.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L60)

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L58)

***

### signals?

> `optional` **signals**: `string`[]

Defined in: [src/types/agentConfig.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L64)

***

### targetAgent

> **targetAgent**: `string`

Defined in: [src/types/agentConfig.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L62)
