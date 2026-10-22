import json
from batch1 import get_batch1
from batch2 import get_batch2
from batch3 import get_batch3
from batch4 import get_batch4

raw_titles = [
    "HTML Element selector", "ID Slector()", "CSS ID Selector (#id)", "CSS Class Selector (.class)", "CSS Grouping Selector (,)",
    "Inline style", "Embedded style", "External style", "CSS Attribute Selectors", "CSS Attribute Equals Selector ([attr=\"value\"])",
    "CSS Attribute Contains Selector ([attr*=\"value\"])", "CSS Attribute Starts With Selector ([attr^=\"value\"])",
    "CSS Attribute With Space Selector ([attr~=\"value\"])", "CSS Attribute With Pipe Selector ([attr|=\"value\"])",
    "CSS Combinators", "CSS Descendant Selector", "CSS Child Selector", "CSS Adjacent Sibling Selector", "CSS General Sibling Selector",
    "Text and background color", "Font in css", "Text Properties", "Font-weight", "Word-spacing", "Letter-spacing", "Line-height",
    "Link in css", "CSS Margins", "CSS Padding", "CSS Width and Height", "CSS Min-width and Max-width", "CSS Min-height and Max-height",
    "CSS Box Model", "CSS Display Property", "Display", "List Style", "Table Style", "Border style", "Border-radius", "Border-color",
    "CSS Outline", "CSS Outline Offset", "Opacity", "Fixed position", "Static position", "Relative position", "absolute position",
    "Absolute position", "Absolute with image", "Fixed footer", "CSS Float and Clear", "Float", "Float and clear", "CSS Flexbox",
    "CSS Flex Direction", "CSS Justify Content", "CSS Align Items", "CSS Align Self", "CSS Align Content", "CSS Flex Wrap",
    "CSS Grid vs. Table Layout", "Fraction unit with multiple column", "Grid gap", "Grid template rows", "Column repeat",
    "Repeat - auto-fit", "CSS Units (px, em, rem, vh, vw, etc.)", "CSS Calc() Function", "CSS Clamp() Function",
    "CSS Min() and Max() Functions", "CSS Specificity", "Specificity Rules 1", "Specificity Rules 2", "First-child", "Last-child",
    "nth-child", "nth-child odd and even", "nth-last-child", "first-line", "::first-letter", "::before", "::after", ":focus",
    "::selection", "Lang", "Lang pseudo class", "Active psuedo class 1", "Active psuedo class 2", "Input:checked",
    "Input:checked for dropdown", "Required", "Optional", "Disabled", "Valid", "Out-of-range", "Read-only and read-write",
    "Empty selector", "Change li color", "Simple tooltip", "Top bottom right and left tool", "Background-image", "Background-repeat",
    "Background-size", "CSS Shadows", "CSS Box Shadow", "CSS Text Shadow", "CSS Transitions", "CSS Transition Delay",
    "CSS Transition Duration", "CSS Transition Timing Function", "Transition duration & property", "transition-delay",
    "timing-function", "CSS Transformations", "CSS Translate", "Translate x-axis", "Translate y-axis", "Translate shorthand",
    "Translate realtime example", "CSS Scale", "Scale x axis", "Scale y axis", "Scale shorthand", "Scale realtime example",
    "CSS Rotate", "Rotate x-axis", "Rotate y-axis", "Rotate z-axis", "Rotate real time example", "CSS Skew", "Skew x-axis",
    "Skew y-axis", "Skew shorthand", "Skew realtime example", "Combining transforms", "CSS Transform Origin", "CSS Perspective",
    "CSS Perspective Origin", "CSS 3D Transforms", "CSS Animations", "CSS Keyframes", "CSS Animation Iteration Count",
    "CSS Animation Direction", "CSS Animation Fill Mode", "Keyframes from - to", "Keyframes percentage", "Simple CSS Animation",
    "Background Image Animation", "Image Zoom Animation", "Animation using padding", "Border Animation", "Border shadow animation",
    "CSS tooltip", "CSS Gradients", "CSS Linear Gradient", "CSS Radial Gradient", "CSS Conic Gradient", "CSS Multi-layer Gradients",
    "CSS Media Queries", "CSS Aspect Ratio", "CSS Variables", "CSS variable 1", "CSS variable not assigned",
    "CSS variable DOM's structure", "CSS Nesting", "CSS Container Queries", "CSS Subgrid", "CSS Clip Path", "CSS Masking",
    "CSS Filters", "CSS Image Filters", "CSS Blend Modes", "CSS Scroll Snap", "CSS Custom Scrollbar", "CSS Shape Outside",
    "CSS Line Clamping", "CSS Writing Modes", "CSS Logical Properties", "CSS Cascade Layers", "CSS Typography Best Practices",
    "CSS Sticky Elements", "CSS Fixed Footer and Header", "CSS Placeholder Styling", "CSS Checkbox and Radio Styling",
    "CSS Tooltip Styling", "CSS Modal Windows", "CSS Flip Cards", "CSS Parallax Effects", "@supports", "ellipsis", "image-rendering",
    "Attention to an element", "Basic responsiveness", "Row Number", "Find no alt attribute", "Content attr value", "Content: url()",
    "Incremental counter", "Open & close quote", "Global quotes", "xx-large", "CSS Border Radius", "Max-width and width",
    "First-letter", "before", "after", "Column-count", "Column-gap", "Column-rule", "CSS Backdrop Filter"
]

all_lessons = get_batch1() + get_batch2() + get_batch3() + get_batch4()

print(f"Total compiled lessons: {len(all_lessons)}")
assert len(all_lessons) == 210, f"Expected 210, got {len(all_lessons)}"

for i, lesson in enumerate(all_lessons):
    expected_id = i + 1
    expected_title = raw_titles[i]
    assert lesson["id"] == expected_id, f"Lesson ID mismatch at index {i}: expected {expected_id}, got {lesson['id']}"
    assert lesson["number"] == f"{expected_id:03d}", f"Number mismatch at {expected_id}"
    assert lesson["title"] == expected_title, f"Title mismatch at {expected_id}: expected '{expected_title}', got '{lesson['title']}'"

print("All 210 lessons verified with 100% fidelity!")

# Format output as JS module
header = """/**
 * PLAY-CODE (@N4) — Master CSS 210 Lessons Curriculum Dataset
 * Project Owner: NASA-KUN
 * Exact Authoritative Inventory (1 to 210)
 * Strict Fidelity: Preserves exact titles, historical spellings, and original ordering.
 */

const CSS_LESSONS = """

footer = """;

if (typeof window !== 'undefined') {
  window.CSS_LESSONS = CSS_LESSONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CSS_LESSONS;
}
export default CSS_LESSONS;
"""

with open("data/css-lessons.js", "w", encoding="utf-8") as f:
    f.write(header + json.dumps(all_lessons, indent=2) + footer)

print("data/css-lessons.js written successfully!")
