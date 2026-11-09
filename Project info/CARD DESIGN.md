# CARD DESIGN SPECIFICATION & PERMANENT GUIDELINES — CODEPLAY

---

## 1. Document Control & Authority

- **Document Title:** Master Card Design & Layout Specification (`CARD DESIGN.md`)
- **Platform:** CodePlay (PLAY-CODE)
- **Project Lead:** NASA-KUN (`@ঔৣ፝ N4!` / `@YUZAKI_X_NASA`)
- **Authority Level:** **Permanent & Mandatory Standard**
- **Scope:** Applies to all existing cards across Sections 1 through 10, the Practice Projects card, and every future card and section added to CodePlay (Sections 11 through 20+).
- **Core Requirement:** This document must be read, referenced, and strictly enforced whenever any card is created, restyled, audited, or modified.

---

## 2. Core Philosophy & Architectural Intent

Every technology on CodePlay possesses a unique historical identity, culture, and visual signature represented by its official logo. 

Rather than homogenizing all cards with a repetitive, generic dark gray or dull navy surface, CodePlay celebrates technical diversity through **theme-matched jewel-tone cards**. Each card functions as an individual visual showcase for its language or tool, calibrated directly from the logo's dominant palette while remaining seamlessly anchored to CodePlay's dark navy interface (`#0B1120`, `#111827`, `#4F46E5`, `'Poppins'`).

---

## 3. The 10 Permanent Card Design Rules

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   THE 10 COMMANDMENTS OF CARD DESIGN                   │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Logo-Based Background Color     │ 6. Text Contrast & Readability   │
│ 2. Consistent Technology Theme     │ 7. Uniform Geometry & Layout      │
│ 3. Distinct Identity per Card      │ 8. Restrained, Premium Styling    │
│ 4. Harmonious 3-Column Card Rows   │ 9. Projects Card Theme Standard   │
│ 5. Cohesive Logo, Border & Shadow  │ 10. Universal Future Applicability│
└────────────────────────────────────────────────────────────────────────┘
```

---

### RULE 1: Logo-Based Background Color

**Every card's background color must visually match the official logo and dominant brand colors of the programming language, technology, or tool displayed on that card.**

1. **Dominant Color Extraction:**
   - Inspect the official SVG logo of the language.
   - Identify the primary hue that defines the language's visual identity (e.g., Ruby Crimson, Python Green/Blue, Rust Amber, Julia Violet, Haskell Slate-Purple, Go Cyan, Futhark Emerald, Scala Red).
2. **Two-Point Calibrated Gradient:**
   - Every card background must be formulated as a **135° directional linear gradient** (`linear-gradient(135deg, [Color 1], [Color 2])`).
   - **Color 1 (Top-Left):** Derived directly from the logo's dominant color, adjusted for saturation and depth.
   - **Color 2 (Bottom-Right):** A darker, deeper shade of the same color family (or an approved brand secondary) that fades smoothly toward the underlying CodePlay dark theme.
3. **No Unrelated Hues:**
   - Never assign a red background to a blue logo, a green background to a purple logo, or a random neon hue unrelated to the asset.

---

### RULE 2: Consistent Card Theme Across All Sections & Pages

**The same programming language, framework, or technology must always use its identical logo-matching color theme wherever its card appears across the website.**

1. **Global Theme Invariance:**
   - If Python is green/blue, it must use that identical gradient in Section 1, search results, curriculum directories, and recommendation modules.
   - If Lua is deep cobalt `#1E3A8A` to `#0F172A`, it must not appear as orange or gray elsewhere.
2. **Centralized CSS Class Blueprint:**
   - Every language or entry must have a dedicated semantic class in `style.css` (e.g., `.python`, `.lua-lang`, `.rust-lang`, `.scade-lang`, `.rhino-lang`, `.project`).
   - Pages and components must reuse these authoritative classes rather than defining ad-hoc inline background colors.

---

### RULE 3: Different Logos, Different Colors (Zero Uniformity)

**Do not apply one single, identical background color to all cards in a section. Every card must have its own distinct, appropriate background based on its logo.**

1. **Ban on Blanket Navy / Flat Gray Surfaces:**
   - It is strictly forbidden to blanket an entire section with uniform `#111827` or `#1F2937` card backgrounds.
   - Each card in a 50-entry section must feature its own logo-calibrated palette.
2. **Color Diversity Across Grids:**
   - Adjacent cards should celebrate distinct brand colors without collisions.
   - When multiple technologies in the same family share similar hues (e.g., SML, SML/NJ, MLton), calibrate distinct luminosities, second gradient stops, and border tints to maintain individual distinction.

---

### RULE 4: Card Rows & Equalized Grid Harmony

**All cards displayed in the same grid row must adhere to identical geometric standards and alignment, while each card retains its own unique logo-matching background color.**

1. **Equal Height & Flex Distribution:**
   - Cards in the same row must stretch to equal heights via Flexbox column flow:
     ```css
     .category-card {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         height: 100%;
         min-height: 220px;
         box-sizing: border-box;
     }
     ```
2. **Row Alignment Points:**
   - **Top Element:** `<h3>` (Logo + Title) aligned across the top row.
   - **Center Element:** `<p>` (1–2 line description) flex-grow enabled to absorb variation in text length.
   - **Bottom Element:** `.card-bottom` pinned to the bottom border with consistent padding and top divider.
3. **Desktop Grid Standard:**
   - Exactly **3 columns on desktop viewports** (`repeat(3, minmax(0, 1fr))`) with `gap: 24px`.
   - Never allow cards to wrap haphazardly or produce orphan cards with differing widths.

---

### RULE 5: Logo, Background, Border & Shadow Harmony

**The logo, card background, border, gradient, and hover shadow must form a single, coherent, visually connected aesthetic unit.**

1. **Subtle Themed Borders:**
   - Each card must implement a subtle semi-transparent border tinted toward its primary logo color (e.g., `border: 1px solid rgba([BrandRGB], 0.22)`).
2. **Elevation & Hover Glow:**
   - On hover, the card lifts smoothly with `transform: translateY(-8px)`.
   - The hover shadow must emit a soft, atmospheric glow matching the card's theme color:
     ```css
     .category-card.example-lang:hover {
         transform: translateY(-8px);
         border-color: rgba([BrandRGB], 0.55);
         box-shadow: 0 16px 36px -4px rgba([BrandRGB], 0.4), 0 0 20px rgba([BrandRGB], 0.2);
     }
     ```
3. **Anti-Harshness Rule:**
   - Avoid hard 100% opaque borders. Borders must remain translucent (`0.15` to `0.35` opacity) to blend gracefully with the dark navy background.

---

### RULE 6: Readability & WCAG AAA/AA Contrast Compliance

**Maintain strict, uncompromising text contrast so that titles, descriptions, and metadata badges remain effortlessly readable against every colored gradient.**

1. **Contrast Standards:**
   - **Card Titles (`<h3>`):** Pure white `#FFFFFF` (contrast ratio `> 10:1` against gradient surfaces, exceeding WCAG AAA).
   - **Descriptions (`<p>`):** Slate-200 `#E2E8F0` or Slate-300 `#CBD5E1` (contrast ratio `> 7:1`).
   - **Badges (`.coming-soon`, `.practice-badge`):** High-contrast text on semi-translucent dark pill containers (`rgba(0, 0, 0, 0.4)` to `rgba(0, 0, 0, 0.5)`).
2. **Lightness Clamping Policy:**
   - Card backgrounds must never be excessively light.
   - Maximum luminance on gradient stops must not exceed `45%` in HSL color space. If a brand logo is yellow (e.g., JavaScript) or light cyan (e.g., Elm), use deep amber-gold or deep teal-cyan for the card background to preserve white text legibility.
3. **No Gray Wash:**
   - Never wash out text with low-contrast dark grays (`#475569`, `#334155`) on dark surfaces.

---

### RULE 7: Consistent Layout Specifications & Metrics

**Maintain absolute dimensional consistency across all cards throughout the entire website.**

| Layout Property | Specification Metric | Rationale & Rule |
| :--- | :--- | :--- |
| **Desktop Columns** | `repeat(3, minmax(0, 1fr))` | Strict 3-column desktop layout on screens `≥ 900px` |
| **Tablet Columns** | `repeat(2, minmax(0, 1fr))` | 2-column layout on screens `580px – 899px` |
| **Mobile Columns** | `1fr` (Single Column) | 1-column layout on screens `< 580px` |
| **Grid Gap** | `24px` | Strict, uniform spacing between cards horizontally & vertically |
| **Card Padding** | `24px 22px` | Comfortable internal breathing room for content |
| **Card Border Radius** | `20px` to `24px` | Smooth, modern rounded corners |
| **Min Height** | `220px` | Prevents vertically collapsed or inconsistent cards |
| **Logo Dimensions** | `28px × 28px` | Uniform icon presence (`object-fit: contain; flex-shrink: 0;`) |
| **Title Font Size** | `1.3rem` / `700 Bold` | Primary heading hierarchy in `'Poppins', sans-serif` |
| **Description Size** | `0.9rem` / `line-height: 1.55` | Slate body copy with comfortable line-spacing |
| **Card Bottom Padding**| `14px 0 0 0` | Bottom meta row separated by `1px solid rgba(255,255,255,0.1)` |
| **Badge Border Radius**| `10px` to `12px` | Pill tags for `Coming Soon`, counts, and numbers |

---

### RULE 8: Professional Appearance & Restraint

**Use clean, sophisticated, modern styling. Avoid chaotic random colors, clashing neon hues, and distracting visual novelties.**

1. **Jewel-Tone Discipline:**
   - CodePlay cards use deep jewel tones: Sapphire, Emerald, Amethyst, Ruby, Amber, Topaz, Obsidian, and Cobalt.
   - Raw, blinding 100% saturated neon fills (e.g., `#FF00FF`, `#00FF00`, `#FFFF00`) are strictly banned.
2. **Typography Consistency:**
   - All text across cards must render in `'Poppins', sans-serif`.
   - Never introduce secondary system fonts, serif fonts, or comic display fonts inside card content.
3. **Description Quality Standards:**
   - Every card must have a meaningful **1 to 2 line description (80–140 characters)**.
   - Explain what the language/technology is, its core paradigm, and its typical use case.
   - **Zero Tolerance:** Never display `undefined`, `null`, empty strings, or generic filler like `"Language for coding"`.

---

### RULE 9: Practice Projects Card Standard

**Apply the identical design principles to the Practice Projects card, theme-matched to its own logo and identity.**

1. **Logo & Identity:**
   - Uses the official 3D isometric project repository cube vector SVG (`assets/logos/projects.svg`).
2. **Color Palette:**
   - Royal violet / deep jewel purple gradient matching the logo:
     ```css
     background: linear-gradient(135deg, #5B21B6, #240E4A);
     border: 1px solid rgba(167, 139, 250, 0.25);
     ```
3. **Distinct Content & Badging:**
   - Title: `Projects`
   - Description: *"Interactive real-world frontend applications, mini-projects, and hands-on coding sandboxes to build practical developer skills."*
   - Badge: `.practice-badge` displaying `⚡ 3 Practice Projects`.
   - Star Number Badge: Styled with `#FDE047` golden star (`★`) and ambient glow.
4. **Anchor Position:**
   - Permanently anchored as the **final card** in the category grid (position 501, placed after all 500 programming language cards).
   - Never placed between programming language cards.

---

### RULE 10: Universal Scope & Future Card Creation Protocol

**These rules apply to every existing section (Sections 1–10) and every new card added in the future (Sections 11–20+).**

#### Mandatory Checklist Before Adding or Modifying Any Card:
- [ ] **1. Logo Created & Synced:** Authentic vector SVG exists in **both** `assets/logos/` and `public/assets/logos/`.
- [ ] **2. Dominant Brand Color Extracted:** Primary hue identified from the logo.
- [ ] **3. 135° Jewel-Tone Gradient Defined:** CSS rule added to `style.css` with a 2-point gradient.
- [ ] **4. Themed Border & Hover Elevation Configured:** Subtle translucent border and matching color glow on hover.
- [ ] **5. High-Contrast Text Verified:** White `#FFFFFF` heading and Slate `#E2E8F0` body text meeting WCAG AAA.
- [ ] **6. Meaningful 1–2 Line Description Written:** No `undefined`, `null`, or generic filler.
- [ ] **7. Bottom Meta Row Standardized:** Contains status badge (`Coming Soon` or count) and sequential global number (`#XXX`).
- [ ] **8. 3-Column Desktop Flow Maintained:** Equal height, zero clipping, zero row displacement.
- [ ] **9. Dual-Directory Build Test Passed:** Verified with `compile_applet` and `lint_applet` (0 errors).
- [ ] **10. Documentation Appended:** Historical changes recorded in `Memory.md` and `Design.md`.

---

## 4. Master Technical Implementation Template

### 4.1 Authoritative HTML Card Template

```html
<!-- [Global Number]: [Language Name] -->
<a href="pages/sectionX-entry.html?entry=[NUM]" class="category-card [slug]-lang" data-category="[NUM]">
    <h3>
        <img src="assets/logos/[slug].svg" alt="[Language Name]" class="category-logo"> 
        [Language Name]
    </h3>
    <p>[Accurate, concise 1-2 line description explaining purpose and typical use case.]</p>
    <div class="card-bottom">
        <span class="coming-soon">Coming Soon</span>
        <span class="card-num">[NUM]</span>
    </div>
</a>
```

### 4.2 Authoritative CSS Gradient Blueprint

```css
/* [Language Name] — Logo-Calibrated Jewel-Tone Theme */
.[slug]-lang {
    background: linear-gradient(135deg, [PrimaryBrandColor], [DeeperBrandShade]);
    border: 1px solid rgba([BrandRGB], 0.25);
    box-shadow: 0 4px 20px -2px rgba([BrandRGB], 0.3);
}

.[slug]-lang:hover {
    transform: translateY(-8px);
    border-color: rgba([BrandRGB], 0.55);
    box-shadow: 0 16px 36px -4px rgba([BrandRGB], 0.45), 0 0 20px rgba([BrandRGB], 0.2);
}
```

### 4.3 SVG Logo Asset Standard

- **ViewBox:** `0 0 128 128` (Width & Height `128px`).
- **Corner Radius:** `rx="28"` on the base rectangle.
- **Iconography:** Scalable, crisp paths with stroke widths between `3px` and `8px`.
- **Directory Placement:** Must exist identically in:
  1. `/assets/logos/[slug].svg` (Source directory)
  2. `/public/assets/logos/[slug].svg` (Vite build / distribution directory)

---

## 5. Governance & Immutability Notice

This specification represents the permanent design standard for CodePlay. Any deviation requires direct authorization from project owner **NASA-KUN**. All future contributions must read and adhere to `CARD DESIGN.md`.
