"""
extract_cedict_phrases.py — Mine English multi-word phrases from CC-CEDICT glosses.

CC-CEDICT is Chinese-keyed: each line is `Trad Simp [pin] /en gloss1/en gloss2/`.
There are no English headwords; the English lives in the glosses. We reverse-extract:
for each multi-word English gloss, map it to its Chinese headword (Simp), producing
valid English-phrase -> Chinese pairs (e.g. "a little bit" -> 一点).

Output:
  data/phrases_cedict.csv  — only the newly extracted phrases (reviewable artifact)
  data/phrases.csv          — idempotent merge (append new rows, dedupe against
                              existing phrases + ECDICT headwords)

Regenerate the dictionary after running:
  python scripts/generate_watch_dict.py
"""
import csv
import gzip
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CEDICT = ROOT / "data" / "cedict.txt.gz"
ECDICT = ROOT / "data" / "ecdict_tagged_14942_compact.csv"
PHRASES = ROOT / "data" / "phrases.csv"
PHRASES_CEDICT = ROOT / "data" / "phrases_cedict.csv"

CJK = re.compile(r"[\u4e00-\u9fff]")
# clean multi-word English phrase: letters, spaces, hyphen, apostrophe
PHRASE_RE = re.compile(r"^[a-zA-Z][a-zA-Z \-']*[a-zA-Z]$")
BLACKLIST = {
    "see", "also", "variant", "etc", "fig", "lit", "archaic", "colloq",
    "slang", "dialect", "usu", "esp", "equivalent", "prefix", "suffix",
    "comb", "form", "particle", "abbr", "sth", "sb", "ie", "eg", "vs",
}
MIN_WORDS, MAX_WORDS = 2, 5
MIN_LEN, MAX_LEN = 3, 40


def load_ecdict_words():
    words = set()
    if not ECDICT.exists():
        return words
    with ECDICT.open("r", encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            w = (row.get("word") or "").strip().lower()
            if w:
                words.add(w)
    return words


def load_existing_phrases():
    words = set()
    rows = []
    if PHRASES.exists():
        with PHRASES.open("r", encoding="utf-8", newline="") as f:
            for row in csv.DictReader(f):
                w = (row.get("word") or "").strip().lower()
                if w:
                    words.add(w)
                rows.append(row)
    return words, rows


def extract():
    ecdict_words = load_ecdict_words()
    existing_words, existing_rows = load_existing_phrases()

    phrase_to_cn = {}  # lower phrase -> chinese headword

    with gzip.open(str(CEDICT), "rt", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            bracket = line.find("[")
            slash = line.find("/")
            if bracket < 0 or slash < 0:
                continue
            trad_simp = line[:bracket].strip().split()
            if len(trad_simp) < 2:
                continue
            simp = trad_simp[1]
            cn = "".join(CJK.findall(simp))
            if len(cn) < 2:
                continue
            english = line[slash:]
            meanings = [m.strip() for m in english.split("/") if m.strip()]
            for meaning in meanings:
                cleaned = re.sub(r"\([^)]*\)", "", meaning)
                cleaned = re.sub(r"CL:[^/]+", "", cleaned)
                cleaned = cleaned.strip().lower()
                if not (MIN_WORDS <= len(cleaned.split()) <= MAX_WORDS):
                    continue
                if not (MIN_LEN <= len(cleaned) <= MAX_LEN):
                    continue
                if not PHRASE_RE.match(cleaned):
                    continue
                if any(tok in BLACKLIST for tok in cleaned.split()):
                    continue
                if cleaned in ecdict_words or cleaned in existing_words:
                    continue
                if cleaned in phrase_to_cn:
                    continue
                phrase_to_cn[cleaned] = simp

    new_rows = [
        {"word": p, "translation": phrase_to_cn[p], "tag": "cedict"}
        for p in sorted(phrase_to_cn)
    ]

    with PHRASES_CEDICT.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["word", "translation", "tag"])
        w.writeheader()
        w.writerows(new_rows)

    merged = list(existing_rows)
    merged_set = set(existing_words)
    added = 0
    for r in new_rows:
        if r["word"].lower() not in merged_set:
            merged.append(r)
            merged_set.add(r["word"].lower())
            added += 1

    with PHRASES.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["word", "translation", "tag"])
        w.writeheader()
        w.writerows(merged)

    print(f"[extract] candidates from CC-CEDICT: {len(phrase_to_cn)}")
    print(f"[extract] wrote {len(new_rows)} rows -> {PHRASES_CEDICT.name}")
    print(f"[extract] merged +{added} new rows into {PHRASES.name} (now {len(merged)} total)")


if __name__ == "__main__":
    extract()
