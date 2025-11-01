"""my_work_assistant.core.logging

Structured logging helpers writing to workspace files.
"""
from __future__ import annotations

import json
from datetime import UTC, datetime
from typing import Any

from .config import USER_ROOT

__all__ = ["log_event"]


def log_event(filename: str, level: str, message: str, **fields: Any) -> None:
    """Write a structured log entry."""
    log_dir = USER_ROOT / "logs"
    log_dir.mkdir(parents=True, exist_ok=True)
    entry = {
        "timestamp": datetime.now(UTC).isoformat(timespec="seconds"),
        "level": level,
        "message": message,
        "fields": fields,
    }
    path = log_dir / filename
    data = json.dumps(entry)
    try:
        with path.open("a", encoding="utf-8") as handle:
            handle.write(f"{data}\n")
    except OSError:  # pragma: no cover
        return
