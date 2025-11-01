from __future__ import annotations

from pathlib import Path

from my_work_assistant.github_manager.builder import Builder
from my_work_assistant.github_manager.synchronizer import Synchronizer
from my_work_assistant.github_manager.watcher import Watcher
from my_work_assistant.github_manager.changelog import Changelog


def test_builder_renders_templates(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    template_root = package_root / "bin" / "defaults" / "github"
    (template_root / "instructions").mkdir(parents=True)
    (template_root / "chatmodes").mkdir(parents=True)
    (template_root / "copilot-instructions.md.j2").write_text("content", encoding="utf-8")
    (template_root / "instructions" / "file.md.j2").write_text("# Title", encoding="utf-8")
    (template_root / "chatmodes" / "mode.md.j2").write_text("# Mode", encoding="utf-8")

    project_root = tmp_path / "project"
    builder = Builder(package_root=package_root, project_root=project_root)
    builder.build()

    assert (project_root / ".github" / "copilot-instructions.md").exists()
    assert (project_root / ".github" / "instructions" / "file.md").exists()
    assert (project_root / ".github" / "chatmodes" / "mode.md").exists()


def test_synchronizer_copies(tmp_path: Path) -> None:
    project_root = tmp_path / "project"
    github = project_root / ".github"
    (github).mkdir(parents=True)
    (github / "file.txt").write_text("content", encoding="utf-8")

    cache_root = tmp_path / "cache"
    synchronizer = Synchronizer(project_root=project_root, cache_root=cache_root)
    synchronizer.sync()
    (cache_root / "github" / "file.txt").write_text("change", encoding="utf-8")
    synchronizer.sync()

    assert (cache_root / "github" / "file.txt").exists()


def test_watcher_detects_changes(tmp_path: Path) -> None:
    project_root = tmp_path
    directory = project_root / "dir"
    directory.mkdir()
    target = directory / "file.txt"
    target.write_text("a", encoding="utf-8")
    watcher = Watcher(project_root=project_root, paths=["dir"], ignore_patterns=["*.bak"])
    assert watcher.scan() == []
    import time
    time.sleep(0.01)
    (directory / "ignore.bak").write_text("ignored", encoding="utf-8")
    target.write_text("b", encoding="utf-8")
    events = watcher.scan()
    assert any(event["path"].endswith("file.txt") for event in events)


def test_changelog_records(tmp_path: Path) -> None:
    logs_root = tmp_path
    changelog = Changelog(logs_root)
    changelog.record_change("Updated")
    changelog.record_change("Second")
    detail = (logs_root / "ChangeLog.md").read_text(encoding="utf-8")
    summary = (logs_root / "ChangeLogSummary.md").read_text(encoding="utf-8")
    assert "Updated" in detail and "Updated" in summary
    assert "Second" in detail


def test_watcher_single_file(tmp_path: Path) -> None:
    target = tmp_path / "file.txt"
    target.write_text("a", encoding="utf-8")
    watcher = Watcher(project_root=tmp_path, paths=["file.txt"], ignore_patterns=[])
    watcher.scan()
    import time
    time.sleep(0.01)
    target.write_text("b", encoding="utf-8")
    events = watcher.scan()
    assert events
