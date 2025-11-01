from __future__ import annotations

from pathlib import Path

from my_work_assistant.stdio_wrapper.server import StdioServer
from my_work_assistant.github_manager.validator import Validator


def test_stdio_server(monkeypatch, tmp_path: Path) -> None:  # type: ignore[no-untyped-def]
    server = StdioServer(project_root=tmp_path)

    def fake_resolve_package_root() -> Path:
        package_root = tmp_path
        defaults = package_root / "bin" / "defaults"
        (defaults / "docs").mkdir(parents=True, exist_ok=True)
        (defaults / "logs").mkdir(parents=True, exist_ok=True)
        (defaults / "docs" / "file.md").write_text("doc", encoding="utf-8")
        (defaults / "logs" / "RequestLog.md").write_text("# Log", encoding="utf-8")
        (defaults / "config").mkdir(parents=True, exist_ok=True)
        (defaults / "config" / "my-work-assistant.config.json").write_text("{}", encoding="utf-8")
        (defaults / "models").mkdir(parents=True, exist_ok=True)
        (defaults / "models" / "sample.json").write_text("{}", encoding="utf-8")
        return package_root

    def fake_resolve_workspace_root() -> Path:
        return tmp_path / "workspace"

    monkeypatch.setattr("my_work_assistant.stdio_wrapper.server.resolve_package_root", fake_resolve_package_root)
    monkeypatch.setattr("my_work_assistant.stdio_wrapper.server.resolve_workspace_root", fake_resolve_workspace_root)
    monkeypatch.setattr(Validator, "validate_all", lambda self: None)
    result = server.initialize()
    assert result["status"] == "initialized"
    assert server.validate()["status"] == "validated"
    monkeypatch.setattr("my_work_assistant.services.summary.SummaryGenerator.summarize", lambda self: "summary")
    assert server.changelog()["summary"] == "summary"
    assert server.list_models() == ["sample"]
