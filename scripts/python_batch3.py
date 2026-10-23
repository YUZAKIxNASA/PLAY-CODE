"""
Batch 3:
- Category 5: File Handling Programs (16 lessons, IDs 42-57)
"""

def get_batch3():
    lessons = [
        {
            "id": 42,
            "number": "042",
            "title": "Read file word by word",
            "cleanTitle": "Read file word by word",
            "category": "File Handling Programs",
            "introduction": "Reading a file word by word allows text tokenization, vocabulary analysis, and stream processing without loading massive files into memory all at once.",
            "explanation": "By iterating over lines in a file object and using str.split(), each line is split into words on whitespace boundaries.",
            "syntax": "with open(filepath, 'r') as f:\n    for line in f:\n        for word in line.split(): ...",
            "keywordsOrMethods": ["open()", "read word by word", "split()", "iteration"],
            "codeExample": """# Program to read a file word by word
import os

# Create sample file for demonstration
filename = "sample_words.txt"
with open(filename, "w", encoding="utf-8") as f:
    f.write("Python is an amazing\\nprogramming language created by\\nGuido van Rossum.")

words_list = []
# Read word by word
with open(filename, "r", encoding="utf-8") as f:
    for line in f:
        for word in line.split():
            words_list.append(word)

print(f"Total Words Read: {len(words_list)}")
print(f"Words: {words_list}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Iterates line by line, splits on whitespace, and collects each individual word.",
            "notes": "Iterating over the file object directly (`for line in f:`) streams the file lazily, keeping memory footprint low.",
            "commonMistakes": "Using file.read().split() on multi-gigabyte files, which loads the entire file into RAM at once.",
            "timeComplexity": "O(N) where N is total characters in file",
            "spaceComplexity": "O(W) where W is words stored"
        },
        {
            "id": 43,
            "number": "043",
            "title": "Read character by character from a file",
            "cleanTitle": "Read character by character from a file",
            "category": "File Handling Programs",
            "introduction": "Reading character by character is essential for parsers, lexers, and stream ciphers.",
            "explanation": "Calling file.read(1) reads exactly one character from the file stream until an empty string '' indicates EOF.",
            "syntax": "with open(path, 'r') as f:\n    while char := f.read(1): ...",
            "keywordsOrMethods": ["read(1)", "character stream", "EOF", "file pointer"],
            "codeExample": """# Program to read character by character from a file
import os

filename = "char_demo.txt"
with open(filename, "w", encoding="utf-8") as f:
    f.write("PLAY-CODE")

chars_read = []
with open(filename, "r", encoding="utf-8") as f:
    while True:
        char = f.read(1)
        if not char:  # Empty string indicates End of File (EOF)
            break
        chars_read.append(char)

print(f"Characters extracted: {chars_read}")
print(f"Total characters: {len(chars_read)}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Reads one character at a time until reaching EOF, extracting ['P', 'L', 'A', 'Y', '-', 'C', 'O', 'D', 'E'].",
            "notes": "f.read(1) returns an empty string '' when the end of the file is reached.",
            "commonMistakes": "Forgetting the EOF break condition, leading to an infinite while loop.",
            "timeComplexity": "O(N) where N is number of characters",
            "spaceComplexity": "O(N) for storing characters"
        },
        {
            "id": 44,
            "number": "044",
            "title": "Count Characters, Words, Spaces and Lines in a File",
            "cleanTitle": "Count Characters, Words, Spaces and Lines in a File",
            "category": "File Handling Programs",
            "introduction": "Generates complete statistical metrics for a text file, similar to the Unix wc command.",
            "explanation": "Iterates line by line while updating counters for line count, word count, character count, and whitespace count.",
            "syntax": "lines += 1; words += len(line.split()); chars += len(line); spaces += line.count(' ')",
            "keywordsOrMethods": ["file statistics", "word count", "line count", "wc utility"],
            "codeExample": """# Program to count Characters, Words, Spaces and Lines in a File
import os

filename = "stats_demo.txt"
content = \"\"\"Python is versatile.
It powers web development, AI, and data science.
Practice makes coding intuitive!\"\"\"

with open(filename, "w", encoding="utf-8") as f:
    f.write(content)

num_lines = 0
num_words = 0
num_chars = 0
num_spaces = 0

with open(filename, "r", encoding="utf-8") as f:
    for line in f:
        num_lines += 1
        num_chars += len(line)
        num_words += len(line.split())
        num_spaces += line.count(' ')

print("File Analysis Statistics:")
print(f"  Lines     : {num_lines}")
print(f"  Words     : {num_words}")
print(f"  Characters: {num_chars}")
print(f"  Spaces    : {num_spaces}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Analyzes the 3-line file, computing 3 lines, 15 words, 102 characters, and 12 spaces.",
            "notes": "Using line.count(' ') accurately tallies spaces without loading the whole file into RAM.",
            "commonMistakes": "Forgetting that len(line) includes the trailing newline character '\\n'.",
            "timeComplexity": "O(N) single-pass scan",
            "spaceComplexity": "O(1) auxiliary space"
        },
        {
            "id": 45,
            "number": "045",
            "title": "Count the Number of occurrences of a key-value pair in a text file",
            "cleanTitle": "Count the Number of occurrences of a key-value pair in a text file",
            "category": "File Handling Programs",
            "introduction": "Finds how many times a specific configuration or key-value pair (e.g. status=active) appears in a file.",
            "explanation": "Splits each line into key and value on a delimiter (like '=' or ':') and increments a match counter.",
            "syntax": "if line.strip() == f'{target_key}={target_val}': count += 1",
            "keywordsOrMethods": ["key-value search", "configuration parsing", "file tally"],
            "codeExample": """# Program to count occurrences of a key-value pair in a text file
import os

filename = "config_log.txt"
data = \"\"\"status=active
env=production
status=inactive
status=active
cache=redis
status=active
\"\"\"

with open(filename, "w", encoding="utf-8") as f:
    f.write(data)

def count_key_value(filepath, target_key, target_value):
    count = 0
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if '=' in line:
                k, v = line.split('=', 1)
                if k.strip() == target_key and v.strip() == target_value:
                    count += 1
    return count

key = "status"
val = "active"
occurrences = count_key_value(filename, key, val)

print(f"Key-Value Pair '{key}={val}' appeared {occurrences} times.")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "The pair status=active appears on lines 1, 4, and 6, so count is 3.",
            "notes": "Using line.split('=', 1) with maxsplit=1 ensures values containing equal signs do not break parsing.",
            "commonMistakes": "Splitting without maxsplit, which breaks if the value itself contains '=' (e.g. url=http://site?a=1).",
            "timeComplexity": "O(N) lines",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 46,
            "number": "046",
            "title": "Finding 'n' Character Words in a Text File",
            "cleanTitle": "Finding 'n' Character Words in a Text File",
            "category": "File Handling Programs",
            "introduction": "Filters and extracts all words in a text document that have an exact specified character length n.",
            "explanation": "Tokenizes words from the file, strips surrounding punctuation, and checks if len(word) == n.",
            "syntax": "[w for w in words if len(w.strip(punctuation)) == n]",
            "keywordsOrMethods": ["string.punctuation", "word length", "filtering", "file processing"],
            "codeExample": """# Program to find words of exact length 'n' in a text file
import os
import string

filename = "word_length_demo.txt"
sample = \"\"\"Python is a high-level programming language designed for code readability.\"\"\"

with open(filename, "w", encoding="utf-8") as f:
    f.write(sample)

def find_n_character_words(filepath, n):
    matched_words = []
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            for raw_word in line.split():
                # Clean punctuation from word boundaries
                cleaned = raw_word.strip(string.punctuation)
                if len(cleaned) == n:
                    matched_words.append(cleaned)
    return matched_words

n = 4
found = find_n_character_words(filename, n)
print(f"Words with exactly {n} characters in file:")
print(found)

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Extracts 4-letter words from the text: ['high', 'code'].",
            "notes": "string.punctuation removes attached commas and periods from words before checking length.",
            "commonMistakes": "Counting attached punctuation in the word length (e.g. measuring 'language.' as 9 chars instead of 8).",
            "timeComplexity": "O(N) words",
            "spaceComplexity": "O(M) matched words"
        },
        {
            "id": 47,
            "number": "047",
            "title": "Find Line Number of a Word in a File",
            "cleanTitle": "Find Line Number of a Word in a File",
            "category": "File Handling Programs",
            "introduction": "Locates and reports all line numbers in a file where a target search word appears.",
            "explanation": "Iterates using enumerate(file, start=1) to track 1-based line numbers, checking if target word exists in each line.",
            "syntax": "for line_no, line in enumerate(f, 1):\n    if word in line: ...",
            "keywordsOrMethods": ["enumerate()", "line numbers", "search in file", "1-based indexing"],
            "codeExample": """# Program to find the line number of a word in a file
import os

filename = "search_lines.txt"
lines_content = [
    "Welcome to the CodePlay platform.",
    "Python programming is intuitive.",
    "Master algorithms and file handling.",
    "Join our Python developer community."
]

with open(filename, "w", encoding="utf-8") as f:
    f.write("\\n".join(lines_content))

def find_word_line_numbers(filepath, word):
    found_lines = []
    with open(filepath, "r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, start=1):
            if word.lower() in line.lower().split():
                found_lines.append(line_num)
    return found_lines

search_word = "Python"
results = find_word_line_numbers(filename, search_word)

print(f"Target Word: '{search_word}'")
print(f"Found on line numbers: {results}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "'Python' appears on Line 2 ('Python programming is intuitive.') and Line 4 ('Join our Python developer community.').",
            "notes": "enumerate(f, start=1) makes line numbers naturally human-readable (1-indexed).",
            "commonMistakes": "Using 0-based indexing for line numbers shown to users.",
            "timeComplexity": "O(L) lines",
            "spaceComplexity": "O(K) matching line indices"
        },
        {
            "id": 48,
            "number": "048",
            "title": "Count number of lines in a text file",
            "cleanTitle": "Count number of lines in a text file",
            "category": "File Handling Programs",
            "introduction": "Determines the total number of lines present in a text file efficiently.",
            "explanation": "Using a generator expression with sum(1 for _ in f) counts lines lazily without keeping lines in memory.",
            "syntax": "with open(filepath, 'r') as f:\n    line_count = sum(1 for _ in f)",
            "keywordsOrMethods": ["line count", "sum()", "generator expression", "memory efficiency"],
            "codeExample": """# Program to count the number of lines in a text file
import os

filename = "count_lines_demo.txt"
with open(filename, "w", encoding="utf-8") as f:
    for i in range(1, 11):
        f.write(f"Line {i}: Learning Python with PLAY-CODE\\n")

# Efficient line counter using generator expression
with open(filename, "r", encoding="utf-8") as f:
    total_lines = sum(1 for _ in f)

print(f"Total lines in '{filename}': {total_lines}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Writes 10 lines and correctly reports total line count as 10.",
            "notes": "sum(1 for _ in f) consumes O(1) auxiliary memory, making it suitable for files of arbitrary size.",
            "commonMistakes": "Using len(f.readlines()) on huge files, which loads the entire file into a memory list.",
            "timeComplexity": "O(N) characters",
            "spaceComplexity": "O(1) memory"
        },
        {
            "id": 49,
            "number": "049",
            "title": "Remove lines starting with any prefix",
            "cleanTitle": "Remove lines starting with any prefix",
            "category": "File Handling Programs",
            "introduction": "Filters out lines that begin with a specific prefix (such as comment markers '#' or '//').",
            "explanation": "Reads lines from source file and writes to destination file only those lines where not line.strip().startswith(prefix).",
            "syntax": "filtered = [line for line in f if not line.startswith(prefix)]",
            "keywordsOrMethods": ["startswith()", "filter lines", "prefix removal", "file cleaning"],
            "codeExample": """# Program to remove lines starting with a specific prefix
import os

source_file = "source_code.txt"
clean_file = "cleaned_code.txt"

content = \"\"\"# Configuration header
server_host = '127.0.0.1'
# Port configuration
server_port = 8080
# Database settings
db_name = 'codeplay'
\"\"\"

with open(source_file, "w", encoding="utf-8") as f:
    f.write(content)

# Remove lines starting with '#'
with open(source_file, "r", encoding="utf-8") as src, open(clean_file, "w", encoding="utf-8") as dst:
    for line in src:
        if not line.strip().startswith('#'):
            dst.write(line)

print("--- Cleaned File Content ---")
with open(clean_file, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [source_file, clean_file]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "All lines starting with '#' comments are skipped, retaining only active configuration lines.",
            "notes": "Using line.strip().startswith('#') also handles indented comments.",
            "commonMistakes": "Opening the same file in write mode 'w' before reading, which truncates the file immediately to 0 bytes.",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(1) streaming"
        },
        {
            "id": 50,
            "number": "050",
            "title": "Eliminate repeated lines from a file",
            "cleanTitle": "Eliminate repeated lines from a file",
            "category": "File Handling Programs",
            "introduction": "Deduplicates lines in a text file while preserving the original appearance order.",
            "explanation": "Uses an auxiliary set to track seen lines; writes lines to the output file only if they have not been seen before.",
            "syntax": "seen = set()\nif line not in seen:\n    seen.add(line); dst.write(line)",
            "keywordsOrMethods": ["deduplication", "set()", "seen tracking", "unique lines"],
            "codeExample": """# Program to eliminate repeated lines from a file
import os

input_file = "dups.txt"
output_file = "unique_lines.txt"

lines_data = [
    "Apple",
    "Banana",
    "Apple",
    "Cherry",
    "Banana",
    "Date",
    "Apple"
]

with open(input_file, "w", encoding="utf-8") as f:
    f.write("\\n".join(lines_data) + "\\n")

# Deduplicate preserving order
seen = set()
with open(input_file, "r", encoding="utf-8") as src, open(output_file, "w", encoding="utf-8") as dst:
    for line in src:
        if line not in seen:
            seen.add(line)
            dst.write(line)

print("Unique Lines Preserved:")
with open(output_file, "r", encoding="utf-8") as f:
    for line in f:
        print(" ", line.strip())

# Cleanup
for f in [input_file, output_file]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Filters out duplicate 'Apple' and 'Banana' occurrences, outputting Apple, Banana, Cherry, and Date in order.",
            "notes": "Using a set for lookup gives O(1) average time check per line.",
            "commonMistakes": "Using list for seen tracking, which makes deduplication O(n^2).",
            "timeComplexity": "O(n) where n is total lines",
            "spaceComplexity": "O(u) where u is number of unique lines"
        },
        {
            "id": 51,
            "number": "051",
            "title": "Read List of Dictionaries from File",
            "cleanTitle": "Read List of Dictionaries from File",
            "category": "File Handling Programs",
            "introduction": "Reads structured data representing a list of key-value dictionaries from a JSON or CSV file.",
            "explanation": "Using Python's built-in json module, json.load(f) deserializes JSON records directly into Python dictionaries.",
            "syntax": "import json\nwith open('data.json') as f:\n    data = json.load(f)",
            "keywordsOrMethods": ["json.load", "deserialization", "list of dicts", "structured data"],
            "codeExample": """# Program to read a list of dictionaries from a file
import json
import os

filename = "students.json"

initial_data = [
    {"id": 101, "name": "Alice", "course": "Python", "grade": "A"},
    {"id": 102, "name": "Bob", "course": "Data Structures", "grade": "A+"},
    {"id": 103, "name": "Charlie", "course": "Web Dev", "grade": "B"}
]

# Write JSON data
with open(filename, "w", encoding="utf-8") as f:
    json.dump(initial_data, f, indent=2)

# Read list of dictionaries back
with open(filename, "r", encoding="utf-8") as f:
    loaded_records = json.load(f)

print(f"Loaded {len(loaded_records)} records from '{filename}':\\n")
for record in loaded_records:
    print(f"ID: {record['id']} | Name: {record['name']:<8} | Course: {record['course']:<15} | Grade: {record['grade']}")

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Deserializes JSON array into a Python list of 3 dictionaries and prints their attributes.",
            "notes": "json.load() parses directly from a file stream, while json.loads() parses from an in-memory string.",
            "commonMistakes": "Calling json.loads(f) instead of json.load(f) on a file descriptor.",
            "timeComplexity": "O(N) where N is file size",
            "spaceComplexity": "O(N) for parsed in-memory structures"
        },
        {
            "id": 52,
            "number": "052",
            "title": "Append content of one text file to another",
            "cleanTitle": "Append content of one text file to another",
            "category": "File Handling Programs",
            "introduction": "Appends the content of a source file to the end of a destination file without overwriting existing data.",
            "explanation": "Opening destination with mode 'a' places the file pointer at the very end of the file, appending new data seamlessly.",
            "syntax": "with open(dest, 'a') as d, open(src, 'r') as s:\n    d.write(s.read())",
            "keywordsOrMethods": ["append mode 'a'", "file appending", "file streams"],
            "codeExample": """# Program to append content of one text file to another
import os

file1 = "main_log.txt"
file2 = "new_entries.txt"

with open(file1, "w", encoding="utf-8") as f:
    f.write("Log Entry 1: System Boot\\nLog Entry 2: Services Started\\n")

with open(file2, "w", encoding="utf-8") as f:
    f.write("Log Entry 3: User Logged In\\nLog Entry 4: Backup Completed\\n")

# Append file2 into file1
with open(file1, "a", encoding="utf-8") as dst, open(file2, "r", encoding="utf-8") as src:
    for line in src:
        dst.write(line)

print("Combined Log File:")
with open(file1, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [file1, file2]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Entries 3 and 4 are appended to Entries 1 and 2, producing 4 sequential entries in main_log.txt.",
            "notes": "Mode 'a' creates the destination file if it doesn't already exist.",
            "commonMistakes": "Using mode 'w' instead of 'a', which completely wipes out previous content in file1.",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(1) line-by-line streaming"
        },
        {
            "id": 53,
            "number": "053",
            "title": "Copy odd lines of one file to other",
            "cleanTitle": "Copy odd lines of one file to other",
            "category": "File Handling Programs",
            "introduction": "Filters lines based on their index and copies only odd-numbered lines (1, 3, 5, ...) to another file.",
            "explanation": "Tracks line numbers using enumerate(f, start=1) and writes only when line_num % 2 != 0.",
            "syntax": "if line_num % 2 != 0: dst.write(line)",
            "keywordsOrMethods": ["odd lines", "enumerate", "modulo filtering", "file transfer"],
            "codeExample": """# Program to copy odd lines of one file to another
import os

source_file = "all_lines.txt"
dest_file = "odd_lines.txt"

with open(source_file, "w", encoding="utf-8") as f:
    for i in range(1, 7):
        f.write(f"Line {i}: This is row number {i}\\n")

with open(source_file, "r", encoding="utf-8") as src, open(dest_file, "w", encoding="utf-8") as dst:
    for idx, line in enumerate(src, start=1):
        if idx % 2 != 0:
            dst.write(line)

print("Copied Odd Lines:")
with open(dest_file, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [source_file, dest_file]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Copies Lines 1, 3, and 5 to the destination file, ignoring even lines 2, 4, and 6.",
            "notes": "start=1 ensures that the first physical line is recognized as odd (1).",
            "commonMistakes": "Defaulting enumerate to 0, which would treat the first line as 0 (even).",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 54,
            "number": "054",
            "title": "Merge two files into a third file",
            "cleanTitle": "Merge two files into a third file",
            "category": "File Handling Programs",
            "introduction": "Combines data from two distinct files into a new target output file.",
            "explanation": "Iterates sequentially through both files and streams their contents into the merged file.",
            "syntax": "with open(merged, 'w') as out:\n    for fname in [f1, f2]:\n        with open(fname) as inp: out.write(inp.read())",
            "keywordsOrMethods": ["file merging", "file consolidation", "stream copy"],
            "codeExample": """# Program to merge two files into a third file
import os

file_a = "part_a.txt"
file_b = "part_b.txt"
file_merged = "full_report.txt"

with open(file_a, "w", encoding="utf-8") as f:
    f.write("=== Part A Header ===\\nSection 1 data\\n")

with open(file_b, "w", encoding="utf-8") as f:
    f.write("=== Part B Header ===\\nSection 2 data\\n")

with open(file_merged, "w", encoding="utf-8") as outfile:
    for src_name in [file_a, file_b]:
        with open(src_name, "r", encoding="utf-8") as infile:
            for line in infile:
                outfile.write(line)

print("Merged File Content:")
with open(file_merged, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [file_a, file_b, file_merged]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Streams contents of Part A followed by Part B into full_report.txt.",
            "notes": "Using shutil.copyfileobj or line streaming avoids loading large files into RAM.",
            "commonMistakes": "Opening the destination in 'w' inside the loop, which wipes Part A when processing Part B.",
            "timeComplexity": "O(N + M) where N and M are file sizes",
            "spaceComplexity": "O(1) streaming"
        },
        {
            "id": 55,
            "number": "055",
            "title": "Reverse a single line of a text file",
            "cleanTitle": "Reverse a single line of a text file",
            "category": "File Handling Programs",
            "introduction": "Reverses the character sequence of a targeted line in a text file.",
            "explanation": "Stripping newline, reversing using slicing [::-1], and re-adding newline.",
            "syntax": "reversed_line = line.rstrip('\\r\\n')[::-1] + '\\n'",
            "keywordsOrMethods": ["string slicing", "[::-1]", "line reversal", "in-place update"],
            "codeExample": """# Program to reverse a specific line of a text file
import os

filename = "lines_demo.txt"
lines = [
    "First line stays normal.",
    "REVERSE THIS PARTICULAR LINE",
    "Third line stays normal."
]

with open(filename, "w", encoding="utf-8") as f:
    f.write("\\n".join(lines) + "\\n")

target_line_num = 2

# Read lines, reverse the target, write back
with open(filename, "r", encoding="utf-8") as f:
    file_lines = f.readlines()

if 1 <= target_line_num <= len(file_lines):
    idx = target_line_num - 1
    file_lines[idx] = file_lines[idx].rstrip('\\r\\n')[::-1] + '\\n'

with open(filename, "w", encoding="utf-8") as f:
    f.writelines(file_lines)

print("Updated File Contents:")
with open(filename, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
if os.path.exists(filename):
    os.remove(filename)
""",
            "expectedOutput": "",
            "resultExplanation": "Line 2 'REVERSE THIS PARTICULAR LINE' becomes 'ENIL RALUCITRAP SIHT ESREVER'.",
            "notes": "Always strip the newline before reversing to avoid placing '\\n' at the beginning of the line.",
            "commonMistakes": "Reversing without stripping '\\n', causing line breaks to appear in front of text.",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(N)"
        },
        {
            "id": 56,
            "number": "056",
            "title": "Reverse the content of a file and store it in another file",
            "cleanTitle": "Reverse the content of a file and store it in another file",
            "category": "File Handling Programs",
            "introduction": "Reverses line ordering from bottom to top and stores the reversed lines into a new file.",
            "explanation": "Reads all lines into a list and iterates backwards using reversed() or slice [::-1].",
            "syntax": "with open(src) as s, open(dst, 'w') as d:\n    d.writelines(reversed(s.readlines()))",
            "keywordsOrMethods": ["reversed()", "line inversion", "bottom-to-top", "file writing"],
            "codeExample": """# Program to reverse file content line-by-line into another file
import os

src_file = "original_order.txt"
dst_file = "reversed_order.txt"

content = [
    "Header: Chapter 1",
    "Section 1.1: Intro",
    "Section 1.2: Deep Dive",
    "Conclusion: Summary"
]

with open(src_file, "w", encoding="utf-8") as f:
    f.write("\\n".join(content) + "\\n")

# Reverse lines
with open(src_file, "r", encoding="utf-8") as src, open(dst_file, "w", encoding="utf-8") as dst:
    lines = src.readlines()
    for line in reversed(lines):
        dst.write(line)

print("Reversed File Lines:")
with open(dst_file, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [src_file, dst_file]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Writes lines in reverse order, ending with Conclusion at the top and Header at the bottom.",
            "notes": "reversed() returns an iterator that traverses the list in reverse without creating an extra copy.",
            "commonMistakes": "Forgetting that the last line might lack a trailing newline, causing the first two reversed lines to merge.",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(N) for lines list"
        },
        {
            "id": 57,
            "number": "057",
            "title": "Reverse the Content of a File using Stack",
            "cleanTitle": "Reverse the Content of a File using Stack",
            "category": "File Handling Programs",
            "introduction": "Demonstrates the Last-In-First-Out (LIFO) property of a Stack data structure to reverse file contents.",
            "explanation": "Pushes lines onto a stack (Python list) as they are read, then pops items one by one into the output file.",
            "syntax": "stack.append(line)\nwhile stack: out.write(stack.pop())",
            "keywordsOrMethods": ["stack", "LIFO", "push & pop", "data structures", "reversal"],
            "codeExample": """# Program to reverse file content using a Stack (LIFO)
import os

src_file = "stack_input.txt"
dst_file = "stack_output.txt"

lines = [
    "Step 1: Planning",
    "Step 2: Coding",
    "Step 3: Testing",
    "Step 4: Deployment"
]

with open(src_file, "w", encoding="utf-8") as f:
    f.write("\\n".join(lines) + "\\n")

class FileStack:
    def __init__(self):
        self._items = []
    def push(self, item):
        self._items.append(item)
    def pop(self):
        return self._items.pop()
    def is_empty(self):
        return len(self._items) == 0

stack = FileStack()

# Push lines onto stack
with open(src_file, "r", encoding="utf-8") as f:
    for line in f:
        stack.push(line)

# Pop lines off stack into output
with open(dst_file, "w", encoding="utf-8") as f:
    while not stack.is_empty():
        f.write(stack.pop())

print("Reversed using Stack:")
with open(dst_file, "r", encoding="utf-8") as f:
    print(f.read().strip())

# Cleanup
for f in [src_file, dst_file]:
    if os.path.exists(f): os.remove(f)
""",
            "expectedOutput": "",
            "resultExplanation": "Pushing 1, 2, 3, 4 onto stack and popping yields 4, 3, 2, 1 (LIFO order).",
            "notes": "A stack is the foundational computer science data structure for reversing sequences.",
            "commonMistakes": "Calling pop() on an empty stack raises an IndexError.",
            "timeComplexity": "O(N) pushes and pops",
            "spaceComplexity": "O(N) stack storage"
        }
    ]
    return lessons
