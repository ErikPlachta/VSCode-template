"""my_work_assistant.github_manager.constants.

Config- and content-driven discovery of managed GitHub file paths.

This module avoids hard-coded filenames by deriving:
- The GitHub root directory from configuration (github_manager.github_root)
- Instructions and chatmodes from available templates
- Prompt topics from the prompts JSON schema (enum)

This keeps the system flexible and driven by content and config.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import List

from ..core.config import CONFIG_ROOT, PACKAGE_ROOT, load_config

__all__ = ["GITHUB_ROOT", "MANAGED_FILES"]


def _get_github_root() -> Path:
    """Resolve the GitHub root directory from configuration.

    Returns:
        Path: The directory under which managed files are written (default: .github).
    """
    cfg = load_config().get("github_manager", {})
    root = cfg.get("github_root", ".github")
    return Path(root)


def _resolve_root(value: str | None, default: Path) -> Path:
    """Resolve an optional override path against a default.

    Args:
        value: Optional override; may be absolute or relative.
        default: Default path to use when override is absent.

    Returns:
        Path: Absolute path for the resolved root.
    """
    if not value:
        return default
    p = Path(value)
    return p if p.is_absolute() else Path.cwd() / p


def _template_root() -> Path:
    """Compute the templates root path, honoring configuration overrides.

    Returns:
        Path: Root directory containing the GitHub Jinja2 templates.
    """
    cfg = load_config().get("github_manager", {})
    override = cfg.get("templates_root")
    return _resolve_root(override, CONFIG_ROOT.parent / "github")


def _schemas_root() -> Path:
    """Compute the schemas root path, honoring configuration overrides.

    Returns:
        Path: Root directory containing GitHub JSON schemas.
    """
    cfg = load_config().get("github_manager", {})
    override = cfg.get("schemas_root")
    return _resolve_root(override, PACKAGE_ROOT / "bin" / "schemas" / "github")


def _discover_instructions(root: Path) -> List[Path]:
    """Discover instruction targets from available templates.

    Args:
        root: The configured GitHub root.

    Returns:
        List[Path]: Resolved instruction target paths to manage.
    """
    instr_dir = _template_root() / "instructions"
    paths: List[Path] = []
    if instr_dir.exists():
        for tpl in instr_dir.glob("*.instructions.mwa.md.j2"):
            target = root / "instructions" / tpl.name.replace(".j2", "")
            paths.append(target)
    return paths


def _discover_prompts(root: Path) -> List[Path]:
    """Discover prompt targets from schema enum or templates.

    Args:
        root: The configured GitHub root.

    Returns:
        List[Path]: Resolved prompt target paths to manage.
    """
    schema_path = _schemas_root() / "prompts.schema.json"
    topics: List[str] = []
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
        topics = list(schema.get("properties", {}).get("topic", {}).get("enum", []))
    except OSError:
        # Fallback: infer from templates if schema missing
        for tpl in (_template_root() / "prompts").glob("*.prompt.mwa.md.j2"):
            topics.append(tpl.name.split(".prompt.")[0])
    return [root / "prompts" / f"{topic}.prompt.mwa.md" for topic in topics]


def _discover_chatmodes(root: Path) -> List[Path]:
    """Discover chatmode targets from available templates.

    Args:
        root: The configured GitHub root.

    Returns:
        List[Path]: Resolved chatmode target paths to manage.
    """
    chat_dir = _template_root() / "chatmodes"
    paths: List[Path] = []
    if chat_dir.exists():
        for tpl in chat_dir.glob("*.chatmode.mwa.md.j2"):
            stem = tpl.name.split(".chatmode.mwa.md.j2")[0]
            paths.append(root / "chatmodes" / f"{stem}.chatmode.mwa.md")
    return paths


def _discover_managed_files() -> dict[str, Path | List[Path]]:
    """Discover all managed file targets by category based on config and content.

    Returns:
        dict[str, Path | List[Path]]: Mapping of category to target path(s).
    """
    root = _get_github_root()
    cfg = load_config().get("github_manager", {})
    files: dict[str, Path | List[Path]] = {}
    if cfg.get("copilot_instructions_enabled", True):
        # Derive from template name 'copilot-instructions.md.j2' => 'copilot-instructions.md'
        files["copilot"] = root / "copilot-instructions.md"
    if cfg.get("instructions_enabled", True):
        instr = _discover_instructions(root)
        if instr:
            files["instructions"] = instr[0] if len(instr) == 1 else instr
    if cfg.get("prompts_enabled", True):
        files["prompts"] = _discover_prompts(root)
    if cfg.get("chatmodes_enabled", True):
        files["chatmodes"] = _discover_chatmodes(root)
    return files


def build_manifest() -> dict[str, List[dict[str, str | bool]]]:
    """Produce a transparent manifest of managed assets.

    The manifest includes for each asset:
    - target: output path on disk
    - template: source Jinja2 template path
    - schema: JSON schema applied during validation (if applicable)
    - enabled: whether the category is enabled in config
    - exists: whether the target currently exists on disk

    Returns:
        dict[str, List[dict[str, str | bool]]]: Manifest grouped by category.
    """
    cfg = load_config().get("github_manager", {})
    root = _get_github_root()
    troot = _template_root()
    sroot = _schemas_root()

    manifest: dict[str, List[dict[str, str | bool]]] = {
        "copilot": [],
        "instructions": [],
        "prompts": [],
        "chatmodes": [],
    }

    # Copilot
    if cfg.get("copilot_instructions_enabled", True):
        target = root / "copilot-instructions.md"
        manifest["copilot"].append(
            {
                "target": str(target),
                "template": str(troot / "copilot-instructions.md.j2"),
                "schema": str(sroot / "copilot_instructions.schema.json"),
                "enabled": True,
                "exists": target.exists(),
            }
        )

    # Instructions
    if cfg.get("instructions_enabled", True):
        for tpl in (troot / "instructions").glob("*.instructions.mwa.md.j2"):
            target = root / "instructions" / tpl.name.replace(".j2", "")
            manifest["instructions"].append(
                {
                    "target": str(target),
                    "template": str(tpl),
                    "schema": str(sroot / "instructions.schema.json"),
                    "enabled": True,
                    "exists": target.exists(),
                }
            )

    # Prompts
    if cfg.get("prompts_enabled", True):
        topics = [
            p.stem.split(".prompt")[0]
            for p in (troot / "prompts").glob("*.prompt.mwa.md.j2")
        ]
        for topic in topics:
            tpl = troot / "prompts" / f"{topic}.prompt.mwa.md.j2"
            target = root / "prompts" / f"{topic}.prompt.mwa.md"
            manifest["prompts"].append(
                {
                    "target": str(target),
                    "template": str(tpl),
                    "schema": str(sroot / "prompts.schema.json"),
                    "enabled": True,
                    "exists": target.exists(),
                }
            )

    # Chatmodes
    if cfg.get("chatmodes_enabled", True):
        for tpl in (troot / "chatmodes").glob("*.chatmode.mwa.md.j2"):
            persona = tpl.name.split(".chatmode.mwa.md.j2")[0]
            target = root / "chatmodes" / f"{persona}.chatmode.mwa.md"
            manifest["chatmodes"].append(
                {
                    "target": str(target),
                    "template": str(tpl),
                    "schema": str(sroot / "chatmodes.schema.json"),
                    "enabled": True,
                    "exists": target.exists(),
                }
            )

    return manifest


GITHUB_ROOT = _get_github_root()
MANAGED_FILES: dict[str, Path | List[Path]] = _discover_managed_files()
