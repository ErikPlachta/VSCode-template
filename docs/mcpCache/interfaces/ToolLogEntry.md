[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / ToolLogEntry

# Interface: ToolLogEntry

Defined in: [src/extension/mcpCache.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L37)

Structure for log entries persisted inside `.mcp-cache`.

## Properties

### args

> **args**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L43)

Arguments sent to the MCP server.

***

### context

> **context**: `string`[]

Defined in: [src/extension/mcpCache.ts:45](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L45)

High-level conversation context that accompanied the request.

***

### error?

> `optional` **error**: `string`

Defined in: [src/extension/mcpCache.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L49)

Human-readable error message when an invocation fails.

***

### response?

> `optional` **response**: `unknown`

Defined in: [src/extension/mcpCache.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L47)

Raw payload returned by the server, if any.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L39)

ISO timestamp when the invocation took place.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/extension/mcpCache.ts#L41)

Tool identifier that generated the log entry.
