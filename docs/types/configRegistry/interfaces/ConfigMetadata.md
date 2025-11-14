[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigMetadata

# Interface: ConfigMetadata

Defined in: [src/types/configRegistry.ts:53](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L53)

Configuration metadata for each schema ID.

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/configRegistry.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L71)

Agent type this configuration is for

***

### breakingChanges?

> `optional` **breakingChanges**: `string`[]

Defined in: [src/types/configRegistry.ts:77](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L77)

List of breaking changes from previous versions

***

### createdDate

> **createdDate**: `string`

Defined in: [src/types/configRegistry.ts:74](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L74)

Date this schema version was created

***

### description

> **description**: `string`

Defined in: [src/types/configRegistry.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L68)

Description of what this configuration schema covers

***

### id

> **id**: `string`

Defined in: [src/types/configRegistry.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L55)

Unique configuration ID

***

### migrationNotes?

> `optional` **migrationNotes**: `string`[]

Defined in: [src/types/configRegistry.ts:80](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L80)

Migration notes for upgrading from previous versions

***

### name

> **name**: `string`

Defined in: [src/types/configRegistry.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L58)

Human-readable name

***

### version

> **version**: `object`

Defined in: [src/types/configRegistry.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/configRegistry.ts#L61)

Version information

#### major

> **major**: `number`

#### minor

> **minor**: `number`

#### patch

> **patch**: `number`
