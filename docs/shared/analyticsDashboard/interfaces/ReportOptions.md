[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / ReportOptions

# Interface: ReportOptions

Defined in: [src/shared/analyticsDashboard.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsDashboard.ts#L21)

Report generation options.

## Properties

### format

> **format**: `"markdown"` \| `"json"` \| `"csv"`

Defined in: [src/shared/analyticsDashboard.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsDashboard.ts#L27)

Format for the report output.

***

### includeDetails

> **includeDetails**: `boolean`

Defined in: [src/shared/analyticsDashboard.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsDashboard.ts#L25)

Include detailed statistics.

***

### period

> **period**: `object`

Defined in: [src/shared/analyticsDashboard.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsDashboard.ts#L29)

Time period for the report.

#### end

> **end**: `Date`

#### start

> **start**: `Date`

***

### sections

> **sections**: [`ReportSection`](../enumerations/ReportSection.md)[]

Defined in: [src/shared/analyticsDashboard.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/shared/analyticsDashboard.ts#L23)

Sections to include in the report.
