"""my_work_assistant.tests.test_initialize

Cover initialization helpers including docs index, config write, and error paths.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from my_work_assistant.core import initialize


def test_copy_if_missing_skips_existing(tmp_path: Path) -> None:
    """copy_if_missing should not overwrite an existing destination file."""
    src = tmp_path / "a.md"
    dst = tmp_path / "b.md"
    src.write_text("content", encoding="utf-8")
    dst.write_text("existing", encoding="utf-8")
    initialize.copy_if_missing(src, dst)
    assert dst.read_text(encoding="utf-8") == "existing"


def test_write_docs_index_prioritizes_api_reference(
    tmp_path: Path, monkeypatch
) -> None:
    """Index should place api_reference.md at the top of the list."""
    docs = tmp_path / "docs"
    docs.mkdir(parents=True, exist_ok=True)
    (docs / "other.md").write_text("x", encoding="utf-8")
    (docs / "api_reference.md").write_text("x", encoding="utf-8")
    monkeypatch.setattr("my_work_assistant.core.initialize.USER_ROOT", tmp_path)
    initialize._write_docs_index()
    content = (docs / "index.md").read_text(encoding="utf-8")
    lines = [line for line in content.splitlines() if line.startswith("-")]
    assert lines[0].startswith("- [Api Reference]")


def test_initialize_workspace_handles_docgen_error(tmp_path: Path, monkeypatch) -> None:
    """initialize_workspace should swallow exceptions from docs generation and index writing."""
    monkeypatch.setattr("my_work_assistant.core.initialize.USER_ROOT", tmp_path)

    def boom(*_args, **_kwargs):  # noqa: D401
        raise RuntimeError("boom")

    monkeypatch.setattr("my_work_assistant.core.initialize.generate_docs", boom)
    monkeypatch.setattr("my_work_assistant.core.initialize._write_docs_index", boom)
    data = initialize.initialize_workspace()
    assert "logging" in data
