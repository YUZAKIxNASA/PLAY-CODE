# Development Rules & AI Engineering Guidelines — PLAY-CODE

---

## Preamble

This document sets forth the non-negotiable operational rules and engineering standards governing all current and future development, refactoring, and AI-assisted contributions to the **PLAY-CODE** platform. Every engineer, contributor, and AI model operating on this repository is bound by these rules.

---

## RULE 1: TECHNOLOGY RESTRICTIONS (Pure Vanilla Web Stack)

1.1 **Permitted Technologies Only:**
   - Standard semantic **HTML5**
   - Standard **CSS3**
   - Standard **Vanilla JavaScript (ECMAScript 6+)**

1.2 **Strict Ban on External Frameworks & Preprocessors:**
   - Do **NOT** install, import, or introduce any JavaScript libraries or frameworks (e.g., React, Vue, Angular, Svelte, Alpine.js, jQuery).
   - Do **NOT** introduce any CSS frameworks, preprocessors, or utility engines (e.g., Tailwind CSS, Bootstrap, Bulma, Foundation, Sass, Less).
   - Do **NOT** introduce Node.js or server-side runtimes (Express, NestJS, Next.js).
   - Do **NOT** introduce Python, Ruby, PHP, or Go backends.
   - Do **NOT** introduce build tools, task runners, or bundlers (Webpack, Vite, Rollup, Parcel, Babel, Gulp).

1.3 **Standard Browser APIs:**
   - All functionality must execute natively in modern web browsers without a compilation or build step.
   - Third-party CDN scripts or dependencies are prohibited unless NASA-KUN gives prior written consent.

---

## RULE 2: DESIGN PRESERVATION (Authority of `index.html`)

2.1 **Primary Visual Anchor:**
   - The existing `index.html` file is the master visual, structural, and aesthetic reference for the entire platform.
   - Its layout, visual hierarchy, color scheme, typography, card shapes, spacing conventions, and interactive behaviors are canonical.

2.2 **Protection Against Unwanted Changes:**
   - Do **NOT** redesign, restyle, or change the existing layout of `index.html`.
   - Do **NOT** replace the existing color palette, logo styling (`&lt;/&gt; CodePlay` / `PLAY-CODE`), hero typography, creator card (`NASA-YUZAKI`), or footer.
   - Existing CSS declarations in `style.css` must not be deleted or overridden haphazardly.

---

## RULE 3: DESIGN CONSISTENCY (Uniform Design System)

3.1 **Single Design Language:**
   - Every newly created page, modal, component, drawer, and interface element must adhere strictly to the design system established in `style.css`.
   - Never introduce an unrelated color theme (e.g., bright light-mode skins, alien color palettes, inconsistent gradients, or mismatched fonts).

3.2 **Mandatory Design Tokens:**
   - Backgrounds: Dark navy `#0B1120`, Card surfaces `#111827`, Input surfaces `#111827`.
   - Primary Accent: Indigo `#4F46E5`.
   - Secondary / Cyan Accent: `#06B6D4`.
   - Typography: `'Poppins', sans-serif` across all headings, body text, buttons, and navigation.
   - Border Radii: `14px` for buttons, `20px` to `24px` for cards, `30px` to `50px` for pills/search inputs.
   - Transitions: Smooth micro-interactions (`0.3s` to `0.4s` ease) with standard translateY hovers.

---

## RULE 4: FUNCTIONALITY (No Fake or Decorative Controls)

4.1 **Real, Working Implementations:**
   - Every button, link, search box, tab, runner control, and interactive widget presented to the user must be fully implemented and functional.
   - Do **NOT** create decorative buttons or placeholder controls that visually appear functional but perform no action when clicked.

4.2 **Elimination of Dead Links:**
   - Do **NOT** use non-functional anchor links (`href="#"` or `href="javascript:void(0)"`) in completed sections or project showcases.
   - All links must navigate to existing, verified URLs or trigger verified JavaScript action handlers.

4.3 **Interactive Sandboxes:**
   - Code editor Run, Reset, and Copy controls must genuinely execute code, reset state, and copy text to the system clipboard, providing clear feedback.

---

## RULE 5: SOURCE CODE SAFETY (Zero Destructive Operations)

5.1 **Preservation of Existing Code:**
   - Never delete existing files or overwrite functioning code without explicit, documented authorization from NASA-KUN.
   - Work additively: expand and connect features rather than wiping existing assets.

5.2 **Atomic Changes & Rollback Readiness:**
   - Ensure every edit leaves the codebase in a working, valid state.
   - Never break working features to implement new ones.

---

## RULE 6: LESSON INVENTORY INTEGRITY (166 HTML Entries)

6.1 **Strict Inventory Preservation:**
   - The HTML curriculum contains exactly **166 supplied lesson entries**.
   - The original numbering (from 001 to 166) and original sequence must be maintained with 100% fidelity.

6.2 **No Silent Merging or Renaming:**
   - Do **NOT** silently delete, merge, consolidate, reorder, or rename lesson entries.
   - Even if duplicate lesson titles or non-standard phrasings exist in the source catalog, they must be preserved exactly as supplied until NASA-KUN explicitly orders a specific correction.

---

## RULE 7: RESPONSIVENESS (Mobile-First & Cross-Device Parity)

7.1 **Multi-Device Support:**
   - Every page, component, and lesson view must be responsive and tested across:
     - Mobile screens (320px – 480px)
     - Tablets (481px – 768px)
     - Laptops (769px – 1024px)
     - Large Desktops (1025px+)

7.2 **Mobile Usability Standards:**
   - Navigation must collapse cleanly or adapt to vertical layouts on screens below `900px` (following the existing `@media(max-width:900px)` breakpoint in `style.css`).
   - Touch targets must be comfortably clickable (minimum 44x44px).
   - No horizontal scroll leakage (`overflow-x: hidden` enforcement).

---

## RULE 8: ERROR HANDLING & CODE INTEGRITY

8.1 **Strict Path Checking:**
   - Always verify relative paths between root (`/`) and subfolders (`/pages/`, `/css/`, `/js/`, `/data/`).
   - Prevent 404 file errors, missing stylesheet links, and broken image sources.

8.2 **Browser Console Cleanliness:**
   - No unhandled runtime exceptions, syntax errors, or uncaught promise rejections may appear in the host browser console.
   - Missing query parameters (e.g., accessing `html-lesson.html` without `?lesson=X`) must be caught and gracefully redirected to a safe default (Lesson 001).

8.3 **Secure Sandbox Protocols:**
   - Never use `eval()` to execute arbitrary code from user editor inputs.
   - Code execution must use sandboxed `<iframe>` environments with strict isolation.

---

## RULE 9: HONEST REPORTING & TRANSPARENCY

9.1 **Zero Fabrication of Progress:**
   - Never claim a feature is "complete", "working", or "tested" unless it has actually been created, connected, and verified in the real environment.
   - If a feature is planned, mark it as **Planned** or **Incomplete**.
   - If a requirement cannot be verified due to missing information in the repository, explicitly label it as **Unverified** rather than inventing details.

9.2 **Explicit Limitation Disclosure:**
   - Always document edge cases, limitations, and missing assets in `Memory.md`.

---

## RULE 10: DOCUMENTATION MAINTENANCE

10.1 **Living Documentation:**
   - Whenever an approved change is made to the requirements, technical architecture, design tokens, or implementation progress, the six core planning documents (`PRD.md`, `Architecture.md`, `Rules.md`, `Phases.md`, `Design.md`, `Memory.md`) must be kept synchronized.

10.2 **Professional Standards:**
   - All documentation must be written in clear, concise, and professional technical English.

---

## RULE 11: USER APPROVAL & GOVERNANCE

11.1 **Approval Triggers:**
   You must pause and request explicit user confirmation from **NASA-KUN** before undertaking any of the following:
   - Introducing any third-party script, font, icon pack, or library.
   - Deleting, renaming, or restructuring existing files or directories.
   - Altering the visual design or branding of `index.html`.
   - Modifying the text, title, or order of any of the 166 HTML lessons.
   - Introducing backend logic or database infrastructure.

---

## RULE 12: MULTI-LANGUAGE TRANSLATION & REQUIREMENT PRESERVATION

12.1 **Linguistic Flexibility:**
   - The project owner, NASA-KUN, communicates fluently across multiple languages:
     - Pure English
     - Pure Hindi (Devanagari script)
     - Roman Hindi / Hinglish (e.g., *"bhai mujhe html ke sare 166 lessons chahiye bina kisi change ke"*).

12.2 **Faithful Technical Translation:**
   - Whenever instructions are received in Hindi, Hinglish, or Roman Hindi, the engineer or AI model must:
     1. Fully comprehend the technical essence, nuances, and constraints of the statement.
     2. Translate and formulate the requirement into clear, unambiguous technical English.
     3. Record the requirement in the appropriate project document (`PRD.md`, `Phases.md`, or `Memory.md`).
   - Do **NOT** discard, truncate, or simplify requirements merely because they were expressed in informal or colloquial language.
   - When an instruction is ambiguous or contains conflicting interpretations, explicitly ask NASA-KUN for clarification in plain language before proceeding.
