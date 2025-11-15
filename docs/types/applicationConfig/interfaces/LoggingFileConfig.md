[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / LoggingFileConfig

# Interface: LoggingFileConfig

Defined in: [src/types/applicationConfig.ts:279](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L279)

Logging file configuration.

## Example

```ts
const file: LoggingFileConfig = {
  enabled: true,
  path: "logs/app.log",
  maxSize: "10mb",
  maxFiles: 5,
};
```

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:281](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L281)

Enable file logging.

***

### maxFiles

> **maxFiles**: `number`

Defined in: [src/types/applicationConfig.ts:287](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L287)

Maximum number of log files to keep.

***

### maxSize

> **maxSize**: `string`

Defined in: [src/types/applicationConfig.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L285)

Maximum file size before rotation.

***

### path

> **path**: `string`

Defined in: [src/types/applicationConfig.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L283)

Log file path.
