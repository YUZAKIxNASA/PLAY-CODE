# Lessons 1 to 50
def get_part1():
    lessons = []
    
    # 1
    lessons.append({
        "id": 1, "number": "001", "title": "HTML Element selector", "category": "Selectors",
        "introduction": "The HTML element selector targets all elements of a specific HTML tag name across the document.",
        "explanation": "Type/Element selectors target HTML elements directly by their tag name (such as p, h1, div, button). All matching elements on the page inherit the declared CSS rules unless overridden by higher-specificity selectors.",
        "syntax": "element {\n  property: value;\n}",
        "selectorsOrProps": ["p", "h1", "h2", "button"],
        "htmlExample": "<div class=\"demo-box\">\n  <h1>Header Element</h1>\n  <p>First paragraph styled via element selector.</p>\n  <p>Second paragraph inherits the exact same styling automatically.</p>\n  <button>Click Me</button>\n</div>",
        "cssExample": "h1 {\n  color: #4f46e5;\n  font-size: 1.8rem;\n  margin-bottom: 8px;\n}\n\np {\n  color: #334155;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n\nbutton {\n  background-color: #06b6d4;\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n}",
        "expectedOutput": "A purple heading, styled slate paragraphs, and a cyan styled button.",
        "notes": "Element selectors have a low specificity weight (0,0,1). They are ideal for foundational typography and CSS resets.",
        "commonMistakes": "Don't prefix element names with dots or hashes (write 'p', not '.p' or '#p')."
    })
    
    # 2
    lessons.append({
        "id": 2, "number": "002", "title": "ID Slector()", "category": "Selectors",
        "introduction": "An ID selector targets a unique HTML element marked with an id attribute using the hash (#) syntax.",
        "explanation": "INVENTORY NOTICE: Preserved exact title spelling 'ID Slector()'. In CSS, an ID selector matches an element whose id attribute value exactly matches the identifier specified after the '#' symbol. IDs must be unique within an HTML document.",
        "syntax": "#elementId {\n  property: value;\n}",
        "selectorsOrProps": ["#id", "id attribute"],
        "htmlExample": "<div class=\"demo-box\">\n  <div id=\"special-banner\">\n    <h2>Exclusive Announcement</h2>\n    <p>This banner has a unique identifier in the document.</p>\n  </div>\n  <div class=\"regular-box\">\n    <p>Regular container without the special ID styling.</p>\n  </div>\n</div>",
        "cssExample": "#special-banner {\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);\n}\n\n#special-banner h2 {\n  margin-top: 0;\n  color: #a5f3fc;\n}\n\n.regular-box {\n  margin-top: 15px;\n  padding: 15px;\n  background: #f1f5f9;\n  border-radius: 8px;\n}",
        "expectedOutput": "A vibrant gradient banner with white and cyan text, distinguished from the plain container below it.",
        "notes": "IDs have high specificity (0,1,0,0). Use them sparingly for key landmarks rather than general styling.",
        "commonMistakes": "Using the same ID on multiple HTML elements on the same page violates HTML specifications."
    })

    # 3
    lessons.append({
        "id": 3, "number": "003", "title": "CSS ID Selector (#id)", "category": "Selectors",
        "introduction": "The #id selector applies styles to the single element on the page that has the matching id attribute.",
        "explanation": "To target an element by ID, prefix the ID name with a hash symbol (#). Because IDs are unique per document, this selector provides targeted styling and overrides lower-specificity class and element styles.",
        "syntax": "#my-element {\n  property: value;\n}",
        "selectorsOrProps": ["#main-nav", "#hero-section", "id"],
        "htmlExample": "<div class=\"demo-box\">\n  <header id=\"main-nav\">\n    <span class=\"brand\">CodePlay App</span>\n    <span class=\"status\">Online</span>\n  </header>\n  <p>The navigation bar above is targeted directly with #main-nav.</p>\n</div>",
        "cssExample": "#main-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #0f172a;\n  color: #38bdf8;\n  padding: 14px 20px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n\n#main-nav .status {\n  background: #10b981;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n}",
        "expectedOutput": "A dark slate navigation bar with sky-blue text and a green pill status indicator.",
        "notes": "ID names cannot start with a digit unless escaped, and cannot contain spaces.",
        "commonMistakes": "Forgetting the '#' symbol in the CSS rule, turning it into an element selector."
    })

    # 4
    lessons.append({
        "id": 4, "number": "004", "title": "CSS Class Selector (.class)", "category": "Selectors",
        "introduction": "Class selectors target any and all elements that share a specific class name prefixed with a dot (.).",
        "explanation": "Classes are the primary workhorse of scalable CSS. An element can have multiple classes separated by spaces, and multiple elements can share the same class. In CSS, prefix the class name with a period (.).",
        "syntax": ".class-name {\n  property: value;\n}",
        "selectorsOrProps": [".badge", ".card", ".btn-primary"],
        "htmlExample": "<div class=\"demo-box\">\n  <div class=\"badge badge-success\">Active User</div>\n  <div class=\"badge badge-warning\">Pending Verification</div>\n  <div class=\"badge badge-danger\">Subscription Expired</div>\n</div>",
        "cssExample": ".badge {\n  display: inline-block;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n\n.badge-success {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n\n.badge-warning {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n\n.badge-danger {\n  background-color: #fee2e2;\n  color: #991b1b;\n}",
        "expectedOutput": "Three distinct status badges displaying green, amber, and red color themes.",
        "notes": "Class selectors have moderate specificity (0,0,1,0), making them easily overridable and reusable.",
        "commonMistakes": "Putting a dot inside the HTML class attribute (e.g., class=\".badge\"). The dot is only in CSS!"
    })

    # 5
    lessons.append({
        "id": 5, "number": "005", "title": "CSS Grouping Selector (,)", "category": "Selectors",
        "introduction": "Grouping selectors use a comma (,) to apply the same CSS declarations to multiple selectors at once.",
        "explanation": "Instead of duplicating identical styling across h1, h2, and h3, separate them with commas. This minimizes CSS file size, avoids duplication, and keeps styles DRY (Don't Repeat Yourself).",
        "syntax": "selector1, selector2, selector3 {\n  property: value;\n}",
        "selectorsOrProps": ["comma operator", "h1, h2, h3"],
        "htmlExample": "<div class=\"demo-box\">\n  <h1>Heading Level 1</h1>\n  <h2>Heading Level 2</h2>\n  <h3>Heading Level 3</h3>\n  <p>The headings above share unified font family, tracking, and color through a grouped rule.</p>\n</div>",
        "cssExample": "h1, h2, h3 {\n  font-family: 'Poppins', sans-serif;\n  color: #1e1b4b;\n  letter-spacing: -0.5px;\n  margin-bottom: 6px;\n}\n\nh1 { font-size: 2rem; }\nh2 { font-size: 1.5rem; }\nh3 { font-size: 1.2rem; }",
        "expectedOutput": "Three hierarchical headings rendered with consistent dark indigo coloring and clean font family.",
        "notes": "If one selector in a comma-separated list is invalid, traditional CSS invalidates the entire block. Modern CSS :is() avoids this.",
        "commonMistakes": "Omitting the comma, which turns the selector into a descendant selector (e.g. 'h1 h2' looks for h2 inside h1)."
    })

    # 6
    lessons.append({
        "id": 6, "number": "006", "title": "Inline style", "category": "Selectors",
        "introduction": "Inline styles are applied directly to HTML elements using the style attribute.",
        "explanation": "Inline styles write CSS declarations directly on individual HTML tags. While convenient for quick tests or dynamic JavaScript calculations, they clutter markup and have the highest specificity (1,0,0,0), making them hard to maintain.",
        "syntax": "<element style=\"property: value;\">Content</element>",
        "selectorsOrProps": ["style attribute", "inline specificity"],
        "htmlExample": "<div class=\"demo-box\">\n  <p style=\"color: #4f46e5; font-size: 18px; font-weight: bold; background: #e0e7ff; padding: 12px; border-radius: 8px;\">\n    This paragraph has direct inline CSS applied via the style attribute!\n  </p>\n  <p>This regular paragraph has standard stylesheet styling.</p>\n</div>",
        "cssExample": "/* Stylesheet rules cannot easily override inline styles without !important */\np {\n  color: #64748b;\n  font-size: 15px;\n}",
        "expectedOutput": "The top paragraph renders with bold purple text on a light indigo box, overriding the external stylesheet.",
        "notes": "Inline styles bypass external stylesheets and prevent reusable class architecture. Use external sheets for production.",
        "commonMistakes": "Relying on inline styles for responsive design; you cannot write media queries or pseudo-classes inline."
    })

    # 7
    lessons.append({
        "id": 7, "number": "007", "title": "Embedded style", "category": "Selectors",
        "introduction": "Embedded (internal) styles are declared inside a <style> tag located in the document's <head>.",
        "explanation": "Embedded styles apply to a single HTML document. They are contained within <style> tags and can use all standard selectors, media queries, and keyframe animations without needing a separate .css file.",
        "syntax": "<head>\n  <style>\n    selector { property: value; }\n  </style>\n</head>",
        "selectorsOrProps": ["<style> tag", "internal stylesheet"],
        "htmlExample": "<!-- Embedded stylesheet represented inside this sandbox -->\n<style>\n  .internal-card {\n    background: #0f172a;\n    color: #f8fafc;\n    padding: 24px;\n    border-radius: 12px;\n    border-left: 5px solid #06b6d4;\n  }\n  .internal-card h3 {\n    color: #38bdf8;\n    margin: 0 0 8px 0;\n  }\n</style>\n\n<div class=\"internal-card\">\n  <h3>Embedded Style Example</h3>\n  <p>These rules were declared inside a &lt;style&gt; block in the document head.</p>\n</div>",
        "cssExample": "/* The embedded CSS inside the style tag above styles the card */\n.internal-card p {\n  margin: 0;\n  color: #94a3b8;\n}",
        "expectedOutput": "A dark slate card with a cyan left border accent and sky-blue heading.",
        "notes": "Embedded styles are useful for single-page applications or critical CSS inlining for fast first-paint metrics.",
        "commonMistakes": "Duplicating identical embedded styles across multiple HTML files instead of linking an external stylesheet."
    })

    # 8
    lessons.append({
        "id": 8, "number": "008", "title": "External style", "category": "Selectors",
        "introduction": "External styles link an independent .css file to HTML pages using the <link> tag.",
        "explanation": "External stylesheets are the industry standard for web development. By linking a shared .css file using <link rel=\"stylesheet\" href=\"style.css\">, all pages on a site share a consistent design system and benefit from browser caching.",
        "syntax": "<link rel=\"stylesheet\" href=\"styles.css\">",
        "selectorsOrProps": ["<link rel=\"stylesheet\">", "external css"],
        "htmlExample": "<div class=\"demo-box\">\n  <div class=\"site-card\">\n    <div class=\"card-icon\">🎨</div>\n    <h3>Clean Architecture</h3>\n    <p>External CSS keeps HTML content completely separated from visual presentation rules.</p>\n  </div>\n</div>",
        "cssExample": ".site-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n\n.card-icon {\n  font-size: 2.2rem;\n  margin-bottom: 10px;\n}\n\n.site-card h3 {\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n\n.site-card p {\n  color: #64748b;\n  margin: 0;\n  line-height: 1.5;\n}",
        "expectedOutput": "A crisp white card with subtle drop shadow, centered icon, and balanced typography.",
        "notes": "External stylesheets are cached by browsers after the first page view, drastically speeding up subsequent navigation.",
        "commonMistakes": "Providing an incorrect file path in the href attribute (e.g. forgetting relative ../ directory levels)."
    })

    # 9
    lessons.append({
        "id": 9, "number": "009", "title": "CSS Attribute Selectors", "category": "Selectors",
        "introduction": "Attribute selectors target HTML elements that possess a specified attribute regardless of its value.",
        "explanation": "Using square brackets [attribute], you can select any element that has that attribute defined. For example, [required] targets all mandatory form elements, and [disabled] targets all inactive controls.",
        "syntax": "[attribute] {\n  property: value;\n}",
        "selectorsOrProps": ["[required]", "[title]", "[disabled]"],
        "htmlExample": "<div class=\"demo-box\">\n  <p title=\"Important tip\">Hover this text to see its browser tooltip.</p>\n  <p>Standard text without any title attribute.</p>\n  <input type=\"text\" placeholder=\"Required input field\" required>\n  <input type=\"text\" placeholder=\"Optional input field\">\n</div>",
        "cssExample": "p[title] {\n  color: #4f46e5;\n  font-weight: 600;\n  border-bottom: 2px dashed #818cf8;\n  cursor: help;\n}\n\ninput[required] {\n  border: 2px solid #ef4444;\n  background: #fef2f2;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 10px;\n  display: block;\n}\n\ninput:not([required]) {\n  border: 1px solid #cbd5e1;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 8px;\n  display: block;\n}",
        "expectedOutput": "The text with title has a dashed underline and help cursor; the required input has a red validation border.",
        "notes": "Attribute selectors have the same specificity weight as class selectors (0,0,1,0).",
        "commonMistakes": "Confusing [attribute] presence with [attribute=\"value\"] exact equality."
    })

    # 10
    lessons.append({
        "id": 10, "number": "010", "title": "CSS Attribute Equals Selector ([attr=\"value\"])", "category": "Selectors",
        "introduction": "The exact equals selector [attr=\"value\"] matches elements whose attribute matches the exact string.",
        "explanation": "This selector matches elements where the attribute value is an exact match for the specified string. Commonly used to target input types like [type=\"password\"] or [type=\"submit\"].",
        "syntax": "[attr=\"exact-value\"] {\n  property: value;\n}",
        "selectorsOrProps": ["[type=\"text\"]", "[type=\"password\"]", "[target=\"_blank\"]"],
        "htmlExample": "<div class=\"demo-box\">\n  <input type=\"text\" value=\"john_doe\" placeholder=\"Username\">\n  <input type=\"password\" value=\"secret123\">\n  <input type=\"submit\" value=\"Login to CodePlay\">\n</div>",
        "cssExample": "input[type=\"text\"] {\n  border: 1px solid #94a3b8;\n  padding: 10px;\n  border-radius: 6px;\n  display: block;\n  margin-bottom: 10px;\n  width: 250px;\n}\n\ninput[type=\"password\"] {\n  border: 1px solid #6366f1;\n  background: #f5f3ff;\n  padding: 10px;\n  border-radius: 6px;\n  display: block;\n  margin-bottom: 10px;\n  width: 250px;\n}\n\ninput[type=\"submit\"] {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n}",
        "expectedOutput": "Distinct visual styling for text input, password field, and submit button based on type attribute.",
        "notes": "Quotes around the value are optional in simple cases but strongly recommended for reliability.",
        "commonMistakes": "Spaces inside the quotes must match the HTML attribute exactly; [class=\"btn\"] won't match class=\"btn primary\"."
    })

    return lessons

print("Loaded Part 1 module template.")
