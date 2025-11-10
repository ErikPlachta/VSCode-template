[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / trackAgentExecution

# Function: trackAgentExecution()

> **trackAgentExecution**(`agentName`, `methodName?`): \<`T`\>(`target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/shared/analyticsIntegration.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/analyticsIntegration.ts#L20)

Decorator function for automatic analytics tracking on agent methods.

## Parameters

### agentName

`string`

agentName parameter.

### methodName?

`string`

methodName parameter.

## Returns

- TODO: describe return value.

> \<`T`\>(`target`, `propertyKey`, `descriptor`): `void`

### Type Parameters

#### T

`T` *extends* (...`args`) => `Promise`\<`unknown`\>

### Parameters

#### target

`unknown`

#### propertyKey

`string`

#### descriptor

`PropertyDescriptor`

### Returns

`void`
