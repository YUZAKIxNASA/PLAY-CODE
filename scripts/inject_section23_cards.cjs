const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'index.html');
const dsRaw = fs.readFileSync(path.join(root, 'data/section23-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

let html = fs.readFileSync(htmlPath, 'utf8');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 1. Add Section 23 nav button right after Section 22 button
const navAnchor = `<button type="button" class="section-nav-btn" data-section="22" onclick="goToSection(22)">
                <span class="sec-btn-title">Section 22</span>
                <span class="sec-btn-range">1051–1100</span>
            </button>`;
const sec23Btn = `${navAnchor}
            <button type="button" class="section-nav-btn" data-section="23" onclick="goToSection(23)">
                <span class="sec-btn-title">Section 23</span>
                <span class="sec-btn-range">1101–1140</span>
            </button>`;

if (!html.includes('data-section="23"')) {
  if (!html.includes(navAnchor)) {
    throw new Error('Could not find Section 22 nav button anchor in index.html');
  }
  html = html.replace(navAnchor, sec23Btn);
}

// 2. Update initial counter badge text
html = html.replace(
  'Showing Page 1 of 22: Section 1 (Languages 1–50) — 50 of 1101 Entries',
  'Showing Page 1 of 23: Section 1 (Languages 1–50) — 50 of 1141 Entries'
);

// 3. Inject 40 Section 23 cards immediately before Projects card
const projectsAnchor = '<!-- Projects (Moved to Last Position) -->';
if (!html.includes(projectsAnchor)) {
  throw new Error('Could not find Projects card anchor in index.html');
}

if (!html.includes('data-category="1101"')) {
  let cardsHtml = '\n        <!-- ========================================================= -->\n';
  cardsHtml += '        <!-- SECTION 23: PROGRAMMING LANGUAGES & TECHNOLOGIES (1101-1140) -->\n';
  cardsHtml += '        <!-- ========================================================= -->\n';

  for (const e of entries) {
    cardsHtml += `
        <!-- ${e.id}: ${e.name} -->
        <a href="pages/section23-entry.html?entry=${e.id}" class="category-card ${e.cssClass}" data-category="${e.id}">
            <h3><img src="${e.logo}" alt="${escapeHtml(e.name)}" class="category-logo"> ${escapeHtml(e.name)}</h3>
            <p>${escapeHtml(e.shortDesc)}</p>
            <div class="card-bottom">
                <span class="coming-soon">Coming Soon</span>
                <span class="card-num">${e.id}</span>
            </div>
        </a>`;
  }
  cardsHtml += '\n\n        ';
  html = html.replace(projectsAnchor, cardsHtml + projectsAnchor);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Injected Section 23 nav button and 40 cards (1101-1140) into index.html before Projects (★).');
