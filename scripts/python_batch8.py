"""
Batch 8:
- Category 12: Searching and Sorting Programs (25 lessons, IDs 185-209)
"""

def get_batch8():
    lessons = [
        {
            "id": 185,
            "number": "185",
            "title": "Binary Search (Recursive and Iterative)",
            "cleanTitle": "Binary Search (Recursive and Iterative)",
            "category": "Searching and Sorting Programs",
            "introduction": "An efficient search algorithm that finds the position of a target value within a sorted array in O(log n) time.",
            "explanation": "Compares target to median element; halves search space in each iteration or recursive frame.",
            "syntax": "mid = (low + high) // 2",
            "keywordsOrMethods": ["binary search", "logarithmic", "divide and conquer", "sorted array"],
            "codeExample": """# Program for Binary Search (Iterative and Recursive)
def binary_search_iterative(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

def binary_search_recursive(arr, low, high, target):
    if low > high:
        return -1
    mid = (low + high) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, mid + 1, high, target)
    else:
        return binary_search_recursive(arr, low, mid - 1, target)

sorted_data = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target = 23

idx_iter = binary_search_iterative(sorted_data, target)
idx_rec = binary_search_recursive(sorted_data, 0, len(sorted_data) - 1, target)

print(f"Sorted Array: {sorted_data}")
print(f"Target: {target}")
print(f"Iterative Search Found Index: {idx_iter}")
print(f"Recursive Search Found Index: {idx_rec}")
""",
            "expectedOutput": "",
            "resultExplanation": "Finds 23 at index 5 in 3 comparisons instead of 6.",
            "notes": "Array must be sorted prior to binary search.",
            "commonMistakes": "Integer overflow in `(low + high) // 2` in languages like C/Java (Python handles arbitrarily large ints).",
            "timeComplexity": "O(log n)",
            "spaceComplexity": "O(1) iterative, O(log n) recursive"
        },
        {
            "id": 186,
            "number": "186",
            "title": "Linear Search",
            "cleanTitle": "Linear Search",
            "category": "Searching and Sorting Programs",
            "introduction": "Sequentially checks each element of the list until a match is found or the whole list has been searched.",
            "explanation": "Iterates from index 0 to n-1. Works on unsorted arrays.",
            "syntax": "for i in range(len(arr)):\n    if arr[i] == target: return i",
            "keywordsOrMethods": ["linear search", "sequential scan", "unsorted array"],
            "codeExample": """# Program for Linear Search
def linear_search(arr, target):
    for idx, element in enumerate(arr):
        if element == target:
            return idx
    return -1

data = [64, 34, 25, 12, 22, 11, 90]
target = 22

idx = linear_search(data, target)
print(f"Array: {data}")
print(f"Target: {target} -> Found at index: {idx}")
""",
            "expectedOutput": "",
            "resultExplanation": "Scans from index 0; finds 22 at index 4.",
            "notes": "Linear search is the only option for general unsorted data.",
            "commonMistakes": "Using linear search repeatedly on large static datasets instead of sorting and using binary search.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 187,
            "number": "187",
            "title": "Insertion Sort",
            "cleanTitle": "Insertion Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Builds the final sorted array one item at a time by inserting each element into its proper position.",
            "explanation": "At step i, extracts arr[i] as key and shifts larger elements to the right before inserting key.",
            "syntax": "while j >= 0 and key < arr[j]: arr[j+1] = arr[j]; j -= 1\narr[j+1] = key",
            "keywordsOrMethods": ["insertion sort", "in-place", "stable sort", "online algorithm"],
            "codeExample": """# Program for Insertion Sort
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # Shift elements of arr[0..i-1] that are greater than key
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

numbers = [12, 11, 13, 5, 6]
print(f"Original: {numbers}")
insertion_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorts [12, 11, 13, 5, 6] into [5, 6, 11, 12, 13].",
            "notes": "Insertion sort is efficient for small datasets (N < 50) and nearly sorted arrays (O(n) best-case).",
            "commonMistakes": "Confusing insertion sort with selection sort.",
            "timeComplexity": "O(n^2) worst/average, O(n) best",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 188,
            "number": "188",
            "title": "Recursive Insertion Sort",
            "cleanTitle": "Recursive Insertion Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Recursive implementation of insertion sort: recursively sort n-1 elements, then insert n-th element.",
            "explanation": "Base case: n <= 1 is sorted. Recursively call for n-1, then insert last element into sorted prefix.",
            "syntax": "def rec_insertion_sort(arr, n): ...",
            "keywordsOrMethods": ["recursive insertion sort", "recursion", "divide and conquer"],
            "codeExample": """# Program for Recursive Insertion Sort
def recursive_insertion_sort(arr, n):
    # Base case
    if n <= 1:
        return
    # Sort first n-1 elements
    recursive_insertion_sort(arr, n - 1)
    
    # Insert last element at proper position
    last = arr[n - 1]
    j = n - 2
    while j >= 0 and arr[j] > last:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = last

data = [12, 11, 13, 5, 6]
print(f"Original: {data}")
recursive_insertion_sort(data, len(data))
print(f"Sorted  : {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Recursively reduces array to 1 element and inserts elements on stack unwinding.",
            "notes": "Demonstrates how inductive reasoning maps loop invariants to recursion.",
            "commonMistakes": "Stack overflow for arrays larger than Python's recursion limit (sys.getrecursionlimit()).",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(n) call stack"
        },
        {
            "id": 189,
            "number": "189",
            "title": "QuickSort",
            "cleanTitle": "QuickSort",
            "category": "Searching and Sorting Programs",
            "introduction": "A divide-and-conquer algorithm that selects a pivot element and partitions the array around it.",
            "explanation": "Lomuto partition places elements smaller than pivot to left and larger to right, recursing on both halves.",
            "syntax": "pivot = arr[high]\npi = partition(arr, low, high)\nquicksort(arr, low, pi - 1); quicksort(arr, pi + 1, high)",
            "keywordsOrMethods": ["QuickSort", "divide and conquer", "pivot", "partitioning"],
            "codeExample": """# Program for QuickSort (Lomuto Partitioning)
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quicksort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quicksort(arr, low, pi - 1)
        quicksort(arr, pi + 1, high)

numbers = [10, 7, 8, 9, 1, 5]
print(f"Original: {numbers}")
quicksort(numbers, 0, len(numbers) - 1)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Partitions around pivots recursively to produce [1, 5, 7, 8, 9, 10].",
            "notes": "Average time complexity is O(n log n) with excellent cache locality.",
            "commonMistakes": "Worst case O(n^2) when picking bad pivots on already sorted arrays (mitigated by random pivot).",
            "timeComplexity": "O(n log n) average, O(n^2) worst",
            "spaceComplexity": "O(log n) call stack"
        },
        {
            "id": 190,
            "number": "190",
            "title": "Iterative Quick Sort",
            "cleanTitle": "Iterative Quick Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Non-recursive QuickSort that uses an explicit stack to track subarray boundaries.",
            "explanation": "Pushes (low, high) pairs onto an auxiliary stack instead of relying on recursive function calls.",
            "syntax": "stack.append((low, high))\nwhile stack: low, high = stack.pop() ...",
            "keywordsOrMethods": ["iterative quicksort", "explicit stack", "non-recursive", "partition"],
            "codeExample": """# Program for Iterative Quick Sort using an explicit stack
def partition(arr, l, h):
    pivot = arr[h]
    i = l - 1
    for j in range(l, h):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[h] = arr[h], arr[i + 1]
    return i + 1

def iterative_quicksort(arr):
    # Auxiliary stack
    stack = [(0, len(arr) - 1)]
    while stack:
        l, h = stack.pop()
        if l < h:
            p = partition(arr, l, h)
            # Push subarrays
            stack.append((l, p - 1))
            stack.append((p + 1, h))

data = [4, 3, 5, 2, 1, 3, 2, 3]
print(f"Original: {data}")
iterative_quicksort(data)
print(f"Sorted  : {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorts the array using an explicit stack, avoiding Python recursion limits.",
            "notes": "Eliminates function call overhead and prevents RecursionError on deeply partitioned data.",
            "commonMistakes": "Popping high and low in the reverse order of how they were pushed.",
            "timeComplexity": "O(n log n) average",
            "spaceComplexity": "O(log n) stack"
        },
        {
            "id": 191,
            "number": "191",
            "title": "Selection Sort",
            "cleanTitle": "Selection Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Repeatedly selects the smallest element from the unsorted segment and moves it to the sorted front.",
            "explanation": "Maintains two subarrays: sorted (left) and unsorted (right). At step i, finds min in unsorted and swaps with arr[i].",
            "syntax": "min_idx = min(range(i, n), key=lambda j: arr[j])\narr[i], arr[min_idx] = arr[min_idx], arr[i]",
            "keywordsOrMethods": ["selection sort", "minimum element", "in-place", "quadratic"],
            "codeExample": """# Program for Selection Sort
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

numbers = [64, 25, 12, 22, 11]
print(f"Original: {numbers}")
selection_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Swaps 11 with 64, then 12 with 25, yielding sorted [11, 12, 22, 25, 64].",
            "notes": "Selection sort performs at most O(n) swaps, making it useful when write memory operations are expensive.",
            "commonMistakes": "Assuming selection sort is stable (standard in-place selection sort is not stable).",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 192,
            "number": "192",
            "title": "Bubble Sort",
            "cleanTitle": "Bubble Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
            "explanation": "Largest elements 'bubble' to the top in each pass. Optimized with swapped flag to terminate in O(n) if already sorted.",
            "syntax": "if arr[j] > arr[j+1]: arr[j], arr[j+1] = arr[j+1], arr[j]; swapped = True",
            "keywordsOrMethods": ["bubble sort", "swapped flag", "adjacent comparisons", "stable"],
            "codeExample": """# Program for Optimized Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        # If no two elements were swapped, array is sorted
        if not swapped:
            break
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
print(f"Original: {numbers}")
bubble_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Bubbles 90 to the end on pass 1, 64 on pass 2, until array is [11, 12, 22, 25, 34, 64, 90].",
            "notes": "The swapped flag optimization makes bubble sort O(n) on already sorted inputs.",
            "commonMistakes": "Scanning up to n-1 every pass without subtracting i.",
            "timeComplexity": "O(n^2) worst, O(n) best",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 193,
            "number": "193",
            "title": "Merge Sort",
            "cleanTitle": "Merge Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A divide-and-conquer algorithm that divides array in halves, sorts each, and merges the two sorted halves.",
            "explanation": "Guarantees O(n log n) worst-case time complexity and is completely stable.",
            "syntax": "mid = len(arr) // 2\nL = arr[:mid]; R = arr[mid:]\nmerge(L, R)",
            "keywordsOrMethods": ["Merge Sort", "divide and conquer", "stable sort", "O(n log n)"],
            "codeExample": """# Program for Merge Sort
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        # Merge sorted halves
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]; i += 1; k += 1
        while j < len(R):
            arr[k] = R[j]; j += 1; k += 1
    return arr

numbers = [38, 27, 43, 3, 9, 82, 10]
print(f"Original: {numbers}")
merge_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Recursively splits down to 1-element arrays and merges sorted slices into [3, 9, 10, 27, 38, 43, 82].",
            "notes": "Merge sort is the standard algorithm for sorting linked lists because it requires O(1) extra space on node pointers.",
            "commonMistakes": "Using `<` instead of `<=` in `L[i] <= R[j]`, which loses stability.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 194,
            "number": "194",
            "title": "Iterative Merge Sort",
            "cleanTitle": "Iterative Merge Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "Bottom-up MergeSort that merges subarrays of size 1, 2, 4, 8, ... iteratively without recursion.",
            "explanation": "Iterates window width from 1 doubling each time, merging adjacent sub-segments.",
            "syntax": "width = 1\nwhile width < n: for i in range(0, n, 2*width): merge(...); width *= 2",
            "keywordsOrMethods": ["bottom-up merge sort", "iterative", "subarrays", "doubling width"],
            "codeExample": """# Program for Iterative Bottom-Up Merge Sort
def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m
    L = arr[l : m + 1]
    R = arr[m + 1 : r + 1]
    
    i = j = 0
    k = l
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]; i += 1
        else:
            arr[k] = R[j]; j += 1
        k += 1
    while i < n1:
        arr[k] = L[i]; i += 1; k += 1
    while j < n2:
        arr[k] = R[j]; j += 1; k += 1

def iterative_merge_sort(arr):
    n = len(arr)
    curr_size = 1
    while curr_size < n:
        left = 0
        while left < n - 1:
            mid = min(left + curr_size - 1, n - 1)
            right = min(left + 2 * curr_size - 1, n - 1)
            merge(arr, left, mid, right)
            left += 2 * curr_size
        curr_size *= 2

numbers = [12, 11, 13, 5, 6, 7]
print(f"Original: {numbers}")
iterative_merge_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Merges pairs of 1, then pairs of 2, then 4, producing [5, 6, 7, 11, 12, 13].",
            "notes": "Bottom-up merge sort uses 0 recursion stack frames.",
            "commonMistakes": "Not bounding right index with min(..., n - 1) when array size is not a power of 2.",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(n)"
        },
        {
            "id": 195,
            "number": "195",
            "title": "Heap Sort",
            "cleanTitle": "Heap Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A comparison-based sorting technique based on a Binary Heap data structure.",
            "explanation": "Builds a max-heap from the array, then repeatedly extracts the maximum root element to the end and heapifies the root.",
            "syntax": "heapify(arr, n, i)\nfor i in range(n - 1, 0, -1): arr[i], arr[0] = arr[0], arr[i]; heapify(arr, i, 0)",
            "keywordsOrMethods": ["Heap Sort", "max-heap", "heapify", "in-place O(1) space"],
            "codeExample": """# Program for Heap Sort
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    # Build max-heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

numbers = [12, 11, 13, 5, 6, 7]
print(f"Original: {numbers}")
heap_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Constructs max-heap and extracts top elements to produce [5, 6, 7, 11, 12, 13].",
            "notes": "Heap sort runs in guaranteed O(n log n) time while requiring only O(1) auxiliary space.",
            "commonMistakes": "Heapify bounds check errors (checking >= n instead of < n).",
            "timeComplexity": "O(n log n)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 196,
            "number": "196",
            "title": "Counting Sort",
            "cleanTitle": "Counting Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A non-comparison based integer sorting algorithm that runs in linear O(n + k) time.",
            "explanation": "Counts occurrences of each unique integer in a frequency array, computes cumulative indices, and places items into output.",
            "syntax": "count = [0] * (max_val + 1)\nfor x in arr: count[x] += 1",
            "keywordsOrMethods": ["Counting Sort", "linear time", "non-comparison", "integer sort"],
            "codeExample": """# Program for Counting Sort
def counting_sort(arr):
    if not arr:
        return []
    max_val = max(arr)
    min_val = min(arr)
    range_val = max_val - min_val + 1
    
    count = [0] * range_val
    output = [0] * len(arr)
    
    # Store count of each number
    for num in arr:
        count[num - min_val] += 1
        
    # Store cumulative count
    for i in range(1, len(count)):
        count[i] += count[i - 1]
        
    # Build the output array (backwards for stability)
    for num in reversed(arr):
        output[count[num - min_val] - 1] = num
        count[num - min_val] -= 1
        
    return output

data = [4, 2, 2, 8, 3, 3, 1]
print(f"Original: {data}")
sorted_data = counting_sort(data)
print(f"Sorted  : {sorted_data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Linear time tally sorts [4, 2, 2, 8, 3, 3, 1] into [1, 2, 2, 3, 3, 4, 8].",
            "notes": "Counting sort is stable and serves as the sub-routine in Radix Sort.",
            "commonMistakes": "Using counting sort when range k is vastly larger than n (e.g. max is 10^9).",
            "timeComplexity": "O(n + k) where k is range",
            "spaceComplexity": "O(n + k)"
        },
        {
            "id": 197,
            "number": "197",
            "title": "ShellSort",
            "cleanTitle": "ShellSort",
            "category": "Searching and Sorting Programs",
            "introduction": "An optimization of insertion sort that compares and swaps elements separated by a gap that reduces over time.",
            "explanation": "Starts with large gap (e.g. n // 2), h-sorting elements far apart, and reduces gap to 1.",
            "syntax": "gap = n // 2\nwhile gap > 0:\n    # insertion sort with gap...\n    gap //= 2",
            "keywordsOrMethods": ["ShellSort", "diminishing gap", "h-sorting", "in-place"],
            "codeExample": """# Program for ShellSort
def shell_sort(arr):
    n = len(arr)
    gap = n // 2
    
    while gap > 0:
        for i in range(gap, n):
            temp = arr[i]
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            arr[j] = temp
        gap //= 2
    return arr

numbers = [12, 34, 54, 2, 3]
print(f"Original: {numbers}")
shell_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Gapped comparisons reduce distance of inversions, resulting in [2, 3, 12, 34, 54].",
            "notes": "ShellSort significantly outperforms simple O(n^2) insertion sort without extra space.",
            "commonMistakes": "Using gap = 0 in while loop condition.",
            "timeComplexity": "O(n^1.5) to O(n^2) depending on gap sequence",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 198,
            "number": "198",
            "title": "Topological Sorting",
            "cleanTitle": "Topological Sorting",
            "category": "Searching and Sorting Programs",
            "introduction": "Linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v.",
            "explanation": "Kahn's algorithm using in-degrees: enqueue vertices with in-degree 0, dequeue, add to order, and decrement neighbors.",
            "syntax": "in_degree = [0]*V\nqueue = [i for i in range(V) if in_degree[i] == 0]",
            "keywordsOrMethods": ["topological sort", "DAG", "Kahn's algorithm", "in-degree", "dependency resolution"],
            "codeExample": """# Program for Topological Sorting of a DAG (Kahn's Algorithm)
from collections import defaultdict, deque

def topological_sort(num_vertices, edges):
    graph = defaultdict(list)
    in_degree = [0] * num_vertices

    for u, v in edges:
        graph[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(num_vertices) if in_degree[i] == 0])
    topo_order = []

    while queue:
        node = queue.popleft()
        topo_order.append(node)
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    if len(topo_order) != num_vertices:
        return "Cycle detected! Graph is not a DAG."
    return topo_order

# 6 vertices (0 to 5)
edges = [(5, 2), (5, 0), (4, 0), (4, 1), (2, 3), (3, 1)]
order = topological_sort(6, edges)

print(f"Edges: {edges}")
print(f"Topological Sort Order: {order}")
""",
            "expectedOutput": "",
            "resultExplanation": "Produces a valid topological order: [4, 5, 0, 2, 3, 1] where prerequisites always precede dependents.",
            "notes": "Topological sort is used for task scheduling, build systems (Makefile), and package dependencies.",
            "commonMistakes": "Applying topological sort to graphs containing directed cycles.",
            "timeComplexity": "O(V + E)",
            "spaceComplexity": "O(V + E)"
        },
        {
            "id": 199,
            "number": "199",
            "title": "Radix Sort",
            "cleanTitle": "Radix Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A non-comparative sorting algorithm that sorts integers digit by digit from least significant digit (LSD) to most significant.",
            "explanation": "Performs stable counting sort on each digit position (1s place, 10s place, 100s place, ...).",
            "syntax": "exp = 1\nwhile max_val // exp > 0:\n    counting_sort_by_digit(arr, exp); exp *= 10",
            "keywordsOrMethods": ["Radix Sort", "LSD sort", "digit-by-digit", "linear time"],
            "codeExample": """# Program for Radix Sort (LSD)
def counting_sort_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1

    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_val = max(arr)
    exp = 1
    while max_val // exp > 0:
        counting_sort_digit(arr, exp)
        exp *= 10
    return arr

numbers = [170, 45, 75, 90, 802, 24, 2, 66]
print(f"Original: {numbers}")
radix_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorts by 1s digit, then 10s, then 100s, producing [2, 24, 45, 66, 75, 90, 170, 802].",
            "notes": "Radix sort runs in O(d * (n + b)) where d is digit count and b is base 10.",
            "commonMistakes": "Using an unstable inner sort which breaks relative ordering established in prior digit passes.",
            "timeComplexity": "O(d * (n + k))",
            "spaceComplexity": "O(n + k)"
        },
        {
            "id": 200,
            "number": "200",
            "title": "Binary Insertion Sort",
            "cleanTitle": "Binary Insertion Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "An enhanced insertion sort that uses binary search to find the insertion location in O(log i) comparisons.",
            "explanation": "Reduces key comparisons from O(i) to O(log i), though shifting elements still takes O(i) time.",
            "syntax": "loc = bisect.bisect_right(arr, val, 0, i)",
            "keywordsOrMethods": ["binary insertion sort", "bisect", "binary search", "reduced comparisons"],
            "codeExample": """# Program for Binary Insertion Sort
def binary_search_position(arr, val, start, end):
    while start <= end:
        mid = (start + end) // 2
        if arr[mid] < val:
            start = mid + 1
        else:
            end = mid - 1
    return start

def binary_insertion_sort(arr):
    for i in range(1, len(arr)):
        val = arr[i]
        # Find insertion position using binary search
        j = binary_search_position(arr, val, 0, i - 1)
        # Slice shift in Python
        arr[:] = arr[:j] + [val] + arr[j:i] + arr[i+1:]
    return arr

numbers = [37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54]
print(f"Original: {numbers}")
binary_insertion_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Reduces element comparisons using binary search, yielding cleanly sorted array.",
            "notes": "Reduces comparison count to O(n log n), though element shifts remain O(n^2).",
            "commonMistakes": "Thinking binary search makes total time O(n log n); array shifts still take O(n^2).",
            "timeComplexity": "O(n^2) data movement, O(n log n) comparisons",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 201,
            "number": "201",
            "title": "Bitonic Sort",
            "cleanTitle": "Bitonic Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A parallel sorting algorithm that converts the array into a bitonic sequence and merges it.",
            "explanation": "A sequence is bitonic if it monotonically increases then decreases. Bitonic merge compares and swaps elements at distance 2^(k-1).",
            "syntax": "def bitonic_sort(arr, low, cnt, dire): ...",
            "keywordsOrMethods": ["bitonic sort", "parallel sorting", "sorting network", "bitonic sequence"],
            "codeExample": """# Program for Bitonic Sort (for powers of 2)
def comp_and_swap(a, i, j, dire):
    if (dire == 1 and a[i] > a[j]) or (dire == 0 and a[i] < a[j]):
        a[i], a[j] = a[j], a[i]

def bitonic_merge(a, low, cnt, dire):
    if cnt > 1:
        k = cnt // 2
        for i in range(low, low + k):
            comp_and_swap(a, i, i + k, dire)
        bitonic_merge(a, low, k, dire)
        bitonic_merge(a, low + k, k, dire)

def bitonic_sort(a, low, cnt, dire):
    if cnt > 1:
        k = cnt // 2
        # Sort in ascending order
        bitonic_sort(a, low, k, 1)
        # Sort in descending order
        bitonic_sort(a, low + k, k, 0)
        # Merge entire sequence in direction dire
        bitonic_merge(a, low, cnt, dire)

data = [3, 7, 4, 8, 6, 2, 1, 5]
print(f"Original: {data}")
bitonic_sort(data, 0, len(data), 1)
print(f"Sorted  : {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Forms bitonic sequences and merges into [1, 2, 3, 4, 5, 6, 7, 8].",
            "notes": "Bitonic sort is used in hardware and GPU parallel computing architectures.",
            "commonMistakes": "Passing array sizes that are not powers of 2 without appropriate padding.",
            "timeComplexity": "O(log^2 n) parallel, O(n log^2 n) sequential",
            "spaceComplexity": "O(log n) call stack"
        },
        {
            "id": 202,
            "number": "202",
            "title": "Comb Sort",
            "cleanTitle": "Comb Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "An improvement over Bubble Sort that uses a shrink factor (typically 1.3) to eliminate small values at the end of the list.",
            "explanation": "Gap starts as n // 1.3 and shrinks by 1.3 each iteration until gap = 1.",
            "syntax": "gap = max(1, int(gap / 1.3))",
            "keywordsOrMethods": ["Comb Sort", "shrink factor 1.3", "turtles and rabbits", "gap sort"],
            "codeExample": """# Program for Comb Sort
def comb_sort(arr):
    n = len(arr)
    gap = n
    shrink = 1.3
    sorted_flag = False

    while not sorted_flag:
        gap = int(gap / shrink)
        if gap <= 1:
            gap = 1
            sorted_flag = True

        for i in range(0, n - gap):
            if arr[i] > arr[i + gap]:
                arr[i], arr[i + gap] = arr[i + gap], arr[i]
                sorted_flag = False
    return arr

numbers = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]
print(f"Original: {numbers}")
comb_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Gapped comparisons eliminate turtles (small values near the end), producing sorted array.",
            "notes": "The empirical shrink factor of 1.3 was proposed by Stephen Lacey and Richard Box in 1991.",
            "commonMistakes": "Prematurely terminating before a complete pass with gap=1 and 0 swaps.",
            "timeComplexity": "O(n log n) average, O(n^2) worst",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 203,
            "number": "203",
            "title": "Pigeonhole Sort",
            "cleanTitle": "Pigeonhole Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A non-comparison sort suitable for sorting lists of elements where the number of elements and range of keys are roughly the same.",
            "explanation": "Creates an array of empty pigeonholes of size max - min + 1, places items in holes, and gathers back.",
            "syntax": "holes[x - min_val].append(x)",
            "keywordsOrMethods": ["Pigeonhole Sort", "bucket", "range", "non-comparison"],
            "codeExample": """# Program for Pigeonhole Sort
def pigeonhole_sort(arr):
    if not arr:
        return []
    min_val = min(arr)
    max_val = max(arr)
    size = max_val - min_val + 1

    # Create empty pigeonholes
    holes = [0] * size

    # Populate holes
    for x in arr:
        holes[x - min_val] += 1

    # Collect items back into arr
    idx = 0
    for count, holes_count in enumerate(holes):
        while holes_count > 0:
            arr[idx] = count + min_val
            idx += 1
            holes_count -= 1
    return arr

numbers = [8, 3, 2, 7, 4, 6, 8]
print(f"Original: {numbers}")
pigeonhole_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Puts elements into holes sized range 8-2+1=7; collects into [2, 3, 4, 6, 7, 8, 8].",
            "notes": "Ideal when Range (Max - Min) is approximately equal to N.",
            "commonMistakes": "Using when range is millions of times larger than N (wastes memory).",
            "timeComplexity": "O(N + Range)",
            "spaceComplexity": "O(Range)"
        },
        {
            "id": 204,
            "number": "204",
            "title": "Cocktail Sort",
            "cleanTitle": "Cocktail Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A bidirectional variation of Bubble Sort that traverses alternately from left to right and right to left.",
            "explanation": "Pass 1 moves largest item to end; Pass 2 moves smallest item to beginning, shrinking window from both ends.",
            "syntax": "forward bubble pass; start += 1; backward bubble pass; end -= 1",
            "keywordsOrMethods": ["Cocktail Shaker Sort", "bidirectional bubble sort", "ripple sort"],
            "codeExample": """# Program for Cocktail Shaker Sort
def cocktail_sort(arr):
    n = len(arr)
    swapped = True
    start = 0
    end = n - 1

    while swapped:
        swapped = False
        # Forward pass: left to right
        for i in range(start, end):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        if not swapped:
            break
        swapped = False
        end -= 1
        # Backward pass: right to left
        for i in range(end - 1, start - 1, -1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        start += 1
    return arr

data = [5, 1, 4, 2, 8, 0, 2]
print(f"Original: {data}")
cocktail_sort(data)
print(f"Sorted  : {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Alternating passes sort both ends simultaneously into [0, 1, 2, 2, 4, 5, 8].",
            "notes": "Solves the 'turtle' problem of standard bubble sort where small items move slowly to the front.",
            "commonMistakes": "Forgetting to update start pointer after backward pass.",
            "timeComplexity": "O(n^2) worst, O(n) best",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 205,
            "number": "205",
            "title": "Gnome Sort",
            "cleanTitle": "Gnome Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A simple sorting algorithm based on how a garden gnome sorts flower pots.",
            "explanation": "If current item >= previous item, step forward. If out of order, swap and step backward.",
            "syntax": "if arr[i] >= arr[i-1]: i += 1\nelse: arr[i], arr[i-1] = arr[i-1], arr[i]; i -= 1",
            "keywordsOrMethods": ["Gnome Sort", "stupid sort", "step forward step back", "in-place"],
            "codeExample": """# Program for Gnome Sort
def gnome_sort(arr):
    n = len(arr)
    index = 0
    while index < n:
        if index == 0:
            index += 1
        if arr[index] >= arr[index - 1]:
            index += 1
        else:
            arr[index], arr[index - 1] = arr[index - 1], arr[index]
            index -= 1
    return arr

data = [34, 2, 10, -9]
print(f"Original: {data}")
gnome_sort(data)
print(f"Sorted  : {data}")
""",
            "expectedOutput": "",
            "resultExplanation": "Gnome sort moves backward while elements are out of order, producing [-9, 2, 10, 34].",
            "notes": "Code is remarkably short; conceptually behaves like insertion sort without nested loops.",
            "commonMistakes": "Not checking if index == 0 before subtracting 1.",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 206,
            "number": "206",
            "title": "Odd-Even Sort / Brick Sort",
            "cleanTitle": "Odd-Even Sort / Brick Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A parallel variant of Bubble Sort that alternates between odd-indexed and even-indexed comparisons.",
            "explanation": "Phase 1: compares all odd-even pairs (1,2), (3,4). Phase 2: compares all even-odd pairs (0,1), (2,3).",
            "syntax": "odd phase: for i in range(1, n-1, 2); even phase: for i in range(0, n-1, 2)",
            "keywordsOrMethods": ["Odd-Even Sort", "Brick Sort", "parallel sorting", "parity"],
            "codeExample": """# Program for Odd-Even Sort / Brick Sort
def odd_even_sort(arr):
    n = len(arr)
    is_sorted = False
    while not is_sorted:
        is_sorted = True
        # Odd phase
        for i in range(1, n - 1, 2):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_sorted = False
        # Even phase
        for i in range(0, n - 1, 2):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                is_sorted = False
    return arr

numbers = [34, 2, 10, -9, 8, 1, 5]
print(f"Original: {numbers}")
odd_even_sort(numbers)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Alternating odd and even phases sort array into [-9, 1, 2, 5, 8, 10, 34].",
            "notes": "Designed for execution on parallel processor arrays where all comparisons in a phase happen concurrently in O(1).",
            "commonMistakes": "Forgetting to alternate between odd and even phases.",
            "timeComplexity": "O(n^2) sequentially, O(n) parallel",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 207,
            "number": "207",
            "title": "BogoSort or Permutation Sort",
            "cleanTitle": "BogoSort or Permutation Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "An ineffective, randomized algorithm that randomly shuffles elements until they happen to be sorted.",
            "explanation": "While not is_sorted(arr), calls random.shuffle(arr). Demonstrates worst-case algorithm analysis (O(n * n!)).",
            "syntax": "while not all(arr[i] <= arr[i+1] for i in range(n-1)): random.shuffle(arr)",
            "keywordsOrMethods": ["BogoSort", "permutation sort", "random.shuffle", "stochastic"],
            "codeExample": """# Program for BogoSort (Permutation Sort) on small list
import random

def is_sorted(arr):
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))

def bogosort(arr):
    attempts = 0
    # Seed for deterministic reproducible run in demonstration
    random.seed(42)
    while not is_sorted(arr):
        random.shuffle(arr)
        attempts += 1
    return attempts

small_list = [3, 1, 2]
print(f"Original: {small_list}")
attempts = bogosort(small_list)
print(f"Sorted  : {small_list} (achieved in {attempts} random shuffle attempts)")
""",
            "expectedOutput": "",
            "resultExplanation": "Randomly shuffles 3 elements until sorted into [1, 2, 3].",
            "notes": "BogoSort is a pedagogical example of infinite worst-case runtime O((n+1)!).",
            "commonMistakes": "Running BogoSort on lists with size > 10, which can take hours or years to finish.",
            "timeComplexity": "O((n+1)!)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 208,
            "number": "208",
            "title": "Cycle Sort",
            "cleanTitle": "Cycle Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "An in-place, unstable comparison sort that minimizes the total number of memory writes to the original array.",
            "explanation": "Decomposes the permutation into cycles and places each element directly into its correct sorted rank position.",
            "syntax": "pos = start + sum(1 for i in range(start + 1, n) if arr[i] < item)",
            "keywordsOrMethods": ["Cycle Sort", "minimum writes", "in-place", "cycles"],
            "codeExample": """# Program for Cycle Sort (minimizing memory writes)
def cycle_sort(arr):
    writes = 0
    n = len(arr)
    
    for cycle_start in range(0, n - 1):
        item = arr[cycle_start]
        pos = cycle_start
        for i in range(cycle_start + 1, n):
            if arr[i] < item:
                pos += 1
                
        if pos == cycle_start:
            continue
            
        while item == arr[pos]:
            pos += 1
        arr[pos], item = item, arr[pos]
        writes += 1
        
        while pos != cycle_start:
            pos = cycle_start
            for i in range(cycle_start + 1, n):
                if arr[i] < item:
                    pos += 1
            while item == arr[pos]:
                pos += 1
            arr[pos], item = item, arr[pos]
            writes += 1
            
    return writes

data = [1, 8, 3, 9, 10, 10, 2, 4]
print(f"Original: {data}")
writes = cycle_sort(data)
print(f"Sorted  : {data} (Completed in {writes} writes)")
""",
            "expectedOutput": "",
            "resultExplanation": "Sorts the array with optimal minimum write operations.",
            "notes": "Theoretically optimal in the total number of memory writes (each item is written at most twice).",
            "commonMistakes": "Not handling duplicate values properly in cycle loops.",
            "timeComplexity": "O(n^2)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 209,
            "number": "209",
            "title": "Stooge Sort",
            "cleanTitle": "Stooge Sort",
            "category": "Searching and Sorting Programs",
            "introduction": "A recursive sorting algorithm that sorts the first two-thirds, the last two-thirds, and the first two-thirds again.",
            "explanation": "If arr[l] > arr[h], swaps them. If h - l + 1 >= 3, calculates t = (h - l + 1) // 3 and recurses on [l, h-t], [l+t, h], [l, h-t].",
            "syntax": "t = (h - l + 1) // 3\nstoogesort(arr, l, h - t); stoogesort(arr, l + t, h); stoogesort(arr, l, h - t)",
            "keywordsOrMethods": ["Stooge Sort", "two-thirds recursion", "slow sort", "divide and conquer"],
            "codeExample": """# Program for Stooge Sort
def stooge_sort(arr, l, h):
    if l >= h:
        return
    # If first element is smaller than last, swap them
    if arr[l] > arr[h]:
        arr[l], arr[h] = arr[h], arr[l]
        
    # If there are more than 2 elements in the array
    if h - l + 1 > 2:
        t = (h - l + 1) // 3
        # Recursively sort first 2/3
        stooge_sort(arr, l, h - t)
        # Recursively sort last 2/3
        stooge_sort(arr, l + t, h)
        # Recursively sort first 2/3 again
        stooge_sort(arr, l, h - t)

numbers = [2, 4, 5, 3, 1]
print(f"Original: {numbers}")
stooge_sort(numbers, 0, len(numbers) - 1)
print(f"Sorted  : {numbers}")
""",
            "expectedOutput": "",
            "resultExplanation": "Recursively sorts the two-thirds intervals, resulting in [1, 2, 3, 4, 5].",
            "notes": "Stooge Sort has a time complexity of O(n^(log 3 / log 1.5)) ~= O(n^2.7095), slower than Bubble Sort.",
            "commonMistakes": "Calculating t as (h - l) // 3 instead of (h - l + 1) // 3.",
            "timeComplexity": "O(n^2.71)",
            "spaceComplexity": "O(n) recursion stack"
        }
    ]
    return lessons
