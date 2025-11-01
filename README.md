# My Work Assistant

My Work Assistant is a reference MCP server that provisions GitHub Copilot Chat
instructional assets and maintains a local knowledge base for collaborative
workflows. The project is intentionally data driven and ships with repeatable
scripts, templates, and automated documentation tooling.

## Getting Started

```bash
pip install -e .[dev]
python -m my_work_assistant init
```

## Development

* `python -m my_work_assistant self-test`
* `pytest --cov=my_work_assistant`
* `mypy --strict my_work_assistant`

