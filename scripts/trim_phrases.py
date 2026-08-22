import csv
import re
import sys
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PHRASES = ROOT / "data" / "phrases.csv"
WORD_FAMILY = ROOT / "data" / "bnc_coca_word_family_lists_v2.xlsx"
TOP = 20000
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
    with PHRASES.open(encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        header = reader.fieldnames
        rows = list(reader)

    seed = [r for r in rows if not (r.get("tag") or "").strip()]
    rest = [r for r in rows if (r.get("tag") or "").strip()]
    print(f"[phrases] total {len(rows)} seed {len(seed)} rest {len(rest)}")

    def score(r):
        toks = re.findall(r"[a-z]+", (r.get("word") or "").lower())
        return sum(freq.get(t, 0) for t in toks)

    rest.sort(key=lambda r: -score(r))
    keep = seed + rest[:TOP]
    with PHRASES.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=header)
        w.writeheader()
        for r in keep:
            w.writerow(r)
    print(f"[phrases] kept {len(keep)} (seed {len(seed)} + top {len(rest[:TOP])})")


if __name__ == "__main__":
    main()
