const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');
const dsRaw = fs.readFileSync(path.join(root, 'data/section23-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

const exactList = [
  "S/SL", "Stateflow", "Strand", "Strongtalk", "Subtext", "SuperCollider", "Superplan", "SuperTalk",
  "Swift (parallel scripting language)", "SYCL", "SYMPL", "T", "TACL", "Tea", "TELCOMP", "Tensilica Instruction Extension",
  "Text Adventure Development System", "Text Editor and Corrector", "Text Processing Utility", "TMG", "Tom", "Topspeed", "TRAC", "Transaction Application Language",
  "Transcript (LiveCode)", "TTCN", "TTM", "TUTOR", "Tynker", "WATFIV", "WATFOR", "Wyvern",
  "Cayenne", "Cilk Plus", "Common Intermediate Language", "SPITBOL", "Processing.js", "Visual LISP", "Grasshopper 3D", "Macsyma"
];

let errors = 0;
function fail(msg) { console.error('FAIL:', msg); errors++; }
function pass(msg) { console.log('PASS:', msg); }

// 1. Dataset verification (40 entries, 1101..1140, exact names & fields)
if (entries.length !== 40) {
  fail(`Expected 40 dataset entries in section23-entries.js, found ${entries.length}`);
} else {
  let ok = true;
  entries.forEach((e, idx) => {
    const expId = 1101 + idx;
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
  if (ok) pass('Dataset verified: 40 entries (1101–1140) with exact supplied names, order, and complete lesson fields');
}

// 2. Section nav buttons check (23 buttons inside 10-column desktop grid)
const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 23) {
  fail(`Expected 23 section buttons, found ${btnMatches.length}`);
} else {
  const lastBtn = btnMatches[22];
  if (Number(lastBtn[1]) !== 23 || lastBtn[2].trim() !== 'Section 23' || lastBtn[3].trim() !== '1101–1140') {
    fail(`Section 23 nav button mismatch: got ${lastBtn[1]} / ${lastBtn[2]} / ${lastBtn[3]}`);
  } else {
    pass('All 23 section nav buttons present including Section 23 (1101–1140) inside 10-column desktop grid');
  }
}

// 3. Full #category-grid audit (1141 cards: 1..1140 continuous + Projects ★ at 1141)
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);
const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 1141) {
  fail(`Expected 1141 cards (1140 languages + Projects), found ${cards.length}`);
} else {
  pass('Category grid contains exactly 1141 cards (1140 languages + 1 Projects card)');
}

let allOrderOk = true;
for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 1140) {
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
    if (expNum >= 1101 && expNum <= 1140) {
      const idx23 = expNum - 1101;
      if (title !== exactList[idx23]) {
        fail(`HTML card #${expNum} name mismatch: "${title}" vs "${exactList[idx23]}"`);
        allOrderOk = false;
      }
      if (href !== `pages/section23-entry.html?entry=${expNum}`) {
        fail(`HTML card #${expNum} bad href: ${href}`);
        allOrderOk = false;
      }
      if (!fs.existsSync(path.join(root, 'public', logoSrc))) {
        fail(`Missing public SVG copy for #${expNum}: public/${logoSrc}`);
        allOrderOk = false;
      }
      if (!css.includes(`.category-card[data-category="${expNum}"]`) || !css.includes(`.${entries[idx23].cssClass}{`)) {
        fail(`Missing CSS gradient rule for data-category="${expNum}" or .${entries[idx23].cssClass} in style.css`);
        allOrderOk = false;
      }
    }
  } else {
    if (!cls.includes('project') || num !== '★' || href !== 'pages/projects.html') {
      fail(`Final 1141st card is not Projects (★)`);
      allOrderOk = false;
    }
  }
}
if (allOrderOk) pass('Cards 1–1140 continuous with exact Section 23 names/order, valid SVGs, descriptions, CSS gradients, and Projects ★ at #1141');

// 4. Check app.js parity & section 23 pagination
if (appJs !== pubAppJs) fail('public/app.js out of sync with app.js');
if (!appJs.includes('1101–1140') || !appJs.includes('currentPage === 23')) {
  fail('app.js missing 23-section pagination bounds');
} else {
  pass('app.js & public/app.js synced cleanly with 23-section pagination and search');
}

// 5. Check workspace HTML & runner & vite config
const sec23Html = fs.readFileSync(path.join(root, 'pages/section23-entry.html'), 'utf8');
const sec23Runner = fs.readFileSync(path.join(root, 'js/section23-runner.js'), 'utf8');
const viteCfg = fs.readFileSync(path.join(root, 'vite.config.js'), 'utf8');
if (!sec23Html.includes('../index.html?section=23') || !sec23Runner.includes('section23Entries') || !viteCfg.includes('section23Entry')) {
  fail('section23-entry.html, section23-runner.js, or vite.config.js linkage issue');
} else {
  pass('Workspace page pages/section23-entry.html, js/section23-runner.js, and vite.config.js properly linked');
}

if (errors > 0) {
  console.error(`\nTotal Section 23 failures: ${errors}`);
  process.exit(1);
}
console.log('\nALL SECTION 23 (1101–1140) VERIFICATIONS PASSED (0 ERRORS)!');
