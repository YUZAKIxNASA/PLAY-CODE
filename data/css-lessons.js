/**
 * PLAY-CODE (@N4) — Master CSS 210 Lessons Curriculum Dataset
 * Project Owner: NASA-KUN
 * Exact Authoritative Inventory (1 to 210)
 * Strict Fidelity: Preserves exact titles, historical spellings, and original ordering.
 */

const CSS_LESSONS = [
  {
    "id": 1,
    "number": "001",
    "title": "HTML Element selector",
    "category": "Selectors",
    "introduction": "Element selectors target all HTML tags matching a specific tag name across the document.",
    "explanation": "Type/Element selectors target HTML elements directly by their tag name (such as p, h1, div, button). All matching elements on the page inherit the declared CSS rules unless overridden by higher-specificity selectors.",
    "syntax": "element {\n  property: value;\n}",
    "selectorsOrProps": [
      "p",
      "h1",
      "h2",
      "button"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h1>Header Element</h1>\n  <p>First paragraph styled via element selector.</p>\n  <p>Second paragraph inherits the exact same styling automatically.</p>\n  <button>Click Me</button>\n</div>",
    "cssExample": "h1 {\n  color: #4f46e5;\n  font-size: 1.8rem;\n  margin-bottom: 8px;\n}\n\np {\n  color: #334155;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n\nbutton {\n  background-color: #06b6d4;\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n}",
    "expectedOutput": "A purple heading, styled slate paragraphs, and a cyan styled button.",
    "notes": "Element selectors have a low specificity weight (0,0,1). They are ideal for foundational typography and CSS resets.",
    "commonMistakes": "Don't prefix element names with dots or hashes (write 'p', not '.p' or '#p')."
  },
  {
    "id": 2,
    "number": "002",
    "title": "ID Slector()",
    "category": "Selectors",
    "introduction": "An ID selector targets a unique HTML element marked with an id attribute using the hash (#) syntax.",
    "explanation": "INVENTORY NOTICE: Preserved exact title spelling 'ID Slector()'. In CSS, an ID selector matches an element whose id attribute value exactly matches the identifier specified after the '#' symbol. IDs must be unique within an HTML document.",
    "syntax": "#elementId {\n  property: value;\n}",
    "selectorsOrProps": [
      "#id",
      "id attribute"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div id=\"special-banner\">\n    <h2>Exclusive Announcement</h2>\n    <p>This banner has a unique identifier in the document.</p>\n  </div>\n  <div class=\"regular-box\">\n    <p>Regular container without the special ID styling.</p>\n  </div>\n</div>",
    "cssExample": "#special-banner {\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);\n}\n\n#special-banner h2 {\n  margin-top: 0;\n  color: #a5f3fc;\n}\n\n.regular-box {\n  margin-top: 15px;\n  padding: 15px;\n  background: #f1f5f9;\n  border-radius: 8px;\n}",
    "expectedOutput": "A vibrant gradient banner with white and cyan text, distinguished from the plain container below it.",
    "notes": "IDs have high specificity (0,1,0,0). Use them sparingly for key landmarks rather than general styling.",
    "commonMistakes": "Using the same ID on multiple HTML elements on the same page violates HTML specifications."
  },
  {
    "id": 3,
    "number": "003",
    "title": "CSS ID Selector (#id)",
    "category": "Selectors",
    "introduction": "The #id selector applies styles to the single element on the page that has the matching id attribute.",
    "explanation": "To target an element by ID, prefix the ID name with a hash symbol (#). Because IDs are unique per document, this selector provides targeted styling and overrides lower-specificity class and element styles.",
    "syntax": "#my-element {\n  property: value;\n}",
    "selectorsOrProps": [
      "#main-nav",
      "#hero-section",
      "id"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <header id=\"main-nav\">\n    <span class=\"brand\">CodePlay App</span>\n    <span class=\"status\">Online</span>\n  </header>\n  <p>The navigation bar above is targeted directly with #main-nav.</p>\n</div>",
    "cssExample": "#main-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #0f172a;\n  color: #38bdf8;\n  padding: 14px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n\n#main-nav .status {\n  background: #10b981;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n}",
    "expectedOutput": "A dark slate navigation bar with sky-blue text and a green pill status indicator.",
    "notes": "ID names cannot start with a digit unless escaped, and cannot contain spaces.",
    "commonMistakes": "Forgetting the '#' symbol in the CSS rule, turning it into an element selector."
  },
  {
    "id": 4,
    "number": "004",
    "title": "CSS Class Selector (.class)",
    "category": "Selectors",
    "introduction": "Class selectors target any and all elements that share a specific class name prefixed with a dot (.).",
    "explanation": "Classes are the primary workhorse of scalable CSS. An element can have multiple classes separated by spaces, and multiple elements can share the same class. In CSS, prefix the class name with a period (.).",
    "syntax": ".class-name {\n  property: value;\n}",
    "selectorsOrProps": [
      ".badge",
      ".card",
      ".btn-primary"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"badge badge-success\">Active User</div>\n  <div class=\"badge badge-warning\">Pending Verification</div>\n  <div class=\"badge badge-danger\">Subscription Expired</div>\n</div>",
    "cssExample": ".badge {\n  display: inline-block;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n\n.badge-success {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n\n.badge-warning {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n\n.badge-danger {\n  background-color: #fee2e2;\n  color: #991b1b;\n}",
    "expectedOutput": "Three distinct status badges displaying green, amber, and red color themes.",
    "notes": "Class selectors have moderate specificity (0,0,1,0), making them easily overridable and reusable.",
    "commonMistakes": "Putting a dot inside the HTML class attribute (e.g., class=\".badge\"). The dot is only in CSS!"
  },
  {
    "id": 5,
    "number": "005",
    "title": "CSS Grouping Selector (,)",
    "category": "Selectors",
    "introduction": "Grouping selectors use a comma (,) to apply the same CSS declarations to multiple selectors at once.",
    "explanation": "Instead of duplicating identical styling across h1, h2, and h3, separate them with commas. This minimizes CSS file size, avoids duplication, and keeps styles DRY (Don't Repeat Yourself).",
    "syntax": "selector1, selector2, selector3 {\n  property: value;\n}",
    "selectorsOrProps": [
      "comma operator",
      "h1, h2, h3"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h1>Heading Level 1</h1>\n  <h2>Heading Level 2</h2>\n  <h3>Heading Level 3</h3>\n  <p>The headings above share unified font family, tracking, and color through a grouped rule.</p>\n</div>",
    "cssExample": "h1, h2, h3 {\n  font-family: 'Poppins', sans-serif;\n  color: #1e1b4b;\n  letter-spacing: -0.5px;\n  margin-bottom: 6px;\n}\n\nh1 { font-size: 2rem; }\nh2 { font-size: 1.5rem; }\nh3 { font-size: 1.2rem; }",
    "expectedOutput": "Three hierarchical headings rendered with consistent dark indigo coloring and clean font family.",
    "notes": "If one selector in a comma-separated list is invalid, traditional CSS invalidates the entire block. Modern CSS :is() avoids this.",
    "commonMistakes": "Omitting the comma, which turns the selector into a descendant selector (e.g. 'h1 h2' looks for h2 inside h1)."
  },
  {
    "id": 6,
    "number": "006",
    "title": "Inline style",
    "category": "Selectors",
    "introduction": "Inline styles are applied directly to HTML elements using the style attribute.",
    "explanation": "Inline styles write CSS declarations directly on individual HTML tags. While convenient for quick tests or dynamic JavaScript calculations, they clutter markup and have the highest specificity (1,0,0,0), making them hard to maintain.",
    "syntax": "<element style=\"property: value;\">Content</element>",
    "selectorsOrProps": [
      "style attribute",
      "inline specificity"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p style=\"color: #4f46e5; font-size: 18px; font-weight: bold; background: #e0e7ff; padding: 12px; border-radius: 8px;\">\n    This paragraph has direct inline CSS applied via the style attribute!\n  </p>\n  <p>This regular paragraph has standard stylesheet styling.</p>\n</div>",
    "cssExample": "/* Stylesheet rules cannot easily override inline styles without !important */\np {\n  color: #64748b;\n  font-size: 15px;\n}",
    "expectedOutput": "The top paragraph renders with bold purple text on a light indigo box, overriding the external stylesheet.",
    "notes": "Inline styles bypass external stylesheets and prevent reusable class architecture. Use external sheets for production.",
    "commonMistakes": "Relying on inline styles for responsive design; you cannot write media queries or pseudo-classes inline."
  },
  {
    "id": 7,
    "number": "007",
    "title": "Embedded style",
    "category": "Selectors",
    "introduction": "Embedded (internal) styles are declared inside a <style> tag located in the document's <head>.",
    "explanation": "Embedded styles apply to a single HTML document. They are contained within <style> tags and can use all standard selectors, media queries, and keyframe animations without needing a separate .css file.",
    "syntax": "<head>\n  <style>\n    selector { property: value; }\n  </style>\n</head>",
    "selectorsOrProps": [
      "<style> tag",
      "internal stylesheet"
    ],
    "htmlExample": "<!-- Embedded stylesheet represented inside this sandbox -->\n<style>\n  .internal-card {\n    background: #0f172a;\n    color: #f8fafc;\n    padding: 24px;\n    border-radius: 12px;\n    border-left: 5px solid #06b6d4;\n  }\n  .internal-card h3 {\n    color: #38bdf8;\n    margin: 0 0 8px 0;\n  }\n</style>\n\n<div class=\"internal-card\">\n  <h3>Embedded Style Example</h3>\n  <p>These rules were declared inside a &lt;style&gt; block in the document head.</p>\n</div>",
    "cssExample": "/* The embedded CSS inside the style tag above styles the card */\n.internal-card p {\n  margin: 0;\n  color: #94a3b8;\n}",
    "expectedOutput": "A dark slate card with a cyan left border accent and sky-blue heading.",
    "notes": "Embedded styles are useful for single-page applications or critical CSS inlining for fast first-paint metrics.",
    "commonMistakes": "Duplicating identical embedded styles across multiple HTML files instead of linking an external stylesheet."
  },
  {
    "id": 8,
    "number": "008",
    "title": "External style",
    "category": "Selectors",
    "introduction": "External styles link an independent .css file to HTML pages using the <link> tag.",
    "explanation": "External stylesheets are the industry standard for web development. By linking a shared .css file using <link rel=\"stylesheet\" href=\"style.css\">, all pages on a site share a consistent design system and benefit from browser caching.",
    "syntax": "<link rel=\"stylesheet\" href=\"styles.css\">",
    "selectorsOrProps": [
      "<link rel=\"stylesheet\">",
      "external css"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"site-card\">\n    <div class=\"card-icon\">\ud83c\udfa8</div>\n    <h3>Clean Architecture</h3>\n    <p>External CSS keeps HTML content completely separated from visual presentation rules.</p>\n  </div>\n</div>",
    "cssExample": ".site-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n\n.card-icon {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n}\n\n.site-card h3 {\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n\n.site-card p {\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}",
    "expectedOutput": "A crisp white card with subtle drop shadow, centered icon, and balanced typography.",
    "notes": "External stylesheets are cached by browsers after the first page view, drastically speeding up subsequent navigation.",
    "commonMistakes": "Providing an incorrect file path in the href attribute (e.g. forgetting relative ../ directory levels)."
  },
  {
    "id": 9,
    "number": "009",
    "title": "CSS Attribute Selectors",
    "category": "Selectors",
    "introduction": "Attribute selectors target HTML elements that possess a specified attribute regardless of its value.",
    "explanation": "Using square brackets [attribute], you can select any element that has that attribute defined. For example, [required] targets all mandatory form elements, and [disabled] targets all inactive controls.",
    "syntax": "[attribute] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[required]",
      "[title]",
      "[disabled]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p title=\"Important tip\">Hover this text to see its browser tooltip.</p>\n  <p>Standard text without any title attribute.</p>\n  <input type=\"text\" placeholder=\"Required input field\" required>\n  <input type=\"text\" placeholder=\"Optional input field\">\n</div>",
    "cssExample": "p[title] {\n  color: #4f46e5;\n  font-weight: 600;\n  border-bottom: 2px dashed #818cf8;\n  cursor: help;\n}\n\ninput[required] {\n  border: 2px solid #ef4444;\n  background: #fef2f2;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 10px;\n  display: block;\n}\n\ninput:not([required]) {\n  border: 1px solid #cbd5e1;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 8px;\n  display: block;\n}",
    "expectedOutput": "The text with title has a dashed underline and help cursor; the required input has a red validation border.",
    "notes": "Attribute selectors have the same specificity weight as class selectors (0,0,1,0).",
    "commonMistakes": "Confusing [attribute] presence with [attribute=\"value\"] exact equality."
  },
  {
    "id": 10,
    "number": "010",
    "title": "CSS Attribute Equals Selector ([attr=\"value\"])",
    "category": "Selectors",
    "introduction": "The exact equals selector [attr=\"value\"] matches elements whose attribute matches the exact string.",
    "explanation": "This selector matches elements where the attribute value is an exact match for the specified string. Commonly used to target input types like [type=\"password\"] or [type=\"submit\"].",
    "syntax": "[attr=\"exact-value\"] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[type=\"text\"]",
      "[type=\"password\"]",
      "[target=\"_blank\"]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <input type=\"text\" value=\"john_doe\" placeholder=\"Username\">\n  <input type=\"password\" value=\"secret123\">\n  <input type=\"submit\" value=\"Login to CodePlay\">\n</div>",
    "cssExample": "input[type=\"text\"] {\n  border: 1px solid #94a3b8;\n  padding: 10px;\n  border-radius: 6px;\n  display: block;\n  margin-bottom: 10px;\n  width: 250px;\n}\n\ninput[type=\"password\"] {\n  border: 1px solid #6366f1;\n  background: #f5f3ff;\n  padding: 10px;\n  border-radius: 6px;\n  display: block;\n  margin-bottom: 10px;\n  width: 250px;\n}\n\ninput[type=\"submit\"] {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n}",
    "expectedOutput": "Distinct visual styling for text input, password field, and submit button based on type attribute.",
    "notes": "Quotes around the value are optional in simple cases but strongly recommended for reliability.",
    "commonMistakes": "Spaces inside the quotes must match the HTML attribute exactly; [class=\"btn\"] won't match class=\"btn primary\"."
  },
  {
    "id": 11,
    "number": "011",
    "title": "CSS Attribute Contains Selector ([attr*=\"value\"])",
    "category": "Selectors",
    "introduction": "The contains selector [attr*=\"value\"] matches elements whose attribute contains the substring anywhere within it.",
    "explanation": "Matches elements if the attribute value contains the specified substring anywhere. Very useful for targeting links to specific domains or file extensions.",
    "syntax": "[attr*=\"substring\"] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[href*=\"github\"]",
      "[src*=\"logo\"]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"https://github.com/YUZAKIxNASA/PLAY-CODE\">GitHub Repository</a><br><br>\n  <a href=\"https://google.com\">Search Engine</a>\n</div>",
    "cssExample": "a[href*=\"github\"] {\n  color: #10b981;\n  font-weight: bold;\n  text-decoration: underline;\n}\na {\n  color: #64748b;\n  text-decoration: none;\n}",
    "expectedOutput": "GitHub link is highlighted in bold green with an underline.",
    "notes": "Great for styling external links or file extensions like a[href*=\".pdf\"].",
    "commonMistakes": "The match is case-sensitive unless the 'i' flag is added: [attr*=\"value\" i]."
  },
  {
    "id": 12,
    "number": "012",
    "title": "CSS Attribute Starts With Selector ([attr^=\"value\"])",
    "category": "Selectors",
    "introduction": "The starts-with selector [attr^=\"value\"] matches elements whose attribute begins with the specified value.",
    "explanation": "Targets elements where the attribute starts with the given string. Frequently used to style secure https:// links or telephone tel: links.",
    "syntax": "[attr^=\"prefix\"] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[href^=\"https://\"]",
      "[href^=\"tel:\"]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"https://secure.example.com\">Secure HTTPS Link</a><br><br>\n  <a href=\"http://insecure.example.com\">Insecure HTTP Link</a>\n</div>",
    "cssExample": "a[href^=\"https://\"] {\n  color: #059669;\n  font-weight: 600;\n}\na[href^=\"http://\"] {\n  color: #dc2626;\n}",
    "expectedOutput": "HTTPS link renders in green; HTTP link renders in red warning color.",
    "notes": "Excellent for appending lock icons before secure links using ::before.",
    "commonMistakes": "Make sure to include the exact protocol prefix like 'https://'."
  },
  {
    "id": 13,
    "number": "013",
    "title": "CSS Attribute With Space Selector ([attr~=\"value\"])",
    "category": "Selectors",
    "introduction": "The space-separated attribute selector [attr~=\"value\"] matches full words within space-separated lists.",
    "explanation": "Matches elements whose attribute value is a whitespace-separated list of words, one of which is exactly equal to the specified value.",
    "syntax": "[attr~=\"word\"] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[class~=\"featured\"]",
      "[data-tags~=\"tech\"]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p data-tags=\"news tech code\">Tech Article (Matched)</p>\n  <p data-tags=\"news cooking\">Cooking Article</p>\n</div>",
    "cssExample": "p[data-tags~=\"tech\"] {\n  background: #ede9fe;\n  color: #6b21a8;\n  padding: 10px;\n  border-radius: 6px;\n  font-weight: 600;\n}",
    "expectedOutput": "The first article has a purple highlight because 'tech' is an isolated word in its data-tags.",
    "notes": "This selector functions identically to the classic .class selector mechanism.",
    "commonMistakes": "It will not match substrings that are parts of other words (e.g. 'technology' won't match 'tech')."
  },
  {
    "id": 14,
    "number": "014",
    "title": "CSS Attribute With Pipe Selector ([attr|=\"value\"])",
    "category": "Selectors",
    "introduction": "The pipe attribute selector [attr|=\"value\"] matches an exact value or one followed by a hyphen (-).",
    "explanation": "Primarily designed to handle language subcode matching (such as lang=\"en\" or lang=\"en-US\").",
    "syntax": "[attr|=\"value\"] {\n  property: value;\n}",
    "selectorsOrProps": [
      "[lang|=\"en\"]",
      "[lang|=\"es\"]"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p lang=\"en\">English (en)</p>\n  <p lang=\"en-US\">English US (en-US)</p>\n  <p lang=\"es\">Spanish (es)</p>\n</div>",
    "cssExample": "p[lang|=\"en\"] {\n  border-left: 4px solid #4f46e5;\n  padding-left: 12px;\n  color: #1e1b4b;\n  font-weight: 500;\n}",
    "expectedOutput": "Both 'en' and 'en-US' receive the indigo left accent bar, while 'es' is untouched.",
    "notes": "Great for multilingual styling and locale-specific typography.",
    "commonMistakes": "The hyphen is strictly required for prefix matching; 'english' won't match 'en'."
  },
  {
    "id": 15,
    "number": "015",
    "title": "CSS Combinators",
    "category": "Selectors",
    "introduction": "Combinators explain the relationship between selectors (descendant, child, adjacent sibling, general sibling).",
    "explanation": "CSS combinators join multiple simple selectors to express structural hierarchy in the DOM tree.",
    "syntax": "A B (descendant) | A > B (child) | A + B (adjacent) | A ~ B (sibling)",
    "selectorsOrProps": [
      "combinator",
      "hierarchy"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"parent\">\n    <p>Child 1</p>\n    <div class=\"nested\"><p>Grandchild</p></div>\n    <span>Sibling Separator</span>\n    <p>Sibling 2</p>\n  </div>\n</div>",
    "cssExample": ".parent > p {\n  color: #4f46e5;\n  font-weight: bold;\n}\n.parent span + p {\n  color: #06b6d4;\n}",
    "expectedOutput": "Child 1 is purple; the sibling immediately after the span is cyan.",
    "notes": "Mastering combinators avoids needing excessive utility classes in markup.",
    "commonMistakes": "Overly deep combinators (e.g. div > ul > li > a > span) create fragile CSS tightly coupled to HTML structure."
  },
  {
    "id": 16,
    "number": "016",
    "title": "CSS Descendant Selector",
    "category": "Selectors",
    "introduction": "The descendant selector (space) matches all elements nested inside an ancestor at any depth.",
    "explanation": "Denoted by a single space between selectors. It matches all descendant elements, whether they are immediate children, grandchildren, or deeper.",
    "syntax": "ancestor descendant {\n  property: value;\n}",
    "selectorsOrProps": [
      "nav a",
      ".card p",
      "space combinator"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <nav class=\"menu\">\n    <a href=\"#\">Home</a>\n    <div><a href=\"#\">Subpage Link</a></div>\n  </nav>\n</div>",
    "cssExample": ".menu a {\n  color: #4f46e5;\n  text-decoration: none;\n  padding: 4px 8px;\n  background: #ede9fe;\n  border-radius: 4px;\n  margin-right: 6px;\n}",
    "expectedOutput": "Both links inside the menu are styled with purple text and light purple badges.",
    "notes": "Matches nested elements at any nesting depth.",
    "commonMistakes": "Be careful not to accidentally style unintended nested components (use child selector > if you only want top-level)."
  },
  {
    "id": 17,
    "number": "017",
    "title": "CSS Child Selector",
    "category": "Selectors",
    "introduction": "The child selector (>) matches only elements that are immediate, direct children of a parent.",
    "explanation": "Using the '>' symbol, this selector strictly matches elements located directly one level below the parent element.",
    "syntax": "parent > child {\n  property: value;\n}",
    "selectorsOrProps": [
      "ul > li",
      ".container > div"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <ul class=\"nav-list\">\n    <li>Top-level item 1</li>\n    <li>Top-level item 2\n      <ul><li>Nested sub-item (Unstyled)</li></ul>\n    </li>\n  </ul>\n</div>",
    "cssExample": ".nav-list > li {\n  color: #0284c7;\n  font-weight: 600;\n  padding: 6px 0;\n  border-bottom: 1px solid #e0f2fe;\n}",
    "expectedOutput": "Only top-level list items receive blue styling; the nested sub-item remains default.",
    "notes": "More performant and predictable than descendant selectors for structured components.",
    "commonMistakes": "It will not match grandchildren or deeper descendants."
  },
  {
    "id": 18,
    "number": "018",
    "title": "CSS Adjacent Sibling Selector",
    "category": "Selectors",
    "introduction": "The adjacent sibling selector (+) matches an element that immediately follows another element at the same level.",
    "explanation": "Using the '+' symbol, this targets an element that is immediately preceded by the specified sibling.",
    "syntax": "element1 + element2 {\n  property: value;\n}",
    "selectorsOrProps": [
      "h2 + p",
      "label + input"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h2>Section Title</h2>\n  <p>Lead paragraph directly following the title (Highlighted).</p>\n  <p>Secondary paragraph (Standard styling).</p>\n</div>",
    "cssExample": "h2 + p {\n  font-size: 1.15rem;\n  color: #4f46e5;\n  font-weight: 500;\n  border-left: 3px solid #818cf8;\n  padding-left: 10px;\n}\np {\n  color: #64748b;\n}",
    "expectedOutput": "The first paragraph directly under the heading is enlarged and highlighted with an indigo bar.",
    "notes": "Classic technique for styling introductory lead paragraphs or form input spacing.",
    "commonMistakes": "If any element (even a blank div) separates the two elements, the selector will not match."
  },
  {
    "id": 19,
    "number": "019",
    "title": "CSS General Sibling Selector",
    "category": "Selectors",
    "introduction": "The general sibling selector (~) matches all sibling elements that follow an element at the same level.",
    "explanation": "Using the '~' tilde symbol, this selects all following siblings that share the same parent, whether adjacent or not.",
    "syntax": "element1 ~ element2 {\n  property: value;\n}",
    "selectorsOrProps": [
      "h2 ~ p",
      ".badge ~ span"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h2>Chapter Heading</h2>\n  <div>Divider Note</div>\n  <p>Following paragraph 1.</p>\n  <p>Following paragraph 2.</p>\n</div>",
    "cssExample": "h2 ~ p {\n  color: #0d9488;\n  background: #ccfbf1;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 6px;\n}",
    "expectedOutput": "All paragraphs following the h2 receive teal badges, even with the divider div between them.",
    "notes": "Very useful for complex form state styling (e.g. input:checked ~ label).",
    "commonMistakes": "Only selects following siblings, never preceding siblings in the DOM."
  },
  {
    "id": 20,
    "number": "020",
    "title": "Text and background color",
    "category": "Colors & Typography",
    "introduction": "Sets foreground text color and background canvas color using hex, rgb, or named values.",
    "explanation": "The color property determines the text color; background-color fills the element's box.",
    "syntax": "selector {\n  color: #hex;\n  background-color: #hex;\n}",
    "selectorsOrProps": [
      "color",
      "background-color"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"contrast-card\">\n    <h3>High Contrast Card</h3>\n    <p>Good contrast improves readability and accessibility compliance.</p>\n  </div>\n</div>",
    "cssExample": ".contrast-card {\n  background-color: #1e1b4b;\n  color: #e0e7ff;\n  padding: 24px;\n  border-radius: 12px;\n}\n.contrast-card h3 {\n  color: #38bdf8;\n  margin-top: 0;\n}",
    "expectedOutput": "A deep indigo card with luminous sky-blue heading and readable ice-blue text.",
    "notes": "Ensure a contrast ratio of at least 4.5:1 for standard text (WCAG AA).",
    "commonMistakes": "Forgetting that background-color does not inherit by default (it defaults to transparent)."
  },
  {
    "id": 21,
    "number": "021",
    "title": "Font in css",
    "category": "Colors & Typography",
    "introduction": "Defines typeface families, fallbacks, and the font shorthand property in CSS.",
    "explanation": "font-family provides a prioritized list of font family names for the browser to render.",
    "syntax": "font-family: 'Poppins', system-ui, sans-serif;",
    "selectorsOrProps": [
      "font-family",
      "font-size",
      "font-style"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"font-sans\">Modern Sans-Serif Typography (Poppins)</p>\n  <p class=\"font-serif\">Classic Elegant Serif Typography (Georgia)</p>\n  <p class=\"font-mono\">Technical Monospace Code Typography</p>\n</div>",
    "cssExample": ".font-sans { font-family: 'Poppins', sans-serif; font-size: 1.1rem; color: #1e293b; }\n.font-serif { font-family: Georgia, serif; font-size: 1.15rem; color: #334155; font-style: italic; }\n.font-mono { font-family: 'Courier New', monospace; font-size: 0.95rem; color: #0284c7; background: #f0f9ff; padding: 6px; }",
    "expectedOutput": "Three distinct typographical personalities: clean modern sans, italic serif, and highlighted monospace.",
    "notes": "Always include generic family fallbacks like sans-serif, serif, or monospace at the end.",
    "commonMistakes": "Multi-word font names must be wrapped in quotation marks (e.g. 'Open Sans')."
  },
  {
    "id": 22,
    "number": "022",
    "title": "Text Properties",
    "category": "Colors & Typography",
    "introduction": "Controls text alignment, decoration, transformation, and indentation.",
    "explanation": "Properties like text-align, text-decoration, and text-transform give comprehensive control over textual presentation.",
    "syntax": "text-align: center | text-transform: uppercase | text-decoration: underline",
    "selectorsOrProps": [
      "text-align",
      "text-decoration",
      "text-transform"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h3 class=\"text-upper\">Uppercase Center Heading</h3>\n  <p class=\"text-underline\">Underlined styled paragraph.</p>\n  <p class=\"text-justify\">Clean justified text that aligns flush to both left and right container edges.</p>\n</div>",
    "cssExample": ".text-upper {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #4f46e5;\n}\n.text-underline {\n  text-decoration: underline wavy #06b6d4 2px;\n}\n.text-justify {\n  text-align: justify;\n  color: #64748b;\n}",
    "expectedOutput": "Centered uppercase heading with letter tracking, a wavy cyan underline, and justified text.",
    "notes": "text-transform: uppercase changes rendering without modifying actual screen reader text.",
    "commonMistakes": "Excessive text-align: justify can create awkward word rivers on narrow screens."
  },
  {
    "id": 23,
    "number": "023",
    "title": "Font-weight",
    "category": "Colors & Typography",
    "introduction": "Adjusts the stroke thickness of characters from thin (100) to ultra-bold (900).",
    "explanation": "Numerical values from 100 to 900 provide granular weight control when supported by the loaded typeface.",
    "syntax": "font-weight: 300 | 400 | 600 | 700 | bold;",
    "selectorsOrProps": [
      "font-weight",
      "bolder",
      "lighter"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p style=\"font-weight: 300;\">Light 300 Font Weight</p>\n  <p style=\"font-weight: 400;\">Regular 400 Font Weight</p>\n  <p style=\"font-weight: 600;\">Semi-Bold 600 Font Weight</p>\n  <p style=\"font-weight: 800;\">Extra-Bold 800 Font Weight</p>\n</div>",
    "cssExample": "p {\n  font-family: 'Poppins', sans-serif;\n  color: #0f172a;\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}",
    "expectedOutput": "Four lines displaying progressive visual boldness.",
    "notes": "Variable fonts allow any integer value between 1 and 1000.",
    "commonMistakes": "If the font file doesn't include the requested weight, the browser simulates it (faux bold)."
  },
  {
    "id": 24,
    "number": "024",
    "title": "Word-spacing",
    "category": "Colors & Typography",
    "introduction": "Modifies the amount of white space between individual words in text.",
    "explanation": "Accepts pixel, em, or rem values to tighten or spread out words.",
    "syntax": "word-spacing: 4px | 0.2em | normal;",
    "selectorsOrProps": [
      "word-spacing"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"normal-words\">Standard word spacing in clean body copy.</p>\n  <p class=\"wide-words\">Expanded word spacing for stylized display headlines.</p>\n</div>",
    "cssExample": ".normal-words {\n  word-spacing: normal;\n  color: #64748b;\n}\n.wide-words {\n  word-spacing: 8px;\n  font-weight: 600;\n  color: #4f46e5;\n}",
    "expectedOutput": "The second line has exaggerated 8px gaps between words.",
    "notes": "Use sparingly for artistic headlines or banner treatments.",
    "commonMistakes": "Large word-spacing disrupts normal reading rhythm in long text."
  },
  {
    "id": 25,
    "number": "025",
    "title": "Letter-spacing",
    "category": "Colors & Typography",
    "introduction": "Controls tracking\u2014the space between individual letterforms.",
    "explanation": "Crucial for typography: small negative values tighten large headings, while positive values improve small uppercase readability.",
    "syntax": "letter-spacing: 1.5px | -0.5px | normal;",
    "selectorsOrProps": [
      "letter-spacing",
      "tracking"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"badge-tracked\">PRO MEMBER</div>\n  <h2 class=\"heading-tight\">Compact Punchy Heading</h2>\n</div>",
    "cssExample": ".badge-tracked {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  background: #312e81;\n  color: #c7d2fe;\n  padding: 6px 12px;\n  display: inline-block;\n  border-radius: 4px;\n  margin-bottom: 12px;\n}\n.heading-tight {\n  letter-spacing: -1px;\n  color: #0f172a;\n  font-size: 1.8rem;\n  margin: 0;\n}",
    "expectedOutput": "A widely tracked small badge followed by a tightly spaced large headline.",
    "notes": "Always add letter-spacing to uppercase text for professional aesthetic finish.",
    "commonMistakes": "Using large tracking on lowercase body copy impairs readability."
  },
  {
    "id": 26,
    "number": "026",
    "title": "Line-height",
    "category": "Colors & Typography",
    "introduction": "Sets the vertical distance between lines of text in a block.",
    "explanation": "Best declared as a unitless multiplier (e.g. 1.6) so child elements scale proportionately.",
    "syntax": "line-height: 1.6 | 1.2 | 24px;",
    "selectorsOrProps": [
      "line-height",
      "leading"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"cramped\">Cramped line-height (1.1). When lines are too close together, ascenders and descenders collide, making reading difficult.</p>\n  <p class=\"comfortable\">Comfortable line-height (1.7). Generous vertical breathing room enhances readability and reduces visual fatigue.</p>\n</div>",
    "cssExample": ".cramped {\n  line-height: 1.1;\n  background: #fee2e2;\n  padding: 10px;\n  border-radius: 6px;\n  margin-bottom: 15px;\n}\n.comfortable {\n  line-height: 1.7;\n  background: #ecfdf5;\n  padding: 10px;\n  border-radius: 6px;\n}",
    "expectedOutput": "Contrasts uncomfortable cramped red text with comfortable green text.",
    "notes": "Unitless numbers (1.5) are preferred over fixed units (24px) for scalable responsive type.",
    "commonMistakes": "Setting line-height too small causes lines to overlap visually."
  },
  {
    "id": 27,
    "number": "027",
    "title": "Link in css",
    "category": "Colors & Typography",
    "introduction": "Styles hyperlink states: :link, :visited, :hover, and :active (LVHA order).",
    "explanation": "To style anchor links properly, declare states in the LVHA mnemonic order: Link, Visited, Hover, Active.",
    "syntax": "a:link, a:visited, a:hover, a:active",
    "selectorsOrProps": [
      ":link",
      ":visited",
      ":hover",
      ":active"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"#test\" class=\"custom-link\">Interactive Link Demo</a>\n</div>",
    "cssExample": ".custom-link:link, .custom-link:visited {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.custom-link:hover {\n  color: #06b6d4;\n  border-bottom-color: #06b6d4;\n}\n.custom-link:active {\n  color: #ef4444;\n}",
    "expectedOutput": "A link that turns cyan with a border underline on hover, and flashes red on click.",
    "notes": "The LVHA order is essential because subsequent rules override earlier ones at equal specificity.",
    "commonMistakes": "Declaring :hover before :link or :visited breaks hover styling."
  },
  {
    "id": 28,
    "number": "028",
    "title": "CSS Margins",
    "category": "Box Model & Spacing",
    "introduction": "Creates whitespace outside of an element's border to separate it from neighbors.",
    "explanation": "Margins can be set individually (margin-top, margin-right, margin-bottom, margin-left) or using shorthand.",
    "syntax": "margin: 20px | margin: 10px 20px | margin: auto",
    "selectorsOrProps": [
      "margin",
      "margin-top",
      "margin-bottom"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"box-outer\">\n    <div class=\"box-inner\">Separated by 25px Margin</div>\n  </div>\n</div>",
    "cssExample": ".box-outer {\n  background: #e2e8f0;\n  padding: 10px;\n  border-radius: 8px;\n}\n.box-inner {\n  margin: 25px auto;\n  background: #4f46e5;\n  color: white;\n  padding: 15px;\n  width: 70%;\n  text-align: center;\n  border-radius: 6px;\n}",
    "expectedOutput": "A centered purple inner box separated from the gray container edges by 25px margin.",
    "notes": "margin: 0 auto horizontally centers block elements with a declared width.",
    "commonMistakes": "Vertical margins collapse into a single margin between adjacent block elements."
  },
  {
    "id": 29,
    "number": "029",
    "title": "CSS Padding",
    "category": "Box Model & Spacing",
    "introduction": "Generates space inside an element between its content and its border.",
    "explanation": "Padding expands the click/touch area and gives content breathing room inside its container.",
    "syntax": "padding: 16px | padding: 12px 24px",
    "selectorsOrProps": [
      "padding",
      "padding-top",
      "padding-inline"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"padded-btn\">Generous Padding</button>\n  <button class=\"tight-btn\">Tight Padding</button>\n</div>",
    "cssExample": ".padded-btn {\n  padding: 14px 28px;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.tight-btn {\n  padding: 4px 8px;\n  background: #94a3b8;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}",
    "expectedOutput": "Contrasts a comfortable modern button with a cramped tight button.",
    "notes": "Padding cannot accept negative values (unlike margins).",
    "commonMistakes": "Without box-sizing: border-box, adding padding increases the element's rendered width."
  },
  {
    "id": 30,
    "number": "030",
    "title": "CSS Width and Height",
    "category": "Box Model & Spacing",
    "introduction": "Sets the dimensional width and height of block and inline-block elements.",
    "explanation": "Defines explicit container sizes using pixels, percentages, or viewport units.",
    "syntax": "width: 300px; height: 150px;",
    "selectorsOrProps": [
      "width",
      "height"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fixed-size\">Width: 260px<br>Height: 120px</div>\n</div>",
    "cssExample": ".fixed-size {\n  width: 260px;\n  height: 120px;\n  background: linear-gradient(135deg, #06b6d4, #3b82f6);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 10px;\n}",
    "expectedOutput": "A blue-cyan gradient box with fixed 260px by 120px dimensions.",
    "notes": "Width and height have no effect on non-replaced inline elements like span.",
    "commonMistakes": "Hardcoded heights can cause content overflow when text wraps on smaller screens."
  },
  {
    "id": 31,
    "number": "031",
    "title": "CSS Min-width and Max-width",
    "category": "Box Model & Spacing",
    "introduction": "Constrains element width within minimum and maximum boundaries for fluid responsiveness.",
    "explanation": "max-width prevents elements from overflowing their parent, while min-width prevents them from becoming too narrow.",
    "syntax": "max-width: 100% | min-width: 200px",
    "selectorsOrProps": [
      "max-width",
      "min-width"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fluid-card\">Fluid Card: max-width 400px, width 100%</div>\n</div>",
    "cssExample": ".fluid-card {\n  width: 100%;\n  max-width: 400px;\n  min-width: 180px;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}",
    "expectedOutput": "A card that adapts to container width but never expands past 400px.",
    "notes": "Combining width: 100% with max-width is the golden rule of responsive container design.",
    "commonMistakes": "min-width overrides max-width if they conflict."
  },
  {
    "id": 32,
    "number": "032",
    "title": "CSS Min-height and Max-height",
    "category": "Box Model & Spacing",
    "introduction": "Sets boundaries on vertical element dimensions.",
    "explanation": "min-height ensures a container looks substantial even with little content, while allowing growth as content increases.",
    "syntax": "min-height: 200px; max-height: 400px; overflow-y: auto;",
    "selectorsOrProps": [
      "min-height",
      "max-height"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"scroll-card\">\n    <h4>Scrollable Card (max-height: 120px)</h4>\n    <p>Line 1 of content.</p>\n    <p>Line 2 of content.</p>\n    <p>Line 3 of content causing vertical scroll.</p>\n    <p>Line 4 of content.</p>\n  </div>\n</div>",
    "cssExample": ".scroll-card {\n  max-height: 120px;\n  min-height: 80px;\n  overflow-y: auto;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  padding: 12px;\n  border-radius: 8px;\n}",
    "expectedOutput": "A compact card with a scrollbar allowing navigation through excess text.",
    "notes": "Use min-height: 100vh on main page containers to prevent footer jumping on short pages.",
    "commonMistakes": "Setting max-height without overflow: auto clips or overflows overflowing content."
  },
  {
    "id": 33,
    "number": "033",
    "title": "CSS Box Model",
    "category": "Box Model & Spacing",
    "introduction": "The fundamental layout model consisting of Content, Padding, Border, and Margin.",
    "explanation": "Every HTML element is rendered as a rectangular box. box-sizing: border-box includes padding and border in the declared width/height.",
    "syntax": "box-sizing: border-box | content-box",
    "selectorsOrProps": [
      "box-sizing",
      "content",
      "padding",
      "border",
      "margin"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"box-model-demo\">\n    <div class=\"box-inner-content\">Content Area</div>\n  </div>\n</div>",
    "cssExample": ".box-model-demo {\n  box-sizing: border-box;\n  width: 280px;\n  padding: 20px;\n  border: 4px solid #4f46e5;\n  margin: 15px auto;\n  background: #e0e7ff;\n  border-radius: 10px;\n}\n.box-inner-content {\n  background: #4f46e5;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 4px;\n}",
    "expectedOutput": "A visual diagram of nested box model layers with distinct borders and padding.",
    "notes": "Always apply * { box-sizing: border-box; } globally in modern web applications.",
    "commonMistakes": "Under content-box (default), width + padding + border produces unexpected layout overflow."
  },
  {
    "id": 34,
    "number": "034",
    "title": "CSS Display Property",
    "category": "Display & Structure",
    "introduction": "Specifies how an element is treated in page flow (block, inline, inline-block, none).",
    "explanation": "Controls outer display type affecting layout geometry and line-breaking behavior.",
    "syntax": "display: block | inline | inline-block | none",
    "selectorsOrProps": [
      "display"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <span class=\"block-span\">Span converted to display: block</span>\n  <div class=\"inline-div\">Div converted to inline-block</div>\n  <div class=\"inline-div\">Adjacent inline-block</div>\n</div>",
    "cssExample": ".block-span {\n  display: block;\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 10px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.inline-div {\n  display: inline-block;\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 8px 16px;\n  border-radius: 6px;\n}",
    "expectedOutput": "A block span spanning the full width, followed by two inline-block divs sitting side by side.",
    "notes": "display: none removes the element completely from document layout and accessibility trees.",
    "commonMistakes": "Attempting to set width/height on display: inline has zero effect in CSS."
  },
  {
    "id": 35,
    "number": "035",
    "title": "Display",
    "category": "Display & Structure",
    "introduction": "In-depth exploration of modern display values including flex, grid, and contents.",
    "explanation": "Modern CSS introduces container display modes (flex, grid) that govern formatting context for child items.",
    "syntax": "display: flex | grid | contents | flow-root",
    "selectorsOrProps": [
      "display: flex",
      "display: grid",
      "display: contents"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"flex-strip\">\n    <div>Item A</div>\n    <div>Item B</div>\n    <div>Item C</div>\n  </div>\n</div>",
    "cssExample": ".flex-strip {\n  display: flex;\n  gap: 12px;\n}\n.flex-strip div {\n  flex: 1;\n  background: #4f46e5;\n  color: white;\n  padding: 14px;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}",
    "expectedOutput": "Three equal-width flex items sharing a horizontal row.",
    "notes": "display: contents makes the container's children act as direct children of the parent.",
    "commonMistakes": "Confusing display: none (removes element) with visibility: hidden (preserves empty space)."
  },
  {
    "id": 36,
    "number": "036",
    "title": "List Style",
    "category": "Display & Structure",
    "introduction": "Styles list marker bullets, numbers, images, and positioning for <ul> and <ol>.",
    "explanation": "Controls list-style-type, list-style-position, and list-style-image.",
    "syntax": "list-style: none | list-style-type: square | disc",
    "selectorsOrProps": [
      "list-style",
      "list-style-type",
      "list-style-position"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <ul class=\"custom-list\">\n    <li>First styled list item</li>\n    <li>Second styled list item</li>\n    <li>Third styled list item</li>\n  </ul>\n</div>",
    "cssExample": ".custom-list {\n  list-style-type: '\ud83d\ude80 ';\n  padding-left: 24px;\n  color: #1e293b;\n  line-height: 1.8;\n  font-weight: 500;\n}",
    "expectedOutput": "An unordered list bulleted with rocket emojis.",
    "notes": "Modern CSS allows strings and emojis directly inside list-style-type: '\u2b50 '.",
    "commonMistakes": "Removing bullets with list-style: none often requires resetting padding-left: 0 as well."
  },
  {
    "id": 37,
    "number": "037",
    "title": "Table Style",
    "category": "Display & Structure",
    "introduction": "Styles HTML tables with borders, zebra striping, and cell alignments.",
    "explanation": "border-collapse: collapse merges adjacent cell borders into a single clean stroke.",
    "syntax": "border-collapse: collapse | border-spacing: 0",
    "selectorsOrProps": [
      "border-collapse",
      "text-align",
      "nth-child(even)"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <table class=\"styled-table\">\n    <thead><tr><th>Framework</th><th>Language</th><th>Popularity</th></tr></thead>\n    <tbody>\n      <tr><td>Vite</td><td>JavaScript</td><td>Very High</td></tr>\n      <tr><td>React</td><td>TypeScript</td><td>Dominant</td></tr>\n      <tr><td>Django</td><td>Python</td><td>High</td></tr>\n    </tbody>\n  </table>\n</div>",
    "cssExample": ".styled-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.95rem;\n}\n.styled-table th {\n  background: #1e1b4b;\n  color: white;\n  padding: 10px;\n  text-align: left;\n}\n.styled-table td {\n  padding: 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.styled-table tr:nth-child(even) {\n  background: #f8fafc;\n}",
    "expectedOutput": "A professional zebra-striped data table with dark indigo headers.",
    "notes": "Always set border-collapse: collapse to prevent double table borders.",
    "commonMistakes": "Tables require table-layout: fixed when you need strict column widths with text-overflow."
  },
  {
    "id": 38,
    "number": "038",
    "title": "Border style",
    "category": "Borders & Outlines",
    "introduction": "Defines border line patterns: solid, dashed, dotted, double, groove, ridge.",
    "explanation": "border-style sets the aesthetic drawing technique for perimeter lines.",
    "syntax": "border-style: solid | dashed | dotted | double",
    "selectorsOrProps": [
      "border-style"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"b-solid\">Solid Border</div>\n  <div class=\"b-dashed\">Dashed Border</div>\n  <div class=\"b-double\">Double Border</div>\n</div>",
    "cssExample": "div[class^=\"b-\"] {\n  padding: 12px;\n  margin-bottom: 10px;\n  border-width: 3px;\n  border-color: #4f46e5;\n  border-radius: 6px;\n}\n.b-solid { border-style: solid; }\n.b-dashed { border-style: dashed; }\n.b-double { border-style: double; border-width: 6px; }",
    "expectedOutput": "Three stacked boxes demonstrating solid, dashed, and double borders.",
    "notes": "A border will not appear unless border-style is defined (defaults to none).",
    "commonMistakes": "Specifying border-width without border-style results in an invisible border."
  },
  {
    "id": 39,
    "number": "039",
    "title": "Border-radius",
    "category": "Borders & Outlines",
    "introduction": "Rounds the outer corners of an element's box.",
    "explanation": "Allows pixels, rems, or 50% for circles and pills.",
    "syntax": "border-radius: 8px | 50% | 12px 4px",
    "selectorsOrProps": [
      "border-radius"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"circle-avatar\">CP</div>\n  <div class=\"rounded-card\">Subtle 12px Radius Card</div>\n</div>",
    "cssExample": ".circle-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: white;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  margin-right: 15px;\n}\n.rounded-card {\n  display: inline-block;\n  background: #f1f5f9;\n  padding: 16px;\n  border-radius: 14px;\n  color: #1e293b;\n}",
    "expectedOutput": "A circular purple avatar alongside a gently rounded container card.",
    "notes": "Setting border-radius: 50% on a square element creates a perfect circle.",
    "commonMistakes": "Children can overflow rounded corners unless overflow: hidden is set on the parent."
  },
  {
    "id": 40,
    "number": "040",
    "title": "Border-color",
    "category": "Borders & Outlines",
    "introduction": "Applies color to borders with independent per-side customization.",
    "explanation": "Can style individual sides (border-top-color) or use shorthand for all four edges.",
    "syntax": "border-color: #4f46e5 | transparent",
    "selectorsOrProps": [
      "border-color",
      "border-top-color"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"multi-color-box\">Multi-sided Border Color</div>\n</div>",
    "cssExample": ".multi-color-box {\n  padding: 18px;\n  border-width: 4px;\n  border-style: solid;\n  border-top-color: #ef4444;\n  border-right-color: #10b981;\n  border-bottom-color: #3b82f6;\n  border-left-color: #f59e0b;\n  border-radius: 8px;\n  font-weight: 600;\n  text-align: center;\n}",
    "expectedOutput": "A box bordered by red (top), green (right), blue (bottom), and amber (left).",
    "notes": "Transparent border colors are used in CSS triangle creation tricks.",
    "commonMistakes": "border-color defaults to currentColor (the element's font color) if omitted."
  },
  {
    "id": 41,
    "number": "041",
    "title": "CSS Outline",
    "category": "Borders & Outlines",
    "introduction": "Draws a highlight stroke outside the border edge without consuming layout space.",
    "explanation": "Outlines do not affect element dimensions or cause layout reflows.",
    "syntax": "outline: 2px solid #06b6d4;",
    "selectorsOrProps": [
      "outline",
      "outline-style",
      "outline-color"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"outline-demo\">Focused Button (with Outline)</button>\n</div>",
    "cssExample": ".outline-demo {\n  padding: 12px 24px;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  outline: 3px solid #06b6d4;\n  cursor: pointer;\n}",
    "expectedOutput": "A dark button framed by a glowing cyan outline without layout shift.",
    "notes": "Never remove outline: none without providing an accessible alternative focus indicator.",
    "commonMistakes": "Outlines are drawn outside the border and cannot have independent per-side styles."
  },
  {
    "id": 42,
    "number": "042",
    "title": "CSS Outline Offset",
    "category": "Borders & Outlines",
    "introduction": "Creates a visible gap between an element's border and its outline stroke.",
    "explanation": "outline-offset moves the outline away from the border edge (or inward with negative values).",
    "syntax": "outline-offset: 4px | -2px",
    "selectorsOrProps": [
      "outline-offset"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"offset-box\">Detached Outline (4px Gap)</div>\n</div>",
    "cssExample": ".offset-box {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  outline: 2px dashed #06b6d4;\n  outline-offset: 6px;\n  margin: 15px;\n  text-align: center;\n  font-weight: bold;\n}",
    "expectedOutput": "A purple box surrounded by a detached cyan dashed line floating 6px outside.",
    "notes": "Negative outline-offset values draw the outline inside the element box.",
    "commonMistakes": "outline-offset is supported across all modern browsers."
  },
  {
    "id": 43,
    "number": "043",
    "title": "Opacity",
    "category": "Positioning & Layers",
    "introduction": "Controls element transparency from 0.0 (completely invisible) to 1.0 (fully opaque).",
    "explanation": "The opacity property affects the element and all of its nested children.",
    "syntax": "opacity: 0.75 | 0.5 | 1.0",
    "selectorsOrProps": [
      "opacity"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"opaque-item full-op\">Opacity 1.0</div>\n  <div class=\"opaque-item mid-op\">Opacity 0.6</div>\n  <div class=\"opaque-item low-op\">Opacity 0.25</div>\n</div>",
    "cssExample": ".opaque-item {\n  background: #4f46e5;\n  color: white;\n  padding: 14px;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  font-weight: bold;\n  text-align: center;\n}\n.full-op { opacity: 1.0; }\n.mid-op { opacity: 0.6; }\n.low-op { opacity: 0.25; }",
    "expectedOutput": "Three purple bars showing progressive levels of see-through transparency.",
    "notes": "If you only want a translucent background without fading child text, use rgba() or hsla() instead.",
    "commonMistakes": "Opacity creates a new stacking context, affecting z-index layering."
  },
  {
    "id": 44,
    "number": "044",
    "title": "Fixed position",
    "category": "Positioning & Layers",
    "introduction": "Positions an element relative to the browser viewport, keeping it fixed during scrolling.",
    "explanation": "Fixed elements stay locked to the screen coordinates defined by top, right, bottom, and left.",
    "syntax": "position: fixed; top: 0; right: 0;",
    "selectorsOrProps": [
      "position: fixed",
      "z-index"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"height: 180px; overflow-y: auto; position: relative;\">\n  <div class=\"fixed-banner\">Fixed Top Banner</div>\n  <div style=\"padding-top: 50px;\">\n    <p>Scroll content line 1...</p>\n    <p>Scroll content line 2...</p>\n    <p>Scroll content line 3...</p>\n    <p>Scroll content line 4...</p>\n  </div>\n</div>",
    "cssExample": ".fixed-banner {\n  position: sticky; /* Note: inside scroll sandbox sticky simulates fixed behavior */\n  top: 0;\n  background: #4f46e5;\n  color: white;\n  padding: 10px;\n  font-weight: bold;\n  text-align: center;\n  z-index: 10;\n}",
    "expectedOutput": "A banner pinned to the top while text content scrolls smoothly underneath.",
    "notes": "Fixed elements are removed from normal flow, so add padding to sibling content to prevent overlap.",
    "commonMistakes": "Transforms on any parent element can break fixed viewport positioning in some browsers."
  },
  {
    "id": 45,
    "number": "045",
    "title": "Static position",
    "category": "Positioning & Layers",
    "introduction": "The default positioning scheme where elements flow naturally in source document order.",
    "explanation": "Static elements follow standard document layout. Offset properties (top, left, z-index) have no effect.",
    "syntax": "position: static;",
    "selectorsOrProps": [
      "position: static"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"static-item\">Static Item 1 (Normal Flow)</div>\n  <div class=\"static-item\">Static Item 2 (Normal Flow)</div>\n</div>",
    "cssExample": ".static-item {\n  position: static;\n  top: 50px; /* Ignored on static elements */\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  padding: 14px;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  color: #334155;\n}",
    "expectedOutput": "Two standard block elements stacked one beneath the other in normal sequence.",
    "notes": "Every element is position: static by default.",
    "commonMistakes": "Trying to use top, right, bottom, left, or z-index on a static element does nothing."
  },
  {
    "id": 46,
    "number": "046",
    "title": "Relative position",
    "category": "Positioning & Layers",
    "introduction": "Positions an element relative to its normal position, leaving its original space intact.",
    "explanation": "Offsets (top, left) shift the visual presentation without disturbing neighboring elements.",
    "syntax": "position: relative; top: -10px; left: 15px;",
    "selectorsOrProps": [
      "position: relative"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"normal-box\">Box in normal flow</div>\n  <div class=\"shifted-box\">Shifted 15px down & right</div>\n  <div class=\"normal-box\">Subsequent box</div>\n</div>",
    "cssExample": ".normal-box {\n  background: #e2e8f0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.shifted-box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n  background: #4f46e5;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  z-index: 2;\n}",
    "expectedOutput": "The purple box is offset 10px down and 20px right from where it would naturally sit.",
    "notes": "position: relative is most commonly used as the reference container for absolute children.",
    "commonMistakes": "The space originally reserved for the relative element remains empty in the document flow."
  },
  {
    "id": 47,
    "number": "047",
    "title": "absolute position",
    "category": "Positioning & Layers",
    "introduction": "Removes an element from normal flow, positioning it relative to its nearest positioned ancestor.",
    "explanation": "INVENTORY NOTICE: Exact lowercase title 'absolute position'. Positions elements relative to the closest ancestor with position other than static.",
    "syntax": "position: absolute; top: 0; right: 0;",
    "selectorsOrProps": [
      "position: absolute"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"parent-rel\">\n    Parent (position: relative)\n    <span class=\"badge-abs\">NEW</span>\n  </div>\n</div>",
    "cssExample": ".parent-rel {\n  position: relative;\n  background: #1e1b4b;\n  color: #c7d2fe;\n  padding: 30px;\n  border-radius: 10px;\n}\n.badge-abs {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #10b981;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n}",
    "expectedOutput": "A dark container with a green 'NEW' badge pinned to its top-right corner.",
    "notes": "If no positioned ancestor exists, it positions relative to the initial containing block (viewport).",
    "commonMistakes": "Forgetting position: relative on the parent causes the absolute element to fly to the page edge."
  },
  {
    "id": 48,
    "number": "048",
    "title": "Absolute position",
    "category": "Positioning & Layers",
    "introduction": "Advanced absolute positioning techniques including perfect coordinate centering.",
    "explanation": "Combining top: 50%, left: 50%, and transform: translate(-50%, -50%) centers an element perfectly.",
    "syntax": "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
    "selectorsOrProps": [
      "position: absolute",
      "center transform"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"stage-box\">\n    <div class=\"centered-modal\">Centered Dialog</div>\n  </div>\n</div>",
    "cssExample": ".stage-box {\n  position: relative;\n  height: 160px;\n  background: #f1f5f9;\n  border: 2px dashed #94a3b8;\n  border-radius: 10px;\n}\n.centered-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #4f46e5;\n  color: white;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-weight: bold;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}",
    "expectedOutput": "A purple modal box resting in the exact geometrical center of its parent stage.",
    "notes": "This technique works regardless of the width or height of the centered element.",
    "commonMistakes": "Omitting the translate(-50%, -50%) aligns the top-left corner to the center, not the element itself."
  },
  {
    "id": 49,
    "number": "049",
    "title": "Absolute with image",
    "category": "Positioning & Layers",
    "introduction": "Pins overlays, badges, and textual captions over image frames using absolute positioning.",
    "explanation": "Wrapping an image in a relative container allows badges and captions to sit neatly over the graphic.",
    "syntax": ".img-wrapper { position: relative; } .badge { position: absolute; }",
    "selectorsOrProps": [
      "position: absolute",
      "image overlay"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"card-img-wrap\">\n    <div class=\"img-placeholder\">Hero Preview Image</div>\n    <span class=\"pill-tag\">Featured</span>\n    <div class=\"caption-bar\">Scenic Mountain Landscape</div>\n  </div>\n</div>",
    "cssExample": ".card-img-wrap {\n  position: relative;\n  width: 100%;\n  max-width: 320px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.img-placeholder {\n  background: linear-gradient(135deg, #0284c7, #0f172a);\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n.pill-tag {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #f59e0b;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: bold;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.caption-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}",
    "expectedOutput": "An image banner with an amber 'Featured' tag in top-left and dark caption overlay at bottom.",
    "notes": "Always set overflow: hidden on the parent if you want rounded image corners to clip overlays.",
    "commonMistakes": "Setting right: 0 and left: 0 stretches an absolute element across the full parent width."
  },
  {
    "id": 50,
    "number": "050",
    "title": "Fixed footer",
    "category": "Positioning & Layers",
    "introduction": "Creates a persistent bottom toolbar or footer that remains pinned as content scrolls.",
    "explanation": "Using position: fixed and bottom: 0 pins an element to the screen bottom.",
    "syntax": "position: fixed; bottom: 0; left: 0; width: 100%;",
    "selectorsOrProps": [
      "position: fixed",
      "bottom: 0"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"height: 180px; overflow-y: auto; position: relative;\">\n  <div style=\"padding-bottom: 50px;\">\n    <p>Long scrolling page content item 1...</p>\n    <p>Long scrolling page content item 2...</p>\n    <p>Long scrolling page content item 3...</p>\n  </div>\n  <footer class=\"fixed-bottom-bar\">\n    <span>CodePlay Fixed Footer Bar</span>\n    <button>Action</button>\n  </footer>\n</div>",
    "cssExample": ".fixed-bottom-bar {\n  position: sticky;\n  bottom: 0;\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.fixed-bottom-bar button {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 6px 14px;\n  border-radius: 6px;\n}",
    "expectedOutput": "A persistent dark footer pinned to the bottom of the container with action button.",
    "notes": "Add padding-bottom to the body or main container equal to the footer height so content isn't obscured.",
    "commonMistakes": "On mobile screens, fixed elements can cover input fields when the virtual keyboard opens."
  },
  {
    "id": 51,
    "number": "051",
    "title": "CSS Float and Clear",
    "category": "Floats & Clearing",
    "introduction": "The float property takes an element out of normal flow and shifts it left or right, allowing text to wrap.",
    "explanation": "Historically used for page layout, float is now best reserved for wrapping text around editorial images. The clear property prevents subsequent elements from wrapping alongside floated items.",
    "syntax": "float: left | right | none;\nclear: left | right | both;",
    "selectorsOrProps": [
      "float",
      "clear"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"floated-box\">Floated Left</div>\n  <p>This text flows around the right side of the floated box naturally in standard editorial fashion.</p>\n  <div class=\"cleared-box\">Cleared Content Below</div>\n</div>",
    "cssExample": ".floated-box {\n  float: left;\n  width: 110px;\n  height: 70px;\n  background: #4f46e5;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  font-weight: bold;\n}\n.cleared-box {\n  clear: both;\n  background: #e2e8f0;\n  padding: 10px;\n  border-radius: 4px;\n}",
    "expectedOutput": "Text wraps to the right of the purple box, and the cleared box sits cleanly underneath.",
    "notes": "Use Flexbox or Grid for overall UI layout; reserve float for wrapping text around photos.",
    "commonMistakes": "A parent element collapses to 0 height if all its children are floated without a clearfix."
  },
  {
    "id": 52,
    "number": "052",
    "title": "Float",
    "category": "Floats & Clearing",
    "introduction": "A focused look at shifting inline and block content to the left or right perimeter.",
    "explanation": "float: left or float: right pushes an element to the container edge. Adjacent inline elements wrap around its opposite side.",
    "syntax": "float: left | right;",
    "selectorsOrProps": [
      "float: left",
      "float: right"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"badge-float\">\u2b50 4.9 Rating</div>\n  <p>Our interactive platform has helped thousands of students master HTML, CSS, and web development through live coding exercises.</p>\n</div>",
    "cssExample": ".badge-float {\n  float: right;\n  background: #fef3c7;\n  color: #b45309;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: bold;\n  margin-left: 15px;\n  border: 1px solid #fde68a;\n}\np {\n  color: #334155;\n  line-height: 1.6;\n}",
    "expectedOutput": "The star rating badge floats to the top-right corner while article text fills around it.",
    "notes": "Floated elements become block-level formatting boxes automatically.",
    "commonMistakes": "Floated elements can bleed out of their parents if parent container has no overflow handling."
  },
  {
    "id": 53,
    "number": "053",
    "title": "Float and clear",
    "category": "Floats & Clearing",
    "introduction": "The clearfix technique using the ::after pseudo-element to restore container height.",
    "explanation": "The modern clearfix injects an invisible cleared block element at the end of the container, forcing the parent to encompass its floated children.",
    "syntax": ".clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}",
    "selectorsOrProps": [
      "::after",
      "clear: both",
      "display: flow-root"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"parent-cf\">\n    <div class=\"box-f1\">Float Left</div>\n    <div class=\"box-f2\">Float Right</div>\n  </div>\n  <p>The container above cleanly wraps both children without collapsing.</p>\n</div>",
    "cssExample": ".parent-cf {\n  background: #ede9fe;\n  border: 2px solid #818cf8;\n  padding: 15px;\n  border-radius: 8px;\n  display: flow-root; /* Modern clearfix */\n}\n.box-f1 {\n  float: left;\n  background: #4f46e5;\n  color: white;\n  padding: 10px 16px;\n  border-radius: 4px;\n}\n.box-f2 {\n  float: right;\n  background: #06b6d4;\n  color: white;\n  padding: 10px 16px;\n  border-radius: 4px;\n}",
    "expectedOutput": "Both floated boxes are fully contained within the light purple parent box.",
    "notes": "Modern CSS: display: flow-root on the parent is the cleanest, zero-hack clearfix solution.",
    "commonMistakes": "Using <div style=\"clear:both\"></div> adds unnecessary empty tags to semantic HTML."
  },
  {
    "id": 54,
    "number": "054",
    "title": "CSS Flexbox",
    "category": "Flexbox Layout",
    "introduction": "The Flexible Box Layout module provides 1-dimensional distribution and alignment.",
    "explanation": "Setting display: flex turns an element into a flex container and its children into flex items. Items easily align, distribute, and grow/shrink.",
    "syntax": "display: flex;\ngap: 16px;",
    "selectorsOrProps": [
      "display: flex",
      "flex-grow",
      "gap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"flex-row\">\n    <div class=\"card\">Feature 1</div>\n    <div class=\"card\">Feature 2</div>\n    <div class=\"card\">Feature 3</div>\n  </div>\n</div>",
    "cssExample": ".flex-row {\n  display: flex;\n  gap: 15px;\n}\n.card {\n  flex: 1;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n}",
    "expectedOutput": "Three cards evenly sharing the container width in a responsive horizontal row.",
    "notes": "Flexbox is ideal for 1D layouts (rows or columns); Grid is better for 2D layouts.",
    "commonMistakes": "Remember that float, clear, and vertical-align have no effect on flex items."
  },
  {
    "id": 55,
    "number": "055",
    "title": "CSS Flex Direction",
    "category": "Flexbox Layout",
    "introduction": "Controls the primary axis along which flex items are laid out.",
    "explanation": "flex-direction establishes the main axis: row (horizontal left-to-right), row-reverse, column (vertical), or column-reverse.",
    "syntax": "flex-direction: row | column | row-reverse | column-reverse;",
    "selectorsOrProps": [
      "flex-direction"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"flex-dir-demo\">\n    <div class=\"f-item\">Step 1: Learn</div>\n    <div class=\"f-item\">Step 2: Code</div>\n    <div class=\"f-item\">Step 3: Build</div>\n  </div>\n</div>",
    "cssExample": ".flex-dir-demo {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 250px;\n}\n.f-item {\n  background: #4f46e5;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  font-weight: 500;\n}",
    "expectedOutput": "Three sequential steps neatly stacked in a vertical column.",
    "notes": "When flex-direction changes to column, justify-content controls vertical alignment and align-items controls horizontal.",
    "commonMistakes": "Switching to row-reverse changes visual display order but does not alter keyboard tab order."
  },
  {
    "id": 56,
    "number": "056",
    "title": "CSS Justify Content",
    "category": "Flexbox Layout",
    "introduction": "Distributes extra space between and around flex items along the main axis.",
    "explanation": "Accepts values like flex-start, center, flex-end, space-between, space-around, and space-evenly.",
    "syntax": "justify-content: space-between | center | space-evenly;",
    "selectorsOrProps": [
      "justify-content"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"jc-demo\">\n    <button>Left Action</button>\n    <button>Right Action</button>\n  </div>\n</div>",
    "cssExample": ".jc-demo {\n  display: flex;\n  justify-content: space-between;\n  background: #0f172a;\n  padding: 12px 16px;\n  border-radius: 8px;\n}\nbutton {\n  background: #06b6d4;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}",
    "expectedOutput": "Two buttons pushed to the extreme left and right ends of a dark navigation strip.",
    "notes": "space-between puts zero space on outer edges; space-evenly distributes equal space everywhere.",
    "commonMistakes": "justify-content only works when there is leftover space along the main axis."
  },
  {
    "id": 57,
    "number": "057",
    "title": "CSS Align Items",
    "category": "Flexbox Layout",
    "introduction": "Controls alignment of flex items along the cross axis (perpendicular to the main axis).",
    "explanation": "Common values are stretch (default), center, flex-start, and flex-end.",
    "syntax": "align-items: center | flex-start | stretch;",
    "selectorsOrProps": [
      "align-items"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"align-box\">\n    <span class=\"badge-lg\">Icon</span>\n    <span>Vertically centered text label</span>\n  </div>\n</div>",
    "cssExample": ".align-box {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  height: 80px;\n  background: #f1f5f9;\n  padding: 0 16px;\n  border-radius: 8px;\n}\n.badge-lg {\n  background: #4f46e5;\n  color: white;\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-weight: bold;\n}",
    "expectedOutput": "An icon badge and text label centered vertically in an 80px tall box.",
    "notes": "align-items: center is the universal modern solution for vertical centering.",
    "commonMistakes": "Items stretch to full container height by default unless a specific height is given."
  },
  {
    "id": 58,
    "number": "058",
    "title": "CSS Align Self",
    "category": "Flexbox Layout",
    "introduction": "Overrides the parent's align-items setting for a single individual flex item.",
    "explanation": "Allows specific items to break away from container cross-axis rules.",
    "syntax": "align-self: flex-start | center | flex-end;",
    "selectorsOrProps": [
      "align-self"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"as-container\">\n    <div class=\"item\">Normal (Center)</div>\n    <div class=\"item self-bottom\">Overridden (flex-end)</div>\n    <div class=\"item\">Normal (Center)</div>\n  </div>\n</div>",
    "cssExample": ".as-container {\n  display: flex;\n  align-items: center;\n  height: 120px;\n  background: #e2e8f0;\n  padding: 10px;\n  gap: 10px;\n  border-radius: 8px;\n}\n.item {\n  background: #4f46e5;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n}\n.self-bottom {\n  align-self: flex-end;\n  background: #06b6d4;\n}",
    "expectedOutput": "The middle cyan item sits at the bottom while its siblings stay centered.",
    "notes": "Very useful for pinning an action button or alert badge to the bottom of a flex card.",
    "commonMistakes": "align-self only affects cross-axis alignment, not the main axis."
  },
  {
    "id": 59,
    "number": "059",
    "title": "CSS Align Content",
    "category": "Flexbox Layout",
    "introduction": "Aligns multi-line flex rows along the cross axis when flex-wrap is active.",
    "explanation": "align-content only takes effect when there are multiple lines of flex items.",
    "syntax": "align-content: space-between | center | flex-start;",
    "selectorsOrProps": [
      "align-content"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"ac-container\">\n    <div class=\"tag\">HTML</div><div class=\"tag\">CSS</div>\n    <div class=\"tag\">JavaScript</div><div class=\"tag\">Vite</div>\n    <div class=\"tag\">React</div><div class=\"tag\">Node</div>\n  </div>\n</div>",
    "cssExample": ".ac-container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-around;\n  height: 140px;\n  background: #0f172a;\n  padding: 10px;\n  border-radius: 8px;\n}\n.tag {\n  background: #38bdf8;\n  color: #0f172a;\n  padding: 6px 12px;\n  border-radius: 4px;\n  font-weight: bold;\n  margin: 4px;\n}",
    "expectedOutput": "Multiple lines of technology tags spaced evenly within a dark 140px container.",
    "notes": "align-content has zero effect on single-line flex containers (where flex-wrap is nowrap).",
    "commonMistakes": "Don't confuse align-content (lines) with align-items (individual items within a line)."
  },
  {
    "id": 60,
    "number": "060",
    "title": "CSS Flex Wrap",
    "category": "Flexbox Layout",
    "introduction": "Determines whether flex items are forced onto a single line or wrap onto multiple lines.",
    "explanation": "Setting flex-wrap: wrap prevents flex items from shrinking indefinitely or overflowing.",
    "syntax": "flex-wrap: wrap | nowrap | wrap-reverse;",
    "selectorsOrProps": [
      "flex-wrap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"wrap-demo\">\n    <div class=\"w-item\">Box 1</div>\n    <div class=\"w-item\">Box 2</div>\n    <div class=\"w-item\">Box 3</div>\n    <div class=\"w-item\">Box 4</div>\n  </div>\n</div>",
    "cssExample": ".wrap-demo {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.w-item {\n  flex: 1 1 120px;\n  background: #4f46e5;\n  color: white;\n  padding: 18px;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}",
    "expectedOutput": "Items arrange in columns and wrap cleanly onto a second line as width constraints dictate.",
    "notes": "flex-wrap: wrap combined with flex: 1 1 minWidth provides intrinsic responsiveness without media queries.",
    "commonMistakes": "flex-wrap defaults to nowrap, which forces items to shrink or overflow."
  },
  {
    "id": 61,
    "number": "061",
    "title": "CSS Grid vs. Table Layout",
    "category": "Grid Layout",
    "introduction": "CSS Grid provides two-dimensional layout for rows and columns without polluting HTML semantics.",
    "explanation": "While HTML tables are meant exclusively for tabular data, CSS Grid provides complete structural separation for page layout.",
    "syntax": "display: grid;\ngrid-template-columns: repeat(3, 1fr);",
    "selectorsOrProps": [
      "display: grid",
      "semantic layout"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"grid-comparison\">\n    <header>Header Bar</header>\n    <aside>Sidebar</aside>\n    <main>Main Content Area</main>\n    <footer>Footer Area</footer>\n  </div>\n</div>",
    "cssExample": ".grid-comparison {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  gap: 10px;\n  background: #f1f5f9;\n  padding: 12px;\n  border-radius: 8px;\n}\nheader, footer { grid-column: span 2; background: #1e1b4b; color: white; padding: 10px; border-radius: 4px; text-align: center; }\naside { background: #cbd5e1; padding: 15px; border-radius: 4px; }\nmain { background: #ffffff; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; }",
    "expectedOutput": "A 2D application layout with header, sidebar, main body, and footer.",
    "notes": "Never use HTML tables for website layout; reserve <table> strictly for tabular data.",
    "commonMistakes": "Grid can easily rearrange areas visually using grid-template-areas without altering DOM structure."
  },
  {
    "id": 62,
    "number": "062",
    "title": "Fraction unit with multiple column",
    "category": "Grid Layout",
    "introduction": "The fr unit represents a fraction of the available space inside the grid container.",
    "explanation": "grid-template-columns: 1fr 2fr 1fr divides available space into 4 equal shares (25%, 50%, 25%).",
    "syntax": "grid-template-columns: 1fr 2fr 1fr;",
    "selectorsOrProps": [
      "1fr",
      "grid-template-columns"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fr-demo\">\n    <div>1fr (25%)</div>\n    <div class=\"wide\">2fr (50%)</div>\n    <div>1fr (25%)</div>\n  </div>\n</div>",
    "cssExample": ".fr-demo {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 10px;\n}\n.fr-demo div {\n  background: #4f46e5;\n  color: white;\n  padding: 20px 10px;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}\n.fr-demo .wide {\n  background: #06b6d4;\n}",
    "expectedOutput": "Three columns where the middle cyan column is exactly twice as wide as its siblings.",
    "notes": "The fr unit distributes space AFTER fixed-size items and gaps are accounted for.",
    "commonMistakes": "Mixing percentages with gaps causes horizontal scrollbars; fr units handle gaps automatically."
  },
  {
    "id": 63,
    "number": "063",
    "title": "Grid gap",
    "category": "Grid Layout",
    "introduction": "Defines gutters between rows and columns without adding margin to outer perimeter edges.",
    "explanation": "gap (and row-gap / column-gap) provides clean spacing between grid tracks.",
    "syntax": "gap: 20px | row-gap: 15px | column-gap: 25px;",
    "selectorsOrProps": [
      "gap",
      "row-gap",
      "column-gap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"gap-grid\">\n    <div>Box 1</div><div>Box 2</div>\n    <div>Box 3</div><div>Box 4</div>\n  </div>\n</div>",
    "cssExample": ".gap-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px 24px; /* row-gap column-gap */\n}\n.gap-grid div {\n  background: #334155;\n  color: white;\n  padding: 18px;\n  text-align: center;\n  border-radius: 6px;\n}",
    "expectedOutput": "A 2x2 grid with 16px vertical gap and 24px horizontal gap between items.",
    "notes": "gap replaces the older, deprecated grid-gap property and works on both Grid and Flexbox.",
    "commonMistakes": "gap only applies between items, never between items and the outer container border."
  },
  {
    "id": 64,
    "number": "064",
    "title": "Grid template rows",
    "category": "Grid Layout",
    "introduction": "Defines explicit track sizing for vertical grid rows.",
    "explanation": "grid-template-rows specifies the height of each row in sequence (e.g. auto 1fr auto).",
    "syntax": "grid-template-rows: 60px 1fr 40px;",
    "selectorsOrProps": [
      "grid-template-rows"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"row-grid\">\n    <div class=\"r-head\">Header (50px)</div>\n    <div class=\"r-body\">Body (Flexible 1fr)</div>\n    <div class=\"r-foot\">Footer (40px)</div>\n  </div>\n</div>",
    "cssExample": ".row-grid {\n  display: grid;\n  grid-template-rows: 50px 100px 40px;\n  gap: 8px;\n}\n.row-grid div {\n  background: #4f46e5;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  font-weight: 500;\n}",
    "expectedOutput": "Three rows explicitly sized to 50px, 100px, and 40px tall.",
    "notes": "Rows default to auto (sizing to fit their content) if grid-template-rows is omitted.",
    "commonMistakes": "Explicitly sizing rows too small can cause content inside to overflow."
  },
  {
    "id": 65,
    "number": "065",
    "title": "Column repeat",
    "category": "Grid Layout",
    "introduction": "Uses the repeat() notation to define multiple identical column tracks succinctly.",
    "explanation": "Instead of writing 1fr 1fr 1fr 1fr, write repeat(4, 1fr) to keep code clean and readable.",
    "syntax": "grid-template-columns: repeat(4, 1fr);",
    "selectorsOrProps": [
      "repeat()",
      "grid-template-columns"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"repeat-grid\">\n    <div>1</div><div>2</div><div>3</div><div>4</div>\n  </div>\n</div>",
    "cssExample": ".repeat-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n.repeat-grid div {\n  background: #0284c7;\n  color: white;\n  padding: 15px;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}",
    "expectedOutput": "Four equal-width blue columns created with a single repeat(4, 1fr) declaration.",
    "notes": "repeat() also accepts complex repeating patterns: repeat(2, 1fr 2fr).",
    "commonMistakes": "repeat() is not supported inside subgrid track definitions."
  },
  {
    "id": 66,
    "number": "066",
    "title": "Repeat - auto-fit",
    "category": "Grid Layout",
    "introduction": "Creates intrinsically responsive grids that automatically fit as many columns as possible.",
    "explanation": "repeat(auto-fit, minmax(180px, 1fr)) creates fluid columns that wrap without media queries.",
    "syntax": "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",
    "selectorsOrProps": [
      "auto-fit",
      "minmax()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"autofit-grid\">\n    <div>Card A</div><div>Card B</div><div>Card C</div>\n  </div>\n</div>",
    "cssExample": ".autofit-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 12px;\n}\n.autofit-grid div {\n  background: linear-gradient(135deg, #4f46e5, #06b6d4);\n  color: white;\n  padding: 20px;\n  text-align: center;\n  border-radius: 8px;\n  font-weight: bold;\n}",
    "expectedOutput": "Fluid responsive cards that wrap into fewer or more columns depending on available width.",
    "notes": "auto-fit collapses empty tracks to 0px, allowing existing items to stretch across the full width.",
    "commonMistakes": "auto-fill preserves empty tracks, which may leave blank space on the right."
  },
  {
    "id": 67,
    "number": "067",
    "title": "CSS Units (px, em, rem, vh, vw, etc.)",
    "category": "Units & Math",
    "introduction": "Overview of absolute (px) vs relative (rem, em, vh, vw, %) measurement units.",
    "explanation": "rem scales relative to the root html font-size; em scales relative to parent font-size; vh/vw scale with viewport.",
    "syntax": "font-size: 1.25rem; width: 50vw; height: 100px;",
    "selectorsOrProps": [
      "rem",
      "em",
      "vh",
      "vw",
      "px"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"unit-px\">Fixed 16px</p>\n  <p class=\"unit-rem\">Relative 1.2rem (Scales with user accessibility preferences)</p>\n  <div class=\"unit-vw\">50% Container Width</div>\n</div>",
    "cssExample": ".unit-px { font-size: 16px; color: #64748b; }\n.unit-rem { font-size: 1.2rem; color: #4f46e5; font-weight: 600; }\n.unit-vw { width: 80%; background: #06b6d4; color: white; padding: 10px; border-radius: 4px; text-align: center; }",
    "expectedOutput": "Demonstrates pixel sizes alongside accessible rems and fluid percentage width.",
    "notes": "Use rem for font sizes and spacing to respect browser accessibility zoom settings.",
    "commonMistakes": "Avoid em for padding when nested deeply because compound multiplier effects can occur."
  },
  {
    "id": 68,
    "number": "068",
    "title": "CSS Calc() Function",
    "category": "Units & Math",
    "introduction": "Performs dynamic mathematical calculations (+, -, *, /) directly inside CSS values.",
    "explanation": "calc() allows mixing different units seamlessly, such as subtracting fixed pixels from 100%.",
    "syntax": "width: calc(100% - 40px);",
    "selectorsOrProps": [
      "calc()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"calc-box\">Width: calc(100% - 60px)</div>\n</div>",
    "cssExample": ".calc-box {\n  width: calc(100% - 60px);\n  margin: 0 auto;\n  background: #4f46e5;\n  color: white;\n  padding: 16px;\n  text-align: center;\n  border-radius: 8px;\n  font-weight: bold;\n}",
    "expectedOutput": "A box precisely 60px narrower than its parent container, centered with auto margins.",
    "notes": "Spaces are strictly required around the + and - operators inside calc().",
    "commonMistakes": "Writing calc(100%-40px) without spaces causes a CSS parse error."
  },
  {
    "id": 69,
    "number": "069",
    "title": "CSS Clamp() Function",
    "category": "Units & Math",
    "introduction": "Clamps a value between an absolute minimum, an ideal fluid value, and an absolute maximum.",
    "explanation": "clamp(min, preferred, max) is the holy grail of modern fluid typography and responsive spacing.",
    "syntax": "font-size: clamp(1rem, 2.5vw, 2.5rem);",
    "selectorsOrProps": [
      "clamp()",
      "fluid typography"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <h1 class=\"clamp-heading\">Fluid Heading with clamp()</h1>\n  <p>Resize your browser to watch the heading scale fluidly without media queries.</p>\n</div>",
    "cssExample": ".clamp-heading {\n  font-size: clamp(1.2rem, 4vw, 2.4rem);\n  color: #1e1b4b;\n  margin: 0;\n  line-height: 1.2;\n}",
    "expectedOutput": "A heading that smoothly scales in size based on viewport width while never shrinking below 1.2rem.",
    "notes": "Replaces dozens of media queries for smooth, continuous responsive font scaling.",
    "commonMistakes": "Ensure minimum sizes remain accessible and readable on small 320px mobile screens."
  },
  {
    "id": 70,
    "number": "070",
    "title": "CSS Min() and Max() Functions",
    "category": "Units & Math",
    "introduction": "Selects the smallest or largest value from a comma-separated list of expressions.",
    "explanation": "min() applies an upper bound (chooses smaller); max() applies a lower bound (chooses larger).",
    "syntax": "width: min(500px, 90%);\nfont-size: max(14px, 1rem);",
    "selectorsOrProps": [
      "min()",
      "max()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"min-box\">width: min(350px, 90%)</div>\n</div>",
    "cssExample": ".min-box {\n  width: min(350px, 90%);\n  background: #0284c7;\n  color: white;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: 600;\n  margin: 0 auto;\n}",
    "expectedOutput": "A box that expands to 90% of screen width but caps out at 350px max width.",
    "notes": "min() and max() accept multiple comma-separated arguments, including calc() expressions.",
    "commonMistakes": "Remember: min() effectively sets a maximum limit, and max() sets a minimum limit."
  },
  {
    "id": 71,
    "number": "071",
    "title": "CSS Specificity",
    "category": "Specificity & Cascade",
    "introduction": "The mathematical algorithm browsers use to determine which CSS rule wins when conflicts occur.",
    "explanation": "Specificity is measured as a 4-part tuple: Inline (1,0,0,0) > ID (0,1,0,0) > Class/Attribute/Pseudo-class (0,0,1,0) > Element (0,0,0,1).",
    "syntax": "/* Specificity weights */\n#id (100) > .class (10) > tag (1)",
    "selectorsOrProps": [
      "specificity",
      "cascade"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p id=\"author-bio\" class=\"bio-text\">This text demonstrates specificity resolution.</p>\n</div>",
    "cssExample": "p { color: gray; } /* Weight: (0,0,1) */\n.bio-text { color: #0284c7; } /* Weight: (0,0,1,0) - Wins over element */\n#author-bio { color: #4f46e5; font-weight: bold; } /* Weight: (0,1,0,0) - Wins over class */",
    "expectedOutput": "Text renders in bold purple because the ID selector (#author-bio) has higher specificity than class or tag.",
    "notes": "When specificity is equal, the rule that appears latest in source order wins.",
    "commonMistakes": "Overusing IDs or !important creates specificity wars that make CSS unmaintainable."
  },
  {
    "id": 72,
    "number": "072",
    "title": "Specificity Rules 1",
    "category": "Specificity & Cascade",
    "introduction": "Understanding how combining class names and elements increases selector specificity score.",
    "explanation": "Chaining selectors increases weight: div.card (0,0,1,1) beats .card (0,0,1,0) and div (0,0,0,1).",
    "syntax": "div.highlight { color: blue; }",
    "selectorsOrProps": [
      "chained selector",
      "specificity score"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"alert-box\">Base Alert</div>\n  <div class=\"alert-box primary\">Chained Specificity Alert</div>\n</div>",
    "cssExample": ".alert-box { background: #f1f5f9; color: #475569; padding: 10px; margin-bottom: 8px; border-radius: 4px; }\n.alert-box.primary { background: #4f46e5; color: white; font-weight: bold; }",
    "expectedOutput": "The second alert turns purple because two chained classes (.alert-box.primary) beat a single class.",
    "notes": "The universal selector (*) and pseudo-class :where() contribute zero specificity weight.",
    "commonMistakes": "Don't chain unnecessary tag names (e.g. div.btn); plain .btn is cleaner and more reusable."
  },
  {
    "id": 73,
    "number": "073",
    "title": "Specificity Rules 2",
    "category": "Specificity & Cascade",
    "introduction": "Handling the !important flag, inline styles, and the modern :is() and :where() selectors.",
    "explanation": "!important overrides all standard specificity calculations, but should be used sparingly.",
    "syntax": "color: red !important;\n:is(.a, .b) vs :where(.a, .b)",
    "selectorsOrProps": [
      "!important",
      ":where()",
      ":is()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"override-demo\">Important Override Demo</p>\n</div>",
    "cssExample": ".override-demo {\n  color: #10b981 !important;\n}\np.override-demo {\n  color: #ef4444; /* Ignored despite higher specificity because of !important */\n}",
    "expectedOutput": "Text displays green because !important takes precedence over standard selector weight.",
    "notes": ":where() has zero specificity (0,0,0), making it ideal for default CSS reset rules.",
    "commonMistakes": "Relying on !important makes future style overrides difficult; fix the underlying specificity instead."
  },
  {
    "id": 74,
    "number": "074",
    "title": "First-child",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :first-child pseudo-class targets an element that is the very first child of its parent.",
    "explanation": "Matches an element only if it is the first element node inside its parent container.",
    "syntax": "li:first-child {\n  font-weight: bold;\n}",
    "selectorsOrProps": [
      ":first-child"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <ul class=\"item-list\">\n    <li>First Item (Targeted)</li>\n    <li>Second Item</li>\n    <li>Third Item</li>\n  </ul>\n</div>",
    "cssExample": ".item-list li:first-child {\n  color: #4f46e5;\n  font-weight: bold;\n  border-left: 3px solid #4f46e5;\n  padding-left: 8px;\n}\n.item-list li {\n  padding: 4px 0;\n  color: #64748b;\n}",
    "expectedOutput": "Only the very first list item has purple bold styling with an accent indicator.",
    "notes": ":first-child requires the element to be the first child; if preceded by an <h2>, p:first-child won't match (use :first-of-type instead).",
    "commonMistakes": "Confusing :first-child with :first-of-type."
  },
  {
    "id": 75,
    "number": "075",
    "title": "Last-child",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :last-child pseudo-class targets an element that is the final child of its parent container.",
    "explanation": "Commonly used to strip bottom borders or margins from the closing item in a list or card stack.",
    "syntax": "li:last-child {\n  border-bottom: none;\n}",
    "selectorsOrProps": [
      ":last-child"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"stack\">\n    <div>Row 1</div>\n    <div>Row 2</div>\n    <div>Row 3 (Final Row)</div>\n  </div>\n</div>",
    "cssExample": ".stack div {\n  padding: 10px;\n  border-bottom: 2px solid #e2e8f0;\n  color: #334155;\n}\n.stack div:last-child {\n  border-bottom: none;\n  background: #f0fdf4;\n  color: #166534;\n  font-weight: bold;\n}",
    "expectedOutput": "The final row has no divider line and is highlighted in pale green.",
    "notes": "Classic solution for eliminating trailing borders in navigation menus.",
    "commonMistakes": "Like :first-child, it will fail if a different tag (like a script or footer) is the actual last element in the parent."
  },
  {
    "id": 76,
    "number": "076",
    "title": "nth-child",
    "category": "Pseudo-classes & Elements",
    "introduction": "Selects elements based on their numerical index position within their parent container.",
    "explanation": ":nth-child(n) accepts an integer, keyword, or algebraic formula (an + b).",
    "syntax": ":nth-child(2) | :nth-child(3n)",
    "selectorsOrProps": [
      ":nth-child()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"grid-num\">\n    <span>1</span><span>2 (Matched)</span><span>3</span><span>4</span>\n  </div>\n</div>",
    "cssExample": ".grid-num span {\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  text-align: center;\n  background: #e2e8f0;\n  margin-right: 8px;\n  border-radius: 6px;\n  font-weight: bold;\n}\n.grid-num span:nth-child(2) {\n  background: #4f46e5;\n  color: white;\n}",
    "expectedOutput": "The 2nd numbered box is highlighted in bright purple while other boxes remain gray.",
    "notes": ":nth-child uses 1-based indexing (the first element is 1, not 0).",
    "commonMistakes": "Passing 0 (:nth-child(0)) matches nothing."
  },
  {
    "id": 77,
    "number": "077",
    "title": "nth-child odd and even",
    "category": "Pseudo-classes & Elements",
    "introduction": "Creates alternating striping for tables, lists, and grids using 'odd' and 'even' keywords.",
    "explanation": ":nth-child(odd) matches 1, 3, 5... while :nth-child(even) matches 2, 4, 6... for readable zebra patterns.",
    "syntax": "tr:nth-child(even) {\n  background-color: #f8fafc;\n}",
    "selectorsOrProps": [
      ":nth-child(odd)",
      ":nth-child(even)"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"zebra-list\">\n    <div>Row 1 (Odd)</div>\n    <div>Row 2 (Even)</div>\n    <div>Row 3 (Odd)</div>\n    <div>Row 4 (Even)</div>\n  </div>\n</div>",
    "cssExample": ".zebra-list div {\n  padding: 10px 14px;\n  color: #1e293b;\n}\n.zebra-list div:nth-child(odd) {\n  background: #f1f5f9;\n}\n.zebra-list div:nth-child(even) {\n  background: #ffffff;\n}",
    "expectedOutput": "Alternating light gray and white stripes enhancing scannability across rows.",
    "notes": "Equivalent to algebraic formulas :nth-child(2n+1) for odd and :nth-child(2n) for even.",
    "commonMistakes": "Hidden elements (display: none) still count in the index tally, which can break visual alternation."
  },
  {
    "id": 78,
    "number": "078",
    "title": "nth-last-child",
    "category": "Pseudo-classes & Elements",
    "introduction": "Selects elements counting backwards starting from the end of the parent container.",
    "explanation": ":nth-last-child(1) is equivalent to :last-child; :nth-last-child(2) selects the penultimate child.",
    "syntax": ":nth-last-child(2) {\n  property: value;\n}",
    "selectorsOrProps": [
      ":nth-last-child()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"countdown-list\">\n    <div>Item 1</div><div>Item 2</div>\n    <div>Item 3 (2nd from end)</div><div>Item 4 (Last)</div>\n  </div>\n</div>",
    "cssExample": ".countdown-list div {\n  padding: 8px 12px;\n  margin-bottom: 4px;\n  background: #f1f5f9;\n  border-radius: 4px;\n}\n.countdown-list div:nth-last-child(2) {\n  background: #fef08a;\n  color: #854d0e;\n  font-weight: bold;\n}",
    "expectedOutput": "The second-to-last item (Item 3) is highlighted in yellow.",
    "notes": "Great for styling pagination buttons or penultimate table rows.",
    "commonMistakes": "Index counting starts from 1 at the very last child node."
  },
  {
    "id": 79,
    "number": "079",
    "title": "first-line",
    "category": "Pseudo-classes & Elements",
    "introduction": "The ::first-line pseudo-element applies styles strictly to the initial formatted line of a paragraph.",
    "explanation": "The length of the first line changes dynamically as the container or screen width resizes.",
    "syntax": "p::first-line {\n  font-weight: bold;\n  color: #4f46e5;\n}",
    "selectorsOrProps": [
      "::first-line"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"lead-article\">\n    This first line of the article is automatically targeted and highlighted by the browser. As you resize the window and words wrap to line two, only the active top line maintains this custom styling.\n  </p>\n</div>",
    "cssExample": ".lead-article::first-line {\n  font-weight: bold;\n  color: #4f46e5;\n  font-size: 1.15rem;\n  letter-spacing: 0.5px;\n}\n.lead-article {\n  color: #64748b;\n  line-height: 1.7;\n}",
    "expectedOutput": "The first line of the paragraph renders in bold purple and larger font, while subsequent lines are normal slate.",
    "notes": "Only a subset of CSS properties (font, color, background, spacing) work on ::first-line.",
    "commonMistakes": "Margins and paddings do not apply to ::first-line."
  },
  {
    "id": 80,
    "number": "080",
    "title": "::first-letter",
    "category": "Pseudo-classes & Elements",
    "introduction": "Styles the very first letter of a block element, commonly used for elegant editorial drop-caps.",
    "explanation": "INVENTORY NOTICE: Exact title '::first-letter'. Targets the first character for drop cap creation.",
    "syntax": "p::first-letter {\n  font-size: 3rem;\n  float: left;\n}",
    "selectorsOrProps": [
      "::first-letter",
      "drop cap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"drop-cap\">\n    Once upon a time in web development, CSS introduced pseudo-elements to elevate digital typography to print-quality standards.\n  </p>\n</div>",
    "cssExample": ".drop-cap::first-letter {\n  font-size: 3rem;\n  font-weight: bold;\n  float: left;\n  line-height: 0.85;\n  padding-right: 8px;\n  color: #4f46e5;\n  font-family: Georgia, serif;\n}\n.drop-cap {\n  color: #334155;\n  line-height: 1.6;\n}",
    "expectedOutput": "An elegant editorial drop-cap 'O' floating on the left side of the opening paragraph.",
    "notes": "::first-letter only applies to block containers.",
    "commonMistakes": "Punctuation preceding the letter (like a quote mark) is styled together with the letter."
  },
  {
    "id": 81,
    "number": "081",
    "title": "::before",
    "category": "Pseudo-classes & Elements",
    "introduction": "Inserts decorative or functional generated content before the content of an element.",
    "explanation": "INVENTORY NOTICE: Exact title '::before'. Requires the content property (even if empty: content: '').",
    "syntax": "element::before {\n  content: \"\ud83d\udc49 \";\n}",
    "selectorsOrProps": [
      "::before",
      "content"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"callout-tip\">Remember to test your code on mobile devices.</div>\n</div>",
    "cssExample": ".callout-tip {\n  background: #f0fdf4;\n  color: #166534;\n  padding: 14px 20px;\n  border-radius: 8px;\n  border: 1px solid #bbf7d0;\n  font-weight: 500;\n}\n.callout-tip::before {\n  content: \"\ud83d\udca1 PRO TIP: \";\n  font-weight: bold;\n  color: #15803d;\n}",
    "expectedOutput": "A green tip callout box with '\ud83d\udca1 PRO TIP: ' dynamically prepended to the message.",
    "notes": "The content property is strictly required; without it, the pseudo-element is not rendered.",
    "commonMistakes": "Screen readers may announce generated text; avoid putting essential information solely in content."
  },
  {
    "id": 82,
    "number": "082",
    "title": "::after",
    "category": "Pseudo-classes & Elements",
    "introduction": "Inserts generated content after the content of an element using CSS.",
    "explanation": "Frequently used for icons, badges, tooltips, clearfixes, and decorative underline accents.",
    "syntax": "element::after {\n  content: \" \u2197\";\n}",
    "selectorsOrProps": [
      "::after",
      "content"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"#\" class=\"external-link\">Visit MDN Web Docs</a>\n</div>",
    "cssExample": ".external-link {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n.external-link::after {\n  content: \" \u2197\";\n  font-size: 0.9rem;\n  color: #06b6d4;\n}",
    "expectedOutput": "A link followed by a neat little cyan external arrow indicator generated via CSS.",
    "notes": "::after is placed inside the element, after its other child content.",
    "commonMistakes": "Cannot be applied to replaced elements that have no content box (like <img> or <input>)."
  },
  {
    "id": 83,
    "number": "083",
    "title": ":focus",
    "category": "Pseudo-classes & Elements",
    "introduction": "Applies styles when an element receives keyboard focus or mouse click input focus.",
    "explanation": "Essential for accessibility, ensuring keyboard users know which interactive element is currently active.",
    "syntax": "input:focus, button:focus {\n  outline: 2px solid #4f46e5;\n}",
    "selectorsOrProps": [
      ":focus",
      ":focus-visible"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <input type=\"text\" class=\"styled-input\" placeholder=\"Click or Tab here to focus...\">\n</div>",
    "cssExample": ".styled-input {\n  width: 100%;\n  max-width: 300px;\n  padding: 10px 14px;\n  border: 2px solid #cbd5e1;\n  border-radius: 8px;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.styled-input:focus {\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.25);\n}",
    "expectedOutput": "An input field that lights up with an indigo border and soft focus glow when active.",
    "notes": "Always ensure interactive elements have clear focus states for WCAG accessibility compliance.",
    "commonMistakes": "Never use outline: none without providing an alternative focus ring style."
  },
  {
    "id": 84,
    "number": "084",
    "title": "::selection",
    "category": "Pseudo-classes & Elements",
    "introduction": "Styles the portion of text that has been highlighted or selected by the user.",
    "explanation": "INVENTORY NOTICE: Exact title '::selection'. Customizes the selection background and text color.",
    "syntax": "::selection {\n  background: #4f46e5;\n  color: white;\n}",
    "selectorsOrProps": [
      "::selection"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"custom-selection\">Highlight any of this text with your mouse or finger to see the custom neon purple selection color!</p>\n</div>",
    "cssExample": ".custom-selection::selection {\n  background: #4f46e5;\n  color: #ffffff;\n}\n.custom-selection {\n  font-size: 1.1rem;\n  color: #334155;\n  line-height: 1.6;\n}",
    "expectedOutput": "Selecting text highlights it in vivid indigo background with crisp white lettering.",
    "notes": "Only color, background-color, and text-shadow can be styled in ::selection.",
    "commonMistakes": "Ensure highlighted text maintains readable contrast against the selection background."
  },
  {
    "id": 85,
    "number": "085",
    "title": "Lang",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :lang() pseudo-class targets elements based on their language attribute.",
    "explanation": "INVENTORY NOTICE: Exact title 'Lang'. Selects elements declared with lang=\"xx\" or inheriting language context.",
    "syntax": ":lang(fr) {\n  quotes: '\u00ab ' ' \u00bb';\n}",
    "selectorsOrProps": [
      ":lang()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p lang=\"fr\">Ceci est un exemple en fran\u00e7ais.</p>\n  <p lang=\"en\">This is an English sentence.</p>\n</div>",
    "cssExample": ":lang(fr) {\n  color: #0284c7;\n  font-style: italic;\n}\n:lang(en) {\n  color: #1e1b4b;\n}",
    "expectedOutput": "French paragraph renders in italic blue while the English paragraph is dark indigo.",
    "notes": ":lang(fr) matches both lang=\"fr\" and regional dialects like lang=\"fr-CA\".",
    "commonMistakes": "Confusing :lang(en) with attribute selector [lang=\"en\"] (which only matches exact attribute value)."
  },
  {
    "id": 86,
    "number": "086",
    "title": "Lang pseudo class",
    "category": "Pseudo-classes & Elements",
    "introduction": "Advanced language-sensitive typography and quotation formatting using :lang().",
    "explanation": "INVENTORY NOTICE: Preserved distinct lesson 'Lang pseudo class'. Explores localized quotation rules.",
    "syntax": "q:lang(de) { quotes: '\u00bb' '\u00ab'; }\nq:lang(en) { quotes: '\u201c' '\u201d'; }",
    "selectorsOrProps": [
      ":lang()",
      "quotes",
      "localization"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p lang=\"de\"><q>Design ist nicht nur wie es aussieht.</q></p>\n  <p lang=\"en\"><q>Design is how it works.</q></p>\n</div>",
    "cssExample": ":lang(de) q {\n  quotes: '\u00bb' '\u00ab';\n  color: #b45309;\n}\n:lang(en) q {\n  quotes: '\u201c' '\u201d';\n  color: #4f46e5;\n}\nq {\n  font-weight: 500;\n  font-size: 1.1rem;\n}",
    "expectedOutput": "German text renders with guillemets (\u00bb...\u00ab) and English text renders with curly quotes (\u201c...\u201d).",
    "notes": "Enables culturally accurate typographic standards across internationalized web apps.",
    "commonMistakes": "Ensure the HTML document or wrapper tags specify valid ISO language codes."
  },
  {
    "id": 87,
    "number": "087",
    "title": "Active psuedo class 1",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :active pseudo-class styles an element at the exact moment it is being clicked or tapped.",
    "explanation": "INVENTORY NOTICE: Preserved spelling 'psuedo'. Demonstrates tactile push-button depression feedback.",
    "syntax": "button:active {\n  transform: scale(0.97);\n}",
    "selectorsOrProps": [
      ":active",
      "tactile UI"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"push-btn\">Click & Hold Me</button>\n</div>",
    "cssExample": ".push-btn {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  box-shadow: 0 4px 0 #312e81;\n  transition: all 0.08s ease;\n}\n.push-btn:active {\n  transform: translateY(4px);\n  box-shadow: 0 0 0 #312e81;\n}",
    "expectedOutput": "Clicking the button provides an authentic 3D physical push sensation.",
    "notes": ":active applies during mouse mousedown and touchstart states.",
    "commonMistakes": "In link CSS rules, :active must come AFTER :hover to function properly."
  },
  {
    "id": 88,
    "number": "088",
    "title": "Active psuedo class 2",
    "category": "Pseudo-classes & Elements",
    "introduction": "Applies :active state feedback to custom cards, toggle items, and interactive list tiles.",
    "explanation": "INVENTORY NOTICE: Preserved distinct lesson 'Active psuedo class 2'. Demonstrates micro-interaction feedback on containers.",
    "syntax": ".card:active {\n  background-color: #e0e7ff;\n}",
    "selectorsOrProps": [
      ":active",
      "card feedback"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"active-tile\">\n    <h4>Interactive Card Tile</h4>\n    <p>Press and hold to feel the active tactile feedback.</p>\n  </div>\n</div>",
    "cssExample": ".active-tile {\n  background: #f8fafc;\n  border: 2px solid #cbd5e1;\n  padding: 18px;\n  border-radius: 10px;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.15s ease;\n}\n.active-tile:active {\n  background: #ede9fe;\n  border-color: #818cf8;\n  transform: scale(0.98);\n}",
    "expectedOutput": "Card slightly shrinks and turns light purple while held down.",
    "notes": "Great for mobile web applications to provide immediate touch confirmation.",
    "commonMistakes": "user-select: none prevents awkward blue text selection highlights during clicking."
  },
  {
    "id": 89,
    "number": "089",
    "title": "Input:checked",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :checked pseudo-class targets radio buttons, checkboxes, and option elements when selected.",
    "explanation": "Enables pure CSS toggle switches, accordion panels, and custom checkboxes without JavaScript.",
    "syntax": "input:checked + label {\n  color: #4f46e5;\n}",
    "selectorsOrProps": [
      "input:checked",
      ":checked"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label class=\"check-label\">\n    <input type=\"checkbox\" checked>\n    <span class=\"custom-box\"></span>\n    <span>Enable Email Notifications</span>\n  </label>\n</div>",
    "cssExample": ".check-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-weight: 500;\n}\ninput:checked + .custom-box {\n  background: #10b981;\n  border-color: #10b981;\n}\n.custom-box {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #94a3b8;\n  border-radius: 4px;\n  display: inline-block;\n}",
    "expectedOutput": "Checked checkbox lights up in vivid green.",
    "notes": "The adjacent sibling combinator (+) connects the hidden input to the styled label.",
    "commonMistakes": "Only works on toggleable elements: <input type=\"checkbox\">, <input type=\"radio\">, and <option>."
  },
  {
    "id": 90,
    "number": "090",
    "title": "Input:checked for dropdown",
    "category": "Pseudo-classes & Elements",
    "introduction": "The 'checkbox hack' uses a hidden checked input to toggle dropdown menus and accordions.",
    "explanation": "Clicking a <label> toggles its linked <input type=\"checkbox\">, letting :checked toggle menu visibility.",
    "syntax": "input[type=\"checkbox\"]:checked ~ .dropdown-menu {\n  display: block;\n}",
    "selectorsOrProps": [
      ":checked",
      "pure CSS dropdown"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"css-dropdown\">\n    <input type=\"checkbox\" id=\"toggle-menu\" class=\"hidden-toggle\">\n    <label for=\"toggle-menu\" class=\"dropdown-btn\">Click to Toggle Menu \u25be</label>\n    <div class=\"dropdown-content\">\n      <a href=\"#\">Profile Settings</a>\n      <a href=\"#\">Curriculum Progress</a>\n      <a href=\"#\">Log Out</a>\n    </div>\n  </div>\n</div>",
    "cssExample": ".hidden-toggle { display: none; }\n.dropdown-btn {\n  display: inline-block;\n  background: #4f46e5;\n  color: white;\n  padding: 10px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.dropdown-content {\n  display: none;\n  margin-top: 8px;\n  background: white;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  width: 200px;\n}\n.dropdown-content a {\n  display: block;\n  padding: 8px 14px;\n  color: #334155;\n  text-decoration: none;\n}\n.hidden-toggle:checked ~ .dropdown-content {\n  display: block;\n}",
    "expectedOutput": "Clicking the purple button toggles the dropdown list open and closed purely with CSS.",
    "notes": "The <label for=\"id\"> attribute must match the input's id to trigger the toggle.",
    "commonMistakes": "For complex menus with submenus, JavaScript is often better for ARIA screen reader accessibility."
  },
  {
    "id": 91,
    "number": "091",
    "title": "Required",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :required pseudo-class targets form elements that have the required attribute.",
    "explanation": "Allows styling mandatory fields with badges, asterisk accents, or distinct border colors.",
    "syntax": "input:required {\n  border-left: 4px solid #ef4444;\n}",
    "selectorsOrProps": [
      ":required"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label>Email Address *</label>\n  <input type=\"email\" class=\"req-input\" placeholder=\"Enter email\" required>\n</div>",
    "cssExample": "label { display: block; font-weight: 600; margin-bottom: 4px; }\n.req-input:required {\n  border-left: 4px solid #4f46e5;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border-top: 1px solid #cbd5e1;\n  border-right: 1px solid #cbd5e1;\n  border-bottom: 1px solid #cbd5e1;\n  width: 260px;\n}",
    "expectedOutput": "Input box with a distinctive purple required indicator accent on its left border.",
    "notes": "Assists users in recognizing required inputs before submitting forms.",
    "commonMistakes": "Never rely on visual styling alone; always include clear textual cues like an asterisk or '(required)' for accessibility."
  },
  {
    "id": 92,
    "number": "092",
    "title": "Optional",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :optional pseudo-class matches form elements that do not have the required attribute.",
    "explanation": "Pairs with :required to style non-mandatory fields with muted tones or optional tags.",
    "syntax": "input:optional {\n  border-color: #94a3b8;\n}",
    "selectorsOrProps": [
      ":optional"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label>Phone Number (Optional)</label>\n  <input type=\"tel\" class=\"opt-input\" placeholder=\"Optional mobile number\">\n</div>",
    "cssExample": "label { display: block; font-weight: 600; margin-bottom: 4px; color: #64748b; }\n.opt-input:optional {\n  border: 1px dashed #cbd5e1;\n  padding: 8px 12px;\n  border-radius: 4px;\n  background: #f8fafc;\n  width: 260px;\n}",
    "expectedOutput": "A dashed, subtle border styling distinguishing this field as optional.",
    "notes": "All form inputs without required are automatically :optional.",
    "commonMistakes": "Form buttons (<button>) do not match :optional or :required."
  },
  {
    "id": 93,
    "number": "093",
    "title": "Disabled",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :disabled pseudo-class matches elements that are disabled via the disabled attribute.",
    "explanation": "Dims inactive form controls and applies not-allowed cursor feedback.",
    "syntax": "button:disabled, input:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
    "selectorsOrProps": [
      ":disabled"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"submit-btn\" disabled>Checkout (Disabled)</button>\n</div>",
    "cssExample": ".submit-btn:disabled {\n  background: #cbd5e1;\n  color: #64748b;\n  cursor: not-allowed;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: bold;\n}",
    "expectedOutput": "A dimmed gray button with a 'not-allowed' cursor indicating inactive state.",
    "notes": "Disabled form inputs do not receive click events, focus, or form data serialization.",
    "commonMistakes": "Ensure disabled elements still retain enough contrast for readability."
  },
  {
    "id": 94,
    "number": "094",
    "title": "Valid",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :valid pseudo-class styles form elements whose current value satisfies validation constraints.",
    "explanation": "Provides instant real-time green checkmark or border feedback when inputs pass validation.",
    "syntax": "input:valid {\n  border-color: #10b981;\n}",
    "selectorsOrProps": [
      ":valid",
      "form validation"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <input type=\"email\" value=\"user@codeplay.dev\" class=\"valid-input\" placeholder=\"Type valid email...\">\n</div>",
    "cssExample": ".valid-input:valid {\n  border: 2px solid #10b981;\n  background: #f0fdf4;\n  padding: 10px 14px;\n  border-radius: 6px;\n  color: #065f46;\n  font-weight: 500;\n}",
    "expectedOutput": "A green border and soft green background confirming a properly formatted email.",
    "notes": "Empty optional inputs are considered :valid by default unless required is added.",
    "commonMistakes": "Showing aggressive red invalid errors before the user even starts typing frustrates users (use :user-invalid in modern CSS)."
  },
  {
    "id": 95,
    "number": "095",
    "title": "Out-of-range",
    "category": "Pseudo-classes & Elements",
    "introduction": "Matches number or range inputs whose current numeric value falls outside min and max limits.",
    "explanation": "Gives instant visual warning when a user enters an out-of-bounds quantity or age.",
    "syntax": "input:out-of-range {\n  border-color: #ef4444;\n}",
    "selectorsOrProps": [
      ":out-of-range",
      ":in-range"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label>Ticket Quantity (1 - 5):</label>\n  <input type=\"number\" min=\"1\" max=\"5\" value=\"9\" class=\"range-input\">\n</div>",
    "cssExample": ".range-input:out-of-range {\n  border: 2px solid #ef4444;\n  background: #fef2f2;\n  color: #991b1b;\n  padding: 8px 12px;\n  border-radius: 6px;\n}",
    "expectedOutput": "A red warning border because the value '9' exceeds the max='5' restriction.",
    "notes": "Only works on elements supporting range limits: <input type=\"number\"> and <input type=\"range\">.",
    "commonMistakes": "Be sure to pair it with clear error message helper text for screen readers."
  },
  {
    "id": 96,
    "number": "096",
    "title": "Read-only and read-write",
    "category": "Pseudo-classes & Elements",
    "introduction": "Targets elements based on whether their content is editable by the user.",
    "explanation": ":read-only matches inputs with the readonly attribute; :read-write matches editable fields.",
    "syntax": ":read-only { background: #f1f5f9; }\n:read-write { border-color: #4f46e5; }",
    "selectorsOrProps": [
      ":read-only",
      ":read-write"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <input type=\"text\" value=\"CONFIDENTIAL_KEY_0921\" readonly class=\"field\">\n  <input type=\"text\" value=\"Editable username\" class=\"field\">\n</div>",
    "cssExample": ".field:read-only {\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  color: #64748b;\n  cursor: default;\n  margin-bottom: 8px;\n  display: block;\n  padding: 8px 12px;\n  border-radius: 4px;\n}\n.field:read-write {\n  border: 1px solid #4f46e5;\n  padding: 8px 12px;\n  border-radius: 4px;\n  display: block;\n}",
    "expectedOutput": "A locked gray field with default cursor followed by an active purple editable field.",
    "notes": "Unlike disabled inputs, readonly inputs are still submitted when the form posts.",
    "commonMistakes": "Standard paragraph and heading elements match :read-only unless contenteditable is set."
  },
  {
    "id": 97,
    "number": "097",
    "title": "Empty selector",
    "category": "Pseudo-classes & Elements",
    "introduction": "The :empty pseudo-class targets elements that have zero children or text content.",
    "explanation": "Ideal for hiding empty alert containers, badge placeholders, or notification trays.",
    "syntax": "div:empty {\n  display: none;\n}",
    "selectorsOrProps": [
      ":empty"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"notification-badge\">3</div>\n  <div class=\"notification-badge\"></div> <!-- Hidden by :empty -->\n  <p>The second empty badge is completely hidden automatically by CSS.</p>\n</div>",
    "cssExample": ".notification-badge {\n  background: #ef4444;\n  color: white;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.notification-badge:empty {\n  display: none;\n}",
    "expectedOutput": "A red circle showing '3', while the second empty badge is automatically hidden.",
    "notes": "A single whitespace character counts as content and prevents :empty from matching.",
    "commonMistakes": "Modern CSS introduces :blank to handle whitespace-only nodes, but browser support varies."
  },
  {
    "id": 98,
    "number": "098",
    "title": "Change li color",
    "category": "UI Components & Lists",
    "introduction": "Customizes list bullet colors independently from list text using the ::marker pseudo-element.",
    "explanation": "The ::marker pseudo-element allows styling the bullet dot or number with custom colors and sizes.",
    "syntax": "li::marker {\n  color: #4f46e5;\n  font-size: 1.2em;\n}",
    "selectorsOrProps": [
      "::marker"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <ul class=\"color-bullets\">\n    <li>Interactive Web Development</li>\n    <li>Modern CSS Architecture</li>\n    <li>Responsive UI Design</li>\n  </ul>\n</div>",
    "cssExample": ".color-bullets li::marker {\n  color: #06b6d4;\n  font-size: 1.3em;\n}\n.color-bullets li {\n  color: #1e293b;\n  padding: 4px 0;\n  font-weight: 500;\n}",
    "expectedOutput": "List text in dark slate with custom glowing cyan bullet points.",
    "notes": "::marker replaces complex hacks that previously required clearing bullets and adding ::before.",
    "commonMistakes": "Only a limited subset of properties (color, font, content) are valid on ::marker."
  },
  {
    "id": 99,
    "number": "099",
    "title": "Simple tooltip",
    "category": "UI Components & Lists",
    "introduction": "Builds an accessible hover tooltip using data-tooltip and the ::after pseudo-element.",
    "explanation": "Using position: relative on the host and position: absolute on ::after renders an elegant floating balloon on hover.",
    "syntax": ".tooltip:hover::after {\n  opacity: 1;\n  visibility: visible;\n}",
    "selectorsOrProps": [
      "data-tooltip",
      "tooltip hover"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"padding-top: 35px;\">\n  <span class=\"tooltip-trigger\" data-tip=\"Saved to CodePlay cloud!\">Hover over me</span>\n</div>",
    "cssExample": ".tooltip-trigger {\n  position: relative;\n  color: #4f46e5;\n  font-weight: bold;\n  cursor: pointer;\n  border-bottom: 2px dotted #4f46e5;\n}\n.tooltip-trigger::after {\n  content: attr(data-tip);\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0f172a;\n  color: white;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s ease;\n}\n.tooltip-trigger:hover::after {\n  opacity: 1;\n}",
    "expectedOutput": "Hovering over the underlined text reveals a dark floating tooltip balloon above it.",
    "notes": "attr(data-tip) pulls the text dynamically from the HTML data attribute.",
    "commonMistakes": "Add pointer-events: none to avoid tooltip flicker when moving the cursor."
  },
  {
    "id": 100,
    "number": "100",
    "title": "Top bottom right and left tool",
    "category": "UI Components & Lists",
    "introduction": "Positions floating UI tooltips in all four cardinal directions (top, bottom, left, right).",
    "explanation": "Uses position: absolute coordinate offsets to support directional tooltip variants.",
    "syntax": ".tip-top::after { bottom: 100%; }\n.tip-bottom::after { top: 100%; }",
    "selectorsOrProps": [
      "directional tooltip",
      "coordinate offsets"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:20px; flex-wrap:wrap; padding: 40px 20px;\">\n  <button class=\"btn-tip tip-top\" data-tip=\"Top tooltip\">Top</button>\n  <button class=\"btn-tip tip-bottom\" data-tip=\"Bottom tooltip\">Bottom</button>\n  <button class=\"btn-tip tip-right\" data-tip=\"Right tooltip\">Right</button>\n</div>",
    "cssExample": ".btn-tip {\n  position: relative;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.btn-tip::after {\n  content: attr(data-tip);\n  position: absolute;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 5px 10px;\n  border-radius: 4px;\n  font-size: 0.75rem;\n  white-space: nowrap;\n  opacity: 0;\n  transition: 0.2s;\n  pointer-events: none;\n}\n.tip-top::after { bottom: 125%; left: 50%; transform: translateX(-50%); }\n.tip-bottom::after { top: 125%; left: 50%; transform: translateX(-50%); }\n.tip-right::after { left: 110%; top: 50%; transform: translateY(-50%); }\n.btn-tip:hover::after { opacity: 1; }",
    "expectedOutput": "Three buttons revealing tooltips popping out to the top, bottom, and right on hover.",
    "notes": "Directional classes (.tip-top, .tip-bottom) enable scalable UI component libraries.",
    "commonMistakes": "Always ensure tooltips don't clip outside mobile screen boundaries (viewport overflow)."
  },
  {
    "id": 101,
    "number": "101",
    "title": "Background-image",
    "category": "Backgrounds & Shadows",
    "introduction": "Applies one or more graphic or gradient images to an element's background canvas.",
    "explanation": "Uses the url() function or CSS gradient notation to render decorative visual backgrounds.",
    "syntax": "background-image: url('pattern.svg');",
    "selectorsOrProps": [
      "background-image",
      "url()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"bg-hero\">\n    <h3>Modern Web Canvas</h3>\n    <p>Background imagery with dark gradient overlay</p>\n  </div>\n</div>",
    "cssExample": ".bg-hero {\n  background-image: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), radial-gradient(#38bdf8 1px, transparent 1px);\n  background-size: cover, 16px 16px;\n  color: white;\n  padding: 30px;\n  border-radius: 12px;\n  text-align: center;\n}\n.bg-hero h3 { color: #38bdf8; margin: 0 0 6px 0; }",
    "expectedOutput": "A dark tech canvas patterned with dots and glowing sky-blue heading.",
    "notes": "Always provide a fallback background-color in case image loading fails.",
    "commonMistakes": "Large unoptimized background images can severely degrade page load speed."
  },
  {
    "id": 102,
    "number": "102",
    "title": "Background-repeat",
    "category": "Backgrounds & Shadows",
    "introduction": "Controls whether and how background images tile across an element's dimensions.",
    "explanation": "Values include repeat (default), no-repeat, repeat-x, repeat-y, space, and round.",
    "syntax": "background-repeat: no-repeat | repeat-x | round;",
    "selectorsOrProps": [
      "background-repeat"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"pattern-strip\">Seamless Strip Pattern (repeat-x)</div>\n</div>",
    "cssExample": ".pattern-strip {\n  height: 80px;\n  background-image: radial-gradient(#4f46e5 2px, transparent 2px);\n  background-size: 16px 16px;\n  background-repeat: repeat-x;\n  background-color: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 10px;\n  color: #334155;\n  font-weight: bold;\n  border-radius: 8px;\n}",
    "expectedOutput": "A horizontal strip of dot patterns repeating along the x-axis only.",
    "notes": "background-repeat: round scales the image slightly so whole tiles fit without clipping.",
    "commonMistakes": "When using non-tiling hero images, forgetting no-repeat causes awkward tiling."
  },
  {
    "id": 103,
    "number": "103",
    "title": "Background-size",
    "category": "Backgrounds & Shadows",
    "introduction": "Scales background imagery to cover the box, contain within it, or match specific dimensions.",
    "explanation": "cover scales the image proportionally so the box is completely filled; contain ensures the entire image is visible.",
    "syntax": "background-size: cover | contain | 100% auto;",
    "selectorsOrProps": [
      "background-size: cover",
      "contain"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"bg-cover-box\">Hero Sized with 'cover'</div>\n</div>",
    "cssExample": ".bg-cover-box {\n  height: 140px;\n  background-image: linear-gradient(135deg, #4f46e5, #06b6d4);\n  background-size: cover;\n  background-position: center;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  font-weight: bold;\n  font-size: 1.2rem;\n}",
    "expectedOutput": "A rich gradient box scaled to cover the entire container area.",
    "notes": "background-size: cover combined with background-position: center is the gold standard for hero banners.",
    "commonMistakes": "cover may crop parts of the image depending on aspect ratio differences."
  },
  {
    "id": 104,
    "number": "104",
    "title": "CSS Shadows",
    "category": "Backgrounds & Shadows",
    "introduction": "Overview of shadow elevation and visual depth using box-shadow and text-shadow.",
    "explanation": "Shadows simulate elevation, creating visual hierarchy and drawing focus to key elements.",
    "syntax": "box-shadow: x y blur spread color;\ntext-shadow: x y blur color;",
    "selectorsOrProps": [
      "elevation",
      "depth"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"card-elevated\">Elevated Card Element</div>\n</div>",
    "cssExample": ".card-elevated {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  color: #1e293b;\n  font-weight: 600;\n  text-align: center;\n}",
    "expectedOutput": "A crisp card that appears physically elevated above the page with soft natural shadowing.",
    "notes": "Layering multiple subtle shadows looks far more natural than a single heavy black shadow.",
    "commonMistakes": "Overly harsh black shadows (e.g. #000) look dated and unnatural."
  },
  {
    "id": 105,
    "number": "105",
    "title": "CSS Box Shadow",
    "category": "Backgrounds & Shadows",
    "introduction": "Adds depth to containers with outer shadows, inner shadows (inset), and colored glows.",
    "explanation": "box-shadow accepts horizontal offset, vertical offset, blur radius, spread radius, and color.",
    "syntax": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\nbox-shadow: inset 0 2px 4px rgba(0,0,0,0.2);",
    "selectorsOrProps": [
      "box-shadow",
      "inset",
      "blur-radius",
      "spread-radius"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:16px;\">\n  <div class=\"shadow-drop\">Drop Shadow</div>\n  <div class=\"shadow-inset\">Inset Shadow</div>\n</div>",
    "cssExample": ".shadow-drop, .shadow-inset {\n  flex: 1;\n  padding: 20px;\n  background: #ffffff;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n}\n.shadow-drop {\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);\n  color: #4f46e5;\n}\n.shadow-inset {\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.15);\n  background: #f8fafc;\n  color: #64748b;\n}",
    "expectedOutput": "Two cards: one casting a soft purple drop shadow, the other sunken with an inner bevel.",
    "notes": "inset shadows make inputs and pressed buttons appear realistically indented.",
    "commonMistakes": "Large spread radii can distort rounded corners if not balanced with border-radius."
  },
  {
    "id": 106,
    "number": "106",
    "title": "CSS Text Shadow",
    "category": "Backgrounds & Shadows",
    "introduction": "Applies drop shadows and glowing neon effects directly to typographical letterforms.",
    "explanation": "text-shadow specifies x-offset, y-offset, blur radius, and color for text characters.",
    "syntax": "text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\ntext-shadow: 0 0 10px #06b6d4;",
    "selectorsOrProps": [
      "text-shadow",
      "neon glow"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"background:#0f172a; border-radius:8px; padding:20px;\">\n  <h2 class=\"glow-text\">NEON GLOW EFFECT</h2>\n</div>",
    "cssExample": ".glow-text {\n  color: #ffffff;\n  font-size: 1.8rem;\n  text-align: center;\n  letter-spacing: 2px;\n  text-shadow: 0 0 8px #38bdf8, 0 0 20px #0284c7;\n}",
    "expectedOutput": "White headline glowing with cyan and blue neon radiance against a dark canvas.",
    "notes": "Multiple text shadows separated by commas create intense glowing neon signage.",
    "commonMistakes": "Heavy dark text shadows degrade readability on standard body copy."
  },
  {
    "id": 107,
    "number": "107",
    "title": "CSS Transitions",
    "category": "Transitions",
    "introduction": "Smoothly animates property changes over a specified duration instead of abrupt changes.",
    "explanation": "The transition property accepts the target property, duration, timing function, and delay.",
    "syntax": "transition: property duration timing-function delay;\ntransition: all 0.3s ease;",
    "selectorsOrProps": [
      "transition",
      "micro-interaction"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"smooth-btn\">Hover for Smooth Transition</button>\n</div>",
    "cssExample": ".smooth-btn {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n.smooth-btn:hover {\n  background: #06b6d4;\n  transform: translateY(-3px);\n}",
    "expectedOutput": "Button smoothly morphs from indigo to cyan while gently floating upwards on hover.",
    "notes": "Transitioning transform and opacity uses GPU acceleration for optimal 60fps performance.",
    "commonMistakes": "Transitioning layout properties like height or width causes expensive browser reflows."
  },
  {
    "id": 108,
    "number": "108",
    "title": "CSS Transition Delay",
    "category": "Transitions",
    "introduction": "Specifies a pause duration before the transition begins executing.",
    "explanation": "transition-delay staggers interactions, creating choreographed cascade animations across multiple elements.",
    "syntax": "transition-delay: 0.2s | 150ms;",
    "selectorsOrProps": [
      "transition-delay",
      "staggering"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"delay-box\">Hover me (0.3s Delay)</div>\n</div>",
    "cssExample": ".delay-box {\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transition: all 0.4s ease;\n  transition-delay: 0.3s;\n}\n.delay-box:hover {\n  background: #4f46e5;\n  color: white;\n  transform: scale(1.05);\n}",
    "expectedOutput": "The box pauses for 0.3s before smoothly expanding and turning purple on hover.",
    "notes": "Staggering delays on list items creates fluid cascading menu reveals.",
    "commonMistakes": "Excessive delays make user interfaces feel sluggish and unresponsive."
  },
  {
    "id": 109,
    "number": "109",
    "title": "CSS Transition Duration",
    "category": "Transitions",
    "introduction": "Sets how long the transition animation takes to complete from start to finish.",
    "explanation": "Measured in seconds (0.3s) or milliseconds (300ms). Micro-interactions typically range from 150ms to 350ms.",
    "syntax": "transition-duration: 0.3s | 500ms;",
    "selectorsOrProps": [
      "transition-duration"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:12px;\">\n  <div class=\"speed-box fast\">Fast (150ms)</div>\n  <div class=\"speed-box slow\">Slow (800ms)</div>\n</div>",
    "cssExample": ".speed-box {\n  flex: 1;\n  padding: 16px;\n  background: #e2e8f0;\n  color: #1e293b;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}\n.fast { transition: all 150ms ease; }\n.slow { transition: all 800ms ease; }\n.speed-box:hover {\n  background: #4f46e5;\n  color: white;\n}",
    "expectedOutput": "Contrasts a snappy 150ms hover reaction with a slow, deliberate 800ms color fade.",
    "notes": "Durations between 200ms and 300ms feel most natural to the human eye for UI feedback.",
    "commonMistakes": "Forgetting the unit (writing '300' instead of '300ms' or '0.3s') invalidates the CSS rule."
  },
  {
    "id": 110,
    "number": "110",
    "title": "CSS Transition Timing Function",
    "category": "Transitions",
    "introduction": "Determines the speed curve of the transition (linear, ease, ease-in, ease-out, ease-in-out).",
    "explanation": "Timing functions control acceleration: ease starts slowly, speeds up, and slows down.",
    "syntax": "transition-timing-function: ease | linear | cubic-bezier(p1, p2, p3, p4);",
    "selectorsOrProps": [
      "timing function",
      "easing"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"timing-pill\">Hover to observe ease-out curve</div>\n</div>",
    "cssExample": ".timing-pill {\n  background: #0284c7;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 20px;\n  display: inline-block;\n  font-weight: 600;\n  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.timing-pill:hover {\n  transform: translateX(40px);\n}",
    "expectedOutput": "Pill glides to the right with a playful, snappy bounce at the end of its trajectory.",
    "notes": "cubic-bezier curves allow authentic spring and bounce physics.",
    "commonMistakes": "linear transitions look robotic and unnatural for interactive UI movements."
  },
  {
    "id": 111,
    "number": "111",
    "title": "Transition duration & property",
    "category": "Transitions",
    "introduction": "Explicitly pairs target properties with specific duration values for fine-tuned animations.",
    "explanation": "Declaring explicit properties (e.g. background-color 0.2s, transform 0.4s) avoids unwanted transitions.",
    "syntax": "transition: background-color 0.2s, transform 0.4s;",
    "selectorsOrProps": [
      "explicit property",
      "granular duration"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"multi-trans\">Color shifts fast; movement is gradual</div>\n</div>",
    "cssExample": ".multi-trans {\n  background: #334155;\n  color: white;\n  padding: 16px;\n  border-radius: 8px;\n  font-weight: bold;\n  text-align: center;\n  transition: background-color 150ms ease, transform 500ms ease;\n}\n.multi-trans:hover {\n  background-color: #10b981;\n  transform: translateY(-8px);\n}",
    "expectedOutput": "On hover, the background changes to green quickly while the vertical lift floats upward smoothly.",
    "notes": "Always list explicit properties rather than using transition: all for cleaner performance.",
    "commonMistakes": "transition: all can trigger unintended layout recalculations when unrelated styles change."
  },
  {
    "id": 112,
    "number": "112",
    "title": "transition-delay",
    "category": "Transitions",
    "introduction": "Detailed study of multi-element transition-delay choreography in menus and dialogs.",
    "explanation": "INVENTORY NOTICE: Exact title 'transition-delay'. Explores sequential cascading reveals.",
    "syntax": "transition-delay: 100ms;",
    "selectorsOrProps": [
      "transition-delay",
      "cascade"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"cascade-parent\">\n    <span class=\"c-item c1\">Node 1</span>\n    <span class=\"c-item c2\">Node 2</span>\n    <span class=\"c-item c3\">Node 3</span>\n  </div>\n</div>",
    "cssExample": ".cascade-parent { display: flex; gap: 8px; }\n.c-item {\n  background: #e2e8f0;\n  padding: 10px 16px;\n  border-radius: 6px;\n  font-weight: bold;\n  transition: background 0.3s ease;\n}\n.c1 { transition-delay: 0s; }\n.c2 { transition-delay: 0.15s; }\n.c3 { transition-delay: 0.3s; }\n.cascade-parent:hover .c-item {\n  background: #4f46e5;\n  color: white;\n}",
    "expectedOutput": "Hovering over the group triggers a domino-like sequential color cascade across the three nodes.",
    "notes": "Creates polished app-like animation flows when opening navigation panels.",
    "commonMistakes": "Reset delays on mouse leave if you want the panel to close immediately without lag."
  },
  {
    "id": 113,
    "number": "113",
    "title": "timing-function",
    "category": "Transitions",
    "introduction": "Deep dive into the math behind cubic-bezier curve generation for custom physics.",
    "explanation": "INVENTORY NOTICE: Exact title 'timing-function'. Explores the 4 control points of cubic-bezier curves.",
    "syntax": "transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);",
    "selectorsOrProps": [
      "cubic-bezier",
      "spring physics"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"bounce-btn\">Elastic Spring Curve</button>\n</div>",
    "cssExample": ".bounce-btn {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.bounce-btn:hover {\n  transform: scale(1.15);\n}",
    "expectedOutput": "Button expands with an authentic elastic spring overshoot when hovered.",
    "notes": "Values above 1.0 or below 0.0 in the 2nd and 4th parameters create bouncy overshoot effects.",
    "commonMistakes": "Overshoot timing functions do not work on colors or opacity; they are best for transforms."
  },
  {
    "id": 114,
    "number": "114",
    "title": "CSS Transformations",
    "category": "2D & 3D Transforms",
    "introduction": "The transform property modifies the coordinate space of an element in 2D or 3D.",
    "explanation": "Transforms rotate, scale, skew, or translate elements without disrupting normal document layout.",
    "syntax": "transform: translate(x, y) rotate(deg) scale(n);",
    "selectorsOrProps": [
      "transform",
      "hardware acceleration"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"trans-sample\">Transformed Card</div>\n</div>",
    "cssExample": ".trans-sample {\n  width: 180px;\n  margin: 20px auto;\n  background: linear-gradient(135deg, #4f46e5, #06b6d4);\n  color: white;\n  padding: 20px;\n  text-align: center;\n  border-radius: 10px;\n  font-weight: bold;\n  transform: rotate(-3deg) translateY(-5px);\n  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);\n}",
    "expectedOutput": "A jaunty, stylish card tilted -3 degrees and lifted 5px upward with drop shadow.",
    "notes": "Transforms are processed on the GPU (compositor thread) ensuring buttery smooth performance.",
    "commonMistakes": "Transforms do not alter the physical space occupied by the element in normal document flow."
  },
  {
    "id": 115,
    "number": "115",
    "title": "CSS Translate",
    "category": "2D & 3D Transforms",
    "introduction": "Moves an element from its current position along horizontal (X) and vertical (Y) axes.",
    "explanation": "translate(x, y) accepts pixels, percentages, or rems. Percentages relate to the element's own dimensions.",
    "syntax": "transform: translate(20px, -10px);\ntranslate: 20px -10px; /* Modern syntax */",
    "selectorsOrProps": [
      "translate()",
      "translateX",
      "translateY"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"target-point\">Original Spot</div>\n  <div class=\"shifted-target\">Moved with translate(40px, -20px)</div>\n</div>",
    "cssExample": ".target-point {\n  border: 2px dashed #cbd5e1;\n  padding: 12px;\n  border-radius: 6px;\n  color: #94a3b8;\n}\n.shifted-target {\n  background: #4f46e5;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  font-weight: bold;\n  transform: translate(40px, -20px);\n  width: fit-content;\n}",
    "expectedOutput": "The purple element floats 40px to the right and 20px above its natural coordinate point.",
    "notes": "translate(-50%, -50%) calculates off the element's own width and height, enabling perfect centering.",
    "commonMistakes": "Using top/left for animation triggers layout reflows; translate only triggers compositing."
  },
  {
    "id": 116,
    "number": "116",
    "title": "Translate x-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Shifts an element strictly along the horizontal X-axis.",
    "explanation": "translateX(px) moves right with positive values and left with negative values.",
    "syntax": "transform: translateX(30px);",
    "selectorsOrProps": [
      "translateX()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"slide-x-box\">Hover to Slide Right &rarr;</div>\n</div>",
    "cssExample": ".slide-x-box {\n  display: inline-block;\n  background: #0284c7;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  font-weight: bold;\n  transition: transform 0.3s ease;\n}\n.slide-x-box:hover {\n  transform: translateX(30px);\n}",
    "expectedOutput": "Box smoothly slides 30px to the right when hovered.",
    "notes": "Perfect for button arrow micro-interactions and horizontal drawer navigation.",
    "commonMistakes": "Excessive positive translateX can cause horizontal viewport scrollbars on mobile."
  },
  {
    "id": 117,
    "number": "117",
    "title": "Translate y-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Shifts an element strictly along the vertical Y-axis.",
    "explanation": "translateY(px) moves down with positive values and up with negative values.",
    "syntax": "transform: translateY(-8px);",
    "selectorsOrProps": [
      "translateY()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"lift-card\">Hover to Lift Card &uarr;</div>\n</div>",
    "cssExample": ".lift-card {\n  background: white;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  border-radius: 10px;\n  color: #1e293b;\n  font-weight: 600;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n  transition: all 0.25s ease;\n}\n.lift-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.2);\n  border-color: #818cf8;\n}",
    "expectedOutput": "Card physically lifts upward with an enhanced shadow on hover.",
    "notes": "The standard modern web technique for card hover elevation.",
    "commonMistakes": "Negative translateY moves UPWARDS; positive moves DOWNWARDS."
  },
  {
    "id": 118,
    "number": "118",
    "title": "Translate shorthand",
    "category": "2D & 3D Transforms",
    "introduction": "Declares X and Y axis translations together in a single compact declaration.",
    "explanation": "Both transform: translate(x, y) and the modern standalone translate: x y property are supported.",
    "syntax": "transform: translate(20px, 15px);\ntranslate: 20px 15px;",
    "selectorsOrProps": [
      "translate",
      "shorthand"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"shorthand-box\">Translate X: 25px, Y: 10px</div>\n</div>",
    "cssExample": ".shorthand-box {\n  background: #1e1b4b;\n  color: #a5f3fc;\n  padding: 18px;\n  border-radius: 8px;\n  font-weight: bold;\n  transform: translate(25px, 10px);\n  display: inline-block;\n}",
    "expectedOutput": "Element translated diagonally (25px right and 10px down) in a single rule.",
    "notes": "If the second parameter is omitted, it defaults to 0 (translate(x) is equivalent to translateX(x)).",
    "commonMistakes": "Always separate the two parameters with a comma inside transform: translate(x, y)."
  },
  {
    "id": 119,
    "number": "119",
    "title": "Translate realtime example",
    "category": "2D & 3D Transforms",
    "introduction": "A real-world interactive toggle switch component built with translate.",
    "explanation": "Moving a circular knob horizontally using translateX creates a smooth, native-feeling toggle switch.",
    "syntax": "input:checked + .slider .knob { transform: translateX(24px); }",
    "selectorsOrProps": [
      "toggle switch",
      "translateX"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label class=\"switch-label\">\n    <input type=\"checkbox\" id=\"tog\" checked>\n    <span class=\"switch-track\"><span class=\"switch-knob\"></span></span>\n    <span>Dark Mode Active</span>\n  </label>\n</div>",
    "cssExample": ".switch-label { display: flex; align-items: center; gap: 12px; cursor: pointer; font-weight: 600; }\n.switch-label input { display: none; }\n.switch-track {\n  width: 50px;\n  height: 26px;\n  background: #cbd5e1;\n  border-radius: 20px;\n  position: relative;\n  transition: background 0.3s ease;\n}\n.switch-knob {\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\ninput:checked + .switch-track { background: #4f46e5; }\ninput:checked + .switch-track .switch-knob { transform: translateX(24px); }",
    "expectedOutput": "A working toggle switch where the white knob slides smoothly between left and right.",
    "notes": "Using translateX produces hardware-accelerated 60fps mobile switch animations.",
    "commonMistakes": "Make sure the input is hidden visually but accessible to screen readers."
  },
  {
    "id": 120,
    "number": "120",
    "title": "CSS Scale",
    "category": "2D & 3D Transforms",
    "introduction": "Scales elements up or down proportionally from their transform origin.",
    "explanation": "scale(1.2) enlarges the element by 20%; scale(0.8) shrinks it by 20%.",
    "syntax": "transform: scale(1.15);\nscale: 1.15; /* Modern syntax */",
    "selectorsOrProps": [
      "scale()",
      "zoom"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"scale-badge\">Hover to Scale 1.15x</div>\n</div>",
    "cssExample": ".scale-badge {\n  display: inline-block;\n  background: #10b981;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 8px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.scale-badge:hover {\n  transform: scale(1.15);\n}",
    "expectedOutput": "Badge smoothly enlarges by 15% on hover without pushing neighboring elements.",
    "notes": "Scale does not affect layout geometry of surrounding siblings.",
    "commonMistakes": "Scaling non-vector content (like raster bitmap images) too large introduces pixelation blur."
  },
  {
    "id": 121,
    "number": "121",
    "title": "Scale x axis",
    "category": "2D & 3D Transforms",
    "introduction": "Stretches or compresses an element along the horizontal X-axis.",
    "explanation": "scaleX(number) modifies horizontal width without changing vertical height.",
    "syntax": "transform: scaleX(1.4);",
    "selectorsOrProps": [
      "scaleX()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"scalex-box\">Stretched Horizontally (scaleX: 1.3)</div>\n</div>",
    "cssExample": ".scalex-box {\n  background: #4f46e5;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: bold;\n  transform: scaleX(1.3);\n  transform-origin: left;\n}",
    "expectedOutput": "The box is stretched 30% wider along the horizontal plane.",
    "notes": "Negative scaleX(-1) flips the element horizontally (mirror effect).",
    "commonMistakes": "Text inside is also stretched horizontally unless countered."
  },
  {
    "id": 122,
    "number": "122",
    "title": "Scale y axis",
    "category": "2D & 3D Transforms",
    "introduction": "Stretches or compresses an element along the vertical Y-axis.",
    "explanation": "scaleY(number) alters vertical height while preserving horizontal width.",
    "syntax": "transform: scaleY(1.4);",
    "selectorsOrProps": [
      "scaleY()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"scaley-bar\">Bar Chart Column (scaleY)</div>\n</div>",
    "cssExample": ".scaley-bar {\n  width: 140px;\n  height: 60px;\n  background: #06b6d4;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  font-weight: bold;\n  transform: scaleY(1.4);\n  transform-origin: bottom;\n}",
    "expectedOutput": "A bar column stretched vertically upward from its bottom anchor.",
    "notes": "Combining scaleY(0) to scaleY(1) creates accordion drawer open/close animations.",
    "commonMistakes": "Negative scaleY(-1) flips the element upside-down vertically."
  },
  {
    "id": 123,
    "number": "123",
    "title": "Scale shorthand",
    "category": "2D & 3D Transforms",
    "introduction": "Combines X and Y scaling into a single declaration with independent axis values.",
    "explanation": "scale(x, y) accepts distinct multipliers for width and height.",
    "syntax": "transform: scale(1.2, 0.9);",
    "selectorsOrProps": [
      "scale(x, y)"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"scale-shorthand-box\">scale(1.2, 0.85)</div>\n</div>",
    "cssExample": ".scale-shorthand-box {\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 16px 24px;\n  border-radius: 8px;\n  display: inline-block;\n  font-weight: bold;\n  transform: scale(1.2, 0.85);\n}",
    "expectedOutput": "A button stretched 20% wider horizontally while compressed 15% vertically.",
    "notes": "If only one value is passed to scale(s), both X and Y axes are scaled uniformly by that number.",
    "commonMistakes": "Always separate the two parameters with a comma inside transform: scale(x, y)."
  },
  {
    "id": 124,
    "number": "124",
    "title": "Scale realtime example",
    "category": "2D & 3D Transforms",
    "introduction": "A real-world interactive pulse badge animation built using scale.",
    "explanation": "Subtly scaling a notification dot or status indicator draws user attention.",
    "syntax": "@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.25); } }",
    "selectorsOrProps": [
      "pulse badge",
      "scale animation"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"live-badge\"><span class=\"pulse-dot\"></span> LIVE STREAM</div>\n</div>",
    "cssExample": ".live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef2f2;\n  color: #dc2626;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.pulse-dot {\n  width: 10px;\n  height: 10px;\n  background: #dc2626;\n  border-radius: 50%;\n  animation: pulse 1.2s infinite ease-in-out;\n}\n@keyframes pulse {\n  0%, 100% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.5); opacity: 0.6; }\n}",
    "expectedOutput": "A red 'LIVE STREAM' pill with a smoothly pulsing red status light.",
    "notes": "Scale animations run entirely on the GPU without triggering browser paint loops.",
    "commonMistakes": "Keep pulse scales subtle (1.2 to 1.5) to avoid jarring the user."
  },
  {
    "id": 125,
    "number": "125",
    "title": "CSS Rotate",
    "category": "2D & 3D Transforms",
    "introduction": "Rotates an element around a fixed point on the 2D plane using angular units.",
    "explanation": "Accepts degrees (deg), radians (rad), gradians (grad), or turns (turn).",
    "syntax": "transform: rotate(45deg);\nrotate: 45deg; /* Modern syntax */",
    "selectorsOrProps": [
      "rotate()",
      "deg",
      "turn"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"rotate-badge\">ROTATED 15\u00b0</div>\n</div>",
    "cssExample": ".rotate-badge {\n  background: #f59e0b;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: bold;\n  display: inline-block;\n  transform: rotate(15deg);\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);\n}",
    "expectedOutput": "An amber badge tilted clockwise at a jaunty 15-degree angle.",
    "notes": "1turn is equal to 360deg, which is clean and readable for full revolutions.",
    "commonMistakes": "Rotated elements can overlap neighboring text if sufficient padding isn't provided."
  },
  {
    "id": 126,
    "number": "126",
    "title": "Rotate x-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Rotates an element around its horizontal X-axis in 3D space.",
    "explanation": "Tilts the top and bottom of the element toward or away from the viewer.",
    "syntax": "transform: rotateX(45deg);",
    "selectorsOrProps": [
      "rotateX()",
      "3D tilt"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"perspective: 500px;\">\n  <div class=\"rotate-x-card\">Tilted on X-Axis (rotateX: 40deg)</div>\n</div>",
    "cssExample": ".rotate-x-card {\n  background: #4f46e5;\n  color: white;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transform: rotateX(40deg);\n}",
    "expectedOutput": "A purple card appearing tilted backward like a ramp in 3D perspective.",
    "notes": "Requires perspective on the parent container to create realistic 3D depth.",
    "commonMistakes": "Rotating 90deg causes the element to become edge-on and virtually invisible."
  },
  {
    "id": 127,
    "number": "127",
    "title": "Rotate y-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Rotates an element around its vertical Y-axis in 3D space.",
    "explanation": "Tilts the left and right sides of the element, foundational for 3D card flips.",
    "syntax": "transform: rotateY(45deg);",
    "selectorsOrProps": [
      "rotateY()",
      "card flip"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"perspective: 600px;\">\n  <div class=\"rotate-y-card\">Turned on Y-Axis (rotateY: 35deg)</div>\n</div>",
    "cssExample": ".rotate-y-card {\n  background: #0284c7;\n  color: white;\n  padding: 24px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transform: rotateY(35deg);\n}",
    "expectedOutput": "A blue card angled away like an open door in 3D space.",
    "notes": "Rotating 180deg flips the card completely to reveal its reverse side.",
    "commonMistakes": "Use backface-visibility: hidden to hide the reversed side of a card during flips."
  },
  {
    "id": 128,
    "number": "128",
    "title": "Rotate z-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Rotates an element around the Z-axis (pointing perpendicular to the screen).",
    "explanation": "rotateZ() is mathematically identical to standard 2D rotate().",
    "syntax": "transform: rotateZ(30deg);",
    "selectorsOrProps": [
      "rotateZ()",
      "2D plane"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"rotate-z-box\">rotateZ(25deg)</div>\n</div>",
    "cssExample": ".rotate-z-box {\n  background: #10b981;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  display: inline-block;\n  font-weight: bold;\n  transform: rotateZ(25deg);\n}",
    "expectedOutput": "A green box rotated 25 degrees clockwise on the screen plane.",
    "notes": "rotateZ(angle) and rotate(angle) produce the exact same visual result.",
    "commonMistakes": "Specifying rotateZ signals 3D rendering context to the browser GPU."
  },
  {
    "id": 129,
    "number": "129",
    "title": "Rotate real time example",
    "category": "2D & 3D Transforms",
    "introduction": "A spinning loading spinner / cog indicator built with continuous rotation.",
    "explanation": "Using @keyframes to rotate from 0deg to 360deg creates smooth infinite loading spinners.",
    "syntax": "animation: spin 1s linear infinite;",
    "selectorsOrProps": [
      "loading spinner",
      "rotate animation"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"spinner\"></div>\n</div>",
    "cssExample": ".spinner {\n  width: 44px;\n  height: 44px;\n  border: 4px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 10px auto;\n}\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}",
    "expectedOutput": "A crisp indigo circular loading spinner rotating continuously on the screen.",
    "notes": "linear timing function ensures consistent rotational velocity without pausing.",
    "commonMistakes": "Keep spinner animations performant by avoiding box-shadows on rapidly spinning elements."
  },
  {
    "id": 130,
    "number": "130",
    "title": "CSS Skew",
    "category": "2D & 3D Transforms",
    "introduction": "Shears an element along its 2D axes, distorting right angles into parallelograms.",
    "explanation": "skew(x-angle, y-angle) creates stylish dynamic angles and slanting ribbons.",
    "syntax": "transform: skew(15deg, 0deg);",
    "selectorsOrProps": [
      "skew()",
      "shearing"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"skew-banner\">CYBER MONDAY DEAL</div>\n</div>",
    "cssExample": ".skew-banner {\n  background: #ef4444;\n  color: white;\n  padding: 10px 24px;\n  font-weight: bold;\n  display: inline-block;\n  transform: skew(-15deg);\n  border-radius: 4px;\n}",
    "expectedOutput": "An aggressive, dynamic red banner sheared at a -15 degree slant.",
    "notes": "Skewing is popular for sports, gaming, and promotional banner aesthetics.",
    "commonMistakes": "Remember that skewing distorts text; counter-skew child text if you want the text upright."
  },
  {
    "id": 131,
    "number": "131",
    "title": "Skew x-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Shears an element strictly along the horizontal X-axis.",
    "explanation": "skewX(angle) slants vertical edges horizontally while horizontal lines stay parallel.",
    "syntax": "transform: skewX(-20deg);",
    "selectorsOrProps": [
      "skewX()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"skewx-button\">Slanted Action Button</div>\n</div>",
    "cssExample": ".skewx-button {\n  background: #4f46e5;\n  color: white;\n  padding: 12px 28px;\n  font-weight: bold;\n  display: inline-block;\n  transform: skewX(-15deg);\n  cursor: pointer;\n}",
    "expectedOutput": "A button whose left and right edges are slanted forward dynamically.",
    "notes": "Use small angles (-10deg to -15deg) for sleek modern styling.",
    "commonMistakes": "Angles nearing 90deg distort the element into an infinitely thin line."
  },
  {
    "id": 132,
    "number": "132",
    "title": "Skew y-axis",
    "category": "2D & 3D Transforms",
    "introduction": "Shears an element strictly along the vertical Y-axis.",
    "explanation": "skewY(angle) slants horizontal edges vertically while vertical lines remain upright.",
    "syntax": "transform: skewY(6deg);",
    "selectorsOrProps": [
      "skewY()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"skewy-section\">Angled Section Banner (skewY: 6deg)</div>\n</div>",
    "cssExample": ".skewy-section {\n  background: #0f172a;\n  color: #38bdf8;\n  padding: 24px;\n  font-weight: bold;\n  text-align: center;\n  transform: skewY(4deg);\n  border-radius: 8px;\n}",
    "expectedOutput": "A dark section container tilted along its horizontal baseline.",
    "notes": "Commonly used to create trendy diagonal background section dividers.",
    "commonMistakes": "Apply transform: skewY(-angle) to nested text to keep text upright and readable."
  },
  {
    "id": 133,
    "number": "133",
    "title": "Skew shorthand",
    "category": "2D & 3D Transforms",
    "introduction": "Declares X and Y skew angles together in a single transform declaration.",
    "explanation": "skew(x, y) applies horizontal and vertical shearing simultaneously.",
    "syntax": "transform: skew(10deg, 5deg);",
    "selectorsOrProps": [
      "skew(x, y)"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"skew-short-box\">skew(-10deg, 5deg)</div>\n</div>",
    "cssExample": ".skew-short-box {\n  background: #1e1b4b;\n  color: #c7d2fe;\n  padding: 18px;\n  display: inline-block;\n  font-weight: bold;\n  transform: skew(-10deg, 5deg);\n  border-radius: 6px;\n}",
    "expectedOutput": "A stylized container sheared along both axes into an isometric parallelogram.",
    "notes": "If the second argument is omitted, skew(x) assumes 0deg for the Y-axis.",
    "commonMistakes": "Separating parameters with spaces instead of commas causes a parse error."
  },
  {
    "id": 134,
    "number": "134",
    "title": "Skew realtime example",
    "category": "2D & 3D Transforms",
    "introduction": "A complete dynamic UI ribbon component created with skew and counter-skew.",
    "explanation": "Skewing the outer container while counter-skewing the text keeps words perfectly readable.",
    "syntax": ".ribbon { transform: skewX(-15deg); }\n.ribbon span { transform: skewX(15deg); }",
    "selectorsOrProps": [
      "angled ribbon",
      "counter-skew"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"ribbon\">\n    <span class=\"ribbon-text\">PREMIUM COURSE</span>\n  </div>\n</div>",
    "cssExample": ".ribbon {\n  background: linear-gradient(135deg, #4f46e5, #06b6d4);\n  display: inline-block;\n  padding: 10px 24px;\n  transform: skewX(-15deg);\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.ribbon-text {\n  display: inline-block;\n  transform: skewX(15deg); /* Counter-skew */\n  color: white;\n  font-weight: bold;\n  letter-spacing: 1px;\n}",
    "expectedOutput": "A slanted modern banner where the container is angled but the text inside stands upright.",
    "notes": "Counter-skewing child text is essential for professional design legibility.",
    "commonMistakes": "The child element must be display: inline-block or block for transform to take effect."
  },
  {
    "id": 135,
    "number": "135",
    "title": "Combining transforms",
    "category": "2D & 3D Transforms",
    "introduction": "Chaining multiple transformation functions together in a single space-separated list.",
    "explanation": "Transform functions execute from right to left in matrix multiplication order.",
    "syntax": "transform: translate(20px, -10px) rotate(5deg) scale(1.05);",
    "selectorsOrProps": [
      "chained transform",
      "matrix order"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"combo-card\">Hover to see combined transform</div>\n</div>",
    "cssExample": ".combo-card {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: bold;\n  transition: transform 0.3s ease;\n}\n.combo-card:hover {\n  transform: translateY(-8px) rotate(-2deg) scale(1.03);\n  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.35);\n}",
    "expectedOutput": "Card lifts, tilts slightly, and scales up smoothly upon hover.",
    "notes": "Order matters! translate() then rotate() behaves differently than rotate() then translate().",
    "commonMistakes": "Writing multiple separate transform properties overwrites earlier ones; always chain in one rule."
  },
  {
    "id": 136,
    "number": "136",
    "title": "CSS Transform Origin",
    "category": "2D & 3D Transforms",
    "introduction": "Sets the origin point (pivot) around which transformations occur.",
    "explanation": "Defaults to center (50% 50%). Can be keywords (top left) or pixel/percentage coordinates.",
    "syntax": "transform-origin: top left | center bottom | 50% 50%;",
    "selectorsOrProps": [
      "transform-origin",
      "pivot point"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"pivot-card\">Pivoted from Top-Left Corner</div>\n</div>",
    "cssExample": ".pivot-card {\n  width: 220px;\n  background: #0284c7;\n  color: white;\n  padding: 16px;\n  border-radius: 8px;\n  font-weight: bold;\n  transform-origin: top left;\n  transition: transform 0.3s ease;\n}\n.pivot-card:hover {\n  transform: rotate(15deg);\n}",
    "expectedOutput": "The card swings down like a hanging sign anchored to its top-left corner.",
    "notes": "Essential for clock hands, door swing effects, and pendulum animations.",
    "commonMistakes": "Transform origin applies to scale, rotate, and skew, but not translate."
  },
  {
    "id": 137,
    "number": "137",
    "title": "CSS Perspective",
    "category": "2D & 3D Transforms",
    "introduction": "Defines how far the viewer is placed from the 3D scene (camera depth).",
    "explanation": "Smaller perspective values (300px) produce intense dramatic distortion; larger values (1200px) produce subtle depth.",
    "syntax": "perspective: 800px;",
    "selectorsOrProps": [
      "perspective",
      "3D scene depth"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"perspective: 500px;\">\n  <div class=\"depth-card\">3D Perspective View (500px)</div>\n</div>",
    "cssExample": ".depth-card {\n  width: 240px;\n  margin: 15px auto;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transform: rotateX(30deg) rotateY(-20deg);\n  box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n}",
    "expectedOutput": "A card rendered in rich, realistic isometric 3D perspective.",
    "notes": "Perspective should be declared on the PARENT container of the 3D transformed elements.",
    "commonMistakes": "Applying perspective directly to the element requires the transform: perspective(800px) function."
  },
  {
    "id": 138,
    "number": "138",
    "title": "CSS Perspective Origin",
    "category": "2D & 3D Transforms",
    "introduction": "Sets the vanishing point (viewer's eye position) for the 3D perspective scene.",
    "explanation": "Defaults to center (50% 50%). Adjusting it shifts the viewing angle up, down, or sideways.",
    "syntax": "perspective-origin: top center | 25% 75%;",
    "selectorsOrProps": [
      "perspective-origin",
      "vanishing point"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"perspective: 500px; perspective-origin: top right;\">\n  <div class=\"pov-card\">Viewed from Top-Right Angle</div>\n</div>",
    "cssExample": ".pov-card {\n  width: 240px;\n  margin: 15px auto;\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  transform: rotateX(25deg);\n}",
    "expectedOutput": "A card viewed from an elevated vantage point to the right.",
    "notes": "Modifying perspective-origin simulates camera panning across a 3D stage.",
    "commonMistakes": "Has no effect unless perspective is active on the container."
  },
  {
    "id": 139,
    "number": "139",
    "title": "CSS 3D Transforms",
    "category": "2D & 3D Transforms",
    "introduction": "Enables true 3D spatial positioning with preserve-3d and translateZ.",
    "explanation": "transform-style: preserve-3d allows child elements to maintain their distinct 3D depth planes.",
    "syntax": "transform-style: preserve-3d;\ntransform: translateZ(50px);",
    "selectorsOrProps": [
      "preserve-3d",
      "translateZ"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"perspective: 800px;\">\n  <div class=\"scene-3d\">\n    <div class=\"layer back\">Layer 1 (Back)</div>\n    <div class=\"layer front\">Layer 2 (Front Z: 30px)</div>\n  </div>\n</div>",
    "cssExample": ".scene-3d {\n  position: relative;\n  height: 100px;\n  transform-style: preserve-3d;\n  transform: rotateY(-25deg);\n}\n.layer {\n  position: absolute;\n  padding: 14px 24px;\n  border-radius: 8px;\n  font-weight: bold;\n}\n.back {\n  background: #334155;\n  color: white;\n}\n.front {\n  background: #4f46e5;\n  color: white;\n  transform: translateZ(30px) translateY(15px);\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n}",
    "expectedOutput": "Two layered cards visibly floating at different depth levels in 3D space.",
    "notes": "preserve-3d is essential for building 3D cubes, carousels, and complex depth scenes.",
    "commonMistakes": "overflow: hidden on the parent breaks preserve-3d and flattens children into 2D."
  },
  {
    "id": 140,
    "number": "140",
    "title": "CSS Animations",
    "category": "Animations",
    "introduction": "Animations allow elements to transition gradually through complex multi-step choreographies.",
    "explanation": "Combines the animation property with @keyframes rule definitions for continuous movement.",
    "syntax": "animation: name duration timing-function iteration-count;",
    "selectorsOrProps": [
      "animation",
      "keyframes"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"anim-ball\"></div>\n</div>",
    "cssExample": ".anim-ball {\n  width: 40px;\n  height: 40px;\n  background: #4f46e5;\n  border-radius: 50%;\n  animation: bounce 1s infinite alternate ease-in-out;\n}\n@keyframes bounce {\n  from { transform: translateY(0); }\n  to { transform: translateY(40px); background: #06b6d4; }\n}",
    "expectedOutput": "A bouncing sphere that drops 40px and changes from indigo to cyan continuously.",
    "notes": "Unlike transitions, animations do not require user interaction (like hover) to run.",
    "commonMistakes": "Overly fast or erratic animations can trigger vestibular disorders; respect prefers-reduced-motion."
  },
  {
    "id": 141,
    "number": "141",
    "title": "CSS Keyframes",
    "category": "Animations",
    "introduction": "The @keyframes at-rule defines the stages and styles of an animation cycle.",
    "explanation": "Keyframes control what styles an element has at various points during its animation sequence.",
    "syntax": "@keyframes slideIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}",
    "selectorsOrProps": [
      "@keyframes",
      "waypoints"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"kf-box\">Fade & Slide In</div>\n</div>",
    "cssExample": ".kf-box {\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 16px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n  animation: fadeIn 1.2s ease forwards;\n}\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}",
    "expectedOutput": "A card that smoothly fades into view while sliding 20px upward into position.",
    "notes": "0% corresponds to 'from' and 100% corresponds to 'to'.",
    "commonMistakes": "Omitting 0% or 100% causes the browser to infer starting or ending styles from the element's existing declarations."
  },
  {
    "id": 142,
    "number": "142",
    "title": "CSS Animation Iteration Count",
    "category": "Animations",
    "introduction": "Specifies how many times an animation cycle plays before stopping.",
    "explanation": "Accepts an integer (e.g. 3) or the keyword infinite for perpetual looping.",
    "syntax": "animation-iteration-count: 3 | infinite;",
    "selectorsOrProps": [
      "animation-iteration-count",
      "infinite"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <span class=\"badge-ping\">Ping Notification</span>\n</div>",
    "cssExample": ".badge-ping {\n  display: inline-block;\n  background: #ef4444;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: bold;\n  animation: ping 1s ease-in-out infinite;\n}\n@keyframes ping {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n}",
    "expectedOutput": "A notification badge gently pulsating indefinitely.",
    "notes": "Use infinite for continuous background ambiances, spinners, and status beacons.",
    "commonMistakes": "Avoid excessive infinite animations on mobile to conserve battery life."
  },
  {
    "id": 143,
    "number": "143",
    "title": "CSS Animation Direction",
    "category": "Animations",
    "introduction": "Determines whether an animation plays forwards, in reverse, or alternates between directions.",
    "explanation": "Values include normal, reverse, alternate (forward then reverse), and alternate-reverse.",
    "syntax": "animation-direction: alternate | reverse | normal;",
    "selectorsOrProps": [
      "animation-direction",
      "alternate"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"patrol-box\">Patrolling Element</div>\n</div>",
    "cssExample": ".patrol-box {\n  width: 140px;\n  background: #0284c7;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  text-align: center;\n  font-weight: bold;\n  animation: patrol 2s ease-in-out infinite alternate;\n}\n@keyframes patrol {\n  from { transform: translateX(0); }\n  to { transform: translateX(80px); background: #4f46e5; }\n}",
    "expectedOutput": "Element smoothly glides 80px back and forth in an unbroken fluid motion.",
    "notes": "alternate creates natural pendulum oscillations without harsh jump cuts at the cycle end.",
    "commonMistakes": "alternate requires iteration-count to be 2 or more to see the reverse playback."
  },
  {
    "id": 144,
    "number": "144",
    "title": "CSS Animation Fill Mode",
    "category": "Animations",
    "introduction": "Determines what styles apply to an element before the animation starts and after it finishes.",
    "explanation": "forwards retains the styling from the final keyframe; backwards applies the first keyframe during delay.",
    "syntax": "animation-fill-mode: forwards | backwards | both;",
    "selectorsOrProps": [
      "animation-fill-mode: forwards",
      "both"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fill-mode-box\">Retains Final State (forwards)</div>\n</div>",
    "cssExample": ".fill-mode-box {\n  background: #334155;\n  color: white;\n  padding: 16px;\n  border-radius: 6px;\n  font-weight: bold;\n  text-align: center;\n  animation: reveal 1.5s ease forwards;\n}\n@keyframes reveal {\n  0% { transform: scale(0.9); opacity: 0.5; }\n  100% { transform: scale(1.05); opacity: 1; background: #10b981; }\n}",
    "expectedOutput": "Box animates to green and stays permanently green and scaled (does not snap back to slate).",
    "notes": "animation-fill-mode: forwards is critical for entrance animations that shouldn't disappear when done.",
    "commonMistakes": "Without forwards, animations abruptly snap back to their pre-animation styles when finished."
  },
  {
    "id": 145,
    "number": "145",
    "title": "Keyframes from - to",
    "category": "Animations",
    "introduction": "Simplified keyframe declarations for linear two-state animations.",
    "explanation": "'from' is an alias for 0% and 'to' is an alias for 100%.",
    "syntax": "@keyframes glow {\n  from { box-shadow: none; }\n  to { box-shadow: 0 0 15px cyan; }\n}",
    "selectorsOrProps": [
      "from",
      "to",
      "two-state"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"glow-btn\">Glowing Action</button>\n</div>",
    "cssExample": ".glow-btn {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-weight: bold;\n  font-size: 1rem;\n  cursor: pointer;\n  animation: aura 1.2s infinite alternate ease-in-out;\n}\n@keyframes aura {\n  from { box-shadow: 0 0 0 rgba(79, 70, 229, 0); }\n  to { box-shadow: 0 0 20px rgba(79, 70, 229, 0.75); transform: translateY(-2px); }\n}",
    "expectedOutput": "Button smoothly pulses with an ambient purple halo.",
    "notes": "from and to are ideal for straightforward entry, exit, or looping pulse animations.",
    "commonMistakes": "When you need 3 or more intermediate steps, use percentage waypoints instead."
  },
  {
    "id": 146,
    "number": "146",
    "title": "Keyframes percentage",
    "category": "Animations",
    "introduction": "Defines multi-stage waypoints (0%, 25%, 50%, 75%, 100%) for complex choreography.",
    "explanation": "Allows fine-tuned control over an element's path, morphing colors, and timing.",
    "syntax": "@keyframes multiStep {\n  0% { ... } 50% { ... } 100% { ... }\n}",
    "selectorsOrProps": [
      "percentages",
      "multi-step choreography"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"multi-step-box\">Multi-Stage Color & Shape Morph</div>\n</div>",
    "cssExample": ".multi-step-box {\n  width: 180px;\n  height: 60px;\n  background: #4f46e5;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 6px;\n  animation: morph 3s infinite ease-in-out;\n}\n@keyframes morph {\n  0% { transform: scale(1); background: #4f46e5; border-radius: 6px; }\n  33% { transform: scale(1.1) rotate(2deg); background: #06b6d4; border-radius: 20px; }\n  66% { transform: scale(0.95) rotate(-2deg); background: #10b981; border-radius: 30px; }\n  100% { transform: scale(1); background: #4f46e5; border-radius: 6px; }\n}",
    "expectedOutput": "Box smoothly morphs through purple, cyan, and emerald green while flexing its shape.",
    "notes": "Multiple percentages can share the same frame: 0%, 100% { opacity: 0; }.",
    "commonMistakes": "Keep percentage steps in ascending numerical order for code clarity."
  },
  {
    "id": 147,
    "number": "147",
    "title": "Simple CSS Animation",
    "category": "Animations",
    "introduction": "A clean foundational animation demonstrating a breathing card elevation.",
    "explanation": "Combines subtle scale and box-shadow shifts for premium, organic UI motion.",
    "syntax": "animation: breath 2s infinite ease-in-out;",
    "selectorsOrProps": [
      "breathing motion",
      "organic UI"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"breathe-card\">\n    <h4>Interactive Card</h4>\n    <p>Organic breathing pulse effect</p>\n  </div>\n</div>",
    "cssExample": ".breathe-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 20px;\n  border-radius: 12px;\n  text-align: center;\n  animation: breathe 2.5s infinite ease-in-out;\n}\n.breathe-card h4 { color: #4f46e5; margin: 0 0 6px 0; }\n.breathe-card p { color: #64748b; margin: 0; }\n@keyframes breathe {\n  0%, 100% { transform: translateY(0); box-shadow: 0 4px 6px rgba(0,0,0,0.05); }\n  50% { transform: translateY(-6px); box-shadow: 0 14px 20px rgba(79, 70, 229, 0.15); }\n}",
    "expectedOutput": "A clean white card gently floating up and down with breathing shadow depth.",
    "notes": "Subtle micro-animations bring life to otherwise static marketing cards.",
    "commonMistakes": "Avoid large movements that make reading text difficult."
  },
  {
    "id": 148,
    "number": "148",
    "title": "Background Image Animation",
    "category": "Animations",
    "introduction": "Animates background-position to create infinite scrolling landscapes or moving stars.",
    "explanation": "Panning background-position over time creates continuous horizontal motion.",
    "syntax": "animation: panBackground 20s linear infinite;",
    "selectorsOrProps": [
      "background-position",
      "infinite pan"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"pan-strip\">PANNING BACKGROUND STRIP</div>\n</div>",
    "cssExample": ".pan-strip {\n  height: 80px;\n  background-image: repeating-linear-gradient(45deg, #4f46e5 0, #4f46e5 10px, #4338ca 10px, #4338ca 20px);\n  background-size: 40px 40px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  letter-spacing: 2px;\n  border-radius: 8px;\n  animation: moveBg 2s linear infinite;\n}\n@keyframes moveBg {\n  from { background-position: 0 0; }\n  to { background-position: 40px 0; }\n}",
    "expectedOutput": "Striped barber-pole style animated stripes sliding infinitely across the banner.",
    "notes": "Ensure the background tile dimensions match the keyframe translation distance for seamless looping.",
    "commonMistakes": "Animating background-position on huge high-resolution images can trigger high CPU usage on low-end devices."
  },
  {
    "id": 149,
    "number": "149",
    "title": "Image Zoom Animation",
    "category": "Animations",
    "introduction": "The classic Ken Burns hero effect: slowly zooming an image within an overflow: hidden frame.",
    "explanation": "Scaling an image from 1.0 to 1.15 over a long duration creates dramatic cinematic atmosphere.",
    "syntax": ".frame { overflow: hidden; } .frame img { animation: kenBurns 10s infinite; }",
    "selectorsOrProps": [
      "Ken Burns effect",
      "cinematic zoom"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"kb-frame\">\n    <div class=\"kb-image\">Cinematic Zoom Effect</div>\n  </div>\n</div>",
    "cssExample": ".kb-frame {\n  width: 100%;\n  max-width: 320px;\n  height: 140px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.kb-image {\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, #0284c7, #1e1b4b);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  animation: zoomCinematic 6s infinite alternate ease-in-out;\n}\n@keyframes zoomCinematic {\n  from { transform: scale(1); }\n  to { transform: scale(1.15); }\n}",
    "expectedOutput": "A contained frame showing an interior gradient slowly and smoothly zooming in and out.",
    "notes": "overflow: hidden on the parent frame is strictly required so scaled corners don't leak out.",
    "commonMistakes": "Slow, gentle durations (6s to 12s) look luxurious; fast durations feel dizzying."
  },
  {
    "id": 150,
    "number": "150",
    "title": "Animation using padding",
    "category": "Animations",
    "introduction": "Demonstrates animating box spacing dimensions and highlights performance considerations.",
    "explanation": "While animating padding works, modern CSS prefers transforms for better frame rates.",
    "syntax": "@keyframes expandPad {\n  to { padding: 30px; }\n}",
    "selectorsOrProps": [
      "padding animation",
      "reflow warning"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"pad-anim\">Expanding Padding Container</div>\n</div>",
    "cssExample": ".pad-anim {\n  background: #ede9fe;\n  color: #4f46e5;\n  border: 2px solid #818cf8;\n  border-radius: 8px;\n  font-weight: bold;\n  text-align: center;\n  padding: 12px;\n  animation: flexPad 2s infinite alternate ease-in-out;\n}\n@keyframes flexPad {\n  from { padding: 12px 16px; }\n  to { padding: 24px 32px; }\n}",
    "expectedOutput": "The box physically expands and contracts its internal breathing space rhythmically.",
    "notes": "EDUCATIONAL NOTE: Animating padding forces layout recalculation (reflow). Use transform: scale() when possible for high-fps UI.",
    "commonMistakes": "Avoid animating padding on elements with many complex sibling nodes."
  },
  {
    "id": 151,
    "number": "151",
    "title": "Border Animation",
    "category": "Animations",
    "introduction": "Creates flowing gradient borders around cards using rotated pseudo-elements.",
    "explanation": "Rotating a conic gradient behind an inner card creates a continuous flowing neon border.",
    "syntax": ".glow-border::before { animation: spin 4s linear infinite; }",
    "selectorsOrProps": [
      "animated border",
      "conic gradient"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"neon-card\">\n    <div class=\"neon-content\">\n      <h4>Cyber Neon Border</h4>\n      <p>Continuous rotating gradient perimeter</p>\n    </div>\n  </div>\n</div>",
    "cssExample": ".neon-card {\n  position: relative;\n  padding: 3px;\n  border-radius: 12px;\n  overflow: hidden;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.neon-card::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(transparent, #4f46e5, #06b6d4, transparent 30%);\n  animation: rotateBorder 4s linear infinite;\n}\n.neon-content {\n  position: relative;\n  background: #0f172a;\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  z-index: 1;\n}\n.neon-content h4 { color: #38bdf8; margin: 0 0 6px 0; }\n@keyframes rotateBorder { 100% { transform: rotate(1turn); } }",
    "expectedOutput": "A dark card framed by an energetic light stream rotating around its rounded border.",
    "notes": "The conic-gradient plus overflow: hidden technique is the modern industry standard for gaming/SaaS cards.",
    "commonMistakes": "Keep the inner content z-index higher than the rotating pseudo-element."
  },
  {
    "id": 152,
    "number": "152",
    "title": "Border shadow animation",
    "category": "Animations",
    "introduction": "Animates glowing colored drop shadows around an element to simulate power surges.",
    "explanation": "Pulsing box-shadow color and spread gives elements an active aura without shifting layout.",
    "syntax": "@keyframes shadowPulse { 50% { box-shadow: 0 0 25px #06b6d4; } }",
    "selectorsOrProps": [
      "shadow pulse",
      "box-shadow animation"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"energy-card\">Aura Energy Pulse</div>\n</div>",
    "cssExample": ".energy-card {\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: bold;\n  border: 1px solid #4f46e5;\n  animation: auraPulse 2s infinite ease-in-out;\n}\n@keyframes auraPulse {\n  0%, 100% { box-shadow: 0 0 10px rgba(79, 70, 229, 0.4); }\n  50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.8); border-color: #06b6d4; }\n}",
    "expectedOutput": "Card continuously emits a rhythmic breathing aura of purple and bright cyan.",
    "notes": "Box-shadow animations look magnificent on dark UI designs.",
    "commonMistakes": "Multiple heavy box-shadow layers can cause frame drops on older smartphones."
  },
  {
    "id": 153,
    "number": "153",
    "title": "CSS tooltip",
    "category": "Animations",
    "introduction": "Smooth animated tooltip that fades and slides into view upon hovering.",
    "explanation": "INVENTORY NOTICE: Exact title 'CSS tooltip'. Combines opacity and translateY transitions for slick UX.",
    "syntax": ".tooltip-box:hover .tip { opacity: 1; transform: translateY(-8px); }",
    "selectorsOrProps": [
      "animated tooltip",
      "slide transition"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"padding-top: 40px; text-align:center;\">\n  <div class=\"anim-tip-wrap\">\n    <span class=\"badge-tip\">Hover for Animated Tooltip</span>\n    <div class=\"tip-bubble\">Lesson 153 Completed! \u2b50</div>\n  </div>\n</div>",
    "cssExample": ".anim-tip-wrap {\n  position: relative;\n  display: inline-block;\n}\n.badge-tip {\n  background: #4f46e5;\n  color: white;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: bold;\n  cursor: pointer;\n}\n.tip-bubble {\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%) translateY(6px);\n  background: #0f172a;\n  color: #38bdf8;\n  padding: 6px 14px;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);\n  pointer-events: none;\n}\n.anim-tip-wrap:hover .tip-bubble {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0);\n}",
    "expectedOutput": "Hovering triggers a crisp tooltip that glides 6px upwards while gracefully fading in.",
    "notes": "Combining visibility: hidden with opacity prevents screen readers and clicks when inactive.",
    "commonMistakes": "Ensure tooltips don't clip outside container edges."
  },
  {
    "id": 154,
    "number": "154",
    "title": "CSS Gradients",
    "category": "Gradients & Visual Effects",
    "introduction": "Gradients display smooth transitions between two or more designated colors.",
    "explanation": "CSS gradients act as generated images. They support linear, radial, and conic geometries.",
    "syntax": "background-image: linear-gradient(...);\nbackground-image: radial-gradient(...);",
    "selectorsOrProps": [
      "linear-gradient",
      "radial-gradient",
      "conic-gradient"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"grad-palette\">Full Spectrum Gradient Canvas</div>\n</div>",
    "cssExample": ".grad-palette {\n  height: 120px;\n  background: linear-gradient(135deg, #4f46e5, #06b6d4, #10b981);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.1rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 14px rgba(0,0,0,0.15);\n}",
    "expectedOutput": "A vibrant 3-stop gradient blending indigo, cyan, and emerald green smoothly.",
    "notes": "Gradients are classified as background-image, not background-color.",
    "commonMistakes": "Gradients cannot be transitioned with standard CSS transitions (use background-position or opacity instead)."
  },
  {
    "id": 155,
    "number": "155",
    "title": "CSS Linear Gradient",
    "category": "Gradients & Visual Effects",
    "introduction": "Creates a color transition along a straight directional line.",
    "explanation": "Directions can be specified in angles (135deg) or keywords (to right, to bottom right).",
    "syntax": "background: linear-gradient(135deg, #4f46e5, #06b6d4);",
    "selectorsOrProps": [
      "linear-gradient()",
      "angles"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"linear-card\">Angled Linear Gradient (135deg)</div>\n</div>",
    "cssExample": ".linear-card {\n  padding: 30px;\n  background: linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #06b6d4 100%);\n  color: white;\n  border-radius: 10px;\n  text-align: center;\n  font-weight: bold;\n}",
    "expectedOutput": "A diagonal color flow shifting from midnight indigo to electric cyan.",
    "notes": "Color stops can specify percentage positions: #4f46e5 30%, #06b6d4 70%.",
    "commonMistakes": "Omission of angle or direction defaults to 'to bottom' (180deg)."
  },
  {
    "id": 156,
    "number": "156",
    "title": "CSS Radial Gradient",
    "category": "Gradients & Visual Effects",
    "introduction": "Radiates color outward from a central point in circular or elliptical patterns.",
    "explanation": "Perfect for spotlights, glowing orbs, and vignette lens shading.",
    "syntax": "background: radial-gradient(circle at center, #06b6d4, #0f172a);",
    "selectorsOrProps": [
      "radial-gradient()",
      "spotlight"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"radial-orb\">Radial Glow Spotlight</div>\n</div>",
    "cssExample": ".radial-orb {\n  height: 140px;\n  background: radial-gradient(circle at center, #818cf8 0%, #312e81 60%, #0f172a 100%);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-weight: bold;\n}",
    "expectedOutput": "A spherical glow radiating from an illuminated center to a dark perimeter.",
    "notes": "Specify center coordinates like circle at top right to angle light sources.",
    "commonMistakes": "circle creates a uniform radius; ellipse adapts to the container's aspect ratio."
  },
  {
    "id": 157,
    "number": "157",
    "title": "CSS Conic Gradient",
    "category": "Gradients & Visual Effects",
    "introduction": "Rotates colors around a center pivot point like hands of a clock.",
    "explanation": "Used for color wheels, pie chart segments, progress rings, and rotating border glows.",
    "syntax": "background: conic-gradient(#4f46e5 0% 65%, #cbd5e1 65% 100%);",
    "selectorsOrProps": [
      "conic-gradient()",
      "donut chart",
      "color wheel"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; justify-content:center;\">\n  <div class=\"conic-donut\"><span class=\"donut-label\">65%</span></div>\n</div>",
    "cssExample": ".conic-donut {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: conic-gradient(#4f46e5 0% 65%, #e2e8f0 65% 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.donut-label {\n  width: 75px;\n  height: 75px;\n  background: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: #1e1b4b;\n}",
    "expectedOutput": "A circular donut chart indicating 65% completion built entirely in CSS.",
    "notes": "conic-gradient allows building data charts without canvas or SVG dependencies.",
    "commonMistakes": "Hard color stops (e.g. red 0% 40%, blue 40% 100%) create sharp non-blurred pie slices."
  },
  {
    "id": 158,
    "number": "158",
    "title": "CSS Multi-layer Gradients",
    "category": "Gradients & Visual Effects",
    "introduction": "Stacks multiple gradient layers separated by commas to construct complex textural patterns.",
    "explanation": "CSS renders comma-separated backgrounds from top to bottom (first listed is closest to viewer).",
    "syntax": "background: radial-gradient(...), linear-gradient(...);",
    "selectorsOrProps": [
      "multi-layer",
      "texture synthesis"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"layered-mesh\">Layered Mesh Grid Canvas</div>\n</div>",
    "cssExample": ".layered-mesh {\n  height: 120px;\n  background:\n    radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 40%),\n    radial-gradient(circle at 90% 80%, rgba(79, 70, 229, 0.5) 0%, transparent 40%),\n    #0f172a;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 12px;\n}",
    "expectedOutput": "A dark cyber background with dual glowing cyan and purple orb highlights.",
    "notes": "Top layers must use transparent alpha channels so lower layers remain visible.",
    "commonMistakes": "Layering gradients provides rich visual texture without any image asset HTTP requests."
  },
  {
    "id": 159,
    "number": "159",
    "title": "CSS Media Queries",
    "category": "Media Queries & Responsive",
    "introduction": "Applies CSS rules selectively based on device characteristics like viewport width and orientation.",
    "explanation": "The cornerstone of responsive web design: adapt layouts to mobile, tablet, and desktop screens.",
    "syntax": "@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}",
    "selectorsOrProps": [
      "@media",
      "responsive breakpoints"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"resp-banner\">\n    <span class=\"dt-text\">\ud83d\udda5\ufe0f Desktop Viewport (>600px)</span>\n    <span class=\"mb-text\">\ud83d\udcf1 Mobile Viewport (&le;600px)</span>\n  </div>\n</div>",
    "cssExample": ".resp-banner {\n  padding: 20px;\n  background: #1e1b4b;\n  color: #38bdf8;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n}\n.mb-text { display: none; }\n@media (max-width: 600px) {\n  .resp-banner { background: #065f46; color: #a7f3d0; }\n  .dt-text { display: none; }\n  .mb-text { display: inline; }\n}",
    "expectedOutput": "Displays desktop message on wide screens; turns green with mobile message on narrow viewports.",
    "notes": "Always include <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> in the HTML <head>.",
    "commonMistakes": "A mobile-first approach (@media min-width) is generally cleaner than desktop-first (@media max-width)."
  },
  {
    "id": 160,
    "number": "160",
    "title": "CSS Aspect Ratio",
    "category": "Media Queries & Responsive",
    "introduction": "Sets a preferred width-to-height ratio for an element that automatically adjusts on resize.",
    "explanation": "aspect-ratio eliminates layout shift (CLS) for video embeds, cards, and image placeholders.",
    "syntax": "aspect-ratio: 16 / 9 | 1 / 1 | 4 / 3;",
    "selectorsOrProps": [
      "aspect-ratio",
      "cumulative layout shift"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"aspect-video\">16 : 9 Aspect Ratio Video Container</div>\n</div>",
    "cssExample": ".aspect-video {\n  width: 100%;\n  max-width: 320px;\n  aspect-ratio: 16 / 9;\n  background: #0f172a;\n  color: #38bdf8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-weight: bold;\n}",
    "expectedOutput": "A video frame that precisely locks to a 16:9 widescreen ratio regardless of width.",
    "notes": "Replaces the older 'padding-top: 56.25%' hack with clean native CSS.",
    "commonMistakes": "If both width and height are explicitly declared, aspect-ratio is ignored."
  },
  {
    "id": 161,
    "number": "161",
    "title": "CSS Variables",
    "category": "CSS Variables & Modern Features",
    "introduction": "Custom properties defined with double dashes (--name) that can be accessed via var().",
    "explanation": "CSS variables cascade, inherit, and can be dynamically updated with media queries or JavaScript.",
    "syntax": ":root {\n  --primary: #4f46e5;\n}\n.btn {\n  background: var(--primary);\n}",
    "selectorsOrProps": [
      "custom properties",
      "var()",
      ":root"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"var-card\">\n    <h4>Theme Card via Variables</h4>\n    <button class=\"var-btn\">Branded Button</button>\n  </div>\n</div>",
    "cssExample": ":root {\n  --brand-purple: #4f46e5;\n  --brand-cyan: #06b6d4;\n  --card-radius: 12px;\n}\n.var-card {\n  background: #f8fafc;\n  border: 2px solid var(--brand-purple);\n  border-radius: var(--card-radius);\n  padding: 20px;\n  text-align: center;\n}\n.var-btn {\n  background: var(--brand-cyan);\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: calc(var(--card-radius) / 2);\n  font-weight: bold;\n}",
    "expectedOutput": "Card and button styled cohesively using shared design token variables.",
    "notes": "CSS variables are case-sensitive: --BrandColor is different from --brandcolor.",
    "commonMistakes": "Forgetting the var() function wrapper (e.g. color: --primary) invalidates the declaration."
  },
  {
    "id": 162,
    "number": "162",
    "title": "CSS variable 1",
    "category": "CSS Variables & Modern Features",
    "introduction": "Scoping CSS variables to specific components rather than the global :root.",
    "explanation": "INVENTORY NOTICE: Preserved title 'CSS variable 1'. Demonstrates local component token encapsulation.",
    "syntax": ".alert-danger { --theme: #ef4444; }",
    "selectorsOrProps": [
      "local scoping",
      "component tokens"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:10px;\">\n  <div class=\"badge-token success\">Success Token</div>\n  <div class=\"badge-token danger\">Danger Token</div>\n</div>",
    "cssExample": ".badge-token {\n  background: var(--badge-bg);\n  color: var(--badge-text);\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-weight: bold;\n}\n.success {\n  --badge-bg: #d1fae5;\n  --badge-text: #065f46;\n}\n.danger {\n  --badge-bg: #fee2e2;\n  --badge-text: #991b1b;\n}",
    "expectedOutput": "Two badges using identical CSS rule definitions powered by local variable overrides.",
    "notes": "Scoped variables prevent global stylesheet pollution in component libraries.",
    "commonMistakes": "A scoped variable is only available to the element and its descendants."
  },
  {
    "id": 163,
    "number": "163",
    "title": "CSS variable not assigned",
    "category": "CSS Variables & Modern Features",
    "introduction": "Using fallback values inside var() to handle undefined or missing variables gracefully.",
    "explanation": "var(--custom-prop, fallbackValue) ensures reliable styling even if the variable was not set.",
    "syntax": "color: var(--theme-color, #4f46e5);",
    "selectorsOrProps": [
      "var() fallback"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fallback-card\">Uses Default Fallback (#4f46e5)</div>\n</div>",
    "cssExample": ".fallback-card {\n  /* --undefined-color is not set, so the fallback #4f46e5 is used */\n  background-color: var(--undefined-color, #4f46e5);\n  color: var(--undefined-text, #ffffff);\n  padding: 18px;\n  border-radius: 8px;\n  font-weight: bold;\n  text-align: center;\n}",
    "expectedOutput": "Card renders in indigo using the fallback value because the variable is undefined.",
    "notes": "Fallbacks can be nested: var(--a, var(--b, #333)).",
    "commonMistakes": "If a variable is set to an invalid value, the browser reverts to inherited or initial value, not the fallback!"
  },
  {
    "id": 164,
    "number": "164",
    "title": "CSS variable DOM's structure",
    "category": "CSS Variables & Modern Features",
    "introduction": "How custom properties cascade and inherit hierarchically down through the DOM tree.",
    "explanation": "INVENTORY NOTICE: Exact title 'CSS variable DOM\\'s structure'. Demonstrates tree inheritance.",
    "syntax": ".parent { --accent: blue; } /* Children inherit --accent */",
    "selectorsOrProps": [
      "DOM inheritance",
      "cascading variables"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"tree-parent\">\n    Parent Box\n    <div class=\"tree-child\">Child Box (Inherits --brand-color)</div>\n  </div>\n</div>",
    "cssExample": ".tree-parent {\n  --brand-color: #06b6d4;\n  background: #0f172a;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n}\n.tree-child {\n  background: var(--brand-color);\n  color: #0f172a;\n  padding: 10px;\n  border-radius: 4px;\n  margin-top: 10px;\n  font-weight: bold;\n}",
    "expectedOutput": "The child box inherits and uses the cyan variable declared on its parent container.",
    "notes": "Variables inherit automatically down the DOM tree like font properties.",
    "commonMistakes": "Redefining a variable on a child node only affects that child and its subtree."
  },
  {
    "id": 165,
    "number": "165",
    "title": "CSS Nesting",
    "category": "CSS Variables & Modern Features",
    "introduction": "Native CSS nesting allows grouping child rules inside parent selectors without Sass.",
    "explanation": "Supported natively in all modern evergreen browsers; uses the ampersand (&) for parent reference.",
    "syntax": ".card {\n  background: white;\n  & h3 { color: blue; }\n  &:hover { transform: scale(1.02); }\n}",
    "selectorsOrProps": [
      "native CSS nesting",
      "& parent selector"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"nested-card\">\n    <h4>Native CSS Nesting</h4>\n    <p>Written cleanly inside a single rule block.</p>\n    <button>Action</button>\n  </div>\n</div>",
    "cssExample": ".nested-card {\n  background: #1e1b4b;\n  padding: 20px;\n  border-radius: 10px;\n  color: white;\n  transition: transform 0.2s;\n  \n  & h4 {\n    color: #38bdf8;\n    margin: 0 0 6px 0;\n  }\n  & p {\n    color: #c7d2fe;\n    margin-bottom: 12px;\n  }\n  & button {\n    background: #06b6d4;\n    border: none;\n    padding: 8px 16px;\n    border-radius: 4px;\n    color: #0f172a;\n    font-weight: bold;\n    cursor: pointer;\n  }\n  &:hover {\n    transform: translateY(-4px);\n  }\n}",
    "expectedOutput": "A card with heading, paragraph, button, and hover lift styled via native nested rules.",
    "notes": "No build tools or preprocessors required; native CSS nesting is standard in CSS.",
    "commonMistakes": "Remember that & must be at the start when chaining pseudo-classes like &:hover."
  },
  {
    "id": 166,
    "number": "166",
    "title": "CSS Container Queries",
    "category": "Modern Layout & Effects",
    "introduction": "Styles elements based on the dimensions of their parent container rather than the viewport.",
    "explanation": "container-type: inline-size turns an element into a query container for @container rules.",
    "syntax": "container-type: inline-size;\n@container (min-width: 400px) { ... }",
    "selectorsOrProps": [
      "@container",
      "container-type",
      "component responsiveness"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"cq-wrapper\">\n    <div class=\"cq-card\">\n      <div class=\"cq-icon\">\ud83d\udce6</div>\n      <div class=\"cq-info\">\n        <h4>Container Query Card</h4>\n        <p>Adapts based on container width!</p>\n      </div>\n    </div>\n  </div>\n</div>",
    "cssExample": ".cq-wrapper {\n  container-type: inline-size;\n  max-width: 450px;\n}\n.cq-card {\n  display: flex;\n  flex-direction: column;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  padding: 16px;\n  border-radius: 8px;\n  gap: 10px;\n}\n.cq-icon { font-size: 2rem; }\n@container (min-width: 300px) {\n  .cq-card {\n    flex-direction: row;\n    align-items: center;\n    background: #ede9fe;\n    border-color: #818cf8;\n  }\n  .cq-card h4 { color: #4f46e5; margin: 0; }\n}",
    "expectedOutput": "The card switches to horizontal flex layout because its immediate container is over 300px wide.",
    "notes": "Container queries make components truly modular and drop-in ready anywhere on a page.",
    "commonMistakes": "You cannot query an element's own dimensions from within itself; you query its ancestor container."
  },
  {
    "id": 167,
    "number": "167",
    "title": "CSS Subgrid",
    "category": "Modern Layout & Effects",
    "introduction": "Allows nested grid items to inherit and align with their parent's grid tracks.",
    "explanation": "grid-template-columns: subgrid aligns cards with varying title and footer lengths across rows.",
    "syntax": "grid-template-rows: subgrid;",
    "selectorsOrProps": [
      "subgrid",
      "track alignment"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"parent-grid\">\n    <div class=\"sub-card\"><h4>Short Title</h4><p>Body copy here</p><footer>Action</footer></div>\n    <div class=\"sub-card\"><h4>Much Longer Multi-line Title</h4><p>Body copy here</p><footer>Action</footer></div>\n  </div>\n</div>",
    "cssExample": ".parent-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-rows: auto 1fr auto;\n  gap: 15px;\n}\n.sub-card {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 3;\n  background: #f1f5f9;\n  padding: 14px;\n  border-radius: 8px;\n}\n.sub-card h4 { margin: 0; color: #1e1b4b; }\n.sub-card footer { border-top: 1px solid #cbd5e1; padding-top: 6px; font-weight: bold; color: #4f46e5; }",
    "expectedOutput": "Two cards whose headers, body content, and footers align with mathematical perfection.",
    "notes": "Subgrid solves the age-old problem of misaligned card footers across grid rows.",
    "commonMistakes": "Subgrid is supported across all modern evergreen browsers (Chrome, Firefox, Safari)."
  },
  {
    "id": 168,
    "number": "168",
    "title": "CSS Clip Path",
    "category": "Modern Layout & Effects",
    "introduction": "Clips an element to a specific geometric shape: circle, ellipse, polygon, or path.",
    "explanation": "clip-path cuts away portions of the element outside the specified boundary.",
    "syntax": "clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\nclip-path: circle(50%);",
    "selectorsOrProps": [
      "clip-path",
      "polygon()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"clipped-banner\">Angled Slant Cutout via clip-path</div>\n</div>",
    "cssExample": ".clipped-banner {\n  background: linear-gradient(135deg, #4f46e5, #06b6d4);\n  color: white;\n  padding: 30px 20px 45px 20px;\n  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);\n  font-weight: bold;\n  font-size: 1.1rem;\n  text-align: center;\n}",
    "expectedOutput": "A banner with a sharp angled diagonal cut across its bottom edge.",
    "notes": "Unlike border tricks, clip-path allows smooth animations between matching coordinate sets.",
    "commonMistakes": "Coordinates outside the clip shape are not clickable (pointer events are clipped as well)."
  },
  {
    "id": 169,
    "number": "169",
    "title": "CSS Masking",
    "category": "Modern Layout & Effects",
    "introduction": "Uses an image or gradient as an opacity mask to reveal or hide portions of an element.",
    "explanation": "mask-image (and -webkit-mask-image) clips visibility based on alpha transparency.",
    "syntax": "mask-image: linear-gradient(to bottom, black 50%, transparent 100%);",
    "selectorsOrProps": [
      "mask-image",
      "alpha mask"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"masked-content\">\n    <p>This content gradually fades away toward the bottom using a CSS linear gradient alpha mask, signaling to readers that additional content exists below.</p>\n  </div>\n</div>",
    "cssExample": ".masked-content {\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 8px;\n  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);\n}",
    "expectedOutput": "Text that starts solid at the top and seamlessly fades into transparency at the bottom.",
    "notes": "Always include -webkit-mask-image vendor prefix for full mobile WebKit compatibility.",
    "commonMistakes": "White areas of luminance masks reveal content; black areas hide content."
  },
  {
    "id": 170,
    "number": "170",
    "title": "CSS Filters",
    "category": "Modern Layout & Effects",
    "introduction": "Applies graphical effects like blur, brightness, contrast, grayscale, and invert.",
    "explanation": "Multiple filter functions can be chained to produce rich image post-processing.",
    "syntax": "filter: blur(4px) grayscale(50%) brightness(1.2);",
    "selectorsOrProps": [
      "filter",
      "blur()",
      "grayscale()"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:14px;\">\n  <div class=\"filter-card normal\">Normal Color</div>\n  <div class=\"filter-card gray\">grayscale(100%)</div>\n</div>",
    "cssExample": ".filter-card {\n  flex: 1;\n  padding: 20px;\n  background: linear-gradient(135deg, #ef4444, #f59e0b);\n  color: white;\n  text-align: center;\n  border-radius: 8px;\n  font-weight: bold;\n}\n.gray {\n  filter: grayscale(100%);\n}",
    "expectedOutput": "A bright orange-red gradient card contrasted with a 100% grayscale monochrome version.",
    "notes": "Filters are hardware accelerated and can be animated smoothly on hover.",
    "commonMistakes": "Heavy blur() values on large video elements can impact rendering performance."
  },
  {
    "id": 171,
    "number": "171",
    "title": "CSS Image Filters",
    "category": "Modern Layout & Effects",
    "introduction": "Artistic photograph post-processing: sepia, vintage tint, and duotone treatments.",
    "explanation": "Combining sepia, hue-rotate, and contrast creates Instagram-style photographic color grading.",
    "syntax": "filter: sepia(60%) contrast(1.1) saturate(1.4);",
    "selectorsOrProps": [
      "sepia()",
      "hue-rotate()",
      "vintage filter"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"photo-mock vintage\">Vintage Retro Color Grade</div>\n</div>",
    "cssExample": ".photo-mock {\n  height: 120px;\n  background: linear-gradient(135deg, #0284c7, #10b981);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 8px;\n}\n.vintage {\n  filter: sepia(70%) contrast(120%) hue-rotate(-20deg);\n}",
    "expectedOutput": "A warm, nostalgic vintage sepia-tinted image canvas.",
    "notes": "Provides client-side photo effects without requiring pre-processed Photoshop assets.",
    "commonMistakes": "Applying invert(100%) hue-rotate(180deg) is an easy technique for dark mode simulation."
  },
  {
    "id": 172,
    "number": "172",
    "title": "CSS Blend Modes",
    "category": "Modern Layout & Effects",
    "introduction": "Blends an element's background or content with its backdrop using Photoshop blend formulas.",
    "explanation": "mix-blend-mode blends an element with layers behind it; background-blend-mode blends background layers.",
    "syntax": "mix-blend-mode: multiply | screen | overlay | difference;",
    "selectorsOrProps": [
      "mix-blend-mode",
      "multiply",
      "screen"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"position:relative; background:#f1f5f9; padding:30px;\">\n  <div class=\"blend-base\">LIGHT BACKGROUND</div>\n  <div class=\"blend-overlay\">BLEND: DIFFERENCE</div>\n</div>",
    "cssExample": ".blend-base {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  font-weight: bold;\n  border-radius: 6px;\n}\n.blend-overlay {\n  margin-top: -20px;\n  background: #ffffff;\n  color: #000000;\n  padding: 10px;\n  font-weight: 800;\n  mix-blend-mode: difference;\n}",
    "expectedOutput": "Text whose colors dynamically invert as it overlaps the purple background container.",
    "notes": "multiply darkens; screen lightens; difference inverts overlapping pixel values.",
    "commonMistakes": "mix-blend-mode requires elements to exist within the same stacking context to blend."
  },
  {
    "id": 173,
    "number": "173",
    "title": "CSS Scroll Snap",
    "category": "Modern Layout & Effects",
    "introduction": "Locks viewport scrolling to designated slide positions for carousels and full-page sections.",
    "explanation": "scroll-snap-type on parent and scroll-snap-align on children create native carousels without JavaScript.",
    "syntax": "scroll-snap-type: x mandatory;\nscroll-snap-align: center;",
    "selectorsOrProps": [
      "scroll-snap-type",
      "scroll-snap-align",
      "carousel"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"snap-carousel\">\n    <div class=\"slide\">Slide 1</div>\n    <div class=\"slide\">Slide 2</div>\n    <div class=\"slide\">Slide 3</div>\n  </div>\n</div>",
    "cssExample": ".snap-carousel {\n  display: flex;\n  gap: 15px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 10px;\n}\n.slide {\n  flex: 0 0 85%;\n  height: 120px;\n  background: #4f46e5;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: bold;\n  border-radius: 10px;\n  scroll-snap-align: center;\n}",
    "expectedOutput": "A swipeable carousel where slides snap firmly into center focus upon scrolling.",
    "notes": "Provides smooth, native mobile swipe ergonomics with zero JavaScript.",
    "commonMistakes": "Ensure scroll-snap-stop: always is set if you want to prevent fast fling-scrolling past items."
  },
  {
    "id": 174,
    "number": "174",
    "title": "CSS Custom Scrollbar",
    "category": "Modern Layout & Effects",
    "introduction": "Styles browser scrollbar tracks, thumbs, and widths across Firefox, Chrome, and Safari.",
    "explanation": "Modern CSS standardizes scrollbar-color and scrollbar-width, while ::-webkit-scrollbar handles legacy WebKit.",
    "syntax": "scrollbar-color: #4f46e5 #0f172a;\nscrollbar-width: thin;",
    "selectorsOrProps": [
      "scrollbar-color",
      "scrollbar-width",
      "::-webkit-scrollbar"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"custom-scroll-box\">\n    <p>Scrollable custom container line 1</p>\n    <p>Scrollable custom container line 2</p>\n    <p>Scrollable custom container line 3</p>\n    <p>Scrollable custom container line 4</p>\n  </div>\n</div>",
    "cssExample": ".custom-scroll-box {\n  height: 90px;\n  overflow-y: scroll;\n  background: #0f172a;\n  color: #38bdf8;\n  padding: 12px;\n  border-radius: 8px;\n  scrollbar-width: thin;\n  scrollbar-color: #06b6d4 #1e293b;\n}\n.custom-scroll-box::-webkit-scrollbar {\n  width: 8px;\n}\n.custom-scroll-box::-webkit-scrollbar-thumb {\n  background: #06b6d4;\n  border-radius: 4px;\n}",
    "expectedOutput": "A dark scroll box with a sleek, glowing cyan custom scrollbar thumb.",
    "notes": "Combine the modern standard (scrollbar-color) with ::-webkit-scrollbar for 100% browser coverage.",
    "commonMistakes": "Never make scrollbars so thin or low-contrast that users cannot see or grab them."
  },
  {
    "id": 175,
    "number": "175",
    "title": "CSS Shape Outside",
    "category": "Modern Layout & Effects",
    "introduction": "Wraps inline text around complex non-rectangular shapes (circles, polygons).",
    "explanation": "shape-outside dictates the geometric boundary that neighboring inline text wraps against.",
    "syntax": "shape-outside: circle(50%);\nfloat: left;",
    "selectorsOrProps": [
      "shape-outside",
      "circle()",
      "editorial wrap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"circle-float\"></div>\n  <p>Text wraps smoothly around this circular float boundary rather than a rigid rectangle. CSS shape-outside brings print-magazine editorial design standards directly to responsive web typography.</p>\n</div>",
    "cssExample": ".circle-float {\n  float: left;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  background: #4f46e5;\n  shape-outside: circle(50%);\n  margin-right: 15px;\n}\np { color: #334155; line-height: 1.6; }",
    "expectedOutput": "Body text wrapping organically around the circular contour of the purple floating badge.",
    "notes": "shape-outside only works on elements that are floated (float: left or float: right).",
    "commonMistakes": "The element must have explicit width and height declared."
  },
  {
    "id": 176,
    "number": "176",
    "title": "CSS Line Clamping",
    "category": "Modern Layout & Effects",
    "introduction": "Truncates multi-line text blocks after a specified number of lines with an ellipsis (...).",
    "explanation": "Uses -webkit-line-clamp combined with display: -webkit-box and overflow: hidden.",
    "syntax": "display: -webkit-box;\n-webkit-line-clamp: 2;\n-webkit-box-orient: vertical;\noverflow: hidden;",
    "selectorsOrProps": [
      "-webkit-line-clamp",
      "multi-line ellipsis"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"clamped-card\">\n    <h4>Truncated Paragraph</h4>\n    <p class=\"clamp-2\">This long paragraph will be clamped cleanly to exactly two lines of text, with an ellipsis gracefully appended at the truncation boundary, preventing card height blowout in grid cards.</p>\n  </div>\n</div>",
    "cssExample": ".clamp-2 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  color: #64748b;\n  line-height: 1.5;\n}\n.clamped-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  padding: 16px;\n  border-radius: 8px;\n  max-width: 300px;\n}",
    "expectedOutput": "Paragraph cleanly truncated to 2 lines with a trailing ellipsis.",
    "notes": "Supported across all modern browsers; essential for keeping cards uniform in height.",
    "commonMistakes": "All four declarations are required together for line clamping to work."
  },
  {
    "id": 177,
    "number": "177",
    "title": "CSS Writing Modes",
    "category": "Modern Layout & Effects",
    "introduction": "Defines text flow direction: horizontal-tb, vertical-rl (top-to-bottom, right-to-left), or vertical-lr.",
    "explanation": "Foundational for East Asian languages and trendy creative vertical side banners.",
    "syntax": "writing-mode: vertical-rl | horizontal-tb;",
    "selectorsOrProps": [
      "writing-mode",
      "vertical text"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"display:flex; gap:16px; align-items:center;\">\n  <div class=\"vertical-tag\">EDITORIAL</div>\n  <p>Vertical text banner running beside standard horizontal copy.</p>\n</div>",
    "cssExample": ".vertical-tag {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 12px 6px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  border-radius: 4px;\n}",
    "expectedOutput": "The word 'EDITORIAL' oriented vertically reading downwards.",
    "notes": "text-orientation: upright forces Latin letters to remain upright rather than rotated sideways.",
    "commonMistakes": "Writing modes flip block and inline axes; width and height behave differently."
  },
  {
    "id": 178,
    "number": "178",
    "title": "CSS Logical Properties",
    "category": "Modern Layout & Effects",
    "introduction": "Replaces directional terms (left/right/top/bottom) with logical terms (inline/block).",
    "explanation": "margin-inline and padding-block automatically adapt when reading direction switches to right-to-left (RTL).",
    "syntax": "margin-inline: auto;\npadding-block: 16px;",
    "selectorsOrProps": [
      "margin-inline",
      "padding-block",
      "RTL readiness"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"logical-card\">Logical Padding & Margins</div>\n</div>",
    "cssExample": ".logical-card {\n  background: #f1f5f9;\n  border-inline-start: 5px solid #4f46e5;\n  padding-block: 16px;\n  padding-inline: 24px;\n  border-radius: 6px;\n  color: #1e293b;\n  font-weight: 500;\n}",
    "expectedOutput": "Card with an inline-start purple border and balanced logical padding.",
    "notes": "Writing margin-inline: auto replaces the longer margin: 0 auto shorthand.",
    "commonMistakes": "Adopt logical properties to make websites instantly RTL-ready for Arabic and Hebrew."
  },
  {
    "id": 179,
    "number": "179",
    "title": "CSS Cascade Layers",
    "category": "Modern Layout & Effects",
    "introduction": "Organizes CSS into explicit precedence layers (@layer) that control cascade order regardless of specificity.",
    "explanation": "Styles in later layers always defeat styles in earlier layers, solving CSS specificity wars forever.",
    "syntax": "@layer reset, base, components, utilities;",
    "selectorsOrProps": [
      "@layer",
      "cascade layers",
      "architecture"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"layer-btn\">Cascade Layer Button</button>\n</div>",
    "cssExample": "@layer base {\n  button { background: #94a3b8; color: white; padding: 12px 20px; border: none; }\n}\n@layer theme {\n  button.layer-btn { background: #4f46e5; border-radius: 6px; font-weight: bold; }\n}",
    "expectedOutput": "The button is styled with the #4f46e5 theme layer which overrides the base layer.",
    "notes": "Unlayered styles take precedence over all layered styles by default.",
    "commonMistakes": "Declared layer order (@layer base, theme;) controls precedence, not the order of rules in the file."
  },
  {
    "id": 180,
    "number": "180",
    "title": "CSS Typography Best Practices",
    "category": "UI Patterns & Best Practices",
    "introduction": "Core guidelines for accessible, legible web typography: contrast, font scale, line measure, and leading.",
    "explanation": "Maintain 45-75 characters per line (ch unit) and comfortable line-height for optimal readability.",
    "syntax": "max-width: 65ch;\nline-height: 1.6;",
    "selectorsOrProps": [
      "65ch measure",
      "typographic scale"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <article class=\"readable-measure\">\n    <h3>Optimal Reading Measure</h3>\n    <p>Limiting text container width to approximately 65 characters (65ch) prevents user fatigue caused by long eye scans across wide desktop displays.</p>\n  </article>\n</div>",
    "cssExample": ".readable-measure {\n  max-width: 55ch;\n  color: #334155;\n  line-height: 1.65;\n  font-size: 1.05rem;\n}\n.readable-measure h3 { color: #1e1b4b; margin: 0 0 8px 0; }",
    "expectedOutput": "A beautifully formatted editorial block of text set to a comfortable reading line length.",
    "notes": "1ch corresponds to the width of the zero ('0') character in the chosen font.",
    "commonMistakes": "Unconstrained paragraph widths stretching across 1920px screens severely degrade comprehension."
  },
  {
    "id": 181,
    "number": "181",
    "title": "CSS Sticky Elements",
    "category": "UI Patterns & Best Practices",
    "introduction": "The position: sticky property toggles between relative and fixed depending on scroll position.",
    "explanation": "Sticks to a given threshold (e.g. top: 0) while scrolling within its parent container.",
    "syntax": "position: sticky; top: 0; z-index: 10;",
    "selectorsOrProps": [
      "position: sticky",
      "floating header"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"height: 150px; overflow-y: auto;\">\n  <div class=\"sticky-bar\">Sticky Section Header (top: 0)</div>\n  <div style=\"padding: 10px;\">\n    <p>Scrollable item 1</p><p>Scrollable item 2</p>\n    <p>Scrollable item 3</p><p>Scrollable item 4</p>\n  </div>\n</div>",
    "cssExample": ".sticky-bar {\n  position: sticky;\n  top: 0;\n  background: #4f46e5;\n  color: white;\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 4px;\n}",
    "expectedOutput": "Header locks firmly to the top of the container while paragraphs scroll underneath.",
    "notes": "An element can only stick within its parent container's boundaries.",
    "commonMistakes": "If any ancestor element has overflow: hidden or auto, sticky positioning will silently fail."
  },
  {
    "id": 182,
    "number": "182",
    "title": "CSS Fixed Footer and Header",
    "category": "UI Patterns & Best Practices",
    "introduction": "Complete application chrome layout: persistent top navigation bar and bottom action dock.",
    "explanation": "Positions frames at top: 0 and bottom: 0 while allowing the main body to scroll freely.",
    "syntax": "header { position: fixed; top: 0; } footer { position: fixed; bottom: 0; }",
    "selectorsOrProps": [
      "app shell",
      "fixed chrome"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"height: 160px; overflow-y: auto; position: relative;\">\n  <header class=\"app-hdr\">App Navigation Header</header>\n  <main style=\"padding: 40px 10px;\"><p>Central scrollable application workspace</p></main>\n  <footer class=\"app-ftr\">App Action Footer</footer>\n</div>",
    "cssExample": ".app-hdr, .app-ftr {\n  position: sticky;\n  background: #0f172a;\n  color: #38bdf8;\n  padding: 8px 16px;\n  font-weight: bold;\n  font-size: 0.85rem;\n}\n.app-hdr { top: 0; }\n.app-ftr { bottom: 0; border-top: 1px solid rgba(255,255,255,0.1); }",
    "expectedOutput": "A mobile app shell layout with pinned top and bottom bars sandwiching scrollable content.",
    "notes": "Add safe-area-inset padding for iPhone notch and home indicator bar compatibility.",
    "commonMistakes": "Ensure fixed bars have high z-index to stay above page content."
  },
  {
    "id": 183,
    "number": "183",
    "title": "CSS Placeholder Styling",
    "category": "UI Patterns & Best Practices",
    "introduction": "Styles the temporary placeholder text shown inside <input> and <textarea> elements.",
    "explanation": "The ::placeholder pseudo-element customizes placeholder font, color, and opacity.",
    "syntax": "input::placeholder {\n  color: #94a3b8;\n  font-style: italic;\n}",
    "selectorsOrProps": [
      "::placeholder"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <input type=\"text\" class=\"styled-ph\" placeholder=\"Search 210 CSS lessons...\">\n</div>",
    "cssExample": ".styled-ph {\n  width: 100%;\n  max-width: 280px;\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n}\n.styled-ph::placeholder {\n  color: #818cf8;\n  font-style: italic;\n  font-size: 0.9rem;\n}",
    "expectedOutput": "An input with inviting purple italic placeholder text.",
    "notes": "Firefox applies a default opacity (0.54) to placeholders; set opacity: 1 for consistent cross-browser color.",
    "commonMistakes": "Never use placeholders as a substitute for semantic <label> tags."
  },
  {
    "id": 184,
    "number": "184",
    "title": "CSS Checkbox and Radio Styling",
    "category": "UI Patterns & Best Practices",
    "introduction": "Crafts custom accessible checkbox and radio controls using opacity: 0 and custom pseudo-elements.",
    "explanation": "Hiding the native input visually while keeping it focusable provides beautiful custom UI.",
    "syntax": "input[type=\"checkbox\"] { opacity: 0; position: absolute; }",
    "selectorsOrProps": [
      "custom checkbox",
      "accessible toggle"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <label class=\"custom-chk\">\n    <input type=\"checkbox\" checked>\n    <span class=\"chk-box\"></span>\n    <span>Dark Mode Theme</span>\n  </label>\n</div>",
    "cssExample": ".custom-chk {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-weight: 500;\n}\n.custom-chk input { display: none; }\n.chk-box {\n  width: 22px;\n  height: 22px;\n  border: 2px solid #4f46e5;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-chk input:checked + .chk-box {\n  background: #4f46e5;\n}\n.custom-chk input:checked + .chk-box::after {\n  content: \"\u2713\";\n  color: white;\n  font-weight: bold;\n  font-size: 0.9rem;\n}",
    "expectedOutput": "A purple checkbox displaying an authentic checkmark icon when selected.",
    "notes": "Keep inputs keyboard accessible using :focus-visible outlines on the custom element.",
    "commonMistakes": "Don't use display: none on the input if you want it to remain keyboard focusable with Tab."
  },
  {
    "id": 185,
    "number": "185",
    "title": "CSS Tooltip Styling",
    "category": "UI Patterns & Best Practices",
    "introduction": "Advanced tooltip design with pointing arrow notch and glassmorphism styling.",
    "explanation": "Creating a triangular pointer notch using border tricks on ::before underneath the tooltip bubble.",
    "syntax": ".tooltip::before { border: 5px solid transparent; border-top-color: #0f172a; }",
    "selectorsOrProps": [
      "arrow notch",
      "advanced tooltip"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"padding-top: 40px; text-align: center;\">\n  <span class=\"arrow-tip\" data-msg=\"Verified CSS Certificate\">Hover for Arrow Tooltip</span>\n</div>",
    "cssExample": ".arrow-tip {\n  position: relative;\n  color: #4f46e5;\n  font-weight: bold;\n  cursor: pointer;\n}\n.arrow-tip::after {\n  content: attr(data-msg);\n  position: absolute;\n  bottom: 140%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #0f172a;\n  color: #38bdf8;\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  white-space: nowrap;\n  opacity: 0;\n  transition: 0.2s;\n  pointer-events: none;\n}\n.arrow-tip::before {\n  content: \"\";\n  position: absolute;\n  bottom: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 5px solid transparent;\n  border-top-color: #0f172a;\n  opacity: 0;\n  transition: 0.2s;\n}\n.arrow-tip:hover::after, .arrow-tip:hover::before { opacity: 1; }",
    "expectedOutput": "Hovering shows a tooltip complete with a triangular directional pointer pointing to the trigger.",
    "notes": "Transparent borders with a single colored border side generate crisp geometric triangles.",
    "commonMistakes": "Ensure z-index is elevated so tooltips render over neighboring cards."
  },
  {
    "id": 186,
    "number": "186",
    "title": "CSS Modal Windows",
    "category": "UI Patterns & Best Practices",
    "introduction": "Builds pure CSS modal dialog overlays using the :target pseudo-class or <dialog> element.",
    "explanation": "An anchor link pointing to href=\"#modal-id\" activates the overlay via :target.",
    "syntax": ".modal-backdrop:target {\n  display: flex;\n}",
    "selectorsOrProps": [
      ":target",
      "modal dialog"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"#demo-modal\" class=\"btn-open\">Open CSS Modal</a>\n  <div id=\"demo-modal\" class=\"modal-overlay\">\n    <div class=\"modal-card\">\n      <h3>Pure CSS Modal</h3>\n      <p>Opened purely via the :target pseudo-class!</p>\n      <a href=\"#close\" class=\"btn-close\">Close Dialog</a>\n    </div>\n  </div>\n</div>",
    "cssExample": ".btn-open, .btn-close {\n  display: inline-block;\n  background: #4f46e5;\n  color: white;\n  padding: 8px 16px;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: bold;\n}\n.modal-overlay {\n  display: none;\n  position: fixed;\n  top: 0; left: 0; width: 100%; height: 100%;\n  background: rgba(15, 23, 42, 0.7);\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n.modal-overlay:target { display: flex; }\n.modal-card {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  text-align: center;\n}",
    "expectedOutput": "Clicking 'Open CSS Modal' displays a centered popup dialog with dimmed backdrop.",
    "notes": "Clicking a link to '#' or another hash target closes the modal instantly.",
    "commonMistakes": "For mission-critical production dialogs, the HTML5 <dialog> element is preferred for full accessibility focus-trapping."
  },
  {
    "id": 187,
    "number": "187",
    "title": "CSS Flip Cards",
    "category": "UI Patterns & Best Practices",
    "introduction": "A double-sided 3D card component that flips over on hover to reveal hidden content.",
    "explanation": "Uses transform: rotateY(180deg) and backface-visibility: hidden for the 3D card flip.",
    "syntax": "backface-visibility: hidden;\ntransform-style: preserve-3d;",
    "selectorsOrProps": [
      "flip card",
      "backface-visibility"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"flip-card\">\n    <div class=\"flip-inner\">\n      <div class=\"flip-front\">Front: Hover Me</div>\n      <div class=\"flip-back\">Back: Lesson 187! \u2b50</div>\n    </div>\n  </div>\n</div>",
    "cssExample": ".flip-card {\n  width: 200px;\n  height: 120px;\n  perspective: 1000px;\n  margin: 0 auto;\n}\n.flip-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  transform-style: preserve-3d;\n}\n.flip-card:hover .flip-inner { transform: rotateY(180deg); }\n.flip-front, .flip-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  border-radius: 10px;\n}\n.flip-front { background: #4f46e5; color: white; }\n.flip-back { background: #06b6d4; color: #0f172a; transform: rotateY(180deg); }",
    "expectedOutput": "Hovering over the card spins it around in 3D to reveal the cyan back side.",
    "notes": "backface-visibility: hidden is what hides the back side when facing away.",
    "commonMistakes": "perspective must be declared on the outer container for authentic 3D depth."
  },
  {
    "id": 188,
    "number": "188",
    "title": "CSS Parallax Effects",
    "category": "UI Patterns & Best Practices",
    "introduction": "Creates realistic depth illusions by moving foreground and background layers at different speeds.",
    "explanation": "CSS 3D perspective and translateZ allow pure CSS parallax scrolling without JavaScript scroll listeners.",
    "syntax": "perspective: 1px; transform: translateZ(-1px) scale(2);",
    "selectorsOrProps": [
      "parallax",
      "perspective depth"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"parallax-card\">\n    <div class=\"p-bg\">Deep Background</div>\n    <div class=\"p-fg\">Floating Foreground</div>\n  </div>\n</div>",
    "cssExample": ".parallax-card {\n  height: 140px;\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.p-bg {\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, #0284c7, #1e1b4b);\n  filter: blur(2px);\n}\n.p-fg {\n  position: relative;\n  background: rgba(255, 255, 255, 0.9);\n  color: #0f172a;\n  padding: 14px 24px;\n  border-radius: 8px;\n  font-weight: bold;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n}",
    "expectedOutput": "A crisp foreground card floating with deep spatial elevation over an ambient blurred backdrop.",
    "notes": "Pure CSS parallax leverages GPU compositing for maximum performance.",
    "commonMistakes": "Test parallax motion carefully to prevent visual disorientation for sensitive users."
  },
  {
    "id": 189,
    "number": "189",
    "title": "@supports",
    "category": "Advanced Techniques & Rules",
    "introduction": "Feature queries that test browser support for specific CSS properties before applying them.",
    "explanation": "Provides progressive enhancement: supply safe fallbacks, then enhance when features are supported.",
    "syntax": "@supports (backdrop-filter: blur(10px)) {\n  .glass { backdrop-filter: blur(10px); }\n}",
    "selectorsOrProps": [
      "@supports",
      "feature queries",
      "progressive enhancement"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"feature-test\">Feature Query Test Card</div>\n</div>",
    "cssExample": ".feature-test {\n  background: #4f46e5;\n  color: white;\n  padding: 18px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n}\n@supports (display: grid) {\n  .feature-test {\n    border: 3px solid #06b6d4;\n  }\n}",
    "expectedOutput": "Card confirms modern browser feature support by displaying a glowing cyan border.",
    "notes": "@supports can test multiple features with 'and', 'or', and 'not' logic.",
    "commonMistakes": "Do not test syntax inside @supports that is so old every browser supports it."
  },
  {
    "id": 190,
    "number": "190",
    "title": "ellipsis",
    "category": "Advanced Techniques & Rules",
    "introduction": "Truncates single-line overflowing text with a clean trailing ellipsis (...).",
    "explanation": "INVENTORY NOTICE: Exact title 'ellipsis'. Requires white-space: nowrap and overflow: hidden together.",
    "syntax": "white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;",
    "selectorsOrProps": [
      "text-overflow: ellipsis",
      "nowrap"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"single-ellipsis\">This exceptionally long single line of title copy will be cut off cleanly with an ellipsis</div>\n</div>",
    "cssExample": ".single-ellipsis {\n  width: 250px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background: #f1f5f9;\n  padding: 10px 14px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-weight: 500;\n  color: #1e293b;\n}",
    "expectedOutput": "Text neatly truncates with '...' right at the 250px boundary.",
    "notes": "The trio (white-space: nowrap, overflow: hidden, text-overflow: ellipsis) is mandatory.",
    "commonMistakes": "Omitting width or max-width causes the container to expand instead of truncating."
  },
  {
    "id": 191,
    "number": "191",
    "title": "image-rendering",
    "category": "Advanced Techniques & Rules",
    "introduction": "Controls image scaling interpolation algorithms, preserving sharp pixels for retro pixel art.",
    "explanation": "image-rendering: pixelated prevents blurry smoothing when enlarging pixel art or QR codes.",
    "syntax": "image-rendering: pixelated | auto | crisp-edges;",
    "selectorsOrProps": [
      "image-rendering",
      "pixelated",
      "pixel art"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"pixel-art-demo\">\ud83d\udc7e Pixel Sharp Rendering Mode</div>\n</div>",
    "cssExample": ".pixel-art-demo {\n  font-family: monospace;\n  font-size: 1.2rem;\n  font-weight: bold;\n  background: #0f172a;\n  color: #4ade80;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  image-rendering: pixelated;\n}",
    "expectedOutput": "Displays retro aesthetic text styled with pixelated rendering modes.",
    "notes": "Essential for game development, retro icons, and scanning high-contrast barcodes/QR codes.",
    "commonMistakes": "Do not use on high-resolution portrait photographs as it introduces blocky artifacts."
  },
  {
    "id": 192,
    "number": "192",
    "title": "Attention to an element",
    "category": "Advanced Techniques & Rules",
    "introduction": "Directs user visual attention to critical UI elements via gentle wobble and glow animations.",
    "explanation": "INVENTORY NOTICE: Exact title 'Attention to an element'. Uses keyframe shaking to highlight actions.",
    "syntax": "@keyframes attentionWobble { ... }",
    "selectorsOrProps": [
      "attention attractor",
      "wobble animation"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <button class=\"attn-btn\">Special Offer Inside! \ud83c\udf81</button>\n</div>",
    "cssExample": ".attn-btn {\n  background: #f59e0b;\n  color: white;\n  border: none;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: bold;\n  cursor: pointer;\n  animation: wobble 2.5s infinite;\n}\n@keyframes wobble {\n  0%, 100% { transform: rotate(0); }\n  10% { transform: rotate(-5deg); }\n  20% { transform: rotate(5deg); }\n  30% { transform: rotate(-3deg); }\n  40% { transform: rotate(3deg); }\n  50% { transform: rotate(0); }\n}",
    "expectedOutput": "Button intermittently wiggles and shakes to catch the user's peripheral vision.",
    "notes": "Use sparingly for key conversion moments (checkout, notifications, discount claims).",
    "commonMistakes": "Excessive wiggling elements on a page overwhelm and annoy users."
  },
  {
    "id": 193,
    "number": "193",
    "title": "Basic responsiveness",
    "category": "Advanced Techniques & Rules",
    "introduction": "Foundational principles of responsive web layouts without relying solely on breakpoints.",
    "explanation": "INVENTORY NOTICE: Exact title 'Basic responsiveness'. Fluid max-width, flexible images, and auto margins.",
    "syntax": "img { max-width: 100%; height: auto; }\n.container { width: 90%; max-width: 1200px; margin: auto; }",
    "selectorsOrProps": [
      "fluid images",
      "fluid containers",
      "responsive basics"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"fluid-layout\">\n    <h4>Fluid Responsive Layout</h4>\n    <p>Resizes continuously to fit any screen from mobile to ultrawide.</p>\n  </div>\n</div>",
    "cssExample": ".fluid-layout {\n  width: 90%;\n  max-width: 400px;\n  margin: 0 auto;\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}",
    "expectedOutput": "A centered container that fluidly contracts on narrow devices while capping at 400px.",
    "notes": "Setting img { max-width: 100%; height: auto; } prevents images from blowing out container widths.",
    "commonMistakes": "Fixed pixel widths (width: 500px) cause horizontal overflow on mobile screens."
  },
  {
    "id": 194,
    "number": "194",
    "title": "Row Number",
    "category": "Advanced Techniques & Rules",
    "introduction": "Automatically numbers table rows or list items using pure CSS counters.",
    "explanation": "INVENTORY NOTICE: Exact title 'Row Number'. Uses counter-increment and ::before content.",
    "syntax": "counter-increment: rowNumber;\ncontent: counter(rowNumber);",
    "selectorsOrProps": [
      "counter-increment",
      "CSS counter",
      "table row numbers"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <table class=\"numbered-tbl\">\n    <tr><td class=\"row-num\"></td><td>First Student Entry</td></tr>\n    <tr><td class=\"row-num\"></td><td>Second Student Entry</td></tr>\n    <tr><td class=\"row-num\"></td><td>Third Student Entry</td></tr>\n  </table>\n</div>",
    "cssExample": ".numbered-tbl {\n  width: 100%;\n  counter-reset: rowCount;\n  border-collapse: collapse;\n}\n.numbered-tbl tr {\n  counter-increment: rowCount;\n  border-bottom: 1px solid #e2e8f0;\n}\n.row-num::before {\n  content: counter(rowCount) \".\";\n  font-weight: bold;\n  color: #4f46e5;\n}\n.numbered-tbl td { padding: 8px 12px; }",
    "expectedOutput": "A data table where row numbers (1., 2., 3.) are generated entirely by CSS counters.",
    "notes": "Rows can be added, deleted, or reordered dynamically without manual renumbering.",
    "commonMistakes": "counter-reset must be called on the parent table or tbody to initialize the tally."
  },
  {
    "id": 195,
    "number": "195",
    "title": "Find no alt attribute",
    "category": "Advanced Techniques & Rules",
    "introduction": "An accessibility audit selector that highlights images missing alt accessibility attributes.",
    "explanation": "INVENTORY NOTICE: Exact title 'Find no alt attribute'. Powerful QA technique for web developers.",
    "syntax": "img:not([alt]) {\n  outline: 4px solid red !important;\n}",
    "selectorsOrProps": [
      "img:not([alt])",
      "accessibility QA"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"audit-panel\">\n    <div class=\"mock-img no-alt\">Image Missing alt (Flagged in Red)</div>\n    <div class=\"mock-img has-alt\" alt=\"Valid Description\">Accessible Image (Compliant)</div>\n  </div>\n</div>",
    "cssExample": ".mock-img {\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n  background: #f1f5f9;\n  font-weight: 500;\n}\n.mock-img:not([alt]) {\n  border: 2px dashed #ef4444;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.mock-img[alt] {\n  border: 2px solid #10b981;\n  background: #f0fdf4;\n  color: #065f46;\n}",
    "expectedOutput": "The un-described element is immediately flagged with a dashed red warning border.",
    "notes": "All decorative images should have alt=\"\", and informational images require descriptive alt text.",
    "commonMistakes": "Never publish production websites without verifying that all content images have alt tags."
  },
  {
    "id": 196,
    "number": "196",
    "title": "Content attr value",
    "category": "Advanced Techniques & Rules",
    "introduction": "Extracts HTML attribute values dynamically into pseudo-elements using content: attr().",
    "explanation": "INVENTORY NOTICE: Exact title 'Content attr value'. Renders custom data attributes into UI badges.",
    "syntax": "content: attr(data-badge);",
    "selectorsOrProps": [
      "attr()",
      "data-attributes"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <span class=\"dynamic-tag\" data-status=\"v2.4 Live\">CodePlay Engine</span>\n</div>",
    "cssExample": ".dynamic-tag {\n  position: relative;\n  background: #1e1b4b;\n  color: white;\n  padding: 10px 18px;\n  border-radius: 6px;\n  font-weight: 600;\n}\n.dynamic-tag::after {\n  content: \" (\" attr(data-status) \")\";\n  color: #38bdf8;\n  font-weight: normal;\n}",
    "expectedOutput": "The badge reads 'CodePlay Engine (v2.4 Live)' pulling the version directly from data-status.",
    "notes": "Enables data-driven print layouts (e.g. printing URLs beside links: a::after { content: ' (' attr(href) ')'; }).",
    "commonMistakes": "CSS attr() historically only returned strings, though modern CSS is expanding support for types."
  },
  {
    "id": 197,
    "number": "197",
    "title": "Content: url()",
    "category": "Advanced Techniques & Rules",
    "introduction": "Injects external image or SVG assets directly into pseudo-elements via content: url().",
    "explanation": "INVENTORY NOTICE: Exact title 'Content: url()'. Decorates links and lists with graphical assets.",
    "syntax": "a[href$=\"pdf\"]::before {\n  content: url('pdf-icon.svg');\n}",
    "selectorsOrProps": [
      "content: url()",
      "icon injection"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"doc-link\">Download Full 210-Lesson Syllabus</p>\n</div>",
    "cssExample": ".doc-link {\n  color: #4f46e5;\n  font-weight: 600;\n  font-size: 1.05rem;\n  cursor: pointer;\n}\n.doc-link::before {\n  content: \"\ud83d\udcc4 \";\n  margin-right: 6px;\n}",
    "expectedOutput": "A document link neatly prepended with a file icon indicator.",
    "notes": "content: url() directly renders the external graphic file without HTML markup.",
    "commonMistakes": "Images inserted via content: url() cannot be resized with width/height (use background-image for resizable icons)."
  },
  {
    "id": 198,
    "number": "198",
    "title": "Incremental counter",
    "category": "Advanced Techniques & Rules",
    "introduction": "Constructs nested, multi-level outline counters (e.g. 1.1, 1.2, 1.3) using CSS counter system.",
    "explanation": "INVENTORY NOTICE: Exact title 'Incremental counter'. Demonstrates complex structured numbering.",
    "syntax": "counter-increment: sectionCounter;\ncontent: counters(sectionCounter, \".\");",
    "selectorsOrProps": [
      "counter-reset",
      "counter-increment",
      "counters()"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"outline-list\">\n    <div class=\"sec\">Getting Started</div>\n    <div class=\"sec\">Selectors Deep Dive</div>\n    <div class=\"sec\">Flexbox Mastery</div>\n  </div>\n</div>",
    "cssExample": ".outline-list {\n  counter-reset: stepNum;\n}\n.sec {\n  counter-increment: stepNum;\n  padding: 8px 12px;\n  background: #f1f5f9;\n  margin-bottom: 6px;\n  border-radius: 4px;\n  color: #1e293b;\n  font-weight: 500;\n}\n.sec::before {\n  content: \"Lesson #\" counter(stepNum) \": \";\n  color: #4f46e5;\n  font-weight: bold;\n}",
    "expectedOutput": "Sequential list items prefixed automatically with 'Lesson #1:', 'Lesson #2:', 'Lesson #3:'.",
    "notes": "Counters can count in roman numerals, alphabetic characters, or decimals.",
    "commonMistakes": "Remember to initialize the counter with counter-reset on an ancestor container."
  },
  {
    "id": 199,
    "number": "199",
    "title": "Open & close quote",
    "category": "Advanced Techniques & Rules",
    "introduction": "Controls typographic quotation marks using open-quote and close-quote keywords.",
    "explanation": "INVENTORY NOTICE: Exact title 'Open & close quote'. Inserts elegant matching quotation marks.",
    "syntax": "q::before { content: open-quote; }\nq::after { content: close-quote; }",
    "selectorsOrProps": [
      "open-quote",
      "close-quote",
      "quotes"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <blockquote class=\"styled-quote\">\n    Web development is the art of turning creative concepts into interactive reality.\n  </blockquote>\n</div>",
    "cssExample": ".styled-quote {\n  quotes: \"\u201c\" \"\u201d\" \"\u2018\" \"\u2019\";\n  font-style: italic;\n  font-size: 1.1rem;\n  color: #334155;\n  margin: 0;\n  padding: 10px 20px;\n  border-left: 4px solid #4f46e5;\n}\n.styled-quote::before { content: open-quote; color: #4f46e5; font-size: 1.5rem; line-height: 0; vertical-align: -0.2em; }\n.styled-quote::after { content: close-quote; color: #4f46e5; font-size: 1.5rem; line-height: 0; vertical-align: -0.2em; }",
    "expectedOutput": "A pull quote beautifully bracketed by large purple curly quotation marks.",
    "notes": "The quotes property defines the character pairs for both top-level and nested quotations.",
    "commonMistakes": "Avoid typing raw straight quotes (\"...\") directly into markup when curly quotes are intended."
  },
  {
    "id": 200,
    "number": "200",
    "title": "Global quotes",
    "category": "Advanced Techniques & Rules",
    "introduction": "Configures global multilingual quotation standards across the root stylesheet.",
    "explanation": "INVENTORY NOTICE: Exact title 'Global quotes'. Sets consistent quotation styles sitewide.",
    "syntax": ":root { quotes: '\u201c' '\u201d' '\u2018' '\u2019'; }",
    "selectorsOrProps": [
      "global quotes",
      ":root"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p><q>Clean code always looks like it was written by someone who cares.</q></p>\n</div>",
    "cssExample": ":root {\n  quotes: \"\u00ab\" \"\u00bb\" \"\u2039\" \"\u203a\";\n}\nq {\n  color: #4f46e5;\n  font-weight: 600;\n  font-size: 1.05rem;\n}",
    "expectedOutput": "Quotes automatically rendered inside localized guillemet quotation marks (\u00ab...\u00bb).",
    "notes": "Setting quotes globally ensures consistent editorial standards throughout large websites.",
    "commonMistakes": "Browsers handle quotation nesting levels automatically when quotes are defined."
  },
  {
    "id": 201,
    "number": "201",
    "title": "xx-large",
    "category": "Advanced Techniques & Rules",
    "introduction": "The absolute font-size keyword scale: xx-small, x-small, small, medium, large, x-large, xx-large.",
    "explanation": "INVENTORY NOTICE: Exact title 'xx-large'. Explores standard CSS keyword sizing semantics.",
    "syntax": "font-size: xx-large;",
    "selectorsOrProps": [
      "xx-large",
      "font-size keywords"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p style=\"font-size: small;\">Small Font Size Keyword</p>\n  <p style=\"font-size: medium;\">Medium (Standard Default ~16px)</p>\n  <p style=\"font-size: x-large;\">X-Large Keyword</p>\n  <p style=\"font-size: xx-large; color:#4f46e5; font-weight:bold;\">XX-Large Display Headline</p>\n</div>",
    "cssExample": "p { margin: 4px 0; color: #1e293b; }\n/* xx-large corresponds approximately to 2rem (32px) */",
    "expectedOutput": "Four lines illustrating the progressive keyword font-size scale culminating in xx-large.",
    "notes": "Keyword font sizes map to user preferences set in browser settings.",
    "commonMistakes": "CSS now also includes xxx-large in modern specifications."
  },
  {
    "id": 202,
    "number": "202",
    "title": "CSS Border Radius",
    "category": "Advanced Techniques & Rules",
    "introduction": "Elliptical and 8-value border radius syntax for organic shapes and blobs.",
    "explanation": "INVENTORY NOTICE: Exact title 'CSS Border Radius'. Syntax: horizontal-radii / vertical-radii.",
    "syntax": "border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;",
    "selectorsOrProps": [
      "elliptical border-radius",
      "organic blob"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"organic-blob\">Organic CSS Blob Shape</div>\n</div>",
    "cssExample": ".organic-blob {\n  width: 180px;\n  height: 120px;\n  background: linear-gradient(135deg, #4f46e5, #06b6d4);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;\n  margin: 10px auto;\n  box-shadow: 0 10px 20px rgba(79, 70, 229, 0.3);\n}",
    "expectedOutput": "An asymmetrical fluid organic blob shape with varied curved corners.",
    "notes": "The slash (/) separates horizontal corner radii from vertical corner radii.",
    "commonMistakes": "Allows creating natural, non-rectangular shapes without SVG files."
  },
  {
    "id": 203,
    "number": "203",
    "title": "Max-width and width",
    "category": "Advanced Techniques & Rules",
    "introduction": "The relationship between width and max-width in fluid web architecture.",
    "explanation": "INVENTORY NOTICE: Exact title 'Max-width and width'. width: 100% + max-width creates responsive bounds.",
    "syntax": "width: 100%;\nmax-width: 600px;",
    "selectorsOrProps": [
      "width: 100%",
      "max-width",
      "responsive containment"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"ideal-container\">\n    width: 100%; max-width: 360px;\n  </div>\n</div>",
    "cssExample": ".ideal-container {\n  width: 100%;\n  max-width: 360px;\n  margin: 0 auto;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 8px;\n  text-align: center;\n  font-weight: bold;\n}",
    "expectedOutput": "Container expands to fill narrow screens, but stops expanding beyond 360px on wide screens.",
    "notes": "This is the golden rule for responsive forms, modals, and content containers.",
    "commonMistakes": "Using fixed width: 600px forces horizontal scrolling on 375px mobile screens."
  },
  {
    "id": 204,
    "number": "204",
    "title": "First-letter",
    "category": "Advanced Techniques & Rules",
    "introduction": "Legacy single-colon :first-letter syntax versus modern double-colon ::first-letter.",
    "explanation": "INVENTORY NOTICE: Preserved distinct lesson 'First-letter'. Historical CSS1/CSS2 compatibility review.",
    "syntax": "p:first-letter { font-size: 200%; } /* CSS2 single-colon */",
    "selectorsOrProps": [
      ":first-letter",
      "CSS1 syntax"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"classic-drop\">CodePlay provides 210 structured CSS lessons for learners worldwide.</p>\n</div>",
    "cssExample": ".classic-drop:first-letter {\n  font-size: 2.4rem;\n  font-weight: bold;\n  color: #06b6d4;\n  float: left;\n  line-height: 0.9;\n  padding-right: 6px;\n}\n.classic-drop {\n  color: #334155;\n  line-height: 1.6;\n}",
    "expectedOutput": "The opening 'C' character styled as a prominent cyan drop cap.",
    "notes": "Single-colon :first-letter is preserved in modern browsers for backwards compatibility with CSS1.",
    "commonMistakes": "CSS3 standardizes double colons (::first-letter) for pseudo-elements and single colon (:hover) for pseudo-classes."
  },
  {
    "id": 205,
    "number": "205",
    "title": "before",
    "category": "Advanced Techniques & Rules",
    "introduction": "The single-colon :before legacy pseudo-element syntax and modern compatibility.",
    "explanation": "INVENTORY NOTICE: Exact title 'before'. Demonstrates historical CSS2 single-colon convention.",
    "syntax": "p:before { content: '\u2605 '; }",
    "selectorsOrProps": [
      ":before",
      "CSS2 syntax"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <p class=\"legacy-before\">Featured Course Item</p>\n</div>",
    "cssExample": ".legacy-before:before {\n  content: \"\u2605 \";\n  color: #f59e0b;\n  font-size: 1.2rem;\n}\n.legacy-before {\n  font-weight: bold;\n  color: #1e1b4b;\n}",
    "expectedOutput": "Gold star glyph prepended using the historical single-colon :before notation.",
    "notes": "All browsers support both :before and ::before interchangeably for backwards compatibility.",
    "commonMistakes": "Modern codebases prefer ::before to clearly distinguish pseudo-elements from pseudo-classes."
  },
  {
    "id": 206,
    "number": "206",
    "title": "after",
    "category": "Advanced Techniques & Rules",
    "introduction": "The single-colon :after legacy pseudo-element syntax and modern compatibility.",
    "explanation": "INVENTORY NOTICE: Exact title 'after'. Explores legacy CSS2 notation for appended content.",
    "syntax": "a:after { content: ' \u2192'; }",
    "selectorsOrProps": [
      ":after",
      "CSS2 syntax"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <a href=\"#\" class=\"legacy-after\">Continue to Next Module</a>\n</div>",
    "cssExample": ".legacy-after:after {\n  content: \" \u2192\";\n  color: #4f46e5;\n  font-weight: bold;\n}\n.legacy-after {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n}",
    "expectedOutput": "Link followed by a trailing arrow using the single-colon :after syntax.",
    "notes": "Browsers automatically alias :after to ::after under the hood.",
    "commonMistakes": "Double colon (::after) was introduced in CSS3 to disambiguate pseudo-elements."
  },
  {
    "id": 207,
    "number": "207",
    "title": "Column-count",
    "category": "Advanced Techniques & Rules",
    "introduction": "Splits long text into multiple newspaper-style vertical columns automatically.",
    "explanation": "column-count specifies the optimal number of columns to partition text content into.",
    "syntax": "column-count: 3;",
    "selectorsOrProps": [
      "column-count",
      "multi-column layout"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"multi-col-text\">\n    CSS Multi-column layout distributes running text into newspaper columns. As reader screen width changes, text seamlessly flows from the bottom of column one to the top of column two.\n  </div>\n</div>",
    "cssExample": ".multi-col-text {\n  column-count: 2;\n  column-gap: 24px;\n  color: #334155;\n  line-height: 1.6;\n  font-size: 0.95rem;\n  text-align: justify;\n}",
    "expectedOutput": "Paragraph smoothly divided into two clean, balanced newspaper columns.",
    "notes": "Use column-width: 250px as an alternative to let column count scale responsively.",
    "commonMistakes": "Images inside multi-column text should have break-inside: avoid to prevent awkward splitting."
  },
  {
    "id": 208,
    "number": "208",
    "title": "Column-gap",
    "category": "Advanced Techniques & Rules",
    "introduction": "Controls the gutter spacing between newspaper-style text columns.",
    "explanation": "column-gap creates breathing room between columns, preventing text collisions.",
    "syntax": "column-gap: 32px;",
    "selectorsOrProps": [
      "column-gap",
      "multi-column gutter"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"gap-col-demo\">\n    Column A with generous gutter separation. Column B flows alongside cleanly without crowding.\n  </div>\n</div>",
    "cssExample": ".gap-col-demo {\n  column-count: 2;\n  column-gap: 40px;\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: 8px;\n  color: #1e293b;\n  line-height: 1.6;\n}",
    "expectedOutput": "Two text columns separated by a generous 40px gutter whitespace.",
    "notes": "column-gap also works in Flexbox and CSS Grid layout containers.",
    "commonMistakes": "The default browser column gap is 1em if left unspecified."
  },
  {
    "id": 209,
    "number": "209",
    "title": "Column-rule",
    "category": "Advanced Techniques & Rules",
    "introduction": "Draws a vertical divider rule between multi-column text flows.",
    "explanation": "Shorthand for column-rule-width, column-rule-style, and column-rule-color.",
    "syntax": "column-rule: 2px solid #cbd5e1;",
    "selectorsOrProps": [
      "column-rule",
      "newspaper divider"
    ],
    "htmlExample": "<div class=\"demo-box\">\n  <div class=\"ruled-cols\">\n    Left newspaper section text flows here. Right section is separated by a clean vertical divider line.\n  </div>\n</div>",
    "cssExample": ".ruled-cols {\n  column-count: 2;\n  column-gap: 30px;\n  column-rule: 2px dashed #4f46e5;\n  color: #334155;\n  line-height: 1.6;\n  padding: 14px;\n}",
    "expectedOutput": "Two text columns divided down the center by a stylish dashed purple vertical rule.",
    "notes": "column-rule does not take up any layout space; it renders within the column-gap.",
    "commonMistakes": "If column-gap is too small, text can collide with the column rule."
  },
  {
    "id": 210,
    "number": "210",
    "title": "CSS Backdrop Filter",
    "category": "Advanced Techniques & Rules",
    "introduction": "Applies graphical effects like blur and saturation to the area BEHIND an element.",
    "explanation": "The foundation of modern frosted glassmorphism (blurring content behind translucent overlays).",
    "syntax": "backdrop-filter: blur(12px) saturate(180%);\n-webkit-backdrop-filter: blur(12px);",
    "selectorsOrProps": [
      "backdrop-filter",
      "glassmorphism",
      "blur()"
    ],
    "htmlExample": "<div class=\"demo-box\" style=\"position:relative; background: linear-gradient(135deg, #4f46e5, #06b6d4, #f59e0b); padding:40px 20px; border-radius:12px;\">\n  <div class=\"glass-card\">\n    <h3>Frosted Glassmorphism</h3>\n    <p>Background content behind this card is organically blurred in real time.</p>\n  </div>\n</div>",
    "cssExample": ".glass-card {\n  background: rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(12px) saturate(180%);\n  -webkit-backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 16px;\n  padding: 24px;\n  color: #ffffff;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);\n}\n.glass-card h3 {\n  margin-top: 0;\n  text-shadow: 0 2px 4px rgba(0,0,0,0.2);\n}",
    "expectedOutput": "A frosted glass card floating over a colorful gradient canvas with real-time background blur.",
    "notes": "Always include -webkit-backdrop-filter for Safari iOS compatibility.",
    "commonMistakes": "The element's own background must be semi-transparent (rgba or hsla) for the blurred backdrop to show through."
  }
];

if (typeof window !== 'undefined') {
  window.CSS_LESSONS = CSS_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CSS_LESSONS;
}
export default CSS_LESSONS;
