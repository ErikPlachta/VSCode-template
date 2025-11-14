[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / LoggingFileConfig

# Interface: LoggingFileConfig

Defined in: [src/types/applicationConfig.ts:279](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L279)

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

Defined in: [src/types/applicationConfig.ts:281](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L281)

Enable file logging.

***

### maxFiles

> **maxFiles**: `number`

Defined in: [src/types/applicationConfig.ts:287](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L287)

Maximum number of log files to keep.

***

### maxSize

> **maxSize**: `string`

Defined in: [src/types/applicationConfig.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L285)

Maximum file size before rotation.

***

### path

> **path**: `string`

Defined in: [src/types/applicationConfig.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L283)

Log file path.
