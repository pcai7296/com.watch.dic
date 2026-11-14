#!/usr/bin/env python3
"""
Helper wrapper for `npx astrobox-cli`.

Automatically retries on npm cache conflicts (ENOTEMPTY) that can occur
when multiple npx processes run concurrently.

Usage:
    python run_abcli.py <command> [options...]
"""
import subprocess
import sys
import os
import shutil
import time

NPX_CACHE = os.path.expanduser("~/.npm/_npx")
MAX_RETRIES = 2
RETRY_DELAY = 1.0


def clear_npx_cache():
    """Clear npx's temporary cache to resolve ENOTEMPTY conflicts."""
    if os.path.isdir(NPX_CACHE):
        for entry in os.listdir(NPX_CACHE):
            path = os.path.join(NPX_CACHE, entry)
            try:
                if os.path.isfile(path) or os.path.islink(path):
                    os.unlink(path)
                elif os.path.isdir(path):
                    shutil.rmtree(path, ignore_errors=True)
            except OSError:
                pass


def run_abcli(args: list[str]) -> subprocess.CompletedProcess:
    """Run npx astrobox-cli with the given args, retrying on ENOTEMPTY."""

    cmd = ["npx", "astrobox-cli"] + args

    for attempt in range(1, MAX_RETRIES + 1):
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=60,
        )

        if result.returncode == 0:
            return result

        # Check if this is an npx cache conflict
        stderr_lower = result.stderr.lower()
        if "enotempty" in stderr_lower or "rename" in stderr_lower:
            if attempt < MAX_RETRIES:
                print(
                    f"[run_abcli] npx cache conflict detected, clearing cache "
                    f"and retrying (attempt {attempt}/{MAX_RETRIES})...",
                    file=sys.stderr,
                )
                clear_npx_cache()
                time.sleep(RETRY_DELAY)
                continue

        # Not an ENOTEMPTY error, or out of retries — return as-is
        return result

    return result


def main():
    if len(sys.argv) < 2 or sys.argv[1] in ("--help", "-h"):
        print("Usage: python run_abcli.py <command> [options...]")
        print("")
        print("Wraps `npx astrobox-cli` with automatic retry on npm cache conflicts.")
        sys.exit(0 if sys.argv[1:2] in (["--help"], ["-h"]) else 1)

    args = sys.argv[1:]
    result = run_abcli(args)

    # Forward output
    if result.stdout:
        print(result.stdout, end="")
    if result.stderr:
        print(result.stderr, end="", file=sys.stderr)

    sys.exit(result.returncode)


if __name__ == "__main__":
    main()
