import json

def make_lesson(lid, title, cat, intro, expl, syn, props, html, css, expected, notes, mistakes):
    return {
        "id": lid,
        "number": f"{lid:03d}",
        "title": title,
        "category": cat,
        "introduction": intro,
        "explanation": expl,
        "syntax": syn,
        "selectorsOrProps": props,
        "htmlExample": html,
        "cssExample": css,
        "expectedOutput": expected,
        "notes": notes,
        "commonMistakes": mistakes
    }

print("make_lesson defined")
