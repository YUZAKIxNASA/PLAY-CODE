const fs = require('fs');
const path = require('path');
const { section15Entries } = require('../data/section15-entries.js');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update counter badge
const oldBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 14: Section 1 (Languages 1–50) — 50 of 701 Entries</span>';
const newBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 15: Section 1 (Languages 1–50) — 50 of 751 Entries</span>';

if (!html.includes(oldBadge)) {
  console.error("Could not find old badge in index.html");
  process.exit(1);
}
html = html.replace(oldBadge, newBadge);

// 2. Add Section 15 Nav Button right after Section 14 Nav Button
const sec14Btn = `<button type="button" class="section-nav-btn" data-section="14" onclick="goToSection(14)">
                <span class="sec-btn-title">Section 14</span>
                <span class="sec-btn-range">701–750</span>
            </button>`;

const sec15Btn = `<button type="button" class="section-nav-btn" data-section="15" onclick="goToSection(15)">
                <span class="sec-btn-title">Section 15</span>
                <span class="sec-btn-range">751–800</span>
            </button>`;

if (!html.includes(sec14Btn)) {
  console.error("Could not find Section 14 nav button in index.html");
  process.exit(1);
}
html = html.replace(sec14Btn, sec14Btn + '\n            ' + sec15Btn);

// 3. Generate HTML for all 50 Section 15 cards
const cardsHtml = section15Entries.map(entry => {
  return `        <!-- ${entry.id}: ${entry.name} -->\n` +
         `        <a href="pages/section15-entry.html?entry=${entry.id}" class="category-card ${entry.cssClass}" data-category="${entry.id}">\n` +
         `            <h3><img src="${entry.logo}" alt="${entry.name}" class="category-logo"> ${entry.name}</h3>\n` +
         `            <p>${entry.shortDesc}</p>\n` +
         `            <div class="card-bottom">\n` +
         `                <span class="coming-soon">Coming Soon</span>\n` +
         `                <span class="card-num">${entry.id}</span>\n` +
         `            </div>\n` +
         `        </a>`;
}).join('\n\n');

const projectsMarker = '<!-- Projects (Moved to Last Position) -->';
if (!html.includes(projectsMarker)) {
  console.error("Could not find Projects marker in index.html");
  process.exit(1);
}

html = html.replace(projectsMarker, cardsHtml + '\n\n' + projectsMarker);

fs.writeFileSync(indexPath, html, 'utf8');
console.log("Successfully injected Section 15 navigation and 50 cards into index.html!");
