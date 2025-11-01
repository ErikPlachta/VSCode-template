# Documentation System

There are two documentation paths:

1. Static docs bundled with the package (this folder) copied on `init`.
2. A generated `api_reference.md` created from module docstrings.

## Generated docs

- Generation runs automatically at the end of `init`.
- Source: module docstrings for packages: `core`, `github_manager`, `services`.
- Content: module summaries, public function signatures, and class summaries.
- Output: `.my_work_assistant/docs/api_reference.md`.

To regenerate manually:

```python
from my_work_assistant.docs import generate_docs
generate_docs()  # returns Path to the file
```

## Improve doc quality

- Add/expand module docstrings. The generator uses the first paragraph as a summary.
- Add function/class docstrings; summaries appear in the reference list.
- Ruff enforces pydocstyle (Google style) with helpful checks.
