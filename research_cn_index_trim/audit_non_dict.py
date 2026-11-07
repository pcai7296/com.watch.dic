import zipfile, os, collections

rpk = r"J:\code\MI band\com.watch.dic\com.watch.dic.w212\dist\com.watch.dic.w212.debug.3.0.0.rpk"
z = zipfile.ZipFile(rpk)
infos = z.infolist()
total = 0
dict_bytes = 0
by_dir = collections.Counter()
files = []
for i in infos:
    if i.is_dir():
        continue
    sz = i.file_size
    total += sz
    name = i.filename
    files.append((name, sz))
    top = name.split('/')[0] if '/' in name else name
    by_dir[top] += sz
    if name.startswith('common/dict/'):
        dict_bytes += sz

rpk_size = os.path.getsize(rpk)
print("RUNTIME FILE COUNT:", len(files))
print("RUNTIME FILES UNCOMPRESSED:", f"{total/1024/1024:.2f} MB ({total} bytes)")
print("ACTUAL RPK ON DISK (zip):", f"{rpk_size/1024/1024:.2f} MB ({rpk_size} bytes)")
print("DICT BYTES:", f"{dict_bytes/1024/1024:.2f} MB ({dict_bytes/total*100:.1f}% of uncompressed)")
nd = total - dict_bytes
print("NON-DICT BYTES:", f"{nd/1024/1024:.2f} MB ({nd/total*100:.1f}% of uncompressed)")
print()
print("--- BY TOP DIR ---")
for d, c in by_dir.most_common():
    print(f"{d:28s} {c/1024:8.1f} KB  {c/total*100:5.1f}%")
print()
print("--- NON-DICT BY EXT ---")
ne = collections.Counter()
for n, s in files:
    if n.startswith('common/dict/'):
        continue
    ne[os.path.splitext(n)[1].lower()] += s
for e, c in ne.most_common():
    print(f"{e:10s} {c/1024:8.1f} KB")
print()
print("--- TOP 30 NON-DICT FILES ---")
ndf = [(n, s) for n, s in files if not n.startswith('common/dict/')]
for n, s in sorted(ndf, key=lambda x: -x[1])[:30]:
    print(f"{s/1024:8.1f} KB  {n}")
print()
print("--- ALL IMAGE FILES IN RPK (non-dict) ---")
for n, s in sorted(ndf, key=lambda x: -x[1]):
    if os.path.splitext(n)[1].lower() in ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'):
        print(f"{s/1024:8.1f} KB  {n}")
