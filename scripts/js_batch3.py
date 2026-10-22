# scripts/js_batch3.py: Lessons 101 to 150
def get_batch3():
    b = []

    # 101. Object.hasOwnProperty() Method
    b.append({
        "id": 101, "number": "101", "title": "Object.hasOwnProperty() Method", "category": "Objects, Classes & OOP",
        "introduction": "hasOwnProperty() returns a boolean indicating whether the object has the specified property as its own.",
        "explanation": "Differentiates own direct properties from inherited prototype properties. Modern ES2022 code prefers Object.hasOwn(obj, prop) which works safely even on Object.create(null) instances.",
        "syntax": "obj.hasOwnProperty(prop)\nObject.hasOwn(obj, prop)",
        "keywordsOrMethods": ["hasOwnProperty", "Object.hasOwn", "own property"],
        "codeExample": "const proto = { inherited: true };\nconst instance = Object.create(proto);\ninstance.own = 'direct value';\nconsole.log('Has own property \"own\"?', instance.hasOwnProperty('own'));\nconsole.log('Has own property \"inherited\"?', instance.hasOwnProperty('inherited'));",
        "htmlExample": "<div class=\"demo-box\">hasOwnProperty filters out inherited prototype keys.</div>",
        "expectedOutput": "> Has own property \"own\"? true\n> Has own property \"inherited\"? false",
        "notes": "Object.hasOwn(obj, 'prop') is the modern, safer alternative introduced in ES2022.",
        "commonMistakes": "Calling obj.hasOwnProperty on an object where the property name 'hasOwnProperty' was overridden."
    })

    # 102. Object.freeze() Method
    b.append({
        "id": 102, "number": "102", "title": "Object.freeze() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.freeze() freezes an object, preventing new properties from being added, removed, or modified.",
        "explanation": "Creates complete shallow immutability. Existing properties cannot be changed, reconfigured, or deleted. In strict mode, attempted mutations throw a TypeError.",
        "syntax": "const frozen = Object.freeze(obj);",
        "keywordsOrMethods": ["Object.freeze()", "immutability", "shallow freeze"],
        "codeExample": "const config = Object.freeze({\n  apiHost: 'https://api.codeplay.dev',\n  version: 1\n});\n// Attempted mutation silently ignored in non-strict, throws in strict\nconfig.version = 2;\nconsole.log('Config version remains:', config.version);\nconsole.log('Is frozen?', Object.isFrozen(config));",
        "htmlExample": "<div class=\"demo-box\">Object.freeze ensures runtime configuration immutability.</div>",
        "expectedOutput": "> Config version remains: 1\n> Is frozen? true",
        "notes": "Object.freeze is shallow: nested objects inside a frozen object can still be mutated unless recursively frozen.",
        "commonMistakes": "Assuming Object.freeze recursively protects deeply nested objects."
    })

    # 103. Object.seal() Method
    b.append({
        "id": 103, "number": "103", "title": "Object.seal() Method", "category": "Objects, Classes & OOP",
        "introduction": "Object.seal() prevents new properties from being added or deleted, while allowing existing values to change.",
        "explanation": "Unlike Object.freeze(), Object.seal() keeps existing properties writable. Existing properties cannot be deleted and new properties cannot be added.",
        "syntax": "const sealed = Object.seal(obj);",
        "keywordsOrMethods": ["Object.seal()", "fixed schema", "writable"],
        "codeExample": "const user = Object.seal({\n  name: 'Alex',\n  score: 10\n});\nuser.score = 25; // Allowed! Values are writable\ndelete user.name; // Ignored/forbidden!\nuser.newProp = 'fail'; // Ignored/forbidden!\nconsole.log('Sealed user object:', user);\nconsole.log('Is sealed?', Object.isSealed(user));",
        "htmlExample": "<div class=\"demo-box\">Object.seal locks down object schemas while permitting value updates.</div>",
        "expectedOutput": "> Sealed user object: {\"name\":\"Alex\",\"score\":25}\n> Is sealed? true",
        "notes": "Useful when an object represents a fixed model schema whose fields cannot change.",
        "commonMistakes": "Confusing freeze (read-only values) with seal (read-write values, locked keys)."
    })

    # 104. Getter and Setter Methods
    b.append({
        "id": 104, "number": "104", "title": "Getter and Setter Methods", "category": "Objects, Classes & OOP",
        "introduction": "Getters and setters bind an object property to a function that executes on access or assignment.",
        "explanation": "Declared with 'get' and 'set' keywords. Getters compute dynamic values on demand, while setters validate or transform values before assignment.",
        "syntax": "class Person {\n  get fullName() { ... }\n  set age(val) { ... }\n}",
        "keywordsOrMethods": ["get", "set", "computed property", "accessor"],
        "codeExample": "const temperature = {\n  celsius: 25,\n  get fahrenheit() {\n    return (this.celsius * 9/5) + 32;\n  },\n  set fahrenheit(val) {\n    this.celsius = (val - 32) * 5/9;\n  }\n};\nconsole.log('25°C in °F:', temperature.fahrenheit);\ntemperature.fahrenheit = 212;\nconsole.log('212°F in °C:', temperature.celsius);",
        "htmlExample": "<div class=\"demo-box\">Getters and setters encapsulate property access logic.</div>",
        "expectedOutput": "> 25°C in °F: 77\n> 212°F in °C: 100",
        "notes": "A setter must accept exactly one parameter.",
        "commonMistakes": "Accidentally creating infinite recursion by setting this.prop inside a setter for prop (use a backing property like this._prop)."
    })

    # 105. Factory Functions
    b.append({
        "id": 105, "number": "105", "title": "Factory Functions", "category": "Objects, Classes & OOP",
        "introduction": "A factory function is any function that creates and returns a new object without using the 'new' keyword.",
        "explanation": "Factory functions leverage closures to produce encapsulated objects without 'this' context pitfalls or prototype baggage. A popular alternative to ES6 classes.",
        "syntax": "function createUser(name, role) {\n  return { name, role };\n}",
        "keywordsOrMethods": ["factory function", "composition", "no 'new' keyword"],
        "codeExample": "function createCharacter(name, health) {\n  let currentHealth = health;\n  return {\n    name,\n    takeDamage(amount) {\n      currentHealth = Math.max(0, currentHealth - amount);\n      console.log(`${name} takes ${amount} dmg! Health: ${currentHealth}`);\n    },\n    getHealth: () => currentHealth\n  };\n}\nconst hero = createCharacter('Knight', 100);\nhero.takeDamage(25);",
        "htmlExample": "<div class=\"demo-box\">Factory functions produce encapsulated objects cleanly.</div>",
        "expectedOutput": "> Knight takes 25 dmg! Health: 75",
        "notes": "Factory functions do not share methods via prototypes unless explicitly configured.",
        "commonMistakes": "Creating thousands of identical method closures if high memory efficiency is required."
    })

    # 106. Mixins in JavaScript
    b.append({
        "id": 106, "number": "106", "title": "Mixins in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Mixins are objects containing methods that can be copied into classes or prototypes for composition.",
        "explanation": "JavaScript only supports single inheritance. Mixins provide a composition pattern allowing classes to acquire capabilities from multiple sources via Object.assign().",
        "syntax": "Object.assign(TargetClass.prototype, mixinObj);",
        "keywordsOrMethods": ["mixin", "composition over inheritance", "Object.assign"],
        "codeExample": "const canFly = {\n  fly() { return `${this.name} takes to the skies!`; }\n};\nconst canSwim = {\n  swim() { return `${this.name} dives into water!`; }\n};\nclass Duck {\n  constructor(name) { this.name = name; }\n}\nObject.assign(Duck.prototype, canFly, canSwim);\nconst donald = new Duck('Donald');\nconsole.log(donald.fly());\nconsole.log(donald.swim());",
        "htmlExample": "<div class=\"demo-box\">Mixins promote composition over rigid inheritance hierarchies.</div>",
        "expectedOutput": "> Donald takes to the skies!\n> Donald dives into water!",
        "notes": "Mixins can also be implemented as higher-order class factories: const Flyable = Base => class extends Base { ... }.",
        "commonMistakes": "Overwriting existing methods on the prototype when merging mixins with conflicting method names."
    })

    # 107. Abstraction in JavaScript
    b.append({
        "id": 107, "number": "107", "title": "Abstraction in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Abstraction hides complex implementation details, presenting only clean, simple public interfaces.",
        "explanation": "Users interact with high-level methods (e.g. car.start()) without needing to know internal engine mechanisms or private sensor validations.",
        "syntax": "class APIClient {\n  fetchData() { this.#connect(); this.#query(); }\n}",
        "keywordsOrMethods": ["abstraction", "interface", "hiding complexity"],
        "codeExample": "class CoffeeMachine {\n  #waterLevel = 100;\n  #heatWater() {\n    console.log('Internal: Heating water to 95°C...');\n  }\n  makeEspresso() {\n    if (this.#waterLevel < 20) return 'Add water';\n    this.#heatWater();\n    this.#waterLevel -= 20;\n    return '☕ Espresso ready!';\n  }\n}\nconst machine = new CoffeeMachine();\nconsole.log(machine.makeEspresso());",
        "htmlExample": "<div class=\"demo-box\">Abstraction presents intuitive methods while managing complexity internally.</div>",
        "expectedOutput": "> Internal: Heating water to 95°C...\n> ☕ Espresso ready!",
        "notes": "Abstraction reduces cognitive load and allows internal refactoring without breaking consumer code.",
        "commonMistakes": "Exposing internal flags or private helpers to public consumers."
    })

    # 108. Polymorphism in JavaScript
    b.append({
        "id": 108, "number": "108", "title": "Polymorphism in JavaScript", "category": "Objects, Classes & OOP",
        "introduction": "Polymorphism allows different objects to respond to the same method invocation in their own unique way.",
        "explanation": "Because JavaScript is dynamically typed, polymorphism is natural: any object with a method named render() can be rendered polymorphically by a UI pipeline (duck typing).",
        "syntax": "shapes.forEach(shape => shape.draw());",
        "keywordsOrMethods": ["polymorphism", "duck typing", "method dispatch"],
        "codeExample": "class Circle {\n  draw() { return 'Drawing a Circle ⭕'; }\n}\nclass Square {\n  draw() { return 'Drawing a Square ⬛'; }\n}\nclass Triangle {\n  draw() { return 'Drawing a Triangle 🔺'; }\n}\nconst canvas = [new Circle(), new Square(), new Triangle()];\ncanvas.forEach(shape => console.log(shape.draw()));",
        "htmlExample": "<div class=\"demo-box\">Polymorphism allows interchangeable object handling.</div>",
        "expectedOutput": "> Drawing a Circle ⭕\n> Drawing a Square ⬛\n> Drawing a Triangle 🔺",
        "notes": "JavaScript duck typing: 'If it walks like a duck and quacks like a duck, it's a duck.'",
        "commonMistakes": "Using instanceof checks instead of trusting the polymorphic method interface."
    })

    # 109. getElementById() Method
    b.append({
        "id": 109, "number": "109", "title": "getElementById() Method", "category": "DOM Manipulation",
        "introduction": "document.getElementById() returns the Element object whose id property matches the specified string.",
        "explanation": "The fastest DOM selector in modern browsers because browser engines maintain internal hash tables of element IDs. Returns null if no element is found.",
        "syntax": "const el = document.getElementById('my-id');",
        "keywordsOrMethods": ["getElementById", "ID lookup", "fastest selector"],
        "codeExample": "const target = document.getElementById('lesson-target');\nif (target) {\n  console.log('Target found with text:', target.textContent);\n} else {\n  console.log('Target element retrieved: null');\n}",
        "htmlExample": "<div id=\"lesson-target\" class=\"demo-box\">Hello from getElementById target!</div>",
        "expectedOutput": "> Target found with text: Hello from getElementById target!",
        "notes": "Do not include the '#' symbol in getElementById('my-id') — pass the raw ID string.",
        "commonMistakes": "Passing '#my-id' instead of 'my-id' to getElementById."
    })

    # 110. getElementsByClassName() Method
    b.append({
        "id": 110, "number": "110", "title": "getElementsByClassName() Method", "category": "DOM Manipulation",
        "introduction": "getElementsByClassName() returns a live HTMLCollection of all child elements with the given class names.",
        "explanation": "Returns an HTMLCollection, which automatically updates when the DOM changes (live collection). Multiple class names can be space-separated.",
        "syntax": "const elements = document.getElementsByClassName('class-name');",
        "keywordsOrMethods": ["getElementsByClassName", "HTMLCollection", "live collection"],
        "codeExample": "const cards = document.getElementsByClassName('badge-demo');\nconsole.log('Badges count:', cards.length);\nfor (let i = 0; i < cards.length; i++) {\n  console.log(`Badge ${i + 1}: ${cards[i].textContent}`);\n}",
        "htmlExample": "<div>\n  <span class=\"badge-demo\">Active</span>\n  <span class=\"badge-demo\">Verified</span>\n</div>",
        "expectedOutput": "> Badges count: 2\n> Badge 1: Active\n> Badge 2: Verified",
        "notes": "HTMLCollections are not arrays. Convert with Array.from() to use map, filter, or forEach.",
        "commonMistakes": "Trying to call array methods directly like cards.map() without converting to an array."
    })

    # 111. getElementsByTagName() Method
    b.append({
        "id": 111, "number": "111", "title": "getElementsByTagName() Method", "category": "DOM Manipulation",
        "introduction": "getElementsByTagName() returns a live HTMLCollection of elements with the given tag name.",
        "explanation": "Searches for elements matching HTML tag names ('p', 'button', 'li'). Passing '*' matches all elements in the subtree.",
        "syntax": "const elements = document.getElementsByTagName('button');",
        "keywordsOrMethods": ["getElementsByTagName", "tag name", "HTMLCollection"],
        "codeExample": "const buttons = document.getElementsByTagName('button');\nconsole.log('Button elements found:', buttons.length);\nArray.from(buttons).forEach(btn => {\n  console.log('Button text:', btn.textContent);\n});",
        "htmlExample": "<div>\n  <button class=\"demo-btn\">Save</button>\n  <button class=\"demo-btn\">Cancel</button>\n</div>",
        "expectedOutput": "> Button elements found: 2\n> Button text: Save\n> Button text: Cancel",
        "notes": "Can be called on any sub-element (e.g. myDiv.getElementsByTagName('p')) to scope the search.",
        "commonMistakes": "Forgetting that tag names should be written without angle brackets (use 'p', not '<p>')."
    })

    # 112. querySelector() Method
    b.append({
        "id": 112, "number": "112", "title": "querySelector() Method", "category": "DOM Manipulation",
        "introduction": "querySelector() returns the first Element that matches a specified CSS selector string.",
        "explanation": "Accepts any valid CSS selector (#id, .class, [attr=\"val\"], div > p:first-child). Returns null if no match is found.",
        "syntax": "const el = document.querySelector('.card .btn-primary');",
        "keywordsOrMethods": ["querySelector", "CSS selector", "first match"],
        "codeExample": "const header = document.querySelector('.highlight-text');\nif (header) {\n  console.log('Selected element content:', header.textContent);\n}",
        "htmlExample": "<div>\n  <p class=\"highlight-text\">Important Announcement</p>\n  <p class=\"highlight-text\">Secondary Item</p>\n</div>",
        "expectedOutput": "> Selected element content: Important Announcement",
        "notes": "Returns only the first matching element. Use querySelectorAll() to select all matches.",
        "commonMistakes": "Forgetting the dot prefix for classes ('.card') or hash for IDs ('#main')."
    })

    # 113. querySelectorAll() Method
    b.append({
        "id": 113, "number": "113", "title": "querySelectorAll() Method", "category": "DOM Manipulation",
        "introduction": "querySelectorAll() returns a static NodeList representing all elements matching a CSS selector.",
        "explanation": "Unlike HTMLCollections, the NodeList returned by querySelectorAll() is static (does not change if elements are later added to DOM) and natively supports the .forEach() method.",
        "syntax": "const nodeList = document.querySelectorAll('.item');",
        "keywordsOrMethods": ["querySelectorAll", "static NodeList", "forEach"],
        "codeExample": "const listItems = document.querySelectorAll('.demo-list li');\nconsole.log('Matching list items:', listItems.length);\nlistItems.forEach((li, idx) => {\n  console.log(`Item #${idx + 1}: ${li.textContent}`);\n});",
        "htmlExample": "<ul class=\"demo-list\">\n  <li>HTML5 Structure</li>\n  <li>CSS3 Styling</li>\n  <li>JavaScript Logic</li>\n</ul>",
        "expectedOutput": "> Matching list items: 3\n> Item #1: HTML5 Structure\n> Item #2: CSS3 Styling\n> Item #3: JavaScript Logic",
        "notes": "NodeLists can be converted to arrays using Array.from(nodeList) or [...nodeList].",
        "commonMistakes": "Assuming querySelectorAll returns a live collection; it is a static snapshot at the moment of invocation."
    })

    # 114. innerText Property
    b.append({
        "id": 114, "number": "114", "title": "innerText Property", "category": "DOM Manipulation",
        "introduction": "innerText represents the rendered text content of a node and its descendants.",
        "explanation": "innerText is aware of CSS styling and layout. It ignores hidden text (display: none), respects line breaks from block elements, and triggers a style layout reflow.",
        "syntax": "element.innerText = 'New visible text';",
        "keywordsOrMethods": ["innerText", "rendered text", "reflow"],
        "codeExample": "const el = document.getElementById('text-demo');\nif (el) {\n  console.log('Original innerText:', el.innerText);\n  el.innerText = 'Updated via innerText!';\n  console.log('New innerText:', el.innerText);\n}",
        "htmlExample": "<div id=\"text-demo\" class=\"demo-box\">Original Display Text</div>",
        "expectedOutput": "> Original Display Text\n> New innerText: Updated via innerText!",
        "notes": "Prefer textContent if you don't need styling awareness because textContent is much faster.",
        "commonMistakes": "Using innerText for rapid background operations; its reflow cost can degrade performance."
    })

    # 115. innerHTML Property
    b.append({
        "id": 115, "number": "115", "title": "innerHTML Property", "category": "DOM Manipulation",
        "introduction": "innerHTML gets or sets the HTML or XML markup contained within the element.",
        "explanation": "Allows dynamically generating HTML structures by parsing a string into DOM nodes. Setting innerHTML destroys and replaces all existing children and their event listeners.",
        "syntax": "element.innerHTML = '<strong>Bold Message</strong>';",
        "keywordsOrMethods": ["innerHTML", "HTML parsing", "XSS security"],
        "codeExample": "const container = document.getElementById('html-demo-container');\nif (container) {\n  container.innerHTML = '<span style=\"color:#06b6d4;font-weight:bold;\">Dynamically rendered HTML tag!</span>';\n  console.log('HTML updated successfully.');\n}",
        "htmlExample": "<div id=\"html-demo-container\" class=\"demo-box\">Initial content</div>",
        "expectedOutput": "> HTML updated successfully.",
        "notes": "Never set innerHTML using untrusted user input without sanitizing to prevent Cross-Site Scripting (XSS).",
        "commonMistakes": "Using innerHTML += '...' in tight loops, which constantly tears down and rebuilds DOM trees."
    })

    # 116. textContent Property
    b.append({
        "id": 116, "number": "116", "title": "textContent Property", "category": "DOM Manipulation",
        "introduction": "textContent gets or sets the text content of a node and all of its descendants.",
        "explanation": "Unlike innerText, textContent returns the raw text of all elements (including <script>, <style>, and hidden elements) without triggering a browser layout recalculation. Highly performant and secure against XSS.",
        "syntax": "element.textContent = 'Safe clean text';",
        "keywordsOrMethods": ["textContent", "safe text", "high performance"],
        "codeExample": "const banner = document.getElementById('safe-banner');\nif (banner) {\n  banner.textContent = '<script>alert(1)</script>'; // Treated as literal text, NOT executed!\n  console.log('Escaped text:', banner.textContent);\n}",
        "htmlExample": "<div id=\"safe-banner\" class=\"demo-box\">Empty banner</div>",
        "expectedOutput": "> Escaped text: <script>alert(1)</script>",
        "notes": "Always use textContent instead of innerHTML when displaying user-supplied plain text.",
        "commonMistakes": "Expecting textContent to render HTML tags (it treats tags as literal text characters)."
    })

    # 117. value Property
    b.append({
        "id": 117, "number": "117", "title": "value Property", "category": "DOM Manipulation",
        "introduction": "The value property gets or sets the current value of form elements (<input>, <textarea>, <select>).",
        "explanation": "Represents the user-entered contents of form controls. Reading value returns a string; assigning to it updates the form control on screen.",
        "syntax": "const userText = inputEl.value;\ninputEl.value = 'New Value';",
        "keywordsOrMethods": ["value", "form controls", "input.value"],
        "codeExample": "const input = document.getElementById('sample-input');\nif (input) {\n  console.log('Original input value:', input.value);\n  input.value = 'admin@codeplay.dev';\n  console.log('Updated input value:', input.value);\n}",
        "htmlExample": "<div>\n  <input type=\"text\" id=\"sample-input\" value=\"user@test.com\" class=\"demo-input\" style=\"padding:8px;border-radius:6px;\">\n</div>",
        "expectedOutput": "> Original input value: user@test.com\n> Updated input value: admin@codeplay.dev",
        "notes": "For numeric inputs (type=\"number\"), input.value is still returned as a string. Use input.valueAsNumber for a number.",
        "commonMistakes": "Trying to read innerHTML or textContent on an <input> element instead of .value."
    })

    # 118. setAttribute() Method
    b.append({
        "id": 118, "number": "118", "title": "setAttribute() Method", "category": "DOM Manipulation",
        "introduction": "setAttribute() sets the value of an attribute on the specified element.",
        "explanation": "If the attribute already exists, its value is updated; otherwise, a new attribute is created. The value is automatically converted to a string.",
        "syntax": "element.setAttribute(name, value);",
        "keywordsOrMethods": ["setAttribute", "HTML attributes", "data-* attributes"],
        "codeExample": "const link = document.getElementById('demo-link');\nif (link) {\n  link.setAttribute('href', 'https://github.com/YUZAKIxNASA/PLAY-CODE');\n  link.setAttribute('target', '_blank');\n  console.log('Updated href:', link.getAttribute('href'));\n}",
        "htmlExample": "<a id=\"demo-link\" href=\"#\" class=\"demo-btn\" style=\"display:inline-block;\">Repository Link</a>",
        "expectedOutput": "> Updated href: https://github.com/YUZAKIxNASA/PLAY-CODE",
        "notes": "For standard properties like id and title, direct property access (el.id = 'val') is usually preferred.",
        "commonMistakes": "Passing boolean false to setAttribute('disabled', false) — in HTML, the presence of the attribute alone makes it true!"
    })

    # 119. getAttribute() Method
    b.append({
        "id": 119, "number": "119", "title": "getAttribute() Method", "category": "DOM Manipulation",
        "introduction": "getAttribute() returns the current string value of a specified attribute on the element.",
        "explanation": "If the specified attribute does not exist on the element, it returns null. Excellent for reading custom data-* attributes.",
        "syntax": "const attrVal = element.getAttribute(attributeName);",
        "keywordsOrMethods": ["getAttribute", "custom attributes", "null if absent"],
        "codeExample": "const box = document.getElementById('custom-data-box');\nif (box) {\n  const lessonId = box.getAttribute('data-lesson-id');\n  console.log('data-lesson-id attribute:', lessonId);\n}",
        "htmlExample": "<div id=\"custom-data-box\" data-lesson-id=\"119\" class=\"demo-box\">Component with custom attributes</div>",
        "expectedOutput": "> data-lesson-id attribute: 119",
        "notes": "Custom data-* attributes can also be accessed via the element.dataset property.",
        "commonMistakes": "Expecting getAttribute to return non-string types; all HTML attributes return as strings."
    })

    # 120. removeAttribute() Method
    b.append({
        "id": 120, "number": "120", "title": "removeAttribute() Method", "category": "DOM Manipulation",
        "introduction": "removeAttribute() removes the element's attribute with the specified name.",
        "explanation": "Completely detaches the attribute from the element's DOM representation. Especially important for boolean attributes like 'disabled', 'hidden', or 'checked'.",
        "syntax": "element.removeAttribute(attributeName);",
        "keywordsOrMethods": ["removeAttribute", "delete attribute"],
        "codeExample": "const btn = document.getElementById('toggle-btn');\nif (btn) {\n  console.log('Disabled before removal:', btn.hasAttribute('disabled'));\n  btn.removeAttribute('disabled');\n  console.log('Disabled after removal:', btn.hasAttribute('disabled'));\n}",
        "htmlExample": "<button id=\"toggle-btn\" disabled class=\"demo-btn\">Clickable Button</button>",
        "expectedOutput": "> Disabled before removal: true\n> Disabled after removal: false",
        "notes": "To re-enable a button, removeAttribute('disabled') or set btn.disabled = false.",
        "commonMistakes": "Setting setAttribute('disabled', '') hoping to remove it; you must use removeAttribute."
    })

    # 121. classList.add() Method
    b.append({
        "id": 121, "number": "121", "title": "classList.add() Method", "category": "DOM Manipulation",
        "introduction": "classList.add() adds one or more specified class names to an element.",
        "explanation": "Part of the DOMTokenList interface. If the specified class already exists on the element, it is ignored (no duplicates are created).",
        "syntax": "element.classList.add('class1', 'class2');",
        "keywordsOrMethods": ["classList.add", "DOMTokenList", "add class"],
        "codeExample": "const card = document.getElementById('card-node');\nif (card) {\n  card.classList.add('active', 'highlighted');\n  console.log('Class list:', card.className);\n}",
        "htmlExample": "<div id=\"card-node\" class=\"demo-box\">Interactive Card Node</div>",
        "expectedOutput": "> Class list: demo-box active highlighted",
        "notes": "Accepts multiple arguments: el.classList.add('a', 'b', 'c').",
        "commonMistakes": "Including a dot in the class name: classList.add('.active') results in a class with a literal dot."
    })

    # 122. classList.remove() Method
    b.append({
        "id": 122, "number": "122", "title": "classList.remove() Method", "category": "DOM Manipulation",
        "introduction": "classList.remove() removes one or more specified class names from an element.",
        "explanation": "If the class does not exist on the element, no error is thrown. Safe and clean way to delete class names.",
        "syntax": "element.classList.remove('class1', 'class2');",
        "keywordsOrMethods": ["classList.remove", "remove class"],
        "codeExample": "const box = document.getElementById('removable-class-box');\nif (box) {\n  console.log('Initial class list:', box.className);\n  box.classList.remove('warning');\n  console.log('Updated class list:', box.className);\n}",
        "htmlExample": "<div id=\"removable-class-box\" class=\"demo-box warning\">Alert container</div>",
        "expectedOutput": "> Initial class list: demo-box warning\n> Updated class list: demo-box",
        "notes": "classList.remove() does nothing if the class is not present, making pre-checks unnecessary.",
        "commonMistakes": "Manually doing string replacement on element.className instead of using classList.remove()."
    })

    # 123. classList.toggle() Method
    b.append({
        "id": 123, "number": "123", "title": "classList.toggle() Method", "category": "DOM Manipulation",
        "introduction": "classList.toggle() removes an existing class or adds a non-existing class, returning a boolean.",
        "explanation": "If the class exists, it is removed and toggle returns false. If the class does not exist, it is added and toggle returns true. Supports an optional force boolean.",
        "syntax": "const isPresent = element.classList.toggle('active', force);",
        "keywordsOrMethods": ["classList.toggle", "toggle class", "force boolean"],
        "codeExample": "const menu = document.getElementById('nav-menu-box');\nif (menu) {\n  const state1 = menu.classList.toggle('open');\n  console.log('Toggle 1 (was added?):', state1);\n  const state2 = menu.classList.toggle('open');\n  console.log('Toggle 2 (was added?):', state2);\n}",
        "htmlExample": "<div id=\"nav-menu-box\" class=\"demo-box\">Menu Container</div>",
        "expectedOutput": "> Toggle 1 (was added?): true\n> Toggle 2 (was added?): false",
        "notes": "Passing a second boolean argument (force) acts like add (if true) or remove (if false).",
        "commonMistakes": "Writing redundant if/else logic when classList.toggle achieves the exact same result in one line."
    })

    # 124. appendChild() Method
    b.append({
        "id": 124, "number": "124", "title": "appendChild() Method", "category": "DOM Manipulation",
        "introduction": "appendChild() adds a node to the end of the list of children of a specified parent node.",
        "explanation": "If the given child is a reference to an existing node in the document, appendChild moves it from its current position to the new position.",
        "syntax": "parentNode.appendChild(childNode);",
        "keywordsOrMethods": ["appendChild", "DOM insertion", "move node"],
        "codeExample": "const parent = document.getElementById('append-container');\nif (parent) {\n  const newPara = document.createElement('p');\n  newPara.textContent = 'Dynamically appended child paragraph!';\n  parent.appendChild(newPara);\n  console.log('Child node appended. Children count:', parent.children.length);\n}",
        "htmlExample": "<div id=\"append-container\" class=\"demo-box\"></div>",
        "expectedOutput": "> Child node appended. Children count: 1",
        "notes": "Modern code also uses parent.append(), which supports multiple nodes and direct strings.",
        "commonMistakes": "Passing a raw string to appendChild: parent.appendChild('hello') throws a TypeError (use append() or document.createTextNode())."
    })

    # 125. removeChild() Method
    b.append({
        "id": 125, "number": "125", "title": "removeChild() Method", "category": "DOM Manipulation",
        "introduction": "removeChild() removes a child node from the DOM and returns the removed node.",
        "explanation": "Called on the parent element. If childNode is not a child of parentNode, a NotFoundError is thrown.",
        "syntax": "const removed = parentNode.removeChild(childNode);",
        "keywordsOrMethods": ["removeChild", "DOM deletion", "orphan node"],
        "codeExample": "const list = document.getElementById('tasks-demo-list');\nif (list && list.firstElementChild) {\n  const removed = list.removeChild(list.firstElementChild);\n  console.log('Removed child item:', removed.textContent);\n}",
        "htmlExample": "<ul id=\"tasks-demo-list\">\n  <li>First task (to be removed)</li>\n  <li>Second task (remains)</li>\n</ul>",
        "expectedOutput": "> Removed child item: First task (to be removed)",
        "notes": "Modern JavaScript also supports childNode.remove() called directly on the child element itself.",
        "commonMistakes": "Calling parent.removeChild() on an element that has already been detached."
    })

    # 126. click Event
    b.append({
        "id": 126, "number": "126", "title": "click Event", "category": "Events & Listeners",
        "introduction": "The click event fires when a pointing device button is pressed and released on a single element.",
        "explanation": "The most widely used UI event. Triggers on mouse clicks, touch taps on mobile screens, and pressing Enter or Space on a focused button.",
        "syntax": "element.addEventListener('click', event => { ... });",
        "keywordsOrMethods": ["click", "addEventListener", "PointerEvent"],
        "codeExample": "const btn = document.getElementById('sample-click-btn');\nif (btn) {\n  btn.addEventListener('click', e => {\n    console.log('Click event captured! Target:', e.target.tagName);\n  });\n  btn.click(); // Programmatic dispatch\n}",
        "htmlExample": "<button id=\"sample-click-btn\" class=\"demo-btn\">Click Target</button>",
        "expectedOutput": "> Click event captured! Target: BUTTON",
        "notes": "Always use buttons or links for clickable interactions to ensure keyboard accessibility.",
        "commonMistakes": "Adding click listeners to non-interactive elements (like <div> or <span>) without tabindex or keyboard handlers."
    })

    # 127. dblclick Event
    b.append({
        "id": 127, "number": "127", "title": "dblclick Event", "category": "Events & Listeners",
        "introduction": "The dblclick event fires when a pointing device button is clicked twice on an element.",
        "explanation": "Fires after two successive click events within a short timeframe defined by the user's operating system settings.",
        "syntax": "element.addEventListener('dblclick', event => { ... });",
        "keywordsOrMethods": ["dblclick", "double click"],
        "codeExample": "const box = document.getElementById('dbl-box');\nif (box) {\n  box.addEventListener('dblclick', () => {\n    console.log('Double click detected!');\n  });\n  // Dispatch synthetic dblclick\n  box.dispatchEvent(new MouseEvent('dblclick'));\n}",
        "htmlExample": "<div id=\"dbl-box\" class=\"demo-box\">Double-click this container</div>",
        "expectedOutput": "> Double click detected!",
        "notes": "Be cautious using dblclick on touch devices, as mobile browsers often treat double taps as zoom gestures.",
        "commonMistakes": "Binding conflicting actions to both 'click' and 'dblclick' on the exact same element."
    })

    # 128. mouseover Event
    b.append({
        "id": 128, "number": "128", "title": "mouseover Event", "category": "Events & Listeners",
        "introduction": "The mouseover event fires when a pointing device is moved onto the element that has the listener.",
        "explanation": "Unlike mouseenter, mouseover bubbles up the DOM tree and fires when entering any child elements of the target.",
        "syntax": "element.addEventListener('mouseover', event => { ... });",
        "keywordsOrMethods": ["mouseover", "bubbling", "hover"],
        "codeExample": "const card = document.getElementById('hover-card');\nif (card) {\n  card.addEventListener('mouseover', e => {\n    console.log('Mouse entered element bounds:', e.target.id);\n  });\n  card.dispatchEvent(new MouseEvent('mouseover'));\n}",
        "htmlExample": "<div id=\"hover-card\" class=\"demo-box\">Hover mouse over me</div>",
        "expectedOutput": "> Mouse entered element bounds: hover-card",
        "notes": "If you do not want bubbling from child elements, use 'mouseenter' instead.",
        "commonMistakes": "Confusing mouseover (which bubbles) with mouseenter (which does not bubble)."
    })

    # 129. mouseout Event
    b.append({
        "id": 129, "number": "129", "title": "mouseout Event", "category": "Events & Listeners",
        "introduction": "The mouseout event fires when a pointing device is moved off the element or onto a child element.",
        "explanation": "Pairs with mouseover. Bubbles up the DOM hierarchy. If you only want to know when the cursor exits the outer container, consider mouseleave.",
        "syntax": "element.addEventListener('mouseout', event => { ... });",
        "keywordsOrMethods": ["mouseout", "mouseleave", "cursor exit"],
        "codeExample": "const card = document.getElementById('hover-card-out');\nif (card) {\n  card.addEventListener('mouseout', () => {\n    console.log('Mouse departed element.');\n  });\n  card.dispatchEvent(new MouseEvent('mouseout'));\n}",
        "htmlExample": "<div id=\"hover-card-out\" class=\"demo-box\">Move mouse out of here</div>",
        "expectedOutput": "> Mouse departed element.",
        "notes": "mouseleave does not bubble and is generally easier to use for tooltips.",
        "commonMistakes": "Flickering tooltips caused by mouseout triggering as the cursor moves over child text nodes."
    })

    # 130. keydown Event
    b.append({
        "id": 130, "number": "130", "title": "keydown Event", "category": "Events & Listeners",
        "introduction": "The keydown event fires immediately when a key on the keyboard is pressed down.",
        "explanation": "Unlike the deprecated keypress event, keydown fires for all keys, including modifier keys (Shift, Ctrl, Alt) and navigation keys (Escape, ArrowUp, Enter). event.key contains the key string.",
        "syntax": "element.addEventListener('keydown', event => {\n  console.log(event.key);\n});",
        "keywordsOrMethods": ["keydown", "event.key", "event.code"],
        "codeExample": "window.addEventListener('keydown', e => {\n  if (e.key === 'Escape') {\n    console.log('Escape pressed! Dismissing modal.');\n  }\n});\n// Dispatch simulated key\nwindow.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));",
        "htmlExample": "<div class=\"demo-box\">Press keys or dispatch keyboard events.</div>",
        "expectedOutput": "> Escape pressed! Dismissing modal.",
        "notes": "Use event.key ('Enter') rather than deprecated numeric keyCode (13).",
        "commonMistakes": "Using deprecated event.which or event.keyCode instead of event.key."
    })

    # 131. keyup Event
    b.append({
        "id": 131, "number": "131", "title": "keyup Event", "category": "Events & Listeners",
        "introduction": "The keyup event fires when a key on the keyboard is released.",
        "explanation": "Fires after the key input has already been registered in an input field. Ideal for live search filtering or character counter updates.",
        "syntax": "inputEl.addEventListener('keyup', event => { ... });",
        "keywordsOrMethods": ["keyup", "key release", "event.key"],
        "codeExample": "const search = document.getElementById('search-live');\nif (search) {\n  search.addEventListener('keyup', e => {\n    console.log('Current search query:', e.target.value);\n  });\n  search.value = 'CSS Grid';\n  search.dispatchEvent(new KeyboardEvent('keyup', { key: 'd' }));\n}",
        "htmlExample": "<div>\n  <input type=\"text\" id=\"search-live\" placeholder=\"Type to search...\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
        "expectedOutput": "> Current search query: CSS Grid",
        "notes": "For real-time input tracking, the 'input' event is generally preferred over keyup as it captures paste and voice input.",
        "commonMistakes": "Using keyup to prevent characters (the character is already entered into the input when keyup fires)."
    })

    # 132. change Event
    b.append({
        "id": 132, "number": "132", "title": "change Event", "category": "Events & Listeners",
        "introduction": "The change event fires when an element's value is committed by the user.",
        "explanation": "For text inputs, change fires only when the user commits the value (by pressing Enter or blurring the input). For <select>, checkboxes, and radio buttons, it fires immediately upon selection.",
        "syntax": "element.addEventListener('change', event => { ... });",
        "keywordsOrMethods": ["change", "commit value", "form change"],
        "codeExample": "const select = document.getElementById('theme-dropdown');\nif (select) {\n  select.addEventListener('change', e => {\n    console.log('Theme changed to:', e.target.value);\n  });\n  select.value = 'midnight';\n  select.dispatchEvent(new Event('change'));\n}",
        "htmlExample": "<select id=\"theme-dropdown\" class=\"demo-input\" style=\"padding:8px;\">\n  <option value=\"light\">Light</option>\n  <option value=\"dark\">Dark</option>\n  <option value=\"midnight\">Midnight</option>\n</select>",
        "expectedOutput": "> Theme changed to: midnight",
        "notes": "Use the 'input' event if you want continuous updates with every single keystroke.",
        "commonMistakes": "Expecting 'change' to fire on text inputs before the field loses focus."
    })

    # 133. submit Event
    b.append({
        "id": 133, "number": "133", "title": "submit Event", "category": "Events & Listeners",
        "introduction": "The submit event fires when a <form> is submitted.",
        "explanation": "Triggered when the user clicks a submit button or presses Enter inside a form field. Typically intercepted via event.preventDefault() to handle submission via Fetch/AJAX without reloading the page.",
        "syntax": "form.addEventListener('submit', event => {\n  event.preventDefault();\n});",
        "keywordsOrMethods": ["submit", "preventDefault()", "AJAX submission"],
        "codeExample": "const form = document.getElementById('login-form');\nif (form) {\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    console.log('Form submission intercepted! Preventing default page reload.');\n  });\n  form.dispatchEvent(new Event('submit', { cancelable: true }));\n}",
        "htmlExample": "<form id=\"login-form\">\n  <input type=\"text\" placeholder=\"Username\" style=\"padding:6px;\">\n  <button type=\"submit\" class=\"demo-btn\">Submit</button>\n</form>",
        "expectedOutput": "> Form submission intercepted! Preventing default page reload.",
        "notes": "Always attach the listener to the <form> element, not the submit <button>.",
        "commonMistakes": "Attaching the click listener to the submit button instead of listening to submit on the form."
    })

    # 134. focus Event
    b.append({
        "id": 134, "number": "134", "title": "focus Event", "category": "Events & Listeners",
        "introduction": "The focus event fires when an element has received focus (via click, tab, or focus() call).",
        "explanation": "Used for styling active form fields, showing tooltips, or initializing inputs. The focus event does not bubble (use focusin if bubbling is required).",
        "syntax": "element.addEventListener('focus', event => { ... });",
        "keywordsOrMethods": ["focus", "focusin", "active element"],
        "codeExample": "const input = document.getElementById('focus-input');\nif (input) {\n  input.addEventListener('focus', () => {\n    console.log('Input gained focus! Ready for typing.');\n  });\n  input.dispatchEvent(new Event('focus'));\n}",
        "htmlExample": "<div>\n  <input type=\"text\" id=\"focus-input\" placeholder=\"Focus me\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
        "expectedOutput": "> Input gained focus! Ready for typing.",
        "notes": "Pair with CSS :focus-visible for optimal keyboard accessibility.",
        "commonMistakes": "Expecting focus to bubble up to parent containers (use focusin instead)."
    })

    # 135. blur Event
    b.append({
        "id": 135, "number": "135", "title": "blur Event", "category": "Events & Listeners",
        "introduction": "The blur event fires when an element has lost focus.",
        "explanation": "Often used for field-level form validation (checking an email format once the user leaves the input). Does not bubble (focusout bubbles).",
        "syntax": "element.addEventListener('blur', event => { ... });",
        "keywordsOrMethods": ["blur", "focusout", "field validation"],
        "codeExample": "const email = document.getElementById('blur-email');\nif (email) {\n  email.addEventListener('blur', e => {\n    const valid = e.target.value.includes('@');\n    console.log('Validation on blur. Is valid email?', valid);\n  });\n  email.value = 'developer@codeplay.dev';\n  email.dispatchEvent(new Event('blur'));\n}",
        "htmlExample": "<div>\n  <input type=\"email\" id=\"blur-email\" class=\"demo-input\" style=\"padding:8px;\">\n</div>",
        "expectedOutput": "> Validation on blur. Is valid email? true",
        "notes": "Use blur to validate single inputs as the user navigates across a form.",
        "commonMistakes": "Displaying aggressive validation error messages before the user has even finished typing (validate on blur, not keydown)."
    })

    # 136. event.preventDefault()
    b.append({
        "id": 136, "number": "136", "title": "event.preventDefault()", "category": "Events & Listeners",
        "introduction": "event.preventDefault() cancels the default browser action that belongs to the event.",
        "explanation": "Prevents links from following URLs, forms from reloading the page, or checkboxes from toggling. Does not stop event propagation (bubbling).",
        "syntax": "event.preventDefault();",
        "keywordsOrMethods": ["preventDefault()", "default action", "event.defaultPrevented"],
        "codeExample": "const link = document.getElementById('cancel-link');\nif (link) {\n  link.addEventListener('click', e => {\n    e.preventDefault();\n    console.log('Navigation prevented by preventDefault()!');\n  });\n  link.dispatchEvent(new MouseEvent('click', { cancelable: true }));\n}",
        "htmlExample": "<a id=\"cancel-link\" href=\"https://google.com\" class=\"demo-btn\">Clickable Link</a>",
        "expectedOutput": "> Navigation prevented by preventDefault()!",
        "notes": "An event must have event.cancelable set to true for preventDefault() to have an effect.",
        "commonMistakes": "Confusing preventDefault() with stopPropagation() (preventDefault stops browser default actions, not bubbling)."
    })

    # 137. event.stopPropagation()
    b.append({
        "id": 137, "number": "137", "title": "event.stopPropagation()", "category": "Events & Listeners",
        "introduction": "event.stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases.",
        "explanation": "Stops the event from traveling up the DOM tree to ancestor elements. Essential for nested interactive components like dropdowns inside clickable cards.",
        "syntax": "event.stopPropagation();",
        "keywordsOrMethods": ["stopPropagation()", "event bubbling", "propagation"],
        "codeExample": "const outer = document.createElement('div');\nconst inner = document.createElement('button');\nouter.addEventListener('click', () => console.log('Outer card clicked!'));\ninner.addEventListener('click', e => {\n  e.stopPropagation(); // Outer will NOT receive this click!\n  console.log('Inner button clicked (propagation halted).');\n});\ninner.click();",
        "htmlExample": "<div class=\"demo-box\">Propagation control isolates nested event handlers.</div>",
        "expectedOutput": "> Inner button clicked (propagation halted).",
        "notes": "To also prevent other listeners on the SAME element from executing, use event.stopImmediatePropagation().",
        "commonMistakes": "Overusing stopPropagation which can break analytics, global document dismiss listeners, and delegated event architectures."
    })

    # 138. let Keyword in ES6
    b.append({
        "id": 138, "number": "138", "title": "let Keyword in ES6", "category": "ES6+ & Modules",
        "introduction": "let revolutionized JavaScript in ES6 by introducing true lexical block scoping to local variables.",
        "explanation": "Before ES6, var variables leaked outside of for loops and if blocks. let binds variables strictly to their enclosing block and enforces the Temporal Dead Zone (TDZ).",
        "syntax": "let variable = value;",
        "keywordsOrMethods": ["let", "ES6", "block scope", "TDZ"],
        "codeExample": "for (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log('Loop iteration:', i), 10);\n}",
        "htmlExample": "<div class=\"demo-box\">let creates a fresh binding per loop iteration.</div>",
        "expectedOutput": "> Loop iteration: 0\n> Loop iteration: 1\n> Loop iteration: 2",
        "notes": "With var, the code above would log '3' three times. With let, each iteration captures its own 'i'.",
        "commonMistakes": "Using var in asynchronous loops and suffering closure variable capture bugs."
    })

    # 139. const Keyword in ES6
    b.append({
        "id": 139, "number": "139", "title": "const Keyword in ES6", "category": "ES6+ & Modules",
        "introduction": "const introduced immutable identifier bindings in ES6, preventing accidental reassignment.",
        "explanation": "Default choice for modern variable declarations. Signals to developers and the JS compiler that the binding will never point to a different memory reference.",
        "syntax": "const PI = 3.14159;",
        "keywordsOrMethods": ["const", "ES6", "immutable binding"],
        "codeExample": "const team = ['Alice', 'Bob'];\nteam.push('Charlie'); // Allowed: mutates array\nconsole.log('Team members:', team);\n// team = ['Dave']; // TypeError: Assignment to constant variable",
        "htmlExample": "<div class=\"demo-box\">const enforces identifier stability.</div>",
        "expectedOutput": "> Team members: [\"Alice\",\"Bob\",\"Charlie\"]",
        "notes": "Always use const by default, and switch to let only when reassignment is genuinely required.",
        "commonMistakes": "Assuming const freezes an object's properties (it only protects the variable assignment)."
    })

    # 140. Template Literals
    b.append({
        "id": 140, "number": "140", "title": "Template Literals", "category": "ES6+ & Modules",
        "introduction": "Template literals are string literals delimited with backticks (`) allowing embedded expressions and multi-line text.",
        "explanation": "Introduced in ES6, template literals eliminate awkward string concatenation with '+'. Expressions inside ${...} are evaluated and coerced to strings. Preserves formatting and line breaks.",
        "syntax": "`Hello ${name}, total is ${price * qty}`",
        "keywordsOrMethods": ["template literal", "backtick `", "${expression}"],
        "codeExample": "const user = 'NASA-KUN';\nconst lessonsCompleted = 140;\nconst total = 230;\nconst progress = `User: ${user}\nCompleted: ${lessonsCompleted}/${total} (${((lessonsCompleted/total)*100).toFixed(1)}%)`;\nconsole.log(progress);",
        "htmlExample": "<div class=\"demo-box\">Template literals support expression interpolation and multi-line strings.</div>",
        "expectedOutput": "> User: NASA-KUN\n> Completed: 140/230 (60.9%)",
        "notes": "Tagged template literals (tag`string`) allow custom string parsing functions (e.g. styled-components).",
        "commonMistakes": "Using regular quotes (' or \") instead of backticks (`) when attempting expression interpolation."
    })

    # 141. Destructuring Assignment
    b.append({
        "id": 141, "number": "141", "title": "Destructuring Assignment", "category": "ES6+ & Modules",
        "introduction": "Destructuring syntax unpacks values from arrays or properties from objects into distinct variables.",
        "explanation": "Introduced in ES6, destructuring drastically cleans up code when extracting parameters from configs, API payloads, or function argument objects.",
        "syntax": "const { name, age } = user;\nconst [first, second] = array;",
        "keywordsOrMethods": ["destructuring", "object unpacking", "array unpacking"],
        "codeExample": "const config = { host: 'localhost', port: 3000, secure: true };\nconst { host, port } = config;\nconsole.log(`Connecting to ${host}:${port}`);\nconst colors = ['#4f46e5', '#06b6d4'];\nconst [primary, accent] = colors;\nconsole.log('Primary accent:', primary);",
        "htmlExample": "<div class=\"demo-box\">Destructuring extracts properties concisely.</div>",
        "expectedOutput": "> Connecting to localhost:3000\n> Primary accent: #4f46e5",
        "notes": "You can provide default values: const { role = 'User' } = data.",
        "commonMistakes": "Destructuring from null or undefined: const { a } = null throws a TypeError."
    })

    # 142. Spread Operator
    b.append({
        "id": 142, "number": "142", "title": "Spread Operator", "category": "ES6+ & Modules",
        "introduction": "The spread operator (...) expands an iterable (like an array or object) into individual elements or properties.",
        "explanation": "Used to create shallow clones, merge arrays, combine objects, and pass array elements as arguments to functions.",
        "syntax": "const merged = [...arr1, ...arr2];\nconst clone = { ...obj };",
        "keywordsOrMethods": ["...spread", "shallow copy", "object spread"],
        "codeExample": "const frontend = ['HTML', 'CSS'];\nconst fullstack = [...frontend, 'JavaScript', 'Node.js'];\nconsole.log('Combined stack:', fullstack);\nconst baseSettings = { theme: 'dark', sound: true };\nconst userSettings = { ...baseSettings, sound: false };\nconsole.log('Updated settings:', userSettings);",
        "htmlExample": "<div class=\"demo-box\">Spread expands iterables into elements.</div>",
        "expectedOutput": "> Combined stack: [\"HTML\",\"CSS\",\"JavaScript\",\"Node.js\"]\n> Updated settings: {\"theme\":\"dark\",\"sound\":false}",
        "notes": "Spread copies properties shallowly; nested objects remain referenced.",
        "commonMistakes": "Confusing the spread operator (expanding into elements) with rest parameters (collecting elements into an array)."
    })

    # 143. Rest Operator
    b.append({
        "id": 143, "number": "143", "title": "Rest Operator", "category": "ES6+ & Modules",
        "introduction": "The rest operator (...) collects remaining elements or properties into an array or object during destructuring.",
        "explanation": "Used in object and array destructuring to gather everything that wasn't explicitly extracted into a new container.",
        "syntax": "const [head, ...tail] = list;\nconst { id, ...details } = record;",
        "keywordsOrMethods": ["...rest", "destructuring rest", "remaining properties"],
        "codeExample": "const userRecord = { id: 143, name: 'Alex', email: 'alex@dev.io', role: 'Admin' };\nconst { id, ...publicProfile } = userRecord;\nconsole.log('Extracted ID:', id);\nconsole.log('Remaining profile object:', publicProfile);",
        "htmlExample": "<div class=\"demo-box\">Rest collects remaining properties.</div>",
        "expectedOutput": "> Extracted ID: 143\n> Remaining profile object: {\"name\":\"Alex\",\"email\":\"alex@dev.io\",\"role\":\"Admin\"}",
        "notes": "The rest element must always be the final element in destructuring patterns.",
        "commonMistakes": "Placing another property after the rest operator in destructuring: const { ...rest, id } is invalid."
    })

    # 144. Import Statement
    b.append({
        "id": 144, "number": "144", "title": "Import Statement", "category": "ES6+ & Modules",
        "introduction": "The import statement is used to bring in functions, objects, or primitives exported from another module.",
        "explanation": "Part of standard ES Modules (ESM). Static imports are evaluated at parse time before code runs, allowing tree-shaking and static analysis.",
        "syntax": "import { funcName } from './module.js';\nimport defaultExport from './module.js';",
        "keywordsOrMethods": ["import", "named import", "default import", "ESM"],
        "codeExample": "// ES Module syntax demonstration\nconsole.log('Import syntax demonstration:');\nconsole.log(\"import { calculateTotal } from './math.js';\");\nconsole.log(\"import defaultUser from './user.js';\");",
        "htmlExample": "<div class=\"demo-box\">ES Modules enable modular, tree-shakeable codebases.</div>",
        "expectedOutput": "> Import syntax demonstration:\n> import { calculateTotal } from './math.js';\n> import defaultUser from './user.js';",
        "notes": "Requires <script type=\"module\"> in HTML or 'type': 'module' in package.json.",
        "commonMistakes": "Omitting the .js file extension in native browser module imports."
    })

    # 145. Export Statement
    b.append({
        "id": 145, "number": "145", "title": "Export Statement", "category": "ES6+ & Modules",
        "introduction": "The export statement is used to expose functions, objects, or values from a module to other files.",
        "explanation": "Supports named exports (multiple per module) and a single default export. Consumers use matching import statements.",
        "syntax": "export const PI = 3.14;\nexport default class App { ... }",
        "keywordsOrMethods": ["export", "export default", "named export"],
        "codeExample": "// Defining exported elements:\nconst API_KEY = 'demo_key_xyz';\nfunction fetchItems() { return ['item1', 'item2']; }\nconsole.log('Export definitions ready:');\nconsole.log('export { API_KEY, fetchItems };');",
        "htmlExample": "<div class=\"demo-box\">Export statements create reusable modules.</div>",
        "expectedOutput": "> Export definitions ready:\n> export { API_KEY, fetchItems };",
        "notes": "You can rename exports using 'as': export { myFunc as run }.",
        "commonMistakes": "Having more than one 'export default' in a single module file."
    })

    # 146. Using Modules in FS6 (Preserved exact inventory title: "Using Modules in FS6")
    b.append({
        "id": 146, "number": "146", "title": "Using Modules in FS6", "category": "ES6+ & Modules",
        "introduction": "Using ECMAScript 2015 (ES6) modules structure code into separate, reusable, scoped files.",
        "explanation": "INVENTORY NOTICE: Preserved original title spelling 'Using Modules in FS6' (referring to ES6 ECMAScript Modules). Modules maintain their own private scope, execute in strict mode automatically, and defer execution until the HTML document is parsed.",
        "syntax": "<script type=\"module\" src=\"app.js\"></script>",
        "keywordsOrMethods": ["type=\"module\"", "ES6 Modules", "strict mode default"],
        "codeExample": "// Demonstration of ES6 module execution context:\nconsole.log('Module executed in strict mode automatically:', (function() { return !this; })());\nconsole.log('Modules avoid polluting global window namespace.');",
        "htmlExample": "<div class=\"demo-box\">\n  <strong>ES6 Modules Notice:</strong> Title preserved as 'Using Modules in FS6'.\n</div>",
        "expectedOutput": "> Module executed in strict mode automatically: true\n> Modules avoid polluting global window namespace.",
        "notes": "Modules are fetched via CORS; opening an HTML file directly via file:// protocol may trigger CORS errors in browsers (run via a local web server).",
        "commonMistakes": "Loading an ES module from local file:// system directly in browsers without a local HTTP dev server."
    })

    # 147. Promises
    b.append({
        "id": 147, "number": "147", "title": "Promises", "category": "Async JS & APIs",
        "introduction": "A Promise represents the eventual completion (or failure) of an asynchronous operation.",
        "explanation": "A Promise has three states: pending, fulfilled (resolved with a value), or rejected (failed with an error). Promises allow chaining via .then(), .catch(), and .finally().",
        "syntax": "new Promise((resolve, reject) => {\n  // async task\n  if (success) resolve(data);\n  else reject(err);\n});",
        "keywordsOrMethods": ["Promise", "resolve", "reject", "then()", "catch()"],
        "codeExample": "const simulateFetch = new Promise((resolve) => {\n  setTimeout(() => resolve('Payload received from server!'), 50);\n});\nsimulateFetch.then(data => {\n  console.log('Promise resolved:', data);\n});",
        "htmlExample": "<div class=\"demo-box\">Promises replace nested callback pyramids.</div>",
        "expectedOutput": "> Promise resolved: Payload received from server!",
        "notes": "Promise.all([p1, p2]) runs multiple promises in parallel, waiting for all to complete.",
        "commonMistakes": "Forgetting to catch errors: always include a .catch() or handle rejection."
    })

    # 148. Async and Await
    b.append({
        "id": 148, "number": "148", "title": "Async and Await", "category": "Async JS & APIs",
        "introduction": "async and await allow asynchronous, promise-based code to be written in a synchronous, readable style.",
        "explanation": "The 'async' keyword marks a function as returning a Promise. The 'await' operator pauses execution of the async function until the Promise settles, returning its fulfilled value or throwing on rejection.",
        "syntax": "async function loadData() {\n  const res = await fetch(url);\n  return res.json();\n}",
        "keywordsOrMethods": ["async", "await", "syntactic sugar", "try/catch"],
        "codeExample": "async function getLessonInfo() {\n  console.log('Fetching lesson data...');\n  const result = await new Promise(res => setTimeout(() => res('Lesson #148: Async & Await'), 50));\n  console.log('Result:', result);\n}\ngetLessonInfo();",
        "htmlExample": "<div class=\"demo-box\">async/await brings linear readability to asynchronous code.</div>",
        "expectedOutput": "> Fetching lesson data...\n> Result: Lesson #148: Async & Await",
        "notes": "Top-level await is supported in modern ES modules.",
        "commonMistakes": "Using await inside a standard non-async function (causes a SyntaxError)."
    })

    # 149. fetch API
    b.append({
        "id": 149, "number": "149", "title": "fetch API", "category": "Async JS & APIs",
        "introduction": "The fetch() method provides a modern, promise-based interface for fetching network resources.",
        "explanation": "Replaces legacy XMLHttpRequest. It returns a Promise resolving to a Response object. Calling response.json() or response.text() extracts the parsed payload.",
        "syntax": "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
        "keywordsOrMethods": ["fetch()", "Response", "Request", "Headers"],
        "codeExample": "// Simulating a fetch API workflow:\nasync function simulateApiCall() {\n  console.log('Initiating fetch request...');\n  const mockResponse = { status: 200, json: async () => ({ title: 'CodePlay', active: true }) };\n  const data = await mockResponse.json();\n  console.log('Parsed API JSON data:', data);\n}\nsimulateApiCall();",
        "htmlExample": "<div class=\"demo-box\">fetch provides a modern HTTP client in browsers.</div>",
        "expectedOutput": "> Initiating fetch request...\n> Parsed API JSON data: {\"title\":\"CodePlay\",\"active\":true}",
        "notes": "fetch only rejects on network failures, NOT on HTTP 404 or 500 errors. You must check response.ok.",
        "commonMistakes": "Assuming fetch rejects on 404/500 errors (you must check if (!response.ok))."
    })

    # 150. try...catch...finally
    b.append({
        "id": 150, "number": "150", "title": "try...catch...finally", "category": "Async JS & APIs",
        "introduction": "try...catch...finally statements handle errors gracefully without crashing program execution.",
        "explanation": "Code in the try block runs first. If an error is thrown, execution transfers to catch. The finally block is guaranteed to run after both, regardless of whether an error occurred.",
        "syntax": "try {\n  // risky code\n} catch (err) {\n  // handle error\n} finally {\n  // cleanup always runs\n}",
        "keywordsOrMethods": ["try", "catch", "finally", "error handling"],
        "codeExample": "try {\n  console.log('Attempting operation...');\n  JSON.parse('invalid json string');\n} catch (err) {\n  console.log('Caught error gracefully:', err.name, '-', err.message);\n} finally {\n  console.log('Finally block executed: Resource cleanup complete.');\n}",
        "htmlExample": "<div class=\"demo-box\">try/catch protects your app from unexpected crashes.</div>",
        "expectedOutput": "> Attempting operation...\n> Caught error gracefully: SyntaxError - Unexpected token 'i', \"invalid json string\" is not valid JSON\n> Finally block executed: Resource cleanup complete.",
        "notes": "ES2019 introduced optional catch binding: catch { ... } without needing an error parameter.",
        "commonMistakes": "Empty catch blocks that swallow errors silently, making debugging nearly impossible."
    })

    return b
