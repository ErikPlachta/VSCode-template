[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/communication.types](../README.md) / FormattedResponse

# Interface: FormattedResponse

Defined in: [src/types/communication.types.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L133)

Formatted response ready for display to the user.

## Remarks

Produced by the CommunicationAgent. Carries both the rendered message and
optional raw payload for programmatic handling.

## Example

```ts
const view: FormattedResponse = {
  message: "### Results\n- A\n- B",
  format: "markdown",
  isFinal: true
};
```

## Properties

### format

> **format**: `"markdown"` \| `"plaintext"` \| `"html"`

Defined in: [src/types/communication.types.ts:138](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L138)

Format of the response

***

### isFinal

> **isFinal**: `boolean`

Defined in: [src/types/communication.types.ts:144](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L144)

Whether this response is final or will be updated

***

### message

> **message**: `string`

Defined in: [src/types/communication.types.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L135)

Formatted message text

***

### raw?

> `optional` **raw**: [`AgentResponse`](AgentResponse.md)\<`unknown`\>

Defined in: [src/types/communication.types.ts:147](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L147)

Original response data (for programmatic access)

***

### severity?

> `optional` **severity**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Defined in: [src/types/communication.types.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/communication.types.ts#L141)

Severity level (for errors)
