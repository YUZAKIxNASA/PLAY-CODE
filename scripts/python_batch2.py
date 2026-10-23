"""
Batch 2:
- Category 4: Python Regex Programs (20 lessons, IDs 22-41)
"""

def get_batch2():
    lessons = [
        {
            "id": 22,
            "number": "022",
            "title": "Check if String Contain Only Defined Characters",
            "cleanTitle": "Check if String Contain Only Defined Characters",
            "category": "Python Regex Programs",
            "introduction": "Regular expressions allow verifying that an entire string is composed solely of an authorized character set.",
            "explanation": "Using fullmatch() or anchoring with ^ and $ ensures the whole string matches the defined character class (such as lowercase letters, digits, and underscores) without any unauthorized characters.",
            "syntax": "import re\nbool(re.fullmatch(r'^[a-zA-Z0-9_]+$', test_str))",
            "keywordsOrMethods": ["re.fullmatch", "character class", "^ and $", "regex validation"],
            "codeExample": """# Program to check if string contains only defined characters
import re

def is_valid_custom_chars(text, allowed_pattern=r'^[a-zA-Z0-9_]+$'):
    # Returns True if string contains ONLY allowed characters
    return bool(re.fullmatch(allowed_pattern, text))

test_strings = [
    "play_code_2026",
    "python@dev",
    "ValidName123",
    "invalid string with spaces"
]

for s in test_strings:
    status = "VALID (Allowed chars only)" if is_valid_custom_chars(s) else "INVALID (Contains illegal chars)"
    print(f"'{s}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'play_code_2026' and 'ValidName123' match ^[a-zA-Z0-9_]+$, whereas '@' and spaces cause other strings to fail.",
            "notes": "re.fullmatch() is cleaner than re.match() because it guarantees the entire string matches, not just the prefix.",
            "commonMistakes": "Using re.search() without ^ and $ anchors, which succeeds if ANY part matches.",
            "timeComplexity": "O(n) where n is string length",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 23,
            "number": "023",
            "title": "Count Character Types",
            "cleanTitle": "Count Character Types",
            "category": "Python Regex Programs",
            "introduction": "Analyzes a text string and counts uppercase letters, lowercase letters, digits, and special symbols.",
            "explanation": "Regex character classes [A-Z], [a-z], [0-9], and [^a-zA-Z0-9\\s] allow extracting and counting occurrences of each type.",
            "syntax": "re.findall(r'[A-Z]', text)\nre.findall(r'[a-z]', text)\nre.findall(r'[0-9]', text)",
            "keywordsOrMethods": ["re.findall", "character categories", "regex count", "analysis"],
            "codeExample": """# Program to count Character Types in a string
import re

def count_character_types(text):
    upper = len(re.findall(r'[A-Z]', text))
    lower = len(re.findall(r'[a-z]', text))
    digits = len(re.findall(r'[0-9]', text))
    spaces = len(re.findall(r'\\s', text))
    special = len(re.findall(r'[^a-zA-Z0-9\\s]', text))
    return {
        "Uppercase": upper,
        "Lowercase": lower,
        "Digits": digits,
        "Spaces": spaces,
        "Special Chars": special,
        "Total": len(text)
    }

sample = "PLAY-code v2.0 is Awesome! #2026"
counts = count_character_types(sample)

print(f"Input Text: '{sample}'\\n")
for category, count in counts.items():
    print(f"{category:<14}: {count}")
""",
            "expectedOutput": "",
            "resultExplanation": "Tallies all characters across uppercase, lowercase, numeric digits, whitespaces, and punctuation symbols.",
            "notes": "[^a-zA-Z0-9\\s] matches any character that is not alphanumeric or whitespace.",
            "commonMistakes": "Forgetting to account for whitespaces, which might inadvertently be classified as special characters.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n) for matching lists"
        },
        {
            "id": 24,
            "number": "024",
            "title": "Find the most occurring number in a string",
            "cleanTitle": "Find the most occurring number in a string",
            "category": "Python Regex Programs",
            "introduction": "Extracts all numbers from a string and determines which number has the highest frequency of occurrence.",
            "explanation": "Uses re.findall(r'\\d+', text) to extract consecutive digit sequences, then uses collections.Counter to determine the most common number.",
            "syntax": "from collections import Counter\nnumbers = re.findall(r'\\d+', text)\nmost_common = Counter(numbers).most_common(1)",
            "keywordsOrMethods": ["re.findall", "\\d+", "Counter", "frequency"],
            "codeExample": """# Program to find the most occurring number in a string
import re
from collections import Counter

def most_occurring_number(text):
    # Extract all multi-digit numbers
    numbers = re.findall(r'\\d+', text)
    if not numbers:
        return None, 0
    counter = Counter(numbers)
    most_common_num, count = counter.most_common(1)[0]
    return most_common_num, count

sample = "Order 42 arrived with 15 items, then another 42 items, and 99 boxes with 42 labels and 15 stamps."
num, freq = most_occurring_number(sample)

nums = re.findall(r'\\d+', sample)
print(f"Text: '{sample}'")
print(f"Extracted Numbers: {nums}")
print(f"Most occurring number: {num} (appeared {freq} times)")
""",
            "expectedOutput": "",
            "resultExplanation": "The number 42 appears 3 times in the string, which is higher than 15 (2 times) and 99 (1 time).",
            "notes": "\\d+ extracts complete numbers like 42 rather than single isolated digits 4 and 2.",
            "commonMistakes": "Using [0-9] without '+' which extracts single digits rather than multi-digit numbers.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) where k is the count of numbers"
        },
        {
            "id": 25,
            "number": "025",
            "title": "Extract maximum numeric value from a string",
            "cleanTitle": "Extract maximum numeric value from a string",
            "category": "Python Regex Programs",
            "introduction": "Identifies all numbers embedded inside an arbitrary text string and finds the largest numeric value.",
            "explanation": "Using re.findall(r'\\d+', text), we find all sequences of digits, convert each to int, and apply max().",
            "syntax": "max_val = max(map(int, re.findall(r'\\d+', text)))",
            "keywordsOrMethods": ["max()", "re.findall", "map(int)", "\\d+"],
            "codeExample": """# Program to extract maximum numeric value from a string
import re

def extract_max_numeric_value(text):
    numbers = re.findall(r'\\d+', text)
    if not numbers:
        return None
    # Convert each matched string of digits to integer
    int_values = [int(n) for n in numbers]
    return max(int_values)

text1 = "Server CPU peaked at 95% while memory allocated was 2048 MB across 8 cores."
text2 = "Temperatures recorded were 14, 28, 105, and 33 degrees."

print(f"Max in text 1: {extract_max_numeric_value(text1)}")
print(f"Max in text 2: {extract_max_numeric_value(text2)}")
""",
            "expectedOutput": "",
            "resultExplanation": "In text1, numbers are [95, 2048, 8], max is 2048. In text2, numbers are [14, 28, 105, 33], max is 105.",
            "notes": "Always convert to int before finding max, otherwise alphabetical sorting will say '95' > '2048'.",
            "commonMistakes": "Sorting strings alphabetically: '95' > '2048' in string comparison because '9' > '2'.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(m) where m is number of integer tokens"
        },
        {
            "id": 26,
            "number": "026",
            "title": "Add Spaces Before Capital Letters",
            "cleanTitle": "Add Spaces Before Capital Letters",
            "category": "Python Regex Programs",
            "introduction": "Inserts a space before every capital letter to split CamelCase or PascalCase strings into readable sentences.",
            "explanation": "Using re.sub(r'(\\B[A-Z])', r' \\1', text), where \\B ensures we do not insert a space before the first letter of the string.",
            "syntax": "result = re.sub(r'(\\B[A-Z])', r' \\1', text)",
            "keywordsOrMethods": ["re.sub", "\\B", "CamelCase", "regex substitution"],
            "codeExample": """# Program to add spaces before capital letters
import re

def add_spaces_before_capitals(text):
    # \\B ensures the match is NOT at the start of a word boundary
    # [A-Z] matches an uppercase letter
    return re.sub(r'(\\B[A-Z])', r' \\1', text)

samples = [
    "PlayCodeIsAwesome",
    "PythonProgrammingLanguage",
    "NASAAndYuzakiCollaboration",
    "SimpleWord"
]

for s in samples:
    spaced = add_spaces_before_capitals(s)
    print(f"{s:<30} -> {spaced}")
""",
            "expectedOutput": "",
            "resultExplanation": "Inserts a single space before each uppercase letter that is not the first character of the string.",
            "notes": "\\B is a non-word boundary assertion that prevents leading spaces before the initial capital letter.",
            "commonMistakes": "Using (?=[A-Z]) without checking the string start, resulting in an unwanted leading space.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n) for the output string"
        },
        {
            "id": 27,
            "number": "027",
            "title": "Check whether a string starts and ends with the same character or not",
            "cleanTitle": "Check whether a string starts and ends with the same character or not",
            "category": "Python Regex Programs",
            "introduction": "Checks whether the first and last characters of a string are identical (case-sensitive or insensitive).",
            "explanation": "In regex, backreferences (\\1) refer to previously matched capturing groups. The pattern ^(.).*\\1$ matches if the first character (captured in group 1) equals the final character.",
            "syntax": "bool(re.match(r'^(.).*\\1$', text, re.DOTALL))",
            "keywordsOrMethods": ["backreference", "\\1", "re.match", "capturing group"],
            "codeExample": """# Program to check whether a string starts and ends with the same character
import re

def starts_and_ends_same(text):
    if len(text) == 0:
        return False
    if len(text) == 1:
        return True
    # ^(.) captures first char, .* allows any middle, \\1$ matches same char at end
    pattern = r'^(.).*\\1$'
    return bool(re.match(pattern, text, re.DOTALL))

test_cases = ["radar", "alpha", "window", "abracadabra", "x", "!hello!"]

for s in test_cases:
    res = "YES" if starts_and_ends_same(s) else "NO"
    print(f"'{s}': starts & ends with same char? {res}")
""",
            "expectedOutput": "",
            "resultExplanation": "'radar' starts and ends with 'r', 'abracadabra' with 'a', '!hello!' with '!', but 'alpha' ends with 'a' and starts with 'a' (YES), while 'window' starts with 'w' and ends with 'w' (YES).",
            "notes": "re.DOTALL ensures '.' matches newlines if multiline strings are tested.",
            "commonMistakes": "Forgetting single-character strings where first and last character are technically the same.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 28,
            "number": "028",
            "title": "Find Uppercase-Lowercase Sequences",
            "cleanTitle": "Find Uppercase-Lowercase Sequences",
            "category": "Python Regex Programs",
            "introduction": "Finds all sequences in a string where an uppercase letter is immediately followed by one or more lowercase letters.",
            "explanation": "The regex pattern r'[A-Z][a-z]+' matches a capitalized word token or prefix (title-case style words).",
            "syntax": "matches = re.findall(r'[A-Z][a-z]+', text)",
            "keywordsOrMethods": ["[A-Z][a-z]+", "re.findall", "title case", "regex sequences"],
            "codeExample": """# Program to find Uppercase-Lowercase sequences
import re

def find_uppercase_lowercase_sequences(text):
    # Pattern: one uppercase followed by one or more lowercase
    pattern = r'[A-Z][a-z]+'
    return re.findall(pattern, text)

sample_text = "Alice visited London and Paris during the SummerVacation in June."
results = find_uppercase_lowercase_sequences(sample_text)

print(f"Sample Text: '{sample_text}'\\n")
print("Matched Sequences:")
for idx, seq in enumerate(results, 1):
    print(f"  {idx}. {seq}")
""",
            "expectedOutput": "",
            "resultExplanation": "Finds Alice, London, Paris, Summer, Vacation, and June.",
            "notes": "'SummerVacation' is cleanly split into 'Summer' and 'Vacation' because each matches [A-Z][a-z]+.",
            "commonMistakes": "Using '*' instead of '+', which would match lone uppercase letters with 0 lowercase letters.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(m) for the matches list"
        },
        {
            "id": 29,
            "number": "029",
            "title": "Remove duplicate words from Sentence",
            "cleanTitle": "Remove duplicate words from Sentence",
            "category": "Python Regex Programs",
            "introduction": "Cleans a sentence by removing consecutive or repeating identical words.",
            "explanation": "Regex backreferences with word boundaries r'\\b(\\w+)(?:\\s+\\1\\b)+' identify consecutive repeated words and replace them with a single copy.",
            "syntax": "clean = re.sub(r'\\b(\\w+)(?:\\s+\\1\\b)+', r'\\1', sentence, flags=re.IGNORECASE)",
            "keywordsOrMethods": ["re.sub", "backreference", "\\b", "duplicate words", "deduplication"],
            "codeExample": """# Program to remove duplicate consecutive words from a sentence
import re

def remove_duplicate_words(sentence):
    # \\b(\\w+) matches a word
    # (?:\\s+\\1\\b)+ matches one or more repetitions of the same word separated by spaces
    pattern = r'\\b(\\w+)(?:\\s+\\1\\b)+'
    return re.sub(pattern, r'\\1', sentence, flags=re.IGNORECASE)

sentences = [
    "This is is a a test sentence sentence.",
    "Python is very very cool and and powerful.",
    "No duplicates here in this line."
]

for s in sentences:
    print(f"Original: {s}")
    print(f"Cleaned : {remove_duplicate_words(s)}\\n")
""",
            "expectedOutput": "",
            "resultExplanation": "'is is' becomes 'is', 'a a' becomes 'a', 'sentence sentence' becomes 'sentence'.",
            "notes": "The non-capturing group (?:...) avoids adding extra capturing index overhead.",
            "commonMistakes": "Not using word boundaries '\\b', which could match partial substrings inside longer words.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 30,
            "number": "030",
            "title": "Remove all characters except letters and numbers",
            "cleanTitle": "Remove all characters except letters and numbers",
            "category": "Python Regex Programs",
            "introduction": "Sanitizes input by stripping all punctuation, symbols, and special characters, leaving only alphanumeric characters.",
            "explanation": "re.sub(r'[^a-zA-Z0-9]', '', text) replaces any character that does not belong to the alphanumeric character class with an empty string.",
            "syntax": "alphanumeric_str = re.sub(r'[^a-zA-Z0-9]', '', text)",
            "keywordsOrMethods": ["re.sub", "[^a-zA-Z0-9]", "sanitize", "alphanumeric"],
            "codeExample": """# Program to remove all characters except letters and numbers
import re

def keep_alphanumeric_only(text):
    # ^ inside [] negates the character set
    return re.sub(r'[^a-zA-Z0-9]', '', text)

samples = [
    "Hello, World! #2026",
    "user_name@domain.com ($100.50)",
    "Clean-Text_Only?? 123"
]

for s in samples:
    print(f"Original : {s}")
    print(f"Stripped : {keep_alphanumeric_only(s)}\\n")
""",
            "expectedOutput": "",
            "resultExplanation": "Strips spaces, commas, exclamation points, hashes, symbols, and underscores.",
            "notes": "\\W matches any non-alphanumeric character, but includes underscores as word chars; [^a-zA-Z0-9] strips underscores too.",
            "commonMistakes": "Using \\W when you also want to remove underscores ('_' is part of \\w).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 31,
            "number": "031",
            "title": "Accept string ending with alphanumeric character",
            "cleanTitle": "Accept string ending with alphanumeric character",
            "category": "Python Regex Programs",
            "introduction": "Validates whether a string terminates with a letter (a-z, A-Z) or a number (0-9).",
            "explanation": "Anchoring with [a-zA-Z0-9]$ tests that the very last character of the input string is alphanumeric.",
            "syntax": "bool(re.search(r'[a-zA-Z0-9]$', text))",
            "keywordsOrMethods": ["$", "alphanumeric ending", "re.search", "string termination"],
            "codeExample": """# Program to check if a string ends with an alphanumeric character
import re

def ends_with_alphanumeric(text):
    # $ asserts position at the end of the string
    pattern = r'[a-zA-Z0-9]$'
    return bool(re.search(pattern, text))

test_strings = [
    "CodePlay2026",
    "Python_Project!",
    "Hello World",
    "Trailing Space ",
    "Symbol@"
]

for s in test_strings:
    status = "ACCEPTED" if ends_with_alphanumeric(s) else "REJECTED"
    print(f"'{s}' -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'CodePlay2026' ends with '6' and 'Hello World' ends with 'd' (accepted). Others end in '!', ' ', or '@' (rejected).",
            "notes": "The $ anchor matches the end of the string or right before a trailing newline.",
            "commonMistakes": "Not trimming trailing spaces or newlines before validating if trailing spaces are unintentional.",
            "timeComplexity": "O(1) with end anchor search",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 32,
            "number": "032",
            "title": "Accept string starting with vowel",
            "cleanTitle": "Accept string starting with vowel",
            "category": "Python Regex Programs",
            "introduction": "Verifies whether a given string begins with a vowel (A, E, I, O, U in uppercase or lowercase).",
            "explanation": "The pattern ^[aeiouAEIOU] matches any vowel at the very start of the string.",
            "syntax": "bool(re.match(r'^[aeiou]', text, re.IGNORECASE))",
            "keywordsOrMethods": ["^[aeiou]", "vowel", "re.match", "re.IGNORECASE"],
            "codeExample": """# Program to accept string starting with a vowel
import re

def starts_with_vowel(text):
    # ^ asserts start of string, [aeiou] checks vowels with ignore case flag
    return bool(re.match(r'^[aeiou]', text, re.IGNORECASE))

words = ["Apple", "Orange", "Elephant", "Umbrella", "Ice", "Banana", "Zebra", "sky"]

for w in words:
    status = "ACCEPTED (Vowel start)" if starts_with_vowel(w) else "REJECTED (Consonant start)"
    print(f"{w:<10} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "Apple, Orange, Elephant, Umbrella, and Ice start with vowels. Banana, Zebra, and sky do not.",
            "notes": "re.match() automatically matches from the beginning of the string.",
            "commonMistakes": "Forgetting the re.IGNORECASE flag or forgetting uppercase vowels.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 33,
            "number": "033",
            "title": "Check if a string starts with a substring",
            "cleanTitle": "Check if a string starts with a substring",
            "category": "Python Regex Programs",
            "introduction": "Determines whether an input string begins with a specified prefix substring.",
            "explanation": "In regex, re.escape(prefix) escapes special characters, and prefixing with ^ anchors the match to the start.",
            "syntax": "bool(re.match(r'^' + re.escape(prefix), text))",
            "keywordsOrMethods": ["re.escape", "^", "re.match", "prefix check"],
            "codeExample": """# Program to check if a string starts with a substring using regex
import re

def regex_startswith(text, prefix):
    # re.escape safely escapes any metacharacters in the prefix
    pattern = r'^' + re.escape(prefix)
    return bool(re.match(pattern, text))

url1 = "https://codeplay.dev/python"
url2 = "ftp://codeplay.dev/files"
prefix = "https://"

print(f"'{url1}' starts with '{prefix}': {regex_startswith(url1, prefix)}")
print(f"'{url2}' starts with '{prefix}': {regex_startswith(url2, prefix)}")
""",
            "expectedOutput": "",
            "resultExplanation": "url1 begins with 'https://' and matches the ^https:// pattern; url2 does not.",
            "notes": "Python's str.startswith() is faster for simple strings; regex is ideal when dynamic patterns are needed.",
            "commonMistakes": "Not using re.escape() on prefix substrings that contain characters like '.', '?', or '*'.",
            "timeComplexity": "O(m) where m is prefix length",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 34,
            "number": "034",
            "title": "Check if an URL is valid or not",
            "cleanTitle": "Check if an URL is valid or not",
            "category": "Python Regex Programs",
            "introduction": "Verifies that an address follows proper URL structure with protocol, domain, and optional path.",
            "explanation": "Validates http/https protocol, valid hostname/domain format, and optional port and query string path.",
            "syntax": "pattern = r'^(https?://)?(www\\.)?[a-zA-Z0-9-]+(\\.[a-zA-Z]{2,})+(/[\\w\\-._~:/?#[\\]@!$&\\'()*+,;=]*)?$'",
            "keywordsOrMethods": ["URL validation", "re.fullmatch", "protocol", "domain regex"],
            "codeExample": """# Program to check if a URL is valid
import re

def is_valid_url(url):
    pattern = re.compile(
        r'^(https?://)'                      # http:// or https://
        r'([a-zA-Z0-9.-]+(\.[a-zA-Z]{2,}))' # domain name
        r'(:\d+)?'                           # optional port
        r'(/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)?$' # optional path & query
    )
    return bool(pattern.match(url))

urls = [
    "https://codeplay.dev",
    "http://sub.domain.co.uk/path/to/page?id=123",
    "not-a-valid-url",
    "https://invalid url with spaces.com"
]

for u in urls:
    print(f"'{u}' -> {'VALID' if is_valid_url(u) else 'INVALID'}")
""",
            "expectedOutput": "",
            "resultExplanation": "The first two conform to standard URL format; the last two are rejected due to invalid protocol and spaces.",
            "notes": "For full RFC 3986 compliance in production, combine regex with urllib.parse.urlparse.",
            "commonMistakes": "Assuming every URL must begin with 'www.'.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 35,
            "number": "035",
            "title": "Parsing and Processing URL",
            "cleanTitle": "Parsing and Processing URL",
            "category": "Python Regex Programs",
            "introduction": "Deconstructs a URL into its constituent parts: scheme, domain, path, parameters, and fragments.",
            "explanation": "Uses named regex groups (?P<name>...) or urllib.parse to inspect protocol, host, port, path, and queries.",
            "syntax": "re.match(r'(?P<scheme>https?)://(?P<host>[^/:]+)(?::(?P<port>\\d+))?(?P<path>/.*)?', url)",
            "keywordsOrMethods": ["named groups", "URL parsing", "urllib.parse", "regex decomposition"],
            "codeExample": """# Program for parsing and processing URL components
import re

url = "https://api.codeplay.dev:8080/v1/lessons?category=python&sort=asc#top"

pattern = re.compile(
    r'^(?P<scheme>https?)://'
    r'(?P<host>[^/:]+)'
    r'(?::(?P<port>\d+))?'
    r'(?P<path>/[^?#]*)?'
    r'(?:\?(?P<query>[^#]*))?'
    r'(?:#(?P<fragment>.*))?$'
)

match = pattern.match(url)
if match:
    components = match.groupdict()
    print("URL Components Extracted:")
    for key, value in components.items():
        print(f"  {key:<10}: {value}")
""",
            "expectedOutput": "",
            "resultExplanation": "Extracts scheme='https', host='api.codeplay.dev', port='8080', path='/v1/lessons', query='category=python&sort=asc', and fragment='top'.",
            "notes": "Named groups (?P<name>...) make regex capture results readable and accessible via dict.",
            "commonMistakes": "Confusing path separators with query string '?' and fragment '#' anchors.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 36,
            "number": "036",
            "title": "Validate an IP address",
            "cleanTitle": "Validate an IP address",
            "category": "Python Regex Programs",
            "introduction": "Validates IPv4 addresses consisting of four decimal octets between 0 and 255 separated by periods.",
            "explanation": "Each octet must be between 0 and 255: (25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]). Combining 4 octets separated by dots validates standard IPv4 addresses.",
            "syntax": "octet = r'(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)'\npattern = rf'^{octet}\\.{octet}\\.{octet}\\.{octet}$'",
            "keywordsOrMethods": ["IPv4", "IP validation", "octet", "re.fullmatch"],
            "codeExample": """# Program to validate an IPv4 address
import re

def is_valid_ipv4(ip):
    octet = r'(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])'
    pattern = rf'^{octet}\\.{octet}\\.{octet}\\.{octet}$'
    return bool(re.fullmatch(pattern, ip))

ips = [
    "192.168.1.1",
    "255.255.255.255",
    "256.100.0.1",
    "192.168.1",
    "127.0.0.1"
]

for ip in ips:
    res = "VALID" if is_valid_ipv4(ip) else "INVALID"
    print(f"{ip:<18} -> {res}")
""",
            "expectedOutput": "",
            "resultExplanation": "192.168.1.1, 255.255.255.255, and 127.0.0.1 are valid. 256.100.0.1 exceeds 255 and 192.168.1 has only 3 octets.",
            "notes": "Python's standard library ipaddress module (ipaddress.ip_address) is also excellent for production.",
            "commonMistakes": "Using \\d{1,3} which erroneously allows numbers like 999.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 37,
            "number": "037",
            "title": "Check if email address valid or not",
            "cleanTitle": "Check if email address valid or not",
            "category": "Python Regex Programs",
            "introduction": "Validates standard email address formats containing a local username, '@' symbol, domain, and top-level domain.",
            "explanation": "Regex matches alphanumeric characters, dots, pluses, and hyphens in the recipient name, followed by '@', domain name, and 2+ character TLD.",
            "syntax": "pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'",
            "keywordsOrMethods": ["email validation", "re.fullmatch", "local-part", "domain"],
            "codeExample": """# Program to validate email addresses using Regex
import re

def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$'
    return bool(re.fullmatch(pattern, email))

emails = [
    "nasa_kun@codeplay.dev",
    "user.name+tag@example.co.uk",
    "invalid-email@",
    "missing_at_symbol.com",
    "@no_local_part.org"
]

for e in emails:
    print(f"{e:<30} -> {'VALID' if is_valid_email(e) else 'INVALID'}")
""",
            "expectedOutput": "",
            "resultExplanation": "Accepts well-formed emails with user and domain; rejects strings missing user, @ symbol, or domain.",
            "notes": "A practical regex prevents users from accidentally submitting obvious typos.",
            "commonMistakes": "Writing overly strict regex that rejects valid '+' alias addressing or multi-part TLDs like '.co.uk'.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 38,
            "number": "038",
            "title": "Find files having a particular extension",
            "cleanTitle": "Find files having a particular extension",
            "category": "Python Regex Programs",
            "introduction": "Filters a list of filenames or paths to find those matching a specific file extension.",
            "explanation": "The pattern rf'\\.{re.escape(ext)}$' matches a dot followed by the target extension anchored at the end of the string.",
            "syntax": "matches = [f for f in files if re.search(rf'\\.{re.escape(ext)}$', f, re.IGNORECASE)]",
            "keywordsOrMethods": ["file extension", "regex file filter", "re.search", "extension match"],
            "codeExample": """# Program to find files having a particular extension using regex
import re

def find_files_by_extension(file_list, extension):
    # Escape dot and anchor extension to end of string
    pattern = rf'\\.{re.escape(extension)}$'
    return [f for f in file_list if re.search(pattern, f, re.IGNORECASE)]

files = [
    "main.py",
    "script.py.bak",
    "app.PY",
    "styles.css",
    "index.html",
    "utils.py",
    "data.json"
]

py_files = find_files_by_extension(files, "py")
print(f"Target Extension: '.py'")
print(f"Matched Files: {py_files}")
""",
            "expectedOutput": "",
            "resultExplanation": "Matches 'main.py', 'app.PY' (case-insensitive), and 'utils.py'. Ignores 'script.py.bak' because .py is not at the end.",
            "notes": "Anchoring with '$' ensures that 'script.py.bak' is not incorrectly matched.",
            "commonMistakes": "Not anchoring with '$', which would falsely match 'script.py.bak' as a .py file.",
            "timeComplexity": "O(k * n) where k is number of files",
            "spaceComplexity": "O(m) for the filtered list"
        },
        {
            "id": 39,
            "number": "039",
            "title": "Extract IP address from file",
            "cleanTitle": "Extract IP address from file",
            "category": "Python Regex Programs",
            "introduction": "Parses log file contents or server reports to extract all valid IPv4 addresses.",
            "explanation": "Applies a regex boundary search across the text content to extract all IPv4 strings into a list.",
            "syntax": "ips = re.findall(r'\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b', text)",
            "keywordsOrMethods": ["extract IP", "re.findall", "log parsing", "IPv4 extraction"],
            "codeExample": """# Program to extract IP addresses from text/file content
import re

log_content = \"\"\"
2026-10-22 10:14:22 Accepted connection from 192.168.1.105:5432
2026-10-22 10:14:25 Connection closed from 192.168.1.105:5432
2026-10-22 10:15:01 Unauthorized access attempt from 10.0.0.1 on port 22
2026-10-22 10:16:30 Gateway router at 172.16.254.1 rebooted
\"\"\"

def extract_ip_addresses(text):
    # Regex pattern with word boundaries for IPv4
    pattern = r'\\b(?:[0-9]{1,3}\\.){3}[0-9]{1,3}\\b'
    matches = re.findall(pattern, text)
    # Filter to valid 0-255 octets
    valid_ips = []
    for ip in matches:
        octets = [int(o) for o in ip.split('.')]
        if all(0 <= o <= 255 for o in octets):
            valid_ips.append(ip)
    return valid_ips

found_ips = extract_ip_addresses(log_content)
print("Extracted IP Addresses:")
for ip in set(found_ips):
    print(f"  - {ip}")
""",
            "expectedOutput": "",
            "resultExplanation": "Identifies 192.168.1.105, 10.0.0.1, and 172.16.254.1 from the simulated server log.",
            "notes": "Combining regex with numeric bounds verification guarantees that no invalid octet like 999.999 is retained.",
            "commonMistakes": "Not using word boundaries \\b, which might extract parts of version numbers like 1.2.3.4.5.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 40,
            "number": "040",
            "title": "Check the validity of a Password",
            "cleanTitle": "Check the validity of a Password",
            "category": "Python Regex Programs",
            "introduction": "Verifies that a password satisfies standard corporate security criteria (length, case, numbers, special characters).",
            "explanation": "Uses lookahead assertions (?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]) to enforce presence of all required character types in at least 8 characters.",
            "syntax": "pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'",
            "keywordsOrMethods": ["lookahead assertions", "password validation", "regex security", "policy enforcement"],
            "codeExample": """# Program to check the validity of a Password
import re

def is_password_valid(password):
    # At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    pattern = re.compile(
        r'^(?=.*[a-z])'        # at least one lowercase
        r'(?=.*[A-Z])'        # at least one uppercase
        r'(?=.*\d)'           # at least one digit
        r'(?=.*[@$!%*?&])'    # at least one special char
        r'[A-Za-z\d@$!%*?&]'  # allowed characters
        r'{8,}$'              # minimum 8 characters
    )
    return bool(pattern.fullmatch(password))

passwords = [
    "CodePlay@2026",
    "weakpassword",
    "NO_SPECIAL_123",
    "Pass1!",
    "Admin#999Secure"
]

for p in passwords:
    status = "VALID" if is_password_valid(p) else "INVALID"
    print(f"{p:<18} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "'CodePlay@2026' and 'Admin#999Secure' meet all criteria. 'Pass1!' is too short (< 8 chars).",
            "notes": "Positive lookahead (?=...) checks for the condition without consuming characters in the match.",
            "commonMistakes": "Writing separate sequential regexes when lookahead assertions can validate all rules in a single pass.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 41,
            "number": "041",
            "title": "Categorize Password as Strong or Weak",
            "cleanTitle": "Categorize Password as Strong or Weak",
            "category": "Python Regex Programs",
            "introduction": "Evaluates password strength across a grading scale (Weak, Medium, Strong) based on multiple security metrics.",
            "explanation": "Calculates a strength score based on length, presence of uppercase, lowercase, numbers, and special symbols, then categorizes the score.",
            "syntax": "score += bool(re.search(rule, password))",
            "keywordsOrMethods": ["password strength", "categorization", "scoring", "regex rules"],
            "codeExample": """# Program to categorize Password as Strong, Medium, or Weak
import re

def evaluate_password_strength(password):
    score = 0
    feedback = []

    # Length check
    if len(password) >= 12:
        score += 2
    elif len(password) >= 8:
        score += 1
    else:
        feedback.append("Length is less than 8 characters")

    # Character composition checks
    if re.search(r'[A-Z]', password): score += 1
    else: feedback.append("Missing uppercase letter")

    if re.search(r'[a-z]', password): score += 1
    else: feedback.append("Missing lowercase letter")

    if re.search(r'\d', password): score += 1
    else: feedback.append("Missing numeric digit")

    if re.search(r'[^a-zA-Z0-9]', password): score += 1
    else: feedback.append("Missing special symbol")

    # Categorize
    if score >= 5:
        category = "STRONG"
    elif score >= 3:
        category = "MEDIUM"
    else:
        category = "WEAK"

    return category, score

sample_passwords = [
    "pass",
    "password123",
    "PlayCode2026",
    "Super#Secure$Key2026!"
]

for pwd in sample_passwords:
    cat, score = evaluate_password_strength(pwd)
    print(f"Password: {pwd:<24} | Category: {cat:<6} (Score: {score}/6)")
""",
            "expectedOutput": "",
            "resultExplanation": "Scores range from 0 to 6 based on criteria; passwords are classified as WEAK, MEDIUM, or STRONG.",
            "notes": "Giving bonus weight to length (12+ chars) aligns with modern NIST password guidelines.",
            "commonMistakes": "Enforcing complex symbols while neglecting length, which is the primary factor against brute-force attacks.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        }
    ]
    return lessons
