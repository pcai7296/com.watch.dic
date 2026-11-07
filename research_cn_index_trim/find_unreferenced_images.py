import os

SRC = r"J:\code\MI band\com.watch.dic\com.watch.dic.w212\src"
IMG_EXT = ('.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg')
TXT_EXT = ('.ux', '.js', '.ts', '.css', '.less', '.json', '.html', '.vue', '.md')

images = []
for root, dirs, files in os.walk(SRC):
    for f in files:
        if f.lower().endswith(IMG_EXT):
            images.append(os.path.join(root, f))

text_files = []
for root, dirs, files in os.walk(SRC):
    for f in files:
        if f.lower().endswith(TXT_EXT):
            text_files.append(os.path.join(root, f))

corpus = ""
for tf in text_files:
    try:
        with open(tf, 'r', encoding='utf-8', errors='ignore') as fh:
            corpus += fh.read() + "\n"
    except Exception:
        pass

unref = []
ref = []
for img in images:
    base = os.path.basename(img)
    if base in corpus:
        ref.append(img)
    else:
        unref.append(img)

print("TOTAL IMAGES:", len(images))
print("REFERENCED:", len(ref))
print("UNREFERENCED:", len(unref))
print("\n--- UNREFERENCED IMAGES (candidates for deletion) ---")
for u in sorted(unref):
    rel = os.path.relpath(u, SRC)
    print(rel, "---", os.path.getsize(u), "bytes")
