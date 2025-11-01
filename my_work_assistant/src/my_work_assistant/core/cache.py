"""my_work_assistant.core.cache

Simple JSON cache helpers.
"""

from __future__ import annotations

import json
from datetime import UTC, datetime, timedelta
from typing import Any

from .config import USER_ROOT
from .exceptions import ConfigError

__all__ = ["CacheEntry", "read_cache", "write_cache", "is_cache_stale"]


class CacheEntry(dict[str, Any]):
    """Dictionary wrapper for cache entries.

    Example:
        >>> CacheEntry({"data": 1})["data"]
        1

    """


CACHE_DIR = USER_ROOT / "cache"


def read_cache(name: str) -> CacheEntry:
    """Read a cache file by name.

    Args:
        name: Cache file stem without extension.

    Returns:
        A cache entry dictionary.

    Example:
        >>> read_cache('example')  # doctest: +SKIP

    """
    path = CACHE_DIR / f"{name}.json"
    if not path.exists():
        return CacheEntry()
    try:
        return CacheEntry(json.loads(path.read_text(encoding="utf-8")))
    except json.JSONDecodeError as exc:  # pragma: no cover
        raise ConfigError("Failed to decode cache", {"path": str(path)}) from exc


def write_cache(name: str, data: dict[str, Any]) -> None:
    """Persist data to a cache file.

    Args:
        name: Cache file stem.
        data: Serializable dictionary content.

    Example:
        >>> write_cache('example', {'updated': True})

    """
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    path = CACHE_DIR / f"{name}.json"
    path.write_text(json.dumps(data), encoding="utf-8")


def is_cache_stale(name: str, refresh_minutes: int) -> bool:
    """Determine whether a cache file is stale.

    Args:
        name: Cache file stem.
        refresh_minutes: Number of minutes before the cache is considered stale.

    Returns:
        True if the cache file should be refreshed.

    Example:
        >>> is_cache_stale('example', 10)  # doctest: +SKIP

    """
    path = CACHE_DIR / f"{name}.json"
    if not path.exists():
        return True
    modified = datetime.fromtimestamp(path.stat().st_mtime, tz=UTC)
    return datetime.now(UTC) - modified > timedelta(minutes=refresh_minutes)
