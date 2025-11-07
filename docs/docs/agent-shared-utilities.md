---
title: Agent Shared Utilities
summary: Shared services and helpers that standardise communication across agents and enforcement tooling.
roles:
  - platform-engineering
  - quality-engineering
associations:
  - repository-health-agent
  - orchestration-runtime
hierarchy:
  - platform
  - agents
  - shared-utilities
---

## Summary

Shared utilities provide consistent messaging, telemetry, and configuration primitives for every agent bundled with the extension. They reduce duplication and make it easier to satisfy compliance requirements enforced by the repository health agent.

## Responsibilities

- Offer consistent logging, error mapping, and retry helpers for agent workflows.
- Supply typed interfaces for data lake lookups, tool discovery, and prompt construction.
- Provide factories that register agents with the orchestrator and health check pipelines.
- Maintain compatibility with CI enforcement so every agent exposes rich documentation.

## Inputs

- Configuration values supplied through VS Code settings and environment variables.
- Dataset schemas and relationship metadata defined inside the `data` directory.
- Telemetry events emitted by the orchestration runtime during agent execution.
- Validation requirements sourced from the repository health agent configuration.

## Outputs

- Strongly typed responses shared across orchestrator, data quality, and compliance agents.
- Structured errors with actionable remediation guidance for chat surfaces.
- Instrumentation hooks that forward metrics to health reporting workflows.
- Utilities for composing documentation metadata during build and release.

## Error Handling

- Converts low-level exceptions into consistent agent error classes consumed by orchestrator prompts.
- Wraps external calls with retries and exponential backoff defaults.
- Emits diagnostic breadcrumbs used by the health agent when generating compliance reports.
- Flags configuration mismatches before agents are registered with the orchestrator.

## Examples

- Using the dataset registry helper to retrieve department records with enforced typing.
- Leveraging the prompt templating utility to inject required documentation metadata.
- Consuming the response normaliser to align error surfaces across chat and telemetry.

## Maintenance

- Audit helper APIs quarterly to confirm they satisfy updated compliance rules.
- Expand shared typings when new datasets or schemas are introduced to the platform.
- Keep logging and telemetry defaults aligned with central observability standards.

