const fs = require('fs');
const path = require('path');
const { section17Entries } = require('../data/section17-entries.js');

const svgsScript = fs.readFileSync(path.resolve(__dirname, 'generate_section17_svgs.cjs'), 'utf8');
const regex = /\/\/\s*(\d+)\.\s*([^\n]+)[\s\S]*?"([^"]+\.svg)":\s*`<svg[\s\S]*?<stop offset="0%" stop-color="([^"]+)"\/>[\s\S]*?<stop offset="100%" stop-color="([^"]+)"\/>/g;
const colorMap = {};
let match;
while ((match = regex.exec(svgsScript)) !== null) {
  colorMap[parseInt(match[1], 10)] = { c1: match[4], c2: match[5] };
}

function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

const cssRules = [];
for (const entry of section17Entries) {
  const colors = colorMap[entry.id];
  if (!colors) {
    console.error(`Missing colors for ${entry.id}`);
    process.exit(1);
  }
  const rgb = hexToRgb(colors.c1);
  cssRules.push(
    `.category-card[data-category="${entry.id}"], .${entry.cssClass}{\n` +
    `    background:linear-gradient(135deg,${colors.c1},${colors.c2});\n` +
    `    border:1px solid rgba(${rgb}, 0.28);\n` +
    `}\n` +
    `.category-card[data-category="${entry.id}"]:hover, .${entry.cssClass}:hover{\n` +
    `    border-color:rgba(${rgb}, 0.55);\n` +
    `    box-shadow:0 16px 36px -4px rgba(${rgb}, 0.42), 0 0 20px rgba(${rgb}, 0.18);\n` +
    `}`
  );
}

const cssPath = path.resolve(__dirname, '../style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const target = `.category-card[data-category="850"], .lazarus-lang{\n    background:linear-gradient(135deg,#0284C7,#082F49);\n}`;
if (!css.includes(target)) {
  console.error("Target anchor not found in style.css");
  process.exit(1);
}

const replacement = target + '\n' + cssRules.join('\n');
css = css.replace(target, replacement);
fs.writeFileSync(cssPath, css, 'utf8');
console.log(`Successfully added 50 Section 17 CSS rules to style.css!`);
