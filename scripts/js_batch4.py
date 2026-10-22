# scripts/js_batch4.py: Lessons 151 to 200
def get_batch4():
    b = []

    # 151. throw Statement
    b.append({
        "id": 151, "number": "151", "title": "throw Statement", "category": "Async JS & APIs",
        "introduction": "The throw statement throws a user-defined exception and halts execution in the current function.",
        "explanation": "Execution of the current function stops, and control passes to the first catch block in the call stack. Throwing standard Error objects provides valuable stack trace information.",
        "syntax": "throw new Error('Custom error message');",
        "keywordsOrMethods": ["throw", "Error()", "stack trace", "exception"],
        "codeExample": "function divide(a, b) {\n  if (b === 0) {\n    throw new Error('Cannot divide by zero!');\n  }\n  return a / b;\n}\ntry {\n  console.log(divide(10, 2));\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log('Caught exception:', err.message);\n}",
        "htmlExample": "<div class=\"demo-box\">throw initiates error propagation down the call stack.</div>",
        "expectedOutput": "> 5\n> Caught exception: Cannot divide by zero!",
        "notes": "Always throw instances of Error (or subclasses like TypeError) rather than plain strings.",
        "commonMistakes": "Throwing plain strings (throw 'error'), which lack filename and line number stack traces."
    })

    # 152. JSON Introduction
    b.append({
        "id": 152, "number": "152", "title": "JSON Introduction", "category": "Async JS & APIs",
        "introduction": "JSON (JavaScript Object Notation) is a lightweight, language-agnostic data-interchange format.",
        "explanation": "Derived from JavaScript object syntax, JSON represents structured data using key/value pairs and arrays. Keys must be double-quoted strings. JSON supports strings, numbers, booleans, null, arrays, and objects (no functions or symbols).",
        "syntax": '{\n  "title": "CodePlay",\n  "lessons": 230,\n  "active": true\n}',
        "keywordsOrMethods": ["JSON", "data-interchange", "double quotes"],
        "codeExample": "const rawJsonText = '{\"platform\":\"CodePlay\",\"lessons\":230,\"owner\":\"NASA-KUN\"}';\nconsole.log('Raw JSON String:', rawJsonText);\nconst parsedObj = JSON.parse(rawJsonText);\nconsole.log('Platform:', parsedObj.platform);\nconsole.log('Lessons:', parsedObj.lessons);",
        "htmlExample": "<div class=\"demo-box\">JSON is the universal standard for client-server communication.</div>",
        "expectedOutput": "> Raw JSON String: {\"platform\":\"CodePlay\",\"lessons\":230,\"owner\":\"NASA-KUN\"}\n> Platform: CodePlay\n> Lessons: 230",
        "notes": "Trailing commas and single quotes are illegal in strict JSON specification.",
        "commonMistakes": "Using single quotes in JSON strings ('key': 'val'), which causes JSON.parse to fail."
    })

    # 153. Parsing JSON
    b.append({
        "id": 153, "number": "153", "title": "Parsing JSON", "category": "Async JS & APIs",
        "introduction": "JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.",
        "explanation": "Converts serialized JSON text into native JavaScript objects or arrays. Accepts an optional reviver function to transform parsed values during deserialization.",
        "syntax": "const data = JSON.parse(text, reviver);",
        "keywordsOrMethods": ["JSON.parse()", "deserialization", "reviver"],
        "codeExample": "const payload = '{\"user\":\"Nasa\",\"joined\":\"2026-01-01\"}';\nconst parsed = JSON.parse(payload, (key, value) => {\n  if (key === 'joined') return new Date(value);\n  return value;\n});\nconsole.log('User:', parsed.user);\nconsole.log('Date object created?', parsed.joined instanceof Date);",
        "htmlExample": "<div class=\"demo-box\">JSON.parse converts strings into native objects.</div>",
        "expectedOutput": "> User: Nasa\n> Date object created? true",
        "notes": "Always wrap JSON.parse in a try/catch block when handling external network inputs.",
        "commonMistakes": "Passing undefined to JSON.parse(undefined), which throws a SyntaxError."
    })

    # 154. Stringifying JSON
    b.append({
        "id": 154, "number": "154", "title": "Stringifying JSON", "category": "Async JS & APIs",
        "introduction": "JSON.stringify() converts a JavaScript object or value to a JSON string.",
        "explanation": "Serializes JavaScript state into text suitable for network transmission or local storage. Supports replacer filters and indent spacing for pretty-printing.",
        "syntax": "const jsonStr = JSON.stringify(value, replacer, space);",
        "keywordsOrMethods": ["JSON.stringify()", "serialization", "pretty print"],
        "codeExample": "const user = { name: 'Elena', score: 95, registered: true };\nconst compactJson = JSON.stringify(user);\nconsole.log('Compact JSON:', compactJson);\nconst prettyJson = JSON.stringify(user, null, 2);\nconsole.log('Formatted JSON:\\n' + prettyJson);",
        "htmlExample": "<div class=\"demo-box\">JSON.stringify serializes objects into text representations.</div>",
        "expectedOutput": "> Compact JSON: {\"name\":\"Elena\",\"score\":95,\"registered\":true}\n> Formatted JSON:\n{\n  \"name\": \"Elena\",\n  \"score\": 95,\n  \"registered\": true\n}",
        "notes": "Properties with undefined, function, or symbol values are automatically omitted during serialization.",
        "commonMistakes": "Attempting to stringify objects with circular references (throws TypeError: circular structure)."
    })

    # 155. Fetching Data from APIs
    b.append({
        "id": 155, "number": "155", "title": "Fetching Data from APIs", "category": "Async JS & APIs",
        "introduction": "Fetching data from APIs involves requesting external endpoints and consuming JSON responses.",
        "explanation": "Modern frontend workflows rely on REST and GraphQL APIs. Best practices include checking response.ok, setting appropriate headers, handling timeouts, and displaying loading/error states.",
        "syntax": "const res = await fetch('/api/endpoint');\nif (!res.ok) throw new Error('Failed');\nconst data = await res.json();",
        "keywordsOrMethods": ["API integration", "REST", "response.ok", "JSON payload"],
        "codeExample": "async function loadCurriculumSummary() {\n  console.log('Querying curriculum API endpoint...');\n  // Simulated endpoint response\n  const mockEndpoint = {\n    status: 200,\n    ok: true,\n    json: async () => ({\n      tracks: ['HTML (166)', 'CSS (210)', 'JavaScript (230)'],\n      totalLessons: 606\n    })\n  };\n  if (mockEndpoint.ok) {\n    const payload = await mockEndpoint.json();\n    console.log('Available tracks:', payload.tracks);\n    console.log('Total platform lessons:', payload.totalLessons);\n  }\n}\nloadCurriculumSummary();",
        "htmlExample": "<div class=\"demo-box\">APIs power dynamic data communication between client and server.</div>",
        "expectedOutput": "> Querying curriculum API endpoint...\n> Available tracks: [\"HTML (166)\",\"CSS (210)\",\"JavaScript (230)\"]\n> Total platform lessons: 606",
        "notes": "Always provide user-facing fallback feedback when API network requests take time or fail.",
        "commonMistakes": "Forgetting to await both the fetch() promise AND the response.json() promise."
    })

    # 156. LocalStorage in JavaScript
    b.append({
        "id": 156, "number": "156", "title": "LocalStorage in JavaScript", "category": "Web Storage & State",
        "introduction": "localStorage provides persistent key-value storage in the browser that survives browser restarts.",
        "explanation": "Scoped per origin (protocol + domain + port). Stores up to ~5MB of data. Values are stored strictly as strings, meaning objects must be serialized with JSON.stringify.",
        "syntax": "localStorage.setItem('key', 'value');\nconst val = localStorage.getItem('key');",
        "keywordsOrMethods": ["localStorage", "setItem", "getItem", "removeItem", "clear"],
        "codeExample": "const demoStorage = {\n  data: {},\n  setItem(k, v) { this.data[k] = String(v); console.log(`Saved ${k} = ${v}`); },\n  getItem(k) { return this.data[k] || null; }\n};\ndemoStorage.setItem('theme', 'dark');\ndemoStorage.setItem('userLesson', '156');\nconsole.log('Retrieved theme:', demoStorage.getItem('theme'));",
        "htmlExample": "<div class=\"demo-box\">localStorage preserves state across sessions.</div>",
        "expectedOutput": "> Saved theme = dark\n> Saved userLesson = 156\n> Retrieved theme: dark",
        "notes": "localStorage is synchronous and blocking; avoid writing large datasets frequently.",
        "commonMistakes": "Saving an object directly without JSON.stringify: localStorage.setItem('user', {id: 1}) stores '[object Object]'."
    })

    # 157. SessionStorage in JavaScript
    b.append({
        "id": 157, "number": "157", "title": "SessionStorage in JavaScript", "category": "Web Storage & State",
        "introduction": "sessionStorage stores key-value pairs for the duration of the page session (until the tab is closed).",
        "explanation": "Opening a new tab or window creates a brand new session, even for the same URL. Ideal for temporary form drafts or single-session wizard progress.",
        "syntax": "sessionStorage.setItem('sessionKey', 'val');",
        "keywordsOrMethods": ["sessionStorage", "tab lifespan", "temporary state"],
        "codeExample": "const mockSession = {};\nmockSession['draftMessage'] = 'Drafting a new message...';\nconsole.log('Session storage item saved:', mockSession['draftMessage']);\nconsole.log('Storage clears automatically upon tab close.');",
        "htmlExample": "<div class=\"demo-box\">sessionStorage isolates state to a single browser tab lifetime.</div>",
        "expectedOutput": "> Session storage item saved: Drafting a new message...\n> Storage clears automatically upon tab close.",
        "notes": "Data survives page refreshes and page restores within the same tab.",
        "commonMistakes": "Expecting sessionStorage to be shared across two different tabs of the same website."
    })

    # 158. Cookies in JavaScript
    b.append({
        "id": 158, "number": "158", "title": "Cookies in JavaScript", "category": "Web Storage & State",
        "introduction": "Cookies are small strings of data stored in the browser and automatically sent with every HTTP request.",
        "explanation": "Managed via document.cookie. Can specify attributes such as Max-Age, Path, Domain, Secure, and SameSite. Authentication cookies should use HttpOnly (set by server) to prevent client-side XSS theft.",
        "syntax": "document.cookie = 'user=nasa; max-age=3600; path=/; SameSite=Lax';",
        "keywordsOrMethods": ["document.cookie", "HttpOnly", "SameSite", "Max-Age"],
        "codeExample": "function setMockCookie(name, val, maxAge) {\n  const cookieStr = `${name}=${encodeURIComponent(val)}; max-age=${maxAge}; path=/`;\n  console.log('Cookie header string:', cookieStr);\n}\nsetMockCookie('user_theme', 'midnight', 86400);",
        "htmlExample": "<div class=\"demo-box\">Cookies accompany network requests to the origin server.</div>",
        "expectedOutput": "> Cookie header string: user_theme=midnight; max-age=86400; path=/",
        "notes": "Always use SameSite=Lax or Strict and Secure to guard against Cross-Site Request Forgery (CSRF).",
        "commonMistakes": "Reading document.cookie directly assuming it returns an object; it returns a semicolon-delimited string."
    })

    # 159. Synchronous JavaScript
    b.append({
        "id": 159, "number": "159", "title": "Synchronous JavaScript", "category": "Runtime & Architecture",
        "introduction": "Synchronous execution processes statements line-by-line in sequential order, blocking subsequent tasks.",
        "explanation": "JavaScript has a single call stack on its main thread. In synchronous execution, each line must completely finish before the next line can begin. Long synchronous tasks cause UI freezes.",
        "syntax": "step1();\nstep2();\nstep3();",
        "keywordsOrMethods": ["synchronous", "blocking", "call stack", "single-threaded"],
        "codeExample": "console.log('1. Starting task A');\nconst start = Date.now();\nwhile (Date.now() - start < 20) { /* Brief sync work */ }\nconsole.log('2. Task A completed synchronously');\nconsole.log('3. Task B starting');",
        "htmlExample": "<div class=\"demo-box\">Synchronous code blocks the thread until completion.</div>",
        "expectedOutput": "> 1. Starting task A\n> 2. Task A completed synchronously\n> 3. Task B starting",
        "notes": "Heavy computation should be offloaded to Web Workers to keep the main UI thread responsive.",
        "commonMistakes": "Performing intensive data processing synchronously on the main thread, freezing user scrolling."
    })

    # 160. Asynchronous JavaScript
    b.append({
        "id": 160, "number": "160", "title": "Asynchronous JavaScript", "category": "Runtime & Architecture",
        "introduction": "Asynchronous JavaScript allows time-consuming tasks to run in the background without blocking the UI thread.",
        "explanation": "Tasks like network requests, timers, and file I/O are handed off to browser Web APIs. Once finished, their callbacks are queued and processed via the Event Loop when the call stack clears.",
        "syntax": "setTimeout(() => { ... }, 0);",
        "keywordsOrMethods": ["asynchronous", "non-blocking", "Web APIs", "task queue"],
        "codeExample": "console.log('1. Main script starts');\nsetTimeout(() => {\n  console.log('3. Async timer callback executed');\n}, 0);\nconsole.log('2. Main script continues without blocking');",
        "htmlExample": "<div class=\"demo-box\">Async tasks run without blocking the call stack.</div>",
        "expectedOutput": "> 1. Main script starts\n> 2. Main script continues without blocking\n> 3. Async timer callback executed",
        "notes": "Even with a 0ms delay, setTimeout is deferred until the synchronous call stack is completely empty.",
        "commonMistakes": "Assuming asynchronous code runs simultaneously on multiple CPU cores in the same context."
    })

    # 161. Event Loop
    b.append({
        "id": 161, "number": "161", "title": "Event Loop", "category": "Runtime & Architecture",
        "introduction": "The Event Loop continuously coordinates execution between the call stack, microtask queue, and macrotask queue.",
        "explanation": "If the call stack is empty, the Event Loop first drains ALL pending microtasks (Promises, queueMicrotask). Once microtasks are cleared, it pulls the next macrotask (setTimeout, setInterval, UI events).",
        "syntax": "// Order: Synchronous -> Microtasks -> Macrotasks",
        "keywordsOrMethods": ["Event Loop", "Call Stack", "Microtasks", "Macrotasks"],
        "codeExample": "console.log('1. Sync Log');\nsetTimeout(() => console.log('4. Macrotask (setTimeout)'), 0);\nPromise.resolve().then(() => console.log('3. Microtask (Promise)'));\nconsole.log('2. Sync Log 2');",
        "htmlExample": "<div class=\"demo-box\">Microtasks always execute before the next macrotask.</div>",
        "expectedOutput": "> 1. Sync Log\n> 2. Sync Log 2\n> 3. Microtask (Promise)\n> 4. Macrotask (setTimeout)",
        "notes": "Understanding microtask priority is critical for mastering Promise execution timing.",
        "commonMistakes": "Expecting setTimeout(fn, 0) to execute before Promise.resolve().then(fn)."
    })

    # 162. JavaScript Callbacks
    b.append({
        "id": 162, "number": "162", "title": "JavaScript Callbacks", "category": "Runtime & Architecture",
        "introduction": "Callbacks are the fundamental mechanism for handling events and deferred asynchronous notifications.",
        "explanation": "A function is registered to be executed when an asynchronous operation (file load, timer, network packet, mouse click) finishes. Node.js historically used the 'error-first' callback convention (err, data).",
        "syntax": "fs.readFile('data.txt', (err, data) => { ... });",
        "keywordsOrMethods": ["callbacks", "error-first callback", "event listener"],
        "codeExample": "function performStep(stepName, callback) {\n  console.log(`Starting ${stepName}...`);\n  callback(null, `Result of ${stepName}`);\n}\nperformStep('Asset Loading', (err, result) => {\n  if (err) console.error(err);\n  else console.log('Callback received:', result);\n});",
        "htmlExample": "<div class=\"demo-box\">Callbacks provide notifications upon task completion.</div>",
        "expectedOutput": "> Starting Asset Loading...\n> Callback received: Result of Asset Loading",
        "notes": "Modern code wraps callbacks in Promises using util.promisify or custom Promise constructors.",
        "commonMistakes": "Not checking the error parameter in error-first callbacks."
    })

    # 163. setTimeout() Method
    b.append({
        "id": 163, "number": "163", "title": "setTimeout() Method", "category": "Runtime & Architecture",
        "introduction": "setTimeout() sets a timer which executes a function once the timer expires.",
        "explanation": "Schedules a macrotask after delay milliseconds. Returns a positive integer timeoutID which can be passed to clearTimeout() to cancel execution before it runs.",
        "syntax": "const timerId = setTimeout(callback, delayMs, ...args);",
        "keywordsOrMethods": ["setTimeout", "delay", "timerID"],
        "codeExample": "console.log('Timer set for 30ms...');\nconst timerId = setTimeout((msg) => {\n  console.log('Delayed message:', msg);\n}, 30, 'Hello from setTimeout!');",
        "htmlExample": "<div class=\"demo-box\">setTimeout schedules delayed execution.</div>",
        "expectedOutput": "> Timer set for 30ms...\n> Delayed message: Hello from setTimeout!",
        "notes": "Browser background tabs enforce a minimum timer delay of 1000ms (1 second) to conserve battery.",
        "commonMistakes": "Passing a string to setTimeout (setTimeout('code', 100)) which invokes eval-like parsing."
    })

    # 164. setInterval() Method
    b.append({
        "id": 164, "number": "164", "title": "setInterval() Method", "category": "Runtime & Architecture",
        "introduction": "setInterval() repeatedly calls a function with a fixed time delay between each call.",
        "explanation": "Executes until the window is closed or clearInterval() is called with the returned intervalID. If an execution takes longer than the interval, runs can overlap in older systems.",
        "syntax": "const intervalId = setInterval(callback, intervalMs);",
        "keywordsOrMethods": ["setInterval", "repeated timer", "intervalID"],
        "codeExample": "let ticks = 0;\nconst interval = setInterval(() => {\n  ticks++;\n  console.log(`Tick #${ticks}`);\n  if (ticks >= 3) {\n    clearInterval(interval);\n    console.log('Interval stopped.');\n  }\n}, 20);",
        "htmlExample": "<div class=\"demo-box\">setInterval triggers repeated executions.</div>",
        "expectedOutput": "> Tick #1\n> Tick #2\n> Tick #3\n> Interval stopped.",
        "notes": "For animation, requestAnimationFrame() is superior to setInterval as it syncs with display refresh rate.",
        "commonMistakes": "Forgetting to store the intervalID, making it impossible to stop the repeating timer later."
    })

    # 165. clearTimeout() Method
    b.append({
        "id": 165, "number": "165", "title": "clearTimeout() Method", "category": "Runtime & Architecture",
        "introduction": "clearTimeout() cancels a timeout previously established by calling setTimeout().",
        "explanation": "If the task has not yet executed, clearTimeout cancels it completely and prevents the callback from running. Passing an invalid ID does nothing silently.",
        "syntax": "clearTimeout(timeoutId);",
        "keywordsOrMethods": ["clearTimeout", "timer cancellation"],
        "codeExample": "const timer = setTimeout(() => {\n  console.log('This will never execute!');\n}, 100);\nclearTimeout(timer);\nconsole.log('Timeout cancelled before execution.');",
        "htmlExample": "<div class=\"demo-box\">clearTimeout aborts scheduled timeouts.</div>",
        "expectedOutput": "> Timeout cancelled before execution.",
        "notes": "Crucial for implementing debouncing search inputs and preventing memory leaks in unmounted UI components.",
        "commonMistakes": "Passing the callback function to clearTimeout instead of the returned numeric timer ID."
    })

    # 166. clearInterval() Method
    b.append({
        "id": 166, "number": "166", "title": "clearInterval() Method", "category": "Runtime & Architecture",
        "introduction": "clearInterval() cancels a repeating timed action previously established by setInterval().",
        "explanation": "Stops the repeating execution cycle immediately. The timer will not fire any further callbacks.",
        "syntax": "clearInterval(intervalId);",
        "keywordsOrMethods": ["clearInterval", "halt repeating timer"],
        "codeExample": "let count = 0;\nconst loop = setInterval(() => {\n  count++;\n  if (count === 1) {\n    console.log('Running first and only tick.');\n    clearInterval(loop);\n  }\n}, 10);",
        "htmlExample": "<div class=\"demo-box\">clearInterval stops repeating loops.</div>",
        "expectedOutput": "> Running first and only tick.",
        "notes": "Always clean up intervals when navigating away from single page application views.",
        "commonMistakes": "Not clearing intervals in single-page apps, leading to ghost intervals accumulating over time."
    })

    # 167. Strict Mode
    b.append({
        "id": 167, "number": "167", "title": "Strict Mode", "category": "Runtime & Architecture",
        "introduction": "Strict mode ('use strict') enforces cleaner, safer JavaScript by catching silent errors.",
        "explanation": "Eliminates silent failures by throwing errors on accidental globals, duplicate parameter names, deleting variables, and assigns 'this' as undefined in standalone functions. Modules and classes are in strict mode automatically.",
        "syntax": "'use strict';",
        "keywordsOrMethods": ["'use strict'", "strict mode", "prevents globals"],
        "codeExample": "(function() {\n  'use strict';\n  console.log('Strict mode active.');\n  try {\n    // undeclaredVar = 42; // Throws ReferenceError in strict mode\n    console.log('Global pollution prevented.');\n  } catch (e) {\n    console.log(e.message);\n  }\n})();",
        "htmlExample": "<div class=\"demo-box\">Strict mode prevents common JavaScript pitfalls.</div>",
        "expectedOutput": "> Strict mode active.\n> Global pollution prevented.",
        "notes": "All modern ES modules (<script type=\"module\">) run in strict mode by default.",
        "commonMistakes": "Placing non-comment code before 'use strict' at the top of a file, which disables it."
    })

    # 168. Garbage Collection
    b.append({
        "id": 168, "number": "168", "title": "Garbage Collection", "category": "Runtime & Architecture",
        "introduction": "Garbage collection (GC) is the automatic process of reclaiming memory occupied by unreachable objects.",
        "explanation": "Modern JavaScript engines use a 'Mark-and-Sweep' algorithm. Starting from root references (global window, current call stack local variables), reachable objects are marked. Any unmarked memory is automatically swept and freed.",
        "syntax": "// Automatic in JS runtime via Mark-and-Sweep",
        "keywordsOrMethods": ["garbage collection", "mark-and-sweep", "reachability", "heap"],
        "codeExample": "let cache = { data: 'Valuable assets' };\nconsole.log('Cache allocated:', cache.data);\ncache = null; // Object is now unreachable; eligible for GC reclamation\nconsole.log('Reference severed. Memory eligible for GC.');",
        "htmlExample": "<div class=\"demo-box\">Garbage collectors reclaim memory when references reach zero or become unreachable.</div>",
        "expectedOutput": "> Cache allocated: Valuable assets\n> Reference severed. Memory eligible for GC.",
        "notes": "You cannot force garbage collection manually in client-side browser JavaScript.",
        "commonMistakes": "Assuming circular references prevent garbage collection; mark-and-sweep handles circular references correctly as long as the entire island is unreachable from roots."
    })

    # 169. Memory Leaks
    b.append({
        "id": 169, "number": "169", "title": "Memory Leaks", "category": "Runtime & Architecture",
        "introduction": "A memory leak occurs when memory that is no longer needed is not released because references persist.",
        "explanation": "Common causes in JS include forgotten event listeners on removed DOM nodes, Uncleared setIntervals, lingering closures holding heavy objects, and unintended global variables.",
        "syntax": "element.removeEventListener('click', handler);",
        "keywordsOrMethods": ["memory leaks", "detached DOM", "clearing listeners"],
        "codeExample": "const leakPrevention = {\n  handler: () => console.log('Event handled'),\n  setup(el) {\n    el.addEventListener('click', this.handler);\n  },\n  cleanup(el) {\n    el.removeEventListener('click', this.handler);\n    console.log('Listener removed to prevent memory leaks.');\n  }\n};\nconst dummy = document.createElement('div');\nleakPrevention.setup(dummy);\nleakPrevention.cleanup(dummy);",
        "htmlExample": "<div class=\"demo-box\">Always clean up event listeners and timers.</div>",
        "expectedOutput": "> Listener removed to prevent memory leaks.",
        "notes": "Use browser devtools Memory tab to record heap snapshots and detect detached DOM nodes.",
        "commonMistakes": "Passing an inline arrow function to addEventListener, making it impossible to remove later with removeEventListener."
    })

    # 170. Debouncing and Throttling
    b.append({
        "id": 170, "number": "170", "title": "Debouncing and Throttling", "category": "Runtime & Architecture",
        "introduction": "Debouncing and throttling control the rate at which an event handler is executed.",
        "explanation": "Debouncing delays execution until a certain amount of time has passed since the last event trigger (e.g. typing in search inputs). Throttling enforces a maximum frequency of execution (e.g. once every 200ms during scroll/resize).",
        "syntax": "function debounce(fn, delay) { ... }\nfunction throttle(fn, limit) { ... }",
        "keywordsOrMethods": ["debounce", "throttle", "rate limiting", "performance"],
        "codeExample": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\nconst logSearch = debounce(q => console.log('Executing search for:', q), 50);\nlogSearch('h');\nlogSearch('he');\nlogSearch('hello'); // Only 'hello' will execute after pause",
        "htmlExample": "<div class=\"demo-box\">Debounce groups burst events into a single invocation.</div>",
        "expectedOutput": "> Executing search for: hello",
        "notes": "Use debounce for search suggestions and resize recalcs. Use throttle for scroll tracking and game loops.",
        "commonMistakes": "Invoking the debounced function directly instead of storing the debounced wrapper."
    })

    # 171. Execution Context
    b.append({
        "id": 171, "number": "171", "title": "Execution Context", "category": "Runtime & Architecture",
        "introduction": "An Execution Context is an environment in which JavaScript code is evaluated and executed.",
        "explanation": "Consists of the Global Execution Context and Function Execution Contexts. Each context has two phases: Creation Phase (creation of Variable Object, Scope Chain, and 'this' binding) and Execution Phase (code runs line-by-line).",
        "syntax": "// Global Context -> Pushes Function Context to Call Stack",
        "keywordsOrMethods": ["execution context", "call stack", "creation phase", "execution phase"],
        "codeExample": "function first() {\n  console.log('Inside first() execution context');\n  second();\n  console.log('Exiting first() execution context');\n}\nfunction second() {\n  console.log('Inside second() execution context');\n}\nfirst();",
        "htmlExample": "<div class=\"demo-box\">Execution contexts manage stack frames and lexical environments.</div>",
        "expectedOutput": "> Inside first() execution context\n> Inside second() execution context\n> Exiting first() execution context",
        "notes": "Maximum call stack size errors (Stack Overflow) occur when too many contexts are pushed via unbounded recursion.",
        "commonMistakes": "Writing recursive functions without an exit condition, overflowing the call stack."
    })

    # 172. Lexical Scope
    b.append({
        "id": 172, "number": "172", "title": "Lexical Scope", "category": "Runtime & Architecture",
        "introduction": "Lexical scope means that variable accessibility is determined by where variables and blocks are authored in code.",
        "explanation": "Also called static scoping. Inner functions have access to variables declared in their outer parent scopes based on the physical text structure, regardless of where the function is ultimately called.",
        "syntax": "function outer() {\n  const x = 10;\n  function inner() { console.log(x); }\n}",
        "keywordsOrMethods": ["lexical scope", "static scoping", "nested scope"],
        "codeExample": "const globalVar = 'Global';\nfunction outerFunc() {\n  const outerVar = 'Outer';\n  function innerFunc() {\n    const innerVar = 'Inner';\n    console.log(`${innerVar} -> ${outerVar} -> ${globalVar}`);\n  }\n  innerFunc();\n}\nouterFunc();",
        "htmlExample": "<div class=\"demo-box\">Lexical scope resolves identifiers based on location in source code.</div>",
        "expectedOutput": "> Inner -> Outer -> Global",
        "notes": "Lexical scope is locked in place during compilation and does not change based on runtime call sites.",
        "commonMistakes": "Thinking lexical scope depends on where a function is called rather than where it was defined."
    })

    # 173. Scope Chain
    b.append({
        "id": 173, "number": "173", "title": "Scope Chain", "category": "Runtime & Architecture",
        "introduction": "The scope chain is the hierarchy of scopes traversed when resolving variable identifiers.",
        "explanation": "When resolving a variable, JavaScript starts at the local scope. If not found, it traverses upward to the parent lexical scope, continuing until reaching the global scope. If still not found, a ReferenceError is thrown.",
        "syntax": "Local Scope -> Outer Function Scope -> Global Scope",
        "keywordsOrMethods": ["scope chain", "identifier resolution", "ReferenceError"],
        "codeExample": "const appTitle = 'CodePlay';\nfunction levelOne() {\n  const level = 1;\n  function levelTwo() {\n    console.log(`Resolved: ${appTitle} at Level ${level}`);\n  }\n  levelTwo();\n}\nlevelOne();",
        "htmlExample": "<div class=\"demo-box\">The scope chain searches upward until resolving or failing.</div>",
        "expectedOutput": "> Resolved: CodePlay at Level 1",
        "notes": "Looking up variables across deep scope chains is slightly slower than local variables; cache globals locally in performance-critical loops.",
        "commonMistakes": "Attempting to access variables from a child scope in the parent scope (scope resolution only travels upward)."
    })

    # 174. Creating and Using Regular Expressions
    b.append({
        "id": 174, "number": "174", "title": "Creating and Using Regular Expressions", "category": "Regular Expressions",
        "introduction": "Regular expressions are patterns used to match character combinations in strings.",
        "explanation": "Created using regex literals (/pattern/flags) or the RegExp constructor new RegExp('pattern', 'flags'). Common flags include 'g' (global), 'i' (case-insensitive), and 'm' (multiline).",
        "syntax": "const regex = /pattern/flags;\nconst regex2 = new RegExp('pattern', 'flags');",
        "keywordsOrMethods": ["RegExp", "/pattern/", "flags (g, i, m)"],
        "codeExample": "const pattern = /javascript/i; // case-insensitive\nconst text = 'Master Modern JavaScript';\nconsole.log('Matches pattern?', pattern.test(text));",
        "htmlExample": "<div class=\"demo-box\">Regular expressions power advanced pattern searching.</div>",
        "expectedOutput": "> Matches pattern? true",
        "notes": "Regex literals are compiled when the script is loaded, providing better performance if the pattern remains constant.",
        "commonMistakes": "Forgetting that backslashes must be doubled when using the string constructor: new RegExp('\\\\d+') vs /\\d+/."
    })

    # 175. Pattern Matching with RegExp
    b.append({
        "id": 175, "number": "175", "title": "Pattern Matching with RegExp", "category": "Regular Expressions",
        "introduction": "Pattern matching tests and extracts complex string structures using regex token classes.",
        "explanation": "Tokens include \\d (digits), \\w (word characters), \\s (whitespace), anchors (^ start, $ end), quantifiers (+, *, ?, {min,max}), and character classes [a-z].",
        "syntax": "const emailRegex = /^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i;",
        "keywordsOrMethods": ["\\d", "\\w", "\\s", "^ anchor", "$ anchor", "+ quantifier"],
        "codeExample": "const phonePattern = /^\\d{3}-\\d{3}-\\d{4}$/;\nconsole.log('Valid format (555-123-4567)?', phonePattern.test('555-123-4567'));\nconsole.log('Invalid format (5551234)?', phonePattern.test('5551234'));",
        "htmlExample": "<div class=\"demo-box\">RegExp tokens define strict validation contracts.</div>",
        "expectedOutput": "> Valid format (555-123-4567)? true\n> Invalid format (5551234)? false",
        "notes": "Always use anchors (^ and $) when validating that an entire string matches a format.",
        "commonMistakes": "Omitting ^ and $, which allows partial matches inside otherwise invalid strings."
    })

    # 176. test() Method
    b.append({
        "id": 176, "number": "176", "title": "test() Method", "category": "Regular Expressions",
        "introduction": "RegExp.prototype.test() executes a search for a match between a regular expression and a string.",
        "explanation": "Returns true if a match is found, false otherwise. Highly optimized for boolean validation checks because it doesn't build match result arrays.",
        "syntax": "const isMatch = regex.test(str);",
        "keywordsOrMethods": ["RegExp.prototype.test()", "boolean match", "validation"],
        "codeExample": "const hasDigits = /\\d/;\nconsole.log('Has digits (abc12)?', hasDigits.test('abc12'));\nconsole.log('Has digits (puretext)?', hasDigits.test('puretext'));",
        "htmlExample": "<div class=\"demo-box\">test() is the fastest method for boolean pattern matching.</div>",
        "expectedOutput": "> Has digits (abc12)? true\n> Has digits (puretext)? false",
        "notes": "Beware using global flag /g with test(): it advances lastIndex, causing consecutive tests on the same string to alternate true/false.",
        "commonMistakes": "Using the /g flag with .test() in validation loops."
    })

    # 177. exec() Method
    b.append({
        "id": 177, "number": "177", "title": "exec() Method", "category": "Regular Expressions",
        "introduction": "RegExp.prototype.exec() searches a string for a match and returns an array of information or null.",
        "explanation": "Returns a detailed match result array containing captured groups, match index, and input text. When used with the 'g' flag, repeated calls iterate through all matches via regex.lastIndex.",
        "syntax": "const result = regex.exec(str);",
        "keywordsOrMethods": ["exec()", "captured groups", "lastIndex"],
        "codeExample": "const tagRegex = /#(\\w+)/g;\nconst tweet = 'Learning #javascript and #webdev today!';\nlet match;\nwhile ((match = tagRegex.exec(tweet)) !== null) {\n  console.log(`Found tag: ${match[0]}, Group: ${match[1]} at index ${match.index}`);\n}",
        "htmlExample": "<div class=\"demo-box\">exec captures matching groups and coordinates.</div>",
        "expectedOutput": "> Found tag: #javascript, Group: javascript at index 9\n> Found tag: #webdev, Group: webdev at index 25",
        "notes": "matchAll() is often easier than while(exec()) in modern ES2020 code.",
        "commonMistakes": "Forgetting the 'g' flag when using exec in a while loop, resulting in an infinite loop."
    })

    # 178. match() Method
    b.append({
        "id": 178, "number": "178", "title": "match() Method", "category": "Regular Expressions",
        "introduction": "String.prototype.match() retrieves the result of matching a string against a regular expression.",
        "explanation": "Called on the string. Without the 'g' flag, returns the first match with capturing groups and index. With the 'g' flag, returns an array of all matching substrings (without capturing groups).",
        "syntax": "const matches = str.match(regex);",
        "keywordsOrMethods": ["match()", "string regex", "match array"],
        "codeExample": "const sentence = 'The year is 2026, lesson #178.';\nconst numbers = sentence.match(/\\d+/g);\nconsole.log('Extracted numbers:', numbers);",
        "htmlExample": "<div class=\"demo-box\">match extracts matching substrings into an array.</div>",
        "expectedOutput": "> Extracted numbers: [\"2026\",\"178\"]",
        "notes": "If no match is found, match() returns null, not an empty array.",
        "commonMistakes": "Not checking if match() is null before attempting to access index [0]."
    })

    # 179. replace() Method
    b.append({
        "id": 179, "number": "179", "title": "replace() Method", "category": "Regular Expressions",
        "introduction": "String.prototype.replace() returns a new string with one or all matches of a pattern replaced.",
        "explanation": "If the pattern is a string, only the FIRST occurrence is replaced. If the pattern is a RegExp with the 'g' flag, all occurrences are replaced. Supports replacement tokens ($1, $& ) or a replacer function.",
        "syntax": "const result = str.replace(pattern, replacement);",
        "keywordsOrMethods": ["replace()", "regex replacement", "$1 group replacement"],
        "codeExample": "const message = 'Hello World, Welcome to the World of Code!';\nconst replacedFirst = message.replace('World', 'Universe');\nconsole.log('First replaced:', replacedFirst);\nconst replacedAll = message.replace(/World/g, 'Universe');\nconsole.log('All replaced with /g:', replacedAll);",
        "htmlExample": "<div class=\"demo-box\">replace transforms strings using literal or regex patterns.</div>",
        "expectedOutput": "> First replaced: Hello Universe, Welcome to the World of Code!\n> All replaced with /g: Hello Universe, Welcome to the Universe of Code!",
        "notes": "Does not mutate the original string; returns a new string.",
        "commonMistakes": "Expecting str.replace('str', 'rep') to replace all instances (use replaceAll or /g)."
    })

    # 180. replaceAll() Method
    b.append({
        "id": 180, "number": "180", "title": "replaceAll() Method", "category": "Regular Expressions",
        "introduction": "replaceAll() returns a new string with all matches of a pattern replaced by a replacement.",
        "explanation": "Introduced in ES2021 to replace all substring occurrences without needing a regular expression with the /g flag.",
        "syntax": "const clean = str.replaceAll('apple', 'orange');",
        "keywordsOrMethods": ["replaceAll()", "ES2021", "global string replacement"],
        "codeExample": "const recipe = '1 cup sugar, 2 tbsp sugar, sprinkle of sugar';\nconst updated = recipe.replaceAll('sugar', 'honey');\nconsole.log('Updated recipe:', updated);",
        "htmlExample": "<div class=\"demo-box\">replaceAll replaces every matching instance easily.</div>",
        "expectedOutput": "> Updated recipe: 1 cup honey, 2 tbsp honey, sprinkle of honey",
        "notes": "If passing a RegExp to replaceAll, it MUST include the 'g' flag, otherwise a TypeError is thrown.",
        "commonMistakes": "Passing a non-global RegExp to replaceAll() (throws TypeError)."
    })

    # 181. search() Method
    b.append({
        "id": 181, "number": "181", "title": "search() Method", "category": "Regular Expressions",
        "introduction": "search() executes a search for a match between a regular expression and this String.",
        "explanation": "Returns the index of the first match of the regular expression in the string, or -1 if no match was found. Similar to indexOf(), but accepts regex patterns.",
        "syntax": "const index = str.search(regexp);",
        "keywordsOrMethods": ["search()", "regex index search", "-1 if absent"],
        "codeExample": "const log = 'Timestamp: 2026-10-21 Error: 404 Not Found';\nconst errorIndex = log.search(/Error: \\d+/);\nconsole.log('Error pattern located at character index:', errorIndex);",
        "htmlExample": "<div class=\"demo-box\">search returns the character index of a regex match.</div>",
        "expectedOutput": "> Error pattern located at character index: 22",
        "notes": "search() ignores the 'g' flag and always returns the index of the first match.",
        "commonMistakes": "Expecting search() to return matched text instead of a numeric index."
    })

    # 182. split() with Regex
    b.append({
        "id": 182, "number": "182", "title": "split() with Regex", "category": "Regular Expressions",
        "introduction": "split() with a regular expression divides a string into substrings based on variable patterns.",
        "explanation": "Useful for splitting strings with inconsistent delimiters like multiple spaces, commas, semicolons, or tabs.",
        "syntax": "const parts = str.split(/[,;\\s]+/);",
        "keywordsOrMethods": ["split() with regex", "dynamic delimiter", "tokenization"],
        "codeExample": "const data = 'HTML5,  CSS3; JavaScript   Python';\nconst tokens = data.split(/[,;\\s]+/);\nconsole.log('Clean tokens:', tokens);",
        "htmlExample": "<div class=\"demo-box\">split with regex handles variable whitespace and delimiters.</div>",
        "expectedOutput": "> Clean tokens: [\"HTML5\",\"CSS3\",\"JavaScript\",\"Python\"]",
        "notes": "If the regex contains capturing parentheses /([,;])/, the matched separators are also included in the output array.",
        "commonMistakes": "Accidentally capturing separators with /([,;])/ when only the tokens were desired."
    })

    # 183. Math.round() Method
    b.append({
        "id": 183, "number": "183", "title": "Math.round() Method", "category": "Math Object",
        "introduction": "Math.round() returns the value of a number rounded to the nearest integer.",
        "explanation": "If the fractional portion is 0.5 or greater, the argument is rounded up to the next higher integer; otherwise it is rounded down.",
        "syntax": "Math.round(x)",
        "keywordsOrMethods": ["Math.round()", "nearest integer", "standard rounding"],
        "codeExample": "console.log(Math.round(20.4)); // 20\nconsole.log(Math.round(20.5)); // 21\nconsole.log(Math.round(-20.5)); // -20 (rounds towards +infinity for .5)",
        "htmlExample": "<div class=\"demo-box\">Math.round rounds to the closest whole integer.</div>",
        "expectedOutput": "> 20\n> 21\n> -20",
        "notes": "For rounding to decimal places, multiply by 10^N, round, and divide back.",
        "commonMistakes": "Expecting Math.round(-1.5) to equal -2; in JS, -1.5 rounds to -1 because -1 is greater than -1.5."
    })

    # 184. Math.floor() Method
    b.append({
        "id": 184, "number": "184", "title": "Math.floor() Method", "category": "Math Object",
        "introduction": "Math.floor() returns the largest integer less than or equal to a given number.",
        "explanation": "Always rounds downwards towards negative infinity. Essential for generating random integers within a range.",
        "syntax": "Math.floor(x)",
        "keywordsOrMethods": ["Math.floor()", "round down", "integer rounding"],
        "codeExample": "console.log(Math.floor(4.99)); // 4\nconsole.log(Math.floor(4.01)); // 4\nconsole.log(Math.floor(-4.01)); // -5",
        "htmlExample": "<div class=\"demo-box\">Math.floor rounds down towards negative infinity.</div>",
        "expectedOutput": "> 4\n> 4\n> -5",
        "notes": "Math.floor is different from Math.trunc for negative numbers (-4.01 floor is -5, trunc is -4).",
        "commonMistakes": "Using Math.floor on negative numbers expecting truncation toward zero."
    })

    # 185. Math.ceil() Method
    b.append({
        "id": 185, "number": "185", "title": "Math.ceil() Method", "category": "Math Object",
        "introduction": "Math.ceil() returns the smallest integer greater than or equal to a given number.",
        "explanation": "Always rounds upwards towards positive infinity. Commonly used to calculate pagination page counts (totalItems / itemsPerPage).",
        "syntax": "Math.ceil(x)",
        "keywordsOrMethods": ["Math.ceil()", "round up", "pagination pages"],
        "codeExample": "const totalItems = 230;\nconst pageSize = 25;\nconst totalPages = Math.ceil(totalItems / pageSize);\nconsole.log(`230 lessons at 25 per page requires: ${totalPages} pages`);",
        "htmlExample": "<div class=\"demo-box\">Math.ceil calculates ceiling values and page counts.</div>",
        "expectedOutput": "> 230 lessons at 25 per page requires: 10 pages",
        "notes": "Math.ceil(4.0) returns 4 (exact integers are untouched).",
        "commonMistakes": "Using Math.round instead of Math.ceil for pagination, leaving orphan items without a page."
    })

    # 186. Math.max() Method
    b.append({
        "id": 186, "number": "186", "title": "Math.max() Method", "category": "Math Object",
        "introduction": "Math.max() returns the largest of the zero or more numbers given as input parameters.",
        "explanation": "Takes comma-separated arguments. If an array needs to be checked, spread it with Math.max(...arr). If any argument is NaN or cannot be converted to number, returns NaN.",
        "syntax": "Math.max(val1, val2, ...);",
        "keywordsOrMethods": ["Math.max()", "maximum value", "spread array"],
        "codeExample": "console.log('Max of list:', Math.max(10, 45, 99, 2));\nconst highScores = [120, 450, 310, 890];\nconsole.log('Max from array:', Math.max(...highScores));",
        "htmlExample": "<div class=\"demo-box\">Math.max identifies the highest numeric value.</div>",
        "expectedOutput": "> Max of list: 99\n> Max from array: 890",
        "notes": "Math.max() with no arguments returns -Infinity.",
        "commonMistakes": "Passing an array directly: Math.max([1, 2, 3]) returns NaN (use spread ...)."
    })

    # 187. Math.min() Method
    b.append({
        "id": 187, "number": "187", "title": "Math.min() Method", "category": "Math Object",
        "introduction": "Math.min() returns the smallest of the numbers given as input parameters.",
        "explanation": "The complement of Math.max(). If no arguments are given, it returns Infinity. Spread arrays to find the minimum value in a list.",
        "syntax": "Math.min(val1, val2, ...);",
        "keywordsOrMethods": ["Math.min()", "minimum value", "spread array"],
        "codeExample": "console.log('Min of list:', Math.min(10, 45, 99, 2));\nconst temperatures = [12, -4, 5, 0];\nconsole.log('Lowest temperature:', Math.min(...temperatures));",
        "htmlExample": "<div class=\"demo-box\">Math.min finds the lowest numeric value.</div>",
        "expectedOutput": "> Min of list: 2\n> Lowest temperature: -4",
        "notes": "Useful for clamping numbers: Math.min(Math.max(val, min), max).",
        "commonMistakes": "Passing strings containing non-numeric characters which causes Math.min to return NaN."
    })

    # 188. Math.random() Method
    b.append({
        "id": 188, "number": "188", "title": "Math.random() Method", "category": "Math Object",
        "introduction": "Math.random() returns a pseudo-random floating-point number in the range [0, 1).",
        "explanation": "Generates a floating-point number from 0 (inclusive) up to but not including 1 (exclusive). Scaled and shifted using Math.floor to generate random integers within any desired range.",
        "syntax": "const rand = Math.random();",
        "keywordsOrMethods": ["Math.random()", "pseudo-random", "random integer"],
        "codeExample": "function getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nconsole.log('Random roll (1-6):', getRandomInt(1, 6));\nconsole.log('Random percentage:', (Math.random() * 100).toFixed(1) + '%');",
        "htmlExample": "<div class=\"demo-box\">Math.random generates pseudo-random numbers.</div>",
        "expectedOutput": "> Random roll (1-6): 4\n> Random percentage: 56.4%",
        "notes": "Math.random() is NOT cryptographically secure. Use crypto.getRandomValues() for security-critical tasks.",
        "commonMistakes": "Using Math.random() for passwords or security tokens instead of crypto.getRandomValues()."
    })

    # 189. Math.abs() Method
    b.append({
        "id": 189, "number": "189", "title": "Math.abs() Method", "category": "Math Object",
        "introduction": "Math.abs() returns the absolute value of a number, stripping any negative sign.",
        "explanation": "The distance of a number from zero on the number line. If the input is positive or zero, returns the number; if negative, returns its negation.",
        "syntax": "Math.abs(x)",
        "keywordsOrMethods": ["Math.abs()", "absolute value", "distance"],
        "codeExample": "console.log(Math.abs(-42)); // 42\nconsole.log(Math.abs(42));  // 42\nconst diff = Math.abs(100 - 150);\nconsole.log('Absolute difference:', diff);",
        "htmlExample": "<div class=\"demo-box\">Math.abs guarantees non-negative numeric magnitude.</div>",
        "expectedOutput": "> 42\n> 42\n> Absolute difference: 50",
        "notes": "Math.abs('-5') coerces the string to -5 and returns 5.",
        "commonMistakes": "Passing an empty array or null (which coerce to 0, returning 0)."
    })

    # 190. Math.pow() Method
    b.append({
        "id": 190, "number": "190", "title": "Math.pow() Method", "category": "Math Object",
        "introduction": "Math.pow() returns the base to the exponent power (base^exponent).",
        "explanation": "Equivalent to the modern exponentiation operator (**). Supports fractional exponents for calculating roots.",
        "syntax": "Math.pow(base, exponent)",
        "keywordsOrMethods": ["Math.pow()", "exponentiation", "** operator"],
        "codeExample": "console.log('2^8 =', Math.pow(2, 8)); // 256\nconsole.log('10^3 =', Math.pow(10, 3)); // 1000\nconsole.log('Equivalent to **:', 2 ** 8);",
        "htmlExample": "<div class=\"demo-box\">Math.pow computes powers and polynomial terms.</div>",
        "expectedOutput": "> 2^8 = 256\n> 10^3 = 1000\n> Equivalent to **: 256",
        "notes": "Modern code generally prefers the ** operator for readability.",
        "commonMistakes": "Using the ^ caret symbol for exponentiation; in JavaScript, ^ is the bitwise XOR operator!"
    })

    # 191. Math.sqrt() Method
    b.append({
        "id": 191, "number": "191", "title": "Math.sqrt() Method", "category": "Math Object",
        "introduction": "Math.sqrt() returns the square root of a number.",
        "explanation": "If the number is negative, Math.sqrt() returns NaN because the square root of a negative number is imaginary in the real number system.",
        "syntax": "Math.sqrt(x)",
        "keywordsOrMethods": ["Math.sqrt()", "square root", "radical"],
        "codeExample": "console.log('Square root of 64:', Math.sqrt(64));\nconsole.log('Square root of 144:', Math.sqrt(144));\nconsole.log('Hypotenuse (3, 4):', Math.sqrt(3**2 + 4**2));",
        "htmlExample": "<div class=\"demo-box\">Math.sqrt calculates square roots.</div>",
        "expectedOutput": "> Square root of 64: 8\n> Square root of 144: 12\n> Hypotenuse (3, 4): 5",
        "notes": "Math.hypot(a, b) calculates the Euclidean distance without overflow.",
        "commonMistakes": "Passing negative numbers expecting complex number support (returns NaN)."
    })

    # 192. Math.trunc() Method
    b.append({
        "id": 192, "number": "192", "title": "Math.trunc() Method", "category": "Math Object",
        "introduction": "Math.trunc() returns the integer part of a number by removing any fractional digits.",
        "explanation": "Introduced in ES6. Discards all fractional digits, effectively rounding towards zero regardless of sign. Different from Math.floor for negative numbers.",
        "syntax": "Math.trunc(x)",
        "keywordsOrMethods": ["Math.trunc()", "truncate", "integer part"],
        "codeExample": "console.log(Math.trunc(13.37)); // 13\nconsole.log(Math.trunc(13.99)); // 13\nconsole.log(Math.trunc(-13.99)); // -13 (floor would be -14!)",
        "htmlExample": "<div class=\"demo-box\">Math.trunc strips decimals towards zero.</div>",
        "expectedOutput": "> 13\n> 13\n> -13",
        "notes": "Cleaner and less prone to overflow than bitwise truncation (x | 0) for large numbers.",
        "commonMistakes": "Using Math.floor when truncation toward zero is intended for negative numbers."
    })

    # 193. Creating Date Objects
    b.append({
        "id": 193, "number": "193", "title": "Creating Date Objects", "category": "Date & Time API",
        "introduction": "Date objects represent a single moment in time in a platform-independent format.",
        "explanation": "Constructed via 'new Date()'. Can be initialized with no arguments (current time), a timestamp in milliseconds, an ISO date string, or discrete date components (year, monthIndex, day, hours, ...).",
        "syntax": "new Date()\nnew Date('2026-10-21')\nnew Date(year, monthIndex, day)",
        "keywordsOrMethods": ["Date", "new Date()", "timestamp", "ISO 8601"],
        "codeExample": "const now = new Date();\nconsole.log('Current year:', now.getFullYear());\nconst fixedDate = new Date('2026-01-01T00:00:00Z');\nconsole.log('ISO String:', fixedDate.toISOString());",
        "htmlExample": "<div class=\"demo-box\">Date objects manage timestamps and calendar calculations.</div>",
        "expectedOutput": "> Current year: 2026\n> ISO String: 2026-01-01T00:00:00.000Z",
        "notes": "Month indices in JavaScript Date constructors are ZERO-INDEXED (0 = January, 11 = December).",
        "commonMistakes": "Passing month 1 for January in multi-argument constructors: new Date(2026, 1, 1) is February 1st!"
    })

    # 194. getFullYear() Method
    b.append({
        "id": 194, "number": "194", "title": "getFullYear() Method", "category": "Date & Time API",
        "introduction": "getFullYear() returns the year of the specified date according to local time.",
        "explanation": "Returns a 4-digit number (e.g. 2026) for the year. Replaced the deprecated getYear() method which suffered from Y2K bugs.",
        "syntax": "dateObj.getFullYear()",
        "keywordsOrMethods": ["getFullYear()", "4-digit year", "local year"],
        "codeExample": "const date = new Date('2026-10-21');\nconsole.log('Year:', date.getFullYear());",
        "htmlExample": "<div class=\"demo-box\">getFullYear returns the full four-digit year.</div>",
        "expectedOutput": "> Year: 2026",
        "notes": "Use getUTCFullYear() if working with standardized UTC time.",
        "commonMistakes": "Using the deprecated getYear() method, which returns the year minus 1900."
    })

    # 195. getMonth() Method
    b.append({
        "id": 195, "number": "195", "title": "getMonth() Method", "category": "Date & Time API",
        "introduction": "getMonth() returns the month in the specified date according to local time as a zero-based value.",
        "explanation": "Returns an integer from 0 (January) to 11 (December). You must add 1 to get standard human 1-12 month numbers.",
        "syntax": "const zeroIndexedMonth = date.getMonth();",
        "keywordsOrMethods": ["getMonth()", "zero-indexed month", "0 to 11"],
        "codeExample": "const date = new Date('2026-05-15');\nconst monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\nconsole.log('Zero-indexed month:', date.getMonth()); // 4\nconsole.log('Human month name:', monthNames[date.getMonth()]); // May",
        "htmlExample": "<div class=\"demo-box\">getMonth is zero-based: 0 is January, 11 is December.</div>",
        "expectedOutput": "> Zero-indexed month: 4\n> Human month name: May",
        "notes": "Always format months with monthNames[date.getMonth()] or Intl.DateTimeFormat.",
        "commonMistakes": "Displaying date.getMonth() directly to users without adding 1 or formatting."
    })

    # 196. getDate() Method
    b.append({
        "id": 196, "number": "196", "title": "getDate() Method", "category": "Date & Time API",
        "introduction": "getDate() returns the day of the month (1-31) for the specified date according to local time.",
        "explanation": "Returns the day of the calendar month as an integer from 1 to 31. Not to be confused with getDay() which returns day of the week.",
        "syntax": "dateObj.getDate()",
        "keywordsOrMethods": ["getDate()", "day of month", "1 to 31"],
        "codeExample": "const date = new Date('2026-10-21');\nconsole.log('Day of month:', date.getDate());",
        "htmlExample": "<div class=\"demo-box\">getDate returns the day of the month (1-31).</div>",
        "expectedOutput": "> Day of month: 21",
        "notes": "new Date(2026, month, 0).getDate() is a trick to find the total days in any month.",
        "commonMistakes": "Confusing getDate() (day of month, 1-31) with getDay() (day of week, 0-6)."
    })

    # 197. getDay() Method
    b.append({
        "id": 197, "number": "197", "title": "getDay() Method", "category": "Date & Time API",
        "introduction": "getDay() returns the day of the week for the specified date according to local time.",
        "explanation": "Returns an integer from 0 (Sunday) to 6 (Saturday).",
        "syntax": "dateObj.getDay()",
        "keywordsOrMethods": ["getDay()", "day of week", "0 = Sunday"],
        "codeExample": "const date = new Date('2026-10-21'); // Wednesday\nconst dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\nconsole.log('Numeric day of week:', date.getDay());\nconsole.log('Day name:', dayNames[date.getDay()]);",
        "htmlExample": "<div class=\"demo-box\">getDay returns the day of the week where 0 is Sunday.</div>",
        "expectedOutput": "> Numeric day of week: 3\n> Day name: Wednesday",
        "notes": "Sunday is always 0 in standard JavaScript Date specifications.",
        "commonMistakes": "Assuming 0 is Monday (as in ISO weekday standards)."
    })

    # 198. getHours() Method
    b.append({
        "id": 198, "number": "198", "title": "getHours() Method", "category": "Date & Time API",
        "introduction": "getHours() returns the hour for the specified date, according to local time.",
        "explanation": "Returns an integer from 0 to 23 (24-hour military time representation).",
        "syntax": "dateObj.getHours()",
        "keywordsOrMethods": ["getHours()", "24-hour format", "0 to 23"],
        "codeExample": "const date = new Date('2026-10-21T14:30:00');\nconsole.log('Hour (24h):', date.getHours());\nconst ampm = date.getHours() >= 12 ? 'PM' : 'AM';\nconst hour12 = date.getHours() % 12 || 12;\nconsole.log(`Formatted 12h: ${hour12} ${ampm}`);",
        "htmlExample": "<div class=\"demo-box\">getHours returns the hour component in 24-hour format.</div>",
        "expectedOutput": "> Hour (24h): 14\n> Formatted 12h: 2 PM",
        "notes": "Use getUTCHours() when coordinating across multiple timezones.",
        "commonMistakes": "Assuming 12:00 midnight is 24; in JavaScript, midnight is hour 0."
    })

    # 199. getMinutes() Method
    b.append({
        "id": 199, "number": "199", "title": "getMinutes() Method", "category": "Date & Time API",
        "introduction": "getMinutes() returns the minutes in the specified date according to local time.",
        "explanation": "Returns an integer from 0 to 59 representing the minute component of a date.",
        "syntax": "dateObj.getMinutes()",
        "keywordsOrMethods": ["getMinutes()", "0 to 59", "clock minutes"],
        "codeExample": "const date = new Date('2026-10-21T14:05:00');\nconst mins = String(date.getMinutes()).padStart(2, '0');\nconsole.log('Formatted minutes:', mins);",
        "htmlExample": "<div class=\"demo-box\">getMinutes returns the minute component (0-59).</div>",
        "expectedOutput": "> Formatted minutes: 05",
        "notes": "Use padStart(2, '0') to format single-digit minutes (e.g. '05' instead of '5').",
        "commonMistakes": "Displaying minutes directly without zero-padding (e.g. '14:5' instead of '14:05')."
    })

    # 200. getSeconds() Method
    b.append({
        "id": 200, "number": "200", "title": "getSeconds() Method", "category": "Date & Time API",
        "introduction": "getSeconds() returns the seconds in the specified date according to local time.",
        "explanation": "Returns an integer from 0 to 59 representing the seconds value of a date instance.",
        "syntax": "dateObj.getSeconds()",
        "keywordsOrMethods": ["getSeconds()", "0 to 59", "clock seconds"],
        "codeExample": "const date = new Date('2026-10-21T14:30:45');\nconsole.log('Seconds:', date.getSeconds());",
        "htmlExample": "<div class=\"demo-box\">getSeconds returns the second component (0-59).</div>",
        "expectedOutput": "> Seconds: 45",
        "notes": "Combined with setTimeout/setInterval to build live digital clocks and stopwatches.",
        "commonMistakes": "Expecting getSeconds to include milliseconds (use getMilliseconds() for fractional seconds)."
    })

    return b
