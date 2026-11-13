const fs = require('fs');
const path = require('path');

const dsSrc = fs.readFileSync(path.resolve(__dirname, '../data/section19-entries.js'), 'utf8');
const entries = JSON.parse(dsSrc.slice(dsSrc.indexOf('['), dsSrc.lastIndexOf(']') + 1));

const indexPath = path.resolve(__dirname, '../index.html');
let html = fs.readFileSync(indexPath, 'utf8');

if (html.includes('data-category="901"')) {
  console.log('Section 19 cards (901-950) already present in index.html.');
  process.exit(0);
}

// 1. Update counter badge initial text
html = html.replace(
  /Showing Page 1 of 18: Section 1 \(Languages 1–50\) — 50 of 901 Entries/g,
  'Showing Page 1 of 19: Section 1 (Languages 1–50) — 50 of 951 Entries'
);

// 2. Update section nav comment and add Section 19 button cleanly after Section 18
html = html.replace(
  '<!-- Section Navigation Buttons (Sections 1–18) -->',
  '<!-- Section Navigation Buttons (Sections 1–19) -->'
);

const sec18Btn =
  `            <button type="button" class="section-nav-btn" data-section="18" onclick="goToSection(18)">\n` +
  `                <span class="sec-btn-title">Section 18</span>\n` +
  `                <span class="sec-btn-range">851–900</span>\n` +
  `            </button>`;

const sec19Btn =
  `${sec18Btn}\n` +
  `            <button type="button" class="section-nav-btn" data-section="19" onclick="goToSection(19)">\n` +
  `                <span class="sec-btn-title">Section 19</span>\n` +
  `                <span class="sec-btn-range">901–950</span>\n` +
  `            </button>`;

if (!html.includes(sec18Btn)) {
  throw new Error('Could not find Section 18 button in index.html');
}
html = html.replace(sec18Btn, sec19Btn);

// 3. Build and insert 50 HTML cards for 901-950 directly before the Projects card
const cardsHtml = entries.map(entry => {
  return `        <!-- ${entry.id}: ${entry.name} -->\n` +
         `        <a href="pages/section19-entry.html?entry=${entry.id}" class="category-card ${entry.cssClass}" data-category="${entry.id}">\n` +
         `            <h3><img src="${entry.logo}" alt="${entry.name}" class="category-logo"> ${entry.name}</h3>\n` +
         `            <p>${entry.shortDesc}</p>\n` +
         `            <div class="card-bottom">\n` +
         `                <span class="coming-soon">Coming Soon</span>\n` +
         `                <span class="card-num">${entry.id}</span>\n` +
         `            </div>\n` +
         `        </a>`;
}).join('\n\n');

const projectsAnchor = '<!-- Projects (Moved to Last Position) -->';
if (!html.includes(projectsAnchor)) {
  throw new Error('Could not find Projects anchor in index.html');
}

html = html.replace(projectsAnchor, cardsHtml + '\n\n' + projectsAnchor);

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully added Section 19 nav button, updated badge, and inserted 50 cards (901-950) into index.html.');
