# Architecture Overview

My Work Assistant is an MCP server that automates GitHub workspace assets with a
content- and config-driven approach.

## Layers

- Core: configuration merge, initialization, logging, telemetry
- GitHub Manager: template rendering, validation, manifest discovery
- API: FastAPI app exposing init/validate/manifest and helper endpoints
- CLI: Typer commands mirroring API functionality for local workflows

## Data flow

1. `init` seeds `.my_work_assistant/` (config, docs, logs) and renders templates.
2. Managed files are written under `github_root` (default `.github`).
3. `validate` loads schemas and runs strict checks against managed files.
4. `manifest` shows a transparent view of expected targets and their origin.

## Extensibility

- Override `templates_root` / `schemas_root` in config to customize behavior.
- Add new templates following the naming scheme to participate automatically.
- Generated docs help keep module-level documentation discoverable.
