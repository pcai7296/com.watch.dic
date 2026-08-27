import os, sys

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

prev = ''
for i, line in enumerate(lines):
    if not line.strip():
        continue
    parts = line.split('\t')
    if len(parts) >= 2:
        word = decode(prev, parts[0])
        if word:
            if 'in ' in word.lower():
                print(f'Line {i}: "{word}" entryId={parts[1]}')
            prev = word
