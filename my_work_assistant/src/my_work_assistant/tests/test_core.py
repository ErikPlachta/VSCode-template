"""my_work_assistant.tests.test_core

Test core utilities such as cache and telemetry.
"""
from __future__ import annotations

from my_work_assistant.core import cache, telemetry


def test_cache_write_and_read(tmp_path, monkeypatch) -> None:
    """write_cache persists data and read_cache retrieves it."""
    monkeypatch.setattr(cache, "CACHE_DIR", tmp_path)
    cache.write_cache("sample", {"value": 1})
    data = cache.read_cache("sample")
    assert data["value"] == 1


def test_is_cache_stale(tmp_path, monkeypatch) -> None:
    """is_cache_stale reports missing files as stale."""
    monkeypatch.setattr(cache, "CACHE_DIR", tmp_path)
    assert cache.is_cache_stale("missing", 10) is True


def test_telemetry_records(tmp_path, monkeypatch) -> None:
    """record_request writes to the request log."""
    log_dir = tmp_path / "logs"
    monkeypatch.setattr(cache, "CACHE_DIR", tmp_path / "cache")
    monkeypatch.setattr("my_work_assistant.core.logging.USER_ROOT", tmp_path)
    telemetry.record_request("test", "ran")
    content = (tmp_path / "logs" / "RequestLog.md").read_text(encoding="utf-8")
    assert "ran" in content
