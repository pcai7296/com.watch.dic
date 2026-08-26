#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Benchmark and self-consistency checker for the Vela offline dictionary.

Read-only tool. It does not modify the dictionary, and it only reads files
under the supplied --dict directory.
"""

import argparse
import json
import random
import sys
import time
from pathlib import Path

BASE36_DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz"
BASE64URL_DIGITS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
ASCII_LOWERCASE = "abcdefghijklmnopqrstuvwxyz"

DEFAULT_DICT = "src/common/dict"
DEFAULT_QUERIES = 200
DEFAULT_SEED = 42


# ---------------------------------------------------------------------------
# Decoders (ported from src/common/dictCodec.js)
# ---------------------------------------------------------------------------

def parse_base36(value):
    """Parse a base36 string to int; return -1 on invalid input."""
    if not isinstance(value, str) or not value:
        return -1
    result = 0
    for ch in value:
        digit = BASE36_DIGITS.find(ch)
        if digit < 0:
            return -1
        result = result * 36 + digit
        if result > (1 << 53) - 1:
            return -1
    return result


def decode_front(value, previous):
    """Decode a front-coded token using the previous decoded word.

    The first character is a base36 prefix length (0-35). The remaining
    characters are the suffix.
    """
    if not value or not isinstance(value, str) or previous is None:
        return None
    prefix_length = BASE36_DIGITS.find(value[0])
    if prefix_length < 0 or prefix_length > len(previous):
        return None
    return previous[:prefix_length] + value[1:]


def decode_base64_bytes(value):
    """Decode a base64url string into bytes (JS-compatible bit packing)."""
    if not value or not isinstance(value, str) or len(value) % 4 == 1:
        return None
    if any(ch not in BASE64URL_DIGITS for ch in value):
        return None

    output = []
    accumulator = 0
    bit_count = 0
    for ch in value:
        digit = BASE64URL_DIGITS.index(ch)
        accumulator = accumulator * 64 + digit
        bit_count += 6
        while bit_count >= 8:
            bit_count -= 8
            divisor = 1 << bit_count
            output.append((accumulator // divisor) & 0xFF)
            accumulator %= divisor

    if bit_count > 0 and (accumulator & ((1 << bit_count) - 1)) != 0:
        return None
    return output


def decode_delta_ids(value):
    """Decode base64url -> ULEB128 delta -> strictly increasing ID list.

    Returns [] on any decoding failure, matching the runtime helper.
    """
    raw = decode_base64_bytes(value)
    if not raw:
        return []

    ids = []
    current = 0
    delta = 0
    shift = 0
    for byte in raw:
        payload = byte & 0x7F
        if shift > 53 or (shift == 53 and payload > 1):
            return []
        delta += payload << shift
        if byte & 0x80:
            shift += 7
            continue
        current += delta
        if ids and current <= ids[-1]:
            return []
        ids.append(current)
        delta = 0
        shift = 0

    if shift != 0 or not ids:
        return []
    return ids


# ---------------------------------------------------------------------------
# Small text helpers
# ---------------------------------------------------------------------------

def normalize_word(value):
    return (value or "").strip().lower()


def is_alpha(ch):
    return ch is not None and len(ch) == 1 and "a" <= ch <= "z"


def is_hanzi(ch):
    return ch is not None and len(ch) == 1 and "\u4e00" <= ch <= "\u9fff"


def first_hanzi(value):
    for ch in (value or ""):
        if is_hanzi(ch):
            return ch
    return ""


def pad2_hex(value):
    return "%02x" % value


# ---------------------------------------------------------------------------
# Dictionary reader / query helper
# ---------------------------------------------------------------------------

class Dictionary:
    def __init__(self, root):
        self.root = Path(root)
        self.meta = {}
        self._text_cache = {}
        self._front_cache = {}
        self._zh_cache = {}
        self._cn_cache = {}
        self._inflect_cache = {}
        with open(self.root / "meta.json", "r", encoding="utf-8") as fh:
            self.meta = json.load(fh)

    def rel_path(self, rel):
        if isinstance(rel, Path):
            return rel.as_posix()
        return rel

    def read_text(self, rel):
        rel = self.rel_path(rel)
        if rel not in self._text_cache:
            path = self.root / rel
            try:
                if path.is_file():
                    self._text_cache[rel] = path.read_text(encoding="utf-8", errors="replace")
                else:
                    self._text_cache[rel] = ""
            except OSError:
                self._text_cache[rel] = ""
        return self._text_cache[rel]

    def front_rows(self, rel):
        """Return a list of (decoded_word, remaining_parts) for a front-coded file."""
        rel = self.rel_path(rel)
        if rel not in self._front_cache:
            rows = []
            previous = ""
            for line in self.read_text(rel).splitlines():
                parts = line.split("\t")
                if len(parts) < 2 or not parts[0]:
                    continue
                word = decode_front(parts[0], previous)
                if word is None:
                    continue
                previous = word
                rows.append((word, parts[1:]))
            self._front_cache[rel] = rows
        return self._front_cache[rel]

    def dict_size_mb(self):
        total = 0
        if self.root.is_dir():
            for path in self.root.rglob("*"):
                if path.is_file():
                    try:
                        total += path.stat().st_size
                    except OSError:
                        pass
        return total / (1024.0 * 1024.0)

    # -- English word shards ------------------------------------------------

    def word_shard_key(self, query):
        s = normalize_word(query)
        if not s:
            return ""
        if self.meta.get("wordTwoShards", 0) > 0 and len(s) >= 2 and is_alpha(s[1]):
            return s[:2]
        return s[0]

    def word_shard_path(self, query):
        key = self.word_shard_key(query)
        if not key:
            return ""
        return "words/word_%s.txt" % key

    def english_word_hit(self, query):
        s = normalize_word(query)
        if not s:
            return False
        rel = self.word_shard_path(s)
        if not rel:
            return False
        return any(normalize_word(word) == s for word, _ in self.front_rows(rel))

    def english_prefix_hit(self, prefix):
        p = normalize_word(prefix)
        if not p:
            return False
        rel = self.word_shard_path(p)
        if not rel:
            return False
        return any(normalize_word(word).startswith(p) for word, _ in self.front_rows(rel))

    def english_fuzzy_hit(self, query):
        q = normalize_word(query)
        if len(q) <= 2:
            return False
        # The app scans the first-letter shard first, then all single-letter
        # shards. Single-letter files are guaranteed to exist by the schema.
        ordered = []
        if q and is_alpha(q[0]):
            ordered.append(q[0])
        for letter in ASCII_LOWERCASE:
            if letter not in ordered:
                ordered.append(letter)
        for letter in ordered:
            rel = "words/word_%s.txt" % letter
            for word, _ in self.front_rows(rel):
                w = normalize_word(word)
                if not w or abs(len(w) - len(q)) > 2:
                    continue
                if edit_distance_bounded(q, w, 2) >= 0:
                    return True
        return False

    # -- Chinese single-character index -------------------------------------

    def zh_map(self, bucket):
        if bucket not in self._zh_cache:
            mapping = {}
            rel = "zh_index/zh_%s.txt" % pad2_hex(bucket)
            for line in self.read_text(rel).splitlines():
                parts = line.split("\t")
                if len(parts) < 2:
                    continue
                ch = parts[0]
                if not ch:
                    continue
                mapping[ch] = decode_delta_ids(parts[1])
            self._zh_cache[bucket] = mapping
        return self._zh_cache[bucket]

    def zh_char_hit(self, ch):
        if not is_hanzi(ch):
            return False
        bucket = ord(ch) % 64
        ids = self.zh_map(bucket).get(ch)
        return bool(ids)

    # -- Chinese phrase index ------------------------------------------------

    def cn_map(self, bucket):
        if bucket not in self._cn_cache:
            mapping = {}
            rel = "cn_index/cn_%s.txt" % pad2_hex(bucket)
            previous = ""
            for line in self.read_text(rel).splitlines():
                parts = line.split("\t")
                if len(parts) < 2 or not parts[0]:
                    continue
                phrase = decode_front(parts[0], previous)
                if phrase is None:
                    continue
                previous = phrase
                mapping[phrase] = decode_delta_ids(parts[1])
            self._cn_cache[bucket] = mapping
        return self._cn_cache[bucket]

    def cn_phrase_hit(self, phrase):
        ch = first_hanzi(phrase)
        if ch:
            bucket = ord(ch) % 96
            ids = self.cn_map(bucket).get(phrase)
            if ids:
                return True
            # Legacy rows can start with non-Hanzi annotation characters
            # (e.g. "(船)过闸") and were written by the generator to the
            # bucket of their first character, not their first Hanzi. Fall
            # back to that bucket so all parsed phrases remain addressable.
            if not is_hanzi(phrase[0]):
                return bool(self.cn_map(ord(phrase[0]) % 96).get(phrase))
        return False

    # -- Inflection index ----------------------------------------------------

    def inflect_rows(self, letter):
        letter = letter.lower()
        if letter not in self._inflect_cache:
            rel = "inflect/inflect_%s.txt" % letter
            self._inflect_cache[letter] = self.front_rows(rel)
        return self._inflect_cache[letter]

    def inflect_form_hit(self, form):
        f = normalize_word(form)
        if not f or not is_alpha(f[0]):
            return False
        return any(normalize_word(word) == f for word, _ in self.inflect_rows(f[0]))

    def inflect_bench_hit(self, form):
        if self.inflect_form_hit(form):
            return True
        # A form can also count as a hit when the form itself exists as a
        # dictionary headword ("hit base word").
        return self.english_word_hit(form)

    # -- Full set builders ---------------------------------------------------

    def all_words_from_entries(self):
        words = set()
        entries_dir = self.root / "entries"
        if not entries_dir.is_dir():
            return words
        for path in sorted(entries_dir.glob("entry_*.txt")):
            rel = path.relative_to(self.root).as_posix()
            for word, _ in self.front_rows(rel):
                w = normalize_word(word)
                if w:
                    words.add(w)
        return words

    def all_zh_chars(self):
        chars = set()
        zh_dir = self.root / "zh_index"
        if not zh_dir.is_dir():
            return chars
        for bucket in range(64):
            rel = "zh_index/zh_%s.txt" % pad2_hex(bucket)
            for line in self.read_text(rel).splitlines():
                parts = line.split("\t")
                if len(parts) >= 1 and parts[0]:
                    chars.add(parts[0])
        return chars

    def all_cn_phrases(self):
        phrases = set()
        cn_dir = self.root / "cn_index"
        if not cn_dir.is_dir():
            return phrases
        for bucket in range(96):
            rel = "cn_index/cn_%s.txt" % pad2_hex(bucket)
            previous = ""
            for line in self.read_text(rel).splitlines():
                parts = line.split("\t")
                if len(parts) < 2 or not parts[0]:
                    continue
                phrase = decode_front(parts[0], previous)
                if phrase is None:
                    continue
                previous = phrase
                if phrase:
                    phrases.add(phrase)
        return phrases

    def all_inflect_forms(self):
        forms = set()
        inflect_dir = self.root / "inflect"
        if not inflect_dir.is_dir():
            return forms
        for letter in ASCII_LOWERCASE:
            rel = "inflect/inflect_%s.txt" % letter
            for word, _ in self.front_rows(rel):
                w = normalize_word(word)
                if w:
                    forms.add(w)
        return forms

    def has_cn_index_data(self):
        cn_dir = self.root / "cn_index"
        if not cn_dir.is_dir():
            return False
        return any(path.is_file() and path.stat().st_size > 0 for path in cn_dir.glob("cn_*.txt"))


# ---------------------------------------------------------------------------
# Edit distance (bounded)
# ---------------------------------------------------------------------------

def edit_distance_bounded(left, right, limit):
    a = left
    b = right
    if abs(len(a) - len(b)) > limit:
        return -1
    previous = list(range(len(b) + 1))
    for i in range(1, len(a) + 1):
        current = [i]
        row_min = i
        for j in range(1, len(b) + 1):
            cost = 0 if a[i - 1] == b[j - 1] else 1
            value = min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost)
            current.append(value)
            if value < row_min:
                row_min = value
        if row_min > limit:
            return -1
        previous = current
    result = previous[-1]
    return result if result <= limit else -1


# ---------------------------------------------------------------------------
# Benchmark / consistency helpers
# ---------------------------------------------------------------------------

def run_consistency_check(label, items, limit, checker, error_prefix, rng):
    """Sample `limit` items and require checker(item) to be True."""
    ordered = sorted(items)
    sample = rng.sample(ordered, min(limit, len(ordered))) if ordered else []
    errors = []
    for item in sample:
        if not checker(item):
            errors.append(item)
            print("ERROR: %s%s" % (error_prefix, item))
    ok = len(errors) == 0
    print("自一致性 [%s]: %s (%d/%d 命中, %d 错误)"
          % (label, "PASS" if ok else "FAIL", len(sample) - len(errors), len(sample), len(errors)))
    return ok, len(errors)


def bench_scenario(name, queries, hit_func):
    rows = []
    for q in queries:
        start = time.perf_counter()
        hit = bool(hit_func(q))
        elapsed_ms = (time.perf_counter() - start) * 1000.0
        rows.append((q, hit, elapsed_ms))
        print("  %-6s %-12s %-4s %10.3f ms" % (name, q, "hit" if hit else "miss", elapsed_ms))
    return rows


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    # Force UTF-8 output on Windows terminals/Git Bash.
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    if hasattr(sys.stderr, "reconfigure"):
        sys.stderr.reconfigure(encoding="utf-8")

    parser = argparse.ArgumentParser(description="Benchmark and self-check the offline dictionary.")
    parser.add_argument("--dict", default=DEFAULT_DICT, help="Dictionary directory (default: %(default)s)")
    parser.add_argument("--queries", type=int, default=DEFAULT_QUERIES,
                        help="Number of random English word self-consistency queries (default: %(default)s)")
    parser.add_argument("--seed", type=int, default=DEFAULT_SEED, help="Random seed (default: %(default)s)")
    args = parser.parse_args()

    rng = random.Random(args.seed)
    dict_root = Path(args.dict)
    if not (dict_root / "meta.json").is_file():
        print("FATAL: no meta.json in %s" % dict_root, file=sys.stderr)
        return 2

    d = Dictionary(dict_root)
    meta = d.meta
    word_count = meta.get("wordCount", meta.get("headwords", "?"))
    print("字典目录: %s" % dict_root)
    print("profile  : %s" % meta.get("profile", "?"))
    print("wordCount: %s" % word_count)
    print("dict_size_mb: %.2f" % d.dict_size_mb())
    print("wordTwoShards=%s, wordHeadShards=%s, cnIndexMode=%s, cnIndexPhrases=%s"
          % (meta.get("wordTwoShards", 0), meta.get("wordHeadShards", 0),
             meta.get("cnIndexMode", "?"), meta.get("cnIndexPhrases", 0)))
    print()

    # Build correctness baselines.
    all_words = d.all_words_from_entries()
    all_zh_chars = d.all_zh_chars()
    all_cn_phrases = d.all_cn_phrases()
    all_inflect_forms = d.all_inflect_forms()
    print("基准集合: words=%d, zh_chars=%d, cn_phrases=%d, inflect_forms=%d"
          % (len(all_words), len(all_zh_chars), len(all_cn_phrases), len(all_inflect_forms)))
    print()

    consistency_results = []

    # English words
    ok, errs = run_consistency_check(
        "英文词", all_words, args.queries,
        d.english_word_hit, "word_exists_but_index_miss ", rng)
    consistency_results.append(("英文词", ok, errs))

    # Chinese single characters
    ok, errs = run_consistency_check(
        "中文单字", all_zh_chars, 100,
        d.zh_char_hit, "zh_char_exists_but_index_miss ", rng)
    consistency_results.append(("中文单字", ok, errs))

    # Chinese phrases (skip only when core mode has no phrase index data)
    cn_skip = meta.get("cnIndexMode") == "core" and not d.has_cn_index_data()
    if cn_skip:
        print("自一致性 [中文短语]: SKIP (cnIndexMode=core 且 cn_index 为空)")
        consistency_results.append(("中文短语", True, 0))
    else:
        ok, errs = run_consistency_check(
            "中文短语", all_cn_phrases, 100,
            d.cn_phrase_hit, "cn_phrase_exists_but_index_miss ", rng)
        consistency_results.append(("中文短语", ok, errs))

    # Inflections
    ok, errs = run_consistency_check(
        "变形", all_inflect_forms, 50,
        d.inflect_form_hit, "inflect_form_exists_but_index_miss ", rng)
    consistency_results.append(("变形", ok, errs))

    print()
    print("查询场景基准:")
    all_bench_rows = []
    all_bench_rows += bench_scenario("英文精确",
        ["apple", "run", "book", "water", "school", "algorithm", "environment", "the", "an", "data"],
        d.english_word_hit)
    all_bench_rows += bench_scenario("英文前缀",
        ["app", "compu", "inte", "str", "rea", "wor"],
        d.english_prefix_hit)
    all_bench_rows += bench_scenario("英文模糊",
        ["appel", "wter", "algoritm", "recieve", "enviroment"],
        d.english_fuzzy_hit)
    all_bench_rows += bench_scenario("中文单字",
        ["中", "国", "人", "水", "爱", "学", "大", "一"],
        d.zh_char_hit)
    all_bench_rows += bench_scenario("中文短语",
        ["中国", "人民", "我们", "社会", "手机", "天气", "学习", "工作"],
        d.cn_phrase_hit)
    all_bench_rows += bench_scenario("变形",
        ["ran", "better", "went", "bought", "running"],
        d.inflect_bench_hit)

    total_ms = sum(row[2] for row in all_bench_rows)
    avg_ms = total_ms / len(all_bench_rows) if all_bench_rows else 0.0
    print()
    print("基准总耗时: %.3f ms" % total_ms)
    print("基准平均耗时: %.3f ms" % avg_ms)

    print()
    print("汇总:")
    print("profile=%s, wordCount=%s, dict_size_mb=%.2f" % (meta.get("profile", "?"), word_count, d.dict_size_mb()))
    for label, ok, errs in consistency_results:
        print("自一致性 %-6s: %s (%d 错误)" % (label, "PASS" if ok else "FAIL", errs))
    print("基准查询总耗时: %.3f ms, 平均耗时: %.3f ms" % (total_ms, avg_ms))

    failed = any(not ok for _, ok, _ in consistency_results)
    print()
    print("RESULT: %s" % ("FAIL" if failed else "PASS"))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
