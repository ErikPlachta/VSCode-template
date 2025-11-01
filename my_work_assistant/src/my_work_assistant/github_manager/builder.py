"""Generate GitHub workspace files from templates."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Dict

from jinja2 import Template

from ..types import JSONDict

__all__ = ["Builder"]


@dataclass
class Builder:
    """Render Jinja2 templates into the GitHub workspace."""

    package_root: Path
    project_root: Path

    def _template_directory(self) -> Path:
        return self.package_root / "bin" / "defaults" / "github"

    def _render_file(self, source: Path, destination: Path, context: JSONDict | None = None) -> None:
        """Render a template from *source* to *destination*."""

        context = context or {}
        with source.open("r", encoding="utf-8") as handle:
            template = Template(handle.read())
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_text(template.render(**context), encoding="utf-8")

    def build(self) -> None:
        """Generate required GitHub assets."""

        github_root = self.project_root / ".github"
        template_root = self._template_directory()
        self._render_file(
            template_root / "copilot-instructions.md.j2",
            github_root / "copilot-instructions.md",
        )
        instructions_dir = template_root / "instructions"
        for template in instructions_dir.glob("*.j2"):
            destination = github_root / "instructions" / template.stem
            self._render_file(template, destination)
        chatmodes_dir = template_root / "chatmodes"
        for template in chatmodes_dir.glob("*.j2"):
            destination = github_root / "chatmodes" / template.stem
            self._render_file(template, destination)
