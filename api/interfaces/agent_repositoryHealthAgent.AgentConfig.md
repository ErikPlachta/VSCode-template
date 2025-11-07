[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md) / AgentConfig

# Interface: AgentConfig

[agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md).AgentConfig

Configuration contract for the repository health agent.

## Table of contents

### Properties

- [jsonSchemas](agent_repositoryHealthAgent.AgentConfig.md#jsonschemas)
- [markdown](agent_repositoryHealthAgent.AgentConfig.md#markdown)
- [report](agent_repositoryHealthAgent.AgentConfig.md#report)
- [typescript](agent_repositoryHealthAgent.AgentConfig.md#typescript)

## Properties

### jsonSchemas

• `Readonly` **jsonSchemas**: readonly \{ `description`: `string` ; `pattern`: `string` ; `schema`: `string`  }[]

Schema validations that must pass for JSON artifacts.

#### Defined in

[src/agent/repositoryHealthAgent.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L35)

___

### markdown

• `Readonly` **markdown**: `Object`

Markdown validation requirements.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `exclude?` | readonly `string`[] | Ignore globs for Markdown documents. |
| `include` | readonly `string`[] | Include globs for Markdown documents. |
| `requiredFrontMatter` | readonly `string`[] | Required front matter keys that must exist for every Markdown file. |
| `requiredSections` | readonly `string`[] | Content sections that must exist in the document body. |

#### Defined in

[src/agent/repositoryHealthAgent.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L52)

___

### report

• `Readonly` **report**: `Object`

Report configuration describing where generated documentation is written.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `output` | `string` | Output markdown file relative to the repository root. |

#### Defined in

[src/agent/repositoryHealthAgent.ts:73](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L73)

___

### typescript

• `Readonly` **typescript**: `Object`

TypeScript lint configuration.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `include` | readonly `string`[] | Glob patterns describing the TypeScript sources that must pass linting. |

#### Defined in

[src/agent/repositoryHealthAgent.ts:26](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L26)
