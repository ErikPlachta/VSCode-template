[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / IntentConfig

# Interface: IntentConfig

Defined in: [src/types/agentConfig.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L82)

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

Defined in: [src/types/agentConfig.ts:86](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L86)

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:84](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L84)

***

### signals?

> `optional` **signals**: `string`[]

Defined in: [src/types/agentConfig.ts:90](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L90)

***

### targetAgent

> **targetAgent**: `string`

Defined in: [src/types/agentConfig.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L88)
