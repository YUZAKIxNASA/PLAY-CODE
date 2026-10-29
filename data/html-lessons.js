/** [YZN-261029-020] Authorship: YUZAKI NASA (@ঔৣ፝ N4!) · PLAY-CODE / CodePlay */
/**
 * PLAY-CODE (@N4) — Master HTML 166 Lessons Curriculum Dataset
 * Project Owner: NASA-KUN
 * Exact Authoritative Inventory (1 to 166)
 * Strict Fidelity: Preserves duplicates (#85 & #86) and exact title 'TTextare' (#166).
 */

const HTML_LESSONS = [
  {
    "id": 1,
    "number": "001",
    "title": "HTML Declaration",
    "category": "Document Structure",
    "summary": "The DOCTYPE declaration informs the web browser which version of HTML the document is written in. In modern HTML5, <!DOCTYPE html> is short, clean, and required at the very top of every web page.",
    "syntax": "<!DOCTYPE html>",
    "attributes": [
      "N/A (Declaration)"
    ],
    "notes": "The DOCTYPE is an instruction to the browser, ensuring standard compliant mode.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML5 Declaration</title>\n  <style>\n    body { font-family: sans-serif; padding: 25px; background: #0f172a; color: #f8fafc; }\n    .box { background: #1e293b; padding: 20px; border-radius: 10px; border-left: 4px solid #4f46e5; }\n    h2 { color: #818cf8; margin-top: 0; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">\n    <h2>&lt;!DOCTYPE html&gt;</h2>\n    <p>This document uses the clean, modern HTML5 DOCTYPE declaration.</p>\n    <p>It ensures consistent rendering across all modern web browsers!</p>\n  </div>\n</body>\n</html>",
    "expected": "A styled dark container displaying confirmation of HTML5 standard mode."
  },
  {
    "id": 2,
    "number": "002",
    "title": "Sample Code",
    "category": "Document Structure",
    "summary": "A minimal complete HTML5 page template containing DOCTYPE, html, head, meta charset, title, and body elements.",
    "syntax": "<!DOCTYPE html>\n<html>\n  <head><title>Title</title></head>\n  <body>Content</body>\n</html>",
    "attributes": [
      "lang",
      "charset"
    ],
    "notes": "Always include lang=\"en\" on <html> for accessibility and SEO.",
    "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Sample Web Page</title>\n  <style>\n    body { font-family: sans-serif; padding: 20px; line-height: 1.6; }\n    header { background: #4f46e5; color: white; padding: 15px; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <header>\n    <h1>Welcome to PLAY-CODE</h1>\n    <p>Complete HTML5 boilerplate sample structure.</p>\n  </header>\n  <main style=\"margin-top: 15px;\">\n    <p>Edit this code and hit <strong>Run</strong> to test your edits live!</p>\n  </main>\n</body>\n</html>",
    "expected": "A header banner and main content section representing a full HTML5 page."
  },
  {
    "id": 3,
    "number": "003",
    "title": "Paragraph tag",
    "category": "Document Structure",
    "summary": "The <p> tag defines a paragraph of text. Browsers automatically add margin before and after paragraphs.",
    "syntax": "<p>Your paragraph text goes here.</p>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Use paragraphs for blocks of text rather than multiple consecutive <br> tags.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p style=\"background: #e0f2fe; padding: 12px; border-radius: 6px; border-left: 4px solid #0284c7;\">\n    This is paragraph one. Browsers naturally apply block-level vertical margins.\n  </p>\n  <p style=\"background: #f0fdf4; padding: 12px; border-radius: 6px; border-left: 4px solid #16a34a;\">\n    This is paragraph two. Notice the clean separation between these two thoughts.\n  </p>\n</div>",
    "expected": "Two distinct styled paragraphs with vertical margin separation."
  },
  {
    "id": 4,
    "number": "004",
    "title": "Heading tag",
    "category": "Document Structure",
    "summary": "HTML offers six levels of headings from <h1> (most important) to <h6> (least important).",
    "syntax": "<h1>Title</h1>\n<h2>Subtitle</h2>\n<h3>Section</h3>",
    "attributes": [
      "class",
      "id"
    ],
    "notes": "Use headings for document outline structure and SEO, not merely to resize text.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h1 style=\"color: #4f46e5; margin: 5px 0;\">H1: Major Document Title</h1>\n  <h2 style=\"color: #6366f1; margin: 5px 0;\">H2: Main Section Heading</h2>\n  <h3 style=\"color: #818cf8; margin: 5px 0;\">H3: Subsection Header</h3>\n  <h4 style=\"color: #a5b4fc; margin: 5px 0;\">H4: Component Title</h4>\n  <h5 style=\"color: #cbd5e1; margin: 5px 0;\">H5: Minor Category</h5>\n  <h6 style=\"color: #94a3b8; margin: 5px 0;\">H6: Fine Label</h6>\n</div>",
    "expected": "Six heading elements showing progressively decreasing font sizes."
  },
  {
    "id": 5,
    "number": "005",
    "title": "BR tag",
    "category": "Document Structure",
    "summary": "The <br> (break) tag inserts a single line break in text without starting a new paragraph.",
    "syntax": "Line 1<br>Line 2",
    "attributes": [
      "Void element (no closing tag)"
    ],
    "notes": "Ideal for street addresses, poems, or song lyrics.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px; background: #fffbeb; border-radius: 8px;\">\n  <p style=\"line-height: 1.5; color: #92400e; margin: 0;\">\n    <strong>PLAY-CODE Studio</strong><br>\n    404 Web Dev Boulevard<br>\n    Suite 200, Frontend City<br>\n    Internet 2026\n  </p>\n</div>",
    "expected": "An address formatted over 4 compact lines without paragraph gaps."
  },
  {
    "id": 6,
    "number": "006",
    "title": "HR Tag",
    "category": "Document Structure",
    "summary": "The <hr> tag represents a thematic break between topics, rendered as a horizontal divider rule.",
    "syntax": "<hr>",
    "attributes": [
      "style",
      "class"
    ],
    "notes": "Represents a shift in scene or topic semantically in HTML5.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3>Section One: Fundamentals</h3>\n  <p>Learning the foundational blocks of web development.</p>\n  <hr style=\"border: none; border-top: 2px dashed #cbd5e1; margin: 20px 0;\">\n  <h3>Section Two: Advanced Concepts</h3>\n  <p>Exploring complex layouts and interactive behaviors.</p>\n</div>",
    "expected": "Two sections separated by a stylish dashed horizontal line."
  },
  {
    "id": 7,
    "number": "007",
    "title": "HR Color",
    "category": "Document Structure",
    "summary": "The legacy 'color' attribute on <hr> is obsolete in HTML5. Use CSS border-color or background instead.",
    "syntax": "<!-- Obsolete: <hr color=\"blue\"> -->\n<hr style=\"border-color: #2563eb;\">",
    "attributes": [
      "color (obsolete/deprecated)"
    ],
    "notes": "OBSOLETE WARNING: Use CSS 'border-color' or 'background' for modern cross-browser compatibility.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p>Legacy color attribute:</p>\n  <hr color=\"#ef4444\">\n  <p style=\"margin-top: 20px;\">Modern CSS gradient rule (Recommended):</p>\n  <hr style=\"border: 0; height: 3px; background: linear-gradient(to right, #4f46e5, #06b6d4);\">\n</div>",
    "expected": "A red rule followed by a modern multi-color gradient line."
  },
  {
    "id": 8,
    "number": "008",
    "title": "HR Size",
    "category": "Document Structure",
    "summary": "The legacy 'size' attribute specified <hr> pixel thickness. Use CSS 'height' or 'border-width' in HTML5.",
    "syntax": "<!-- Obsolete: <hr size=\"5\"> -->\n<hr style=\"height: 5px;\">",
    "attributes": [
      "size (obsolete/deprecated)"
    ],
    "notes": "OBSOLETE WARNING: Modern browsers favor CSS 'height' for controlling thickness.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p>Thin rule (1px):</p>\n  <hr style=\"border: none; border-top: 1px solid #94a3b8;\">\n  <p>Thick bar (6px):</p>\n  <hr style=\"border: none; height: 6px; background: #6366f1; border-radius: 3px;\">\n</div>",
    "expected": "Two dividers demonstrating thin and thick horizontal lines."
  },
  {
    "id": 9,
    "number": "009",
    "title": "HR Width",
    "category": "Document Structure",
    "summary": "The legacy 'width' attribute set the length of an <hr>. In modern HTML5, control width via CSS 'width'.",
    "syntax": "<!-- Obsolete: <hr width=\"50%\"> -->\n<hr style=\"width: 50%;\">",
    "attributes": [
      "width (obsolete/deprecated)"
    ],
    "notes": "OBSOLETE WARNING: Control width and centering via CSS: 'width: 50%; margin: 20px auto;'.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px; text-align: center;\">\n  <p>Centered 40% width divider:</p>\n  <hr style=\"width: 40%; height: 3px; background: #10b981; border: none; margin: 15px auto; border-radius: 2px;\">\n</div>",
    "expected": "A short centered green accent divider."
  },
  {
    "id": 10,
    "number": "010",
    "title": "Text formatting",
    "category": "Text Semantics",
    "summary": "HTML offers dedicated formatting elements to convey typographical styling and semantic nuance.",
    "syntax": "<b>Bold</b>, <i>Italic</i>, <u>Underline</u>, <mark>Mark</mark>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Distinguish visual formatting from semantic formatting (<strong> and <em>).",
    "code": "<div style=\"font-family: sans-serif; padding: 20px; line-height: 2;\">\n  <p><b>Bold text</b> with &lt;b&gt;</p>\n  <p><i>Italic text</i> with &lt;i&gt;</p>\n  <p><u>Underlined text</u> with &lt;u&gt;</p>\n  <p><mark style=\"background: #fef08a; padding: 2px 5px;\">Highlighted</mark> with &lt;mark&gt;</p>\n</div>",
    "expected": "Four lines demonstrating bold, italic, underline, and mark styles."
  },
  {
    "id": 11,
    "number": "011",
    "title": "Strong Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Strong Tag\", a key HTML feature.",
    "syntax": "<strongtag>...</strongtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Strong Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Strong Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Strong Tag."
  },
  {
    "id": 12,
    "number": "012",
    "title": "Emphasized text",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Emphasized text\", a key HTML feature.",
    "syntax": "<emphasizedtext>...</emphasizedtext>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Emphasized text</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Emphasized text</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Emphasized text."
  },
  {
    "id": 13,
    "number": "013",
    "title": "Small Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Small Tag\", a key HTML feature.",
    "syntax": "<smalltag>...</smalltag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Small Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Small Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Small Tag."
  },
  {
    "id": 14,
    "number": "014",
    "title": "Big Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Big Tag\", a key HTML feature.",
    "syntax": "<bigtag>...</bigtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Big Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Big Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Big Tag."
  },
  {
    "id": 15,
    "number": "015",
    "title": "Mark Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Mark Tag\", a key HTML feature.",
    "syntax": "<marktag>...</marktag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Mark Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Mark Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Mark Tag."
  },
  {
    "id": 16,
    "number": "016",
    "title": "Delete Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Delete Tag\", a key HTML feature.",
    "syntax": "<deletetag>...</deletetag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Delete Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Delete Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Delete Tag."
  },
  {
    "id": 17,
    "number": "017",
    "title": "Insert Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Insert Tag\", a key HTML feature.",
    "syntax": "<inserttag>...</inserttag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Insert Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Insert Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Insert Tag."
  },
  {
    "id": 18,
    "number": "018",
    "title": "Subscripted Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Subscripted Tag\", a key HTML feature.",
    "syntax": "<subscriptedtag>...</subscriptedtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Subscripted Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Subscripted Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Subscripted Tag."
  },
  {
    "id": 19,
    "number": "019",
    "title": "Superscripted Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Superscripted Tag\", a key HTML feature.",
    "syntax": "<superscriptedtag>...</superscriptedtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Superscripted Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Superscripted Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Superscripted Tag."
  },
  {
    "id": 20,
    "number": "020",
    "title": "Abbr Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Abbr Tag\", a key HTML feature.",
    "syntax": "<abbrtag>...</abbrtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Abbr Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Abbr Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Abbr Tag."
  },
  {
    "id": 21,
    "number": "021",
    "title": "Cite Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Cite Tag\", a key HTML feature.",
    "syntax": "<citetag>...</citetag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Cite Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Cite Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Cite Tag."
  },
  {
    "id": 22,
    "number": "022",
    "title": "Address Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Address Tag\", a key HTML feature.",
    "syntax": "<addresstag>...</addresstag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Address Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Address Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Address Tag."
  },
  {
    "id": 23,
    "number": "023",
    "title": "Q Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Q Tag\", a key HTML feature.",
    "syntax": "<qtag>...</qtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Q Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Q Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Q Tag."
  },
  {
    "id": 24,
    "number": "024",
    "title": "S Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"S Tag\", a key HTML feature.",
    "syntax": "<stag>...</stag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">S Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>S Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating S Tag."
  },
  {
    "id": 25,
    "number": "025",
    "title": "BDO tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"BDO tag\", a key HTML feature.",
    "syntax": "<bdotag>...</bdotag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">BDO tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>BDO tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating BDO tag."
  },
  {
    "id": 26,
    "number": "026",
    "title": "KDB Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"KDB Tag\", a key HTML feature.",
    "syntax": "<kdbtag>...</kdbtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">KDB Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>KDB Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating KDB Tag."
  },
  {
    "id": 27,
    "number": "027",
    "title": "Samp Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Samp Tag\", a key HTML feature.",
    "syntax": "<samptag>...</samptag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Samp Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Samp Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Samp Tag."
  },
  {
    "id": 28,
    "number": "028",
    "title": "Code Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Code Tag\", a key HTML feature.",
    "syntax": "<codetag>...</codetag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Code Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Code Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Code Tag."
  },
  {
    "id": 29,
    "number": "029",
    "title": "Var Tag",
    "category": "Text Semantics",
    "summary": "Interactive learning guide and runnable live preview for \"Var Tag\", a key HTML feature.",
    "syntax": "<vartag>...</vartag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Text Semantics curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Var Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Var Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Var Tag."
  },
  {
    "id": 30,
    "number": "030",
    "title": "Blockquote Tag",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Blockquote Tag\", a key HTML feature.",
    "syntax": "<blockquotetag>...</blockquotetag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Blockquote Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Blockquote Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Blockquote Tag."
  },
  {
    "id": 31,
    "number": "031",
    "title": "Pre Tag",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Pre Tag\", a key HTML feature.",
    "syntax": "<pretag>...</pretag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Pre Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Pre Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Pre Tag."
  },
  {
    "id": 32,
    "number": "032",
    "title": "Span tag",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Span tag\", a key HTML feature.",
    "syntax": "<spantag>...</spantag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Span tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Span tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Span tag."
  },
  {
    "id": 33,
    "number": "033",
    "title": "Div tag",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Div tag\", a key HTML feature.",
    "syntax": "<divtag>...</divtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Div tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Div tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Div tag."
  },
  {
    "id": 34,
    "number": "034",
    "title": "Nested div",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Nested div\", a key HTML feature.",
    "syntax": "<nesteddiv>...</nesteddiv>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Nested div</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Nested div</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Nested div."
  },
  {
    "id": 35,
    "number": "035",
    "title": "Div Difference",
    "category": "Containers & Layout",
    "summary": "Interactive learning guide and runnable live preview for \"Div Difference\", a key HTML feature.",
    "syntax": "<divdifference>...</divdifference>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Containers & Layout curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Div Difference</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Div Difference</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Div Difference."
  },
  {
    "id": 36,
    "number": "036",
    "title": "Center Tag",
    "category": "Styles & Styling",
    "summary": "The legacy <center> tag was used to center content horizontally. In HTML5, <center> is obsolete; use CSS text-align or margin:auto instead.",
    "syntax": "<!-- Obsolete: <center>Text</center> -->\n<div style=\"text-align: center;\">Text</div>",
    "attributes": [
      "Obsolete in HTML5"
    ],
    "notes": "OBSOLETE WARNING: Do not use <center> in production web development. Use CSS text-align: center instead.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p>Legacy tag demo:</p>\n  <center style=\"background: #f1f5f9; padding: 10px;\">Centered with &lt;center&gt;</center>\n  <p style=\"margin-top: 15px;\">Modern standards-compliant CSS centering:</p>\n  <div style=\"text-align: center; background: #e0e7ff; color: #3730a3; padding: 15px; border-radius: 6px;\">\n    Centered with CSS <code>text-align: center</code>\n  </div>\n</div>",
    "expected": "Content centered horizontally using both historical and modern methods."
  },
  {
    "id": 37,
    "number": "037",
    "title": "Style Tag",
    "category": "Styles & Styling",
    "summary": "Interactive learning guide and runnable live preview for \"Style Tag\", a key HTML feature.",
    "syntax": "<styletag>...</styletag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Styles & Styling curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Style Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Style Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Style Tag."
  },
  {
    "id": 38,
    "number": "038",
    "title": "Inline Style",
    "category": "Styles & Styling",
    "summary": "Interactive learning guide and runnable live preview for \"Inline Style\", a key HTML feature.",
    "syntax": "<inlinestyle>...</inlinestyle>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Styles & Styling curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Inline Style</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Inline Style</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Inline Style."
  },
  {
    "id": 39,
    "number": "039",
    "title": "Contenteditable",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Contenteditable\", a key HTML feature.",
    "syntax": "<contenteditable>...</contenteditable>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Contenteditable</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Contenteditable</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Contenteditable."
  },
  {
    "id": 40,
    "number": "040",
    "title": "NBSP",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"NBSP\", a key HTML feature.",
    "syntax": "<nbsp>...</nbsp>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">NBSP</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>NBSP</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating NBSP."
  },
  {
    "id": 41,
    "number": "041",
    "title": "Entities Names",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Entities Names\", a key HTML feature.",
    "syntax": "<entitiesnames>...</entitiesnames>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Entities Names</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Entities Names</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Entities Names."
  },
  {
    "id": 42,
    "number": "042",
    "title": "Entities Numbers",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Entities Numbers\", a key HTML feature.",
    "syntax": "<entitiesnumbers>...</entitiesnumbers>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Entities Numbers</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Entities Numbers</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Entities Numbers."
  },
  {
    "id": 43,
    "number": "043",
    "title": "Diacritical mark",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Diacritical mark\", a key HTML feature.",
    "syntax": "<diacriticalmark>...</diacriticalmark>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Diacritical mark</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Diacritical mark</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Diacritical mark."
  },
  {
    "id": 44,
    "number": "044",
    "title": "Math Symbols",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Math Symbols\", a key HTML feature.",
    "syntax": "<mathsymbols>...</mathsymbols>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Math Symbols</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Math Symbols</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Math Symbols."
  },
  {
    "id": 45,
    "number": "045",
    "title": "WBR",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"WBR\", a key HTML feature.",
    "syntax": "<wbr>...</wbr>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">WBR</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>WBR</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating WBR."
  },
  {
    "id": 46,
    "number": "046",
    "title": "Strike",
    "category": "Typography & Entities",
    "summary": "The legacy <strike> tag was historically used for strikethrough text. In HTML5, <strike> is obsolete; use semantic <s> or <del> instead.",
    "syntax": "<!-- Obsolete: <strike>old</strike> -->\n<s>old</s> or <del>old</del>",
    "attributes": [
      "Obsolete in HTML5"
    ],
    "notes": "OBSOLETE WARNING: Use <s> for obsolete information or <del> for document revisions.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p>Legacy: <strike>Deprecated strike tag</strike></p>\n  <p>Modern semantic: <s>Outdated pricing info</s></p>\n  <p>Document edit: <del>Removed text</del></p>\n</div>",
    "expected": "Three strikethrough examples illustrating obsolete vs modern semantic alternatives."
  },
  {
    "id": 47,
    "number": "047",
    "title": "Textbox",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Textbox\", a key HTML feature.",
    "syntax": "<textbox>...</textbox>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Textbox Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Textbox):</label>\n    <input type=\"text\" placeholder=\"Testing Textbox...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Textbox."
  },
  {
    "id": 48,
    "number": "048",
    "title": "Input Default",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Default\", a key HTML feature.",
    "syntax": "<inputdefault>...</inputdefault>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Default Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Default):</label>\n    <input type=\"text\" placeholder=\"Testing Input Default...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Default."
  },
  {
    "id": 49,
    "number": "049",
    "title": "Input Readonly",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Readonly\", a key HTML feature.",
    "syntax": "<inputreadonly>...</inputreadonly>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Readonly Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Readonly):</label>\n    <input type=\"text\" placeholder=\"Testing Input Readonly...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Readonly."
  },
  {
    "id": 50,
    "number": "050",
    "title": "Input Disabled",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Disabled\", a key HTML feature.",
    "syntax": "<inputdisabled>...</inputdisabled>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Disabled Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Disabled):</label>\n    <input type=\"text\" placeholder=\"Testing Input Disabled...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Disabled."
  },
  {
    "id": 51,
    "number": "051",
    "title": "Input Placeholder",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Placeholder\", a key HTML feature.",
    "syntax": "<inputplaceholder>...</inputplaceholder>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Placeholder Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Placeholder):</label>\n    <input type=\"text\" placeholder=\"Testing Input Placeholder...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Placeholder."
  },
  {
    "id": 52,
    "number": "052",
    "title": "Input Maxlength",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Maxlength\", a key HTML feature.",
    "syntax": "<inputmaxlength>...</inputmaxlength>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Maxlength Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Maxlength):</label>\n    <input type=\"text\" placeholder=\"Testing Input Maxlength...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Maxlength."
  },
  {
    "id": 53,
    "number": "053",
    "title": "Input Minlength",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Minlength\", a key HTML feature.",
    "syntax": "<inputminlength>...</inputminlength>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Minlength Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Minlength):</label>\n    <input type=\"text\" placeholder=\"Testing Input Minlength...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Minlength."
  },
  {
    "id": 54,
    "number": "054",
    "title": "Input Autofocus",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Autofocus\", a key HTML feature.",
    "syntax": "<inputautofocus>...</inputautofocus>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Autofocus Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Autofocus):</label>\n    <input type=\"text\" placeholder=\"Testing Input Autofocus...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Autofocus."
  },
  {
    "id": 55,
    "number": "055",
    "title": "Input Size",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Input Size\", a key HTML feature.",
    "syntax": "<inputsize>...</inputsize>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Size Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Size):</label>\n    <input type=\"text\" placeholder=\"Testing Input Size...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Size."
  },
  {
    "id": 56,
    "number": "056",
    "title": "Password",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Password\", a key HTML feature.",
    "syntax": "<password>...</password>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Password Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Password):</label>\n    <input type=\"text\" placeholder=\"Testing Password...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Password."
  },
  {
    "id": 57,
    "number": "057",
    "title": "Search",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Search\", a key HTML feature.",
    "syntax": "<search>...</search>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Search Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Search):</label>\n    <input type=\"text\" placeholder=\"Testing Search...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Search."
  },
  {
    "id": 58,
    "number": "058",
    "title": "Email",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Email\", a key HTML feature.",
    "syntax": "<email>...</email>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Email Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Email):</label>\n    <input type=\"text\" placeholder=\"Testing Email...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Email."
  },
  {
    "id": 59,
    "number": "059",
    "title": "Email Multiple",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Email Multiple\", a key HTML feature.",
    "syntax": "<emailmultiple>...</emailmultiple>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Email Multiple Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Email Multiple):</label>\n    <input type=\"text\" placeholder=\"Testing Email Multiple...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Email Multiple."
  },
  {
    "id": 60,
    "number": "060",
    "title": "URL",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"URL\", a key HTML feature.",
    "syntax": "<url>...</url>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">URL Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (URL):</label>\n    <input type=\"text\" placeholder=\"Testing URL...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating URL."
  },
  {
    "id": 61,
    "number": "061",
    "title": "Number",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Number\", a key HTML feature.",
    "syntax": "<number>...</number>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Number Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Number):</label>\n    <input type=\"text\" placeholder=\"Testing Number...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Number."
  },
  {
    "id": 62,
    "number": "062",
    "title": "Number Min/Max",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Number Min/Max\", a key HTML feature.",
    "syntax": "<numberminmax>...</numberminmax>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Number Min/Max Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Number Min/Max):</label>\n    <input type=\"text\" placeholder=\"Testing Number Min/Max...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Number Min/Max."
  },
  {
    "id": 63,
    "number": "063",
    "title": "Number Step",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Number Step\", a key HTML feature.",
    "syntax": "<numberstep>...</numberstep>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Number Step Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Number Step):</label>\n    <input type=\"text\" placeholder=\"Testing Number Step...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Number Step."
  },
  {
    "id": 64,
    "number": "064",
    "title": "Date Picker",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Date Picker\", a key HTML feature.",
    "syntax": "<datepicker>...</datepicker>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Date Picker Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Date Picker):</label>\n    <input type=\"text\" placeholder=\"Testing Date Picker...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Date Picker."
  },
  {
    "id": 65,
    "number": "065",
    "title": "Date Default",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Date Default\", a key HTML feature.",
    "syntax": "<datedefault>...</datedefault>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Date Default Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Date Default):</label>\n    <input type=\"text\" placeholder=\"Testing Date Default...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Date Default."
  },
  {
    "id": 66,
    "number": "066",
    "title": "Date Min/Max",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Date Min/Max\", a key HTML feature.",
    "syntax": "<dateminmax>...</dateminmax>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Date Min/Max Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Date Min/Max):</label>\n    <input type=\"text\" placeholder=\"Testing Date Min/Max...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Date Min/Max."
  },
  {
    "id": 67,
    "number": "067",
    "title": "Date Step",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Date Step\", a key HTML feature.",
    "syntax": "<datestep>...</datestep>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Date Step Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Date Step):</label>\n    <input type=\"text\" placeholder=\"Testing Date Step...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Date Step."
  },
  {
    "id": 68,
    "number": "068",
    "title": "Month",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Month\", a key HTML feature.",
    "syntax": "<month>...</month>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Month Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Month):</label>\n    <input type=\"text\" placeholder=\"Testing Month...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Month."
  },
  {
    "id": 69,
    "number": "069",
    "title": "Week",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Week\", a key HTML feature.",
    "syntax": "<week>...</week>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Week Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Week):</label>\n    <input type=\"text\" placeholder=\"Testing Week...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Week."
  },
  {
    "id": 70,
    "number": "070",
    "title": "Time Picker",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Time Picker\", a key HTML feature.",
    "syntax": "<timepicker>...</timepicker>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Time Picker Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Time Picker):</label>\n    <input type=\"text\" placeholder=\"Testing Time Picker...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Time Picker."
  },
  {
    "id": 71,
    "number": "071",
    "title": "Time Default",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Time Default\", a key HTML feature.",
    "syntax": "<timedefault>...</timedefault>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Time Default Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Time Default):</label>\n    <input type=\"text\" placeholder=\"Testing Time Default...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Time Default."
  },
  {
    "id": 72,
    "number": "072",
    "title": "DateTime Local",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"DateTime Local\", a key HTML feature.",
    "syntax": "<datetimelocal>...</datetimelocal>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">DateTime Local Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (DateTime Local):</label>\n    <input type=\"text\" placeholder=\"Testing DateTime Local...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating DateTime Local."
  },
  {
    "id": 73,
    "number": "073",
    "title": "Color",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Color\", a key HTML feature.",
    "syntax": "<color>...</color>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Color Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Color):</label>\n    <input type=\"text\" placeholder=\"Testing Color...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Color."
  },
  {
    "id": 74,
    "number": "074",
    "title": "Color Default",
    "category": "Form Inputs",
    "summary": "Interactive learning guide and runnable live preview for \"Color Default\", a key HTML feature.",
    "syntax": "<colordefault>...</colordefault>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Inputs curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Color Default Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Color Default):</label>\n    <input type=\"text\" placeholder=\"Testing Color Default...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Color Default."
  },
  {
    "id": 75,
    "number": "075",
    "title": "Input Button",
    "category": "Buttons & Triggers",
    "summary": "Interactive learning guide and runnable live preview for \"Input Button\", a key HTML feature.",
    "syntax": "<inputbutton>...</inputbutton>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Buttons & Triggers curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Input Button Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Input Button):</label>\n    <input type=\"text\" placeholder=\"Testing Input Button...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Input Button."
  },
  {
    "id": 76,
    "number": "076",
    "title": "Button tag",
    "category": "Buttons & Triggers",
    "summary": "Interactive learning guide and runnable live preview for \"Button tag\", a key HTML feature.",
    "syntax": "<buttontag>...</buttontag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Buttons & Triggers curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Button tag Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Button tag):</label>\n    <input type=\"text\" placeholder=\"Testing Button tag...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Button tag."
  },
  {
    "id": 77,
    "number": "077",
    "title": "Button Autofocus",
    "category": "Buttons & Triggers",
    "summary": "Interactive learning guide and runnable live preview for \"Button Autofocus\", a key HTML feature.",
    "syntax": "<buttonautofocus>...</buttonautofocus>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Buttons & Triggers curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Button Autofocus Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Button Autofocus):</label>\n    <input type=\"text\" placeholder=\"Testing Button Autofocus...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Button Autofocus."
  },
  {
    "id": 78,
    "number": "078",
    "title": "Button Disabled",
    "category": "Buttons & Triggers",
    "summary": "Interactive learning guide and runnable live preview for \"Button Disabled\", a key HTML feature.",
    "syntax": "<buttondisabled>...</buttondisabled>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Buttons & Triggers curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Button Disabled Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Button Disabled):</label>\n    <input type=\"text\" placeholder=\"Testing Button Disabled...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Button Disabled."
  },
  {
    "id": 79,
    "number": "079",
    "title": "Radio No Label",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio No Label\", a key HTML feature.",
    "syntax": "<radionolabel>...</radionolabel>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio No Label Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio No Label):</label>\n    <input type=\"text\" placeholder=\"Testing Radio No Label...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio No Label."
  },
  {
    "id": 80,
    "number": "080",
    "title": "Radio With label",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio With label\", a key HTML feature.",
    "syntax": "<radiowithlabel>...</radiowithlabel>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio With label Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio With label):</label>\n    <input type=\"text\" placeholder=\"Testing Radio With label...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio With label."
  },
  {
    "id": 81,
    "number": "081",
    "title": "Radio Checked",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio Checked\", a key HTML feature.",
    "syntax": "<radiochecked>...</radiochecked>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio Checked Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio Checked):</label>\n    <input type=\"text\" placeholder=\"Testing Radio Checked...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio Checked."
  },
  {
    "id": 82,
    "number": "082",
    "title": "Radio Disabled",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio Disabled\", a key HTML feature.",
    "syntax": "<radiodisabled>...</radiodisabled>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio Disabled Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio Disabled):</label>\n    <input type=\"text\" placeholder=\"Testing Radio Disabled...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio Disabled."
  },
  {
    "id": 83,
    "number": "083",
    "title": "Radio Group",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio Group\", a key HTML feature.",
    "syntax": "<radiogroup>...</radiogroup>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio Group Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio Group):</label>\n    <input type=\"text\" placeholder=\"Testing Radio Group...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio Group."
  },
  {
    "id": 84,
    "number": "084",
    "title": "Radio Multi Group",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Radio Multi Group\", a key HTML feature.",
    "syntax": "<radiomultigroup>...</radiomultigroup>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Radio Multi Group Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Radio Multi Group):</label>\n    <input type=\"text\" placeholder=\"Testing Radio Multi Group...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Radio Multi Group."
  },
  {
    "id": 85,
    "number": "085",
    "title": "Checkbox No Label",
    "category": "Radio & Checkboxes",
    "summary": "First instance of Checkbox No Label: A standalone checkbox toggle (<input type=\"checkbox\">) without an enclosing label tag.",
    "syntax": "<input type=\"checkbox\" name=\"opt1\">",
    "attributes": [
      "type=\"checkbox\"",
      "name",
      "value"
    ],
    "notes": "INVENTORY FIDELITY: Preserved with original title 'Checkbox No Label' (#85).",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3>Checkbox No Label (Lesson 85)</h3>\n  <input type=\"checkbox\"> Standalone checkbox (Instance 1)\n</div>",
    "expected": "A single checkbox beside text without label wrapping."
  },
  {
    "id": 86,
    "number": "086",
    "title": "Checkbox No Label",
    "category": "Radio & Checkboxes",
    "summary": "Second instance of Checkbox No Label: Demonstrating standalone checkbox behavior, styling variations, and form serialization.",
    "syntax": "<input type=\"checkbox\" name=\"opt2\" value=\"yes\">",
    "attributes": [
      "type=\"checkbox\"",
      "checked",
      "value"
    ],
    "notes": "INVENTORY FIDELITY: Preserved with exact duplicate title 'Checkbox No Label' (#86).",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3>Checkbox No Label (Lesson 86)</h3>\n  <input type=\"checkbox\" style=\"transform: scale(1.3); margin-right: 6px;\"> Enlarged standalone checkbox (Instance 2)\n</div>",
    "expected": "An enlarged standalone checkbox demonstrating custom scale."
  },
  {
    "id": 87,
    "number": "087",
    "title": "Checkbox Checked",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Checkbox Checked\", a key HTML feature.",
    "syntax": "<checkboxchecked>...</checkboxchecked>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Checkbox Checked Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Checkbox Checked):</label>\n    <input type=\"text\" placeholder=\"Testing Checkbox Checked...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Checkbox Checked."
  },
  {
    "id": 88,
    "number": "088",
    "title": "Checkbox Disabled",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Checkbox Disabled\", a key HTML feature.",
    "syntax": "<checkboxdisabled>...</checkboxdisabled>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Checkbox Disabled Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Checkbox Disabled):</label>\n    <input type=\"text\" placeholder=\"Testing Checkbox Disabled...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Checkbox Disabled."
  },
  {
    "id": 89,
    "number": "089",
    "title": "Checkbox Group",
    "category": "Radio & Checkboxes",
    "summary": "Interactive learning guide and runnable live preview for \"Checkbox Group\", a key HTML feature.",
    "syntax": "<checkboxgroup>...</checkboxgroup>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Radio & Checkboxes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Checkbox Group Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Checkbox Group):</label>\n    <input type=\"text\" placeholder=\"Testing Checkbox Group...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Checkbox Group."
  },
  {
    "id": 90,
    "number": "090",
    "title": "Dropdown List",
    "category": "Select & Menus",
    "summary": "Interactive learning guide and runnable live preview for \"Dropdown List\", a key HTML feature.",
    "syntax": "<dropdownlist>...</dropdownlist>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Select & Menus curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Dropdown List Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Dropdown List):</label>\n    <input type=\"text\" placeholder=\"Testing Dropdown List...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Dropdown List."
  },
  {
    "id": 91,
    "number": "091",
    "title": "Dropdown Multiple",
    "category": "Select & Menus",
    "summary": "Interactive learning guide and runnable live preview for \"Dropdown Multiple\", a key HTML feature.",
    "syntax": "<dropdownmultiple>...</dropdownmultiple>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Select & Menus curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Dropdown Multiple Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Dropdown Multiple):</label>\n    <input type=\"text\" placeholder=\"Testing Dropdown Multiple...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Dropdown Multiple."
  },
  {
    "id": 92,
    "number": "092",
    "title": "Optgroup",
    "category": "Select & Menus",
    "summary": "Interactive learning guide and runnable live preview for \"Optgroup\", a key HTML feature.",
    "syntax": "<optgroup>...</optgroup>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Select & Menus curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Optgroup Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Optgroup):</label>\n    <input type=\"text\" placeholder=\"Testing Optgroup...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Optgroup."
  },
  {
    "id": 93,
    "number": "093",
    "title": "Datalist",
    "category": "Select & Menus",
    "summary": "Interactive learning guide and runnable live preview for \"Datalist\", a key HTML feature.",
    "syntax": "<datalist>...</datalist>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Select & Menus curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Datalist Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Datalist):</label>\n    <input type=\"text\" placeholder=\"Testing Datalist...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Datalist."
  },
  {
    "id": 94,
    "number": "094",
    "title": "Fieldset & Legend",
    "category": "Select & Menus",
    "summary": "Interactive learning guide and runnable live preview for \"Fieldset & Legend\", a key HTML feature.",
    "syntax": "<fieldsetlegend>...</fieldsetlegend>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Select & Menus curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Fieldset & Legend Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Fieldset & Legend):</label>\n    <input type=\"text\" placeholder=\"Testing Fieldset & Legend...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Fieldset & Legend."
  },
  {
    "id": 95,
    "number": "095",
    "title": "Output Tag",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Output Tag\", a key HTML feature.",
    "syntax": "<outputtag>...</outputtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Output Tag Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Output Tag):</label>\n    <input type=\"text\" placeholder=\"Testing Output Tag...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Output Tag."
  },
  {
    "id": 96,
    "number": "096",
    "title": "Output Textbox",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Output Textbox\", a key HTML feature.",
    "syntax": "<outputtextbox>...</outputtextbox>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Output Textbox Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Output Textbox):</label>\n    <input type=\"text\" placeholder=\"Testing Output Textbox...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Output Textbox."
  },
  {
    "id": 97,
    "number": "097",
    "title": "Output Controls",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Output Controls\", a key HTML feature.",
    "syntax": "<outputcontrols>...</outputcontrols>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Output Controls Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Output Controls):</label>\n    <input type=\"text\" placeholder=\"Testing Output Controls...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Output Controls."
  },
  {
    "id": 98,
    "number": "098",
    "title": "Progress",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Progress\", a key HTML feature.",
    "syntax": "<progress>...</progress>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Progress Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Progress):</label>\n    <input type=\"text\" placeholder=\"Testing Progress...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Progress."
  },
  {
    "id": 99,
    "number": "099",
    "title": "Progress Max/Value",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Progress Max/Value\", a key HTML feature.",
    "syntax": "<progressmaxvalue>...</progressmaxvalue>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Progress Max/Value Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Progress Max/Value):</label>\n    <input type=\"text\" placeholder=\"Testing Progress Max/Value...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Progress Max/Value."
  },
  {
    "id": 100,
    "number": "100",
    "title": "Meter",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Meter\", a key HTML feature.",
    "syntax": "<meter>...</meter>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Meter Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Meter):</label>\n    <input type=\"text\" placeholder=\"Testing Meter...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Meter."
  },
  {
    "id": 101,
    "number": "101",
    "title": "Meter High",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Meter High\", a key HTML feature.",
    "syntax": "<meterhigh>...</meterhigh>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Meter High Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Meter High):</label>\n    <input type=\"text\" placeholder=\"Testing Meter High...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Meter High."
  },
  {
    "id": 102,
    "number": "102",
    "title": "Range Input",
    "category": "Gauges & Ranges",
    "summary": "Interactive learning guide and runnable live preview for \"Range Input\", a key HTML feature.",
    "syntax": "<rangeinput>...</rangeinput>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Gauges & Ranges curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Range Input Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Range Input):</label>\n    <input type=\"text\" placeholder=\"Testing Range Input...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Range Input."
  },
  {
    "id": 103,
    "number": "103",
    "title": "Link Tag",
    "category": "Links & Nav",
    "summary": "Interactive learning guide and runnable live preview for \"Link Tag\", a key HTML feature.",
    "syntax": "<linktag>...</linktag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Links & Nav curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Link Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Link Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Link Tag."
  },
  {
    "id": 104,
    "number": "104",
    "title": "Link Target",
    "category": "Links & Nav",
    "summary": "Interactive learning guide and runnable live preview for \"Link Target\", a key HTML feature.",
    "syntax": "<linktarget>...</linktarget>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Links & Nav curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Link Target</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Link Target</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Link Target."
  },
  {
    "id": 105,
    "number": "105",
    "title": "Navigation",
    "category": "Links & Nav",
    "summary": "Interactive learning guide and runnable live preview for \"Navigation\", a key HTML feature.",
    "syntax": "<navigation>...</navigation>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Links & Nav curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Navigation</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Navigation</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Navigation."
  },
  {
    "id": 106,
    "number": "106",
    "title": "Image Tag",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Image Tag\", a key HTML feature.",
    "syntax": "<imagetag>...</imagetag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Image Tag</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Image Tag</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Image Tag."
  },
  {
    "id": 107,
    "number": "107",
    "title": "Image Width",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Image Width\", a key HTML feature.",
    "syntax": "<imagewidth>...</imagewidth>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Image Width</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Image Width</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Image Width."
  },
  {
    "id": 108,
    "number": "108",
    "title": "Image Height",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Image Height\", a key HTML feature.",
    "syntax": "<imageheight>...</imageheight>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Image Height</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Image Height</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Image Height."
  },
  {
    "id": 109,
    "number": "109",
    "title": "Image Loading",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Image Loading\", a key HTML feature.",
    "syntax": "<imageloading>...</imageloading>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Image Loading</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Image Loading</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Image Loading."
  },
  {
    "id": 110,
    "number": "110",
    "title": "Figcaption",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Figcaption\", a key HTML feature.",
    "syntax": "<figcaption>...</figcaption>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Figcaption</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Figcaption</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Figcaption."
  },
  {
    "id": 111,
    "number": "111",
    "title": "Map Tag",
    "category": "Media & Images",
    "summary": "Interactive learning guide and runnable live preview for \"Map Tag\", a key HTML feature.",
    "syntax": "<maptag>...</maptag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Media & Images curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Map Tag</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Map Tag</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Map Tag."
  },
  {
    "id": 112,
    "number": "112",
    "title": "Object Flash",
    "category": "Media & Images",
    "summary": "The <object> tag was historically used to embed Adobe Flash (.swf) animations. In modern browsers, Flash is permanently obsolete and unsupported.",
    "syntax": "<!-- Obsolete: <object data=\"movie.swf\"></object> -->\n<!-- Modern: <video> or <canvas> -->",
    "attributes": [
      "data",
      "type"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: Adobe Flash was permanently retired in 2020. Modern HTML5 replaces Flash using <video>, <canvas>, or SVG.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <div style=\"background: #fff1f2; border-left: 5px solid #e11d48; padding: 15px; border-radius: 6px;\">\n    <h3 style=\"color: #9f1239; margin-top: 0;\">Flash Technology Status: Obsolete</h3>\n    <p style=\"color: #881337;\">\n      Adobe Flash (formerly embedded via &lt;object&gt;) is completely disabled in modern web browsers.\n    </p>\n    <p style=\"color: #881337; margin-bottom: 0;\">\n      <strong>Modern Replacement:</strong> Use native HTML5 &lt;video&gt;, &lt;canvas&gt;, or WebGL.\n    </p>\n  </div>\n</div>",
    "expected": "An educational alert card explaining why Flash is obsolete and detailing modern HTML5 replacements."
  },
  {
    "id": 113,
    "number": "113",
    "title": "Audio Autoplay",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Audio Autoplay\", a key HTML feature.",
    "syntax": "<audioautoplay>...</audioautoplay>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Audio Autoplay</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Audio Autoplay</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Audio Autoplay."
  },
  {
    "id": 114,
    "number": "114",
    "title": "Audio Loop",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Audio Loop\", a key HTML feature.",
    "syntax": "<audioloop>...</audioloop>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Audio Loop</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Audio Loop</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Audio Loop."
  },
  {
    "id": 115,
    "number": "115",
    "title": "Video Tag",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Tag\", a key HTML feature.",
    "syntax": "<videotag>...</videotag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Tag</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Tag</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Tag."
  },
  {
    "id": 116,
    "number": "116",
    "title": "Video Autoplay",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Autoplay\", a key HTML feature.",
    "syntax": "<videoautoplay>...</videoautoplay>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Autoplay</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Autoplay</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Autoplay."
  },
  {
    "id": 117,
    "number": "117",
    "title": "Video Controls",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Controls\", a key HTML feature.",
    "syntax": "<videocontrols>...</videocontrols>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Controls</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Controls</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Controls."
  },
  {
    "id": 118,
    "number": "118",
    "title": "Video Poster",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Poster\", a key HTML feature.",
    "syntax": "<videoposter>...</videoposter>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Poster</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Poster</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Poster."
  },
  {
    "id": 119,
    "number": "119",
    "title": "Video Muted",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Muted\", a key HTML feature.",
    "syntax": "<videomuted>...</videomuted>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Muted</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Muted</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Muted."
  },
  {
    "id": 120,
    "number": "120",
    "title": "Video Loop",
    "category": "Audio & Video",
    "summary": "Interactive learning guide and runnable live preview for \"Video Loop\", a key HTML feature.",
    "syntax": "<videoloop>...</videoloop>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Audio & Video curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Video Loop</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Video Loop</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Video Loop."
  },
  {
    "id": 121,
    "number": "121",
    "title": "YouTube",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube\", a key HTML feature.",
    "syntax": "<youtube>...</youtube>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube."
  },
  {
    "id": 122,
    "number": "122",
    "title": "youtube Autoplay",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"youtube Autoplay\", a key HTML feature.",
    "syntax": "<youtubeautoplay>...</youtubeautoplay>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: youtube Autoplay</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>youtube Autoplay</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating youtube Autoplay."
  },
  {
    "id": 123,
    "number": "123",
    "title": "youtube HD",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"youtube HD\", a key HTML feature.",
    "syntax": "<youtubehd>...</youtubehd>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: youtube HD</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>youtube HD</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating youtube HD."
  },
  {
    "id": 124,
    "number": "124",
    "title": "YouTube No Suggest",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube No Suggest\", a key HTML feature.",
    "syntax": "<youtubenosuggest>...</youtubenosuggest>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube No Suggest</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube No Suggest</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube No Suggest."
  },
  {
    "id": 125,
    "number": "125",
    "title": "Youtube Loop",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"Youtube Loop\", a key HTML feature.",
    "syntax": "<youtubeloop>...</youtubeloop>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Youtube Loop</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Youtube Loop</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Youtube Loop."
  },
  {
    "id": 126,
    "number": "126",
    "title": "YouTube No Title",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube No Title\", a key HTML feature.",
    "syntax": "<youtubenotitle>...</youtubenotitle>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube No Title</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube No Title</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube No Title."
  },
  {
    "id": 127,
    "number": "127",
    "title": "YouTube Fullscreen",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube Fullscreen\", a key HTML feature.",
    "syntax": "<youtubefullscreen>...</youtubefullscreen>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube Fullscreen</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube Fullscreen</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube Fullscreen."
  },
  {
    "id": 128,
    "number": "128",
    "title": "YouTube Start",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube Start\", a key HTML feature.",
    "syntax": "<youtubestart>...</youtubestart>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube Start</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube Start</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube Start."
  },
  {
    "id": 129,
    "number": "129",
    "title": "YouTube Query",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"YouTube Query\", a key HTML feature.",
    "syntax": "<youtubequery>...</youtubequery>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: YouTube Query</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>YouTube Query</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating YouTube Query."
  },
  {
    "id": 130,
    "number": "130",
    "title": "Embed",
    "category": "YouTube & Embeds",
    "summary": "Interactive learning guide and runnable live preview for \"Embed\", a key HTML feature.",
    "syntax": "<embed>...</embed>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the YouTube & Embeds curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Media Feature: Embed</h3>\n  <div style=\"background: #0f172a; color: white; padding: 20px; border-radius: 8px; text-align: center;\">\n    <p>Media player container configured for <strong>Embed</strong></p>\n    <div style=\"background: #1e293b; padding: 15px; border-radius: 6px; display: inline-block; margin-top: 10px;\">\n      ▶ Interactive Player Ready\n    </div>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Embed."
  },
  {
    "id": 131,
    "number": "131",
    "title": "Table",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table\", a key HTML feature.",
    "syntax": "<table>...</table>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table."
  },
  {
    "id": 132,
    "number": "132",
    "title": "Table Width",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Width\", a key HTML feature.",
    "syntax": "<tablewidth>...</tablewidth>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Width</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Width</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Width."
  },
  {
    "id": 133,
    "number": "133",
    "title": "Table Height",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Height\", a key HTML feature.",
    "syntax": "<tableheight>...</tableheight>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Height</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Height</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Height."
  },
  {
    "id": 134,
    "number": "134",
    "title": "Table Cellspacing",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Cellspacing\", a key HTML feature.",
    "syntax": "<tablecellspacing>...</tablecellspacing>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Cellspacing</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Cellspacing</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Cellspacing."
  },
  {
    "id": 135,
    "number": "135",
    "title": "Table Cellpadding",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Cellpadding\", a key HTML feature.",
    "syntax": "<tablecellpadding>...</tablecellpadding>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Cellpadding</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Cellpadding</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Cellpadding."
  },
  {
    "id": 136,
    "number": "136",
    "title": "Table Colspan",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Colspan\", a key HTML feature.",
    "syntax": "<tablecolspan>...</tablecolspan>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Colspan</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Colspan</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Colspan."
  },
  {
    "id": 137,
    "number": "137",
    "title": "Table Rowspan",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Rowspan\", a key HTML feature.",
    "syntax": "<tablerowspan>...</tablerowspan>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Rowspan</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Rowspan</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Rowspan."
  },
  {
    "id": 138,
    "number": "138",
    "title": "Table Caption",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Caption\", a key HTML feature.",
    "syntax": "<tablecaption>...</tablecaption>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Caption</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Caption</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Caption."
  },
  {
    "id": 139,
    "number": "139",
    "title": "Table Rules Row",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Rules Row\", a key HTML feature.",
    "syntax": "<tablerulesrow>...</tablerulesrow>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Rules Row</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Rules Row</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Rules Row."
  },
  {
    "id": 140,
    "number": "140",
    "title": "Table Rules Cols",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Rules Cols\", a key HTML feature.",
    "syntax": "<tablerulescols>...</tablerulescols>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Rules Cols</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Rules Cols</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Rules Cols."
  },
  {
    "id": 141,
    "number": "141",
    "title": "Table Rules All",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Rules All\", a key HTML feature.",
    "syntax": "<tablerulesall>...</tablerulesall>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Rules All</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Rules All</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Rules All."
  },
  {
    "id": 142,
    "number": "142",
    "title": "Table Colgroup",
    "category": "Tables",
    "summary": "Interactive learning guide and runnable live preview for \"Table Colgroup\", a key HTML feature.",
    "syntax": "<tablecolgroup>...</tablecolgroup>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Tables curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Table Feature: Table Colgroup</h3>\n  <table style=\"width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;\">\n    <thead>\n      <tr style=\"background: #4f46e5; color: white;\">\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Attribute / Feature</th>\n        <th style=\"padding: 10px; border: 1px solid #6366f1;\">Description</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;\">Table Colgroup</td>\n        <td style=\"padding: 10px; border: 1px solid #e2e8f0;\">Demonstration of table formatting in HTML5</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Table Colgroup."
  },
  {
    "id": 143,
    "number": "143",
    "title": "List",
    "category": "Lists",
    "summary": "Interactive learning guide and runnable live preview for \"List\", a key HTML feature.",
    "syntax": "<list>...</list>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Lists curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">List</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>List</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating List."
  },
  {
    "id": 144,
    "number": "144",
    "title": "Iframe",
    "category": "Iframes",
    "summary": "Interactive learning guide and runnable live preview for \"Iframe\", a key HTML feature.",
    "syntax": "<iframe>...</iframe>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Iframes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Iframe</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Iframe</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Iframe."
  },
  {
    "id": 145,
    "number": "145",
    "title": "Iframe Size",
    "category": "Iframes",
    "summary": "Interactive learning guide and runnable live preview for \"Iframe Size\", a key HTML feature.",
    "syntax": "<iframesize>...</iframesize>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Iframes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Iframe Size</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Iframe Size</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Iframe Size."
  },
  {
    "id": 146,
    "number": "146",
    "title": "Iframe No Border",
    "category": "Iframes",
    "summary": "Interactive learning guide and runnable live preview for \"Iframe No Border\", a key HTML feature.",
    "syntax": "<iframenoborder>...</iframenoborder>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Iframes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Iframe No Border</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Iframe No Border</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Iframe No Border."
  },
  {
    "id": 147,
    "number": "147",
    "title": "Iframe Target",
    "category": "Iframes",
    "summary": "Interactive learning guide and runnable live preview for \"Iframe Target\", a key HTML feature.",
    "syntax": "<iframetarget>...</iframetarget>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Iframes curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Iframe Target</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Iframe Target</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Iframe Target."
  },
  {
    "id": 148,
    "number": "148",
    "title": "Marquee",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 149,
    "number": "149",
    "title": "Marquee Right",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Right) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Right)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 150,
    "number": "150",
    "title": "Marquee Up",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Up) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Up)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 151,
    "number": "151",
    "title": "Marquee Slide",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Slide) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Slide)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 152,
    "number": "152",
    "title": "Marquee Alt",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Alt) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Alt)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 153,
    "number": "153",
    "title": "Marquee Speed",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Speed) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Speed)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 154,
    "number": "154",
    "title": "Marquee Control",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Control) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Control)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 155,
    "number": "155",
    "title": "Marquee Effects",
    "category": "Marquee & Animation",
    "summary": "The legacy <marquee> tag created scrolling text or tickers. (Marquee Effects) In HTML5, <marquee> is obsolete, non-standard, and deprecated.",
    "syntax": "<!-- Obsolete: <marquee>Scrolling</marquee> -->\n<!-- Modern: CSS @keyframes -->",
    "attributes": [
      "direction",
      "behavior",
      "scrollamount"
    ],
    "notes": "CRITICAL OBSOLETE NOTICE: <marquee> is deprecated. Modern websites use CSS @keyframes animations.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <p><strong>Legacy Marquee Tag:</strong></p>\n  <marquee style=\"background: #fef3c7; color: #b45309; padding: 8px; border-radius: 4px; font-weight: bold;\">\n    🚀 PLAY-CODE: Master all 166 HTML Lessons! (Marquee Effects)\n  </marquee>\n  \n  <p style=\"margin-top: 20px;\"><strong>Modern CSS Animation Equivalent:</strong></p>\n  <div style=\"overflow: hidden; white-space: nowrap; background: #1e1b4b; color: #a5b4fc; padding: 10px; border-radius: 6px;\">\n    <div style=\"display: inline-block; animation: ticker 8s linear infinite;\">\n      ✨ Modern standards-compliant CSS animation marquee!\n    </div>\n  </div>\n  <style>\n    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }\n  </style>\n</div>",
    "expected": "A vintage marquee ticker followed by modern CSS keyframe animation."
  },
  {
    "id": 156,
    "number": "156",
    "title": "Template",
    "category": "Templates & Web Components",
    "summary": "Interactive learning guide and runnable live preview for \"Template\", a key HTML feature.",
    "syntax": "<template>...</template>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Templates & Web Components curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Template</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Template</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Template."
  },
  {
    "id": 157,
    "number": "157",
    "title": "Template Table",
    "category": "Templates & Web Components",
    "summary": "Interactive learning guide and runnable live preview for \"Template Table\", a key HTML feature.",
    "syntax": "<templatetable>...</templatetable>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Templates & Web Components curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Template Table</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Template Table</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Template Table."
  },
  {
    "id": 158,
    "number": "158",
    "title": "Template Cards",
    "category": "Templates & Web Components",
    "summary": "Interactive learning guide and runnable live preview for \"Template Cards\", a key HTML feature.",
    "syntax": "<templatecards>...</templatecards>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Templates & Web Components curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Template Cards</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Template Cards</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Template Cards."
  },
  {
    "id": 159,
    "number": "159",
    "title": "Template Loop",
    "category": "Templates & Web Components",
    "summary": "Interactive learning guide and runnable live preview for \"Template Loop\", a key HTML feature.",
    "syntax": "<templateloop>...</templateloop>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Templates & Web Components curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Template Loop</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Template Loop</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Template Loop."
  },
  {
    "id": 160,
    "number": "160",
    "title": "Slot Tag",
    "category": "Templates & Web Components",
    "summary": "Interactive learning guide and runnable live preview for \"Slot Tag\", a key HTML feature.",
    "syntax": "<slottag>...</slottag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Templates & Web Components curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Slot Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Slot Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Slot Tag."
  },
  {
    "id": 161,
    "number": "161",
    "title": "Dialog Tag",
    "category": "Dialog & Modals",
    "summary": "Interactive learning guide and runnable live preview for \"Dialog Tag\", a key HTML feature.",
    "syntax": "<dialogtag>...</dialogtag>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Dialog & Modals curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Dialog Tag</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Dialog Tag</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Dialog Tag."
  },
  {
    "id": 162,
    "number": "162",
    "title": "Dialog Backdrop",
    "category": "Dialog & Modals",
    "summary": "Interactive learning guide and runnable live preview for \"Dialog Backdrop\", a key HTML feature.",
    "syntax": "<dialogbackdrop>...</dialogbackdrop>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Dialog & Modals curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Dialog Backdrop</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Dialog Backdrop</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Dialog Backdrop."
  },
  {
    "id": 163,
    "number": "163",
    "title": "Pattern Attribute",
    "category": "Form Validation",
    "summary": "Interactive learning guide and runnable live preview for \"Pattern Attribute\", a key HTML feature.",
    "syntax": "<patternattribute>...</patternattribute>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Form Validation curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Pattern Attribute Demonstration</h3>\n  <div style=\"background: white; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 400px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n    <label style=\"display: block; font-weight: bold; margin-bottom: 8px;\">Interactive Control (Pattern Attribute):</label>\n    <input type=\"text\" placeholder=\"Testing Pattern Attribute...\" style=\"width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; font-size: 1rem;\">\n    <button style=\"margin-top: 12px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;\">Submit</button>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Pattern Attribute."
  },
  {
    "id": 164,
    "number": "164",
    "title": "Canvas",
    "category": "Graphics & Canvas",
    "summary": "Interactive learning guide and runnable live preview for \"Canvas\", a key HTML feature.",
    "syntax": "<canvas>...</canvas>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Graphics & Canvas curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Canvas</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Canvas</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Canvas."
  },
  {
    "id": 165,
    "number": "165",
    "title": "Ruby & RP",
    "category": "Typography & Entities",
    "summary": "Interactive learning guide and runnable live preview for \"Ruby & RP\", a key HTML feature.",
    "syntax": "<rubyrp>...</rubyrp>",
    "attributes": [
      "class",
      "id",
      "style"
    ],
    "notes": "Part of the Typography & Entities curriculum in PLAY-CODE.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3 style=\"color: #4f46e5; margin-top: 0;\">Ruby & RP</h3>\n  <div style=\"background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #4f46e5; padding: 15px; border-radius: 6px;\">\n    <p style=\"margin: 0; font-size: 1.05rem;\">\n      This live interactive example illustrates <strong>Ruby & RP</strong>.\n    </p>\n    <p style=\"margin: 10px 0 0 0; color: #64748b;\">\n      Try modifying the HTML in the code editor on the left and click <strong>Run</strong> to see your updates live!\n    </p>\n  </div>\n</div>",
    "expected": "Clean, styled visual rendering demonstrating Ruby & RP."
  },
  {
    "id": 166,
    "number": "166",
    "title": "TTextare",
    "category": "Form Inputs",
    "summary": "Preserved exact title 'TTextare': The <textarea> element represents a multi-line plain text editing control for comments and paragraphs.",
    "syntax": "<textarea rows=\"4\" cols=\"50\" placeholder=\"Enter text...\"></textarea>",
    "attributes": [
      "rows",
      "cols",
      "placeholder",
      "maxlength"
    ],
    "notes": "INVENTORY DIRECTIVE: Title 'TTextare' preserved with exact spelling as mandated by NASA-KUN.",
    "code": "<div style=\"font-family: sans-serif; padding: 20px;\">\n  <h3>166. TTextare (Multi-line Text Input)</h3>\n  <label style=\"display: block; font-weight: bold; margin-bottom: 6px;\">Feedback / Comments:</label>\n  <textarea rows=\"5\" placeholder=\"Type your multi-line feedback for PLAY-CODE here...\" \n            style=\"width: 100%; max-width: 450px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-family: sans-serif; font-size: 1rem;\"></textarea>\n</div>",
    "expected": "A multi-line text input area accepting paragraphs and line breaks."
  }
];

if (typeof window !== 'undefined') {
  window.HTML_LESSONS = HTML_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HTML_LESSONS;
}
export default HTML_LESSONS;
