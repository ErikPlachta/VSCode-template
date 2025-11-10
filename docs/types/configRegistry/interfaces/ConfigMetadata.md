[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigMetadata

# Interface: ConfigMetadata

Defined in: [src/types/configRegistry.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L52)

Configuration metadata for each schema ID

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/configRegistry.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L70)

Agent type this configuration is for

***

### breakingChanges?

> `optional` **breakingChanges**: `string`[]

Defined in: [src/types/configRegistry.ts:76](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L76)

List of breaking changes from previous versions

***

### createdDate

> **createdDate**: `string`

Defined in: [src/types/configRegistry.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L73)

Date this schema version was created

***

### description

> **description**: `string`

Defined in: [src/types/configRegistry.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L67)

Description of what this configuration schema covers

***

### id

> **id**: `string`

Defined in: [src/types/configRegistry.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L54)

Unique configuration ID

***

### migrationNotes?

> `optional` **migrationNotes**: `string`[]

Defined in: [src/types/configRegistry.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L79)

Migration notes for upgrading from previous versions

***

### name

> **name**: `string`

Defined in: [src/types/configRegistry.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L57)

Human-readable name

***

### version

> **version**: `object`

Defined in: [src/types/configRegistry.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/configRegistry.ts#L60)

Version information

#### major

> **major**: `number`

#### minor

> **minor**: `number`

#### patch

> **patch**: `number`
