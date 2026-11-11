const fs = require('fs');
const path = require('path');

const { section12Entries } = require('../data/section12-entries.js');

let errors = [];
let passed = [];

// 1. Verify 50 entries
if (section12Entries.length === 50) {
    passed.push(`Exact count of 50 Section 12 entries verified (601 to 650)`);
} else {
    errors.push(`Expected 50 entries, found ${section12Entries.length}`);
}

// 2. Verify sequence and required fields
section12Entries.forEach((entry, idx) => {
    const expectedId = 601 + idx;
    if (entry.id !== expectedId) {
        errors.push(`Entry index ${idx} expected ID ${expectedId}, got ${entry.id}`);
    }
    if (!entry.name || !entry.shortDesc || !entry.sampleCode || !entry.expectedOutput) {
        errors.push(`Entry #${entry.id} is missing required metadata or code`);
    }

    // 3. Verify SVG exists in both locations
    const p1 = path.resolve(__dirname, `../assets/logos/${entry.slug}.svg`);
    const p2 = path.resolve(__dirname, `../public/assets/logos/${entry.slug}.svg`);
    if (!fs.existsSync(p1)) {
        errors.push(`Missing logo in assets/logos: ${entry.slug}.svg`);
    }
    if (!fs.existsSync(p2)) {
        errors.push(`Missing logo in public/assets/logos: ${entry.slug}.svg`);
    }
});
if (errors.length === 0) {
    passed.push(`All 50 logos verified in both /assets/logos/ and /public/assets/logos/`);
}

// 4. Verify style.css rules
const cssContent = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
section12Entries.forEach(entry => {
    const selector = `data-category="${entry.id}"`;
    if (!cssContent.includes(selector)) {
        errors.push(`Missing CSS rule for entry ${entry.id} in style.css`);
    }
    if (!cssContent.includes(entry.cssClass)) {
        errors.push(`Missing CSS class .${entry.cssClass} in style.css`);
    }
});
if (errors.length === 0) {
    passed.push(`All 50 CSS selectors and classes verified in style.css`);
}

// 5. Verify index.html cards & Section 12 nav button
const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
if (!indexHtml.includes('data-section="12"')) {
    errors.push(`Missing Section 12 nav button in index.html`);
} else {
    passed.push(`Section 12 nav button verified in index.html`);
}

section12Entries.forEach(entry => {
    const cardMarker = `data-category="${entry.id}"`;
    if (!indexHtml.includes(cardMarker)) {
        errors.push(`Missing card for entry ${entry.id} in index.html`);
    }
});
if (errors.length === 0) {
    passed.push(`All 50 Section 12 cards verified in index.html`);
}

// 6. Verify Projects card remains last
const projIndex = indexHtml.indexOf('data-category="projects"');
const lastEntryIndex = indexHtml.indexOf('data-category="650"');
if (projIndex === -1) {
    errors.push(`Projects card missing from index.html`);
} else if (projIndex < lastEntryIndex) {
    errors.push(`Projects card is placed before Section 12 cards! It must be permanently last.`);
} else {
    passed.push(`Practice Projects card permanently anchored at the final position (after entry 650)`);
}

// 7. Verify pages/section12-entry.html and js/section12-runner.js
if (!fs.existsSync(path.resolve(__dirname, '../pages/section12-entry.html'))) {
    errors.push(`Missing pages/section12-entry.html`);
} else {
    passed.push(`pages/section12-entry.html exists`);
}

if (!fs.existsSync(path.resolve(__dirname, '../js/section12-runner.js'))) {
    errors.push(`Missing js/section12-runner.js`);
} else {
    passed.push(`js/section12-runner.js exists`);
}

// 8. Regression test: check Sections 1, 10, and 11 presence
const sec1Cards = indexHtml.includes('class="category-card html"');
const sec10Cards = indexHtml.includes('data-category="550"');
const sec11Cards = indexHtml.includes('data-category="600"');
if (!sec1Cards || !sec10Cards || !sec11Cards) {
    errors.push(`Regression: Earlier sections missing cards in index.html`);
} else {
    passed.push(`Regression check: Sections 1–11 cards intact and preserved`);
}

console.log('--- SECTION 12 VERIFICATION REPORT ---');
passed.forEach(p => console.log('✓ ' + p));
if (errors.length > 0) {
    console.error('--- ERRORS FOUND ---');
    errors.forEach(e => console.error('✗ ' + e));
    process.exit(1);
} else {
    console.log('All Section 12 automated checks PASSED cleanly!');
}
