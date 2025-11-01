# Quickstart

Get up and running locally with a clean virtual environment and the CLI/API.

## Setup

```zsh
# macOS zsh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
```

Note for zsh: quotes around .[dev] are required: `pip install -e ".[dev]"`.

## Initialize workspace

```zsh
python -m my_work_assistant init
```

This creates `.my_work_assistant/` with:

- `my-work-assistant.config.json` (user override config)
- `docs/` (static docs + generated `api_reference.md`)
- `logs/` (changelog and summary files)

## Render & validate GitHub files

```zsh
# Render templates into .github/
python -m my_work_assistant init

# Validate the rendered files
python -m my_work_assistant validate
```

Managed files use the naming scheme:

- `copilot-instructions.md`
- `*.instructions.mwa.md`
- `*.prompt.mwa.md`
- `*.chatmode.mwa.md`

## Run the API server

```zsh
python -m my_work_assistant serve --host 127.0.0.1 --port 8000 --reload
```

Open:

- Swagger UI: <http://127.0.0.1:8000/docs>
- ReDoc: <http://127.0.0.1:8000/redoc>

## Useful CLI commands

```zsh
python -m my_work_assistant manifest   # Print discovered managed assets
python -m my_work_assistant validate   # Validate managed files
python -m my_work_assistant changelog  # Summarize recent changes
python -m my_work_assistant self-test  # Run unit tests
```
