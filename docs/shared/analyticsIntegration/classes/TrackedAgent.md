[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / TrackedAgent

# Abstract Class: TrackedAgent

Defined in: [src/shared/analyticsIntegration.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsIntegration.ts#L49)

Base class with built-in analytics tracking for agent implementations.

## Constructors

### Constructor

> **new TrackedAgent**(`agentName`): `TrackedAgent`

Defined in: [src/shared/analyticsIntegration.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsIntegration.ts#L59)

Creates a new tracked agent instance.

#### Parameters

##### agentName

`string`

agentName parameter.

#### Returns

`TrackedAgent`

- TODO: describe return value.

## Methods

### getStats()

> **getStats**(`since?`): `any`

Defined in: [src/shared/analyticsIntegration.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsIntegration.ts#L118)

Gets analytics statistics for this agent.

#### Parameters

##### since?

`Date`

since parameter.

#### Returns

`any`

- TODO: describe return value.
