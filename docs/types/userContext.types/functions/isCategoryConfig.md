[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / isCategoryConfig

# Function: isCategoryConfig()

> **isCategoryConfig**(`obj`): `obj is CategoryConfig`

Defined in: [src/types/userContext.types.ts:568](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L568)

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
