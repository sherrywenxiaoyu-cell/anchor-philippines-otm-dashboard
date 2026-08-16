#!/bin/zsh
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR" || exit 1
if command -v python3 >/dev/null 2>&1; then
  exec python3 server.py
fi
echo "Python 3 was not found. Please double-click index.html instead."
read -r "?Press Return to close."
