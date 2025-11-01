"""my_work_assistant.core.initialize

Initialization routines that seed the workspace configuration and docs.
"""
from __future__ import annotations

import json
import shutil
from pathlib import Path
from typing import Any

from .config import CONFIG_ROOT, USER_ROOT, load_config
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
        raise GitHubFileError("Failed to copy template", {"source": str(source)}) from exc


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
            target_config.write_text(json.dumps(default_config, indent=2), encoding="utf-8")
        except OSError as exc:  # pragma: no cover
            raise ConfigError("Failed to write user configuration", {"path": str(target_config)}) from exc
    docs_source = CONFIG_ROOT.parent / "docs"
    for doc in docs_source.glob("*.md"):
        copy_if_missing(doc, USER_ROOT / "docs" / doc.name)
    logs_source = CONFIG_ROOT.parent / "logs"
    for log_template in logs_source.glob("*.md"):
        copy_if_missing(log_template, USER_ROOT / "logs" / log_template.name)
    return default_config
