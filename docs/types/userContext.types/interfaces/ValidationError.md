[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/types/userContext.types.ts:588](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L588)

Validation error detail

## Properties

### actual?

> `optional` **actual**: `string`

Defined in: [src/types/userContext.types.ts:596](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L596)

Actual value received (for debugging)

***

### expected?

> `optional` **expected**: `string`

Defined in: [src/types/userContext.types.ts:594](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L594)

Expected value or type

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:592](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L592)

Description of what went wrong

***

### path

> **path**: `string`

Defined in: [src/types/userContext.types.ts:590](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L590)

Path to the field with the error (e.g., "config.primaryKeys")
