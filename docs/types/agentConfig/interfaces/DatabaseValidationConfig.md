[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseValidationConfig

# Interface: DatabaseValidationConfig

Defined in: [src/types/agentConfig.ts:269](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L269)

Validation and transformation settings for database queries.

## Properties

### integrityChecks

> **integrityChecks**: `object`

Defined in: [src/types/agentConfig.ts:275](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L275)

#### checkMissingReferences

> **checkMissingReferences**: `boolean`

#### validateRelationships

> **validateRelationships**: `boolean`

#### warnOnSchemaIssues

> **warnOnSchemaIssues**: `boolean`

***

### schemaValidation

> **schemaValidation**: `object`

Defined in: [src/types/agentConfig.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L270)

#### allowUnknownFields

> **allowUnknownFields**: `boolean`

#### autoTransformAliases

> **autoTransformAliases**: `boolean`

#### enableStrictValidation

> **enableStrictValidation**: `boolean`
