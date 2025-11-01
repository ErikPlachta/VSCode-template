"""my_work_assistant.github_manager.watcher

Lightweight watcher stub that records manual refresh events.
"""
from __future__ import annotations

from pathlib import Path
from typing import Iterable

from ..core.logging import log_event
from ..core.telemetry import record_request

__all__ = ["watch_paths"]


def watch_paths(paths: Iterable[Path]) -> None:
    """Record a watcher event for the provided paths.

    Args:
        paths: Iterable of paths that were checked.

    Example:
        >>> watch_paths([])
    """

    tracked = [str(path) for path in paths]
    log_event("ChangeLog.md", "INFO", "Watcher inspected paths", paths=tracked)
    record_request("watcher", "inspected paths", count=len(tracked))
