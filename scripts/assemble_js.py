#!/usr/bin/env python3
import json
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from build_js_data import titles
from js_batch1 import get_batch1
from js_batch2 import get_batch2
from js_batch3 import get_batch3
from js_batch4 import get_batch4
from js_batch5 import get_batch5

all_lessons = get_batch1() + get_batch2() + get_batch3() + get_batch4() + get_batch5()

print(f"Total compiled lessons: {len(all_lessons)}")
assert len(all_lessons) == 230, f"Expected 230 lessons, got {len(all_lessons)}"
assert len(titles) == 230, f"Expected 230 titles, got {len(titles)}"

# Verification pass
for i, lesson in enumerate(all_lessons):
    expected_id = i + 1
    expected_num = f"{expected_id:03d}"
    expected_title = titles[i]

    assert lesson["id"] == expected_id, f"ID mismatch at index {i}: expected {expected_id}, got {lesson['id']}"
    assert lesson["number"] == expected_num, f"Number mismatch at {expected_id}: expected {expected_num}, got {lesson['number']}"
    assert lesson["title"] == expected_title, f"Title mismatch at {expected_id}: expected '{expected_title}', got '{lesson['title']}'"
    assert lesson.get("introduction"), f"Missing introduction at {expected_id}"
    assert lesson.get("explanation"), f"Missing explanation at {expected_id}"
    assert lesson.get("syntax"), f"Missing syntax at {expected_id}"
    assert lesson.get("codeExample"), f"Missing codeExample at {expected_id}"
    assert lesson.get("expectedOutput"), f"Missing expectedOutput at {expected_id}"

print("All 230 lessons verified with 100% fidelity!")

# Format output file
js_content = """/**
 * PLAY-CODE (@N4) — Master JavaScript 230 Lessons Curriculum Dataset
 * Project Owner: NASA-KUN
 * Exact Authoritative Inventory (1 to 230)
 * Strict Fidelity: Preserves exact titles, historical spellings, and original ordering.
 */

const JAVASCRIPT_LESSONS = """ + json.dumps(all_lessons, indent=2) + """;

if (typeof window !== 'undefined') {
  window.JAVASCRIPT_LESSONS = JAVASCRIPT_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JAVASCRIPT_LESSONS;
}
export default JAVASCRIPT_LESSONS;
"""

output_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'javascript-lessons.js')
output_path = os.path.abspath(output_path)

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully generated {output_path} with {len(all_lessons)} lessons!")
