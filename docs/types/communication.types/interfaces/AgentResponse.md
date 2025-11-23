[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/communication.types](../README.md) / AgentResponse

# Interface: AgentResponse\<T\>

Defined in: [src/types/communication.types.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L43)

Structured response from an agent before formatting.

## Remarks

This type is returned by agents and then transformed by the
CommunicationAgent into a user-facing [FormattedResponse](FormattedResponse.md).

## Example

```ts
const response: AgentResponse<{ items: string[] }> = {
  type: "success",
  status: "success",
  data: { items: ["A", "B"] },
  metadata: { agentId: "data-agent", operation: "list" }
};
```

## Type Parameters

### T

`T` = `unknown`

## Properties

### data?

> `optional` **data**: `T`

Defined in: [src/types/communication.types.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L51)

Main response data

***

### errors?

> `optional` **errors**: `object`[]

Defined in: [src/types/communication.types.ts:81](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L81)

Errors that occurred (for error responses)

#### code?

> `optional` **code**: `string`

Error code for programmatic handling

#### message

> **message**: `string`

Human-readable error message

#### path?

> `optional` **path**: `string`

Field or path where error occurred

#### severity?

> `optional` **severity**: [`SeverityLevel`](../type-aliases/SeverityLevel.md)

Severity of the error

#### suggestions?

> `optional` **suggestions**: `string`[]

Suggested recovery actions

***

### message?

> `optional` **message**: `string`

Defined in: [src/types/communication.types.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L54)

Human-readable message (optional, will be generated if not provided)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/types/communication.types.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L57)

Additional metadata about the response

#### Index Signature

\[`key`: `string`\]: `unknown`

Additional context-specific fields

#### agentId?

> `optional` **agentId**: `string`

Agent that generated this response

#### count?

> `optional` **count**: `number`

Count of items (for data retrieval)

#### duration?

> `optional` **duration**: `number`

Duration of the operation in milliseconds

#### entityType?

> `optional` **entityType**: `string`

Entity type being operated on

#### operation?

> `optional` **operation**: `string`

Operation that was performed

#### timestamp?

> `optional` **timestamp**: `number`

Timestamp of the response

***

### progress?

> `optional` **progress**: `object`

Defined in: [src/types/communication.types.ts:99](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L99)

Progress information (for in-progress responses)

#### currentStep?

> `optional` **currentStep**: `string`

Current step in the process

#### elapsedTime?

> `optional` **elapsedTime**: `number`

Elapsed time in milliseconds

#### estimatedTimeRemaining?

> `optional` **estimatedTimeRemaining**: `number`

Estimated time remaining in milliseconds

#### percentage?

> `optional` **percentage**: `number`

Current progress (0-100)

#### totalSteps?

> `optional` **totalSteps**: `number`

Total number of steps

***

### status

> **status**: `"error"` \| `"success"` \| `"in-progress"` \| `"partial"`

Defined in: [src/types/communication.types.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L48)

Status of the operation

***

### type

> **type**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: [src/types/communication.types.ts:45](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/communication.types.ts#L45)

Type of response
