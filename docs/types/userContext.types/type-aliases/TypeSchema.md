[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / TypeSchema

# Type Alias: TypeSchema

> **TypeSchema** = \{ `kind`: `"primitive"`; `name`: [`PrimitiveTypeName`](PrimitiveTypeName.md); \} \| \{ `kind`: `"optional"`; `value`: `TypeSchema`; \} \| \{ `element`: `TypeSchema`; `kind`: `"list"`; \} \| \{ `kind`: `"literal"`; `value`: `string` \| `number` \| `boolean` \| `null`; \} \| \{ `kind`: `"enum"`; `values`: (`string` \| `number` \| `boolean`)[]; \} \| \{ `fields`: [`TypedDictField`](../interfaces/TypedDictField.md)[]; `kind`: `"typedDict"`; \}

Defined in: [src/types/userContext.types.ts:279](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L279)

JSON description for a structured type that can be materialized by an MCP server
