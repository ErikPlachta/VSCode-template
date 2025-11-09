[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigMetadata

# Interface: ConfigMetadata

Defined in: [src/types/configRegistry.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L49)

Configuration metadata for each schema ID

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/configRegistry.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L67)

Agent type this configuration is for

***

### breakingChanges?

> `optional` **breakingChanges**: `string`[]

Defined in: [src/types/configRegistry.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L73)

List of breaking changes from previous versions

***

### createdDate

> **createdDate**: `string`

Defined in: [src/types/configRegistry.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L70)

Date this schema version was created

***

### description

> **description**: `string`

Defined in: [src/types/configRegistry.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L64)

Description of what this configuration schema covers

***

### id

> **id**: `string`

Defined in: [src/types/configRegistry.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L51)

Unique configuration ID

***

### migrationNotes?

> `optional` **migrationNotes**: `string`[]

Defined in: [src/types/configRegistry.ts:76](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L76)

Migration notes for upgrading from previous versions

***

### name

> **name**: `string`

Defined in: [src/types/configRegistry.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L54)

Human-readable name

***

### version

> **version**: `object`

Defined in: [src/types/configRegistry.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/configRegistry.ts#L57)

Version information

#### major

> **major**: `number`

#### minor

> **minor**: `number`

#### patch

> **patch**: `number`
