/**
 * PLAY-CODE (@N4) — Master JavaScript 230 Lessons Curriculum Dataset
 * Project Owner: NASA-KUN
 * Exact Authoritative Inventory (1 to 230)
 * Strict Fidelity: Preserves exact titles, historical spellings, and original ordering.
 */

const JAVASCRIPT_LESSONS = [
  {
    "id": 1,
    "number": "001",
    "title": "Inline JavaScript",
    "category": "Basics & Dialogs",
    "introduction": "Inline JavaScript refers to executing JS code directly inside HTML element event attributes.",
    "explanation": "Inline JavaScript places executable JS code directly inside HTML attributes like onclick, onmouseover, or href=\"javascript:...\". While historically common for quick triggers, modern web standards recommend separating JS into external files via addEventListener.",
    "syntax": "<button onclick=\"alert('Clicked!')\">Click</button>",
    "keywordsOrMethods": [
      "onclick",
      "onmouseover",
      "javascript:"
    ],
    "codeExample": "// Simulating inline event execution\nfunction handleInlineClick() {\n  console.log('Button clicked via inline event attribute simulation!');\n}\n\nhandleInlineClick();",
    "htmlExample": "<button onclick=\"console.log('Direct inline execution!')\" class=\"demo-btn\">Click Me (Inline)</button>",
    "expectedOutput": "> Button clicked via inline event attribute simulation!\n> Direct inline execution!",
    "notes": "Inline JavaScript violates Content Security Policy (CSP) best practices and couples HTML markup with behavior.",
    "commonMistakes": "Overusing inline handlers instead of using element.addEventListener() in external script files."
  },
  {
    "id": 2,
    "number": "002",
    "title": "Internal JavaScript",
    "category": "Basics & Dialogs",
    "introduction": "Internal JavaScript refers to script code embedded within <script> tags inside the HTML document.",
    "explanation": "Internal JavaScript is embedded directly within <script>...</script> tags in the <head> or at the bottom of the <body> of an HTML page. It executes in document order as the browser parses the HTML.",
    "syntax": "<script>\n  // JavaScript code\n  console.log('Hello from internal script');\n</script>",
    "keywordsOrMethods": [
      "<script>",
      "defer",
      "type=\"text/javascript\""
    ],
    "codeExample": "const message = 'Hello from Internal JavaScript!';\nconsole.log(message);\nconsole.log('Document ready state:', typeof document !== 'undefined' ? 'In Browser' : 'In Node');",
    "htmlExample": "<div id=\"internal-demo\">Check the console output for internal script execution.</div>",
    "expectedOutput": "> Hello from Internal JavaScript!\n> Document ready state: In Browser",
    "notes": "Useful for single-page demos or page-specific configuration, but external files are better for caching across pages.",
    "commonMistakes": "Placing scripts in <head> without 'defer' or 'DOMContentLoaded', leading to errors when querying DOM elements."
  },
  {
    "id": 3,
    "number": "003",
    "title": "External JavaScript",
    "category": "Basics & Dialogs",
    "introduction": "External JavaScript involves writing JS in separate .js files linked via <script src=\"app.js\">.",
    "explanation": "External JavaScript keeps behavior isolated from markup. Browsers cache external files, reducing page load times on subsequent visits and improving maintainability and teamwork.",
    "syntax": "<script src=\"path/to/script.js\" defer></script>",
    "keywordsOrMethods": [
      "<script src=\"...\">",
      "defer",
      "async"
    ],
    "codeExample": "// In app.js (external file):\nexport function initializeApp() {\n  console.log('External script initialized successfully!');\n}\n\ninitializeApp();",
    "htmlExample": "<p>External scripts keep HTML clean and leverage browser caching.</p>",
    "expectedOutput": "> External script initialized successfully!",
    "notes": "Always use 'defer' or place script tags before the closing </body> tag to prevent blocking the HTML parser.",
    "commonMistakes": "Adding code inside a <script src=\"...\">...</script> tag \u2014 the browser ignores inner content when 'src' is present."
  },
  {
    "id": 4,
    "number": "004",
    "title": "alert() Method",
    "category": "Basics & Dialogs",
    "introduction": "The alert() method displays a modal dialog box with a specified message and an OK button.",
    "explanation": "window.alert() halts script execution and user interaction until the user dismisses the dialog by clicking OK. It takes a single string or value, coercing non-strings into text.",
    "syntax": "window.alert(message);\n// or simply:\nalert('Welcome!');",
    "keywordsOrMethods": [
      "window.alert()",
      "modal dialog"
    ],
    "codeExample": "const notice = 'Alert: Welcome to CodePlay JavaScript Curriculum!';\nconsole.log('Simulating alert:', notice);\n// alert(notice); // In interactive runner we log to avoid freezing tabs",
    "htmlExample": "<button onclick=\"console.log('Alert triggered!')\" class=\"demo-btn\">Show Alert</button>",
    "expectedOutput": "> Simulating alert: Alert: Welcome to CodePlay JavaScript Curriculum!",
    "notes": "alert() is synchronous and blocking. Modern web applications prefer accessible custom toast or modal components.",
    "commonMistakes": "Using alert() for debugging objects \u2014 it displays '[object Object]' instead of useful inspection data."
  },
  {
    "id": 5,
    "number": "005",
    "title": "console.log() Method",
    "category": "Basics & Dialogs",
    "introduction": "console.log() outputs messages, variables, and objects to the browser inspection console.",
    "explanation": "The primary debugging tool in JavaScript. It accepts multiple comma-separated arguments, supports format specifiers (%s, %d, %o), and renders nested object trees interactively.",
    "syntax": "console.log(data1, data2, ...);",
    "keywordsOrMethods": [
      "console.log",
      "console.info",
      "console.table",
      "console.error"
    ],
    "codeExample": "const course = 'JavaScript 230 Lessons';\nconst completed = 5;\nconsole.log('Course:', course);\nconsole.log('Progress:', completed, 'lessons completed');\nconsole.log({ id: 5, status: 'Active' });",
    "htmlExample": "<div class=\"demo-box\">Open developer tools or check the output console below.</div>",
    "expectedOutput": "> Course: JavaScript 230 Lessons\n> Progress: 5 lessons completed\n> {\"id\":5,\"status\":\"Active\"}",
    "notes": "console.table() can be used for tabular display of arrays and objects in modern devtools.",
    "commonMistakes": "Leaving excessive console.log() calls in production builds which can leak sensitive data."
  },
  {
    "id": 6,
    "number": "006",
    "title": "confirm() Method",
    "category": "Basics & Dialogs",
    "introduction": "confirm() displays a modal dialog with OK and Cancel buttons, returning a boolean.",
    "explanation": "window.confirm() returns true if the user clicks OK, and false if the user clicks Cancel or closes the dialog. Execution blocks until the user makes a choice.",
    "syntax": "const userChoice = confirm('Do you wish to proceed?');",
    "keywordsOrMethods": [
      "window.confirm()",
      "boolean return"
    ],
    "codeExample": "function deleteRecord(id, userConfirmed) {\n  console.log(`Action requested for record #${id}`);\n  if (userConfirmed) {\n    console.log('User confirmed: Deleting record from database...');\n  } else {\n    console.log('User canceled: Operation aborted.');\n  }\n}\ndeleteRecord(101, true);\ndeleteRecord(102, false);",
    "htmlExample": "<button onclick=\"console.log('Confirm simulated')\" class=\"demo-btn\">Confirm Action</button>",
    "expectedOutput": "> Action requested for record #101\n> User confirmed: Deleting record from database...\n> Action requested for record #102\n> User canceled: Operation aborted.",
    "notes": "Like alert(), confirm() blocks thread execution and cannot be customized with custom CSS styling.",
    "commonMistakes": "Assuming confirm() returns the string 'true'/'false' instead of real boolean primitives true/false."
  },
  {
    "id": 7,
    "number": "007",
    "title": "prompt() Method",
    "category": "Basics & Dialogs",
    "introduction": "prompt() displays a dialog asking the user to input text, returning the string or null.",
    "explanation": "window.prompt(message, defaultValue) opens a modal text input box. If the user clicks OK, it returns the entered string (empty string if left blank). If the user cancels, it returns null.",
    "syntax": "const answer = prompt('Enter your name:', 'Anonymous');",
    "keywordsOrMethods": [
      "window.prompt()",
      "user input",
      "null return"
    ],
    "codeExample": "function greetVisitor(nameInput) {\n  if (nameInput === null) {\n    console.log('User cancelled prompt dialog.');\n  } else if (nameInput.trim() === '') {\n    console.log('No name provided.');\n  } else {\n    console.log(`Welcome to CodePlay, ${nameInput}!`);\n  }\n}\ngreetVisitor('NASA-KUN');\ngreetVisitor(null);",
    "htmlExample": "<button onclick=\"console.log('Prompt simulated')\" class=\"demo-btn\">Prompt User</button>",
    "expectedOutput": "> Welcome to CodePlay, NASA-KUN!\n> User cancelled prompt dialog.",
    "notes": "All inputs received from prompt() are strings, even if digits are typed. Numbers must be converted with Number() or parseInt().",
    "commonMistakes": "Forgetting to handle the null return case when a user presses Cancel."
  },
  {
    "id": 8,
    "number": "008",
    "title": "Declaring Variables",
    "category": "Variables & Scope",
    "introduction": "Variables are named containers used to store data values in memory during execution.",
    "explanation": "JavaScript supports variable declarations using var, let, and const. Modern JavaScript emphasizes 'const' by default, and 'let' only when reassignment is strictly necessary. 'var' is legacy function-scoped.",
    "syntax": "let variableName = value;\nconst constantName = value;",
    "keywordsOrMethods": [
      "var",
      "let",
      "const",
      "assignment ="
    ],
    "codeExample": "let score = 0;\nscore += 10;\nconst maxLives = 3;\nconsole.log('Current score:', score);\nconsole.log('Maximum lives:', maxLives);",
    "htmlExample": "<div class=\"demo-box\">Variables allocate memory for dynamic program state.</div>",
    "expectedOutput": "> Current score: 10\n> Maximum lives: 3",
    "notes": "Always declare variables before using them to prevent implicit global variable creation.",
    "commonMistakes": "Assigning to undeclared variables (e.g. x = 10 without let/const) in non-strict mode."
  },
  {
    "id": 9,
    "number": "009",
    "title": "var Keyword",
    "category": "Variables & Scope",
    "introduction": "var declares function-scoped or globally-scoped variables, hoisted with undefined.",
    "explanation": "var was the sole declaration keyword in JavaScript prior to ES6 (2015). It does not respect block scoping ({ ... }) and is hoisted to the top of its enclosing function, initialized with undefined.",
    "syntax": "var x = 10;",
    "keywordsOrMethods": [
      "var",
      "hoisting",
      "function scope"
    ],
    "codeExample": "console.log('Hoisted value of a:', a); // undefined, not ReferenceError\nvar a = 42;\n\nif (true) {\n  var blockScoped = 'I leak outside the if block!';\n}\nconsole.log('blockScoped outside block:', blockScoped);",
    "htmlExample": "<div class=\"demo-box\">var has function scope, not block scope.</div>",
    "expectedOutput": "> Hoisted value of a: undefined\n> blockScoped outside block: I leak outside the if block!",
    "notes": "Modern codebases avoid var in favor of block-scoped let and const.",
    "commonMistakes": "Accidentally overwriting loop variables when using var inside nested loops."
  },
  {
    "id": 10,
    "number": "010",
    "title": "let Keyword",
    "category": "Variables & Scope",
    "introduction": "let declares reassignable, block-scoped local variables with a temporal dead zone.",
    "explanation": "Introduced in ES6, let variables are confined to the nearest enclosing pair of curly braces {}. Accessing a let variable before its declaration throws a ReferenceError (Temporal Dead Zone), avoiding hoisting bugs.",
    "syntax": "let count = 1;\ncount = 2;",
    "keywordsOrMethods": [
      "let",
      "block scope",
      "TDZ"
    ],
    "codeExample": "let counter = 100;\nif (true) {\n  let counter = 200; // Distinct block-scoped variable\n  console.log('Inside block:', counter);\n}\nconsole.log('Outside block:', counter);",
    "htmlExample": "<div class=\"demo-box\">let provides clean block scoping.</div>",
    "expectedOutput": "> Inside block: 200\n> Outside block: 100",
    "notes": "Use let when you know a variable will be reassigned (e.g., loop counters, accumulators).",
    "commonMistakes": "Attempting to redeclare the same let variable within the same scope."
  },
  {
    "id": 11,
    "number": "011",
    "title": "const Keyword",
    "category": "Variables & Scope",
    "introduction": "const declares block-scoped read-only identifiers that cannot be reassigned.",
    "explanation": "const variables must be initialized during declaration. Reassignment produces a TypeError. However, objects and arrays declared with const remain mutable (their properties or elements can still be altered).",
    "syntax": "const PI = 3.14159;\nconst config = { theme: 'dark' };",
    "keywordsOrMethods": [
      "const",
      "immutable binding",
      "mutation"
    ],
    "codeExample": "const API_URL = 'https://api.codeplay.dev';\nconst settings = { theme: 'dark' };\nsettings.theme = 'midnight'; // Allowed! Object mutation\nconsole.log('API Endpoint:', API_URL);\nconsole.log('Updated theme:', settings.theme);",
    "htmlExample": "<div class=\"demo-box\">const creates an immutable binding, not an immutable value.</div>",
    "expectedOutput": "> API Endpoint: https://api.codeplay.dev\n> Updated theme: midnight",
    "notes": "To make an object's properties truly immutable, use Object.freeze().",
    "commonMistakes": "Confusing const reassignment (const a = 1; a = 2 error) with object property mutation."
  },
  {
    "id": 12,
    "number": "012",
    "title": "Primitive Data Types",
    "category": "Data Types",
    "introduction": "JavaScript has seven primitive types: string, number, bigint, boolean, undefined, symbol, null.",
    "explanation": "Primitives represent single, immutable values stored directly on the stack by value, unlike Objects which are stored on the heap by reference. When you operate on a primitive, you produce a new value rather than modifying the original.",
    "syntax": "const str = 'hello';\nconst num = 42;\nconst bool = true;",
    "keywordsOrMethods": [
      "primitive",
      "immutable",
      "by value"
    ],
    "codeExample": "let str = 'code';\nlet copy = str;\ncopy += 'play';\nconsole.log('Original str:', str);\nconsole.log('Modified copy:', copy);",
    "htmlExample": "<div class=\"demo-box\">Primitives are passed by value and immutable.</div>",
    "expectedOutput": "> Original str: code\n> Modified copy: codeplay",
    "notes": "typeof null returns 'object' due to a historical bug in JavaScript from 1995 that cannot be fixed without breaking web compatibility.",
    "commonMistakes": "Assuming calling string methods like str.toUpperCase() modifies the original string."
  },
  {
    "id": 13,
    "number": "013",
    "title": "String Data Type",
    "category": "Data Types",
    "introduction": "The String type represents textual data, enclosed in single quotes, double quotes, or backticks.",
    "explanation": "Strings are sequences of 16-bit UTF-16 code units. Template literals (backticks) permit multi-line strings and interpolation via ${expression}.",
    "syntax": "const s1 = 'Single';\nconst s2 = \"Double\";\nconst s3 = `Template ${1 + 1}`;",
    "keywordsOrMethods": [
      "String",
      "length",
      "template literal"
    ],
    "codeExample": "const lang = 'JavaScript';\nconst lessons = 230;\nconst intro = `Welcome to ${lang}! Total lessons: ${lessons}.`;\nconsole.log(intro);\nconsole.log('Character count:', intro.length);",
    "htmlExample": "<div class=\"demo-box\">Strings represent sequences of characters.</div>",
    "expectedOutput": "> Welcome to JavaScript! Total lessons: 230.\n> Character count: 44",
    "notes": "Strings are zero-indexed: lang[0] gives 'J'.",
    "commonMistakes": "Attempting to modify a character in place (str[0] = 'X'), which silently fails in JavaScript."
  },
  {
    "id": 14,
    "number": "014",
    "title": "Number Data Type",
    "category": "Data Types",
    "introduction": "The Number type represents both integers and floating-point values using IEEE 754 64-bit precision.",
    "explanation": "JavaScript has no distinct 'int' vs 'float' type; all standard numbers are double-precision floats. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).",
    "syntax": "const count = 42;\nconst price = 19.99;\nconst exp = 2e6;",
    "keywordsOrMethods": [
      "Number",
      "NaN",
      "Infinity",
      "MAX_SAFE_INTEGER"
    ],
    "codeExample": "const integer = 100;\nconst floatNum = 3.14159;\nconsole.log('Division:', integer / 4);\nconsole.log('Special value:', 1 / 0); // Infinity\nconsole.log('Invalid math:', 'abc' * 2); // NaN",
    "htmlExample": "<div class=\"demo-box\">Numbers use IEEE 754 64-bit float representation.</div>",
    "expectedOutput": "> Division: 25\n> Special value: Infinity\n> Invalid math: NaN",
    "notes": "Floating-point precision limits can make 0.1 + 0.2 equal 0.30000000000000004. Use toFixed() or integer math for money calculations.",
    "commonMistakes": "Comparing floating point numbers directly using === without an epsilon tolerance."
  },
  {
    "id": 15,
    "number": "015",
    "title": "Boolean Data Type",
    "category": "Data Types",
    "introduction": "The Boolean data type has exactly two values: true and false.",
    "explanation": "Booleans represent truth values in logical conditions and flow control. Falsy values (0, '', null, undefined, NaN, false) evaluate to false, while all other values are truthy.",
    "syntax": "const isActive = true;\nconst hasAccess = false;",
    "keywordsOrMethods": [
      "true",
      "false",
      "Boolean()",
      "truthy",
      "falsy"
    ],
    "codeExample": "const isLoggedIn = true;\nconst cartItems = 3;\nconst canCheckout = isLoggedIn && cartItems > 0;\nconsole.log('Can checkout:', canCheckout);\nconsole.log('Boolean of empty string:', Boolean(''));\nconsole.log('Boolean of non-empty string:', Boolean('hello'));",
    "htmlExample": "<div class=\"demo-box\">Booleans govern decision making in conditionals.</div>",
    "expectedOutput": "> Can checkout: true\n> Boolean of empty string: false\n> Boolean of non-empty string: true",
    "notes": "Double negation !!value is a concise idiom to convert any value to its boolean equivalent.",
    "commonMistakes": "Treating the string 'false' as false. Any non-empty string is truthy!"
  },
  {
    "id": 16,
    "number": "016",
    "title": "Undefined Data Type",
    "category": "Data Types",
    "introduction": "undefined indicates that a variable has been declared but not yet assigned a value.",
    "explanation": "Functions without an explicit return statement return undefined. Object properties that do not exist also evaluate to undefined. Its typeof is 'undefined'.",
    "syntax": "let unassigned;\nconsole.log(unassigned); // undefined",
    "keywordsOrMethods": [
      "undefined",
      "void",
      "uninitialized"
    ],
    "codeExample": "let userName;\nconsole.log('Unassigned variable:', userName);\nfunction noReturn() {}\nconsole.log('Function return:', noReturn());\nconst user = { name: 'Alice' };\nconsole.log('Missing property:', user.age);",
    "htmlExample": "<div class=\"demo-box\">undefined represents an uninitialized state.</div>",
    "expectedOutput": "> Unassigned variable: undefined\n> Function return: undefined\n> Missing property: undefined",
    "notes": "undefined is a primitive type whose only value is undefined.",
    "commonMistakes": "Manually assigning a variable to undefined instead of null to represent 'empty'."
  },
  {
    "id": 17,
    "number": "017",
    "title": "Null Data Type",
    "category": "Data Types",
    "introduction": "null represents the deliberate intentional absence of any object value.",
    "explanation": "Unlike undefined which means 'unassigned by default', null is an explicit assignment indicating that a variable intentionally holds no value or points to no object.",
    "syntax": "let selectedItem = null;",
    "keywordsOrMethods": [
      "null",
      "empty",
      "intentional absence"
    ],
    "codeExample": "let currentTarget = null;\nconsole.log('Initial state:', currentTarget);\nconsole.log('typeof null:', typeof currentTarget); // 'object' historical artifact\nconsole.log('null == undefined:', null == undefined); // true (loose)\nconsole.log('null === undefined:', null === undefined); // false (strict)",
    "htmlExample": "<div class=\"demo-box\">null represents intentional emptiness.</div>",
    "expectedOutput": "> Initial state: null\n> typeof null: object\n> null == undefined: true\n> null === undefined: false",
    "notes": "Always use strict equality === when checking for null to avoid matching undefined.",
    "commonMistakes": "Expecting typeof null to equal 'null'."
  },
  {
    "id": 18,
    "number": "018",
    "title": "Symbol Data Type",
    "category": "Data Types",
    "introduction": "Symbol creates unique and immutable primitive identifiers, often used as object property keys.",
    "explanation": "Introduced in ES6, every Symbol() call creates a completely unique value, even with the same description. Symbols cannot be accidentally overwritten and are ignored by standard for...in loops.",
    "syntax": "const sym = Symbol('description');",
    "keywordsOrMethods": [
      "Symbol()",
      "Symbol.for()",
      "unique key"
    ],
    "codeExample": "const id1 = Symbol('id');\nconst id2 = Symbol('id');\nconsole.log('Symbols equal?', id1 === id2); // false\nconst user = {\n  name: 'NASA',\n  [id1]: 98765\n};\nconsole.log('Symbol property value:', user[id1]);\nconsole.log('Standard Object.keys():', Object.keys(user));",
    "htmlExample": "<div class=\"demo-box\">Symbols prevent property collision in objects and libraries.</div>",
    "expectedOutput": "> Symbols equal? false\n> Symbol property value: 98765\n> Standard Object.keys(): [\"name\"]",
    "notes": "Use Object.getOwnPropertySymbols() to retrieve symbol keys from an object.",
    "commonMistakes": "Calling 'new Symbol()' \u2014 Symbol is a factory function, not a constructor."
  },
  {
    "id": 19,
    "number": "019",
    "title": "BigInt Data Type",
    "category": "Data Types",
    "introduction": "BigInt represents whole integers beyond the safe 2^53 - 1 limit of standard Number.",
    "explanation": "Standard numbers lose precision above Number.MAX_SAFE_INTEGER (9007199254740991). BigInt literals are suffixed with 'n' (e.g. 100n) or created via BigInt(val). They support arbitrary precision arithmetic.",
    "syntax": "const huge = 9007199254740995n;\nconst alsoHuge = BigInt('9007199254740995');",
    "keywordsOrMethods": [
      "BigInt",
      "n suffix",
      "arbitrary precision"
    ],
    "codeExample": "const maxSafe = Number.MAX_SAFE_INTEGER;\nconsole.log('Max Safe Integer:', maxSafe);\nconsole.log('Standard float overflow:', maxSafe + 1 === maxSafe + 2); // true (precision lost)\nconst bigSafe = 9007199254740991n;\nconsole.log('BigInt exact math:', bigSafe + 1n === bigSafe + 2n); // false (precise)",
    "htmlExample": "<div class=\"demo-box\">BigInt handles cryptography and large ID integers without rounding error.</div>",
    "expectedOutput": "> Max Safe Integer: 9007199254740991\n> Standard float overflow: true\n> BigInt exact math: false",
    "notes": "You cannot mix BigInt and standard Number in arithmetic operations without explicit conversion.",
    "commonMistakes": "Writing 10n + 5 (mixing BigInt and Number produces a TypeError)."
  },
  {
    "id": 20,
    "number": "020",
    "title": "typeof Operator",
    "category": "Data Types",
    "introduction": "The typeof operator returns a string indicating the type of the unevaluated operand.",
    "explanation": "typeof inspects variables and expressions. It returns one of: 'string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', or 'function'.",
    "syntax": "typeof operand\n// or\ntypeof(operand)",
    "keywordsOrMethods": [
      "typeof",
      "type inspection"
    ],
    "codeExample": "console.log(typeof 'hello'); // string\nconsole.log(typeof 42); // number\nconsole.log(typeof true); // boolean\nconsole.log(typeof undefined); // undefined\nconsole.log(typeof null); // object (quirk)\nconsole.log(typeof function() {}); // function\nconsole.log(typeof [1, 2]); // object",
    "htmlExample": "<div class=\"demo-box\">typeof is useful for primitive validation.</div>",
    "expectedOutput": "> string\n> number\n> boolean\n> undefined\n> object\n> function\n> object",
    "notes": "To distinguish Arrays from Objects, use Array.isArray(value).",
    "commonMistakes": "Using typeof to check for null (it returns 'object'). Check value === null instead."
  },
  {
    "id": 21,
    "number": "021",
    "title": "Type Conversion",
    "category": "Type Conversion",
    "introduction": "Explicit type conversion occurs when you deliberately transform a value from one type to another.",
    "explanation": "Also called type casting. Common conversion functions include String(val), Number(val), Boolean(val), and toString(). Explicit conversion creates predictable, clean code.",
    "syntax": "const num = Number('123');\nconst str = String(456);\nconst bool = Boolean(1);",
    "keywordsOrMethods": [
      "Number()",
      "String()",
      "Boolean()",
      "toString()"
    ],
    "codeExample": "const input = '42';\nconst convertedNum = Number(input);\nconsole.log('Converted value:', convertedNum, 'Type:', typeof convertedNum);\nconst num = 100;\nconst strNum = num.toString();\nconsole.log('Converted string:', strNum, 'Type:', typeof strNum);",
    "htmlExample": "<div class=\"demo-box\">Explicit type conversion eliminates unexpected type bugs.</div>",
    "expectedOutput": "> Converted value: 42 Type: number\n> Converted string: 100 Type: string",
    "notes": "Number('') converts to 0, while Number('hello') results in NaN.",
    "commonMistakes": "Converting an invalid string to Number and not checking if the result is NaN."
  },
  {
    "id": 22,
    "number": "022",
    "title": "Type Coercion",
    "category": "Type Conversion",
    "introduction": "Implicit type coercion is the automatic conversion of values by the JS engine during operations.",
    "explanation": "When operators like +, ==, or - encounter mismatched types, JS automatically coerces one operand. The + operator prioritizes string concatenation if either operand is a string, while - forces numeric conversion.",
    "syntax": "'5' - 2 // 3\n'5' + 2 // '52'",
    "keywordsOrMethods": [
      "implicit coercion",
      "+ concatenation",
      "loose equality =="
    ],
    "codeExample": "console.log('\"5\" + 2 =', '5' + 2); // '52' string\nconsole.log('\"5\" - 2 =', '5' - 2); // 3 number\nconsole.log('\"10\" * \"2\" =', '10' * '2'); // 20 number\nconsole.log('true + 1 =', true + 1); // 2 number",
    "htmlExample": "<div class=\"demo-box\">Understand coercion to avoid subtle calculation errors.</div>",
    "expectedOutput": "> \"5\" + 2 = 52\n> \"5\" - 2 = 3\n> \"10\" * \"2\" = 20\n> true + 1 = 2",
    "notes": "Always prefer strict equality === to avoid unexpected implicit coercion bugs.",
    "commonMistakes": "Adding numbers obtained from input elements with '+' without converting them first: '10' + '20' = '1020'."
  },
  {
    "id": 23,
    "number": "023",
    "title": "parseInt() Function",
    "category": "Type Conversion",
    "introduction": "parseInt() parses a string argument and returns an integer of the specified radix.",
    "explanation": "parseInt(string, radix) reads characters from left to right until it encounters a non-numeric character. It strips whitespace and supports different bases (radix 2 for binary, 16 for hex, 10 for decimal).",
    "syntax": "parseInt(string, radix);",
    "keywordsOrMethods": [
      "parseInt",
      "radix",
      "base-10"
    ],
    "codeExample": "console.log(parseInt('42px', 10)); // 42\nconsole.log(parseInt('1010', 2)); // 10 (binary)\nconsole.log(parseInt('FF', 16)); // 255 (hex)\nconsole.log(parseInt('3.14159', 10)); // 3 (truncates decimals)",
    "htmlExample": "<div class=\"demo-box\">parseInt parses leading integer characters.</div>",
    "expectedOutput": "> 42\n> 10\n> 255\n> 3",
    "notes": "Always specify the radix (e.g. 10) to avoid legacy octal parsing bugs.",
    "commonMistakes": "Expecting parseInt to round numbers; it simply truncates at the decimal point."
  },
  {
    "id": 24,
    "number": "024",
    "title": "parseFloat() Function",
    "category": "Type Conversion",
    "introduction": "parseFloat() parses a string argument and returns a floating-point number.",
    "explanation": "parseFloat parses characters from the beginning of a string, including a decimal point and exponent notation (e/E), stopping at the first invalid character.",
    "syntax": "parseFloat(string);",
    "keywordsOrMethods": [
      "parseFloat",
      "floating point",
      "decimals"
    ],
    "codeExample": "console.log(parseFloat('3.14rem')); // 3.14\nconsole.log(parseFloat('  120.55 USD')); // 120.55\nconsole.log(parseFloat('1.5e3')); // 1500\nconsole.log(parseFloat('abc12')); // NaN",
    "htmlExample": "<div class=\"demo-box\">parseFloat is ideal for extracting measurements with decimals.</div>",
    "expectedOutput": "> 3.14\n> 120.55\n> 1500\n> NaN",
    "notes": "parseFloat only parses base-10 numbers.",
    "commonMistakes": "Passing strings with commas for decimal points (e.g., '3,14'), which stops parsing at the comma."
  },
  {
    "id": 25,
    "number": "025",
    "title": "isNaN() Function",
    "category": "Type Conversion",
    "introduction": "isNaN() determines whether a value coerced to number is the special value NaN.",
    "explanation": "Global isNaN() first coerces its argument to a Number. Because of this, isNaN('hello') is true. Modern code prefers Number.isNaN(), which checks strictly without coercion.",
    "syntax": "isNaN(value)\nNumber.isNaN(value)",
    "keywordsOrMethods": [
      "isNaN",
      "Number.isNaN",
      "Not-a-Number"
    ],
    "codeExample": "console.log('Global isNaN(\"hello\"):', isNaN('hello')); // true (coerced)\nconsole.log('Number.isNaN(\"hello\"):', Number.isNaN('hello')); // false (strict)\nconsole.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true\nconsole.log('NaN === NaN:', NaN === NaN); // false! Always use isNaN",
    "htmlExample": "<div class=\"demo-box\">NaN is the only value in JavaScript not equal to itself.</div>",
    "expectedOutput": "> Global isNaN(\"hello\"): true\n> Number.isNaN(\"hello\"): false\n> Number.isNaN(NaN): true\n> NaN === NaN: false",
    "notes": "Number.isNaN() is the recommended modern check as it does not coerce non-numbers.",
    "commonMistakes": "Trying to check if a variable is NaN using 'val === NaN'."
  },
  {
    "id": 26,
    "number": "026",
    "title": "isFinite() Function",
    "category": "Type Conversion",
    "introduction": "isFinite() determines whether a passed value is a finite number.",
    "explanation": "Returns false for Infinity, -Infinity, and NaN. The global isFinite() coerces the input to number, while Number.isFinite() performs a strict type check.",
    "syntax": "isFinite(value)\nNumber.isFinite(value)",
    "keywordsOrMethods": [
      "isFinite",
      "Number.isFinite",
      "Infinity"
    ],
    "codeExample": "console.log('isFinite(100):', Number.isFinite(100)); // true\nconsole.log('isFinite(1/0):', Number.isFinite(1 / 0)); // false\nconsole.log('isFinite(NaN):', Number.isFinite(NaN)); // false\nconsole.log('Global isFinite(\"42\"):', isFinite('42')); // true (coerced)",
    "htmlExample": "<div class=\"demo-box\">Validate that calculations produced a usable real number.</div>",
    "expectedOutput": "> isFinite(100): true\n> isFinite(1/0): false\n> isFinite(NaN): false\n> Global isFinite(\"42\"): true",
    "notes": "Use Number.isFinite() when you want to ensure the input was already a valid number primitive.",
    "commonMistakes": "Assuming strings like '0' are rejected by global isFinite (it coerces them to 0 and returns true)."
  },
  {
    "id": 27,
    "number": "027",
    "title": "Arithmetic Operators",
    "category": "Operators",
    "introduction": "Arithmetic operators perform mathematical calculations on numeric operands.",
    "explanation": "Includes addition (+), subtraction (-), multiplication (*), division (/), modulus (%), exponentiation (**), increment (++), and decrement (--).",
    "syntax": "a + b; a - b; a * b; a / b; a % b; a ** b;",
    "keywordsOrMethods": [
      "+",
      "-",
      "*",
      "/",
      "%",
      "**",
      "++",
      "--"
    ],
    "codeExample": "let a = 10, b = 3;\nconsole.log('Add:', a + b); // 13\nconsole.log('Multiply:', a * b); // 30\nconsole.log('Remainder:', a % b); // 1\nconsole.log('Power:', a ** b); // 1000\na++;\nconsole.log('Incremented a:', a); // 11",
    "htmlExample": "<div class=\"demo-box\">Arithmetic operators form the basis of all numeric computation.</div>",
    "expectedOutput": "> Add: 13\n> Multiply: 30\n> Remainder: 1\n> Power: 1000\n> Incremented a: 11",
    "notes": "** was introduced in ES2016 as a cleaner alternative to Math.pow().",
    "commonMistakes": "Confusing post-increment (a++) and pre-increment (++a) in complex expressions."
  },
  {
    "id": 28,
    "number": "028",
    "title": "Assignment Operators",
    "category": "Operators",
    "introduction": "Assignment operators assign values to the left operand, often combining operations.",
    "explanation": "Basic assignment (=) stores a value. Compound assignments (+=, -=, *=, /=, %=, **=, &&=, ||=, ??=) perform an operation and assign the result in one step.",
    "syntax": "x += y; // Equivalent to: x = x + y",
    "keywordsOrMethods": [
      "=",
      "+=",
      "-=",
      "*=",
      "/=",
      "??="
    ],
    "codeExample": "let balance = 100;\nbalance += 50; // 150\nbalance *= 2;  // 300\nbalance -= 40; // 260\nconsole.log('Final Balance:', balance);\nlet defaultUser = null;\ndefaultUser ??= 'Guest';\nconsole.log('Nullish assignment:', defaultUser);",
    "htmlExample": "<div class=\"demo-box\">Compound assignment reduces repetition.</div>",
    "expectedOutput": "> Final Balance: 260\n> Nullish assignment: Guest",
    "notes": "Logical assignment operators (&&=, ||=, ??=) were added in ES2021.",
    "commonMistakes": "Using = (assignment) inside an if condition instead of === (equality check)."
  },
  {
    "id": 29,
    "number": "029",
    "title": "Comparison Operators",
    "category": "Operators",
    "introduction": "Comparison operators compare two values and return a boolean result.",
    "explanation": "Includes strict equality (===), strict inequality (!==), loose equality (==), loose inequality (!=), greater than (>), less than (<), >=, and <=. Strict comparison checks both value and type.",
    "syntax": "a === b\na !== b\na >= b",
    "keywordsOrMethods": [
      "===",
      "!==",
      "==",
      "!=",
      ">",
      "<",
      ">=",
      "<="
    ],
    "codeExample": "console.log('5 === \"5\":', 5 === '5'); // false (strict: different types)\nconsole.log('5 == \"5\":', 5 == '5');   // true (loose: coerced)\nconsole.log('10 > 5:', 10 > 5);        // true\nconsole.log('5 !== 4:', 5 !== 4);      // true",
    "htmlExample": "<div class=\"demo-box\">Always default to strict comparison ===.</div>",
    "expectedOutput": "> 5 === \"5\": false\n> 5 == \"5\": true\n> 10 > 5: true\n> 5 !== 4: true",
    "notes": "Strict equality (===) does not coerce types, eliminating bugs from unexpected conversions.",
    "commonMistakes": "Using == when comparing objects or arrays; in JS, objects are compared by reference, not value."
  },
  {
    "id": 30,
    "number": "030",
    "title": "Logical Operators",
    "category": "Operators",
    "introduction": "Logical operators (&&, ||, !) perform boolean logic and short-circuit evaluation.",
    "explanation": "Logical AND (&&) returns the first falsy value or the last truthy value. Logical OR (||) returns the first truthy value. Logical NOT (!) inverts boolean state.",
    "syntax": "expr1 && expr2\nexpr1 || expr2\n!expr",
    "keywordsOrMethods": [
      "&&",
      "||",
      "!",
      "short-circuit"
    ],
    "codeExample": "const hasKey = true;\nconst knowsPassword = false;\nconsole.log('Can enter (AND):', hasKey && knowsPassword);\nconsole.log('Can enter (OR):', hasKey || knowsPassword);\nconsole.log('Inverse (NOT):', !hasKey);\n// Short-circuiting:\nconst fallback = '' || 'Default Name';\nconsole.log('Fallback value:', fallback);",
    "htmlExample": "<div class=\"demo-box\">Short-circuit evaluation is frequently used for default values.</div>",
    "expectedOutput": "> Can enter (AND): false\n> Can enter (OR): true\n> Inverse (NOT): false\n> Fallback value: Default Name",
    "notes": "Nullish coalescing (??) is preferable over || when 0 or '' are valid intentional values.",
    "commonMistakes": "Using || for defaults when 0 or false are valid inputs (e.g. count = count || 10 replaces 0 with 10)."
  },
  {
    "id": 31,
    "number": "031",
    "title": "Bitwise Operators",
    "category": "Operators",
    "introduction": "Bitwise operators treat operands as 32-bit sequences of zeroes and ones.",
    "explanation": "Includes AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Sign-propagating Right Shift (>>), and Zero-fill Right Shift (>>>). Commonly used in flags, bitmasks, and low-level algorithms.",
    "syntax": "a & b; a | b; a ^ b; ~a; a << b;",
    "keywordsOrMethods": [
      "&",
      "|",
      "^",
      "~",
      "<<",
      ">>"
    ],
    "codeExample": "const READ = 1;   // 0001\nconst WRITE = 2;  // 0010\nconst EXEC = 4;   // 0100\nlet userPerms = READ | WRITE; // 0011 (3)\nconsole.log('Has write access?', (userPerms & WRITE) !== 0);\nconsole.log('Has exec access?', (userPerms & EXEC) !== 0);",
    "htmlExample": "<div class=\"demo-box\">Bitwise operations operate on binary integer representations.</div>",
    "expectedOutput": "> Has write access? true\n> Has exec access? false",
    "notes": "Bitwise operators convert operands into 32-bit signed integers before performing calculations.",
    "commonMistakes": "Accidentally typing & or | instead of logical && or || in conditionals."
  },
  {
    "id": 32,
    "number": "032",
    "title": "Ternary Operator",
    "category": "Operators",
    "introduction": "The ternary operator is the only JS operator that takes three operands: condition ? expr1 : expr2.",
    "explanation": "Provides a concise inline alternative to if-else statements when returning or assigning a value based on a condition.",
    "syntax": "condition ? valueIfTrue : valueIfFalse;",
    "keywordsOrMethods": [
      "?",
      ":",
      "conditional operator"
    ],
    "codeExample": "const age = 20;\nconst status = age >= 18 ? 'Adult' : 'Minor';\nconsole.log('User status:', status);\nconst score = 85;\nconst grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';\nconsole.log('Grade:', grade);",
    "htmlExample": "<div class=\"demo-box\">Ternary operators return values directly into expressions.</div>",
    "expectedOutput": "> User status: Adult\n> Grade: B",
    "notes": "Avoid deeply nesting ternary operators as it harms code readability.",
    "commonMistakes": "Using ternary operators for side effects instead of returning values (use if statements for actions)."
  },
  {
    "id": 33,
    "number": "033",
    "title": "if Statement",
    "category": "Control Flow",
    "introduction": "The if statement executes a block of code if a specified condition evaluates to truthy.",
    "explanation": "The fundamental decision-making construct. The condition inside parentheses is evaluated. If truthy, the code inside the block executes; otherwise, it is skipped.",
    "syntax": "if (condition) {\n  // Code to execute\n}",
    "keywordsOrMethods": [
      "if",
      "branching",
      "truthy condition"
    ],
    "codeExample": "const temperature = 32;\nif (temperature > 30) {\n  console.log('It is a hot day! Stay hydrated.');\n}\nconsole.log('Temperature check complete.');",
    "htmlExample": "<div class=\"demo-box\">if branches execution based on truthy conditions.</div>",
    "expectedOutput": "> It is a hot day! Stay hydrated.\n> Temperature check complete.",
    "notes": "Always use curly braces {} even for single-line if statements to prevent bugs when lines are added later.",
    "commonMistakes": "Putting a semicolon immediately after the if condition: if (condition); { ... }."
  },
  {
    "id": 34,
    "number": "034",
    "title": "if-else Statement",
    "category": "Control Flow",
    "introduction": "if-else executes one block when the condition is true, and an alternate block when false.",
    "explanation": "Guarantees that exactly one of two execution paths will run depending on whether the test expression evaluates to truthy or falsy.",
    "syntax": "if (condition) {\n  // True branch\n} else {\n  // False branch\n}",
    "keywordsOrMethods": [
      "if",
      "else",
      "binary branch"
    ],
    "codeExample": "const isOnline = false;\nif (isOnline) {\n  console.log('User is connected.');\n} else {\n  console.log('User is offline. Reconnecting in 5s...');\n}",
    "htmlExample": "<div class=\"demo-box\">if-else provides a dual-path control flow.</div>",
    "expectedOutput": "> User is offline. Reconnecting in 5s...",
    "notes": "Keep branches balanced and avoid inverted conditions when possible for readability.",
    "commonMistakes": "Writing 'else (condition)' without 'if'."
  },
  {
    "id": 35,
    "number": "035",
    "title": "if-else if Statement",
    "category": "Control Flow",
    "introduction": "if-else if tests multiple conditions in sequence until one evaluates to true.",
    "explanation": "Allows chaining multiple mutually exclusive conditions. As soon as one condition evaluates to true, its block executes and the entire chain exits.",
    "syntax": "if (cond1) {\n  ...\n} else if (cond2) {\n  ...\n} else {\n  ...\n}",
    "keywordsOrMethods": [
      "if",
      "else if",
      "else",
      "multi-way branch"
    ],
    "codeExample": "const marks = 78;\nif (marks >= 90) {\n  console.log('Distinction');\n} else if (marks >= 75) {\n  console.log('First Class');\n} else if (marks >= 50) {\n  console.log('Pass');\n} else {\n  console.log('Retry needed');\n}",
    "htmlExample": "<div class=\"demo-box\">Test sequential conditions from most specific to least specific.</div>",
    "expectedOutput": "> First Class",
    "notes": "Conditions must be ordered properly; if a general condition is placed first, more specific branches below will never execute.",
    "commonMistakes": "Forgetting that order matters: if marks >= 50 was first, a score of 95 would match Pass!"
  },
  {
    "id": 36,
    "number": "036",
    "title": "switch Statement",
    "category": "Control Flow",
    "introduction": "switch evaluates an expression, matching the expression's value against a series of case clauses.",
    "explanation": "Compares using strict equality (===). When a match is found, statements execute until a 'break' statement is reached or the switch block ends. 'default' executes if no cases match.",
    "syntax": "switch (expression) {\n  case value1:\n    break;\n  default:\n}",
    "keywordsOrMethods": [
      "switch",
      "case",
      "break",
      "default"
    ],
    "codeExample": "const day = 'Wednesday';\nswitch (day) {\n  case 'Monday':\n    console.log('Week starts');\n    break;\n  case 'Wednesday':\n    console.log('Mid-week progress!');\n    break;\n  case 'Friday':\n    console.log('Weekend arrives');\n    break;\n  default:\n    console.log('Regular weekday');\n}",
    "htmlExample": "<div class=\"demo-box\">switch is clean for discrete value matching.</div>",
    "expectedOutput": "> Mid-week progress!",
    "notes": "Omitting 'break' causes execution to 'fall through' into subsequent cases.",
    "commonMistakes": "Forgetting 'break', causing unintentional fallthrough execution."
  },
  {
    "id": 37,
    "number": "037",
    "title": "for Loop",
    "category": "Loops & Iteration",
    "introduction": "The for loop repeats a block of code a known number of times using an index counter.",
    "explanation": "Consists of three optional expressions: initialization (let i = 0), condition (i < n), and afterthought (i++), separated by semicolons.",
    "syntax": "for (let i = 0; i < limit; i++) {\n  // repeated code\n}",
    "keywordsOrMethods": [
      "for",
      "loop counter",
      "iteration"
    ],
    "codeExample": "console.log('Counting up:');\nfor (let i = 1; i <= 4; i++) {\n  console.log(`Step ${i}`);\n}",
    "htmlExample": "<div class=\"demo-box\">Classic for loop iterates over bounded ranges.</div>",
    "expectedOutput": "> Counting up:\n> Step 1\n> Step 2\n> Step 3\n> Step 4",
    "notes": "Always declare the index variable with 'let' so it has block scope per iteration.",
    "commonMistakes": "Creating infinite loops by forgetting the increment step (e.g. for (let i = 0; i < 5;) {})."
  },
  {
    "id": 38,
    "number": "038",
    "title": "while Loop",
    "category": "Loops & Iteration",
    "introduction": "The while loop executes a block of code as long as a specified test condition evaluates to true.",
    "explanation": "The condition is tested before executing the loop body. If the condition is false initially, the loop body never runs.",
    "syntax": "while (condition) {\n  // code\n}",
    "keywordsOrMethods": [
      "while",
      "pre-test loop"
    ],
    "codeExample": "let countdown = 3;\nwhile (countdown > 0) {\n  console.log(`T-minus ${countdown}...`);\n  countdown--;\n}\nconsole.log('Liftoff!');",
    "htmlExample": "<div class=\"demo-box\">while is ideal when the iteration count is unknown in advance.</div>",
    "expectedOutput": "> T-minus 3...\n> T-minus 2...\n> T-minus 1...\n> Liftoff!",
    "notes": "Ensure the loop body modifies state so the condition eventually becomes false.",
    "commonMistakes": "Forgetting to update the loop condition variable, causing browser freezes from an infinite loop."
  },
  {
    "id": 39,
    "number": "039",
    "title": "do-while Loop",
    "category": "Loops & Iteration",
    "introduction": "do-while executes its block once first, then repeats as long as the condition remains true.",
    "explanation": "A post-test loop. Unlike while, the body is guaranteed to execute at least one time, regardless of whether the condition is true or false on entry.",
    "syntax": "do {\n  // code\n} while (condition);",
    "keywordsOrMethods": [
      "do",
      "while",
      "post-test"
    ],
    "codeExample": "let attempts = 0;\ndo {\n  attempts++;\n  console.log(`Attempt #${attempts} executed.`);\n} while (attempts < 2);\nconsole.log('Loop completed.');",
    "htmlExample": "<div class=\"demo-box\">do-while guarantees at least one execution.</div>",
    "expectedOutput": "> Attempt #1 executed.\n> Attempt #2 executed.\n> Loop completed.",
    "notes": "Notice the trailing semicolon after while(condition);.",
    "commonMistakes": "Forgetting that the block runs once even if condition is false initially."
  },
  {
    "id": 40,
    "number": "040",
    "title": "forEach Loop",
    "category": "Loops & Iteration",
    "introduction": "forEach() executes a provided callback function once for each array element.",
    "explanation": "Provides a clean, declarative way to iterate over arrays without manually managing an index counter. The callback receives (element, index, array).",
    "syntax": "array.forEach((item, index) => {\n  // code\n});",
    "keywordsOrMethods": [
      "forEach",
      "callback",
      "array iteration"
    ],
    "codeExample": "const colors = ['Crimson', 'Emerald', 'Sapphire'];\ncolors.forEach((color, idx) => {\n  console.log(`${idx + 1}. ${color}`);\n});",
    "htmlExample": "<div class=\"demo-box\">forEach provides functional array traversal.</div>",
    "expectedOutput": "> 1. Crimson\n> 2. Emerald\n> 3. Sapphire",
    "notes": "You cannot 'break' or 'return' early out of a forEach loop. Use for...of if early exit is required.",
    "commonMistakes": "Trying to return a value from forEach; forEach always returns undefined."
  },
  {
    "id": 41,
    "number": "041",
    "title": "for...in Loop",
    "category": "Loops & Iteration",
    "introduction": "for...in iterates over all enumerable property keys of an object.",
    "explanation": "Designed for inspecting object keys. It traverses enumerable properties including those on prototype chains unless filtered with hasOwnProperty.",
    "syntax": "for (const key in object) {\n  console.log(key, object[key]);\n}",
    "keywordsOrMethods": [
      "for...in",
      "enumerable keys",
      "object keys"
    ],
    "codeExample": "const course = {\n  title: 'JavaScript Masterclass',\n  lessons: 230,\n  author: 'NASA-KUN'\n};\nfor (const prop in course) {\n  console.log(`${prop}: ${course[prop]}`);\n}",
    "htmlExample": "<div class=\"demo-box\">for...in traverses object property names.</div>",
    "expectedOutput": "> title: JavaScript Masterclass\n> lessons: 230\n> author: NASA-KUN",
    "notes": "Do not use for...in to iterate over arrays because order is not guaranteed and array methods can be enumerated.",
    "commonMistakes": "Using for...in for arrays instead of for...of."
  },
  {
    "id": 42,
    "number": "042",
    "title": "for... of Loop",
    "category": "Loops & Iteration",
    "introduction": "for...of iterates over values of iterable objects like Arrays, Strings, Maps, and Sets.",
    "explanation": "Introduced in ES6, for...of operates directly on values rather than keys. It supports break, continue, and return statements.",
    "syntax": "for (const value of iterable) {\n  // code\n}",
    "keywordsOrMethods": [
      "for...of",
      "iterable",
      "Symbol.iterator"
    ],
    "codeExample": "const frameworks = ['HTML5', 'CSS3', 'JavaScript'];\nfor (const tech of frameworks) {\n  console.log('Skill:', tech);\n}\nconst greeting = 'CODE';\nfor (const char of greeting) {\n  console.log('Letter:', char);\n}",
    "htmlExample": "<div class=\"demo-box\">for...of directly accesses values of iterables.</div>",
    "expectedOutput": "> Skill: HTML5\n> Skill: CSS3\n> Skill: JavaScript\n> Letter: C\n> Letter: O\n> Letter: D\n> Letter: E",
    "notes": "for...of cannot be used on plain objects directly because objects are not iterables by default.",
    "commonMistakes": "Attempting for (const val of plainObject) without using Object.values() or Object.entries()."
  },
  {
    "id": 43,
    "number": "043",
    "title": "break Statement",
    "category": "Loops & Iteration",
    "introduction": "The break statement terminates the current loop or switch statement immediately.",
    "explanation": "When break is encountered inside a loop (for, while, do-while), control is transferred to the statement immediately following the loop block.",
    "syntax": "if (condition) {\n  break;\n}",
    "keywordsOrMethods": [
      "break",
      "loop termination"
    ],
    "codeExample": "for (let i = 1; i <= 10; i++) {\n  if (i === 4) {\n    console.log('Target 4 found! Breaking loop.');\n    break;\n  }\n  console.log('Checked number:', i);\n}\nconsole.log('Search finished.');",
    "htmlExample": "<div class=\"demo-box\">break stops loop execution immediately.</div>",
    "expectedOutput": "> Checked number: 1\n> Checked number: 2\n> Checked number: 3\n> Target 4 found! Breaking loop.\n> Search finished.",
    "notes": "Can also be used with labeled statements (label: for (...)) to break out of nested outer loops.",
    "commonMistakes": "Using break inside an Array.prototype.forEach callback, which throws a SyntaxError."
  },
  {
    "id": 44,
    "number": "044",
    "title": "continue Statement",
    "category": "Loops & Iteration",
    "introduction": "The continue statement terminates execution of statements in the current iteration and advances to the next.",
    "explanation": "In a while loop, it jumps back to the condition. In a for loop, it jumps to the update expression (e.g. i++).",
    "syntax": "if (skipCondition) {\n  continue;\n}",
    "keywordsOrMethods": [
      "continue",
      "skip iteration"
    ],
    "codeExample": "console.log('Printing odd numbers under 8:');\nfor (let i = 1; i <= 7; i++) {\n  if (i % 2 === 0) {\n    continue; // Skip even numbers\n  }\n  console.log('Odd:', i);\n}",
    "htmlExample": "<div class=\"demo-box\">continue skips the remainder of the current iteration.</div>",
    "expectedOutput": "> Printing odd numbers under 8:\n> Odd: 1\n> Odd: 3\n> Odd: 5\n> Odd: 7",
    "notes": "continue helps avoid deep nesting of if-blocks inside loops (guard clause pattern).",
    "commonMistakes": "In while loops, forgetting to increment before continue, causing an infinite loop."
  },
  {
    "id": 45,
    "number": "045",
    "title": "Function Declaration",
    "category": "Functions & Scope",
    "introduction": "A function declaration defines a named function hoisted to the top of its enclosing scope.",
    "explanation": "Declared using the 'function' keyword followed by an identifier. Because declarations are hoisted with their complete definition, you can call them before their line of definition.",
    "syntax": "function name(param1, param2) {\n  return result;\n}",
    "keywordsOrMethods": [
      "function",
      "hoisting",
      "named function"
    ],
    "codeExample": "// Calling before declaration works due to hoisting:\nconsole.log(multiply(4, 5));\n\nfunction multiply(x, y) {\n  return x * y;\n}",
    "htmlExample": "<div class=\"demo-box\">Function declarations are hoisted in full.</div>",
    "expectedOutput": "> 20",
    "notes": "Function declarations have their own 'this' binding and 'arguments' object.",
    "commonMistakes": "Conditionally declaring functions inside if blocks in legacy mode, which has cross-browser inconsistencies."
  },
  {
    "id": 46,
    "number": "046",
    "title": "Function Expression",
    "category": "Functions & Scope",
    "introduction": "A function expression defines a function inside an expression, typically assigned to a variable.",
    "explanation": "Unlike declarations, function expressions are not hoisted with their bodies. Calling them before assignment throws a TypeError or ReferenceError.",
    "syntax": "const myFunc = function(params) {\n  // body\n};",
    "keywordsOrMethods": [
      "function expression",
      "anonymous",
      "variable binding"
    ],
    "codeExample": "const calculateSquare = function(num) {\n  return num * num;\n};\nconsole.log('Square of 6:', calculateSquare(6));",
    "htmlExample": "<div class=\"demo-box\">Function expressions can be passed as arguments and stored in structures.</div>",
    "expectedOutput": "> Square of 6: 36",
    "notes": "Named function expressions (const f = function helper() {}) can be useful for debugging stack traces.",
    "commonMistakes": "Attempting to invoke a function expression before its declaration line."
  },
  {
    "id": 47,
    "number": "047",
    "title": "Arrow Functions",
    "category": "Functions & Scope",
    "introduction": "Arrow functions provide a concise syntax and lexically bind the 'this' value from the surrounding scope.",
    "explanation": "Introduced in ES6, arrow functions do not have their own 'this', 'arguments', 'super', or 'new.target'. Ideal for callbacks and functional methods.",
    "syntax": "const add = (a, b) => a + b;\nconst square = x => x * x;",
    "keywordsOrMethods": [
      "=>",
      "lexical this",
      "implicit return"
    ],
    "codeExample": "const double = n => n * 2;\nconsole.log('Double of 15:', double(15));\nconst numbers = [1, 2, 3];\nconst squared = numbers.map(x => x ** 2);\nconsole.log('Squared array:', squared);",
    "htmlExample": "<div class=\"demo-box\">Arrow functions simplify functional programming.</div>",
    "expectedOutput": "> Double of 15: 30\n> Squared array: [1,4,9]",
    "notes": "When returning an object literal directly with implicit return, wrap it in parentheses: () => ({ key: 'val' }).",
    "commonMistakes": "Using arrow functions as object methods where dynamic 'this' of the calling object is needed."
  },
  {
    "id": 48,
    "number": "048",
    "title": "Anonymous Functions",
    "category": "Functions & Scope",
    "introduction": "An anonymous function is a function created without a specified identifier name.",
    "explanation": "Frequently used as arguments passed directly into higher-order functions like setTimeout or array methods.",
    "syntax": "setTimeout(function() {\n  console.log('Executed');\n}, 100);",
    "keywordsOrMethods": [
      "anonymous",
      "callback",
      "inline function"
    ],
    "codeExample": "const timer = function() {\n  console.log('Anonymous function executed!');\n};\ntimer();\n\n[10, 20].forEach(function(val) {\n  console.log('Value:', val);\n});",
    "htmlExample": "<div class=\"demo-box\">Anonymous functions are defined on-the-fly.</div>",
    "expectedOutput": "> Anonymous function executed!\n> Value: 10\n> Value: 20",
    "notes": "In modern devtools, named functions are easier to locate in call stacks than anonymous ones.",
    "commonMistakes": "Omitting parentheses around anonymous function definitions when invoked immediately."
  },
  {
    "id": 49,
    "number": "049",
    "title": "Function Parameters",
    "category": "Functions & Scope",
    "introduction": "Parameters are named variables in a function definition that receive passed argument values.",
    "explanation": "JavaScript does not enforce parameter count matching. If fewer arguments are passed, unsupplied parameters default to undefined. Excess arguments are ignored unless accessed via rest parameters or arguments.",
    "syntax": "function greet(name, role) {\n  // parameters: name, role\n}",
    "keywordsOrMethods": [
      "parameters",
      "arguments",
      "arity"
    ],
    "codeExample": "function describeItem(title, price, category) {\n  console.log(`Item: ${title}`);\n  console.log(`Price: $${price}`);\n  console.log(`Category: ${category || 'Uncategorized'}`);\n}\ndescribeItem('Headphones', 59.99);\n// category received undefined",
    "htmlExample": "<div class=\"demo-box\">Parameters receive values passed to the function call.</div>",
    "expectedOutput": "> Item: Headphones\n> Price: $59.99\n> Category: Uncategorized",
    "notes": "Parameters are local variables created inside the function body upon invocation.",
    "commonMistakes": "Assuming a TypeError will be thrown if wrong number of arguments are passed (JS defaults them to undefined)."
  },
  {
    "id": 50,
    "number": "050",
    "title": "Default Parameters",
    "category": "Functions & Scope",
    "introduction": "Default parameters allow named parameters to be initialized with default values if no value or undefined is passed.",
    "explanation": "Introduced in ES6, default parameters replace manual checks like 'x = x || defaultValue'. Defaults are only triggered when the passed argument is undefined.",
    "syntax": "function greet(name = 'Guest', role = 'Viewer') {\n  ...\n}",
    "keywordsOrMethods": [
      "default parameters",
      "ES6",
      "fallback"
    ],
    "codeExample": "function createServerConfig(port = 3000, host = 'localhost') {\n  console.log(`Server starting on http://${host}:${port}`);\n}\ncreateServerConfig(); // Uses both defaults\ncreateServerConfig(8080); // Custom port, default host\ncreateServerConfig(5000, '0.0.0.0'); // Both customized",
    "htmlExample": "<div class=\"demo-box\">Default parameters simplify parameter validation.</div>",
    "expectedOutput": "> Server starting on http://localhost:3000\n> Server starting on http://localhost:8080\n> Server starting on http://0.0.0.0:5000",
    "notes": "Passing null does NOT trigger default parameter values, because null is considered an intentional value.",
    "commonMistakes": "Expecting greet(null) to use the default; only undefined triggers default parameters."
  },
  {
    "id": 51,
    "number": "051",
    "title": "Rest Parameters",
    "category": "Functions & Scope",
    "introduction": "Rest parameters (...args) capture an indefinite number of arguments as a real Array instance.",
    "explanation": "Introduced in ES6, rest syntax collects remaining arguments into a true Array, allowing full use of array methods like map, filter, and reduce. Must be the last parameter in the function declaration.",
    "syntax": "function sumAll(...numbers) {\n  return numbers.reduce((acc, curr) => acc + curr, 0);\n}",
    "keywordsOrMethods": [
      "...rest",
      "variadic functions",
      "Array instance"
    ],
    "codeExample": "function calculateTotal(taxRate, ...prices) {\n  const subtotal = prices.reduce((acc, p) => acc + p, 0);\n  const tax = subtotal * taxRate;\n  return (subtotal + tax).toFixed(2);\n}\nconsole.log('Total with 10% tax:', calculateTotal(0.10, 25, 45, 10));",
    "htmlExample": "<div class=\"demo-box\">Rest parameters collect multiple arguments cleanly.</div>",
    "expectedOutput": "> Total with 10% tax: 88.00",
    "notes": "Rest parameters completely replace the legacy array-like 'arguments' object.",
    "commonMistakes": "Placing another parameter after the rest parameter: function(a, ...b, c) causes a SyntaxError."
  },
  {
    "id": 52,
    "number": "052",
    "title": "Return Values in Function",
    "category": "Functions & Scope",
    "introduction": "The return statement specifies the value returned from a function and halts its execution.",
    "explanation": "When return is executed, the function immediately terminates and passes the calculated expression back to the caller. Functions without an explicit return statement return undefined by default.",
    "syntax": "function add(a, b) {\n  return a + b;\n}",
    "keywordsOrMethods": [
      "return",
      "early return",
      "undefined default"
    ],
    "codeExample": "function validateAge(age) {\n  if (age < 0) return 'Invalid age';\n  if (age < 18) return 'Minor';\n  return 'Adult';\n}\nconsole.log(validateAge(22));\nconsole.log(validateAge(-5));",
    "htmlExample": "<div class=\"demo-box\">Return statements send output back to the calling scope.</div>",
    "expectedOutput": "> Adult\n> Invalid age",
    "notes": "Using 'guard clauses' with early returns prevents deeply nested if statements.",
    "commonMistakes": "Placing statements after a return line; they become unreachable dead code."
  },
  {
    "id": 53,
    "number": "053",
    "title": "Immediately Invoked Function Expression (IIFE)",
    "category": "Functions & Scope",
    "introduction": "An IIFE is a function that runs immediately after it is defined, creating a private scope.",
    "explanation": "Wrapped in grouping parentheses and executed right away with (). Prior to ES6 block scoping, IIFEs were the primary mechanism for isolating variables and avoiding polluting the global namespace.",
    "syntax": "(function() {\n  // private scope\n})();",
    "keywordsOrMethods": [
      "IIFE",
      "private scope",
      "(function(){})()"
    ],
    "codeExample": "const counterModule = (function() {\n  let privateCount = 0;\n  return {\n    increment: () => ++privateCount,\n    getCount: () => privateCount\n  };\n})();\ncounterModule.increment();\ncounterModule.increment();\nconsole.log('Count:', counterModule.getCount());",
    "htmlExample": "<div class=\"demo-box\">IIFE encapsulates private state.</div>",
    "expectedOutput": "> Count: 2",
    "notes": "With modern ES6 modules, IIFEs are less common for modules but remain useful in build tools and initialization scripts.",
    "commonMistakes": "Missing the outer wrapping parentheses (function(){})(), causing a syntax error."
  },
  {
    "id": 54,
    "number": "054",
    "title": "Callback Functions",
    "category": "Functions & Scope",
    "introduction": "A callback function is a function passed as an argument to another function to be executed later.",
    "explanation": "In JavaScript, functions are first-class citizens. Callbacks enable asynchronous programming, event handling, and functional operations like array filtering.",
    "syntax": "function processData(data, callback) {\n  callback(data);\n}",
    "keywordsOrMethods": [
      "callback",
      "higher-order",
      "first-class"
    ],
    "codeExample": "function processUser(name, callback) {\n  console.log(`Processing ${name}...`);\n  callback(name.toUpperCase());\n}\nprocessUser('nasa-kun', result => {\n  console.log(`Callback executed with: ${result}`);\n});",
    "htmlExample": "<div class=\"demo-box\">Callbacks permit asynchronous task chaining.</div>",
    "expectedOutput": "> Processing nasa-kun...\n> Callback executed with: NASA-KUN",
    "notes": "Deeply nested callbacks are known as 'callback hell' or the 'pyramid of doom', solved by Promises and async/await.",
    "commonMistakes": "Accidentally invoking the callback when passing it: fn(callback()) instead of fn(callback)."
  },
  {
    "id": 55,
    "number": "055",
    "title": "Higher-Order Functions",
    "category": "Functions & Scope",
    "introduction": "A higher-order function is a function that accepts other functions as arguments and/or returns a function.",
    "explanation": "Core foundation of functional programming. Higher-order functions allow abstraction of actions, function composition, currying, and memoization.",
    "syntax": "const multiplier = factor => number => number * factor;",
    "keywordsOrMethods": [
      "higher-order function",
      "currying",
      "composition"
    ],
    "codeExample": "function createMultiplier(multiplier) {\n  return function(num) {\n    return num * multiplier;\n  };\n}\nconst triple = createMultiplier(3);\nconsole.log('3 * 10 =', triple(10));\nconsole.log('3 * 7 =', triple(7));",
    "htmlExample": "<div class=\"demo-box\">Higher-order functions create reusable function factories.</div>",
    "expectedOutput": "> 3 * 10 = 30\n> 3 * 7 = 21",
    "notes": "Built-in Array methods (map, filter, reduce) are classic higher-order functions.",
    "commonMistakes": "Confusing the inner returned function's parameters with the outer function's parameters."
  },
  {
    "id": 56,
    "number": "056",
    "title": "Closures",
    "category": "Functions & Scope",
    "introduction": "A closure is the combination of a function bundled together with references to its surrounding lexical state.",
    "explanation": "A closure gives an inner function access to an outer function's scope even after the outer function has finished executing and returned. Essential for data privacy and stateful factories.",
    "syntax": "function outer() {\n  let secret = 42;\n  return function inner() {\n    return secret;\n  };\n}",
    "keywordsOrMethods": [
      "closure",
      "lexical scope",
      "data privacy"
    ],
    "codeExample": "function createBankAccount(initialBalance) {\n  let balance = initialBalance;\n  return {\n    deposit: amount => { balance += amount; console.log(`Deposited $${amount}. Balance: $${balance}`); },\n    getBalance: () => balance\n  };\n}\nconst account = createBankAccount(100);\naccount.deposit(50);\nconsole.log('Final verified balance:', account.getBalance());",
    "htmlExample": "<div class=\"demo-box\">Closures maintain access to private lexical variables.</div>",
    "expectedOutput": "> Deposited $50. Balance: $150\n> Final verified balance: 150",
    "notes": "Closures retain references to outer variables in memory, so avoid unnecessarily retaining large objects.",
    "commonMistakes": "Assuming a new closure shares variables with other independent instances of the outer function."
  },
  {
    "id": 57,
    "number": "057",
    "title": "Creating Arrays",
    "category": "Arrays & Methods",
    "introduction": "Arrays are ordered list-like objects used to store multiple values in a single variable.",
    "explanation": "Created using array literal syntax [] or the Array constructor new Array(). Array literals are preferred for simplicity and performance.",
    "syntax": "const arr = [item1, item2];\nconst arr2 = new Array(length);",
    "keywordsOrMethods": [
      "[]",
      "Array()",
      "Array.of()",
      "Array.from()"
    ],
    "codeExample": "const fruits = ['Apple', 'Banana', 'Cherry'];\nconsole.log('Fruits count:', fruits.length);\nconst numbers = Array.from({ length: 4 }, (_, i) => (i + 1) * 10);\nconsole.log('Generated array:', numbers);",
    "htmlExample": "<div class=\"demo-box\">Arrays store ordered collections of elements.</div>",
    "expectedOutput": "> Fruits count: 3\n> Generated array: [10,20,30,40]",
    "notes": "JavaScript arrays are dynamically sized and can hold mixed data types.",
    "commonMistakes": "new Array(5) creates an array with 5 empty slots, not an array containing the number 5."
  },
  {
    "id": 58,
    "number": "058",
    "title": "Accessing Array Elements",
    "category": "Arrays & Methods",
    "introduction": "Array elements are accessed using zero-based bracket notation arr[index] or arr.at(index).",
    "explanation": "The first element is at index 0, and the last is at arr.length - 1. The modern at() method supports negative indexes to count from the end.",
    "syntax": "const first = arr[0];\nconst last = arr.at(-1);",
    "keywordsOrMethods": [
      "arr[index]",
      "arr.at()",
      "zero-indexed"
    ],
    "codeExample": "const items = ['HTML', 'CSS', 'JavaScript'];\nconsole.log('First element:', items[0]);\nconsole.log('Last element via at(-1):', items.at(-1));\nconsole.log('Out of bounds index:', items[99]); // undefined",
    "htmlExample": "<div class=\"demo-box\">Array indexes begin at 0.</div>",
    "expectedOutput": "> First element: HTML\n> Last element via at(-1): JavaScript\n> Out of bounds index: undefined",
    "notes": "arr.at(-1) is cleaner and less error-prone than arr[arr.length - 1].",
    "commonMistakes": "Using 1-based indexing and missing the first item (arr[1] is the second element)."
  },
  {
    "id": 59,
    "number": "059",
    "title": "Modifying Array Elements",
    "category": "Arrays & Methods",
    "introduction": "Array elements are mutable and can be updated by assigning a new value to a specific index.",
    "explanation": "Assigning to an existing index replaces that item. Assigning to an index beyond the current length extends the array and creates 'empty' sparse slots.",
    "syntax": "arr[index] = newValue;",
    "keywordsOrMethods": [
      "index assignment",
      "mutation",
      "sparse array"
    ],
    "codeExample": "const scores = [80, 85, 90];\nscores[1] = 95; // Update second item\nconsole.log('Updated scores:', scores);\nscores.push(100);\nconsole.log('After push:', scores);",
    "htmlExample": "<div class=\"demo-box\">Arrays are mutable even when declared with const.</div>",
    "expectedOutput": "> Updated scores: [80,95,90]\n> After push: [80,95,90,100]",
    "notes": "Even if declared with 'const', array contents can be modified; only the variable binding itself is protected.",
    "commonMistakes": "Accidentally assigning to an index like arr[100] on a small array, creating holes in the array."
  },
  {
    "id": 60,
    "number": "060",
    "title": "push() Method",
    "category": "Arrays & Methods",
    "introduction": "push() appends one or more elements to the end of an array and returns the new length.",
    "explanation": "Mutates the original array in place by adding elements to the tail. It is an O(1) constant-time operation in modern engines.",
    "syntax": "const newLength = arr.push(item1, item2);",
    "keywordsOrMethods": [
      "push()",
      "stack append",
      "mutator"
    ],
    "codeExample": "const tasks = ['Design layout', 'Draft content'];\nconst newLen = tasks.push('Write JavaScript');\nconsole.log('Tasks array:', tasks);\nconsole.log('New length returned:', newLen);",
    "htmlExample": "<div class=\"demo-box\">push adds items to the tail of the array.</div>",
    "expectedOutput": "> Tasks array: [\"Design layout\",\"Draft content\",\"Write JavaScript\"]\n> New length returned: 3",
    "notes": "To push without mutating, use the spread operator: const updated = [...arr, newItem].",
    "commonMistakes": "Expecting push() to return the updated array instead of its new length integer."
  },
  {
    "id": 61,
    "number": "061",
    "title": "pop() Method",
    "category": "Arrays & Methods",
    "introduction": "pop() removes the last element from an array and returns that element.",
    "explanation": "Mutates the array by shrinking its length by 1. If called on an empty array, it returns undefined.",
    "syntax": "const removedItem = arr.pop();",
    "keywordsOrMethods": [
      "pop()",
      "stack removal",
      "tail remove"
    ],
    "codeExample": "const stack = ['Page 1', 'Page 2', 'Page 3'];\nconst popped = stack.pop();\nconsole.log('Popped element:', popped);\nconsole.log('Remaining stack:', stack);",
    "htmlExample": "<div class=\"demo-box\">pop removes and returns the last element.</div>",
    "expectedOutput": "> Popped element: Page 3\n> Remaining stack: [\"Page 1\",\"Page 2\"]",
    "notes": "Combined with push(), arrays can implement a Last-In-First-Out (LIFO) stack data structure.",
    "commonMistakes": "Calling pop() when you need to remove the first element (use shift() instead)."
  },
  {
    "id": 62,
    "number": "062",
    "title": "shift() Method",
    "category": "Arrays & Methods",
    "introduction": "shift() removes the first element from an array and returns that removed element.",
    "explanation": "Mutates the array. All subsequent elements are shifted down by one index position. It has O(n) performance because all remaining elements are re-indexed.",
    "syntax": "const firstItem = arr.shift();",
    "keywordsOrMethods": [
      "shift()",
      "queue dequeue",
      "head remove"
    ],
    "codeExample": "const queue = ['Customer A', 'Customer B', 'Customer C'];\nconst served = queue.shift();\nconsole.log('Served customer:', served);\nconsole.log('Remaining queue:', queue);",
    "htmlExample": "<div class=\"demo-box\">shift removes elements from the head of the array.</div>",
    "expectedOutput": "> Served customer: Customer A\n> Remaining queue: [\"Customer B\",\"Customer C\"]",
    "notes": "Combined with push(), arrays can implement a First-In-First-Out (FIFO) queue.",
    "commonMistakes": "Calling shift() on very large arrays inside tight loops; re-indexing can be slow."
  },
  {
    "id": 63,
    "number": "063",
    "title": "unshift() Method",
    "category": "Arrays & Methods",
    "introduction": "unshift() adds one or more elements to the beginning of an array and returns the new length.",
    "explanation": "Mutates the array in place by inserting elements at index 0 and sliding all existing elements to higher indices.",
    "syntax": "const newLen = arr.unshift(item1, item2);",
    "keywordsOrMethods": [
      "unshift()",
      "prepend",
      "mutator"
    ],
    "codeExample": "const priorityQueue = ['Normal Task'];\npriorityQueue.unshift('Emergency Fix');\nconsole.log('Updated queue:', priorityQueue);",
    "htmlExample": "<div class=\"demo-box\">unshift prepends elements to the start of an array.</div>",
    "expectedOutput": "> Updated queue: [\"Emergency Fix\",\"Normal Task\"]",
    "notes": "Returns the new length of the array after insertion.",
    "commonMistakes": "Passing an array to unshift expecting it to flatten (use unshift(...arr) to spread)."
  },
  {
    "id": 64,
    "number": "064",
    "title": "splice() Method",
    "category": "Arrays & Methods",
    "introduction": "splice() changes the contents of an array by removing, replacing, or adding elements in place.",
    "explanation": "splice(startIndex, deleteCount, item1, item2, ...) mutates the original array and returns an array containing any deleted elements.",
    "syntax": "arr.splice(start, deleteCount, ...itemsToAdd);",
    "keywordsOrMethods": [
      "splice()",
      "in-place mutation",
      "delete/insert"
    ],
    "codeExample": "const months = ['Jan', 'March', 'April'];\nmonths.splice(1, 0, 'Feb'); // Insert at index 1 without deleting\nconsole.log('After insert:', months);\nconst removed = months.splice(2, 1); // Delete 1 item at index 2\nconsole.log('Removed:', removed);\nconsole.log('Final array:', months);",
    "htmlExample": "<div class=\"demo-box\">splice alters array elements anywhere in the list.</div>",
    "expectedOutput": "> After insert: [\"Jan\",\"Feb\",\"March\",\"April\"]\n> Removed: [\"March\"]\n> Final array: [\"Jan\",\"Feb\",\"April\"]",
    "notes": "To avoid mutating the original array, use the modern toSpliced() method introduced in ES2023.",
    "commonMistakes": "Confusing splice() (mutating) with slice() (non-mutating)."
  },
  {
    "id": 65,
    "number": "065",
    "title": "slice() Method",
    "category": "Arrays & Methods",
    "introduction": "slice() returns a shallow copy of a portion of an array into a new array object.",
    "explanation": "slice(start, end) extracts elements from the 'start' index up to, but not including, the 'end' index. The original array is never modified.",
    "syntax": "const copy = arr.slice(start, end);",
    "keywordsOrMethods": [
      "slice()",
      "shallow copy",
      "non-mutating"
    ],
    "codeExample": "const animals = ['Ant', 'Bison', 'Camel', 'Duck', 'Elephant'];\nconst sliced = animals.slice(1, 4);\nconsole.log('Extracted slice (1 to 4):', sliced);\nconsole.log('Original array unchanged:', animals);",
    "htmlExample": "<div class=\"demo-box\">slice safely copies sub-arrays without mutation.</div>",
    "expectedOutput": "> Extracted slice (1 to 4): [\"Bison\",\"Camel\",\"Duck\"]\n> Original array unchanged: [\"Ant\",\"Bison\",\"Camel\",\"Duck\",\"Elephant\"]",
    "notes": "arr.slice() with no arguments creates a shallow clone of the entire array.",
    "commonMistakes": "Expecting slice(1, 3) to include index 3; the end index is exclusive."
  },
  {
    "id": 66,
    "number": "066",
    "title": "concat() Method",
    "category": "Arrays & Methods",
    "introduction": "concat() merges two or more arrays and returns a new combined array.",
    "explanation": "Does not alter the calling arrays or any argument arrays; it produces a new combined array containing shallow copies of all elements.",
    "syntax": "const combined = arr1.concat(arr2, arr3);",
    "keywordsOrMethods": [
      "concat()",
      "array merge",
      "immutable"
    ],
    "codeExample": "const teamAlpha = ['Alice', 'Bob'];\nconst teamBeta = ['Charlie', 'Dana'];\nconst allMembers = teamAlpha.concat(teamBeta);\nconsole.log('Combined roster:', allMembers);",
    "htmlExample": "<div class=\"demo-box\">concat merges arrays cleanly without side effects.</div>",
    "expectedOutput": "> Combined roster: [\"Alice\",\"Bob\",\"Charlie\",\"Dana\"]",
    "notes": "The spread operator [...arr1, ...arr2] is widely used as a modern alternative.",
    "commonMistakes": "Thinking concat() mutates the original array in place (it returns a new one)."
  },
  {
    "id": 67,
    "number": "067",
    "title": "map() Method",
    "category": "Arrays & Methods",
    "introduction": "map() creates a new array populated with the results of calling a provided function on every element.",
    "explanation": "A foundational method in functional programming. Transforms an array of length N into a new array of length N without mutating the original array.",
    "syntax": "const newArr = arr.map((item, index) => transform(item));",
    "keywordsOrMethods": [
      "map()",
      "functional transformation",
      "immutable"
    ],
    "codeExample": "const pricesUSD = [10, 25, 50];\nconst pricesEUR = pricesUSD.map(p => (p * 0.92).toFixed(2));\nconsole.log('EUR Prices:', pricesEUR);",
    "htmlExample": "<div class=\"demo-box\">map transforms array elements into a new array.</div>",
    "expectedOutput": "> EUR Prices: [\"9.20\",\"23.00\",\"46.00\"]",
    "notes": "Never use map if you do not use the returned array; use forEach or for...of instead.",
    "commonMistakes": "Forgetting to return a value from the callback, resulting in an array of undefined."
  },
  {
    "id": 68,
    "number": "068",
    "title": "filter() Method",
    "category": "Arrays & Methods",
    "introduction": "filter() creates a shallow copy of a portion of an array matching a test condition.",
    "explanation": "Calls a predicate callback function on each element. If the callback returns truthy, the element is included in the new array; if falsy, it is excluded.",
    "syntax": "const filtered = arr.filter(item => predicate(item));",
    "keywordsOrMethods": [
      "filter()",
      "predicate",
      "selection"
    ],
    "codeExample": "const scores = [45, 82, 90, 63, 98, 71];\nconst honorRoll = scores.filter(s => s >= 85);\nconsole.log('High scores:', honorRoll);",
    "htmlExample": "<div class=\"demo-box\">filter keeps only items that pass the truth test.</div>",
    "expectedOutput": "> High scores: [82,90,98]",
    "notes": "Does not mutate the original array.",
    "commonMistakes": "Returning a transformed value instead of a boolean truth test in the callback."
  },
  {
    "id": 69,
    "number": "069",
    "title": "reduce() Method",
    "category": "Arrays & Methods",
    "introduction": "reduce() executes a reducer function on each element, resulting in a single output value.",
    "explanation": "Iterates over the array, passing an accumulator value from one step to the next. Can produce a single number, string, object, or flattened array.",
    "syntax": "arr.reduce((accumulator, currentValue) => acc + curr, initialValue);",
    "keywordsOrMethods": [
      "reduce()",
      "accumulator",
      "aggregation"
    ],
    "codeExample": "const expenses = [12.50, 4.00, 23.75, 9.99];\nconst total = expenses.reduce((sum, item) => sum + item, 0);\nconsole.log('Total expenses:', total.toFixed(2));",
    "htmlExample": "<div class=\"demo-box\">reduce collapses an array into a single accumulated value.</div>",
    "expectedOutput": "> Total expenses: 50.24",
    "notes": "Always provide an initialValue argument to prevent errors when reducing empty arrays.",
    "commonMistakes": "Omitting the initialValue argument when reducing arrays of objects."
  },
  {
    "id": 70,
    "number": "070",
    "title": "forEach() Method",
    "category": "Arrays & Methods",
    "introduction": "forEach() executes a provided callback function once for each array element.",
    "explanation": "Used strictly for performing side effects (logging, writing to DOM, mutating external state). Always returns undefined.",
    "syntax": "arr.forEach((item, index) => { ... });",
    "keywordsOrMethods": [
      "forEach()",
      "iteration",
      "side effects"
    ],
    "codeExample": "const lessons = ['HTML', 'CSS', 'JavaScript'];\nlessons.forEach((name, i) => {\n  console.log(`Track #${i + 1}: ${name}`);\n});",
    "htmlExample": "<div class=\"demo-box\">forEach executes side effects per element.</div>",
    "expectedOutput": "> Track #1: HTML\n> Track #2: CSS\n> Track #3: JavaScript",
    "notes": "Unlike a for loop, forEach does not support breaking or continuing early.",
    "commonMistakes": "Chaining methods after forEach: arr.forEach(...).filter(...) throws an error since forEach returns undefined."
  },
  {
    "id": 71,
    "number": "071",
    "title": "find() Method",
    "category": "Arrays & Methods",
    "introduction": "find() returns the first element in an array that satisfies a provided testing function.",
    "explanation": "Iterates from index 0 until the callback returns a truthy value, immediately returning that element. If no element satisfies the test, it returns undefined.",
    "syntax": "const found = arr.find(item => condition(item));",
    "keywordsOrMethods": [
      "find()",
      "first match",
      "search"
    ],
    "codeExample": "const users = [\n  { id: 1, name: 'Alice' },\n  { id: 2, name: 'Bob' },\n  { id: 3, name: 'Charlie' }\n];\nconst match = users.find(u => u.id === 2);\nconsole.log('Found user:', match);",
    "htmlExample": "<div class=\"demo-box\">find retrieves the first element matching a predicate.</div>",
    "expectedOutput": "> Found user: {\"id\":2,\"name\":\"Bob\"}",
    "notes": "find stops searching as soon as a match is discovered, optimizing performance.",
    "commonMistakes": "Expecting find() to return an array of all matches (use filter() for all matches)."
  },
  {
    "id": 72,
    "number": "072",
    "title": "findIndex() Method",
    "category": "Arrays & Methods",
    "introduction": "findIndex() returns the index of the first element that satisfies the provided test, or -1.",
    "explanation": "Similar to find(), but returns the numeric index rather than the item itself. If no element satisfies the test, it returns -1.",
    "syntax": "const index = arr.findIndex(item => condition(item));",
    "keywordsOrMethods": [
      "findIndex()",
      "index search",
      "-1 if not found"
    ],
    "codeExample": "const temperatures = [18, 22, 31, 25];\nconst hotDayIndex = temperatures.findIndex(t => t >= 30);\nconsole.log('First hot day index:', hotDayIndex);",
    "htmlExample": "<div class=\"demo-box\">findIndex returns the integer index of the matching element.</div>",
    "expectedOutput": "> First hot day index: 2",
    "notes": "Use findIndex when you need the index for updating with splice().",
    "commonMistakes": "Checking 'if (arr.findIndex(...))' \u2014 remember that index 0 is falsy, so check !== -1."
  },
  {
    "id": 73,
    "number": "073",
    "title": "indexOf() Method",
    "category": "Arrays & Methods",
    "introduction": "indexOf() returns the first index at which a given element can be found, or -1 if not present.",
    "explanation": "Uses strict equality (===) to compare values. Best suited for arrays of primitives (strings, numbers).",
    "syntax": "const idx = arr.indexOf(searchElement, fromIndex);",
    "keywordsOrMethods": [
      "indexOf()",
      "primitive search",
      "=== equality"
    ],
    "codeExample": "const tools = ['Editor', 'Terminal', 'Debugger', 'Terminal'];\nconsole.log('First Terminal index:', tools.indexOf('Terminal'));\nconsole.log('Missing tool index:', tools.indexOf('Compiler'));",
    "htmlExample": "<div class=\"demo-box\">indexOf locates exact primitive matches.</div>",
    "expectedOutput": "> First Terminal index: 1\n> Missing tool index: -1",
    "notes": "indexOf cannot find NaN because NaN === NaN is false. Use includes() for NaN checks.",
    "commonMistakes": "Using indexOf on arrays of objects: [{id:1}].indexOf({id:1}) returns -1 because objects are compared by reference."
  },
  {
    "id": 74,
    "number": "074",
    "title": "includes() Method",
    "category": "Arrays & Methods",
    "introduction": "includes() determines whether an array includes a certain value, returning true or false.",
    "explanation": "Introduced in ES2016, includes() provides an intuitive boolean check for presence, correctly handling NaN.",
    "syntax": "const hasItem = arr.includes(valueToFind);",
    "keywordsOrMethods": [
      "includes()",
      "boolean membership",
      "ES2016"
    ],
    "codeExample": "const roles = ['admin', 'editor', 'subscriber'];\nconsole.log('Is admin allowed?', roles.includes('admin'));\nconsole.log('Is guest allowed?', roles.includes('guest'));",
    "htmlExample": "<div class=\"demo-box\">includes checks membership returning true or false.</div>",
    "expectedOutput": "> Is admin allowed? true\n> Is guest allowed? false",
    "notes": "Replaces the clunky pattern 'arr.indexOf(item) !== -1'.",
    "commonMistakes": "Using includes() with objects without passing the identical object reference."
  },
  {
    "id": 75,
    "number": "075",
    "title": "some() Method",
    "category": "Arrays & Methods",
    "introduction": "some() tests whether at least one element in the array passes the condition.",
    "explanation": "Executes the callback until it finds a truthy return value, then immediately returns true. If none pass, it returns false.",
    "syntax": "const hasAny = arr.some(item => condition(item));",
    "keywordsOrMethods": [
      "some()",
      "existential check",
      "short-circuit"
    ],
    "codeExample": "const tasks = [\n  { title: 'Task 1', completed: true },\n  { title: 'Task 2', completed: false }\n];\nconst hasIncomplete = tasks.some(t => !t.completed);\nconsole.log('Are there incomplete tasks?', hasIncomplete);",
    "htmlExample": "<div class=\"demo-box\">some returns true if any element passes the test.</div>",
    "expectedOutput": "> Are there incomplete tasks? true",
    "notes": "Calling some() on an empty array always returns false.",
    "commonMistakes": "Expecting some() to return the matching item rather than a boolean."
  },
  {
    "id": 76,
    "number": "076",
    "title": "every() Method",
    "category": "Arrays & Methods",
    "introduction": "every() tests whether all elements in the array pass the provided test condition.",
    "explanation": "Returns true if the callback returns truthy for all elements. If any element fails, it immediately short-circuits and returns false.",
    "syntax": "const allPassed = arr.every(item => condition(item));",
    "keywordsOrMethods": [
      "every()",
      "universal check",
      "short-circuit"
    ],
    "codeExample": "const ages = [21, 25, 30, 19];\nconst allAdults = ages.every(age => age >= 18);\nconsole.log('Are all participants adults?', allAdults);",
    "htmlExample": "<div class=\"demo-box\">every checks that all elements meet criteria.</div>",
    "expectedOutput": "> Are all participants adults? true",
    "notes": "Calling every() on an empty array returns true (vacuous truth in formal logic).",
    "commonMistakes": "Assuming every() returns false on empty arrays."
  },
  {
    "id": 77,
    "number": "077",
    "title": "sort() Method",
    "category": "Arrays & Methods",
    "introduction": "sort() sorts the elements of an array in place and returns the sorted array.",
    "explanation": "By default, sort() converts elements into strings and compares UTF-16 code units. For numeric sorting, you must supply a comparator function (a, b) => a - b.",
    "syntax": "arr.sort((a, b) => a - b);",
    "keywordsOrMethods": [
      "sort()",
      "comparator",
      "in-place sort"
    ],
    "codeExample": "const scores = [100, 25, 5, 80];\n// Default string sort would order 100 before 25!\nscores.sort((a, b) => a - b);\nconsole.log('Ascending numeric sort:', scores);",
    "htmlExample": "<div class=\"demo-box\">sort mutates arrays in place using a comparator function.</div>",
    "expectedOutput": "> Ascending numeric sort: [5,25,80,100]",
    "notes": "Use toSorted() in modern ES2023 to sort without mutating the original array.",
    "commonMistakes": "Sorting numbers without a comparator function: [10, 2, 1].sort() produces [1, 10, 2]!"
  },
  {
    "id": 78,
    "number": "078",
    "title": "reverse() Method",
    "category": "Arrays & Methods",
    "introduction": "reverse() reverses an array in place, transposing elements.",
    "explanation": "The first array element becomes the last, and the last becomes the first. Mutates the original array and returns the reference.",
    "syntax": "arr.reverse();",
    "keywordsOrMethods": [
      "reverse()",
      "in-place reversal",
      "mutator"
    ],
    "codeExample": "const steps = ['Step 1', 'Step 2', 'Step 3'];\nsteps.reverse();\nconsole.log('Reversed steps:', steps);",
    "htmlExample": "<div class=\"demo-box\">reverse inverts the order of array elements.</div>",
    "expectedOutput": "> Reversed steps: [\"Step 3\",\"Step 2\",\"Step 1\"]",
    "notes": "Use toReversed() in ES2023 to reverse without mutating.",
    "commonMistakes": "Assuming reverse() returns a copy without changing the original array."
  },
  {
    "id": 79,
    "number": "079",
    "title": "join() Method",
    "category": "Arrays & Methods",
    "introduction": "join() creates and returns a new string by concatenating all elements in an array.",
    "explanation": "Elements are converted to strings and separated by a specified separator string (comma by default).",
    "syntax": "const str = arr.join(separator);",
    "keywordsOrMethods": [
      "join()",
      "array to string",
      "separator"
    ],
    "codeExample": "const words = ['Learn', 'Code', 'Play'];\nconsole.log(words.join(' \u2022 '));\nconsole.log(words.join(''));",
    "htmlExample": "<div class=\"demo-box\">join flattens array elements into formatted text.</div>",
    "expectedOutput": "> Learn \u2022 Code \u2022 Play\n> LearnCodePlay",
    "notes": "undefined and null elements are converted into empty strings in the output.",
    "commonMistakes": "Forgetting the separator argument: words.join() uses commas by default ('Learn,Code,Play')."
  },
  {
    "id": 80,
    "number": "080",
    "title": "split() Method",
    "category": "Arrays & Methods",
    "introduction": "split() divides a String into an ordered list of substrings and puts them into an array.",
    "explanation": "Takes a pattern (string or RegExp) describing where each split should occur. The inverse operation of Array.prototype.join().",
    "syntax": "const arr = str.split(separator, limit);",
    "keywordsOrMethods": [
      "split()",
      "string to array",
      "delimiter"
    ],
    "codeExample": "const tags = 'html,css,javascript,web';\nconst tagArray = tags.split(',');\nconsole.log('Parsed tags:', tagArray);",
    "htmlExample": "<div class=\"demo-box\">split breaks strings into array elements.</div>",
    "expectedOutput": "> Parsed tags: [\"html\",\"css\",\"javascript\",\"web\"]",
    "notes": "str.split('') splits into individual characters (though Array.from(str) is safer for unicode emojis).",
    "commonMistakes": "Calling split() on null or undefined variables (throws a TypeError)."
  },
  {
    "id": 81,
    "number": "081",
    "title": "Introduction to OOP",
    "category": "Objects, Classes & OOP",
    "introduction": "Object-Oriented Programming (OOP) organizes code into objects combining data and behaviors.",
    "explanation": "OOP in JavaScript is prototype-based under the hood, but ES6 introduced the 'class' syntax for clear object blueprints. Core pillars include Encapsulation, Inheritance, Abstraction, and Polymorphism.",
    "syntax": "const car = {\n  brand: 'Tesla',\n  drive() { console.log('Driving...'); }\n};",
    "keywordsOrMethods": [
      "OOP",
      "object",
      "methods",
      "properties"
    ],
    "codeExample": "const developer = {\n  name: 'NASA-YUZAKI',\n  role: 'Architect',\n  greet() {\n    return `Hello, I am ${this.name}, ${this.role}.`;\n  }\n};\nconsole.log(developer.greet());",
    "htmlExample": "<div class=\"demo-box\">OOP binds state and behavior into coherent units.</div>",
    "expectedOutput": "> Hello, I am NASA-YUZAKI, Architect.",
    "notes": "JavaScript objects are dynamic dictionaries of key-value pairs where values can be functions (methods).",
    "commonMistakes": "Losing 'this' context when passing object methods as standalone callbacks."
  },
  {
    "id": 82,
    "number": "082",
    "title": "Classes in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Classes serve as blueprints for creating objects with shared properties and methods.",
    "explanation": "Introduced in ES6, class syntax provides a clean, declarative alternative to prototype function constructors. Underneath, JavaScript classes remain prototype-based.",
    "syntax": "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}",
    "keywordsOrMethods": [
      "class",
      "constructor",
      "prototype-based syntax"
    ],
    "codeExample": "class Course {\n  constructor(name, lessonCount) {\n    this.name = name;\n    this.lessonCount = lessonCount;\n  }\n  getInfo() {\n    return `${this.name} contains ${this.lessonCount} lessons.`;\n  }\n}\nconst jsCourse = new Course('JavaScript', 230);\nconsole.log(jsCourse.getInfo());",
    "htmlExample": "<div class=\"demo-box\">Classes define reusable object structures.</div>",
    "expectedOutput": "> JavaScript contains 230 lessons.",
    "notes": "Classes in JavaScript are not hoisted like function declarations; they must be declared before instantiation.",
    "commonMistakes": "Invoking a class without the 'new' keyword: Course() throws a TypeError."
  },
  {
    "id": 83,
    "number": "083",
    "title": "Creating Objects with Class",
    "category": "Objects, Classes & OOP",
    "introduction": "The 'new' operator instantiates a class, allocating a new object and executing its constructor.",
    "explanation": "When 'new MyClass()' is called, JavaScript creates an empty object, sets its prototype to MyClass.prototype, binds 'this' to the new object, and executes the constructor.",
    "syntax": "const instance = new MyClass(arg1, arg2);",
    "keywordsOrMethods": [
      "new",
      "instance",
      "instantiation"
    ],
    "codeExample": "class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n}\nconst p1 = new Product('Mechanical Keyboard', 89.99);\nconst p2 = new Product('Wireless Mouse', 49.99);\nconsole.log('Product 1:', p1.name, `$${p1.price}`);\nconsole.log('Product 2:', p2.name, `$${p2.price}`);",
    "htmlExample": "<div class=\"demo-box\">'new' creates independent instances of a class.</div>",
    "expectedOutput": "> Product 1: Mechanical Keyboard $89.99\n> Product 2: Wireless Mouse $49.99",
    "notes": "Each instance has its own property storage, but shares methods on the prototype.",
    "commonMistakes": "Forgetting 'new' when instantiating a class."
  },
  {
    "id": 84,
    "number": "084",
    "title": "Constructor Method",
    "category": "Objects, Classes & OOP",
    "introduction": "The constructor method is a special function for creating and initializing objects created with a class.",
    "explanation": "A class can have only one method with the name 'constructor'. It automatically executes when 'new' is called and receives initialization arguments.",
    "syntax": "class Demo {\n  constructor(param) {\n    this.param = param;\n  }\n}",
    "keywordsOrMethods": [
      "constructor",
      "initialization",
      "single constructor"
    ],
    "codeExample": "class Server {\n  constructor(host, port) {\n    this.host = host;\n    this.port = port;\n    this.status = 'initialized';\n    console.log(`Server configured for ${host}:${port}`);\n  }\n}\nconst srv = new Server('api.codeplay.dev', 443);",
    "htmlExample": "<div class=\"demo-box\">The constructor initializes properties on newly minted instances.</div>",
    "expectedOutput": "> Server configured for api.codeplay.dev:443",
    "notes": "If no constructor is defined, a default empty constructor is automatically provided.",
    "commonMistakes": "Defining multiple constructor methods in the same class (causes a SyntaxError)."
  },
  {
    "id": 85,
    "number": "085",
    "title": "Class Properties",
    "category": "Objects, Classes & OOP",
    "introduction": "Class properties define data fields held by instances, either declared in constructors or as public/private fields.",
    "explanation": "Modern JavaScript supports class field declarations directly inside the class body without needing constructor assignment. Private fields begin with a hash (#).",
    "syntax": "class Item {\n  category = 'Electronics'; // Public field\n  #secretCode = 'XYZ';      // Private field\n}",
    "keywordsOrMethods": [
      "public field",
      "private field #",
      "class properties"
    ],
    "codeExample": "class Widget {\n  version = '1.0.0';\n  #id = Math.floor(Math.random() * 1000);\n  getId() {\n    return this.#id;\n  }\n}\nconst w = new Widget();\nconsole.log('Public version:', w.version);\nconsole.log('Private id via getter method:', typeof w.getId());",
    "htmlExample": "<div class=\"demo-box\">Class fields allow clean property definition directly in the class body.</div>",
    "expectedOutput": "> Public version: 1.0.0\n> Private id via getter method: number",
    "notes": "Private fields (#prop) cannot be accessed from outside the class body, enforcing true encapsulation.",
    "commonMistakes": "Attempting to access instance.#privateField from outside the class throws a SyntaxError."
  },
  {
    "id": 86,
    "number": "086",
    "title": "Class Methods",
    "category": "Objects, Classes & OOP",
    "introduction": "Class methods define functions shared across all instances of a class via its prototype.",
    "explanation": "Methods are declared inside the class body using concise method syntax. Because they are placed on the class's prototype, memory is conserved across thousands of instances.",
    "syntax": "class Calculator {\n  add(a, b) {\n    return a + b;\n  }\n}",
    "keywordsOrMethods": [
      "method syntax",
      "prototype sharing",
      "instance method"
    ],
    "codeExample": "class UserProfile {\n  constructor(name) {\n    this.name = name;\n  }\n  display() {\n    return `User: ${this.name}`;\n  }\n}\nconst u1 = new UserProfile('Elena');\nconsole.log(u1.display());",
    "htmlExample": "<div class=\"demo-box\">Class methods are attached to the prototype.</div>",
    "expectedOutput": "> User: Elena",
    "notes": "Methods inside classes are automatically in strict mode.",
    "commonMistakes": "Adding commas between method declarations in a class (unlike object literals, commas are illegal here)."
  },
  {
    "id": 87,
    "number": "087",
    "title": "Instance Methods vs Static Methods",
    "category": "Objects, Classes & OOP",
    "introduction": "Instance methods operate on specific object instances; static methods belong to the class itself.",
    "explanation": "Static methods are prefixed with 'static'. They cannot access instance properties ('this' refers to the constructor class itself). Frequently used for utility functions and object factories.",
    "syntax": "class Tool {\n  static helper() {}\n  action() {}\n}",
    "keywordsOrMethods": [
      "static",
      "instance method",
      "utility class"
    ],
    "codeExample": "class MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n  static multiply(a, b) {\n    return a * b;\n  }\n}\nconsole.log('Static add:', MathUtil.add(10, 20));\nconsole.log('Static multiply:', MathUtil.multiply(5, 6));",
    "htmlExample": "<div class=\"demo-box\">Static methods are invoked directly on the class name.</div>",
    "expectedOutput": "> Static add: 30\n> Static multiply: 30",
    "notes": "Math.max() and Array.from() are built-in examples of static methods.",
    "commonMistakes": "Attempting to call a static method from an instance: instance.staticMethod() fails with undefined function."
  },
  {
    "id": 88,
    "number": "088",
    "title": "Encapsulation in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Encapsulation restricts direct access to an object's internal state, exposing controlled interfaces.",
    "explanation": "Encapsulation protects data integrity by preventing external code from corrupting internal values. Achieved via private class fields (#field) or closures.",
    "syntax": "class Account {\n  #balance = 0;\n  deposit(n) { if (n > 0) this.#balance += n; }\n}",
    "keywordsOrMethods": [
      "encapsulation",
      "#private",
      "data protection"
    ],
    "codeExample": "class SecureVault {\n  #passcode = '1234';\n  unlock(code) {\n    if (code === this.#passcode) {\n      return 'Vault Unlocked!';\n    }\n    return 'Access Denied.';\n  }\n}\nconst vault = new SecureVault();\nconsole.log(vault.unlock('wrong'));\nconsole.log(vault.unlock('1234'));",
    "htmlExample": "<div class=\"demo-box\">Encapsulation hides internal implementation details.</div>",
    "expectedOutput": "> Access Denied.\n> Vault Unlocked!",
    "notes": "Prior to #private fields, developers prefixed properties with underscores (_prop) as a convention, but it was not truly private.",
    "commonMistakes": "Relying solely on naming conventions like _private without real language-level encapsulation."
  },
  {
    "id": 89,
    "number": "089",
    "title": "Inheritance in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Inheritance allows a class (child) to inherit properties and methods from another class (parent).",
    "explanation": "Created using the 'extends' keyword. The child class inherits all prototype methods and static methods of the parent class, promoting code reuse.",
    "syntax": "class Child extends Parent {\n  constructor() { super(); }\n}",
    "keywordsOrMethods": [
      "extends",
      "parent class",
      "inheritance"
    ],
    "codeExample": "class Vehicle {\n  constructor(type) {\n    this.type = type;\n  }\n  start() {\n    return `${this.type} engine started.`;\n  }\n}\nclass Car extends Vehicle {\n  honk() {\n    return 'Beep beep!';\n  }\n}\nconst myCar = new Car('Sedan');\nconsole.log(myCar.start());\nconsole.log(myCar.honk());",
    "htmlExample": "<div class=\"demo-box\">Inheritance establishes 'is-a' relationships.</div>",
    "expectedOutput": "> Sedan engine started.\n> Beep beep!",
    "notes": "JavaScript supports single inheritance: a class can extend only one parent class.",
    "commonMistakes": "Trying to use multiple extends (e.g., class C extends A, B is invalid)."
  },
  {
    "id": 90,
    "number": "090",
    "title": "Method Overriding",
    "category": "Objects, Classes & OOP",
    "introduction": "Method overriding allows a subclass to provide a specific implementation of a method defined in its superclass.",
    "explanation": "When a method in a child class shares the exact same name as a method in its parent class, the child's method overrides the parent version during dynamic dispatch.",
    "syntax": "class Child extends Parent {\n  speak() {\n    return 'Custom sound';\n  }\n}",
    "keywordsOrMethods": [
      "override",
      "polymorphic dispatch",
      "subclass method"
    ],
    "codeExample": "class Animal {\n  speak() {\n    return 'Generic animal sound';\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return 'Woof woof!';\n  }\n}\nconst generic = new Animal();\nconst puppy = new Dog();\nconsole.log('Parent:', generic.speak());\nconsole.log('Overridden child:', puppy.speak());",
    "htmlExample": "<div class=\"demo-box\">Overriding provides specialized behavior in child classes.</div>",
    "expectedOutput": "> Parent: Generic animal sound\n> Overridden child: Woof woof!",
    "notes": "You can still invoke the parent's overridden method from the child using super.methodName().",
    "commonMistakes": "Overriding a method with an incompatible signature or return type."
  },
  {
    "id": 91,
    "number": "091",
    "title": "Super Keyword",
    "category": "Objects, Classes & OOP",
    "introduction": "The super keyword is used to access and call functions on an object's parent class.",
    "explanation": "In a derived constructor, 'super(...args)' must be called before using 'this'. In methods, 'super.methodName()' invokes the parent class implementation.",
    "syntax": "constructor(name, extra) {\n  super(name);\n  this.extra = extra;\n}",
    "keywordsOrMethods": [
      "super()",
      "super.method()",
      "parent invocation"
    ],
    "codeExample": "class Employee {\n  constructor(name) {\n    this.name = name;\n  }\n  getRole() {\n    return 'Staff';\n  }\n}\nclass Manager extends Employee {\n  constructor(name, dept) {\n    super(name); // Invokes Employee constructor\n    this.dept = dept;\n  }\n  getRole() {\n    return `${super.getRole()} -> Manager of ${this.dept}`;\n  }\n}\nconst m = new Manager('Sarah', 'Engineering');\nconsole.log(m.getRole());",
    "htmlExample": "<div class=\"demo-box\">super connects subclasses with parent functionality.</div>",
    "expectedOutput": "> Staff -> Manager of Engineering",
    "notes": "Attempting to access 'this' before calling super() in a derived constructor throws a ReferenceError.",
    "commonMistakes": "Forgetting super() in a subclass constructor."
  },
  {
    "id": 92,
    "number": "092",
    "title": "Prototype in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Prototypes are the mechanism by which JavaScript objects inherit features from one another.",
    "explanation": "Every function in JavaScript has a 'prototype' property. When objects are constructed, their internal [[Prototype]] link points to that prototype object.",
    "syntax": "ConstructorFunction.prototype.method = function() { ... };",
    "keywordsOrMethods": [
      "prototype",
      "__proto__",
      "prototype delegation"
    ],
    "codeExample": "function Player(name) {\n  this.name = name;\n}\nPlayer.prototype.score = 0;\nPlayer.prototype.levelUp = function() {\n  this.score += 100;\n  return `${this.name} scored! Score: ${this.score}`;\n};\nconst p = new Player('Alex');\nconsole.log(p.levelUp());",
    "htmlExample": "<div class=\"demo-box\">Prototypes allow shared memory across object instances.</div>",
    "expectedOutput": "> Alex scored! Score: 100",
    "notes": "Objects do not hold duplicate copies of prototype methods, keeping memory lean.",
    "commonMistakes": "Modifying built-in prototypes like Array.prototype or Object.prototype (monkey patching)."
  },
  {
    "id": 93,
    "number": "093",
    "title": "Prototype Inheritance",
    "category": "Objects, Classes & OOP",
    "introduction": "Prototypal inheritance allows an object to inherit properties directly from another object.",
    "explanation": "Unlike classical languages where classes inherit from classes, JavaScript objects inherit directly from other objects via their prototype reference.",
    "syntax": "Object.setPrototypeOf(childObj, parentObj);",
    "keywordsOrMethods": [
      "prototypal inheritance",
      "Object.create",
      "delegation"
    ],
    "codeExample": "const animal = {\n  eats: true,\n  walk() {\n    return 'Animal walking...';\n  }\n};\nconst rabbit = Object.create(animal);\nrabbit.jumps = true;\nconsole.log('Rabbit jumps:', rabbit.jumps);\nconsole.log('Rabbit inherited eats:', rabbit.eats);\nconsole.log('Rabbit inherited walk:', rabbit.walk());",
    "htmlExample": "<div class=\"demo-box\">Prototypal inheritance delegates lookups down the chain.</div>",
    "expectedOutput": "> Rabbit jumps: true\n> Rabbit inherited eats: true\n> Rabbit inherited walk: Animal walking...",
    "notes": "If a property is not found on rabbit, JavaScript delegates the search to animal.",
    "commonMistakes": "Overwriting a prototype reference after instances have already been created."
  },
  {
    "id": 94,
    "number": "094",
    "title": "Object Prototypes",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.prototype is the root prototype object at the top of the inheritance chain.",
    "explanation": "Almost all JavaScript objects descend from Object.prototype. It provides fundamental methods like toString(), valueOf(), and hasOwnProperty().",
    "syntax": "Object.getPrototypeOf(obj)",
    "keywordsOrMethods": [
      "Object.prototype",
      "getPrototypeOf",
      "root object"
    ],
    "codeExample": "const sample = { a: 1 };\nconst proto = Object.getPrototypeOf(sample);\nconsole.log('Is prototype Object.prototype?', proto === Object.prototype);\nconsole.log('Has toString method?', typeof sample.toString === 'function');",
    "htmlExample": "<div class=\"demo-box\">Object.prototype provides the universal baseline methods.</div>",
    "expectedOutput": "> Is prototype Object.prototype? true\n> Has toString method? true",
    "notes": "An object created with Object.create(null) has no prototype and lacks toString or hasOwnProperty.",
    "commonMistakes": "Calling obj.hasOwnProperty directly on objects that might have Object.create(null) prototypes."
  },
  {
    "id": 95,
    "number": "095",
    "title": "Prototype Chain",
    "category": "Objects, Classes & OOP",
    "introduction": "The prototype chain is the linked list of prototype objects searched during property lookup.",
    "explanation": "When accessing obj.prop, JavaScript checks obj first. If not found, it checks obj's prototype, then that prototype's prototype, up until reaching null at the end of the chain.",
    "syntax": "obj -> proto1 -> proto2 -> Object.prototype -> null",
    "keywordsOrMethods": [
      "prototype chain",
      "lookup delegation",
      "null termination"
    ],
    "codeExample": "const grandParent = { familyName: 'Yuzaki' };\nconst parent = Object.create(grandParent);\nconst child = Object.create(parent);\nchild.firstName = 'Nasa';\nconsole.log('Child own prop:', child.firstName);\nconsole.log('Looked up via chain:', child.familyName);",
    "htmlExample": "<div class=\"demo-box\">Property lookups traverse up the prototype chain.</div>",
    "expectedOutput": "> Child own prop: Nasa\n> Looked up via chain: Yuzaki",
    "notes": "If property lookup reaches null without finding a match, undefined is returned.",
    "commonMistakes": "Creating excessively deep prototype chains which can degrade lookup performance."
  },
  {
    "id": 96,
    "number": "096",
    "title": "Object.create() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.create() creates a new object using an existing object as the prototype.",
    "explanation": "Provides a clean way to instantiate an object with an explicit prototype without invoking a constructor function.",
    "syntax": "const obj = Object.create(proto, propertiesObject);",
    "keywordsOrMethods": [
      "Object.create()",
      "explicit prototype",
      "pure dictionary"
    ],
    "codeExample": "const protoUser = {\n  greet() {\n    return `Welcome back, ${this.name}!`;\n  }\n};\nconst user = Object.create(protoUser);\nuser.name = 'Dev';\nconsole.log(user.greet());",
    "htmlExample": "<div class=\"demo-box\">Object.create specifies the prototype directly.</div>",
    "expectedOutput": "> Welcome back, Dev!",
    "notes": "Object.create(null) creates a 'pure dictionary' without any built-in prototype methods or keys.",
    "commonMistakes": "Passing a non-object or non-null value as the first argument throws a TypeError."
  },
  {
    "id": 97,
    "number": "097",
    "title": "Object.assign() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.assign() copies all enumerable own properties from source objects to a target object.",
    "explanation": "Used for cloning objects and merging multiple objects into one. It performs shallow copies and returns the target object.",
    "syntax": "const returnedTarget = Object.assign(target, ...sources);",
    "keywordsOrMethods": [
      "Object.assign()",
      "shallow clone",
      "merge"
    ],
    "codeExample": "const defaults = { theme: 'dark', notifications: true };\nconst userPrefs = { theme: 'light' };\nconst config = Object.assign({}, defaults, userPrefs);\nconsole.log('Merged config:', config);",
    "htmlExample": "<div class=\"demo-box\">Object.assign merges property dictionaries.</div>",
    "expectedOutput": "> Merged config: {\"theme\":\"light\",\"notifications\":true}",
    "notes": "Object spread {...defaults, ...userPrefs} is the modern syntax for the same operation.",
    "commonMistakes": "Forgetting that Object.assign is shallow: nested objects are copied by reference."
  },
  {
    "id": 98,
    "number": "098",
    "title": "Object.entries() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.entries() returns an array of a given object's own enumerable [key, value] pairs.",
    "explanation": "Allows converting an object into an iterable array of key-value pairs, making it easy to use with for...of loops and array methods like map.",
    "syntax": "const entries = Object.entries(obj);",
    "keywordsOrMethods": [
      "Object.entries()",
      "[key, value]",
      "iteration"
    ],
    "codeExample": "const user = { name: 'NASA', track: 'FullStack', level: 5 };\nfor (const [key, val] of Object.entries(user)) {\n  console.log(`${key} => ${val}`);\n}",
    "htmlExample": "<div class=\"demo-box\">Object.entries returns key-value tuples.</div>",
    "expectedOutput": "> name => NASA\n> track => FullStack\n> level => 5",
    "notes": "Pairs with Object.fromEntries() to transform objects functionally.",
    "commonMistakes": "Expecting symbol-keyed properties to be included in Object.entries (they are excluded)."
  },
  {
    "id": 99,
    "number": "099",
    "title": "Object.keys() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.keys() returns an array of a given object's own enumerable property names.",
    "explanation": "Extracts string property names (keys) into an array. Excludes inherited prototype properties and symbol keys.",
    "syntax": "const keys = Object.keys(obj);",
    "keywordsOrMethods": [
      "Object.keys()",
      "property names",
      "keys array"
    ],
    "codeExample": "const server = { host: 'localhost', port: 3000, secure: true };\nconst keys = Object.keys(server);\nconsole.log('Server property keys:', keys);\nconsole.log('Property count:', keys.length);",
    "htmlExample": "<div class=\"demo-box\">Object.keys returns an array of property names.</div>",
    "expectedOutput": "> Server property keys: [\"host\",\"port\",\"secure\"]\n> Property count: 3",
    "notes": "Useful for checking if an object is empty: Object.keys(obj).length === 0.",
    "commonMistakes": "Expecting non-enumerable properties to appear in the output."
  },
  {
    "id": 100,
    "number": "100",
    "title": "Object.values() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.values() returns an array of a given object's own enumerable property values.",
    "explanation": "Extracts the values corresponding to all enumerable string keys of an object in the same order as a for...in loop.",
    "syntax": "const values = Object.values(obj);",
    "keywordsOrMethods": [
      "Object.values()",
      "property values",
      "aggregation"
    ],
    "codeExample": "const inventory = { apples: 10, oranges: 15, bananas: 8 };\nconst counts = Object.values(inventory);\nconst totalFruit = counts.reduce((sum, n) => sum + n, 0);\nconsole.log('Individual counts:', counts);\nconsole.log('Total fruit in stock:', totalFruit);",
    "htmlExample": "<div class=\"demo-box\">Object.values extracts data values without keys.</div>",
    "expectedOutput": "> Individual counts: [10,15,8]\n> Total fruit in stock: 33",
    "notes": "Introduced in ES2017.",
    "commonMistakes": "Assuming the values will be sorted alphabetically or numerically; they follow object property order."
  },
  {
    "id": 101,
    "number": "101",
    "title": "Object.hasOwnProperty() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own.",
    "explanation": "Differentiates own direct properties from inherited prototype properties. Modern ES2022 code prefers Object.hasOwn(obj, prop) which works safely even on Object.create(null) instances.",
    "syntax": "obj.hasOwnProperty(prop)\nObject.hasOwn(obj, prop)",
    "keywordsOrMethods": [
      "hasOwnProperty",
      "Object.hasOwn",
      "own property"
    ],
    "codeExample": "const proto = { inherited: true };\nconst instance = Object.create(proto);\ninstance.own = 'direct value';\nconsole.log('Has own property \"own\"?', instance.hasOwnProperty('own'));\nconsole.log('Has own property \"inherited\"?', instance.hasOwnProperty('inherited'));",
    "htmlExample": "<div class=\"demo-box\">hasOwnProperty filters out inherited prototype keys.</div>",
    "expectedOutput": "> Has own property \"own\"? true\n> Has own property \"inherited\"? false",
    "notes": "Object.hasOwn(obj, 'prop') is the modern, safer alternative introduced in ES2022.",
    "commonMistakes": "Calling obj.hasOwnProperty on an object where the property name 'hasOwnProperty' was overridden."
  },
  {
    "id": 102,
    "number": "102",
    "title": "Object.freeze() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.freeze() freezes an object, preventing new properties from being added, removed, or modified.",
    "explanation": "Creates complete shallow immutability. Existing properties cannot be changed, reconfigured, or deleted. In strict mode, attempted mutations throw a TypeError.",
    "syntax": "const frozen = Object.freeze(obj);",
    "keywordsOrMethods": [
      "Object.freeze()",
      "immutability",
      "shallow freeze"
    ],
    "codeExample": "const config = Object.freeze({\n  apiHost: 'https://api.codeplay.dev',\n  version: 1\n});\n// Attempted mutation silently ignored in non-strict, throws in strict\nconfig.version = 2;\nconsole.log('Config version remains:', config.version);\nconsole.log('Is frozen?', Object.isFrozen(config));",
    "htmlExample": "<div class=\"demo-box\">Object.freeze ensures runtime configuration immutability.</div>",
    "expectedOutput": "> Config version remains: 1\n> Is frozen? true",
    "notes": "Object.freeze is shallow: nested objects inside a frozen object can still be mutated unless recursively frozen.",
    "commonMistakes": "Assuming Object.freeze recursively protects deeply nested objects."
  },
  {
    "id": 103,
    "number": "103",
    "title": "Object.seal() Method",
    "category": "Objects, Classes & OOP",
    "introduction": "Object.seal() prevents new properties from being added or deleted, while allowing existing values to change.",
    "explanation": "Unlike Object.freeze(), Object.seal() keeps existing properties writable. Existing properties cannot be deleted and new properties cannot be added.",
    "syntax": "const sealed = Object.seal(obj);",
    "keywordsOrMethods": [
      "Object.seal()",
      "fixed schema",
      "writable"
    ],
    "codeExample": "const user = Object.seal({\n  name: 'Alex',\n  score: 10\n});\nuser.score = 25; // Allowed! Values are writable\ndelete user.name; // Ignored/forbidden!\nuser.newProp = 'fail'; // Ignored/forbidden!\nconsole.log('Sealed user object:', user);\nconsole.log('Is sealed?', Object.isSealed(user));",
    "htmlExample": "<div class=\"demo-box\">Object.seal locks down object schemas while permitting value updates.</div>",
    "expectedOutput": "> Sealed user object: {\"name\":\"Alex\",\"score\":25}\n> Is sealed? true",
    "notes": "Useful when an object represents a fixed model schema whose fields cannot change.",
    "commonMistakes": "Confusing freeze (read-only values) with seal (read-write values, locked keys)."
  },
  {
    "id": 104,
    "number": "104",
    "title": "Getter and Setter Methods",
    "category": "Objects, Classes & OOP",
    "introduction": "Getters and setters bind an object property to a function that executes on access or assignment.",
    "explanation": "Declared with 'get' and 'set' keywords. Getters compute dynamic values on demand, while setters validate or transform values before assignment.",
    "syntax": "class Person {\n  get fullName() { ... }\n  set age(val) { ... }\n}",
    "keywordsOrMethods": [
      "get",
      "set",
      "computed property",
      "accessor"
    ],
    "codeExample": "const temperature = {\n  celsius: 25,\n  get fahrenheit() {\n    return (this.celsius * 9/5) + 32;\n  },\n  set fahrenheit(val) {\n    this.celsius = (val - 32) * 5/9;\n  }\n};\nconsole.log('25\u00b0C in \u00b0F:', temperature.fahrenheit);\ntemperature.fahrenheit = 212;\nconsole.log('212\u00b0F in \u00b0C:', temperature.celsius);",
    "htmlExample": "<div class=\"demo-box\">Getters and setters encapsulate property access logic.</div>",
    "expectedOutput": "> 25\u00b0C in \u00b0F: 77\n> 212\u00b0F in \u00b0C: 100",
    "notes": "A setter must accept exactly one parameter.",
    "commonMistakes": "Accidentally creating infinite recursion by setting this.prop inside a setter for prop (use a backing property like this._prop)."
  },
  {
    "id": 105,
    "number": "105",
    "title": "Factory Functions",
    "category": "Objects, Classes & OOP",
    "introduction": "A factory function is any function that creates and returns a new object without using the 'new' keyword.",
    "explanation": "Factory functions leverage closures to produce encapsulated objects without 'this' context pitfalls or prototype baggage. A popular alternative to ES6 classes.",
    "syntax": "function createUser(name, role) {\n  return { name, role };\n}",
    "keywordsOrMethods": [
      "factory function",
      "composition",
      "no 'new' keyword"
    ],
    "codeExample": "function createCharacter(name, health) {\n  let currentHealth = health;\n  return {\n    name,\n    takeDamage(amount) {\n      currentHealth = Math.max(0, currentHealth - amount);\n      console.log(`${name} takes ${amount} dmg! Health: ${currentHealth}`);\n    },\n    getHealth: () => currentHealth\n  };\n}\nconst hero = createCharacter('Knight', 100);\nhero.takeDamage(25);",
    "htmlExample": "<div class=\"demo-box\">Factory functions produce encapsulated objects cleanly.</div>",
    "expectedOutput": "> Knight takes 25 dmg! Health: 75",
    "notes": "Factory functions do not share methods via prototypes unless explicitly configured.",
    "commonMistakes": "Creating thousands of identical method closures if high memory efficiency is required."
  },
  {
    "id": 106,
    "number": "106",
    "title": "Mixins in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Mixins are objects containing methods that can be copied into classes or prototypes for composition.",
    "explanation": "JavaScript only supports single inheritance. Mixins provide a composition pattern allowing classes to acquire capabilities from multiple sources via Object.assign().",
    "syntax": "Object.assign(TargetClass.prototype, mixinObj);",
    "keywordsOrMethods": [
      "mixin",
      "composition over inheritance",
      "Object.assign"
    ],
    "codeExample": "const canFly = {\n  fly() { return `${this.name} takes to the skies!`; }\n};\nconst canSwim = {\n  swim() { return `${this.name} dives into water!`; }\n};\nclass Duck {\n  constructor(name) { this.name = name; }\n}\nObject.assign(Duck.prototype, canFly, canSwim);\nconst donald = new Duck('Donald');\nconsole.log(donald.fly());\nconsole.log(donald.swim());",
    "htmlExample": "<div class=\"demo-box\">Mixins promote composition over rigid inheritance hierarchies.</div>",
    "expectedOutput": "> Donald takes to the skies!\n> Donald dives into water!",
    "notes": "Mixins can also be implemented as higher-order class factories: const Flyable = Base => class extends Base { ... }.",
    "commonMistakes": "Overwriting existing methods on the prototype when merging mixins with conflicting method names."
  },
  {
    "id": 107,
    "number": "107",
    "title": "Abstraction in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Abstraction hides complex implementation details, presenting only clean, simple public interfaces.",
    "explanation": "Users interact with high-level methods (e.g. car.start()) without needing to know internal engine mechanisms or private sensor validations.",
    "syntax": "class APIClient {\n  fetchData() { this.#connect(); this.#query(); }\n}",
    "keywordsOrMethods": [
      "abstraction",
      "interface",
      "hiding complexity"
    ],
    "codeExample": "class CoffeeMachine {\n  #waterLevel = 100;\n  #heatWater() {\n    console.log('Internal: Heating water to 95\u00b0C...');\n  }\n  makeEspresso() {\n    if (this.#waterLevel < 20) return 'Add water';\n    this.#heatWater();\n    this.#waterLevel -= 20;\n    return '\u2615 Espresso ready!';\n  }\n}\nconst machine = new CoffeeMachine();\nconsole.log(machine.makeEspresso());",
    "htmlExample": "<div class=\"demo-box\">Abstraction presents intuitive methods while managing complexity internally.</div>",
    "expectedOutput": "> Internal: Heating water to 95\u00b0C...\n> \u2615 Espresso ready!",
    "notes": "Abstraction reduces cognitive load and allows internal refactoring without breaking consumer code.",
    "commonMistakes": "Exposing internal flags or private helpers to public consumers."
  },
  {
    "id": 108,
    "number": "108",
    "title": "Polymorphism in JavaScript",
    "category": "Objects, Classes & OOP",
    "introduction": "Polymorphism allows different objects to respond to the same method invocation in their own unique way.",
    "explanation": "Because JavaScript is dynamically typed, polymorphism is natural: any object with a method named render() can be rendered polymorphically by a UI pipeline (duck typing).",
    "syntax": "shapes.forEach(shape => shape.draw());",
    "keywordsOrMethods": [
      "polymorphism",
      "duck typing",
      "method dispatch"
    ],
    "codeExample": "class Circle {\n  draw() { return 'Drawing a Circle \u2b55'; }\n}\nclass Square {\n  draw() { return 'Drawing a Square \u2b1b'; }\n}\nclass Triangle {\n  draw() { return 'Drawing a Triangle \ud83d\udd3a'; }\n}\nconst canvas = [new Circle(), new Square(), new Triangle()];\ncanvas.forEach(shape => console.log(shape.draw()));",
    "htmlExample": "<div class=\"demo-box\">Polymorphism allows interchangeable object handling.</div>",
    "expectedOutput": "> Drawing a Circle \u2b55\n> Drawing a Square \u2b1b\n> Drawing a Triangle \ud83d\udd3a",
    "notes": "JavaScript duck typing: 'If it walks like a duck and quacks like a duck, it's a duck.'",
    "commonMistakes": "Using instanceof checks instead of trusting the polymorphic method interface."
  },
  {
    "id": 109,
    "number": "109",
    "title": "getElementById() Method",
    "category": "DOM Manipulation",
    "introduction": "document.getElementById() returns the Element object whose id property matches the specified string.",
    "explanation": "The fastest DOM selector in modern browsers because browser engines maintain internal hash tables of element IDs. Returns null if no element is found.",
    "syntax": "const el = document.getElementById('my-id');",
    "keywordsOrMethods": [
      "getElementById",
      "ID lookup",
      "fastest selector"
    ],
    "codeExample": "const target = document.getElementById('lesson-target');\nif (target) {\n  console.log('Target found with text:', target.textContent);\n} else {\n  console.log('Target element retrieved: null');\n}",
    "htmlExample": "<div id=\"lesson-target\" class=\"demo-box\">Hello from getElementById target!</div>",
    "expectedOutput": "> Target found with text: Hello from getElementById target!",
    "notes": "Do not include the '#' symbol in getElementById('my-id') \u2014 pass the raw ID string.",
    "commonMistakes": "Passing '#my-id' instead of 'my-id' to getElementById."
  },
  {
    "id": 110,
    "number": "110",
    "title": "getElementsByClassName() Method",
    "category": "DOM Manipulation",
    "introduction": "getElementsByClassName() returns a live HTMLCollection of all child elements with the given class names.",
    "explanation": "Returns an HTMLCollection, which automatically updates when the DOM changes (live collection). Multiple class names can be space-separated.",
    "syntax": "const elements = document.getElementsByClassName('class-name');",
    "keywordsOrMethods": [
      "getElementsByClassName",
      "HTMLCollection",
      "live collection"
    ],
    "codeExample": "const cards = document.getElementsByClassName('badge-demo');\nconsole.log('Badges count:', cards.length);\nfor (let i = 0; i < cards.length; i++) {\n  console.log(`Badge ${i + 1}: ${cards[i].textContent}`);\n}",
    "htmlExample": "<div>\n  <span class=\"badge-demo\">Active</span>\n  <span class=\"badge-demo\">Verified</span>\n</div>",
    "expectedOutput": "> Badges count: 2\n> Badge 1: Active\n> Badge 2: Verified",
    "notes": "HTMLCollections are not arrays. Convert with Array.from() to use map, filter, or forEach.",
    "commonMistakes": "Trying to call array methods directly like cards.map() without converting to an array."
  },
  {
    "id": 111,
    "number": "111",
    "title": "getElementsByTagName() Method",
    "category": "DOM Manipulation",
    "introduction": "getElementsByTagName() returns a live HTMLCollection of elements with the given tag name.",
    "explanation": "Searches for elements matching HTML tag names ('p', 'button', 'li'). Passing '*' matches all elements in the subtree.",
    "syntax": "const elements = document.getElementsByTagName('button');",
    "keywordsOrMethods": [
      "getElementsByTagName",
      "tag name",
      "HTMLCollection"
    ],
    "codeExample": "const buttons = document.getElementsByTagName('button');\nconsole.log('Button elements found:', buttons.length);\nArray.from(buttons).forEach(btn => {\n  console.log('Button text:', btn.textContent);\n});",
    "htmlExample": "<div>\n  <button class=\"demo-btn\">Save</button>\n  <button class=\"demo-btn\">Cancel</button>\n</div>",
    "expectedOutput": "> Button elements found: 2\n> Button text: Save\n> Button text: Cancel",
    "notes": "Can be called on any sub-element (e.g. myDiv.getElementsByTagName('p')) to scope the search.",
    "commonMistakes": "Forgetting that tag names should be written without angle brackets (use 'p', not '<p>')."
  },
  {
    "id": 112,
    "number": "112",
    "title": "querySelector() Method",
    "category": "DOM Manipulation",
    "introduction": "querySelector() returns the first Element that matches a specified CSS selector string.",
    "explanation": "Accepts any valid CSS selector (#id, .class, [attr=\"val\"], div > p:first-child). Returns null if no match is found.",
    "syntax": "const el = document.querySelector('.card .btn-primary');",
    "keywordsOrMethods": [
      "querySelector",
      "CSS selector",
      "first match"
    ],
    "codeExample": "const header = document.querySelector('.highlight-text');\nif (header) {\n  console.log('Selected element content:', header.textContent);\n}",
    "htmlExample": "<div>\n  <p class=\"highlight-text\">Important Announcement</p>\n  <p class=\"highlight-text\">Secondary Item</p>\n</div>",
    "expectedOutput": "> Selected element content: Important Announcement",
    "notes": "Returns only the first matching element. Use querySelectorAll() to select all matches.",
    "commonMistakes": "Forgetting the dot prefix for classes ('.card') or hash for IDs ('#main')."
  },
  {
    "id": 113,
    "number": "113",
    "title": "querySelectorAll() Method",
    "category": "DOM Manipulation",
    "introduction": "querySelectorAll() returns a static NodeList representing all elements matching a CSS selector.",
    "explanation": "Unlike HTMLCollections, the NodeList returned by querySelectorAll() is static (does not change if elements are later added to DOM) and natively supports the .forEach() method.",
    "syntax": "const nodeList = document.querySelectorAll('.item');",
    "keywordsOrMethods": [
      "querySelectorAll",
      "static NodeList",
      "forEach"
    ],
    "codeExample": "const listItems = document.querySelectorAll('.demo-list li');\nconsole.log('Matching list items:', listItems.length);\nlistItems.forEach((li, idx) => {\n  console.log(`Item #${idx + 1}: ${li.textContent}`);\n});",
    "htmlExample": "<ul class=\"demo-list\">\n  <li>HTML5 Structure</li>\n  <li>CSS3 Styling</li>\n  <li>JavaScript Logic</li>\n</ul>",
    "expectedOutput": "> Matching list items: 3\n> Item #1: HTML5 Structure\n> Item #2: CSS3 Styling\n> Item #3: JavaScript Logic",
    "notes": "NodeLists can be converted to arrays using Array.from(nodeList) or [...nodeList].",
    "commonMistakes": "Assuming querySelectorAll returns a live collection; it is a static snapshot at the moment of invocation."
  },
  {
    "id": 114,
    "number": "114",
    "title": "innerText Property",
    "category": "DOM Manipulation",
    "introduction": "innerText represents the rendered text content of a node and its descendants.",
    "explanation": "innerText is aware of CSS styling and layout. It ignores hidden text (display: none), respects line breaks from block elements, and triggers a style layout reflow.",
    "syntax": "element.innerText = 'New visible text';",
    "keywordsOrMethods": [
      "innerText",
      "rendered text",
      "reflow"
    ],
    "codeExample": "const el = document.getElementById('text-demo');\nif (el) {\n  console.log('Original innerText:', el.innerText);\n  el.innerText = 'Updated via innerText!';\n  console.log('New innerText:', el.innerText);\n}",
    "htmlExample": "<div id=\"text-demo\" class=\"demo-box\">Original Display Text</div>",
    "expectedOutput": "> Original Display Text\n> New innerText: Updated via innerText!",
    "notes": "Prefer textContent if you don't need styling awareness because textContent is much faster.",
    "commonMistakes": "Using innerText for rapid background operations; its reflow cost can degrade performance."
  },
  {
    "id": 115,
    "number": "115",
    "title": "innerHTML Property",
    "category": "DOM Manipulation",
    "introduction": "innerHTML gets or sets the HTML or XML markup contained within the element.",
    "explanation": "Allows dynamically generating HTML structures by parsing a string into DOM nodes. Setting innerHTML destroys and replaces all existing children and their event listeners.",
    "syntax": "element.innerHTML = '<strong>Bold Message</strong>';",
    "keywordsOrMethods": [
      "innerHTML",
      "HTML parsing",
      "XSS security"
    ],
    "codeExample": "const container = document.getElementById('html-demo-container');\nif (container) {\n  container.innerHTML = '<span style=\"color:#06b6d4;font-weight:bold;\">Dynamically rendered HTML tag!</span>';\n  console.log('HTML updated successfully.');\n}",
    "htmlExample": "<div id=\"html-demo-container\" class=\"demo-box\">Initial content</div>",
    "expectedOutput": "> HTML updated successfully.",
    "notes": "Never set innerHTML using untrusted user input without sanitizing to prevent Cross-Site Scripting (XSS).",
    "commonMistakes": "Using innerHTML += '...' in tight loops, which constantly tears down and rebuilds DOM trees."
  },
  {
    "id": 116,
    "number": "116",
    "title": "textContent Property",
    "category": "DOM Manipulation",
    "introduction": "textContent gets or sets the text content of a node and all of its descendants.",
    "explanation": "Unlike innerText, textContent returns the raw text of all elements (including <script>, <style>, and hidden elements) without triggering a browser layout recalculation. Highly performant and secure against XSS.",
    "syntax": "element.textContent = 'Safe clean text';",
    "keywordsOrMethods": [
      "textContent",
      "safe text",
      "high performance"
    ],
    "codeExample": "const banner = document.getElementById('safe-banner');\nif (banner) {\n  banner.textContent = '<script>alert(1)</script>'; // Treated as literal text, NOT executed!\n  console.log('Escaped text:', banner.textContent);\n}",
    "htmlExample": "<div id=\"safe-banner\" class=\"demo-box\">Empty banner</div>",
    "expectedOutput": "> Escaped text: <script>alert(1)</script>",
    "notes": "Always use textContent instead of innerHTML when displaying user-supplied plain text.",
    "commonMistakes": "Expecting textContent to render HTML tags (it treats tags as literal text characters)."
  },
  {
    "id": 117,
    "number": "117",
    "title": "value Property",
    "category": "DOM Manipulation",
    "introduction": "The value property gets or sets the current value of form elements (<input>, <textarea>, <select>).",
    "explanation": "Represents the user-entered contents of form controls. Reading value returns a string; assigning to it updates the form control on screen.",
    "syntax": "const userText = inputEl.value;\ninputEl.value = 'New Value';",
    "keywordsOrMethods": [
      "value",
      "form controls",
      "input.value"
    ],
    "codeExample": "const input = document.getElementById('sample-input');\nif (input) {\n  console.log('Original input value:', input.value);\n  input.value = 'admin@codeplay.dev';\n  console.log('Updated input value:', input.value);\n}",
    "htmlExample": "<div>\n  <input type=\"text\" id=\"sample-input\" value=\"user@test.com\" class=\"demo-input\" style=\"padding:8px;border-radius:6px;\">\n</div>",
    "expectedOutput": "> Original input value: user@test.com\n> Updated input value: admin@codeplay.dev",
    "notes": "For numeric inputs (type=\"number\"), input.value is still returned as a string. Use input.valueAsNumber for a number.",
    "commonMistakes": "Trying to read innerHTML or textContent on an <input> element instead of .value."
  },
  {
    "id": 118,
    "number": "118",
    "title": "setAttribute() Method",
    "category": "DOM Manipulation",
    "introduction": "setAttribute() sets the value of an attribute on the specified element.",
    "explanation": "If the attribute already exists, its value is updated; otherwise, a new attribute is created. The value is automatically converted to a string.",
    "syntax": "element.setAttribute(name, value);",
    "keywordsOrMethods": [
      "setAttribute",
      "HTML attributes",
      "data-* attributes"
    ],
    "codeExample": "const link = document.getElementById('demo-link');\nif (link) {\n  link.setAttribute('href', 'https://github.com/YUZAKIxNASA/PLAY-CODE');\n  link.setAttribute('target', '_blank');\n  console.log('Updated href:', link.getAttribute('href'));\n}",
    "htmlExample": "<a id=\"demo-link\" href=\"#\" class=\"demo-btn\" style=\"display:inline-block;\">Repository Link</a>",
    "expectedOutput": "> Updated href: https://github.com/YUZAKIxNASA/PLAY-CODE",
    "notes": "For standard properties like id and title, direct property access (el.id = 'val') is usually preferred.",
    "commonMistakes": "Passing boolean false to setAttribute('disabled', false) \u2014 in HTML, the presence of the attribute alone makes it true!"
  },
  {
    "id": 119,
    "number": "119",
    "title": "getAttribute() Method",
    "category": "DOM Manipulation",
    "introduction": "getAttribute() returns the current string value of a specified attribute on the element.",
    "explanation": "If the specified attribute does not exist on the element, it returns null. Excellent for reading custom data-* attributes.",
    "syntax": "const attrVal = element.getAttribute(attributeName);",
    "keywordsOrMethods": [
      "getAttribute",
      "custom attributes",
      "null if absent"
    ],
    "codeExample": "const box = document.getElementById('custom-data-box');\nif (box) {\n  const lessonId = box.getAttribute('data-lesson-id');\n  console.log('data-lesson-id attribute:', lessonId);\n}",
    "htmlExample": "<div id=\"custom-data-box\" data-lesson-id=\"119\" class=\"demo-box\">Component with custom attributes</div>",
    "expectedOutput": "> data-lesson-id attribute: 119",
    "notes": "Custom data-* attributes can also be accessed via the element.dataset property.",
    "commonMistakes": "Expecting getAttribute to return non-string types; all HTML attributes return as strings."
  },
  {
    "id": 120,
    "number": "120",
    "title": "removeAttribute() Method",
    "category": "DOM Manipulation",
    "introduction": "removeAttribute() removes the element's attribute with the specified name.",
    "explanation": "Completely detaches the attribute from the element's DOM representation. Especially important for boolean attributes like 'disabled', 'hidden', or 'checked'.",
    "syntax": "element.removeAttribute(attributeName);",
    "keywordsOrMethods": [
      "removeAttribute",
      "delete attribute"
    ],
    "codeExample": "const btn = document.getElementById('toggle-btn');\nif (btn) {\n  console.log('Disabled before removal:', btn.hasAttribute('disabled'));\n  btn.removeAttribute('disabled');\n  console.log('Disabled after removal:', btn.hasAttribute('disabled'));\n}",
    "htmlExample": "<button id=\"toggle-btn\" disabled class=\"demo-btn\">Clickable Button</button>",
    "expectedOutput": "> Disabled before removal: true\n> Disabled after removal: false",
    "notes": "To re-enable a button, removeAttribute('disabled') or set btn.disabled = false.",
    "commonMistakes": "Setting setAttribute('disabled', '') hoping to remove it; you must use removeAttribute."
  },
  {
    "id": 121,
    "number": "121",
    "title": "classList.add() Method",
    "category": "DOM Manipulation",
    "introduction": "classList.add() adds one or more specified class names to an element.",
    "explanation": "Part of the DOMTokenList interface. If the specified class already exists on the element, it is ignored (no duplicates are created).",
    "syntax": "element.classList.add('class1', 'class2');",
    "keywordsOrMethods": [
      "classList.add",
      "DOMTokenList",
      "add class"
    ],
    "codeExample": "const card = document.getElementById('card-node');\nif (card) {\n  card.classList.add('active', 'highlighted');\n  console.log('Class list:', card.className);\n}",
    "htmlExample": "<div id=\"card-node\" class=\"demo-box\">Interactive Card Node</div>",
    "expectedOutput": "> Class list: demo-box active highlighted",
    "notes": "Accepts multiple arguments: el.classList.add('a', 'b', 'c').",
    "commonMistakes": "Including a dot in the class name: classList.add('.active') results in a class with a literal dot."
  },
  {
    "id": 122,
    "number": "122",
    "title": "classList.remove() Method",
    "category": "DOM Manipulation",
    "introduction": "classList.remove() removes one or more specified class names from an element.",
    "explanation": "If the class does not exist on the element, no error is thrown. Safe and clean way to delete class names.",
    "syntax": "element.classList.remove('class1', 'class2');",
    "keywordsOrMethods": [
      "classList.remove",
      "remove class"
    ],
    "codeExample": "const box = document.getElementById('removable-class-box');\nif (box) {\n  console.log('Initial class list:', box.className);\n  box.classList.remove('warning');\n  console.log('Updated class list:', box.className);\n}",
    "htmlExample": "<div id=\"removable-class-box\" class=\"demo-box warning\">Alert container</div>",
    "expectedOutput": "> Initial class list: demo-box warning\n> Updated class list: demo-box",
    "notes": "classList.remove() does nothing if the class is not present, making pre-checks unnecessary.",
    "commonMistakes": "Manually doing string replacement on element.className instead of using classList.remove()."
  },
  {
    "id": 123,
    "number": "123",
    "title": "classList.toggle() Method",
    "category": "DOM Manipulation",
    "introduction": "classList.toggle() removes an existing class or adds a non-existing class, returning a boolean.",
    "explanation": "If the class exists, it is removed and toggle returns false. If the class does not exist, it is added and toggle returns true. Supports an optional force boolean.",
    "syntax": "const isPresent = element.classList.toggle('active', force);",
    "keywordsOrMethods": [
      "classList.toggle",
      "toggle class",
      "force boolean"
    ],
    "codeExample": "const menu = document.getElementById('nav-menu-box');\nif (menu) {\n  const state1 = menu.classList.toggle('open');\n  console.log('Toggle 1 (was added?):', state1);\n  const state2 = menu.classList.toggle('open');\n  console.log('Toggle 2 (was added?):', state2);\n}",
    "htmlExample": "<div id=\"nav-menu-box\" class=\"demo-box\">Menu Container</div>",
    "expectedOutput": "> Toggle 1 (was added?): true\n> Toggle 2 (was added?): false",
    "notes": "Passing a second boolean argument (force) acts like add (if true) or remove (if false).",
    "commonMistakes": "Writing redundant if/else logic when classList.toggle achieves the exact same result in one line."
  },
  {
    "id": 124,
    "number": "124",
    "title": "appendChild() Method",
    "category": "DOM Manipulation",
    "introduction": "appendChild() adds a node to the end of the list of children of a specified parent node.",
    "explanation": "If the given child is a reference to an existing node in the document, appendChild moves it from its current position to the new position.",
    "syntax": "parentNode.appendChild(childNode);",
    "keywordsOrMethods": [
      "appendChild",
      "DOM insertion",
      "move node"
    ],
    "codeExample": "const parent = document.getElementById('append-container');\nif (parent) {\n  const newPara = document.createElement('p');\n  newPara.textContent = 'Dynamically appended child paragraph!';\n  parent.appendChild(newPara);\n  console.log('Child node appended. Children count:', parent.children.length);\n}",
    "htmlExample": "<div id=\"append-container\" class=\"demo-box\"></div>",
    "expectedOutput": "> Child node appended. Children count: 1",
    "notes": "Modern code also uses parent.append(), which supports multiple nodes and direct strings.",
    "commonMistakes": "Passing a raw string to appendChild: parent.appendChild('hello') throws a TypeError (use append() or document.createTextNode())."
  },
  {
    "id": 125,
    "number": "125",
    "title": "removeChild() Method",
    "category": "DOM Manipulation",
    "introduction": "removeChild() removes a child node from the DOM and returns the removed node.",
    "explanation": "Called on the parent element. If childNode is not a child of parentNode, a NotFoundError is thrown.",
    "syntax": "const removed = parentNode.removeChild(childNode);",
    "keywordsOrMethods": [
      "removeChild",
      "DOM deletion",
      "orphan node"
    ],
    "codeExample": "const list = document.getElementById('tasks-demo-list');\nif (list && list.firstElementChild) {\n  const removed = list.removeChild(list.firstElementChild);\n  console.log('Removed child item:', removed.textContent);\n}",
    "htmlExample": "<ul id=\"tasks-demo-list\">\n  <li>First task (to be removed)</li>\n  <li>Second task (remains)</li>\n</ul>",
    "expectedOutput": "> Removed child item: First task (to be removed)",
    "notes": "Modern JavaScript also supports childNode.remove() called directly on the child element itself.",
    "commonMistakes": "Calling parent.removeChild() on an element that has already been detached."
  },
  {
    "id": 126,
    "number": "126",
    "title": "click Event",
    "category": "Events & Listeners",
    "introduction": "The click event fires when a pointing device button is pressed and released on a single element.",
    "explanation": "The most widely used UI event. Triggers on mouse clicks, touch taps on mobile screens, and pressing Enter or Space on a focused button.",
    "syntax": "element.addEventListener('click', event => { ... });",
    "keywordsOrMethods": [
      "click",
      "addEventListener",
      "PointerEvent"
    ],
    "codeExample": "const btn = document.getElementById('sample-click-btn');\nif (btn) {\n  btn.addEventListener('click', e => {\n    console.log('Click event captured! Target:', e.target.tagName);\n  });\n  btn.click(); // Programmatic dispatch\n}",
    "htmlExample": "<button id=\"sample-click-btn\" class=\"demo-btn\">Click Target</button>",
    "expectedOutput": "> Click event captured! Target: BUTTON",
    "notes": "Always use buttons or links for clickable interactions to ensure keyboard accessibility.",
    "commonMistakes": "Adding click listeners to non-interactive elements (like <div> or <span>) without tabindex or keyboard handlers."
  },
  {
    "id": 127,
    "number": "127",
    "title": "dblclick Event",
    "category": "Events & Listeners",
    "introduction": "The dblclick event fires when a pointing device button is clicked twice on an element.",
    "explanation": "Fires after two successive click events within a short timeframe defined by the user's operating system settings.",
    "syntax": "element.addEventListener('dblclick', event => { ... });",
    "keywordsOrMethods": [
      "dblclick",
      "double click"
    ],
    "codeExample": "const box = document.getElementById('dbl-box');\nif (box) {\n  box.addEventListener('dblclick', () => {\n    console.log('Double click detected!');\n  });\n  // Dispatch synthetic dblclick\n  box.dispatchEvent(new MouseEvent('dblclick'));\n}",
    "htmlExample": "<div id=\"dbl-box\" class=\"demo-box\">Double-click this container</div>",
    "expectedOutput": "> Double click detected!",
    "notes": "Be cautious using dblclick on touch devices, as mobile browsers often treat double taps as zoom gestures.",
    "commonMistakes": "Binding conflicting actions to both 'click' and 'dblclick' on the exact same element."
  },
  {
    "id": 128,
    "number": "128",
    "title": "mouseover Event",
    "category": "Events & Listeners",
    "introduction": "The mouseover event fires when a pointing device is moved onto the element that has the listener.",
    "explanation": "Unlike mouseenter, mouseover bubbles up the DOM tree and fires when entering any child elements of the target.",
    "syntax": "element.addEventListener('mouseover', event => { ... });",
    "keywordsOrMethods": [
      "mouseover",
      "bubbling",
      "hover"
    ],
    "codeExample": "const card = document.getElementById('hover-card');\nif (card) {\n  card.addEventListener('mouseover', e => {\n    console.log('Mouse entered element bounds:', e.target.id);\n  });\n  card.dispatchEvent(new MouseEvent('mouseover'));\n}",
    "htmlExample": "<div id=\"hover-card\" class=\"demo-box\">Hover mouse over me</div>",
    "expectedOutput": "> Mouse entered element bounds: hover-card",
    "notes": "If you do not want bubbling from child elements, use 'mouseenter' instead.",
    "commonMistakes": "Confusing mouseover (which bubbles) with mouseenter (which does not bubble)."
  },
  {
    "id": 129,
    "number": "129",
    "title": "mouseout Event",
    "category": "Events & Listeners",
    "introduction": "The mouseout event fires when a pointing device is moved off the element or onto a child element.",
    "explanation": "Pairs with mouseover. Bubbles up the DOM hierarchy. If you only want to know when the cursor exits the outer container, consider mouseleave.",
    "syntax": "element.addEventListener('mouseout', event => { ... });",
    "keywordsOrMethods": [
      "mouseout",
      "mouseleave",
      "cursor exit"
    ],
    "codeExample": "const card = document.getElementById('hover-card-out');\nif (card) {\n  card.addEventListener('mouseout', () => {\n    console.log('Mouse departed element.');\n  });\n  card.dispatchEvent(new MouseEvent('mouseout'));\n}",
    "htmlExample": "<div id=\"hover-card-out\" class=\"demo-box\">Move mouse out of here</div>",
    "expectedOutput": "> Mouse departed element.",
    "notes": "mouseleave does not bubble and is generally easier to use for tooltips.",
    "commonMistakes": "Flickering tooltips caused by mouseout triggering as the cursor moves over child text nodes."
  },
  {
    "id": 130,
    "number": "130",
    "title": "keydown Event",
    "category": "Events & Listeners",
    "introduction": "The keydown event fires immediately when a key on the keyboard is pressed down.",
    "explanation": "Unlike the deprecated keypress event, keydown fires for all keys, including modifier keys (Shift, Ctrl, Alt) and navigation keys (Escape, ArrowUp, Enter). event.key contains the key string.",
    "syntax": "element.addEventListener('keydown', event => {\n  console.log(event.key);\n});",
    "keywordsOrMethods": [
      "keydown",
      "event.key",
      "event.code"
    ],
    "codeExample": "window.addEventListener('keydown', e => {\n  if (e.key === 'Escape') {\n    console.log('Escape pressed! Dismissing modal.');\n  }\n});\n// Dispatch simulated key\nwindow.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));",
    "htmlExample": "<div class=\"demo-box\">Press keys or dispatch keyboard events.</div>",
    "expectedOutput": "> Escape pressed! Dismissing modal.",
    "notes": "Use event.key ('Enter') rather than deprecated numeric keyCode (13).",
    "commonMistakes": "Using deprecated event.which or event.keyCode instead of event.key."
  },
  {
    "id": 131,
    "number": "131",
    "title": "keyup Event",
    "category": "Events & Listeners",
    "introduction": "The keyup event fires when a key on the keyboard is released.",
    "explanation": "Fires after the key input has already been registered in an input field. Ideal for live search filtering or character counter updates.",
    "syntax": "inputEl.addEventListener('keyup', event => { ... });",
    "keywordsOrMethods": [
      "keyup",
      "key release",
      "event.key"
    ],
    "codeExample": "const search = document.getElementById('search-live');\nif (search) {\n  search.addEventListener('keyup', e => {\n    console.log('Current search query:', e.target.value);\n  });\n  search.value = 'CSS Grid';\n  search.dispatchEvent(new KeyboardEvent('keyup', { key: 'd' }));\n}",
    "htmlExample": "<div>\n  <input type=\"text\" id=\"search-live\" placeholder=\"Type to search...\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
    "expectedOutput": "> Current search query: CSS Grid",
    "notes": "For real-time input tracking, the 'input' event is generally preferred over keyup as it captures paste and voice input.",
    "commonMistakes": "Using keyup to prevent characters (the character is already entered into the input when keyup fires)."
  },
  {
    "id": 132,
    "number": "132",
    "title": "change Event",
    "category": "Events & Listeners",
    "introduction": "The change event fires when an element's value is committed by the user.",
    "explanation": "For text inputs, change fires only when the user commits the value (by pressing Enter or blurring the input). For <select>, checkboxes, and radio buttons, it fires immediately upon selection.",
    "syntax": "element.addEventListener('change', event => { ... });",
    "keywordsOrMethods": [
      "change",
      "commit value",
      "form change"
    ],
    "codeExample": "const select = document.getElementById('theme-dropdown');\nif (select) {\n  select.addEventListener('change', e => {\n    console.log('Theme changed to:', e.target.value);\n  });\n  select.value = 'midnight';\n  select.dispatchEvent(new Event('change'));\n}",
    "htmlExample": "<select id=\"theme-dropdown\" class=\"demo-input\" style=\"padding:8px;\">\n  <option value=\"light\">Light</option>\n  <option value=\"dark\">Dark</option>\n  <option value=\"midnight\">Midnight</option>\n</select>",
    "expectedOutput": "> Theme changed to: midnight",
    "notes": "Use the 'input' event if you want continuous updates with every single keystroke.",
    "commonMistakes": "Expecting 'change' to fire on text inputs before the field loses focus."
  },
  {
    "id": 133,
    "number": "133",
    "title": "submit Event",
    "category": "Events & Listeners",
    "introduction": "The submit event fires when a <form> is submitted.",
    "explanation": "Triggered when the user clicks a submit button or presses Enter inside a form field. Typically intercepted via event.preventDefault() to handle submission via Fetch/AJAX without reloading the page.",
    "syntax": "form.addEventListener('submit', event => {\n  event.preventDefault();\n});",
    "keywordsOrMethods": [
      "submit",
      "preventDefault()",
      "AJAX submission"
    ],
    "codeExample": "const form = document.getElementById('login-form');\nif (form) {\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    console.log('Form submission intercepted! Preventing default page reload.');\n  });\n  form.dispatchEvent(new Event('submit', { cancelable: true }));\n}",
    "htmlExample": "<form id=\"login-form\">\n  <input type=\"text\" placeholder=\"Username\" style=\"padding:6px;\">\n  <button type=\"submit\" class=\"demo-btn\">Submit</button>\n</form>",
    "expectedOutput": "> Form submission intercepted! Preventing default page reload.",
    "notes": "Always attach the listener to the <form> element, not the submit <button>.",
    "commonMistakes": "Attaching the click listener to the submit button instead of listening to submit on the form."
  },
  {
    "id": 134,
    "number": "134",
    "title": "focus Event",
    "category": "Events & Listeners",
    "introduction": "The focus event fires when an element has received focus (via click, tab, or focus() call).",
    "explanation": "Used for styling active form fields, showing tooltips, or initializing inputs. The focus event does not bubble (use focusin if bubbling is required).",
    "syntax": "element.addEventListener('focus', event => { ... });",
    "keywordsOrMethods": [
      "focus",
      "focusin",
      "active element"
    ],
    "codeExample": "const input = document.getElementById('focus-input');\nif (input) {\n  input.addEventListener('focus', () => {\n    console.log('Input gained focus! Ready for typing.');\n  });\n  input.dispatchEvent(new Event('focus'));\n}",
    "htmlExample": "<div>\n  <input type=\"text\" id=\"focus-input\" placeholder=\"Focus me\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
    "expectedOutput": "> Input gained focus! Ready for typing.",
    "notes": "Pair with CSS :focus-visible for optimal keyboard accessibility.",
    "commonMistakes": "Expecting focus to bubble up to parent containers (use focusin instead)."
  },
  {
    "id": 135,
    "number": "135",
    "title": "blur Event",
    "category": "Events & Listeners",
    "introduction": "The blur event fires when an element has lost focus.",
    "explanation": "Often used for field-level form validation (checking an email format once the user leaves the input). Does not bubble (focusout bubbles).",
    "syntax": "element.addEventListener('blur', event => { ... });",
    "keywordsOrMethods": [
      "blur",
      "focusout",
      "field validation"
    ],
    "codeExample": "const email = document.getElementById('blur-email');\nif (email) {\n  email.addEventListener('blur', e => {\n    const valid = e.target.value.includes('@');\n    console.log('Validation on blur. Is valid email?', valid);\n  });\n  email.value = 'developer@codeplay.dev';\n  email.dispatchEvent(new Event('blur'));\n}",
    "htmlExample": "<div>\n  <input type=\"email\" id=\"blur-email\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
    "expectedOutput": "> Validation on blur. Is valid email? true",
    "notes": "Use blur to validate single inputs as the user navigates across a form.",
    "commonMistakes": "Displaying aggressive validation error messages before the user has even finished typing (validate on blur, not keydown)."
  },
  {
    "id": 136,
    "number": "136",
    "title": "event.preventDefault()",
    "category": "Events & Listeners",
    "introduction": "event.preventDefault() cancels the default browser action that belongs to the event.",
    "explanation": "Prevents links from following URLs, forms from reloading the page, or checkboxes from toggling. Does not stop event propagation (bubbling).",
    "syntax": "event.preventDefault();",
    "keywordsOrMethods": [
      "preventDefault()",
      "default action",
      "event.defaultPrevented"
    ],
    "codeExample": "const link = document.getElementById('cancel-link');\nif (link) {\n  link.addEventListener('click', e => {\n    e.preventDefault();\n    console.log('Navigation prevented by preventDefault()!');\n  });\n  link.dispatchEvent(new MouseEvent('click', { cancelable: true }));\n}",
    "htmlExample": "<a id=\"cancel-link\" href=\"https://google.com\" class=\"demo-btn\">Clickable Link</a>",
    "expectedOutput": "> Navigation prevented by preventDefault()!",
    "notes": "An event must have event.cancelable set to true for preventDefault() to have an effect.",
    "commonMistakes": "Confusing preventDefault() with stopPropagation() (preventDefault stops browser default actions, not bubbling)."
  },
  {
    "id": 137,
    "number": "137",
    "title": "event.stopPropagation()",
    "category": "Events & Listeners",
    "introduction": "event.stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.",
    "explanation": "Stops the event from traveling up the DOM tree to ancestor elements. Essential for nested interactive components like dropdowns inside clickable cards.",
    "syntax": "event.stopPropagation();",
    "keywordsOrMethods": [
      "stopPropagation()",
      "event bubbling",
      "propagation"
    ],
    "codeExample": "const outer = document.createElement('div');\nconst inner = document.createElement('button');\nouter.addEventListener('click', () => console.log('Outer card clicked!'));\ninner.addEventListener('click', e => {\n  e.stopPropagation(); // Outer will NOT receive this click!\n  console.log('Inner button clicked (propagation halted).');\n});\ninner.click();",
    "htmlExample": "<div class=\"demo-box\">Propagation control isolates nested event handlers.</div>",
    "expectedOutput": "> Inner button clicked (propagation halted).",
    "notes": "To also prevent other listeners on the SAME element from executing, use event.stopImmediatePropagation().",
    "commonMistakes": "Overusing stopPropagation which can break analytics, global document dismiss listeners, and delegated event architectures."
  },
  {
    "id": 138,
    "number": "138",
    "title": "let Keyword in ES6",
    "category": "ES6+ & Modules",
    "introduction": "let revolutionized JavaScript in ES6 by introducing true lexical block scoping to local variables.",
    "explanation": "Before ES6, var variables leaked outside of for loops and if blocks. let binds variables strictly to their enclosing block and enforces the Temporal Dead Zone (TDZ).",
    "syntax": "let variable = value;",
    "keywordsOrMethods": [
      "let",
      "ES6",
      "block scope",
      "TDZ"
    ],
    "codeExample": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log('Loop iteration:', i), 10);\n}",
    "htmlExample": "<div class=\"demo-box\">let creates a fresh binding per loop iteration.</div>",
    "expectedOutput": "> Loop iteration: 0\n> Loop iteration: 1\n> Loop iteration: 2",
    "notes": "With var, the code above would log '3' three times. With let, each iteration captures its own 'i'.",
    "commonMistakes": "Using var in asynchronous loops and suffering closure variable capture bugs."
  },
  {
    "id": 139,
    "number": "139",
    "title": "const Keyword in ES6",
    "category": "ES6+ & Modules",
    "introduction": "const introduced immutable identifier bindings in ES6, preventing accidental reassignment.",
    "explanation": "Default choice for modern variable declarations. Signals to developers and the JS compiler that the binding will never point to a different memory reference.",
    "syntax": "const PI = 3.14159;",
    "keywordsOrMethods": [
      "const",
      "ES6",
      "immutable binding"
    ],
    "codeExample": "const team = ['Alice', 'Bob'];\nteam.push('Charlie'); // Allowed: mutates array\nconsole.log('Team members:', team);\n// team = ['Dave']; // TypeError: Assignment to constant variable",
    "htmlExample": "<div class=\"demo-box\">const enforces identifier stability.</div>",
    "expectedOutput": "> Team members: [\"Alice\",\"Bob\",\"Charlie\"]",
    "notes": "Always use const by default, and switch to let only when reassignment is genuinely required.",
    "commonMistakes": "Assuming const freezes an object's properties (it only protects the variable assignment)."
  },
  {
    "id": 140,
    "number": "140",
    "title": "Template Literals",
    "category": "ES6+ & Modules",
    "introduction": "Template literals are string literals delimited with backticks (`) allowing embedded expressions and multi-line text.",
    "explanation": "Introduced in ES6, template literals eliminate awkward string concatenation with '+'. Expressions inside ${...} are evaluated and coerced to strings. Preserves formatting and line breaks.",
    "syntax": "`Hello ${name}, total is ${price * qty}`",
    "keywordsOrMethods": [
      "template literal",
      "backtick `",
      "${expression}"
    ],
    "codeExample": "const user = 'NASA-KUN';\nconst lessonsCompleted = 140;\nconst total = 230;\nconst progress = `User: ${user}\nCompleted: ${lessonsCompleted}/${total} (${((lessonsCompleted/total)*100).toFixed(1)}%)`;\nconsole.log(progress);",
    "htmlExample": "<div class=\"demo-box\">Template literals support expression interpolation and multi-line strings.</div>",
    "expectedOutput": "> User: NASA-KUN\n> Completed: 140/230 (60.9%)",
    "notes": "Tagged template literals (tag`string`) allow custom string parsing functions (e.g. styled-components).",
    "commonMistakes": "Using regular quotes (' or \") instead of backticks (`) when attempting expression interpolation."
  },
  {
    "id": 141,
    "number": "141",
    "title": "Destructuring Assignment",
    "category": "ES6+ & Modules",
    "introduction": "Destructuring syntax unpacks values from arrays or properties from objects into distinct variables.",
    "explanation": "Introduced in ES6, destructuring drastically cleans up code when extracting parameters from configs, API payloads, or function argument objects.",
    "syntax": "const { name, age } = user;\nconst [first, second] = array;",
    "keywordsOrMethods": [
      "destructuring",
      "object unpacking",
      "array unpacking"
    ],
    "codeExample": "const config = { host: 'localhost', port: 3000, secure: true };\nconst { host, port } = config;\nconsole.log(`Connecting to ${host}:${port}`);\nconst colors = ['#4f46e5', '#06b6d4'];\nconst [primary, accent] = colors;\nconsole.log('Primary accent:', primary);",
    "htmlExample": "<div class=\"demo-box\">Destructuring extracts properties concisely.</div>",
    "expectedOutput": "> Connecting to localhost:3000\n> Primary accent: #4f46e5",
    "notes": "You can provide default values: const { role = 'User' } = data.",
    "commonMistakes": "Destructuring from null or undefined: const { a } = null throws a TypeError."
  },
  {
    "id": 142,
    "number": "142",
    "title": "Spread Operator",
    "category": "ES6+ & Modules",
    "introduction": "The spread operator (...) expands an iterable (like an array or object) into individual elements or properties.",
    "explanation": "Used to create shallow clones, merge arrays, combine objects, and pass array elements as arguments to functions.",
    "syntax": "const merged = [...arr1, ...arr2];\nconst clone = { ...obj };",
    "keywordsOrMethods": [
      "...spread",
      "shallow copy",
      "object spread"
    ],
    "codeExample": "const frontend = ['HTML', 'CSS'];\nconst fullstack = [...frontend, 'JavaScript', 'Node.js'];\nconsole.log('Combined stack:', fullstack);\nconst baseSettings = { theme: 'dark', sound: true };\nconst userSettings = { ...baseSettings, sound: false };\nconsole.log('Updated settings:', userSettings);",
    "htmlExample": "<div class=\"demo-box\">Spread expands iterables into elements.</div>",
    "expectedOutput": "> Combined stack: [\"HTML\",\"CSS\",\"JavaScript\",\"Node.js\"]\n> Updated settings: {\"theme\":\"dark\",\"sound\":false}",
    "notes": "Spread copies properties shallowly; nested objects remain referenced.",
    "commonMistakes": "Confusing the spread operator (expanding into elements) with rest parameters (collecting elements into an array)."
  },
  {
    "id": 143,
    "number": "143",
    "title": "Rest Operator",
    "category": "ES6+ & Modules",
    "introduction": "The rest operator (...) collects remaining elements or properties into an array or object during destructuring.",
    "explanation": "Used in object and array destructuring to gather everything that wasn't explicitly extracted into a new container.",
    "syntax": "const [head, ...tail] = list;\nconst { id, ...details } = record;",
    "keywordsOrMethods": [
      "...rest",
      "destructuring rest",
      "remaining properties"
    ],
    "codeExample": "const userRecord = { id: 143, name: 'Alex', email: 'alex@dev.io', role: 'Admin' };\nconst { id, ...publicProfile } = userRecord;\nconsole.log('Extracted ID:', id);\nconsole.log('Remaining profile object:', publicProfile);",
    "htmlExample": "<div class=\"demo-box\">Rest collects remaining properties.</div>",
    "expectedOutput": "> Extracted ID: 143\n> Remaining profile object: {\"name\":\"Alex\",\"email\":\"alex@dev.io\",\"role\":\"Admin\"}",
    "notes": "The rest element must always be the final element in destructuring patterns.",
    "commonMistakes": "Placing another property after the rest operator in destructuring: const { ...rest, id } is invalid."
  },
  {
    "id": 144,
    "number": "144",
    "title": "Import Statement",
    "category": "ES6+ & Modules",
    "introduction": "The import statement is used to bring in functions, objects, or primitives exported from another module.",
    "explanation": "Part of standard ES Modules (ESM). Static imports are evaluated at parse time before code runs, allowing tree-shaking and static analysis.",
    "syntax": "import { funcName } from './module.js';\nimport defaultExport from './module.js';",
    "keywordsOrMethods": [
      "import",
      "named import",
      "default import",
      "ESM"
    ],
    "codeExample": "// ES Module syntax demonstration\nconsole.log('Import syntax demonstration:');\nconsole.log(\"import { calculateTotal } from './math.js';\");\nconsole.log(\"import defaultUser from './user.js';\");",
    "htmlExample": "<div class=\"demo-box\">ES Modules enable modular, tree-shakeable codebases.</div>",
    "expectedOutput": "> Import syntax demonstration:\n> import { calculateTotal } from './math.js';\n> import defaultUser from './user.js';",
    "notes": "Requires <script type=\"module\"> in HTML or 'type': 'module' in package.json.",
    "commonMistakes": "Omitting the .js file extension in native browser module imports."
  },
  {
    "id": 145,
    "number": "145",
    "title": "Export Statement",
    "category": "ES6+ & Modules",
    "introduction": "The export statement is used to expose functions, objects, or values from a module to other files.",
    "explanation": "Supports named exports (multiple per module) and a single default export. Consumers use matching import statements.",
    "syntax": "export const PI = 3.14;\nexport default class App { ... }",
    "keywordsOrMethods": [
      "export",
      "export default",
      "named export"
    ],
    "codeExample": "// Defining exported elements:\nconst API_KEY = 'demo_key_xyz';\nfunction fetchItems() { return ['item1', 'item2']; }\nconsole.log('Export definitions ready:');\nconsole.log('export { API_KEY, fetchItems };');",
    "htmlExample": "<div class=\"demo-box\">Export statements create reusable modules.</div>",
    "expectedOutput": "> Export definitions ready:\n> export { API_KEY, fetchItems };",
    "notes": "You can rename exports using 'as': export { myFunc as run }.",
    "commonMistakes": "Having more than one 'export default' in a single module file."
  },
  {
    "id": 146,
    "number": "146",
    "title": "Using Modules in FS6",
    "category": "ES6+ & Modules",
    "introduction": "Using ECMAScript 2015 (ES6) modules structure code into separate, reusable, scoped files.",
    "explanation": "INVENTORY NOTICE: Preserved original title spelling 'Using Modules in FS6' (referring to ES6 ECMAScript Modules). Modules maintain their own private scope, execute in strict mode automatically, and defer execution until the HTML document is parsed.",
    "syntax": "<script type=\"module\" src=\"app.js\"></script>",
    "keywordsOrMethods": [
      "type=\"module\"",
      "ES6 Modules",
      "strict mode default"
    ],
    "codeExample": "// Demonstration of ES6 module execution context:\nconsole.log('Module executed in strict mode automatically:', (function() { return !this; })());\nconsole.log('Modules avoid polluting global window namespace.');",
    "htmlExample": "<div class=\"demo-box\">\n  <strong>ES6 Modules Notice:</strong> Title preserved as 'Using Modules in FS6'.\n</div>",
    "expectedOutput": "> Module executed in strict mode automatically: true\n> Modules avoid polluting global window namespace.",
    "notes": "Modules are fetched via CORS; opening an HTML file directly via file:// protocol may trigger CORS errors in browsers (run via a local web server).",
    "commonMistakes": "Loading an ES module from local file:// system directly in browsers without a local HTTP dev server."
  },
  {
    "id": 147,
    "number": "147",
    "title": "Promises",
    "category": "Async JS & APIs",
    "introduction": "A Promise represents the eventual completion (or failure) of an asynchronous operation.",
    "explanation": "A Promise has three states: pending, fulfilled (resolved with a value), or rejected (failed with an error). Promises allow chaining via .then(), .catch(), and .finally().",
    "syntax": "new Promise((resolve, reject) => {\n  // async task\n  if (success) resolve(data);\n  else reject(err);\n});",
    "keywordsOrMethods": [
      "Promise",
      "resolve",
      "reject",
      "then()",
      "catch()"
    ],
    "codeExample": "const simulateFetch = new Promise((resolve) => {\n  setTimeout(() => resolve('Payload received from server!'), 50);\n});\nsimulateFetch.then(data => {\n  console.log('Promise resolved:', data);\n});",
    "htmlExample": "<div class=\"demo-box\">Promises replace nested callback pyramids.</div>",
    "expectedOutput": "> Promise resolved: Payload received from server!",
    "notes": "Promise.all([p1, p2]) runs multiple promises in parallel, waiting for all to complete.",
    "commonMistakes": "Forgetting to catch errors: always include a .catch() or handle rejection."
  },
  {
    "id": 148,
    "number": "148",
    "title": "Async and Await",
    "category": "Async JS & APIs",
    "introduction": "async and await allow asynchronous, promise-based code to be written in a synchronous, readable style.",
    "explanation": "The 'async' keyword marks a function as returning a Promise. The 'await' operator pauses execution of the async function until the Promise settles, returning its fulfilled value or throwing on rejection.",
    "syntax": "async function loadData() {\n  const res = await fetch(url);\n  return res.json();\n}",
    "keywordsOrMethods": [
      "async",
      "await",
      "syntactic sugar",
      "try/catch"
    ],
    "codeExample": "async function getLessonInfo() {\n  console.log('Fetching lesson data...');\n  const result = await new Promise(res => setTimeout(() => res('Lesson #148: Async & Await'), 50));\n  console.log('Result:', result);\n}\ngetLessonInfo();",
    "htmlExample": "<div class=\"demo-box\">async/await brings linear readability to asynchronous code.</div>",
    "expectedOutput": "> Fetching lesson data...\n> Result: Lesson #148: Async & Await",
    "notes": "Top-level await is supported in modern ES modules.",
    "commonMistakes": "Using await inside a standard non-async function (causes a SyntaxError)."
  },
  {
    "id": 149,
    "number": "149",
    "title": "fetch API",
    "category": "Async JS & APIs",
    "introduction": "The fetch() method provides a modern, promise-based interface for fetching network resources.",
    "explanation": "Replaces legacy XMLHttpRequest. It returns a Promise resolving to a Response object. Calling response.json() or response.text() extracts the parsed payload.",
    "syntax": "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
    "keywordsOrMethods": [
      "fetch()",
      "Response",
      "Request",
      "Headers"
    ],
    "codeExample": "// Simulating a fetch API workflow:\nasync function simulateApiCall() {\n  console.log('Initiating fetch request...');\n  const mockResponse = { status: 200, json: async () => ({ title: 'CodePlay', active: true }) };\n  const data = await mockResponse.json();\n  console.log('Parsed API JSON data:', data);\n}\nsimulateApiCall();",
    "htmlExample": "<div class=\"demo-box\">fetch provides a modern HTTP client in browsers.</div>",
    "expectedOutput": "> Initiating fetch request...\n> Parsed API JSON data: {\"title\":\"CodePlay\",\"active\":true}",
    "notes": "fetch only rejects on network failures, NOT on HTTP 404 or 500 errors. You must check response.ok.",
    "commonMistakes": "Assuming fetch rejects on 404/500 errors (you must check if (!response.ok))."
  },
  {
    "id": 150,
    "number": "150",
    "title": "try...catch...finally",
    "category": "Async JS & APIs",
    "introduction": "try...catch...finally statements handle errors gracefully without crashing program execution.",
    "explanation": "Code in the try block runs first. If an error is thrown, execution transfers to catch. The finally block is guaranteed to run after both, regardless of whether an error occurred.",
    "syntax": "try {\n  // risky code\n} catch (err) {\n  // handle error\n} finally {\n  // cleanup always runs\n}",
    "keywordsOrMethods": [
      "try",
      "catch",
      "finally",
      "error handling"
    ],
    "codeExample": "try {\n  console.log('Attempting operation...');\n  JSON.parse('invalid json string');\n} catch (err) {\n  console.log('Caught error gracefully:', err.name, '-', err.message);\n} finally {\n  console.log('Finally block executed: Resource cleanup complete.');\n}",
    "htmlExample": "<div class=\"demo-box\">try/catch protects your app from unexpected crashes.</div>",
    "expectedOutput": "> Attempting operation...\n> Caught error gracefully: SyntaxError - Unexpected token 'i', \"invalid json string\" is not valid JSON\n> Finally block executed: Resource cleanup complete.",
    "notes": "ES2019 introduced optional catch binding: catch { ... } without needing an error parameter.",
    "commonMistakes": "Empty catch blocks that swallow errors silently, making debugging nearly impossible."
  },
  {
    "id": 151,
    "number": "151",
    "title": "throw Statement",
    "category": "Async JS & APIs",
    "introduction": "The throw statement throws a user-defined exception and halts execution in the current function.",
    "explanation": "Execution of the current function stops, and control passes to the first catch block in the call stack. Throwing standard Error objects provides valuable stack trace information.",
    "syntax": "throw new Error('Custom error message');",
    "keywordsOrMethods": [
      "throw",
      "Error()",
      "stack trace",
      "exception"
    ],
    "codeExample": "function divide(a, b) {\n  if (b === 0) {\n    throw new Error('Cannot divide by zero!');\n  }\n  return a / b;\n}\ntry {\n  console.log(divide(10, 2));\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log('Caught exception:', err.message);\n}",
    "htmlExample": "<div class=\"demo-box\">throw initiates error propagation down the call stack.</div>",
    "expectedOutput": "> 5\n> Caught exception: Cannot divide by zero!",
    "notes": "Always throw instances of Error (or subclasses like TypeError) rather than plain strings.",
    "commonMistakes": "Throwing plain strings (throw 'error'), which lack filename and line number stack traces."
  },
  {
    "id": 152,
    "number": "152",
    "title": "JSON Introduction",
    "category": "Async JS & APIs",
    "introduction": "JSON (JavaScript Object Notation) is a lightweight, language-agnostic data-interchange format.",
    "explanation": "Derived from JavaScript object syntax, JSON represents structured data using key/value pairs and arrays. Keys must be double-quoted strings. JSON supports strings, numbers, booleans, null, arrays, and objects (no functions or symbols).",
    "syntax": "{\n  \"title\": \"CodePlay\",\n  \"lessons\": 230,\n  \"active\": true\n}",
    "keywordsOrMethods": [
      "JSON",
      "data-interchange",
      "double quotes"
    ],
    "codeExample": "const rawJsonText = '{\"platform\":\"CodePlay\",\"lessons\":230,\"owner\":\"NASA-KUN\"}';\nconsole.log('Raw JSON String:', rawJsonText);\nconst parsedObj = JSON.parse(rawJsonText);\nconsole.log('Platform:', parsedObj.platform);\nconsole.log('Lessons:', parsedObj.lessons);",
    "htmlExample": "<div class=\"demo-box\">JSON is the universal standard for client-server communication.</div>",
    "expectedOutput": "> Raw JSON String: {\"platform\":\"CodePlay\",\"lessons\":230,\"owner\":\"NASA-KUN\"}\n> Platform: CodePlay\n> Lessons: 230",
    "notes": "Trailing commas and single quotes are illegal in strict JSON specification.",
    "commonMistakes": "Using single quotes in JSON strings ('key': 'val'), which causes JSON.parse to fail."
  },
  {
    "id": 153,
    "number": "153",
    "title": "Parsing JSON",
    "category": "Async JS & APIs",
    "introduction": "JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.",
    "explanation": "Converts serialized JSON text into native JavaScript objects or arrays. Accepts an optional reviver function to transform parsed values during deserialization.",
    "syntax": "const data = JSON.parse(text, reviver);",
    "keywordsOrMethods": [
      "JSON.parse()",
      "deserialization",
      "reviver"
    ],
    "codeExample": "const payload = '{\"user\":\"Nasa\",\"joined\":\"2026-01-01\"}';\nconst parsed = JSON.parse(payload, (key, value) => {\n  if (key === 'joined') return new Date(value);\n  return value;\n});\nconsole.log('User:', parsed.user);\nconsole.log('Date object created?', parsed.joined instanceof Date);",
    "htmlExample": "<div class=\"demo-box\">JSON.parse converts strings into native objects.</div>",
    "expectedOutput": "> User: Nasa\n> Date object created? true",
    "notes": "Always wrap JSON.parse in a try/catch block when handling external network inputs.",
    "commonMistakes": "Passing undefined to JSON.parse(undefined), which throws a SyntaxError."
  },
  {
    "id": 154,
    "number": "154",
    "title": "Stringifying JSON",
    "category": "Async JS & APIs",
    "introduction": "JSON.stringify() converts a JavaScript object or value to a JSON string.",
    "explanation": "Serializes JavaScript state into text suitable for network transmission or local storage. Supports replacer filters and indent spacing for pretty-printing.",
    "syntax": "const jsonStr = JSON.stringify(value, replacer, space);",
    "keywordsOrMethods": [
      "JSON.stringify()",
      "serialization",
      "pretty print"
    ],
    "codeExample": "const user = { name: 'Elena', score: 95, registered: true };\nconst compactJson = JSON.stringify(user);\nconsole.log('Compact JSON:', compactJson);\nconst prettyJson = JSON.stringify(user, null, 2);\nconsole.log('Formatted JSON:\\n' + prettyJson);",
    "htmlExample": "<div class=\"demo-box\">JSON.stringify serializes objects into text representations.</div>",
    "expectedOutput": "> Compact JSON: {\"name\":\"Elena\",\"score\":95,\"registered\":true}\n> Formatted JSON:\n{\n  \"name\": \"Elena\",\n  \"score\": 95,\n  \"registered\": true\n}",
    "notes": "Properties with undefined, function, or symbol values are automatically omitted during serialization.",
    "commonMistakes": "Attempting to stringify objects with circular references (throws TypeError: circular structure)."
  },
  {
    "id": 155,
    "number": "155",
    "title": "Fetching Data from APIs",
    "category": "Async JS & APIs",
    "introduction": "Fetching data from APIs involves requesting external endpoints and consuming JSON responses.",
    "explanation": "Modern frontend workflows rely on REST and GraphQL APIs. Best practices include checking response.ok, setting appropriate headers, handling timeouts, and displaying loading/error states.",
    "syntax": "const res = await fetch('/api/endpoint');\nif (!res.ok) throw new Error('Failed');\nconst data = await res.json();",
    "keywordsOrMethods": [
      "API integration",
      "REST",
      "response.ok",
      "JSON payload"
    ],
    "codeExample": "async function loadCurriculumSummary() {\n  console.log('Querying curriculum API endpoint...');\n  // Simulated endpoint response\n  const mockEndpoint = {\n    status: 200,\n    ok: true,\n    json: async () => ({\n      tracks: ['HTML (166)', 'CSS (210)', 'JavaScript (230)'],\n      totalLessons: 606\n    })\n  };\n  if (mockEndpoint.ok) {\n    const payload = await mockEndpoint.json();\n    console.log('Available tracks:', payload.tracks);\n    console.log('Total platform lessons:', payload.totalLessons);\n  }\n}\nloadCurriculumSummary();",
    "htmlExample": "<div class=\"demo-box\">APIs power dynamic data communication between client and server.</div>",
    "expectedOutput": "> Querying curriculum API endpoint...\n> Available tracks: [\"HTML (166)\",\"CSS (210)\",\"JavaScript (230)\"]\n> Total platform lessons: 606",
    "notes": "Always provide user-facing fallback feedback when API network requests take time or fail.",
    "commonMistakes": "Forgetting to await both the fetch() promise AND the response.json() promise."
  },
  {
    "id": 156,
    "number": "156",
    "title": "LocalStorage in JavaScript",
    "category": "Web Storage & State",
    "introduction": "localStorage provides persistent key-value storage in the browser that survives browser restarts.",
    "explanation": "Scoped per origin (protocol + domain + port). Stores up to ~5MB of data. Values are stored strictly as strings, meaning objects must be serialized with JSON.stringify.",
    "syntax": "localStorage.setItem('key', 'value');\nconst val = localStorage.getItem('key');",
    "keywordsOrMethods": [
      "localStorage",
      "setItem",
      "getItem",
      "removeItem",
      "clear"
    ],
    "codeExample": "const demoStorage = {\n  data: {},\n  setItem(k, v) { this.data[k] = String(v); console.log(`Saved ${k} = ${v}`); },\n  getItem(k) { return this.data[k] || null; }\n};\ndemoStorage.setItem('theme', 'dark');\ndemoStorage.setItem('userLesson', '156');\nconsole.log('Retrieved theme:', demoStorage.getItem('theme'));",
    "htmlExample": "<div class=\"demo-box\">localStorage preserves state across sessions.</div>",
    "expectedOutput": "> Saved theme = dark\n> Saved userLesson = 156\n> Retrieved theme: dark",
    "notes": "localStorage is synchronous and blocking; avoid writing large datasets frequently.",
    "commonMistakes": "Saving an object directly without JSON.stringify: localStorage.setItem('user', {id: 1}) stores '[object Object]'."
  },
  {
    "id": 157,
    "number": "157",
    "title": "SessionStorage in JavaScript",
    "category": "Web Storage & State",
    "introduction": "sessionStorage stores key-value pairs for the duration of the page session (until the tab is closed).",
    "explanation": "Opening a new tab or window creates a brand new session, even for the same URL. Ideal for temporary form drafts or single-session wizard progress.",
    "syntax": "sessionStorage.setItem('sessionKey', 'val');",
    "keywordsOrMethods": [
      "sessionStorage",
      "tab lifespan",
      "temporary state"
    ],
    "codeExample": "const mockSession = {};\nmockSession['draftMessage'] = 'Drafting a new message...';\nconsole.log('Session storage item saved:', mockSession['draftMessage']);\nconsole.log('Storage clears automatically upon tab close.');",
    "htmlExample": "<div class=\"demo-box\">sessionStorage isolates state to a single browser tab lifetime.</div>",
    "expectedOutput": "> Session storage item saved: Drafting a new message...\n> Storage clears automatically upon tab close.",
    "notes": "Data survives page refreshes and page restores within the same tab.",
    "commonMistakes": "Expecting sessionStorage to be shared across two different tabs of the same website."
  },
  {
    "id": 158,
    "number": "158",
    "title": "Cookies in JavaScript",
    "category": "Web Storage & State",
    "introduction": "Cookies are small strings of data stored in the browser and automatically sent with every HTTP request.",
    "explanation": "Managed via document.cookie. Can specify attributes such as Max-Age, Path, Domain, Secure, and SameSite. Authentication cookies should use HttpOnly (set by server) to prevent client-side XSS theft.",
    "syntax": "document.cookie = 'user=nasa; max-age=3600; path=/; SameSite=Lax';",
    "keywordsOrMethods": [
      "document.cookie",
      "HttpOnly",
      "SameSite",
      "Max-Age"
    ],
    "codeExample": "function setMockCookie(name, val, maxAge) {\n  const cookieStr = `${name}=${encodeURIComponent(val)}; max-age=${maxAge}; path=/`;\n  console.log('Cookie header string:', cookieStr);\n}\nsetMockCookie('user_theme', 'midnight', 86400);",
    "htmlExample": "<div class=\"demo-box\">Cookies accompany network requests to the origin server.</div>",
    "expectedOutput": "> Cookie header string: user_theme=midnight; max-age=86400; path=/",
    "notes": "Always use SameSite=Lax or Strict and Secure to guard against Cross-Site Request Forgery (CSRF).",
    "commonMistakes": "Reading document.cookie directly assuming it returns an object; it returns a semicolon-delimited string."
  },
  {
    "id": 159,
    "number": "159",
    "title": "Synchronous JavaScript",
    "category": "Runtime & Architecture",
    "introduction": "Synchronous execution processes statements line-by-line in sequential order, blocking subsequent tasks.",
    "explanation": "JavaScript has a single call stack on its main thread. In synchronous execution, each line must completely finish before the next line can begin. Long synchronous tasks cause UI freezes.",
    "syntax": "step1();\nstep2();\nstep3();",
    "keywordsOrMethods": [
      "synchronous",
      "blocking",
      "call stack",
      "single-threaded"
    ],
    "codeExample": "console.log('1. Starting task A');\nconst start = Date.now();\nwhile (Date.now() - start < 20) { /* Brief sync work */ }\nconsole.log('2. Task A completed synchronously');\nconsole.log('3. Task B starting');",
    "htmlExample": "<div class=\"demo-box\">Synchronous code blocks the thread until completion.</div>",
    "expectedOutput": "> 1. Starting task A\n> 2. Task A completed synchronously\n> 3. Task B starting",
    "notes": "Heavy computation should be offloaded to Web Workers to keep the main UI thread responsive.",
    "commonMistakes": "Performing intensive data processing synchronously on the main thread, freezing user scrolling."
  },
  {
    "id": 160,
    "number": "160",
    "title": "Asynchronous JavaScript",
    "category": "Runtime & Architecture",
    "introduction": "Asynchronous JavaScript allows time-consuming tasks to run in the background without blocking the UI thread.",
    "explanation": "Tasks like network requests, timers, and file I/O are handed off to browser Web APIs. Once finished, their callbacks are queued and processed via the Event Loop when the call stack clears.",
    "syntax": "setTimeout(() => { ... }, 0);",
    "keywordsOrMethods": [
      "asynchronous",
      "non-blocking",
      "Web APIs",
      "task queue"
    ],
    "codeExample": "console.log('1. Main script starts');\nsetTimeout(() => {\n  console.log('3. Async timer callback executed');\n}, 0);\nconsole.log('2. Main script continues without blocking');",
    "htmlExample": "<div class=\"demo-box\">Async tasks run without blocking the call stack.</div>",
    "expectedOutput": "> 1. Main script starts\n> 2. Main script continues without blocking\n> 3. Async timer callback executed",
    "notes": "Even with a 0ms delay, setTimeout is deferred until the synchronous call stack is completely empty.",
    "commonMistakes": "Assuming asynchronous code runs simultaneously on multiple CPU cores in the same context."
  },
  {
    "id": 161,
    "number": "161",
    "title": "Event Loop",
    "category": "Runtime & Architecture",
    "introduction": "The Event Loop continuously coordinates execution between the call stack, microtask queue, and macrotask queue.",
    "explanation": "If the call stack is empty, the Event Loop first drains ALL pending microtasks (Promises, queueMicrotask). Once microtasks are cleared, it pulls the next macrotask (setTimeout, setInterval, UI events).",
    "syntax": "// Order: Synchronous -> Microtasks -> Macrotasks",
    "keywordsOrMethods": [
      "Event Loop",
      "Call Stack",
      "Microtasks",
      "Macrotasks"
    ],
    "codeExample": "console.log('1. Sync Log');\nsetTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);\nPromise.resolve().then(() => console.log('3. Microtask (Promise)'));\nconsole.log('2. Sync Log 2');",
    "htmlExample": "<div class=\"demo-box\">Microtasks always execute before the next macrotask.</div>",
    "expectedOutput": "> 1. Sync Log\n> 2. Sync Log 2\n> 3. Microtask (Promise)\n> 4. Macrotask (setTimeout)",
    "notes": "Understanding microtask priority is critical for mastering Promise execution timing.",
    "commonMistakes": "Expecting setTimeout(fn, 0) to execute before Promise.resolve().then(fn)."
  },
  {
    "id": 162,
    "number": "162",
    "title": "JavaScript Callbacks",
    "category": "Runtime & Architecture",
    "introduction": "Callbacks are the fundamental mechanism for handling events and deferred asynchronous notifications.",
    "explanation": "A function is registered to be executed when an asynchronous operation (file load, timer, network packet, mouse click) finishes. Node.js historically used the 'error-first' callback convention (err, data).",
    "syntax": "fs.readFile('data.txt', (err, data) => { ... });",
    "keywordsOrMethods": [
      "callbacks",
      "error-first callback",
      "event listener"
    ],
    "codeExample": "function performStep(stepName, callback) {\n  console.log(`Starting ${stepName}...`);\n  callback(null, `Result of ${stepName}`);\n}\nperformStep('Asset Loading', (err, result) => {\n  if (err) console.error(err);\n  else console.log('Callback received:', result);\n});",
    "htmlExample": "<div class=\"demo-box\">Callbacks provide notifications upon task completion.</div>",
    "expectedOutput": "> Starting Asset Loading...\n> Callback received: Result of Asset Loading",
    "notes": "Modern code wraps callbacks in Promises using util.promisify or custom Promise constructors.",
    "commonMistakes": "Not checking the error parameter in error-first callbacks."
  },
  {
    "id": 163,
    "number": "163",
    "title": "setTimeout() Method",
    "category": "Runtime & Architecture",
    "introduction": "setTimeout() sets a timer which executes a function once the timer expires.",
    "explanation": "Schedules a macrotask after delay milliseconds. Returns a positive integer timeoutID which can be passed to clearTimeout() to cancel execution before it runs.",
    "syntax": "const timerId = setTimeout(callback, delayMs, ...args);",
    "keywordsOrMethods": [
      "setTimeout",
      "delay",
      "timerID"
    ],
    "codeExample": "console.log('Timer set for 30ms...');\nconst timerId = setTimeout((msg) => {\n  console.log('Delayed message:', msg);\n}, 30, 'Hello from setTimeout!');",
    "htmlExample": "<div class=\"demo-box\">setTimeout schedules delayed execution.</div>",
    "expectedOutput": "> Timer set for 30ms...\n> Delayed message: Hello from setTimeout!",
    "notes": "Browser background tabs enforce a minimum timer delay of 1000ms (1 second) to conserve battery.",
    "commonMistakes": "Passing a string to setTimeout (setTimeout('code', 100)) which invokes eval-like parsing."
  },
  {
    "id": 164,
    "number": "164",
    "title": "setInterval() Method",
    "category": "Runtime & Architecture",
    "introduction": "setInterval() repeatedly calls a function with a fixed time delay between each call.",
    "explanation": "Executes until the window is closed or clearInterval() is called with the returned intervalID. If an execution takes longer than the interval, runs can overlap in older systems.",
    "syntax": "const intervalId = setInterval(callback, intervalMs);",
    "keywordsOrMethods": [
      "setInterval",
      "repeated timer",
      "intervalID"
    ],
    "codeExample": "let ticks = 0;\nconst interval = setInterval(() => {\n  ticks++;\n  console.log(`Tick #${ticks}`);\n  if (ticks >= 3) {\n    clearInterval(interval);\n    console.log('Interval stopped.');\n  }\n}, 20);",
    "htmlExample": "<div class=\"demo-box\">setInterval triggers repeated executions.</div>",
    "expectedOutput": "> Tick #1\n> Tick #2\n> Tick #3\n> Interval stopped.",
    "notes": "For animation, requestAnimationFrame() is superior to setInterval as it syncs with display refresh rate.",
    "commonMistakes": "Forgetting to store the intervalID, making it impossible to stop the repeating timer later."
  },
  {
    "id": 165,
    "number": "165",
    "title": "clearTimeout() Method",
    "category": "Runtime & Architecture",
    "introduction": "clearTimeout() cancels a timeout previously established by calling setTimeout().",
    "explanation": "If the task has not yet executed, clearTimeout cancels it completely and prevents the callback from running. Passing an invalid ID does nothing silently.",
    "syntax": "clearTimeout(timeoutId);",
    "keywordsOrMethods": [
      "clearTimeout",
      "timer cancellation"
    ],
    "codeExample": "const timer = setTimeout(() => {\n  console.log('This will never execute!');\n}, 100);\nclearTimeout(timer);\nconsole.log('Timeout cancelled before execution.');",
    "htmlExample": "<div class=\"demo-box\">clearTimeout aborts scheduled timeouts.</div>",
    "expectedOutput": "> Timeout cancelled before execution.",
    "notes": "Crucial for implementing debouncing search inputs and preventing memory leaks in unmounted UI components.",
    "commonMistakes": "Passing the callback function to clearTimeout instead of the returned numeric timer ID."
  },
  {
    "id": 166,
    "number": "166",
    "title": "clearInterval() Method",
    "category": "Runtime & Architecture",
    "introduction": "clearInterval() cancels a repeating timed action previously established by setInterval().",
    "explanation": "Stops the repeating execution cycle immediately. The timer will not fire any further callbacks.",
    "syntax": "clearInterval(intervalId);",
    "keywordsOrMethods": [
      "clearInterval",
      "halt repeating timer"
    ],
    "codeExample": "let count = 0;\nconst loop = setInterval(() => {\n  count++;\n  if (count === 1) {\n    console.log('Running first and only tick.');\n    clearInterval(loop);\n  }\n}, 10);",
    "htmlExample": "<div class=\"demo-box\">clearInterval stops repeating loops.</div>",
    "expectedOutput": "> Running first and only tick.",
    "notes": "Always clean up intervals when navigating away from single page application views.",
    "commonMistakes": "Not clearing intervals in single-page apps, leading to ghost intervals accumulating over time."
  },
  {
    "id": 167,
    "number": "167",
    "title": "Strict Mode",
    "category": "Runtime & Architecture",
    "introduction": "Strict mode ('use strict') enforces cleaner, safer JavaScript by catching silent errors.",
    "explanation": "Eliminates silent failures by throwing errors on accidental globals, duplicate parameter names, deleting variables, and assigns 'this' as undefined in standalone functions. Modules and classes are in strict mode automatically.",
    "syntax": "'use strict';",
    "keywordsOrMethods": [
      "'use strict'",
      "strict mode",
      "prevents globals"
    ],
    "codeExample": "(function() {\n  'use strict';\n  console.log('Strict mode active.');\n  try {\n    // undeclaredVar = 42; // Throws ReferenceError in strict mode\n    console.log('Global pollution prevented.');\n  } catch (e) {\n    console.log(e.message);\n  }\n})();",
    "htmlExample": "<div class=\"demo-box\">Strict mode prevents common JavaScript pitfalls.</div>",
    "expectedOutput": "> Strict mode active.\n> Global pollution prevented.",
    "notes": "All modern ES modules (<script type=\"module\">) run in strict mode by default.",
    "commonMistakes": "Placing non-comment code before 'use strict' at the top of a file, which disables it."
  },
  {
    "id": 168,
    "number": "168",
    "title": "Garbage Collection",
    "category": "Runtime & Architecture",
    "introduction": "Garbage collection (GC) is the automatic process of reclaiming memory occupied by unreachable objects.",
    "explanation": "Modern JavaScript engines use a 'Mark-and-Sweep' algorithm. Starting from root references (global window, current call stack local variables), reachable objects are marked. Any unmarked memory is automatically swept and freed.",
    "syntax": "// Automatic in JS runtime via Mark-and-Sweep",
    "keywordsOrMethods": [
      "garbage collection",
      "mark-and-sweep",
      "reachability",
      "heap"
    ],
    "codeExample": "let cache = { data: 'Valuable assets' };\nconsole.log('Cache allocated:', cache.data);\ncache = null; // Object is now unreachable; eligible for GC reclamation\nconsole.log('Reference severed. Memory eligible for GC.');",
    "htmlExample": "<div class=\"demo-box\">Garbage collectors reclaim memory when references reach zero or become unreachable.</div>",
    "expectedOutput": "> Cache allocated: Valuable assets\n> Reference severed. Memory eligible for GC.",
    "notes": "You cannot force garbage collection manually in client-side browser JavaScript.",
    "commonMistakes": "Assuming circular references prevent garbage collection; mark-and-sweep handles circular references correctly as long as the entire island is unreachable from roots."
  },
  {
    "id": 169,
    "number": "169",
    "title": "Memory Leaks",
    "category": "Runtime & Architecture",
    "introduction": "A memory leak occurs when memory that is no longer needed is not released because references persist.",
    "explanation": "Common causes in JS include forgotten event listeners on removed DOM nodes, Uncleared setIntervals, lingering closures holding heavy objects, and unintended global variables.",
    "syntax": "element.removeEventListener('click', handler);",
    "keywordsOrMethods": [
      "memory leaks",
      "detached DOM",
      "clearing listeners"
    ],
    "codeExample": "const leakPrevention = {\n  handler: () => console.log('Event handled'),\n  setup(el) {\n    el.addEventListener('click', this.handler);\n  },\n  cleanup(el) {\n    el.removeEventListener('click', this.handler);\n    console.log('Listener removed to prevent memory leaks.');\n  }\n};\nconst dummy = document.createElement('div');\nleakPrevention.setup(dummy);\nleakPrevention.cleanup(dummy);",
    "htmlExample": "<div class=\"demo-box\">Always clean up event listeners and timers.</div>",
    "expectedOutput": "> Listener removed to prevent memory leaks.",
    "notes": "Use browser devtools Memory tab to record heap snapshots and detect detached DOM nodes.",
    "commonMistakes": "Passing an inline arrow function to addEventListener, making it impossible to remove later with removeEventListener."
  },
  {
    "id": 170,
    "number": "170",
    "title": "Debouncing and Throttling",
    "category": "Runtime & Architecture",
    "introduction": "Debouncing and throttling control the rate at which an event handler is executed.",
    "explanation": "Debouncing delays execution until a certain amount of time has passed since the last event trigger (e.g. typing in search inputs). Throttling enforces a maximum frequency of execution (e.g. once every 200ms during scroll/resize).",
    "syntax": "function debounce(fn, delay) { ... }\nfunction throttle(fn, limit) { ... }",
    "keywordsOrMethods": [
      "debounce",
      "throttle",
      "rate limiting",
      "performance"
    ],
    "codeExample": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\nconst logSearch = debounce(q => console.log('Executing search for:', q), 50);\nlogSearch('h');\nlogSearch('he');\nlogSearch('hello'); // Only 'hello' will execute after pause",
    "htmlExample": "<div class=\"demo-box\">Debounce groups burst events into a single invocation.</div>",
    "expectedOutput": "> Executing search for: hello",
    "notes": "Use debounce for search suggestions and resize recalcs. Use throttle for scroll tracking and game loops.",
    "commonMistakes": "Invoking the debounced function directly instead of storing the debounced wrapper."
  },
  {
    "id": 171,
    "number": "171",
    "title": "Execution Context",
    "category": "Runtime & Architecture",
    "introduction": "An Execution Context is an environment in which JavaScript code is evaluated and executed.",
    "explanation": "Consists of the Global Execution Context and Function Execution Contexts. Each context has two phases: Creation Phase (creation of Variable Object, Scope Chain, and 'this' binding) and Execution Phase (code runs line-by-line).",
    "syntax": "// Global Context -> Pushes Function Context to Call Stack",
    "keywordsOrMethods": [
      "execution context",
      "call stack",
      "creation phase",
      "execution phase"
    ],
    "codeExample": "function first() {\n  console.log('Inside first() execution context');\n  second();\n  console.log('Exiting first() execution context');\n}\nfunction second() {\n  console.log('Inside second() execution context');\n}\nfirst();",
    "htmlExample": "<div class=\"demo-box\">Execution contexts manage stack frames and lexical environments.</div>",
    "expectedOutput": "> Inside first() execution context\n> Inside second() execution context\n> Exiting first() execution context",
    "notes": "Maximum call stack size errors (Stack Overflow) occur when too many contexts are pushed via unbounded recursion.",
    "commonMistakes": "Writing recursive functions without an exit condition, overflowing the call stack."
  },
  {
    "id": 172,
    "number": "172",
    "title": "Lexical Scope",
    "category": "Runtime & Architecture",
    "introduction": "Lexical scope means that variable accessibility is determined by where variables and blocks are authored in code.",
    "explanation": "Also called static scoping. Inner functions have access to variables declared in their outer parent scopes based on the physical text structure, regardless of where the function is ultimately called.",
    "syntax": "function outer() {\n  const x = 10;\n  function inner() { console.log(x); }\n}",
    "keywordsOrMethods": [
      "lexical scope",
      "static scoping",
      "nested scope"
    ],
    "codeExample": "const globalVar = 'Global';\nfunction outerFunc() {\n  const outerVar = 'Outer';\n  function innerFunc() {\n    const innerVar = 'Inner';\n    console.log(`${innerVar} -> ${outerVar} -> ${globalVar}`);\n  }\n  innerFunc();\n}\nouterFunc();",
    "htmlExample": "<div class=\"demo-box\">Lexical scope resolves identifiers based on location in source code.</div>",
    "expectedOutput": "> Inner -> Outer -> Global",
    "notes": "Lexical scope is locked in place during compilation and does not change based on runtime call sites.",
    "commonMistakes": "Thinking lexical scope depends on where a function is called rather than where it was defined."
  },
  {
    "id": 173,
    "number": "173",
    "title": "Scope Chain",
    "category": "Runtime & Architecture",
    "introduction": "The scope chain is the hierarchy of scopes traversed when resolving variable identifiers.",
    "explanation": "When resolving a variable, JavaScript starts at the local scope. If not found, it traverses upward to the parent lexical scope, continuing until reaching the global scope. If still not found, a ReferenceError is thrown.",
    "syntax": "Local Scope -> Outer Function Scope -> Global Scope",
    "keywordsOrMethods": [
      "scope chain",
      "identifier resolution",
      "ReferenceError"
    ],
    "codeExample": "const appTitle = 'CodePlay';\nfunction levelOne() {\n  const level = 1;\n  function levelTwo() {\n    console.log(`Resolved: ${appTitle} at Level ${level}`);\n  }\n  levelTwo();\n}\nlevelOne();",
    "htmlExample": "<div class=\"demo-box\">The scope chain searches upward until resolving or failing.</div>",
    "expectedOutput": "> Resolved: CodePlay at Level 1",
    "notes": "Looking up variables across deep scope chains is slightly slower than local variables; cache globals locally in performance-critical loops.",
    "commonMistakes": "Attempting to access variables from a child scope in the parent scope (scope resolution only travels upward)."
  },
  {
    "id": 174,
    "number": "174",
    "title": "Creating and Using Regular Expressions",
    "category": "Regular Expressions",
    "introduction": "Regular expressions are patterns used to match character combinations in strings.",
    "explanation": "Created using regex literals (/pattern/flags) or the RegExp constructor new RegExp('pattern', 'flags'). Common flags include 'g' (global), 'i' (case-insensitive), and 'm' (multiline).",
    "syntax": "const regex = /pattern/flags;\nconst regex2 = new RegExp('pattern', 'flags');",
    "keywordsOrMethods": [
      "RegExp",
      "/pattern/",
      "flags (g, i, m)"
    ],
    "codeExample": "const pattern = /javascript/i; // case-insensitive\nconst text = 'Master Modern JavaScript';\nconsole.log('Matches pattern?', pattern.test(text));",
    "htmlExample": "<div class=\"demo-box\">Regular expressions power advanced pattern searching.</div>",
    "expectedOutput": "> Matches pattern? true",
    "notes": "Regex literals are compiled when the script is loaded, providing better performance if the pattern remains constant.",
    "commonMistakes": "Forgetting that backslashes must be doubled when using the string constructor: new RegExp('\\\\d+') vs /\\d+/."
  },
  {
    "id": 175,
    "number": "175",
    "title": "Pattern Matching with RegExp",
    "category": "Regular Expressions",
    "introduction": "Pattern matching tests and extracts complex string structures using regex token classes.",
    "explanation": "Tokens include \\d (digits), \\w (word characters), \\s (whitespace), anchors (^ start, $ end), quantifiers (+, *, ?, {min,max}), and character classes [a-z].",
    "syntax": "const emailRegex = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;",
    "keywordsOrMethods": [
      "\\d",
      "\\w",
      "\\s",
      "^ anchor",
      "$ anchor",
      "+ quantifier"
    ],
    "codeExample": "const phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;\nconsole.log('Valid format (555-123-4567)?', phonePattern.test('555-123-4567'));\nconsole.log('Invalid format (5551234)?', phonePattern.test('5551234'));",
    "htmlExample": "<div class=\"demo-box\">RegExp tokens define strict validation contracts.</div>",
    "expectedOutput": "> Valid format (555-123-4567)? true\n> Invalid format (5551234)? false",
    "notes": "Always use anchors (^ and $) when validating that an entire string matches a format.",
    "commonMistakes": "Omitting ^ and $, which allows partial matches inside otherwise invalid strings."
  },
  {
    "id": 176,
    "number": "176",
    "title": "test() Method",
    "category": "Regular Expressions",
    "introduction": "RegExp.prototype.test() executes a search for a match between a regular expression and a string.",
    "explanation": "Returns true if a match is found, false otherwise. Highly optimized for boolean validation checks because it doesn't build match result arrays.",
    "syntax": "const isMatch = regex.test(str);",
    "keywordsOrMethods": [
      "RegExp.prototype.test()",
      "boolean match",
      "validation"
    ],
    "codeExample": "const hasDigits = /\\d/;\nconsole.log('Has digits (abc12)?', hasDigits.test('abc12'));\nconsole.log('Has digits (puretext)?', hasDigits.test('puretext'));",
    "htmlExample": "<div class=\"demo-box\">test() is the fastest method for boolean pattern matching.</div>",
    "expectedOutput": "> Has digits (abc12)? true\n> Has digits (puretext)? false",
    "notes": "Beware using global flag /g with test(): it advances lastIndex, causing consecutive tests on the same string to alternate true/false.",
    "commonMistakes": "Using the /g flag with .test() in validation loops."
  },
  {
    "id": 177,
    "number": "177",
    "title": "exec() Method",
    "category": "Regular Expressions",
    "introduction": "RegExp.prototype.exec() searches a string for a match and returns an array of information or null.",
    "explanation": "Returns a detailed match result array containing captured groups, match index, and input text. When used with the 'g' flag, repeated calls iterate through all matches via regex.lastIndex.",
    "syntax": "const result = regex.exec(str);",
    "keywordsOrMethods": [
      "exec()",
      "captured groups",
      "lastIndex"
    ],
    "codeExample": "const tagRegex = /#(\\w+)/g;\nconst tweet = 'Learning #javascript and #webdev today!';\nlet match;\nwhile ((match = tagRegex.exec(tweet)) !== null) {\n  console.log(`Found tag: ${match[0]}, Group: ${match[1]} at index ${match.index}`);\n}",
    "htmlExample": "<div class=\"demo-box\">exec captures matching groups and coordinates.</div>",
    "expectedOutput": "> Found tag: #javascript, Group: javascript at index 9\n> Found tag: #webdev, Group: webdev at index 25",
    "notes": "matchAll() is often easier than while(exec()) in modern ES2020 code.",
    "commonMistakes": "Forgetting the 'g' flag when using exec in a while loop, resulting in an infinite loop."
  },
  {
    "id": 178,
    "number": "178",
    "title": "match() Method",
    "category": "Regular Expressions",
    "introduction": "String.prototype.match() retrieves the result of matching a string against a regular expression.",
    "explanation": "Called on the string. Without the 'g' flag, returns the first match with capturing groups and index. With the 'g' flag, returns an array of all matching substrings (without capturing groups).",
    "syntax": "const matches = str.match(regex);",
    "keywordsOrMethods": [
      "match()",
      "string regex",
      "match array"
    ],
    "codeExample": "const sentence = 'The year is 2026, lesson #178.';\nconst numbers = sentence.match(/\\d+/g);\nconsole.log('Extracted numbers:', numbers);",
    "htmlExample": "<div class=\"demo-box\">match extracts matching substrings into an array.</div>",
    "expectedOutput": "> Extracted numbers: [\"2026\",\"178\"]",
    "notes": "If no match is found, match() returns null, not an empty array.",
    "commonMistakes": "Not checking if match() is null before attempting to access index [0]."
  },
  {
    "id": 179,
    "number": "179",
    "title": "replace() Method",
    "category": "Regular Expressions",
    "introduction": "String.prototype.replace() returns a new string with one or all matches of a pattern replaced.",
    "explanation": "If the pattern is a string, only the FIRST occurrence is replaced. If the pattern is a RegExp with the 'g' flag, all occurrences are replaced. Supports replacement tokens ($1, $& ) or a replacer function.",
    "syntax": "const result = str.replace(pattern, replacement);",
    "keywordsOrMethods": [
      "replace()",
      "regex replacement",
      "$1 group replacement"
    ],
    "codeExample": "const message = 'Hello World, Welcome to the World of Code!';\nconst replacedFirst = message.replace('World', 'Universe');\nconsole.log('First replaced:', replacedFirst);\nconst replacedAll = message.replace(/World/g, 'Universe');\nconsole.log('All replaced with /g:', replacedAll);",
    "htmlExample": "<div class=\"demo-box\">replace transforms strings using literal or regex patterns.</div>",
    "expectedOutput": "> First replaced: Hello Universe, Welcome to the World of Code!\n> All replaced with /g: Hello Universe, Welcome to the Universe of Code!",
    "notes": "Does not mutate the original string; returns a new string.",
    "commonMistakes": "Expecting str.replace('str', 'rep') to replace all instances (use replaceAll or /g)."
  },
  {
    "id": 180,
    "number": "180",
    "title": "replaceAll() Method",
    "category": "Regular Expressions",
    "introduction": "replaceAll() returns a new string with all matches of a pattern replaced by a replacement.",
    "explanation": "Introduced in ES2021 to replace all substring occurrences without needing a regular expression with the /g flag.",
    "syntax": "const clean = str.replaceAll('apple', 'orange');",
    "keywordsOrMethods": [
      "replaceAll()",
      "ES2021",
      "global string replacement"
    ],
    "codeExample": "const recipe = '1 cup sugar, 2 tbsp sugar, sprinkle of sugar';\nconst updated = recipe.replaceAll('sugar', 'honey');\nconsole.log('Updated recipe:', updated);",
    "htmlExample": "<div class=\"demo-box\">replaceAll replaces every matching instance easily.</div>",
    "expectedOutput": "> Updated recipe: 1 cup honey, 2 tbsp honey, sprinkle of honey",
    "notes": "If passing a RegExp to replaceAll, it MUST include the 'g' flag, otherwise a TypeError is thrown.",
    "commonMistakes": "Passing a non-global RegExp to replaceAll() (throws TypeError)."
  },
  {
    "id": 181,
    "number": "181",
    "title": "search() Method",
    "category": "Regular Expressions",
    "introduction": "search() executes a search for a match between a regular expression and this String.",
    "explanation": "Returns the index of the first match of the regular expression in the string, or -1 if no match was found. Similar to indexOf(), but accepts regex patterns.",
    "syntax": "const index = str.search(regexp);",
    "keywordsOrMethods": [
      "search()",
      "regex index search",
      "-1 if absent"
    ],
    "codeExample": "const log = 'Timestamp: 2026-10-21 Error: 404 Not Found';\nconst errorIndex = log.search(/Error: \\d+/);\nconsole.log('Error pattern located at character index:', errorIndex);",
    "htmlExample": "<div class=\"demo-box\">search returns the character index of a regex match.</div>",
    "expectedOutput": "> Error pattern located at character index: 22",
    "notes": "search() ignores the 'g' flag and always returns the index of the first match.",
    "commonMistakes": "Expecting search() to return matched text instead of a numeric index."
  },
  {
    "id": 182,
    "number": "182",
    "title": "split() with Regex",
    "category": "Regular Expressions",
    "introduction": "split() with a regular expression divides a string into substrings based on variable patterns.",
    "explanation": "Useful for splitting strings with inconsistent delimiters like multiple spaces, commas, semicolons, or tabs.",
    "syntax": "const parts = str.split(/[,;\\s]+/);",
    "keywordsOrMethods": [
      "split() with regex",
      "dynamic delimiter",
      "tokenization"
    ],
    "codeExample": "const data = 'HTML5,  CSS3; JavaScript   Python';\nconst tokens = data.split(/[,;\\s]+/);\nconsole.log('Clean tokens:', tokens);",
    "htmlExample": "<div class=\"demo-box\">split with regex handles variable whitespace and delimiters.</div>",
    "expectedOutput": "> Clean tokens: [\"HTML5\",\"CSS3\",\"JavaScript\",\"Python\"]",
    "notes": "If the regex contains capturing parentheses /([,;])/, the matched separators are also included in the output array.",
    "commonMistakes": "Accidentally capturing separators with /([,;])/ when only the tokens were desired."
  },
  {
    "id": 183,
    "number": "183",
    "title": "Math.round() Method",
    "category": "Math Object",
    "introduction": "Math.round() returns the value of a number rounded to the nearest integer.",
    "explanation": "If the fractional portion is 0.5 or greater, the argument is rounded up to the next higher integer; otherwise it is rounded down.",
    "syntax": "Math.round(x)",
    "keywordsOrMethods": [
      "Math.round()",
      "nearest integer",
      "standard rounding"
    ],
    "codeExample": "console.log(Math.round(20.4)); // 20\nconsole.log(Math.round(20.5)); // 21\nconsole.log(Math.round(-20.5)); // -20 (rounds towards +infinity for .5)",
    "htmlExample": "<div class=\"demo-box\">Math.round rounds to the closest whole integer.</div>",
    "expectedOutput": "> 20\n> 21\n> -20",
    "notes": "For rounding to decimal places, multiply by 10^N, round, and divide back.",
    "commonMistakes": "Expecting Math.round(-1.5) to equal -2; in JS, -1.5 rounds to -1 because -1 is greater than -1.5."
  },
  {
    "id": 184,
    "number": "184",
    "title": "Math.floor() Method",
    "category": "Math Object",
    "introduction": "Math.floor() returns the largest integer less than or equal to a given number.",
    "explanation": "Always rounds downwards towards negative infinity. Essential for generating random integers within a range.",
    "syntax": "Math.floor(x)",
    "keywordsOrMethods": [
      "Math.floor()",
      "round down",
      "integer rounding"
    ],
    "codeExample": "console.log(Math.floor(4.99)); // 4\nconsole.log(Math.floor(4.01)); // 4\nconsole.log(Math.floor(-4.01)); // -5",
    "htmlExample": "<div class=\"demo-box\">Math.floor rounds down towards negative infinity.</div>",
    "expectedOutput": "> 4\n> 4\n> -5",
    "notes": "Math.floor is different from Math.trunc for negative numbers (-4.01 floor is -5, trunc is -4).",
    "commonMistakes": "Using Math.floor on negative numbers expecting truncation toward zero."
  },
  {
    "id": 185,
    "number": "185",
    "title": "Math.ceil() Method",
    "category": "Math Object",
    "introduction": "Math.ceil() returns the smallest integer greater than or equal to a given number.",
    "explanation": "Always rounds upwards towards positive infinity. Commonly used to calculate pagination page counts (totalItems / itemsPerPage).",
    "syntax": "Math.ceil(x)",
    "keywordsOrMethods": [
      "Math.ceil()",
      "round up",
      "pagination pages"
    ],
    "codeExample": "const totalItems = 230;\nconst pageSize = 25;\nconst totalPages = Math.ceil(totalItems / pageSize);\nconsole.log(`230 lessons at 25 per page requires: ${totalPages} pages`);",
    "htmlExample": "<div class=\"demo-box\">Math.ceil calculates ceiling values and page counts.</div>",
    "expectedOutput": "> 230 lessons at 25 per page requires: 10 pages",
    "notes": "Math.ceil(4.0) returns 4 (exact integers are untouched).",
    "commonMistakes": "Using Math.round instead of Math.ceil for pagination, leaving orphan items without a page."
  },
  {
    "id": 186,
    "number": "186",
    "title": "Math.max() Method",
    "category": "Math Object",
    "introduction": "Math.max() returns the largest of the zero or more numbers given as input parameters.",
    "explanation": "Takes comma-separated arguments. If an array needs to be checked, spread it with Math.max(...arr). If any argument is NaN or cannot be converted to number, returns NaN.",
    "syntax": "Math.max(val1, val2, ...);",
    "keywordsOrMethods": [
      "Math.max()",
      "maximum value",
      "spread array"
    ],
    "codeExample": "console.log('Max of list:', Math.max(10, 45, 99, 2));\nconst highScores = [120, 450, 310, 890];\nconsole.log('Max from array:', Math.max(...highScores));",
    "htmlExample": "<div class=\"demo-box\">Math.max identifies the highest numeric value.</div>",
    "expectedOutput": "> Max of list: 99\n> Max from array: 890",
    "notes": "Math.max() with no arguments returns -Infinity.",
    "commonMistakes": "Passing an array directly: Math.max([1, 2, 3]) returns NaN (use spread ...)."
  },
  {
    "id": 187,
    "number": "187",
    "title": "Math.min() Method",
    "category": "Math Object",
    "introduction": "Math.min() returns the smallest of the numbers given as input parameters.",
    "explanation": "The complement of Math.max(). If no arguments are given, it returns Infinity. Spread arrays to find the minimum value in a list.",
    "syntax": "Math.min(val1, val2, ...);",
    "keywordsOrMethods": [
      "Math.min()",
      "minimum value",
      "spread array"
    ],
    "codeExample": "console.log('Min of list:', Math.min(10, 45, 99, 2));\nconst temperatures = [12, -4, 5, 0];\nconsole.log('Lowest temperature:', Math.min(...temperatures));",
    "htmlExample": "<div class=\"demo-box\">Math.min finds the lowest numeric value.</div>",
    "expectedOutput": "> Min of list: 2\n> Lowest temperature: -4",
    "notes": "Useful for clamping numbers: Math.min(Math.max(val, min), max).",
    "commonMistakes": "Passing strings containing non-numeric characters which causes Math.min to return NaN."
  },
  {
    "id": 188,
    "number": "188",
    "title": "Math.random() Method",
    "category": "Math Object",
    "introduction": "Math.random() returns a pseudo-random floating-point number in the range [0, 1).",
    "explanation": "Generates a floating-point number from 0 (inclusive) up to but not including 1 (exclusive). Scaled and shifted using Math.floor to generate random integers within any desired range.",
    "syntax": "const rand = Math.random();",
    "keywordsOrMethods": [
      "Math.random()",
      "pseudo-random",
      "random integer"
    ],
    "codeExample": "function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log('Random roll (1-6):', getRandomInt(1, 6));\nconsole.log('Random percentage:', (Math.random() * 100).toFixed(1) + '%');",
    "htmlExample": "<div class=\"demo-box\">Math.random generates pseudo-random numbers.</div>",
    "expectedOutput": "> Random roll (1-6): 4\n> Random percentage: 56.4%",
    "notes": "Math.random() is NOT cryptographically secure. Use crypto.getRandomValues() for security-critical tasks.",
    "commonMistakes": "Using Math.random() for passwords or security tokens instead of crypto.getRandomValues()."
  },
  {
    "id": 189,
    "number": "189",
    "title": "Math.abs() Method",
    "category": "Math Object",
    "introduction": "Math.abs() returns the absolute value of a number, stripping any negative sign.",
    "explanation": "The distance of a number from zero on the number line. If the input is positive or zero, returns the number; if negative, returns its negation.",
    "syntax": "Math.abs(x)",
    "keywordsOrMethods": [
      "Math.abs()",
      "absolute value",
      "distance"
    ],
    "codeExample": "console.log(Math.abs(-42)); // 42\nconsole.log(Math.abs(42));  // 42\nconst diff = Math.abs(100 - 150);\nconsole.log('Absolute difference:', diff);",
    "htmlExample": "<div class=\"demo-box\">Math.abs guarantees non-negative numeric magnitude.</div>",
    "expectedOutput": "> 42\n> 42\n> Absolute difference: 50",
    "notes": "Math.abs('-5') coerces the string to -5 and returns 5.",
    "commonMistakes": "Passing an empty array or null (which coerce to 0, returning 0)."
  },
  {
    "id": 190,
    "number": "190",
    "title": "Math.pow() Method",
    "category": "Math Object",
    "introduction": "Math.pow() returns the base to the exponent power (base^exponent).",
    "explanation": "Equivalent to the modern exponentiation operator (**). Supports fractional exponents for calculating roots.",
    "syntax": "Math.pow(base, exponent)",
    "keywordsOrMethods": [
      "Math.pow()",
      "exponentiation",
      "** operator"
    ],
    "codeExample": "console.log('2^8 =', Math.pow(2, 8)); // 256\nconsole.log('10^3 =', Math.pow(10, 3)); // 1000\nconsole.log('Equivalent to **:', 2 ** 8);",
    "htmlExample": "<div class=\"demo-box\">Math.pow computes powers and polynomial terms.</div>",
    "expectedOutput": "> 2^8 = 256\n> 10^3 = 1000\n> Equivalent to **: 256",
    "notes": "Modern code generally prefers the ** operator for readability.",
    "commonMistakes": "Using the ^ caret symbol for exponentiation; in JavaScript, ^ is the bitwise XOR operator!"
  },
  {
    "id": 191,
    "number": "191",
    "title": "Math.sqrt() Method",
    "category": "Math Object",
    "introduction": "Math.sqrt() returns the square root of a number.",
    "explanation": "If the number is negative, Math.sqrt() returns NaN because the square root of a negative number is imaginary in the real number system.",
    "syntax": "Math.sqrt(x)",
    "keywordsOrMethods": [
      "Math.sqrt()",
      "square root",
      "radical"
    ],
    "codeExample": "console.log('Square root of 64:', Math.sqrt(64));\nconsole.log('Square root of 144:', Math.sqrt(144));\nconsole.log('Hypotenuse (3, 4):', Math.sqrt(3**2 + 4**2));",
    "htmlExample": "<div class=\"demo-box\">Math.sqrt calculates square roots.</div>",
    "expectedOutput": "> Square root of 64: 8\n> Square root of 144: 12\n> Hypotenuse (3, 4): 5",
    "notes": "Math.hypot(a, b) calculates the Euclidean distance without overflow.",
    "commonMistakes": "Passing negative numbers expecting complex number support (returns NaN)."
  },
  {
    "id": 192,
    "number": "192",
    "title": "Math.trunc() Method",
    "category": "Math Object",
    "introduction": "Math.trunc() returns the integer part of a number by removing any fractional digits.",
    "explanation": "Introduced in ES6. Discards all fractional digits, effectively rounding towards zero regardless of sign. Different from Math.floor for negative numbers.",
    "syntax": "Math.trunc(x)",
    "keywordsOrMethods": [
      "Math.trunc()",
      "truncate",
      "integer part"
    ],
    "codeExample": "console.log(Math.trunc(13.37)); // 13\nconsole.log(Math.trunc(13.99)); // 13\nconsole.log(Math.trunc(-13.99)); // -13 (floor would be -14!)",
    "htmlExample": "<div class=\"demo-box\">Math.trunc strips decimals towards zero.</div>",
    "expectedOutput": "> 13\n> 13\n> -13",
    "notes": "Cleaner and less prone to overflow than bitwise truncation (x | 0) for large numbers.",
    "commonMistakes": "Using Math.floor when truncation toward zero is intended for negative numbers."
  },
  {
    "id": 193,
    "number": "193",
    "title": "Creating Date Objects",
    "category": "Date & Time API",
    "introduction": "Date objects represent a single moment in time in a platform-independent format.",
    "explanation": "Constructed via 'new Date()'. Can be initialized with no arguments (current time), a timestamp in milliseconds, an ISO date string, or discrete date components (year, monthIndex, day, hours, ...).",
    "syntax": "new Date()\nnew Date('2026-10-21')\nnew Date(year, monthIndex, day)",
    "keywordsOrMethods": [
      "Date",
      "new Date()",
      "timestamp",
      "ISO 8601"
    ],
    "codeExample": "const now = new Date();\nconsole.log('Current year:', now.getFullYear());\nconst fixedDate = new Date('2026-01-01T00:00:00Z');\nconsole.log('ISO String:', fixedDate.toISOString());",
    "htmlExample": "<div class=\"demo-box\">Date objects manage timestamps and calendar calculations.</div>",
    "expectedOutput": "> Current year: 2026\n> ISO String: 2026-01-01T00:00:00.000Z",
    "notes": "Month indices in JavaScript Date constructors are ZERO-INDEXED (0 = January, 11 = December).",
    "commonMistakes": "Passing month 1 for January in multi-argument constructors: new Date(2026, 1, 1) is February 1st!"
  },
  {
    "id": 194,
    "number": "194",
    "title": "getFullYear() Method",
    "category": "Date & Time API",
    "introduction": "getFullYear() returns the year of the specified date according to local time.",
    "explanation": "Returns a 4-digit number (e.g. 2026) for the year. Replaced the deprecated getYear() method which suffered from Y2K bugs.",
    "syntax": "dateObj.getFullYear()",
    "keywordsOrMethods": [
      "getFullYear()",
      "4-digit year",
      "local year"
    ],
    "codeExample": "const date = new Date('2026-10-21');\nconsole.log('Year:', date.getFullYear());",
    "htmlExample": "<div class=\"demo-box\">getFullYear returns the full four-digit year.</div>",
    "expectedOutput": "> Year: 2026",
    "notes": "Use getUTCFullYear() if working with standardized UTC time.",
    "commonMistakes": "Using the deprecated getYear() method, which returns the year minus 1900."
  },
  {
    "id": 195,
    "number": "195",
    "title": "getMonth() Method",
    "category": "Date & Time API",
    "introduction": "getMonth() returns the month in the specified date according to local time as a zero-based value.",
    "explanation": "Returns an integer from 0 (January) to 11 (December). You must add 1 to get standard human 1-12 month numbers.",
    "syntax": "const zeroIndexedMonth = date.getMonth();",
    "keywordsOrMethods": [
      "getMonth()",
      "zero-indexed month",
      "0 to 11"
    ],
    "codeExample": "const date = new Date('2026-05-15');\nconst monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\nconsole.log('Zero-indexed month:', date.getMonth()); // 4\nconsole.log('Human month name:', monthNames[date.getMonth()]); // May",
    "htmlExample": "<div class=\"demo-box\">getMonth is zero-based: 0 is January, 11 is December.</div>",
    "expectedOutput": "> Zero-indexed month: 4\n> Human month name: May",
    "notes": "Always format months with monthNames[date.getMonth()] or Intl.DateTimeFormat.",
    "commonMistakes": "Displaying date.getMonth() directly to users without adding 1 or formatting."
  },
  {
    "id": 196,
    "number": "196",
    "title": "getDate() Method",
    "category": "Date & Time API",
    "introduction": "getDate() returns the day of the month (1-31) for the specified date according to local time.",
    "explanation": "Returns the day of the calendar month as an integer from 1 to 31. Not to be confused with getDay() which returns day of the week.",
    "syntax": "dateObj.getDate()",
    "keywordsOrMethods": [
      "getDate()",
      "day of month",
      "1 to 31"
    ],
    "codeExample": "const date = new Date('2026-10-21');\nconsole.log('Day of month:', date.getDate());",
    "htmlExample": "<div class=\"demo-box\">getDate returns the day of the month (1-31).</div>",
    "expectedOutput": "> Day of month: 21",
    "notes": "new Date(2026, month, 0).getDate() is a trick to find the total days in any month.",
    "commonMistakes": "Confusing getDate() (day of month, 1-31) with getDay() (day of week, 0-6)."
  },
  {
    "id": 197,
    "number": "197",
    "title": "getDay() Method",
    "category": "Date & Time API",
    "introduction": "getDay() returns the day of the week for the specified date according to local time.",
    "explanation": "Returns an integer from 0 (Sunday) to 6 (Saturday).",
    "syntax": "dateObj.getDay()",
    "keywordsOrMethods": [
      "getDay()",
      "day of week",
      "0 = Sunday"
    ],
    "codeExample": "const date = new Date('2026-10-21'); // Wednesday\nconst dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\nconsole.log('Numeric day of week:', date.getDay());\nconsole.log('Day name:', dayNames[date.getDay()]);",
    "htmlExample": "<div class=\"demo-box\">getDay returns the day of the week where 0 is Sunday.</div>",
    "expectedOutput": "> Numeric day of week: 3\n> Day name: Wednesday",
    "notes": "Sunday is always 0 in standard JavaScript Date specifications.",
    "commonMistakes": "Assuming 0 is Monday (as in ISO weekday standards)."
  },
  {
    "id": 198,
    "number": "198",
    "title": "getHours() Method",
    "category": "Date & Time API",
    "introduction": "getHours() returns the hour for the specified date, according to local time.",
    "explanation": "Returns an integer from 0 to 23 (24-hour military time representation).",
    "syntax": "dateObj.getHours()",
    "keywordsOrMethods": [
      "getHours()",
      "24-hour format",
      "0 to 23"
    ],
    "codeExample": "const date = new Date('2026-10-21T14:30:00');\nconsole.log('Hour (24h):', date.getHours());\nconst ampm = date.getHours() >= 12 ? 'PM' : 'AM';\nconst hour12 = date.getHours() % 12 || 12;\nconsole.log(`Formatted 12h: ${hour12} ${ampm}`);",
    "htmlExample": "<div class=\"demo-box\">getHours returns the hour component in 24-hour format.</div>",
    "expectedOutput": "> Hour (24h): 14\n> Formatted 12h: 2 PM",
    "notes": "Use getUTCHours() when coordinating across multiple timezones.",
    "commonMistakes": "Assuming 12:00 midnight is 24; in JavaScript, midnight is hour 0."
  },
  {
    "id": 199,
    "number": "199",
    "title": "getMinutes() Method",
    "category": "Date & Time API",
    "introduction": "getMinutes() returns the minutes in the specified date according to local time.",
    "explanation": "Returns an integer from 0 to 59 representing the minute component of a date.",
    "syntax": "dateObj.getMinutes()",
    "keywordsOrMethods": [
      "getMinutes()",
      "0 to 59",
      "clock minutes"
    ],
    "codeExample": "const date = new Date('2026-10-21T14:05:00');\nconst mins = String(date.getMinutes()).padStart(2, '0');\nconsole.log('Formatted minutes:', mins);",
    "htmlExample": "<div class=\"demo-box\">getMinutes returns the minute component (0-59).</div>",
    "expectedOutput": "> Formatted minutes: 05",
    "notes": "Use padStart(2, '0') to format single-digit minutes (e.g. '05' instead of '5').",
    "commonMistakes": "Displaying minutes directly without zero-padding (e.g. '14:5' instead of '14:05')."
  },
  {
    "id": 200,
    "number": "200",
    "title": "getSeconds() Method",
    "category": "Date & Time API",
    "introduction": "getSeconds() returns the seconds in the specified date according to local time.",
    "explanation": "Returns an integer from 0 to 59 representing the seconds value of a date instance.",
    "syntax": "dateObj.getSeconds()",
    "keywordsOrMethods": [
      "getSeconds()",
      "0 to 59",
      "clock seconds"
    ],
    "codeExample": "const date = new Date('2026-10-21T14:30:45');\nconsole.log('Seconds:', date.getSeconds());",
    "htmlExample": "<div class=\"demo-box\">getSeconds returns the second component (0-59).</div>",
    "expectedOutput": "> Seconds: 45",
    "notes": "Combined with setTimeout/setInterval to build live digital clocks and stopwatches.",
    "commonMistakes": "Expecting getSeconds to include milliseconds (use getMilliseconds() for fractional seconds)."
  },
  {
    "id": 201,
    "number": "201",
    "title": "getMilliseconds() Method",
    "category": "Date & Time API",
    "introduction": "getMilliseconds() returns the milliseconds (0-999) of the specified date according to local time.",
    "explanation": "Returns the fractional second component. Useful for high-precision time calculations, benchmarking execution durations, and unique key generation.",
    "syntax": "dateObj.getMilliseconds()",
    "keywordsOrMethods": [
      "getMilliseconds()",
      "0 to 999",
      "millisecond precision"
    ],
    "codeExample": "const date = new Date('2026-10-21T12:00:00.450Z');\nconsole.log('Milliseconds component:', date.getMilliseconds());\nconsole.log('Current timestamp ms:', Date.now());",
    "htmlExample": "<div class=\"demo-box\">getMilliseconds provides sub-second time resolution.</div>",
    "expectedOutput": "> Milliseconds component: 450\n> Current timestamp ms: 1792584113000",
    "notes": "For performance micro-benchmarking, performance.now() is even more accurate than Date.",
    "commonMistakes": "Confusing getMilliseconds() (0-999 within the second) with getTime() (total milliseconds since 1970 Unix epoch)."
  },
  {
    "id": 202,
    "number": "202",
    "title": "setFullYear() Method",
    "category": "Date & Time API",
    "introduction": "setFullYear() sets the full year for a specified date according to local time.",
    "explanation": "Mutates the Date object to the specified 4-digit year. Optionally also accepts month and day values to set multiple components at once.",
    "syntax": "dateObj.setFullYear(yearValue, monthValue, dateValue);",
    "keywordsOrMethods": [
      "setFullYear()",
      "mutate year",
      "calendar math"
    ],
    "codeExample": "const date = new Date('2026-10-21');\ndate.setFullYear(2030);\nconsole.log('Updated year:', date.getFullYear());\nconsole.log('Updated ISO string:', date.toISOString().slice(0, 10));",
    "htmlExample": "<div class=\"demo-box\">setFullYear adjusts the year component of Date instances.</div>",
    "expectedOutput": "> Updated year: 2030\n> Updated ISO string: 2030-10-21",
    "notes": "Always pass 4 digits (e.g. 2026, not 26) to prevent unexpected legacy conversions.",
    "commonMistakes": "Passing two-digit years (setFullYear(98) sets the year 98 AD, not 1998)."
  },
  {
    "id": 203,
    "number": "203",
    "title": "setMonth() Method",
    "category": "Date & Time API",
    "introduction": "setMonth() sets the month for a specified date according to local time.",
    "explanation": "Accepts a zero-indexed month (0 for January, 11 for December). If the new month has fewer days than the current date, JavaScript automatically rolls over into the next month.",
    "syntax": "dateObj.setMonth(monthValue, dayValue);",
    "keywordsOrMethods": [
      "setMonth()",
      "zero-indexed month",
      "month rollover"
    ],
    "codeExample": "const date = new Date('2026-01-15');\ndate.setMonth(11); // December (zero-indexed)\nconsole.log('Updated month (human):', date.getMonth() + 1);",
    "htmlExample": "<div class=\"demo-box\">setMonth mutates the month (0 to 11).</div>",
    "expectedOutput": "> Updated month (human): 12",
    "notes": "Setting month on the 31st can cause unexpected jumps (e.g. setting February on Jan 31 rolls to March 3).",
    "commonMistakes": "Setting date.setDate(1) before changing months when avoiding rollover bugs on 31-day months."
  },
  {
    "id": 204,
    "number": "204",
    "title": "setDate() Method",
    "category": "Date & Time API",
    "introduction": "setDate() changes the day of the month of a given Date instance according to local time.",
    "explanation": "Mutates the date. Passing a value outside the month's bounds (e.g. 0 or 35) automatically adjusts the month forward or backward.",
    "syntax": "dateObj.setDate(dayValue);",
    "keywordsOrMethods": [
      "setDate()",
      "day of month",
      "calendar rollover"
    ],
    "codeExample": "const date = new Date('2026-10-21');\ndate.setDate(25);\nconsole.log('Updated day of month:', date.getDate());\n// Adding 14 days:\ndate.setDate(date.getDate() + 14);\nconsole.log('After adding 14 days:', date.toISOString().slice(0, 10));",
    "htmlExample": "<div class=\"demo-box\">setDate adjusts calendar days and cleanly handles month boundaries.</div>",
    "expectedOutput": "> Updated day of month: 25\n> After adding 14 days: 2026-11-08",
    "notes": "Passing 0 sets the date to the last day of the PREVIOUS month.",
    "commonMistakes": "Confusing setDate() with a non-existent setDay() (day of the week cannot be set directly)."
  },
  {
    "id": 205,
    "number": "205",
    "title": "setHours() Method",
    "category": "Date & Time API",
    "introduction": "setHours() sets the hours for a specified date according to local time.",
    "explanation": "Accepts an integer from 0 to 23. Optionally accepts min, sec, and ms to set the complete time in a single method call.",
    "syntax": "dateObj.setHours(hoursValue, minVal, secVal, msVal);",
    "keywordsOrMethods": [
      "setHours()",
      "24-hour update",
      "reset time"
    ],
    "codeExample": "const date = new Date('2026-10-21T08:00:00');\ndate.setHours(17, 30, 0); // 5:30 PM\nconsole.log('Updated hours:', date.getHours());\nconsole.log('Updated minutes:', date.getMinutes());",
    "htmlExample": "<div class=\"demo-box\">setHours configures the hour component of Date objects.</div>",
    "expectedOutput": "> Updated hours: 17\n> Updated minutes: 30",
    "notes": "date.setHours(0, 0, 0, 0) is the standard idiom to reset a Date to midnight for pure day comparisons.",
    "commonMistakes": "Passing 24 (which rolls over into the next day at 00:00)."
  },
  {
    "id": 206,
    "number": "206",
    "title": "setMinutes() Method",
    "category": "Date & Time API",
    "introduction": "setMinutes() sets the minutes for a specified date according to local time.",
    "explanation": "Accepts an integer from 0 to 59. Values greater than 59 will increment the hour accordingly.",
    "syntax": "dateObj.setMinutes(minutesValue, secondsValue, msValue);",
    "keywordsOrMethods": [
      "setMinutes()",
      "minute update",
      "0 to 59"
    ],
    "codeExample": "const date = new Date('2026-10-21T10:00:00');\ndate.setMinutes(45);\nconsole.log('Updated minutes:', date.getMinutes());",
    "htmlExample": "<div class=\"demo-box\">setMinutes configures clock minutes.</div>",
    "expectedOutput": "> Updated minutes: 45",
    "notes": "Values outside 0-59 automatically adjust the hour.",
    "commonMistakes": "Not accounting for hour increment if passing values >= 60."
  },
  {
    "id": 207,
    "number": "207",
    "title": "setSeconds() Method",
    "category": "Date & Time API",
    "introduction": "setSeconds() sets the seconds for a specified date according to local time.",
    "explanation": "Accepts an integer from 0 to 59. Values greater than 59 will increment the minute accordingly.",
    "syntax": "dateObj.setSeconds(secondsValue, msValue);",
    "keywordsOrMethods": [
      "setSeconds()",
      "seconds update"
    ],
    "codeExample": "const date = new Date('2026-10-21T10:00:00');\ndate.setSeconds(59);\nconsole.log('Updated seconds:', date.getSeconds());",
    "htmlExample": "<div class=\"demo-box\">setSeconds sets the second value of a Date.</div>",
    "expectedOutput": "> Updated seconds: 59",
    "notes": "Optionally pass a second argument for milliseconds: date.setSeconds(30, 500).",
    "commonMistakes": "Forgetting that setSeconds mutates the existing Date object in place."
  },
  {
    "id": 208,
    "number": "208",
    "title": "setMilliseconds() Method",
    "category": "Date & Time API",
    "introduction": "setMilliseconds() sets the milliseconds for a specified date according to local time.",
    "explanation": "Accepts an integer from 0 to 999. If you specify a number greater than 999, the seconds value is incremented accordingly.",
    "syntax": "dateObj.setMilliseconds(msValue);",
    "keywordsOrMethods": [
      "setMilliseconds()",
      "sub-second setting",
      "0 to 999"
    ],
    "codeExample": "const date = new Date('2026-10-21T10:00:00.000Z');\ndate.setMilliseconds(750);\nconsole.log('Updated milliseconds:', date.getMilliseconds());",
    "htmlExample": "<div class=\"demo-box\">setMilliseconds adjusts the millisecond fractional second.</div>",
    "expectedOutput": "> Updated milliseconds: 750",
    "notes": "Useful when normalizing dates down to exact zero ms.",
    "commonMistakes": "Assuming setMilliseconds changes the date's timezone offset (it does not)."
  },
  {
    "id": 209,
    "number": "209",
    "title": "charAt() Method",
    "category": "String Manipulation",
    "introduction": "charAt() returns the character at a specified index in a string.",
    "explanation": "Accepts an index from 0 to str.length - 1. If index is out of range, charAt() returns an empty string '' (unlike bracket notation str[index] which returns undefined).",
    "syntax": "str.charAt(index)",
    "keywordsOrMethods": [
      "charAt()",
      "character access",
      "empty string fallback"
    ],
    "codeExample": "const word = 'JavaScript';\nconsole.log('Character at 0:', word.charAt(0));\nconsole.log('Character at 4:', word.charAt(4));\nconsole.log('Out of bounds charAt(99):', JSON.stringify(word.charAt(99)));",
    "htmlExample": "<div class=\"demo-box\">charAt extracts single characters from strings safely.</div>",
    "expectedOutput": "> Character at 0: J\n> Character at 4: S\n> Out of bounds charAt(99): \"\"",
    "notes": "charAt does not handle supplementary Unicode code points (emojis); use at() or codePointAt() for emojis.",
    "commonMistakes": "Expecting charAt(-1) to count from the end (use str.at(-1) for negative index support)."
  },
  {
    "id": 210,
    "number": "210",
    "title": "charCodeAt() Method",
    "category": "String Manipulation",
    "introduction": "charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.",
    "explanation": "Returns the numeric Unicode character code. Returns NaN if the index is out of range. Essential for character validation and encryption algorithms.",
    "syntax": "str.charCodeAt(index)",
    "keywordsOrMethods": [
      "charCodeAt()",
      "UTF-16",
      "ASCII / Unicode code"
    ],
    "codeExample": "const letterA = 'A';\nconst letterZ = 'Z';\nconsole.log('Code for A:', letterA.charCodeAt(0)); // 65\nconsole.log('Code for Z:', letterZ.charCodeAt(0)); // 90\nconsole.log('Character from code:', String.fromCharCode(65));",
    "htmlExample": "<div class=\"demo-box\">charCodeAt retrieves the numeric UTF-16 character code.</div>",
    "expectedOutput": "> Code for A: 65\n> Code for Z: 90\n> Character from code: A",
    "notes": "For full 32-bit Unicode code points beyond 65535, use codePointAt() instead.",
    "commonMistakes": "Expecting charCodeAt to handle surrogate pairs in 4-byte emojis correctly without split."
  },
  {
    "id": 211,
    "number": "211",
    "title": "toUpperCase() Method",
    "category": "String Manipulation",
    "introduction": "toUpperCase() returns the calling string value converted to uppercase.",
    "explanation": "Does not modify the original string (strings are immutable in JavaScript); returns a brand new uppercase string.",
    "syntax": "const upper = str.toUpperCase();",
    "keywordsOrMethods": [
      "toUpperCase()",
      "uppercase",
      "non-mutating"
    ],
    "codeExample": "const brand = 'codeplay platform';\nconst upperBrand = brand.toUpperCase();\nconsole.log('Uppercase string:', upperBrand);\nconsole.log('Original remains unchanged:', brand);",
    "htmlExample": "<div class=\"demo-box\">toUpperCase capitalizes all alphabet characters.</div>",
    "expectedOutput": "> Uppercase string: CODEPLAY PLATFORM\n> Original remains unchanged: codeplay platform",
    "notes": "Use toLocaleUpperCase() when dealing with locale-sensitive languages like Turkish (dotless i).",
    "commonMistakes": "Assuming str.toUpperCase() modifies the string in place."
  },
  {
    "id": 212,
    "number": "212",
    "title": "toLowerCase() Method",
    "category": "String Manipulation",
    "introduction": "toLowerCase() returns the calling string value converted to lowercase.",
    "explanation": "Standard method for normalizing user inputs (such as search queries and emails) prior to comparison.",
    "syntax": "const lower = str.toLowerCase();",
    "keywordsOrMethods": [
      "toLowerCase()",
      "case normalization",
      "immutable"
    ],
    "codeExample": "const email = 'USER.NAME@Domain.COM';\nconst cleanEmail = email.toLowerCase();\nconsole.log('Normalized email:', cleanEmail);",
    "htmlExample": "<div class=\"demo-box\">toLowerCase normalizes case for reliable comparisons.</div>",
    "expectedOutput": "> Normalized email: user.name@domain.com",
    "notes": "For case-insensitive string comparisons, normalize both sides with .toLowerCase().",
    "commonMistakes": "Comparing strings of different cases directly without normalizing first."
  },
  {
    "id": 213,
    "number": "213",
    "title": "trim() Method",
    "category": "String Manipulation",
    "introduction": "trim() removes whitespace from both ends of this string and returns a new string.",
    "explanation": "Strips spaces, tabs, no-break spaces, and all line terminators (LF, CR) from both the beginning and end of a string. Does not affect whitespace between words.",
    "syntax": "const trimmed = str.trim();",
    "keywordsOrMethods": [
      "trim()",
      "strip whitespace",
      "input sanitization"
    ],
    "codeExample": "const rawInput = '   Hello CodePlay!   \\n';\nconst cleaned = rawInput.trim();\nconsole.log('Raw length:', rawInput.length);\nconsole.log('Cleaned length:', cleaned.length);\nconsole.log('Result:', JSON.stringify(cleaned));",
    "htmlExample": "<div class=\"demo-box\">trim strips unwanted leading and trailing whitespace.</div>",
    "expectedOutput": "> Raw length: 22\n> Cleaned length: 15\n> Result: \"Hello CodePlay!\"",
    "notes": "Always trim user form inputs before validation.",
    "commonMistakes": "Expecting trim() to remove multiple spaces inside the middle of a string."
  },
  {
    "id": 214,
    "number": "214",
    "title": "trimStart() Method",
    "category": "String Manipulation",
    "introduction": "trimStart() removes whitespace from the beginning (start) of a string.",
    "explanation": "Also aliased as trimLeft(). Leaves any trailing whitespace at the end of the string untouched.",
    "syntax": "const cleanStart = str.trimStart();",
    "keywordsOrMethods": [
      "trimStart()",
      "trimLeft()",
      "strip leading whitespace"
    ],
    "codeExample": "const text = '    Indented line with trailing space   ';\nconsole.log('trimStart:', JSON.stringify(text.trimStart()));",
    "htmlExample": "<div class=\"demo-box\">trimStart removes only leading whitespace.</div>",
    "expectedOutput": "> trimStart: \"Indented line with trailing space   \"",
    "notes": "Standardized in ES2019.",
    "commonMistakes": "Using non-standard custom regex when native trimStart is available."
  },
  {
    "id": 215,
    "number": "215",
    "title": "trimEnd() Method",
    "category": "String Manipulation",
    "introduction": "trimEnd() removes whitespace from the end of a string.",
    "explanation": "Also aliased as trimRight(). Preserves leading whitespace while stripping trailing spaces and line breaks.",
    "syntax": "const cleanEnd = str.trimEnd();",
    "keywordsOrMethods": [
      "trimEnd()",
      "trimRight()",
      "strip trailing whitespace"
    ],
    "codeExample": "const text = '    Indented code line    ';\nconsole.log('trimEnd:', JSON.stringify(text.trimEnd()));",
    "htmlExample": "<div class=\"demo-box\">trimEnd removes only trailing whitespace.</div>",
    "expectedOutput": "> trimEnd: \"    Indented code line\"",
    "notes": "Standardized in ES2019 alongside trimStart().",
    "commonMistakes": "Calling trimEnd on null or undefined values."
  },
  {
    "id": 216,
    "number": "216",
    "title": "substring() Method",
    "category": "String Manipulation",
    "introduction": "substring() returns the part of the string from the start index up to and excluding the end index.",
    "explanation": "If start is greater than end, substring() swaps the two arguments automatically. Any negative argument is treated as 0.",
    "syntax": "str.substring(indexStart, indexEnd);",
    "keywordsOrMethods": [
      "substring()",
      "slice vs substring",
      "index swap"
    ],
    "codeExample": "const text = 'PLAY-CODE';\nconsole.log(text.substring(0, 4)); // PLAY\nconsole.log(text.substring(5));    // CODE\nconsole.log(text.substring(4, 0)); // Swapped: PLAY",
    "htmlExample": "<div class=\"demo-box\">substring extracts portions of text between indices.</div>",
    "expectedOutput": "> PLAY\n> CODE\n> PLAY",
    "notes": "Modern code often uses slice() for consistency with array slicing and negative index support.",
    "commonMistakes": "Expecting substring to accept negative indices from the end (use slice() instead)."
  },
  {
    "id": 217,
    "number": "217",
    "title": "substr() Method",
    "category": "String Manipulation",
    "introduction": "substr() returns a portion of the string, starting at the specified index and extending for a given number of characters.",
    "explanation": "substr(start, length) uses length rather than an end index. Note: substr() is considered legacy and deprecated in modern standards; use substring() or slice().",
    "syntax": "str.substr(start, length); // Legacy",
    "keywordsOrMethods": [
      "substr()",
      "legacy method",
      "length parameter"
    ],
    "codeExample": "const phrase = 'Mozilla Developer Network';\nconsole.log('First 7 characters:', phrase.substr(0, 7));\nconsole.log('Modern slice equivalent:', phrase.slice(0, 7));",
    "htmlExample": "<div class=\"demo-box\">substr is a legacy method replaced by slice and substring.</div>",
    "expectedOutput": "> First 7 characters: Mozilla\n> Modern slice equivalent: Mozilla",
    "notes": "Always prefer String.prototype.slice(start, end) in modern codebases.",
    "commonMistakes": "Confusing substr(start, length) with substring(start, endIndex)."
  },
  {
    "id": 218,
    "number": "218",
    "title": "repeat() Method",
    "category": "String Manipulation",
    "introduction": "repeat() constructs and returns a new string containing the specified number of copies of the string.",
    "explanation": "Introduced in ES6. Takes an integer count between 0 and positive infinity. If count is negative or infinite, a RangeError is thrown.",
    "syntax": "str.repeat(count)",
    "keywordsOrMethods": [
      "repeat()",
      "string repetition",
      "ES6"
    ],
    "codeExample": "const star = '\u2605';\nconsole.log('5-star rating:', star.repeat(5));\nconst divider = '-'.repeat(20);\nconsole.log(divider);\nconsole.log('CodePlay Rocks');\nconsole.log(divider);",
    "htmlExample": "<div class=\"demo-box\">repeat multiplies strings cleanly without loops.</div>",
    "expectedOutput": "> 5-star rating: \u2605\u2605\u2605\u2605\u2605\n> --------------------\n> CodePlay Rocks\n> --------------------",
    "notes": "count is converted to integer; '3.8' repeats 3 times.",
    "commonMistakes": "Passing a negative count: 'a'.repeat(-1) throws a RangeError."
  },
  {
    "id": 219,
    "number": "219",
    "title": "padStart() Method",
    "category": "String Manipulation",
    "introduction": "padStart() pads the current string from the start with a given string until the target length is reached.",
    "explanation": "Introduced in ES2017. Commonly used for formatting numeric IDs, clocks (e.g. padding minutes to 2 digits), and tabular CLI alignment.",
    "syntax": "str.padStart(targetLength, padString)",
    "keywordsOrMethods": [
      "padStart()",
      "ES2017",
      "zero-padding",
      "formatting"
    ],
    "codeExample": "const lessonNum = '7';\nconsole.log('Lesson ID:', lessonNum.padStart(3, '0')); // '007'\nconst hours = '9';\nconst mins = '5';\nconsole.log(`Time: ${hours.padStart(2, '0')}:${mins.padStart(2, '0')}`);",
    "htmlExample": "<div class=\"demo-box\">padStart standardizes string lengths with leading padding.</div>",
    "expectedOutput": "> Lesson ID: 007\n> Time: 09:05",
    "notes": "If targetLength is less than current string length, the original string is returned unchanged.",
    "commonMistakes": "Calling padStart directly on a number (num.padStart(2, '0') fails; convert with String(num) first)."
  },
  {
    "id": 220,
    "number": "220",
    "title": "padEnd() Method",
    "category": "String Manipulation",
    "introduction": "padEnd() pads the current string from the end with a given string until the target length is reached.",
    "explanation": "Introduced in ES2017. Appends padString to the right side of the string. Ideal for column alignment in text tables or reports.",
    "syntax": "str.padEnd(targetLength, padString)",
    "keywordsOrMethods": [
      "padEnd()",
      "ES2017",
      "trailing padding",
      "alignment"
    ],
    "codeExample": "const items = [\n  ['HTML', '166 lessons'],\n  ['CSS', '210 lessons'],\n  ['JavaScript', '230 lessons']\n];\nconsole.log('Track Report:');\nitems.forEach(([track, count]) => {\n  console.log(`${track.padEnd(12, '.')} ${count}`);\n});",
    "htmlExample": "<div class=\"demo-box\">padEnd formats text with trailing padding for consistent columns.</div>",
    "expectedOutput": "> Track Report:\n> HTML........ 166 lessons\n> CSS......... 210 lessons\n> JavaScript.. 230 lessons",
    "notes": "The default padString is a single space ' '.",
    "commonMistakes": "Forgetting that targetLength is the TOTAL desired length, not the number of padding characters to add."
  },
  {
    "id": 221,
    "number": "221",
    "title": "toFixed() Method",
    "category": "String Manipulation",
    "introduction": "toFixed() formats a number using fixed-point notation, returning a string.",
    "explanation": "Accepts digits (0 to 100) indicating the number of digits to appear after the decimal point. Rounds the number and pads with zeros if necessary.",
    "syntax": "num.toFixed(digits)",
    "keywordsOrMethods": [
      "toFixed()",
      "fixed-point",
      "currency formatting"
    ],
    "codeExample": "const price = 19.9;\nconsole.log('Formatted currency:', '$' + price.toFixed(2));\nconst pi = 3.14159265;\nconsole.log('Pi to 3 decimals:', pi.toFixed(3));",
    "htmlExample": "<div class=\"demo-box\">toFixed formats decimals for clean financial displays.</div>",
    "expectedOutput": "> Formatted currency: $19.90\n> Pi to 3 decimals: 3.142",
    "notes": "toFixed() returns a STRING, not a number. If you need a number back, wrap with Number() or parseFloat().",
    "commonMistakes": "Trying to do math directly on the result without realizing toFixed returns a string: (10.5).toFixed(2) + 1 is '10.501'!"
  },
  {
    "id": 222,
    "number": "222",
    "title": "toPrecision() Method",
    "category": "String Manipulation",
    "introduction": "toPrecision() returns a string representing the Number object to the specified precision (significant digits).",
    "explanation": "Unlike toFixed() which counts digits after the decimal point, toPrecision() specifies total significant figures across the whole number. Uses exponential notation if needed.",
    "syntax": "num.toPrecision(precision)",
    "keywordsOrMethods": [
      "toPrecision()",
      "significant figures",
      "scientific formatting"
    ],
    "codeExample": "const num = 123.456;\nconsole.log('4 significant digits:', num.toPrecision(4));\nconsole.log('2 significant digits (scientific):', num.toPrecision(2));",
    "htmlExample": "<div class=\"demo-box\">toPrecision formats numbers to a specified total number of significant figures.</div>",
    "expectedOutput": "> 4 significant digits: 123.5\n> 2 significant digits (scientific): 1.2e+2",
    "notes": "Precision must be an integer between 1 and 100.",
    "commonMistakes": "Confusing significant figures (total digits) with decimal places (digits after the dot)."
  },
  {
    "id": 223,
    "number": "223",
    "title": "toExponential() Method",
    "category": "String Manipulation",
    "introduction": "toExponential() returns a string representing the Number object in exponential (scientific) notation.",
    "explanation": "Formats a number in scientific e-notation (e.g. 1.25e+6). Accepts an optional fractionDigits parameter specifying the number of digits after the decimal point.",
    "syntax": "num.toExponential(fractionDigits)",
    "keywordsOrMethods": [
      "toExponential()",
      "scientific notation",
      "astronomy/physics math"
    ],
    "codeExample": "const speedOfLight = 299792458; // m/s\nconsole.log('Speed of light (exp):', speedOfLight.toExponential(3), 'm/s');\nconst smallNum = 0.0000456;\nconsole.log('Small number (exp):', smallNum.toExponential(2));",
    "htmlExample": "<div class=\"demo-box\">toExponential handles very large or infinitesimal scientific numbers.</div>",
    "expectedOutput": "> Speed of light (exp): 2.998e+8 m/s\n> Small number (exp): 4.56e-5",
    "notes": "Returns a string; useful for physics simulations and planetary calculations.",
    "commonMistakes": "Calling toExponential on number literals without parentheses or extra dot: 5.toExponential() is a syntax error (use (5).toExponential())."
  },
  {
    "id": 224,
    "number": "224",
    "title": "To-Do List Project",
    "category": "Interactive Projects",
    "introduction": "Build a complete, responsive interactive To-Do application with add, complete, and delete controls.",
    "explanation": "Demonstrates DOM manipulation, event delegation, array state management, and user interaction. Users can type tasks, toggle completion states, delete items, and observe real-time task counters.",
    "syntax": "state.push({ id, text, done }); render();",
    "keywordsOrMethods": [
      "To-Do Project",
      "State Management",
      "DOM Rendering",
      "Event Delegation"
    ],
    "codeExample": "// State-driven To-Do List Engine\nlet todos = [\n  { id: 1, text: 'Master 166 HTML Lessons', completed: true },\n  { id: 2, text: 'Complete 210 CSS Lessons', completed: true },\n  { id: 3, text: 'Build 230 JavaScript Lessons', completed: false }\n];\n\nfunction addTodo(text) {\n  if (!text.trim()) return;\n  todos.push({ id: Date.now(), text, completed: false });\n  console.log(`Added task: \"${text}\" | Total tasks: ${todos.length}`);\n}\n\nfunction toggleTodo(id) {\n  const item = todos.find(t => t.id === id);\n  if (item) {\n    item.completed = !item.completed;\n    console.log(`Task \"${item.text}\" completed: ${item.completed}`);\n  }\n}\n\naddTodo('Deploy PLAY-CODE to GitHub Pages');\ntoggleTodo(3);",
    "htmlExample": "<div style=\"max-width:380px;background:#111827;padding:20px;border-radius:12px;color:white;font-family:sans-serif;\">\n  <h3 style=\"margin-top:0;color:#818cf8;\">\ud83d\udcdd To-Do List</h3>\n  <div style=\"display:flex;gap:8px;margin-bottom:15px;\">\n    <input type=\"text\" id=\"todo-input\" placeholder=\"New task...\" style=\"flex:1;padding:8px;border-radius:6px;border:1px solid #334155;background:#0b1120;color:white;\">\n    <button onclick=\"addUiTodo()\" style=\"padding:8px 14px;background:#4f46e5;color:white;border:none;border-radius:6px;cursor:pointer;\">Add</button>\n  </div>\n  <ul id=\"todo-list\" style=\"list-style:none;padding:0;margin:0;\"></ul>\n</div>\n<script>\nlet uiTodos = [{id:1, text:'HTML5 Mastery', done:true}, {id:2, text:'CSS3 Grid & Flex', done:true}];\nfunction renderUi() {\n  const el = document.getElementById('todo-list');\n  if (!el) return;\n  el.innerHTML = uiTodos.map(t => `<li style=\"display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1e293b;\"><span style=\"${t.done ? 'text-decoration:line-through;color:#64748b;':''}\">${t.text}</span><button onclick=\"removeUiTodo(${t.id})\" style=\"background:#ef4444;color:white;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;\">&times;</button></li>`).join('');\n}\nfunction addUiTodo() {\n  const input = document.getElementById('todo-input');\n  if (input && input.value) { uiTodos.push({id:Date.now(), text:input.value, done:false}); input.value=''; renderUi(); }\n}\nfunction removeUiTodo(id) { uiTodos = uiTodos.filter(t => t.id !== id); renderUi(); }\nrenderUi();\n</script>",
    "expectedOutput": "> Added task: \"Deploy PLAY-CODE to GitHub Pages\" | Total tasks: 4\n> Task \"Build 230 JavaScript Lessons\" completed: true",
    "notes": "Persisting todos to localStorage allows tasks to survive browser tab refreshes.",
    "commonMistakes": "Directly mutating DOM nodes without synchronizing internal JavaScript state."
  },
  {
    "id": 225,
    "number": "225",
    "title": "Calculator Project",
    "category": "Interactive Projects",
    "introduction": "Build a functional digital calculator handling addition, subtraction, multiplication, and division.",
    "explanation": "Demonstrates state machines, numeric string parsing, operator precedence, and safe mathematical evaluation without using eval().",
    "syntax": "calculate(op1, operator, op2)",
    "keywordsOrMethods": [
      "Calculator",
      "State Machine",
      "Safe Math",
      "Zero eval()"
    ],
    "codeExample": "class CalculatorEngine {\n  constructor() {\n    this.clear();\n  }\n  clear() {\n    this.current = '0';\n    this.previous = null;\n    this.operation = null;\n  }\n  appendNumber(number) {\n    if (number === '.' && this.current.includes('.')) return;\n    this.current = this.current === '0' ? String(number) : this.current + number;\n  }\n  chooseOperation(op) {\n    if (this.current === '') return;\n    if (this.previous !== null) this.compute();\n    this.operation = op;\n    this.previous = this.current;\n    this.current = '';\n  }\n  compute() {\n    const prev = parseFloat(this.previous);\n    const curr = parseFloat(this.current);\n    if (isNaN(prev) || isNaN(curr)) return;\n    let result;\n    switch (this.operation) {\n      case '+': result = prev + curr; break;\n      case '-': result = prev - curr; break;\n      case '*': result = prev * curr; break;\n      case '/': result = curr === 0 ? 'Error' : prev / curr; break;\n      default: return;\n    }\n    this.current = String(result);\n    this.operation = null;\n    this.previous = null;\n  }\n}\nconst calc = new CalculatorEngine();\ncalc.appendNumber('12');\ncalc.chooseOperation('*');\ncalc.appendNumber('5');\ncalc.compute();\nconsole.log('12 * 5 =', calc.current);",
    "htmlExample": "<div style=\"max-width:240px;background:#0f172a;padding:16px;border-radius:12px;font-family:sans-serif;\">\n  <div id=\"calc-disp\" style=\"background:#1e293b;color:#38bdf8;padding:12px;text-align:right;font-size:1.4rem;border-radius:8px;margin-bottom:12px;font-family:monospace;\">60</div>\n  <div style=\"display:grid;grid-template-columns:repeat(4,1fr);gap:8px;\">\n    <button class=\"demo-btn\" style=\"padding:10px;\">7</button><button class=\"demo-btn\" style=\"padding:10px;\">8</button><button class=\"demo-btn\" style=\"padding:10px;\">9</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">/</button>\n    <button class=\"demo-btn\" style=\"padding:10px;\">4</button><button class=\"demo-btn\" style=\"padding:10px;\">5</button><button class=\"demo-btn\" style=\"padding:10px;\">6</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">*</button>\n    <button class=\"demo-btn\" style=\"padding:10px;\">1</button><button class=\"demo-btn\" style=\"padding:10px;\">2</button><button class=\"demo-btn\" style=\"padding:10px;\">3</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">-</button>\n    <button class=\"demo-btn\" style=\"background:#ef4444;color:white;padding:10px;\">C</button><button class=\"demo-btn\" style=\"padding:10px;\">0</button><button class=\"demo-btn\" style=\"background:#10b981;color:white;padding:10px;\">=</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">+</button>\n  </div>\n</div>",
    "expectedOutput": "> 12 * 5 = 60",
    "notes": "Never use eval() for calculators in production due to arbitrary code execution risks.",
    "commonMistakes": "Dividing by zero without returning an 'Error' or Infinity guard."
  },
  {
    "id": 226,
    "number": "226",
    "title": "Quiz App Project",
    "category": "Interactive Projects",
    "introduction": "Build an interactive Quiz application with question progression, score tracking, and instant results.",
    "explanation": "Implements structured question datasets, option click handlers, active index tracking, score calculations, and restart capabilities.",
    "syntax": "questions[currentIndex].options.map(...)",
    "keywordsOrMethods": [
      "Quiz Application",
      "State Progress",
      "Score Tracking",
      "Array of Objects"
    ],
    "codeExample": "const quizQuestions = [\n  {\n    q: 'How many lessons are in the PLAY-CODE HTML curriculum?',\n    options: ['100', '150', '166', '200'],\n    answer: 2\n  },\n  {\n    q: 'How many lessons are in the CSS curriculum?',\n    options: ['180', '210', '250', '166'],\n    answer: 1\n  }\n];\n\nlet score = 0;\nfunction checkAnswer(qIdx, selectedOption) {\n  const question = quizQuestions[qIdx];\n  if (selectedOption === question.answer) {\n    score += 100;\n    console.log(`Q${qIdx + 1}: Correct! +100 points.`);\n  } else {\n    console.log(`Q${qIdx + 1}: Incorrect.`);\n  }\n}\n\ncheckAnswer(0, 2); // Correct\ncheckAnswer(1, 1); // Correct\nconsole.log('Final Score:', score, '/ 200');",
    "htmlExample": "<div style=\"max-width:380px;background:#111827;padding:20px;border-radius:12px;color:white;font-family:sans-serif;\">\n  <span style=\"color:#818cf8;font-size:0.85rem;font-weight:bold;\">Question 1 of 2</span>\n  <h4 style=\"margin:8px 0 16px;\">How many lessons in PLAY-CODE HTML?</h4>\n  <div style=\"display:flex;flex-direction:column;gap:8px;\">\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;\">A) 120 Lessons</button>\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;background:#4f46e5;color:white;\">B) 166 Lessons (Correct)</button>\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;\">C) 210 Lessons</button>\n  </div>\n</div>",
    "expectedOutput": "> Q1: Correct! +100 points.\n> Q2: Correct! +100 points.\n> Final Score: 200 / 200",
    "notes": "Shuffle algorithms (like Fisher-Yates) can randomize question order dynamically.",
    "commonMistakes": "Hardcoding question indices instead of maintaining a dynamic currentIndex variable."
  },
  {
    "id": 227,
    "number": "227",
    "title": "Weather App Project",
    "category": "Interactive Projects",
    "introduction": "Build a responsive Weather App featuring city search, temperature display, and simulated API payloads.",
    "explanation": "Covers asynchronous fetching, JSON response parsing, conditional weather iconography, and temperature unit conversions (\u00b0C to \u00b0F).",
    "syntax": "async function getWeather(city) { const res = await fetch(...); }",
    "keywordsOrMethods": [
      "Weather App",
      "Async Fetch",
      "Mock API",
      "Dynamic UI"
    ],
    "codeExample": "async function fetchWeatherMock(city) {\n  console.log(`Fetching live weather data for \"${city}\"...`);\n  const mockDatabase = {\n    'tokyo': { temp: 18, condition: 'Sunny \u2600\ufe0f', humidity: '45%' },\n    'london': { temp: 12, condition: 'Rainy \ud83c\udf27\ufe0f', humidity: '82%' },\n    'new york': { temp: 15, condition: 'Partly Cloudy \u26c5', humidity: '55%' }\n  };\n  const key = city.trim().toLowerCase();\n  const data = mockDatabase[key] || { temp: 22, condition: 'Clear \ud83c\udf24\ufe0f', humidity: '50%' };\n  return { city, ...data };\n}\n\nfetchWeatherMock('Tokyo').then(report => {\n  console.log(`City: ${report.city}`);\n  console.log(`Temperature: ${report.temp}\u00b0C / ${(report.temp * 9/5 + 32).toFixed(1)}\u00b0F`);\n  console.log(`Condition: ${report.condition} (Humidity: ${report.humidity})`);\n});",
    "htmlExample": "<div style=\"max-width:320px;background:linear-gradient(135deg,#1e1b4b,#312e81);padding:24px;border-radius:16px;color:white;text-align:center;font-family:sans-serif;\">\n  <h3 style=\"margin:0;\">Tokyo</h3>\n  <div style=\"font-size:3rem;margin:12px 0;\">\u2600\ufe0f</div>\n  <div style=\"font-size:2.4rem;font-weight:bold;\">18\u00b0C</div>\n  <p style=\"color:#c7d2fe;margin:4px 0;\">Sunny \u2022 Humidity: 45%</p>\n</div>",
    "expectedOutput": "> Fetching live weather data for \"Tokyo\"...\n> City: Tokyo\n> Temperature: 18\u00b0C / 64.4\u00b0F\n> Condition: Sunny \u2600\ufe0f (Humidity: 45%)",
    "notes": "Always provide a clean fallback when external API keys or network requests are unavailable.",
    "commonMistakes": "Not checking response status before assuming weather payload was returned."
  },
  {
    "id": 228,
    "number": "228",
    "title": "Stopwatch Project",
    "category": "Interactive Projects",
    "introduction": "Build an accurate Stopwatch with Start, Pause, Reset, and precision millisecond timing.",
    "explanation": "Calculates elapsed time using Date.now() timestamp deltas rather than relying solely on setInterval ticks, ensuring clock precision even if the tab throttles.",
    "syntax": "elapsedTime = Date.now() - startTime;",
    "keywordsOrMethods": [
      "Stopwatch",
      "Date.now() delta",
      "Interval",
      "Precision Timing"
    ],
    "codeExample": "class StopwatchEngine {\n  constructor() {\n    this.elapsed = 0;\n    this.running = false;\n    this.startTime = 0;\n  }\n  start() {\n    if (!this.running) {\n      this.running = true;\n      this.startTime = Date.now() - this.elapsed;\n      console.log('Stopwatch started.');\n    }\n  }\n  pause() {\n    if (this.running) {\n      this.running = false;\n      this.elapsed = Date.now() - this.startTime;\n      console.log(`Stopwatch paused at: ${(this.elapsed / 1000).toFixed(2)}s`);\n    }\n  }\n  reset() {\n    this.running = false;\n    this.elapsed = 0;\n    console.log('Stopwatch reset to 00:00.00');\n  }\n}\nconst timer = new StopwatchEngine();\ntimer.start();\ntimer.pause();\ntimer.reset();",
    "htmlExample": "<div style=\"max-width:300px;background:#0f172a;padding:24px;border-radius:16px;text-align:center;color:white;font-family:monospace;\">\n  <div style=\"font-size:2.4rem;font-weight:bold;color:#38bdf8;margin-bottom:16px;\">00:04.25</div>\n  <div style=\"display:flex;gap:8px;justify-content:center;\">\n    <button class=\"demo-btn\" style=\"background:#10b981;color:white;\">Start</button>\n    <button class=\"demo-btn\" style=\"background:#f59e0b;color:white;\">Pause</button>\n    <button class=\"demo-btn\" style=\"background:#ef4444;color:white;\">Reset</button>\n  </div>\n</div>",
    "expectedOutput": "> Stopwatch started.\n> Stopwatch paused at: 0.00s\n> Stopwatch reset to 00:00.00",
    "notes": "Always measure delta = Date.now() - startTime instead of incrementing a counter by fixed milliseconds.",
    "commonMistakes": "Assuming setInterval(fn, 10) fires precisely every 10ms (drift will occur without timestamp deltas)."
  },
  {
    "id": 229,
    "number": "229",
    "title": "Simple Chat App Project",
    "category": "Interactive Projects",
    "introduction": "Build an interactive Chat UI with message bubbles, input sending, and automated bot response simulations.",
    "explanation": "Combines array message models, auto-scrolling to bottom (scrollTop = scrollHeight), keyboard enter event listeners, and simulated reply latency.",
    "syntax": "messages.push({ sender, text, timestamp }); render();",
    "keywordsOrMethods": [
      "Chat Application",
      "Timeline UI",
      "Scroll Management",
      "Message Bubbles"
    ],
    "codeExample": "const chatLog = [];\n\nfunction sendMessage(user, message) {\n  const entry = {\n    id: chatLog.length + 1,\n    user,\n    message,\n    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })\n  };\n  chatLog.push(entry);\n  console.log(`[${entry.time}] ${entry.user}: ${entry.message}`);\n}\n\nsendMessage('NASA-KUN', 'Welcome to Lesson #229 of the JavaScript curriculum!');\nsendMessage('Bot', 'All 230 interactive lessons are loading seamlessly.');",
    "htmlExample": "<div style=\"max-width:360px;background:#111827;border-radius:12px;padding:16px;color:white;font-family:sans-serif;\">\n  <h4 style=\"margin:0 0 12px;color:#818cf8;\">\ud83d\udcac PLAY-CODE Messenger</h4>\n  <div style=\"display:flex;flex-direction:column;gap:8px;min-height:100px;margin-bottom:12px;\">\n    <div style=\"align-self:flex-start;background:#1e293b;padding:8px 12px;border-radius:8px;max-width:80%;font-size:0.9rem;\">Hello! How can I learn JavaScript?</div>\n    <div style=\"align-self:flex-end;background:#4f46e5;color:white;padding:8px 12px;border-radius:8px;max-width:80%;font-size:0.9rem;\">Explore all 230 lessons on PLAY-CODE!</div>\n  </div>\n  <div style=\"display:flex;gap:6px;\">\n    <input type=\"text\" placeholder=\"Type a reply...\" style=\"flex:1;padding:8px;background:#0b1120;border:1px solid #334155;color:white;border-radius:6px;\">\n    <button class=\"demo-btn\" style=\"background:#06b6d4;color:white;padding:8px 14px;\">Send</button>\n  </div>\n</div>",
    "expectedOutput": "> [03:30 AM] NASA-KUN: Welcome to Lesson #229 of the JavaScript curriculum!\n> [03:30 AM] Bot: All 230 interactive lessons are loading seamlessly.",
    "notes": "Always sanitize user chat input before injecting into the DOM to prevent XSS vulnerabilities.",
    "commonMistakes": "Not automatically scrolling the chat container to the bottom when a new message arrives."
  },
  {
    "id": 230,
    "number": "230",
    "title": "Tic-Tac-Toe Game Project",
    "category": "Interactive Projects",
    "introduction": "Build an interactive Tic-Tac-Toe (Noughts & Crosses) 3x3 game with turn switching, win calculation, and tie detection.",
    "explanation": "The ultimate milestone project in the 230-lesson JavaScript curriculum. Implements board array state, 8 winning combination lines, turn indicator (X vs O), status banners, and board reset.",
    "syntax": "checkWin(board, WINNING_COMBOS)",
    "keywordsOrMethods": [
      "Tic-Tac-Toe",
      "Game Logic",
      "Winning Combos",
      "Capstone Project"
    ],
    "codeExample": "class TicTacToeGame {\n  constructor() {\n    this.board = Array(9).fill(null);\n    this.turn = 'X';\n    this.winner = null;\n    this.winningCombos = [\n      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows\n      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols\n      [0, 4, 8], [2, 4, 6]             // Diagonals\n    ];\n  }\n  makeMove(index) {\n    if (this.board[index] || this.winner) return;\n    this.board[index] = this.turn;\n    console.log(`Player ${this.turn} moves to square #${index}`);\n    if (this.checkWin()) {\n      this.winner = this.turn;\n      console.log(`\ud83c\udfc6 Victory! Player ${this.winner} wins the game!`);\n    } else if (this.board.every(cell => cell !== null)) {\n      console.log('\ud83e\udd1d Game ended in a draw (tie)!');\n    } else {\n      this.turn = this.turn === 'X' ? 'O' : 'X';\n    }\n  }\n  checkWin() {\n    return this.winningCombos.some(([a, b, c]) => \n      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]\n    );\n  }\n}\nconst game = new TicTacToeGame();\ngame.makeMove(0); // X\ngame.makeMove(3); // O\ngame.makeMove(1); // X\ngame.makeMove(4); // O\ngame.makeMove(2); // X -> Wins top row!",
    "htmlExample": "<div style=\"max-width:280px;background:#0b1120;padding:20px;border-radius:16px;text-align:center;color:white;font-family:sans-serif;\">\n  <h3 style=\"margin-top:0;color:#f8fafc;\">Tic-Tac-Toe</h3>\n  <div style=\"color:#38bdf8;margin-bottom:12px;font-weight:bold;\">Player X's Turn</div>\n  <div style=\"display:grid;grid-template-columns:repeat(3,70px);gap:8px;justify-content:center;margin-bottom:14px;\">\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#38bdf8;cursor:pointer;\">O</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#38bdf8;cursor:pointer;\">O</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n  </div>\n  <button class=\"demo-btn\" style=\"background:#4f46e5;color:white;width:100%;\">Restart Game</button>\n</div>",
    "expectedOutput": "> Player X moves to square #0\n> Player O moves to square #3\n> Player X moves to square #1\n> Player O moves to square #4\n> Player X moves to square #2\n> \ud83c\udfc6 Victory! Player X wins the game!",
    "notes": "You have reached the final lesson of the complete 230-lesson JavaScript curriculum on CodePlay (@N4)!",
    "commonMistakes": "Allowing players to click on already occupied squares without a guard clause."
  }
];

if (typeof window !== 'undefined') {
  window.JAVASCRIPT_LESSONS = JAVASCRIPT_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JAVASCRIPT_LESSONS;
}
export default JAVASCRIPT_LESSONS;
