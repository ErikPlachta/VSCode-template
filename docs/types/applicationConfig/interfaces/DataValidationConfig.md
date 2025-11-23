[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / DataValidationConfig

# Interface: DataValidationConfig

Defined in: [src/types/applicationConfig.ts:233](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L233)

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

Defined in: [src/types/applicationConfig.ts:235](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L235)

Enable strict validation mode.

***

### validateOnLoad

> **validateOnLoad**: `boolean`

Defined in: [src/types/applicationConfig.ts:237](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L237)

Validate data on load.

***

### validateRelationships

> **validateRelationships**: `boolean`

Defined in: [src/types/applicationConfig.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L239)

Validate relationship integrity.
