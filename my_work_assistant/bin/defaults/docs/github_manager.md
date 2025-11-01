# GitHub Manager

The GitHub manager renders, validates, and discovers managed files under your configured GitHub root.

## Naming scheme

- Copilot instructions: `copilot-instructions.md`
- Guidelines: `*.instructions.mwa.md`
- Prompts: `*.prompt.mwa.md`
- Chat modes: `*.chatmode.mwa.md`

The `.mwa` suffix (before the final extension) marks files as managed by this tool.

## What gets rendered

- Templates live under the packaged defaults: `bin/defaults/github/`.
- You can override templates by setting `github_manager.templates_root`.
- Rendering is guarded by a disclaimer banner to prevent overwriting unmanaged files.

## Validation

- JSON front matter is validated using JSON Schema.
- Additional strict checks enforce headings or allowed values.
- Schemas:
  - `copilot_instructions.schema.json`
  - `instructions.schema.json`
  - `prompts.schema.json` (topic enum)
  - `chatmodes.schema.json`

## Discovery & manifest

- Discovery is config- and content-driven; it scans templates/schemas to determine targets.
- View the transparent manifest:

```zsh
python -m my_work_assistant manifest
# or via API: GET /manifest
```

## Sync & validate

```zsh
python -m my_work_assistant validate
# Validates all managed files against schemas + strict checks
```
