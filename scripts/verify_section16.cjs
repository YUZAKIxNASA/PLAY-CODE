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

console.log("=== VERIFYING SECTION 16 IMPLEMENTATION ===");

// 1. Data entries
const { section16Entries } = require('../data/section16-entries.js');
assert(Array.isArray(section16Entries) && section16Entries.length === 50, "section16Entries has exactly 50 items");
assert(section16Entries[0].id === 801 && section16Entries[0].name === "VisualWorks", "First entry is 801. VisualWorks");
assert(section16Entries[49].id === 850 && section16Entries[49].name === "Lazarus", "Last entry is 850. Lazarus");

// 2. SVG Logos exist in both paths
for (const entry of section16Entries) {
  const p1 = path.resolve(__dirname, '..', entry.logo);
  const p2 = path.resolve(__dirname, '../public', entry.logo);
  assert(fs.existsSync(p1) && fs.statSync(p1).size > 50, `Logo exists in assets/logos: ${entry.logo}`);
  assert(fs.existsSync(p2) && fs.statSync(p2).size > 50, `Logo exists in public/assets/logos: ${entry.logo}`);
}

// 3. Workspace page and runner
const pagePath = path.resolve(__dirname, '../pages/section16-entry.html');
const runnerPath = path.resolve(__dirname, '../js/section16-runner.js');
assert(fs.existsSync(pagePath), "pages/section16-entry.html exists");
assert(fs.existsSync(runnerPath), "js/section16-runner.js exists");

// 4. Style CSS rules
const css = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
for (let id = 801; id <= 850; id++) {
  assert(css.includes(`data-category="${id}"`), `CSS rule exists for data-category="${id}"`);
}

// 5. Index.html checks
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
assert(html.includes('data-section="16"'), "Section 16 navigation button in index.html");
assert(html.includes('Showing Page 1 of 16: Section 1 (Languages 1–50) — 50 of 801 Entries'), "Section counter badge updated to 16 pages / 801 entries in index.html");

for (let id = 801; id <= 850; id++) {
  assert(html.includes(`data-category="${id}"`), `Card with data-category="${id}" in index.html`);
  assert(html.includes(`<span class="card-num">${id}</span>`), `Card number ${id} in index.html`);
}

// Check relative ordering of 850 and projects
const idx850 = html.indexOf('data-category="850"');
const idxProjects = html.indexOf('data-category="projects"');
assert(idx850 > 0 && idxProjects > idx850, "Card 850 appears before Projects card");

// 6. app.js & public/app.js
const appJs = fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.resolve(__dirname, '../public/app.js'), 'utf8');
assert(appJs.includes('totalPages = 16;'), "app.js has totalPages = 16");
assert(appJs.includes('currentPage === 16'), "app.js has currentPage === 16 slicing");
assert(appJs.includes('Math.min(parseInt(sectionNum, 10) || 1, 16)'), "app.js goToSection supports 16");
assert(appJs === pubAppJs, "app.js and public/app.js are identical");

// 7. vite.config.js
const viteConfig = fs.readFileSync(path.resolve(__dirname, '../vite.config.js'), 'utf8');
assert(viteConfig.includes('section16Entry: resolve(__dirname, \'pages/section16-entry.html\')'), "vite.config.js registers section16Entry");

console.log(`\nVerification finished with ${errors} error(s).`);
if (errors > 0) process.exit(1);
