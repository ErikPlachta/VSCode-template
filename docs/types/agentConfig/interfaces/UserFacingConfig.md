[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / UserFacingConfig

# Interface: UserFacingConfig

Defined in: [src/types/agentConfig.ts:265](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L265)

User-facing documentation and guidance shown in help/UX.

Prefer adding examples here instead of inline comments in configs.

## Example

```ts
const userFacing: UserFacingConfig = {
  friendlyDescription: "Analyze relationships and summarize insights.",
  useWhen: ["Find connections", "Summarize data"],
  exampleQueries: [
    "Show connections between categories",
    "Summarize recent changes across datasets",
  ],
};
```

## Properties

### exampleQueries?

> `optional` **exampleQueries**: `string`[]

Defined in: [src/types/agentConfig.ts:268](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L268)

***

### friendlyDescription?

> `optional` **friendlyDescription**: `string`

Defined in: [src/types/agentConfig.ts:266](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L266)

***

### helpText?

> `optional` **helpText**: `string`

Defined in: [src/types/agentConfig.ts:269](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L269)

***

### useWhen?

> `optional` **useWhen**: `string`[]

Defined in: [src/types/agentConfig.ts:267](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L267)
