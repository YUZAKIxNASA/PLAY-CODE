#!/usr/bin/env python3
"""
PLAY-CODE (@N4) — Python 209 Examples Dataset Assembler and Verifier
Author: NASA-KUN
Executes all 209 Python code snippets to capture real execution output
and validates 100% fidelity against the authoritative inventory.
"""

import json
import sys
import os
import subprocess

sys.path.append(os.path.dirname(__file__))

from python_batch1 import get_batch1
from python_batch2 import get_batch2
from python_batch3 import get_batch3
from python_batch4 import get_batch4
from python_batch5 import get_batch5
from python_batch6 import get_batch6
from python_batch7 import get_batch7
from python_batch8 import get_batch8

all_lessons = (
    get_batch1() +
    get_batch2() +
    get_batch3() +
    get_batch4() +
    get_batch5() +
    get_batch6() +
    get_batch7() +
    get_batch8()
)

print(f"Total compiled lessons: {len(all_lessons)}")
assert len(all_lessons) == 209, f"Expected 209 lessons, got {len(all_lessons)}"

# Categories verification
expected_categories = [
    ("Basic Python Programs", 12),
    ("Pattern Printing Programs", 2),
    ("Date-Time Programs", 7),
    ("Python Regex Programs", 20),
    ("File Handling Programs", 16),
    ("More Popular Python Programs", 26),
    ("Array / List Programs", 33),
    ("Matrix Programs", 7),
    ("String Programs", 24),
    ("Dictionary Programs", 24),
    ("Tuple Programs", 13),
    ("Searching and Sorting Programs", 25)
]

cat_counts = {}
for lesson in all_lessons:
    c = lesson["category"]
    cat_counts[c] = cat_counts.get(c, 0) + 1

for cat_name, expected_count in expected_categories:
    actual = cat_counts.get(cat_name, 0)
    assert actual == expected_count, f"Category '{cat_name}' count mismatch: expected {expected_count}, got {actual}"

print("All 12 categories and counts match perfectly!")

# Execute each snippet to verify syntax & capture real expected output
print("Executing all 209 code examples to capture real stdout...")

for idx, lesson in enumerate(all_lessons):
    code = lesson["codeExample"]
    try:
        proc = subprocess.run(
            [sys.executable, "-c", code],
            capture_output=True,
            text=True,
            timeout=10,
            check=True
        )
        output = proc.stdout.strip()
        lesson["expectedOutput"] = output
    except subprocess.CalledProcessError as e:
        print(f"Error executing lesson {lesson['id']}: {lesson['title']}")
        print(f"STDERR: {e.stderr}")
        sys.exit(1)
    except subprocess.TimeoutExpired:
        print(f"Timeout executing lesson {lesson['id']}: {lesson['title']}")
        sys.exit(1)

print("All 209 code snippets executed successfully with exit code 0!")

# Field integrity validation
for i, lesson in enumerate(all_lessons):
    expected_id = i + 1
    expected_num = f"{expected_id:03d}"
    
    assert lesson["id"] == expected_id, f"ID mismatch at {i}: expected {expected_id}, got {lesson['id']}"
    assert lesson["number"] == expected_num, f"Number mismatch at {expected_id}: expected {expected_num}, got {lesson['number']}"
    assert lesson.get("title"), f"Missing title at {expected_id}"
    assert lesson.get("introduction"), f"Missing introduction at {expected_id}"
    assert lesson.get("explanation"), f"Missing explanation at {expected_id}"
    assert lesson.get("syntax"), f"Missing syntax at {expected_id}"
    assert lesson.get("codeExample"), f"Missing codeExample at {expected_id}"
    assert lesson.get("expectedOutput"), f"Missing expectedOutput at {expected_id}"
    assert lesson.get("resultExplanation"), f"Missing resultExplanation at {expected_id}"
    assert lesson.get("notes"), f"Missing notes at {expected_id}"
    assert lesson.get("commonMistakes"), f"Missing commonMistakes at {expected_id}"
    assert lesson.get("timeComplexity"), f"Missing timeComplexity at {expected_id}"
    assert lesson.get("spaceComplexity"), f"Missing spaceComplexity at {expected_id}"

print("All 209 lessons passed 100% validation check!")

# Generate data/python-lessons.js
js_content = """/**
 * PLAY-CODE (@N4) — Master Python 209 Examples Curriculum Dataset
 * Project Owner: NASA-KUN
 * Authoritative Inventory (1 to 209) across 12 Categories
 * Strict Fidelity: Preserves exact titles, numbering, and category order.
 * Verified Python 3 syntax with real execution outputs and time/space complexity analysis.
 */

const PYTHON_LESSONS = """ + json.dumps(all_lessons, indent=2) + """;

if (typeof window !== 'undefined') {
  window.PYTHON_LESSONS = PYTHON_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PYTHON_LESSONS;
}
export default PYTHON_LESSONS;
"""

output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'data', 'python-lessons.js'))

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated {output_path} successfully ({os.path.getsize(output_path):,} bytes)!")
