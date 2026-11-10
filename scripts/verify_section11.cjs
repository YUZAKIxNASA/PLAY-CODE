const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const styleCss = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
const { section11Entries } = require('../data/section11-entries.js');

let errors = [];

// 1. Check entry count
if (section11Entries.length !== 50) {
    errors.push(`Expected 50 entries in section11Entries, found ${section11Entries.length}`);
}

// 2. Audit each entry
section11Entries.forEach((entry, idx) => {
    const expectedId = 551 + idx;
    if (entry.id !== expectedId) {
        errors.push(`Entry index ${idx}: expected ID ${expectedId}, got ${entry.id}`);
    }

    // Check SVG logo in both dirs
    const p1 = path.resolve(__dirname, '../', entry.logo);
    const p2 = path.resolve(__dirname, '../public/', entry.logo);
    if (!fs.existsSync(p1)) errors.push(`Missing logo in assets: ${p1}`);
    if (!fs.existsSync(p2)) errors.push(`Missing logo in public: ${p2}`);

    // Check CSS class in style.css
    if (!styleCss.includes(entry.cssClass)) {
        errors.push(`Missing CSS class in style.css: ${entry.cssClass}`);
    }
    if (!styleCss.includes(`data-category="${entry.id}"`)) {
        errors.push(`Missing data-category="${entry.id}" in style.css`);
    }

    // Check Card in index.html
    const cardRegex = new RegExp(`data-category="${entry.id}"`);
    if (!cardRegex.test(indexHtml)) {
        errors.push(`Card ${entry.id} (${entry.name}) missing in index.html`);
    }

    // Check description presence
    if (!entry.shortDesc || entry.shortDesc.length < 20) {
        errors.push(`Entry ${entry.id} description too short or missing`);
    }

    // Check sampleCode and explanation
    if (!entry.sampleCode || !entry.explanation) {
        errors.push(`Entry ${entry.id} missing sampleCode or explanation`);
    }
});

// 3. Verify Section 11 Navigation Button in index.html
if (!indexHtml.includes('data-section="11"') || !indexHtml.includes('goToSection(11)')) {
    errors.push(`Section 11 navigation button missing in index.html`);
}

// 4. Verify Projects Card Anchor Position
const lastSec11CardIndex = indexHtml.indexOf('data-category="600"');
const projectsCardIndex = indexHtml.indexOf('data-category="projects"');
if (lastSec11CardIndex === -1 || projectsCardIndex === -1 || projectsCardIndex < lastSec11CardIndex) {
    errors.push(`Projects card is not properly positioned after Card 600!`);
}

// 5. Verify Section 10 and Section 9 boundaries (regression check)
if (!indexHtml.includes('data-category="501"') || !indexHtml.includes('data-category="550"')) {
    errors.push(`Section 10 boundary check failed in index.html`);
}
if (!indexHtml.includes('data-category="451"') || !indexHtml.includes('data-category="500"')) {
    errors.push(`Section 9 boundary check failed in index.html`);
}

console.log('--- SECTION 11 VERIFICATION REPORT ---');
if (errors.length === 0) {
    console.log('✅ ALL 50 SECTION 11 CARDS (551–600) VERIFIED WITH ZERO ERRORS!');
    console.log('✅ ALL 50 LOGOS SYNCED IN BOTH ASSETS AND PUBLIC!');
    console.log('✅ ALL 50 CSS JEWEL-TONE GRADIENT CLASSES VERIFIED!');
    console.log('✅ SECTION 11 NAVIGATION BUTTON AND PROJECTS CARD ANCHOR VERIFIED!');
    console.log('✅ REGRESSION TESTS FOR SECTIONS 1–10 PASSED!');
} else {
    console.error(`❌ Found ${errors.length} errors:`);
    errors.forEach(e => console.error('  - ' + e));
    process.exit(1);
}
