# API & CLI

## CLI commands

- `init` — initialize workspace and render templates
- `validate` — validate all managed files
- `changelog` — summarize changes
- `manifest` — print discovered managed assets
- `self-test` — run unit tests
- `serve` — run the FastAPI app (Swagger UI at /docs)

```zsh
python -m my_work_assistant init
python -m my_work_assistant validate
python -m my_work_assistant manifest
python -m my_work_assistant serve --host 127.0.0.1 --port 8000 --reload
```

## API endpoints

- `POST /initialize` — run init and render templates
- `POST /validate` — validate managed files
- `GET /list_models` — list bundled models (people, roles, etc.)
- `GET /list_prompts` — list prompt files under configured root
- `GET /manifest` — transparent managed-asset manifest
- `GET /describe_bridge` — example relationships between models
- `POST /self_test` — run unit tests and return stdout

Interactive docs:

- Swagger UI: <http://127.0.0.1:8000/docs>
- ReDoc: <http://127.0.0.1:8000/redoc>
