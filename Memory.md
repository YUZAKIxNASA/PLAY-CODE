# Project State & Memory Record — PLAY-CODE

---

## A. Project Overview

- **Project Name:** PLAY-CODE (Branded as CodePlay in existing interface assets)
- **Project Owner:** NASA-KUN (@YUZAKI_X_NASA / @ঔৣ፝N4)
- **Platform Mission:** A free, interactive, browser-based learning platform for HTML, CSS, and JavaScript featuring structured lessons, live editable code, and instant sandboxed previews.
- **Primary Design Reference:** Existing `/index.html` and `/style.css`.
- **Allowed Technology Stack:** Standard HTML5, CSS3, and Vanilla JavaScript only.
- **HTML Inventory Baseline:** The HTML learning track contains a confirmed curriculum of **166 supplied entries**, which must be preserved in exact order and numbering.
- **Communication Language Protocol:** The project owner communicates across English, Hindi, Hinglish, and Roman Hindi. All requirements, constraints, and progress records are translated and documented in clear, professional English while preserving the original intent.
- **Active Operational Phase:** **Phase 0 (Project Inspection & Documentation)**.

---

## B. Confirmed Requirements

1. **Visual & Structural Preservation:**
   - The existing `index.html` is the primary visual foundation. Its colors, typography, layout, cards, navigation, and creator profile must remain intact.
2. **HTML Curriculum Fidelity:**
   - All 166 HTML lessons must be presented in their exact original sequence (`#001` to `#166`).
   - No lesson may be removed, merged, reordered, or silently renamed.
   - Any duplicate or misspelled titles in the source inventory must be preserved until NASA-KUN approves changes.
3. **Interactive Lesson Runner Requirements:**
   - Every lesson card must open its corresponding lesson workspace.
   - Workspaces must display explanation, standard syntax, example code, and expected visual output.
   - Workspaces must provide an editable code textarea, a live preview, and functioning Run, Reset, and Copy controls.
   - Workspaces must provide Previous Lesson and Next Lesson traversal, plus navigation back to the lesson directory.
4. **CSS & JavaScript Curriculums:**
   - Dedicated learning tracks with organized cards, practical examples, editable code areas, and live outputs.
   - JavaScript must provide an integrated output terminal/console capturing `console.log` and errors without using `eval()`.
5. **Projects Section:**
   - Genuine, fully functional web projects with working links and inspectable source code. No placeholder links (`#`).
6. **Full Browser-Based Code Editor:**
   - Standalone 3-pane IDE (HTML, CSS, JS) with live preview, run execution, reset, copy, and export capabilities.
7. **Cross-Device Responsiveness:**
   - Full usability across mobile devices (<= 900px breakpoint), tablets, and desktops.

---

## C. Technology Restrictions

- **Permitted Technologies:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Explicitly Prohibited:**
  - React, Vue, Angular, Svelte, Alpine.js, jQuery.
  - Tailwind CSS, Bootstrap, Bulma, Foundation, Sass, Less.
  - Node.js backends, Express, Python (FastAPI/Flask/Django), Ruby, PHP, Go.
  - Build tools, bundlers, or compilers (Webpack, Vite, Rollup, Parcel, Babel).
- **Execution Constraint:** Sandboxed `<iframe>` only. Direct `eval()` execution of arbitrary editor inputs is strictly prohibited.

---

## D. Design Rules

- **Background:** Dark navy `#0B1120`.
- **Card Surfaces:** `#111827` with `border: 1px solid rgba(255, 255, 255, 0.08)`.
- **Primary Accent:** Indigo `#4F46E5`.
- **Secondary Accent:** Cyan `#06B6D4`.
- **Typography:** `'Poppins', sans-serif` across all elements.
- **Border Radii:** `14px` (buttons), `20px` to `24px` (cards), `50px` (pills and inputs).
- **Transitions:** `0.3s` to `0.4s` smooth hover transformations (`translateY(-4px)` to `-10px`).
- **No Inconsistent Skins:** All new subpages must use this identical visual language.

---

## E. Current Phase

- **Active Phase:** **PHASE 5 (Concluded) — PHP 200 Lessons System & Real Example Counts Verification**
- **Status:** Complete and Verified across all acceptance criteria.

---

## F. Completed Work

- [x] **Repository Inspection (Phase 0):** Examined root workspace. Verified presence of `/index.html` and `/style.css`.
- [x] **Redundant Duplicate Files Removal:** Safely removed byte-for-byte duplicates `index.original.html` and `style.original.css` after confirming zero external references.
- [x] **HTML Lesson Data Ingestion (Phase 1):** Ingested all 166 authoritative HTML lessons with 100% fidelity into `data/html-lessons.js`. Preserved duplicate titles (#85 & #86 "Checkbox No Label") and exact title spelling 'TTextare' (#166). Verified count: 166 Lessons.
- [x] **HTML Directory Page (Phase 1):** Constructed `pages/html.html` featuring responsive 166-card grid, instant client-side search, category filter chips, total count badge ("166 Total Lessons"), and dynamic match counter.
- [x] **HTML Interactive Workspace (Phase 2):** Constructed `pages/html-lesson.html` and `js/html-runner.js` supporting concept breakdown, code editor with Tab support, sandboxed iframe output, and Prev/Next traversal.
- [x] **CSS Lesson Data Ingestion (Phase 3):** Ingested all 210 authoritative CSS lessons with 100% fidelity into `data/css-lessons.js`. Preserved original numbering, exact spelling (e.g. #002 "ID Slector()", #182 "First-letter"), syntax specifications, selectors, notes, common mistakes, and runnable CSS/HTML examples. Verified count: 210 Lessons.
- [x] **CSS Directory Page (Phase 3):** Constructed `pages/css.html` with responsive 210-card catalog grid, client-side live search, dynamic category chips across all 23 categories, "210 Total Lessons" badge, dynamic match counter, and integrated interactive visual studio (Flexbox & Box Model).
- [x] **CSS Interactive Workspace (Phase 3):** Constructed `pages/css-lesson.html` and `js/css-runner.js` with dual-tab CSS/HTML editor, live preview, and Prev/Next traversal.
- [x] **JavaScript Lesson Data Ingestion (Phase 4):** Ingested all 230 authoritative JavaScript lessons with 100% fidelity into `data/javascript-lessons.js`. Preserved original numbering, exact spelling, syntax specifications, keywords/methods, notes, common mistakes, runnable code examples, and expected outputs. Verified count: 230 Lessons.
- [x] **JavaScript Directory Page (Phase 4):** Constructed `pages/javascript.html` with responsive 230-card catalog grid, client-side live search, dynamic category chips across all 21 categories, "230 Total Lessons" badge, dynamic match counter, and embedded live interactive console sandbox.
- [x] **PHP Lesson Data Ingestion (Phase 5):** Ingested all 200 authoritative PHP lessons across 14 categories with 100% fidelity into `data/php-lessons.js`. Preserved exact titles, numbers (001 to 200), PHP 8.3 compatibility, PDO/MySQLi prepared statements, security caveats, notes, common mistakes, and result explanations. Verified count: 200 Lessons.
- [x] **PHP Server Requirement Labeling:** Labeled exactly 16 server-dependent lessons with `[REQUIRES NEW SERVER]` / `REQUIRES SERVER` (all 5 Server Variables lessons 119-123 and all 11 MySQL lessons 161-171).
- [x] **PHP Directory & Workspace Pages:** Constructed `pages/php.html`, `pages/php-lesson.html`, `js/php-directory.js`, and `js/php-runner.js` with full search, category filtering, interactive studio, and safe bounds navigation.
- [x] **Homepage Category Count Verification & Coming Soon Labels:**
  - HTML: Verified and updated to `166 Lessons`
  - CSS: Verified at `210 Lessons`
  - JavaScript: Verified at `230 Lessons`
  - PHP: Activated link to `pages/php.html` and updated to `200 Lessons`
  - Projects: Verified and updated to `3 Practice Projects`
  - Unimplemented Categories (Python, SQL, TypeScript, jQuery, Java, C#, C++, Go, Ruby, Swift, Kotlin, Rust, Dart, R, Perl, VBA): Replaced fake counts with styled `Coming Soon` labels and removed invalid/broken links.
- [x] **Navigation & Vite Configuration Integration:** Added PHP to global navigation across all pages (`index.html`, `pages/*.html`) and configured `vite.config.js` with `phpPage` and `phpLesson` inputs.
- [x] **Build & Compilation Verification:** Verified compilation via `compile_applet` and `lint_applet` with zero errors.

---

## G. Incomplete Work (Pending Future Phases)

- [ ] **Full Browser IDE:** `pages/editor.html` multi-pane playground (Phase 6).
- [ ] **Cross-Device QA & Defect Remediation:** Multi-viewport audit and path validation (Phase 7).
- [ ] **Final Review & Owner Sign-Off:** End-to-end review with NASA-KUN (Phase 8).

---

## H. Known Issues & Unverified Items

1. **Other Tracks (Projects):**
   - Projects link points to `#categories` on the home page awaiting Phase 5 implementation.
2. **HTML, CSS & JavaScript Curriculums Status:**
   - All 166 HTML lessons, 210 CSS lessons, and 230 JavaScript lessons are fully implemented, verified, and accessible with functioning interactive code runners.

---

## I. Important Decisions

1. **Single Universal Lesson Template vs 166 Static HTML Files:**
   - To eliminate code duplication, maintenance friction, and file bloat, a data-driven single template (`pages/html-lesson.html?lesson=X`) driven by `data/html-lessons.js` will render all 166 lessons dynamically while preserving static HTML export compatibility.
2. **Pure Vanilla Architecture:**
   - Absolute commitment to zero dependencies, zero NPM packages, and zero build steps.
3. **Strict Iframe Sandbox over `eval()`:**
   - Security rule locked: Arbitrary user code is never executed via `eval()`. Sandboxed `<iframe>` with cross-frame `postMessage` logging will be used exclusively.
4. **Immutability of `index.html` Design:**
   - The current landing page aesthetics are frozen as the authoritative benchmark.

---

## J. Next Steps

1. **Phase 0 Sign-Off:**
   - Present the six completed planning documents to **NASA-KUN** for review and confirmation.
2. **Phase 1 Initiation:**
   - Obtain the raw list of 166 HTML lesson titles from NASA-KUN.
   - Ingest into `data/html-lessons.js`.
   - Construct `pages/html.html` with the 166 numbered card catalog and client-side live search.
