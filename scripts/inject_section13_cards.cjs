const fs = require('fs');
const path = require('path');

const { section13Entries } = require('../data/section13-entries.js');
const indexHtmlPath = path.resolve(__dirname, '../index.html');

let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Add Section 13 button in .section-nav-group
const navBtnTarget = `            <button type="button" class="section-nav-btn" data-section="12" onclick="goToSection(12)">
                <span class="sec-btn-title">Section 12</span>
                <span class="sec-btn-range">601–650</span>
            </button>`;

const navBtnReplacement = `            <button type="button" class="section-nav-btn" data-section="12" onclick="goToSection(12)">
                <span class="sec-btn-title">Section 12</span>
                <span class="sec-btn-range">601–650</span>
            </button>
            <button type="button" class="section-nav-btn" data-section="13" onclick="goToSection(13)">
                <span class="sec-btn-title">Section 13</span>
                <span class="sec-btn-range">651–700</span>
            </button>`;

if (!html.includes('data-section="13"')) {
    if (html.includes(navBtnTarget)) {
        html = html.replace(navBtnTarget, navBtnReplacement);
        console.log('Added Section 13 nav button to index.html');
    } else {
        console.error('Failed to locate Section 12 nav button target');
        process.exit(1);
    }
} else {
    console.log('Section 13 nav button already present');
}

// 2. Update static badge in index.html
const oldBadge = `Showing Page 1 of 12: Section 1 (Languages 1–50) — 50 of 651 Entries`;
const newBadge = `Showing Page 1 of 13: Section 1 (Languages 1–50) — 50 of 651 Entries`;
if (html.includes(oldBadge)) {
    html = html.replace(oldBadge, newBadge);
    console.log('Updated static badge text in index.html to 13 pages');
}

// 3. Build 50 Section 13 Cards
const cardsHtml = section13Entries.map(e => `        <!-- ${e.id}: ${e.name} -->
        <a href="pages/section13-entry.html?entry=${e.id}" class="category-card ${e.cssClass}" data-category="${e.id}">
            <h3><img src="assets/logos/${e.slug}.svg" alt="${e.name}" class="category-logo"> ${e.name}</h3>
            <p>${e.shortDesc}</p>
            <div class="card-bottom">
                <span class="coming-soon">Coming Soon</span>
                <span class="card-num">${e.id}</span>
            </div>
        </a>`).join('\n\n');

const projectsTarget = `<!-- Projects (Moved to Last Position) -->`;

if (!html.includes('data-category="651"')) {
    if (html.includes(projectsTarget)) {
        html = html.replace(projectsTarget, cardsHtml + '\n\n' + projectsTarget);
        console.log('Injected all 50 Section 13 cards before Projects card');
    } else {
        console.error('Failed to locate Projects card target');
        process.exit(1);
    }
} else {
    console.log('Section 13 cards already present in index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully written updated index.html');
