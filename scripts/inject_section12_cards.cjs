const fs = require('fs');
const path = require('path');

const { section12Entries } = require('../data/section12-entries.js');
const indexHtmlPath = path.resolve(__dirname, '../index.html');

let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Add Section 12 button in .section-nav-group
const navBtnTarget = `            <button type="button" class="section-nav-btn" data-section="11" onclick="goToSection(11)">
                <span class="sec-btn-title">Section 11</span>
                <span class="sec-btn-range">551–600</span>
            </button>`;

const navBtnReplacement = `            <button type="button" class="section-nav-btn" data-section="11" onclick="goToSection(11)">
                <span class="sec-btn-title">Section 11</span>
                <span class="sec-btn-range">551–600</span>
            </button>
            <button type="button" class="section-nav-btn" data-section="12" onclick="goToSection(12)">
                <span class="sec-btn-title">Section 12</span>
                <span class="sec-btn-range">601–650</span>
            </button>`;

if (!html.includes('data-section="12"')) {
    if (html.includes(navBtnTarget)) {
        html = html.replace(navBtnTarget, navBtnReplacement);
        console.log('Added Section 12 nav button to index.html');
    } else {
        console.error('Failed to locate Section 11 nav button target');
        process.exit(1);
    }
} else {
    console.log('Section 12 nav button already present');
}

// 2. Update static badge in index.html
const oldBadge = `Showing Page 1 of 11: Section 1 (Languages 1–50) — 50 of 601 Entries`;
const newBadge = `Showing Page 1 of 12: Section 1 (Languages 1–50) — 50 of 651 Entries`;
if (html.includes(oldBadge)) {
    html = html.replace(oldBadge, newBadge);
    console.log('Updated static badge text in index.html to 12 pages / 651 entries');
}

// 3. Build 50 Section 12 Cards
const cardsHtml = section12Entries.map(e => `        <!-- ${e.id}: ${e.name} -->
        <a href="pages/section12-entry.html?entry=${e.id}" class="category-card ${e.cssClass}" data-category="${e.id}">
            <h3><img src="assets/logos/${e.slug}.svg" alt="${e.name}" class="category-logo"> ${e.name}</h3>
            <p>${e.shortDesc}</p>
            <div class="card-bottom">
                <span class="coming-soon">Coming Soon</span>
                <span class="card-num">${e.id}</span>
            </div>
        </a>`).join('\n\n');

const projectsTarget = `<!-- Projects (Moved to Last Position) -->`;

if (!html.includes('data-category="601"')) {
    if (html.includes(projectsTarget)) {
        html = html.replace(projectsTarget, cardsHtml + '\n\n' + projectsTarget);
        console.log('Injected all 50 Section 12 cards before Projects card');
    } else {
        console.error('Failed to locate Projects card target');
        process.exit(1);
    }
} else {
    console.log('Section 12 cards already present in index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully written updated index.html');
