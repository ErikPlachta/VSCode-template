[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/communication.types](../README.md) / FormattedResponse

# Interface: FormattedResponse

Defined in: [src/types/communication.types.ts:103](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L103)

Formatted response ready for display to user

## Properties

### format

> **format**: `"markdown"` \| `"plaintext"` \| `"html"`

Defined in: [src/types/communication.types.ts:108](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L108)

Format of the response

***

### isFinal

> **isFinal**: `boolean`

Defined in: [src/types/communication.types.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L114)

Whether this response is final or will be updated

***

### message

> **message**: `string`

Defined in: [src/types/communication.types.ts:105](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L105)

Formatted message text

***

### raw?

> `optional` **raw**: [`AgentResponse`](AgentResponse.md)\<`unknown`\>

Defined in: [src/types/communication.types.ts:117](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L117)

Original response data (for programmatic access)

***

### severity?

> `optional` **severity**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: [src/types/communication.types.ts:111](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/communication.types.ts#L111)

Severity level (for errors)
