"""
Batch 1:
- Basic Python Programs (12)
- Pattern Printing Programs (2)
- Date-Time Programs (7)
Total = 21 lessons (IDs 1-21)
"""

def get_batch1():
    lessons = [
        # --- Category 1: Basic Python Programs (12) ---
        {
            "id": 1,
            "number": "001",
            "title": "Add two numbers",
            "cleanTitle": "Add two numbers",
            "category": "Basic Python Programs",
            "introduction": "Addition is one of the most fundamental arithmetic operations in Python, performed using the '+' operator.",
            "explanation": "In Python, numeric addition supports integers, floating-point numbers, and complex numbers. Python handles arbitrarily large integers automatically without integer overflow. This program demonstrates reading/defining two numbers and computing their sum.",
            "syntax": "result = num1 + num2",
            "keywordsOrMethods": ["+", "addition", "arithmetic", "sum"],
            "codeExample": """# Program to add two numbers in Python
num1 = 15
num2 = 27

# Adding two numbers
sum_result = num1 + num2

print(f"Number 1: {num1}")
print(f"Number 2: {num2}")
print(f"Sum of {num1} and {num2} is: {sum_result}")
""",
            "expectedOutput": "",  # will be auto-populated
            "resultExplanation": "The variables num1 and num2 hold 15 and 27. The + operator evaluates their arithmetic sum, yielding 42.",
            "notes": "Python numbers have arbitrary precision; integers never overflow memory limits.",
            "commonMistakes": "Concatenating strings instead of adding numbers when reading input with input() without wrapping in int() or float().",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 2,
            "number": "002",
            "title": "Maximum of two numbers",
            "cleanTitle": "Maximum of two numbers",
            "category": "Basic Python Programs",
            "introduction": "Finding the greater of two values is a classic conditional branching logic problem.",
            "explanation": "You can find the maximum using the conditional 'if-else' construct, a ternary conditional expression, or the built-in 'max()' function.",
            "syntax": "max_val = a if a > b else b\n# or\nmax_val = max(a, b)",
            "keywordsOrMethods": ["max()", "if-else", "ternary operator", "comparison"],
            "codeExample": """# Program to find the maximum of two numbers
a = 45
b = 82

# Method 1: Using if-else
if a > b:
    maximum = a
else:
    maximum = b

print(f"Between {a} and {b}, the maximum (using if-else) is: {maximum}")

# Method 2: Using built-in max()
builtin_max = max(a, b)
print(f"Using built-in max(): {builtin_max}")
""",
            "expectedOutput": "",
            "resultExplanation": "Since 82 is strictly greater than 45, the else condition branch executes, setting maximum to 82.",
            "notes": "The built-in max() function can take an arbitrary number of arguments or an iterable like a list.",
            "commonMistakes": "Using the assignment operator '=' instead of comparison '==' when checking for equality.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 3,
            "number": "003",
            "title": "Factorial of a number",
            "cleanTitle": "Factorial of a number",
            "category": "Basic Python Programs",
            "introduction": "The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.",
            "explanation": "By mathematical definition, 0! = 1 and n! = n * (n - 1)!. Factorial can be implemented iteratively using a loop, recursively, or via math.factorial().",
            "syntax": "import math\nmath.factorial(n)",
            "keywordsOrMethods": ["factorial", "math.factorial", "recursion", "iteration"],
            "codeExample": """# Program to find the factorial of a number
def factorial_iterative(n):
    if n < 0:
        return "Factorial does not exist for negative numbers"
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

import math

num = 6
print(f"Factorial of {num} (iterative): {factorial_iterative(num)}")
print(f"Factorial of {num} (math.factorial): {math.factorial(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "For n = 6, 1 * 2 * 3 * 4 * 5 * 6 = 720.",
            "notes": "Python's math.factorial is implemented in C and runs much faster than pure Python loops.",
            "commonMistakes": "Failing to handle negative numbers or forgetting the base case 0! = 1.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 4,
            "number": "004",
            "title": "Find simple interest",
            "cleanTitle": "Find simple interest",
            "category": "Basic Python Programs",
            "introduction": "Simple interest is calculated on the principal amount of a loan or deposit.",
            "explanation": "The formula is SI = (P * R * T) / 100, where P is the Principal amount, R is the annual Rate of interest, and T is the Time period in years.",
            "syntax": "SI = (principal * rate * time) / 100",
            "keywordsOrMethods": ["simple interest", "principal", "rate", "time", "arithmetic"],
            "codeExample": """# Program to calculate Simple Interest
principal = 10000  # Principal amount in currency units
rate = 5.5         # Annual interest rate in percent
time = 3           # Time period in years

# Formula: (P * R * T) / 100
simple_interest = (principal * rate * time) / 100
total_amount = principal + simple_interest

print(f"Principal: ${principal:,.2f}")
print(f"Rate: {rate}% per annum")
print(f"Time: {time} years")
print(f"Simple Interest: ${simple_interest:,.2f}")
print(f"Total Amount Payable: ${total_amount:,.2f}")
""",
            "expectedOutput": "",
            "resultExplanation": "(10000 * 5.5 * 3) / 100 = 1650.0. The simple interest earned is $1,650.00.",
            "notes": "Always format currency outputs using formatting strings like :.2f for financial clarity.",
            "commonMistakes": "Dividing by 100 twice if rate is already specified as a decimal (e.g. 0.055).",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 5,
            "number": "005",
            "title": "Find compound interest",
            "cleanTitle": "Find compound interest",
            "category": "Basic Python Programs",
            "introduction": "Compound interest is interest calculated on the initial principal and accumulated interest of previous periods.",
            "explanation": "The standard compound interest formula is A = P * (1 + R/100)^T, and CI = A - P. In Python, power is calculated using the '**' operator or pow().",
            "syntax": "amount = principal * (pow((1 + rate / 100), time))\nCI = amount - principal",
            "keywordsOrMethods": ["compound interest", "pow()", "**", "principal", "annual compounding"],
            "codeExample": """# Program to calculate Compound Interest
principal = 5000   # Principal amount
rate = 7.5         # Annual rate of interest in %
time = 4           # Time period in years

# Compound interest formula
amount = principal * ((1 + (rate / 100)) ** time)
compound_interest = amount - principal

print(f"Principal Amount: ${principal:,.2f}")
print(f"Annual Interest Rate: {rate}%")
print(f"Time Duration: {time} years")
print(f"Total Accumulated Amount: ${amount:,.2f}")
print(f"Compound Interest Earned: ${compound_interest:,.2f}")
""",
            "expectedOutput": "",
            "resultExplanation": "5000 * (1 + 0.075)^4 = 5000 * 1.335469 = 6677.35. The CI earned is 1677.35.",
            "notes": "Use the Decimal module if exact decimal arithmetic without binary floating-point rounding is required.",
            "commonMistakes": "Using the caret '^' for exponentiation. In Python, '^' is the bitwise XOR operator, not power.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 6,
            "number": "006",
            "title": "Check Armstrong Number",
            "cleanTitle": "Check Armstrong Number",
            "category": "Basic Python Programs",
            "introduction": "An Armstrong number (or narcissistic number) of n digits is an integer such that the sum of its digits raised to the n-th power equals the number itself.",
            "explanation": "For example, 153 has 3 digits: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153, so 153 is an Armstrong number.",
            "syntax": "sum(int(digit) ** num_digits for digit in str(num)) == num",
            "keywordsOrMethods": ["armstrong number", "narcissistic number", "sum", "digits"],
            "codeExample": """# Program to check if a number is an Armstrong number
def is_armstrong(number):
    num_str = str(number)
    num_digits = len(num_str)
    digit_sum = sum(int(digit) ** num_digits for digit in num_str)
    return digit_sum == number

test_numbers = [153, 370, 371, 407, 9474, 123]

for num in test_numbers:
    status = "is an Armstrong number" if is_armstrong(num) else "is NOT an Armstrong number"
    print(f"{num:5d} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "153, 370, 371, 407, and 9474 evaluate to the sum of their digits raised to their respective number of digits.",
            "notes": "Single digit numbers (0-9) are all Armstrong numbers because d^1 = d.",
            "commonMistakes": "Hardcoding power as 3 for numbers with 4 or more digits (like 9474).",
            "timeComplexity": "O(d) where d is the number of digits",
            "spaceComplexity": "O(d) for string conversion"
        },
        {
            "id": 7,
            "number": "007",
            "title": "Find area of a circle",
            "cleanTitle": "Find area of a circle",
            "category": "Basic Python Programs",
            "introduction": "The area of a circle represents the total surface space enclosed within its boundary circumference.",
            "explanation": "The formula is Area = pi * r^2. Python's 'math.pi' constant provides high-precision value for pi (~3.141592653589793).",
            "syntax": "import math\narea = math.pi * (radius ** 2)",
            "keywordsOrMethods": ["math.pi", "radius", "area of circle", "math"],
            "codeExample": """# Program to calculate the area of a circle
import math

def calculate_circle_area(radius):
    if radius < 0:
        raise ValueError("Radius cannot be negative")
    return math.pi * (radius ** 2)

radii = [1, 2.5, 7, 10]
for r in radii:
    area = calculate_circle_area(r)
    print(f"Radius: {r:4.1f} | Area: {area:.4f}")
""",
            "expectedOutput": "",
            "resultExplanation": "For radius 7: pi * 7^2 = pi * 49 = 153.9380.",
            "notes": "Always use math.pi rather than 3.14 for precision in scientific or production applications.",
            "commonMistakes": "Forgetting to square the radius or using diameter instead of radius.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 8,
            "number": "008",
            "title": "Check whether a number is Prime or not",
            "cleanTitle": "Check whether a number is Prime or not",
            "category": "Basic Python Programs",
            "introduction": "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.",
            "explanation": "To check primality efficiently, test divisibility only up to the square root of n (i.e. i * i <= n). If n is divisible by any integer in this range, it is composite.",
            "syntax": "def is_prime(n):\n    if n <= 1: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True",
            "keywordsOrMethods": ["prime", "primality test", "sqrt", "modulus"],
            "codeExample": """# Efficient Primality Test in Python
def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    # Check 6k +/- 1 up to sqrt(n)
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

test_vals = [2, 17, 24, 29, 31, 49, 97, 100]
for val in test_vals:
    res = "PRIME" if is_prime(val) else "COMPOSITE"
    print(f"{val:3d} is {res}")
""",
            "expectedOutput": "",
            "resultExplanation": "2, 17, 29, 31, and 97 have no divisors other than 1 and themselves, so they are prime.",
            "notes": "The 6k +/- 1 optimization reduces trial divisions by skipping multiples of 2 and 3.",
            "commonMistakes": "Treating 1 or negative numbers as prime numbers; 1 is neither prime nor composite.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 9,
            "number": "009",
            "title": "N-th Fibonacci number",
            "cleanTitle": "N-th Fibonacci number",
            "category": "Basic Python Programs",
            "introduction": "The Fibonacci sequence is defined by F(0)=0, F(1)=1, and F(n)=F(n-1)+F(n-2) for n >= 2.",
            "explanation": "Iterative calculation using two accumulator variables computes the N-th Fibonacci number in O(n) time and O(1) space, avoiding exponential recursion call overhead.",
            "syntax": "a, b = 0, 1\nfor _ in range(n): a, b = b, a + b",
            "keywordsOrMethods": ["fibonacci", "iteration", "dynamic programming", "sequence"],
            "codeExample": """# Program to find the N-th Fibonacci number
def nth_fibonacci(n):
    if n < 0:
        raise ValueError("Invalid index; n must be non-negative.")
    if n == 0:
        return 0
    if n == 1:
        return 1
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

indices = [0, 1, 2, 5, 8, 10, 15]
for idx in indices:
    print(f"Fibonacci({idx}) = {nth_fibonacci(idx)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Fibonacci(10) computes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.",
            "notes": "Tuple unpacking `a, b = b, a + b` performs concurrent variable updates in Python idiomatically.",
            "commonMistakes": "Using naive recursion without memoization, which causes O(2^n) time explosion for n > 35.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 10,
            "number": "010",
            "title": "Nth multiple of a number in Fibonacci Series",
            "cleanTitle": "Nth multiple of a number in Fibonacci Series",
            "category": "Basic Python Programs",
            "introduction": "In the Fibonacci sequence, multiples of a number k appear at periodic indices.",
            "explanation": "This program finds the position (index) of the N-th Fibonacci number that is divisible by k. Multiples of any integer k appear in the Fibonacci series periodically.",
            "syntax": "def find_position(k, n): ...",
            "keywordsOrMethods": ["fibonacci multiple", "periodicity", "modular arithmetic", "series"],
            "codeExample": """# Program to find position of Nth multiple of a number K in Fibonacci Series
def find_position(k, n):
    f1 = 0
    f2 = 1
    i = 2
    count = 0
    
    while True:
        f3 = f1 + f2
        f1 = f2
        f2 = f3
        
        if f2 % k == 0:
            count += 1
            if count == n:
                return i
        i += 1

k = 3  # Find multiples of 3
n = 2  # Find the 2nd multiple of 3 in Fibonacci sequence
pos = find_position(k, n)

print(f"The {n}-th multiple of {k} in the Fibonacci sequence occurs at index: {pos}")
# Verification
fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
print(f"Fibonacci series: {fibs}")
print(f"Index {pos} value is: {fibs[pos]}, which is divisible by {k}")
""",
            "expectedOutput": "",
            "resultExplanation": "The 1st multiple of 3 is at index 4 (value 3). The 2nd multiple of 3 is at index 8 (value 21).",
            "notes": "The index where multiples of k occur is strictly periodic, known as the Pisano period property.",
            "commonMistakes": "Confusing 0-based indexing with 1-based indexing.",
            "timeComplexity": "O(n * P) where P is the period of k in Fibonacci",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 11,
            "number": "011",
            "title": "Print ASCII Value of a character",
            "cleanTitle": "Print ASCII Value of a character",
            "category": "Basic Python Programs",
            "introduction": "ASCII (American Standard Code for Information Interchange) assigns numerical codes to characters.",
            "explanation": "Python provides the built-in function ord() to convert a single character to its Unicode/ASCII integer code point, and chr() to perform the inverse conversion.",
            "syntax": "ascii_val = ord(char)\nchar = chr(ascii_val)",
            "keywordsOrMethods": ["ord()", "chr()", "ASCII", "Unicode", "codepoint"],
            "codeExample": """# Program to print ASCII Value of characters
characters = ['A', 'Z', 'a', 'z', '0', '9', '$', '@', '\\n']

print(f"{'Character':<12} | {'ASCII Code':<10}")
print("-" * 25)

for ch in characters:
    display_ch = repr(ch) if ch == '\\n' else ch
    ascii_code = ord(ch)
    print(f"{display_ch:<12} | {ascii_code:<10}")

# Inverse check
print("\\nInverse conversion using chr():")
print(f"chr(65) -> {chr(65)}")
print(f"chr(97) -> {chr(97)}")
""",
            "expectedOutput": "",
            "resultExplanation": "ord('A') returns 65, ord('a') returns 97, and ord('0') returns 48.",
            "notes": "ord() accepts any single Unicode character, not just standard 7-bit ASCII.",
            "commonMistakes": "Passing a string with length > 1 into ord(), which raises a TypeError.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 12,
            "number": "012",
            "title": "Cube sum of first n natural numbers",
            "cleanTitle": "Cube sum of first n natural numbers",
            "category": "Basic Python Programs",
            "introduction": "Calculates the sum of cubes of the first n positive integers: 1^3 + 2^3 + ... + n^3.",
            "explanation": "Mathematically, the sum of cubes equals the square of the sum of the first n natural numbers: [n * (n + 1) / 2]^2. This allows calculating the answer in O(1) time without looping.",
            "syntax": "cube_sum = ((n * (n + 1)) // 2) ** 2",
            "keywordsOrMethods": ["cube sum", "natural numbers", "mathematical formula", "arithmetic"],
            "codeExample": """# Program to find the Cube sum of first n natural numbers
def cube_sum_formula(n):
    # Using formula: [n * (n + 1) / 2] ^ 2
    sum_natural = (n * (n + 1)) // 2
    return sum_natural ** 2

def cube_sum_loop(n):
    return sum(i ** 3 for i in range(1, n + 1))

n = 5
print(f"N = {n}")
print(f"Cube sum (using formula O(1)): {cube_sum_formula(n)}")
print(f"Cube sum (using loop O(n)):    {cube_sum_loop(n)}")

# Verification for n = 5: 1 + 8 + 27 + 64 + 125 = 225
print("1^3 + 2^3 + 3^3 + 4^3 + 5^3 = 1 + 8 + 27 + 64 + 125 = 225")
""",
            "expectedOutput": "",
            "resultExplanation": "For n = 5: [5 * 6 / 2]^2 = 15^2 = 225.",
            "notes": "Using integer division '//' prevents converting large integers to floats, preserving precision.",
            "commonMistakes": "Using floating point division '/' which may lose precision for large n.",
            "timeComplexity": "O(1) using closed-form formula",
            "spaceComplexity": "O(1)"
        },

        # --- Category 2: Pattern Printing Programs (2) ---
        {
            "id": 13,
            "number": "013",
            "title": "Print an Inverted Star Pattern",
            "cleanTitle": "Print an Inverted Star Pattern",
            "category": "Pattern Printing Programs",
            "introduction": "An inverted star pattern prints rows of asterisks with decreasing count from top to bottom.",
            "explanation": "Using a descending loop from n down to 1, each row prints i asterisks separated by spaces or formatted with appropriate alignment.",
            "syntax": "for i in range(n, 0, -1):\n    print('* ' * i)",
            "keywordsOrMethods": ["star pattern", "nested loops", "string multiplication", "inverted pyramid"],
            "codeExample": """# Program to print an Inverted Star Pattern
def print_inverted_star_pattern(n):
    print(f"Inverted Star Pattern (n = {n}):")
    for i in range(n, 0, -1):
        # Print i stars separated by space
        print("* " * i)

print_inverted_star_pattern(5)
""",
            "expectedOutput": "",
            "resultExplanation": "Outputs 5 stars on row 1, 4 stars on row 2, down to 1 star on row 5.",
            "notes": "Python string multiplication ('* ' * i) provides a concise alternative to inner loops.",
            "commonMistakes": "Forgetting the negative step -1 in range(n, 0, -1), which produces an empty loop.",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 14,
            "number": "014",
            "title": "Print Double-Sided Staircase Pattern",
            "cleanTitle": "Print Double-Sided Staircase Pattern",
            "category": "Pattern Printing Programs",
            "introduction": "A double-sided staircase pattern prints symmetrical stairs on both left and right sides with a central gap or aligned column.",
            "explanation": "For each row i from 1 to n, it prints stars on the left, padding spaces in the middle, and symmetric stars on the right.",
            "syntax": "left_stairs + spaces + right_stairs",
            "keywordsOrMethods": ["double staircase", "pattern", "symmetry", "formatting"],
            "codeExample": """# Program to print Double-Sided Staircase Pattern
def print_double_staircase(n):
    print(f"Double-Sided Staircase Pattern (n = {n}):")
    for i in range(1, n + 1):
        # Left stairs
        left = "* " * i
        # Middle space gap
        gap = "  " * (2 * (n - i))
        # Right stairs
        right = "* " * i
        print(left + gap + right)

print_double_staircase(4)
""",
            "expectedOutput": "",
            "resultExplanation": "Prints a symmetric double-sided staircase where left and right star steps grow row by row toward the center.",
            "notes": "Carefully coordinate space offsets to keep the left and right stairs balanced.",
            "commonMistakes": "Miscalculating the gap width causing the right side to be misaligned.",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },

        # --- Category 3: Date-Time Programs (7) ---
        {
            "id": 15,
            "number": "015",
            "title": "Get Current Date and Time",
            "cleanTitle": "Get Current Date and Time",
            "category": "Date-Time Programs",
            "introduction": "Python's datetime module supplies classes for manipulating dates and times in both simple and complex ways.",
            "explanation": "datetime.now() retrieves the current local date and time. strftime() allows formatting into standard ISO or custom human-readable representations.",
            "syntax": "from datetime import datetime\nnow = datetime.now()\nformatted = now.strftime('%Y-%m-%d %H:%M:%S')",
            "keywordsOrMethods": ["datetime", "now()", "strftime", "current timestamp"],
            "codeExample": """# Program to get current date and time in Python
from datetime import datetime, timezone

# Simulated reference date for reproducible sandbox demo
now = datetime(2026, 10, 22, 14, 30, 45)

print(f"Current Date & Time: {now}")
print(f"Formatted (YYYY-MM-DD): {now.strftime('%Y-%m-%d')}")
print(f"Formatted Time (12-hour): {now.strftime('%I:%M:%S %p')}")
print(f"Day of the week: {now.strftime('%A')}")
print(f"Month: {now.strftime('%B')}")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates datetime formatting directives %Y, %m, %d, %I, %M, %S, %p, %A, and %B.",
            "notes": "In production, prefer timezone-aware datetimes with timezone.utc over naive datetimes.",
            "commonMistakes": "Confusing %m (month) with %M (minute), or %y (2-digit year) with %Y (4-digit year).",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 16,
            "number": "016",
            "title": "Find yesterday's, today's and tomorrow's date",
            "cleanTitle": "Find yesterday's, today's and tomorrow's date",
            "category": "Date-Time Programs",
            "introduction": "Date arithmetic is performed using datetime.timedelta to add or subtract days.",
            "explanation": "timedelta(days=1) creates a duration of one day. Adding or subtracting it from any date object yields yesterday or tomorrow correctly, handling month and leap year boundaries.",
            "syntax": "today = date.today()\nyesterday = today - timedelta(days=1)\ntomorrow = today + timedelta(days=1)",
            "keywordsOrMethods": ["timedelta", "date arithmetic", "yesterday", "tomorrow"],
            "codeExample": """# Program to find yesterday's, today's and tomorrow's date
from datetime import date, timedelta

# Reference date for deterministic execution
today = date(2026, 10, 22)
one_day = timedelta(days=1)

yesterday = today - one_day
tomorrow = today + one_day

print(f"Yesterday : {yesterday.strftime('%A, %B %d, %Y')}")
print(f"Today     : {today.strftime('%A, %B %d, %Y')}")
print(f"Tomorrow  : {tomorrow.strftime('%A, %B %d, %Y')}")
""",
            "expectedOutput": "",
            "resultExplanation": "Subtracting 1 day from Oct 22 gives Oct 21; adding 1 day gives Oct 23.",
            "notes": "timedelta handles tricky calendar transitions like month-ends and leap days seamlessly.",
            "commonMistakes": "Manually subtracting 1 from today.day, which breaks on the first day of any month.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 17,
            "number": "017",
            "title": "Convert time from 12 hour to 24 hour format",
            "cleanTitle": "Convert time from 12 hour to 24 hour format",
            "category": "Date-Time Programs",
            "introduction": "12-hour format uses AM/PM indicators while 24-hour military format spans from 00:00 to 23:59.",
            "explanation": "Using datetime.strptime() with '%I:%M:%S %p', we parse the 12-hour string, then format it into 24-hour time using strftime('%H:%M:%S').",
            "syntax": "dt = datetime.strptime(time_12hr, '%I:%M:%S %p')\ntime_24hr = dt.strftime('%H:%M:%S')",
            "keywordsOrMethods": ["strptime", "strftime", "12-hour to 24-hour", "time format"],
            "codeExample": """# Program to convert time from 12-hour to 24-hour format
from datetime import datetime

def convert_12_to_24(time_str):
    # Parse 12-hour time
    in_time = datetime.strptime(time_str.strip(), "%I:%M:%S %p")
    # Format to 24-hour time
    return in_time.strftime("%H:%M:%S")

times = [
    "07:05:45 PM",
    "12:00:00 AM",
    "12:30:15 PM",
    "09:15:20 AM"
]

for t in times:
    print(f"12-hour: {t:<12} -> 24-hour: {convert_12_to_24(t)}")
""",
            "expectedOutput": "",
            "resultExplanation": "07:05:45 PM becomes 19:05:45, 12:00:00 AM becomes 00:00:00, and 12:30:15 PM stays 12:30:15.",
            "notes": "%I parses 12-hour clock (01-12) and %H parses 24-hour clock (00-23).",
            "commonMistakes": "Forgetting that 12 AM corresponds to 00:00 and 12 PM corresponds to 12:00.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 18,
            "number": "018",
            "title": "Find difference between current time and given time",
            "cleanTitle": "Find difference between current time and given time",
            "category": "Date-Time Programs",
            "introduction": "Calculates the elapsed duration or time difference between two timestamps.",
            "explanation": "Subtracting two datetime objects produces a timedelta instance representing the exact difference in days, seconds, and microseconds.",
            "syntax": "diff = current_time - given_time\ndays = diff.days\nseconds = diff.seconds",
            "keywordsOrMethods": ["time difference", "timedelta", "duration", "elapsed time"],
            "codeExample": """# Program to find difference between current time and a given time
from datetime import datetime

current_time = datetime(2026, 10, 22, 15, 45, 0)
given_time = datetime(2026, 10, 22, 10, 15, 30)

diff = current_time - given_time

total_seconds = int(diff.total_seconds())
hours = total_seconds // 3600
minutes = (total_seconds % 3600) // 60
seconds = total_seconds % 60

print(f"Current Time : {current_time.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Given Time   : {given_time.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"Difference   : {hours} hours, {minutes} minutes, {seconds} seconds")
print(f"Total Seconds: {total_seconds} seconds")
""",
            "expectedOutput": "",
            "resultExplanation": "From 10:15:30 to 15:45:00 is exactly 5 hours, 29 minutes, and 30 seconds (19,770 seconds).",
            "notes": "Use diff.total_seconds() to get the complete duration including days and partial seconds.",
            "commonMistakes": "Using diff.seconds instead of total_seconds() when the difference spans multiple days.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 19,
            "number": "019",
            "title": "Create a Lap Timer",
            "cleanTitle": "Create a Lap Timer",
            "category": "Date-Time Programs",
            "introduction": "A lap timer measures intermediate splits and cumulative elapsed time during an event or process.",
            "explanation": "Using time.perf_counter() gives high-resolution monotonic time measurements unaffected by system clock adjustments.",
            "syntax": "import time\nstart = time.perf_counter()\n# split...\nlap_duration = time.perf_counter() - last_lap",
            "keywordsOrMethods": ["lap timer", "time.perf_counter", "monotonic", "stopwatch"],
            "codeExample": """# Program to create and simulate a Lap Timer
import time

class LapTimer:
    def __init__(self):
        self.laps = []
        self.start_time = 0
        self.last_lap_time = 0
        
    def start(self, initial_sim_time=0.0):
        self.start_time = initial_sim_time
        self.last_lap_time = initial_sim_time
        self.laps = []
        
    def record_lap(self, current_sim_time):
        lap_time = current_sim_time - self.last_lap_time
        total_time = current_sim_time - self.start_time
        self.laps.append((lap_time, total_time))
        self.last_lap_time = current_sim_time
        return lap_time, total_time

# Simulated execution
timer = LapTimer()
timer.start(0.0)

# Simulate 3 laps with timestamps
simulated_checkpoints = [1.25, 2.80, 4.10]
print(f"{'Lap #':<8} | {'Lap Split':<12} | {'Cumulative Time':<15}")
print("-" * 42)

for i, cp in enumerate(simulated_checkpoints, 1):
    lap_dur, total_dur = timer.record_lap(cp)
    print(f"Lap {i:<4} | {lap_dur:6.2f}s      | {total_dur:6.2f}s")
""",
            "expectedOutput": "",
            "resultExplanation": "Lap 1 splits at 1.25s, Lap 2 takes 1.55s (cumulative 2.80s), and Lap 3 takes 1.30s (cumulative 4.10s).",
            "notes": "time.perf_counter() is monotonic and ideal for benchmarking and lap timers.",
            "commonMistakes": "Using time.time() for timers, which can jump backwards if daylight savings or NTP sync shifts clock.",
            "timeComplexity": "O(1) per lap record",
            "spaceComplexity": "O(k) for k recorded laps"
        },
        {
            "id": 20,
            "number": "020",
            "title": "Convert date string to timestamp",
            "cleanTitle": "Convert date string to timestamp",
            "category": "Date-Time Programs",
            "introduction": "A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (UTC).",
            "explanation": "datetime.strptime() parses the date string into a datetime object, and .timestamp() converts that object into POSIX seconds.",
            "syntax": "from datetime import datetime\ndt = datetime.strptime(date_str, format_str)\nts = dt.timestamp()",
            "keywordsOrMethods": ["timestamp()", "strptime", "epoch", "posix time"],
            "codeExample": """# Program to convert a date string to a POSIX timestamp
from datetime import datetime, timezone

date_string = "2026-10-22 14:30:00"
date_format = "%Y-%m-%d %H:%M:%S"

# Parse date string to UTC datetime object
dt = datetime.strptime(date_string, date_format).replace(tzinfo=timezone.utc)

# Convert to POSIX timestamp (seconds since epoch)
timestamp = int(dt.timestamp())

print(f"Input Date String : '{date_string}' (UTC)")
print(f"Parsed Datetime   : {dt}")
print(f"POSIX Timestamp   : {timestamp}")

# Inverse verification
reconstructed = datetime.fromtimestamp(timestamp, tz=timezone.utc)
print(f"Reconstructed Date: {reconstructed.strftime(date_format)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Converts '2026-10-22 14:30:00' UTC to its corresponding POSIX epoch seconds: 1792679400.",
            "notes": "Always specify timezone explicitly to avoid unexpected local timezone offsets.",
            "commonMistakes": "Converting naive local datetime objects to timestamp, which uses system local time zone implicitly.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 21,
            "number": "021",
            "title": "Convert timestamp string to datetime object",
            "cleanTitle": "Convert timestamp string to datetime object",
            "category": "Date-Time Programs",
            "introduction": "Converts a numeric timestamp string into a readable Python datetime object.",
            "explanation": "datetime.fromtimestamp() takes float/int POSIX seconds and reconstructs the datetime object.",
            "syntax": "dt = datetime.fromtimestamp(float(ts_string), tz=timezone.utc)",
            "keywordsOrMethods": ["fromtimestamp", "datetime", "epoch conversion", "timezone"],
            "codeExample": """# Program to convert timestamp string to datetime object
from datetime import datetime, timezone

timestamp_str = "1792679400"

# Convert string to float / integer seconds
ts_val = float(timestamp_str)

# Convert to UTC datetime object
dt_utc = datetime.fromtimestamp(ts_val, tz=timezone.utc)

print(f"Timestamp String: '{timestamp_str}'")
print(f"Datetime (UTC)  : {dt_utc}")
print(f"Formatted Output: {dt_utc.strftime('%A, %B %d, %Y at %I:%M:%S %p %Z')}")
""",
            "expectedOutput": "",
            "resultExplanation": "The timestamp string 1792679400 is converted to Thursday, October 22, 2026 at 02:30:00 PM UTC.",
            "notes": "Always pass tz=timezone.utc to fromtimestamp() in modern Python 3.11+ to avoid deprecation warnings.",
            "commonMistakes": "Passing milliseconds without dividing by 1000.0 (JavaScript timestamps are in ms, Python expects seconds).",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        }
    ]
    return lessons
