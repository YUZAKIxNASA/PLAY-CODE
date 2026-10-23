"""
Batch 5:
- Category 7: Array / List Programs (33 lessons, IDs 84-116)
"""

def get_batch5():
    lessons = [
        {
            "id": 84,
            "number": "084",
            "title": "Largest element in an array",
            "cleanTitle": "Largest element in an array",
            "category": "Array / List Programs",
            "introduction": "Finds the maximum value stored inside a numeric array or list.",
            "explanation": "Iterates through the list keeping track of the largest element seen so far, or uses Python's built-in max().",
            "syntax": "max_val = max(arr)",
            "keywordsOrMethods": ["max()", "largest element", "linear scan", "array"],
            "codeExample": """# Program to find largest element in an array
def find_largest_element(arr):
    if not arr:
        return None
    largest = arr[0]
    for num in arr[1:]:
        if num > largest:
            largest = num
    return largest

data = [25, 11, 7, 75, 56, 92, 44]
print(f"Array: {data}")
print(f"Largest element (manual scan): {find_largest_element(data)}")
print(f"Largest element (built-in max): {max(data)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Scans elements; 92 is the largest value in the array.",
            "notes": "max() is implemented in C and runs faster than manual Python for loops.",
            "commonMistakes": "Initializing largest to 0, which fails if all elements in the array are negative.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 85,
            "number": "085",
            "title": "Array rotation",
            "cleanTitle": "Array rotation",
            "category": "Array / List Programs",
            "introduction": "Rotates an array by d positions to the left (or right).",
            "explanation": "Slicing: arr[d:] + arr[:d] shifts elements to the left by d positions.",
            "syntax": "rotated = arr[d % len(arr):] + arr[:d % len(arr)]",
            "keywordsOrMethods": ["array rotation", "list slicing", "shift", "modulo"],
            "codeExample": """# Program for Array rotation by d positions
def rotate_array_left(arr, d):
    n = len(arr)
    d = d % n  # Handle rotations greater than array length
    return arr[d:] + arr[:d]

arr = [1, 2, 3, 4, 5, 6, 7]
d = 2

print(f"Original Array: {arr}")
print(f"Rotated Left by {d} positions: {rotate_array_left(arr, d)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Elements 1 and 2 move to the back, yielding [3, 4, 5, 6, 7, 1, 2].",
            "notes": "Using modulo `d % len(arr)` safely handles rotation amounts larger than the list size.",
            "commonMistakes": "Not using modulo, which could raise an IndexError if d >= n in manual index logic.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 86,
            "number": "086",
            "title": "Reversal algorithm for array rotation",
            "cleanTitle": "Reversal algorithm for array rotation",
            "category": "Array / List Programs",
            "introduction": "An in-place O(1) space algorithm that rotates an array by reversing three sub-segments.",
            "explanation": "To rotate left by d: reverse(0, d-1), reverse(d, n-1), then reverse(0, n-1).",
            "syntax": "def reverse(l, r): ...\nreverse(0, d-1); reverse(d, n-1); reverse(0, n-1)",
            "keywordsOrMethods": ["reversal algorithm", "in-place rotation", "O(1) space", "pointers"],
            "codeExample": """# Reversal algorithm for array rotation in O(1) space
def reverse_subsegment(arr, start, end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1

def rotate_left_in_place(arr, d):
    n = len(arr)
    d = d % n
    reverse_subsegment(arr, 0, d - 1)
    reverse_subsegment(arr, d, n - 1)
    reverse_subsegment(arr, 0, n - 1)
    return arr

data = [1, 2, 3, 4, 5, 6, 7]
d = 3
print(f"Original: {data}")
rotate_left_in_place(data, d)
print(f"Rotated by {d} (in-place reversal): {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Reversing [1,2,3] -> [3,2,1], reversing [4,5,6,7] -> [7,6,5,4], reversing all -> [4,5,6,7,1,2,3].",
            "notes": "Achieves rotation entirely in O(1) extra memory.",
            "commonMistakes": "Off-by-one errors in segment indices.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 87,
            "number": "087",
            "title": "Split and Rotate an Array",
            "cleanTitle": "Split and Rotate an Array",
            "category": "Array / List Programs",
            "introduction": "Splits an array at a specified index k and appends the first part to the end.",
            "explanation": "Partitions list into head arr[:k] and tail arr[k:], then returns tail + head.",
            "syntax": "result = arr[k:] + arr[:k]",
            "keywordsOrMethods": ["split array", "slice", "concatenate", "list partitioning"],
            "codeExample": """# Program to split and rotate an array at index k
def split_and_rotate(arr, k):
    k = k % len(arr)
    first_part = arr[:k]
    second_part = arr[k:]
    return second_part + first_part

original = [12, 10, 5, 6, 52, 36]
k = 2

print(f"Original Array: {original}")
print(f"Split at index {k}: {original[:k]} and {original[k:]}")
print(f"Rotated Array : {split_and_rotate(original, k)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Splits into [12, 10] and [5, 6, 52, 36]; rotated array is [5, 6, 52, 36, 12, 10].",
            "notes": "List slicing creates a new list without modifying the original in-place.",
            "commonMistakes": "Passing k <= 0 without validating bounds.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 88,
            "number": "088",
            "title": "Find Remainder of Array Product",
            "cleanTitle": "Find Remainder of Array Product",
            "category": "Array / List Programs",
            "introduction": "Finds the remainder when the product of all elements in an array is divided by n.",
            "explanation": "Using modular multiplication property (A * B) % n = ((A % n) * (B % n)) % n prevents overflow when processing very large arrays.",
            "syntax": "rem = 1\nfor x in arr: rem = (rem * (x % n)) % n",
            "keywordsOrMethods": ["modular arithmetic", "array product", "remainder", "modulo"],
            "codeExample": """# Program to find remainder of array product divided by n
def remainder_of_array_product(arr, n):
    # (a * b) % n = ((a % n) * (b % n)) % n
    remainder = 1
    for x in arr:
        remainder = (remainder * (x % n)) % n
    return remainder

data = [100, 10, 5, 25, 35, 14]
n = 11

print(f"Array: {data}")
print(f"Divisor n: {n}")
rem = remainder_of_array_product(data, n)
print(f"Remainder of product % {n} is: {rem}")
""",
            "expectedOutput": "",
            "resultExplanation": "Applies modular reduction iteratively; the remainder is 9.",
            "notes": "Iterative modulo avoids creating astronomically large numbers in memory.",
            "commonMistakes": "Multiplying all numbers first without modulo, which can be inefficient on huge lists in other languages.",
            "timeComplexity": "O(len(arr))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 89,
            "number": "089",
            "title": "Check if given array is Monotonic",
            "cleanTitle": "Check if given array is Monotonic",
            "category": "Array / List Programs",
            "introduction": "An array is monotonic if it is either entirely non-increasing or non-decreasing.",
            "explanation": "Checks if all(arr[i] <= arr[i+1]) or all(arr[i] >= arr[i+1]) holds for all adjacent pairs.",
            "syntax": "is_monotonic = all(a <= b for a, b in zip(arr, arr[1:])) or all(a >= b for a, b in zip(arr, arr[1:]))",
            "keywordsOrMethods": ["monotonic", "non-decreasing", "non-increasing", "zip()"],
            "codeExample": """# Program to check if an array is Monotonic
def is_monotonic(arr):
    increasing = decreasing = True
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            increasing = False
        if arr[i] < arr[i + 1]:
            decreasing = False
    return increasing or decreasing

arrays = [
    [1, 2, 2, 3],
    [6, 5, 4, 4],
    [1, 3, 2],
    [5, 5, 5]
]

for a in arrays:
    status = "MONOTONIC" if is_monotonic(a) else "NOT Monotonic"
    print(f"{str(a):<14} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "[1, 2, 2, 3] (non-decreasing) is monotonic. [1, 3, 2] fluctuates and is not monotonic.",
            "notes": "Single element or uniform arrays like [5, 5, 5] are trivially monotonic.",
            "commonMistakes": "Checking strictly increasing (<) instead of non-decreasing (<=).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 90,
            "number": "090",
            "title": "Interchange first and last elements in a list",
            "cleanTitle": "Interchange first and last elements in a list",
            "category": "Array / List Programs",
            "introduction": "Swaps the value at index 0 with the value at index -1 in a list.",
            "explanation": "Python's tuple unpacking `arr[0], arr[-1] = arr[-1], arr[0]` performs swap cleanly in a single expression.",
            "syntax": "arr[0], arr[-1] = arr[-1], arr[0]",
            "keywordsOrMethods": ["tuple unpacking", "swap", "first and last", "in-place"],
            "codeExample": """# Program to interchange first and last elements in a list
def swap_first_and_last(lst):
    if len(lst) >= 2:
        lst[0], lst[-1] = lst[-1], lst[0]
    return lst

sample_list = [12, 35, 9, 56, 24]
print(f"Original: {sample_list}")
swap_first_and_last(sample_list)
print(f"Swapped : {sample_list}")
""",
            "expectedOutput": "",
            "resultExplanation": "12 (first) and 24 (last) swap positions, producing [24, 35, 9, 56, 12].",
            "notes": "Negative index -1 always references the final element in any Python sequence.",
            "commonMistakes": "Not checking if len(lst) >= 2 before accessing indices.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 91,
            "number": "091",
            "title": "Swap two elements in a list",
            "cleanTitle": "Swap two elements in a list",
            "category": "Array / List Programs",
            "introduction": "Swaps the elements at two specific arbitrary indices pos1 and pos2 in a list.",
            "explanation": "Uses tuple assignment: `lst[pos1], lst[pos2] = lst[pos2], lst[pos1]`.",
            "syntax": "lst[pos1], lst[pos2] = lst[pos2], lst[pos1]",
            "keywordsOrMethods": ["swap indices", "tuple assignment", "list indexing"],
            "codeExample": """# Program to swap two elements in a list
def swap_positions(lst, pos1, pos2):
    lst[pos1], lst[pos2] = lst[pos2], lst[pos1]
    return lst

data = [23, 65, 19, 90]
pos1, pos2 = 1, 3  # Swap 65 and 90

print(f"Before Swap: {data}")
swap_positions(data, pos1, pos2)
print(f"After Swap (pos {pos1} <-> pos {pos2}): {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Value 65 at index 1 and value 90 at index 3 swap places.",
            "notes": "Python does not require a temporary variable (temp) due to atomic tuple unpacking.",
            "commonMistakes": "Passing 1-based positions to 0-based index locations without adjusting.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 92,
            "number": "092",
            "title": "Find Length of a List",
            "cleanTitle": "Find Length of a List",
            "category": "Array / List Programs",
            "introduction": "Determines the total number of items contained within a list.",
            "explanation": "Python's len() function accesses the internal ob_size field of the PyVarObject struct in O(1) time.",
            "syntax": "length = len(lst)",
            "keywordsOrMethods": ["len()", "list length", "ob_size", "O(1) lookup"],
            "codeExample": """# Program to find length of a list in multiple ways
# Method 1: Built-in len()
data = [10, 20, 30, 40, 50, 60]
print(f"List: {data}")
print(f"Using len(): {len(data)}")

# Method 2: Manual iteration counter
count = 0
for _ in data:
    count += 1
print(f"Using manual loop counter: {count}")

# Method 3: List comprehension + sum
print(f"Using sum(1 for _ in lst): {sum(1 for _ in data)}")
""",
            "expectedOutput": "",
            "resultExplanation": "The list contains 6 elements.",
            "notes": "len() in Python takes O(1) time because the list stores its size directly in memory.",
            "commonMistakes": "Iterating over a list just to count its size when len() is instant.",
            "timeComplexity": "O(1) with len()",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 93,
            "number": "093",
            "title": "Ways to check if element exists in list",
            "cleanTitle": "Ways to check if element exists in list",
            "category": "Array / List Programs",
            "introduction": "Tests membership of a target item in a list using various Python idioms.",
            "explanation": "Uses the 'in' operator (O(n)), list.count(), or converting to a set for repeated O(1) queries.",
            "syntax": "if item in lst:\n# or\nif lst.count(item) > 0:",
            "keywordsOrMethods": ["in operator", "count()", "membership testing", "any()"],
            "codeExample": """# Ways to check if element exists in list
items = ["apple", "banana", "cherry", "date"]
target = "cherry"

# Method 1: Using 'in' operator (Standard & Preferred)
exists_in = target in items
print(f"Method 1 (using 'in'): '{target}' exists? {exists_in}")

# Method 2: Using count()
exists_count = items.count(target) > 0
print(f"Method 2 (using count()): '{target}' exists? {exists_count}")

# Method 3: Using any()
exists_any = any(x == target for x in items)
print(f"Method 3 (using any()): '{target}' exists? {exists_any}")
""",
            "expectedOutput": "",
            "resultExplanation": "'cherry' is present in the list, so all three methods return True.",
            "notes": "For thousands of lookups, convert list to set(lst) first for O(1) average lookup.",
            "commonMistakes": "Using list.count() which scans the entire list even after finding the item.",
            "timeComplexity": "O(n) for list 'in'",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 94,
            "number": "094",
            "title": "Clear a List",
            "cleanTitle": "Clear a List",
            "category": "Array / List Programs",
            "introduction": "Removes all items from a list, resetting its length to zero.",
            "explanation": "list.clear() or slice deletion del lst[:] empties the list in-place, updating all references.",
            "syntax": "lst.clear()\n# or\ndel lst[:]",
            "keywordsOrMethods": ["clear()", "del lst[:]", "empty list", "in-place deletion"],
            "codeExample": """# Program to demonstrate clearing a list
# Method 1: lst.clear() (Python 3.3+)
list1 = [1, 2, 3, 4]
list1.clear()
print(f"After list1.clear(): {list1}")

# Method 2: del list2[:] (Modifies in-place, preserves reference)
list2 = [10, 20, 30]
ref_to_list2 = list2
del list2[:]
print(f"After del list2[:]: {list2} (Reference also empty: {ref_to_list2})")

# Method 3: list3 = [] (Reassigns reference, does not mutate original)
list3 = [100, 200]
list3 = []
print(f"After reassigning list3 = []: {list3}")
""",
            "expectedOutput": "",
            "resultExplanation": "Demonstrates clear() and del lst[:] which empty the list in-place.",
            "notes": "del lst[:] clears the list in place and mutates all external references pointing to it.",
            "commonMistakes": "Reassigning lst = [] inside a function; this only modifies the local variable name.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 95,
            "number": "095",
            "title": "Reversing a List",
            "cleanTitle": "Reversing a List",
            "category": "Array / List Programs",
            "introduction": "Inverts the order of elements in a list.",
            "explanation": "Can be done in-place using lst.reverse(), via slicing lst[::-1] (returns a new list), or using reversed().",
            "syntax": "lst.reverse() # in place\nrev = lst[::-1] # new copy",
            "keywordsOrMethods": ["reverse()", "[::-1]", "reversed()", "list reversal"],
            "codeExample": """# Program to reverse a list in multiple ways
original = [1, 2, 3, 4, 5]

# Method 1: Slicing (creates new reversed list)
sliced = original[::-1]
print(f"Using slicing [::-1]: {sliced}")

# Method 2: reversed() iterator
iter_rev = list(reversed(original))
print(f"Using reversed():     {iter_rev}")

# Method 3: in-place reverse()
in_place_list = [10, 20, 30, 40]
in_place_list.reverse()
print(f"Using in-place reverse(): {in_place_list}")
""",
            "expectedOutput": "",
            "resultExplanation": "Original list [1, 2, 3, 4, 5] reversed is [5, 4, 3, 2, 1].",
            "notes": "lst.reverse() returns None; it mutates the list in place.",
            "commonMistakes": "Assigning rev = lst.reverse(), which sets rev to None.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1) for in-place, O(n) for copy"
        },
        {
            "id": 96,
            "number": "096",
            "title": "Find sum of elements in list",
            "cleanTitle": "Find sum of elements in list",
            "category": "Array / List Programs",
            "introduction": "Calculates the total aggregate sum of all numeric values in a list.",
            "explanation": "Python's built-in sum() accepts an iterable and an optional start value.",
            "syntax": "total = sum(lst, start=0)",
            "keywordsOrMethods": ["sum()", "aggregate", "list sum", "total"],
            "codeExample": """# Program to find sum of elements in a list
numbers = [12, 15, 3, 10, 20]

# Using built-in sum()
total = sum(numbers)
print(f"Numbers: {numbers}")
print(f"Sum (using sum()): {total}")

# Manual verification loop
manual_sum = 0
for n in numbers:
    manual_sum += n
print(f"Sum (manual loop): {manual_sum}")
""",
            "expectedOutput": "",
            "resultExplanation": "12 + 15 + 3 + 10 + 20 = 60.",
            "notes": "sum() starts at 0 by default; passing a custom start like sum(lst, 100) adds 100 to total.",
            "commonMistakes": "Naming a variable 'sum', which shadows Python's built-in sum() function.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 97,
            "number": "097",
            "title": "Multiply all numbers in the list",
            "cleanTitle": "Multiply all numbers in the list",
            "category": "Array / List Programs",
            "introduction": "Computes the product of all elements in a numeric list.",
            "explanation": "Using math.prod() (Python 3.8+) or functools.reduce with operator.mul.",
            "syntax": "import math\nproduct = math.prod(lst)",
            "keywordsOrMethods": ["math.prod", "reduce", "operator.mul", "product"],
            "codeExample": """# Program to multiply all numbers in a list
import math
from functools import reduce
import operator

numbers = [2, 3, 4, 5]

# Method 1: Using math.prod (Standard in Python 3.8+)
prod_math = math.prod(numbers)
print(f"List: {numbers}")
print(f"Product (using math.prod): {prod_math}")

# Method 2: Using functools.reduce
prod_reduce = reduce(operator.mul, numbers)
print(f"Product (using reduce):    {prod_reduce}")
""",
            "expectedOutput": "",
            "resultExplanation": "2 * 3 * 4 * 5 = 120.",
            "notes": "math.prod([]) returns 1 (the multiplicative identity), just as sum([]) returns 0.",
            "commonMistakes": "Initializing accumulator to 0 instead of 1 in a manual multiplication loop.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 98,
            "number": "098",
            "title": "Find smallest number in a list",
            "cleanTitle": "Find smallest number in a list",
            "category": "Array / List Programs",
            "introduction": "Locates the minimum numeric value in a list.",
            "explanation": "Python's min() function iterates over the sequence in linear time to find the lowest element.",
            "syntax": "smallest = min(lst)",
            "keywordsOrMethods": ["min()", "minimum", "smallest element", "comparison"],
            "codeExample": """# Program to find smallest number in a list
def find_smallest(lst):
    if not lst:
        return None
    smallest = lst[0]
    for num in lst[1:]:
        if num < smallest:
            smallest = num
    return smallest

data = [45, 12, 89, 7, 33, 91]
print(f"List: {data}")
print(f"Smallest (manual):   {find_smallest(data)}")
print(f"Smallest (min()):    {min(data)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Scans the list; 7 is the smallest element.",
            "notes": "min() also takes an optional key parameter for custom ordering (e.g. key=abs).",
            "commonMistakes": "Calling min() on an empty list without providing a default argument, raising a ValueError.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 99,
            "number": "099",
            "title": "Find second largest number in a list",
            "cleanTitle": "Find second largest number in a list",
            "category": "Array / List Programs",
            "introduction": "Finds the runner-up maximum value in a list of numbers.",
            "explanation": "Single-pass algorithm maintains first_max and second_max, updating second_max whenever a new first_max or intermediate value is found.",
            "syntax": "for x in arr:\n    if x > first: second = first; first = x\n    elif first > x > second: second = x",
            "keywordsOrMethods": ["second largest", "single pass", "runner up", "comparison"],
            "codeExample": """# Program to find the second largest number in a list in O(n) time
def get_second_largest(arr):
    # Remove duplicates
    unique_nums = list(set(arr))
    if len(unique_nums) < 2:
        return None
    
    first = second = float('-inf')
    for num in unique_nums:
        if num > first:
            second = first
            first = num
        elif num > second:
            second = num
    return second

test_lists = [
    [10, 20, 4, 45, 99],
    [70, 11, 20, 4, 100, 100],  # with duplicate maximum
    [5, 5, 5]
]

for lst in test_lists:
    print(f"List: {str(lst):<25} -> Second Largest: {get_second_largest(lst)}")
""",
            "expectedOutput": "",
            "resultExplanation": "In [10, 20, 4, 45, 99], max is 99 and second largest is 45.",
            "notes": "Using set() eliminates duplicate top elements so [100, 100] does not consider 100 as second largest.",
            "commonMistakes": "Sorting the entire list (O(n log n)) and returning lst[-2], which fails on duplicate max values.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(u) for unique set"
        },
        {
            "id": 100,
            "number": "100",
            "title": "Find N largest elements in a list",
            "cleanTitle": "Find N largest elements in a list",
            "category": "Array / List Programs",
            "introduction": "Retrieves the top N highest values from an unsorted list.",
            "explanation": "Uses heapq.nlargest(N, lst) to find top N elements in O(n log N) time without sorting the whole list.",
            "syntax": "import heapq\ntop_n = heapq.nlargest(n, lst)",
            "keywordsOrMethods": ["heapq.nlargest", "top N", "min-heap", "priority queue"],
            "codeExample": """# Program to find N largest elements in a list
import heapq

numbers = [1000, 298, 3579, 100, 200, -45, 900]
N = 3

# Using heapq.nlargest
top_3 = heapq.nlargest(N, numbers)

print(f"List: {numbers}")
print(f"Top {N} largest elements: {top_3}")
""",
            "expectedOutput": "",
            "resultExplanation": "The 3 largest numbers are 3579, 1000, and 900.",
            "notes": "heapq.nlargest maintains a min-heap of size N, which is significantly faster than sorting the entire list.",
            "commonMistakes": "Sorting the entire list with list.sort(reverse=True)[:N] which is slower for large lists.",
            "timeComplexity": "O(k log N) where k is len(arr)",
            "spaceComplexity": "O(N)"
        },
        {
            "id": 101,
            "number": "101",
            "title": "Print all even numbers in a range",
            "cleanTitle": "Print all even numbers in a range",
            "category": "Array / List Programs",
            "introduction": "Generates all numbers divisible by 2 within an interval [start, end].",
            "explanation": "Finds the first even number and steps by 2 using range(first_even, end + 1, 2).",
            "syntax": "first = start if start % 2 == 0 else start + 1\nevens = list(range(first, end + 1, 2))",
            "keywordsOrMethods": ["range(..., 2)", "even numbers", "step 2", "generator"],
            "codeExample": """# Program to print all even numbers in a range
def get_even_numbers(start, end):
    # Adjust start to first even number
    first_even = start if start % 2 == 0 else start + 1
    return list(range(first_even, end + 1, 2))

start, end = 4, 15
evens = get_even_numbers(start, end)
print(f"Even numbers from {start} to {end}:")
print(evens)
""",
            "expectedOutput": "",
            "resultExplanation": "Even numbers from 4 to 15 are [4, 6, 8, 10, 12, 14].",
            "notes": "Using step 2 in range() skips odd numbers entirely, cutting loop iterations in half.",
            "commonMistakes": "Looping through all numbers and checking `if i % 2 == 0` when `range(start, end, 2)` is direct.",
            "timeComplexity": "O((end - start) / 2)",
            "spaceComplexity": "O(k) where k is even count"
        },
        {
            "id": 102,
            "number": "102",
            "title": "Print all odd numbers in a range",
            "cleanTitle": "Print all odd numbers in a range",
            "category": "Array / List Programs",
            "introduction": "Generates all numbers not divisible by 2 within an interval [start, end].",
            "explanation": "Adjusts start to the first odd number, then steps by 2 using range(first_odd, end + 1, 2).",
            "syntax": "first = start if start % 2 != 0 else start + 1\nodds = list(range(first, end + 1, 2))",
            "keywordsOrMethods": ["range()", "odd numbers", "step 2", "parity"],
            "codeExample": """# Program to print all odd numbers in a range
def get_odd_numbers(start, end):
    first_odd = start if start % 2 != 0 else start + 1
    return list(range(first_odd, end + 1, 2))

start, end = 1, 14
odds = get_odd_numbers(start, end)
print(f"Odd numbers from {start} to {end}:")
print(odds)
""",
            "expectedOutput": "",
            "resultExplanation": "Odd numbers from 1 to 14 are [1, 3, 5, 7, 9, 11, 13].",
            "notes": "Stepping by 2 executes in half the cycles of a naive step-1 scan.",
            "commonMistakes": "Forgetting that range upper bound is exclusive.",
            "timeComplexity": "O((end - start) / 2)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 103,
            "number": "103",
            "title": "Print positive numbers in a list",
            "cleanTitle": "Print positive numbers in a list",
            "category": "Array / List Programs",
            "introduction": "Filters a mixed list of integers to extract only values strictly greater than zero.",
            "explanation": "Uses list comprehension [x for x in lst if x > 0] or filter(lambda x: x > 0, lst).",
            "syntax": "positives = [x for x in lst if x > 0]",
            "keywordsOrMethods": ["list comprehension", "positive numbers", "filtering"],
            "codeExample": """# Program to print positive numbers in a list
numbers = [-10, 15, -20, 25, 0, 30, -5]

positives = [x for x in numbers if x > 0]
print(f"Original List: {numbers}")
print(f"Positive Numbers: {positives}")
""",
            "expectedOutput": "",
            "resultExplanation": "Extracts 15, 25, and 30. Zero is neutral and is excluded.",
            "notes": "List comprehensions are readable and faster than map/filter in Python.",
            "commonMistakes": "Using x >= 0 when strictly positive numbers are requested (0 is neither positive nor negative).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 104,
            "number": "104",
            "title": "Print negative numbers in a list",
            "cleanTitle": "Print negative numbers in a list",
            "category": "Array / List Programs",
            "introduction": "Filters a list of numbers to extract all values strictly less than zero.",
            "explanation": "Uses list comprehension [x for x in lst if x < 0].",
            "syntax": "negatives = [x for x in lst if x < 0]",
            "keywordsOrMethods": ["negative numbers", "list comprehension", "filtering"],
            "codeExample": """# Program to print negative numbers in a list
numbers = [12, -7, 5, -64, -14, 0, 22]

negatives = [x for x in numbers if x < 0]
print(f"Original List: {numbers}")
print(f"Negative Numbers: {negatives}")
""",
            "expectedOutput": "",
            "resultExplanation": "Identifies [-7, -64, -14] as numbers strictly less than 0.",
            "notes": "Filtering creates a concise clean sub-list.",
            "commonMistakes": "Including 0 in the negative set.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 105,
            "number": "105",
            "title": "Print all positive numbers in a range",
            "cleanTitle": "Print all positive numbers in a range",
            "category": "Array / List Programs",
            "introduction": "Generates all positive numbers within an interval [start, end].",
            "explanation": "If start <= 0, start from 1: range(max(1, start), end + 1).",
            "syntax": "list(range(max(1, start), end + 1))",
            "keywordsOrMethods": ["range()", "positive interval", "max(1, start)"],
            "codeExample": """# Program to print all positive numbers in a range
def positive_range(start, end):
    # Start at least from 1
    actual_start = max(1, start)
    if actual_start > end:
        return []
    return list(range(actual_start, end + 1))

start, end = -4, 5
print(f"Range [{start}, {end}] -> Positive numbers: {positive_range(start, end)}")
""",
            "expectedOutput": "",
            "resultExplanation": "From -4 to 5, positive numbers are [1, 2, 3, 4, 5].",
            "notes": "max(1, start) skips negative numbers in O(1) time without looping over them.",
            "commonMistakes": "Starting range from start directly and checking every number.",
            "timeComplexity": "O(k) where k is count of positive numbers",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 106,
            "number": "106",
            "title": "Print all negative numbers in a range",
            "cleanTitle": "Print all negative numbers in a range",
            "category": "Array / List Programs",
            "introduction": "Generates all negative integers within an interval [start, end].",
            "explanation": "Restricts end to at most -1: range(start, min(-1, end) + 1).",
            "syntax": "list(range(start, min(-1, end) + 1))",
            "keywordsOrMethods": ["negative range", "min(-1, end)", "range()"],
            "codeExample": """# Program to print all negative numbers in a range
def negative_range(start, end):
    actual_end = min(-1, end)
    if start > actual_end:
        return []
    return list(range(start, actual_end + 1))

start, end = -5, 3
print(f"Range [{start}, {end}] -> Negative numbers: {negative_range(start, end)}")
""",
            "expectedOutput": "",
            "resultExplanation": "From -5 to 3, negative numbers are [-5, -4, -3, -2, -1].",
            "notes": "min(-1, end) clips the range at -1 in O(1) time.",
            "commonMistakes": "Including 0 in the negative range.",
            "timeComplexity": "O(k) where k is count of negative numbers",
            "spaceComplexity": "O(k)"
        },
        {
            "id": 107,
            "number": "107",
            "title": "Remove multiple elements from a list",
            "cleanTitle": "Remove multiple elements from a list",
            "category": "Array / List Programs",
            "introduction": "Removes a collection of specific unwanted items from a list.",
            "explanation": "Converts unwanted items to a set for O(1) lookup and filters with list comprehension.",
            "syntax": "to_remove_set = set(items_to_remove)\nfiltered = [x for x in lst if x not in to_remove_set]",
            "keywordsOrMethods": ["set lookup", "list comprehension", "batch removal", "filtering"],
            "codeExample": """# Program to remove multiple elements from a list
original_list = [10, 20, 30, 40, 50, 60, 70]
elements_to_remove = [20, 50, 70]

# Using set for O(1) lookup
remove_set = set(elements_to_remove)
cleaned_list = [item for item in original_list if item not in remove_set]

print(f"Original: {original_list}")
print(f"Elements to remove: {elements_to_remove}")
print(f"Cleaned List: {cleaned_list}")
""",
            "expectedOutput": "",
            "resultExplanation": "Removes 20, 50, and 70, leaving [10, 30, 40, 60].",
            "notes": "Converting elements_to_remove into a set ensures total time is O(n + m) rather than O(n * m).",
            "commonMistakes": "Mutating a list with lst.remove() while iterating over it, which skips adjacent elements.",
            "timeComplexity": "O(n + m)",
            "spaceComplexity": "O(m) for the set"
        },
        {
            "id": 108,
            "number": "108",
            "title": "Remove empty List from List",
            "cleanTitle": "Remove empty List from List",
            "category": "Array / List Programs",
            "introduction": "Purges empty sublists [] from a nested list.",
            "explanation": "In Python, empty lists evaluate to False in boolean context. Filtering with `[sub for sub in lst if sub]` removes all empty lists.",
            "syntax": "cleaned = [x for x in lst if x]",
            "keywordsOrMethods": ["truthiness", "empty list removal", "filter", "nested list"],
            "codeExample": """# Program to remove empty lists from a list
nested_data = [5, [], [1, 2], [], [], [3, 4, 5], [], 42]

# Method 1: List comprehension using truth value testing
cleaned = [x for x in nested_data if x != []]

print(f"Original : {nested_data}")
print(f"Cleaned  : {cleaned}")
""",
            "expectedOutput": "",
            "resultExplanation": "Purges all empty [] lists, keeping 5, [1, 2], [3, 4, 5], and 42.",
            "notes": "Using `x != []` explicitly avoids removing False or 0 if integers/booleans exist in the list.",
            "commonMistakes": "Using `if x` if the list contains 0 or False (which also evaluate to falsy).",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 109,
            "number": "109",
            "title": "Cloning or Copying a list",
            "cleanTitle": "Cloning or Copying a list",
            "category": "Array / List Programs",
            "introduction": "Creates an independent duplicate of a list so modifications to the clone do not alter the original.",
            "explanation": "Can be done via slicing lst[:], list(lst), lst.copy(), or copy.deepcopy() for nested objects.",
            "syntax": "clone = lst.copy()\n# or\nclone = lst[:]",
            "keywordsOrMethods": ["list.copy()", "slicing [:]", "shallow copy", "deep copy"],
            "codeExample": """# Program demonstrating different ways to clone or copy a list
import copy

original = [1, 2, [3, 4]]

# Method 1: Shallow copy with .copy()
shallow_clone = original.copy()

# Method 2: Slicing
slice_clone = original[:]

# Method 3: Deep copy
deep_clone = copy.deepcopy(original)

# Modify top-level item in shallow clone
shallow_clone[0] = 999
print(f"Original after shallow modification: {original}")
print(f"Shallow Clone: {shallow_clone}")

# Modify nested sublist in shallow vs deep
shallow_clone[2][0] = 777
print(f"Original after nested change in shallow clone: {original}")
print(f"Deep Clone remains intact: {deep_clone}")
""",
            "expectedOutput": "",
            "resultExplanation": "Shallow copy copies top-level references; deep copy recursively duplicates all nested objects.",
            "notes": "Use copy.deepcopy() when lists contain nested lists or mutable objects.",
            "commonMistakes": "Doing b = a, which only creates a reference alias, not a copy.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 110,
            "number": "110",
            "title": "Count occurrences of an element in a list",
            "cleanTitle": "Count occurrences of an element in a list",
            "category": "Array / List Programs",
            "introduction": "Finds the frequency of a specific value inside a list.",
            "explanation": "Python's list.count(x) method iterates through the list and tallies matches.",
            "syntax": "freq = lst.count(target)",
            "keywordsOrMethods": ["count()", "frequency", "occurrences", "tally"],
            "codeExample": """# Program to count occurrences of an element in a list
numbers = [15, 6, 7, 10, 12, 20, 10, 28, 10]
target = 10

# Method 1: Using built-in count()
occurrences = numbers.count(target)
print(f"List: {numbers}")
print(f"Occurrences of {target} (using count()): {occurrences}")

# Method 2: Using collections.Counter
from collections import Counter
counts = Counter(numbers)
print(f"Occurrences of {target} (using Counter): {counts[target]}")
""",
            "expectedOutput": "",
            "resultExplanation": "10 appears 3 times in the list.",
            "notes": "count() is O(n); Counter() counts all elements once in O(n) total.",
            "commonMistakes": "Calling lst.count(x) in a loop for every unique element, which leads to O(n^2) runtime.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 111,
            "number": "111",
            "title": "Remove empty tuples from a list",
            "cleanTitle": "Remove empty tuples from a list",
            "category": "Array / List Programs",
            "introduction": "Filters out any empty tuple () entries from a list of tuples.",
            "explanation": "Filters elements using list comprehension `[t for t in lst if t != ()]` or `filter(None, lst)`.",
            "syntax": "filtered = [t for t in lst if t]",
            "keywordsOrMethods": ["empty tuples", "filter", "truthiness", "tuple cleaning"],
            "codeExample": """# Program to remove empty tuples from a list
tuples_list = [(), ('ram', '15', '8'), (), ('laxman', 'sita'), ('krishna', 'akbar', '45'), ('',), ()]

# Filter out empty tuples ()
cleaned = [t for t in tuples_list if t != ()]

print(f"Original: {tuples_list}")
print(f"Cleaned : {cleaned}")
""",
            "expectedOutput": "",
            "resultExplanation": "All () empty tuples are discarded; non-empty tuples (including ('',)) are preserved.",
            "notes": "Checking `t != ()` is specific and preserves ('',) which has length 1.",
            "commonMistakes": "Assuming ('',) is an empty tuple; ('',) has length 1 containing an empty string.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 112,
            "number": "112",
            "title": "Print duplicates from a list of integers",
            "cleanTitle": "Print duplicates from a list of integers",
            "category": "Array / List Programs",
            "introduction": "Finds all integer values that appear more than once in a given list.",
            "explanation": "Uses a seen set and a duplicates set during a single pass to collect duplicates in O(n) time.",
            "syntax": "seen = set(); dups = set()\nfor x in lst:\n    if x in seen: dups.add(x)\n    else: seen.add(x)",
            "keywordsOrMethods": ["duplicates", "set()", "seen tracking", "single pass"],
            "codeExample": """# Program to print duplicates from a list of integers in O(n) time
def find_duplicates(numbers):
    seen = set()
    duplicates = set()
    for num in numbers:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return sorted(list(duplicates))

data = [10, 20, 30, 20, 20, 30, 40, 50, -20, 60, 60, -20, -20]
dups = find_duplicates(data)

print(f"Array: {data}")
print(f"Duplicate integers found: {dups}")
""",
            "expectedOutput": "",
            "resultExplanation": "20, 30, -20, and 60 appear more than once in the list.",
            "notes": "Using two sets gives O(n) time and avoids nested loops.",
            "commonMistakes": "Using nested loops or lst.count() inside a loop, resulting in O(n^2) runtime.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 113,
            "number": "113",
            "title": "Find Cumulative sum of a list",
            "cleanTitle": "Find Cumulative sum of a list",
            "category": "Array / List Programs",
            "introduction": "Computes the prefix sum array where each element at index i is the sum of all elements up to index i.",
            "explanation": "Uses itertools.accumulate() or a running sum loop to generate cumulative sums.",
            "syntax": "import itertools\ncumsum = list(itertools.accumulate(lst))",
            "keywordsOrMethods": ["cumulative sum", "prefix sum", "itertools.accumulate", "running total"],
            "codeExample": """# Program to find Cumulative sum of a list
import itertools

numbers = [10, 20, 30, 40, 50]

# Method 1: Using itertools.accumulate
cumulative_itertools = list(itertools.accumulate(numbers))
print(f"Original: {numbers}")
print(f"Cumulative Sum (itertools): {cumulative_itertools}")

# Method 2: Manual loop
manual_cumsum = []
running_total = 0
for x in numbers:
    running_total += x
    manual_cumsum.append(running_total)
print(f"Cumulative Sum (manual)   : {manual_cumsum}")
""",
            "expectedOutput": "",
            "resultExplanation": "[10, 10+20=30, 30+30=60, 60+40=100, 100+50=150].",
            "notes": "Prefix sum is a fundamental algorithmic technique for answering subsegment sum queries in O(1).",
            "commonMistakes": "Computing sum(lst[:i+1]) in a loop, which takes O(n^2) time.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 114,
            "number": "114",
            "title": "Sum of number digits in List",
            "cleanTitle": "Sum of number digits in List",
            "category": "Array / List Programs",
            "introduction": "Calculates the digit sum for each integer in a list, returning the transformed list of sums.",
            "explanation": "For each integer, converts to string or uses modulo arithmetic to sum its individual digits.",
            "syntax": "[sum(int(d) for d in str(abs(n))) for n in lst]",
            "keywordsOrMethods": ["digit sum", "list comprehension", "transformation", "abs()"],
            "codeExample": """# Program to find sum of number digits in a list
def sum_of_digits_in_list(numbers):
    return [sum(int(digit) for digit in str(abs(num))) for num in numbers]

test_list = [12, 67, 98, 34, 105, -24]
result = sum_of_digits_in_list(test_list)

print(f"Input Numbers: {test_list}")
print(f"Digit Sums   : {result}")
for num, s in zip(test_list, result):
    print(f"  {num:4d} -> sum of digits = {s}")
""",
            "expectedOutput": "",
            "resultExplanation": "12 -> 1+2=3; 67 -> 6+7=13; 98 -> 9+8=17; 34 -> 3+4=7; 105 -> 1+0+5=6; -24 -> 2+4=6.",
            "notes": "abs() handles negative numbers so '-' is not mistakenly passed to int().",
            "commonMistakes": "Passing the '-' sign into int(), which raises a ValueError.",
            "timeComplexity": "O(n * d)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 115,
            "number": "115",
            "title": "Break a list into chunks of size N",
            "cleanTitle": "Break a list into chunks of size N",
            "category": "Array / List Programs",
            "introduction": "Splits a flat list into sequential chunks or sublists of length N.",
            "explanation": "Uses range with step N in a list comprehension: `[lst[i:i + n] for i in range(0, len(lst), n)]`.",
            "syntax": "[lst[i:i + n] for i in range(0, len(lst), n)]",
            "keywordsOrMethods": ["chunking", "list slicing", "batching", "step n"],
            "codeExample": """# Program to break a list into chunks of size N
def chunk_list(lst, chunk_size):
    # Slice list in increments of chunk_size
    return [lst[i:i + chunk_size] for i in range(0, len(lst), chunk_size)]

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
n = 3

chunks = chunk_list(data, n)
print(f"Original List: {data}")
print(f"Chunked (N = {n}): {chunks}")
""",
            "expectedOutput": "",
            "resultExplanation": "Splits 10 items into 3-item sublists: [1, 2, 3], [4, 5, 6], [7, 8, 9], and remaining [10].",
            "notes": "Python's slice notation automatically handles the final partial chunk without out-of-bounds errors.",
            "commonMistakes": "Manually appending elements item-by-item instead of leveraging slice notation.",
            "timeComplexity": "O(len(lst))",
            "spaceComplexity": "O(len(lst))"
        },
        {
            "id": 116,
            "number": "116",
            "title": "Sort the values of first list using second list",
            "cleanTitle": "Sort the values of first list using second list",
            "category": "Array / List Programs",
            "introduction": "Sorts elements of list 1 based on corresponding companion values or priorities in list 2.",
            "explanation": "Zips both lists together, sorts the pairs by the second list's values, and unpacks the first list.",
            "syntax": "[x for _, x in sorted(zip(list2, list1))]",
            "keywordsOrMethods": ["zip()", "sorted()", "companion sort", "priority sorting"],
            "codeExample": """# Program to sort values of first list using second list
list1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
list2 = [ 0,   1,   1,    0,   1,   2,   2,   0,   1 ]

# Zip, sort by list2 key, extract list1 values
sorted_combined = [val for _, val in sorted(zip(list2, list1))]

print(f"List 1 (Values)    : {list1}")
print(f"List 2 (Sort Keys) : {list2}")
print(f"Sorted List 1      : {sorted_combined}")
""",
            "expectedOutput": "",
            "resultExplanation": "Elements paired with key 0 ('a', 'd', 'h') come first, followed by key 1, then key 2.",
            "notes": "zipping list2 first `zip(list2, list1)` makes list2 the primary sort key automatically.",
            "commonMistakes": "Sorting without preserving 1-to-1 correspondence between pairs.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        }
    ]
    return lessons
