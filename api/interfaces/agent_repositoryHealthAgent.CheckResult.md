[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md) / CheckResult

# Interface: CheckResult

[agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md).CheckResult

Result of a single compliance check.

## Table of contents

### Properties

- [messages](agent_repositoryHealthAgent.CheckResult.md#messages)
- [name](agent_repositoryHealthAgent.CheckResult.md#name)
- [passed](agent_repositoryHealthAgent.CheckResult.md#passed)

## Properties

### messages

• `Readonly` **messages**: readonly `string`[]

Detailed findings for the check.

#### Defined in

[src/agent/repositoryHealthAgent.ts:96](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L96)

___

### name

• `Readonly` **name**: `string`

Name describing the check.

#### Defined in

[src/agent/repositoryHealthAgent.ts:88](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L88)

___

### passed

• `Readonly` **passed**: `boolean`

Whether the check succeeded.

#### Defined in

[src/agent/repositoryHealthAgent.ts:92](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agent/repositoryHealthAgent.ts#L92)
