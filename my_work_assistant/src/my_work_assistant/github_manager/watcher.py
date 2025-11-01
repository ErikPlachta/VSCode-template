"""Simple polling watcher for `.github` assets."""

from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, Iterable, List
import fnmatch

__all__ = ["Watcher", "ChangeEvent"]


ChangeEvent = Dict[str, str]


@dataclass
class Watcher:
    """Poll files for modifications using modification timestamps."""

    project_root: Path
    paths: Iterable[str]
    ignore_patterns: Iterable[str] = field(default_factory=list)
    _state: Dict[Path, float] = field(default_factory=dict)

    def _should_ignore(self, path: Path) -> bool:
        for pattern in self.ignore_patterns:
            if fnmatch.fnmatch(path.name, pattern):
                return True
        return False

    def scan(self) -> List[ChangeEvent]:
        """Return change events for modified files."""

        events: List[ChangeEvent] = []
        for relative in self.paths:
            absolute = self.project_root / relative
            if absolute.is_dir():
                candidates = [p for p in absolute.rglob("*") if p.is_file()]
            else:
                candidates = [absolute]
            for candidate in candidates:
                if self._should_ignore(candidate):
                    continue
                modified = candidate.stat().st_mtime if candidate.exists() else 0.0
                previous = self._state.get(candidate)
                if previous is None:
                    self._state[candidate] = modified
                    continue
                if modified > previous:
                    events.append({"path": str(candidate), "change": "modified"})
                    self._state[candidate] = modified
        return events
