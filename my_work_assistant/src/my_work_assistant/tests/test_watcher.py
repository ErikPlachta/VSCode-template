"""my_work_assistant.tests.test_watcher

Ensure watcher records events without errors.
"""

from __future__ import annotations

from pathlib import Path

from my_work_assistant.github_manager.watcher import watch_paths


def test_watch_paths_runs(tmp_path: Path) -> None:
    """watch_paths should accept paths and run without raising."""
    paths = [tmp_path / "a", tmp_path / "b"]
    watch_paths(paths)
