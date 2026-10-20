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

- **Active Phase:** **PHASE 0: Project Inspection & Documentation**
- **Status:** In Progress / Concluding Initial Documentation Setup
- **Scope Restriction Active:** Zero changes to `index.html`, zero changes to `style.css`, and zero creation of extraneous code files during Phase 0.

---

## F. Completed Work

- [x] **Repository Inspection:** Examined root workspace. Verified presence of `/index.html` (385 lines) and `/style.css` (632 lines). Confirmed that no other code files, subpages, or git repositories currently exist.
- [x] **Visual Design Audit:** Analyzed and extracted authoritative colors, typography, margins, breakpoints, and card gradients from `style.css`.
- [x] **PRD Construction:** Authored `/PRD.md` detailing the complete product scope, user personas, section specifications, and quality standards.
- [x] **Architecture Specification:** Authored `/Architecture.md` outlining static client-side data-driven architecture, URL-based lesson traversal, sandboxed iframe execution, and console bridge.
- [x] **Development Rules Formulation:** Authored `/Rules.md` establishing 12 strict engineering directives covering tech bans, code preservation, 166-lesson inventory rules, and multilingual translation procedures.
- [x] **Roadmap Construction:** Authored `/Phases.md` outlining the 9-phase implementation lifecycle (Phase 0 through Phase 8) with gate criteria.
- [x] **Design System Specification:** Authored `/Design.md` documenting verified design tokens, component metrics, responsive behaviors, and accessibility rules.
- [x] **Memory & Continuity Setup:** Authored this `/Memory.md` state file.

---

## G. Incomplete Work (Pending Implementation Phases)

- [ ] **HTML Lesson Data Ingestion:** Awaiting ingestion of the raw 166-lesson list from NASA-KUN into `data/html-lessons.js` (Phase 1).
- [ ] **HTML Directory Page:** `pages/html.html` with 166 numbered cards and live search (Phase 1).
- [ ] **HTML Lesson Interface:** `pages/html-lesson.html` with code editor, sandboxed runner, and Prev/Next traversal (Phase 2).
- [ ] **CSS Section:** `pages/css.html` with interactive property visualizer (Phase 3).
- [ ] **JavaScript Section:** `pages/javascript.html` with sandboxed console terminal (Phase 4).
- [ ] **Projects Showcase:** `pages/projects.html` with real standalone mini-projects (Phase 5).
- [ ] **Full Browser IDE:** `pages/editor.html` multi-pane playground (Phase 6).
- [ ] **Cross-Device QA & Defect Remediation:** Multi-viewport audit and path validation (Phase 7).
- [ ] **Final Review & Owner Sign-Off:** End-to-end review with NASA-KUN (Phase 8).

---

## H. Known Issues & Unverified Items

1. **Unlinked Subpage Navigation in `index.html`:**
   - `index.html` links to `pages/html.html`, `pages/css.html`, `pages/javascript.html`, and `pages/projects.html`. These files do not yet exist in the file system and will return 404 until created in subsequent phases.
2. **Static Search Box:**
   - The search input in `index.html` currently has no JavaScript listener attached.
3. **Hero CTA Buttons:**
   - The "Start Learning" and "Open Editor" buttons have `href="#"` and are non-interactive.
4. **Master 166-Lesson Title List:**
   - The requirement for 166 HTML lessons is firmly established in project requirements, but the physical file containing the raw 166 lesson titles has not yet been placed into the repository. It is recorded as a confirmed requirement awaiting data ingestion from NASA-KUN.

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
