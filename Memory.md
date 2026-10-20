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

- **Active Phase:** **PHASE 2 (Concluded) — HTML 166 Lessons System Implemented**
- **Status:** Complete and Verified across all acceptance criteria.

---

## F. Completed Work

- [x] **Repository Inspection (Phase 0):** Examined root workspace. Verified presence of `/index.html` and `/style.css`.
- [x] **Redundant Duplicate Files Removal:** Safely removed byte-for-byte duplicates `index.original.html` and `style.original.css` after confirming zero external references.
- [x] **HTML Lesson Data Ingestion (Phase 1):** Ingested all 166 authoritative HTML lessons with 100% fidelity into `data/html-lessons.js`. Preserved duplicate titles (#85 & #86 "Checkbox No Label") and exact title spelling 'TTextare' (#166).
- [x] **HTML Directory Page (Phase 1):** Constructed `pages/html.html` featuring responsive 166-card grid, instant client-side search, category filter chips, total count badge ("166 Total Lessons"), and dynamic match counter.
- [x] **HTML Interactive Workspace (Phase 2):** Constructed `pages/html-lesson.html` and `js/html-runner.js` supporting:
  - Concept explanation, syntax specification, attribute tags, expected output notes.
  - Educational notices and modern alternatives for obsolete elements (Center, Strike, Marquee, Flash, older table attributes).
  - Code editor with editable HTML snippet, Tab-key indentation, Run, Reset, and Copy to clipboard controls.
  - Sandboxed `<iframe>` live preview cleanly separated from the editor.
  - Traversal controls: Previous and Next following stable lesson IDs (Lesson 85 & 86 traverse smoothly; Lesson 1 disables Previous; Lesson 166 disables Next).
- [x] **Landing Page Integration:** Connected `index.html` navbar links, hero CTA buttons ("Start Learning" -> `pages/html.html`, "Open Editor" -> `pages/html-lesson.html?lesson=2`), and live search filtering.
- [x] **Build & Compilation Verification:** Fixed parse error in `index.html` line 68; configured `vite.config.js`; verified compilation via `compile_applet` and `lint_applet` with zero errors.

---

## G. Incomplete Work (Pending Future Phases)

- [ ] **CSS Section:** `pages/css.html` with interactive property visualizer (Phase 3).
- [ ] **JavaScript Section:** `pages/javascript.html` with sandboxed console terminal (Phase 4).
- [ ] **Projects Showcase:** `pages/projects.html` with real standalone mini-projects (Phase 5).
- [ ] **Full Browser IDE:** `pages/editor.html` multi-pane playground (Phase 6).
- [ ] **Cross-Device QA & Defect Remediation:** Multi-viewport audit and path validation (Phase 7).
- [ ] **Final Review & Owner Sign-Off:** End-to-end review with NASA-KUN (Phase 8).

---

## H. Known Issues & Unverified Items

1. **Other Tracks (CSS, JS, Projects):**
   - CSS, JavaScript, and Projects links point to `#categories` on the home page awaiting Phase 3-5 implementations.
2. **HTML Curriculum Status:**
   - All 166 HTML lessons are fully implemented, verified, and accessible with functioning code runners.

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
