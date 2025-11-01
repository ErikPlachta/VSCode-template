"""my_work_assistant.services.summary

Generate summary strings for changelog entries.
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterable

__all__ = ["summarize_changes"]


def summarize_changes(paths: Iterable[Path]) -> str:
    """Return a human readable summary for change logging.

    Args:
        paths: Collection of paths that changed.

    Returns:
        A newline separated summary string.

    Example:
        >>> summarize_changes([])
        'No changes detected.'
    """

    entries = [str(path) for path in paths]
    if not entries:
        return "No changes detected."
    formatted = "\n".join(f"- {entry}" for entry in entries)
    return f"Updated files:\n{formatted}"
