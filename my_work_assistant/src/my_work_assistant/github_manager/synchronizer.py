"""my_work_assistant.github_manager.synchronizer.

Validate and synchronize managed GitHub assets.

This module orchestrates validation across all discovered, configuration-driven
managed files. It flattens the manifest categories into a single list of
paths, validates each file against JSON Schemas and additional strict checks,
and records telemetry for observability.

Public functions include precise docstrings to support IDE assistance and the
package's documentation generation.
"""

from __future__ import annotations

from pathlib import Path
from typing import Iterable, List

from ..core.logging import log_event
from ..core.telemetry import record_request
from .constants import MANAGED_FILES
from .validator import validate_file

__all__ = ["synchronize"]


def _flatten(files: Iterable[Path | list[Path]]) -> List[Path]:
    """Flatten a sequence of paths or lists of paths into a list.

    Args:
        files: An iterable containing ``Path`` objects or lists of ``Path``
            objects (e.g., values from the managed files manifest).

    Returns:
        list[Path]: A simple list of paths preserving the original order.

    Example:
        >>> from pathlib import Path
        >>> _flatten([Path('a'), [Path('b'), Path('c')]])
        [Path('a'), Path('b'), Path('c')]
    """
    result: List[Path] = []
    for item in files:
        if isinstance(item, Path):
            result.append(item)
        else:
            result.extend(list(item))
    return result


def synchronize() -> List[Path]:
    """Validate all managed files and return their paths.

    The set of managed files is discovered via :data:`MANAGED_FILES` which is
    constructed based on configuration and available content. Each path is
    validated using :func:`validator.validate_file`, and a summary event is
    logged and recorded via telemetry.

    Returns:
        list[Path]: A list of validated file paths.

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
