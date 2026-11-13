const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'assets/logos');
const publicDir = path.join(root, 'public/assets/logos');

// 50 Section 20 entries (951-1000) with collision-free slugs, classes, and jewel-tone palettes
const entries = [
  { id: 951, name: "Control Language", slug: "control-language", c1: "#1D4ED8", c2: "#0F172A", accent: "#93C5FD", symbol: "CL" },
  { id: 952, name: "Rocq", slug: "rocq", c1: "#B45309", c2: "#451A03", accent: "#FCD34D", symbol: "⊢∀" },
  { id: 953, name: "CorVision", slug: "corvision", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "CV" },
  { id: 954, name: "COWSEL", slug: "cowsel", c1: "#6D28D9", c2: "#2E1065", accent: "#DDD6FE", symbol: "CW" },
  { id: 955, name: "Cryptol", slug: "cryptol", c1: "#1E3A8A", c2: "#09163B", accent: "#60A5FA", symbol: "0x" },
  { id: 956, name: "Csound", slug: "csound", c1: "#BE185D", c2: "#500724", accent: "#F9A8D4", symbol: "∿" },
  { id: 957, name: "Cuneiform", slug: "cuneiform", c1: "#92400E", c2: "#3E1B06", accent: "#FDE68A", symbol: "▼" },
  { id: 958, name: "Curl", slug: "curl-lang", c1: "#0369A1", c2: "#082F49", accent: "#7DD3FC", symbol: "{c}" },
  { id: 959, name: "Cybil", slug: "cybil", c1: "#374151", c2: "#111827", accent: "#9CA3AF", symbol: "CY" },
  { id: 960, name: "F", slug: "f-lang", c1: "#1E40AF", c2: "#0B1D51", accent: "#93C5FD", symbol: "F" },
  { id: 961, name: "FAUST", slug: "faust", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: ":>" },
  { id: 962, name: "FFP", slug: "ffp", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "FFP" },
  { id: 963, name: "Fjölnir", slug: "fjolnir", c1: "#0E7490", c2: "#083344", accent: "#67E8F9", symbol: "FJ" },
  { id: 964, name: "FL", slug: "fl-lang", c1: "#5B21B6", c2: "#240E4A", accent: "#C4B5FD", symbol: "FL" },
  { id: 965, name: "Flavors", slug: "flavors", c1: "#A21CAF", c2: "#4A044E", accent: "#F0ABFC", symbol: "MX" },
  { id: 966, name: "FlooP", slug: "floop", c1: "#15803D", c2: "#052E16", accent: "#86EFAC", symbol: "μ" },
  { id: 967, name: "FOCAL", slug: "focal", c1: "#7C2D12", c2: "#3B1306", accent: "#FDBA74", symbol: "FO" },
  { id: 968, name: "FOIL", slug: "foil", c1: "#047857", c2: "#022C22", accent: "#6EE7B7", symbol: "FI" },
  { id: 969, name: "FORMAC", slug: "formac", c1: "#B91C1C", c2: "#450A0A", accent: "#FCA5A5", symbol: "∂x" },
  { id: 970, name: "@Formula", slug: "at-formula", c1: "#A16207", c2: "#422006", accent: "#FDE047", symbol: "@()" },
  { id: 971, name: "FP", slug: "fp-lang", c1: "#312E81", c2: "#151348", accent: "#A5B4FC", symbol: "α" },
  { id: 972, name: "Franz Lisp", slug: "franz-lisp", c1: "#86198F", c2: "#3B0764", accent: "#E879F9", symbol: "(λ)" },
  { id: 973, name: "Game Maker Language", slug: "gamemaker-gml", c1: "#166534", c2: "#052E16", accent: "#4ADE80", symbol: "GM" },
  { id: 974, name: "GameMonkey Script", slug: "gamemonkey", c1: "#B45309", c2: "#451A03", accent: "#FBBF24", symbol: "GMK" },
  { id: 975, name: "Geometric Description Language", slug: "gdl-lang", c1: "#0284C7", c2: "#082F49", accent: "#38BDF8", symbol: "3D" },
  { id: 976, name: "GEORGE", slug: "george-lang", c1: "#334155", c2: "#0F172A", accent: "#CBD5E1", symbol: "RPN" },
  { id: 977, name: "GNU", slug: "gnu-lang", c1: "#4D7C0F", c2: "#1A2E05", accent: "#BEF264", symbol: "GNU" },
  { id: 978, name: "GNU E", slug: "gnu-e", c1: "#0F766E", c2: "#042F2E", accent: "#2DD4BF", symbol: "E++" },
  { id: 979, name: "Go!", slug: "go-bang", c1: "#0369A1", c2: "#0C4A6E", accent: "#7DD3FC", symbol: "Go!" },
  { id: 980, name: "GOAL", slug: "goal-lang", c1: "#C2410C", c2: "#431407", accent: "#FDBA74", symbol: "GL" },
  { id: 981, name: "Golo", slug: "golo", c1: "#7E22CE", c2: "#3B0764", accent: "#D8B4FE", symbol: "GO" },
  { id: 982, name: "GOM", slug: "gom-lang", c1: "#1E40AF", c2: "#172554", accent: "#93C5FD", symbol: "GOM" },
  { id: 983, name: "GOTRAN", slug: "gotran", c1: "#3F6212", c2: "#1A2E05", accent: "#A3E635", symbol: "162" },
  { id: 984, name: "GPSS", slug: "gpss", c1: "#0E7490", c2: "#164E63", accent: "#67E8F9", symbol: "Q[]" },
  { id: 985, name: "GraphTalk", slug: "graphtalk", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "GT" },
  { id: 986, name: "GRASS", slug: "grass-986", c1: "#15803D", c2: "#064E3B", accent: "#6EE7B7", symbol: "XY" },
  { id: 987, name: "Grasshopper", slug: "grasshopper", c1: "#166534", c2: "#022C22", accent: "#86EFAC", symbol: "GH" },
  { id: 988, name: "M Formula language", slug: "m-formula", c1: "#15803D", c2: "#052E16", accent: "#86EFAC", symbol: "M=" },
  { id: 989, name: "M4", slug: "m4-989", c1: "#475569", c2: "#0F172A", accent: "#CBD5E1", symbol: "m4" },
  { id: 990, name: "Machine code", slug: "machine-code", c1: "#374151", c2: "#090D16", accent: "#38BDF8", symbol: "01" },
  { id: 991, name: "MAD", slug: "mad-lang", c1: "#991B1B", c2: "#450A0A", accent: "#FCA5A5", symbol: "MAD" },
  { id: 992, name: "MAD/I", slug: "mad-i", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "M/I" },
  { id: 993, name: "Magik", slug: "magik", c1: "#6D28D9", c2: "#2E1065", accent: "#C4B5FD", symbol: "MG" },
  { id: 994, name: "MAPPER", slug: "mapper", c1: "#1D4ED8", c2: "#0B1D51", accent: "#93C5FD", symbol: "BIS" },
  { id: 995, name: "Mary", slug: "mary-lang", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "MR" },
  { id: 996, name: "MATH-MATIC", slug: "math-matic", c1: "#B45309", c2: "#451A03", accent: "#FDE68A", symbol: "AT3" },
  { id: 997, name: "Max", slug: "max-msp", c1: "#334155", c2: "#0F172A", accent: "#38BDF8", symbol: "MAX" },
  { id: 998, name: "MaxScript", slug: "maxscript", c1: "#0369A1", c2: "#082F49", accent: "#7DD3FC", symbol: "MS" },
  { id: 999, name: "Maya MEL", slug: "maya-mel", c1: "#0E7490", c2: "#042F2E", accent: "#22D3EE", symbol: "MEL" },
  { id: 1000, name: "MDL", slug: "mdl-lang", c1: "#5B21B6", c2: "#1E1B4B", accent: "#DDD6FE", symbol: "MDL" }
];

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildSvg(item, idx) {
  const sym = escapeXml(item.symbol);
  const fontSize = sym.length <= 2 ? 40 : (sym.length === 3 ? 31 : 25);
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

// Verify zero SVG collisions before writing
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

console.log(`Generated ${entries.length} Section 20 SVG logos (951-1000) identically in assets/logos/ and public/assets/logos/.`);
