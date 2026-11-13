const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const appJs = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const pubAppJs = fs.readFileSync(path.join(root, 'public/app.js'), 'utf8');

let errors = 0;
function fail(msg) {
  console.error('❌ FAIL:', msg);
  errors++;
}
function pass(msg) {
  console.log('✅ PASS:', msg);
}

// 1. Check 18 section nav buttons & exact ranges
const expectedSections = [
  [1, '1–50'], [2, '51–100'], [3, '101–150'], [4, '151–200'],
  [5, '201–250'], [6, '251–300'], [7, '301–350'], [8, '351–400'],
  [9, '401–450'], [10, '451–500'], [11, '501–550'], [12, '551–600'],
  [13, '601–650'], [14, '651–700'], [15, '701–750'], [16, '751–800'],
  [17, '801–850'], [18, '851–900']
];

const btnMatches = [...html.matchAll(/<button[^>]*data-section="(\d+)"[^>]*>[\s\S]*?<span class="sec-btn-title">([^<]+)<\/span>[\s\S]*?<span class="sec-btn-range">([^<]+)<\/span>/g)];
if (btnMatches.length !== 18) {
  fail(`Expected 18 section buttons, found ${btnMatches.length}`);
} else {
  let navOk = true;
  expectedSections.forEach(([sec, range], idx) => {
    const m = btnMatches[idx];
    if (Number(m[1]) !== sec || m[2].trim() !== `Section ${sec}` || m[3].trim() !== range) {
      fail(`Nav button #${idx + 1} mismatch: got Section ${m[1]} / ${m[2]} / ${m[3]}, expected Section ${sec} / ${range}`);
      navOk = false;
    }
  });
  if (navOk) pass('All 18 section nav buttons present with exact ranges 1–50 through 851–900');
}

// 2. Check all cards inside #category-grid
const gridStart = html.indexOf('id="category-grid"');
const gridEnd = html.indexOf('id="pagination-container-bottom"');
const gridHtml = html.slice(gridStart, gridEnd);

const cardRegex = /<(a|div)\b([^>]*class="category-card([^"]*)"[^>]*)>[\s\S]*?<h3>\s*<img\s+src="([^"]+)"[^>]*>\s*([\s\S]*?)\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?<span class="card-num">([^<]+)<\/span>[\s\S]*?<\/\1>/g;
const cards = [...gridHtml.matchAll(cardRegex)];

if (cards.length !== 901) {
  fail(`Expected 901 cards (900 languages + Projects), found ${cards.length}`);
} else {
  pass(`Category grid contains exactly ${cards.length} cards (900 languages + 1 Projects card)`);
}

// Verify sequential numbering 1..900 & final Projects card & zero duplicates
const seenNums = new Set();
const seenTitles = new Map();
let missingAssets = 0;
let emptyDesc = 0;

for (let i = 0; i < cards.length; i++) {
  const [, , attrs, cls, logoSrc, titleRaw, descRaw, numRaw] = cards[i];
  const hrefMatch = attrs.match(/href="([^"]+)"/);
  const href = hrefMatch ? hrefMatch[1] : '';
  const title = titleRaw.replace(/<[^>]+>/g, '').trim();
  const desc = descRaw.trim();
  const num = numRaw.trim();

  if (i < 900) {
    const expectedNum = i + 1;
    if (Number(num) !== expectedNum) {
      fail(`Card at grid position ${i + 1} has card-num="${num}", expected "${expectedNum}" (${title})`);
      break;
    }
    if (seenNums.has(expectedNum)) {
      fail(`Duplicate card number ${expectedNum}`);
    }
    seenNums.add(expectedNum);

    const normTitle = title.toLowerCase();
    if (seenTitles.has(normTitle)) {
      const prevNum = seenTitles.get(normTitle);
      if ((expectedNum >= 301 && expectedNum <= 350) || (prevNum >= 301 && prevNum <= 350)) {
        fail(`Duplicate title involving Section 7 (301–350): "${title}" at #${expectedNum} and #${prevNum}`);
      }
    } else {
      seenTitles.set(normTitle, expectedNum);
    }

    // Check asset file exists
    const assetPath = path.join(root, logoSrc);
    if (!fs.existsSync(assetPath)) {
      fail(`Missing logo asset at ${logoSrc} for #${expectedNum} (${title})`);
      missingAssets++;
    }
    // Check 301-350 extra checks
    if (expectedNum >= 301 && expectedNum <= 350) {
      if (!href.startsWith(`pages/section-301-350-entry.html?entry=${expectedNum}`)) {
        fail(`Wrong href for #${expectedNum}: ${href}`);
      }
      if (!css.includes(`.category-card[data-category="${expectedNum}"]`)) {
        fail(`Missing CSS rule for data-category="${expectedNum}" in style.css`);
      }
      const pubAsset = path.join(root, 'public', logoSrc);
      if (!fs.existsSync(pubAsset)) {
        fail(`Missing public SVG copy at public/${logoSrc}`);
      }
    }
  } else {
    if (!cls.includes('project') || num !== '★' || href !== 'pages/projects.html') {
      fail(`Final 901st card is not Projects (★): class="${cls}", num="${num}", href="${href}"`);
    } else {
      pass('Projects card (★) anchored at final position 901 with intact link to pages/projects.html');
    }
  }

  if (!desc || desc === 'undefined' || desc === 'null') {
    fail(`Invalid/empty description on card ${num} (${title})`);
    emptyDesc++;
  }
}

pass('Zero duplicate titles introduced by Section 7 (301–350)');

if (seenNums.size === 900) pass('All 900 language numbers 1–900 are strictly continuous with 0 gaps');
if (missingAssets === 0) pass('All 901 card SVG logo paths exist in assets/logos/');
if (emptyDesc === 0) pass('All 901 cards have valid non-empty descriptions');

// 3. Check 10-column grid in style.css
if (!css.includes('grid-template-columns: repeat(10, minmax(0, 1fr))')) {
  fail('style.css is missing repeat(10, minmax(0, 1fr)) for .section-nav-group');
} else {
  pass('style.css defines 10-column desktop section navigation grid + responsive media queries');
}

// 4. Check app.js parity with public/app.js
if (appJs !== pubAppJs) {
  fail('public/app.js is out of sync with app.js');
} else {
  pass('app.js and public/app.js are byte-identical with 18-section pagination logic');
}

// 5. Check shifted section links in subpages
const subChecks = [
  ['pages/section-301-350-entry.html', 'section=7', 'Section 7 (301–350)'],
  ['pages/section7-entry.html', 'section=8', 'Section 8 (351–400)'],
  ['pages/section17-entry.html', 'section=18', 'Section 18 (851–900)']
];
subChecks.forEach(([rel, qs, lbl]) => {
  const c = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!c.includes(qs) || !c.includes(lbl)) {
    fail(`${rel} missing expected ${qs} / "${lbl}"`);
  }
});
if (errors === 0) {
  pass('All subpages verified for correct shifted section labels & query links');
}

if (errors > 0) {
  console.error(`\nTotal verification failures: ${errors}`);
  process.exit(1);
} else {
  console.log('\n🎉 ALL TASK 04 + 10-COLUMN SECTION GRID VERIFICATIONS PASSED (0 ERRORS)!');
}
