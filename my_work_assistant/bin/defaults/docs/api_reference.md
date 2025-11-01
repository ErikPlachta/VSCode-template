# API Reference

This file is a placeholder. A generated API reference is created from module
docstrings during `init` at `.my_work_assistant/docs/api_reference.md`.

Endpoints (via FastAPI):

- `POST /initialize` — initialize workspace and render templates
- `POST /validate` — validate managed files
- `GET /manifest` — discovered managed assets
- `GET /list_prompts` — list prompts under configured root
- `POST /self_test` — run unit tests

For an interactive view, run:

```zsh
python -m my_work_assistant serve --reload
```

Then open:

- Swagger UI: <http://127.0.0.1:8000/docs>
- ReDoc: <http://127.0.0.1:8000/redoc>
