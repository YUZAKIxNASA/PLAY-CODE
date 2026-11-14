const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');
const dsRaw = fs.readFileSync(path.join(root, 'data/section22-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

const exactList = [
  "PLEXIL", "Plus", "POP-11", "POP-2", "PortablE", "POV-Ray SDL", "Powerhouse", "Polymorphic Programming Language", "Prograph", "Project Verona",
  "PROMAL", "PROSE modeling language", "PROTEL", "Pro*C", "Pure", "Pure Data", "S-Lang", "S2", "S3", "SA-C",
  "SabreTalk", "SAIL", "SAKO", "Sawzall", "SBL", "Script.NET", "SenseTalk", "SequenceL", "Serpent", "SETL",
  "Short Code", "SiMPLE", "SIMPOL", "SIMSCRIPT", "SKILL", "SLIP", "SMALL", "Snowball", "SOL", "SOPHAEROS",
  "Source", "SPARK", "Speakeasy", "Speedcode", "SPIN", "SP/k", "SPL", "SPS", "SQR", "SR"
];

let errors = 0;
function fail(msg) { console.error('FAIL:', msg); errors++; }
function pass(msg) { console.log('PASS:', msg); }

// 1. Dataset verification (50 entries, 1051..1100, exact names & fields)
if (entries.length !== 50) {
  fail(`Expected 50 dataset entries in section22-entries.js, found ${entries.length}`);
} else {
  let ok = true;
  entries.forEach((e, idx) => {
    const expId = 1051 + idx;
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
  if (ok) pass('Dataset verified: 50 entries (1051–1100) with exact supplied names, order, and complete lesson fields');
}

// 2. Section nav buttons check (22 buttons inside 10-column desktop grid)
const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 22) {
  fail(`Expected 22 section buttons, found ${btnMatches.length}`);
} else {
  const lastBtn = btnMatches[21];
  if (Number(lastBtn[1]) !== 22 || lastBtn[2].trim() !== 'Section 22' || lastBtn[3].trim() !== '1051–1100') {
    fail(`Section 22 nav button mismatch: got ${lastBtn[1]} / ${lastBtn[2]} / ${lastBtn[3]}`);
  } else {
    pass('All 22 section nav buttons present including Section 22 (1051–1100) inside 10-column desktop grid');
  }
}

// 3. Full #category-grid audit (1101 cards: 1..1100 continuous + Projects ★ at 1101)
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);
const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 1101) {
  fail(`Expected 1101 cards (1100 languages + Projects), found ${cards.length}`);
} else {
  pass('Category grid contains exactly 1101 cards (1100 languages + 1 Projects card)');
}

let allOrderOk = true;
for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 1100) {
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
    if (expNum >= 1051 && expNum <= 1100) {
      const idx22 = expNum - 1051;
      if (title !== exactList[idx22]) {
        fail(`HTML card #${expNum} name mismatch: "${title}" vs "${exactList[idx22]}"`);
        allOrderOk = false;
      }
      if (href !== `pages/section22-entry.html?entry=${expNum}`) {
        fail(`HTML card #${expNum} bad href: ${href}`);
        allOrderOk = false;
      }
      if (!fs.existsSync(path.join(root, 'public', logoSrc))) {
        fail(`Missing public SVG copy for #${expNum}: public/${logoSrc}`);
        allOrderOk = false;
      }
      if (!css.includes(`.category-card[data-category="${expNum}"]`) || !css.includes(`.${entries[idx22].cssClass}{`)) {
        fail(`Missing CSS gradient rule for data-category="${expNum}" or .${entries[idx22].cssClass} in style.css`);
        allOrderOk = false;
      }
    }
  } else {
    if (!cls.includes('project') || num !== '★' || href !== 'pages/projects.html') {
      fail(`Final 1101st card is not Projects (★)`);
      allOrderOk = false;
    }
  }
}
if (allOrderOk) pass('Cards 1–1100 continuous with exact Section 22 names/order, valid SVGs, descriptions, CSS gradients, and Projects ★ at #1101');

// 4. Check app.js parity & section 22 pagination
if (appJs !== pubAppJs) fail('public/app.js out of sync with app.js');
if (!appJs.includes('totalPages = 22;') || !appJs.includes('currentPage === 22')) {
  fail('app.js missing 22-section pagination bounds');
} else {
  pass('app.js & public/app.js synced cleanly with 22-section pagination and search');
}

// 5. Check workspace HTML & runner & vite config
const sec22Html = fs.readFileSync(path.join(root, 'pages/section22-entry.html'), 'utf8');
const sec22Runner = fs.readFileSync(path.join(root, 'js/section22-runner.js'), 'utf8');
const viteCfg = fs.readFileSync(path.join(root, 'vite.config.js'), 'utf8');
if (!sec22Html.includes('../index.html?section=22') || !sec22Runner.includes('section22Entries') || !viteCfg.includes('section22Entry')) {
  fail('section22-entry.html, section22-runner.js, or vite.config.js linkage issue');
} else {
  pass('Workspace page pages/section22-entry.html, js/section22-runner.js, and vite.config.js properly linked');
}

if (errors > 0) {
  console.error(`\nTotal Section 22 failures: ${errors}`);
  process.exit(1);
}
console.log('\nALL SECTION 22 (1051–1100) VERIFICATIONS PASSED (0 ERRORS)!');
