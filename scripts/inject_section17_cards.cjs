const fs = require('fs');
const path = require('path');
const { section17Entries } = require('../data/section17-entries.js');

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Update counter badge
const oldBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 16: Section 1 (Languages 1–50) — 50 of 801 Entries</span>';
const newBadge = '<span class="section-counter-badge" id="section-counter-badge">Showing Page 1 of 17: Section 1 (Languages 1–50) — 50 of 851 Entries</span>';

if (!html.includes(oldBadge)) {
  console.error("Could not find old badge in index.html");
  process.exit(1);
}
html = html.replace(oldBadge, newBadge);

// 2. Add Section 17 Nav Button right after Section 16 Nav Button
const sec16Btn = `<button type="button" class="section-nav-btn" data-section="16" onclick="goToSection(16)">
                <span class="sec-btn-title">Section 16</span>
                <span class="sec-btn-range">801–850</span>
            </button>`;

const sec17Btn = `<button type="button" class="section-nav-btn" data-section="17" onclick="goToSection(17)">
                <span class="sec-btn-title">Section 17</span>
                <span class="sec-btn-range">851–900</span>
            </button>`;

if (!html.includes(sec16Btn)) {
  console.error("Could not find Section 16 nav button in index.html");
  process.exit(1);
}
html = html.replace(sec16Btn, sec16Btn + '\n            ' + sec17Btn);

// 3. Generate HTML for all 50 Section 17 cards
const cardsHtml = section17Entries.map(entry => {
  return `        <!-- ${entry.id}: ${entry.name} -->\n` +
         `        <a href="pages/section17-entry.html?entry=${entry.id}" class="category-card ${entry.cssClass}" data-category="${entry.id}">\n` +
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
console.log("Successfully injected Section 17 navigation and 50 cards into index.html!");
