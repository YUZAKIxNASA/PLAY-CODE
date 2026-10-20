# Design System Specification — PLAY-CODE

---

## 1. Design Philosophy & Authority

This document defines the canonical visual design system for **PLAY-CODE**. 

All styling rules, color codes, dimensions, and typography documented herein are directly extracted and verified from the existing source files:
- **Primary HTML File:** `/index.html`
- **Primary Stylesheet:** `/style.css` (632 lines)

Every new page (`pages/*.html`), interactive component, code workspace, and modal must adhere strictly to these verified specifications. No arbitrary color palettes, foreign font families, or misaligned spacing metrics may be introduced.

---

## 2. Global Color System

### 2.1 Primary & Background Colors (Verified)

| Token Name | Hex / CSS Value | Description & Usage |
| :--- | :--- | :--- |
| `--color-bg-base` | `#0B1120` | Root background applied to `<body>`. Deep midnight navy. |
| `--color-surface-card` | `#111827` | Primary surface background for cards, inputs, and sidebars. |
| `--color-surface-elevated`| `#1F2937` | Secondary surface used for social link circles and active states. |
| `--color-primary-accent` | `#4F46E5` | Primary brand accent (Indigo). Logo, primary buttons, accents. |
| `--color-secondary-accent`| `#06B6D4` | Cyan accent. Used in hero radial gradients and glow dividers. |
| `--color-text-primary` | `#FFFFFF` | Primary headings, prominent labels, and active navigation links. |
| `--color-text-secondary` | `#CBD5E1` | Slate 300. Hero subheadings, creator paragraphs, card descriptions. |
| `--color-text-muted` | `#94A3B8` | Slate 400. Captions, metadata, example levels, and footer copyright. |
| `--color-text-placeholder`| `#9CA3AF` | Gray 400. Search input placeholder text. |
| `--color-text-code` | `#E2E8F0` | Slate 200. Preformatted code text inside the hero code window. |
| `--color-nav-link` | `#EAFFEA` | Subtle off-white / light tint used on header navigation links. |

### 2.2 Glassmorphic & Border Colors (Verified)

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `--glass-navbar` | `rgba(11, 17, 32, 0.8)` | Sticky header with `backdrop-filter: blur(20px)` |
| `--glass-code-window`| `rgba(255, 255, 255, 0.05)` | Hero code window with `backdrop-filter: blur(15px)` |
| `--glass-badge` | `rgba(255, 255, 255, 0.08)` | Hero pill badge background |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Default border on cards, code windows, and dividers |
| `--border-badge` | `rgba(255, 255, 255, 0.1)` | Border for pill badges and secondary button hovers |
| `--border-secondary` | `rgba(255, 255, 255, 0.15)` | Initial border on the secondary button (`.btn-secondary`) |

### 2.3 Category & Curriculum Gradients (Verified)

| Category / Language | Gradient CSS Definition |
| :--- | :--- |
| **HTML** | `linear-gradient(135deg, #FF7B00, #FF5500)` |
| **CSS** | `linear-gradient(135deg, #2196F3, #0057FF)` |
| **JavaScript** | `linear-gradient(135deg, #FFD600, #FFB300)` |
| **Projects** | `linear-gradient(#A855F7, #A855F7, #A855F7)` |
| **PHP** | `linear-gradient(135deg, #7873F5, #5B4BFF)` |
| **Python** | `linear-gradient(135deg, #4CAF50, #8BC34A)` |
| **SQL** | `linear-gradient(135deg, #00C9FF, #00E5FF)` |
| **TypeScript** | `linear-gradient(135deg, #FF4FA3, #FF6FB5)` |
| **Java** | `linear-gradient(135deg, #FF5252, #FF7043)` |
| **C#** | `linear-gradient(135deg, #2979FF, #448AFF)` |
| **C++** | `linear-gradient(135deg, #7CB342, #9CCC65)` |
| **Go** | `linear-gradient(135deg, #FF9800, #FFC107)` |
| **Rust** | `linear-gradient(135deg, #FF9800, #FFB74D)` |
| **Kotlin** | `linear-gradient(135deg, #00E676, #69F0AE)` |

---

## 3. Typography & Hierarchy

### 3.1 Font Family
- **Master Font:** `'Poppins', sans-serif`
- **Google Fonts Import:** `wght@300;400;500;600;700`
- **Global Reset:** Applied universally via `* { font-family: 'Poppins', sans-serif; }`

### 3.2 Hierarchy Scale (Verified)

| Element / Class | Font Size | Font Weight | Line Height | Letter Spacing / Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (`.hero h1`)** | `4rem` (Desktop)<br>`2.8rem` (Mobile) | `700` (Bold) | `1.1` | High impact display heading |
| **Section Title (`section h2`)** | `2.5rem` (Desktop)<br>`2rem` (Mobile) | `700` (Bold) | Normal | Centered with Indigo underline accent bar |
| **Footer Title (`footer h3`)** | `2rem` | `700` (Bold) | Normal | Centered brand name |
| **Logo (`.logo`)** | `1.6rem` | `700` (Bold) | Normal | `#4F46E5` color |
| **Card Heading (`h3`)** | `1.5rem` | `600` / `700` | Normal | Category and Creator headings |
| **Hero Body (`.hero p`)** | `1.1rem` | `400` (Regular) | `1.8` | `#CBD5E1` color |
| **Nav Links (`.nav a`)** | `1rem` | `500` (Medium) | Normal | `#EAFFEA` color, smooth transitions |
| **Buttons (`.btn-*`)** | `1rem` | `600` (SemiBold) | Normal | Bold CTA text |
| **Body / Captions** | `0.9rem – 1rem` | `400` (Regular) | `1.6 – 1.8` | Text clarity and readability |
| **Code Pre (`pre`, `code`)** | Monospace / Poppins | `400` | `1.8` | `#E2E8F0` color |

---

## 4. Layout, Spacing & Container Metrics

### 4.1 Page Gutters & Section Padding
- **Horizontal Page Gutter:** `7%` on desktop (`padding: 18px 7%` on navbar; `padding: 0 7%` on hero).
- **Section Vertical Padding:** Default `padding: 10px` with `margin-bottom: 40px – 50px` under headings.
- **Max Hero Container:** Content wrapper constrained to `max-width: 600px`.
- **Hero Code Window:** Fixed width of `420px` on desktop; fluid `100%` on mobile screens `<= 900px`.

### 4.2 Grid Specifications
- **Category Grid (`.category-grid`):**
  - Layout: `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
  - Gap: `25px`
- **Example Grid (`.example-grid`):**
  - Layout: `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`
  - Gap: `25px`

---

## 5. Components & UI Elements

### 5.1 Navbar & Header (`.navbar`)
- **Positioning:** Sticky (`position: sticky; top: 0; z-index: 1000;`)
- **Surface:** `background: rgba(11, 17, 32, 0.8); backdrop-filter: blur(20px);`
- **Padding:** `18px 7%`
- **Search Input:**
  - Dimensions: `width: 260px` (desktop), `100%` (mobile)
  - Padding: `12px 18px`
  - Shape: Fully rounded pill (`border-radius: 50px`)
  - Colors: Surface `#111827`, Text `#FFFFFF`, Placeholder `#9CA3AF`, No border.
- **Nav Links:** Flex layout with `gap: 20px`, text color `#EAFFEA`, weight `500`.

### 5.2 Buttons & Badges
- **Primary Button (`.btn-primary`):**
  - Dimensions: `padding: 14px 60px; border-radius: 14px;`
  - Palette: Background `#4F46E5`, Text `#FFFFFF`, Weight `600`.
  - Hover Interaction: `transform: translateY(-4px); box-shadow: 0 15px 35px rgba(79, 70, 229, 0.4);`
- **Secondary Button (`.btn-secondary`):**
  - Dimensions: `padding: 14px 60px; border-radius: 14px;`
  - Palette: Background transparent, Border `1px solid rgba(255, 255, 255, 0.15)`, Text `#FFFFFF`.
  - Hover Interaction: `background: rgba(255, 255, 255, 0.08);`
- **Hero Pill Badge (`.badge`):**
  - Dimensions: `padding: 10px 18px; border-radius: 30px;`
  - Palette: Background `rgba(255, 255, 255, 0.08)`, Border `1px solid rgba(255, 255, 255, 0.1)`.
- **Creator Badge (`.creator-badge`):**
  - Dimensions: `padding: 8px 15px; border-radius: 20px;`
  - Palette: Background `#4F46E5`, Text `#FFFFFF`.

### 5.3 Cards & Surface Blocks
- **Category Card (`.category-card`):**
  - Padding: `30px`
  - Shape: `border-radius: 24px`
  - Interaction: `transition: 0.4s;` Hover: `transform: translateY(-10px);`
- **Example Card (`.example-card`):**
  - Surface: `#111827`, Border `1px solid rgba(255, 255, 255, 0.08)`
  - Padding: `25px`
  - Shape: `border-radius: 20px`
  - Interaction: `transition: 0.3s;` Hover: `transform: translateY(-8px); border-color: #4F46E5;`
- **Hero Code Window (`.code-window`):**
  - Surface: `rgba(255, 255, 255, 0.05)`, Border `1px solid rgba(255, 255, 255, 0.08)`
  - Backdrop Blur: `15px`
  - Shape: `border-radius: 24px`
  - Animation: Floating keyframe (`@keyframes float` translateY -15px over 4s infinite ease-in-out).
- **Creator Card (`.creator-card`):**
  - Surface: `#111827`, Border `1px solid rgba(255, 255, 255, 0.08)`
  - Padding: `40px`
  - Shape: `border-radius: 30px`
  - Features list items: Surface `#0B1120`, Padding `15px`, Border-radius `15px`.
  - Avatar circle: `180px x 180px`, Border `4px solid #4F46E5`, Circle radius `50%`.

### 5.4 Visual Dividers & Section Accent Bars
- **Heading Accent Underline (`section h2::after`):**
  - Width: `80px`
  - Height: `4px`
  - Surface: `#4F46E5`
  - Margin: `15px auto 0`
  - Radius: `10px`
- **Glowing Horizontal Divider (`.section-line`):**
  - Height: `2px`
  - Gradient: `linear-gradient(90deg, transparent, #4F46E5, #06B6D4, transparent)`
  - Margin: `20px 0`

---

## 6. Specification for New Curriculum Interfaces

### 6.1 Lesson Card Design (HTML 166-Lesson Grid)
To maintain 100% harmony with existing `.example-card` styles, newly generated lesson cards shall implement:
```css
.lesson-card {
  background: #111827;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: #fff;
  transition: 0.3s ease;
  position: relative;
}

.lesson-card:hover {
  transform: translateY(-8px);
  border-color: #4F46E5;
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.2);
}

.lesson-badge {
  font-size: 0.85rem;
  font-weight: 700;
  color: #06B6D4;
  background: rgba(6, 182, 212, 0.1);
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 12px;
  width: fit-content;
}
```

### 6.2 Interactive Code Workspace & Preview Pane
For the dedicated lesson workspace (`pages/html-lesson.html`) and IDE (`pages/editor.html`):
- **Editor Container:**
  - Dark surface: `#0E1726` with border `1px solid rgba(255, 255, 255, 0.1)`.
  - Monospace code font: `'Fira Code', 'Courier New', monospace`, font-size `14px`, line-height `1.7`.
  - Inset padding: `20px`.
  - Border radius: `16px`.
- **Runner Action Bar:**
  - Surface: `#111827`
  - Buttons:
    - Run Button: Background `#4F46E5`, Color `#FFFFFF`, Padding `8px 20px`, Radius `10px`, Hover shadow.
    - Reset Button: Border `1px solid rgba(255, 255, 255, 0.2)`, Color `#E2E8F0`, Radius `10px`.
    - Copy Button: Background `#1F2937`, Color `#FFFFFF`, Radius `10px`.
- **Live Preview Window (`iframe`):**
  - Background: `#FFFFFF` (clean white sheet to accurately reflect web standards).
  - Shape: `border-radius: 16px`, Border `1px solid rgba(255, 255, 255, 0.1)`.
  - Shadow: `0 10px 25px rgba(0, 0, 0, 0.3)`.

---

## 7. Responsive Breakpoints & Mobile Behavior

### 7.1 Verified Breakpoint
- **Primary Mobile Breakpoint:** `@media(max-width: 900px)` (Authoritative in `style.css`)
  - `.hero`: Switches to `flex-direction: column; text-align: center; gap: 50px;`
  - `.hero h1`: Scales down from `4rem` to `2.8rem`.
  - `.code-window`: Expands from `width: 420px` to `width: 100%`.
  - `.navbar`: Stacks to `flex-direction: column; gap: 15px;`
  - `.search-box input`: Stretches to `width: 100%`.
  - `.creator-card`: Reorients to `flex-direction: column; text-align: center;`
  - `.creator-right h2`: Scales from `2.5rem` to `2rem`.

### 7.2 Extended Responsive Recommendations (Standardization)
- **Mobile Handsets (`< 600px`):**
  - Category and Example grids fold to single column (`1fr`).
  - Hero action buttons stack vertically (`width: 100%`).
  - Action button padding scales to `12px 24px`.

---

## 8. Accessibility & Ergonomics

1. **Color Contrast:**
   - White text (`#FFFFFF`) on `#0B1120` achieves a contrast ratio of > 15:1 (well above WCAG AAA 7:1 standard).
   - Secondary text (`#CBD5E1`) achieves > 10:1.
   - Button accent `#4F46E5` on white text achieves 5.6:1 (meets WCAG AA 4.5:1 standard).
2. **Keyboard Focus States:**
   - All interactive elements (`a`, `button`, `input`, `textarea`) must provide a clear focus ring:
   ```css
   :focus-visible {
     outline: 2px solid #06B6D4;
     outline-offset: 3px;
   }
   ```
3. **Motion Sensitivity:**
   - Respect user preference for reduced motion:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .code-window { animation: none !important; }
     * { transition-duration: 0.01ms !important; }
   }
   ```
