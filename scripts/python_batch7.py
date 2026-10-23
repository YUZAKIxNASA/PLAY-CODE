"""
Batch 7:
- Category 10: Dictionary Programs (24 lessons, IDs 148-171)
- Category 11: Tuple Programs (13 lessons, IDs 172-184)
Total = 37 lessons (IDs 148-184)
"""

def get_batch7():
    lessons = [
        # --- Category 10: Dictionary Programs (24) ---
        {
            "id": 148,
            "number": "148",
            "title": "Extract Unique values dictionary values",
            "cleanTitle": "Extract Unique values dictionary values",
            "category": "Dictionary Programs",
            "introduction": "Extracts all distinct values present across the values (often lists) of a dictionary.",
            "explanation": "Flattens list values and wraps them in a set to eliminate duplicate entries.",
            "syntax": "unique = sorted(list({val for sub in d.values() for val in sub}))",
            "keywordsOrMethods": ["unique values", "set comprehension", "flattening", "dict.values()"],
            "codeExample": """# Program to extract unique values from dictionary values
data = {
    'gfg': [5, 6, 7, 8],
    'is': [10, 11, 7, 5],
    'best': [6, 12, 10, 8],
    'for': [1, 2, 5]
}

# Set comprehension flattens all list values into unique elements
unique_values = sorted(list({val for lst in data.values() for val in lst}))

print("Input Dictionary:")
for k, v in data.items():
    print(f"  {k:<5}: {v}")

print(f"\\nUnique values extracted: {unique_values}")
""",
            "expectedOutput": "",
            "resultExplanation": "Combines all sublists and extracts unique values: [1, 2, 5, 6, 7, 8, 10, 11, 12].",
            "notes": "Set comprehension eliminates duplicate values in O(N) time.",
            "commonMistakes": "Assuming values are single scalars when dictionaries often store lists as values.",
            "timeComplexity": "O(total elements)",
            "spaceComplexity": "O(unique elements)"
        },
        {
            "id": 149,
            "number": "149",
            "title": "Find the sum of all items in a dictionary",
            "cleanTitle": "Find the sum of all items in a dictionary",
            "category": "Dictionary Programs",
            "introduction": "Calculates the total aggregate sum of all numeric values stored in a dictionary.",
            "explanation": "Passes the dict.values() view directly to Python's built-in sum().",
            "syntax": "total = sum(d.values())",
            "keywordsOrMethods": ["sum()", "dict.values()", "aggregation", "dictionary sum"],
            "codeExample": """# Program to find the sum of all items in a dictionary
salaries = {
    'Alice': 5200,
    'Bob': 4800,
    'Charlie': 6100,
    'Diana': 5900
}

# Sum of values
total_payroll = sum(salaries.values())

print("Salaries Dictionary:")
for name, amt in salaries.items():
    print(f"  {name:<8}: ${amt}")

print(f"\\nTotal Payroll: ${total_payroll}")
""",
            "expectedOutput": "",
            "resultExplanation": "5200 + 4800 + 6100 + 5900 = 22,000.",
            "notes": "dict.values() returns a dynamic view that sum() iterates over in O(n) without copying.",
            "commonMistakes": "Iterating over dictionary keys and fetching d[k] in a loop.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 150,
            "number": "150",
            "title": "Ways to remove a key from dictionary",
            "cleanTitle": "Ways to remove a key from dictionary",
            "category": "Dictionary Programs",
            "introduction": "Deletes a specified key-value pair from a dictionary safely.",
            "explanation": "Demonstrates `del d[key]`, `d.pop(key, default)`, and dict comprehension filtering.",
            "syntax": "val = d.pop('key', None)\n# or\ndel d['key']",
            "keywordsOrMethods": ["pop()", "del", "dict comprehension", "key removal"],
            "codeExample": """# Ways to remove a key from a dictionary
user = {'name': 'NASA-KUN', 'role': 'Lead Dev', 'age': 25, 'location': 'Tokyo'}

# Method 1: Using dict.pop() with default (Safest - returns value, no KeyError)
removed_age = user.pop('age', None)
print(f"After pop('age'): {user} (Removed: {removed_age})")

# Method 2: Using del statement
if 'location' in user:
    del user['location']
print(f"After del user['location']: {user}")

# Method 3: Dict comprehension filtering
d = {'a': 1, 'b': 2, 'c': 3}
filtered = {k: v for k, v in d.items() if k != 'b'}
print(f"Filtered (without 'b'): {filtered}")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates deleting keys safely using pop() and del.",
            "notes": "d.pop(key, None) prevents KeyError if the key might not exist.",
            "commonMistakes": "Calling del d[key] without verifying membership first, which raises a KeyError if absent.",
            "timeComplexity": "O(1) average",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 151,
            "number": "151",
            "title": "Sort List of Dictionaries by Value Using itemgetter",
            "cleanTitle": "Sort List of Dictionaries by Value Using itemgetter",
            "category": "Dictionary Programs",
            "introduction": "Sorts a list of dictionaries based on the value of a specific key using operator.itemgetter.",
            "explanation": "operator.itemgetter('key') creates a callable accessor implemented in C for high performance.",
            "syntax": "from operator import itemgetter\nsorted_list = sorted(lst, key=itemgetter('key_name'))",
            "keywordsOrMethods": ["operator.itemgetter", "sorted()", "sorting dicts", "key accessor"],
            "codeExample": """# Program to sort list of dictionaries by value using itemgetter
from operator import itemgetter

users = [
    {"name": "Alice", "age": 28, "score": 92},
    {"name": "Bob", "age": 22, "score": 85},
    {"name": "Charlie", "age": 35, "score": 98},
    {"name": "Diana", "age": 24, "score": 89}
]

# Sort by 'age' ascending
sorted_by_age = sorted(users, key=itemgetter('age'))

print("Sorted by Age (ascending):")
for u in sorted_by_age:
    print(f"  {u['name']:<8}: Age {u['age']}, Score {u['score']}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorted in increasing order of age: Bob (22), Diana (24), Alice (28), Charlie (35).",
            "notes": "itemgetter is faster than lambda because it runs directly in compiled C code.",
            "commonMistakes": "Passing a non-existent key to itemgetter, causing a KeyError.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 152,
            "number": "152",
            "title": "Sort List of Dictionaries by Value Using Lambda",
            "cleanTitle": "Sort List of Dictionaries by Value Using Lambda",
            "category": "Dictionary Programs",
            "introduction": "Sorts dictionaries using an inline anonymous lambda function as the sort key.",
            "explanation": "Passes `key=lambda x: x['key_name']` to sorted() or list.sort().",
            "syntax": "sorted_list = sorted(lst, key=lambda x: x['score'], reverse=True)",
            "keywordsOrMethods": ["lambda key", "sorted()", "custom sort", "reverse sorting"],
            "codeExample": """# Program to sort list of dictionaries by value using lambda
products = [
    {"product": "Laptop", "price": 1200},
    {"product": "Mouse", "price": 25},
    {"product": "Keyboard", "price": 75},
    {"product": "Monitor", "price": 300}
]

# Sort by price descending
sorted_by_price_desc = sorted(products, key=lambda item: item['price'], reverse=True)

print("Products sorted by Price (Descending):")
for p in sorted_by_price_desc:
    print(f"  {p['product']:<10}: ${p['price']}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorted by price: Laptop ($1200), Monitor ($300), Keyboard ($75), Mouse ($25).",
            "notes": "Lambda functions allow multi-level sorting, e.g. `key=lambda x: (x['category'], -x['price'])`.",
            "commonMistakes": "Forgetting that lambda functions create a small overhead per item compared to itemgetter.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 153,
            "number": "153",
            "title": "Merging two Dictionaries",
            "cleanTitle": "Merging two Dictionaries",
            "category": "Dictionary Programs",
            "introduction": "Combines two dictionaries into one, updating keys from right to left.",
            "explanation": "Python 3.9+ provides the union operator `d1 | d2`. Also supports `{**d1, **d2}` or `d1.update(d2)`.",
            "syntax": "merged = dict1 | dict2\n# or\nmerged = {**dict1, **dict2}",
            "keywordsOrMethods": ["| operator", "dict union", "unpacking **", "update()"],
            "codeExample": """# Program to demonstrate merging two dictionaries
dict1 = {'a': 10, 'b': 20, 'c': 30}
dict2 = {'b': 99, 'd': 40, 'e': 50}

# Method 1: Using union operator '|' (Python 3.9+)
merged_pipe = dict1 | dict2
print(f"Method 1 (dict1 | dict2):\\n  {merged_pipe}")

# Method 2: Using dictionary unpacking '**'
merged_unpack = {**dict1, **dict2}
print(f"\\nMethod 2 ({{**dict1, **dict2}}):\\n  {merged_unpack}")
""",
            "expectedOutput": "",
            "resultExplanation": "Merged dictionary contains all keys; key 'b' from dict2 (99) overrides dict1 (20).",
            "notes": "The union operator `|` leaves both original dictionaries unaltered.",
            "commonMistakes": "Assuming dict1.update(dict2) returns the merged dictionary; update() mutates in-place and returns None.",
            "timeComplexity": "O(len(dict1) + len(dict2))",
            "spaceComplexity": "O(len(dict1) + len(dict2))"
        },
        {
            "id": 154,
            "number": "154",
            "title": "Convert key-values list to flat dictionary",
            "cleanTitle": "Convert key-values list to flat dictionary",
            "category": "Dictionary Programs",
            "introduction": "Converts a dictionary containing parallel key and value lists into a single flat dictionary.",
            "explanation": "Zips the 'month' list and 'number' list together into a dict: `dict(zip(d['month'], d['number']))`.",
            "syntax": "flat_dict = dict(zip(d['keys'], d['values']))",
            "keywordsOrMethods": ["zip()", "dict()", "flat dictionary", "parallel lists"],
            "codeExample": """# Program to convert key-values list to flat dictionary
data = {
    'month': [1, 2, 3, 4],
    'name': ['Jan', 'Feb', 'March', 'April']
}

# Zip parallel lists into flat dictionary
flat_dict = dict(zip(data['month'], data['name']))

print("Original Parallel Dict:")
for k, v in data.items(): print(f"  {k}: {v}")

print(f"\\nFlat Dictionary: {flat_dict}")
""",
            "expectedOutput": "",
            "resultExplanation": "Zips 1->'Jan', 2->'Feb', 3->'March', 4->'April' into {1: 'Jan', 2: 'Feb', 3: 'March', 4: 'April'}.",
            "notes": "zip() stops at the shortest list if lists are unequal in length.",
            "commonMistakes": "Hardcoding indices when zip() matches parallel elements automatically.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 155,
            "number": "155",
            "title": "Insertion at the beginning in OrderedDict",
            "cleanTitle": "Insertion at the beginning in OrderedDict",
            "category": "Dictionary Programs",
            "introduction": "Inserts a new key-value pair at the start (index 0) of an OrderedDict.",
            "explanation": "Inserts the key normally and calls `move_to_end(key, last=False)` to relocate it to the front.",
            "syntax": "from collections import OrderedDict\nod.move_to_end('new_key', last=False)",
            "keywordsOrMethods": ["OrderedDict", "move_to_end", "last=False", "front insertion"],
            "codeExample": """# Program for insertion at the beginning in OrderedDict
from collections import OrderedDict

# Initialize OrderedDict
od = OrderedDict([('b', 2), ('c', 3), ('d', 4)])
print(f"Original OrderedDict: {od}")

# Insert new key 'a': 1 at the beginning
od['a'] = 1
od.move_to_end('a', last=False)  # last=False moves to front

print(f"After front insertion: {od}")
print(f"Keys in order: {list(od.keys())}")
""",
            "expectedOutput": "",
            "resultExplanation": "Key 'a': 1 is moved to the very front, producing OrderedDict([('a', 1), ('b', 2), ('c', 3), ('d', 4)]).",
            "notes": "move_to_end(key, last=False) operates in O(1) time in OrderedDict.",
            "commonMistakes": "Standard dicts do not support move_to_end(); collections.OrderedDict is required.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 156,
            "number": "156",
            "title": "Check order of character in string using OrderedDict()",
            "cleanTitle": "Check order of character in string using OrderedDict()",
            "category": "Dictionary Programs",
            "introduction": "Verifies whether a pattern of characters appears in the exact relative sequence inside a string.",
            "explanation": "Constructs an OrderedDict from the string to record the first appearance index of each character, then checks pattern order.",
            "syntax": "from collections import OrderedDict\nod = OrderedDict.fromkeys(s)",
            "keywordsOrMethods": ["OrderedDict.fromkeys", "character order", "pattern matching"],
            "codeExample": """# Program to check order of character in string using OrderedDict
from collections import OrderedDict

def check_order(text, pattern):
    dict_order = OrderedDict.fromkeys(text)
    pattern_ptr = 0
    for key in dict_order.keys():
        if key == pattern[pattern_ptr]:
            pattern_ptr += 1
            if pattern_ptr == len(pattern):
                return True
    return False

text = "engineers rock"
p1 = "egr"
p2 = "gsr"

print(f"Text: '{text}'")
print(f"Pattern '{p1}' matches order? {check_order(text, p1)}")
print(f"Pattern '{p2}' matches order? {check_order(text, p2)}")
""",
            "expectedOutput": "",
            "resultExplanation": "In 'engineers rock', 'e', 'g', 'r' appear in that exact relative order (True). 'g', 's', 'r' does not (False).",
            "notes": "OrderedDict.fromkeys preserves the first appearance of each unique character.",
            "commonMistakes": "Re-checking characters after pointer has advanced.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 157,
            "number": "157",
            "title": "Append Dictionary Keys and Values in Order",
            "cleanTitle": "Append Dictionary Keys and Values in Order",
            "category": "Dictionary Programs",
            "introduction": "Combines all keys followed by all values (or interleaves them) into a single ordered list.",
            "explanation": "Converts list(d.keys()) + list(d.values()) into a unified flat sequence.",
            "syntax": "combined = list(d.keys()) + list(d.values())",
            "keywordsOrMethods": ["keys()", "values()", "concatenation", "dict ordering"],
            "codeExample": """# Program to append Dictionary Keys and Values in Order
d = {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Append all keys followed by all values
keys_and_values = list(d.keys()) + list(d.values())

# Interleaved keys and values
interleaved = [item for pair in d.items() for item in pair]

print(f"Dictionary: {d}")
print(f"Keys followed by Values: {keys_and_values}")
print(f"Interleaved Key-Values : {interleaved}")
""",
            "expectedOutput": "",
            "resultExplanation": "['a', 'b', 'c', 'd', 1, 2, 3, 4] for sequential, and ['a', 1, 'b', 2, 'c', 3, 'd', 4] for interleaved.",
            "notes": "Python 3.7+ guarantees dictionary iteration order matches insertion order.",
            "commonMistakes": "Assuming dictionary iteration order is arbitrary as it was in Python 2.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 158,
            "number": "158",
            "title": "Sort Python Dictionaries by Key or Value",
            "cleanTitle": "Sort Python Dictionaries by Key or Value",
            "category": "Dictionary Programs",
            "introduction": "Sorts a dictionary by its keys alphabetically/numerically, or by its values.",
            "explanation": "Uses `sorted(d.items(), key=lambda x: x[0])` for keys, and `key=lambda x: x[1]` for values.",
            "syntax": "by_key = dict(sorted(d.items()))\nby_val = dict(sorted(d.items(), key=lambda x: x[1]))",
            "keywordsOrMethods": ["sorted(d.items())", "sort by key", "sort by value", "dict reconstruction"],
            "codeExample": """# Program to sort dictionary by Key or by Value
scores = {'Charlie': 78, 'Alice': 95, 'Bob': 82, 'David': 60}

# Sort by Key (Name)
sorted_by_key = dict(sorted(scores.items()))

# Sort by Value (Score ascending)
sorted_by_val = dict(sorted(scores.items(), key=lambda item: item[1]))

print(f"Original Dict   : {scores}")
print(f"Sorted by Key   : {sorted_by_key}")
print(f"Sorted by Value : {sorted_by_val}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorted by key: Alice, Bob, Charlie, David. Sorted by value: David (60), Charlie (78), Bob (82), Alice (95).",
            "notes": "dict(sorted_items) reconstructs an insertion-ordered dictionary in sorted sequence.",
            "commonMistakes": "Attempting to call scores.sort() directly (dicts have no in-place .sort() method).",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 159,
            "number": "159",
            "title": "Handling missing keys in Python dictionaries",
            "cleanTitle": "Handling missing keys in Python dictionaries",
            "category": "Dictionary Programs",
            "introduction": "Handles missing keys gracefully without crashing with KeyError exceptions.",
            "explanation": "Demonstrates `dict.get(key, default)`, `dict.setdefault()`, and `collections.defaultdict`.",
            "syntax": "val = d.get(key, default)\nfrom collections import defaultdict",
            "keywordsOrMethods": ["dict.get", "setdefault", "defaultdict", "KeyError prevention"],
            "codeExample": """# Program demonstrating techniques for handling missing keys
from collections import defaultdict

# 1. Using dict.get() with fallback default
config = {'host': 'localhost', 'port': 8080}
timeout = config.get('timeout', 30)  # Returns 30 if 'timeout' missing
print(f"1. config.get('timeout', 30): {timeout}")

# 2. Using setdefault() to initialize if missing
config.setdefault('database', 'codeplay_db')
print(f"2. After setdefault('database'): {config}")

# 3. Using collections.defaultdict
grouping = defaultdict(list)
grouping['fruits'].append('apple')
grouping['fruits'].append('banana')
print(f"3. defaultdict with list default: {dict(grouping)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates get(), setdefault(), and defaultdict preventing KeyError exceptions.",
            "notes": "defaultdict is optimal for grouping items into lists or sets.",
            "commonMistakes": "Using `try ... except KeyError` everywhere when `dict.get()` is cleaner.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 160,
            "number": "160",
            "title": "Dictionary with keys having multiple inputs",
            "cleanTitle": "Dictionary with keys having multiple inputs",
            "category": "Dictionary Programs",
            "introduction": "Uses composite tuples as dictionary keys to map multi-coordinate or multi-attribute inputs.",
            "explanation": "Because tuples are immutable, they are hashable and can serve as dictionary keys for 2D/3D grids or composite queries.",
            "syntax": "d[(x, y)] = val",
            "keywordsOrMethods": ["composite keys", "tuple keys", "hashable", "coordinate map"],
            "codeExample": """# Program demonstrating dictionary with tuple composite keys
grid_map = {}

# Using (x, y) coordinates as composite key
grid_map[(0, 0)] = "Start Point"
grid_map[(1, 2)] = "Checkpoint Alpha"
grid_map[(5, 5)] = "Treasure Chest"

print("Coordinate Grid Mapping:")
for (x, y), label in grid_map.items():
    print(f"  Point ({x}, {y}) -> {label}")

# Querying composite key
lookup = (1, 2)
print(f"\\nLookup at {lookup}: {grid_map.get(lookup, 'Empty')}")
""",
            "expectedOutput": "",
            "resultExplanation": "Tuples (x, y) serve as immutable hashable keys mapping points to labels.",
            "notes": "Lists cannot be dictionary keys because they are mutable, but tuples can.",
            "commonMistakes": "Attempting to use a list `[x, y]` as a dictionary key, which raises a TypeError: unhashable type.",
            "timeComplexity": "O(1) average lookup",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 161,
            "number": "161",
            "title": "Print anagrams together using List and Dictionary",
            "cleanTitle": "Print anagrams together using List and Dictionary",
            "category": "Dictionary Programs",
            "introduction": "Groups a list of words so that all anagrams (words sharing identical letters) appear together.",
            "explanation": "Sorts the characters of each word to create a canonical key: `tuple(sorted(word))` or `''.join(sorted(word))` in a defaultdict(list).",
            "syntax": "from collections import defaultdict\nd[tuple(sorted(w))].append(w)",
            "keywordsOrMethods": ["anagrams", "defaultdict", "sorted canonical key", "grouping"],
            "codeExample": """# Program to group and print anagrams together
from collections import defaultdict

words = ["act", "god", "cat", "dog", "tac", "listen", "silent"]

anagram_groups = defaultdict(list)
for w in words:
    # Sorted characters form canonical signature
    key = "".join(sorted(w))
    anagram_groups[key].append(w)

print(f"Original Words: {words}\\n")
print("Anagram Groups:")
for canonical, group in anagram_groups.items():
    print(f"  Key '{canonical}': {group}")
""",
            "expectedOutput": "",
            "resultExplanation": "['act', 'cat', 'tac'], ['god', 'dog'], and ['listen', 'silent'] are grouped together.",
            "notes": "Sorting each word takes O(k log k) where k is word length; hashing takes O(1).",
            "commonMistakes": "Comparing every word against every other word in O(n^2 * k).",
            "timeComplexity": "O(n * k log k)",
            "spaceComplexity": "O(n * k)"
        },
        {
            "id": 162,
            "number": "162",
            "title": "K-th Non-Repeating Character Using OrderedDict",
            "cleanTitle": "K-th Non-Repeating Character Using OrderedDict",
            "category": "Dictionary Programs",
            "introduction": "Finds the K-th character in a string that appears only once.",
            "explanation": "Constructs an OrderedDict counting character frequencies; filters keys with count == 1 and picks the K-th (1-indexed).",
            "syntax": "from collections import OrderedDict\nnon_repeating = [ch for ch, c in counts.items() if c == 1]",
            "keywordsOrMethods": ["OrderedDict", "k-th non-repeating", "frequency counting"],
            "codeExample": """# Program to find K-th non-repeating character using OrderedDict
from collections import OrderedDict

def kth_non_repeating(text, k):
    counts = OrderedDict()
    for ch in text:
        counts[ch] = counts.get(ch, 0) + 1

    # Filter characters with frequency 1
    non_repeating = [char for char, freq in counts.items() if freq == 1]

    if k <= len(non_repeating):
        return non_repeating[k - 1], non_repeating
    return None, non_repeating

s = "geeksforgeeks"
k = 3

char, all_nr = kth_non_repeating(s, k)
print(f"String: '{s}'")
print(f"All non-repeating characters in order: {all_nr}")
print(f"{k}-th non-repeating character is: '{char}'")
""",
            "expectedOutput": "",
            "resultExplanation": "Non-repeating characters in 'geeksforgeeks' are ['f', 'o', 'r']. The 3rd is 'r'.",
            "notes": "OrderedDict preserves the order of discovery while counting frequencies.",
            "commonMistakes": "Using a regular set which loses the original relative character order.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 163,
            "number": "163",
            "title": "Check if binary representations of two numbers are anagram",
            "cleanTitle": "Check if binary representations of two numbers are anagram",
            "category": "Dictionary Programs",
            "introduction": "Two numbers have anagram binary representations if they have the exact same count of 1s and 0s.",
            "explanation": "Converts both numbers to binary using bin(n)[2:], counts frequencies using collections.Counter, and tests equality.",
            "syntax": "Counter(bin(a)[2:]) == Counter(bin(b)[2:])",
            "keywordsOrMethods": ["bin()", "Counter", "binary anagram", "bit representation"],
            "codeExample": """# Program to check if binary representations of two numbers are anagrams
from collections import Counter

def are_binary_anagrams(num1, num2):
    b1 = bin(num1)[2:]
    b2 = bin(num2)[2:]
    return Counter(b1) == Counter(b2), b1, b2

pairs = [
    (8, 4),   # 8 is '1000', 4 is '100' -> False (diff length)
    (5, 6),   # 5 is '101' (two 1s, one 0), 6 is '110' (two 1s, one 0) -> True
    (9, 10)   # 9 is '1001' (two 1s, two 0s), 10 is '1010' (two 1s, two 0s) -> True
]

for a, b in pairs:
    is_ana, bin_a, bin_b = are_binary_anagrams(a, b)
    print(f"Numbers ({a:2d}, {b:2d}) -> Bin: ('{bin_a}', '{bin_b}') -> Anagram? {is_ana}")
""",
            "expectedOutput": "",
            "resultExplanation": "5 ('101') and 6 ('110') each have two 1s and one 0, so they are binary anagrams.",
            "notes": "Both total bits and 1-bit counts must match.",
            "commonMistakes": "Only comparing 1-bits (popcount) without ensuring total bit lengths match.",
            "timeComplexity": "O(log a + log b)",
            "spaceComplexity": "O(log a + log b)"
        },
        {
            "id": 164,
            "number": "164",
            "title": "Counter to find the size of largest subset of anagram words",
            "cleanTitle": "Counter to find the size of largest subset of anagram words",
            "category": "Dictionary Programs",
            "introduction": "Finds the maximum size among all anagram clusters formed from an input word list.",
            "explanation": "Counts occurrences of sorted character signatures using collections.Counter; max count is the answer.",
            "syntax": "from collections import Counter\nmax_cluster = max(Counter(''.join(sorted(w)) for w in words).values())",
            "keywordsOrMethods": ["Counter", "largest anagram subset", "canonical signature"],
            "codeExample": """# Program to find size of largest subset of anagram words
from collections import Counter

def max_anagram_subset_size(words):
    # Map each word to sorted signature
    signatures = ["".join(sorted(w)) for w in words]
    counts = Counter(signatures)
    most_common_sig, max_size = counts.most_common(1)[0]
    return max_size, most_common_sig

word_list = ["ant", "tan", "nat", "bat", "tab", "silent", "listen", "enlist", "tinsel"]
max_size, best_sig = max_anagram_subset_size(word_list)

print(f"Words: {word_list}\\n")
print(f"Largest anagram subset size: {max_size} (Signature: '{best_sig}')")
""",
            "expectedOutput": "",
            "resultExplanation": "'silent', 'listen', 'enlist', 'tinsel' form a cluster of size 4.",
            "notes": "Counter is concise and finds the maximum frequency in one pass.",
            "commonMistakes": "Not sorting word characters to canonicalize anagram signatures.",
            "timeComplexity": "O(N * K log K)",
            "spaceComplexity": "O(N * K)"
        },
        {
            "id": 165,
            "number": "165",
            "title": "Remove all duplicates words from a given sentence",
            "cleanTitle": "Remove all duplicates words from a given sentence",
            "category": "Dictionary Programs",
            "introduction": "Deduplicates words in a sentence while preserving original word ordering.",
            "explanation": "Splits text and feeds tokens to `dict.fromkeys(words)` which retains first appearance order.",
            "syntax": "' '.join(dict.fromkeys(sentence.split()))",
            "keywordsOrMethods": ["dict.fromkeys", "word deduplication", "order preservation"],
            "codeExample": """# Program to remove all duplicate words from a sentence
def remove_duplicate_words(sentence):
    # dict.fromkeys preserves order and strips duplicate tokens
    return " ".join(dict.fromkeys(sentence.split()))

sentence = "Python is great and Python is versatile and Python is fun"
cleaned = remove_duplicate_words(sentence)

print(f"Original: '{sentence}'")
print(f"Cleaned : '{cleaned}'")
""",
            "expectedOutput": "",
            "resultExplanation": "'Python is great and versatile fun' keeps the first occurrence of each word.",
            "notes": "dict.fromkeys() is faster than maintaining a manual set and list.",
            "commonMistakes": "Using set() which destroys the natural grammar word order.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 166,
            "number": "166",
            "title": "Dictionary to find mirror characters in a string",
            "cleanTitle": "Dictionary to find mirror characters in a string",
            "category": "Dictionary Programs",
            "introduction": "Computes mirror cipher characters from index k to the end where 'a' becomes 'z', 'b' becomes 'y', etc.",
            "explanation": "Constructs a translation dictionary mapping alphabet letters to their reverse counterparts.",
            "syntax": "mirror_dict = {chr(97 + i): chr(122 - i) for i in range(26)}",
            "keywordsOrMethods": ["mirror characters", "Atbash cipher", "alphabet dictionary", "cipher"],
            "codeExample": """# Program to find mirror characters in a string from position k
def mirror_chars_from_k(s, k):
    # Build Atbash / mirror dictionary: a <-> z, b <-> y
    mirror_dict = {chr(97 + i): chr(122 - i) for i in range(26)}
    
    prefix = s[:k-1]
    suffix = s[k-1:]
    
    mirrored_suffix = "".join(mirror_dict.get(ch.lower(), ch) for ch in suffix)
    return prefix + mirrored_suffix

text = "paradox"
k = 3  # Mirror from 3rd character 'r' onwards

result = mirror_chars_from_k(text, k)
print(f"Original: '{text}' (mirroring from index {k})")
print(f"Mirrored: '{result}'")
""",
            "expectedOutput": "",
            "resultExplanation": "Characters 'r', 'a', 'd', 'o', 'x' map to 'i', 'z', 'w', 'l', 'c', giving 'paizwlc'.",
            "notes": "Known historically as the Atbash substitution cipher.",
            "commonMistakes": "1-based vs 0-based indexing for k.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1) 26-char dictionary"
        },
        {
            "id": 167,
            "number": "167",
            "title": "Counting the frequencies in a list using dictionary",
            "cleanTitle": "Counting the frequencies in a list using dictionary",
            "category": "Dictionary Programs",
            "introduction": "Builds a frequency histogram mapping each distinct list item to its count.",
            "explanation": "Iterates through the list, updating `freq[item] = freq.get(item, 0) + 1`.",
            "syntax": "for x in lst: d[x] = d.get(x, 0) + 1",
            "keywordsOrMethods": ["dict.get", "frequency map", "histogram", "tally"],
            "codeExample": """# Program to count frequencies in a list using a dictionary
def count_frequencies(lst):
    freq = {}
    for item in lst:
        freq[item] = freq.get(item, 0) + 1
    return freq

items = ['apple', 'orange', 'banana', 'apple', 'apple', 'banana', 'grape']
frequencies = count_frequencies(items)

print(f"List: {items}\\n")
print(f"{'Item':<10} | {'Count':<6}")
print("-" * 18)
for k, v in frequencies.items():
    print(f"{k:<10} | {v:<6}")
""",
            "expectedOutput": "",
            "resultExplanation": "'apple': 3, 'banana': 2, 'orange': 1, 'grape': 1.",
            "notes": "dict.get(item, 0) avoids explicit if-else key checking.",
            "commonMistakes": "Checking `if item in d` with two lookups when `d.get(item, 0)` is a single lookup.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(u) unique items"
        },
        {
            "id": 168,
            "number": "168",
            "title": "Convert a list of Tuples into Dictionary",
            "cleanTitle": "Convert a list of Tuples into Dictionary",
            "category": "Dictionary Programs",
            "introduction": "Converts (key, value) pairs from tuples into a dictionary, grouping multiple values per key.",
            "explanation": "Uses `dict(tuples_list)` for 1-to-1, or `defaultdict(list)` to append multiple values sharing the same key.",
            "syntax": "d = dict(tuples_list)\n# or\nfor k, v in tuples: d[k].append(v)",
            "keywordsOrMethods": ["dict constructor", "tuples to dict", "grouping", "defaultdict"],
            "codeExample": """# Program to convert a list of Tuples into a Dictionary
from collections import defaultdict

# Case 1: Unique keys
simple_tuples = [("Alice", 90), ("Bob", 85), ("Charlie", 95)]
dict_simple = dict(simple_tuples)
print(f"1. 1-to-1 mapping using dict(): {dict_simple}")

# Case 2: Duplicate keys grouped into lists
grouped_tuples = [("Fruit", "Apple"), ("Veggie", "Carrot"), ("Fruit", "Banana"), ("Veggie", "Broccoli")]
grouped_dict = defaultdict(list)
for k, v in grouped_tuples:
    grouped_dict[k].append(v)

print(f"2. Grouped mapping: {dict(grouped_dict)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates both 1-to-1 mapping via dict() and 1-to-many grouping via defaultdict(list).",
            "notes": "dict() accepts any iterable of key-value 2-tuples.",
            "commonMistakes": "Using dict(tuples) when keys repeat, which overwrites previous values silently.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 169,
            "number": "169",
            "title": "Find Ordered Words in a Dictionary",
            "cleanTitle": "Find Ordered Words in a Dictionary",
            "category": "Dictionary Programs",
            "introduction": "An ordered word is a word where all its letters appear in alphabetical sequence (e.g. 'almost', 'chintz').",
            "explanation": "Checks if `list(w) == sorted(w)` for each word in a vocabulary.",
            "syntax": "is_ordered = (list(word) == sorted(word))",
            "keywordsOrMethods": ["ordered words", "alphabetical letters", "sorted()"],
            "codeExample": """# Program to find Ordered Words in a Dictionary / Word list
def is_ordered_word(word):
    # True if letters are in non-decreasing alphabetical order
    return list(word.lower()) == sorted(word.lower())

word_bank = ["almost", "biopsy", "chintz", "python", "effort", "code", "ghost"]

print("Analyzing Ordered Words:")
for w in word_bank:
    status = "ORDERED" if is_ordered_word(w) else "Unordered"
    print(f"  {w:<8} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'almost' (a-l-m-o-s-t), 'biopsy', 'chintz', 'effort', and 'ghost' have their letters in alphabetical order.",
            "notes": "'almost' is the longest commonly used English word with letters in alphabetical order.",
            "commonMistakes": "Comparing uppercase with lowercase without normalizing case first.",
            "timeComplexity": "O(k log k) per word",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 170,
            "number": "170",
            "title": "Possible Words using given characters",
            "cleanTitle": "Possible Words using given characters",
            "category": "Dictionary Programs",
            "introduction": "Finds all words in a dictionary that can be formed using a given set of available letters.",
            "explanation": "Compares character counts: word can be formed if Counter(word) <= Counter(available_chars).",
            "syntax": "all(char_count[c] >= word_count[c] for c in word_count)",
            "keywordsOrMethods": ["Counter subset", "word formation", "Scrabble logic", "anagram subset"],
            "codeExample": """# Program to find possible words using given characters
from collections import Counter

def possible_words(word_dict, char_pool):
    pool_counts = Counter(char_pool)
    valid_words = []
    
    for word in word_dict:
        w_counts = Counter(word)
        # Check if pool has sufficient count for every char
        if all(pool_counts[c] >= w_counts[c] for c in w_counts):
            valid_words.append(word)
            
    return valid_words

vocab = ["go", "goal", "good", "load", "gold", "python"]
available_letters = ['o', 'g', 'l', 'd', 'a']

matches = possible_words(vocab, available_letters)
print(f"Available Letters: {available_letters}")
print(f"Vocabulary       : {vocab}")
print(f"Possible Words   : {matches}")
""",
            "expectedOutput": "",
            "resultExplanation": "'go', 'goal', 'load', and 'gold' can be formed; 'good' fails because it requires two 'o's.",
            "notes": "Counter comparison accounts for duplicate letter quantities correctly.",
            "commonMistakes": "Using set() which checks presence but ignores letter quantities.",
            "timeComplexity": "O(W * K)",
            "spaceComplexity": "O(K)"
        },
        {
            "id": 171,
            "number": "171",
            "title": "Keys associated with Values in Dictionary",
            "cleanTitle": "Keys associated with Values in Dictionary",
            "category": "Dictionary Programs",
            "introduction": "Inverts a dictionary to find all keys associated with a specific value.",
            "explanation": "Iterates through `d.items()` and collects keys matching the target value.",
            "syntax": "[k for k, v in d.items() if v == target_value]",
            "keywordsOrMethods": ["reverse lookup", "inverted index", "keys by value"],
            "codeExample": """# Program to find all keys associated with values in a dictionary
department_map = {
    'Alice': 'Engineering',
    'Bob': 'Design',
    'Charlie': 'Engineering',
    'Diana': 'Marketing',
    'Evan': 'Engineering'
}

target_dept = 'Engineering'
associated_keys = [name for name, dept in department_map.items() if dept == target_dept]

print(f"Target Department: '{target_dept}'")
print(f"Associated Team Members: {associated_keys}")
""",
            "expectedOutput": "",
            "resultExplanation": "Alice, Charlie, and Evan are associated with the 'Engineering' department.",
            "notes": "For repeated reverse queries, pre-build an inverted dictionary mapping values to lists of keys.",
            "commonMistakes": "Assuming a dictionary can be looked up in reverse in O(1) without an inverted index.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) matches"
        },

        # --- Category 11: Tuple Programs (13) ---
        {
            "id": 172,
            "number": "172",
            "title": "Find the size of a Tuple",
            "cleanTitle": "Find the size of a Tuple",
            "category": "Tuple Programs",
            "introduction": "Determines the exact memory consumption in bytes of a tuple using sys.getsizeof().",
            "explanation": "Tuples are immutable fixed-size objects in Python, requiring less memory overhead than lists.",
            "syntax": "import sys\nsize_bytes = sys.getsizeof(my_tuple)",
            "keywordsOrMethods": ["sys.getsizeof", "memory consumption", "tuple size", "immutability"],
            "codeExample": """# Program to find the size of a tuple in memory
import sys

t1 = ()
t2 = (1, 2, 3)
t3 = ("Python", "CodePlay", 2026, 3.14, True)

print(f"Size of empty tuple ()                   : {sys.getsizeof(t1)} bytes")
print(f"Size of 3-element tuple {t2}          : {sys.getsizeof(t2)} bytes")
print(f"Size of 5-element tuple (mixed types)   : {sys.getsizeof(t3)} bytes")

# Compared to equivalent list
l3 = ["Python", "CodePlay", 2026, 3.14, True]
print(f"\\nComparison: List with same 5 items consumes: {sys.getsizeof(l3)} bytes")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates tuple byte footprint and shows that tuples have lower memory overhead than mutable lists.",
            "notes": "Tuples do not need over-allocation buffers like lists because they cannot grow.",
            "commonMistakes": "Confusing len(t) (number of items) with sys.getsizeof(t) (memory in bytes).",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 173,
            "number": "173",
            "title": "Maximum and Minimum K elements in Tuple",
            "cleanTitle": "Maximum and Minimum K elements in Tuple",
            "category": "Tuple Programs",
            "introduction": "Extracts the K smallest and K largest elements from a numeric tuple.",
            "explanation": "Sorts the tuple values; the first K elements are min, and the last K elements are max.",
            "syntax": "sorted_t = sorted(t)\nmin_k = sorted_t[:k]; max_k = sorted_t[-k:]",
            "keywordsOrMethods": ["min K", "max K", "sorted()", "tuple slicing"],
            "codeExample": """# Program to find Maximum and Minimum K elements in Tuple
def min_max_k_elements(tup, k):
    sorted_items = sorted(tup)
    min_k = tuple(sorted_items[:k])
    max_k = tuple(sorted_items[-k:])
    return min_k, max_k

data_tuple = (5, 20, 3, 7, 6, 8)
K = 2

mins, maxs = min_max_k_elements(data_tuple, K)
print(f"Tuple: {data_tuple}")
print(f"Minimum {K} elements: {mins}")
print(f"Maximum {K} elements: {maxs}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorted is (3, 5, 6, 7, 8, 20); min 2 are (3, 5) and max 2 are (8, 20).",
            "notes": "Use heapq.nsmallest and heapq.nlargest for huge tuples to achieve O(n log K).",
            "commonMistakes": "Forgetting that tuples must be sorted to extract extreme k boundaries.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 174,
            "number": "174",
            "title": "Create Tuples of Numbers and Their Cubes",
            "cleanTitle": "Create Tuples of Numbers and Their Cubes",
            "category": "Tuple Programs",
            "introduction": "Generates a list of (number, number**3) paired tuples.",
            "explanation": "Uses list comprehension `[(x, x**3) for x in numbers]`.",
            "syntax": "[(x, x ** 3) for x in numbers]",
            "keywordsOrMethods": ["cubes", "paired tuples", "list comprehension"],
            "codeExample": """# Program to create list of tuples with numbers and their cubes
numbers = [1, 2, 3, 4, 5]

# Generate (num, cube) tuples
cube_tuples = [(val, val ** 3) for val in numbers]

print(f"Numbers: {numbers}")
print("Tuples of (Number, Cube):")
for n, c in cube_tuples:
    print(f"  ({n}, {c})")
""",
            "expectedOutput": "",
            "resultExplanation": "Generates [(1, 1), (2, 8), (3, 27), (4, 64), (5, 125)].",
            "notes": "Tuples provide lightweight immutable pairings for coordinates or function outputs.",
            "commonMistakes": "Using square brackets instead of parentheses, creating lists instead of tuples.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 175,
            "number": "175",
            "title": "Adding Tuple to List and vice-versa",
            "cleanTitle": "Adding Tuple to List and vice-versa",
            "category": "Tuple Programs",
            "introduction": "Converts between and concatenates tuples and lists.",
            "explanation": "Demonstrates `list(tup) + lst` and `tup + tuple(lst)`.",
            "syntax": "lst += list(tup)\ntup += tuple(lst)",
            "keywordsOrMethods": ["type conversion", "list()", "tuple()", "concatenation"],
            "codeExample": """# Program for adding Tuple to List and vice-versa
base_list = [10, 20, 30]
base_tuple = (40, 50, 60)

# 1. Adding Tuple to List
extended_list = base_list + list(base_tuple)
print(f"1. Tuple added to List : {extended_list}")

# 2. Adding List to Tuple
extended_tuple = base_tuple + tuple(base_list)
print(f"2. List added to Tuple : {extended_tuple}")
""",
            "expectedOutput": "",
            "resultExplanation": "1. [10, 20, 30, 40, 50, 60]; 2. (40, 50, 60, 10, 20, 30).",
            "notes": "Python does not allow direct concatenation of list + tuple without explicit type casting.",
            "commonMistakes": "Attempting `[1, 2] + (3, 4)` directly, which raises a TypeError.",
            "timeComplexity": "O(n + m)",
            "spaceComplexity": "O(n + m)"
        },
        {
            "id": 176,
            "number": "176",
            "title": "Closest Pair to Kth index element in Tuple",
            "cleanTitle": "Closest Pair to Kth index element in Tuple",
            "category": "Tuple Programs",
            "introduction": "Finds the tuple in a list of tuples whose K-th element has minimum absolute difference to a target value.",
            "explanation": "Uses `min(tuples, key=lambda t: abs(t[k] - target))`.",
            "syntax": "closest = min(tuple_list, key=lambda t: abs(t[k] - target))",
            "keywordsOrMethods": ["closest pair", "min with key", "tuple index", "distance"],
            "codeExample": """# Program to find closest pair to Kth index element in tuple list
tuple_list = [(3, 4), (78, 76), (2, 3), (9, 8), (19, 23)]
target_val = 17
k = 0  # check against 0th index

# Find tuple where abs(t[k] - target_val) is minimum
closest = min(tuple_list, key=lambda item: abs(item[k] - target_val))

print(f"Tuples List : {tuple_list}")
print(f"Target Value: {target_val} on index {k}")
print(f"Closest Tuple: {closest} (distance: {abs(closest[k] - target_val)})")
""",
            "expectedOutput": "",
            "resultExplanation": "(19, 23) has item[0] = 19, distance to 17 is |19 - 17| = 2, which is minimum.",
            "notes": "min() with key parameter avoids manual distance tracking.",
            "commonMistakes": "Using index out of bounds for tuples that have fewer elements than k.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 177,
            "number": "177",
            "title": "Join Tuples if similar initial element",
            "cleanTitle": "Join Tuples if similar initial element",
            "category": "Tuple Programs",
            "introduction": "Groups tuples sharing identical first elements, merging their secondary values into one consolidated tuple.",
            "explanation": "Uses collections.defaultdict(list) keyed by tuple[0], then converts each group back to tuple.",
            "syntax": "for k, *rest in tuples: d[k].extend(rest)",
            "keywordsOrMethods": ["defaultdict", "tuple merge", "grouping", "initial element"],
            "codeExample": """# Program to join tuples if initial element is similar
from collections import defaultdict

tuples_list = [(5, 6), (5, 7), (6, 8), (6, 10), (7, 11)]

grouped = defaultdict(list)
for t in tuples_list:
    key = t[0]
    grouped[key].extend(t[1:])

# Reconstruct joined tuples
result = [tuple([k] + vals) for k, vals in grouped.items()]

print(f"Original Tuples: {tuples_list}")
print(f"Joined Tuples  : {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "(5, 6) and (5, 7) merge into (5, 6, 7); (6, 8) and (6, 10) merge into (6, 8, 10).",
            "notes": "defaultdict simplifies multi-value grouping.",
            "commonMistakes": "Appending sub-tuples instead of extending scalar items, creating unnecessary nesting.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 178,
            "number": "178",
            "title": "Extract digits from Tuple list",
            "cleanTitle": "Extract digits from Tuple list",
            "category": "Tuple Programs",
            "introduction": "Extracts all distinct individual numeric digits present across all numbers in a tuple list.",
            "explanation": "Converts numbers to strings, extracts character digits into a set, and converts back to sorted ints.",
            "syntax": "digits = sorted(list({int(d) for t in tuple_list for num in t for d in str(num)}))",
            "keywordsOrMethods": ["digit extraction", "set comprehension", "digit parsing"],
            "codeExample": """# Program to extract digits from tuple list
tuple_list = [(15, 3), (67, 92), (31, 88)]

# Extract unique digits
unique_digits = sorted(list({int(d) for t in tuple_list for n in t for d in str(abs(n))}))

print(f"Tuples List: {tuple_list}")
print(f"Extracted Unique Digits: {unique_digits}")
""",
            "expectedOutput": "",
            "resultExplanation": "Extracts unique digits [1, 2, 3, 5, 6, 7, 8, 9] from the numbers.",
            "notes": "Nested generator inside set comprehension extracts digits in a single expression.",
            "commonMistakes": "Retaining digits as strings instead of converting back to integers.",
            "timeComplexity": "O(total digits)",
            "spaceComplexity": "O(unique digits)"
        },
        {
            "id": 179,
            "number": "179",
            "title": "All pair combinations of 2 tuples",
            "cleanTitle": "All pair combinations of 2 tuples",
            "category": "Tuple Programs",
            "introduction": "Computes the Cartesian product of elements from two tuples.",
            "explanation": "Generates all pairs (a, b) and (b, a) using itertools.product or nested comprehensions.",
            "syntax": "import itertools\npairs = list(itertools.product(t1, t2))",
            "keywordsOrMethods": ["Cartesian product", "itertools.product", "pair combinations"],
            "codeExample": """# Program to find all pair combinations of 2 tuples
import itertools

tup1 = (1, 2)
tup2 = (3, 4)

# Cartesian product of tup1 and tup2
pairs = list(itertools.product(tup1, tup2))
# Symmetrical combinations
all_pairs = pairs + list(itertools.product(tup2, tup1))

print(f"Tuple 1: {tup1}")
print(f"Tuple 2: {tup2}")
print(f"Pair Combinations (t1 x t2): {pairs}")
print(f"All Bidirectional Pairs   : {all_pairs}")
""",
            "expectedOutput": "",
            "resultExplanation": "Cartesian pairs are [(1, 3), (1, 4), (2, 3), (2, 4)].",
            "notes": "itertools.product() calculates combinations without nesting for loops.",
            "commonMistakes": "Confusing combinations with permutations.",
            "timeComplexity": "O(n * m)",
            "spaceComplexity": "O(n * m)"
        },
        {
            "id": 180,
            "number": "180",
            "title": "Remove Tuples of Length K",
            "cleanTitle": "Remove Tuples of Length K",
            "category": "Tuple Programs",
            "introduction": "Filters a list of tuples to eliminate any tuple having exact length K.",
            "explanation": "Uses list comprehension `[t for t in tuple_list if len(t) != k]`.",
            "syntax": "[t for t in tuples if len(t) != k]",
            "keywordsOrMethods": ["len(t) != k", "tuple filtering", "list comprehension"],
            "codeExample": """# Program to remove tuples of length K
tuple_list = [(4, 5), (4, ), (8, 6, 7), (1, ), (3, 4, 6, 7)]
K = 1

# Filter out tuples where len == K
filtered = [t for t in tuple_list if len(t) != K]

print(f"Original: {tuple_list}")
print(f"Removed tuples of length {K}: {filtered}")
""",
            "expectedOutput": "",
            "resultExplanation": "Removes 1-element tuples (4, ) and (1, ), retaining (4, 5), (8, 6, 7), and (3, 4, 6, 7).",
            "notes": "A single element tuple requires a trailing comma: `(4, )`.",
            "commonMistakes": "Thinking `(4)` is a tuple; without comma `(4)` is integer 4.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 181,
            "number": "181",
            "title": "Sort a list of tuples by second Item",
            "cleanTitle": "Sort a list of tuples by second Item",
            "category": "Tuple Programs",
            "introduction": "Sorts a collection of tuples based on their index-1 element.",
            "explanation": "Passes `key=lambda x: x[1]` to sorted().",
            "syntax": "sorted_tuples = sorted(tuple_list, key=lambda x: x[1])",
            "keywordsOrMethods": ["sorted by second item", "lambda x: x[1]", "itemgetter(1)"],
            "codeExample": """# Program to sort a list of tuples by second item
tuples_data = [('for', 24), ('Geeks', 8), ('Geeks', 30), ('is', 12)]

# Sort by index 1
sorted_by_second = sorted(tuples_data, key=lambda item: item[1])

print(f"Original: {tuples_data}")
print(f"Sorted by second element: {sorted_by_second}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorted by numeric second item: 8 ('Geeks'), 12 ('is'), 24 ('for'), 30 ('Geeks').",
            "notes": "Timsort (Python's sorting algorithm) is stable: ties in index 1 retain original relative order.",
            "commonMistakes": "Using index 2 (1-based thinking) which causes an IndexError on 2-tuples.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 182,
            "number": "182",
            "title": "Order Tuples using external List",
            "cleanTitle": "Order Tuples using external List",
            "category": "Tuple Programs",
            "introduction": "Orders tuples so their key element follows the sequence specified in an external ordering list.",
            "explanation": "Builds an index lookup map `order_map = {val: idx for idx, val in enumerate(order_list)}` and sorts using `key=lambda t: order_map[t[0]]`.",
            "syntax": "order_map = {v: i for i, v in enumerate(order_list)}\nsorted(tuples, key=lambda t: order_map.get(t[0]))",
            "keywordsOrMethods": ["external sort order", "custom sequence", "order map", "lookup"],
            "codeExample": """# Program to order tuples using an external list
tuples_list = [('B', 10), ('A', 20), ('D', 30), ('C', 40)]
external_order = ['A', 'C', 'B', 'D']

# Map each character to its desired rank
rank_map = {char: rank for rank, char in enumerate(external_order)}

ordered_tuples = sorted(tuples_list, key=lambda t: rank_map.get(t[0], float('inf')))

print(f"Original Tuples : {tuples_list}")
print(f"External Order  : {external_order}")
print(f"Ordered Result  : {ordered_tuples}")
""",
            "expectedOutput": "",
            "resultExplanation": "Tuples are ordered A, C, B, D matching the external list.",
            "notes": "Pre-computing rank_map provides O(1) lookup during comparisons.",
            "commonMistakes": "Calling external_order.index() inside the lambda, which degrades sorting to O(n * m log n).",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(m) for rank map"
        },
        {
            "id": 183,
            "number": "183",
            "title": "Flatten tuple of List to tuple",
            "cleanTitle": "Flatten tuple of List to tuple",
            "category": "Tuple Programs",
            "introduction": "Flattens a tuple containing multiple lists into a single flat tuple.",
            "explanation": "Flattens using tuple comprehension `tuple(item for sublist in tup for item in sublist)`.",
            "syntax": "tuple(x for sub in tup for x in sub)",
            "keywordsOrMethods": ["tuple flattening", "nested comprehension", "generator"],
            "codeExample": """# Program to flatten a tuple of lists into a flat tuple
tuple_of_lists = ([1, 2, 3], [4, 5], [6, 7, 8, 9])

# Flatten using generator expression
flat_tuple = tuple(item for sublist in tuple_of_lists for item in sublist)

print(f"Original Tuple of Lists: {tuple_of_lists}")
print(f"Flattened Tuple        : {flat_tuple}")
""",
            "expectedOutput": "",
            "resultExplanation": "Combines sublists into (1, 2, 3, 4, 5, 6, 7, 8, 9).",
            "notes": "Generators avoid creating an intermediate list before constructing the tuple.",
            "commonMistakes": "Using sum(tuple_of_lists, []) which has quadratic concatenation overhead.",
            "timeComplexity": "O(N) total items",
            "spaceComplexity": "O(N)"
        },
        {
            "id": 184,
            "number": "184",
            "title": "Convert Nested Tuple to Custom Key Dictionary",
            "cleanTitle": "Convert Nested Tuple to Custom Key Dictionary",
            "category": "Tuple Programs",
            "introduction": "Transforms a nested tuple into a structured dictionary with named keys.",
            "explanation": "Unpacks tuple fields into a custom dictionary structure.",
            "syntax": "{'id': t[0], 'name': t[1], 'score': t[2]}",
            "keywordsOrMethods": ["nested tuple", "dict mapping", "named fields", "record transformation"],
            "codeExample": """# Program to convert nested tuple to custom key dictionary
nested_tuples = (
    (101, "Alice", 95),
    (102, "Bob", 88),
    (103, "Charlie", 92)
)

keys = ["student_id", "name", "score"]

# Convert to list of dictionaries with custom keys
custom_dict_list = [dict(zip(keys, item)) for item in nested_tuples]

print("Nested Tuples:")
for t in nested_tuples: print(" ", t)

print("\\nCustom Key Dictionaries:")
for d in custom_dict_list: print(" ", d)
""",
            "expectedOutput": "",
            "resultExplanation": "Maps (101, 'Alice', 95) into {'student_id': 101, 'name': 'Alice', 'score': 95}.",
            "notes": "zip(keys, item) pairs field names with values dynamically.",
            "commonMistakes": "Hardcoding indices when zip() maps keys dynamically.",
            "timeComplexity": "O(N * K)",
            "spaceComplexity": "O(N * K)"
        }
    ]
    return lessons
