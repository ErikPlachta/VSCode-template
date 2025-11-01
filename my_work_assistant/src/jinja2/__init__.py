"""jinja2

Minimal Template stub used for rendering placeholders.
"""
from __future__ import annotations

__all__ = ["Template"]


class Template:
    """Simple string formatting template."""

    def __init__(self, text: str) -> None:
        self.text = text

    def render(self, **context: str) -> str:
        result = self.text
        for key, value in context.items():
            result = result.replace(f"{{{{ {key} }}}}", str(value))
        return result
