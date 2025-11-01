"""my_work_assistant.docs.gen_docs.

Generate Markdown documentation from module and symbol docstrings.

Design intent:
- Keep a simple, dependency-free doc generator that works from docstrings.
- Autodiscover a curated set of package modules (core, github_manager, services)
    unless an explicit list is provided.
- Emit a compact, readable single-file reference with module docstrings and
    summaries of public functions and classes.

This is not a full Sphinx replacement; it favors zero-config, fast output to
seed useful docs under ``.my_work_assistant/docs`` during initialization.
"""

from __future__ import annotations

import inspect
import pkgutil
from importlib import import_module
from pathlib import Path
from typing import Callable, Iterable, List, Set, Tuple, Type

from ..core.config import USER_ROOT

__all__ = ["generate_docs"]


MODULE_ROOTS = [
    "my_work_assistant.core",
    "my_work_assistant.github_manager",
    "my_work_assistant.services",
]


def _discover_modules() -> List[str]:
    """Discover package modules under curated roots.

    Returns:
        list[str]: Importable module names.
    """
    discovered: List[str] = []
    for root in MODULE_ROOTS:
        try:
            pkg = import_module(root)
        except Exception:  # pragma: no cover - best-effort discovery
            continue
        if not hasattr(pkg, "__path__"):
            continue
        for mod in pkgutil.walk_packages(pkg.__path__, prefix=f"{root}."):
            # Skip tests and private modules
            if ".tests" in mod.name or any(
                part.startswith("_") for part in mod.name.split(".")
            ):
                continue
            discovered.append(mod.name)
    # Deduplicate while preserving order
    seen: Set[str] = set()
    result: List[str] = []
    for name in discovered:
        if name not in seen:
            seen.add(name)
            result.append(name)
    return result


def _summarize_function(func: Callable[..., object]) -> Tuple[str, str]:
    sig = str(inspect.signature(func))
    doc = inspect.getdoc(func) or ""
    first = doc.split("\n\n", 1)[0]
    return sig, first


def _summarize_class(cls: Type[object]) -> Tuple[str, str]:
    doc = inspect.getdoc(cls) or ""
    first = doc.split("\n\n", 1)[0]
    return "", first


def generate_docs(
    modules: Iterable[str] | None = None, out_dir: Path | None = None
) -> Path:
    """Generate documentation files under the workspace directory.

    Args:
        modules: Optional iterable of module names to document. When omitted,
            a curated autodiscovery across ``core``, ``github_manager``, and
            ``services`` is used.
        out_dir: Optional output directory for the generated markdown file.
            If not provided, defaults to ``.my_work_assistant/docs`` under the
            user's workspace.

    Returns:
        Path: The generated documentation file path.

    Example:
        >>> generate_docs()  # doctest: +SKIP

    """
    module_names = list(modules or _discover_modules())
    docs_dir = out_dir if out_dir is not None else USER_ROOT / "docs"
    docs_dir.mkdir(parents=True, exist_ok=True)
    target = docs_dir / "api_reference.md"
    sections: List[str] = ["# API Reference\n"]
    for module_name in module_names:
        try:
            module = import_module(module_name)
        except Exception:  # pragma: no cover - defensive import
            continue
        doc = inspect.getdoc(module) or "No documentation."
        sections.append(f"\n## {module_name}\n\n{doc}\n")

        # Functions
        funcs = [
            (name, func)
            for name, func in inspect.getmembers(module, inspect.isfunction)
            if not name.startswith("_") and func.__module__ == module_name
        ]
        if funcs:
            sections.append("### Functions\n")
            for name, func in funcs:
                sig, summary = _summarize_function(func)
                sections.append(f"- `{name}{sig}` — {summary}")

        # Classes
        classes = [
            (name, cls)
            for name, cls in inspect.getmembers(module, inspect.isclass)
            if not name.startswith("_") and cls.__module__ == module_name
        ]
        if classes:
            sections.append("\n### Classes\n")
            for name, cls in classes:
                _, summary = _summarize_class(cls)
                sections.append(f"- `{name}` — {summary}")

    target.write_text("\n\n".join(sections), encoding="utf-8")
    return target
