"""my_work_assistant.tests.test_docs_typing

Verify docstrings and type hints across key modules.
"""
from __future__ import annotations

import inspect
from typing import get_type_hints

import pytest

MODULES = [
    "my_work_assistant.core.config",
    "my_work_assistant.github_manager.builder",
    "my_work_assistant.services.bridges",
]


@pytest.mark.docstring
def test_modules_have_docstrings() -> None:
    """All targeted modules expose docstrings."""

    for module_name in MODULES:
        module = __import__(module_name, fromlist=["*"])
        assert inspect.getdoc(module)


@pytest.mark.typing
def test_functions_have_type_hints() -> None:
    """Public functions provide typing metadata."""

    for module_name in MODULES:
        module = __import__(module_name, fromlist=["*"])
        for name, func in inspect.getmembers(module, inspect.isfunction):
            if name.startswith("_"):
                continue
            hints = get_type_hints(func)
            assert hints
