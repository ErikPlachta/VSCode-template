[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / EnvironmentConfig

# Interface: EnvironmentConfig

Defined in: [src/types/applicationConfig.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L28)

Environment configuration controlling debug behavior and defaults.

## Remarks

Use different instances for `development`, `staging`, and `production` in
the `ApplicationConfig.application.environments` block.

## Example

```ts
const devEnv: EnvironmentConfig = {
  debug: true,
  logLevel: "verbose",
  hotReload: true,
  mockData: true,
};
```

## Properties

### debug

> **debug**: `boolean`

Defined in: [src/types/applicationConfig.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L30)

Enable debug mode for detailed logging and error reporting.

***

### hotReload

> **hotReload**: `boolean`

Defined in: [src/types/applicationConfig.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L34)

Enable hot reload for development.

***

### logLevel

> **logLevel**: `"info"` \| `"error"` \| `"verbose"` \| `"warn"`

Defined in: [src/types/applicationConfig.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L32)

Logging level for the environment.

***

### mockData

> **mockData**: `boolean`

Defined in: [src/types/applicationConfig.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L36)

Use mock data instead of real data sources.
