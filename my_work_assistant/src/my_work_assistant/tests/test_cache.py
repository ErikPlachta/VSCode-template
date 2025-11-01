"""my_work_assistant.tests.test_cache

Exercise JSON cache helpers: read, write, and stale checks.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from my_work_assistant.core.cache import (
    is_cache_stale,
    read_cache,
    write_cache,
)


def test_cache_read_miss_returns_empty(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """read_cache should return an empty entry when file is absent."""
    monkeypatch.setattr("my_work_assistant.core.cache.CACHE_DIR", tmp_path)
    data = read_cache("missing")
    assert data == {}


def test_cache_write_and_stale_check(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """Write a cache entry and verify stale logic for fresh content."""
    monkeypatch.setattr("my_work_assistant.core.cache.CACHE_DIR", tmp_path)
    write_cache("entry", {"ok": True})
    # After write, cache file exists and should not be stale for a large refresh window
    assert not is_cache_stale("entry", refresh_minutes=10_000)
