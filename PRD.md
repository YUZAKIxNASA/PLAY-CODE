# Project Requirements Document (PRD) — PLAY-CODE

---

## 1. Document Control & Metadata

- **Project Name:** PLAY-CODE (Branded as CodePlay in existing interface assets)
- **Project Owner:** NASA-KUN (@YUZAKI_X_NASA / @ঔৣ፝N4)
- **Document Version:** 1.0.0
- **Document Status:** Draft / Under Review
- **Creation Date:** October 2026
- **Primary Design Reference:** Existing `index.html` and `style.css`
- **Permitted Technology Stack:** Standard HTML5, CSS3, Vanilla JavaScript (ECMAScript 6+)

---

## 2. Project Overview

### 2.1 Purpose & Mission
PLAY-CODE is a lightweight, high-performance, web-based interactive learning platform designed to teach frontend web development—specifically HTML5, CSS3, and JavaScript—through direct, hands-on practice. 

The core philosophy of the project, as expressed by project owner NASA-KUN, is to provide free, high-quality, barrier-free web development education. Learners gain theoretical explanations alongside live editable code windows and instantaneous previews, eliminating the barrier of local environment setup for beginners.

### 2.2 Core Objectives
- **Zero-Friction Learning:** Enable students and beginners to read explanations, test code snippets, and view rendered browser output in real time.
- **Strict Visual & Architectural Fidelity:** Preserve the visual identity, dark-mode styling, typography, and responsive patterns established in the primary reference document (`index.html`).
- **Comprehensive Lesson Inventory:** Present a complete catalog of 166 ordered HTML lessons without alteration, omission, or unauthorized reorganization.
- **Pure Web Standards:** Maintain 100% adherence to vanilla web technologies (HTML5, CSS3, vanilla JavaScript) without reliance on external build pipelines, runtime frameworks, or heavy third-party packages.

---

## 3. Target Audience & Personas

### 3.1 Primary Personas
1. **Absolute Beginners in Web Development:**
   - Individuals with zero prior coding experience looking for guided, step-by-step concepts with immediate visual reinforcement.
   - Requirement: Clear syntax explanations, predictable layout, distraction-free code examples, and single-click reset mechanisms.
2. **Students & Self-Learners:**
   - Students enrolled in computer science, coding bootcamps, or vocational classes seeking focused practice for HTML tags, CSS layout modules (Flexbox/Grid), and DOM manipulation.
   - Requirement: Structured categorization, searchable indexes, sequential Prev/Next lesson traversal, and practical real-world exercises.
3. **Interactive Sandbox Explorers:**
   - Learners who prefer tweaking existing snippets to see "what breaks and what changes" inside a live code editor.
   - Requirement: Multi-language code editor (HTML, CSS, JS), instantaneous sandboxed preview, copy-to-clipboard, and error-tolerant execution.

---

## 4. Platform Structure & Main Sections

The PLAY-CODE platform comprises six core sections accessible via global navigation:

| Section | Target Route / Anchor | Core Functional Purpose | Implementation Status |
| :--- | :--- | :--- | :--- |
| **Home** | `index.html` (or `/`) | Landing portal, hero banner with animated code window, subject category exploration grid, featured examples, creator profile, and global footer. | Existing in root; interactive hooks pending |
| **HTML** | `pages/html.html` | Comprehensive directory and dedicated lesson viewer for the full 166-lesson HTML curriculum with live editable runner. | Planned (Phase 1 & Phase 2) |
| **CSS** | `pages/css.html` | Visual styling guide, selector reference, Flexbox/Grid visualizers, and interactive CSS property playground. | Planned (Phase 3) |
| **JavaScript** | `pages/javascript.html` | Fundamentals, DOM manipulation, events, and algorithmic logic with embedded console and sandboxed execution. | Planned (Phase 4) |
| **Projects** | `pages/projects.html` | Gallery of guided mini-projects (e.g., calculator, digital clock, todo list, portfolio card) with real demo links and code breakdown. | Planned (Phase 5) |
| **Editor** | `pages/editor.html` | Full-screen three-pane browser IDE (HTML, CSS, JS) with live preview iframe, run button, reset control, and export/copy utilities. | Planned (Phase 6) |

---

## 5. Detailed Section Requirements

### 5.1 HTML Learning Section (Curriculum of 166 Entries)

#### 5.1.1 Inventory Integrity & Ordering Rules
- **Total Count:** The HTML curriculum comprises exactly **166 supplied lesson entries**.
- **Preservation Directive:** All entries must retain their exact original order and numerical identifier (Lesson 001 to Lesson 166).
- **No Unauthorized Modifications:** No entry may be deleted, merged, deduplicated, renumbered, or silently renamed. Any duplicate names, unconventional phrasings, or typographical anomalies in source titles must be preserved verbatim until NASA-KUN explicitly provides an approved amendment.

#### 5.1.2 Lesson Card Grid (Listing View)
- Every lesson is rendered as an interactive, styled card in a responsive CSS grid matching the design system (`#111827` surface, rounded corners, subtle border, hover translation).
- Cards prominently display:
  - Sequential index badge (e.g., `#001`, `#042`, `#166`).
  - Lesson title as defined in the master inventory.
  - Brief introductory concept label or tag.
  - Explicit action indicator ("Explore Lesson" or "Practice").
- Clicking a card navigates directly to the dedicated lesson interface for that topic.
- A live client-side search/filter bar allows instantaneous filtering of cards by lesson title, number, or keyword without page reloads.

#### 5.1.3 Dedicated Lesson Interface (Detail & Runner View)
Each individual lesson view must provide:
1. **Header & Context:**
   - Breadcrumb navigation (`Home > HTML > Lesson #XXX: [Title]`).
   - Lesson title and numbered badge.
   - Quick "Back to Lesson List" button.
2. **Instructional Content:**
   - **Concept Explanation:** Clear, plain-English overview of the HTML element or attribute.
   - **Syntax & Specification:** Standard W3C HTML5 syntax specification and attribute list.
   - **Expected Output Description:** Clear explanation of how compliant browsers render this element.
3. **Interactive Workspace:**
   - **Code Editing Pane:** Monospace textarea or pre-styled code input pre-populated with working HTML code illustrating the topic.
   - **Control Action Bar:**
     - **Run:** Renders the current editor contents into the live preview container.
     - **Reset:** Restores the editor to the lesson's default initial code snippet.
     - **Copy:** Copies the code from the editor directly to the system clipboard with visual confirmation ("Copied!").
   - **Live Preview Window:** Sandboxed `<iframe>` rendering the rendered DOM output safely without leaking styles or scripts to the parent document.
4. **Curriculum Traversal:**
   - **Previous Lesson Button:** Navigates to Lesson `N - 1` (disabled on Lesson 001).
   - **Next Lesson Button:** Navigates to Lesson `N + 1` (disabled on Lesson 166).
   - **Lesson Jump Selector:** Quick dropdown or drawer to jump directly to any of the 166 lessons.

---

### 5.2 CSS Learning Section

#### 5.2.1 Content & Lesson Organization
- Hierarchical categories covering:
  - CSS Syntax, Selectors, and Specificity.
  - Colors, Backgrounds, Borders, and Gradients.
  - Box Model (Margin, Padding, Border, Box-Sizing).
  - Typography, Web Fonts, and Text Formatting.
  - Layout Engines: Display, Positioning, Flexbox, and CSS Grid.
  - Visual Effects: Shadows, Opacity, Filters, Transitions, and Keyframe Animations.
  - Responsive Design: Media Queries, Fluid Units (`vw`, `vh`, `rem`, `clamp()`).

#### 5.2.2 Interactive CSS Runner
- Dual-panel or stacked workspace containing both HTML markup and editable CSS rules.
- Live preview updating upon clicking "Run" (or via optional debounced live evaluation).
- Visual feedback demonstrating property changes (e.g., toggling `flex-direction: column` vs `row`).
- Reset and Copy controls consistent across all lesson modules.

---

### 5.3 JavaScript Learning Section

#### 5.3.1 Content & Topic Organization
- Progressive modules covering:
  - JavaScript Basics: Variables (`let`, `const`), Data Types, Operators.
  - Control Flow: Conditionals (`if`, `switch`), Loops (`for`, `while`, `forEach`).
  - Functions: Declarations, Arrow Functions, Scope, Closures.
  - DOM Manipulation: `document.getElementById`, `querySelector`, Event Listeners, Class Toggling.
  - Asynchronous Basics: Timers (`setTimeout`, `setInterval`), Promises, Fetch API.
  - Modern ES6+: Template Literals, Destructuring, Spread/Rest operators.

#### 5.3.2 Execution Environment & Console Emulation
- **Secure Sandbox:** Execution isolated inside a sandboxed `<iframe>` to prevent parent window pollution.
- **Strict Ban on `eval()`:** Execution must utilize browser standard script injection (`iframe.contentWindow.document`) or Function constructor isolation—never raw `eval()` in the main execution context.
- **Embedded Console Output:** Custom output terminal capturing `console.log`, `console.warn`, `console.error`, and runtime uncaught exceptions so students see JavaScript output without needing to open developer DevTools.
- **Controls:** Run, Clear Console, Reset Code, and Copy Code.

---

### 5.4 Projects Section

#### 5.4.1 Project Catalog Criteria
- Every project listed in the Projects catalog must be a **fully realized, functional web project**.
- **No Placeholder / Fake Links:** Every card must lead to a functioning project demo page with source code inspection. Dead links (`href="#"`) are strictly forbidden in production project cards.
- Project cards must feature:
  - Project Title & High-resolution Preview thumbnail/mockup.
  - Descriptive summary explaining learning takeaways.
  - Technology badges (e.g., `HTML5`, `CSS Grid`, `Vanilla JS`, `LocalStorage`).
  - Action buttons: "Live Demo" and "View Source Code".

#### 5.4.2 Sample Approved Starter Projects
1. **Interactive Calculator:** Clean UI utilizing CSS Grid, event delegation, and arithmetic parsing.
2. **Digital & Analog Clock:** Real-time clock using JavaScript `Date()` object and CSS transform rotations.
3. **Interactive To-Do List:** Task manager featuring DOM manipulation, task filters, and `localStorage` persistence.
4. **Dynamic Weather / Currency Widget:** Interface demonstrating asynchronous DOM updates and responsive layouts.
5. **Personal Portfolio Template:** Multi-section responsive site incorporating dark theme patterns from PLAY-CODE.

---

### 5.5 Browser-Based Code Editor (Playground)

#### 5.5.1 Layout & Interface
- Dedicated full-featured sandbox accessible from the top navbar and hero CTA ("Open Editor").
- Three distinct editing tabs or panes:
  1. **HTML Pane:** Markup input.
  2. **CSS Pane:** Stylesheet rules.
  3. **JavaScript Pane:** Script logic.
- Adjustable split-screen or tabbed mobile layout with an integrated live preview viewport.

#### 5.5.2 Functional Controls
- **Run (Execute):** Compiles HTML, CSS, and JS into a clean data string and renders it into a sandboxed preview `<iframe>`.
- **Auto-Run Toggle (Optional):** User-selectable toggle for instant live rendering.
- **Reset:** Reverts the workspace to a clean, boilerplate template (`<!DOCTYPE html>...`).
- **Copy:** Copies bundled or selected pane code to clipboard.
- **Download / Export:** Bundles the code into a downloadable single `.html` file.
- **Responsive Viewport Toggles:** Buttons to preview the result at Mobile (375px), Tablet (768px), and Desktop (100%) widths.

---

## 6. Non-Functional & Quality Requirements

### 6.1 Usability & Visual Consistency
- Visual design must be an exact, faithful extension of `index.html` and `style.css`.
- Identical typography (`Poppins`), color hierarchy (`#0B1120`, `#111827`, `#4F46E5`, `#06B6D4`), border radii, and spacing standards across all subpages.
- Interactive controls must provide clear hover, active, and focus states.

### 6.2 Responsive Design
- The platform must function seamlessly across all screen viewports:
  - Mobile Phones (320px – 480px)
  - Tablets & Phablets (481px – 768px)
  - Small Laptops / Tablets Landscape (769px – 1024px)
  - Desktop Displays (1025px – 1920px+)
- Fluid wrapping, touch-friendly tap targets (minimum 44x44px), and collapsible navigation for smaller screens.

### 6.3 Performance & Zero Dependencies
- Zero external dependencies: no React, Vue, jQuery, Tailwind runtime, Bootstrap, or NPM bundlers.
- Extremely fast initial paint and minimal network payload (pure static files).
- Client-side execution without server-side compute overhead.

### 6.4 Security
- Sandboxed iframes (`sandbox="allow-scripts allow-modals"`) to isolate user-submitted code from accessing host cookies, local storage, or window navigation.
- No direct usage of `eval()`.
- Explicit sanitization for console capture.

---

## 7. Current Project Baseline & Verification Matrix

| Area | Current State in Repository | Required Target State | Verification Status |
| :--- | :--- | :--- | :--- |
| **Landing Page** | `index.html` present with full markup, branding ("CodePlay"), hero, category grid, featured examples, creator profile, footer. | Unify branding to PLAY-CODE (as requested by NASA-KUN) and activate functional links. | **Verified existing**; edits currently frozen per Phase 0 rules |
| **Global Styles** | `style.css` present with complete styling (632 lines), custom scrollbar, glassmorphic cards, gradients, animations. | Shared stylesheet or modular sub-stylesheets for subpages. | **Verified existing** |
| **Subpages (`pages/`)** | Anchor links point to `pages/html.html`, `pages/css.html`, `pages/javascript.html`, `pages/projects.html`, but directory and files do not exist. | Create structured pages following the verified architecture and design. | **Unimplemented (Pending Phase 1–6)** |
| **JavaScript Logic** | Zero `.js` files in repo. Search input, button clicks, and code runner logic are currently nonfunctional. | Add modular vanilla JS files for navigation, search, runner, and storage. | **Unimplemented (Pending Phase 1–7)** |
| **HTML Inventory** | Requirement established (166 lessons). Master source titles file is not yet committed to the repo. | Ingest raw 166-entry list from NASA-KUN and implement catalog cards. | **Requirement Confirmed; Ingestion Pending Phase 1** |

---

## 8. Stakeholder Approval & Sign-Off

This document constitutes the official specification for the PLAY-CODE platform. Any deviation from these specifications requires explicit confirmation and approval from project owner **NASA-KUN**.
