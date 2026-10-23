import json
import sys
sys.path.insert(0, '.')
from scripts.sql_batch1 import get_sql_batch1
from scripts.sql_batch2 import get_sql_batch2
from scripts.sql_batch3 import get_sql_batch3
from scripts.sql_batch4 import get_sql_batch4
from scripts.sql_batch5 import get_sql_batch5
from scripts.sql_batch6 import get_sql_batch6

def assemble():
    b1 = get_sql_batch1()
    b2 = get_sql_batch2()
    b3 = get_sql_batch3()
    b4 = get_sql_batch4()
    b5 = get_sql_batch5()
    b6 = get_sql_batch6()

    all_lessons = b1 + b2 + b3 + b4 + b5 + b6
    print(f"Total loaded lessons: {len(all_lessons)}")
    assert len(all_lessons) == 205, f"Expected 205 lessons, got {len(all_lessons)}"

    # Validate IDs and sequential order
    for idx, lesson in enumerate(all_lessons, 1):
        assert lesson["id"] == idx, f"Mismatch at idx {idx}: id is {lesson['id']}"
        expected_number = f"{idx:03d}"
        lesson["number"] = expected_number
        if lesson.get("requiresNewServer"):
            lesson["serverTag"] = "[REQUIRES NEW SERVER]"
        else:
            lesson["serverTag"] = lesson.get("serverTag", "")

    # Validate categories and counts
    expected_categories = {
        "MySQL Basics": 15,
        "MySQL Data Types": 10,
        "Table Structure and Columns": 15,
        "Insert and Update Operations": 10,
        "Select and Filtering": 15,
        "Sorting and Result Limits": 10,
        "Aggregate Functions": 10,
        "SQL Joins": 10,
        "Advanced SQL Queries": 15,
        "String, Date and Numeric Functions": 15,
        "Database Design and Advanced Features": 15,
        "Transactions and Security": 10,
        "PHP + MySQL": 25,
        "Real-World MySQL Projects": 15,
        "Additional Practical Examples": 10,
        "Additional Advanced MySQL Examples": 5
    }

    actual_counts = {}
    for lesson in all_lessons:
        cat = lesson["category"]
        actual_counts[cat] = actual_counts.get(cat, 0) + 1

    print("\nCategory Breakdown:")
    for cat, exp in expected_categories.items():
        actual = actual_counts.get(cat, 0)
        print(f" - {cat}: {actual} / {exp}")
        assert actual == exp, f"Category count mismatch for {cat}: got {actual}, expected {exp}"

    # Required fields check
    required_fields = [
        "id", "number", "title", "cleanTitle", "category",
        "introduction", "learningObjective", "prerequisites", "requiredSchema",
        "codeExample", "expectedOutput", "resultExplanation",
        "notes", "commonMistakes", "requiresNewServer", "serverTag",
        "securityNotes", "keywordsOrMethods"
    ]
    for lesson in all_lessons:
        for f in required_fields:
            assert f in lesson, f"Missing field '{f}' in lesson ID {lesson['id']} ({lesson['title']})"

    # Write out data/sql-lessons.js
    output_path = "/app/applet/data/sql-lessons.js"
    js_content = "window.SQL_LESSONS = " + json.dumps(all_lessons, indent=2) + ";\n"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\nSuccessfully written {len(all_lessons)} lessons to {output_path}")

if __name__ == "__main__":
    assemble()
