[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / RateLimitConfig

# Interface: RateLimitConfig

Defined in: [src/types/applicationConfig.ts:192](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L192)

Rate limiting configuration.

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L194)

Enable rate limiting.

***

### maxRequests

> **maxRequests**: `number`

Defined in: [src/types/applicationConfig.ts:198](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L198)

Maximum requests per window.

***

### windowMs

> **windowMs**: `number`

Defined in: [src/types/applicationConfig.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/applicationConfig.ts#L196)

Time window in milliseconds.
