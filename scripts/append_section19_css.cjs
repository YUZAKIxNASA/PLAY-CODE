const fs = require('fs');
const path = require('path');

const svgSrc = fs.readFileSync(path.resolve(__dirname, 'generate_section19_svgs.cjs'), 'utf8');
const dsSrc = fs.readFileSync(path.resolve(__dirname, '../data/section19-entries.js'), 'utf8');
const entries = JSON.parse(dsSrc.slice(dsSrc.indexOf('['), dsSrc.lastIndexOf(']') + 1));

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

let cssBlock = `\n/* ==========================\n   SECTION 19: LANGUAGES 901–950\n   (Logo-Calibrated Jewel-Tone Gradients per CARD DESIGN.md)\n========================== */\n`;

entries.forEach(entry => {
  const fn = entry.logo.split('/').pop();
  const re = new RegExp(`\\[${entry.id},\\s*'${fn.replace('.', '\\.')}',\\s*'(#[^']+)',\\s*'(#[^']+)'`);
  const match = svgSrc.match(re);
  if (!match) throw new Error(`Color stops not found for #${entry.id} (${fn})`);
  const c1 = match[1];
  const c2 = match[2];
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

if (css.includes('SECTION 19: LANGUAGES 901–950')) {
  console.log('Section 19 CSS rules already present in style.css.');
  process.exit(0);
}

const anchor = '/* ==========================\n   FEATURED EXAMPLES';
const anchorCr = '/* ==========================\r\n   FEATURED EXAMPLES';
const usedAnchor = css.includes(anchor) ? anchor : (css.includes(anchorCr) ? anchorCr : null);
if (!usedAnchor) {
  throw new Error('Could not find FEATURED EXAMPLES marker in style.css');
}

css = css.replace(usedAnchor, cssBlock + '\n\n' + usedAnchor);
fs.writeFileSync(stylePath, css, 'utf8');
console.log('Inserted 50 Section 19 (901-950) jewel-tone gradient rules into style.css.');
