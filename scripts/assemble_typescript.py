import json
import sys
import os

sys.path.insert(0, '.')
from scripts.ts_batch1 import get_ts_batch1
from scripts.ts_batch2 import get_ts_batch2
from scripts.ts_batch3 import get_ts_batch3
from scripts.ts_batch4 import get_ts_batch4
from scripts.ts_batch5 import get_ts_batch5
from scripts.ts_batch6 import get_ts_batch6

def assemble():
    b1 = get_ts_batch1()
    b2 = get_ts_batch2()
    b3 = get_ts_batch3()
    b4 = get_ts_batch4()
    b5 = get_ts_batch5()
    b6 = get_ts_batch6()

    all_lessons = b1 + b2 + b3 + b4 + b5 + b6
    print(f"Total loaded lessons: {len(all_lessons)}")
    assert len(all_lessons) == 265, f"Expected 265 lessons, got {len(all_lessons)}"

    # Category verification map
    expected_categories = {
        "Introduction and Setup": 15,
        "Variables and Data Types": 20,
        "Operators and Type Conversion": 15,
        "Conditions and Loops": 15,
        "Functions": 20,
        "Arrays and Tuples": 15,
        "Objects and Interfaces": 20,
        "Classes and Object-Oriented Programming": 25,
        "Advanced Types": 25,
        "Generics": 15,
        "Modules and Namespaces": 15,
        "Error Handling and Asynchronous Programming": 15,
        "DOM and Browser APIs": 15,
        "Node.js, APIs and JSON": 15,
        "Libraries and Practical Integrations": 15,
        "Testing, Debugging and Compiler Configuration": 5
    }

    # Validate sequential IDs, numbers, and categories
    actual_counts = {}
    for idx, lesson in enumerate(all_lessons, 1):
        assert lesson["id"] == idx, f"Mismatch at idx {idx}: id is {lesson['id']}"
        expected_number = f"{idx:03d}"
        lesson["number"] = expected_number
        cat = lesson["category"]
        assert cat in expected_categories, f"Unknown category: '{cat}' at lesson {idx}"
        actual_counts[cat] = actual_counts.get(cat, 0) + 1

        # Check server tag
        if lesson.get("requiresNewServer"):
            lesson["serverTag"] = "[REQUIRES NEW SERVER]"
        else:
            lesson["serverTag"] = lesson.get("serverTag", "")

        # Verify all mandatory keys exist and are non-empty
        mandatory_keys = [
            "id", "number", "title", "cleanTitle", "category", "introduction",
            "learningObjective", "prerequisites", "requiredSchema",
            "codeExample", "compiledJavaScript", "expectedOutput",
            "resultExplanation", "notes", "commonMistakes", "securityNotes",
            "keywordsOrMethods"
        ]
        for key in mandatory_keys:
            assert key in lesson and lesson[key] is not None, f"Missing key '{key}' in lesson {idx}"

    print("\n--- Category Breakdown Validation ---")
    for cat, exp in expected_categories.items():
        actual = actual_counts.get(cat, 0)
        print(f"  {cat}: {actual} / {exp}")
        assert actual == exp, f"Category '{cat}' count mismatch: expected {exp}, got {actual}"

    print(f"\nAll 16 categories and 265 lessons verified successfully!")

    # Verify server tagged lessons
    server_lessons = [l["id"] for l in all_lessons if l.get("requiresNewServer")]
    print(f"Server-tagged lessons ([REQUIRES NEW SERVER]): {server_lessons}")
    assert 236 in server_lessons, "Lesson 236 must be tagged with requiresNewServer"
    assert 237 in server_lessons, "Lesson 237 must be tagged with requiresNewServer"
    assert 243 in server_lessons, "Lesson 243 must be tagged with requiresNewServer"

    # Write to data/typescript-lessons.js
    os.makedirs("data", exist_ok=True)
    out_path = "data/typescript-lessons.js"
    json_str = json.dumps(all_lessons, indent=2, ensure_ascii=False)
    file_content = f"// PLAY-CODE @N4! Authoritative TypeScript Curriculum Dataset (265 Lessons across 16 Categories)\nwindow.TYPESCRIPT_LESSONS = {json_str};\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(file_content)

    print(f"Successfully wrote {len(all_lessons)} lessons to {out_path} ({len(file_content)} bytes)")

if __name__ == "__main__":
    assemble()
