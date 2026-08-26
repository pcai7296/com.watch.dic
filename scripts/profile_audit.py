#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Audit the generated watch dictionary.

Read-only tool: prints a report about a generated dictionary under
src/common/dict (or another --dict directory). It never writes to the
dictionary directory.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

# Keep console output UTF-8 on Windows so the report is not mangled by cp936.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8")

BASE36 = "0123456789abcdefghijklmnopqrstuvwxyz"

SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parent
DEFAULT_DICT = REPO_ROOT / "src" / "common" / "dict"
DEFAULT_FIXTURES = REPO_ROOT / "tests" / "fixtures" / "dict_coverage"

LETTER_RE = re.compile(r"^word_([a-z])\.txt$")
TWO_RE = re.compile(r"^word_([a-z]{2})\.txt$")
HEAD_RE = re.compile(r"^word_([a-z])_head\.txt$")


def decode_front_code(value: str, previous: str) -> str | None:
    """Decode one base36 front-coded field."""
    if not value or value[0] not in BASE36:
        return None
    prefix_len = int(value[0], 36)
    if prefix_len > len(previous):
        return None
    return previous[:prefix_len] + value[1:]


def read_json(path: Path):
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def human_mb(num_bytes: int) -> float:
    return num_bytes / 1024 / 1024


def load_meta(dict_dir: Path) -> dict:
    meta_path = dict_dir / "meta.json"
    if not meta_path.exists():
        raise FileNotFoundError(f"meta.json not found: {meta_path}")
    data = read_json(meta_path)
    if not isinstance(data, dict):
        raise ValueError(f"meta.json is not a JSON object: {meta_path}")
    return data


def collect_sizes(dict_dir: Path) -> tuple[int, dict[str, int]]:
    """Return (total_bytes, category_bytes)."""
    categories = {
        "words": 0,
        "entries": 0,
        "cn_index": 0,
        "zh_index": 0,
        "inflect": 0,
        "inflect_reverse": 0,
        "meta": 0,
        "other": 0,
    }
    total = 0
    if dict_dir.exists():
        for path in dict_dir.rglob("*"):
            if not path.is_file():
                continue
            size = path.stat().st_size
            total += size
            rel = path.relative_to(dict_dir)
            parent = rel.parent.name
            if parent == "words":
                categories["words"] += size
            elif parent == "entries":
                categories["entries"] += size
            elif parent == "cn_index":
                categories["cn_index"] += size
            elif parent == "zh_index":
                categories["zh_index"] += size
            elif parent == "inflect":
                categories["inflect"] += size
            elif parent == "inflect_reverse":
                categories["inflect_reverse"] += size
            elif rel.name == "meta.json":
                categories["meta"] += size
            else:
                categories["other"] += size
    return total, categories


def expected_word_files(letter_count: int, two_count: int, head_count: int) -> set[str]:
    expected: set[str] = set()
    letters = "abcdefghijklmnopqrstuvwxyz"
    if letter_count > 0:
        expected.update(f"word_{c}.txt" for c in letters)
    if two_count > 0:
        expected.update(
            f"word_{a}{b}.txt"
            for a in letters
            for b in letters
        )
    if head_count > 0:
        expected.update(f"word_{c}_head.txt" for c in letters)
    return expected


def audit_shards(dict_dir: Path, meta: dict) -> tuple[list[str], list[str]]:
    """Return (error_lines, info_lines)."""
    words_dir = dict_dir / "words"
    letter_actual = set()
    two_actual = set()
    head_actual = set()
    all_actual = set()
    if words_dir.exists():
        for path in words_dir.iterdir():
            name = path.name
            if not path.is_file() or not name.endswith(".txt"):
                continue
            all_actual.add(name)
            m = LETTER_RE.match(name)
            if m:
                letter_actual.add(name)
                continue
            m = HEAD_RE.match(name)
            if m:
                head_actual.add(name)
                continue
            m = TWO_RE.match(name)
            if m:
                two_actual.add(name)

    letter_expected = int(meta.get("wordLetterShards", 0) or 0)
    two_expected = int(meta.get("wordTwoShards", 0) or 0)
    head_expected = int(meta.get("wordHeadShards", 0) or 0)

    expected = expected_word_files(letter_expected, two_expected, head_expected)
    actual_counts = {
        "wordLetterShards": len(letter_actual),
        "wordTwoShards": len(two_actual),
        "wordHeadShards": len(head_actual),
    }
    expected_counts = {
        "wordLetterShards": letter_expected,
        "wordTwoShards": two_expected,
        "wordHeadShards": head_expected,
    }

    errors: list[str] = []
    for key in ("wordLetterShards", "wordTwoShards", "wordHeadShards"):
        exp = expected_counts[key]
        act = actual_counts[key]
        if exp != act:
            errors.append(
                f"ERROR: meta {key} expects {exp} files, found {act} files"
            )

    missing = sorted(expected - all_actual)
    extra = sorted(all_actual - expected)

    if errors:
        if missing:
            errors.append("  missing examples: " + ", ".join(missing[:10]))
        if extra:
            errors.append("  extra examples: " + ", ".join(extra[:10]))
        for key in ("wordLetterShards", "wordTwoShards", "wordHeadShards"):
            if expected_counts[key] != actual_counts[key]:
                errors.append(
                    f"  {key}: expected {expected_counts[key]}, found {actual_counts[key]}"
                )

    info = [
        "分片完整性校验:",
        f"  wordLetterShards: expected={letter_expected}, found={len(letter_actual)}",
        f"  wordTwoShards: expected={two_expected}, found={len(two_actual)}",
        f"  wordHeadShards: expected={head_expected}, found={len(head_actual)}",
        f"  meta.wordShards={meta.get('wordShards', '?')}",
    ]
    return errors, info


def load_word_set(dict_dir: Path) -> set[str]:
    words_dir = dict_dir / "words"
    words: set[str] = set()
    if not words_dir.exists():
        return words
    for path in sorted(words_dir.glob("word_*.txt")):
        previous = ""
        try:
            with path.open("r", encoding="utf-8") as fh:
                for raw in fh:
                    line = raw.strip()
                    if not line:
                        continue
                    field = line.split("\t", 1)[0]
                    word = decode_front_code(field, previous)
                    if word is None:
                        continue
                    words.add(word)
                    previous = word
        except OSError as exc:
            print(f"WARNING: cannot read {path}: {exc}", file=sys.stderr)
    return words


def load_zh_chars(dict_dir: Path) -> set[str]:
    zh_dir = dict_dir / "zh_index"
    chars: set[str] = set()
    if not zh_dir.exists():
        return chars
    for path in sorted(zh_dir.glob("zh_*.txt")):
        try:
            with path.open("r", encoding="utf-8") as fh:
                for raw in fh:
                    line = raw.strip()
                    if not line:
                        continue
                    first = line.split("\t", 1)[0]
                    if first:
                        chars.add(first)
        except OSError as exc:
            print(f"WARNING: cannot read {path}: {exc}", file=sys.stderr)
    return chars


def load_cn_phrases(dict_dir: Path) -> set[str]:
    cn_dir = dict_dir / "cn_index"
    phrases: set[str] = set()
    if not cn_dir.exists():
        return phrases
    for path in sorted(cn_dir.glob("cn_*.txt")):
        previous = ""
        try:
            with path.open("r", encoding="utf-8") as fh:
                for raw in fh:
                    line = raw.strip()
                    if not line:
                        continue
                    field = line.split("\t", 1)[0]
                    phrase = decode_front_code(field, previous)
                    if phrase is None:
                        continue
                    phrases.add(phrase)
                    previous = phrase
        except OSError as exc:
            print(f"WARNING: cannot read {path}: {exc}", file=sys.stderr)
    return phrases


def coverage_for_file(
    fixture_path: Path,
    english_words: set[str],
    zh_chars: set[str],
    cn_phrases: set[str],
) -> tuple[str, int, int, list[str]] | None:
    name = fixture_path.name
    try:
        items = read_json(fixture_path)
    except Exception as exc:  # noqa: BLE001 - report malformed fixture gracefully
        print(f"WARNING: cannot read fixture {fixture_path}: {exc}", file=sys.stderr)
        return None
    if not isinstance(items, list) or not all(isinstance(x, str) for x in items):
        print(
            f"WARNING: fixture {fixture_path} is not a string array; skipped",
            file=sys.stderr,
        )
        return None

    lower = name.lower()
    if lower.startswith("english"):
        pool = english_words
    elif "chinese" in lower and "char" in lower:
        pool = zh_chars
    elif "chinese" in lower and "word" in lower:
        pool = cn_phrases
    else:
        print(f"WARNING: unknown fixture kind: {fixture_path.name}; skipped", file=sys.stderr)
        return None

    found = [x for x in items if x in pool]
    missing = [x for x in items if x not in pool]
    return name, len(found), len(items), missing


def audit_coverage(
    fixtures_dir: Path,
    english_words: set[str],
    zh_chars: set[str],
    cn_phrases: set[str],
) -> list[str]:
    lines = ["覆盖率统计:"]
    if not fixtures_dir.exists():
        lines.append(f"  --fixtures 不存在，跳过: {fixtures_dir}")
        return lines
    fixture_paths = sorted(fixtures_dir.glob("*.json"))
    if not fixture_paths:
        lines.append("  fixtures 目录中没有 .json 文件，跳过")
        return lines
    for path in fixture_paths:
        result = coverage_for_file(path, english_words, zh_chars, cn_phrases)
        if result is None:
            continue
        name, found, total, missing = result
        pct = (found / total * 100.0) if total else 100.0
        lines.append(f"  {name}: {found}/{total} ({pct:.2f}%)")
        if missing:
            lines.append("    缺失样本（最多 10 个）: " + ", ".join(missing[:10]))
    return lines


def audit_size(
    meta: dict,
    total_bytes: int,
    target_lite: float,
    target_standard: float,
    tolerance: float,
) -> tuple[str, list[str]]:
    profile = meta.get("profile", "")
    size_mb = human_mb(total_bytes)
    lines = ["档位体积判定:"]
    if profile not in ("lite", "standard"):
        lines.append(f"  profile='{profile}'，不参与体积档位判定")
        return "SKIP", lines

    target = target_lite if profile == "lite" else target_standard
    limit = target + tolerance
    lines.append(
        f"  profile={profile}, dict size={size_mb:.3f} MB, "
        f"target={target:.1f} MB, tolerance={tolerance:.1f} MB"
    )
    if size_mb <= target:
        status = "PASS"
    elif size_mb <= limit:
        status = "WARNING"
    else:
        status = "FAIL"
    lines.append(f"  {status}")
    return status, lines


def main() -> int:
    parser = argparse.ArgumentParser(description="Audit generated watch dictionary")
    parser.add_argument("--dict", default=str(DEFAULT_DICT), help="dictionary directory (default: src/common/dict)")
    parser.add_argument("--fixtures", default=str(DEFAULT_FIXTURES), help="coverage fixture directory")
    parser.add_argument("--target-lite", type=float, default=4.0, help="lite size target in MB")
    parser.add_argument("--target-standard", type=float, default=8.0, help="standard size target in MB")
    parser.add_argument("--tolerance", type=float, default=0.5, help="size tolerance in MB")
    args = parser.parse_args()

    dict_dir = Path(args.dict)
    fixtures_dir = Path(args.fixtures)

    try:
        meta = load_meta(dict_dir)
    except Exception as exc:  # noqa: BLE001
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1

    total_bytes, category_bytes = collect_sizes(dict_dir)

    print("===== 基础事实 =====")
    word_count = meta.get("wordCount", meta.get("headwords", meta.get("wordIndexEntries", "?")))
    print(f"  profile: {meta.get('profile', '?')}")
    print(f"  wordCount: {word_count}")
    print(f"  wordShards: {meta.get('wordShards', '?')}")
    print(
        "  分解: "
        f"wordLetterShards={meta.get('wordLetterShards', '?')}, "
        f"wordTwoShards={meta.get('wordTwoShards', '?')}, "
        f"wordHeadShards={meta.get('wordHeadShards', '?')}"
    )
    print(f"  cnIndexMode: {meta.get('cnIndexMode', '?')}")
    print(f"  cnIndexPhrases: {meta.get('cnIndexPhrases', '?')}")
    print(f"  dict 原始总字节: {total_bytes} ({human_mb(total_bytes):.3f} MB)")

    print("\n===== 体积占比 =====")
    if total_bytes:
        for key in ("words", "entries", "cn_index", "zh_index", "inflect", "inflect_reverse", "meta", "other"):
            size = category_bytes.get(key, 0)
            pct = size / total_bytes * 100.0
            print(f"  {key:16s} {size:>10d} bytes  {pct:6.2f}%")
    else:
        print("  (empty dict directory)")

    print("\n===== 分片完整性校验 =====")
    shard_errors, shard_info = audit_shards(dict_dir, meta)
    for line in shard_info:
        print(line)
    if shard_errors:
        for line in shard_errors:
            print(line)

    print("\n===== 覆盖率统计 =====")
    english_words = load_word_set(dict_dir)
    zh_chars = load_zh_chars(dict_dir)
    cn_phrases = load_cn_phrases(dict_dir)
    for line in audit_coverage(fixtures_dir, english_words, zh_chars, cn_phrases):
        print(line)

    print("\n===== 档位体积判定 =====")
    size_status, size_lines = audit_size(meta, total_bytes, args.target_lite, args.target_standard, args.tolerance)
    for line in size_lines:
        print(line)

    has_error = bool(shard_errors) or size_status == "FAIL"
    return 1 if has_error else 0


if __name__ == "__main__":
    sys.exit(main())
