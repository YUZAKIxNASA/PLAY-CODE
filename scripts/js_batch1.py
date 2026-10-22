# scripts/js_batch1.py: Lessons 1 to 50
def get_batch1():
    b = []

    # 1. Inline JavaScript
    b.append({
        "id": 1, "number": "001", "title": "Inline JavaScript", "category": "Basics & Dialogs",
        "introduction": "Inline JavaScript refers to executing JS code directly inside HTML element event attributes.",
        "explanation": "Inline JavaScript places executable JS code directly inside HTML attributes like onclick, onmouseover, or href=\"javascript:...\". While historically common for quick triggers, modern web standards recommend separating JS into external files via addEventListener.",
        "syntax": "<button onclick=\"alert('Clicked!')\">Click</button>",
        "keywordsOrMethods": ["onclick", "onmouseover", "javascript:"],
        "codeExample": "// Simulating inline event execution\nfunction handleInlineClick() {\n  console.log('Button clicked via inline event attribute simulation!');\n}\n\nhandleInlineClick();",
        "htmlExample": "<button onclick=\"console.log('Direct inline execution!')\" class=\"demo-btn\">Click Me (Inline)</button>",
        "expectedOutput": "> Button clicked via inline event attribute simulation!\n> Direct inline execution!",
        "notes": "Inline JavaScript violates Content Security Policy (CSP) best practices and couples HTML markup with behavior.",
        "commonMistakes": "Overusing inline handlers instead of using element.addEventListener() in external script files."
    })

    # 2. Internal JavaScript
    b.append({
        "id": 2, "number": "002", "title": "Internal JavaScript", "category": "Basics & Dialogs",
        "introduction": "Internal JavaScript refers to script code embedded within <script> tags inside the HTML document.",
        "explanation": "Internal JavaScript is embedded directly within <script>...</script> tags in the <head> or at the bottom of the <body> of an HTML page. It executes in document order as the browser parses the HTML.",
        "syntax": "<script>\n  // JavaScript code\n  console.log('Hello from internal script');\n</script>",
        "keywordsOrMethods": ["<script>", "defer", "type=\"text/javascript\""],
        "codeExample": "const message = 'Hello from Internal JavaScript!';\nconsole.log(message);\nconsole.log('Document ready state:', typeof document !== 'undefined' ? 'In Browser' : 'In Node');",
        "htmlExample": "<div id=\"internal-demo\">Check the console output for internal script execution.</div>",
        "expectedOutput": "> Hello from Internal JavaScript!\n> Document ready state: In Browser",
        "notes": "Useful for single-page demos or page-specific configuration, but external files are better for caching across pages.",
        "commonMistakes": "Placing scripts in <head> without 'defer' or 'DOMContentLoaded', leading to errors when querying DOM elements."
    })

    # 3. External JavaScript
    b.append({
        "id": 3, "number": "003", "title": "External JavaScript", "category": "Basics & Dialogs",
        "introduction": "External JavaScript involves writing JS in separate .js files linked via <script src=\"app.js\">.",
        "explanation": "External JavaScript keeps behavior isolated from markup. Browsers cache external files, reducing page load times on subsequent visits and improving maintainability and teamwork.",
        "syntax": "<script src=\"path/to/script.js\" defer></script>",
        "keywordsOrMethods": ["<script src=\"...\">", "defer", "async"],
        "codeExample": "// In app.js (external file):\nexport function initializeApp() {\n  console.log('External script initialized successfully!');\n}\n\ninitializeApp();",
        "htmlExample": "<p>External scripts keep HTML clean and leverage browser caching.</p>",
        "expectedOutput": "> External script initialized successfully!",
        "notes": "Always use 'defer' or place script tags before the closing </body> tag to prevent blocking the HTML parser.",
        "commonMistakes": "Adding code inside a <script src=\"...\">...</script> tag — the browser ignores inner content when 'src' is present."
    })

    # 4. alert() Method
    b.append({
        "id": 4, "number": "004", "title": "alert() Method", "category": "Basics & Dialogs",
        "introduction": "The alert() method displays a modal dialog box with a specified message and an OK button.",
        "explanation": "window.alert() halts script execution and user interaction until the user dismisses the dialog by clicking OK. It takes a single string or value, coercing non-strings into text.",
        "syntax": "window.alert(message);\n// or simply:\nalert('Welcome!');",
        "keywordsOrMethods": ["window.alert()", "modal dialog"],
        "codeExample": "const notice = 'Alert: Welcome to CodePlay JavaScript Curriculum!';\nconsole.log('Simulating alert:', notice);\n// alert(notice); // In interactive runner we log to avoid freezing tabs",
        "htmlExample": "<button onclick=\"console.log('Alert triggered!')\" class=\"demo-btn\">Show Alert</button>",
        "expectedOutput": "> Simulating alert: Alert: Welcome to CodePlay JavaScript Curriculum!",
        "notes": "alert() is synchronous and blocking. Modern web applications prefer accessible custom toast or modal components.",
        "commonMistakes": "Using alert() for debugging objects — it displays '[object Object]' instead of useful inspection data."
    })

    # 5. console.log() Method
    b.append({
        "id": 5, "number": "005", "title": "console.log() Method", "category": "Basics & Dialogs",
        "introduction": "console.log() outputs messages, variables, and objects to the browser inspection console.",
        "explanation": "The primary debugging tool in JavaScript. It accepts multiple comma-separated arguments, supports format specifiers (%s, %d, %o), and renders nested object trees interactively.",
        "syntax": "console.log(data1, data2, ...);",
        "keywordsOrMethods": ["console.log", "console.info", "console.table", "console.error"],
        "codeExample": "const course = 'JavaScript 230 Lessons';\nconst completed = 5;\nconsole.log('Course:', course);\nconsole.log('Progress:', completed, 'lessons completed');\nconsole.log({ id: 5, status: 'Active' });",
        "htmlExample": "<div class=\"demo-box\">Open developer tools or check the output console below.</div>",
        "expectedOutput": "> Course: JavaScript 230 Lessons\n> Progress: 5 lessons completed\n> {\"id\":5,\"status\":\"Active\"}",
        "notes": "console.table() can be used for tabular display of arrays and objects in modern devtools.",
        "commonMistakes": "Leaving excessive console.log() calls in production builds which can leak sensitive data."
    })

    # 6. confirm() Method
    b.append({
        "id": 6, "number": "006", "title": "confirm() Method", "category": "Basics & Dialogs",
        "introduction": "confirm() displays a modal dialog with OK and Cancel buttons, returning a boolean.",
        "explanation": "window.confirm() returns true if the user clicks OK, and false if the user clicks Cancel or closes the dialog. Execution blocks until the user makes a choice.",
        "syntax": "const userChoice = confirm('Do you wish to proceed?');",
        "keywordsOrMethods": ["window.confirm()", "boolean return"],
        "codeExample": "function deleteRecord(id, userConfirmed) {\n  console.log(`Action requested for record #${id}`);\n  if (userConfirmed) {\n    console.log('User confirmed: Deleting record from database...');\n  } else {\n    console.log('User canceled: Operation aborted.');\n  }\n}\ndeleteRecord(101, true);\ndeleteRecord(102, false);",
        "htmlExample": "<button onclick=\"console.log('Confirm simulated')\" class=\"demo-btn\">Confirm Action</button>",
        "expectedOutput": "> Action requested for record #101\n> User confirmed: Deleting record from database...\n> Action requested for record #102\n> User canceled: Operation aborted.",
        "notes": "Like alert(), confirm() blocks thread execution and cannot be customized with custom CSS styling.",
        "commonMistakes": "Assuming confirm() returns the string 'true'/'false' instead of real boolean primitives true/false."
    })

    # 7. prompt() Method
    b.append({
        "id": 7, "number": "007", "title": "prompt() Method", "category": "Basics & Dialogs",
        "introduction": "prompt() displays a dialog asking the user to input text, returning the string or null.",
        "explanation": "window.prompt(message, defaultValue) opens a modal text input box. If the user clicks OK, it returns the entered string (empty string if left blank). If the user cancels, it returns null.",
        "syntax": "const answer = prompt('Enter your name:', 'Anonymous');",
        "keywordsOrMethods": ["window.prompt()", "user input", "null return"],
        "codeExample": "function greetVisitor(nameInput) {\n  if (nameInput === null) {\n    console.log('User cancelled prompt dialog.');\n  } else if (nameInput.trim() === '') {\n    console.log('No name provided.');\n  } else {\n    console.log(`Welcome to CodePlay, ${nameInput}!`);\n  }\n}\ngreetVisitor('NASA-KUN');\ngreetVisitor(null);",
        "htmlExample": "<button onclick=\"console.log('Prompt simulated')\" class=\"demo-btn\">Prompt User</button>",
        "expectedOutput": "> Welcome to CodePlay, NASA-KUN!\n> User cancelled prompt dialog.",
        "notes": "All inputs received from prompt() are strings, even if digits are typed. Numbers must be converted with Number() or parseInt().",
        "commonMistakes": "Forgetting to handle the null return case when a user presses Cancel."
    })

    # 8. Declaring Variables
    b.append({
        "id": 8, "number": "008", "title": "Declaring Variables", "category": "Variables & Scope",
        "introduction": "Variables are named containers used to store data values in memory during execution.",
        "explanation": "JavaScript supports variable declarations using var, let, and const. Modern JavaScript emphasizes 'const' by default, and 'let' only when reassignment is strictly necessary. 'var' is legacy function-scoped.",
        "syntax": "let variableName = value;\nconst constantName = value;",
        "keywordsOrMethods": ["var", "let", "const", "assignment ="],
        "codeExample": "let score = 0;\nscore += 10;\nconst maxLives = 3;\nconsole.log('Current score:', score);\nconsole.log('Maximum lives:', maxLives);",
        "htmlExample": "<div class=\"demo-box\">Variables allocate memory for dynamic program state.</div>",
        "expectedOutput": "> Current score: 10\n> Maximum lives: 3",
        "notes": "Always declare variables before using them to prevent implicit global variable creation.",
        "commonMistakes": "Assigning to undeclared variables (e.g. x = 10 without let/const) in non-strict mode."
    })

    # 9. var Keyword
    b.append({
        "id": 9, "number": "009", "title": "var Keyword", "category": "Variables & Scope",
        "introduction": "var declares function-scoped or globally-scoped variables, hoisted with undefined.",
        "explanation": "var was the sole declaration keyword in JavaScript prior to ES6 (2015). It does not respect block scoping ({ ... }) and is hoisted to the top of its enclosing function, initialized with undefined.",
        "syntax": "var x = 10;",
        "keywordsOrMethods": ["var", "hoisting", "function scope"],
        "codeExample": "console.log('Hoisted value of a:', a); // undefined, not ReferenceError\nvar a = 42;\n\nif (true) {\n  var blockScoped = 'I leak outside the if block!';\n}\nconsole.log('blockScoped outside block:', blockScoped);",
        "htmlExample": "<div class=\"demo-box\">var has function scope, not block scope.</div>",
        "expectedOutput": "> Hoisted value of a: undefined\n> blockScoped outside block: I leak outside the if block!",
        "notes": "Modern codebases avoid var in favor of block-scoped let and const.",
        "commonMistakes": "Accidentally overwriting loop variables when using var inside nested loops."
    })

    # 10. let Keyword
    b.append({
        "id": 10, "number": "010", "title": "let Keyword", "category": "Variables & Scope",
        "introduction": "let declares reassignable, block-scoped local variables with a temporal dead zone.",
        "explanation": "Introduced in ES6, let variables are confined to the nearest enclosing pair of curly braces {}. Accessing a let variable before its declaration throws a ReferenceError (Temporal Dead Zone), avoiding hoisting bugs.",
        "syntax": "let count = 1;\ncount = 2;",
        "keywordsOrMethods": ["let", "block scope", "TDZ"],
        "codeExample": "let counter = 100;\nif (true) {\n  let counter = 200; // Distinct block-scoped variable\n  console.log('Inside block:', counter);\n}\nconsole.log('Outside block:', counter);",
        "htmlExample": "<div class=\"demo-box\">let provides clean block scoping.</div>",
        "expectedOutput": "> Inside block: 200\n> Outside block: 100",
        "notes": "Use let when you know a variable will be reassigned (e.g., loop counters, accumulators).",
        "commonMistakes": "Attempting to redeclare the same let variable within the same scope."
    })

    # 11. const Keyword
    b.append({
        "id": 11, "number": "011", "title": "const Keyword", "category": "Variables & Scope",
        "introduction": "const declares block-scoped read-only identifiers that cannot be reassigned.",
        "explanation": "const variables must be initialized during declaration. Reassignment produces a TypeError. However, objects and arrays declared with const remain mutable (their properties or elements can still be altered).",
        "syntax": "const PI = 3.14159;\nconst config = { theme: 'dark' };",
        "keywordsOrMethods": ["const", "immutable binding", "mutation"],
        "codeExample": "const API_URL = 'https://api.codeplay.dev';\nconst settings = { theme: 'dark' };\nsettings.theme = 'midnight'; // Allowed! Object mutation\nconsole.log('API Endpoint:', API_URL);\nconsole.log('Updated theme:', settings.theme);",
        "htmlExample": "<div class=\"demo-box\">const creates an immutable binding, not an immutable value.</div>",
        "expectedOutput": "> API Endpoint: https://api.codeplay.dev\n> Updated theme: midnight",
        "notes": "To make an object's properties truly immutable, use Object.freeze().",
        "commonMistakes": "Confusing const reassignment (const a = 1; a = 2 error) with object property mutation."
    })

    # 12. Primitive Data Types
    b.append({
        "id": 12, "number": "012", "title": "Primitive Data Types", "category": "Data Types",
        "introduction": "JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol, null.",
        "explanation": "Primitives represent single, immutable values stored directly on the stack by value, unlike Objects which are stored on the heap by reference. When you operate on a primitive, you produce a new value rather than modifying the original.",
        "syntax": "const str = 'hello';\nconst num = 42;\nconst bool = true;",
        "keywordsOrMethods": ["primitive", "immutable", "by value"],
        "codeExample": "let str = 'code';\nlet copy = str;\ncopy += 'play';\nconsole.log('Original str:', str);\nconsole.log('Modified copy:', copy);",
        "htmlExample": "<div class=\"demo-box\">Primitives are passed by value and immutable.</div>",
        "expectedOutput": "> Original str: code\n> Modified copy: codeplay",
        "notes": "typeof null returns 'object' due to a historical bug in JavaScript from 1995 that cannot be fixed without breaking web compatibility.",
        "commonMistakes": "Assuming calling string methods like str.toUpperCase() modifies the original string."
    })

    # 13. String Data Type
    b.append({
        "id": 13, "number": "013", "title": "String Data Type", "category": "Data Types",
        "introduction": "The String type represents textual data, enclosed in single quotes, double quotes, or backticks.",
        "explanation": "Strings are sequences of 16-bit UTF-16 code units. Template literals (backticks) permit multi-line strings and interpolation via ${expression}.",
        "syntax": "const s1 = 'Single';\nconst s2 = \"Double\";\nconst s3 = `Template ${1 + 1}`;",
        "keywordsOrMethods": ["String", "length", "template literal"],
        "codeExample": "const lang = 'JavaScript';\nconst lessons = 230;\nconst intro = `Welcome to ${lang}! Total lessons: ${lessons}.`;\nconsole.log(intro);\nconsole.log('Character count:', intro.length);",
        "htmlExample": "<div class=\"demo-box\">Strings represent sequences of characters.</div>",
        "expectedOutput": "> Welcome to JavaScript! Total lessons: 230.\n> Character count: 44",
        "notes": "Strings are zero-indexed: lang[0] gives 'J'.",
        "commonMistakes": "Attempting to modify a character in place (str[0] = 'X'), which silently fails in JavaScript."
    })

    # 14. Number Data Type
    b.append({
        "id": 14, "number": "014", "title": "Number Data Type", "category": "Data Types",
        "introduction": "The Number type represents both integers and floating-point values using IEEE 754 64-bit precision.",
        "explanation": "JavaScript has no distinct 'int' vs 'float' type; all standard numbers are double-precision floats. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).",
        "syntax": "const count = 42;\nconst price = 19.99;\nconst exp = 2e6;",
        "keywordsOrMethods": ["Number", "NaN", "Infinity", "MAX_SAFE_INTEGER"],
        "codeExample": "const integer = 100;\nconst floatNum = 3.14159;\nconsole.log('Division:', integer / 4);\nconsole.log('Special value:', 1 / 0); // Infinity\nconsole.log('Invalid math:', 'abc' * 2); // NaN",
        "htmlExample": "<div class=\"demo-box\">Numbers use IEEE 754 64-bit float representation.</div>",
        "expectedOutput": "> Division: 25\n> Special value: Infinity\n> Invalid math: NaN",
        "notes": "Floating-point precision limits can make 0.1 + 0.2 equal 0.30000000000000004. Use toFixed() or integer math for money calculations.",
        "commonMistakes": "Comparing floating point numbers directly using === without an epsilon tolerance."
    })

    # 15. Boolean Data Type
    b.append({
        "id": 15, "number": "015", "title": "Boolean Data Type", "category": "Data Types",
        "introduction": "The Boolean data type has exactly two values: true and false.",
        "explanation": "Booleans represent truth values in logical conditions and flow control. Falsy values (0, '', null, undefined, NaN, false) evaluate to false, while all other values are truthy.",
        "syntax": "const isActive = true;\nconst hasAccess = false;",
        "keywordsOrMethods": ["true", "false", "Boolean()", "truthy", "falsy"],
        "codeExample": "const isLoggedIn = true;\nconst cartItems = 3;\nconst canCheckout = isLoggedIn && cartItems > 0;\nconsole.log('Can checkout:', canCheckout);\nconsole.log('Boolean of empty string:', Boolean(''));\nconsole.log('Boolean of non-empty string:', Boolean('hello'));",
        "htmlExample": "<div class=\"demo-box\">Booleans govern decision making in conditionals.</div>",
        "expectedOutput": "> Can checkout: true\n> Boolean of empty string: false\n> Boolean of non-empty string: true",
        "notes": "Double negation !!value is a concise idiom to convert any value to its boolean equivalent.",
        "commonMistakes": "Treating the string 'false' as false. Any non-empty string is truthy!"
    })

    # 16. Undefined Data Type
    b.append({
        "id": 16, "number": "016", "title": "Undefined Data Type", "category": "Data Types",
        "introduction": "undefined indicates that a variable has been declared but not yet assigned a value.",
        "explanation": "Functions without an explicit return statement return undefined. Object properties that do not exist also evaluate to undefined. Its typeof is 'undefined'.",
        "syntax": "let unassigned;\nconsole.log(unassigned); // undefined",
        "keywordsOrMethods": ["undefined", "void", "uninitialized"],
        "codeExample": "let userName;\nconsole.log('Unassigned variable:', userName);\nfunction noReturn() {}\nconsole.log('Function return:', noReturn());\nconst user = { name: 'Alice' };\nconsole.log('Missing property:', user.age);",
        "htmlExample": "<div class=\"demo-box\">undefined represents an uninitialized state.</div>",
        "expectedOutput": "> Unassigned variable: undefined\n> Function return: undefined\n> Missing property: undefined",
        "notes": "undefined is a primitive type whose only value is undefined.",
        "commonMistakes": "Manually assigning a variable to undefined instead of null to represent 'empty'."
    })

    # 17. Null Data Type
    b.append({
        "id": 17, "number": "017", "title": "Null Data Type", "category": "Data Types",
        "introduction": "null represents the deliberate intentional absence of any object value.",
        "explanation": "Unlike undefined which means 'unassigned by default', null is an explicit assignment indicating that a variable intentionally holds no value or points to no object.",
        "syntax": "let selectedItem = null;",
        "keywordsOrMethods": ["null", "empty", "intentional absence"],
        "codeExample": "let currentTarget = null;\nconsole.log('Initial state:', currentTarget);\nconsole.log('typeof null:', typeof currentTarget); // 'object' historical artifact\nconsole.log('null == undefined:', null == undefined); // true (loose)\nconsole.log('null === undefined:', null === undefined); // false (strict)",
        "htmlExample": "<div class=\"demo-box\">null represents intentional emptiness.</div>",
        "expectedOutput": "> Initial state: null\n> typeof null: object\n> null == undefined: true\n> null === undefined: false",
        "notes": "Always use strict equality === when checking for null to avoid matching undefined.",
        "commonMistakes": "Expecting typeof null to equal 'null'."
    })

    # 18. Symbol Data Type
    b.append({
        "id": 18, "number": "018", "title": "Symbol Data Type", "category": "Data Types",
        "introduction": "Symbol creates unique and immutable primitive identifiers, often used as object property keys.",
        "explanation": "Introduced in ES6, every Symbol() call creates a completely unique value, even with the same description. Symbols cannot be accidentally overwritten and are ignored by standard for...in loops.",
        "syntax": "const sym = Symbol('description');",
        "keywordsOrMethods": ["Symbol()", "Symbol.for()", "unique key"],
        "codeExample": "const id1 = Symbol('id');\nconst id2 = Symbol('id');\nconsole.log('Symbols equal?', id1 === id2); // false\nconst user = {\n  name: 'NASA',\n  [id1]: 98765\n};\nconsole.log('Symbol property value:', user[id1]);\nconsole.log('Standard Object.keys():', Object.keys(user));",
        "htmlExample": "<div class=\"demo-box\">Symbols prevent property collision in objects and libraries.</div>",
        "expectedOutput": "> Symbols equal? false\n> Symbol property value: 98765\n> Standard Object.keys(): [\"name\"]",
        "notes": "Use Object.getOwnPropertySymbols() to retrieve symbol keys from an object.",
        "commonMistakes": "Calling 'new Symbol()' — Symbol is a factory function, not a constructor."
    })

    # 19. BigInt Data Type
    b.append({
        "id": 19, "number": "019", "title": "BigInt Data Type", "category": "Data Types",
        "introduction": "BigInt represents whole integers beyond the safe 2^53 - 1 limit of standard Number.",
        "explanation": "Standard numbers lose precision above Number.MAX_SAFE_INTEGER (9007199254740991). BigInt literals are suffixed with 'n' (e.g. 100n) or created via BigInt(val). They support arbitrary precision arithmetic.",
        "syntax": "const huge = 9007199254740995n;\nconst alsoHuge = BigInt('9007199254740995');",
        "keywordsOrMethods": ["BigInt", "n suffix", "arbitrary precision"],
        "codeExample": "const maxSafe = Number.MAX_SAFE_INTEGER;\nconsole.log('Max Safe Integer:', maxSafe);\nconsole.log('Standard float overflow:', maxSafe + 1 === maxSafe + 2); // true (precision lost)\nconst bigSafe = 9007199254740991n;\nconsole.log('BigInt exact math:', bigSafe + 1n === bigSafe + 2n); // false (precise)",
        "htmlExample": "<div class=\"demo-box\">BigInt handles cryptography and large ID integers without rounding error.</div>",
        "expectedOutput": "> Max Safe Integer: 9007199254740991\n> Standard float overflow: true\n> BigInt exact math: false",
        "notes": "You cannot mix BigInt and standard Number in arithmetic operations without explicit conversion.",
        "commonMistakes": "Writing 10n + 5 (mixing BigInt and Number produces a TypeError)."
    })

    # 20. typeof Operator
    b.append({
        "id": 20, "number": "020", "title": "typeof Operator", "category": "Data Types",
        "introduction": "The typeof operator returns a string indicating the type of the unevaluated operand.",
        "explanation": "typeof inspects variables and expressions. It returns one of: 'string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', or 'function'.",
        "syntax": "typeof operand\n// or\ntypeof(operand)",
        "keywordsOrMethods": ["typeof", "type inspection"],
        "codeExample": "console.log(typeof 'hello'); // string\nconsole.log(typeof 42); // number\nconsole.log(typeof true); // boolean\nconsole.log(typeof undefined); // undefined\nconsole.log(typeof null); // object (quirk)\nconsole.log(typeof function() {}); // function\nconsole.log(typeof [1, 2]); // object",
        "htmlExample": "<div class=\"demo-box\">typeof is useful for primitive validation.</div>",
        "expectedOutput": "> string\n> number\n> boolean\n> undefined\n> object\n> function\n> object",
        "notes": "To distinguish Arrays from Objects, use Array.isArray(value).",
        "commonMistakes": "Using typeof to check for null (it returns 'object'). Check value === null instead."
    })

    # 21. Type Conversion
    b.append({
        "id": 21, "number": "021", "title": "Type Conversion", "category": "Type Conversion",
        "introduction": "Explicit type conversion occurs when you deliberately transform a value from one type to another.",
        "explanation": "Also called type casting. Common conversion functions include String(val), Number(val), Boolean(val), and toString(). Explicit conversion creates predictable, clean code.",
        "syntax": "const num = Number('123');\nconst str = String(456);\nconst bool = Boolean(1);",
        "keywordsOrMethods": ["Number()", "String()", "Boolean()", "toString()"],
        "codeExample": "const input = '42';\nconst convertedNum = Number(input);\nconsole.log('Converted value:', convertedNum, 'Type:', typeof convertedNum);\nconst num = 100;\nconst strNum = num.toString();\nconsole.log('Converted string:', strNum, 'Type:', typeof strNum);",
        "htmlExample": "<div class=\"demo-box\">Explicit type conversion eliminates unexpected type bugs.</div>",
        "expectedOutput": "> Converted value: 42 Type: number\n> Converted string: 100 Type: string",
        "notes": "Number('') converts to 0, while Number('hello') results in NaN.",
        "commonMistakes": "Converting an invalid string to Number and not checking if the result is NaN."
    })

    # 22. Type Coercion
    b.append({
        "id": 22, "number": "022", "title": "Type Coercion", "category": "Type Conversion",
        "introduction": "Implicit type coercion is the automatic conversion of values by the JS engine during operations.",
        "explanation": "When operators like +, ==, or - encounter mismatched types, JS automatically coerces one operand. The + operator prioritizes string concatenation if either operand is a string, while - forces numeric conversion.",
        "syntax": "'5' - 2 // 3\n'5' + 2 // '52'",
        "keywordsOrMethods": ["implicit coercion", "+ concatenation", "loose equality =="],
        "codeExample": "console.log('\"5\" + 2 =', '5' + 2); // '52' string\nconsole.log('\"5\" - 2 =', '5' - 2); // 3 number\nconsole.log('\"10\" * \"2\" =', '10' * '2'); // 20 number\nconsole.log('true + 1 =', true + 1); // 2 number",
        "htmlExample": "<div class=\"demo-box\">Understand coercion to avoid subtle calculation errors.</div>",
        "expectedOutput": "> \"5\" + 2 = 52\n> \"5\" - 2 = 3\n> \"10\" * \"2\" = 20\n> true + 1 = 2",
        "notes": "Always prefer strict equality === to avoid unexpected implicit coercion bugs.",
        "commonMistakes": "Adding numbers obtained from input elements with '+' without converting them first: '10' + '20' = '1020'."
    })

    # 23. parseInt() Function
    b.append({
        "id": 23, "number": "023", "title": "parseInt() Function", "category": "Type Conversion",
        "introduction": "parseInt() parses a string argument and returns an integer of the specified radix.",
        "explanation": "parseInt(string, radix) reads characters from left to right until it encounters a non-numeric character. It strips whitespace and supports different bases (radix 2 for binary, 16 for hex, 10 for decimal).",
        "syntax": "parseInt(string, radix);",
        "keywordsOrMethods": ["parseInt", "radix", "base-10"],
        "codeExample": "console.log(parseInt('42px', 10)); // 42\nconsole.log(parseInt('1010', 2)); // 10 (binary)\nconsole.log(parseInt('FF', 16)); // 255 (hex)\nconsole.log(parseInt('3.14159', 10)); // 3 (truncates decimals)",
        "htmlExample": "<div class=\"demo-box\">parseInt parses leading integer characters.</div>",
        "expectedOutput": "> 42\n> 10\n> 255\n> 3",
        "notes": "Always specify the radix (e.g. 10) to avoid legacy octal parsing bugs.",
        "commonMistakes": "Expecting parseInt to round numbers; it simply truncates at the decimal point."
    })

    # 24. parseFloat() Function
    b.append({
        "id": 24, "number": "024", "title": "parseFloat() Function", "category": "Type Conversion",
        "introduction": "parseFloat() parses a string argument and returns a floating-point number.",
        "explanation": "parseFloat parses characters from the beginning of a string, including a decimal point and exponent notation (e/E), stopping at the first invalid character.",
        "syntax": "parseFloat(string);",
        "keywordsOrMethods": ["parseFloat", "floating point", "decimals"],
        "codeExample": "console.log(parseFloat('3.14rem')); // 3.14\nconsole.log(parseFloat('  120.55 USD')); // 120.55\nconsole.log(parseFloat('1.5e3')); // 1500\nconsole.log(parseFloat('abc12')); // NaN",
        "htmlExample": "<div class=\"demo-box\">parseFloat is ideal for extracting measurements with decimals.</div>",
        "expectedOutput": "> 3.14\n> 120.55\n> 1500\n> NaN",
        "notes": "parseFloat only parses base-10 numbers.",
        "commonMistakes": "Passing strings with commas for decimal points (e.g., '3,14'), which stops parsing at the comma."
    })

    # 25. isNaN() Function
    b.append({
        "id": 25, "number": "025", "title": "isNaN() Function", "category": "Type Conversion",
        "introduction": "isNaN() determines whether a value coerced to number is the special value NaN.",
        "explanation": "Global isNaN() first coerces its argument to a Number. Because of this, isNaN('hello') is true. Modern code prefers Number.isNaN(), which checks strictly without coercion.",
        "syntax": "isNaN(value)\nNumber.isNaN(value)",
        "keywordsOrMethods": ["isNaN", "Number.isNaN", "Not-a-Number"],
        "codeExample": "console.log('Global isNaN(\"hello\"):', isNaN('hello')); // true (coerced)\nconsole.log('Number.isNaN(\"hello\"):', Number.isNaN('hello')); // false (strict)\nconsole.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true\nconsole.log('NaN === NaN:', NaN === NaN); // false! Always use isNaN",
        "htmlExample": "<div class=\"demo-box\">NaN is the only value in JavaScript not equal to itself.</div>",
        "expectedOutput": "> Global isNaN(\"hello\"): true\n> Number.isNaN(\"hello\"): false\n> Number.isNaN(NaN): true\n> NaN === NaN: false",
        "notes": "Number.isNaN() is the recommended modern check as it does not coerce non-numbers.",
        "commonMistakes": "Trying to check if a variable is NaN using 'val === NaN'."
    })

    # 26. isFinite() Function
    b.append({
        "id": 26, "number": "026", "title": "isFinite() Function", "category": "Type Conversion",
        "introduction": "isFinite() determines whether a passed value is a finite number.",
        "explanation": "Returns false for Infinity, -Infinity, and NaN. The global isFinite() coerces the input to number, while Number.isFinite() performs a strict type check.",
        "syntax": "isFinite(value)\nNumber.isFinite(value)",
        "keywordsOrMethods": ["isFinite", "Number.isFinite", "Infinity"],
        "codeExample": "console.log('isFinite(100):', Number.isFinite(100)); // true\nconsole.log('isFinite(1/0):', Number.isFinite(1 / 0)); // false\nconsole.log('isFinite(NaN):', Number.isFinite(NaN)); // false\nconsole.log('Global isFinite(\"42\"):', isFinite('42')); // true (coerced)",
        "htmlExample": "<div class=\"demo-box\">Validate that calculations produced a usable real number.</div>",
        "expectedOutput": "> isFinite(100): true\n> isFinite(1/0): false\n> isFinite(NaN): false\n> Global isFinite(\"42\"): true",
        "notes": "Use Number.isFinite() when you want to ensure the input was already a valid number primitive.",
        "commonMistakes": "Assuming strings like '0' are rejected by global isFinite (it coerces them to 0 and returns true)."
    })

    # 27. Arithmetic Operators
    b.append({
        "id": 27, "number": "027", "title": "Arithmetic Operators", "category": "Operators",
        "introduction": "Arithmetic operators perform mathematical calculations on numeric operands.",
        "explanation": "Includes addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++), and decrement (--).",
        "syntax": "a + b; a - b; a * b; a / b; a % b; a ** b;",
        "keywordsOrMethods": ["+", "-", "*", "/", "%", "**", "++", "--"],
        "codeExample": "let a = 10, b = 3;\nconsole.log('Add:', a + b); // 13\nconsole.log('Multiply:', a * b); // 30\nconsole.log('Remainder:', a % b); // 1\nconsole.log('Power:', a ** b); // 1000\na++;\nconsole.log('Incremented a:', a); // 11",
        "htmlExample": "<div class=\"demo-box\">Arithmetic operators form the basis of all numeric computation.</div>",
        "expectedOutput": "> Add: 13\n> Multiply: 30\n> Remainder: 1\n> Power: 1000\n> Incremented a: 11",
        "notes": "** was introduced in ES2016 as a cleaner alternative to Math.pow().",
        "commonMistakes": "Confusing post-increment (a++) and pre-increment (++a) in complex expressions."
    })

    # 28. Assignment Operators
    b.append({
        "id": 28, "number": "028", "title": "Assignment Operators", "category": "Operators",
        "introduction": "Assignment operators assign values to the left operand, often combining operations.",
        "explanation": "Basic assignment (=) stores a value. Compound assignments (+=, -=, *=, /=, %=, **=, &&=, ||=, ??=) perform an operation and assign the result in one step.",
        "syntax": "x += y; // Equivalent to: x = x + y",
        "keywordsOrMethods": ["=", "+=", "-=", "*=", "/=", "??="],
        "codeExample": "let balance = 100;\nbalance += 50; // 150\nbalance *= 2;  // 300\nbalance -= 40; // 260\nconsole.log('Final Balance:', balance);\nlet defaultUser = null;\ndefaultUser ??= 'Guest';\nconsole.log('Nullish assignment:', defaultUser);",
        "htmlExample": "<div class=\"demo-box\">Compound assignment reduces repetition.</div>",
        "expectedOutput": "> Final Balance: 260\n> Nullish assignment: Guest",
        "notes": "Logical assignment operators (&&=, ||=, ??=) were added in ES2021.",
        "commonMistakes": "Using = (assignment) inside an if condition instead of === (equality check)."
    })

    # 29. Comparison Operators
    b.append({
        "id": 29, "number": "029", "title": "Comparison Operators", "category": "Operators",
        "introduction": "Comparison operators compare two values and return a boolean result.",
        "explanation": "Includes strict equality (===), strict inequality (!==), loose equality (==), loose inequality (!=), greater than (>), less than (<), >=, and <=. Strict comparison checks both value and type.",
        "syntax": "a === b\na !== b\na >= b",
        "keywordsOrMethods": ["===", "!==", "==", "!=", ">", "<", ">=", "<="],
        "codeExample": "console.log('5 === \"5\":', 5 === '5'); // false (strict: different types)\nconsole.log('5 == \"5\":', 5 == '5');   // true (loose: coerced)\nconsole.log('10 > 5:', 10 > 5);        // true\nconsole.log('5 !== 4:', 5 !== 4);      // true",
        "htmlExample": "<div class=\"demo-box\">Always default to strict comparison ===.</div>",
        "expectedOutput": "> 5 === \"5\": false\n> 5 == \"5\": true\n> 10 > 5: true\n> 5 !== 4: true",
        "notes": "Strict equality (===) does not coerce types, eliminating bugs from unexpected conversions.",
        "commonMistakes": "Using == when comparing objects or arrays; in JS, objects are compared by reference, not value."
    })

    # 30. Logical Operators
    b.append({
        "id": 30, "number": "030", "title": "Logical Operators", "category": "Operators",
        "introduction": "Logical operators (&&, ||, !) perform boolean logic and short-circuit evaluation.",
        "explanation": "Logical AND (&&) returns the first falsy value or the last truthy value. Logical OR (||) returns the first truthy value. Logical NOT (!) inverts boolean state.",
        "syntax": "expr1 && expr2\nexpr1 || expr2\n!expr",
        "keywordsOrMethods": ["&&", "||", "!", "short-circuit"],
        "codeExample": "const hasKey = true;\nconst knowsPassword = false;\nconsole.log('Can enter (AND):', hasKey && knowsPassword);\nconsole.log('Can enter (OR):', hasKey || knowsPassword);\nconsole.log('Inverse (NOT):', !hasKey);\n// Short-circuiting:\nconst fallback = '' || 'Default Name';\nconsole.log('Fallback value:', fallback);",
        "htmlExample": "<div class=\"demo-box\">Short-circuit evaluation is frequently used for default values.</div>",
        "expectedOutput": "> Can enter (AND): false\n> Can enter (OR): true\n> Inverse (NOT): false\n> Fallback value: Default Name",
        "notes": "Nullish coalescing (??) is preferable over || when 0 or '' are valid intentional values.",
        "commonMistakes": "Using || for defaults when 0 or false are valid inputs (e.g. count = count || 10 replaces 0 with 10)."
    })

    # 31. Bitwise Operators
    b.append({
        "id": 31, "number": "031", "title": "Bitwise Operators", "category": "Operators",
        "introduction": "Bitwise operators treat operands as 32-bit sequences of zeroes and ones.",
        "explanation": "Includes AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Sign-propagating Right Shift (>>), and Zero-fill Right Shift (>>>). Commonly used in flags, bitmasks, and low-level algorithms.",
        "syntax": "a & b; a | b; a ^ b; ~a; a << b;",
        "keywordsOrMethods": ["&", "|", "^", "~", "<<", ">>"],
        "codeExample": "const READ = 1;   // 0001\nconst WRITE = 2;  // 0010\nconst EXEC = 4;   // 0100\nlet userPerms = READ | WRITE; // 0011 (3)\nconsole.log('Has write access?', (userPerms & WRITE) !== 0);\nconsole.log('Has exec access?', (userPerms & EXEC) !== 0);",
        "htmlExample": "<div class=\"demo-box\">Bitwise operations operate on binary integer representations.</div>",
        "expectedOutput": "> Has write access? true\n> Has exec access? false",
        "notes": "Bitwise operators convert operands into 32-bit signed integers before performing calculations.",
        "commonMistakes": "Accidentally typing & or | instead of logical && or || in conditionals."
    })

    # 32. Ternary Operator
    b.append({
        "id": 32, "number": "032", "title": "Ternary Operator", "category": "Operators",
        "introduction": "The ternary operator is the only JS operator that takes three operands: condition ? expr1 : expr2.",
        "explanation": "Provides a concise inline alternative to if-else statements when returning or assigning a value based on a condition.",
        "syntax": "condition ? valueIfTrue : valueIfFalse;",
        "keywordsOrMethods": ["?", ":", "conditional operator"],
        "codeExample": "const age = 20;\nconst status = age >= 18 ? 'Adult' : 'Minor';\nconsole.log('User status:', status);\nconst score = 85;\nconst grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';\nconsole.log('Grade:', grade);",
        "htmlExample": "<div class=\"demo-box\">Ternary operators return values directly into expressions.</div>",
        "expectedOutput": "> User status: Adult\n> Grade: B",
        "notes": "Avoid deeply nesting ternary operators as it harms code readability.",
        "commonMistakes": "Using ternary operators for side effects instead of returning values (use if statements for actions)."
    })

    # 33. if Statement
    b.append({
        "id": 33, "number": "033", "title": "if Statement", "category": "Control Flow",
        "introduction": "The if statement executes a block of code if a specified condition evaluates to truthy.",
        "explanation": "The fundamental decision-making construct. The condition inside parentheses is evaluated. If truthy, the code inside the block executes; otherwise, it is skipped.",
        "syntax": "if (condition) {\n  // Code to execute\n}",
        "keywordsOrMethods": ["if", "branching", "truthy condition"],
        "codeExample": "const temperature = 32;\nif (temperature > 30) {\n  console.log('It is a hot day! Stay hydrated.');\n}\nconsole.log('Temperature check complete.');",
        "htmlExample": "<div class=\"demo-box\">if branches execution based on truthy conditions.</div>",
        "expectedOutput": "> It is a hot day! Stay hydrated.\n> Temperature check complete.",
        "notes": "Always use curly braces {} even for single-line if statements to prevent bugs when lines are added later.",
        "commonMistakes": "Putting a semicolon immediately after the if condition: if (condition); { ... }."
    })

    # 34. if-else Statement
    b.append({
        "id": 34, "number": "034", "title": "if-else Statement", "category": "Control Flow",
        "introduction": "if-else executes one block when the condition is true, and an alternate block when false.",
        "explanation": "Guarantees that exactly one of two execution paths will run depending on whether the test expression evaluates to truthy or falsy.",
        "syntax": "if (condition) {\n  // True branch\n} else {\n  // False branch\n}",
        "keywordsOrMethods": ["if", "else", "binary branch"],
        "codeExample": "const isOnline = false;\nif (isOnline) {\n  console.log('User is connected.');\n} else {\n  console.log('User is offline. Reconnecting in 5s...');\n}",
        "htmlExample": "<div class=\"demo-box\">if-else provides a dual-path control flow.</div>",
        "expectedOutput": "> User is offline. Reconnecting in 5s...",
        "notes": "Keep branches balanced and avoid inverted conditions when possible for readability.",
        "commonMistakes": "Writing 'else (condition)' without 'if'."
    })

    # 35. if-else if Statement
    b.append({
        "id": 35, "number": "035", "title": "if-else if Statement", "category": "Control Flow",
        "introduction": "if-else if tests multiple conditions in sequence until one evaluates to true.",
        "explanation": "Allows chaining multiple mutually exclusive conditions. As soon as one condition evaluates to true, its block executes and the entire chain exits.",
        "syntax": "if (cond1) {\n  ...\n} else if (cond2) {\n  ...\n} else {\n  ...\n}",
        "keywordsOrMethods": ["if", "else if", "else", "multi-way branch"],
        "codeExample": "const marks = 78;\nif (marks >= 90) {\n  console.log('Distinction');\n} else if (marks >= 75) {\n  console.log('First Class');\n} else if (marks >= 50) {\n  console.log('Pass');\n} else {\n  console.log('Retry needed');\n}",
        "htmlExample": "<div class=\"demo-box\">Test sequential conditions from most specific to least specific.</div>",
        "expectedOutput": "> First Class",
        "notes": "Conditions must be ordered properly; if a general condition is placed first, more specific branches below will never execute.",
        "commonMistakes": "Forgetting that order matters: if marks >= 50 was first, a score of 95 would match Pass!"
    })

    # 36. switch Statement
    b.append({
        "id": 36, "number": "036", "title": "switch Statement", "category": "Control Flow",
        "introduction": "switch evaluates an expression, matching the expression's value against a series of case clauses.",
        "explanation": "Compares using strict equality (===). When a match is found, statements execute until a 'break' statement is reached or the switch block ends. 'default' executes if no cases match.",
        "syntax": "switch (expression) {\n  case value1:\n    break;\n  default:\n}",
        "keywordsOrMethods": ["switch", "case", "break", "default"],
        "codeExample": "const day = 'Wednesday';\nswitch (day) {\n  case 'Monday':\n    console.log('Week starts');\n    break;\n  case 'Wednesday':\n    console.log('Mid-week progress!');\n    break;\n  case 'Friday':\n    console.log('Weekend arrives');\n    break;\n  default:\n    console.log('Regular weekday');\n}",
        "htmlExample": "<div class=\"demo-box\">switch is clean for discrete value matching.</div>",
        "expectedOutput": "> Mid-week progress!",
        "notes": "Omitting 'break' causes execution to 'fall through' into subsequent cases.",
        "commonMistakes": "Forgetting 'break', causing unintentional fallthrough execution."
    })

    # 37. for Loop
    b.append({
        "id": 37, "number": "037", "title": "for Loop", "category": "Loops & Iteration",
        "introduction": "The for loop repeats a block of code a known number of times using an index counter.",
        "explanation": "Consists of three optional expressions: initialization (let i = 0), condition (i < n), and afterthought (i++), separated by semicolons.",
        "syntax": "for (let i = 0; i < limit; i++) {\n  // repeated code\n}",
        "keywordsOrMethods": ["for", "loop counter", "iteration"],
        "codeExample": "console.log('Counting up:');\nfor (let i = 1; i <= 4; i++) {\n  console.log(`Step ${i}`);\n}",
        "htmlExample": "<div class=\"demo-box\">Classic for loop iterates over bounded ranges.</div>",
        "expectedOutput": "> Counting up:\n> Step 1\n> Step 2\n> Step 3\n> Step 4",
        "notes": "Always declare the index variable with 'let' so it has block scope per iteration.",
        "commonMistakes": "Creating infinite loops by forgetting the increment step (e.g. for (let i = 0; i < 5;) {})."
    })

    # 38. while Loop
    b.append({
        "id": 38, "number": "038", "title": "while Loop", "category": "Loops & Iteration",
        "introduction": "The while loop executes a block of code as long as a specified test condition evaluates to true.",
        "explanation": "The condition is tested before executing the loop body. If the condition is false initially, the loop body never runs.",
        "syntax": "while (condition) {\n  // code\n}",
        "keywordsOrMethods": ["while", "pre-test loop"],
        "codeExample": "let countdown = 3;\nwhile (countdown > 0) {\n  console.log(`T-minus ${countdown}...`);\n  countdown--;\n}\nconsole.log('Liftoff!');",
        "htmlExample": "<div class=\"demo-box\">while is ideal when the iteration count is unknown in advance.</div>",
        "expectedOutput": "> T-minus 3...\n> T-minus 2...\n> T-minus 1...\n> Liftoff!",
        "notes": "Ensure the loop body modifies state so the condition eventually becomes false.",
        "commonMistakes": "Forgetting to update the loop condition variable, causing browser freezes from an infinite loop."
    })

    # 39. do-while Loop
    b.append({
        "id": 39, "number": "039", "title": "do-while Loop", "category": "Loops & Iteration",
        "introduction": "do-while executes its block once first, then repeats as long as the condition remains true.",
        "explanation": "A post-test loop. Unlike while, the body is guaranteed to execute at least one time, regardless of whether the condition is true or false on entry.",
        "syntax": "do {\n  // code\n} while (condition);",
        "keywordsOrMethods": ["do", "while", "post-test"],
        "codeExample": "let attempts = 0;\ndo {\n  attempts++;\n  console.log(`Attempt #${attempts} executed.`);\n} while (attempts < 2);\nconsole.log('Loop completed.');",
        "htmlExample": "<div class=\"demo-box\">do-while guarantees at least one execution.</div>",
        "expectedOutput": "> Attempt #1 executed.\n> Attempt #2 executed.\n> Loop completed.",
        "notes": "Notice the trailing semicolon after while(condition);.",
        "commonMistakes": "Forgetting that the block runs once even if condition is false initially."
    })

    # 40. forEach Loop
    b.append({
        "id": 40, "number": "040", "title": "forEach Loop", "category": "Loops & Iteration",
        "introduction": "forEach() executes a provided callback function once for each array element.",
        "explanation": "Provides a clean, declarative way to iterate over arrays without manually managing an index counter. The callback receives (element, index, array).",
        "syntax": "array.forEach((item, index) => {\n  // code\n});",
        "keywordsOrMethods": ["forEach", "callback", "array iteration"],
        "codeExample": "const colors = ['Crimson', 'Emerald', 'Sapphire'];\ncolors.forEach((color, idx) => {\n  console.log(`${idx + 1}. ${color}`);\n});",
        "htmlExample": "<div class=\"demo-box\">forEach provides functional array traversal.</div>",
        "expectedOutput": "> 1. Crimson\n> 2. Emerald\n> 3. Sapphire",
        "notes": "You cannot 'break' or 'return' early out of a forEach loop. Use for...of if early exit is required.",
        "commonMistakes": "Trying to return a value from forEach; forEach always returns undefined."
    })

    # 41. for...in Loop
    b.append({
        "id": 41, "number": "041", "title": "for...in Loop", "category": "Loops & Iteration",
        "introduction": "for...in iterates over all enumerable property keys of an object.",
        "explanation": "Designed for inspecting object keys. It traverses enumerable properties including those on prototype chains unless filtered with hasOwnProperty.",
        "syntax": "for (const key in object) {\n  console.log(key, object[key]);\n}",
        "keywordsOrMethods": ["for...in", "enumerable keys", "object keys"],
        "codeExample": "const course = {\n  title: 'JavaScript Masterclass',\n  lessons: 230,\n  author: 'NASA-KUN'\n};\nfor (const prop in course) {\n  console.log(`${prop}: ${course[prop]}`);\n}",
        "htmlExample": "<div class=\"demo-box\">for...in traverses object property names.</div>",
        "expectedOutput": "> title: JavaScript Masterclass\n> lessons: 230\n> author: NASA-KUN",
        "notes": "Do not use for...in to iterate over arrays because order is not guaranteed and array methods can be enumerated.",
        "commonMistakes": "Using for...in for arrays instead of for...of."
    })

    # 42. for... of Loop
    b.append({
        "id": 42, "number": "042", "title": "for... of Loop", "category": "Loops & Iteration",
        "introduction": "for...of iterates over values of iterable objects like Arrays, Strings, Maps, and Sets.",
        "explanation": "Introduced in ES6, for...of operates directly on values rather than keys. It supports break, continue, and return statements.",
        "syntax": "for (const value of iterable) {\n  // code\n}",
        "keywordsOrMethods": ["for...of", "iterable", "Symbol.iterator"],
        "codeExample": "const frameworks = ['HTML5', 'CSS3', 'JavaScript'];\nfor (const tech of frameworks) {\n  console.log('Skill:', tech);\n}\nconst greeting = 'CODE';\nfor (const char of greeting) {\n  console.log('Letter:', char);\n}",
        "htmlExample": "<div class=\"demo-box\">for...of directly accesses values of iterables.</div>",
        "expectedOutput": "> Skill: HTML5\n> Skill: CSS3\n> Skill: JavaScript\n> Letter: C\n> Letter: O\n> Letter: D\n> Letter: E",
        "notes": "for...of cannot be used on plain objects directly because objects are not iterables by default.",
        "commonMistakes": "Attempting for (const val of plainObject) without using Object.values() or Object.entries()."
    })

    # 43. break Statement
    b.append({
        "id": 43, "number": "043", "title": "break Statement", "category": "Loops & Iteration",
        "introduction": "The break statement terminates the current loop or switch statement immediately.",
        "explanation": "When break is encountered inside a loop (for, while, do-while), control is transferred to the statement immediately following the loop block.",
        "syntax": "if (condition) {\n  break;\n}",
        "keywordsOrMethods": ["break", "loop termination"],
        "codeExample": "for (let i = 1; i <= 10; i++) {\n  if (i === 4) {\n    console.log('Target 4 found! Breaking loop.');\n    break;\n  }\n  console.log('Checked number:', i);\n}\nconsole.log('Search finished.');",
        "htmlExample": "<div class=\"demo-box\">break stops loop execution immediately.</div>",
        "expectedOutput": "> Checked number: 1\n> Checked number: 2\n> Checked number: 3\n> Target 4 found! Breaking loop.\n> Search finished.",
        "notes": "Can also be used with labeled statements (label: for (...)) to break out of nested outer loops.",
        "commonMistakes": "Using break inside an Array.prototype.forEach callback, which throws a SyntaxError."
    })

    # 44. continue Statement
    b.append({
        "id": 44, "number": "044", "title": "continue Statement", "category": "Loops & Iteration",
        "introduction": "The continue statement terminates execution of statements in the current iteration and advances to the next.",
        "explanation": "In a while loop, it jumps back to the condition. In a for loop, it jumps to the update expression (e.g. i++).",
        "syntax": "if (skipCondition) {\n  continue;\n}",
        "keywordsOrMethods": ["continue", "skip iteration"],
        "codeExample": "console.log('Printing odd numbers under 8:');\nfor (let i = 1; i <= 7; i++) {\n  if (i % 2 === 0) {\n    continue; // Skip even numbers\n  }\n  console.log('Odd:', i);\n}",
        "htmlExample": "<div class=\"demo-box\">continue skips the remainder of the current iteration.</div>",
        "expectedOutput": "> Printing odd numbers under 8:\n> Odd: 1\n> Odd: 3\n> Odd: 5\n> Odd: 7",
        "notes": "continue helps avoid deep nesting of if-blocks inside loops (guard clause pattern).",
        "commonMistakes": "In while loops, forgetting to increment before continue, causing an infinite loop."
    })

    # 45. Function Declaration
    b.append({
        "id": 45, "number": "045", "title": "Function Declaration", "category": "Functions & Scope",
        "introduction": "A function declaration defines a named function hoisted to the top of its enclosing scope.",
        "explanation": "Declared using the 'function' keyword followed by an identifier. Because declarations are hoisted with their complete definition, you can call them before their line of definition.",
        "syntax": "function name(param1, param2) {\n  return result;\n}",
        "keywordsOrMethods": ["function", "hoisting", "named function"],
        "codeExample": "// Calling before declaration works due to hoisting:\nconsole.log(multiply(4, 5));\n\nfunction multiply(x, y) {\n  return x * y;\n}",
        "htmlExample": "<div class=\"demo-box\">Function declarations are hoisted in full.</div>",
        "expectedOutput": "> 20",
        "notes": "Function declarations have their own 'this' binding and 'arguments' object.",
        "commonMistakes": "Conditionally declaring functions inside if blocks in legacy mode, which has cross-browser inconsistencies."
    })

    # 46. Function Expression
    b.append({
        "id": 46, "number": "046", "title": "Function Expression", "category": "Functions & Scope",
        "introduction": "A function expression defines a function inside an expression, typically assigned to a variable.",
        "explanation": "Unlike declarations, function expressions are not hoisted with their bodies. Calling them before assignment throws a TypeError or ReferenceError.",
        "syntax": "const myFunc = function(params) {\n  // body\n};",
        "keywordsOrMethods": ["function expression", "anonymous", "variable binding"],
        "codeExample": "const calculateSquare = function(num) {\n  return num * num;\n};\nconsole.log('Square of 6:', calculateSquare(6));",
        "htmlExample": "<div class=\"demo-box\">Function expressions can be passed as arguments and stored in structures.</div>",
        "expectedOutput": "> Square of 6: 36",
        "notes": "Named function expressions (const f = function helper() {}) can be useful for debugging stack traces.",
        "commonMistakes": "Attempting to invoke a function expression before its declaration line."
    })

    # 47. Arrow Functions
    b.append({
        "id": 47, "number": "047", "title": "Arrow Functions", "category": "Functions & Scope",
        "introduction": "Arrow functions provide a concise syntax and lexically bind the 'this' value from the surrounding scope.",
        "explanation": "Introduced in ES6, arrow functions do not have their own 'this', 'arguments', 'super', or 'new.target'. Ideal for callbacks and functional methods.",
        "syntax": "const add = (a, b) => a + b;\nconst square = x => x * x;",
        "keywordsOrMethods": ["=>", "lexical this", "implicit return"],
        "codeExample": "const double = n => n * 2;\nconsole.log('Double of 15:', double(15));\nconst numbers = [1, 2, 3];\nconst squared = numbers.map(x => x ** 2);\nconsole.log('Squared array:', squared);",
        "htmlExample": "<div class=\"demo-box\">Arrow functions simplify functional programming.</div>",
        "expectedOutput": "> Double of 15: 30\n> Squared array: [1,4,9]",
        "notes": "When returning an object literal directly with implicit return, wrap it in parentheses: () => ({ key: 'val' }).",
        "commonMistakes": "Using arrow functions as object methods where dynamic 'this' of the calling object is needed."
    })

    # 48. Anonymous Functions
    b.append({
        "id": 48, "number": "048", "title": "Anonymous Functions", "category": "Functions & Scope",
        "introduction": "An anonymous function is a function created without a specified identifier name.",
        "explanation": "Frequently used as arguments passed directly into higher-order functions like setTimeout or array methods.",
        "syntax": "setTimeout(function() {\n  console.log('Executed');\n}, 100);",
        "keywordsOrMethods": ["anonymous", "callback", "inline function"],
        "codeExample": "const timer = function() {\n  console.log('Anonymous function executed!');\n};\ntimer();\n\n[10, 20].forEach(function(val) {\n  console.log('Value:', val);\n});",
        "htmlExample": "<div class=\"demo-box\">Anonymous functions are defined on-the-fly.</div>",
        "expectedOutput": "> Anonymous function executed!\n> Value: 10\n> Value: 20",
        "notes": "In modern devtools, named functions are easier to locate in call stacks than anonymous ones.",
        "commonMistakes": "Omitting parentheses around anonymous function definitions when invoked immediately."
    })

    # 49. Function Parameters
    b.append({
        "id": 49, "number": "049", "title": "Function Parameters", "category": "Functions & Scope",
        "introduction": "Parameters are named variables in a function definition that receive passed argument values.",
        "explanation": "JavaScript does not enforce parameter count matching. If fewer arguments are passed, unsupplied parameters default to undefined. Excess arguments are ignored unless accessed via rest parameters or arguments.",
        "syntax": "function greet(name, role) {\n  // parameters: name, role\n}",
        "keywordsOrMethods": ["parameters", "arguments", "arity"],
        "codeExample": "function describeItem(title, price, category) {\n  console.log(`Item: ${title}`);\n  console.log(`Price: $${price}`);\n  console.log(`Category: ${category || 'Uncategorized'}`);\n}\ndescribeItem('Headphones', 59.99);\n// category received undefined",
        "htmlExample": "<div class=\"demo-box\">Parameters receive values passed to the function call.</div>",
        "expectedOutput": "> Item: Headphones\n> Price: $59.99\n> Category: Uncategorized",
        "notes": "Parameters are local variables created inside the function body upon invocation.",
        "commonMistakes": "Assuming a TypeError will be thrown if wrong number of arguments are passed (JS defaults them to undefined)."
    })

    # 50. Default Parameters
    b.append({
        "id": 50, "number": "050", "title": "Default Parameters", "category": "Functions & Scope",
        "introduction": "Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.",
        "explanation": "Introduced in ES6, default parameters replace manual checks like 'x = x || defaultValue'. Defaults are only triggered when the passed argument is undefined.",
        "syntax": "function greet(name = 'Guest', role = 'Viewer') {\n  ...\n}",
        "keywordsOrMethods": ["default parameters", "ES6", "fallback"],
        "codeExample": "function createServerConfig(port = 3000, host = 'localhost') {\n  console.log(`Server starting on http://${host}:${port}`);\n}\ncreateServerConfig(); // Uses both defaults\ncreateServerConfig(8080); // Custom port, default host\ncreateServerConfig(5000, '0.0.0.0'); // Both customized",
        "htmlExample": "<div class=\"demo-box\">Default parameters simplify parameter validation.</div>",
        "expectedOutput": "> Server starting on http://localhost:3000\n> Server starting on http://localhost:8080\n> Server starting on http://0.0.0.0:5000",
        "notes": "Passing null does NOT trigger default parameter values, because null is considered an intentional value.",
        "commonMistakes": "Expecting greet(null) to use the default; only undefined triggers default parameters."
    })

    return b
