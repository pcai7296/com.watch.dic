import os

BASE36 = '0123456789abcdefghijklmnopqrstuvwxyz'
def decode(prev, value):
    if not value or value[0] not in BASE36:
        return None
    n = int(value[0], 36)
    if n > len(prev):
        return None
    return prev[:n] + value[1:]

filepath = os.path.join(os.path.dirname(__file__), '..', 'src', 'common', 'dict', 'words', 'word_i.txt')
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

target_ids = [6748,6750,6751,6752,6753,6754,6755,6756,6757,6758]
prev = ''
for line in lines:
    if not line.strip():
        continue
    parts = line.split('\t')
    if len(parts) >= 2:
        word = decode(prev, parts[0])
        if word:
            entry_id = int(parts[1], 36) if parts[1] else -1
            if entry_id in target_ids:
                print(f'entryId={entry_id} word="{word}"')
            prev = word
