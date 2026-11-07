# 死重审计：cn_index 苛刻/异常词条 + zh_index 异常单字（只读）
import os, glob

ROOT = 'J:/code/MI band/com.watch.dic/com.watch.dic.w212'
CN_DIR = ROOT + '/build/common/dict/cn_index'
ZH_DIR = ROOT + '/build/common/dict/zh_index'

def parse_prefix(head):
    i = 0; n = len(head)
    while i < n and head[i] in '0123456789abcdefghijklmnopqrstuvwxyz':
        i += 1
    if i == 0: return 0, head
    return int(head[:i], 36), head[i:]

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
        pl, suf = parse_prefix(parts[0])
        full = prev[:pl] + suf
        prev = full
        records.append((full, len(line.encode('utf-8'))))

def has_latin_digit(s):
    for c in s:
        o = ord(c)
        if (0x30 <= o <= 0x39) or (0x41 <= o <= 0x5a) or (0x61 <= o <= 0x7a):
            return True
    return False

total = len(records); tot_bytes = sum(b for _, b in records)
print('cn_index total:', total, 'bytes:', tot_bytes, '(%.2f MB)' % (tot_bytes / 1e6))
for TH in [8, 10, 12, 15]:
    cnt = sum(1 for f, _ in records if len(f) >= TH)
    b = sum(b for f, b in records if len(f) >= TH)
    print('  len>=%d: %d phrases, %d bytes (%.2f MB), %.1f%% of cn_index'
          % (TH, cnt, b, b / 1e6, 100.0 * b / tot_bytes))
anom = [(f, b) for f, b in records if has_latin_digit(f)]
ac = len(anom); ab = sum(b for _, b in anom)
print('  ANOMALOUS (contains Latin/digit): %d phrases, %d bytes (%.2f MB), %.1f%%'
      % (ac, ab, ab / 1e6, 100.0 * ab / tot_bytes))
for f, b in anom[:20]:
    print('    ANOM:', repr(f), b)

# zh_index single-char anomalies
zh = []
for path in sorted(glob.glob(ZH_DIR + '/zh_*.txt')):
    with open(path, 'r', encoding='utf-8', errors='replace') as f:
        for line in f.read().split(NL):
            if not line: continue
            zh.append((line[0], len(line.encode('utf-8'))))
def is_cjk_char(c):
    o = ord(c)
    return (0x3400 <= o <= 0x4dbf) or (0x4e00 <= o <= 0x9fff) or (0x3000 <= o <= 0x303f) \
        or (0xff00 <= o <= 0xffef) or (0x2000 <= o <= 0x206f) or c in '·．'
zh_tot = len(zh); zh_bytes = sum(b for _, b in zh)
zh_anom = [(c, b) for c, b in zh if not is_cjk_char(c)]
print('zh_index total:', zh_tot, 'chars,', zh_bytes, 'bytes')
print('  ANOMALOUS (non-CJK char):', len(zh_anom), 'chars,', sum(b for _, b in zh_anom), 'bytes')
for c, b in zh_anom[:25]:
    print('    ZHANOM:', repr(c), 'ord', ord(c), 'bytes', b)