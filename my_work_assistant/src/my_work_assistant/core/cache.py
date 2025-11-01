"""JSON cache helper."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Callable, Generic, Optional, TypeVar
import json


__all__ = ["Cache"]

T = TypeVar("T")


@dataclass
class Cache(Generic[T]):
    """Persist JSON serializable data with a refresh window."""

    path: Path
    refresh_minutes: int

    def _is_fresh(self) -> bool:
        """Return ``True`` if the cache file is still fresh."""

        if not self.path.exists():
            return False
        modified = datetime.fromtimestamp(self.path.stat().st_mtime, timezone.utc)
        return datetime.now(timezone.utc) - modified < timedelta(minutes=self.refresh_minutes)

    def load(self, factory: Callable[[], T], force_refresh: bool = False) -> T:
        """Load cached data, using *factory* when refresh is required."""

        if not force_refresh and self._is_fresh():
            with self.path.open("r", encoding="utf-8") as handle:
                data = json.load(handle)
            return data
        data = factory()
        self.path.parent.mkdir(parents=True, exist_ok=True)
        with self.path.open("w", encoding="utf-8") as handle:
            json.dump(data, handle, indent=2)
        return data
