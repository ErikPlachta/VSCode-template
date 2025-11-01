"""Generate human-readable summaries."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

__all__ = ["SummaryGenerator"]


@dataclass
class SummaryGenerator:
    """Generate summary text from a detailed changelog."""

    detailed_log: Path

    def summarize(self) -> str:
        """Return a simple summary string."""

        if not self.detailed_log.exists():
            return "No changes recorded."
        lines = [line.strip() for line in self.detailed_log.read_text(encoding="utf-8").splitlines() if line.startswith("-")]
        return "\n".join(lines) if lines else "No changes recorded."
