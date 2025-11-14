[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / McpServerConfig

# Interface: McpServerConfig

Defined in: [src/types/applicationConfig.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L57)

MCP server configuration settings.

## Remarks

When `embedded.enabled=true`, the extension may launch the stdio server
internally. For HTTP, set `defaultPort` and ensure firewall rules allow it.

## Example

```ts
const server: McpServerConfig = {
  protocol: "stdio",
  defaultPort: 3000,
  timeout: 10000,
  retries: 2,
  embedded: { enabled: true, autoStart: true },
};
```

## Properties

### defaultPort

> **defaultPort**: `number`

Defined in: [src/types/applicationConfig.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L61)

Default port for HTTP server.

***

### embedded

> **embedded**: `object`

Defined in: [src/types/applicationConfig.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L67)

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

Defined in: [src/types/applicationConfig.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L59)

Protocol for MCP communication.

***

### retries

> **retries**: `number`

Defined in: [src/types/applicationConfig.ts:65](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L65)

Number of retry attempts for failed requests.

***

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/applicationConfig.ts#L63)

Request timeout in milliseconds.
