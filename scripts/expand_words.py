import csv
import gzip
import re
import sys
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

sys.path.insert(0, str(Path(__file__).resolve().parent))
from generate_watch_dict import CC_STOP_WORDS

ROOT = Path(__file__).resolve().parents[1]
ECDICT = ROOT / "data" / "ecdict_tagged_14942_compact.csv"
WORD_FAMILY = ROOT / "data" / "bnc_coca_word_family_lists_v2.xlsx"
CCEDICT = ROOT / "data" / "cedict.txt.gz"
OUT = ROOT / "data" / "words_ccedict.csv"
TOP = 35000
XLSX_NS = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def load_freq():
    freq = {}
    with ZipFile(WORD_FAMILY) as z:
        shared = []
        if "xl/sharedStrings.xml" in z.namelist():
            r = ET.fromstring(z.read("xl/sharedStrings.xml"))
            for si in r.findall("a:si", XLSX_NS):
                shared.append("".join(t.text or "" for t in si.findall(".//a:t", XLSX_NS)))
        r = ET.fromstring(z.read("xl/worksheets/sheet1.xml"))
        for row in r.findall(".//a:row", XLSX_NS):
            v = {}
            for c in row.findall("a:c", XLSX_NS):
                ref = c.attrib.get("r", "")
                col = re.sub(r"[^A-Z]", "", ref)
                kind = c.attrib.get("t", "")
                nd = c.find("a:v", XLSX_NS)
                raw = nd.text if nd is not None and nd.text else ""
                if kind == "s" and raw:
                    raw = shared[int(raw)]
                v[col] = raw
            h = (v.get("B") or "").strip().lower()
            if h:
                try:
                    freq[h] = int(v.get("D") or 0)
                except ValueError:
                    freq[h] = 0
    return freq


def main():
    freq = load_freq()
    print(f"[freq] BNC/COCA headwords: {len(freq)}")

    ec = set()
    with ECDICT.open(encoding="utf-8", newline="") as f:
        for row in csv.DictReader(f):
            w = (row.get("word") or "").strip().lower()
            if w:
                ec.add(w)
    print(f"[ecdict] existing words: {len(ec)}")

    cands = {}
    with gzip.open(CCEDICT, "rt", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            b = line.find("[")
            s = line.find("/")
            if b < 0 or s < 0:
                continue
            cn = line[:b].split()
            if len(cn) < 2:
                continue
            simp = cn[1]
            for m in line[s:].split("/"):
                m = m.strip()
                if not m:
                    continue
                for w in re.findall(r"[a-z]+", m.lower()):
                    if len(w) < 3 or not w.isalpha():
                        continue
                    if w in CC_STOP_WORDS or w in ec:
                        continue
                    fr = freq.get(w, 0)
                    if w not in cands or fr > cands[w][1]:
                        cands[w] = (simp, fr)

    ranked = sorted(cands.items(), key=lambda kv: -kv[1][1])
    sel = ranked[:TOP]
    with OUT.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["word", "phonetic", "translation", "tag", "exchange"])
        for word, (ch, fr) in sel:
            w.writerow([word, "", ch, "cc", ""])
    print(f"[out] wrote {len(sel)} new words -> {OUT}")


if __name__ == "__main__":
    main()
