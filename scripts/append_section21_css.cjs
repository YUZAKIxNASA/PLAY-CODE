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

if (css.includes('SECTION 21: LANGUAGES 1001')) {
  console.log('Section 21 CSS rules already present; skipping duplicate append.');
  process.exit(0);
}

const palettes = [
  { id: 1001, cls: "microcode-lang", c1: "#334155", c2: "#0F172A", rgb: "51, 65, 85" },
  { id: 1002, cls: "miis-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1003, cls: "mimic-lang", c1: "#1D4ED8", c2: "#0B1D51", rgb: "29, 78, 216" },
  { id: 1004, cls: "mirah-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1005, cls: "miva-script-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 1006, cls: "model-204-lang", c1: "#374151", c2: "#111827", rgb: "55, 65, 81" },
  { id: 1007, cls: "mohol-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 1008, cls: "moo-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 1009, cls: "mortran-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 1010, cls: "mouse-lang", c1: "#7C2D12", c2: "#3B1306", rgb: "124, 45, 18" },
  { id: 1011, cls: "mpd-lang", c1: "#1E40AF", c2: "#09163B", rgb: "30, 64, 175" },
  { id: 1012, cls: "msl-mirc-lang", c1: "#166534", c2: "#052E16", rgb: "22, 101, 52" },
  { id: 1013, cls: "mupad-lang", c1: "#A21CAF", c2: "#4A044E", rgb: "162, 28, 175" },
  { id: 1014, cls: "mystic-mpl-lang", c1: "#5B21B6", c2: "#240E4A", rgb: "91, 33, 182" },
  { id: 1015, cls: "napier88-lang", c1: "#0E7490", c2: "#083344", rgb: "14, 116, 144" },
  { id: 1016, cls: "neko-lang", c1: "#C2410C", c2: "#431407", rgb: "194, 65, 12" },
  { id: 1017, cls: "net-data-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 1018, cls: "netrexx-lang", c1: "#B91C1C", c2: "#450A0A", rgb: "185, 28, 28" },
  { id: 1019, cls: "newp-lang", c1: "#334155", c2: "#090D16", rgb: "51, 65, 85" },
  { id: 1020, cls: "newtonscript-lang", c1: "#15803D", c2: "#064E3B", rgb: "21, 128, 61" },
  { id: 1021, cls: "nord-pl-lang", c1: "#0284C7", c2: "#082F49", rgb: "2, 132, 199" },
  { id: 1022, cls: "nxc-lang", c1: "#C2410C", c2: "#451A03", rgb: "194, 65, 12" },
  { id: 1023, cls: "nqc-lang", c1: "#A16207", c2: "#422006", rgb: "161, 98, 7" },
  { id: 1024, cls: "nu-lang", c1: "#7E22CE", c2: "#3B0764", rgb: "126, 34, 206" },
  { id: 1025, cls: "nsis-lang", c1: "#0369A1", c2: "#0C4A6E", rgb: "3, 105, 161" },
  { id: 1026, cls: "nwscript-lang", c1: "#9D174D", c2: "#500724", rgb: "157, 23, 77" },
  { id: 1027, cls: "nxt-g-lang", c1: "#B45309", c2: "#451A03", rgb: "180, 83, 9" },
  { id: 1028, cls: "p-lang", c1: "#4338CA", c2: "#1E1B4B", rgb: "67, 56, 202" },
  { id: 1029, cls: "p-prime-prime-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1030, cls: "parasail-lang", c1: "#0284C7", c2: "#0C4A6E", rgb: "2, 132, 199" },
  { id: 1031, cls: "pascal-script-lang", c1: "#1D4ED8", c2: "#0F172A", rgb: "29, 78, 216" },
  { id: 1032, cls: "pcastl-lang", c1: "#86198F", c2: "#3B0764", rgb: "134, 25, 143" },
  { id: 1033, cls: "pcf-lang", c1: "#312E81", c2: "#151348", rgb: "49, 46, 129" },
  { id: 1034, cls: "pdl-lang", c1: "#047857", c2: "#022C22", rgb: "4, 120, 87" },
  { id: 1035, cls: "pearl-1035-lang", c1: "#0E7490", c2: "#164E63", rgb: "14, 116, 144" },
  { id: 1036, cls: "peoplecode-lang", c1: "#991B1B", c2: "#450A0A", rgb: "153, 27, 27" },
  { id: 1037, cls: "pico-lang", c1: "#4D7C0F", c2: "#1A2E05", rgb: "77, 124, 15" },
  { id: 1038, cls: "pict-lang", c1: "#6D28D9", c2: "#2E1065", rgb: "109, 40, 217" },
  { id: 1039, cls: "pilot-lang", c1: "#B45309", c2: "#3E1B06", rgb: "180, 83, 9" },
  { id: 1040, cls: "pipelines-cms-lang", c1: "#334155", c2: "#0F172A", rgb: "51, 65, 85" },
  { id: 1041, cls: "pizza-lang", c1: "#C2410C", c2: "#431407", rgb: "194, 65, 12" },
  { id: 1042, cls: "pl-11-lang", c1: "#1E40AF", c2: "#172554", rgb: "30, 64, 175" },
  { id: 1043, cls: "pl-b-lang", c1: "#3F6212", c2: "#1A2E05", rgb: "63, 98, 18" },
  { id: 1044, cls: "pl-c-lang", c1: "#9F1239", c2: "#4C0519", rgb: "159, 18, 57" },
  { id: 1045, cls: "pl-p-lang", c1: "#0F766E", c2: "#042F2E", rgb: "15, 118, 110" },
  { id: 1046, cls: "pl360-lang", c1: "#1E3A8A", c2: "#09163B", rgb: "30, 58, 138" },
  { id: 1047, cls: "planc-lang", c1: "#0369A1", c2: "#082F49", rgb: "3, 105, 161" },
  { id: 1048, cls: "plankalkul-lang", c1: "#475569", c2: "#0F172A", rgb: "71, 85, 105" },
  { id: 1049, cls: "planner-ai-lang", c1: "#7E22CE", c2: "#3B0764", rgb: "126, 34, 206" },
  { id: 1050, cls: "plex-ericsson-lang", c1: "#166534", c2: "#052E16", rgb: "22, 101, 52" }
];

let block = `\n/* ==========================\n   SECTION 21: LANGUAGES 1001–1050 (LOGO-MATCHED JEWEL TONES)\n========================== */\n`;
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
console.log(`Inserted ${palettes.length} Section 21 (1001-1050) logo-matched CSS rules into style.css.`);
