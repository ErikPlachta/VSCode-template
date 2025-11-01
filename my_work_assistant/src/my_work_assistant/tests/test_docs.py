from __future__ import annotations

from pathlib import Path

from my_work_assistant.docs.gen_docs import generate_docs, main


def test_generate_docs(tmp_path: Path) -> None:
    output = tmp_path / "docs"
    generate_docs(output)
    files = list(output.glob("*.md"))
    assert files


def test_docs_main(monkeypatch, tmp_path: Path) -> None:  # type: ignore[no-untyped-def]
    monkeypatch.setattr("pathlib.Path.cwd", lambda: tmp_path)
    main()
    expected = tmp_path / ".my_work_assistant" / "docs"
    assert any(expected.glob("*.md"))
