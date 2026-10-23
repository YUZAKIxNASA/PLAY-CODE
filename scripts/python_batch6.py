"""
Batch 6:
- Category 8: Matrix Programs (7 lessons, IDs 117-123)
- Category 9: String Programs (24 lessons, IDs 124-147)
Total = 31 lessons (IDs 117-147)
"""

def get_batch6():
    lessons = [
        # --- Category 8: Matrix Programs (7) ---
        {
            "id": 117,
            "number": "117",
            "title": "Add two Matrices",
            "cleanTitle": "Add two Matrices",
            "category": "Matrix Programs",
            "introduction": "Adds two 2D matrices of identical dimensions element-by-element.",
            "explanation": "Iterates through row index i and column index j, computing result[i][j] = X[i][j] + Y[i][j].",
            "syntax": "[[X[i][j] + Y[i][j] for j in range(len(X[0]))] for i in range(len(X))]",
            "keywordsOrMethods": ["matrix addition", "2D lists", "nested comprehension", "linear algebra"],
            "codeExample": """# Program to add two matrices using nested list comprehension
X = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

Y = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

# Addition
result = [[X[i][j] + Y[i][j] for j in range(len(X[0]))] for i in range(len(X))]

print("Matrix X:")
for r in X: print(" ", r)
print("Matrix Y:")
for r in Y: print(" ", r)
print("Sum (X + Y):")
for r in result: print(" ", r)
""",
            "expectedOutput": "",
            "resultExplanation": "Every element sum equals 10 (e.g. 1+9, 2+8, 3+7).",
            "notes": "Matrices must have identical rows and columns for element-wise addition.",
            "commonMistakes": "Confusing row index with column index or assuming dimensions are identical without checking.",
            "timeComplexity": "O(R * C) where R is rows and C is columns",
            "spaceComplexity": "O(R * C)"
        },
        {
            "id": 118,
            "number": "118",
            "title": "Multiply two matrices",
            "cleanTitle": "Multiply two matrices",
            "category": "Matrix Programs",
            "introduction": "Multiplies two matrices X (r1 x c1) and Y (r2 x c2), valid when c1 == r2.",
            "explanation": "Calculates the dot product of row i from matrix X and column j from matrix Y: result[i][j] = sum(X[i][k] * Y[k][j]).",
            "syntax": "result[i][j] = sum(X[i][k] * Y[k][j] for k in range(len(Y)))",
            "keywordsOrMethods": ["matrix multiplication", "dot product", "triple loop", "linear algebra"],
            "codeExample": """# Program to multiply two matrices
X = [
    [1, 2],
    [3, 4]
]

Y = [
    [5, 6],
    [7, 8]
]

# Dimensions: X is 2x2, Y is 2x2
result = [[sum(X[i][k] * Y[k][j] for k in range(len(Y))) for j in range(len(Y[0]))] for i in range(len(X))]

print("Matrix X:")
for r in X: print(" ", r)
print("Matrix Y:")
for r in Y: print(" ", r)
print("Product (X * Y):")
for r in result: print(" ", r)
""",
            "expectedOutput": "",
            "resultExplanation": "Result row 1: [1*5+2*7=19, 1*6+2*8=22]; row 2: [3*5+4*7=43, 3*6+4*8=50].",
            "notes": "Matrix multiplication is not commutative (X * Y != Y * X).",
            "commonMistakes": "Attempting multiplication when columns of X do not match rows of Y.",
            "timeComplexity": "O(R1 * C1 * C2)",
            "spaceComplexity": "O(R1 * C2)"
        },
        {
            "id": 119,
            "number": "119",
            "title": "Matrix Product",
            "cleanTitle": "Matrix Product",
            "category": "Matrix Programs",
            "introduction": "Calculates the total aggregate product of every scalar element contained in a matrix.",
            "explanation": "Flattens elements or loops over rows and columns, multiplying into a running product accumulator.",
            "syntax": "import math\nprod = math.prod(x for row in matrix for x in row)",
            "keywordsOrMethods": ["matrix product", "flattening", "math.prod", "scalar product"],
            "codeExample": """# Program to find total Matrix Product (product of all elements)
import math

matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

# Flatten and compute product
total_product = math.prod(val for row in matrix for val in row)

print("Matrix:")
for r in matrix: print(" ", r)
print(f"Total product of all elements: {total_product}")
print("1 * 2 * 3 * 4 * 5 * 6 = 720")
""",
            "expectedOutput": "",
            "resultExplanation": "1 * 2 * 3 * 4 * 5 * 6 = 720.",
            "notes": "math.prod across generator avoids creating an intermediate full-size flattened list.",
            "commonMistakes": "Confusing matrix product (all elements multiplied) with matrix multiplication.",
            "timeComplexity": "O(R * C)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 120,
            "number": "120",
            "title": "Adding and Subtracting Matrices",
            "cleanTitle": "Adding and Subtracting Matrices",
            "category": "Matrix Programs",
            "introduction": "Performs both element-wise addition and subtraction on two congruent matrices.",
            "explanation": "Calculates sum matrix (X[i][j] + Y[i][j]) and difference matrix (X[i][j] - Y[i][j]).",
            "syntax": "add = [[X[i][j] + Y[i][j] ...]]; sub = [[X[i][j] - Y[i][j] ...]]",
            "keywordsOrMethods": ["matrix subtraction", "matrix addition", "element-wise", "linear algebra"],
            "codeExample": """# Program for Adding and Subtracting Matrices
A = [
    [10, 20],
    [30, 40]
]

B = [
    [1, 2],
    [3, 4]
]

rows, cols = len(A), len(A[0])
add_matrix = [[A[i][j] + B[i][j] for j in range(cols)] for i in range(rows)]
sub_matrix = [[A[i][j] - B[i][j] for j in range(cols)] for i in range(rows)]

print("Matrix A + B:")
for r in add_matrix: print(" ", r)

print("Matrix A - B:")
for r in sub_matrix: print(" ", r)
""",
            "expectedOutput": "",
            "resultExplanation": "Sum is [[11, 22], [33, 44]], and Difference is [[9, 18], [27, 36]].",
            "notes": "Both matrices must have identical row and column lengths.",
            "commonMistakes": "Subtracting B - A instead of A - B when subtraction is non-commutative.",
            "timeComplexity": "O(R * C)",
            "spaceComplexity": "O(R * C)"
        },
        {
            "id": 121,
            "number": "121",
            "title": "Matrix creation of n*n",
            "cleanTitle": "Matrix creation of n*n",
            "category": "Matrix Programs",
            "introduction": "Generates an n x n square matrix filled with zeros, sequential numbers, or specified values.",
            "explanation": "Uses list comprehension `[[val for _ in range(n)] for _ in range(n)]` to create independent row lists.",
            "syntax": "matrix = [[0 for _ in range(n)] for _ in range(n)]",
            "keywordsOrMethods": ["matrix creation", "list comprehension", "n*n grid", "zero matrix"],
            "codeExample": """# Program to create an n*n matrix
n = 3

# 1. Zero Matrix
zero_matrix = [[0 for _ in range(n)] for _ in range(n)]

# 2. Sequential Numbers Matrix (1 to n*n)
seq_matrix = [[i * n + j + 1 for j in range(n)] for i in range(n)]

print(f"{n}x{n} Zero Matrix:")
for r in zero_matrix: print(" ", r)

print(f"\\n{n}x{n} Sequential Matrix:")
for r in seq_matrix: print(" ", r)
""",
            "expectedOutput": "",
            "resultExplanation": "Creates a 3x3 grid populated with zeros, and a 3x3 sequential grid from 1 to 9.",
            "notes": "Never use `[[0] * n] * n` because that duplicates the exact same row reference n times.",
            "commonMistakes": "Using `[[0] * n] * n` which creates shallow references: modifying one row modifies all rows.",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(n^2)"
        },
        {
            "id": 122,
            "number": "122",
            "title": "Get Kth Column of Matrix",
            "cleanTitle": "Get Kth Column of Matrix",
            "category": "Matrix Programs",
            "introduction": "Extracts all elements belonging to column index k from a 2D matrix.",
            "explanation": "List comprehension `[row[k] for row in matrix]` selects the k-th item from every row.",
            "syntax": "col_k = [row[k] for row in matrix]",
            "keywordsOrMethods": ["column extraction", "list comprehension", "2D slicing", "k-th column"],
            "codeExample": """# Program to get Kth Column of Matrix
matrix = [
    [4, 5, 6, 7],
    [1, 2, 3, 0],
    [8, 9, 10, 11]
]

k = 2  # Extract column at index 2 (0-based)

# Extract kth column
kth_column = [row[k] for row in matrix]

print("Matrix:")
for r in matrix: print(" ", r)
print(f"\\nColumn at index {k}: {kth_column}")
""",
            "expectedOutput": "",
            "resultExplanation": "Extracts index 2 from each row: [6, 3, 10].",
            "notes": "Unlike numpy matrices, standard Python lists cannot be column-sliced with `matrix[:, k]`.",
            "commonMistakes": "Attempting `matrix[:][k]` which returns the entire k-th row instead of the column.",
            "timeComplexity": "O(R) where R is rows count",
            "spaceComplexity": "O(R)"
        },
        {
            "id": 123,
            "number": "123",
            "title": "Vertical Concatenation in Matrix",
            "cleanTitle": "Vertical Concatenation in Matrix",
            "category": "Matrix Programs",
            "introduction": "Concatenates string elements of a matrix vertically column by column across rows.",
            "explanation": "Zips columns across rows and joins strings vertically using `[''.join(col) for col in zip(*matrix)]`.",
            "syntax": "[''.join(col) for col in zip(*matrix)]",
            "keywordsOrMethods": ["zip(*matrix)", "vertical concatenation", "transpose join", "matrix"],
            "codeExample": """# Program for Vertical Concatenation in Matrix
matrix = [
    ["P", "C", "I"],
    ["L", "O", "S"],
    ["A", "D", "!"],
    ["Y", "E", "!"]
]

# Vertical concatenation: column-wise join
# zip(*matrix) transposes rows into columns
result = [''.join(column) for column in zip(*matrix)]

print("Original Matrix:")
for r in matrix: print(" ", r)

print(f"\\nVertical Concatenation: {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "Column 0 joins into 'PLAY', Column 1 into 'CODE', Column 2 into 'IS!!'.",
            "notes": "zip(*matrix) is the idiomatic Python construct for transposing 2D matrices.",
            "commonMistakes": "Concatenating horizontally (rows) instead of vertically (columns).",
            "timeComplexity": "O(R * C)",
            "spaceComplexity": "O(C)"
        },

        # --- Category 9: String Programs (24) ---
        {
            "id": 124,
            "number": "124",
            "title": "Check if a string is palindrome or not",
            "cleanTitle": "Check if a string is palindrome or not",
            "category": "String Programs",
            "introduction": "A palindrome is a string that reads identically forwards and backwards.",
            "explanation": "Compares string s with its reversed slice s[::-1].",
            "syntax": "is_pal = (s == s[::-1])",
            "keywordsOrMethods": ["palindrome", "slice [::-1]", "symmetry", "string"],
            "codeExample": """# Program to check if a string is palindrome
def is_palindrome(s):
    # Optional: case-insensitive & alphanumeric only
    cleaned = ''.join(ch.lower() for ch in s if ch.isalnum())
    return cleaned == cleaned[::-1]

test_strings = [
    "radar",
    "Level",
    "A man, a plan, a canal: Panama",
    "Python",
    "racecar"
]

for text in test_strings:
    status = "PALINDROME" if is_palindrome(text) else "NOT Palindrome"
    print(f"'{text:<30}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "radar, Level, 'A man, a plan, a canal: Panama', and racecar are palindromes. Python is not.",
            "notes": "Cleaning punctuation and standardizing case handles real-world sentence palindromes.",
            "commonMistakes": "Failing to normalize case (e.g. 'Radar' fails if case isn't lowered).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 125,
            "number": "125",
            "title": "Reverse words in a given String",
            "cleanTitle": "Reverse words in a given String",
            "category": "String Programs",
            "introduction": "Reverses the order of words in a sentence while keeping individual letters in each word intact.",
            "explanation": "Splits the string into words using s.split(), reverses the list using [::-1], and rejoins with ' '.join().",
            "syntax": "reversed_words = ' '.join(s.split()[::-1])",
            "keywordsOrMethods": ["split()", "join()", "word reversal", "tokens"],
            "codeExample": """# Program to reverse words in a given string
sentence = "CodePlay makes learning programming interactive and fun"

# Split on whitespace, reverse words list, join back
reversed_sentence = " ".join(sentence.split()[::-1])

print(f"Original: '{sentence}'")
print(f"Reversed: '{reversed_sentence}'")
""",
            "expectedOutput": "",
            "resultExplanation": "The words appear in backwards order starting with 'fun' and ending with 'CodePlay'.",
            "notes": "split() without arguments collapses multiple consecutive whitespaces automatically.",
            "commonMistakes": "Reversing characters instead of words (e.g. s[::-1] reverses all letters).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 126,
            "number": "126",
            "title": "Ways to remove i'th character from string",
            "cleanTitle": "Ways to remove i'th character from string",
            "category": "String Programs",
            "introduction": "Deletes the character situated at index i from a string.",
            "explanation": "Because strings in Python are immutable, we concatenate slices s[:i] + s[i+1:].",
            "syntax": "new_s = s[:i] + s[i+1:]",
            "keywordsOrMethods": ["string slicing", "immutability", "remove char", "index"],
            "codeExample": """# Ways to remove i'th character from string
text = "PLAY-CODE"
i = 4  # index of hyphen '-'

# Method 1: Slicing (Idiomatic & Fastest)
method1 = text[:i] + text[i+1:]
print(f"Original: {text}")
print(f"Method 1 (Slicing): {method1}")

# Method 2: List comprehension
method2 = ''.join([ch for idx, ch in enumerate(text) if idx != i])
print(f"Method 2 (List comp): {method2}")
""",
            "expectedOutput": "",
            "resultExplanation": "Removes the character '-' at index 4, transforming 'PLAY-CODE' into 'PLAYCODE'.",
            "notes": "Python strings cannot be modified in place; slicing creates a new string efficiently.",
            "commonMistakes": "Attempting `del s[i]` which raises a TypeError because str is immutable.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 127,
            "number": "127",
            "title": "Check if a Substring is Present in a Given String",
            "cleanTitle": "Check if a Substring is Present in a Given String",
            "category": "String Programs",
            "introduction": "Determines whether a target word or phrase exists inside a larger text.",
            "explanation": "Uses the 'in' operator, str.find(), or str.index().",
            "syntax": "if sub in text:\n# or\nif text.find(sub) != -1:",
            "keywordsOrMethods": ["in operator", "str.find()", "substring", "membership"],
            "codeExample": """# Program to check if a substring is present in a string
main_str = "Welcome to the interactive Python learning studio"
sub1 = "Python"
sub2 = "Java"

print(f"Main String: '{main_str}'\\n")
print(f"Contains '{sub1}'? {sub1 in main_str}")
print(f"Contains '{sub2}'? {sub2 in main_str}")

# Using find() which returns start index or -1
idx = main_str.find(sub1)
print(f"Index of '{sub1}': {idx}")
""",
            "expectedOutput": "",
            "resultExplanation": "'Python' is present starting at index 27; 'Java' is not found.",
            "notes": "The 'in' operator in Python uses an optimized Boyer-Moore-Horspool search algorithm in C.",
            "commonMistakes": "Using str.index() which raises ValueError when the substring is not found.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 128,
            "number": "128",
            "title": "Find Word Frequency in a String",
            "cleanTitle": "Find Word Frequency in a String",
            "category": "String Programs",
            "introduction": "Counts the number of times each unique word appears in a text document.",
            "explanation": "Tokenizes words using split() and counts frequencies using collections.Counter or dict.",
            "syntax": "from collections import Counter\nfreq = Counter(text.lower().split())",
            "keywordsOrMethods": ["Counter", "word frequency", "tokenization", "dictionary"],
            "codeExample": """# Program to find word frequency in a string
from collections import Counter
import string

text = "Python is great and Python is simple. Learning Python is fun!"

# Clean punctuation and normalize case
cleaned_text = text.translate(str.maketrans("", "", string.punctuation)).lower()
word_counts = Counter(cleaned_text.split())

print(f"Text: '{text}'\\n")
print(f"{'Word':<10} | {'Frequency':<10}")
print("-" * 23)
for word, count in word_counts.most_common():
    print(f"{word:<10} | {count:<10}")
""",
            "expectedOutput": "",
            "resultExplanation": "'python' appears 3 times, 'is' appears 3 times, etc.",
            "notes": "str.maketrans() strips punctuation characters before counting.",
            "commonMistakes": "Counting words without stripping trailing punctuation like 'fun!'.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(w) unique words"
        },
        {
            "id": 129,
            "number": "129",
            "title": "Convert Snake case to Pascal case",
            "cleanTitle": "Convert Snake case to Pascal case",
            "category": "String Programs",
            "introduction": "Converts an identifier from snake_case (lowercase with underscores) to PascalCase (capitalized words concatenated without underscores).",
            "explanation": "Splits by '_', capitalizes each word using str.capitalize() or title(), and joins with ''.join().",
            "syntax": "''.join(w.capitalize() for w in s.split('_'))",
            "keywordsOrMethods": ["snake_case", "PascalCase", "capitalize()", "split('_')"],
            "codeExample": """# Program to convert Snake case to Pascal case
def snake_to_pascal(snake_str):
    # Split on underscore, capitalize each piece, concatenate
    return "".join(word.capitalize() for word in snake_str.split("_"))

identifiers = [
    "play_code_platform",
    "user_account_id",
    "get_prime_factors",
    "simple_variable"
]

for s in identifiers:
    print(f"Snake case: {s:<22} -> Pascal case: {snake_to_pascal(s)}")
""",
            "expectedOutput": "",
            "resultExplanation": "play_code_platform -> PlayCodePlatform; user_account_id -> UserAccountId.",
            "notes": "Use .capitalize() rather than .title() to avoid unwanted internal letter adjustments.",
            "commonMistakes": "Using .title() on words with digits which can cause unexpected uppercase characters.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 130,
            "number": "130",
            "title": "Find length of a string (4 ways)",
            "cleanTitle": "Find length of a string (4 ways)",
            "category": "String Programs",
            "introduction": "Calculates string length using four different implementation paradigms.",
            "explanation": "Demonstrates 1) built-in len(), 2) for-loop counter, 3) while loop with slicing, and 4) sum generator.",
            "syntax": "len(s); sum(1 for _ in s)",
            "keywordsOrMethods": ["string length", "len()", "iteration", "while loop"],
            "codeExample": """# Program to find length of a string in 4 ways
text = "PLAY-CODE"

# Way 1: Built-in len()
len1 = len(text)

# Way 2: For loop counter
len2 = 0
for _ in text:
    len2 += 1

# Way 3: While loop with slicing
len3 = 0
temp = text
while temp:
    temp = temp[1:]
    len3 += 1

# Way 4: Generator with sum()
len4 = sum(1 for _ in text)

print(f"String: '{text}'")
print(f"Way 1 (len()):           {len1}")
print(f"Way 2 (for loop):        {len2}")
print(f"Way 3 (while & slice):   {len3}")
print(f"Way 4 (sum generator):   {len4}")
""",
            "expectedOutput": "",
            "resultExplanation": "All four methods evaluate the string length to 9.",
            "notes": "len() is O(1) in CPython because Python strings cache their length in the object header.",
            "commonMistakes": "Looping to find string length in production when len() is O(1).",
            "timeComplexity": "O(1) with len(), O(n) for loops",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 131,
            "number": "131",
            "title": "Print even length words in a string",
            "cleanTitle": "Print even length words in a string",
            "category": "String Programs",
            "introduction": "Filters words in a sentence and displays only those with an even number of characters.",
            "explanation": "Splits text on whitespace and checks if len(word) % 2 == 0 for each token.",
            "syntax": "[w for w in text.split() if len(w) % 2 == 0]",
            "keywordsOrMethods": ["even length", "modulo", "split()", "filtering"],
            "codeExample": """# Program to print even length words in a string
text = "Python is a powerful language that is easy to learn and write"

even_words = [word for word in text.split() if len(word) % 2 == 0]

print(f"Sentence: '{text}'\\n")
print("Even length words:")
for w in even_words:
    print(f"  '{w}' (length: {len(w)})")
""",
            "expectedOutput": "",
            "resultExplanation": "Words like 'Python' (6), 'is' (2), 'language' (8), 'that' (4), 'is' (2), and 'easy' (4) have even length.",
            "notes": "Whitespace-based split() tokenizes cleanly.",
            "commonMistakes": "Not stripping punctuation which alters word character counts.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 132,
            "number": "132",
            "title": "Check if a String Contains All Vowels",
            "cleanTitle": "Check if a String Contains All Vowels",
            "category": "String Programs",
            "introduction": "Verifies whether a string contains all 5 vowels (a, e, i, o, u) at least once.",
            "explanation": "Checks if the set of vowels is a subset of the lowercase characters in the string.",
            "syntax": "set('aeiou').issubset(set(text.lower()))",
            "keywordsOrMethods": ["issubset()", "vowels", "set", "pangram check"],
            "codeExample": """# Program to check if a string contains all vowels
def contains_all_vowels(text):
    vowels = set("aeiou")
    # Check if all vowels are present in lowercased string characters
    return vowels.issubset(set(text.lower()))

samples = [
    "The quick brown fox jumps over the lazy dog",
    "Education",
    "Sequentia",
    "Hello World"
]

for s in samples:
    status = "CONTAINS ALL VOWELS" if contains_all_vowels(s) else "MISSING SOME VOWELS"
    print(f"'{s:<45}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'Education' and 'The quick brown fox jumps over the lazy dog' contain all 5 vowels a, e, i, o, u.",
            "notes": "set.issubset() provides clean mathematical subset verification.",
            "commonMistakes": "Checking `if 'aeiou' in text` which looks for the consecutive substring 'aeiou'.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 133,
            "number": "133",
            "title": "Count Matching Characters in Two Strings",
            "cleanTitle": "Count Matching Characters in Two Strings",
            "category": "String Programs",
            "introduction": "Counts the number of common unique characters present in both strings.",
            "explanation": "Computes the intersection of sets of characters from both strings: len(set(s1) & set(s2)).",
            "syntax": "count = len(set(s1) & set(s2))",
            "keywordsOrMethods": ["set intersection", "& operator", "matching characters", "common chars"],
            "codeExample": """# Program to count matching unique characters in two strings
def count_matching_characters(s1, s2):
    # Set intersection gives all common unique characters
    common = set(s1.lower()) & set(s2.lower())
    # Exclude space if needed
    common.discard(' ')
    return len(common), sorted(list(common))

str1 = "playcode"
str2 = "pythonic"

count, matched = count_matching_characters(str1, str2)

print(f"String 1: '{str1}'")
print(f"String 2: '{str2}'")
print(f"Matching unique characters count: {count}")
print(f"Matched Characters: {matched}")
""",
            "expectedOutput": "",
            "resultExplanation": "The shared unique letters are 'c', 'o', 'p', 'y' (4 matching characters).",
            "notes": "The set intersection operator `&` executes in O(min(len(s1), len(s2))) average time.",
            "commonMistakes": "Using nested loops resulting in O(n*m) instead of set intersection O(n + m).",
            "timeComplexity": "O(len(s1) + len(s2))",
            "spaceComplexity": "O(unique chars)"
        },
        {
            "id": 134,
            "number": "134",
            "title": "Remove all duplicates from a given string",
            "cleanTitle": "Remove all duplicates from a given string",
            "category": "String Programs",
            "introduction": "Deduplicates characters in a string, preserving the order of their first appearance.",
            "explanation": "Uses dict.fromkeys() (which preserves insertion order in Python 3.7+) to deduplicate characters.",
            "syntax": "deduped = ''.join(dict.fromkeys(s))",
            "keywordsOrMethods": ["dict.fromkeys()", "deduplication", "order preservation", "unique characters"],
            "codeExample": """# Program to remove all duplicate characters from a string
def remove_duplicates(s):
    # dict.fromkeys preserves original insertion order in Python 3.7+
    return "".join(dict.fromkeys(s))

samples = [
    "programming",
    "play-code 2026",
    "banana",
    "mississippi"
]

for s in samples:
    print(f"Original: '{s:<16}' -> Deduplicated: '{remove_duplicates(s)}'")
""",
            "expectedOutput": "",
            "resultExplanation": "'programming' becomes 'progamin'; 'mississippi' becomes 'misp'.",
            "notes": "dict.fromkeys(s) is faster than maintaining a manual set in Python.",
            "commonMistakes": "Using set(s) directly, which scrambles the character order arbitrarily.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 135,
            "number": "135",
            "title": "Least Frequent Character in String",
            "cleanTitle": "Least Frequent Character in String",
            "category": "String Programs",
            "introduction": "Finds the character that appears the fewest times in a string.",
            "explanation": "Counts character frequencies using collections.Counter and finds the minimum key.",
            "syntax": "from collections import Counter\nmin_char = min(Counter(s), key=Counter(s).get)",
            "keywordsOrMethods": ["Counter", "least frequent", "min with key", "frequency"],
            "codeExample": """# Program to find the least frequent character in a string
from collections import Counter

text = "abracadabra"
# Tally counts
counts = Counter(text)

# Find character with minimum count
min_char = min(counts, key=counts.get)

print(f"String: '{text}'")
print(f"Character Frequencies: {dict(counts)}")
print(f"Least frequent character: '{min_char}' (count: {counts[min_char]})")
""",
            "expectedOutput": "",
            "resultExplanation": "In 'abracadabra': 'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1. 'c' has frequency 1.",
            "notes": "If multiple characters share minimum frequency, min() returns the first one encountered.",
            "commonMistakes": "Counting whitespace as least frequent when analyzing words.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 136,
            "number": "136",
            "title": "Maximum frequency character in String",
            "cleanTitle": "Maximum frequency character in String",
            "category": "String Programs",
            "introduction": "Finds the character with the highest frequency in a given string.",
            "explanation": "Uses collections.Counter(s).most_common(1)[0] to get the top character.",
            "syntax": "max_char, count = Counter(s).most_common(1)[0]",
            "keywordsOrMethods": ["most_common()", "maximum frequency", "Counter", "frequency analysis"],
            "codeExample": """# Program to find maximum frequency character in string
from collections import Counter

text = "playcode-learning-platform"
counts = Counter(text)
max_char, count = counts.most_common(1)[0]

print(f"String: '{text}'")
print(f"Maximum frequency character: '{max_char}' (appears {count} times)")
""",
            "expectedOutput": "",
            "resultExplanation": "Scans all letters; 'l', 'a', 'e' appear multiple times with 'a' and 'l' occurring 3 times.",
            "notes": "most_common(1) uses an optimized C implementation.",
            "commonMistakes": "Using nested s.count() loops which degrade to O(n^2).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 137,
            "number": "137",
            "title": "Split and join a string",
            "cleanTitle": "Split and join a string",
            "category": "String Programs",
            "introduction": "Splits a string into components on a delimiter and rejoins them using a new delimiter.",
            "explanation": "Demonstrates str.split(delimiter) and delimiter.join(iterable).",
            "syntax": "tokens = s.split(' ')\nnew_str = '-'.join(tokens)",
            "keywordsOrMethods": ["split()", "join()", "delimiter", "string manipulation"],
            "codeExample": """# Program to demonstrate split and join operations
original = "Python is powerful readable and elegant"

# Split by whitespace into list of words
words = original.split()
print(f"Original String: '{original}'")
print(f"After split():   {words}")

# Rejoin with hyphens (kebab-case)
kebab = "-".join(words)
print(f"Rejoined with '-': '{kebab}'")

# Rejoin with underscores (snake_case)
snake = "_".join(words)
print(f"Rejoined with '_': '{snake}'")
""",
            "expectedOutput": "",
            "resultExplanation": "Splits on spaces into 6 words and rejoins them with '-' or '_'.",
            "notes": "''.join(list) is the fastest way to concatenate multiple strings in Python.",
            "commonMistakes": "Using += in a loop to concatenate strings, creating quadratic string reallocation overhead.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 138,
            "number": "138",
            "title": "Check if a given string is binary string or not",
            "cleanTitle": "Check if a given string is binary string or not",
            "category": "String Programs",
            "introduction": "Checks whether a string is composed entirely of binary digits ('0' and '1').",
            "explanation": "Validates that set(s).issubset({'0', '1'}) or all(ch in '01' for ch in s).",
            "syntax": "set(s).issubset({'0', '1'})",
            "keywordsOrMethods": ["binary string", "issubset", "digits 0 and 1", "validation"],
            "codeExample": """# Program to check if a string is a binary string
def is_binary_string(s):
    if not s:
        return False
    # Set of characters must be subset of {'0', '1'}
    return set(s).issubset({'0', '1'})

test_strings = [
    "10101001",
    "1100201",
    "0000",
    "1",
    "10A01"
]

for s in test_strings:
    status = "BINARY STRING" if is_binary_string(s) else "NOT binary"
    print(f"'{s:<10}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'10101001', '0000', and '1' contain only 0s and 1s; '1100201' contains 2; '10A01' contains A.",
            "notes": "Handles strings consisting solely of '0's or solely of '1's correctly.",
            "commonMistakes": "Requiring both '0' and '1' to be present; '0000' is still a valid binary string.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 139,
            "number": "139",
            "title": "Find uncommon words from two Strings",
            "cleanTitle": "Find uncommon words from two Strings",
            "category": "String Programs",
            "introduction": "Finds words that appear in either the first string or the second string, but not in both.",
            "explanation": "Computes the symmetric difference of words using set(s1.split()) ^ set(s2.split()).",
            "syntax": "uncommon = set(s1.split()) ^ set(s2.split())",
            "keywordsOrMethods": ["symmetric difference", "^ operator", "uncommon words", "set"],
            "codeExample": """# Program to find uncommon words from two strings
str1 = "apple banana mango cherry"
str2 = "banana mango peach kiwi"

# Symmetric difference (words in either set, but not both)
words1 = set(str1.split())
words2 = set(str2.split())

uncommon = sorted(list(words1 ^ words2))

print(f"String 1: '{str1}'")
print(f"String 2: '{str2}'")
print(f"Uncommon Words: {uncommon}")
""",
            "expectedOutput": "",
            "resultExplanation": "'apple', 'cherry', 'kiwi', and 'peach' appear in only one of the two strings.",
            "notes": "The XOR operator `^` between sets computes symmetric difference directly.",
            "commonMistakes": "Using standard difference `-` which only returns words unique to the first string.",
            "timeComplexity": "O(n + m)",
            "spaceComplexity": "O(n + m)"
        },
        {
            "id": 140,
            "number": "140",
            "title": "Replace duplicate Occurrence in String",
            "cleanTitle": "Replace duplicate Occurrence in String",
            "category": "String Programs",
            "introduction": "Replaces second and subsequent occurrences of duplicate words with a replacement marker.",
            "explanation": "Iterates through words tracking seen words in a set; if word is already in seen, replaces with replacement token.",
            "syntax": "res = [rep if w in seen else (seen.add(w) or w) for w in words]",
            "keywordsOrMethods": ["duplicate replacement", "seen set", "token substitution", "word stream"],
            "codeExample": """# Program to replace duplicate occurrences in a string
text = "python is great and python is dynamic and python is loved"
replacement = "[REPEATED]"

words = text.split()
seen = set()
result_words = []

for w in words:
    if w in seen:
        result_words.append(replacement)
    else:
        seen.add(w)
        result_words.append(w)

result = " ".join(result_words)
print(f"Original: {text}")
print(f"Replaced: {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "First occurrences are kept; duplicate 'python', 'is', 'and' become '[REPEATED]'.",
            "notes": "Maintaining a set provides O(1) membership check per word.",
            "commonMistakes": "Replacing words globally with str.replace() which replaces the first occurrence too.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 141,
            "number": "141",
            "title": "Replace multiple words with K",
            "cleanTitle": "Replace multiple words with K",
            "category": "String Programs",
            "introduction": "Substitutes any word belonging to a targeted list of words with a replacement string K.",
            "explanation": "Converts target word list to a set and maps each word to K if it exists in the set.",
            "syntax": "[k if w in target_set else w for w in s.split()]",
            "keywordsOrMethods": ["word replacement", "censor", "masking", "set lookup"],
            "codeExample": """# Program to replace multiple words with K
text = "The weather today is cloudy and raining heavily outside"
targets = ["cloudy", "raining"]
K = "sunny"

target_set = set(targets)
result = " ".join([K if w in target_set else w for w in text.split()])

print(f"Original: {text}")
print(f"Words to replace: {targets} with '{K}'")
print(f"Result  : {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "Replaces 'cloudy' and 'raining' with 'sunny'.",
            "notes": "Using a set for target words allows O(1) checks during the transformation pass.",
            "commonMistakes": "Iterating over targets and repeatedly calling str.replace() which can cause partial substring replacements.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 142,
            "number": "142",
            "title": "Check for URL in a String",
            "cleanTitle": "Check for URL in a String",
            "category": "String Programs",
            "introduction": "Detects whether an arbitrary text snippet contains any embedded web URLs.",
            "explanation": "Uses regex search for http/https URLs: `re.search(r'https?://\\S+', text)`.",
            "syntax": "import re\nbool(re.search(r'https?://[\\w\\-._~:/?#[\\]@!$&\\'()*+,;=]+', text))",
            "keywordsOrMethods": ["URL detection", "re.search", "http regex", "link finder"],
            "codeExample": """# Program to check for URL in a string and extract links
import re

def find_urls(text):
    url_pattern = r'https?://[^\s<>"]+|www\.[^\s<>"]+'
    return re.findall(url_pattern, text)

sample_text = "Visit https://codeplay.dev for interactive tutorials or check http://example.org/docs."
urls_found = find_urls(sample_text)

print(f"Text: '{sample_text}'\\n")
print(f"Contains URL? {len(urls_found) > 0}")
print(f"URLs Found  : {urls_found}")
""",
            "expectedOutput": "",
            "resultExplanation": "Detects 'https://codeplay.dev' and 'http://example.org/docs'.",
            "notes": "Regex patterns should avoid trailing punctuation like periods or commas at the end of sentences.",
            "commonMistakes": "Matching until whitespace without stripping trailing sentence punctuation.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) matches"
        },
        {
            "id": 143,
            "number": "143",
            "title": "Execute a String of Code",
            "cleanTitle": "Execute a String of Code",
            "category": "String Programs",
            "introduction": "Dynamically compiles and executes a string containing Python source code using exec().",
            "explanation": "Python's exec() function runs dynamic code strings inside an explicit isolated dictionary scope.",
            "syntax": "exec(code_str, globals_dict, locals_dict)",
            "keywordsOrMethods": ["exec()", "eval()", "dynamic code execution", "globals & locals"],
            "codeExample": """# Program to execute a string of Python code dynamically
code_string = \"\"\"
def compute_powers(base, exponent):
    return [base ** i for i in range(1, exponent + 1)]

result = compute_powers(2, 5)
\"\"\"

# Execute inside a controlled namespace dictionary
local_scope = {}
exec(code_string, {}, local_scope)

print("Dynamic Code Executed successfully.")
print(f"Result extracted from local scope: {local_scope['result']}")
""",
            "expectedOutput": "",
            "resultExplanation": "exec() dynamically defines compute_powers and computes 2^1 through 2^5 = [2, 4, 8, 16, 32].",
            "notes": "Always pass custom dictionaries to exec() to prevent untrusted code from modifying your global namespace.",
            "commonMistakes": "Executing untrusted user strings with exec() without security validation.",
            "timeComplexity": "O(compilation + execution)",
            "spaceComplexity": "O(scope size)"
        },
        {
            "id": 144,
            "number": "144",
            "title": "String slicing to rotate a string",
            "cleanTitle": "String slicing to rotate a string",
            "category": "String Programs",
            "introduction": "Rotates characters of a string left or right by d positions using slicing.",
            "explanation": "Left rotation: s[d:] + s[:d]; Right rotation: s[-d:] + s[:-d].",
            "syntax": "left = s[d:] + s[:d]\nright = s[-d:] + s[:-d]",
            "keywordsOrMethods": ["string slicing", "left rotation", "right rotation", "rotation by d"],
            "codeExample": """# Program for string slicing to rotate a string
def rotate_string(s, d):
    d = d % len(s)
    left_rotated = s[d:] + s[:d]
    right_rotated = s[-d:] + s[:-d]
    return left_rotated, right_rotated

text = "CodePlay"
d = 2

left, right = rotate_string(text, d)
print(f"Original String: '{text}'")
print(f"Left rotated by {d} : '{left}'")
print(f"Right rotated by {d}: '{right}'")
""",
            "expectedOutput": "",
            "resultExplanation": "Left rotated by 2: 'dePlayCo'; Right rotated by 2: 'ayCodePl'.",
            "notes": "String slicing creates cleanly rotated new strings without loops.",
            "commonMistakes": "Forgetting negative slicing syntax for right rotation.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 145,
            "number": "145",
            "title": "Check if a String Can Become Empty by Recursive Deletion",
            "cleanTitle": "Check if a String Can Become Empty by Recursive Deletion",
            "category": "String Programs",
            "introduction": "Determines whether repeatedly deleting all occurrences of a sub-pattern can reduce the string to an empty string.",
            "explanation": "In a loop, deletes target substring with str.replace() until it no longer appears; checks if string is empty.",
            "syntax": "while sub in s:\n    s = s.replace(sub, '')\nreturn len(s) == 0",
            "keywordsOrMethods": ["recursive deletion", "replace()", "empty string reduction", "pattern"],
            "codeExample": """# Program to check if a String can become empty by recursive deletion
def can_become_empty(s, sub):
    if not s:
        return True
    if not sub:
        return False
    while sub in s:
        s = s.replace(sub, "")
    return len(s) == 0

sub = "GEEK"
test_cases = [
    "GEEGEEKK",
    "GEEKGEEK",
    "GEEKGEEKS",
    "GEKGEEK"
]

for tc in test_cases:
    status = "CAN become empty" if can_become_empty(tc, sub) else "CANNOT become empty"
    print(f"'{tc:<12}' with sub '{sub}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'GEEGEEKK' has inner 'GEEK' deleted to leave 'GEEK', which is deleted to become empty.",
            "notes": "Simulates context-free reduction on nested brackets or markers.",
            "commonMistakes": "Infinite loop if substitution does not decrease string length (guaranteed if sub in s).",
            "timeComplexity": "O(n^2 / m)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 146,
            "number": "146",
            "title": "Counter| Find all duplicate characters in string",
            "cleanTitle": "Counter| Find all duplicate characters in string",
            "category": "String Programs",
            "introduction": "Finds all characters that appear more than once in a string using collections.Counter.",
            "explanation": "Tallies character counts with Counter(s) and filters items where count > 1.",
            "syntax": "from collections import Counter\ndups = [ch for ch, c in Counter(s).items() if c > 1]",
            "keywordsOrMethods": ["Counter", "duplicate characters", "frequency", "dictionary comprehension"],
            "codeExample": """# Program to find all duplicate characters in a string using Counter
from collections import Counter

def find_duplicate_chars(text):
    counts = Counter(text)
    # Collect all characters with count > 1
    return {char: count for char, count in counts.items() if count > 1}

sample = "play-code platform python"
duplicates = find_duplicate_chars(sample)

print(f"String: '{sample}'\\n")
print("Duplicate Characters and their counts:")
for char, count in sorted(duplicates.items()):
    display = repr(char) if char == ' ' else char
    print(f"  {display:<4}: {count} times")
""",
            "expectedOutput": "",
            "resultExplanation": "Identifies characters that appear more than once along with their exact counts.",
            "notes": "Counter is readable and optimal in O(n) time.",
            "commonMistakes": "Using nested loops to count duplicates in O(n^2).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 147,
            "number": "147",
            "title": "Replace all occurrences of a substring in a string",
            "cleanTitle": "Replace all occurrences of a substring in a string",
            "category": "String Programs",
            "introduction": "Substitutes every instance of an old substring with a new substring.",
            "explanation": "Python's str.replace(old, new) method scans and replaces all occurrences efficiently.",
            "syntax": "new_str = text.replace(old, new)",
            "keywordsOrMethods": ["replace()", "global substitution", "string replacement"],
            "codeExample": """# Program to replace all occurrences of a substring in a string
text = "The quick brown fox jumps over the lazy dog. The fox is clever."
old_sub = "fox"
new_sub = "cat"

replaced_text = text.replace(old_sub, new_sub)

print(f"Original Text:\\n  {text}\\n")
print(f"Replaced Text ('{old_sub}' -> '{new_sub}'):\\n  {replaced_text}")
""",
            "expectedOutput": "",
            "resultExplanation": "Both occurrences of 'fox' are replaced with 'cat'.",
            "notes": "str.replace() without count parameter replaces all instances globally.",
            "commonMistakes": "Forgetting that str.replace() returns a new string and does not modify in-place.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        }
    ]
    return lessons
