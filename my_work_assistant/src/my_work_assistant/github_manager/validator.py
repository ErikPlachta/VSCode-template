"""Validation helpers for GitHub assets."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List

from jsonschema import Draft202012Validator
import json

from ..types import InstructionPayload, ChatModePayload

__all__ = ["Validator", "ValidationError"]


class ValidationError(RuntimeError):
    """Raised when GitHub assets fail validation."""


@dataclass
class Validator:
    """Validate GitHub workspace files against JSON schemas."""

    package_root: Path
    project_root: Path

    def _schema_path(self, *parts: str) -> Path:
        return self.package_root / "bin" / "schemas" / "github" / Path(*parts)

    def _load_schema(self, name: str) -> Draft202012Validator:
        with self._schema_path(name).open("r", encoding="utf-8") as handle:
            schema = json.load(handle)
        return Draft202012Validator(schema)

    def _validate_copilot_instructions(self) -> None:
        schema = self._load_schema("copilot_instructions.schema.json")
        content = (self.project_root / ".github" / "copilot-instructions.md").read_text(encoding="utf-8")
        errors = sorted(schema.iter_errors({"content": content}), key=lambda err: err.path)
        if errors:
            raise ValidationError("copilot-instructions.md failed validation")

    def _validate_instruction_files(self) -> None:
        schema = self._load_schema("instructions.schema.json")
        instructions_dir = self.project_root / ".github" / "instructions"
        for path in instructions_dir.glob("*.md"):
            title = path.read_text(encoding="utf-8").splitlines()[0].lstrip("# ")
            guidelines = [line[2:] for line in path.read_text(encoding="utf-8").splitlines() if line.startswith("- ")]
            payload: InstructionPayload = {
                "title": title,
                "guidelines": guidelines,
            }
            errors = sorted(schema.iter_errors(payload), key=lambda err: err.path)
            if errors:
                raise ValidationError(f"{path.name} failed validation")

    def _validate_chat_modes(self) -> None:
        schema = self._load_schema("chatmodes.schema.json")
        chatmodes_dir = self.project_root / ".github" / "chatmodes"
        for path in chatmodes_dir.glob("*.md"):
            lines = path.read_text(encoding="utf-8").splitlines()
            payload: ChatModePayload = {
                "name": lines[0].lstrip("# "),
                "description": lines[2] if len(lines) > 2 else "",
                "trigger": path.stem,
            }
            errors = sorted(schema.iter_errors(payload), key=lambda err: err.path)
            if errors:
                raise ValidationError(f"{path.name} failed validation")

    def validate_all(self) -> None:
        """Validate all managed assets."""

        self._validate_copilot_instructions()
        self._validate_instruction_files()
        self._validate_chat_modes()
