"""
filter_phrases.py — Tighten CC-CEDICT mined phrases.

CC-CEDICT glosses for a single Chinese word often include an English
"a/the/some + noun" wrapper (e.g. 男儿 -> "a man", 书 -> "the book").
Mined as 2-word phrases these are noise that pollutes search. This script
drops exactly those 2-word fragments from the CC-CEDICT extraction while
leaving the curated seed (rows in phrases.csv NOT present in
phrases_cedict.csv) and all real compounds / verb phrases / 3+ word
phrases untouched.

Idempotent: safe to re-run.
"""
import csv
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PHRASES = ROOT / "data" / "phrases.csv"
PHRASES_CEDICT = ROOT / "data" / "phrases_cedict.csv"

# mirror of DROP_FIRST in extract_cedict_phrases.py
DROP_FIRST = {"a", "an", "the", "some"}


def read_rows(path):
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def main():
    cedict_rows = read_rows(PHRASES_CEDICT)
    phrases_rows = read_rows(PHRASES)

    cedict_words = {(r.get("word") or "").strip().lower() for r in cedict_rows}
    # curated seed = phrases rows that are NOT part of the CC-CEDICT extraction
    seed = [r for r in phrases_rows if (r.get("word") or "").strip().lower() not in cedict_words]

    def is_noise(r):
        w = (r.get("word") or "").strip().lower()
        toks = w.split()
        return len(toks) == 2 and toks[0] in DROP_FIRST

    kept = [r for r in cedict_rows if not is_noise(r)]
    dropped = [r for r in cedict_rows if is_noise(r)]

    cnt = Counter(r["word"].split()[0] for r in dropped)
    print("[filter] dropped 2-word fragments by first token:")
    for t, c in cnt.most_common(12):
        print(f"           {t}: {c}")
    print(f"[filter] seed rows preserved : {len(seed)}")
    print(f"[filter] extracted {len(cedict_rows)} -> kept {len(kept)} (dropped {len(dropped)})")

    merged = seed + kept
    with PHRASES.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["word", "translation", "tag"])
        w.writeheader()
        w.writerows(merged)
    with PHRASES_CEDICT.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["word", "translation", "tag"])
        w.writeheader()
        w.writerows(kept)
    print(f"[filter] wrote phrases.csv ({len(merged)} total) + phrases_cedict.csv ({len(kept)})")


if __name__ == "__main__":
    main()
