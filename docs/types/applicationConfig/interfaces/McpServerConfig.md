[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / McpServerConfig

# Interface: McpServerConfig

Defined in: [src/types/applicationConfig.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L24)

MCP server configuration settings.

## Properties

### defaultPort

> **defaultPort**: `number`

Defined in: [src/types/applicationConfig.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L28)

Default port for HTTP server.

***

### embedded

> **embedded**: `object`

Defined in: [src/types/applicationConfig.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L34)

Embedded server settings.

#### autoStart

> **autoStart**: `boolean`

Automatically start embedded server.

#### enabled

> **enabled**: `boolean`

Enable embedded server mode.

***

### protocol

> **protocol**: `"http"` \| `"stdio"` \| `"websocket"`

Defined in: [src/types/applicationConfig.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L26)

Protocol for MCP communication.

***

### retries

> **retries**: `number`

Defined in: [src/types/applicationConfig.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L32)

Number of retry attempts for failed requests.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/types/applicationConfig.ts#L30)

Request timeout in milliseconds.
