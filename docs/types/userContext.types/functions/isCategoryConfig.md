[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / isCategoryConfig

# Function: isCategoryConfig()

> **isCategoryConfig**(`obj`): `obj is CategoryConfig`

Defined in: [src/types/userContext.types.ts:566](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L566)

Type guard to check if a value is a valid [CategoryConfig](../interfaces/CategoryConfig.md).

## Parameters

### obj

`unknown`

The value to validate.

## Returns

`obj is CategoryConfig`

True if the value is a valid CategoryConfig.

## Example

```ts
if (isCategoryConfig(maybe)) {
  console.log(maybe.id);
}
```
