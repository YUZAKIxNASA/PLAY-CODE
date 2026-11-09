# Technical Architecture Document — PLAY-CODE

---

## 1. Architectural Principles & Technology Boundaries

### 1.1 Strict Technology Stack
PLAY-CODE is architected as a **pure client-side static web application**. The platform is strictly constrained to standard web platform specifications:
- **Markup:** Semantic HTML5 (`<!DOCTYPE html>`)
- **Styling:** Vanilla CSS3 (Custom properties, Flexbox, CSS Grid, Transitions, Keyframe Animations, `@media` queries)
- **Scripting:** Pure Vanilla JavaScript (ECMAScript 2020+ standards, strictly without transpilations)

### 1.2 Prohibited Technologies & Frameworks
Under no circumstances may any of the following be introduced into the repository:
- **No JS Frameworks/Libraries:** No React, Vue, Angular, Svelte, Preact, Alpine.js, or jQuery.
- **No CSS Frameworks/Preprocessors:** No Tailwind CSS, Bootstrap, Bulma, Foundation, Sass, Less, or PostCSS.
- **No Node.js / Server Runtimes:** No Express, Nest, Fastify, or custom Node backend services.
- **No Alternative Backends:** No Python (Django, Flask, FastAPI), Ruby, PHP, or Go.
- **No Build Tools / Bundlers:** No Webpack, Vite, Rollup, Parcel, esbuild, or Babel. All files must execute directly in evergreen web browsers as served.

---

## 2. Role of Existing `index.html` & Landing Portal

### 2.1 The Master Visual Anchor
`index.html` serves as the primary gateway, branding showcase, and design blueprint of the entire platform:
1. **Primary Landing Page:** Welcomes learners, articulates the platform's mission, displays creator credentials, and provides direct navigational entry into learning modules.
2. **Visual & Architectural Reference:** Establishes the authoritative design tokens (color palette, typography, glassmorphism card styles, button dimensions, hover micro-interactions, responsive grid behavior).
3. **Immutability Contract:** Existing classes, visual structures, and markup patterns in `index.html` are locked as the visual gold standard. All future pages (`pages/*.html`) must replicate its header, navigation, typography, and card aesthetics.

---

## 3. Repository File & Directory Structure

### 3.1 Verified Current State (Phase 0)
At present, the repository consists exclusively of:
```text
/
├── index.html        # Root landing page (existing, authoritative design)
├── style.css         # Master styling sheet (632 lines, authoritative tokens)
├── PRD.md            # Project Requirements Document
└── Architecture.md   # This document
```

### 3.2 Target Directory Structure (Phased Evolution)
To prevent duplicate code, broken relative links, and file bloat, the application architecture specifies the following clean directory organization:

```text
PLAY-CODE/
│
├── index.html                  # Main platform entry point
├── style.css                   # Global core design tokens & landing page styling
│
├── css/
│   ├── layout.css              # Common navbar, footer, container, and utility styles
│   ├── lesson.css              # Reusable styles for lesson grids & cards
│   └── editor.css              # Split-pane layout, code editor styling & iframe preview
│
├── js/
│   ├── common.js               # Shared logic: mobile nav toggling, active link states
│   ├── search.js               # Fast client-side filter engine for lesson directories
│   ├── runner.js               # Sandboxed iframe preview generator & console bridge
│   └── storage.js              # LocalStorage helper for saving user code progress
│
├── pages/
│   ├── html.html               # Master HTML Directory (166 lesson cards & live search)
│   ├── html-lesson.html        # Unified single-page template for individual HTML lessons
│   ├── css.html                # CSS Curriculum & Interactive styling playground
│   ├── javascript.html         # JavaScript Curriculum & Interactive logic runner
│   ├── projects.html           # Real-world project showcase & demo launchpad
│   └── editor.html             # Dedicated 3-pane playground (HTML / CSS / JS)
│
├── data/
│   ├── html-lessons.js         # Complete dataset of the 166 HTML lessons
│   ├── css-lessons.js          # Dataset of CSS lessons and practical challenges
│   └── js-lessons.js           # Dataset of JavaScript lessons and exercises
│
└── projects/                   # Fully functional standalone mini-projects
    ├── calculator/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    ├── digital-clock/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    └── todo-app/
        ├── index.html
        ├── style.css
        └── app.js
```

---

## 4. Routing, Section Connectivity & Navigation Architecture

### 4.1 Global Navigation System
All pages share an identical header navigation bar maintaining uniform link targets:

| Route from Root (`/`) | Route from Subpages (`/pages/`) | Destination |
| :--- | :--- | :--- |
| `index.html` | `../index.html` | Home Landing Page |
| `pages/html.html` | `html.html` | HTML Curriculum Directory |
| `pages/css.html` | `css.html` | CSS Curriculum Directory |
| `pages/javascript.html` | `javascript.html` | JavaScript Curriculum Directory |
| `pages/projects.html` | `projects.html` | Projects Showcase |
| `pages/editor.html` | `editor.html` | Full-Screen Browser IDE |

### 4.2 Handling Relative Paths
Because the application runs in a static browser environment without server-side rewrite engines:
- Root files reference subpages using `pages/filename.html` and styles using `style.css`.
- Subpages in `pages/` reference root assets using `../style.css` or `../js/common.js`.
- Root links from subpages explicitly target `../index.html`.
- No absolute paths (such as `/style.css`) shall be used, ensuring portability across local file systems (`file:///`), local static servers (`http://localhost:3000`), and GitHub Pages subpaths.

---

## 5. Lesson Data Model & Dynamic Interface Traversal

### 5.1 Architecture for 166 HTML Lessons: Data-Driven vs Static Files
Rather than creating 166 physical duplicate HTML files (which creates maintenance nightmares and code bloat), PLAY-CODE adopts a **Data-Driven Template Architecture**:
1. **Master Data Source (`data/html-lessons.js`):**
   - An array of 166 structured JavaScript objects stored in standard ES format.
   - Each entry contains:
     ```javascript
     {
       id: 1,
       number: "001",
       title: "Introduction to HTML",
       category: "Basics",
       description: "Learn what HTML is and how it structures web pages.",
       syntax: "<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>...</body>\n</html>",
       explanation: "HTML stands for HyperText Markup Language...",
       initialCode: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, PLAY-CODE!</h1>\n  <p>This is my first HTML page.</p>\n</body>\n</html>",
       expectedOutput: "A bold level-1 heading followed by a standard paragraph."
     }
     ```
2. **Catalog Page (`pages/html.html`):**
   - Renders 166 numbered cards dynamically using vanilla DOM creation or pre-rendered semantic HTML cards.
   - Each card links to: `html-lesson.html?lesson=1` (or `?id=001`).
3. **Universal Lesson View (`pages/html-lesson.html`):**
   - Reads the URL query parameter via `new URLSearchParams(window.location.search).get('lesson')`.
   - Fetches the corresponding lesson object from the dataset.
   - Dynamically populates the breadcrumb, title, explanation, syntax block, and interactive editor.
   - Configures the "Previous Lesson" (`lesson - 1`) and "Next Lesson" (`lesson + 1`) buttons automatically.
   - Includes graceful fallback: if the parameter is missing or out of range (1–166), it defaults safely to Lesson 001.

---

## 6. Code Execution & Live Preview Engine

### 6.1 Sandboxed Execution Architecture
To guarantee maximum security, stability, and style isolation, code execution does **not** inject HTML directly into the main document DOM, nor does it use `eval()`.

Execution workflow:
```text
[User Code in Textarea / Editor]
               │
               ▼
   [Sanitize & Assemble Bundle]
  (HTML + <style>CSS</style> + <script>JS</script>)
               │
               ▼
   [Target Preview Iframe]
  <iframe sandbox="allow-scripts allow-modals">
               │
               ▼
 [iframe.srcdoc or Blob URL injection]
               │
               ▼
   [Live Isolated Rendering]
```

### 6.2 Strict Security & Safe Execution Protocol
1. **Strict Prohibition of `eval()`:**
   - Arbitrary user code is never evaluated in the host window's JavaScript context.
   - `eval()` is strictly prohibited across the entire codebase.
2. **Iframe Sandboxing:**
   - Previews use `<iframe sandbox="allow-scripts allow-modals"></iframe>`.
   - The sandbox omits `allow-same-origin`, preventing untrusted user code from reading the host document's cookies, `localStorage`, or DOM structure.
3. **Cross-Frame Console Bridge:**
   - To capture `console.log()` statements from user JavaScript and display them in the built-in terminal, a tiny bootstrap script is prepended to the user script inside the iframe:
   ```javascript
   (function() {
     const _log = console.log;
     const _warn = console.warn;
     const _error = console.error;
     function sendToParent(type, args) {
       window.parent.postMessage({
         source: 'PLAY_CODE_RUNNER',
         type: type,
         messages: Array.from(args).map(a => typeof a === 'object' ? JSON.stringify(a) : String(a))
       }, '*');
     }
     console.log = function(...args) { sendToParent('log', args); _log.apply(console, args); };
     console.warn = function(...args) { sendToParent('warn', args); _warn.apply(console, args); };
     console.error = function(...args) { sendToParent('error', args); _error.apply(console, args); };
     window.onerror = function(msg, url, line) {
       sendToParent('error', [`Line ${line}: ${msg}`]);
     };
   })();
   ```
   - The host page listens via `window.addEventListener('message', ...)` and appends formatted entries to the on-screen output terminal.

### 6.3 Editor Control State Management
- **Run Action:** Assembles current code, updates `iframe.srcdoc` (or data URI/Blob URL), and triggers execution.
- **Reset Action:** Reverts the textarea value to the lesson's immutable `initialCode` baseline and re-renders the preview.
- **Copy Action:** Uses the standard `navigator.clipboard.writeText(code)` API with a fallback to `document.execCommand('copy')` for compatibility.

---

## 7. Search & Filter Architecture

The search functionality across `index.html` and `pages/html.html` operates entirely client-side:
- **Input Debouncing:** An input listener with a 150ms debounce processes user queries.
- **Multi-Field Matching:** Queries are matched against:
  1. Lesson Number (e.g., "1", "042", "#100")
  2. Lesson Title (case-insensitive substring)
  3. Tags / Keywords (e.g., "form", "table", "semantic", "attribute")
- **Instant DOM Toggling:** Filtered cards are shown/hidden using the CSS `display: none` property or dynamic DOM fragment replacement, ensuring zero lag even with 166 items.

---

## 8. Quality Assurance & Verification Architecture

### 8.1 Testing Strategy Without External Test Runners
Because external Node test runners (Jest, Mocha, Cypress) are disallowed, verification relies on structured automated scripts and browser-native assertions:
1. **Link & Asset Integrity Check:**
   - Automated scripts verify that every relative path (`href`, `src`, `url()`) resolves to an existing file.
2. **DOM & Sandbox Verification:**
   - Verify that all 166 lesson records render without syntax errors.
   - Verify that `iframe` execution fires `postMessage` successfully and captures logs.
   - Verify that `Reset` restores exact code and `Copy` writes to clipboard.
3. **Viewport & Responsive Verification:**
   - Explicit inspection at 375px (iPhone SE), 768px (iPad Mini), 1024px (iPad Pro / Small Laptop), and 1440px (Desktop).
4. **Console Cleanliness:**
   - Host window must maintain 0 errors and 0 warnings during standard navigation and code execution.

---

## 9. Architectural Limitations & Approval Triggers

Any change involving the following triggers requires prior consultation and explicit approval from **NASA-KUN**:
1. Adding any external CDN library (e.g., CodeMirror, Prism.js, FontAwesome).
2. Changing the URL scheme or file hierarchy.
3. Modifying the original text or ordering of the 166 HTML lessons.
4. Adding backend services, database persistence, or cloud storage.
