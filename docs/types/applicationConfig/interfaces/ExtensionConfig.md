[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / ExtensionConfig

# Interface: ExtensionConfig

Defined in: [src/types/applicationConfig.ts:379](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L379)

Extension features configuration.

## Example

```ts
const ext: ExtensionConfig = {
  allowThirdParty: false,
  sandboxMode: true,
};
```

## Properties

### allowThirdParty

> **allowThirdParty**: `boolean`

Defined in: [src/types/applicationConfig.ts:381](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L381)

Allow third-party extensions.

***

### sandboxMode

> **sandboxMode**: `boolean`

Defined in: [src/types/applicationConfig.ts:383](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L383)

Run extensions in sandbox mode.
