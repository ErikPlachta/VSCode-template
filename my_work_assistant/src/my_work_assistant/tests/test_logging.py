from __future__ import annotations

from pathlib import Path
import json

from my_work_assistant.core.logging import LogManager


def test_log_manager_writes_json(tmp_path: Path) -> None:
    manager = LogManager(tmp_path)
    manager.log("INFO", "test", "message", extra_data=1)
    log_path = tmp_path / "events.log"
    content = log_path.read_text(encoding="utf-8").strip().splitlines()[0]
    payload = json.loads(content)
    assert payload["level"] == "INFO"
    assert payload["module"] == "test"
    assert payload["extra"]["extra_data"] == 1
