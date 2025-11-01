"""my_work_assistant.tests.test_manifest

Validate manifest structure produced by Github Manager constants.
"""

from __future__ import annotations

from my_work_assistant.github_manager.constants import build_manifest


def test_build_manifest_structure() -> None:
    """Manifest contains expected top-level keys and entries with fields."""
    manifest = build_manifest()
    assert isinstance(manifest, dict)
    # Top-level keys
    assert "instructions" in manifest
    assert "prompts" in manifest
    assert "chatmodes" in manifest

    # Each entry should have required fields
    for section in ("instructions", "prompts", "chatmodes"):
        for item in manifest.get(section, []):
            assert "target" in item
            assert "template" in item
            assert "schema" in item
            assert "enabled" in item
            assert "exists" in item
