# cn_index 降精度调研（只读，不改代码/数据）
import os, sys, csv, glob

ROOT = 'J:/code/MI band/com.watch.dic/com.watch.dic.w212'
ECDICT_CSV = ROOT + '/data/ecdict_tagged_14942_compact.csv'
CN_DIR = ROOT + '/build/common/dict/cn_index'

BS = chr(92)
SEPS = set([',', '，', ';', '；', ' ', chr(9), chr(13), chr(10), '/', BS])

def strip_brackets(s):
    out = []; d = 0
    for c in s:
        if c == '[': d += 1
        elif c == ']':
            if d > 0: d -= 1
        elif d == 0: out.append(c)
    return ''.join(out)

def has_cjk(s):
    for c in s:
        o = ord(c)
        if 0x4e00 <= o <= 0x9fff: return True
    return False

def split_seps(s):
    parts = []; cur = ''
    for c in s:
        if c in SEPS:
            if cur: parts.append(cur); cur = ''
        else: cur += c
    if cur: parts.append(cur)
    return parts

def parse_prefix(head):
    i = 0; n = len(head)
    while i < n and head[i] in '0123456789abcdefghijklmnopqrstuvwxyz':
        i += 1
    if i == 0: return 0, head
    return int(head[:i], 36), head[i:]

# Phase1 -> ECDICT 核心短语集
ECDICT_SET = set()
with open(ECDICT_CSV, 'r', encoding='utf-8', newline='') as h:
    for row in csv.DictReader(h):
        t = row['translation']
        c = strip_brackets(t)
        c = ''.join(ch for ch in c if not (ch.isascii() and ch.isalnum()))
        for p in split_seps(c):
            p = p.strip()
            if len(p) >= 2 and has_cjk(p):
                ECDICT_SET.add(p)
print('ECDICT_SET size:', len(ECDICT_SET))

NL = chr(10); TAB = chr(9)
records = []
for path in sorted(glob.glob(CN_DIR + '/cn_*.txt')):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    prev = ''
    for line in content.split(NL):
        if not line: continue
        parts = line.split(TAB)
        if len(parts) < 2: continue
        head = parts[0]
        pl, suf = parse_prefix(head)
        full = prev[:pl] + suf
        prev = full
        records.append((full, len(line.encode('utf-8'))))

total = len(records)
cls_cnt = {'core': 0, 'other': 0}; cls_bytes = {'core': 0, 'other': 0}
len_dist = {}; core_len = {}; other_len = {}
for full, lb in records:
    k = 'core' if full in ECDICT_SET else 'other'
    cls_cnt[k] += 1; cls_bytes[k] += lb
    L = len(full)
    len_dist[L] = len_dist.get(L, 0) + 1
    if k == 'core': core_len[L] = core_len.get(L, 0) + 1
    else: other_len[L] = other_len.get(L, 0) + 1

total_bytes = sum(cls_bytes.values())
print('total phrases:', total, 'bytes:', total_bytes, 'avg/phrase:', total_bytes / total)
print('core:', cls_cnt['core'], cls_bytes['core'], 'other:', cls_cnt['other'], cls_bytes['other'])

def scen(pred):
    return sum(lb for full, lb in records if pred(full))

bA = scen(lambda p: p in ECDICT_SET)
print('A keep_core: bytes', bA, 'saved', total_bytes - bA, 'pct', 100 * (total_bytes - bA) / total_bytes)
for K in [2, 3, 4, 5]:
    b = scen(lambda p: len(p) <= K)
    print('B len<=%d: bytes %d saved %d pct %.1f' % (K, b, total_bytes - b, 100 * (total_bytes - b) / total_bytes))
bC = scen(lambda p: p in ECDICT_SET and len(p) <= 4)
print('C core&len<=4: bytes', bC, 'saved', total_bytes - bC)

print('LEN_DIST')
for L in sorted(len_dist):
    print(L, len_dist[L], core_len.get(L, 0), other_len.get(L, 0))