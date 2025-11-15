[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/types/userContext.types.ts:609](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L609)

Validation error detail.

## Properties

### actual?

> `optional` **actual**: `string`

Defined in: [src/types/userContext.types.ts:617](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L617)

Actual value received (for debugging)

***

### expected?

> `optional` **expected**: `string`

Defined in: [src/types/userContext.types.ts:615](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L615)

Expected value or type

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:613](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L613)

Description of what went wrong

***

### path

> **path**: `string`

Defined in: [src/types/userContext.types.ts:611](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L611)

Path to the field with the error (e.g., "config.primaryKeys")
