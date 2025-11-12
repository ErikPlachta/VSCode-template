[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow](../README.md) / AnalyzeParams

# Interface: AnalyzeParams

Defined in: [src/types/workflow.types.ts:402](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L402)

Parameters for DataAgent.analyzeData()

Accepts data from previous action or explicit dataset

## Properties

### analysisType?

> `optional` **analysisType**: `"correlation"` \| `"trend"` \| `"summary"` \| `"distribution"`

Defined in: [src/types/workflow.types.ts:407](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L407)

Type of analysis to perform

***

### data?

> `optional` **data**: `unknown`[]

Defined in: [src/types/workflow.types.ts:404](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L404)

Data to analyze. Can come from dependency resolution

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:410](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/workflow.types.ts#L410)

Fields to analyze. If undefined, analyzes all numeric/categorical fields
