from __future__ import annotations

from pathlib import Path
from typing import Dict
import time

from my_work_assistant.core.cache import Cache


def test_cache_refresh(tmp_path: Path) -> None:
    path = tmp_path / "cache.json"
    cache: Cache[Dict[str, int]] = Cache(path=path, refresh_minutes=1)
    calls = {"count": 0}

    def factory() -> Dict[str, int]:
        calls["count"] += 1
        return {"value": calls["count"]}

    first = cache.load(factory)
    second = cache.load(factory)
    assert first == second
    assert calls["count"] == 1

    path.write_text("{\"value\": 1}", encoding="utf-8")
    import os
    os.utime(path, (time.time() - 120, time.time() - 120))
    third = cache.load(factory)
    assert third["value"] == 2
