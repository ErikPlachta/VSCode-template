"""my_work_assistant.utils.filewatcher

Simple polling-based file watcher helpers.
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterable

__all__ = ["list_files"]


def list_files(paths: Iterable[Path]) -> list[Path]:
    """Return a sorted list of files under the provided directories.

    Args:
        paths: Directories or files to inspect.

    Returns:
        A sorted list of paths.

    Example:
        >>> list_files([])
        []

    """
    collected: list[Path] = []
    for path in paths:
        if path.is_dir():
            collected.extend(sorted(path.rglob("*")))
        elif path.exists():
            collected.append(path)
    return sorted({p for p in collected if p.is_file()})
