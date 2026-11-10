const fs = require('fs');
const path = require('path');

const { section11Entries } = require('../data/section11-entries.js');
const indexHtmlPath = path.resolve(__dirname, '../index.html');

let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Add Section 11 button in .section-nav-group
const navBtnTarget = `            <button type="button" class="section-nav-btn" data-section="10" onclick="goToSection(10)">
                <span class="sec-btn-title">Section 10</span>
                <span class="sec-btn-range">501–550</span>
            </button>`;

const navBtnReplacement = `            <button type="button" class="section-nav-btn" data-section="10" onclick="goToSection(10)">
                <span class="sec-btn-title">Section 10</span>
                <span class="sec-btn-range">501–550</span>
            </button>
            <button type="button" class="section-nav-btn" data-section="11" onclick="goToSection(11)">
                <span class="sec-btn-title">Section 11</span>
                <span class="sec-btn-range">551–600</span>
            </button>`;

if (!html.includes('data-section="11"')) {
    if (html.includes(navBtnTarget)) {
        html = html.replace(navBtnTarget, navBtnReplacement);
        console.log('Added Section 11 nav button to index.html');
    } else {
        console.error('Failed to locate Section 10 nav button target');
        process.exit(1);
    }
} else {
    console.log('Section 11 nav button already present');
}

// 2. Build 50 Section 11 Cards
const cardsHtml = section11Entries.map(e => `
        <!-- ${e.id}: ${e.name} -->
        <a href="pages/section11-entry.html?entry=${e.id}" class="category-card ${e.cssClass}" data-category="${e.id}">
            <h3><img src="assets/logos/${e.slug}.svg" alt="${e.name}" class="category-logo"> ${e.name}</h3>
            <p>${e.shortDesc}</p>
            <div class="card-bottom">
                <span class="coming-soon">Coming Soon</span>
                <span class="card-num">${e.id}</span>
            </div>
        </a>`).join('\n');

const projectsTarget = `<!-- Projects (Moved to Last Position) -->`;

if (!html.includes('data-category="551"')) {
    if (html.includes(projectsTarget)) {
        html = html.replace(projectsTarget, cardsHtml + '\n\n' + projectsTarget);
        console.log('Injected all 50 Section 11 cards before Projects card');
    } else {
        console.error('Failed to locate Projects card target');
        process.exit(1);
    }
} else {
    console.log('Section 11 cards already present in index.html');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log('Successfully updated index.html with Section 11 nav button and 50 cards!');
