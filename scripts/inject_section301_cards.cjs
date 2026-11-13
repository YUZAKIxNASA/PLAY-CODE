const fs = require('fs');
const path = require('path');

const dsSrc = fs.readFileSync(path.resolve(__dirname, '../data/section-301-350-entries.js'), 'utf8');
const entries = JSON.parse(dsSrc.slice(dsSrc.indexOf('['), dsSrc.lastIndexOf(']') + 1));

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

if (html.includes('data-category="301"')) {
  console.log('Cards 301-350 already present in index.html.');
  process.exit(0);
}

// 1. Update counter badge initial text
html = html.replace(
  /Showing Page 1 of 17: Section 1 \(Languages 1–50\) — 50 of 851 Entries/g,
  'Showing Page 1 of 18: Section 1 (Languages 1–50) — 50 of 901 Entries'
);

// 2. Replace section-nav-wrapper with all 18 sections
const ranges = [
  [1, '1–50'], [2, '51–100'], [3, '101–150'], [4, '151–200'],
  [5, '201–250'], [6, '251–300'], [7, '301–350'], [8, '351–400'],
  [9, '401–450'], [10, '451–500'], [11, '501–550'], [12, '551–600'],
  [13, '601–650'], [14, '651–700'], [15, '701–750'], [16, '751–800'],
  [17, '801–850'], [18, '851–900']
];

const navButtons = ranges.map(([sec, range]) => {
  const activeClass = sec === 1 ? ' active' : '';
  return `            <button type="button" class="section-nav-btn${activeClass}" data-section="${sec}" onclick="goToSection(${sec})">\n` +
         `                <span class="sec-btn-title">Section ${sec}</span>\n` +
         `                <span class="sec-btn-range">${range}</span>\n` +
         `            </button>`;
}).join('\n');

const newNavBlock =
  `    <!-- Section Navigation Buttons (Sections 1–18) -->\n` +
  `    <div class="section-nav-wrapper" role="navigation" aria-label="Explore Categories Section Navigation">\n` +
  `        <div class="section-nav-group">\n` +
  `${navButtons}\n` +
  `        </div>\n` +
  `    </div>`;

const navRegex = /\s*<!-- Section Navigation Buttons[\s\S]*?<div class="section-nav-wrapper"[\s\S]*?<\/div>\s*<\/div>/;
if (!navRegex.test(html)) {
  throw new Error('Could not locate section-nav-wrapper block in index.html');
}
html = html.replace(navRegex, '\n' + newNavBlock);

// 3. Build 50 HTML cards for 301-350
const cardsHtml = entries.map(entry => {
  return `        <!-- ${entry.id}: ${entry.name} -->\n` +
         `        <a href="pages/section-301-350-entry.html?entry=${entry.id}" class="category-card ${entry.cssClass}" data-category="${entry.id}">\n` +
         `            <h3><img src="${entry.logo}" alt="${entry.name}" class="category-logo"> ${entry.name}</h3>\n` +
         `            <p>${entry.shortDesc}</p>\n` +
         `            <div class="card-bottom">\n` +
         `                <span class="coming-soon">Coming Soon</span>\n` +
         `                <span class="card-num">${entry.id}</span>\n` +
         `            </div>\n` +
         `        </a>`;
}).join('\n\n');

const insertAnchor = '        <!-- 351: Flix -->';
if (!html.includes(insertAnchor)) {
  throw new Error('Could not find <!-- 351: Flix --> anchor in index.html');
}

html = html.replace(insertAnchor, '\n' + cardsHtml + '\n\n\n' + insertAnchor);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully updated 18-button section nav, counter badge, and inserted cards 301-350 into index.html.');
