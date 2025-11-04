<!--
⚙️  This file is generated and managed by the My Work Assistant MCP Server.
Do not edit directly.
To modify content, update:
  .my_work_assistant/my-work-assistant.config.json
-->
---
managed_by_mcp: true
version: 1
topic: review-code
priority: 1
category: code
---
## When to use
Use this prompt for reviewing code diffs, refactors, and PRs.

## Goals
- Identify correctness issues, edge cases, and regressions.
- Improve readability, maintainability, and test coverage.
- Flag security, performance, and concurrency concerns.

## Inputs
- Code snippet or diff
- Context (file/module purpose)

## Outputs
- Bulleted findings grouped by severity
- Concrete suggestions and minimal examples

## Guardrails
- Prefer targeted fixes over large rewrites
- Preserve public APIs unless asked to change