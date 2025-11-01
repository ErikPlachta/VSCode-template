"""Changelog helpers for workspace events."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

__all__ = ["Changelog"]


@dataclass
class Changelog:
    """Write detailed and summary entries to workspace logs."""

    logs_root: Path

    def _append(self, path: Path, header: str, line: str) -> None:
        if path.exists():
            content = path.read_text(encoding="utf-8")
        else:
            content = f"{header}\n\n"
        content += line
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")

    def record_change(self, description: str) -> None:
        """Append *description* to both detailed and summary logs."""

        timestamp = datetime.now(timezone.utc).isoformat()
        self._append(
            self.logs_root / "ChangeLog.md",
            "# Change Log",
            f"- {timestamp}: {description}\n",
        )
        self._append(
            self.logs_root / "ChangeLogSummary.md",
            "# Change Log Summary",
            f"- {description}\n",
        )
