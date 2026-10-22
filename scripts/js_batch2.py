# scripts/js_batch2.py: Lessons 51 to 100
def get_batch2():
    b = []

    # 51. Rest Parameters
    b.append({
        "id": 51, "number": "051", "title": "Rest Parameters", "category": "Functions & Scope",
        "introduction": "Rest parameters (...args) capture an indefinite number of arguments as a real Array instance.",
        "explanation": "Introduced in ES6, rest syntax collects remaining arguments into a true Array, allowing full use of array methods like map, filter, and reduce. Must be the last parameter in the function declaration.",
        "syntax": "function sumAll(...numbers) {\n  return numbers.reduce((acc, curr) => acc + curr, 0);\n}",
        "keywordsOrMethods": ["...rest", "variadic functions", "Array instance"],
        "codeExample": "function calculateTotal(taxRate, ...prices) {\n  const subtotal = prices.reduce((acc, p) => acc + p, 0);\n  const tax = subtotal * taxRate;\n  return (subtotal + tax).toFixed(2);\n}\nconsole.log('Total with 10% tax:', calculateTotal(0.10, 25, 45, 10));",
        "htmlExample": "<div class=\"demo-box\">Rest parameters collect multiple arguments cleanly.</div>",
        "expectedOutput": "> Total with 10% tax: 88.00",
        "notes": "Rest parameters completely replace the legacy array-like 'arguments' object.",
        "commonMistakes": "Placing another parameter after the rest parameter: function(a, ...b, c) causes a SyntaxError."
    })

    # 52. Return Values in Function
    b.append({
        "id": 52, "number": "052", "title": "Return Values in Function", "category": "Functions & Scope",
        "introduction": "The return statement specifies the value returned from a function and halts its execution.",
        "explanation": "When return is executed, the function immediately terminates and passes the calculated expression back to the caller. Functions without an explicit return statement return undefined by default.",
        "syntax": "function add(a, b) {\n  return a + b;\n}",
        "keywordsOrMethods": ["return", "early return", "undefined default"],
        "codeExample": "function validateAge(age) {\n  if (age < 0) return 'Invalid age';\n  if (age < 18) return 'Minor';\n  return 'Adult';\n}\nconsole.log(validateAge(22));\nconsole.log(validateAge(-5));",
        "htmlExample": "<div class=\"demo-box\">Return statements send output back to the calling scope.</div>",
        "expectedOutput": "> Adult\n> Invalid age",
        "notes": "Using 'guard clauses' with early returns prevents deeply nested if statements.",
        "commonMistakes": "Placing statements after a return line; they become unreachable dead code."
    })

    # 53. Immediately Invoked Function Expression (IIFE)
    b.append({
        "id": 53, "number": "053", "title": "Immediately Invoked Function Expression (IIFE)", "category": "Functions & Scope",
        "introduction": "An IIFE is a function that runs immediately after it is defined, creating a private scope.",
        "explanation": "Wrapped in grouping parentheses and executed right away with (). Prior to ES6 block scoping, IIFEs were the primary mechanism for isolating variables and avoiding polluting the global namespace.",
        "syntax": "(function() {\n  // private scope\n})();",
        "keywordsOrMethods": ["IIFE", "private scope", "(function(){})()"],
        "codeExample": "const counterModule = (function() {\n  let privateCount = 0;\n  return {\n    increment: () => ++privateCount,\n    getCount: () => privateCount\n  };\n})();\ncounterModule.increment();\ncounterModule.increment();\nconsole.log('Count:', counterModule.getCount());",
        "htmlExample": "<div class=\"demo-box\">IIFE encapsulates private state.</div>",
        "expectedOutput": "> Count: 2",
        "notes": "With modern ES6 modules, IIFEs are less common for modules but remain useful in build tools and initialization scripts.",
        "commonMistakes": "Missing the outer wrapping parentheses (function(){})(), causing a syntax error."
    })

    # 54. Callback Functions
    b.append({
        "id": 54, "number": "054", "title": "Callback Functions", "category": "Functions & Scope",
        "introduction": "A callback function is a function passed as an argument to another function to be executed later.",
        "explanation": "In JavaScript, functions are first-class citizens. Callbacks enable asynchronous programming, event handling, and functional operations like array filtering.",
        "syntax": "function processData(data, callback) {\n  callback(data);\n}",
        "keywordsOrMethods": ["callback", "higher-order", "first-class"],
        "codeExample": "function processUser(name, callback) {\n  console.log(`Processing ${name}...`);\n  callback(name.toUpperCase());\n}\nprocessUser('nasa-kun', result => {\n  console.log(`Callback executed with: ${result}`);\n});",
        "htmlExample": "<div class=\"demo-box\">Callbacks permit asynchronous task chaining.</div>",
        "expectedOutput": "> Processing nasa-kun...\n> Callback executed with: NASA-KUN",
        "notes": "Deeply nested callbacks are known as 'callback hell' or the 'pyramid of doom', solved by Promises and async/await.",
        "commonMistakes": "Accidentally invoking the callback when passing it: fn(callback()) instead of fn(callback)."
    })

    # 55. Higher-Order Functions
    b.append({
        "id": 55, "number": "055", "title": "Higher-Order Functions", "category": "Functions & Scope",
        "introduction": "A higher-order function is a function that accepts other functions as arguments and/or returns a function.",
        "explanation": "Core foundation of functional programming. Higher-order functions allow abstraction of actions, function composition, currying, and memoization.",
        "syntax": "const multiplier = factor => number => number * factor;",
        "keywordsOrMethods": ["higher-order function", "currying", "composition"],
        "codeExample": "function createMultiplier(multiplier) {\n  return function(num) {\n    return num * multiplier;\n  };\n}\nconst triple = createMultiplier(3);\nconsole.log('3 * 10 =', triple(10));\nconsole.log('3 * 7 =', triple(7));",
        "htmlExample": "<div class=\"demo-box\">Higher-order functions create reusable function factories.</div>",
        "expectedOutput": "> 3 * 10 = 30\n> 3 * 7 = 21",
        "notes": "Built-in Array methods (map, filter, reduce) are classic higher-order functions.",
        "commonMistakes": "Confusing the inner returned function's parameters with the outer function's parameters."
    })

    # 56. Closures
    b.append({
        "id": 56, "number": "056", "title": "Closures", "category": "Functions & Scope",
        "introduction": "A closure is the combination of a function bundled together with references to its surrounding lexical state.",
        "explanation": "A closure gives an inner function access to an outer function's scope even after the outer function has finished executing and returned. Essential for data privacy and stateful factories.",
        "syntax": "function outer() {\n  let secret = 42;\n  return function inner() {\n    return secret;\n  };\n}",
        "keywordsOrMethods": ["closure", "lexical scope", "data privacy"],
        "codeExample": "function createBankAccount(initialBalance) {\n  let balance = initialBalance;\n  return {\n    deposit: amount => { balance += amount; console.log(`Deposited $${amount}. Balance: $${balance}`); },\n    getBalance: () => balance\n  };\n}\nconst account = createBankAccount(100);\naccount.deposit(50);\nconsole.log('Final verified balance:', account.getBalance());",
        "htmlExample": "<div class=\"demo-box\">Closures maintain access to private lexical variables.</div>",
        "expectedOutput": "> Deposited $50. Balance: $150\n> Final verified balance: 150",
        "notes": "Closures retain references to outer variables in memory, so avoid unnecessarily retaining large objects.",
        "commonMistakes": "Assuming a new closure shares variables with other independent instances of the outer function."
    })

    # 57. Creating Arrays
    b.append({
        "id": 57, "number": "057", "title": "Creating Arrays", "category": "Arrays & Methods",
        "introduction": "Arrays are ordered list-like objects used to store multiple values in a single variable.",
        "explanation": "Created using array literal syntax [] or the Array constructor new Array(). Array literals are preferred for simplicity and performance.",
        "syntax": "const arr = [item1, item2];\nconst arr2 = new Array(length);",
        "keywordsOrMethods": ["[]", "Array()", "Array.of()", "Array.from()"],
        "codeExample": "const fruits = ['Apple', 'Banana', 'Cherry'];\nconsole.log('Fruits count:', fruits.length);\nconst numbers = Array.from({ length: 4 }, (_, i) => (i + 1) * 10);\nconsole.log('Generated array:', numbers);",
        "htmlExample": "<div class=\"demo-box\">Arrays store ordered collections of elements.</div>",
        "expectedOutput": "> Fruits count: 3\n> Generated array: [10,20,30,40]",
        "notes": "JavaScript arrays are dynamically sized and can hold mixed data types.",
        "commonMistakes": "new Array(5) creates an array with 5 empty slots, not an array containing the number 5."
    })

    # 58. Accessing Array Elements
    b.append({
        "id": 58, "number": "058", "title": "Accessing Array Elements", "category": "Arrays & Methods",
        "introduction": "Array elements are accessed using zero-based bracket notation arr[index] or arr.at(index).",
        "explanation": "The first element is at index 0, and the last is at arr.length - 1. The modern at() method supports negative indexes to count from the end.",
        "syntax": "const first = arr[0];\nconst last = arr.at(-1);",
        "keywordsOrMethods": ["arr[index]", "arr.at()", "zero-indexed"],
        "codeExample": "const items = ['HTML', 'CSS', 'JavaScript'];\nconsole.log('First element:', items[0]);\nconsole.log('Last element via at(-1):', items.at(-1));\nconsole.log('Out of bounds index:', items[99]); // undefined",
        "htmlExample": "<div class=\"demo-box\">Array indexes begin at 0.</div>",
        "expectedOutput": "> First element: HTML\n> Last element via at(-1): JavaScript\n> Out of bounds index: undefined",
        "notes": "arr.at(-1) is cleaner and less error-prone than arr[arr.length - 1].",
        "commonMistakes": "Using 1-based indexing and missing the first item (arr[1] is the second element)."
    })

    # 59. Modifying Array Elements
    b.append({
        "id": 59, "number": "059", "title": "Modifying Array Elements", "category": "Arrays & Methods",
        "introduction": "Array elements are mutable and can be updated by assigning a new value to a specific index.",
        "explanation": "Assigning to an existing index replaces that item. Assigning to an index beyond the current length extends the array and creates 'empty' sparse slots.",
        "syntax": "arr[index] = newValue;",
        "keywordsOrMethods": ["index assignment", "mutation", "sparse array"],
        "codeExample": "const scores = [80, 85, 90];\nscores[1] = 95; // Update second item\nconsole.log('Updated scores:', scores);\nscores.push(100);\nconsole.log('After push:', scores);",
        "htmlExample": "<div class=\"demo-box\">Arrays are mutable even when declared with const.</div>",
        "expectedOutput": "> Updated scores: [80,95,90]\n> After push: [80,95,90,100]",
        "notes": "Even if declared with 'const', array contents can be modified; only the variable binding itself is protected.",
        "commonMistakes": "Accidentally assigning to an index like arr[100] on a small array, creating holes in the array."
    })

    # 60. push() Method
    b.append({
        "id": 60, "number": "060", "title": "push() Method", "category": "Arrays & Methods",
        "introduction": "push() appends one or more elements to the end of an array and returns the new length.",
        "explanation": "Mutates the original array in place by adding elements to the tail. It is an O(1) constant-time operation in modern engines.",
        "syntax": "const newLength = arr.push(item1, item2);",
        "keywordsOrMethods": ["push()", "stack append", "mutator"],
        "codeExample": "const tasks = ['Design layout', 'Draft content'];\nconst newLen = tasks.push('Write JavaScript');\nconsole.log('Tasks array:', tasks);\nconsole.log('New length returned:', newLen);",
        "htmlExample": "<div class=\"demo-box\">push adds items to the tail of the array.</div>",
        "expectedOutput": "> Tasks array: [\"Design layout\",\"Draft content\",\"Write JavaScript\"]\n> New length returned: 3",
        "notes": "To push without mutating, use the spread operator: const updated = [...arr, newItem].",
        "commonMistakes": "Expecting push() to return the updated array instead of its new length integer."
    })

    # 61. pop() Method
    b.append({
        "id": 61, "number": "061", "title": "pop() Method", "category": "Arrays & Methods",
        "introduction": "pop() removes the last element from an array and returns that element.",
        "explanation": "Mutates the array by shrinking its length by 1. If called on an empty array, it returns undefined.",
        "syntax": "const removedItem = arr.pop();",
        "keywordsOrMethods": ["pop()", "stack removal", "tail remove"],
        "codeExample": "const stack = ['Page 1', 'Page 2', 'Page 3'];\nconst popped = stack.pop();\nconsole.log('Popped element:', popped);\nconsole.log('Remaining stack:', stack);",
        "htmlExample": "<div class=\"demo-box\">pop removes and returns the last element.</div>",
        "expectedOutput": "> Popped element: Page 3\n> Remaining stack: [\"Page 1\",\"Page 2\"]",
        "notes": "Combined with push(), arrays can implement a Last-In-First-Out (LIFO) stack data structure.",
        "commonMistakes": "Calling pop() when you need to remove the first element (use shift() instead)."
    })

    # 62. shift() Method
    b.append({
        "id": 62, "number": "062", "title": "shift() Method", "category": "Arrays & Methods",
        "introduction": "shift() removes the first element from an array and returns that removed element.",
        "explanation": "Mutates the array. All subsequent elements are shifted down by one index position. It has O(n) performance because all remaining elements are re-indexed.",
        "syntax": "const firstItem = arr.shift();",
        "keywordsOrMethods": ["shift()", "queue dequeue", "head remove"],
        "codeExample": "const queue = ['Customer A', 'Customer B', 'Customer C'];\nconst served = queue.shift();\nconsole.log('Served customer:', served);\nconsole.log('Remaining queue:', queue);",
        "htmlExample": "<div class=\"demo-box\">shift removes elements from the head of the array.</div>",
        "expectedOutput": "> Served customer: Customer A\n> Remaining queue: [\"Customer B\",\"Customer C\"]",
        "notes": "Combined with push(), arrays can implement a First-In-First-Out (FIFO) queue.",
        "commonMistakes": "Calling shift() on very large arrays inside tight loops; re-indexing can be slow."
    })

    # 63. unshift() Method
    b.append({
        "id": 63, "number": "063", "title": "unshift() Method", "category": "Arrays & Methods",
        "introduction": "unshift() adds one or more elements to the beginning of an array and returns the new length.",
        "explanation": "Mutates the array in place by inserting elements at index 0 and sliding all existing elements to higher indices.",
        "syntax": "const newLen = arr.unshift(item1, item2);",
        "keywordsOrMethods": ["unshift()", "prepend", "mutator"],
        "codeExample": "const priorityQueue = ['Normal Task'];\npriorityQueue.unshift('Emergency Fix');\nconsole.log('Updated queue:', priorityQueue);",
        "htmlExample": "<div class=\"demo-box\">unshift prepends elements to the start of an array.</div>",
        "expectedOutput": "> Updated queue: [\"Emergency Fix\",\"Normal Task\"]",
        "notes": "Returns the new length of the array after insertion.",
        "commonMistakes": "Passing an array to unshift expecting it to flatten (use unshift(...arr) to spread)."
    })

    # 64. splice() Method
    b.append({
        "id": 64, "number": "064", "title": "splice() Method", "category": "Arrays & Methods",
        "introduction": "splice() changes the contents of an array by removing, replacing, or adding elements in place.",
        "explanation": "splice(startIndex, deleteCount, item1, item2, ...) mutates the original array and returns an array containing any deleted elements.",
        "syntax": "arr.splice(start, deleteCount, ...itemsToAdd);",
        "keywordsOrMethods": ["splice()", "in-place mutation", "delete/insert"],
        "codeExample": "const months = ['Jan', 'March', 'April'];\nmonths.splice(1, 0, 'Feb'); // Insert at index 1 without deleting\nconsole.log('After insert:', months);\nconst removed = months.splice(2, 1); // Delete 1 item at index 2\nconsole.log('Removed:', removed);\nconsole.log('Final array:', months);",
        "htmlExample": "<div class=\"demo-box\">splice alters array elements anywhere in the list.</div>",
        "expectedOutput": "> After insert: [\"Jan\",\"Feb\",\"March\",\"April\"]\n> Removed: [\"March\"]\n> Final array: [\"Jan\",\"Feb\",\"April\"]",
        "notes": "To avoid mutating the original array, use the modern toSpliced() method introduced in ES2023.",
        "commonMistakes": "Confusing splice() (mutating) with slice() (non-mutating)."
    })

    # 65. slice() Method
    b.append({
        "id": 65, "number": "065", "title": "slice() Method", "category": "Arrays & Methods",
        "introduction": "slice() returns a shallow copy of a portion of an array into a new array object.",
        "explanation": "slice(start, end) extracts elements from the 'start' index up to, but not including, the 'end' index. The original array is never modified.",
        "syntax": "const copy = arr.slice(start, end);",
        "keywordsOrMethods": ["slice()", "shallow copy", "non-mutating"],
        "codeExample": "const animals = ['Ant', 'Bison', 'Camel', 'Duck', 'Elephant'];\nconst sliced = animals.slice(1, 4);\nconsole.log('Extracted slice (1 to 4):', sliced);\nconsole.log('Original array unchanged:', animals);",
        "htmlExample": "<div class=\"demo-box\">slice safely copies sub-arrays without mutation.</div>",
        "expectedOutput": "> Extracted slice (1 to 4): [\"Bison\",\"Camel\",\"Duck\"]\n> Original array unchanged: [\"Ant\",\"Bison\",\"Camel\",\"Duck\",\"Elephant\"]",
        "notes": "arr.slice() with no arguments creates a shallow clone of the entire array.",
        "commonMistakes": "Expecting slice(1, 3) to include index 3; the end index is exclusive."
    })

    # 66. concat() Method
    b.append({
        "id": 66, "number": "066", "title": "concat() Method", "category": "Arrays & Methods",
        "introduction": "concat() merges two or more arrays and returns a new combined array.",
        "explanation": "Does not alter the calling arrays or any argument arrays; it produces a new combined array containing shallow copies of all elements.",
        "syntax": "const combined = arr1.concat(arr2, arr3);",
        "keywordsOrMethods": ["concat()", "array merge", "immutable"],
        "codeExample": "const teamAlpha = ['Alice', 'Bob'];\nconst teamBeta = ['Charlie', 'Dana'];\nconst allMembers = teamAlpha.concat(teamBeta);\nconsole.log('Combined roster:', allMembers);",
        "htmlExample": "<div class=\"demo-box\">concat merges arrays cleanly without side effects.</div>",
        "expectedOutput": "> Combined roster: [\"Alice\",\"Bob\",\"Charlie\",\"Dana\"]",
        "notes": "The spread operator [...arr1, ...arr2] is widely used as a modern alternative.",
        "commonMistakes": "Thinking concat() mutates the original array in place (it returns a new one)."
    })

    # 67. map() Method
    b.append({
        "id": 67, "number": "067", "title": "map() Method", "category": "Arrays & Methods",
        "introduction": "map() creates a new array populated with the results of calling a provided function on every element.",
        "explanation": "A foundational method in functional programming. Transforms an array of length N into a new array of length N without mutating the original array.",
        "syntax": "const newArr = arr.map((item, index) => transform(item));",
        "keywordsOrMethods": ["map()", "functional transformation", "immutable"],
        "codeExample": "const pricesUSD = [10, 25, 50];\nconst pricesEUR = pricesUSD.map(p => (p * 0.92).toFixed(2));\nconsole.log('EUR Prices:', pricesEUR);",
        "htmlExample": "<div class=\"demo-box\">map transforms array elements into a new array.</div>",
        "expectedOutput": "> EUR Prices: [\"9.20\",\"23.00\",\"46.00\"]",
        "notes": "Never use map if you do not use the returned array; use forEach or for...of instead.",
        "commonMistakes": "Forgetting to return a value from the callback, resulting in an array of undefined."
    })

    # 68. filter() Method
    b.append({
        "id": 68, "number": "068", "title": "filter() Method", "category": "Arrays & Methods",
        "introduction": "filter() creates a shallow copy of a portion of an array matching a test condition.",
        "explanation": "Calls a predicate callback function on each element. If the callback returns truthy, the element is included in the new array; if falsy, it is excluded.",
        "syntax": "const filtered = arr.filter(item => predicate(item));",
        "keywordsOrMethods": ["filter()", "predicate", "selection"],
        "codeExample": "const scores = [45, 82, 90, 63, 98, 71];\nconst honorRoll = scores.filter(s => s >= 85);\nconsole.log('High scores:', honorRoll);",
        "htmlExample": "<div class=\"demo-box\">filter keeps only items that pass the truth test.</div>",
        "expectedOutput": "> High scores: [82,90,98]",
        "notes": "Does not mutate the original array.",
        "commonMistakes": "Returning a transformed value instead of a boolean truth test in the callback."
    })

    # 69. reduce() Method
    b.append({
        "id": 69, "number": "069", "title": "reduce() Method", "category": "Arrays & Methods",
        "introduction": "reduce() executes a reducer function on each element, resulting in a single output value.",
        "explanation": "Iterates over the array, passing an accumulator value from one step to the next. Can produce a single number, string, object, or flattened array.",
        "syntax": "arr.reduce((accumulator, currentValue) => acc + curr, initialValue);",
        "keywordsOrMethods": ["reduce()", "accumulator", "aggregation"],
        "codeExample": "const expenses = [12.50, 4.00, 23.75, 9.99];\nconst total = expenses.reduce((sum, item) => sum + item, 0);\nconsole.log('Total expenses:', total.toFixed(2));",
        "htmlExample": "<div class=\"demo-box\">reduce collapses an array into a single accumulated value.</div>",
        "expectedOutput": "> Total expenses: 50.24",
        "notes": "Always provide an initialValue argument to prevent errors when reducing empty arrays.",
        "commonMistakes": "Omitting the initialValue argument when reducing arrays of objects."
    })

    # 70. forEach() Method
    b.append({
        "id": 70, "number": "070", "title": "forEach() Method", "category": "Arrays & Methods",
        "introduction": "forEach() executes a provided callback function once for each array element.",
        "explanation": "Used strictly for performing side effects (logging, writing to DOM, mutating external state). Always returns undefined.",
        "syntax": "arr.forEach((item, index) => { ... });",
        "keywordsOrMethods": ["forEach()", "iteration", "side effects"],
        "codeExample": "const lessons = ['HTML', 'CSS', 'JavaScript'];\nlessons.forEach((name, i) => {\n  console.log(`Track #${i + 1}: ${name}`);\n});",
        "htmlExample": "<div class=\"demo-box\">forEach executes side effects per element.</div>",
        "expectedOutput": "> Track #1: HTML\n> Track #2: CSS\n> Track #3: JavaScript",
        "notes": "Unlike a for loop, forEach does not support breaking or continuing early.",
        "commonMistakes": "Chaining methods after forEach: arr.forEach(...).filter(...) throws an error since forEach returns undefined."
    })

    # 71. find() Method
    b.append({
        "id": 71, "number": "071", "title": "find() Method", "category": "Arrays & Methods",
        "introduction": "find() returns the first element in an array that satisfies a provided testing function.",
        "explanation": "Iterates from index 0 until the callback returns a truthy value, immediately returning that element. If no element satisfies the test, it returns undefined.",
        "syntax": "const found = arr.find(item => condition(item));",
        "keywordsOrMethods": ["find()", "first match", "search"],
        "codeExample": "const users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n  { id: 3, name: 'Charlie' }\n];\nconst match = users.find(u => u.id === 2);\nconsole.log('Found user:', match);",
        "htmlExample": "<div class=\"demo-box\">find retrieves the first element matching a predicate.</div>",
        "expectedOutput": "> Found user: {\"id\":2,\"name\":\"Bob\"}",
        "notes": "find stops searching as soon as a match is discovered, optimizing performance.",
        "commonMistakes": "Expecting find() to return an array of all matches (use filter() for all matches)."
    })

    # 72. findIndex() Method
    b.append({
        "id": 72, "number": "072", "title": "findIndex() Method", "category": "Arrays & Methods",
        "introduction": "findIndex() returns the index of the first element that satisfies the provided test, or -1.",
        "explanation": "Similar to find(), but returns the numeric index rather than the item itself. If no element satisfies the test, it returns -1.",
        "syntax": "const index = arr.findIndex(item => condition(item));",
        "keywordsOrMethods": ["findIndex()", "index search", "-1 if not found"],
        "codeExample": "const temperatures = [18, 22, 31, 25];\nconst hotDayIndex = temperatures.findIndex(t => t >= 30);\nconsole.log('First hot day index:', hotDayIndex);",
        "htmlExample": "<div class=\"demo-box\">findIndex returns the integer index of the matching element.</div>",
        "expectedOutput": "> First hot day index: 2",
        "notes": "Use findIndex when you need the index for updating with splice().",
        "commonMistakes": "Checking 'if (arr.findIndex(...))' — remember that index 0 is falsy, so check !== -1."
    })

    # 73. indexOf() Method
    b.append({
        "id": 73, "number": "073", "title": "indexOf() Method", "category": "Arrays & Methods",
        "introduction": "indexOf() returns the first index at which a given element can be found, or -1 if not present.",
        "explanation": "Uses strict equality (===) to compare values. Best suited for arrays of primitives (strings, numbers).",
        "syntax": "const idx = arr.indexOf(searchElement, fromIndex);",
        "keywordsOrMethods": ["indexOf()", "primitive search", "=== equality"],
        "codeExample": "const tools = ['Editor', 'Terminal', 'Debugger', 'Terminal'];\nconsole.log('First Terminal index:', tools.indexOf('Terminal'));\nconsole.log('Missing tool index:', tools.indexOf('Compiler'));",
        "htmlExample": "<div class=\"demo-box\">indexOf locates exact primitive matches.</div>",
        "expectedOutput": "> First Terminal index: 1\n> Missing tool index: -1",
        "notes": "indexOf cannot find NaN because NaN === NaN is false. Use includes() for NaN checks.",
        "commonMistakes": "Using indexOf on arrays of objects: [{id:1}].indexOf({id:1}) returns -1 because objects are compared by reference."
    })

    # 74. includes() Method
    b.append({
        "id": 74, "number": "074", "title": "includes() Method", "category": "Arrays & Methods",
        "introduction": "includes() determines whether an array includes a certain value, returning true or false.",
        "explanation": "Introduced in ES2016, includes() provides an intuitive boolean check for presence, correctly handling NaN.",
        "syntax": "const hasItem = arr.includes(valueToFind);",
        "keywordsOrMethods": ["includes()", "boolean membership", "ES2016"],
        "codeExample": "const roles = ['admin', 'editor', 'subscriber'];\nconsole.log('Is admin allowed?', roles.includes('admin'));\nconsole.log('Is guest allowed?', roles.includes('guest'));",
        "htmlExample": "<div class=\"demo-box\">includes checks membership returning true or false.</div>",
        "expectedOutput": "> Is admin allowed? true\n> Is guest allowed? false",
        "notes": "Replaces the clunky pattern 'arr.indexOf(item) !== -1'.",
        "commonMistakes": "Using includes() with objects without passing the identical object reference."
    })

    # 75. some() Method
    b.append({
        "id": 75, "number": "075", "title": "some() Method", "category": "Arrays & Methods",
        "introduction": "some() tests whether at least one element in the array passes the condition.",
        "explanation": "Executes the callback until it finds a truthy return value, then immediately returns true. If none pass, it returns false.",
        "syntax": "const hasAny = arr.some(item => condition(item));",
        "keywordsOrMethods": ["some()", "existential check", "short-circuit"],
        "codeExample": "const tasks = [\n  { title: 'Task 1', completed: true },\n  { title: 'Task 2', completed: false }\n];\nconst hasIncomplete = tasks.some(t => !t.completed);\nconsole.log('Are there incomplete tasks?', hasIncomplete);",
        "htmlExample": "<div class=\"demo-box\">some returns true if any element passes the test.</div>",
        "expectedOutput": "> Are there incomplete tasks? true",
        "notes": "Calling some() on an empty array always returns false.",
        "commonMistakes": "Expecting some() to return the matching item rather than a boolean."
    })

    # 76. every() Method
    b.append({
        "id": 76, "number": "076", "title": "every() Method", "category": "Arrays & Methods",
        "introduction": "every() tests whether all elements in the array pass the provided test condition.",
        "explanation": "Returns true if the callback returns truthy for all elements. If any element fails, it immediately short-circuits and returns false.",
        "syntax": "const allPassed = arr.every(item => condition(item));",
        "keywordsOrMethods": ["every()", "universal check", "short-circuit"],
        "codeExample": "const ages = [21, 25, 30, 19];\nconst allAdults = ages.every(age => age >= 18);\nconsole.log('Are all participants adults?', allAdults);",
        "htmlExample": "<div class=\"demo-box\">every checks that all elements meet criteria.</div>",
        "expectedOutput": "> Are all participants adults? true",
        "notes": "Calling every() on an empty array returns true (vacuous truth in formal logic).",
        "commonMistakes": "Assuming every() returns false on empty arrays."
    })

    # 77. sort() Method
    b.append({
        "id": 77, "number": "077", "title": "sort() Method", "category": "Arrays & Methods",
        "introduction": "sort() sorts the elements of an array in place and returns the sorted array.",
        "explanation": "By default, sort() converts elements into strings and compares UTF-16 code units. For numeric sorting, you must supply a comparator function (a, b) => a - b.",
        "syntax": "arr.sort((a, b) => a - b);",
        "keywordsOrMethods": ["sort()", "comparator", "in-place sort"],
        "codeExample": "const scores = [100, 25, 5, 80];\n// Default string sort would order 100 before 25!\nscores.sort((a, b) => a - b);\nconsole.log('Ascending numeric sort:', scores);",
        "htmlExample": "<div class=\"demo-box\">sort mutates arrays in place using a comparator function.</div>",
        "expectedOutput": "> Ascending numeric sort: [5,25,80,100]",
        "notes": "Use toSorted() in modern ES2023 to sort without mutating the original array.",
        "commonMistakes": "Sorting numbers without a comparator function: [10, 2, 1].sort() produces [1, 10, 2]!"
    })

    # 78. reverse() Method
    b.append({
        "id": 78, "number": "078", "title": "reverse() Method", "category": "Arrays & Methods",
        "introduction": "reverse() reverses an array in place, transposing elements.",
        "explanation": "The first array element becomes the last, and the last becomes the first. Mutates the original array and returns the reference.",
        "syntax": "arr.reverse();",
        "keywordsOrMethods": ["reverse()", "in-place reversal", "mutator"],
        "codeExample": "const steps = ['Step 1', 'Step 2', 'Step 3'];\nsteps.reverse();\nconsole.log('Reversed steps:', steps);",
        "htmlExample": "<div class=\"demo-box\">reverse inverts the order of array elements.</div>",
        "expectedOutput": "> Reversed steps: [\"Step 3\",\"Step 2\",\"Step 1\"]",
        "notes": "Use toReversed() in ES2023 to reverse without mutating.",
        "commonMistakes": "Assuming reverse() returns a copy without changing the original array."
    })

    # 79. join() Method
    b.append({
        "id": 79, "number": "079", "title": "join() Method", "category": "Arrays & Methods",
        "introduction": "join() creates and returns a new string by concatenating all elements in an array.",
        "explanation": "Elements are converted to strings and separated by a specified separator string (comma by default).",
        "syntax": "const str = arr.join(separator);",
        "keywordsOrMethods": ["join()", "array to string", "separator"],
        "codeExample": "const words = ['Learn', 'Code', 'Play'];\nconsole.log(words.join(' • '));\nconsole.log(words.join(''));",
        "htmlExample": "<div class=\"demo-box\">join flattens array elements into formatted text.</div>",
        "expectedOutput": "> Learn • Code • Play\n> LearnCodePlay",
        "notes": "undefined and null elements are converted into empty strings in the output.",
        "commonMistakes": "Forgetting the separator argument: words.join() uses commas by default ('Learn,Code,Play')."
    })

    # 80. split() Method
    b.append({
        "id": 80, "number": "080", "title": "split() Method", "category": "Arrays & Methods",
        "introduction": "split() divides a String into an ordered list of substrings and puts them into an array.",
        "explanation": "Takes a pattern (string or RegExp) describing where each split should occur. The inverse operation of Array.prototype.join().",
        "syntax": "const arr = str.split(separator, limit);",
        "keywordsOrMethods": ["split()", "string to array", "delimiter"],
        "codeExample": "const tags = 'html,css,javascript,web';\nconst tagArray = tags.split(',');\nconsole.log('Parsed tags:', tagArray);",
        "htmlExample": "<div class=\"demo-box\">split breaks strings into array elements.</div>",
        "expectedOutput": "> Parsed tags: [\"html\",\"css\",\"javascript\",\"web\"]",
        "notes": "str.split('') splits into individual characters (though Array.from(str) is safer for unicode emojis).",
        "commonMistakes": "Calling split() on null or undefined variables (throws a TypeError)."
    })

    # 81. Introduction to OOP
    b.append({
        "id": 81, "number": "081", "title": "Introduction to OOP", "category": "Objects, Classes & OOP",
        "introduction": "Object-Oriented Programming (OOP) organizes code into objects combining data and behaviors.",
        "explanation": "OOP in JavaScript is prototype-based under the hood, but ES6 introduced the 'class' syntax for clear object blueprints. Core pillars include Encapsulation, Inheritance, Abstraction, and Polymorphism.",
        "syntax": "const car = {\n  brand: 'Tesla',\n  drive() { console.log('Driving...'); }\n};",
        "keywordsOrMethods": ["OOP", "object", "methods", "properties"],
        "codeExample": "const developer = {\n  name: 'NASA-YUZAKI',\n  role: 'Architect',\n  greet() {\n    return `Hello, I am ${this.name}, ${this.role}.`;\n  }\n};\nconsole.log(developer.greet());",
        "htmlExample": "<div class=\"demo-box\">OOP binds state and behavior into coherent units.</div>",
        "expectedOutput": "> Hello, I am NASA-YUZAKI, Architect.",
        "notes": "JavaScript objects are dynamic dictionaries of key-value pairs where values can be functions (methods).",
        "commonMistakes": "Losing 'this' context when passing object methods as standalone callbacks."
    })

    # 82. Classes in JavaScript
    b.append({
        "id": 82, "number": "082", "title": "Classes in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Classes serve as blueprints for creating objects with shared properties and methods.",
        "explanation": "Introduced in ES6, class syntax provides a clean, declarative alternative to prototype function constructors. Underneath, JavaScript classes remain prototype-based.",
        "syntax": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}",
        "keywordsOrMethods": ["class", "constructor", "prototype-based syntax"],
        "codeExample": "class Course {\n  constructor(name, lessonCount) {\n    this.name = name;\n    this.lessonCount = lessonCount;\n  }\n  getInfo() {\n    return `${this.name} contains ${this.lessonCount} lessons.`;\n  }\n}\nconst jsCourse = new Course('JavaScript', 230);\nconsole.log(jsCourse.getInfo());",
        "htmlExample": "<div class=\"demo-box\">Classes define reusable object structures.</div>",
        "expectedOutput": "> JavaScript contains 230 lessons.",
        "notes": "Classes in JavaScript are not hoisted like function declarations; they must be declared before instantiation.",
        "commonMistakes": "Invoking a class without the 'new' keyword: Course() throws a TypeError."
    })

    # 83. Creating Objects with Class
    b.append({
        "id": 83, "number": "083", "title": "Creating Objects with Class", "category": "Objects, Classes & OOP",
        "introduction": "The 'new' operator instantiates a class, allocating a new object and executing its constructor.",
        "explanation": "When 'new MyClass()' is called, JavaScript creates an empty object, sets its prototype to MyClass.prototype, binds 'this' to the new object, and executes the constructor.",
        "syntax": "const instance = new MyClass(arg1, arg2);",
        "keywordsOrMethods": ["new", "instance", "instantiation"],
        "codeExample": "class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n}\nconst p1 = new Product('Mechanical Keyboard', 89.99);\nconst p2 = new Product('Wireless Mouse', 49.99);\nconsole.log('Product 1:', p1.name, `$${p1.price}`);\nconsole.log('Product 2:', p2.name, `$${p2.price}`);",
        "htmlExample": "<div class=\"demo-box\">'new' creates independent instances of a class.</div>",
        "expectedOutput": "> Product 1: Mechanical Keyboard $89.99\n> Product 2: Wireless Mouse $49.99",
        "notes": "Each instance has its own property storage, but shares methods on the prototype.",
        "commonMistakes": "Forgetting 'new' when instantiating a class."
    })

    # 84. Constructor Method
    b.append({
        "id": 84, "number": "084", "title": "Constructor Method", "category": "Objects, Classes & OOP",
        "introduction": "The constructor method is a special function for creating and initializing objects created with a class.",
        "explanation": "A class can have only one method with the name 'constructor'. It automatically executes when 'new' is called and receives initialization arguments.",
        "syntax": "class Demo {\n  constructor(param) {\n    this.param = param;\n  }\n}",
        "keywordsOrMethods": ["constructor", "initialization", "single constructor"],
        "codeExample": "class Server {\n  constructor(host, port) {\n    this.host = host;\n    this.port = port;\n    this.status = 'initialized';\n    console.log(`Server configured for ${host}:${port}`);\n  }\n}\nconst srv = new Server('api.codeplay.dev', 443);",
        "htmlExample": "<div class=\"demo-box\">The constructor initializes properties on newly minted instances.</div>",
        "expectedOutput": "> Server configured for api.codeplay.dev:443",
        "notes": "If no constructor is defined, a default empty constructor is automatically provided.",
        "commonMistakes": "Defining multiple constructor methods in the same class (causes a SyntaxError)."
    })

    # 85. Class Properties
    b.append({
        "id": 85, "number": "085", "title": "Class Properties", "category": "Objects, Classes & OOP",
        "introduction": "Class properties define data fields held by instances, either declared in constructors or as public/private fields.",
        "explanation": "Modern JavaScript supports class field declarations directly inside the class body without needing constructor assignment. Private fields begin with a hash (#).",
        "syntax": "class Item {\n  category = 'Electronics'; // Public field\n  #secretCode = 'XYZ';      // Private field\n}",
        "keywordsOrMethods": ["public field", "private field #", "class properties"],
        "codeExample": "class Widget {\n  version = '1.0.0';\n  #id = Math.floor(Math.random() * 1000);\n  getId() {\n    return this.#id;\n  }\n}\nconst w = new Widget();\nconsole.log('Public version:', w.version);\nconsole.log('Private id via getter method:', typeof w.getId());",
        "htmlExample": "<div class=\"demo-box\">Class fields allow clean property definition directly in the class body.</div>",
        "expectedOutput": "> Public version: 1.0.0\n> Private id via getter method: number",
        "notes": "Private fields (#prop) cannot be accessed from outside the class body, enforcing true encapsulation.",
        "commonMistakes": "Attempting to access instance.#privateField from outside the class throws a SyntaxError."
    })

    # 86. Class Methods
    b.append({
        "id": 86, "number": "086", "title": "Class Methods", "category": "Objects, Classes & OOP",
        "introduction": "Class methods define functions shared across all instances of a class via its prototype.",
        "explanation": "Methods are declared inside the class body using concise method syntax. Because they are placed on the class's prototype, memory is conserved across thousands of instances.",
        "syntax": "class Calculator {\n  add(a, b) {\n    return a + b;\n  }\n}",
        "keywordsOrMethods": ["method syntax", "prototype sharing", "instance method"],
        "codeExample": "class UserProfile {\n  constructor(name) {\n    this.name = name;\n  }\n  display() {\n    return `User: ${this.name}`;\n  }\n}\nconst u1 = new UserProfile('Elena');\nconsole.log(u1.display());",
        "htmlExample": "<div class=\"demo-box\">Class methods are attached to the prototype.</div>",
        "expectedOutput": "> User: Elena",
        "notes": "Methods inside classes are automatically in strict mode.",
        "commonMistakes": "Adding commas between method declarations in a class (unlike object literals, commas are illegal here)."
    })

    # 87. Instance Methods vs Static Methods
    b.append({
        "id": 87, "number": "087", "title": "Instance Methods vs Static Methods", "category": "Objects, Classes & OOP",
        "introduction": "Instance methods operate on specific object instances; static methods belong to the class itself.",
        "explanation": "Static methods are prefixed with 'static'. They cannot access instance properties ('this' refers to the constructor class itself). Frequently used for utility functions and object factories.",
        "syntax": "class Tool {\n  static helper() {}\n  action() {}\n}",
        "keywordsOrMethods": ["static", "instance method", "utility class"],
        "codeExample": "class MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n  static multiply(a, b) {\n    return a * b;\n  }\n}\nconsole.log('Static add:', MathUtil.add(10, 20));\nconsole.log('Static multiply:', MathUtil.multiply(5, 6));",
        "htmlExample": "<div class=\"demo-box\">Static methods are invoked directly on the class name.</div>",
        "expectedOutput": "> Static add: 30\n> Static multiply: 30",
        "notes": "Math.max() and Array.from() are built-in examples of static methods.",
        "commonMistakes": "Attempting to call a static method from an instance: instance.staticMethod() fails with undefined function."
    })

    # 88. Encapsulation in JavaScript
    b.append({
        "id": 88, "number": "088", "title": "Encapsulation in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Encapsulation restricts direct access to an object's internal state, exposing controlled interfaces.",
        "explanation": "Encapsulation protects data integrity by preventing external code from corrupting internal values. Achieved via private class fields (#field) or closures.",
        "syntax": "class Account {\n  #balance = 0;\n  deposit(n) { if (n > 0) this.#balance += n; }\n}",
        "keywordsOrMethods": ["encapsulation", "#private", "data protection"],
        "codeExample": "class SecureVault {\n  #passcode = '1234';\n  unlock(code) {\n    if (code === this.#passcode) {\n      return 'Vault Unlocked!';\n    }\n    return 'Access Denied.';\n  }\n}\nconst vault = new SecureVault();\nconsole.log(vault.unlock('wrong'));\nconsole.log(vault.unlock('1234'));",
        "htmlExample": "<div class=\"demo-box\">Encapsulation hides internal implementation details.</div>",
        "expectedOutput": "> Access Denied.\n> Vault Unlocked!",
        "notes": "Prior to #private fields, developers prefixed properties with underscores (_prop) as a convention, but it was not truly private.",
        "commonMistakes": "Relying solely on naming conventions like _private without real language-level encapsulation."
    })

    # 89. Inheritance in JavaScript
    b.append({
        "id": 89, "number": "089", "title": "Inheritance in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Inheritance allows a class (child) to inherit properties and methods from another class (parent).",
        "explanation": "Created using the 'extends' keyword. The child class inherits all prototype methods and static methods of the parent class, promoting code reuse.",
        "syntax": "class Child extends Parent {\n  constructor() { super(); }\n}",
        "keywordsOrMethods": ["extends", "parent class", "inheritance"],
        "codeExample": "class Vehicle {\n  constructor(type) {\n    this.type = type;\n  }\n  start() {\n    return `${this.type} engine started.`;\n  }\n}\nclass Car extends Vehicle {\n  honk() {\n    return 'Beep beep!';\n  }\n}\nconst myCar = new Car('Sedan');\nconsole.log(myCar.start());\nconsole.log(myCar.honk());",
        "htmlExample": "<div class=\"demo-box\">Inheritance establishes 'is-a' relationships.</div>",
        "expectedOutput": "> Sedan engine started.\n> Beep beep!",
        "notes": "JavaScript supports single inheritance: a class can extend only one parent class.",
        "commonMistakes": "Trying to use multiple extends (e.g., class C extends A, B is invalid)."
    })

    # 90. Method Overriding
    b.append({
        "id": 90, "number": "090", "title": "Method Overriding", "category": "Objects, Classes & OOP",
        "introduction": "Method overriding allows a subclass to provide a specific implementation of a method defined in its superclass.",
        "explanation": "When a method in a child class shares the exact same name as a method in its parent class, the child's method overrides the parent version during dynamic dispatch.",
        "syntax": "class Child extends Parent {\n  speak() {\n    return 'Custom sound';\n  }\n}",
        "keywordsOrMethods": ["override", "polymorphic dispatch", "subclass method"],
        "codeExample": "class Animal {\n  speak() {\n    return 'Generic animal sound';\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return 'Woof woof!';\n  }\n}\nconst generic = new Animal();\nconst puppy = new Dog();\nconsole.log('Parent:', generic.speak());\nconsole.log('Overridden child:', puppy.speak());",
        "htmlExample": "<div class=\"demo-box\">Overriding provides specialized behavior in child classes.</div>",
        "expectedOutput": "> Parent: Generic animal sound\n> Overridden child: Woof woof!",
        "notes": "You can still invoke the parent's overridden method from the child using super.methodName().",
        "commonMistakes": "Overriding a method with an incompatible signature or return type."
    })

    # 91. Super Keyword
    b.append({
        "id": 91, "number": "091", "title": "Super Keyword", "category": "Objects, Classes & OOP",
        "introduction": "The super keyword is used to access and call functions on an object's parent class.",
        "explanation": "In a derived constructor, 'super(...args)' must be called before using 'this'. In methods, 'super.methodName()' invokes the parent class implementation.",
        "syntax": "constructor(name, extra) {\n  super(name);\n  this.extra = extra;\n}",
        "keywordsOrMethods": ["super()", "super.method()", "parent invocation"],
        "codeExample": "class Employee {\n  constructor(name) {\n    this.name = name;\n  }\n  getRole() {\n    return 'Staff';\n  }\n}\nclass Manager extends Employee {\n  constructor(name, dept) {\n    super(name); // Invokes Employee constructor\n    this.dept = dept;\n  }\n  getRole() {\n    return `${super.getRole()} -> Manager of ${this.dept}`;\n  }\n}\nconst m = new Manager('Sarah', 'Engineering');\nconsole.log(m.getRole());",
        "htmlExample": "<div class=\"demo-box\">super connects subclasses with parent functionality.</div>",
        "expectedOutput": "> Staff -> Manager of Engineering",
        "notes": "Attempting to access 'this' before calling super() in a derived constructor throws a ReferenceError.",
        "commonMistakes": "Forgetting super() in a subclass constructor."
    })

    # 92. Prototype in JavaScript
    b.append({
        "id": 92, "number": "092", "title": "Prototype in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
        "explanation": "Every function in JavaScript has a 'prototype' property. When objects are constructed, their internal [[Prototype]] link points to that prototype object.",
        "syntax": "ConstructorFunction.prototype.method = function() { ... };",
        "keywordsOrMethods": ["prototype", "__proto__", "prototype delegation"],
        "codeExample": "function Player(name) {\n  this.name = name;\n}\nPlayer.prototype.score = 0;\nPlayer.prototype.levelUp = function() {\n  this.score += 100;\n  return `${this.name} scored! Score: ${this.score}`;\n};\nconst p = new Player('Alex');\nconsole.log(p.levelUp());",
        "htmlExample": "<div class=\"demo-box\">Prototypes allow shared memory across object instances.</div>",
        "expectedOutput": "> Alex scored! Score: 100",
        "notes": "Objects do not hold duplicate copies of prototype methods, keeping memory lean.",
        "commonMistakes": "Modifying built-in prototypes like Array.prototype or Object.prototype (monkey patching)."
    })

    # 93. Prototype Inheritance
    b.append({
        "id": 93, "number": "093", "title": "Prototype Inheritance", "category": "Objects, Classes & OOP",
        "introduction": "Prototypal inheritance allows an object to inherit properties directly from another object.",
        "explanation": "Unlike classical languages where classes inherit from classes, JavaScript objects inherit directly from other objects via their prototype reference.",
        "syntax": "Object.setPrototypeOf(childObj, parentObj);",
        "keywordsOrMethods": ["prototypal inheritance", "Object.create", "delegation"],
        "codeExample": "const animal = {\n  eats: true,\n  walk() {\n    return 'Animal walking...';\n  }\n};\nconst rabbit = Object.create(animal);\nrabbit.jumps = true;\nconsole.log('Rabbit jumps:', rabbit.jumps);\nconsole.log('Rabbit inherited eats:', rabbit.eats);\nconsole.log('Rabbit inherited walk:', rabbit.walk());",
        "htmlExample": "<div class=\"demo-box\">Prototypal inheritance delegates lookups down the chain.</div>",
        "expectedOutput": "> Rabbit jumps: true\n> Rabbit inherited eats: true\n> Rabbit inherited walk: Animal walking...",
        "notes": "If a property is not found on rabbit, JavaScript delegates the search to animal.",
        "commonMistakes": "Overwriting a prototype reference after instances have already been created."
    })

    # 94. Object Prototypes
    b.append({
        "id": 94, "number": "094", "title": "Object Prototypes", "category": "Objects, Classes & OOP",
        "introduction": "Object.prototype is the root prototype object at the top of the inheritance chain.",
        "explanation": "Almost all JavaScript objects descend from Object.prototype. It provides fundamental methods like toString(), valueOf(), and hasOwnProperty().",
        "syntax": "Object.getPrototypeOf(obj)",
        "keywordsOrMethods": ["Object.prototype", "getPrototypeOf", "root object"],
        "codeExample": "const sample = { a: 1 };\nconst proto = Object.getPrototypeOf(sample);\nconsole.log('Is prototype Object.prototype?', proto === Object.prototype);\nconsole.log('Has toString method?', typeof sample.toString === 'function');",
        "htmlExample": "<div class=\"demo-box\">Object.prototype provides the universal baseline methods.</div>",
        "expectedOutput": "> Is prototype Object.prototype? true\n> Has toString method? true",
        "notes": "An object created with Object.create(null) has no prototype and lacks toString or hasOwnProperty.",
        "commonMistakes": "Calling obj.hasOwnProperty directly on objects that might have Object.create(null) prototypes."
    })

    # 95. Prototype Chain
    b.append({
        "id": 95, "number": "095", "title": "Prototype Chain", "category": "Objects, Classes & OOP",
        "introduction": "The prototype chain is the linked list of prototype objects searched during property lookup.",
        "explanation": "When accessing obj.prop, JavaScript checks obj first. If not found, it checks obj's prototype, then that prototype's prototype, up until reaching null at the end of the chain.",
        "syntax": "obj -> proto1 -> proto2 -> Object.prototype -> null",
        "keywordsOrMethods": ["prototype chain", "lookup delegation", "null termination"],
        "codeExample": "const grandParent = { familyName: 'Yuzaki' };\nconst parent = Object.create(grandParent);\nconst child = Object.create(parent);\nchild.firstName = 'Nasa';\nconsole.log('Child own prop:', child.firstName);\nconsole.log('Looked up via chain:', child.familyName);",
        "htmlExample": "<div class=\"demo-box\">Property lookups traverse up the prototype chain.</div>",
        "expectedOutput": "> Child own prop: Nasa\n> Looked up via chain: Yuzaki",
        "notes": "If property lookup reaches null without finding a match, undefined is returned.",
        "commonMistakes": "Creating excessively deep prototype chains which can degrade lookup performance."
    })

    # 96. Object.create() Method
    b.append({
        "id": 96, "number": "096", "title": "Object.create() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.create() creates a new object using an existing object as the prototype.",
        "explanation": "Provides a clean way to instantiate an object with an explicit prototype without invoking a constructor function.",
        "syntax": "const obj = Object.create(proto, propertiesObject);",
        "keywordsOrMethods": ["Object.create()", "explicit prototype", "pure dictionary"],
        "codeExample": "const protoUser = {\n  greet() {\n    return `Welcome back, ${this.name}!`;\n  }\n};\nconst user = Object.create(protoUser);\nuser.name = 'Dev';\nconsole.log(user.greet());",
        "htmlExample": "<div class=\"demo-box\">Object.create specifies the prototype directly.</div>",
        "expectedOutput": "> Welcome back, Dev!",
        "notes": "Object.create(null) creates a 'pure dictionary' without any built-in prototype methods or keys.",
        "commonMistakes": "Passing a non-object or non-null value as the first argument throws a TypeError."
    })

    # 97. Object.assign() Method
    b.append({
        "id": 97, "number": "097", "title": "Object.assign() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.assign() copies all enumerable own properties from source objects to a target object.",
        "explanation": "Used for cloning objects and merging multiple objects into one. It performs shallow copies and returns the target object.",
        "syntax": "const returnedTarget = Object.assign(target, ...sources);",
        "keywordsOrMethods": ["Object.assign()", "shallow clone", "merge"],
        "codeExample": "const defaults = { theme: 'dark', notifications: true };\nconst userPrefs = { theme: 'light' };\nconst config = Object.assign({}, defaults, userPrefs);\nconsole.log('Merged config:', config);",
        "htmlExample": "<div class=\"demo-box\">Object.assign merges property dictionaries.</div>",
        "expectedOutput": "> Merged config: {\"theme\":\"light\",\"notifications\":true}",
        "notes": "Object spread {...defaults, ...userPrefs} is the modern syntax for the same operation.",
        "commonMistakes": "Forgetting that Object.assign is shallow: nested objects are copied by reference."
    })

    # 98. Object.entries() Method
    b.append({
        "id": 98, "number": "098", "title": "Object.entries() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.entries() returns an array of a given object's own enumerable [key, value] pairs.",
        "explanation": "Allows converting an object into an iterable array of key-value pairs, making it easy to use with for...of loops and array methods like map.",
        "syntax": "const entries = Object.entries(obj);",
        "keywordsOrMethods": ["Object.entries()", "[key, value]", "iteration"],
        "codeExample": "const user = { name: 'NASA', track: 'FullStack', level: 5 };\nfor (const [key, val] of Object.entries(user)) {\n  console.log(`${key} => ${val}`);\n}",
        "htmlExample": "<div class=\"demo-box\">Object.entries returns key-value tuples.</div>",
        "expectedOutput": "> name => NASA\n> track => FullStack\n> level => 5",
        "notes": "Pairs with Object.fromEntries() to transform objects functionally.",
        "commonMistakes": "Expecting symbol-keyed properties to be included in Object.entries (they are excluded)."
    })

    # 99. Object.keys() Method
    b.append({
        "id": 99, "number": "099", "title": "Object.keys() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.keys() returns an array of a given object's own enumerable property names.",
        "explanation": "Extracts string property names (keys) into an array. Excludes inherited prototype properties and symbol keys.",
        "syntax": "const keys = Object.keys(obj);",
        "keywordsOrMethods": ["Object.keys()", "property names", "keys array"],
        "codeExample": "const server = { host: 'localhost', port: 3000, secure: true };\nconst keys = Object.keys(server);\nconsole.log('Server property keys:', keys);\nconsole.log('Property count:', keys.length);",
        "htmlExample": "<div class=\"demo-box\">Object.keys returns an array of property names.</div>",
        "expectedOutput": "> Server property keys: [\"host\",\"port\",\"secure\"]\n> Property count: 3",
        "notes": "Useful for checking if an object is empty: Object.keys(obj).length === 0.",
        "commonMistakes": "Expecting non-enumerable properties to appear in the output."
    })

    # 100. Object.values() Method
    b.append({
        "id": 100, "number": "100", "title": "Object.values() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.values() returns an array of a given object's own enumerable property values.",
        "explanation": "Extracts the values corresponding to all enumerable string keys of an object in the same order as a for...in loop.",
        "syntax": "const values = Object.values(obj);",
        "keywordsOrMethods": ["Object.values()", "property values", "aggregation"],
        "codeExample": "const inventory = { apples: 10, oranges: 15, bananas: 8 };\nconst counts = Object.values(inventory);\nconst totalFruit = counts.reduce((sum, n) => sum + n, 0);\nconsole.log('Individual counts:', counts);\nconsole.log('Total fruit in stock:', totalFruit);",
        "htmlExample": "<div class=\"demo-box\">Object.values extracts data values without keys.</div>",
        "expectedOutput": "> Individual counts: [10,15,8]\n> Total fruit in stock: 33",
        "notes": "Introduced in ES2017.",
        "commonMistakes": "Assuming the values will be sorted alphabetically or numerically; they follow object property order."
    })

    return b
