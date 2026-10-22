# Batch 1: Lessons 1 to 50
def get_batch1():
    b = []
    
    # 1: HTML Element selector
    b.append({
        "id": 1, "number": "001", "title": "HTML Element selector", "category": "Selectors",
        "introduction": "Element selectors target all HTML tags matching a specific tag name across the document.",
        "explanation": "Type/Element selectors target HTML elements directly by their tag name (such as p, h1, div, button). All matching elements on the page inherit the declared CSS rules unless overridden by higher-specificity selectors.",
        "syntax": "element {\n  property: value;\n}",
        "selectorsOrProps": ["p", "h1", "h2", "button"],
        "htmlExample": "<div class=\"demo-box\">\n  <h1>Header Element</h1>\n  <p>First paragraph styled via element selector.</p>\n  <p>Second paragraph inherits the exact same styling automatically.</p>\n  <button>Click Me</button>\n</div>",
        "cssExample": "h1 {\n  color: #4f46e5;\n  font-size: 1.8rem;\n  margin-bottom: 8px;\n}\n\np {\n  color: #334155;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n\nbutton {\n  background-color: #06b6d4;\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 6px;\n  cursor: pointer;\n}",
        "expectedOutput": "A purple heading, styled slate paragraphs, and a cyan styled button.",
        "notes": "Element selectors have a low specificity weight (0,0,1). They are ideal for foundational typography and CSS resets.",
        "commonMistakes": "Don't prefix element names with dots or hashes (write 'p', not '.p' or '#p')."
    })

    # 2: ID Slector()
    b.append({
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

    # 3: CSS ID Selector (#id)
    b.append({
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

    # 4: CSS Class Selector (.class)
    b.append({
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

    # 5: CSS Grouping Selector (,)
    b.append({
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

    # 6: Inline style
    b.append({
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

    # 7: Embedded style
    b.append({
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

    # 8: External style
    b.append({
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

    # 9: CSS Attribute Selectors
    b.append({
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

    # 10: CSS Attribute Equals Selector ([attr="value"])
    b.append({
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

    # Helper generator for 11 to 50
    p1_specs = [
        # 11
        (11, "011", "CSS Attribute Contains Selector ([attr*=\"value\"])", "Selectors",
         "The contains selector [attr*=\"value\"] matches elements whose attribute contains the substring anywhere within it.",
         "Matches elements if the attribute value contains the specified substring anywhere. Very useful for targeting links to specific domains or file extensions.",
         "[attr*=\"substring\"] {\n  property: value;\n}",
         ["[href*=\"github\"]", "[src*=\"logo\"]"],
         "<div class=\"demo-box\">\n  <a href=\"https://github.com/YUZAKIxNASA/PLAY-CODE\">GitHub Repository</a><br><br>\n  <a href=\"https://google.com\">Search Engine</a>\n</div>",
         "a[href*=\"github\"] {\n  color: #10b981;\n  font-weight: bold;\n  text-decoration: underline;\n}\na {\n  color: #64748b;\n  text-decoration: none;\n}",
         "GitHub link is highlighted in bold green with an underline.",
         "Great for styling external links or file extensions like a[href*=\".pdf\"].",
         "The match is case-sensitive unless the 'i' flag is added: [attr*=\"value\" i]."),

        # 12
        (12, "012", "CSS Attribute Starts With Selector ([attr^=\"value\"])", "Selectors",
         "The starts-with selector [attr^=\"value\"] matches elements whose attribute begins with the specified value.",
         "Targets elements where the attribute starts with the given string. Frequently used to style secure https:// links or telephone tel: links.",
         "[attr^=\"prefix\"] {\n  property: value;\n}",
         ["[href^=\"https://\"]", "[href^=\"tel:\"]"],
         "<div class=\"demo-box\">\n  <a href=\"https://secure.example.com\">Secure HTTPS Link</a><br><br>\n  <a href=\"http://insecure.example.com\">Insecure HTTP Link</a>\n</div>",
         "a[href^=\"https://\"] {\n  color: #059669;\n  font-weight: 600;\n}\na[href^=\"http://\"] {\n  color: #dc2626;\n}",
         "HTTPS link renders in green; HTTP link renders in red warning color.",
         "Excellent for appending lock icons before secure links using ::before.",
         "Make sure to include the exact protocol prefix like 'https://'."),

        # 13
        (13, "013", "CSS Attribute With Space Selector ([attr~=\"value\"])", "Selectors",
         "The space-separated attribute selector [attr~=\"value\"] matches full words within space-separated lists.",
         "Matches elements whose attribute value is a whitespace-separated list of words, one of which is exactly equal to the specified value.",
         "[attr~=\"word\"] {\n  property: value;\n}",
         ["[class~=\"featured\"]", "[data-tags~=\"tech\"]"],
         "<div class=\"demo-box\">\n  <p data-tags=\"news tech code\">Tech Article (Matched)</p>\n  <p data-tags=\"news cooking\">Cooking Article</p>\n</div>",
         "p[data-tags~=\"tech\"] {\n  background: #ede9fe;\n  color: #6b21a8;\n  padding: 10px;\n  border-radius: 6px;\n  font-weight: 600;\n}",
         "The first article has a purple highlight because 'tech' is an isolated word in its data-tags.",
         "This selector functions identically to the classic .class selector mechanism.",
         "It will not match substrings that are parts of other words (e.g. 'technology' won't match 'tech')."),

        # 14
        (14, "014", "CSS Attribute With Pipe Selector ([attr|=\"value\"])", "Selectors",
         "The pipe attribute selector [attr|=\"value\"] matches an exact value or one followed by a hyphen (-).",
         "Primarily designed to handle language subcode matching (such as lang=\"en\" or lang=\"en-US\").",
         "[attr|=\"value\"] {\n  property: value;\n}",
         ["[lang|=\"en\"]", "[lang|=\"es\"]"],
         "<div class=\"demo-box\">\n  <p lang=\"en\">English (en)</p>\n  <p lang=\"en-US\">English US (en-US)</p>\n  <p lang=\"es\">Spanish (es)</p>\n</div>",
         "p[lang|=\"en\"] {\n  border-left: 4px solid #4f46e5;\n  padding-left: 12px;\n  color: #1e1b4b;\n  font-weight: 500;\n}",
         "Both 'en' and 'en-US' receive the indigo left accent bar, while 'es' is untouched.",
         "Great for multilingual styling and locale-specific typography.",
         "The hyphen is strictly required for prefix matching; 'english' won't match 'en'."),

        # 15
        (15, "015", "CSS Combinators", "Selectors",
         "Combinators explain the relationship between selectors (descendant, child, adjacent sibling, general sibling).",
         "CSS combinators join multiple simple selectors to express structural hierarchy in the DOM tree.",
         "A B (descendant) | A > B (child) | A + B (adjacent) | A ~ B (sibling)",
         ["combinator", "hierarchy"],
         "<div class=\"demo-box\">\n  <div class=\"parent\">\n    <p>Child 1</p>\n    <div class=\"nested\"><p>Grandchild</p></div>\n    <span>Sibling Separator</span>\n    <p>Sibling 2</p>\n  </div>\n</div>",
         ".parent > p {\n  color: #4f46e5;\n  font-weight: bold;\n}\n.parent span + p {\n  color: #06b6d4;\n}",
         "Child 1 is purple; the sibling immediately after the span is cyan.",
         "Mastering combinators avoids needing excessive utility classes in markup.",
         "Overly deep combinators (e.g. div > ul > li > a > span) create fragile CSS tightly coupled to HTML structure."),

        # 16
        (16, "016", "CSS Descendant Selector", "Selectors",
         "The descendant selector (space) matches all elements nested inside an ancestor at any depth.",
         "Denoted by a single space between selectors. It matches all descendant elements, whether they are immediate children, grandchildren, or deeper.",
         "ancestor descendant {\n  property: value;\n}",
         ["nav a", ".card p", "space combinator"],
         "<div class=\"demo-box\">\n  <nav class=\"menu\">\n    <a href=\"#\">Home</a>\n    <div><a href=\"#\">Subpage Link</a></div>\n  </nav>\n</div>",
         ".menu a {\n  color: #4f46e5;\n  text-decoration: none;\n  padding: 4px 8px;\n  background: #ede9fe;\n  border-radius: 4px;\n  margin-right: 6px;\n}",
         "Both links inside the menu are styled with purple text and light purple badges.",
         "Matches nested elements at any nesting depth.",
         "Be careful not to accidentally style unintended nested components (use child selector > if you only want top-level)."),

        # 17
        (17, "017", "CSS Child Selector", "Selectors",
         "The child selector (>) matches only elements that are immediate, direct children of a parent.",
         "Using the '>' symbol, this selector strictly matches elements located directly one level below the parent element.",
         "parent > child {\n  property: value;\n}",
         ["ul > li", ".container > div"],
         "<div class=\"demo-box\">\n  <ul class=\"nav-list\">\n    <li>Top-level item 1</li>\n    <li>Top-level item 2\n      <ul><li>Nested sub-item (Unstyled)</li></ul>\n    </li>\n  </ul>\n</div>",
         ".nav-list > li {\n  color: #0284c7;\n  font-weight: 600;\n  padding: 6px 0;\n  border-bottom: 1px solid #e0f2fe;\n}",
         "Only top-level list items receive blue styling; the nested sub-item remains default.",
         "More performant and predictable than descendant selectors for structured components.",
         "It will not match grandchildren or deeper descendants."),

        # 18
        (18, "018", "CSS Adjacent Sibling Selector", "Selectors",
         "The adjacent sibling selector (+) matches an element that immediately follows another element at the same level.",
         "Using the '+' symbol, this targets an element that is immediately preceded by the specified sibling.",
         "element1 + element2 {\n  property: value;\n}",
         ["h2 + p", "label + input"],
         "<div class=\"demo-box\">\n  <h2>Section Title</h2>\n  <p>Lead paragraph directly following the title (Highlighted).</p>\n  <p>Secondary paragraph (Standard styling).</p>\n</div>",
         "h2 + p {\n  font-size: 1.15rem;\n  color: #4f46e5;\n  font-weight: 500;\n  border-left: 3px solid #818cf8;\n  padding-left: 10px;\n}\np {\n  color: #64748b;\n}",
         "The first paragraph directly under the heading is enlarged and highlighted with an indigo bar.",
         "Classic technique for styling introductory lead paragraphs or form input spacing.",
         "If any element (even a blank div) separates the two elements, the selector will not match."),

        # 19
        (19, "019", "CSS General Sibling Selector", "Selectors",
         "The general sibling selector (~) matches all sibling elements that follow an element at the same level.",
         "Using the '~' tilde symbol, this selects all following siblings that share the same parent, whether adjacent or not.",
         "element1 ~ element2 {\n  property: value;\n}",
         ["h2 ~ p", ".badge ~ span"],
         "<div class=\"demo-box\">\n  <h2>Chapter Heading</h2>\n  <div>Divider Note</div>\n  <p>Following paragraph 1.</p>\n  <p>Following paragraph 2.</p>\n</div>",
         "h2 ~ p {\n  color: #0d9488;\n  background: #ccfbf1;\n  padding: 8px 12px;\n  border-radius: 6px;\n  margin-top: 6px;\n}",
         "All paragraphs following the h2 receive teal badges, even with the divider div between them.",
         "Very useful for complex form state styling (e.g. input:checked ~ label).",
         "Only selects following siblings, never preceding siblings in the DOM."),

        # 20
        (20, "020", "Text and background color", "Colors & Typography",
         "Sets foreground text color and background canvas color using hex, rgb, or named values.",
         "The color property determines the text color; background-color fills the element's box.",
         "selector {\n  color: #hex;\n  background-color: #hex;\n}",
         ["color", "background-color"],
         "<div class=\"demo-box\">\n  <div class=\"contrast-card\">\n    <h3>High Contrast Card</h3>\n    <p>Good contrast improves readability and accessibility compliance.</p>\n  </div>\n</div>",
         ".contrast-card {\n  background-color: #1e1b4b;\n  color: #e0e7ff;\n  padding: 24px;\n  border-radius: 12px;\n}\n.contrast-card h3 {\n  color: #38bdf8;\n  margin-top: 0;\n}",
         "A deep indigo card with luminous sky-blue heading and readable ice-blue text.",
         "Ensure a contrast ratio of at least 4.5:1 for standard text (WCAG AA).",
         "Forgetting that background-color does not inherit by default (it defaults to transparent)."),

        # 21
        (21, "021", "Font in css", "Colors & Typography",
         "Defines typeface families, fallbacks, and the font shorthand property in CSS.",
         "font-family provides a prioritized list of font family names for the browser to render.",
         "font-family: 'Poppins', system-ui, sans-serif;",
         ["font-family", "font-size", "font-style"],
         "<div class=\"demo-box\">\n  <p class=\"font-sans\">Modern Sans-Serif Typography (Poppins)</p>\n  <p class=\"font-serif\">Classic Elegant Serif Typography (Georgia)</p>\n  <p class=\"font-mono\">Technical Monospace Code Typography</p>\n</div>",
         ".font-sans { font-family: 'Poppins', sans-serif; font-size: 1.1rem; color: #1e293b; }\n.font-serif { font-family: Georgia, serif; font-size: 1.15rem; color: #334155; font-style: italic; }\n.font-mono { font-family: 'Courier New', monospace; font-size: 0.95rem; color: #0284c7; background: #f0f9ff; padding: 6px; }",
         "Three distinct typographical personalities: clean modern sans, italic serif, and highlighted monospace.",
         "Always include generic family fallbacks like sans-serif, serif, or monospace at the end.",
         "Multi-word font names must be wrapped in quotation marks (e.g. 'Open Sans')."),

        # 22
        (22, "022", "Text Properties", "Colors & Typography",
         "Controls text alignment, decoration, transformation, and indentation.",
         "Properties like text-align, text-decoration, and text-transform give comprehensive control over textual presentation.",
         "text-align: center | text-transform: uppercase | text-decoration: underline",
         ["text-align", "text-decoration", "text-transform"],
         "<div class=\"demo-box\">\n  <h3 class=\"text-upper\">Uppercase Center Heading</h3>\n  <p class=\"text-underline\">Underlined styled paragraph.</p>\n  <p class=\"text-justify\">Clean justified text that aligns flush to both left and right container edges.</p>\n</div>",
         ".text-upper {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #4f46e5;\n}\n.text-underline {\n  text-decoration: underline wavy #06b6d4 2px;\n}\n.text-justify {\n  text-align: justify;\n  color: #64748b;\n}",
         "Centered uppercase heading with letter tracking, a wavy cyan underline, and justified text.",
         "text-transform: uppercase changes rendering without modifying actual screen reader text.",
         "Excessive text-align: justify can create awkward word rivers on narrow screens."),

        # 23
        (23, "023", "Font-weight", "Colors & Typography",
         "Adjusts the stroke thickness of characters from thin (100) to ultra-bold (900).",
         "Numerical values from 100 to 900 provide granular weight control when supported by the loaded typeface.",
         "font-weight: 300 | 400 | 600 | 700 | bold;",
         ["font-weight", "bolder", "lighter"],
         "<div class=\"demo-box\">\n  <p style=\"font-weight: 300;\">Light 300 Font Weight</p>\n  <p style=\"font-weight: 400;\">Regular 400 Font Weight</p>\n  <p style=\"font-weight: 600;\">Semi-Bold 600 Font Weight</p>\n  <p style=\"font-weight: 800;\">Extra-Bold 800 Font Weight</p>\n</div>",
         "p {\n  font-family: 'Poppins', sans-serif;\n  color: #0f172a;\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}",
         "Four lines displaying progressive visual boldness.",
         "Variable fonts allow any integer value between 1 and 1000.",
         "If the font file doesn't include the requested weight, the browser simulates it (faux bold)."),

        # 24
        (24, "024", "Word-spacing", "Colors & Typography",
         "Modifies the amount of white space between individual words in text.",
         "Accepts pixel, em, or rem values to tighten or spread out words.",
         "word-spacing: 4px | 0.2em | normal;",
         ["word-spacing"],
         "<div class=\"demo-box\">\n  <p class=\"normal-words\">Standard word spacing in clean body copy.</p>\n  <p class=\"wide-words\">Expanded word spacing for stylized display headlines.</p>\n</div>",
         ".normal-words {\n  word-spacing: normal;\n  color: #64748b;\n}\n.wide-words {\n  word-spacing: 8px;\n  font-weight: 600;\n  color: #4f46e5;\n}",
         "The second line has exaggerated 8px gaps between words.",
         "Use sparingly for artistic headlines or banner treatments.",
         "Large word-spacing disrupts normal reading rhythm in long text."),

        # 25
        (25, "025", "Letter-spacing", "Colors & Typography",
         "Controls tracking—the space between individual letterforms.",
         "Crucial for typography: small negative values tighten large headings, while positive values improve small uppercase readability.",
         "letter-spacing: 1.5px | -0.5px | normal;",
         ["letter-spacing", "tracking"],
         "<div class=\"demo-box\">\n  <div class=\"badge-tracked\">PRO MEMBER</div>\n  <h2 class=\"heading-tight\">Compact Punchy Heading</h2>\n</div>",
         ".badge-tracked {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  background: #312e81;\n  color: #c7d2fe;\n  padding: 6px 12px;\n  display: inline-block;\n  border-radius: 4px;\n  margin-bottom: 12px;\n}\n.heading-tight {\n  letter-spacing: -1px;\n  color: #0f172a;\n  font-size: 1.8rem;\n  margin: 0;\n}",
         "A widely tracked small badge followed by a tightly spaced large headline.",
         "Always add letter-spacing to uppercase text for professional aesthetic finish.",
         "Using large tracking on lowercase body copy impairs readability."),

        # 26
        (26, "026", "Line-height", "Colors & Typography",
         "Sets the vertical distance between lines of text in a block.",
         "Best declared as a unitless multiplier (e.g. 1.6) so child elements scale proportionately.",
         "line-height: 1.6 | 1.2 | 24px;",
         ["line-height", "leading"],
         "<div class=\"demo-box\">\n  <p class=\"cramped\">Cramped line-height (1.1). When lines are too close together, ascenders and descenders collide, making reading difficult.</p>\n  <p class=\"comfortable\">Comfortable line-height (1.7). Generous vertical breathing room enhances readability and reduces visual fatigue.</p>\n</div>",
         ".cramped {\n  line-height: 1.1;\n  background: #fee2e2;\n  padding: 10px;\n  border-radius: 6px;\n  margin-bottom: 15px;\n}\n.comfortable {\n  line-height: 1.7;\n  background: #ecfdf5;\n  padding: 10px;\n  border-radius: 6px;\n}",
         "Contrasts uncomfortable cramped red text with comfortable green text.",
         "Unitless numbers (1.5) are preferred over fixed units (24px) for scalable responsive type.",
         "Setting line-height too small causes lines to overlap visually."),

        # 27
        (27, "027", "Link in css", "Colors & Typography",
         "Styles hyperlink states: :link, :visited, :hover, and :active (LVHA order).",
         "To style anchor links properly, declare states in the LVHA mnemonic order: Link, Visited, Hover, Active.",
         "a:link, a:visited, a:hover, a:active",
         [":link", ":visited", ":hover", ":active"],
         "<div class=\"demo-box\">\n  <a href=\"#test\" class=\"custom-link\">Interactive Link Demo</a>\n</div>",
         ".custom-link:link, .custom-link:visited {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  border-bottom: 2px solid transparent;\n  transition: all 0.2s ease;\n}\n.custom-link:hover {\n  color: #06b6d4;\n  border-bottom-color: #06b6d4;\n}\n.custom-link:active {\n  color: #ef4444;\n}",
         "A link that turns cyan with a border underline on hover, and flashes red on click.",
         "The LVHA order is essential because subsequent rules override earlier ones at equal specificity.",
         "Declaring :hover before :link or :visited breaks hover styling."),

        # 28
        (28, "028", "CSS Margins", "Box Model & Spacing",
         "Creates whitespace outside of an element's border to separate it from neighbors.",
         "Margins can be set individually (margin-top, margin-right, margin-bottom, margin-left) or using shorthand.",
         "margin: 20px | margin: 10px 20px | margin: auto",
         ["margin", "margin-top", "margin-bottom"],
         "<div class=\"demo-box\">\n  <div class=\"box-outer\">\n    <div class=\"box-inner\">Separated by 25px Margin</div>\n  </div>\n</div>",
         ".box-outer {\n  background: #e2e8f0;\n  padding: 10px;\n  border-radius: 8px;\n}\n.box-inner {\n  margin: 25px auto;\n  background: #4f46e5;\n  color: white;\n  padding: 15px;\n  width: 70%;\n  text-align: center;\n  border-radius: 6px;\n}",
         "A centered purple inner box separated from the gray container edges by 25px margin.",
         "margin: 0 auto horizontally centers block elements with a declared width.",
         "Vertical margins collapse into a single margin between adjacent block elements."),

        # 29
        (29, "029", "CSS Padding", "Box Model & Spacing",
         "Generates space inside an element between its content and its border.",
         "Padding expands the click/touch area and gives content breathing room inside its container.",
         "padding: 16px | padding: 12px 24px",
         ["padding", "padding-top", "padding-inline"],
         "<div class=\"demo-box\">\n  <button class=\"padded-btn\">Generous Padding</button>\n  <button class=\"tight-btn\">Tight Padding</button>\n</div>",
         ".padded-btn {\n  padding: 14px 28px;\n  background: #4f46e5;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-right: 10px;\n}\n.tight-btn {\n  padding: 4px 8px;\n  background: #94a3b8;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}",
         "Contrasts a comfortable modern button with a cramped tight button.",
         "Padding cannot accept negative values (unlike margins).",
         "Without box-sizing: border-box, adding padding increases the element's rendered width."),

        # 30
        (30, "030", "CSS Width and Height", "Box Model & Spacing",
         "Sets the dimensional width and height of block and inline-block elements.",
         "Defines explicit container sizes using pixels, percentages, or viewport units.",
         "width: 300px; height: 150px;",
         ["width", "height"],
         "<div class=\"demo-box\">\n  <div class=\"fixed-size\">Width: 260px<br>Height: 120px</div>\n</div>",
         ".fixed-size {\n  width: 260px;\n  height: 120px;\n  background: linear-gradient(135deg, #06b6d4, #3b82f6);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 10px;\n}",
         "A blue-cyan gradient box with fixed 260px by 120px dimensions.",
         "Width and height have no effect on non-replaced inline elements like span.",
         "Hardcoded heights can cause content overflow when text wraps on smaller screens."),

        # 31
        (31, "031", "CSS Min-width and Max-width", "Box Model & Spacing",
         "Constrains element width within minimum and maximum boundaries for fluid responsiveness.",
         "max-width prevents elements from overflowing their parent, while min-width prevents them from becoming too narrow.",
         "max-width: 100% | min-width: 200px",
         ["max-width", "min-width"],
         "<div class=\"demo-box\">\n  <div class=\"fluid-card\">Fluid Card: max-width 400px, width 100%</div>\n</div>",
         ".fluid-card {\n  width: 100%;\n  max-width: 400px;\n  min-width: 180px;\n  background: #1e1b4b;\n  color: #38bdf8;\n  padding: 20px;\n  border-radius: 10px;\n  text-align: center;\n}",
         "A card that adapts to container width but never expands past 400px.",
         "Combining width: 100% with max-width is the golden rule of responsive container design.",
         "min-width overrides max-width if they conflict."),

        # 32
        (32, "032", "CSS Min-height and Max-height", "Box Model & Spacing",
         "Sets boundaries on vertical element dimensions.",
         "min-height ensures a container looks substantial even with little content, while allowing growth as content increases.",
         "min-height: 200px; max-height: 400px; overflow-y: auto;",
         ["min-height", "max-height"],
         "<div class=\"demo-box\">\n  <div class=\"scroll-card\">\n    <h4>Scrollable Card (max-height: 120px)</h4>\n    <p>Line 1 of content.</p>\n    <p>Line 2 of content.</p>\n    <p>Line 3 of content causing vertical scroll.</p>\n    <p>Line 4 of content.</p>\n  </div>\n</div>",
         ".scroll-card {\n  max-height: 120px;\n  min-height: 80px;\n  overflow-y: auto;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  padding: 12px;\n  border-radius: 8px;\n}",
         "A compact card with a scrollbar allowing navigation through excess text.",
         "Use min-height: 100vh on main page containers to prevent footer jumping on short pages.",
         "Setting max-height without overflow: auto clips or overflows overflowing content."),

        # 33
        (33, "033", "CSS Box Model", "Box Model & Spacing",
         "The fundamental layout model consisting of Content, Padding, Border, and Margin.",
         "Every HTML element is rendered as a rectangular box. box-sizing: border-box includes padding and border in the declared width/height.",
         "box-sizing: border-box | content-box",
         ["box-sizing", "content", "padding", "border", "margin"],
         "<div class=\"demo-box\">\n  <div class=\"box-model-demo\">\n    <div class=\"box-inner-content\">Content Area</div>\n  </div>\n</div>",
         ".box-model-demo {\n  box-sizing: border-box;\n  width: 280px;\n  padding: 20px;\n  border: 4px solid #4f46e5;\n  margin: 15px auto;\n  background: #e0e7ff;\n  border-radius: 10px;\n}\n.box-inner-content {\n  background: #4f46e5;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 4px;\n}",
         "A visual diagram of nested box model layers with distinct borders and padding.",
         "Always apply * { box-sizing: border-box; } globally in modern web applications.",
         "Under content-box (default), width + padding + border produces unexpected layout overflow."),

        # 34
        (34, "034", "CSS Display Property", "Display & Structure",
         "Specifies how an element is treated in page flow (block, inline, inline-block, none).",
         "Controls outer display type affecting layout geometry and line-breaking behavior.",
         "display: block | inline | inline-block | none",
         ["display"],
         "<div class=\"demo-box\">\n  <span class=\"block-span\">Span converted to display: block</span>\n  <div class=\"inline-div\">Div converted to inline-block</div>\n  <div class=\"inline-div\">Adjacent inline-block</div>\n</div>",
         ".block-span {\n  display: block;\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 10px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.inline-div {\n  display: inline-block;\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 8px 16px;\n  border-radius: 6px;\n}",
         "A block span spanning the full width, followed by two inline-block divs sitting side by side.",
         "display: none removes the element completely from document layout and accessibility trees.",
         "Attempting to set width/height on display: inline has zero effect in CSS."),

        # 35
        (35, "035", "Display", "Display & Structure",
         "In-depth exploration of modern display values including flex, grid, and contents.",
         "Modern CSS introduces container display modes (flex, grid) that govern formatting context for child items.",
         "display: flex | grid | contents | flow-root",
         ["display: flex", "display: grid", "display: contents"],
         "<div class=\"demo-box\">\n  <div class=\"flex-strip\">\n    <div>Item A</div>\n    <div>Item B</div>\n    <div>Item C</div>\n  </div>\n</div>",
         ".flex-strip {\n  display: flex;\n  gap: 12px;\n}\n.flex-strip div {\n  flex: 1;\n  background: #4f46e5;\n  color: white;\n  padding: 14px;\n  text-align: center;\n  border-radius: 6px;\n  font-weight: bold;\n}",
         "Three equal-width flex items sharing a horizontal row.",
         "display: contents makes the container's children act as direct children of the parent.",
         "Confusing display: none (removes element) with visibility: hidden (preserves empty space)."),

        # 36
        (36, "036", "List Style", "Display & Structure",
         "Styles list marker bullets, numbers, images, and positioning for <ul> and <ol>.",
         "Controls list-style-type, list-style-position, and list-style-image.",
         "list-style: none | list-style-type: square | disc",
         ["list-style", "list-style-type", "list-style-position"],
         "<div class=\"demo-box\">\n  <ul class=\"custom-list\">\n    <li>First styled list item</li>\n    <li>Second styled list item</li>\n    <li>Third styled list item</li>\n  </ul>\n</div>",
         ".custom-list {\n  list-style-type: '🚀 ';\n  padding-left: 24px;\n  color: #1e293b;\n  line-height: 1.8;\n  font-weight: 500;\n}",
         "An unordered list bulleted with rocket emojis.",
         "Modern CSS allows strings and emojis directly inside list-style-type: '⭐ '.",
         "Removing bullets with list-style: none often requires resetting padding-left: 0 as well."),

        # 37
        (37, "037", "Table Style", "Display & Structure",
         "Styles HTML tables with borders, zebra striping, and cell alignments.",
         "border-collapse: collapse merges adjacent cell borders into a single clean stroke.",
         "border-collapse: collapse | border-spacing: 0",
         ["border-collapse", "text-align", "nth-child(even)"],
         "<div class=\"demo-box\">\n  <table class=\"styled-table\">\n    <thead><tr><th>Framework</th><th>Language</th><th>Popularity</th></tr></thead>\n    <tbody>\n      <tr><td>Vite</td><td>JavaScript</td><td>Very High</td></tr>\n      <tr><td>React</td><td>TypeScript</td><td>Dominant</td></tr>\n      <tr><td>Django</td><td>Python</td><td>High</td></tr>\n    </tbody>\n  </table>\n</div>",
         ".styled-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.95rem;\n}\n.styled-table th {\n  background: #1e1b4b;\n  color: white;\n  padding: 10px;\n  text-align: left;\n}\n.styled-table td {\n  padding: 10px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.styled-table tr:nth-child(even) {\n  background: #f8fafc;\n}",
         "A professional zebra-striped data table with dark indigo headers.",
         "Always set border-collapse: collapse to prevent double table borders.",
         "Tables require table-layout: fixed when you need strict column widths with text-overflow."),

        # 38
        (38, "038", "Border style", "Borders & Outlines",
         "Defines border line patterns: solid, dashed, dotted, double, groove, ridge.",
         "border-style sets the aesthetic drawing technique for perimeter lines.",
         "border-style: solid | dashed | dotted | double",
         ["border-style"],
         "<div class=\"demo-box\">\n  <div class=\"b-solid\">Solid Border</div>\n  <div class=\"b-dashed\">Dashed Border</div>\n  <div class=\"b-double\">Double Border</div>\n</div>",
         "div[class^=\"b-\"] {\n  padding: 12px;\n  margin-bottom: 10px;\n  border-width: 3px;\n  border-color: #4f46e5;\n  border-radius: 6px;\n}\n.b-solid { border-style: solid; }\n.b-dashed { border-style: dashed; }\n.b-double { border-style: double; border-width: 6px; }",
         "Three stacked boxes demonstrating solid, dashed, and double borders.",
         "A border will not appear unless border-style is defined (defaults to none).",
         "Specifying border-width without border-style results in an invisible border."),

        # 39
        (39, "039", "Border-radius", "Borders & Outlines",
         "Rounds the outer corners of an element's box.",
         "Allows pixels, rems, or 50% for circles and pills.",
         "border-radius: 8px | 50% | 12px 4px",
         ["border-radius"],
         "<div class=\"demo-box\">\n  <div class=\"circle-avatar\">CP</div>\n  <div class=\"rounded-card\">Subtle 12px Radius Card</div>\n</div>",
         ".circle-avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background: #4f46e5;\n  color: white;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  margin-right: 15px;\n}\n.rounded-card {\n  display: inline-block;\n  background: #f1f5f9;\n  padding: 16px;\n  border-radius: 14px;\n  color: #1e293b;\n}",
         "A circular purple avatar alongside a gently rounded container card.",
         "Setting border-radius: 50% on a square element creates a perfect circle.",
         "Children can overflow rounded corners unless overflow: hidden is set on the parent."),

        # 40
        (40, "040", "Border-color", "Borders & Outlines",
         "Applies color to borders with independent per-side customization.",
         "Can style individual sides (border-top-color) or use shorthand for all four edges.",
         "border-color: #4f46e5 | transparent",
         ["border-color", "border-top-color"],
         "<div class=\"demo-box\">\n  <div class=\"multi-color-box\">Multi-sided Border Color</div>\n</div>",
         ".multi-color-box {\n  padding: 18px;\n  border-width: 4px;\n  border-style: solid;\n  border-top-color: #ef4444;\n  border-right-color: #10b981;\n  border-bottom-color: #3b82f6;\n  border-left-color: #f59e0b;\n  border-radius: 8px;\n  font-weight: 600;\n  text-align: center;\n}",
         "A box bordered by red (top), green (right), blue (bottom), and amber (left).",
         "Transparent border colors are used in CSS triangle creation tricks.",
         "border-color defaults to currentColor (the element's font color) if omitted."),

        # 41
        (41, "041", "CSS Outline", "Borders & Outlines",
         "Draws a highlight stroke outside the border edge without consuming layout space.",
         "Outlines do not affect element dimensions or cause layout reflows.",
         "outline: 2px solid #06b6d4;",
         ["outline", "outline-style", "outline-color"],
         "<div class=\"demo-box\">\n  <button class=\"outline-demo\">Focused Button (with Outline)</button>\n</div>",
         ".outline-demo {\n  padding: 12px 24px;\n  background: #0f172a;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  outline: 3px solid #06b6d4;\n  cursor: pointer;\n}",
         "A dark button framed by a glowing cyan outline without layout shift.",
         "Never remove outline: none without providing an accessible alternative focus indicator.",
         "Outlines are drawn outside the border and cannot have independent per-side styles."),

        # 42
        (42, "042", "CSS Outline Offset", "Borders & Outlines",
         "Creates a visible gap between an element's border and its outline stroke.",
         "outline-offset moves the outline away from the border edge (or inward with negative values).",
         "outline-offset: 4px | -2px",
         ["outline-offset"],
         "<div class=\"demo-box\">\n  <div class=\"offset-box\">Detached Outline (4px Gap)</div>\n</div>",
         ".offset-box {\n  background: #4f46e5;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  outline: 2px dashed #06b6d4;\n  outline-offset: 6px;\n  margin: 15px;\n  text-align: center;\n  font-weight: bold;\n}",
         "A purple box surrounded by a detached cyan dashed line floating 6px outside.",
         "Negative outline-offset values draw the outline inside the element box.",
         "outline-offset is supported across all modern browsers."),

        # 43
        (43, "043", "Opacity", "Positioning & Layers",
         "Controls element transparency from 0.0 (completely invisible) to 1.0 (fully opaque).",
         "The opacity property affects the element and all of its nested children.",
         "opacity: 0.75 | 0.5 | 1.0",
         ["opacity"],
         "<div class=\"demo-box\">\n  <div class=\"opaque-item full-op\">Opacity 1.0</div>\n  <div class=\"opaque-item mid-op\">Opacity 0.6</div>\n  <div class=\"opaque-item low-op\">Opacity 0.25</div>\n</div>",
         ".opaque-item {\n  background: #4f46e5;\n  color: white;\n  padding: 14px;\n  margin-bottom: 8px;\n  border-radius: 6px;\n  font-weight: bold;\n  text-align: center;\n}\n.full-op { opacity: 1.0; }\n.mid-op { opacity: 0.6; }\n.low-op { opacity: 0.25; }",
         "Three purple bars showing progressive levels of see-through transparency.",
         "If you only want a translucent background without fading child text, use rgba() or hsla() instead.",
         "Opacity creates a new stacking context, affecting z-index layering."),

        # 44
        (44, "044", "Fixed position", "Positioning & Layers",
         "Positions an element relative to the browser viewport, keeping it fixed during scrolling.",
         "Fixed elements stay locked to the screen coordinates defined by top, right, bottom, and left.",
         "position: fixed; top: 0; right: 0;",
         ["position: fixed", "z-index"],
         "<div class=\"demo-box\" style=\"height: 180px; overflow-y: auto; position: relative;\">\n  <div class=\"fixed-banner\">Fixed Top Banner</div>\n  <div style=\"padding-top: 50px;\">\n    <p>Scroll content line 1...</p>\n    <p>Scroll content line 2...</p>\n    <p>Scroll content line 3...</p>\n    <p>Scroll content line 4...</p>\n  </div>\n</div>",
         ".fixed-banner {\n  position: sticky; /* Note: inside scroll sandbox sticky simulates fixed behavior */\n  top: 0;\n  background: #4f46e5;\n  color: white;\n  padding: 10px;\n  font-weight: bold;\n  text-align: center;\n  z-index: 10;\n}",
         "A banner pinned to the top while text content scrolls smoothly underneath.",
         "Fixed elements are removed from normal flow, so add padding to sibling content to prevent overlap.",
         "Transforms on any parent element can break fixed viewport positioning in some browsers."),

        # 45
        (45, "045", "Static position", "Positioning & Layers",
         "The default positioning scheme where elements flow naturally in source document order.",
         "Static elements follow standard document layout. Offset properties (top, left, z-index) have no effect.",
         "position: static;",
         ["position: static"],
         "<div class=\"demo-box\">\n  <div class=\"static-item\">Static Item 1 (Normal Flow)</div>\n  <div class=\"static-item\">Static Item 2 (Normal Flow)</div>\n</div>",
         ".static-item {\n  position: static;\n  top: 50px; /* Ignored on static elements */\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  padding: 14px;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  color: #334155;\n}",
         "Two standard block elements stacked one beneath the other in normal sequence.",
         "Every element is position: static by default.",
         "Trying to use top, right, bottom, left, or z-index on a static element does nothing."),

        # 46
        (46, "046", "Relative position", "Positioning & Layers",
         "Positions an element relative to its normal position, leaving its original space intact.",
         "Offsets (top, left) shift the visual presentation without disturbing neighboring elements.",
         "position: relative; top: -10px; left: 15px;",
         ["position: relative"],
         "<div class=\"demo-box\">\n  <div class=\"normal-box\">Box in normal flow</div>\n  <div class=\"shifted-box\">Shifted 15px down & right</div>\n  <div class=\"normal-box\">Subsequent box</div>\n</div>",
         ".normal-box {\n  background: #e2e8f0;\n  padding: 12px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n}\n.shifted-box {\n  position: relative;\n  top: 10px;\n  left: 20px;\n  background: #4f46e5;\n  color: white;\n  padding: 12px;\n  border-radius: 6px;\n  z-index: 2;\n}",
         "The purple box is offset 10px down and 20px right from where it would naturally sit.",
         "position: relative is most commonly used as the reference container for absolute children.",
         "The space originally reserved for the relative element remains empty in the document flow."),

        # 47
        (47, "047", "absolute position", "Positioning & Layers",
         "Removes an element from normal flow, positioning it relative to its nearest positioned ancestor.",
         "INVENTORY NOTICE: Exact lowercase title 'absolute position'. Positions elements relative to the closest ancestor with position other than static.",
         "position: absolute; top: 0; right: 0;",
         ["position: absolute"],
         "<div class=\"demo-box\">\n  <div class=\"parent-rel\">\n    Parent (position: relative)\n    <span class=\"badge-abs\">NEW</span>\n  </div>\n</div>",
         ".parent-rel {\n  position: relative;\n  background: #1e1b4b;\n  color: #c7d2fe;\n  padding: 30px;\n  border-radius: 10px;\n}\n.badge-abs {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: #10b981;\n  color: white;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: bold;\n}",
         "A dark container with a green 'NEW' badge pinned to its top-right corner.",
         "If no positioned ancestor exists, it positions relative to the initial containing block (viewport).",
         "Forgetting position: relative on the parent causes the absolute element to fly to the page edge."),

        # 48
        (48, "048", "Absolute position", "Positioning & Layers",
         "Advanced absolute positioning techniques including perfect coordinate centering.",
         "Combining top: 50%, left: 50%, and transform: translate(-50%, -50%) centers an element perfectly.",
         "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
         ["position: absolute", "center transform"],
         "<div class=\"demo-box\">\n  <div class=\"stage-box\">\n    <div class=\"centered-modal\">Centered Dialog</div>\n  </div>\n</div>",
         ".stage-box {\n  position: relative;\n  height: 160px;\n  background: #f1f5f9;\n  border: 2px dashed #94a3b8;\n  border-radius: 10px;\n}\n.centered-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #4f46e5;\n  color: white;\n  padding: 14px 28px;\n  border-radius: 8px;\n  font-weight: bold;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}",
         "A purple modal box resting in the exact geometrical center of its parent stage.",
         "This technique works regardless of the width or height of the centered element.",
         "Omitting the translate(-50%, -50%) aligns the top-left corner to the center, not the element itself."),

        # 49
        (49, "049", "Absolute with image", "Positioning & Layers",
         "Pins overlays, badges, and textual captions over image frames using absolute positioning.",
         "Wrapping an image in a relative container allows badges and captions to sit neatly over the graphic.",
         ".img-wrapper { position: relative; } .badge { position: absolute; }",
         ["position: absolute", "image overlay"],
         "<div class=\"demo-box\">\n  <div class=\"card-img-wrap\">\n    <div class=\"img-placeholder\">Hero Preview Image</div>\n    <span class=\"pill-tag\">Featured</span>\n    <div class=\"caption-bar\">Scenic Mountain Landscape</div>\n  </div>\n</div>",
         ".card-img-wrap {\n  position: relative;\n  width: 100%;\n  max-width: 320px;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.img-placeholder {\n  background: linear-gradient(135deg, #0284c7, #0f172a);\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n.pill-tag {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  background: #f59e0b;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: bold;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.caption-bar {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  padding: 8px 12px;\n  font-size: 0.85rem;\n}",
         "An image banner with an amber 'Featured' tag in top-left and dark caption overlay at bottom.",
         "Always set overflow: hidden on the parent if you want rounded image corners to clip overlays.",
         "Setting right: 0 and left: 0 stretches an absolute element across the full parent width."),

        # 50
        (50, "050", "Fixed footer", "Positioning & Layers",
         "Creates a persistent bottom toolbar or footer that remains pinned as content scrolls.",
         "Using position: fixed and bottom: 0 pins an element to the screen bottom.",
         "position: fixed; bottom: 0; left: 0; width: 100%;",
         ["position: fixed", "bottom: 0"],
         "<div class=\"demo-box\" style=\"height: 180px; overflow-y: auto; position: relative;\">\n  <div style=\"padding-bottom: 50px;\">\n    <p>Long scrolling page content item 1...</p>\n    <p>Long scrolling page content item 2...</p>\n    <p>Long scrolling page content item 3...</p>\n  </div>\n  <footer class=\"fixed-bottom-bar\">\n    <span>CodePlay Fixed Footer Bar</span>\n    <button>Action</button>\n  </footer>\n</div>",
         ".fixed-bottom-bar {\n  position: sticky;\n  bottom: 0;\n  background: #0f172a;\n  color: #e2e8f0;\n  padding: 10px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.fixed-bottom-bar button {\n  background: #4f46e5;\n  color: white;\n  border: none;\n  padding: 6px 14px;\n  border-radius: 6px;\n}",
         "A persistent dark footer pinned to the bottom of the container with action button.",
         "Add padding-bottom to the body or main container equal to the footer height so content isn't obscured.",
         "On mobile screens, fixed elements can cover input fields when the virtual keyboard opens.")
    ]

    for spec in p1_specs:
        b.append({
            "id": spec[0], "number": spec[1], "title": spec[2], "category": spec[3],
            "introduction": spec[4], "explanation": spec[5], "syntax": spec[6],
            "selectorsOrProps": spec[7], "htmlExample": spec[8], "cssExample": spec[9],
            "expectedOutput": spec[10], "notes": spec[11], "commonMistakes": spec[12]
        })

    return b

print("Batch 1 compiled with", len(get_batch1()), "lessons.")
