"""Telemetry helper for recording user-visible events."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

from ..types import JSONDict

__all__ = ["Telemetry"]


@dataclass
class Telemetry:
    """Record request metadata to a Markdown log."""

    log_path: Path

    def _format_entry(self, payload: JSONDict) -> str:
        """Format a telemetry entry as Markdown."""

        timestamp = payload.get("timestamp") or datetime.now(timezone.utc).isoformat()
        summary = payload.get("summary", "unspecified")
        actions = payload.get("actions", [])
        if isinstance(actions, Iterable) and not isinstance(actions, (str, bytes)):
            actions_list = "\n".join(f"  - {item}" for item in actions)
        else:
            actions_list = f"  - {actions}"
        result = payload.get("result", "success")
        return (
            f"\n## {timestamp}\n"
            f"- summary: {summary}\n"
            f"- actions:\n{actions_list}\n"
            f"- result: {result}\n"
        )

    def log_event(self, summary: str, actions: Iterable[str], result: str) -> None:
        """Append an event to the telemetry log."""

        entry = self._format_entry(
            {
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "summary": summary,
                "actions": list(actions),
                "result": result,
            }
        )
        self.log_path.parent.mkdir(parents=True, exist_ok=True)
        with self.log_path.open("a", encoding="utf-8") as handle:
            handle.write(entry)

    def log_json(self, data: JSONDict) -> None:
        """Append a pre-formatted JSON entry."""

        entry = self._format_entry(data)
        self.log_path.parent.mkdir(parents=True, exist_ok=True)
        with self.log_path.open("a", encoding="utf-8") as handle:
            handle.write(entry)
