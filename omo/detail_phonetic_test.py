import ast
import re
from pathlib import Path


DETAIL_PATH = Path(__file__).parents[1] / "src/pages/detail/detail.ux"


def load_detail_source():
    return DETAIL_PATH.read_text(encoding="utf-8")


def load_ipa_map(source):
    match = re.search(r"var IPA_SAFE_MAP = (\{.*?\})", source, re.S)
    if match is None:
        raise AssertionError("detail page IPA decoder map is missing")
    return ast.literal_eval(match.group(1))


def normalize_ipa(value, mapping, max_length=94):
    value = value.replace("\r", "")[:max_length]
    output = []
    for char in value:
        if char in mapping:
            output.append(mapping[char])
        elif ord(char) < 128:
            output.append(char)
        else:
            output.append("?")
    return "".join(output)


def test_detail_page_normalizes_ipa_before_rendering():
    source = load_detail_source()
    mapping = load_ipa_map(source)
    max_length = int(re.search(r"var MAX_PHONETIC_LENGTH = (\d+)", source).group(1))
    legacy_unicode = ".kauntәprә'dʌktiv"

    assert normalize_ipa(legacy_unicode, mapping, max_length) == ".kauntapra'dVktiv"
    assert normalize_ipa(".kauntapra'dVktiv", mapping, max_length) == ".kauntapra'dVktiv"
    assert normalize_ipa(".kaunt\rә", mapping, max_length) == ".kaunta"
    unknown_unicode = ".kɐntʔ"
    normalized_unknown = normalize_ipa(unknown_unicode, mapping, max_length)
    assert normalized_unknown == ".k?nt?"
    assert all(ord(char) < 128 for char in normalized_unknown)
    assert (
        'this.phoneticText = this.phonetic ? "/" + this._normalizeIpa(this.phonetic) + "/" : ""'
        in source
    ), "detail page renders legacy Unicode IPA directly instead of normalizing it"
    assert "ch.charCodeAt(0) < 128" in source
    assert 'out += "?"' in source
    assert "slice(0, MAX_PHONETIC_LENGTH)" in source
    assert max_length == 94
    normalized_long = normalize_ipa("x" * 200, mapping, max_length)
    assert len(normalized_long) == max_length
    wrapped_long = "/" + normalized_long + "/"
    assert len(wrapped_long) <= 96
    assert "{{ phoneticText }}   {{ phoneticText }}" in source
    assert len(wrapped_long) * 2 + 3 <= 2 * 96 + 3
    assert "applyPhoneticMarquee(this.phoneticText)" in source


if __name__ == "__main__":
    test_detail_page_normalizes_ipa_before_rendering()
    print("detail phonetic: 1 passed")
