#!/bin/zsh
# Serve the course locally so every browser loads shared assets consistently.
set -e

course_dir=${0:A:h}
port=8765

if ! lsof -tiTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
  python3 -m http.server "$port" --bind 127.0.0.1 --directory "$course_dir" >/dev/null 2>&1 &
  sleep 1
fi

open "http://127.0.0.1:$port/lessons/0001-writing-as-deliberate-choice.html"
