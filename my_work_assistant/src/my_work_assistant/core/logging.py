"""Structured logging utilities."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
import json

from ..types import JSONDict

__all__ = ["LogManager"]


@dataclass
class LogManager:
    """Persist structured JSON logs to the workspace."""

    log_directory: Path

    def log(self, level: str, module: str, message: str, **extra: object) -> None:
        """Write a structured log entry.

        Args:
            level: Log severity level.
            module: Name of the module emitting the log.
            message: Human readable message.
            **extra: Additional JSON-serializable metadata.
        """

        self.log_directory.mkdir(parents=True, exist_ok=True)
        payload: JSONDict = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": level,
            "module": module,
            "message": message,
            "extra": extra,
        }
        log_path = self.log_directory / "events.log"
        with log_path.open("a", encoding="utf-8") as handle:
            json.dump(payload, handle)
            handle.write("\n")
