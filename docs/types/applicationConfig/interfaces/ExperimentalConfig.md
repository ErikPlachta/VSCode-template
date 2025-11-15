[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / ExperimentalConfig

# Interface: ExperimentalConfig

Defined in: [src/types/applicationConfig.ts:359](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L359)

Experimental features configuration.

## Example

```ts
const experimental: ExperimentalConfig = {
  enableAdvancedCaching: false,
  enableParallelProcessing: true,
  enableStreamingResponses: false,
};
```

## Properties

### enableAdvancedCaching

> **enableAdvancedCaching**: `boolean`

Defined in: [src/types/applicationConfig.ts:361](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L361)

Enable advanced caching features.

***

### enableParallelProcessing

> **enableParallelProcessing**: `boolean`

Defined in: [src/types/applicationConfig.ts:363](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L363)

Enable parallel processing.

***

### enableStreamingResponses

> **enableStreamingResponses**: `boolean`

Defined in: [src/types/applicationConfig.ts:365](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L365)

Enable streaming responses.
