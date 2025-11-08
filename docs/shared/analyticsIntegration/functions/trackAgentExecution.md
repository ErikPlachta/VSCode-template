[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / trackAgentExecution

# Function: trackAgentExecution()

> **trackAgentExecution**(`agentName`, `methodName?`): \<`T`\>(`target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/shared/analyticsIntegration.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b0fb0bd0008831a8eec6aad9fe7afd1f38d5ab11/src/shared/analyticsIntegration.ts#L15)

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

`T` *extends* (...`args`) => `Promise`\<`any`\>

### Parameters

#### target

`any`

#### propertyKey

`string`

#### descriptor

`PropertyDescriptor`

### Returns

`void`
