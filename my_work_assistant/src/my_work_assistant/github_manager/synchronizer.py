"""my_work_assistant.github_manager.synchronizer

Helpers for validating and synchronizing managed GitHub assets.
"""

from __future__ import annotations

from pathlib import Path
from typing import Iterable

from ..core.logging import log_event
from ..core.telemetry import record_request
from .constants import MANAGED_FILES
from .validator import validate_file

__all__ = ["synchronize"]


def _flatten(files: Iterable[Path | list[Path]]) -> list[Path]:
    """Flatten nested file iterables."""
    result: list[Path] = []
    for item in files:
        if isinstance(item, Path):
            result.append(item)
        else:
            result.extend(list(item))
    return result


def synchronize() -> list[Path]:
    """Validate all managed files and return their paths.

    Returns:
        A list of validated paths.

    Example:
        >>> synchronize()  # doctest: +SKIP

    """
    files = _flatten(MANAGED_FILES.values())
    for path in files:
        validate_file(path)
    log_event(
        "ChangeLogSummary.md", "INFO", "Validated managed files", count=len(files)
    )
    record_request("synchronizer", "validated managed files", count=len(files))
    return files
