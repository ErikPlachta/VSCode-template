"""my_work_assistant.utils.io

Small I/O helpers wrapping filesystem operations.
"""
from __future__ import annotations

from pathlib import Path

__all__ = ["read_text", "write_text"]


def read_text(path: Path) -> str:
    """Read text from a file.

    Args:
        path: Path to the file.

    Returns:
        The decoded string.

    Example:
        >>> write_text(Path('tmp.txt'), 'value')
        >>> read_text(Path('tmp.txt'))
        'value'
    """

    return path.read_text(encoding="utf-8")


def write_text(path: Path, content: str) -> None:
    """Write text to a file.

    Args:
        path: Destination path.
        content: Content to write.

    Example:
        >>> write_text(Path('tmp.txt'), 'value')
    """

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
