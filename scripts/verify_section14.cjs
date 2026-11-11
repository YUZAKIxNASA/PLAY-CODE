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

console.log("=== VERIFYING SECTION 14 IMPLEMENTATION ===");

// 1. Data entries
const { section14Entries } = require('../data/section14-entries.js');
assert(Array.isArray(section14Entries) && section14Entries.length === 50, "section14Entries has exactly 50 items");
assert(section14Entries[0].id === 701 && section14Entries[0].name === "Ecto", "First entry is 701. Ecto");
assert(section14Entries[49].id === 750 && section14Entries[49].name === "SQLJ", "Last entry is 750. SQLJ");

// 2. SVG Logos exist in both paths
for (const entry of section14Entries) {
  const p1 = path.resolve(__dirname, '..', entry.logo);
  const p2 = path.resolve(__dirname, '../public', entry.logo);
  assert(fs.existsSync(p1) && fs.statSync(p1).size > 50, `Logo exists in assets/logos: ${entry.logo}`);
  assert(fs.existsSync(p2) && fs.statSync(p2).size > 50, `Logo exists in public/assets/logos: ${entry.logo}`);
}

// 3. Workspace page and runner
const pagePath = path.resolve(__dirname, '../pages/section14-entry.html');
const runnerPath = path.resolve(__dirname, '../js/section14-runner.js');
assert(fs.existsSync(pagePath), "pages/section14-entry.html exists");
assert(fs.existsSync(runnerPath), "js/section14-runner.js exists");

// 4. Style CSS rules
const css = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
for (let id = 701; id <= 750; id++) {
  assert(css.includes(`data-category="${id}"`), `CSS rule exists for data-category="${id}"`);
}

// 5. Index.html checks
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
assert(html.includes('data-section="14"'), "Section 14 navigation button in index.html");
assert(html.includes('Showing Page 1 of 14: Section 1 (Languages 1–50) — 50 of 701 Entries'), "Section counter badge updated to 14 pages / 701 entries in index.html");

for (let id = 701; id <= 750; id++) {
  assert(html.includes(`data-category="${id}"`), `Card with data-category="${id}" in index.html`);
  assert(html.includes(`<span class="card-num">${id}</span>`), `Card number ${id} in index.html`);
}

// Check relative ordering of 750 and projects
const idx750 = html.indexOf('data-category="750"');
const idxProjects = html.indexOf('data-category="projects"');
assert(idx750 > 0 && idxProjects > idx750, "Card 750 appears before Projects card");

// 6. app.js & public/app.js
const appJs = fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.resolve(__dirname, '../public/app.js'), 'utf8');
assert(appJs.includes('totalPages = 14;'), "app.js has totalPages = 14");
assert(appJs.includes('currentPage === 14'), "app.js has currentPage === 14 slicing");
assert(appJs.includes('Math.min(parseInt(sectionNum, 10) || 1, 14)'), "app.js goToSection supports 14");
assert(appJs === pubAppJs, "app.js and public/app.js are identical");

// 7. vite.config.js
const viteConfig = fs.readFileSync(path.resolve(__dirname, '../vite.config.js'), 'utf8');
assert(viteConfig.includes('section14Entry: resolve(__dirname, \'pages/section14-entry.html\')'), "vite.config.js registers section14Entry");

console.log(`\nVerification finished with ${errors} error(s).`);
if (errors > 0) process.exit(1);
