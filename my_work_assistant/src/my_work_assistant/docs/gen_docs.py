"""my_work_assistant.docs.gen_docs

Generate Markdown documentation from module docstrings.
"""

from __future__ import annotations

import inspect
from importlib import import_module
from pathlib import Path
from typing import Iterable

from ..core.config import USER_ROOT

__all__ = ["generate_docs"]


MODULES = [
    "my_work_assistant.core.config",
    "my_work_assistant.core.initialize",
    "my_work_assistant.github_manager.builder",
]


def generate_docs(modules: Iterable[str] | None = None) -> Path:
    """Generate documentation files under the workspace directory.

    Args:
        modules: Optional iterable of module names to document.

    Returns:
        Path to the generated documentation file.

    Example:
        >>> generate_docs()  # doctest: +SKIP

    """
    module_names = list(modules or MODULES)
    docs_dir = USER_ROOT / "docs"
    docs_dir.mkdir(parents=True, exist_ok=True)
    target = docs_dir / "api_reference.md"
    sections: list[str] = []
    for module_name in module_names:
        module = import_module(module_name)
        doc = inspect.getdoc(module) or "No documentation."
        sections.append(f"## {module_name}\n\n{doc}")
    target.write_text("\n\n".join(sections), encoding="utf-8")
    return target
