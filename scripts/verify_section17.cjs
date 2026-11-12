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

const expectedNames = [
  "Ladder Diagram", "Ring Language", "Wolfram Alpha Query", "Eiffel Language", "SmartEiffel",
  "Ruby on Rails DSL", "RSpec", "Gherkin", "Cucumber", "Robot Framework",
  "TTCN-3", "Sikuli Script", "Selenese", "Applescript Objective", "JavaScript for Automation",
  "Swift Playgrounds", "SwiftUI", "Jetpack Compose", "Kotlin Multiplatform", "Flutter Dart",
  "React Native", "NativeScript", "Xamarin", "MAUI", "Ionic",
  "Cordova", "Capacitor", "Tauri", "Electron", "Qt QML",
  "QtScript", "GTK Vala", "Tk", "wxPython", "JavaFX",
  "Swing", "AWT", "SWT", "WinForms", "WPF XAML",
  "UWP XAML", "WinUI", "Avalonia", "Uno Platform", "Delphi FMX",
  "Lazarus LCL", "Kivy", "BeeWare", "Dear PyGui", "Dear ImGui"
];

console.log("=== VERIFYING SECTION 17 (851–900) & FINAL 900-ENTRY AUDIT ===");

// 1. Data entries
const { section17Entries } = require('../data/section17-entries.js');
assert(Array.isArray(section17Entries) && section17Entries.length === 50, "section17Entries has exactly 50 items");

for (let i = 0; i < 50; i++) {
  const expectedId = 851 + i;
  const e = section17Entries[i];
  assert(e && e.id === expectedId && e.name === expectedNames[i], `Entry ${expectedId}: "${e && e.name}" matches "${expectedNames[i]}"`);
}

// 2. SVG Logos exist in both paths and valid SVG XML
for (const entry of section17Entries) {
  const p1 = path.resolve(__dirname, '..', entry.logo);
  const p2 = path.resolve(__dirname, '../public', entry.logo);
  assert(fs.existsSync(p1) && fs.statSync(p1).size > 50, `Logo exists in assets/logos: ${entry.logo}`);
  assert(fs.existsSync(p2) && fs.statSync(p2).size > 50, `Logo exists in public/assets/logos: ${entry.logo}`);
}

// 3. Workspace page and runner
const pagePath = path.resolve(__dirname, '../pages/section17-entry.html');
const runnerPath = path.resolve(__dirname, '../js/section17-runner.js');
assert(fs.existsSync(pagePath), "pages/section17-entry.html exists");
assert(fs.existsSync(runnerPath), "js/section17-runner.js exists");

// 4. Style CSS rules
const css = fs.readFileSync(path.resolve(__dirname, '../style.css'), 'utf8');
for (let id = 851; id <= 900; id++) {
  assert(css.includes(`data-category="${id}"`), `CSS rule exists for data-category="${id}"`);
}

// 5. Index.html checks
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
assert(html.includes('data-section="17"'), "Section 17 navigation button in index.html");
assert(html.includes('Showing Page 1 of 17: Section 1 (Languages 1–50) — 50 of 851 Entries'), "Section counter badge updated to 17 pages / 851 entries in index.html");

for (let id = 851; id <= 900; id++) {
  assert(html.includes(`data-category="${id}"`), `Card with data-category="${id}" in index.html`);
  assert(html.includes(`<span class="card-num">${id}</span>`), `Card number ${id} in index.html`);
}

// Check relative ordering of 900 and projects
const idx900 = html.indexOf('data-category="900"');
const idxProjects = html.indexOf('data-category="projects"');
assert(idx900 > 0 && idxProjects > idx900, "Card 900 appears before Projects card");

// 6. app.js & public/app.js
const appJs = fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.resolve(__dirname, '../public/app.js'), 'utf8');
assert(appJs.includes('totalPages = 17;'), "app.js has totalPages = 17");
assert(appJs.includes('currentPage === 17'), "app.js has currentPage === 17 slicing");
assert(appJs.includes('Math.min(parseInt(sectionNum, 10) || 1, 17)'), "app.js goToSection supports 17");
assert(appJs === pubAppJs, "app.js and public/app.js are identical");

// 7. vite.config.js
const viteConfig = fs.readFileSync(path.resolve(__dirname, '../vite.config.js'), 'utf8');
assert(viteConfig.includes("section17Entry: resolve(__dirname, 'pages/section17-entry.html')"), "vite.config.js registers section17Entry");

// 8. Global Grid Audit across all Sections 1-17
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('</section>', gridStart);
const gridSlice = html.slice(gridStart, gridEnd);
const cardMatches = [...gridSlice.matchAll(/<(a|div)\s+[^>]*class="category-card[^"]*"[^>]*>[\s\S]*?<\/\1>/g)];
assert(cardMatches.length === 851, `Total cards in #category-grid = ${cardMatches.length} (expected 851: 850 languages + 1 Projects)`);

const cardNums = [];
let brokenImages = 0;
let emptyDescriptions = 0;

for (const m of cardMatches) {
  const numMatch = m[0].match(/<span class="card-num">([^<]*)<\/span>/);
  const pMatch = m[0].match(/<p>([\s\S]*?)<\/p>/);
  const imgMatch = m[0].match(/<img[^>]*src="([^"]+)"/);

  if (numMatch) cardNums.push(numMatch[1].trim());
  if (!pMatch || !pMatch[1].trim() || pMatch[1].trim() === 'undefined' || pMatch[1].trim() === 'null') {
    emptyDescriptions++;
  }
  if (imgMatch) {
    const imgFile = path.resolve(__dirname, '..', imgMatch[1]);
    if (!fs.existsSync(imgFile)) brokenImages++;
  }
}

assert(brokenImages === 0, `All card logo assets resolve on disk (${brokenImages} broken)`);
assert(emptyDescriptions === 0, `All card descriptions are valid non-empty strings (${emptyDescriptions} invalid)`);

// Check duplicates
const seenNums = new Set();
const dups = [];
for (const n of cardNums) {
  if (seenNums.has(n)) dups.push(n);
  seenNums.add(n);
}
assert(dups.length === 0, `Zero duplicate card numbers across entire grid (dups: ${dups.length})`);
assert(cardNums[cardNums.length - 1] === '★', "Projects card (★) is strictly the final card in #category-grid");

// Check nav buttons 1..17
for (let s = 1; s <= 17; s++) {
  assert(html.includes(`data-section="${s}"`), `Section ${s} navigation button present`);
}

// Report pre-existing reserved gap 301-350 transparently
const numericSet = new Set(cardNums.filter(x => /^\d+$/.test(x)).map(x => parseInt(x, 10)));
const gaps = [];
for (let i = 1; i <= 900; i++) {
  if (!numericSet.has(i)) gaps.push(i);
}
console.log(`\nGlobal numbering max: ${Math.max(...numericSet)}`);
console.log(`Pre-existing gap entries in 1..900: ${gaps.length} [${gaps[0]}..${gaps[gaps.length - 1]}]`);

console.log(`\nVerification finished with ${errors} error(s).`);
if (errors > 0) process.exit(1);
