"""Tests for the Copilot workspace template synchronisation."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

from copilot_workspace import CATEGORIES, generate_workspace


def test_generate_workspace_structure(tmp_path: Path) -> None:
    """Ensure that the workspace generator creates the expected files."""
    workspace_path = generate_workspace(tmp_path)

    github_dir = tmp_path / ".github"
    assert github_dir.exists()
    assert (github_dir / ".copilot-instructions.md").is_file()

    config_dir = workspace_path / "config"
    categories_dir = config_dir / "categories"
    utilities_dir = config_dir / "utilities"
    features_dir = config_dir / "features"

    assert categories_dir.exists()
    assert utilities_dir.exists()
    assert features_dir.exists()

    validate_script = features_dir / "validate" / "validate_all.py"
    assert validate_script.is_file()
    script_contents = validate_script.read_text(encoding="utf-8")
    assert "Validate dataset and bridge integrity" in script_contents

    for name, _description in CATEGORIES:
        category_dir = categories_dir / name
        assert category_dir.is_dir()
        dataset = json.loads((category_dir / "dataset.json").read_text(encoding="utf-8"))
        assert dataset["dataset_name"].startswith(name.replace(" ", "").capitalize())
        bridge = json.loads((category_dir / "bridge.json").read_text(encoding="utf-8"))
        assert bridge["bridge_name"].endswith("Bridge")
        resources_readme = category_dir / "resources" / "README.md"
        assert resources_readme.is_file()

    for template_name in ("PeopleDataset", "CompanyDataset", "ApplicationsDataset"):
        template_file = utilities_dir / "template-datasets" / f"{template_name}.json"
        assert template_file.is_file()


def test_validator_script_executes(tmp_path: Path) -> None:
    """Run the generated validator script to confirm it succeeds."""
    workspace_path = generate_workspace(tmp_path)
    validate_script = workspace_path / "config" / "features" / "validate" / "validate_all.py"

    result = subprocess.run(
        [sys.executable, str(validate_script)],
        cwd=tmp_path,
        capture_output=True,
        text=True,
        check=False,
    )

    assert result.returncode == 0, result.stderr
    assert "All bridge and dataset files validated successfully." in result.stdout
