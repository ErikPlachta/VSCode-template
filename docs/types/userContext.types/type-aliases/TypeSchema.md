[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / TypeSchema

# Type Alias: TypeSchema

> **TypeSchema** = \{ `kind`: `"primitive"`; `name`: [`PrimitiveTypeName`](PrimitiveTypeName.md); \} \| \{ `kind`: `"optional"`; `value`: `TypeSchema`; \} \| \{ `element`: `TypeSchema`; `kind`: `"list"`; \} \| \{ `kind`: `"literal"`; `value`: `string` \| `number` \| `boolean` \| `null`; \} \| \{ `kind`: `"enum"`; `values`: (`string` \| `number` \| `boolean`)[]; \} \| \{ `fields`: [`TypedDictField`](../interfaces/TypedDictField.md)[]; `kind`: `"typedDict"`; \}

Defined in: [src/types/userContext.types.ts:254](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L254)

JSON description for a structured type that can be materialized by an MCP server
