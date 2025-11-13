[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/communication.types](../README.md) / AgentResponse

# Interface: AgentResponse\<T\>

Defined in: [src/types/communication.types.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L26)

Structured response from an agent before formatting

## Type Parameters

### T

`T` = `unknown`

## Properties

### data?

> `optional` **data**: `T`

Defined in: [src/types/communication.types.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L34)

Main response data

***

### errors?

> `optional` **errors**: `object`[]

Defined in: [src/types/communication.types.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L64)

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

Defined in: [src/types/communication.types.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L37)

Human-readable message (optional, will be generated if not provided)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: [src/types/communication.types.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L40)

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

Defined in: [src/types/communication.types.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L82)

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

Defined in: [src/types/communication.types.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L31)

Status of the operation

***

### type

> **type**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: [src/types/communication.types.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/communication.types.ts#L28)

Type of response
