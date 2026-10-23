"""
Batch 4:
- Category 6: More Popular Python Programs (26 lessons, IDs 58-83)
"""

def get_batch4():
    lessons = [
        {
            "id": 58,
            "number": "058",
            "title": "Reverse a linked list",
            "cleanTitle": "Reverse a linked list",
            "category": "More Popular Python Programs",
            "introduction": "Reversing a singly linked list in-place by redirecting node pointers from right-to-left.",
            "explanation": "Iterates through the list using three pointers: prev, curr, and next_node. At each step, curr.next is pointed to prev.",
            "syntax": "prev = None; curr = head\nwhile curr:\n    nxt = curr.next; curr.next = prev; prev = curr; curr = nxt\nhead = prev",
            "keywordsOrMethods": ["linked list", "in-place reversal", "pointers", "singly linked list"],
            "codeExample": """# Program to reverse a singly linked list in Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node

    def reverse(self):
        prev = None
        curr = self.head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        self.head = prev

    def to_list(self):
        result = []
        curr = self.head
        while curr:
            result.append(curr.data)
            curr = curr.next
        return result

ll = LinkedList()
for val in [10, 20, 30, 40, 50]:
    ll.append(val)

print(f"Original Linked List : {' -> '.join(map(str, ll.to_list()))}")
ll.reverse()
print(f"Reversed Linked List : {' -> '.join(map(str, ll.to_list()))}")
""",
            "expectedOutput": "",
            "resultExplanation": "Pointers are inverted in-place, transforming 10 -> 20 -> 30 -> 40 -> 50 into 50 -> 40 -> 30 -> 20 -> 10.",
            "notes": "In-place pointer reversal operates in O(1) auxiliary space without duplicating nodes.",
            "commonMistakes": "Losing the reference to curr.next before updating curr.next = prev, causing an orphaned list.",
            "timeComplexity": "O(N)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 59,
            "number": "059",
            "title": "Find largest prime factor of a number",
            "cleanTitle": "Find largest prime factor of a number",
            "category": "More Popular Python Programs",
            "introduction": "Finds the largest prime number that divides a given composite number without remainder.",
            "explanation": "Divides out factor 2, then iterates odd factors d starting from 3 up to sqrt(n). If n > 2 at the end, n itself is prime.",
            "syntax": "while n % 2 == 0: n //= 2\nfor i in range(3, int(n**0.5)+1, 2): ...",
            "keywordsOrMethods": ["prime factor", "largest prime factor", "number theory"],
            "codeExample": """# Program to find largest prime factor of a number
def largest_prime_factor(n):
    max_prime = -1
    # Divide out factor 2
    while n % 2 == 0:
        max_prime = 2
        n //= 2
    # Divide out odd factors
    d = 3
    while d * d <= n:
        while n % d == 0:
            max_prime = d
            n //= d
        d += 2
    # If remaining n is greater than 2, it is prime
    if n > 2:
        max_prime = n
    return max_prime

numbers = [15, 77, 13195, 315]
for num in numbers:
    print(f"Largest prime factor of {num} is: {largest_prime_factor(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 13195 = 5 * 7 * 13 * 29, the largest prime factor is 29.",
            "notes": "When all factors up to sqrt(n) have been divided out, any remaining n > 2 is guaranteed to be prime.",
            "commonMistakes": "Incrementing d by 1 instead of 2 after checking 2, which unnecessarily checks even numbers.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 60,
            "number": "060",
            "title": "Efficient program to print all prime factors of a given number",
            "cleanTitle": "Efficient program to print all prime factors of a given number",
            "category": "More Popular Python Programs",
            "introduction": "Decomposes a number into the complete sequence of its prime building blocks.",
            "explanation": "Extracts factors of 2 first, then tests odd integers up to sqrt(n), printing each factor every time it divides n.",
            "syntax": "factors = []\nwhile n % d == 0: factors.append(d); n //= d",
            "keywordsOrMethods": ["prime factorization", "fundamental theorem of arithmetic", "trial division"],
            "codeExample": """# Efficient program to print all prime factors of a given number
def get_prime_factors(n):
    factors = []
    # Print the number of 2s that divide n
    while n % 2 == 0:
        factors.append(2)
        n //= 2
    # n must be odd at this point
    d = 3
    while d * d <= n:
        while n % d == 0:
            factors.append(d)
            n //= d
        d += 2
    # If n is still greater than 2
    if n > 2:
        factors.append(n)
    return factors

test_cases = [12, 315, 84, 100]
for num in test_cases:
    print(f"Prime factors of {num:3d}: {get_prime_factors(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "84 factorizes into [2, 2, 3, 7] because 2*2*3*7 = 84.",
            "notes": "The fundamental theorem of arithmetic states that every integer > 1 has a unique prime factorization.",
            "commonMistakes": "Checking primality of each divisor separately instead of using trial division.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(log n) for factor list"
        },
        {
            "id": 61,
            "number": "061",
            "title": "Product of unique prime factors of a number",
            "cleanTitle": "Product of unique prime factors of a number",
            "category": "More Popular Python Programs",
            "introduction": "Computes the square-free kernel of an integer (product of its distinct prime factors).",
            "explanation": "Collects distinct prime factors using a set or single division tracking, then computes their product.",
            "syntax": "prod = 1\nfor p in set(prime_factors(n)): prod *= p",
            "keywordsOrMethods": ["unique prime factors", "radical of integer", "product", "math"],
            "codeExample": """# Program to find product of unique prime factors of a number
def product_unique_prime_factors(n):
    product = 1
    # Check factor 2
    if n % 2 == 0:
        product *= 2
        while n % 2 == 0:
            n //= 2
    # Check odd factors
    d = 3
    while d * d <= n:
        if n % d == 0:
            product *= d
            while n % d == 0:
                n //= d
        d += 2
    if n > 2:
        product *= n
    return product

numbers = [12, 100, 210, 48]
for num in numbers:
    print(f"Number: {num:3d} | Product of unique prime factors: {product_unique_prime_factors(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 100 = 2^2 * 5^2, unique prime factors are 2 and 5, product = 2 * 5 = 10.",
            "notes": "In number theory, this is known as the radical of an integer, rad(n).",
            "commonMistakes": "Multiplying prime factors with their multiplicities rather than counting each distinct prime once.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 62,
            "number": "062",
            "title": "Find sum of odd factors of a number",
            "cleanTitle": "Find sum of odd factors of a number",
            "category": "More Popular Python Programs",
            "introduction": "Calculates the sum of all divisors of n that are odd numbers.",
            "explanation": "Divides out all factors of 2 from n, then finds the sum of divisors of the remaining odd part.",
            "syntax": "while n % 2 == 0: n //= 2\nsum_odd = sum(i for i in range(1, n+1) if n % i == 0)",
            "keywordsOrMethods": ["odd factors", "sum of divisors", "odd divisor function"],
            "codeExample": """# Program to find sum of odd factors of a number
def sum_of_odd_factors(n):
    # Divide out all factors of 2 to isolate odd component
    while n % 2 == 0:
        n //= 2
    
    total = 0
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            total += i
            if i * i != n:
                total += (n // i)
    return total

test_nums = [30, 36, 18, 100]
for num in test_nums:
    print(f"Sum of odd factors for {num:3d}: {sum_of_odd_factors(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Factors of 30 are 1, 2, 3, 5, 6, 10, 15, 30. The odd factors are 1, 3, 5, 15, sum = 24.",
            "notes": "Dividing out powers of 2 first reduces the search space dramatically.",
            "commonMistakes": "Including even factors in the sum or checking all numbers up to n naively.",
            "timeComplexity": "O(sqrt(n_odd))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 63,
            "number": "063",
            "title": "Print all Prime numbers in an Interval",
            "cleanTitle": "Print all Prime numbers in an Interval",
            "category": "More Popular Python Programs",
            "introduction": "Generates all prime numbers lying between a lower bound and an upper bound inclusive.",
            "explanation": "Iterates from start to end and tests primality for each integer, collecting primes into an interval list.",
            "syntax": "[num for num in range(start, end + 1) if is_prime(num)]",
            "keywordsOrMethods": ["prime interval", "range", "filter", "primality"],
            "codeExample": """# Program to print all prime numbers in an interval
def is_prime(n):
    if n <= 1: return False
    if n <= 3: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0: return False
        i += 6
    return True

def primes_in_interval(start, end):
    return [num for num in range(start, end + 1) if is_prime(num)]

start_val = 10
end_val = 50
primes = primes_in_interval(start_val, end_val)

print(f"Prime numbers between {start_val} and {end_val}:")
print(primes)
print(f"Total count: {len(primes)}")
""",
            "expectedOutput": "",
            "resultExplanation": "Outputs 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (11 primes in total).",
            "notes": "For very large intervals, a Segmented Sieve of Eratosthenes is optimal.",
            "commonMistakes": "Treating negative numbers or 1 as prime when start is <= 1.",
            "timeComplexity": "O((end - start) * sqrt(end))",
            "spaceComplexity": "O(K) where K is number of primes"
        },
        {
            "id": 64,
            "number": "064",
            "title": "Program for Coin Change",
            "cleanTitle": "Program for Coin Change",
            "category": "More Popular Python Programs",
            "introduction": "Finds the minimum number of coins needed to make a target amount given a set of coin denominations.",
            "explanation": "Dynamic Programming: dp[a] stores min coins for amount a. dp[a] = min(dp[a], dp[a - coin] + 1).",
            "syntax": "dp[a] = min(dp[a], dp[a - c] + 1)",
            "keywordsOrMethods": ["coin change", "dynamic programming", "knapsack", "optimization"],
            "codeExample": """# Program for Coin Change (Minimum Coins to make Amount)
def min_coins(coins, amount):
    # dp[i] will store minimum coins needed for amount i
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0

    for coin in coins:
        for a in range(coin, amount + 1):
            dp[a] = min(dp[a], dp[a - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

denominations = [1, 2, 5]
target = 11
result = min_coins(denominations, target)

print(f"Coin Denominations: {denominations}")
print(f"Target Amount     : {target}")
print(f"Minimum coins needed: {result} (e.g. 5 + 5 + 1)")
""",
            "expectedOutput": "",
            "resultExplanation": "11 can be made using two 5-coins and one 1-coin, totaling 3 coins.",
            "notes": "Greedy algorithms can fail on arbitrary denominations (e.g. coins [1, 3, 4] for amount 6). DP always finds optimal.",
            "commonMistakes": "Assuming a greedy approach always works for any coin denominations.",
            "timeComplexity": "O(amount * len(coins))",
            "spaceComplexity": "O(amount)"
        },
        {
            "id": 65,
            "number": "065",
            "title": "Program for Tower of Hanoi",
            "cleanTitle": "Program for Tower of Hanoi",
            "category": "More Popular Python Programs",
            "introduction": "A classic mathematical puzzle of moving n disks from source rod to destination rod using an auxiliary rod.",
            "explanation": "Recursive divide-and-conquer: move n-1 disks from source to aux, move disk n to dest, move n-1 disks from aux to dest.",
            "syntax": "def hanoi(n, source, target, auxiliary): ...",
            "keywordsOrMethods": ["Tower of Hanoi", "recursion", "divide and conquer", "call stack"],
            "codeExample": """# Program for Tower of Hanoi
def tower_of_hanoi(n, source, destination, auxiliary, moves):
    if n == 1:
        moves.append(f"Move disk 1 from {source} to {destination}")
        return
    tower_of_hanoi(n - 1, source, auxiliary, destination, moves)
    moves.append(f"Move disk {n} from {source} to {destination}")
    tower_of_hanoi(n - 1, auxiliary, destination, source, moves)

moves_list = []
num_disks = 3
tower_of_hanoi(num_disks, 'A', 'C', 'B', moves_list)

print(f"Tower of Hanoi Solution for {num_disks} Disks (Total Steps: {len(moves_list)}):")
for step, move in enumerate(moves_list, 1):
    print(f"  Step {step}: {move}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 3 disks, takes exactly 2^3 - 1 = 7 steps.",
            "notes": "The minimum number of moves required to solve Tower of Hanoi is always 2^n - 1.",
            "commonMistakes": "Swapping the auxiliary and destination rod arguments in the recursive calls.",
            "timeComplexity": "O(2^n)",
            "spaceComplexity": "O(n) recursion stack"
        },
        {
            "id": 66,
            "number": "066",
            "title": "Sieve of Eratosthenes",
            "cleanTitle": "Sieve of Eratosthenes",
            "category": "More Popular Python Programs",
            "introduction": "An ancient and highly efficient algorithm to find all prime numbers up to any given limit.",
            "explanation": "Creates a boolean array initialized to True; marks multiples of each prime starting from p^2 as False.",
            "syntax": "prime[p*p : n+1 : p] = [False] * len(range(p*p, n+1, p))",
            "keywordsOrMethods": ["Sieve of Eratosthenes", "prime generation", "boolean array", "algorithm"],
            "codeExample": """# Program for Sieve of Eratosthenes
def sieve_of_eratosthenes(limit):
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False
    
    p = 2
    while p * p <= limit:
        if is_prime[p]:
            # Update all multiples of p starting from p^2
            for i in range(p * p, limit + 1, p):
                is_prime[i] = False
        p += 1
        
    return [i for i, prime in enumerate(is_prime) if prime]

limit = 30
primes = sieve_of_eratosthenes(limit)
print(f"All primes up to {limit}:")
print(primes)
""",
            "expectedOutput": "",
            "resultExplanation": "Finds primes [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] up to 30.",
            "notes": "Starting cross-outs at p*p rather than 2*p avoids re-marking multiples already handled by smaller primes.",
            "commonMistakes": "Forgetting to initialize indices 0 and 1 to False.",
            "timeComplexity": "O(n log log n)",
            "spaceComplexity": "O(n) boolean array"
        },
        {
            "id": 67,
            "number": "067",
            "title": "Check if binary representation is palindrome",
            "cleanTitle": "Check if binary representation is palindrome",
            "category": "More Popular Python Programs",
            "introduction": "Verifies whether the binary expansion of an integer reads identically forwards and backwards.",
            "explanation": "Converts number to binary string using bin(n)[2:] (stripping the '0b' prefix) and compares with its reverse [::-1].",
            "syntax": "b = bin(n)[2:]\nis_pal = (b == b[::-1])",
            "keywordsOrMethods": ["bin()", "binary palindrome", "bit manipulation", "string slice"],
            "codeExample": """# Program to check if binary representation of a number is a palindrome
def is_binary_palindrome(n):
    # bin(n) returns '0b...' prefix, slice from index 2
    binary_str = bin(n)[2:]
    return binary_str == binary_str[::-1], binary_str

test_numbers = [9, 10, 27, 33, 5]

for num in test_numbers:
    is_pal, b_str = is_binary_palindrome(num)
    verdict = "PALINDROME" if is_pal else "NOT a palindrome"
    print(f"{num:2d} -> Binary: {b_str:<8} -> {verdict}")
""",
            "expectedOutput": "",
            "resultExplanation": "9 in binary is '1001' (palindrome); 27 is '11011' (palindrome); 10 is '1010' (not a palindrome).",
            "notes": "bin() prepends '0b' which must be sliced off before palindrome checking.",
            "commonMistakes": "Not slicing off '0b', making '0b1001' fail against '1001b0'.",
            "timeComplexity": "O(log n) bits",
            "spaceComplexity": "O(log n) string"
        },
        {
            "id": 68,
            "number": "068",
            "title": "Basic Euclidean algorithms",
            "cleanTitle": "Basic Euclidean algorithms",
            "category": "More Popular Python Programs",
            "introduction": "Computes the Greatest Common Divisor (GCD) of two integers using the Euclidean remainder principle.",
            "explanation": "gcd(a, b) = gcd(b, a % b) until b becomes 0, at which point a is the greatest common divisor.",
            "syntax": "while b:\n    a, b = b, a % b\nreturn a",
            "keywordsOrMethods": ["Euclidean algorithm", "GCD", "HCF", "modulo"],
            "codeExample": """# Program for Basic Euclidean Algorithm (GCD)
def gcd_euclidean(a, b):
    while b != 0:
        a, b = b, a % b
    return a

pairs = [(48, 18), (101, 10), (56, 98), (270, 192)]

for a, b in pairs:
    result = gcd_euclidean(a, b)
    print(f"GCD({a}, {b}) = {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "48 and 18 share GCD of 6; 56 and 98 share GCD of 14.",
            "notes": "Euclid's algorithm runs in logarithmic time relative to the smaller integer.",
            "commonMistakes": "Using repeated subtraction instead of modulo, which degrades performance to O(n) for large differences.",
            "timeComplexity": "O(log(min(a, b)))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 69,
            "number": "069",
            "title": "Extended Euclidean algorithms",
            "cleanTitle": "Extended Euclidean algorithms",
            "category": "More Popular Python Programs",
            "introduction": "Finds integer coefficients x and y such that a*x + b*y = gcd(a, b) (Bézout's identity).",
            "explanation": "Crucial in cryptography (RSA, modular multiplicative inverses) to compute inverse elements under modular arithmetic.",
            "syntax": "def extended_gcd(a, b): ...\nreturn gcd, x, y",
            "keywordsOrMethods": ["Extended Euclidean", "Bézout coefficients", "modular inverse", "cryptography"],
            "codeExample": """# Program for Extended Euclidean Algorithm
def extended_gcd(a, b):
    if a == 0:
        return b, 0, 1
    gcd, x1, y1 = extended_gcd(b % a, a)
    x = y1 - (b // a) * x1
    y = x1
    return gcd, x, y

a = 35
b = 15
gcd, x, y = extended_gcd(a, b)

print(f"Extended GCD for a = {a}, b = {b}:")
print(f"  GCD = {gcd}")
print(f"  Bézout coefficients: x = {x}, y = {y}")
print(f"  Verification: {a}*({x}) + {b}*({y}) = {a*x + b*y} (equals GCD)")
""",
            "expectedOutput": "",
            "resultExplanation": "35*(1) + 15*(-2) = 35 - 30 = 5 = gcd(35, 15).",
            "notes": "Used to calculate the modular multiplicative inverse of a modulo m when gcd(a, m) == 1.",
            "commonMistakes": "Mixing up the order of x and y updates during back-substitution.",
            "timeComplexity": "O(log(min(a, b)))",
            "spaceComplexity": "O(log(min(a, b))) recursion stack"
        },
        {
            "id": 70,
            "number": "070",
            "title": "Find Maximum Height of a Coin Triangle",
            "cleanTitle": "Find Maximum Height of a Coin Triangle",
            "category": "More Popular Python Programs",
            "introduction": "Finds the maximum height of a triangular arrangement that can be formed using N coins.",
            "explanation": "Row h requires h coins; total coins for height h is h*(h+1)/2 <= N. Solved in O(1) using quadratic root: floor((-1 + sqrt(1 + 8N)) / 2).",
            "syntax": "import math\nh = int((-1 + math.isqrt(1 + 8 * n)) // 2)",
            "keywordsOrMethods": ["coin triangle", "triangular numbers", "math.isqrt", "closed-form"],
            "codeExample": """# Program to find maximum height of a coin triangle
import math

def max_height_coin_triangle(n):
    # h*(h + 1)/2 <= n  =>  h^2 + h - 2n <= 0
    # Positive root: (-1 + sqrt(1 + 8n)) / 2
    return int((-1 + math.isqrt(1 + 8 * n)) // 2)

coins_list = [1, 3, 5, 10, 12, 15]

for c in coins_list:
    h = max_height_coin_triangle(c)
    used = h * (h + 1) // 2
    print(f"Coins: {c:2d} -> Max Triangle Height: {h} (used {used} coins, {c - used} remaining)")
""",
            "expectedOutput": "",
            "resultExplanation": "10 coins form height 4 (1+2+3+4 = 10 coins). 12 coins still form height 4 with 2 leftover coins.",
            "notes": "math.isqrt() computes exact integer square root, preventing float precision loss.",
            "commonMistakes": "Looping incrementally when a direct mathematical formula achieves O(1) time.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 71,
            "number": "071",
            "title": "Find minimum sum of factors of number",
            "cleanTitle": "Find minimum sum of factors of number",
            "category": "More Popular Python Programs",
            "introduction": "Finds the minimum sum of factors whose product equals the given number n.",
            "explanation": "The sum of factors is minimized when the number is factored into its prime factors. By arithmetic properties, splitting any composite factor a*b into a + b is always smaller (since a+b <= a*b for integers >= 2).",
            "syntax": "sum_factors = sum(prime_factors(n))",
            "keywordsOrMethods": ["minimum sum of factors", "prime decomposition", "factorization"],
            "codeExample": """# Program to find minimum sum of factors of a number
def min_sum_of_factors(n):
    sum_factors = 0
    # Add factors of 2
    while n % 2 == 0:
        sum_factors += 2
        n //= 2
    # Add odd prime factors
    d = 3
    while d * d <= n:
        while n % d == 0:
            sum_factors += d
            n //= d
        d += 2
    if n > 1:
        sum_factors += n
    return sum_factors

numbers = [12, 16, 105, 17]
for num in numbers:
    print(f"Number: {num:3d} | Minimum sum of factors: {min_sum_of_factors(num)}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 12: factors can be 12 (sum 12), 6*2 (sum 8), 4*3 (sum 7), or 2*2*3 (sum 2+2+3 = 7). Minimum sum is 7.",
            "notes": "The prime factorization always gives the minimum sum of factors for integers >= 2.",
            "commonMistakes": "Including 1 as a factor, which increases the sum without changing the product.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 72,
            "number": "072",
            "title": "Difference between sums of odd and even digits",
            "cleanTitle": "Difference between sums of odd and even digits",
            "category": "More Popular Python Programs",
            "introduction": "Computes the absolute difference between the sum of digits at odd positions and even positions (or odd vs even values).",
            "explanation": "Iterates through the digits of a number, partitioning them into odd and even numbers (or alternate positional parity) and subtracting their sums.",
            "syntax": "odd_sum = sum(d for d in digits if d % 2 != 0)\neven_sum = sum(d for d in digits if d % 2 == 0)",
            "keywordsOrMethods": ["digit sum", "odd even digits", "parity difference", "arithmetic"],
            "codeExample": """# Program to find difference between sums of odd and even digits
def diff_odd_even_digit_values(num):
    odd_sum = 0
    even_sum = 0
    for ch in str(abs(num)):
        d = int(ch)
        if d % 2 == 0:
            even_sum += d
        else:
            odd_sum += d
    diff = abs(odd_sum - even_sum)
    return odd_sum, even_sum, diff

numbers = [12345, 2468, 13579, 98214]

for n in numbers:
    o_sum, e_sum, diff = diff_odd_even_digit_values(n)
    print(f"Num: {n:<6} | Odd Sum: {o_sum:<2} | Even Sum: {e_sum:<2} | Absolute Diff: {diff}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 12345: odd digits (1,3,5) sum to 9; even digits (2,4) sum to 6; absolute difference is 3.",
            "notes": "Handles negative numbers cleanly using abs(num).",
            "commonMistakes": "Confusing odd/even digit values with 1-based digit index positions.",
            "timeComplexity": "O(d) digits",
            "spaceComplexity": "O(d) for string representation"
        },
        {
            "id": 73,
            "number": "073",
            "title": "Print Matrix in Z form",
            "cleanTitle": "Print Matrix in Z form",
            "category": "More Popular Python Programs",
            "introduction": "Traverses an n*n square matrix along the shape of the letter 'Z' (first row, anti-diagonal, last row).",
            "explanation": "Collects elements from row 0 from left to right, then elements along the secondary diagonal from top-right to bottom-left, then the last row from left to right.",
            "syntax": "row 0 + anti-diagonal elements (i, n-1-i) + row n-1",
            "keywordsOrMethods": ["matrix traversal", "Z form", "anti-diagonal", "2D array"],
            "codeExample": """# Program to print Matrix in Z form
def print_matrix_z_form(matrix):
    n = len(matrix)
    z_elements = []

    # 1. First row
    for j in range(n):
        z_elements.append(matrix[0][j])

    # 2. Diagonal from top-right to bottom-left (excluding corners already covered)
    for i in range(1, n - 1):
        z_elements.append(matrix[i][n - 1 - i])

    # 3. Last row
    if n > 1:
        for j in range(n):
            z_elements.append(matrix[n - 1][j])

    return z_elements

mat = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

print("Original Matrix:")
for row in mat:
    print(row)

z_traversal = print_matrix_z_form(mat)
print(f"\\nZ-Form Traversal: {z_traversal}")
""",
            "expectedOutput": "",
            "resultExplanation": "First row [1, 2, 3, 4], diagonal elements [7, 10], and last row [13, 14, 15, 16].",
            "notes": "Ensure diagonal indexing properly excludes first and last row intersection indices.",
            "commonMistakes": "Double-counting corner elements matrix[0][n-1] or matrix[n-1][0].",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(n) output list"
        },
        {
            "id": 74,
            "number": "074",
            "title": "Smallest K digit number divisible by X",
            "cleanTitle": "Smallest K digit number divisible by X",
            "category": "More Popular Python Programs",
            "introduction": "Finds the smallest positive number with exactly K digits that is evenly divisible by X.",
            "explanation": "Smallest K-digit number is 10^(K-1). If 10^(K-1) % X == 0, it is the answer; otherwise, add (X - 10^(K-1) % X).",
            "syntax": "min_k = 10**(k - 1)\nans = min_k if min_k % x == 0 else min_k + (x - min_k % x)",
            "keywordsOrMethods": ["smallest k digit", "divisibility", "modular math", "O(1) calculation"],
            "codeExample": """# Program to find smallest K digit number divisible by X
def smallest_k_digit_divisible(k, x):
    # Smallest k-digit number
    min_k = 10 ** (k - 1)
    remainder = min_k % x
    if remainder == 0:
        ans = min_k
    else:
        ans = min_k + (x - remainder)
    
    # Check if answer still has k digits
    if ans >= 10 ** k:
        return None  # No such k-digit number exists
    return ans

test_cases = [(3, 7), (4, 13), (2, 5), (3, 29)]

for k, x in test_cases:
    res = smallest_k_digit_divisible(k, x)
    print(f"Smallest {k}-digit number divisible by {x:2d} is: {res} ({res} / {x} = {res // x})")
""",
            "expectedOutput": "",
            "resultExplanation": "Smallest 3-digit number is 100. 100 % 7 = 2, so 100 + (7 - 2) = 105. 105 is divisible by 7.",
            "notes": "Computes the exact number in O(1) mathematical time without iterating.",
            "commonMistakes": "Looping from 10^(K-1) upwards which is slow for large K.",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 75,
            "number": "075",
            "title": "Print Number series without using any loop",
            "cleanTitle": "Print Number series without using any loop",
            "category": "More Popular Python Programs",
            "introduction": "Prints a recursive sequence starting at n, decrementing by k until <= 0, then incrementing back to n without loops.",
            "explanation": "Uses recursion to simulate the sequence: print n, call recurse(n - k), print n again upon return.",
            "syntax": "def print_series(n, k): ...",
            "keywordsOrMethods": ["recursion without loop", "call stack", "backtracking", "symmetric pattern"],
            "codeExample": """# Program to print number series without using any loop
def print_series(n, k, result=None):
    if result is None:
        result = []
    result.append(n)
    # Base condition: stop subtracting when n reaches 0 or negative
    if n <= 0:
        return result
    print_series(n - k, k, result)
    result.append(n)
    return result

n = 16
k = 5
series = print_series(n, k)
print(f"Series for n = {n}, k = {k}:")
print(series)
""",
            "expectedOutput": "",
            "resultExplanation": "16 -> 11 -> 6 -> 1 -> -4 -> 1 -> 6 -> 11 -> 16 (printed symmetrically).",
            "notes": "The return journey of the recursive stack creates the increasing second half automatically.",
            "commonMistakes": "Forgetting the base condition n <= 0, causing a RecursionError.",
            "timeComplexity": "O(n / k)",
            "spaceComplexity": "O(n / k) call stack"
        },
        {
            "id": 76,
            "number": "076",
            "title": "Number of stopping station problem",
            "cleanTitle": "Number of stopping station problem",
            "category": "More Popular Python Programs",
            "introduction": "Finds the number of ways a train can stop at s stations out of n stations such that no two stopping stations are consecutive.",
            "explanation": "Combinatorial problem: selecting s non-consecutive items out of n equals C(n - s + 1, s), calculated using math.comb().",
            "syntax": "import math\nways = math.comb(n - s + 1, s)",
            "keywordsOrMethods": ["combinatorics", "stopping stations", "math.comb", "combinations"],
            "codeExample": """# Program for Number of stopping station problem
import math

def stopping_station_ways(n, s):
    # Number of ways to choose s non-consecutive stations out of n
    # Formula: C(n - s + 1, s)
    if s > (n + 1) // 2:
        return 0  # Impossible to pick non-consecutive stations
    return math.comb(n - s + 1, s)

scenarios = [
    (12, 4),
    (10, 3),
    (8, 2),
    (5, 4)
]

for n, s in scenarios:
    ways = stopping_station_ways(n, s)
    print(f"Total Stations: {n:2d} | Stopping Stations: {s} | Valid Ways: {ways}")
""",
            "expectedOutput": "",
            "resultExplanation": "For n=12, s=4: C(12 - 4 + 1, 4) = C(9, 4) = 126 ways.",
            "notes": "By reducing n by (s - 1), the non-consecutive constraint is transformed into a standard combination.",
            "commonMistakes": "Not checking if s > (n + 1)//2 which leads to invalid negative combinations.",
            "timeComplexity": "O(s) using math.comb",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 77,
            "number": "077",
            "title": "Check if a Triangle Is Possible from Given Angles",
            "cleanTitle": "Check if a Triangle Is Possible from Given Angles",
            "category": "More Popular Python Programs",
            "introduction": "Verifies whether three given angles in degrees can form a valid Euclidean triangle.",
            "explanation": "A triangle is valid if and only if all three angles are strictly positive (> 0) and their sum equals exactly 180 degrees.",
            "syntax": "(a > 0 and b > 0 and c > 0) and (a + b + c == 180)",
            "keywordsOrMethods": ["triangle angles", "angle sum property", "geometry", "validation"],
            "codeExample": """# Program to check if a Triangle is possible from given angles
def is_valid_triangle_angles(a, b, c):
    # All angles must be positive and their sum must be 180
    return a > 0 and b > 0 and c > 0 and (a + b + c == 180)

angle_sets = [
    (60, 60, 60),
    (90, 45, 45),
    (100, 50, 40),
    (120, 30, 30),
    (0, 90, 90)
]

for a, b, c in angle_sets:
    valid = "POSSIBLE (Valid Triangle)" if is_valid_triangle_angles(a, b, c) else "IMPOSSIBLE (Invalid)"
    print(f"Angles: ({a:3d}, {b:3d}, {c:3d}) -> {valid}")
""",
            "expectedOutput": "",
            "resultExplanation": "(60, 60, 60), (90, 45, 45), and (120, 30, 30) sum to 180 and are strictly positive. (0, 90, 90) fails because angle 0 is degenerate.",
            "notes": "Every angle must be strictly greater than 0; a 0-degree angle cannot form a triangle.",
            "commonMistakes": "Checking only sum == 180 without checking if all angles are > 0 (e.g. -20, 100, 100).",
            "timeComplexity": "O(1)",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 78,
            "number": "078",
            "title": "Find the most occurring character and its count",
            "cleanTitle": "Find the most occurring character and its count",
            "category": "More Popular Python Programs",
            "introduction": "Determines the character with highest frequency in a given string and reports its count.",
            "explanation": "Uses collections.Counter to tally all character occurrences, then finds the maximum frequency pair.",
            "syntax": "from collections import Counter\nchar, count = Counter(s).most_common(1)[0]",
            "keywordsOrMethods": ["Counter", "most_common", "frequency", "character count"],
            "codeExample": """# Program to find the most occurring character and its count
from collections import Counter

def most_occurring_character(text):
    if not text:
        return None, 0
    # Filter out whitespace if desired, or count raw
    counts = Counter(text)
    most_char, count = counts.most_common(1)[0]
    return most_char, count

samples = [
    "hello world",
    "abracadabra",
    "play-code 2026 platform"
]

for s in samples:
    char, freq = most_occurring_character(s)
    print(f"Text: '{s}' -> Most occurring character: '{char}' (count: {freq})")
""",
            "expectedOutput": "",
            "resultExplanation": "In 'abracadabra', 'a' occurs 5 times, making it the most frequent character.",
            "notes": "Counter is implemented in C and runs in linear time.",
            "commonMistakes": "Using str.count(c) inside a loop over the string, causing O(n^2) runtime.",
            "timeComplexity": "O(n)",
            "spaceComplexity": "O(k) where k is distinct characters"
        },
        {
            "id": 79,
            "number": "079",
            "title": "Find sum of even factors of a number",
            "cleanTitle": "Find sum of even factors of a number",
            "category": "More Popular Python Programs",
            "introduction": "Calculates the sum of all divisors of n that are even numbers.",
            "explanation": "Finds all divisors up to sqrt(n). If a divisor is even, it is added to the sum; odd divisors are skipped.",
            "syntax": "sum(d for d in divisors(n) if d % 2 == 0)",
            "keywordsOrMethods": ["even factors", "sum of divisors", "parity", "number theory"],
            "codeExample": """# Program to find sum of even factors of a number
def sum_of_even_factors(n):
    if n % 2 != 0:
        return 0  # Odd numbers have no even factors
    
    total = 0
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            if i % 2 == 0:
                total += i
            paired = n // i
            if paired != i and paired % 2 == 0:
                total += paired
    return total

numbers = [24, 30, 18, 15]

for num in numbers:
    result = sum_of_even_factors(num)
    print(f"Number: {num:2d} | Sum of even factors: {result}")
""",
            "expectedOutput": "",
            "resultExplanation": "Factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. Even factors are 2+4+6+8+12+24 = 56. 15 is odd, sum is 0.",
            "notes": "Odd numbers have only odd factors, so their sum of even factors is immediately 0.",
            "commonMistakes": "Iterating up to n when checking up to sqrt(n) with paired divisors is much faster.",
            "timeComplexity": "O(sqrt(n))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 80,
            "number": "080",
            "title": "Check if all digits of a number divide it",
            "cleanTitle": "Check if all digits of a number divide it",
            "category": "More Popular Python Programs",
            "introduction": "Verifies whether every non-zero digit in a number divides the number without remainder.",
            "explanation": "Iterates through each digit d. If d == '0', condition fails (division by zero); if n % int(d) != 0, condition fails.",
            "syntax": "all(int(d) != 0 and n % int(d) == 0 for d in str(n))",
            "keywordsOrMethods": ["digit divisibility", "self-dividing number", "modulo", "digits"],
            "codeExample": """# Program to check if all digits of a number divide it
def all_digits_divide(n):
    n_abs = abs(n)
    for ch in str(n_abs):
        digit = int(ch)
        # Cannot divide by zero
        if digit == 0 or n_abs % digit != 0:
            return False
    return True

test_nums = [128, 12, 120, 24, 23]

for num in test_nums:
    status = "YES (All digits divide it)" if all_digits_divide(num) else "NO"
    print(f"{num:3d} -> {status}")
""",
            "expectedOutput": "",
            "resultExplanation": "128 is divisible by 1, 2, and 8 (128/8=16). 120 contains digit 0 (cannot divide by 0). 23: 23 is not divisible by 2.",
            "notes": "Numbers containing '0' cannot be self-dividing due to division by zero.",
            "commonMistakes": "Not checking for digit == 0 before performing modulo %.",
            "timeComplexity": "O(d) digits",
            "spaceComplexity": "O(d)"
        },
        {
            "id": 81,
            "number": "081",
            "title": "Check whether a number has consecutive 0's in the given base or not",
            "cleanTitle": "Check whether a number has consecutive 0's in the given base or not",
            "category": "More Popular Python Programs",
            "introduction": "Converts an integer to a specified radix base (e.g. base 2, base 8) and checks if '00' appears consecutively.",
            "explanation": "Repeatedly extracts digits in base k; checks if two adjacent extracted digits are both 0.",
            "syntax": "def has_consecutive_zeros(n, base): ...\n'00' in base_str",
            "keywordsOrMethods": ["base conversion", "consecutive zeros", "radix", "number representation"],
            "codeExample": """# Program to check whether a number has consecutive 0's in a given base
def to_base(n, base):
    if n == 0:
        return "0"
    digits = []
    while n > 0:
        digits.append(str(n % base))
        n //= base
    return "".join(reversed(digits))

def has_consecutive_zeros(n, base):
    base_repr = to_base(n, base)
    return "00" in base_repr, base_repr

scenarios = [
    (4, 2),   # 4 in base 2 is '100' -> has '00'
    (5, 2),   # 5 in base 2 is '101' -> no '00'
    (15, 8),  # 15 in base 8 is '17' -> no '00'
    (16, 4)   # 16 in base 4 is '100' -> has '00'
]

for n, b in scenarios:
    has_zeros, repr_str = has_consecutive_zeros(n, b)
    print(f"Num: {n:2d} in base {b} = '{repr_str:<5}' -> Has consecutive 0's? {has_zeros}")
""",
            "expectedOutput": "",
            "resultExplanation": "4 in base 2 is '100' which has consecutive 0's ('00'). 5 in base 2 is '101' without consecutive 0's.",
            "notes": "Repeated division by base extracts digits in reverse order.",
            "commonMistakes": "Forgetting that n = 0 produces a valid '0'.",
            "timeComplexity": "O(log_base(n))",
            "spaceComplexity": "O(log_base(n))"
        },
        {
            "id": 82,
            "number": "082",
            "title": "Number of solutions to Modular Equations",
            "cleanTitle": "Number of solutions to Modular Equations",
            "category": "More Popular Python Programs",
            "introduction": "Finds the number of positive integer solutions x for the modular equation a % x = b.",
            "explanation": "a % x = b means a = k*x + b, so x must divide (a - b) with the condition that x > b.",
            "syntax": "diff = a - b\ncount = sum(1 for d in divisors(diff) if d > b)",
            "keywordsOrMethods": ["modular equation", "divisors", "modulo arithmetic", "number of solutions"],
            "codeExample": """# Program to find number of solutions to modular equation: a % x = b
def count_solutions_modular_eq(a, b):
    # a % x = b
    if a == b:
        return "Infinite solutions (any x > a)"
    if a < b:
        return 0  # a % x can never be greater than a

    diff = a - b
    count = 0
    for i in range(1, int(diff**0.5) + 1):
        if diff % i == 0:
            if i > b:
                count += 1
            paired = diff // i
            if paired != i and paired > b:
                count += 1
    return count

equations = [
    (26, 2),  # diff = 24, divisors > 2: 3, 4, 6, 8, 12, 24 -> 6 solutions
    (21, 5),  # diff = 16, divisors > 5: 8, 16 -> 2 solutions
    (10, 10), # a == b -> infinite
    (5, 8)    # a < b -> 0
]

for a, b in equations:
    solutions = count_solutions_modular_eq(a, b)
    print(f"Equation {a} % x = {b:2d} -> Solutions count: {solutions}")
""",
            "expectedOutput": "",
            "resultExplanation": "For 26 % x = 2: (26 - 2) = 24. Divisors of 24 strictly greater than 2 are 3, 4, 6, 8, 12, 24 (6 solutions).",
            "notes": "x must be strictly greater than b because the remainder in modulo arithmetic is always < divisor.",
            "commonMistakes": "Counting divisors of (a - b) that are <= b.",
            "timeComplexity": "O(sqrt(a - b))",
            "spaceComplexity": "O(1)"
        },
        {
            "id": 83,
            "number": "083",
            "title": "Legendre's Conjecture",
            "cleanTitle": "Legendre's Conjecture",
            "category": "More Popular Python Programs",
            "introduction": "States that there is always at least one prime number between n^2 and (n + 1)^2 for every positive integer n.",
            "explanation": "Tests Legendre's conjecture for given values of n by finding and verifying all primes within the interval [n^2, (n + 1)^2].",
            "syntax": "primes = [p for p in range(n**2, (n + 1)**2 + 1) if is_prime(p)]",
            "keywordsOrMethods": ["Legendre's conjecture", "prime distribution", "intervals", "number theory"],
            "codeExample": """# Program to verify Legendre's Conjecture for given values of n
def is_prime(num):
    if num <= 1: return False
    if num <= 3: return True
    if num % 2 == 0 or num % 3 == 0: return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0: return False
        i += 6
    return True

def verify_legendre_conjecture(n):
    lower = n ** 2
    upper = (n + 1) ** 2
    primes = [p for p in range(lower, upper + 1) if is_prime(p)]
    return lower, upper, primes

for n in range(1, 6):
    low, up, primes_found = verify_legendre_conjecture(n)
    print(f"n = {n} | [{n}^2, ({n}+1)^2] = [{low:2d}, {up:2d}] -> Primes found: {primes_found} (Holds: {len(primes_found) > 0})")
""",
            "expectedOutput": "",
            "resultExplanation": "For n=1..5, primes exist in every interval: [1,4] has 2,3; [4,9] has 5,7; [9,16] has 11,13; [16,25] has 17,19,23.",
            "notes": "Legendre's conjecture is one of Landau's problems and remains an active subject in prime number theory.",
            "commonMistakes": "Testing open interval instead of closed interval [n^2, (n+1)^2].",
            "timeComplexity": "O(n * sqrt(n^2)) = O(n^2)",
            "spaceComplexity": "O(k) where k is primes in interval"
        }
    ]
    return lessons
