"""my_work_assistant.core.initialize.

Initialization routines that seed the workspace configuration and docs.

Design:
- Copy curated static docs from packaged defaults into ``.my_work_assistant/docs``.
- If repository-level docs exist under ``my_work_assistant/docs``, copy those too
    (e.g., CI-generated OpenAPI or reference files) so users see the latest.
- Generate a fresh API reference from docstrings into the user docs folder.
- Create a simple ``index.md`` that links all docs for easy navigation.
"""

from __future__ import annotations

import json
import shutil
from pathlib import Path
from typing import Any

from ..docs import generate_docs
from .config import CONFIG_ROOT, PACKAGE_ROOT, USER_ROOT, load_config
from .exceptions import ConfigError, GitHubFileError

__all__ = ["initialize_workspace", "copy_if_missing"]

WORKSPACE_DIRS = [
    USER_ROOT,
    USER_ROOT / "docs",
    USER_ROOT / "logs",
    USER_ROOT / "cache",
    USER_ROOT / "backups",
]


def copy_if_missing(source: Path, destination: Path) -> None:
    """Copy a file if it does not already exist.

    Args:
        source: Source file path.
        destination: Target file path.

    Raises:
        GitHubFileError: If the file cannot be copied.

    Example:
        >>> copy_if_missing(Path('a'), Path('b'))  # doctest: +SKIP

    """
    if destination.exists():
        return
    destination.parent.mkdir(parents=True, exist_ok=True)
    try:
        shutil.copy2(source, destination)
    except OSError as exc:  # pragma: no cover
        raise GitHubFileError(
            "Failed to copy template", {"source": str(source)}
        ) from exc


def initialize_workspace() -> dict[str, Any]:
    """Initialize the local workspace directory.

    Returns:
        The merged configuration for reference.

    Raises:
        ConfigError: If configuration files cannot be merged or written.

    Example:
        >>> data = initialize_workspace()
        >>> "logging" in data
        True

    """
    for directory in WORKSPACE_DIRS:
        directory.mkdir(parents=True, exist_ok=True)
    default_config = load_config()
    target_config = USER_ROOT / "my-work-assistant.config.json"
    if not target_config.exists():
        try:
            target_config.write_text(
                json.dumps(default_config, indent=2), encoding="utf-8"
            )
        except OSError as exc:  # pragma: no cover
            raise ConfigError(
                "Failed to write user configuration", {"path": str(target_config)}
            ) from exc
    # 1) Copy curated static docs from packaged defaults
    defaults_docs = CONFIG_ROOT.parent / "docs"
    for doc in defaults_docs.glob("*.md"):
        copy_if_missing(doc, USER_ROOT / "docs" / doc.name)

    # 2) Copy repository-level docs if present (e.g., CI-generated outputs)
    repo_docs = PACKAGE_ROOT / "docs"
    if repo_docs.exists():
        for doc in repo_docs.glob("*.md"):
            copy_if_missing(doc, USER_ROOT / "docs" / doc.name)
        for extra in repo_docs.glob("*.json"):
            copy_if_missing(extra, USER_ROOT / "docs" / extra.name)
    logs_source = CONFIG_ROOT.parent / "logs"
    for log_template in logs_source.glob("*.md"):
        copy_if_missing(log_template, USER_ROOT / "logs" / log_template.name)
    # 3) Generate API reference docs from docstrings (best-effort; ignore failures)
    try:
        generate_docs()
    except Exception:
        # Keep initialization resilient even if doc generation fails
        pass
    # 4) Create a simple docs index linking everything we know about
    try:
        _write_docs_index()
    except Exception:
        pass
    return default_config


def _write_docs_index() -> None:
    """Create an ``index.md`` file linking available docs.

    This scans the user docs folder and produces a simple navigation index
    that highlights the generated API reference and curated guides.
    """
    docs_dir = USER_ROOT / "docs"
    docs_dir.mkdir(parents=True, exist_ok=True)
    paths = sorted(docs_dir.glob("*.md"))

    # Put api_reference first if present
    def sort_key(p: Path) -> tuple[int, str]:
        return (0 if p.name == "api_reference.md" else 1, p.name)

    paths_sorted = sorted(paths, key=sort_key)
    lines = ["# Documentation Index\n"]
    for p in paths_sorted:
        title = p.stem.replace("_", " ").title()
        lines.append(f"- [{title}]({p.name})")
    (docs_dir / "index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
