"""Generate documentation from module docstrings."""

from __future__ import annotations

from importlib import import_module
from pathlib import Path
from typing import Iterable

MODULES = [
    "my_work_assistant.core.config",
    "my_work_assistant.core.initialize",
    "my_work_assistant.github_manager.validator",
]


def iter_docstrings(modules: Iterable[str]) -> Iterable[tuple[str, str]]:
    for module_name in modules:
        module = import_module(module_name)
        doc = module.__doc__ or "No documentation available."
        yield module_name, doc


def generate_docs(output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    for module_name, doc in iter_docstrings(MODULES):
        filename = output_dir / f"{module_name.replace('.', '_')}.md"
        filename.write_text(f"# {module_name}\n\n{doc}\n", encoding="utf-8")


def main() -> None:
    workspace_docs = Path.cwd() / ".my_work_assistant" / "docs"
    generate_docs(workspace_docs)


if __name__ == "__main__":  # pragma: no cover
    main()
