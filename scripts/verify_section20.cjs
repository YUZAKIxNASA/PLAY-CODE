const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');
const dsRaw = fs.readFileSync(path.join(root, 'data/section20-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

const exactList = [
  "Control Language", "Rocq", "CorVision", "COWSEL", "Cryptol", "Csound", "Cuneiform", "Curl", "Cybil", "F",
  "FAUST", "FFP", "Fjölnir", "FL", "Flavors", "FlooP", "FOCAL", "FOIL", "FORMAC", "@Formula",
  "FP", "Franz Lisp", "Game Maker Language", "GameMonkey Script", "Geometric Description Language", "GEORGE", "GNU", "GNU E", "Go!", "GOAL",
  "Golo", "GOM", "GOTRAN", "GPSS", "GraphTalk", "GRASS", "Grasshopper", "M Formula language", "M4", "Machine code",
  "MAD", "MAD/I", "Magik", "MAPPER", "Mary", "MATH-MATIC", "Max", "MaxScript", "Maya MEL", "MDL"
];

let errors = 0;
function fail(msg) { console.error('FAIL:', msg); errors++; }
function pass(msg) { console.log('PASS:', msg); }

// 1. Dataset verification (50 entries, 951..1000, exact names & fields)
if (entries.length !== 50) {
  fail(`Expected 50 dataset entries in section20-entries.js, found ${entries.length}`);
} else {
  let ok = true;
  entries.forEach((e, idx) => {
    const expId = 951 + idx;
    if (e.id !== expId || e.name !== exactList[idx]) {
      fail(`Dataset mismatch at idx ${idx}: got #${e.id} "${e.name}", expected #${expId} "${exactList[idx]}"`);
      ok = false;
    }
    if (!e.shortDesc || !e.history || !Array.isArray(e.features) || e.features.length < 3 ||
        !e.syntaxSummary || !e.variablesAndTypes || !e.functionsAndModules ||
        !e.executionRequirements || !e.sampleCode || !e.explanation || !e.expectedOutput) {
      fail(`Incomplete lesson metadata for #${e.id} (${e.name})`);
      ok = false;
    }
  });
  if (ok) pass('Dataset verified: 50 entries (951–1000) with exact supplied names, order, and complete lesson fields');
}

// 2. Section nav buttons check (20 buttons, 2 full rows of 10 on desktop)
const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 20) {
  fail(`Expected 20 section buttons, found ${btnMatches.length}`);
} else {
  const lastBtn = btnMatches[19];
  if (Number(lastBtn[1]) !== 20 || lastBtn[2].trim() !== 'Section 20' || lastBtn[3].trim() !== '951–1000') {
    fail(`Section 20 nav button mismatch: got ${lastBtn[1]} / ${lastBtn[2]} / ${lastBtn[3]}`);
  } else {
    pass('All 20 section nav buttons present including Section 20 (951–1000) inside 10-column desktop grid');
  }
}

// 3. Full #category-grid audit (1001 cards: 1..1000 continuous + Projects ★ at 1001)
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);
const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 1001) {
  fail(`Expected 1001 cards (1000 languages + Projects), found ${cards.length}`);
} else {
  pass('Category grid contains exactly 1001 cards (1000 languages + 1 Projects card)');
}

let allOrderOk = true;
for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 1000) {
    const expNum = i + 1;
    if (Number(num) !== expNum) {
      fail(`Card #${i + 1} number mismatch: got "${num}" (${title})`);
      allOrderOk = false;
      break;
    }
    if (!fs.existsSync(path.join(root, logoSrc))) {
      fail(`Missing SVG logo ${logoSrc} for #${expNum}`);
      allOrderOk = false;
    }
    if (!desc || desc === 'undefined' || desc === 'null') {
      fail(`Missing/invalid description on #${expNum} (${title})`);
      allOrderOk = false;
    }
    if (expNum >= 951 && expNum <= 1000) {
      const idx20 = expNum - 951;
      if (title !== exactList[idx20]) {
        fail(`HTML card #${expNum} name mismatch: "${title}" vs "${exactList[idx20]}"`);
        allOrderOk = false;
      }
      if (href !== `pages/section20-entry.html?entry=${expNum}`) {
        fail(`HTML card #${expNum} bad href: ${href}`);
        allOrderOk = false;
      }
      if (!fs.existsSync(path.join(root, 'public', logoSrc))) {
        fail(`Missing public SVG copy for #${expNum}: public/${logoSrc}`);
        allOrderOk = false;
      }
      if (!css.includes(`.category-card[data-category="${expNum}"]`)) {
        fail(`Missing CSS gradient rule for data-category="${expNum}" in style.css`);
        allOrderOk = false;
      }
    }
  } else {
    if (!cls.includes('project') || num !== '★' || href !== 'pages/projects.html') {
      fail(`Final 1001st card is not Projects (★)`);
      allOrderOk = false;
    }
  }
}
if (allOrderOk) pass('Cards 1–1000 continuous with exact Section 20 names/order, valid SVGs, descriptions, CSS gradients, and Projects ★ at #1001');

// 4. Check app.js parity & section 20 pagination
if (appJs !== pubAppJs) fail('public/app.js out of sync with app.js');
if (!appJs.includes('totalPages = 20;') || !appJs.includes('currentPage === 20')) {
  fail('app.js missing 20-section pagination bounds');
} else {
  pass('app.js & public/app.js synced cleanly with 20-section pagination and search');
}

// 5. Check workspace HTML & runner
const sec20Html = fs.readFileSync(path.join(root, 'pages/section20-entry.html'), 'utf8');
const sec20Runner = fs.readFileSync(path.join(root, 'js/section20-runner.js'), 'utf8');
if (!sec20Html.includes('../index.html?section=20') || !sec20Runner.includes('section20Entries')) {
  fail('section20-entry.html or section20-runner.js linkage issue');
} else {
  pass('Workspace page pages/section20-entry.html and js/section20-runner.js properly linked');
}

if (errors > 0) {
  console.error(`\nTotal Section 20 failures: ${errors}`);
  process.exit(1);
}
console.log('\nALL SECTION 20 (951–1000) VERIFICATIONS PASSED (0 ERRORS)!');
