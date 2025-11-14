[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/config/agentConfigValidation](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/shared/config/agentConfigValidation.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L18)

Structured outcome produced by configuration validation routines.

Represents overall validity plus collections of blocking errors and
non‑blocking warnings.

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/shared/config/agentConfigValidation.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L20)

***

### isValid

> **isValid**: `boolean`

Defined in: [src/shared/config/agentConfigValidation.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L19)

***

### warnings

> **warnings**: [`ValidationWarning`](ValidationWarning.md)[]

Defined in: [src/shared/config/agentConfigValidation.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/config/agentConfigValidation.ts#L21)
