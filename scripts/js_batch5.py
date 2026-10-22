# scripts/js_batch5.py: Lessons 201 to 230
def get_batch5():
    b = []

    # 201. getMilliseconds() Method
    b.append({
        "id": 201, "number": "201", "title": "getMilliseconds() Method", "category": "Date & Time API",
        "introduction": "getMilliseconds() returns the milliseconds (0-999) of the specified date according to local time.",
        "explanation": "Returns the fractional second component. Useful for high-precision time calculations, benchmarking execution durations, and unique key generation.",
        "syntax": "dateObj.getMilliseconds()",
        "keywordsOrMethods": ["getMilliseconds()", "0 to 999", "millisecond precision"],
        "codeExample": "const date = new Date('2026-10-21T12:00:00.450Z');\nconsole.log('Milliseconds component:', date.getMilliseconds());\nconsole.log('Current timestamp ms:', Date.now());",
        "htmlExample": "<div class=\"demo-box\">getMilliseconds provides sub-second time resolution.</div>",
        "expectedOutput": "> Milliseconds component: 450\n> Current timestamp ms: 1792584113000",
        "notes": "For performance micro-benchmarking, performance.now() is even more accurate than Date.",
        "commonMistakes": "Confusing getMilliseconds() (0-999 within the second) with getTime() (total milliseconds since 1970 Unix epoch)."
    })

    # 202. setFullYear() Method
    b.append({
        "id": 202, "number": "202", "title": "setFullYear() Method", "category": "Date & Time API",
        "introduction": "setFullYear() sets the full year for a specified date according to local time.",
        "explanation": "Mutates the Date object to the specified 4-digit year. Optionally also accepts month and day values to set multiple components at once.",
        "syntax": "dateObj.setFullYear(yearValue, monthValue, dateValue);",
        "keywordsOrMethods": ["setFullYear()", "mutate year", "calendar math"],
        "codeExample": "const date = new Date('2026-10-21');\ndate.setFullYear(2030);\nconsole.log('Updated year:', date.getFullYear());\nconsole.log('Updated ISO string:', date.toISOString().slice(0, 10));",
        "htmlExample": "<div class=\"demo-box\">setFullYear adjusts the year component of Date instances.</div>",
        "expectedOutput": "> Updated year: 2030\n> Updated ISO string: 2030-10-21",
        "notes": "Always pass 4 digits (e.g. 2026, not 26) to prevent unexpected legacy conversions.",
        "commonMistakes": "Passing two-digit years (setFullYear(98) sets the year 98 AD, not 1998)."
    })

    # 203. setMonth() Method
    b.append({
        "id": 203, "number": "203", "title": "setMonth() Method", "category": "Date & Time API",
        "introduction": "setMonth() sets the month for a specified date according to local time.",
        "explanation": "Accepts a zero-indexed month (0 for January, 11 for December). If the new month has fewer days than the current date, JavaScript automatically rolls over into the next month.",
        "syntax": "dateObj.setMonth(monthValue, dayValue);",
        "keywordsOrMethods": ["setMonth()", "zero-indexed month", "month rollover"],
        "codeExample": "const date = new Date('2026-01-15');\ndate.setMonth(11); // December (zero-indexed)\nconsole.log('Updated month (human):', date.getMonth() + 1);",
        "htmlExample": "<div class=\"demo-box\">setMonth mutates the month (0 to 11).</div>",
        "expectedOutput": "> Updated month (human): 12",
        "notes": "Setting month on the 31st can cause unexpected jumps (e.g. setting February on Jan 31 rolls to March 3).",
        "commonMistakes": "Setting date.setDate(1) before changing months when avoiding rollover bugs on 31-day months."
    })

    # 204. setDate() Method
    b.append({
        "id": 204, "number": "204", "title": "setDate() Method", "category": "Date & Time API",
        "introduction": "setDate() changes the day of the month of a given Date instance according to local time.",
        "explanation": "Mutates the date. Passing a value outside the month's bounds (e.g. 0 or 35) automatically adjusts the month forward or backward.",
        "syntax": "dateObj.setDate(dayValue);",
        "keywordsOrMethods": ["setDate()", "day of month", "calendar rollover"],
        "codeExample": "const date = new Date('2026-10-21');\ndate.setDate(25);\nconsole.log('Updated day of month:', date.getDate());\n// Adding 14 days:\ndate.setDate(date.getDate() + 14);\nconsole.log('After adding 14 days:', date.toISOString().slice(0, 10));",
        "htmlExample": "<div class=\"demo-box\">setDate adjusts calendar days and cleanly handles month boundaries.</div>",
        "expectedOutput": "> Updated day of month: 25\n> After adding 14 days: 2026-11-08",
        "notes": "Passing 0 sets the date to the last day of the PREVIOUS month.",
        "commonMistakes": "Confusing setDate() with a non-existent setDay() (day of the week cannot be set directly)."
    })

    # 205. setHours() Method
    b.append({
        "id": 205, "number": "205", "title": "setHours() Method", "category": "Date & Time API",
        "introduction": "setHours() sets the hours for a specified date according to local time.",
        "explanation": "Accepts an integer from 0 to 23. Optionally accepts min, sec, and ms to set the complete time in a single method call.",
        "syntax": "dateObj.setHours(hoursValue, minVal, secVal, msVal);",
        "keywordsOrMethods": ["setHours()", "24-hour update", "reset time"],
        "codeExample": "const date = new Date('2026-10-21T08:00:00');\ndate.setHours(17, 30, 0); // 5:30 PM\nconsole.log('Updated hours:', date.getHours());\nconsole.log('Updated minutes:', date.getMinutes());",
        "htmlExample": "<div class=\"demo-box\">setHours configures the hour component of Date objects.</div>",
        "expectedOutput": "> Updated hours: 17\n> Updated minutes: 30",
        "notes": "date.setHours(0, 0, 0, 0) is the standard idiom to reset a Date to midnight for pure day comparisons.",
        "commonMistakes": "Passing 24 (which rolls over into the next day at 00:00)."
    })

    # 206. setMinutes() Method
    b.append({
        "id": 206, "number": "206", "title": "setMinutes() Method", "category": "Date & Time API",
        "introduction": "setMinutes() sets the minutes for a specified date according to local time.",
        "explanation": "Accepts an integer from 0 to 59. Values greater than 59 will increment the hour accordingly.",
        "syntax": "dateObj.setMinutes(minutesValue, secondsValue, msValue);",
        "keywordsOrMethods": ["setMinutes()", "minute update", "0 to 59"],
        "codeExample": "const date = new Date('2026-10-21T10:00:00');\ndate.setMinutes(45);\nconsole.log('Updated minutes:', date.getMinutes());",
        "htmlExample": "<div class=\"demo-box\">setMinutes configures clock minutes.</div>",
        "expectedOutput": "> Updated minutes: 45",
        "notes": "Values outside 0-59 automatically adjust the hour.",
        "commonMistakes": "Not accounting for hour increment if passing values >= 60."
    })

    # 207. setSeconds() Method
    b.append({
        "id": 207, "number": "207", "title": "setSeconds() Method", "category": "Date & Time API",
        "introduction": "setSeconds() sets the seconds for a specified date according to local time.",
        "explanation": "Accepts an integer from 0 to 59. Values greater than 59 will increment the minute accordingly.",
        "syntax": "dateObj.setSeconds(secondsValue, msValue);",
        "keywordsOrMethods": ["setSeconds()", "seconds update"],
        "codeExample": "const date = new Date('2026-10-21T10:00:00');\ndate.setSeconds(59);\nconsole.log('Updated seconds:', date.getSeconds());",
        "htmlExample": "<div class=\"demo-box\">setSeconds sets the second value of a Date.</div>",
        "expectedOutput": "> Updated seconds: 59",
        "notes": "Optionally pass a second argument for milliseconds: date.setSeconds(30, 500).",
        "commonMistakes": "Forgetting that setSeconds mutates the existing Date object in place."
    })

    # 208. setMilliseconds() Method
    b.append({
        "id": 208, "number": "208", "title": "setMilliseconds() Method", "category": "Date & Time API",
        "introduction": "setMilliseconds() sets the milliseconds for a specified date according to local time.",
        "explanation": "Accepts an integer from 0 to 999. If you specify a number greater than 999, the seconds value is incremented accordingly.",
        "syntax": "dateObj.setMilliseconds(msValue);",
        "keywordsOrMethods": ["setMilliseconds()", "sub-second setting", "0 to 999"],
        "codeExample": "const date = new Date('2026-10-21T10:00:00.000Z');\ndate.setMilliseconds(750);\nconsole.log('Updated milliseconds:', date.getMilliseconds());",
        "htmlExample": "<div class=\"demo-box\">setMilliseconds adjusts the millisecond fractional second.</div>",
        "expectedOutput": "> Updated milliseconds: 750",
        "notes": "Useful when normalizing dates down to exact zero ms.",
        "commonMistakes": "Assuming setMilliseconds changes the date's timezone offset (it does not)."
    })

    # 209. charAt() Method
    b.append({
        "id": 209, "number": "209", "title": "charAt() Method", "category": "String Manipulation",
        "introduction": "charAt() returns the character at a specified index in a string.",
        "explanation": "Accepts an index from 0 to str.length - 1. If index is out of range, charAt() returns an empty string '' (unlike bracket notation str[index] which returns undefined).",
        "syntax": "str.charAt(index)",
        "keywordsOrMethods": ["charAt()", "character access", "empty string fallback"],
        "codeExample": "const word = 'JavaScript';\nconsole.log('Character at 0:', word.charAt(0));\nconsole.log('Character at 4:', word.charAt(4));\nconsole.log('Out of bounds charAt(99):', JSON.stringify(word.charAt(99)));",
        "htmlExample": "<div class=\"demo-box\">charAt extracts single characters from strings safely.</div>",
        "expectedOutput": "> Character at 0: J\n> Character at 4: S\n> Out of bounds charAt(99): \"\"",
        "notes": "charAt does not handle supplementary Unicode code points (emojis); use at() or codePointAt() for emojis.",
        "commonMistakes": "Expecting charAt(-1) to count from the end (use str.at(-1) for negative index support)."
    })

    # 210. charCodeAt() Method
    b.append({
        "id": 210, "number": "210", "title": "charCodeAt() Method", "category": "String Manipulation",
        "introduction": "charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.",
        "explanation": "Returns the numeric Unicode character code. Returns NaN if the index is out of range. Essential for character validation and encryption algorithms.",
        "syntax": "str.charCodeAt(index)",
        "keywordsOrMethods": ["charCodeAt()", "UTF-16", "ASCII / Unicode code"],
        "codeExample": "const letterA = 'A';\nconst letterZ = 'Z';\nconsole.log('Code for A:', letterA.charCodeAt(0)); // 65\nconsole.log('Code for Z:', letterZ.charCodeAt(0)); // 90\nconsole.log('Character from code:', String.fromCharCode(65));",
        "htmlExample": "<div class=\"demo-box\">charCodeAt retrieves the numeric UTF-16 character code.</div>",
        "expectedOutput": "> Code for A: 65\n> Code for Z: 90\n> Character from code: A",
        "notes": "For full 32-bit Unicode code points beyond 65535, use codePointAt() instead.",
        "commonMistakes": "Expecting charCodeAt to handle surrogate pairs in 4-byte emojis correctly without split."
    })

    # 211. toUpperCase() Method
    b.append({
        "id": 211, "number": "211", "title": "toUpperCase() Method", "category": "String Manipulation",
        "introduction": "toUpperCase() returns the calling string value converted to uppercase.",
        "explanation": "Does not modify the original string (strings are immutable in JavaScript); returns a brand new uppercase string.",
        "syntax": "const upper = str.toUpperCase();",
        "keywordsOrMethods": ["toUpperCase()", "uppercase", "non-mutating"],
        "codeExample": "const brand = 'codeplay platform';\nconst upperBrand = brand.toUpperCase();\nconsole.log('Uppercase string:', upperBrand);\nconsole.log('Original remains unchanged:', brand);",
        "htmlExample": "<div class=\"demo-box\">toUpperCase capitalizes all alphabet characters.</div>",
        "expectedOutput": "> Uppercase string: CODEPLAY PLATFORM\n> Original remains unchanged: codeplay platform",
        "notes": "Use toLocaleUpperCase() when dealing with locale-sensitive languages like Turkish (dotless i).",
        "commonMistakes": "Assuming str.toUpperCase() modifies the string in place."
    })

    # 212. toLowerCase() Method
    b.append({
        "id": 212, "number": "212", "title": "toLowerCase() Method", "category": "String Manipulation",
        "introduction": "toLowerCase() returns the calling string value converted to lowercase.",
        "explanation": "Standard method for normalizing user inputs (such as search queries and emails) prior to comparison.",
        "syntax": "const lower = str.toLowerCase();",
        "keywordsOrMethods": ["toLowerCase()", "case normalization", "immutable"],
        "codeExample": "const email = 'USER.NAME@Domain.COM';\nconst cleanEmail = email.toLowerCase();\nconsole.log('Normalized email:', cleanEmail);",
        "htmlExample": "<div class=\"demo-box\">toLowerCase normalizes case for reliable comparisons.</div>",
        "expectedOutput": "> Normalized email: user.name@domain.com",
        "notes": "For case-insensitive string comparisons, normalize both sides with .toLowerCase().",
        "commonMistakes": "Comparing strings of different cases directly without normalizing first."
    })

    # 213. trim() Method
    b.append({
        "id": 213, "number": "213", "title": "trim() Method", "category": "String Manipulation",
        "introduction": "trim() removes whitespace from both ends of this string and returns a new string.",
        "explanation": "Strips spaces, tabs, no-break spaces, and all line terminators (LF, CR) from both the beginning and end of a string. Does not affect whitespace between words.",
        "syntax": "const trimmed = str.trim();",
        "keywordsOrMethods": ["trim()", "strip whitespace", "input sanitization"],
        "codeExample": "const rawInput = '   Hello CodePlay!   \\n';\nconst cleaned = rawInput.trim();\nconsole.log('Raw length:', rawInput.length);\nconsole.log('Cleaned length:', cleaned.length);\nconsole.log('Result:', JSON.stringify(cleaned));",
        "htmlExample": "<div class=\"demo-box\">trim strips unwanted leading and trailing whitespace.</div>",
        "expectedOutput": "> Raw length: 22\n> Cleaned length: 15\n> Result: \"Hello CodePlay!\"",
        "notes": "Always trim user form inputs before validation.",
        "commonMistakes": "Expecting trim() to remove multiple spaces inside the middle of a string."
    })

    # 214. trimStart() Method
    b.append({
        "id": 214, "number": "214", "title": "trimStart() Method", "category": "String Manipulation",
        "introduction": "trimStart() removes whitespace from the beginning (start) of a string.",
        "explanation": "Also aliased as trimLeft(). Leaves any trailing whitespace at the end of the string untouched.",
        "syntax": "const cleanStart = str.trimStart();",
        "keywordsOrMethods": ["trimStart()", "trimLeft()", "strip leading whitespace"],
        "codeExample": "const text = '    Indented line with trailing space   ';\nconsole.log('trimStart:', JSON.stringify(text.trimStart()));",
        "htmlExample": "<div class=\"demo-box\">trimStart removes only leading whitespace.</div>",
        "expectedOutput": '> trimStart: "Indented line with trailing space   "',
        "notes": "Standardized in ES2019.",
        "commonMistakes": "Using non-standard custom regex when native trimStart is available."
    })

    # 215. trimEnd() Method
    b.append({
        "id": 215, "number": "215", "title": "trimEnd() Method", "category": "String Manipulation",
        "introduction": "trimEnd() removes whitespace from the end of a string.",
        "explanation": "Also aliased as trimRight(). Preserves leading whitespace while stripping trailing spaces and line breaks.",
        "syntax": "const cleanEnd = str.trimEnd();",
        "keywordsOrMethods": ["trimEnd()", "trimRight()", "strip trailing whitespace"],
        "codeExample": "const text = '    Indented code line    ';\nconsole.log('trimEnd:', JSON.stringify(text.trimEnd()));",
        "htmlExample": "<div class=\"demo-box\">trimEnd removes only trailing whitespace.</div>",
        "expectedOutput": '> trimEnd: "    Indented code line"',
        "notes": "Standardized in ES2019 alongside trimStart().",
        "commonMistakes": "Calling trimEnd on null or undefined values."
    })

    # 216. substring() Method
    b.append({
        "id": 216, "number": "216", "title": "substring() Method", "category": "String Manipulation",
        "introduction": "substring() returns the part of the string from the start index up to and excluding the end index.",
        "explanation": "If start is greater than end, substring() swaps the two arguments automatically. Any negative argument is treated as 0.",
        "syntax": "str.substring(indexStart, indexEnd);",
        "keywordsOrMethods": ["substring()", "slice vs substring", "index swap"],
        "codeExample": "const text = 'PLAY-CODE';\nconsole.log(text.substring(0, 4)); // PLAY\nconsole.log(text.substring(5));    // CODE\nconsole.log(text.substring(4, 0)); // Swapped: PLAY",
        "htmlExample": "<div class=\"demo-box\">substring extracts portions of text between indices.</div>",
        "expectedOutput": "> PLAY\n> CODE\n> PLAY",
        "notes": "Modern code often uses slice() for consistency with array slicing and negative index support.",
        "commonMistakes": "Expecting substring to accept negative indices from the end (use slice() instead)."
    })

    # 217. substr() Method
    b.append({
        "id": 217, "number": "217", "title": "substr() Method", "category": "String Manipulation",
        "introduction": "substr() returns a portion of the string, starting at the specified index and extending for a given number of characters.",
        "explanation": "substr(start, length) uses length rather than an end index. Note: substr() is considered legacy and deprecated in modern standards; use substring() or slice().",
        "syntax": "str.substr(start, length); // Legacy",
        "keywordsOrMethods": ["substr()", "legacy method", "length parameter"],
        "codeExample": "const phrase = 'Mozilla Developer Network';\nconsole.log('First 7 characters:', phrase.substr(0, 7));\nconsole.log('Modern slice equivalent:', phrase.slice(0, 7));",
        "htmlExample": "<div class=\"demo-box\">substr is a legacy method replaced by slice and substring.</div>",
        "expectedOutput": "> First 7 characters: Mozilla\n> Modern slice equivalent: Mozilla",
        "notes": "Always prefer String.prototype.slice(start, end) in modern codebases.",
        "commonMistakes": "Confusing substr(start, length) with substring(start, endIndex)."
    })

    # 218. repeat() Method
    b.append({
        "id": 218, "number": "218", "title": "repeat() Method", "category": "String Manipulation",
        "introduction": "repeat() constructs and returns a new string containing the specified number of copies of the string.",
        "explanation": "Introduced in ES6. Takes an integer count between 0 and positive infinity. If count is negative or infinite, a RangeError is thrown.",
        "syntax": "str.repeat(count)",
        "keywordsOrMethods": ["repeat()", "string repetition", "ES6"],
        "codeExample": "const star = '★';\nconsole.log('5-star rating:', star.repeat(5));\nconst divider = '-'.repeat(20);\nconsole.log(divider);\nconsole.log('CodePlay Rocks');\nconsole.log(divider);",
        "htmlExample": "<div class=\"demo-box\">repeat multiplies strings cleanly without loops.</div>",
        "expectedOutput": "> 5-star rating: ★★★★★\n> --------------------\n> CodePlay Rocks\n> --------------------",
        "notes": "count is converted to integer; '3.8' repeats 3 times.",
        "commonMistakes": "Passing a negative count: 'a'.repeat(-1) throws a RangeError."
    })

    # 219. padStart() Method
    b.append({
        "id": 219, "number": "219", "title": "padStart() Method", "category": "String Manipulation",
        "introduction": "padStart() pads the current string from the start with a given string until the target length is reached.",
        "explanation": "Introduced in ES2017. Commonly used for formatting numeric IDs, clocks (e.g. padding minutes to 2 digits), and tabular CLI alignment.",
        "syntax": "str.padStart(targetLength, padString)",
        "keywordsOrMethods": ["padStart()", "ES2017", "zero-padding", "formatting"],
        "codeExample": "const lessonNum = '7';\nconsole.log('Lesson ID:', lessonNum.padStart(3, '0')); // '007'\nconst hours = '9';\nconst mins = '5';\nconsole.log(`Time: ${hours.padStart(2, '0')}:${mins.padStart(2, '0')}`);",
        "htmlExample": "<div class=\"demo-box\">padStart standardizes string lengths with leading padding.</div>",
        "expectedOutput": "> Lesson ID: 007\n> Time: 09:05",
        "notes": "If targetLength is less than current string length, the original string is returned unchanged.",
        "commonMistakes": "Calling padStart directly on a number (num.padStart(2, '0') fails; convert with String(num) first)."
    })

    # 220. padEnd() Method
    b.append({
        "id": 220, "number": "220", "title": "padEnd() Method", "category": "String Manipulation",
        "introduction": "padEnd() pads the current string from the end with a given string until the target length is reached.",
        "explanation": "Introduced in ES2017. Appends padString to the right side of the string. Ideal for column alignment in text tables or reports.",
        "syntax": "str.padEnd(targetLength, padString)",
        "keywordsOrMethods": ["padEnd()", "ES2017", "trailing padding", "alignment"],
        "codeExample": "const items = [\n  ['HTML', '166 lessons'],\n  ['CSS', '210 lessons'],\n  ['JavaScript', '230 lessons']\n];\nconsole.log('Track Report:');\nitems.forEach(([track, count]) => {\n  console.log(`${track.padEnd(12, '.')} ${count}`);\n});",
        "htmlExample": "<div class=\"demo-box\">padEnd formats text with trailing padding for consistent columns.</div>",
        "expectedOutput": "> Track Report:\n> HTML........ 166 lessons\n> CSS......... 210 lessons\n> JavaScript.. 230 lessons",
        "notes": "The default padString is a single space ' '.",
        "commonMistakes": "Forgetting that targetLength is the TOTAL desired length, not the number of padding characters to add."
    })

    # 221. toFixed() Method
    b.append({
        "id": 221, "number": "221", "title": "toFixed() Method", "category": "String Manipulation",
        "introduction": "toFixed() formats a number using fixed-point notation, returning a string.",
        "explanation": "Accepts digits (0 to 100) indicating the number of digits to appear after the decimal point. Rounds the number and pads with zeros if necessary.",
        "syntax": "num.toFixed(digits)",
        "keywordsOrMethods": ["toFixed()", "fixed-point", "currency formatting"],
        "codeExample": "const price = 19.9;\nconsole.log('Formatted currency:', '$' + price.toFixed(2));\nconst pi = 3.14159265;\nconsole.log('Pi to 3 decimals:', pi.toFixed(3));",
        "htmlExample": "<div class=\"demo-box\">toFixed formats decimals for clean financial displays.</div>",
        "expectedOutput": "> Formatted currency: $19.90\n> Pi to 3 decimals: 3.142",
        "notes": "toFixed() returns a STRING, not a number. If you need a number back, wrap with Number() or parseFloat().",
        "commonMistakes": "Trying to do math directly on the result without realizing toFixed returns a string: (10.5).toFixed(2) + 1 is '10.501'!"
    })

    # 222. toPrecision() Method
    b.append({
        "id": 222, "number": "222", "title": "toPrecision() Method", "category": "String Manipulation",
        "introduction": "toPrecision() returns a string representing the Number object to the specified precision (significant digits).",
        "explanation": "Unlike toFixed() which counts digits after the decimal point, toPrecision() specifies total significant figures across the whole number. Uses exponential notation if needed.",
        "syntax": "num.toPrecision(precision)",
        "keywordsOrMethods": ["toPrecision()", "significant figures", "scientific formatting"],
        "codeExample": "const num = 123.456;\nconsole.log('4 significant digits:', num.toPrecision(4));\nconsole.log('2 significant digits (scientific):', num.toPrecision(2));",
        "htmlExample": "<div class=\"demo-box\">toPrecision formats numbers to a specified total number of significant figures.</div>",
        "expectedOutput": "> 4 significant digits: 123.5\n> 2 significant digits (scientific): 1.2e+2",
        "notes": "Precision must be an integer between 1 and 100.",
        "commonMistakes": "Confusing significant figures (total digits) with decimal places (digits after the dot)."
    })

    # 223. toExponential() Method
    b.append({
        "id": 223, "number": "223", "title": "toExponential() Method", "category": "String Manipulation",
        "introduction": "toExponential() returns a string representing the Number object in exponential (scientific) notation.",
        "explanation": "Formats a number in scientific e-notation (e.g. 1.25e+6). Accepts an optional fractionDigits parameter specifying the number of digits after the decimal point.",
        "syntax": "num.toExponential(fractionDigits)",
        "keywordsOrMethods": ["toExponential()", "scientific notation", "astronomy/physics math"],
        "codeExample": "const speedOfLight = 299792458; // m/s\nconsole.log('Speed of light (exp):', speedOfLight.toExponential(3), 'm/s');\nconst smallNum = 0.0000456;\nconsole.log('Small number (exp):', smallNum.toExponential(2));",
        "htmlExample": "<div class=\"demo-box\">toExponential handles very large or infinitesimal scientific numbers.</div>",
        "expectedOutput": "> Speed of light (exp): 2.998e+8 m/s\n> Small number (exp): 4.56e-5",
        "notes": "Returns a string; useful for physics simulations and planetary calculations.",
        "commonMistakes": "Calling toExponential on number literals without parentheses or extra dot: 5.toExponential() is a syntax error (use (5).toExponential())."
    })

    # 224. To-Do List Project
    b.append({
        "id": 224, "number": "224", "title": "To-Do List Project", "category": "Interactive Projects",
        "introduction": "Build a complete, responsive interactive To-Do application with add, complete, and delete controls.",
        "explanation": "Demonstrates DOM manipulation, event delegation, array state management, and user interaction. Users can type tasks, toggle completion states, delete items, and observe real-time task counters.",
        "syntax": "state.push({ id, text, done }); render();",
        "keywordsOrMethods": ["To-Do Project", "State Management", "DOM Rendering", "Event Delegation"],
        "codeExample": "// State-driven To-Do List Engine\nlet todos = [\n  { id: 1, text: 'Master 166 HTML Lessons', completed: true },\n  { id: 2, text: 'Complete 210 CSS Lessons', completed: true },\n  { id: 3, text: 'Build 230 JavaScript Lessons', completed: false }\n];\n\nfunction addTodo(text) {\n  if (!text.trim()) return;\n  todos.push({ id: Date.now(), text, completed: false });\n  console.log(`Added task: \"${text}\" | Total tasks: ${todos.length}`);\n}\n\nfunction toggleTodo(id) {\n  const item = todos.find(t => t.id === id);\n  if (item) {\n    item.completed = !item.completed;\n    console.log(`Task \"${item.text}\" completed: ${item.completed}`);\n  }\n}\n\naddTodo('Deploy PLAY-CODE to GitHub Pages');\ntoggleTodo(3);",
        "htmlExample": "<div style=\"max-width:380px;background:#111827;padding:20px;border-radius:12px;color:white;font-family:sans-serif;\">\n  <h3 style=\"margin-top:0;color:#818cf8;\">📝 To-Do List</h3>\n  <div style=\"display:flex;gap:8px;margin-bottom:15px;\">\n    <input type=\"text\" id=\"todo-input\" placeholder=\"New task...\" style=\"flex:1;padding:8px;border-radius:6px;border:1px solid #334155;background:#0b1120;color:white;\">\n    <button onclick=\"addUiTodo()\" style=\"padding:8px 14px;background:#4f46e5;color:white;border:none;border-radius:6px;cursor:pointer;\">Add</button>\n  </div>\n  <ul id=\"todo-list\" style=\"list-style:none;padding:0;margin:0;\"></ul>\n</div>\n<script>\nlet uiTodos = [{id:1, text:'HTML5 Mastery', done:true}, {id:2, text:'CSS3 Grid & Flex', done:true}];\nfunction renderUi() {\n  const el = document.getElementById('todo-list');\n  if (!el) return;\n  el.innerHTML = uiTodos.map(t => `<li style=\"display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1e293b;\"><span style=\"${t.done ? 'text-decoration:line-through;color:#64748b;':''}\">${t.text}</span><button onclick=\"removeUiTodo(${t.id})\" style=\"background:#ef4444;color:white;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;\">&times;</button></li>`).join('');\n}\nfunction addUiTodo() {\n  const input = document.getElementById('todo-input');\n  if (input && input.value) { uiTodos.push({id:Date.now(), text:input.value, done:false}); input.value=''; renderUi(); }\n}\nfunction removeUiTodo(id) { uiTodos = uiTodos.filter(t => t.id !== id); renderUi(); }\nrenderUi();\n</script>",
        "expectedOutput": "> Added task: \"Deploy PLAY-CODE to GitHub Pages\" | Total tasks: 4\n> Task \"Build 230 JavaScript Lessons\" completed: true",
        "notes": "Persisting todos to localStorage allows tasks to survive browser tab refreshes.",
        "commonMistakes": "Directly mutating DOM nodes without synchronizing internal JavaScript state."
    })

    # 225. Calculator Project
    b.append({
        "id": 225, "number": "225", "title": "Calculator Project", "category": "Interactive Projects",
        "introduction": "Build a functional digital calculator handling addition, subtraction, multiplication, and division.",
        "explanation": "Demonstrates state machines, numeric string parsing, operator precedence, and safe mathematical evaluation without using eval().",
        "syntax": "calculate(op1, operator, op2)",
        "keywordsOrMethods": ["Calculator", "State Machine", "Safe Math", "Zero eval()"],
        "codeExample": "class CalculatorEngine {\n  constructor() {\n    this.clear();\n  }\n  clear() {\n    this.current = '0';\n    this.previous = null;\n    this.operation = null;\n  }\n  appendNumber(number) {\n    if (number === '.' && this.current.includes('.')) return;\n    this.current = this.current === '0' ? String(number) : this.current + number;\n  }\n  chooseOperation(op) {\n    if (this.current === '') return;\n    if (this.previous !== null) this.compute();\n    this.operation = op;\n    this.previous = this.current;\n    this.current = '';\n  }\n  compute() {\n    const prev = parseFloat(this.previous);\n    const curr = parseFloat(this.current);\n    if (isNaN(prev) || isNaN(curr)) return;\n    let result;\n    switch (this.operation) {\n      case '+': result = prev + curr; break;\n      case '-': result = prev - curr; break;\n      case '*': result = prev * curr; break;\n      case '/': result = curr === 0 ? 'Error' : prev / curr; break;\n      default: return;\n    }\n    this.current = String(result);\n    this.operation = null;\n    this.previous = null;\n  }\n}\nconst calc = new CalculatorEngine();\ncalc.appendNumber('12');\ncalc.chooseOperation('*');\ncalc.appendNumber('5');\ncalc.compute();\nconsole.log('12 * 5 =', calc.current);",
        "htmlExample": "<div style=\"max-width:240px;background:#0f172a;padding:16px;border-radius:12px;font-family:sans-serif;\">\n  <div id=\"calc-disp\" style=\"background:#1e293b;color:#38bdf8;padding:12px;text-align:right;font-size:1.4rem;border-radius:8px;margin-bottom:12px;font-family:monospace;\">60</div>\n  <div style=\"display:grid;grid-template-columns:repeat(4,1fr);gap:8px;\">\n    <button class=\"demo-btn\" style=\"padding:10px;\">7</button><button class=\"demo-btn\" style=\"padding:10px;\">8</button><button class=\"demo-btn\" style=\"padding:10px;\">9</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">/</button>\n    <button class=\"demo-btn\" style=\"padding:10px;\">4</button><button class=\"demo-btn\" style=\"padding:10px;\">5</button><button class=\"demo-btn\" style=\"padding:10px;\">6</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">*</button>\n    <button class=\"demo-btn\" style=\"padding:10px;\">1</button><button class=\"demo-btn\" style=\"padding:10px;\">2</button><button class=\"demo-btn\" style=\"padding:10px;\">3</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">-</button>\n    <button class=\"demo-btn\" style=\"background:#ef4444;color:white;padding:10px;\">C</button><button class=\"demo-btn\" style=\"padding:10px;\">0</button><button class=\"demo-btn\" style=\"background:#10b981;color:white;padding:10px;\">=</button><button class=\"demo-btn\" style=\"background:#4f46e5;color:white;padding:10px;\">+</button>\n  </div>\n</div>",
        "expectedOutput": "> 12 * 5 = 60",
        "notes": "Never use eval() for calculators in production due to arbitrary code execution risks.",
        "commonMistakes": "Dividing by zero without returning an 'Error' or Infinity guard."
    })

    # 226. Quiz App Project
    b.append({
        "id": 226, "number": "226", "title": "Quiz App Project", "category": "Interactive Projects",
        "introduction": "Build an interactive Quiz application with question progression, score tracking, and instant results.",
        "explanation": "Implements structured question datasets, option click handlers, active index tracking, score calculations, and restart capabilities.",
        "syntax": "questions[currentIndex].options.map(...)",
        "keywordsOrMethods": ["Quiz Application", "State Progress", "Score Tracking", "Array of Objects"],
        "codeExample": "const quizQuestions = [\n  {\n    q: 'How many lessons are in the PLAY-CODE HTML curriculum?',\n    options: ['100', '150', '166', '200'],\n    answer: 2\n  },\n  {\n    q: 'How many lessons are in the CSS curriculum?',\n    options: ['180', '210', '250', '166'],\n    answer: 1\n  }\n];\n\nlet score = 0;\nfunction checkAnswer(qIdx, selectedOption) {\n  const question = quizQuestions[qIdx];\n  if (selectedOption === question.answer) {\n    score += 100;\n    console.log(`Q${qIdx + 1}: Correct! +100 points.`);\n  } else {\n    console.log(`Q${qIdx + 1}: Incorrect.`);\n  }\n}\n\ncheckAnswer(0, 2); // Correct\ncheckAnswer(1, 1); // Correct\nconsole.log('Final Score:', score, '/ 200');",
        "htmlExample": "<div style=\"max-width:380px;background:#111827;padding:20px;border-radius:12px;color:white;font-family:sans-serif;\">\n  <span style=\"color:#818cf8;font-size:0.85rem;font-weight:bold;\">Question 1 of 2</span>\n  <h4 style=\"margin:8px 0 16px;\">How many lessons in PLAY-CODE HTML?</h4>\n  <div style=\"display:flex;flex-direction:column;gap:8px;\">\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;\">A) 120 Lessons</button>\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;background:#4f46e5;color:white;\">B) 166 Lessons (Correct)</button>\n    <button class=\"demo-btn\" style=\"text-align:left;padding:10px;\">C) 210 Lessons</button>\n  </div>\n</div>",
        "expectedOutput": "> Q1: Correct! +100 points.\n> Q2: Correct! +100 points.\n> Final Score: 200 / 200",
        "notes": "Shuffle algorithms (like Fisher-Yates) can randomize question order dynamically.",
        "commonMistakes": "Hardcoding question indices instead of maintaining a dynamic currentIndex variable."
    })

    # 227. Weather App Project
    b.append({
        "id": 227, "number": "227", "title": "Weather App Project", "category": "Interactive Projects",
        "introduction": "Build a responsive Weather App featuring city search, temperature display, and simulated API payloads.",
        "explanation": "Covers asynchronous fetching, JSON response parsing, conditional weather iconography, and temperature unit conversions (°C to °F).",
        "syntax": "async function getWeather(city) { const res = await fetch(...); }",
        "keywordsOrMethods": ["Weather App", "Async Fetch", "Mock API", "Dynamic UI"],
        "codeExample": "async function fetchWeatherMock(city) {\n  console.log(`Fetching live weather data for \"${city}\"...`);\n  const mockDatabase = {\n    'tokyo': { temp: 18, condition: 'Sunny ☀️', humidity: '45%' },\n    'london': { temp: 12, condition: 'Rainy 🌧️', humidity: '82%' },\n    'new york': { temp: 15, condition: 'Partly Cloudy ⛅', humidity: '55%' }\n  };\n  const key = city.trim().toLowerCase();\n  const data = mockDatabase[key] || { temp: 22, condition: 'Clear 🌤️', humidity: '50%' };\n  return { city, ...data };\n}\n\nfetchWeatherMock('Tokyo').then(report => {\n  console.log(`City: ${report.city}`);\n  console.log(`Temperature: ${report.temp}°C / ${(report.temp * 9/5 + 32).toFixed(1)}°F`);\n  console.log(`Condition: ${report.condition} (Humidity: ${report.humidity})`);\n});",
        "htmlExample": "<div style=\"max-width:320px;background:linear-gradient(135deg,#1e1b4b,#312e81);padding:24px;border-radius:16px;color:white;text-align:center;font-family:sans-serif;\">\n  <h3 style=\"margin:0;\">Tokyo</h3>\n  <div style=\"font-size:3rem;margin:12px 0;\">☀️</div>\n  <div style=\"font-size:2.4rem;font-weight:bold;\">18°C</div>\n  <p style=\"color:#c7d2fe;margin:4px 0;\">Sunny • Humidity: 45%</p>\n</div>",
        "expectedOutput": "> Fetching live weather data for \"Tokyo\"...\n> City: Tokyo\n> Temperature: 18°C / 64.4°F\n> Condition: Sunny ☀️ (Humidity: 45%)",
        "notes": "Always provide a clean fallback when external API keys or network requests are unavailable.",
        "commonMistakes": "Not checking response status before assuming weather payload was returned."
    })

    # 228. Stopwatch Project
    b.append({
        "id": 228, "number": "228", "title": "Stopwatch Project", "category": "Interactive Projects",
        "introduction": "Build an accurate Stopwatch with Start, Pause, Reset, and precision millisecond timing.",
        "explanation": "Calculates elapsed time using Date.now() timestamp deltas rather than relying solely on setInterval ticks, ensuring clock precision even if the tab throttles.",
        "syntax": "elapsedTime = Date.now() - startTime;",
        "keywordsOrMethods": ["Stopwatch", "Date.now() delta", "Interval", "Precision Timing"],
        "codeExample": "class StopwatchEngine {\n  constructor() {\n    this.elapsed = 0;\n    this.running = false;\n    this.startTime = 0;\n  }\n  start() {\n    if (!this.running) {\n      this.running = true;\n      this.startTime = Date.now() - this.elapsed;\n      console.log('Stopwatch started.');\n    }\n  }\n  pause() {\n    if (this.running) {\n      this.running = false;\n      this.elapsed = Date.now() - this.startTime;\n      console.log(`Stopwatch paused at: ${(this.elapsed / 1000).toFixed(2)}s`);\n    }\n  }\n  reset() {\n    this.running = false;\n    this.elapsed = 0;\n    console.log('Stopwatch reset to 00:00.00');\n  }\n}\nconst timer = new StopwatchEngine();\ntimer.start();\ntimer.pause();\ntimer.reset();",
        "htmlExample": "<div style=\"max-width:300px;background:#0f172a;padding:24px;border-radius:16px;text-align:center;color:white;font-family:monospace;\">\n  <div style=\"font-size:2.4rem;font-weight:bold;color:#38bdf8;margin-bottom:16px;\">00:04.25</div>\n  <div style=\"display:flex;gap:8px;justify-content:center;\">\n    <button class=\"demo-btn\" style=\"background:#10b981;color:white;\">Start</button>\n    <button class=\"demo-btn\" style=\"background:#f59e0b;color:white;\">Pause</button>\n    <button class=\"demo-btn\" style=\"background:#ef4444;color:white;\">Reset</button>\n  </div>\n</div>",
        "expectedOutput": "> Stopwatch started.\n> Stopwatch paused at: 0.00s\n> Stopwatch reset to 00:00.00",
        "notes": "Always measure delta = Date.now() - startTime instead of incrementing a counter by fixed milliseconds.",
        "commonMistakes": "Assuming setInterval(fn, 10) fires precisely every 10ms (drift will occur without timestamp deltas)."
    })

    # 229. Simple Chat App Project
    b.append({
        "id": 229, "number": "229", "title": "Simple Chat App Project", "category": "Interactive Projects",
        "introduction": "Build an interactive Chat UI with message bubbles, input sending, and automated bot response simulations.",
        "explanation": "Combines array message models, auto-scrolling to bottom (scrollTop = scrollHeight), keyboard enter event listeners, and simulated reply latency.",
        "syntax": "messages.push({ sender, text, timestamp }); render();",
        "keywordsOrMethods": ["Chat Application", "Timeline UI", "Scroll Management", "Message Bubbles"],
        "codeExample": "const chatLog = [];\n\nfunction sendMessage(user, message) {\n  const entry = {\n    id: chatLog.length + 1,\n    user,\n    message,\n    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })\n  };\n  chatLog.push(entry);\n  console.log(`[${entry.time}] ${entry.user}: ${entry.message}`);\n}\n\nsendMessage('NASA-KUN', 'Welcome to Lesson #229 of the JavaScript curriculum!');\nsendMessage('Bot', 'All 230 interactive lessons are loading seamlessly.');",
        "htmlExample": "<div style=\"max-width:360px;background:#111827;border-radius:12px;padding:16px;color:white;font-family:sans-serif;\">\n  <h4 style=\"margin:0 0 12px;color:#818cf8;\">💬 PLAY-CODE Messenger</h4>\n  <div style=\"display:flex;flex-direction:column;gap:8px;min-height:100px;margin-bottom:12px;\">\n    <div style=\"align-self:flex-start;background:#1e293b;padding:8px 12px;border-radius:8px;max-width:80%;font-size:0.9rem;\">Hello! How can I learn JavaScript?</div>\n    <div style=\"align-self:flex-end;background:#4f46e5;color:white;padding:8px 12px;border-radius:8px;max-width:80%;font-size:0.9rem;\">Explore all 230 lessons on PLAY-CODE!</div>\n  </div>\n  <div style=\"display:flex;gap:6px;\">\n    <input type=\"text\" placeholder=\"Type a reply...\" style=\"flex:1;padding:8px;background:#0b1120;border:1px solid #334155;color:white;border-radius:6px;\">\n    <button class=\"demo-btn\" style=\"background:#06b6d4;color:white;padding:8px 14px;\">Send</button>\n  </div>\n</div>",
        "expectedOutput": "> [03:30 AM] NASA-KUN: Welcome to Lesson #229 of the JavaScript curriculum!\n> [03:30 AM] Bot: All 230 interactive lessons are loading seamlessly.",
        "notes": "Always sanitize user chat input before injecting into the DOM to prevent XSS vulnerabilities.",
        "commonMistakes": "Not automatically scrolling the chat container to the bottom when a new message arrives."
    })

    # 230. Tic-Tac-Toe Game Project
    b.append({
        "id": 230, "number": "230", "title": "Tic-Tac-Toe Game Project", "category": "Interactive Projects",
        "introduction": "Build an interactive Tic-Tac-Toe (Noughts & Crosses) 3x3 game with turn switching, win calculation, and tie detection.",
        "explanation": "The ultimate milestone project in the 230-lesson JavaScript curriculum. Implements board array state, 8 winning combination lines, turn indicator (X vs O), status banners, and board reset.",
        "syntax": "checkWin(board, WINNING_COMBOS)",
        "keywordsOrMethods": ["Tic-Tac-Toe", "Game Logic", "Winning Combos", "Capstone Project"],
        "codeExample": "class TicTacToeGame {\n  constructor() {\n    this.board = Array(9).fill(null);\n    this.turn = 'X';\n    this.winner = null;\n    this.winningCombos = [\n      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows\n      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols\n      [0, 4, 8], [2, 4, 6]             // Diagonals\n    ];\n  }\n  makeMove(index) {\n    if (this.board[index] || this.winner) return;\n    this.board[index] = this.turn;\n    console.log(`Player ${this.turn} moves to square #${index}`);\n    if (this.checkWin()) {\n      this.winner = this.turn;\n      console.log(`🏆 Victory! Player ${this.winner} wins the game!`);\n    } else if (this.board.every(cell => cell !== null)) {\n      console.log('🤝 Game ended in a draw (tie)!');\n    } else {\n      this.turn = this.turn === 'X' ? 'O' : 'X';\n    }\n  }\n  checkWin() {\n    return this.winningCombos.some(([a, b, c]) => \n      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]\n    );\n  }\n}\nconst game = new TicTacToeGame();\ngame.makeMove(0); // X\ngame.makeMove(3); // O\ngame.makeMove(1); // X\ngame.makeMove(4); // O\ngame.makeMove(2); // X -> Wins top row!",
        "htmlExample": "<div style=\"max-width:280px;background:#0b1120;padding:20px;border-radius:16px;text-align:center;color:white;font-family:sans-serif;\">\n  <h3 style=\"margin-top:0;color:#f8fafc;\">Tic-Tac-Toe</h3>\n  <div style=\"color:#38bdf8;margin-bottom:12px;font-weight:bold;\">Player X's Turn</div>\n  <div style=\"display:grid;grid-template-columns:repeat(3,70px);gap:8px;justify-content:center;margin-bottom:14px;\">\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#38bdf8;cursor:pointer;\">O</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#38bdf8;cursor:pointer;\">O</button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#334155;cursor:pointer;\"></button>\n    <button style=\"height:70px;background:#1e293b;border:1px solid #334155;border-radius:8px;font-size:1.8rem;color:#818cf8;cursor:pointer;\">X</button>\n  </div>\n  <button class=\"demo-btn\" style=\"background:#4f46e5;color:white;width:100%;\">Restart Game</button>\n</div>",
        "expectedOutput": "> Player X moves to square #0\n> Player O moves to square #3\n> Player X moves to square #1\n> Player O moves to square #4\n> Player X moves to square #2\n> 🏆 Victory! Player X wins the game!",
        "notes": "You have reached the final lesson of the complete 230-lesson JavaScript curriculum on CodePlay (@N4)!",
        "commonMistakes": "Allowing players to click on already occupied squares without a guard clause."
    })

    return b
