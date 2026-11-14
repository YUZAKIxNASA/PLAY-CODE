const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const cssPath = path.join(root, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const marker = '/* ==========================\n   FEATURED EXAMPLES\n========================== */';
const markerIdx = css.indexOf(marker);
if (markerIdx === -1) {
  throw new Error('Could not find FEATURED EXAMPLES marker in style.css');
}

if (css.includes('SECTION 23: LANGUAGES 1101')) {
  console.log('Section 23 CSS rules already present; skipping duplicate append.');
  process.exit(0);
}

const palettes = [
  { id: 1101, cls: "ssl-1101-lang", c1: "#1D4ED8", c2: "#0B1D51", rgb: "29, 78, 216" },
  { id: 1102, cls: "stateflow-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 1103, cls: "strand-lp-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1104, cls: "strongtalk-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" },
  { id: 1105, cls: "subtext-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 1106, cls: "supercollider-lang", c1: "#334155", c2: "#090D16", rgb: "51, 65, 85" },
  { id: 1107, cls: "superplan-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1108, cls: "supertalk-lang", c1: "#0284C7", c2: "#082F49", rgb: "2, 132, 199" },
  { id: 1109, cls: "swift-parallel-lang", c1: "#C2410C", c2: "#431407", rgb: "194, 65, 12" },
  { id: 1110, cls: "sycl-lang", c1: "#991B1B", c2: "#450A0A", rgb: "153, 27, 27" },
  { id: 1111, cls: "sympl-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 1112, cls: "t-lisp-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 1113, cls: "tacl-tandem-lang", c1: "#7E22CE", c2: "#3B0764", rgb: "126, 34, 206" },
  { id: 1114, cls: "tea-lang", c1: "#15803D", c2: "#052E16", rgb: "21, 128, 61" },
  { id: 1115, cls: "telcomp-lang", c1: "#0E7490", c2: "#083344", rgb: "14, 116, 144" },
  { id: 1116, cls: "tensilica-tie-lang", c1: "#B91C1C", c2: "#450A0A", rgb: "185, 28, 28" },
  { id: 1117, cls: "tads-if-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 1118, cls: "teco-lang", c1: "#374151", c2: "#111827", rgb: "55, 65, 81" },
  { id: 1119, cls: "tpu-vms-lang", c1: "#0369A1", c2: "#0C4A6E", rgb: "3, 105, 161" },
  { id: 1120, cls: "tmg-compiler-lang", c1: "#312E81", c2: "#151348", rgb: "49, 46, 129" },
  { id: 1121, cls: "tom-lang", c1: "#86198F", c2: "#3B0764", rgb: "134, 25, 143" },
  { id: 1122, cls: "topspeed-m2-lang", c1: "#1E40AF", c2: "#09163B", rgb: "30, 64, 175" },
  { id: 1123, cls: "trac-lang", c1: "#A16207", c2: "#422006", rgb: "161, 98, 7" },
  { id: 1124, cls: "tal-tandem-lang", c1: "#1D4ED8", c2: "#0F172A", rgb: "29, 78, 216" },
  { id: 1125, cls: "transcript-livecode-lang", c1: "#166534", c2: "#052E16", rgb: "22, 101, 52" },
  { id: 1126, cls: "ttcn-1126-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1127, cls: "ttm-macro-lang", c1: "#7C2D12", c2: "#3B1306", rgb: "124, 45, 18" },
  { id: 1128, cls: "tutor-plato-lang", c1: "#4D7C0F", c2: "#1A2E05", rgb: "77, 124, 15" },
  { id: 1129, cls: "tynker-1129-lang", c1: "#0284C7", c2: "#0C4A6E", rgb: "2, 132, 199" },
  { id: 1130, cls: "watfiv-lang", c1: "#5B21B6", c2: "#240E4A", rgb: "91, 33, 182" },
  { id: 1131, cls: "watfor-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1132, cls: "wyvern-lang", c1: "#047857", c2: "#064E3B", rgb: "4, 120, 87" },
  { id: 1133, cls: "cayenne-1133-lang", c1: "#B91C1C", c2: "#450A0A", rgb: "185, 28, 28" },
  { id: 1134, cls: "cilk-plus-lang", c1: "#1E40AF", c2: "#172554", rgb: "30, 64, 175" },
  { id: 1135, cls: "cil-1135-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" },
  { id: 1136, cls: "spitbol-1136-lang", c1: "#B45309", c2: "#3E1B06", rgb: "180, 83, 9" },
  { id: 1137, cls: "processing-js-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 1138, cls: "visual-lisp-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 1139, cls: "grasshopper-3d-lang", c1: "#3F6212", c2: "#1A2E05", rgb: "63, 98, 18" },
  { id: 1140, cls: "macsyma-lang", c1: "#0E7490", c2: "#164E63", rgb: "14, 116, 144" }
];

let block = `\n/* ==========================\n   SECTION 23: LANGUAGES 1101–1140 (LOGO-MATCHED JEWEL TONES)\n========================== */\n`;
for (const p of palettes) {
  block += `
.category-card[data-category="${p.id}"], .${p.cls}{
    background:linear-gradient(135deg,${p.c1},${p.c2});
    border:1px solid rgba(${p.rgb}, 0.28);
}

.category-card[data-category="${p.id}"]:hover, .${p.cls}:hover{
    border-color:rgba(${p.rgb}, 0.55);
    box-shadow:0 16px 36px -4px rgba(${p.rgb}, 0.42), 0 0 20px rgba(${p.rgb}, 0.18);
}
`;
}

css = css.slice(0, markerIdx) + block + '\n' + css.slice(markerIdx);
fs.writeFileSync(cssPath, css, 'utf8');
console.log(`Inserted ${palettes.length} Section 23 (1101-1140) logo-matched CSS rules into style.css.`);
