"""my_work_assistant.github_manager.constants

Constants describing managed GitHub file paths.
"""

from __future__ import annotations

from pathlib import Path
from typing import List

__all__ = ["GITHUB_ROOT", "MANAGED_FILES"]

GITHUB_ROOT = Path(".github")
MANAGED_FILES: dict[str, Path | List[Path]] = {
    "copilot": GITHUB_ROOT / "copilot-instructions.md",
    "instructions": GITHUB_ROOT
    / "instructions"
    / "default-guidelines.instructions.mwa.md",
    "prompts": [
        GITHUB_ROOT / "prompts" / "document-api.prompt.mwa.md",
        GITHUB_ROOT / "prompts" / "review-code.prompt.mwa.md",
        GITHUB_ROOT / "prompts" / "onboarding-plan.prompt.mwa.md",
    ],
    "chatmodes": [
        GITHUB_ROOT / "chatmodes" / "reviewer.chatmode.mwa.md",
        GITHUB_ROOT / "chatmodes" / "docwriter.chatmode.mwa.md",
    ],
}
