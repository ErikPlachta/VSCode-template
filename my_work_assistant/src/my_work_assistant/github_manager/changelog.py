"""my_work_assistant.github_manager.changelog

Write change logs for repository events.
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterable

from ..core.logging import log_event

__all__ = ["record_changes"]


def record_changes(paths: Iterable[Path]) -> None:
    """Record changed file paths to the workspace logs.

    Args:
        paths: Iterable of file paths that changed.

    Example:
        >>> record_changes([])

    """
    entries = [str(path) for path in paths]
    log_event("ChangeLog.md", "INFO", "Managed files updated", files=entries)
    log_event("ChangeLogSummary.md", "INFO", "Summary of updates", count=len(entries))
