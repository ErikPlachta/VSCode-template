[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / ToolLogEntry

# Interface: ToolLogEntry

Defined in: [src/extension/mcpCache.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L34)

Structure for log entries persisted inside `.mcp-cache`.

## Properties

### args

> **args**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L40)

Arguments sent to the MCP server.

***

### context

> **context**: `string`[]

Defined in: [src/extension/mcpCache.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L42)

High-level conversation context that accompanied the request.

***

### error?

> `optional` **error**: `string`

Defined in: [src/extension/mcpCache.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L46)

Human-readable error message when an invocation fails.

***

### response?

> `optional` **response**: `unknown`

Defined in: [src/extension/mcpCache.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L44)

Raw payload returned by the server, if any.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L36)

ISO timestamp when the invocation took place.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/extension/mcpCache.ts#L38)

Tool identifier that generated the log entry.
