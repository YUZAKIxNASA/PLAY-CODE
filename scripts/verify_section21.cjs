const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');
const dsRaw = fs.readFileSync(path.join(root, 'data/section21-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

const exactList = [
  "Microcode", "MIIS", "MIMIC", "Mirah", "MIVA Script", "Model 204", "Mohol", "MOO", "Mortran", "Mouse",
  "MPD", "MSL (mIRC scripting)", "MuPAD", "Mystic Programming Language", "Napier88", "Neko", "Net.Data", "NetRexx", "NEWP", "NewtonScript",
  "Nord Programming Language", "Not eXactly C", "Not Quite C", "Nu", "Nullsoft Scriptable Install System", "NWScript", "NXT-G", "P", "P\u2032\u2032", "ParaSail",
  "Pascal Script", "PCASTL", "PCF", "PDL", "PEARL", "PeopleCode", "Pico", "Pict", "PILOT", "Pipelines",
  "Pizza", "PL-11", "PL/B", "PL/C", "PL/P", "PL360", "PLANC", "Plankalk\u00fcl", "Planner", "PLEX"
];

let errors = 0;
function fail(msg) { console.error('FAIL:', msg); errors++; }
function pass(msg) { console.log('PASS:', msg); }

// 1. Dataset verification (50 entries, 1001..1050, exact names & fields)
if (entries.length !== 50) {
  fail(`Expected 50 dataset entries in section21-entries.js, found ${entries.length}`);
} else {
  let ok = true;
  entries.forEach((e, idx) => {
    const expId = 1001 + idx;
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
  if (ok) pass('Dataset verified: 50 entries (1001–1050) with exact supplied names, order, and complete lesson fields');
}

// 2. Section nav buttons check (21 buttons inside 10-column desktop grid)
const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 21) {
  fail(`Expected 21 section buttons, found ${btnMatches.length}`);
} else {
  const lastBtn = btnMatches[20];
  if (Number(lastBtn[1]) !== 21 || lastBtn[2].trim() !== 'Section 21' || lastBtn[3].trim() !== '1001–1050') {
    fail(`Section 21 nav button mismatch: got ${lastBtn[1]} / ${lastBtn[2]} / ${lastBtn[3]}`);
  } else {
    pass('All 21 section nav buttons present including Section 21 (1001–1050) inside 10-column desktop grid');
  }
}

// 3. Full #category-grid audit (1051 cards: 1..1050 continuous + Projects ★ at 1051)
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);
const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 1051) {
  fail(`Expected 1051 cards (1050 languages + Projects), found ${cards.length}`);
} else {
  pass('Category grid contains exactly 1051 cards (1050 languages + 1 Projects card)');
}

let allOrderOk = true;
for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 1050) {
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
    if (expNum >= 1001 && expNum <= 1050) {
      const idx21 = expNum - 1001;
      if (title !== exactList[idx21]) {
        fail(`HTML card #${expNum} name mismatch: "${title}" vs "${exactList[idx21]}"`);
        allOrderOk = false;
      }
      if (href !== `pages/section21-entry.html?entry=${expNum}`) {
        fail(`HTML card #${expNum} bad href: ${href}`);
        allOrderOk = false;
      }
      if (!fs.existsSync(path.join(root, 'public', logoSrc))) {
        fail(`Missing public SVG copy for #${expNum}: public/${logoSrc}`);
        allOrderOk = false;
      }
      if (!css.includes(`.category-card[data-category="${expNum}"]`) || !css.includes(`.${entries[idx21].cssClass}{`)) {
        fail(`Missing CSS gradient rule for data-category="${expNum}" or .${entries[idx21].cssClass} in style.css`);
        allOrderOk = false;
      }
    }
  } else {
    if (!cls.includes('project') || num !== '★' || href !== 'pages/projects.html') {
      fail(`Final 1051st card is not Projects (★)`);
      allOrderOk = false;
    }
  }
}
if (allOrderOk) pass('Cards 1–1050 continuous with exact Section 21 names/order, valid SVGs, descriptions, CSS gradients, and Projects ★ at #1051');

// 4. Check app.js parity & section 21 pagination
if (appJs !== pubAppJs) fail('public/app.js out of sync with app.js');
if (!appJs.includes('totalPages = 21;') || !appJs.includes('currentPage === 21')) {
  fail('app.js missing 21-section pagination bounds');
} else {
  pass('app.js & public/app.js synced cleanly with 21-section pagination and search');
}

// 5. Check workspace HTML & runner & vite config
const sec21Html = fs.readFileSync(path.join(root, 'pages/section21-entry.html'), 'utf8');
const sec21Runner = fs.readFileSync(path.join(root, 'js/section21-runner.js'), 'utf8');
const viteCfg = fs.readFileSync(path.join(root, 'vite.config.js'), 'utf8');
if (!sec21Html.includes('../index.html?section=21') || !sec21Runner.includes('section21Entries') || !viteCfg.includes('section21Entry')) {
  fail('section21-entry.html, section21-runner.js, or vite.config.js linkage issue');
} else {
  pass('Workspace page pages/section21-entry.html, js/section21-runner.js, and vite.config.js properly linked');
}

if (errors > 0) {
  console.error(`\nTotal Section 21 failures: ${errors}`);
  process.exit(1);
}
console.log('\nALL SECTION 21 (1001–1050) VERIFICATIONS PASSED (0 ERRORS)!');
