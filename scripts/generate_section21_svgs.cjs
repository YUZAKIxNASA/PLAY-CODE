const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'assets/logos');
const publicDir = path.join(root, 'public/assets/logos');

// 50 Section 21 entries (1001-1050) with collision-free slugs and jewel-tone palettes
const entries = [
  { id: 1001, name: "Microcode", slug: "microcode", c1: "#334155", c2: "#0F172A", accent: "#38BDF8", symbol: "μOp" },
  { id: 1002, name: "MIIS", slug: "miis", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "MI" },
  { id: 1003, name: "MIMIC", slug: "mimic", c1: "#1D4ED8", c2: "#0B1D51", accent: "#93C5FD", symbol: "dx" },
  { id: 1004, name: "Mirah", slug: "mirah", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "MRH" },
  { id: 1005, name: "MIVA Script", slug: "miva-script", c1: "#0369A1", c2: "#082F49", accent: "#7DD3FC", symbol: "<Mv>" },
  { id: 1006, name: "Model 204", slug: "model-204", c1: "#374151", c2: "#111827", accent: "#CBD5E1", symbol: "204" },
  { id: 1007, name: "Mohol", slug: "mohol", c1: "#6D28D9", c2: "#2E1065", accent: "#DDD6FE", symbol: "MHL" },
  { id: 1008, name: "MOO", slug: "moo-lang", c1: "#047857", c2: "#022C22", accent: "#6EE7B7", symbol: "MOO" },
  { id: 1009, name: "Mortran", slug: "mortran", c1: "#B45309", c2: "#451A03", accent: "#FCD34D", symbol: "MTR" },
  { id: 1010, name: "Mouse", slug: "mouse-lang", c1: "#7C2D12", c2: "#3B1306", accent: "#FDBA74", symbol: "$$" },
  { id: 1011, name: "MPD", slug: "mpd-lang", c1: "#1E40AF", c2: "#09163B", accent: "#60A5FA", symbol: "MPD" },
  { id: 1012, name: "MSL (mIRC scripting)", slug: "msl-mirc", c1: "#166534", c2: "#052E16", accent: "#86EFAC", symbol: "on:" },
  { id: 1013, name: "MuPAD", slug: "mupad", c1: "#A21CAF", c2: "#4A044E", accent: "#F0ABFC", symbol: "μΣ" },
  { id: 1014, name: "Mystic Programming Language", slug: "mystic-mpl", c1: "#5B21B6", c2: "#240E4A", accent: "#C4B5FD", symbol: "MPL" },
  { id: 1015, name: "Napier88", slug: "napier88", c1: "#0E7490", c2: "#083344", accent: "#67E8F9", symbol: "N88" },
  { id: 1016, name: "Neko", slug: "neko-lang", c1: "#C2410C", c2: "#431407", accent: "#FDBA74", symbol: "NK" },
  { id: 1017, name: "Net.Data", slug: "net-data", c1: "#1E3A8A", c2: "#09163B", accent: "#93C5FD", symbol: "%SQL" },
  { id: 1018, name: "NetRexx", slug: "netrexx", c1: "#B91C1C", c2: "#450A0A", accent: "#FCA5A5", symbol: "NRX" },
  { id: 1019, name: "NEWP", slug: "newp", c1: "#334155", c2: "#090D16", accent: "#94A3B8", symbol: "MCP" },
  { id: 1020, name: "NewtonScript", slug: "newtonscript", c1: "#15803D", c2: "#064E3B", accent: "#6EE7B7", symbol: "NS" },
  { id: 1021, name: "Nord Programming Language", slug: "nord-pl", c1: "#0284C7", c2: "#082F49", accent: "#38BDF8", symbol: "NPL" },
  { id: 1022, name: "Not eXactly C", slug: "nxc-lang", c1: "#C2410C", c2: "#451A03", accent: "#FBBF24", symbol: "NXC" },
  { id: 1023, name: "Not Quite C", slug: "nqc-lang", c1: "#A16207", c2: "#422006", accent: "#FDE047", symbol: "NQC" },
  { id: 1024, name: "Nu", slug: "nu-lang", c1: "#7E22CE", c2: "#3B0764", accent: "#D8B4FE", symbol: "(nu)" },
  { id: 1025, name: "Nullsoft Scriptable Install System", slug: "nsis", c1: "#0369A1", c2: "#0C4A6E", accent: "#7DD3FC", symbol: "NSIS" },
  { id: 1026, name: "NWScript", slug: "nwscript", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "NWS" },
  { id: 1027, name: "NXT-G", slug: "nxt-g", c1: "#B45309", c2: "#451A03", accent: "#FDE68A", symbol: "NXT" },
  { id: 1028, name: "P", slug: "p-lang", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "P⊢" },
  { id: 1029, name: "P′′", slug: "p-prime-prime", c1: "#0F766E", c2: "#042F2E", accent: "#2DD4BF", symbol: "P″" },
  { id: 1030, name: "ParaSail", slug: "parasail", c1: "#0284C7", c2: "#0C4A6E", accent: "#38BDF8", symbol: "∥" },
  { id: 1031, name: "Pascal Script", slug: "pascal-script", c1: "#1D4ED8", c2: "#0F172A", accent: "#60A5FA", symbol: "PS" },
  { id: 1032, name: "PCASTL", slug: "pcastl", c1: "#86198F", c2: "#3B0764", accent: "#E879F9", symbol: "AST" },
  { id: 1033, name: "PCF", slug: "pcf-lang", c1: "#312E81", c2: "#151348", accent: "#A5B4FC", symbol: "λY" },
  { id: 1034, name: "PDL", slug: "pdl-lang", c1: "#047857", c2: "#022C22", accent: "#34D399", symbol: "PDL" },
  { id: 1035, name: "PEARL", slug: "pearl-1035", c1: "#0E7490", c2: "#164E63", accent: "#67E8F9", symbol: "RT" },
  { id: 1036, name: "PeopleCode", slug: "peoplecode", c1: "#991B1B", c2: "#450A0A", accent: "#FCA5A5", symbol: "PC" },
  { id: 1037, name: "Pico", slug: "pico-lang", c1: "#4D7C0F", c2: "#1A2E05", accent: "#BEF264", symbol: "p:" },
  { id: 1038, name: "Pict", slug: "pict-lang", c1: "#6D28D9", c2: "#2E1065", accent: "#C4B5FD", symbol: "π" },
  { id: 1039, name: "PILOT", slug: "pilot-lang", c1: "#B45309", c2: "#3E1B06", accent: "#FCD34D", symbol: "T:" },
  { id: 1040, name: "Pipelines", slug: "pipelines-cms", c1: "#334155", c2: "#0F172A", accent: "#7DD3FC", symbol: "|>" },
  { id: 1041, name: "Pizza", slug: "pizza-lang", c1: "#C2410C", c2: "#431407", accent: "#FDBA74", symbol: "<T>" },
  { id: 1042, name: "PL-11", slug: "pl-11", c1: "#1E40AF", c2: "#172554", accent: "#93C5FD", symbol: "P11" },
  { id: 1043, name: "PL/B", slug: "pl-b", c1: "#3F6212", c2: "#1A2E05", accent: "#A3E635", symbol: "PLB" },
  { id: 1044, name: "PL/C", slug: "pl-c", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "PLC" },
  { id: 1045, name: "PL/P", slug: "pl-p", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "PLP" },
  { id: 1046, name: "PL360", slug: "pl360", c1: "#1E3A8A", c2: "#09163B", accent: "#60A5FA", symbol: "360" },
  { id: 1047, name: "PLANC", slug: "planc", c1: "#0369A1", c2: "#082F49", accent: "#38BDF8", symbol: "=:" },
  { id: 1048, name: "Plankalkül", slug: "plankalkul", c1: "#475569", c2: "#0F172A", accent: "#CBD5E1", symbol: "PK" },
  { id: 1049, name: "Planner", slug: "planner-ai", c1: "#7E22CE", c2: "#3B0764", accent: "#D8B4FE", symbol: "⊢?" },
  { id: 1050, name: "PLEX", slug: "plex-ericsson", c1: "#166534", c2: "#052E16", accent: "#4ADE80", symbol: "AXE" }
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

console.log(`Generated ${entries.length} Section 21 SVG logos (1001-1050) identically in assets/logos/ and public/assets/logos/.`);
