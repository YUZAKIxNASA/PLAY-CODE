const fs = require('fs');
const path = require('path');
const { section15Entries } = require('../data/section15-entries.js');

const svgsScript = fs.readFileSync(path.resolve(__dirname, 'generate_section15_svgs.cjs'), 'utf8');
const regex = /\/\/\s*(\d+)\.\s*([^\n]+)[\s\S]*?"([^"]+\.svg)":\s*`<svg[\s\S]*?<stop offset="0%" stop-color="([^"]+)"\/>[\s\S]*?<stop offset="100%" stop-color="([^"]+)"\/>/g;
const colorMap = {};
let match;
while ((match = regex.exec(svgsScript)) !== null) {
  colorMap[parseInt(match[1], 10)] = { c1: match[4], c2: match[5] };
}

const cssRules = [];
for (const entry of section15Entries) {
  const colors = colorMap[entry.id];
  if (!colors) {
    console.error(`Missing colors for ${entry.id}`);
    process.exit(1);
  }
  cssRules.push(`.category-card[data-category="${entry.id}"], .${entry.cssClass}{\n    background:linear-gradient(135deg,${colors.c1},${colors.c2});\n}`);
}

const cssPath = path.resolve(__dirname, '../style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const target = `.category-card[data-category="750"], .sqlj-lang{\n    background:linear-gradient(135deg,#B45309,#291802);\n}`;
if (!css.includes(target)) {
  console.error("Target anchor not found in style.css");
  process.exit(1);
}

const replacement = target + '\n' + cssRules.join('\n');
css = css.replace(target, replacement);
fs.writeFileSync(cssPath, css, 'utf8');
console.log(`Successfully added 50 Section 15 CSS rules to style.css!`);
