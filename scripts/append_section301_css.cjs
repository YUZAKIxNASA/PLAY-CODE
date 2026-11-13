const fs = require('fs');
const path = require('path');

const svgSrc = fs.readFileSync(path.resolve(__dirname, 'generate_section301_svgs.cjs'), 'utf8');
const dsSrc = fs.readFileSync(path.resolve(__dirname, '../data/section-301-350-entries.js'), 'utf8');
const entries = JSON.parse(dsSrc.slice(dsSrc.indexOf('['), dsSrc.lastIndexOf(']') + 1));

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

let cssBlock = `/* ==========================\n   SECTION 7: LANGUAGES 301–350\n   (Restored Catalog Entries — Logo-Matched Jewel-Tone Gradients)\n========================== */\n`;

entries.forEach(entry => {
  const fn = entry.logo.split('/').pop();
  const idx = svgSrc.indexOf(`"${fn}"`);
  if (idx === -1) throw new Error(`SVG not found for ${fn}`);
  const chunk = svgSrc.slice(idx, idx + 800);
  const stops = [...chunk.matchAll(/stop-color="([^"]+)"/g)].map(m => m[1]);
  if (stops.length < 2) throw new Error(`Missing gradient stops for ${fn}`);
  const c1 = stops[0];
  const c2 = stops[1];
  const rgb = hexToRgb(c1);

  cssBlock += `.category-card[data-category="${entry.id}"], .${entry.cssClass}{\n`;
  cssBlock += `    background:linear-gradient(135deg,${c1},${c2});\n`;
  cssBlock += `    border:1px solid rgba(${rgb}, 0.28);\n`;
  cssBlock += `}\n`;
  cssBlock += `.category-card[data-category="${entry.id}"]:hover, .${entry.cssClass}:hover{\n`;
  cssBlock += `    border-color:rgba(${rgb}, 0.55);\n`;
  cssBlock += `    box-shadow:0 16px 36px -4px rgba(${rgb}, 0.42), 0 0 20px rgba(${rgb}, 0.18);\n`;
  cssBlock += `}\n`;
});

const stylePath = path.resolve(__dirname, '../style.css');
let css = fs.readFileSync(stylePath, 'utf8');

if (css.includes('SECTION 7: LANGUAGES 301–350')) {
  console.log('Section 7 (301-350) CSS rules already present.');
  process.exit(0);
}

const marker = '/* ==========================\n   SECTION 7: LANGUAGES 351–400';
const markerCr = '/* ==========================\r\n   SECTION 7: LANGUAGES 351–400';
const usedMarker = css.includes(marker) ? marker : (css.includes(markerCr) ? markerCr : null);
if (!usedMarker) {
  throw new Error('Could not find SECTION 7: LANGUAGES 351–400 marker in style.css');
}

// Insert Section 7 (301–350) before former Section 7 (351–400) and shift comments 7..10 -> 8..11
css = css.replace(usedMarker, cssBlock + '\n' + usedMarker);
css = css.replace('SECTION 7: LANGUAGES 351–400', 'SECTION 8: LANGUAGES 351–400');
css = css.replace('SECTION 8: LANGUAGES 401–450', 'SECTION 9: LANGUAGES 401–450');
css = css.replace('SECTION 9: LANGUAGES 451–500', 'SECTION 10: LANGUAGES 451–500');
css = css.replace('SECTION 10: LANGUAGES 501–550', 'SECTION 11: LANGUAGES 501–550');

fs.writeFileSync(stylePath, css, 'utf8');
console.log('Inserted 50 CSS rules for Section 7 (301-350) and updated section comment headers in style.css.');
