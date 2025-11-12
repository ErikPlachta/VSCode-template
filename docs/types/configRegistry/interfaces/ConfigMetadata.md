[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigMetadata

# Interface: ConfigMetadata

Defined in: [src/types/configRegistry.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L55)

Configuration metadata for each schema ID

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/configRegistry.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L73)

Agent type this configuration is for

***

### breakingChanges?

> `optional` **breakingChanges**: `string`[]

Defined in: [src/types/configRegistry.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L79)

List of breaking changes from previous versions

***

### createdDate

> **createdDate**: `string`

Defined in: [src/types/configRegistry.ts:76](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L76)

Date this schema version was created

***

### description

> **description**: `string`

Defined in: [src/types/configRegistry.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L70)

Description of what this configuration schema covers

***

### id

> **id**: `string`

Defined in: [src/types/configRegistry.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L57)

Unique configuration ID

***

### migrationNotes?

> `optional` **migrationNotes**: `string`[]

Defined in: [src/types/configRegistry.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L82)

Migration notes for upgrading from previous versions

***

### name

> **name**: `string`

Defined in: [src/types/configRegistry.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L60)

Human-readable name

***

### version

> **version**: `object`

Defined in: [src/types/configRegistry.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L63)

Version information

#### major

> **major**: `number`

#### minor

> **minor**: `number`

#### patch

> **patch**: `number`
