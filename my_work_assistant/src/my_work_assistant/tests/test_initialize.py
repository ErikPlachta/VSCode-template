from __future__ import annotations

from pathlib import Path

from my_work_assistant.core.initialize import Initializer


def test_initializer_copies_defaults(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    defaults = package_root / "bin" / "defaults"
    (defaults / "docs").mkdir(parents=True)
    (defaults / "docs" / "example.md").write_text("example", encoding="utf-8")
    workspace_root = tmp_path / "workspace"

    initializer = Initializer(package_root=package_root, workspace_root=workspace_root)
    initializer.initialize()

    assert (workspace_root / "docs" / "example.md").exists()
    log = workspace_root / "logs" / "RequestLog.md"
    assert log.exists()
    assert "workspace initialized" in log.read_text(encoding="utf-8")
