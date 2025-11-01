"""my_work_assistant.services.updater

Helpers to update JSON documents safely.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from ..core.exceptions import GitHubFileError

__all__ = ["apply_updates"]


def apply_updates(path: Path, data: dict[str, Any]) -> None:
    """Write JSON data to a file with indentation.

    Args:
        path: Destination file path.
        data: Data to serialize.

    Raises:
        GitHubFileError: If writing fails.

    Example:
        >>> apply_updates(Path('sample.json'), {})  # doctest: +SKIP

    """
    try:
        path.write_text(json.dumps(data, indent=2), encoding="utf-8")
    except OSError as exc:  # pragma: no cover
        raise GitHubFileError("Failed to update file", {"path": str(path)}) from exc
