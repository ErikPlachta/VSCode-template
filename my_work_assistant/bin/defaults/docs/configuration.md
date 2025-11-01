# Configuration

Configuration is merged from packaged defaults and your user overrides in `.my_work_assistant/my-work-assistant.config.json`.

## Keys

```jsonc
{
  "github_manager": {
    "github_root": ".github", // Target directory for managed files
    "templates_root": null, // Optional override for templates
    "schemas_root": null, // Optional override for JSON schemas
    "copilot_instructions_enabled": true,
    "instructions_enabled": true,
    "prompts_enabled": true,
    "chatmodes_enabled": true
  }
}
```

- `github_root`: Where rendered files are written (defaults to `.github`).
- `templates_root`: If set, Jinja2 templates are loaded from here instead of bundled defaults.
- `schemas_root`: If set, JSON Schemas are loaded from here instead of bundled defaults.
- Category flags: Toggle which categories are rendered and validated.

## How merging works

- Defaults are baked into the package under `bin/defaults/config/my-work-assistant.config.json`.
- The first `init` writes your `.my_work_assistant/my-work-assistant.config.json` if missing.
- The runtime always reads your override file; change values there and re-run commands.
