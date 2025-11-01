"""my_work_assistant.core.telemetry

Telemetry utilities that record request lifecycle events.
"""
from __future__ import annotations

from typing import Any

from .logging import log_event

__all__ = ["record_request"]


def record_request(source: str, summary: str, **payload: Any) -> None:
    """Record a request lifecycle entry.

    Args:
        source: Name of the subsystem emitting the event.
        summary: Human readable summary of the action.
        **payload: Additional structured metadata.

    Example:
        >>> record_request("api", "listed models", count=1)

    """
    log_event("RequestLog.md", "INFO", summary, source=source, payload=payload)
