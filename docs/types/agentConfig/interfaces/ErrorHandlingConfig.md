[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ErrorHandlingConfig

# Interface: ErrorHandlingConfig

Defined in: [src/types/agentConfig.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L156)

Error handling preferences for an agent.

Example removed for brevity; configure in agent.config.ts with preferred retry strategy.

## Properties

### fallbackAgent?

> `optional` **fallbackAgent**: `string`

Defined in: [src/types/agentConfig.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L159)

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:158](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L158)

***

### retryStrategy

> **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

Defined in: [src/types/agentConfig.ts:157](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L157)
