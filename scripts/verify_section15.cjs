const fs = require('fs');
const path = require('path');

let errors = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ FAIL: ${msg}`);
    errors++;
  } else {
    console.log(`✅ PASS: ${msg}`);
  }
}

console.log("=== VERIFYING SECTION 15 IMPLEMENTATION ===");

// 1. Data entries
const { section15Entries } = require('../data/section15-entries.js');
assert(Array.isArray(section15Entries) && section15Entries.length === 50, "section15Entries has exactly 50 items");
assert(section15Entries[0].id === 751 && section15Entries[0].name === "IBM EGL", "First entry is 751. IBM EGL");
assert(section15Entries[49].id === 800 && section15Entries[49].name === "GNU Smalltalk", "Last entry is 800. GNU Smalltalk");

// 2. SVG Logos exist in both paths
for (const entry of section15Entries) {
  const p1 = path.resolve(__dirname, '..', entry.logo);
  const p2 = path.resolve(__dirname, '../public', entry.logo);
  assert(fs.existsSync(p1) && fs.statSync(p1).size > 50, `Logo exists in assets/logos: ${entry.logo}`);
  assert(fs.existsSync(p2) && fs.statSync(p2).size > 50, `Logo exists in public/assets/logos: ${entry.logo}`);
}

// 3. Workspace page and runner
const pagePath = path.resolve(__dirname, '../pages/section15-entry.html');
const runnerPath = path.resolve(__dirname, '../js/section15-runner.js');
assert(fs.existsSync(pagePath), "pages/section15-entry.html exists");
assert(fs.existsSync(runnerPath), "js/section15-runner.js exists");

// 4. Style CSS rules
const css = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
for (let id = 751; id <= 800; id++) {
  assert(css.includes(`data-category="${id}"`), `CSS rule exists for data-category="${id}"`);
}

// 5. Index.html checks
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
assert(html.includes('data-section="15"'), "Section 15 navigation button in index.html");
assert(html.includes('Showing Page 1 of 15: Section 1 (Languages 1–50) — 50 of 751 Entries'), "Section counter badge updated to 15 pages / 751 entries in index.html");

for (let id = 751; id <= 800; id++) {
  assert(html.includes(`data-category="${id}"`), `Card with data-category="${id}" in index.html`);
  assert(html.includes(`<span class="card-num">${id}</span>`), `Card number ${id} in index.html`);
}

// Check relative ordering of 800 and projects
const idx800 = html.indexOf('data-category="800"');
const idxProjects = html.indexOf('data-category="projects"');
assert(idx800 > 0 && idxProjects > idx800, "Card 800 appears before Projects card");

// 6. app.js & public/app.js
const appJs = fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.resolve(__dirname, '../public/app.js'), 'utf8');
assert(appJs.includes('totalPages = 15;'), "app.js has totalPages = 15");
assert(appJs.includes('currentPage === 15'), "app.js has currentPage === 15 slicing");
assert(appJs.includes('Math.min(parseInt(sectionNum, 10) || 1, 15)'), "app.js goToSection supports 15");
assert(appJs === pubAppJs, "app.js and public/app.js are identical");

// 7. vite.config.js
const viteConfig = fs.readFileSync(path.resolve(__dirname, '../vite.config.js'), 'utf8');
assert(viteConfig.includes('section15Entry: resolve(__dirname, \'pages/section15-entry.html\')'), "vite.config.js registers section15Entry");

console.log(`\nVerification finished with ${errors} error(s).`);
if (errors > 0) process.exit(1);
