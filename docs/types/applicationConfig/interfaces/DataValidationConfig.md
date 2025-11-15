[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / DataValidationConfig

# Interface: DataValidationConfig

Defined in: [src/types/applicationConfig.ts:233](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L233)

Data validation configuration.

## Example

```ts
const validation: DataValidationConfig = {
  strictMode: true,
  validateOnLoad: true,
  validateRelationships: true,
};
```

## Properties

### strictMode

> **strictMode**: `boolean`

Defined in: [src/types/applicationConfig.ts:235](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L235)

Enable strict validation mode.

***

### validateOnLoad

> **validateOnLoad**: `boolean`

Defined in: [src/types/applicationConfig.ts:237](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L237)

Validate data on load.

***

### validateRelationships

> **validateRelationships**: `boolean`

Defined in: [src/types/applicationConfig.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L239)

Validate relationship integrity.
