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

if (css.includes('SECTION 22: LANGUAGES 1051')) {
  console.log('Section 22 CSS rules already present; skipping duplicate append.');
  process.exit(0);
}

const palettes = [
  { id: 1051, cls: "plexil-lang", c1: "#1D4ED8", c2: "#0B1D51", rgb: "29, 78, 216" },
  { id: 1052, cls: "plus-ubc-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1053, cls: "pop-11-1053-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 1054, cls: "pop-2-lang", c1: "#7E22CE", c2: "#3B0764", rgb: "126, 34, 206" },
  { id: 1055, cls: "portable-e-lang", c1: "#B91C1C", c2: "#450A0A", rgb: "185, 28, 28" },
  { id: 1056, cls: "pov-ray-sdl-lang", c1: "#0284C7", c2: "#082F49", rgb: "2, 132, 199" },
  { id: 1057, cls: "powerhouse-4gl-lang", c1: "#334155", c2: "#0F172A", rgb: "51, 65, 85" },
  { id: 1058, cls: "ppl-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 1059, cls: "prograph-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 1060, cls: "project-verona-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" },
  { id: 1061, cls: "promal-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 1062, cls: "prose-modeling-lang", c1: "#0E7490", c2: "#083344", rgb: "14, 116, 144" },
  { id: 1063, cls: "protel-lang", c1: "#1E40AF", c2: "#09163B", rgb: "30, 64, 175" },
  { id: 1064, cls: "pro-c-lang", c1: "#991B1B", c2: "#450A0A", rgb: "153, 27, 27" },
  { id: 1065, cls: "pure-1065-lang", c1: "#86198F", c2: "#3B0764", rgb: "134, 25, 143" },
  { id: 1066, cls: "pure-data-lang", c1: "#374151", c2: "#111827", rgb: "55, 65, 81" },
  { id: 1067, cls: "s-lang", c1: "#0369A1", c2: "#0C4A6E", rgb: "3, 105, 161" },
  { id: 1068, cls: "s2-1068-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 1069, cls: "s3-1069-lang", c1: "#475569", c2: "#0F172A", rgb: "71, 85, 105" },
  { id: 1070, cls: "sa-c-lang", c1: "#15803D", c2: "#064E3B", rgb: "21, 128, 61" },
  { id: 1071, cls: "sabretalk-lang", c1: "#1D4ED8", c2: "#0F172A", rgb: "29, 78, 216" },
  { id: 1072, cls: "sail-stanford-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1073, cls: "sako-pl-lang", c1: "#C2410C", c2: "#431407", rgb: "194, 65, 12" },
  { id: 1074, cls: "sawzall-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1075, cls: "sbl-spitbol-lang", c1: "#A16207", c2: "#422006", rgb: "161, 98, 7" },
  { id: 1076, cls: "script-net-lang", c1: "#5B21B6", c2: "#240E4A", rgb: "91, 33, 182" },
  { id: 1077, cls: "sensetalk-lang", c1: "#166534", c2: "#052E16", rgb: "22, 101, 52" },
  { id: 1078, cls: "sequencel-lang", c1: "#0284C7", c2: "#0C4A6E", rgb: "2, 132, 199" },
  { id: 1079, cls: "serpent-cmu-lang", c1: "#A21CAF", c2: "#4A044E", rgb: "162, 28, 175" },
  { id: 1080, cls: "setl-lang", c1: "#312E81", c2: "#151348", rgb: "49, 46, 129" },
  { id: 1081, cls: "short-code-lang", c1: "#334155", c2: "#090D16", rgb: "51, 65, 85" },
  { id: 1082, cls: "simple-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 1083, cls: "simpol-lang", c1: "#0E7490", c2: "#164E63", rgb: "14, 116, 144" },
  { id: 1084, cls: "simscript-lang", c1: "#7C2D12", c2: "#3B1306", rgb: "124, 45, 18" },
  { id: 1085, cls: "skill-cadence-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1086, cls: "slip-list-lang", c1: "#4D7C0F", c2: "#1A2E05", rgb: "77, 124, 15" },
  { id: 1087, cls: "small-1087-lang", c1: "#1E40AF", c2: "#172554", rgb: "30, 64, 175" },
  { id: 1088, cls: "snowball-1088-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 1089, cls: "sol-1089-lang", c1: "#B45309", c2: "#3E1B06", rgb: "180, 83, 9" },
  { id: 1090, cls: "sophaeros-lang", c1: "#374151", c2: "#111827", rgb: "55, 65, 81" },
  { id: 1091, cls: "source-nus-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 1092, cls: "spark-1092-lang", c1: "#047857", c2: "#064E3B", rgb: "4, 120, 87" },
  { id: 1093, cls: "speakeasy-lang", c1: "#1D4ED8", c2: "#0B1D51", rgb: "29, 78, 216" },
  { id: 1094, cls: "speedcode-lang", c1: "#C2410C", c2: "#451A03", rgb: "194, 65, 12" },
  { id: 1095, cls: "spin-parallax-lang", c1: "#0E7490", c2: "#083344", rgb: "14, 116, 144" },
  { id: 1096, cls: "sp-k-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 1097, cls: "spl-1097-lang", c1: "#3F6212", c2: "#1A2E05", rgb: "63, 98, 18" },
  { id: 1098, cls: "sps-ibm-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 1099, cls: "sqr-oracle-lang", c1: "#991B1B", c2: "#450A0A", rgb: "153, 27, 27" },
  { id: 1100, cls: "sr-arizona-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" }
];

let block = `\n/* ==========================\n   SECTION 22: LANGUAGES 1051–1100 (LOGO-MATCHED JEWEL TONES)\n========================== */\n`;
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
console.log(`Inserted ${palettes.length} Section 22 (1051-1100) logo-matched CSS rules into style.css.`);
