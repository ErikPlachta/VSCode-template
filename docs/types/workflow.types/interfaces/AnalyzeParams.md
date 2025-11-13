[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / AnalyzeParams

# Interface: AnalyzeParams

Defined in: [src/types/workflow.types.ts:401](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L401)

Parameters for DataAgent.analyzeData()

Accepts data from previous action or explicit dataset

## Properties

### analysisType?

> `optional` **analysisType**: `"correlation"` \| `"trend"` \| `"summary"` \| `"distribution"`

Defined in: [src/types/workflow.types.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L406)

Type of analysis to perform

***

### data?

> `optional` **data**: `unknown`[]

Defined in: [src/types/workflow.types.ts:403](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L403)

Data to analyze. Can come from dependency resolution

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:409](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/workflow.types.ts#L409)

Fields to analyze. If undefined, analyzes all numeric/categorical fields
