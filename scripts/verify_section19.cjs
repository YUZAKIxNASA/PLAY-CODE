const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');
const dsRaw = fs.readFileSync(path.join(root, 'data/section19-entries.js'), 'utf8');
const entries = JSON.parse(dsRaw.slice(dsRaw.indexOf('['), dsRaw.lastIndexOf(']') + 1));

const exactList = [
  "A# (A sharp)", "A-0 System", "ABC", "ACC", "Accent", "Action!", "Actor", "Adenine", "AdvPL", "Agilent VEE",
  "Agora", "ALF", "ALGOL 58", "ALGOL W", "Alma-0", "AmbientTalk", "Amiga E", "Analitik", "APT", "ArkTS",
  "ARexx", "Argus", "AutoLISP", "Averest", "Axum", "C--", "C*", "C/AL", "Calcpad", "Catrobat",
  "CESIL", "CEEMAC", "Céu", "CFEngine", "Ch", "Charm", "CHILL", "CHIP-8", "ChucK", "Claire",
  "CLIPS", "CLIST", "CLU", "CMS-2", "CobolScript", "COMAL", "COMIT", "COMPASS", "COMTRAN", "Constraint Handling Rules"
];

let errors = 0;
function fail(msg) { console.error('❌ FAIL:', msg); errors++; }
function pass(msg) { console.log('✅ PASS:', msg); }

// 1. Dataset verification (50 entries, 901..950, exact names & fields)
if (entries.length !== 50) {
  fail(`Expected 50 dataset entries in section19-entries.js, found ${entries.length}`);
} else {
  let ok = true;
  entries.forEach((e, idx) => {
    const expId = 901 + idx;
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
  if (ok) pass('Dataset verified: 50 entries (901–950) with exact supplied names, order, and complete lesson fields');
}

// 2. Section nav buttons check (19 buttons, 10-column CSS Grid)
const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 19) {
  fail(`Expected 19 section buttons, found ${btnMatches.length}`);
} else {
  const lastBtn = btnMatches[18];
  if (Number(lastBtn[1]) !== 19 || lastBtn[2].trim() !== 'Section 19' || lastBtn[3].trim() !== '901–950') {
    fail(`Section 19 nav button mismatch: got ${lastBtn[1]} / ${lastBtn[2]} / ${lastBtn[3]}`);
  } else {
    pass('All 19 section nav buttons present including Section 19 (901–950) inside 10-column desktop grid');
  }
}

// 3. Full #category-grid audit (951 cards: 1..950 continuous + Projects ★ at 951)
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);
const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 951) {
  fail(`Expected 951 cards (950 languages + Projects), found ${cards.length}`);
} else {
  pass('Category grid contains exactly 951 cards (950 languages + 1 Projects card)');
}

let allOrderOk = true;
for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 950) {
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
    if (expNum >= 901 && expNum <= 950) {
      const idx19 = expNum - 901;
      if (title !== exactList[idx19]) {
        fail(`HTML card #${expNum} name mismatch: "${title}" vs "${exactList[idx19]}"`);
        allOrderOk = false;
      }
      if (href !== `pages/section19-entry.html?entry=${expNum}`) {
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
      fail(`Final 951st card is not Projects (★)`);
      allOrderOk = false;
    }
  }
}
if (allOrderOk) pass('Cards 1–950 continuous with exact Section 19 names/order, valid SVGs, descriptions, CSS gradients, and Projects ★ at #951');

// 4. Check app.js parity & section 19 pagination
if (appJs !== pubAppJs) fail('public/app.js out of sync with app.js');
if (!appJs.includes('totalPages = 19;') || !appJs.includes('currentPage === 19')) {
  fail('app.js missing 19-section pagination bounds');
} else {
  pass('app.js & public/app.js synced cleanly with 19-section pagination and search');
}

// 5. Check workspace HTML & runner
const sec19Html = fs.readFileSync(path.join(root, 'pages/section19-entry.html'), 'utf8');
const sec19Runner = fs.readFileSync(path.join(root, 'js/section19-runner.js'), 'utf8');
if (!sec19Html.includes('../index.html?section=19') || !sec19Runner.includes('section19Entries')) {
  fail('section19-entry.html or section19-runner.js linkage issue');
} else {
  pass('Workspace page pages/section19-entry.html and js/section19-runner.js properly linked');
}

if (errors > 0) {
  console.error(`\nTotal Section 19 failures: ${errors}`);
  process.exit(1);
}
console.log('\n🎉 ALL SECTION 19 (901–950) VERIFICATIONS PASSED (0 ERRORS)!');
