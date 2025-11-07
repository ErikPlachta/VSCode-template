---
title: Orchestrator Architecture Overview
summary: Comprehensive blueprint for coordinating MCP tool discovery, routing, and responses inside VS Code.
roles:
  - orchestration-engineer
  - developer-experience
associations:
  - repository-health-agent
  - local-tool-registry
hierarchy:
  - platform
  - orchestration
  - operations
---

## Summary

The orchestrator governs how the My Business MCP VS Code extension discovers tools, gathers inputs, and delivers responses. It ensures every interaction across discovery, invocation, logging, and user feedback adheres to governed pathways so that engineers can safely extend workflows.

## Responsibilities

- Discover and register MCP tools dynamically at activation time.
- Collect contextual inputs from users and supporting datasets to enrich tool invocations.
- Route execution across specialised agents while maintaining traceability and logging.
- Surface structured responses back to Copilot Chat with clear follow-up guidance.

## Inputs

- MCP capability metadata loaded from the bundled tool registry during activation.
- User prompts and clarification flows collected through chat interactions.
- Data lake resources synchronised by the embedded runtime and supporting agents.
- Workspace configuration for cache management and agent preferences.

## Outputs

- Curated tool execution requests enriched with validated arguments.
- User-facing responses rendered inside VS Code with contextual follow-ups.
- Audit logs persisted locally for replay, troubleshooting, and reporting.
- Signals for downstream documentation and quality agents to update health reports.

## Error Handling

- Retries tool discovery when local datasets are temporarily unavailable.
- Surfaces actionable error prompts for missing context or invalid inputs.
- Escalates to the repository health agent when required metadata is absent.
- Captures diagnostics for CI visibility to block non-compliant merges.

## Examples

- Running the data quality agent with full metadata coverage for people datasets.
- Requesting a clarification agent workflow to gather missing policy acknowledgements.
- Dispatching orchestration updates after a new MCP tool sync completes.

## Maintenance

- Review orchestration logs weekly to confirm tool coverage and success rates.
- Coordinate with the health agent team to refine validation thresholds.
- Review runtime configuration whenever local datasets or agent behaviour changes.

