# Developer Guide

Use the Typer CLI or FastAPI endpoints to manage workspace assets. Tests enforce
strict typing, docstrings, and coverage.

This project favors strong typing, clear docstrings, and a content- and config-driven design.

## Environment

```zsh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -e ".[dev]"
```

## Local workflow

- `python -m my_work_assistant init` — seed workspace and render templates
- `python -m my_work_assistant validate` — validate managed files
- `python -m my_work_assistant serve --reload` — run API with live reload

## Quality gates

- Ruff: `ruff check`
- Pytest: `pytest -q`
- Mypy: `mypy my_work_assistant/src/my_work_assistant`

## Conventions

- File naming: `*.instructions.mwa.md`, `*.prompt.mwa.md`, `*.chatmode.mwa.md`
- Module docstrings: Google-style docstrings enforced by Ruff
- Avoid hard-coded paths; prefer config (`github_root`, `templates_root`, `schemas_root`)

See also: Quickstart, Configuration, GitHub Manager, API & CLI, Docs System.
