from __future__ import annotations

from pathlib import Path

from my_work_assistant.core.telemetry import Telemetry


def test_telemetry_logs_events(tmp_path: Path) -> None:
    log = tmp_path / "RequestLog.md"
    telemetry = Telemetry(log)
    telemetry.log_event("ran", ["action"], "ok")
    content = log.read_text(encoding="utf-8")
    assert "summary: ran" in content
    telemetry.log_json({"summary": "json", "actions": "single", "result": "ok"})
    assert "summary: json" in log.read_text(encoding="utf-8")
