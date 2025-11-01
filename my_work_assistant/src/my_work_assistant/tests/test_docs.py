"""my_work_assistant.tests.test_docs

Ensure documentation generator produces output.
"""
from __future__ import annotations

from my_work_assistant.docs import generate_docs


def test_generate_docs_creates_file(tmp_path, monkeypatch) -> None:
    """generate_docs writes an api_reference file."""

    monkeypatch.setattr("my_work_assistant.core.initialize.USER_ROOT", tmp_path)
    path = generate_docs(["my_work_assistant.core.config"])
    assert path.exists()
