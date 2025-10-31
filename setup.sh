#!/usr/bin/env bash
set -euo pipefail

python install-github-copilot-instructions-work.py "$@"
python .github/copilot-instructions-work/config/features/validate/validate_all.py
