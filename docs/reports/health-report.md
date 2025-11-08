---
title: Repository Compliance Health Report
summary: Automated validation status for documentation, schemas, and TypeScript types.
roles: ['quality-assurance', 'platform-engineering']
associations: ['repository-health-agent']
hierarchy: ['governance', 'quality', 'health-report']
generatedAt: 2025-11-08T16:18:38.777Z
---

# Repository Compliance Health Report

## Summary

- Generated at: 2025-11-08T16:18:38.777Z
- Overall status: FAILED

## Responsibilities

- Execute TypeScript linting to enforce doc coverage.
- Validate JSON schemas to maintain data integrity.
- Audit Markdown metadata for hierarchical governance.

## Inputs

- application.config.ts (preferred) or legacy mcp.config.json for configuration directives.
- JSON Schemas under the schemas directory.
- Repository TypeScript and Markdown sources.

## Outputs

- Compliance status for each enforcement area.
- Aggregated diagnostics for failing artifacts.
- Markdown report archived for auditability.

## Error Handling

- Exits with non-zero status when any check fails.
- Surfaces Ajv and ESLint diagnostics verbosely.
- Guides maintainers to remediation documentation.

## Examples

- npm run lint to enforce doc blocks prior to commit.
- npm run lint:json to vet dataset updates.
- npm run lint:docs to confirm metadata completeness.

## Check Results

### TypeScript ESLint

- Status: FAILED

#### Messages
- [0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\clarificationAgent\config.ts[24m[0m
[0m  [2m295:3[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m295:3[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\dataAgent\config.ts[24m[0m
[0m   [2m49:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m49:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m64:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m64:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m80:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m80:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m95:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m95:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m110:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m110:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m127:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m127:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m145:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m145:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\dataAgent\index.ts[24m[0m
[0m  [2m160:13[22m  [31merror[39m  'qualityConfig' is assigned a value but never used                         [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m386:29[22m  [31merror[39m  Do not access Object.prototype method 'hasOwnProperty' from target object  [2mno-prototype-builtins[22m[0m
[0m  [2m400:41[22m  [31merror[39m  Do not access Object.prototype method 'hasOwnProperty' from target object  [2mno-prototype-builtins[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\databaseAgent\config.ts[24m[0m
[0m   [2m68:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m68:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m84:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m84:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m99:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m99:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m114:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m114:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m152:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m152:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m179:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m179:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m194:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m194:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\orchestrator\config.ts[24m[0m
[0m   [2m59:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m59:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m88:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m88:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m112:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m112:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m174:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m174:1[22m   [31merror[39m  Missing return type on function            [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m222:13[22m  [31merror[39m  'path' is assigned a value but never used  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\orchestrator\index.ts[24m[0m
[0m   [2m52:27[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m55:21[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m98:1[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m98:1[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m133:46[22m  [31merror[39m    'intent' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m149:1[22m   [31merror[39m    Missing JSDoc @param "context.topic" description                          [2mjsdoc/require-param-description[22m[0m
[0m  [2m149:1[22m   [33mwarning[39m  Missing JSDoc @param "context.topic" type                                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m387:5[22m   [31merror[39m    'input' is defined but never used. Allowed unused args must match /^_/u   [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m409:41[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\agent\relevantDataManagerAgent\config.ts[24m[0m
[0m   [2m52:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m52:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m67:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m67:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m82:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m82:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m97:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m97:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m116:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m116:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m140:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m140:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m159:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m159:1[22m  [31merror[39m  Missing return type on function  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\extension\index.ts[24m[0m
[0m  [2m40:9[22m  [31merror[39m  Missing JSDoc block description     [2mjsdoc/require-description[22m[0m
[0m  [2m40:9[22m  [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\extension\mcpProvider.ts[24m[0m
[0m  [2m26:7[22m  [31merror[39m  Missing JSDoc block description     [2mjsdoc/require-description[22m[0m
[0m  [2m26:7[22m  [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\mcp\prompts\index.ts[24m[0m
[0m   [2m23:1[22m  [33mwarning[39m  Syntax error in namepath: {  [2mjsdoc/valid-types[22m[0m
[0m   [2m82:1[22m  [33mwarning[39m  Syntax error in namepath: {  [2mjsdoc/valid-types[22m[0m
[0m  [2m131:1[22m  [33mwarning[39m  Syntax error in namepath: {  [2mjsdoc/valid-types[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\shared\agentAnalytics.ts[24m[0m
[0m   [2m41:29[22m  [31merror[39m    Unexpected any. Specify a different type             [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m182:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                 [2mjsdoc/reject-any-type[22m[0m
[0m  [2m186:1[22m   [31merror[39m    Missing JSDoc @param "options.userId" description    [2mjsdoc/require-param-description[22m[0m
[0m  [2m186:1[22m   [33mwarning[39m  Missing JSDoc @param "options.userId" type           [2mjsdoc/require-param-type[22m[0m
[0m  [2m187:1[22m   [31merror[39m    Missing JSDoc @param "options.metadata" description  [2mjsdoc/require-param-description[22m[0m
[0m  [2m187:1[22m   [33mwarning[39m  Missing JSDoc @param "options.metadata" type         [2mjsdoc/require-param-type[22m[0m
[0m  [2m197:33[22m  [31merror[39m    Unexpected any. Specify a different type             [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m424:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                 [2mjsdoc/reject-any-type[22m[0m
[0m  [2m427:28[22m  [31merror[39m    Unexpected any. Specify a different type             [2m@typescript-eslint/no-explicit-any[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\shared\agentConfigResolver.ts[24m[0m
[0m    [2m5:8[22m   [31merror[39m  'path' is defined but never used                 [2m@typescript-eslint/no-unused-vars[22m[0m
[0m    [2m8:3[22m   [31merror[39m  'agentConfigurations' is defined but never used  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m115:21[22m  [31merror[39m  Unexpected any. Specify a different type         [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m157:31[22m  [31merror[39m  Unexpected any. Specify a different type         [2m@typescript-eslint/no-explicit-any[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\shared\analyticsDashboard.ts[24m[0m
[0m    [2m5:38[22m  [31merror[39m  'AgentUsageStats' is defined but never used                                [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m302:5[22m   [31merror[39m  'options' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\shared\analyticsIntegration.ts[24m[0m
[0m   [2m16:40[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m16:58[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m17:5[22m   [31merror[39m    Argument 'target' should be typed with a non-any type  [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m17:13[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m24:5[22m   [31merror[39m    Missing JSDoc block description                        [2mjsdoc/require-description[22m[0m
[0m   [2m24:5[22m   [31merror[39m    Missing JSDoc @returns declaration                     [2mjsdoc/require-returns[22m[0m
[0m   [2m26:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                   [2mjsdoc/reject-any-type[22m[0m
[0m   [2m26:1[22m   [31merror[39m    Missing JSDoc @param "args" description                [2mjsdoc/require-param-description[22m[0m
[0m   [2m28:49[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m28:65[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m71:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                   [2mjsdoc/reject-any-type[22m[0m
[0m   [2m75:1[22m   [31merror[39m    Missing JSDoc @param "options.userId" description      [2mjsdoc/require-param-description[22m[0m
[0m   [2m75:1[22m   [33mwarning[39m  Missing JSDoc @param "options.userId" type             [2mjsdoc/require-param-type[22m[0m
[0m   [2m76:1[22m   [31merror[39m    Missing JSDoc @param "options.metadata" description    [2mjsdoc/require-param-description[22m[0m
[0m   [2m76:1[22m   [33mwarning[39m  Missing JSDoc @param "options.metadata" type           [2mjsdoc/require-param-type[22m[0m
[0m   [2m84:33[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m99:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                   [2mjsdoc/reject-any-type[22m[0m
[0m  [2m103:31[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m116:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                   [2mjsdoc/reject-any-type[22m[0m
[0m  [2m118:25[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m133:51[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m133:69[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m140:27[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m177:1[22m   [33mwarning[39m  Prefer a more specific type to `any`                   [2mjsdoc/reject-any-type[22m[0m
[0m  [2m181:1[22m   [31merror[39m    Missing JSDoc @param "options.category" description    [2mjsdoc/require-param-description[22m[0m
[0m  [2m181:1[22m   [33mwarning[39m  Missing JSDoc @param "options.category" type           [2mjsdoc/require-param-type[22m[0m
[0m  [2m182:1[22m   [31merror[39m    Missing JSDoc @param "options.filters" description     [2mjsdoc/require-param-description[22m[0m
[0m  [2m182:1[22m   [33mwarning[39m  Missing JSDoc @param "options.filters" type            [2mjsdoc/require-param-type[22m[0m
[0m  [2m190:32[22m  [31merror[39m    Unexpected any. Specify a different type               [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m214:1[22m   [31merror[39m    Missing JSDoc @param "options.inputSize" description   [2mjsdoc/require-param-description[22m[0m
[0m  [2m214:1[22m   [33mwarning[39m  Missing JSDoc @param "options.inputSize" type          [2mjsdoc/require-param-type[22m[0m
[0m  [2m215:1[22m   [31merror[39m    Missing JSDoc @param "options.category" description    [2mjsdoc/require-param-description[22m[0m
[0m  [2m215:1[22m   [33mwarning[39m  Missing JSDoc @param "options.category" type           [2mjsdoc/require-param-type[22m[0m
[0m  [2m252:1[22m   [31merror[39m    Missing JSDoc @param "options.intent" description      [2mjsdoc/require-param-description[22m[0m
[0m  [2m252:1[22m   [33mwarning[39m  Missing JSDoc @param "options.intent" type             [2mjsdoc/require-param-type[22m[0m
[0m  [2m253:1[22m   [31merror[39m    Missing JSDoc @param "options.agentCount" description  [2mjsdoc/require-param-description[22m[0m
[0m  [2m253:1[22m   [33mwarning[39m  Missing JSDoc @param "options.agentCount" type         [2mjsdoc/require-param-type[22m[0m
[0m  [2m320:36[22m  [31merror[39m    A `require()` style import is forbidden                [2m@typescript-eslint/no-require-imports[22m[0m
[0m  [2m329:13[22m  [31merror[39m    'report' is assigned a value but never used            [2m@typescript-eslint/no-unused-vars[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\types\configRegistry.ts[24m[0m
[0m  [2m158:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m161:1[22m  [31merror[39m    Missing JSDoc @param "configId" description          [2mjsdoc/require-param-description[22m[0m
[0m  [2m161:1[22m  [33mwarning[39m  Missing JSDoc @param "configId" type                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m167:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m170:1[22m  [31merror[39m    Missing JSDoc @param "configId" description          [2mjsdoc/require-param-description[22m[0m
[0m  [2m170:1[22m  [33mwarning[39m  Missing JSDoc @param "configId" type                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m176:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m179:1[22m  [31merror[39m    Missing JSDoc @param "configId" description          [2mjsdoc/require-param-description[22m[0m
[0m  [2m179:1[22m  [33mwarning[39m  Missing JSDoc @param "configId" type                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m188:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m191:1[22m  [31merror[39m    Missing JSDoc @param "configId1" description         [2mjsdoc/require-param-description[22m[0m
[0m  [2m191:1[22m  [33mwarning[39m  Missing JSDoc @param "configId1" type                [2mjsdoc/require-param-type[22m[0m
[0m  [2m192:1[22m  [31merror[39m    Missing JSDoc @param "configId2" description         [2mjsdoc/require-param-description[22m[0m
[0m  [2m192:1[22m  [33mwarning[39m  Missing JSDoc @param "configId2" type                [2mjsdoc/require-param-type[22m[0m
[0m  [2m205:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m208:1[22m  [31merror[39m    Missing JSDoc @param "agentType" description         [2mjsdoc/require-param-description[22m[0m
[0m  [2m208:1[22m  [33mwarning[39m  Missing JSDoc @param "agentType" type                [2mjsdoc/require-param-type[22m[0m
[0m  [2m216:3[22m  [31merror[39m    Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m219:1[22m  [31merror[39m    Missing JSDoc @param "agentType" description         [2mjsdoc/require-param-description[22m[0m
[0m  [2m219:1[22m  [33mwarning[39m  Missing JSDoc @param "agentType" type                [2mjsdoc/require-param-type[22m[0m
[0m  [2m220:1[22m  [31merror[39m    Missing JSDoc @param "major" description             [2mjsdoc/require-param-description[22m[0m
[0m  [2m220:1[22m  [33mwarning[39m  Missing JSDoc @param "major" type                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m221:1[22m  [31merror[39m    Missing JSDoc @param "minor" description             [2mjsdoc/require-param-description[22m[0m
[0m  [2m221:1[22m  [33mwarning[39m  Missing JSDoc @param "minor" type                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m222:1[22m  [31merror[39m    Missing JSDoc @param "patch" description             [2mjsdoc/require-param-description[22m[0m
[0m  [2m222:1[22m  [33mwarning[39m  Missing JSDoc @param "patch" type                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m243:1[22m  [31merror[39m    Missing JSDoc @param "config.$configId" description  [2mjsdoc/require-param-description[22m[0m
[0m  [2m243:1[22m  [33mwarning[39m  Missing JSDoc @param "config.$configId" type         [2mjsdoc/require-param-type[22m[0m
[0m[0m
[0m[4mC:\repo\vscode-extension-mcp-server\src\types\configValidation.ts[24m[0m
[0m    [2m9:23[22m  [31merror[39m  'CONFIG_REGISTRY' is defined but never used                                 [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m261:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m356:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m357:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m358:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m371:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m372:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m373:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m386:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m387:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m388:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m401:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m402:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m403:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m[0m
[0m[31m[1m✖ 168 problems (136 errors, 32 warnings)[22m[39m[0m
[0m[31m[1m[22m[39m[0m

### JSON Schema Validation

- Status: PASSED

#### Messages
- All JSON files satisfy their schemas.

### Markdown Metadata

- Status: PASSED

#### Messages
- All Markdown documents include the mandated metadata.

## Maintenance

- Review failing checks before merging changes.
