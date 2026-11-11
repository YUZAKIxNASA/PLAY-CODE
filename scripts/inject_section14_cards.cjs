const fs = require('fs');
const path = require('path');
const { section14Entries } = require('../data/section14-entries.js');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update counter badge
const oldBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 13: Section 1 (Languages 1–50) — 50 of 651 Entries</span>';
const newBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 14: Section 1 (Languages 1–50) — 50 of 701 Entries</span>';

if (!html.includes(oldBadge)) {
  console.error("Could not find old badge in index.html");
  process.exit(1);
}
html = html.replace(oldBadge, newBadge);

// 2. Add Section 14 Nav Button right after Section 13 Nav Button
const sec13Btn = `<button type="button" class="section-nav-btn" data-section="13" onclick="goToSection(13)">
                <span class="sec-btn-title">Section 13</span>
                <span class="sec-btn-range">651–700</span>
            </button>`;

const sec14Btn = `<button type="button" class="section-nav-btn" data-section="14" onclick="goToSection(14)">
                <span class="sec-btn-title">Section 14</span>
                <span class="sec-btn-range">701–750</span>
            </button>`;

if (!html.includes(sec13Btn)) {
  console.error("Could not find Section 13 nav button in index.html");
  process.exit(1);
}
html = html.replace(sec13Btn, sec13Btn + '\n            ' + sec14Btn);

// 3. Generate HTML for all 50 Section 14 cards
const cardsHtml = section14Entries.map(entry => {
  return `        <!-- ${entry.id}: ${entry.name} -->\n` +
         `        <a href="pages/section14-entry.html?entry=${entry.id}" class="category-card ${entry.cssClass}" data-category="${entry.id}">\n` +
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
console.log("Successfully injected Section 14 navigation and 50 cards into index.html!");
