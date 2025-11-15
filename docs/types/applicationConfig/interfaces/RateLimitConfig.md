[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / RateLimitConfig

# Interface: RateLimitConfig

Defined in: [src/types/applicationConfig.ts:302](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L302)

Rate limiting configuration.

## Example

```ts
const rl: RateLimitConfig = {
  enabled: true,
  windowMs: 60000,
  maxRequests: 100,
};
```

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:304](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L304)

Enable rate limiting.

***

### maxRequests

> **maxRequests**: `number`

Defined in: [src/types/applicationConfig.ts:308](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L308)

Maximum requests per window.

***

### windowMs

> **windowMs**: `number`

Defined in: [src/types/applicationConfig.ts:306](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L306)

Time window in milliseconds.
