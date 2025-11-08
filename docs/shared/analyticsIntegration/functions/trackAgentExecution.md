[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / trackAgentExecution

# Function: trackAgentExecution()

> **trackAgentExecution**(`agentName`, `methodName?`): \<`T`\>(`target`, `propertyKey`, `descriptor`) => `void`

Defined in: [src/shared/analyticsIntegration.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsIntegration.ts#L15)

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
