"""my_work_assistant.tests.test_docs

Ensure documentation generator produces output and summarize functions/classes.
"""

from __future__ import annotations

from pathlib import Path
import pytest

from my_work_assistant.docs import generate_docs


def test_generate_docs_creates_file(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """generate_docs writes an api_reference file and includes module heading."""
    monkeypatch.setattr("my_work_assistant.core.initialize.USER_ROOT", tmp_path)
    path = generate_docs(["my_work_assistant.core.config"])
    assert path.exists()
    content = path.read_text(encoding="utf-8")
    assert "my_work_assistant.core.config" in content


def test_generate_docs_for_specific_modules(tmp_path: Path) -> None:
    """Generate docs for modules with functions and classes into a temp dir."""
    target = generate_docs(
        modules=[
            "my_work_assistant.services.bridges",  # functions
            "my_work_assistant.models.entities",  # classes
        ],
        out_dir=tmp_path,
    )
    content = Path(target).read_text(encoding="utf-8")
    assert "my_work_assistant.services.bridges" in content
    assert "my_work_assistant.models.entities" in content
