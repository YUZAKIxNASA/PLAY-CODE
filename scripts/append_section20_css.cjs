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

// Guard against duplicate insertion
if (css.includes('SECTION 20: LANGUAGES 951')) {
  console.log('Section 20 CSS rules already present; skipping duplicate append.');
  process.exit(0);
}

const palettes = [
  { id: 951, cls: "control-language-lang", c1: "#1D4ED8", c2: "#0F172A", rgb: "29, 78, 216" },
  { id: 952, cls: "rocq-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 953, cls: "corvision-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 954, cls: "cowsel-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 955, cls: "cryptol-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 956, cls: "csound-lang", c1: "#BE185D", c2: "#500724", rgb: "190, 24, 93" },
  { id: 957, cls: "cuneiform-lang", c1: "#92400E", c2: "#3E1B06", rgb: "146, 64, 14" },
  { id: 958, cls: "curl-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 959, cls: "cybil-lang", c1: "#374151", c2: "#111827", rgb: "55, 65, 81" },
  { id: 960, cls: "f-lang", c1: "#1E40AF", c2: "#0B1D51", rgb: "30, 64, 175" },
  { id: 961, cls: "faust-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 962, cls: "ffp-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" },
  { id: 963, cls: "fjolnir-lang", c1: "#0E7490", c2: "#083344", rgb: "14, 116, 144" },
  { id: 964, cls: "fl-lang", c1: "#5B21B6", c2: "#240E4A", rgb: "91, 33, 182" },
  { id: 965, cls: "flavors-lang", c1: "#A21CAF", c2: "#4A044E", rgb: "162, 28, 175" },
  { id: 966, cls: "floop-lang", c1: "#15803D", c2: "#052E16", rgb: "21, 128, 61" },
  { id: 967, cls: "focal-lang", c1: "#7C2D12", c2: "#3B1306", rgb: "124, 45, 18" },
  { id: 968, cls: "foil-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 969, cls: "formac-lang", c1: "#B91C1C", c2: "#450A0A", rgb: "185, 28, 28" },
  { id: 970, cls: "at-formula-lang", c1: "#A16207", c2: "#422006", rgb: "161, 98, 7" },
  { id: 971, cls: "fp-lang", c1: "#312E81", c2: "#151348", rgb: "49, 46, 129" },
  { id: 972, cls: "franz-lisp-lang", c1: "#86198F", c2: "#3B0764", rgb: "134, 25, 143" },
  { id: 973, cls: "gamemaker-gml-lang", c1: "#166534", c2: "#052E16", rgb: "22, 101, 52" },
  { id: 974, cls: "gamemonkey-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 975, cls: "gdl-lang", c1: "#0284C7", c2: "#082F49", rgb: "2, 132, 199" },
  { id: 976, cls: "george-lang", c1: "#334155", c2: "#0F172A", rgb: "51, 65, 85" },
  { id: 977, cls: "gnu-lang", c1: "#4D7C0F", c2: "#1A2E05", rgb: "77, 124, 15" },
  { id: 978, cls: "gnu-e-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 979, cls: "go-bang-lang", c1: "#0369A1", c2: "#0C4A6E", rgb: "3, 105, 161" },
  { id: 980, cls: "goal-lang", c1: "#C2410C", c2: "#431407", rgb: "194, 65, 12" },
  { id: 981, cls: "golo-lang", c1: "#7E22CE", c2: "#3B0764", rgb: "126, 34, 206" },
  { id: 982, cls: "gom-lang", c1: "#1E40AF", c2: "#172554", rgb: "30, 64, 175" },
  { id: 983, cls: "gotran-lang", c1: "#3F6212", c2: "#1A2E05", rgb: "63, 98, 18" },
  { id: 984, cls: "gpss-lang", c1: "#0E7490", c2: "#164E63", rgb: "14, 116, 144" },
  { id: 985, cls: "graphtalk-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 986, cls: "grass-986-lang", c1: "#15803D", c2: "#064E3B", rgb: "21, 128, 61" },
  { id: 987, cls: "grasshopper-lang", c1: "#166534", c2: "#022C22", rgb: "22, 101, 52" },
  { id: 988, cls: "m-formula-lang", c1: "#15803D", c2: "#052E16", rgb: "21, 128, 61" },
  { id: 989, cls: "m4-989-lang", c1: "#475569", c2: "#0F172A", rgb: "71, 85, 105" },
  { id: 990, cls: "machine-code-lang", c1: "#374151", c2: "#090D16", rgb: "55, 65, 81" },
  { id: 991, cls: "mad-lang", c1: "#991B1B", c2: "#450A0A", rgb: "153, 27, 27" },
  { id: 992, cls: "mad-i-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 993, cls: "magik-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 994, cls: "mapper-lang", c1: "#1D4ED8", c2: "#0B1D51", rgb: "29, 78, 216" },
  { id: 995, cls: "mary-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 996, cls: "math-matic-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 997, cls: "max-msp-lang", c1: "#334155", c2: "#0F172A", rgb: "51, 65, 85" },
  { id: 998, cls: "maxscript-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 999, cls: "maya-mel-lang", c1: "#0E7490", c2: "#042F2E", rgb: "14, 116, 144" },
  { id: 1000, cls: "mdl-lang", c1: "#5B21B6", c2: "#1E1B4B", rgb: "91, 33, 182" }
];

let block = `\n/* ==========================\n   SECTION 20: LANGUAGES 951–1000 (LOGO-MATCHED JEWEL TONES)\n========================== */\n`;
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
console.log(`Inserted ${palettes.length} Section 20 (951-1000) logo-matched CSS rules into style.css.`);
