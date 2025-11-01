from __future__ import annotations

from pathlib import Path

import pytest

from my_work_assistant.github_manager.validator import ValidationError, Validator


def test_validator_passes_existing_files(tmp_path: Path) -> None:
    project_root = tmp_path / "project"
    package_root = tmp_path / "package"
    defaults = package_root / "bin" / "defaults" / "github"
    schemas = package_root / "bin" / "schemas" / "github"
    (defaults / "instructions").mkdir(parents=True)
    (defaults / "chatmodes").mkdir(parents=True)
    schemas.mkdir(parents=True)

    (defaults / "copilot-instructions.md.j2").write_text("<!-- BEGIN my_work_assistant -->x<!-- END my_work_assistant -->", encoding="utf-8")
    (defaults / "instructions" / "default-guidelines.md.j2").write_text("# Title\n\n- a", encoding="utf-8")
    (defaults / "chatmodes" / "reviewer.md.j2").write_text("# Name\n\nline", encoding="utf-8")

    (schemas / "copilot_instructions.schema.json").write_text(
        '{"type":"object","properties":{"content":{"type":"string"}},"required":["content"]}',
        encoding="utf-8",
    )
    (schemas / "instructions.schema.json").write_text(
        '{"type":"object","properties":{"title":{"type":"string"},"guidelines":{"type":"array"}},"required":["title","guidelines"]}',
        encoding="utf-8",
    )
    (schemas / "chatmodes.schema.json").write_text(
        '{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string"},"trigger":{"type":"string"}},"required":["name","description","trigger"]}',
        encoding="utf-8",
    )

    github = project_root / ".github"
    (github / "instructions").mkdir(parents=True)
    (github / "chatmodes").mkdir(parents=True)
    (github / "copilot-instructions.md").write_text("<!-- BEGIN my_work_assistant -->x<!-- END my_work_assistant -->", encoding="utf-8")
    (github / "instructions" / "default-guidelines.md").write_text("# Title\n\n- a", encoding="utf-8")
    (github / "chatmodes" / "reviewer.md").write_text("# Name\n\n\nline", encoding="utf-8")

    validator = Validator(package_root=package_root, project_root=project_root)
    validator.validate_all()


def test_validator_detects_errors(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    schema_root = package_root / "bin" / "schemas" / "github"
    schema_root.mkdir(parents=True)
    (schema_root / "copilot_instructions.schema.json").write_text('{"type":"object","properties":{"content":{"type":"string","minLength":10}},"required":["content"]}', encoding="utf-8")
    (schema_root / "instructions.schema.json").write_text('{"type":"object","properties":{"title":{"type":"string"},"guidelines":{"type":"array","minItems":1}},"required":["title","guidelines"]}', encoding="utf-8")
    (schema_root / "chatmodes.schema.json").write_text('{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string","minLength":1},"trigger":{"type":"string"}},"required":["name","description","trigger"]}', encoding="utf-8")

    project_root = tmp_path / "project"
    (project_root / ".github" / "instructions").mkdir(parents=True)
    (project_root / ".github" / "chatmodes").mkdir(parents=True)
    (project_root / ".github" / "copilot-instructions.md").write_text("short", encoding="utf-8")
    (project_root / ".github" / "instructions" / "file.md").write_text("# Title", encoding="utf-8")
    (project_root / ".github" / "chatmodes" / "file.md").write_text("# Name", encoding="utf-8")

    validator = Validator(package_root=package_root, project_root=project_root)
    with pytest.raises(ValidationError):
        validator.validate_all()


def test_validator_instruction_error(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    schema_root = package_root / "bin" / "schemas" / "github"
    schema_root.mkdir(parents=True)
    (schema_root / "copilot_instructions.schema.json").write_text('{"type":"object","properties":{"content":{"type":"string"}},"required":["content"]}', encoding="utf-8")
    (schema_root / "instructions.schema.json").write_text('{"type":"object","properties":{"title":{"type":"string"},"guidelines":{"type":"array","minItems":1}},"required":["title","guidelines"]}', encoding="utf-8")
    (schema_root / "chatmodes.schema.json").write_text('{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string","minLength":1},"trigger":{"type":"string"}},"required":["name","description","trigger"]}', encoding="utf-8")
    project_root = tmp_path / "project"
    (project_root / ".github" / "instructions").mkdir(parents=True)
    (project_root / ".github" / "chatmodes").mkdir(parents=True)
    (project_root / ".github" / "copilot-instructions.md").write_text("<!-- BEGIN my_work_assistant -->ok<!-- END my_work_assistant -->", encoding="utf-8")
    (project_root / ".github" / "instructions" / "file.md").write_text("# Title", encoding="utf-8")
    (project_root / ".github" / "chatmodes" / "file.md").write_text("# Name\n\nvalue", encoding="utf-8")
    validator = Validator(package_root=package_root, project_root=project_root)
    with pytest.raises(ValidationError):
        validator.validate_all()


def test_validator_chatmode_error(tmp_path: Path) -> None:
    package_root = tmp_path / "package"
    schema_root = package_root / "bin" / "schemas" / "github"
    schema_root.mkdir(parents=True)
    (schema_root / "copilot_instructions.schema.json").write_text('{"type":"object","properties":{"content":{"type":"string"}},"required":["content"]}', encoding="utf-8")
    (schema_root / "instructions.schema.json").write_text('{"type":"object","properties":{"title":{"type":"string"},"guidelines":{"type":"array","minItems":1}},"required":["title","guidelines"]}', encoding="utf-8")
    (schema_root / "chatmodes.schema.json").write_text('{"type":"object","properties":{"name":{"type":"string"},"description":{"type":"string","minLength":1},"trigger":{"type":"string"}},"required":["name","description","trigger"]}', encoding="utf-8")
    project_root = tmp_path / "project"
    (project_root / ".github" / "instructions").mkdir(parents=True)
    (project_root / ".github" / "chatmodes").mkdir(parents=True)
    (project_root / ".github" / "copilot-instructions.md").write_text("<!-- BEGIN my_work_assistant -->ok<!-- END my_work_assistant -->", encoding="utf-8")
    (project_root / ".github" / "instructions" / "file.md").write_text("# Title\n\n- item", encoding="utf-8")
    (project_root / ".github" / "chatmodes" / "file.md").write_text("# Name", encoding="utf-8")
    validator = Validator(package_root=package_root, project_root=project_root)
    with pytest.raises(ValidationError):
        validator.validate_all()
