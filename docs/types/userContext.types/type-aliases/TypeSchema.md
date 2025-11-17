[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / TypeSchema

# Type Alias: TypeSchema

> **TypeSchema** = \{ `kind`: `"primitive"`; `name`: [`PrimitiveTypeName`](PrimitiveTypeName.md); \} \| \{ `kind`: `"optional"`; `value`: `TypeSchema`; \} \| \{ `element`: `TypeSchema`; `kind`: `"list"`; \} \| \{ `kind`: `"literal"`; `value`: `string` \| `number` \| `boolean` \| `null`; \} \| \{ `kind`: `"enum"`; `values`: (`string` \| `number` \| `boolean`)[]; \} \| \{ `fields`: [`TypedDictField`](../interfaces/TypedDictField.md)[]; `kind`: `"typedDict"`; \}

Defined in: [src/types/userContext.types.ts:279](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L279)

JSON description for a structured type that can be materialized by an MCP server
