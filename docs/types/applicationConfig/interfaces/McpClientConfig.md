[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / McpClientConfig

# Interface: McpClientConfig

Defined in: [src/types/applicationConfig.ts:87](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L87)

MCP client configuration settings.

## Example

```ts
const client: McpClientConfig = {
  maxConcurrentRequests: 8,
  requestTimeout: 8000,
  retryDelay: 250,
};
```

## Properties

### maxConcurrentRequests

> **maxConcurrentRequests**: `number`

Defined in: [src/types/applicationConfig.ts:89](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L89)

Maximum number of concurrent requests.

***

### requestTimeout

> **requestTimeout**: `number`

Defined in: [src/types/applicationConfig.ts:91](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L91)

Request timeout in milliseconds.

***

### retryDelay

> **retryDelay**: `number`

Defined in: [src/types/applicationConfig.ts:93](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L93)

Delay between retry attempts in milliseconds.
