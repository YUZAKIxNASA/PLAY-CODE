const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'assets/logos');
const publicDir = path.join(root, 'public/assets/logos');

// 40 Section 23 entries (1101-1140) with collision-free slugs and jewel-tone palettes
const entries = [
  { id: 1101, name: "S/SL", slug: "ssl-1101", c1: "#1D4ED8", c2: "#0B1D51", accent: "#93C5FD", symbol: "S/SL" },
  { id: 1102, name: "Stateflow", slug: "stateflow", c1: "#B45309", c2: "#451A03", accent: "#FCD34D", symbol: "SF" },
  { id: 1103, name: "Strand", slug: "strand-lp", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "STR" },
  { id: 1104, name: "Strongtalk", slug: "strongtalk", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "<T>" },
  { id: 1105, name: "Subtext", slug: "subtext-lang", c1: "#6D28D9", c2: "#2E1065", accent: "#C4B5FD", symbol: "SUB" },
  { id: 1106, name: "SuperCollider", slug: "supercollider", c1: "#334155", c2: "#090D16", accent: "#38BDF8", symbol: "SC3" },
  { id: 1107, name: "Superplan", slug: "superplan", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "für" },
  { id: 1108, name: "SuperTalk", slug: "supertalk", c1: "#0284C7", c2: "#082F49", accent: "#7DD3FC", symbol: "STk" },
  { id: 1109, name: "Swift (parallel scripting language)", slug: "swift-parallel", c1: "#C2410C", c2: "#431407", accent: "#FDBA74", symbol: "SWF" },
  { id: 1110, name: "SYCL", slug: "sycl", c1: "#991B1B", c2: "#450A0A", accent: "#FCA5A5", symbol: "SYCL" },
  { id: 1111, name: "SYMPL", slug: "sympl", c1: "#1E3A8A", c2: "#09163B", accent: "#60A5FA", symbol: "SYM" },
  { id: 1112, name: "T", slug: "t-lisp", c1: "#047857", c2: "#022C22", accent: "#6EE7B7", symbol: "(T)" },
  { id: 1113, name: "TACL", slug: "tacl-tandem", c1: "#7E22CE", c2: "#3B0764", accent: "#D8B4FE", symbol: "TACL" },
  { id: 1114, name: "Tea", slug: "tea-lang", c1: "#15803D", c2: "#052E16", accent: "#86EFAC", symbol: "TEA" },
  { id: 1115, name: "TELCOMP", slug: "telcomp", c1: "#0E7490", c2: "#083344", accent: "#67E8F9", symbol: "1.01" },
  { id: 1116, name: "Tensilica Instruction Extension", slug: "tensilica-tie", c1: "#B91C1C", c2: "#450A0A", accent: "#FCA5A5", symbol: "TIE" },
  { id: 1117, name: "Text Adventure Development System", slug: "tads-if", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "TADS" },
  { id: 1118, name: "Text Editor and Corrector", slug: "teco-lang", c1: "#374151", c2: "#111827", accent: "#94A3B8", symbol: "TECO" },
  { id: 1119, name: "Text Processing Utility", slug: "tpu-vms", c1: "#0369A1", c2: "#0C4A6E", accent: "#38BDF8", symbol: "TPU" },
  { id: 1120, name: "TMG", slug: "tmg-compiler", c1: "#312E81", c2: "#151348", accent: "#A5B4FC", symbol: "TMG" },
  { id: 1121, name: "Tom", slug: "tom-lang", c1: "#86198F", c2: "#3B0764", accent: "#E879F9", symbol: "%M" },
  { id: 1122, name: "Topspeed", slug: "topspeed-m2", c1: "#1E40AF", c2: "#09163B", accent: "#93C5FD", symbol: "TS2" },
  { id: 1123, name: "TRAC", slug: "trac-lang", c1: "#A16207", c2: "#422006", accent: "#FDE047", symbol: "#()" },
  { id: 1124, name: "Transaction Application Language", slug: "tal-tandem", c1: "#1D4ED8", c2: "#0F172A", accent: "#60A5FA", symbol: "TAL" },
  { id: 1125, name: "Transcript (LiveCode)", slug: "transcript-livecode", c1: "#166534", c2: "#052E16", accent: "#4ADE80", symbol: "LC" },
  { id: 1126, name: "TTCN", slug: "ttcn-1126", c1: "#0F766E", c2: "#042F2E", accent: "#2DD4BF", symbol: "TTCN" },
  { id: 1127, name: "TTM", slug: "ttm-macro", c1: "#7C2D12", c2: "#3B1306", accent: "#FDBA74", symbol: "#<>" },
  { id: 1128, name: "TUTOR", slug: "tutor-plato", c1: "#4D7C0F", c2: "#1A2E05", accent: "#BEF264", symbol: "PLT" },
  { id: 1129, name: "Tynker", slug: "tynker-1129", c1: "#0284C7", c2: "#0C4A6E", accent: "#7DD3FC", symbol: "TYN" },
  { id: 1130, name: "WATFIV", slug: "watfiv", c1: "#5B21B6", c2: "#240E4A", accent: "#C4B5FD", symbol: "WFV" },
  { id: 1131, name: "WATFOR", slug: "watfor", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "WFR" },
  { id: 1132, name: "Wyvern", slug: "wyvern-lang", c1: "#047857", c2: "#064E3B", accent: "#6EE7B7", symbol: "WYV" },
  { id: 1133, name: "Cayenne", slug: "cayenne-1133", c1: "#B91C1C", c2: "#450A0A", accent: "#FCA5A5", symbol: "CYN" },
  { id: 1134, name: "Cilk Plus", slug: "cilk-plus", c1: "#1E40AF", c2: "#172554", accent: "#93C5FD", symbol: "CLK+" },
  { id: 1135, name: "Common Intermediate Language", slug: "cil-1135", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "CIL" },
  { id: 1136, name: "SPITBOL", slug: "spitbol-1136", c1: "#B45309", c2: "#3E1B06", accent: "#FDE68A", symbol: "SPT" },
  { id: 1137, name: "Processing.js", slug: "processing-js", c1: "#0369A1", c2: "#082F49", accent: "#38BDF8", symbol: "P.js" },
  { id: 1138, name: "Visual LISP", slug: "visual-lisp", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "VLSP" },
  { id: 1139, name: "Grasshopper 3D", slug: "grasshopper-3d", c1: "#3F6212", c2: "#1A2E05", accent: "#A3E635", symbol: "GH3D" },
  { id: 1140, name: "Macsyma", slug: "macsyma", c1: "#0E7490", c2: "#164E63", accent: "#67E8F9", symbol: "Σdx" }
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSvg(item, idx) {
  const sym = escapeXml(item.symbol);
  const fontSize = sym.length <= 2 ? 40 : (sym.length === 3 ? 30 : 23);
  const yPos = sym.length <= 2 ? 78 : 74;
  const motif = idx % 4;
  let decor = '';
  if (motif === 0) {
    decor = `<circle cx="64" cy="64" r="44" fill="none" stroke="${item.accent}" stroke-width="3" stroke-opacity="0.35"/>`;
  } else if (motif === 1) {
    decor = `<rect x="20" y="20" width="88" height="88" rx="18" fill="none" stroke="${item.accent}" stroke-width="3" stroke-opacity="0.35"/>`;
  } else if (motif === 2) {
    decor = `<polygon points="64,16 108,42 108,86 64,112 20,86 20,42" fill="none" stroke="${item.accent}" stroke-width="3" stroke-opacity="0.35"/>`;
  } else {
    decor = `<path d="M22 36 L64 16 L106 36 M22 92 L64 112 L106 92" fill="none" stroke="${item.accent}" stroke-width="3.5" stroke-linecap="round" stroke-opacity="0.45"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bg-${item.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${item.c1}"/>
      <stop offset="100%" stop-color="${item.c2}"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bg-${item.id})"/>
  <rect x="4" y="4" width="120" height="120" rx="24" fill="none" stroke="${item.accent}" stroke-opacity="0.28" stroke-width="2"/>
  ${decor}
  <text x="64" y="${yPos}" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-weight="700" font-size="${fontSize}" fill="#FFFFFF" letter-spacing="0.5">${sym}</text>
  <circle cx="102" cy="26" r="5" fill="${item.accent}" fill-opacity="0.85"/>
</svg>
`;
}

for (const item of entries) {
  const filename = `${item.slug}.svg`;
  if (fs.existsSync(path.join(assetsDir, filename))) {
    throw new Error(`Collision detected in assets/logos: ${filename}`);
  }
}

entries.forEach((item, idx) => {
  const svg = buildSvg(item, idx);
  const filename = `${item.slug}.svg`;
  fs.writeFileSync(path.join(assetsDir, filename), svg, 'utf8');
  fs.writeFileSync(path.join(publicDir, filename), svg, 'utf8');
});

console.log(`Generated ${entries.length} Section 23 SVG logos (1101-1140) identically in assets/logos/ and public/assets/logos/.`);
