const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'assets/logos');
const publicDir = path.join(root, 'public/assets/logos');

// 50 Section 22 entries (1051-1100) with collision-free slugs and jewel-tone palettes
const entries = [
  { id: 1051, name: "PLEXIL", slug: "plexil", c1: "#1D4ED8", c2: "#0B1D51", accent: "#93C5FD", symbol: "PLX" },
  { id: 1052, name: "Plus", slug: "plus-ubc", c1: "#0F766E", c2: "#042F2E", accent: "#5EEAD4", symbol: "PLS" },
  { id: 1053, name: "POP-11", slug: "pop-11-1053", c1: "#6D28D9", c2: "#2E1065", accent: "#C4B5FD", symbol: "P11" },
  { id: 1054, name: "POP-2", slug: "pop-2", c1: "#7E22CE", c2: "#3B0764", accent: "#D8B4FE", symbol: "P2" },
  { id: 1055, name: "PortablE", slug: "portable-e", c1: "#B91C1C", c2: "#450A0A", accent: "#FCA5A5", symbol: "pE" },
  { id: 1056, name: "POV-Ray SDL", slug: "pov-ray-sdl", c1: "#0284C7", c2: "#082F49", accent: "#38BDF8", symbol: "POV" },
  { id: 1057, name: "Powerhouse", slug: "powerhouse-4gl", c1: "#334155", c2: "#0F172A", accent: "#94A3B8", symbol: "PH" },
  { id: 1058, name: "Polymorphic Programming Language", slug: "ppl-lang", c1: "#047857", c2: "#022C22", accent: "#6EE7B7", symbol: "PPL" },
  { id: 1059, name: "Prograph", slug: "prograph", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "PG" },
  { id: 1060, name: "Project Verona", slug: "project-verona", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "VRN" },
  { id: 1061, name: "PROMAL", slug: "promal", c1: "#B45309", c2: "#451A03", accent: "#FCD34D", symbol: "PRM" },
  { id: 1062, name: "PROSE modeling language", slug: "prose-modeling", c1: "#0E7490", c2: "#083344", accent: "#67E8F9", symbol: "PRS" },
  { id: 1063, name: "PROTEL", slug: "protel", c1: "#1E40AF", c2: "#09163B", accent: "#60A5FA", symbol: "PTL" },
  { id: 1064, name: "Pro*C", slug: "pro-c", c1: "#991B1B", c2: "#450A0A", accent: "#FCA5A5", symbol: "*C" },
  { id: 1065, name: "Pure", slug: "pure-1065", c1: "#86198F", c2: "#3B0764", accent: "#E879F9", symbol: "=>;" },
  { id: 1066, name: "Pure Data", slug: "pure-data", c1: "#374151", c2: "#111827", accent: "[pd]" },
  { id: 1067, name: "S-Lang", slug: "s-lang", c1: "#0369A1", c2: "#0C4A6E", accent: "#7DD3FC", symbol: "S-L" },
  { id: 1068, name: "S2", slug: "s2-1068", c1: "#1E3A8A", c2: "#09163B", accent: "#93C5FD", symbol: "S2" },
  { id: 1069, name: "S3", slug: "s3-1069", c1: "#475569", c2: "#0F172A", accent: "#CBD5E1", symbol: "S3" },
  { id: 1070, name: "SA-C", slug: "sa-c", c1: "#15803D", c2: "#064E3B", accent: "#6EE7B7", symbol: "SA-C" },
  { id: 1071, name: "SabreTalk", slug: "sabretalk", c1: "#1D4ED8", c2: "#0F172A", accent: "#60A5FA", symbol: "SBR" },
  { id: 1072, name: "SAIL", slug: "sail-stanford", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "SAI" },
  { id: 1073, name: "SAKO", slug: "sako-pl", c1: "#C2410C", c2: "#431407", accent: "#FDBA74", symbol: "SAK" },
  { id: 1074, name: "Sawzall", slug: "sawzall", c1: "#0F766E", c2: "#042F2E", accent: "#2DD4BF", symbol: "SZL" },
  { id: 1075, name: "SBL", slug: "sbl-spitbol", c1: "#A16207", c2: "#422006", accent: "#FDE047", symbol: "SBL" },
  { id: 1076, name: "Script.NET", slug: "script-net", c1: "#5B21B6", c2: "#240E4A", accent: "#C4B5FD", symbol: "S#" },
  { id: 1077, name: "SenseTalk", slug: "sensetalk", c1: "#166534", c2: "#052E16", accent: "#86EFAC", symbol: "SNT" },
  { id: 1078, name: "SequenceL", slug: "sequencel", c1: "#0284C7", c2: "#0C4A6E", accent: "#38BDF8", symbol: "SQLx" },
  { id: 1079, name: "Serpent", slug: "serpent-cmu", c1: "#A21CAF", c2: "#4A044E", accent: "#F0ABFC", symbol: "SRP" },
  { id: 1080, name: "SETL", slug: "setl", c1: "#312E81", c2: "#151348", accent: "#A5B4FC", symbol: "{∈}" },
  { id: 1081, name: "Short Code", slug: "short-code", c1: "#334155", c2: "#090D16", accent: "#94A3B8", symbol: "07" },
  { id: 1082, name: "SiMPLE", slug: "simple-lang", c1: "#047857", c2: "#022C22", accent: "#34D399", symbol: "SMP" },
  { id: 1083, name: "SIMPOL", slug: "simpol", c1: "#0E7490", c2: "#164E63", accent: "#67E8F9", symbol: "SIM" },
  { id: 1084, name: "SIMSCRIPT", slug: "simscript", c1: "#7C2D12", c2: "#3B1306", accent: "#FDBA74", symbol: "SSC" },
  { id: 1085, name: "SKILL", slug: "skill-cadence", c1: "#9F1239", c2: "#4C0519", accent: "#FDA4AF", symbol: "SKL" },
  { id: 1086, name: "SLIP", slug: "slip-list", c1: "#4D7C0F", c2: "#1A2E05", accent: "#BEF264", symbol: "SLP" },
  { id: 1087, name: "SMALL", slug: "small-1087", c1: "#1E40AF", c2: "#172554", accent: "#93C5FD", symbol: "SML" },
  { id: 1088, name: "Snowball", slug: "snowball-1088", c1: "#0369A1", c2: "#082F49", accent: "#7DD3FC", symbol: "❄" },
  { id: 1089, name: "SOL", slug: "sol-1089", c1: "#B45309", c2: "#3E1B06", accent: "#FDE68A", symbol: "SOL" },
  { id: 1090, name: "SOPHAEROS", slug: "sophaeros", c1: "#374151", c2: "#111827", accent: "#38BDF8", symbol: "SPH" },
  { id: 1091, name: "Source", slug: "source-nus", c1: "#6D28D9", c2: "#2E1065", accent: "#DDD6FE", symbol: "§1" },
  { id: 1092, name: "SPARK", slug: "spark-1092", c1: "#047857", c2: "#064E3B", accent: "#6EE7B7", symbol: "SPK" },
  { id: 1093, name: "Speakeasy", slug: "speakeasy-lang", c1: "#1D4ED8", c2: "#0B1D51", accent: "#93C5FD", symbol: "SPZ" },
  { id: 1094, name: "Speedcode", slug: "speedcode", c1: "#C2410C", c2: "#451A03", accent: "#FBBF24", symbol: "701" },
  { id: 1095, name: "SPIN", slug: "spin-parallax", c1: "#0E7490", c2: "#083344", accent: "#67E8F9", symbol: "COG" },
  { id: 1096, name: "SP/k", slug: "sp-k", c1: "#9D174D", c2: "#500724", accent: "#F472B6", symbol: "SP/k" },
  { id: 1097, name: "SPL", slug: "spl-1097", c1: "#3F6212", c2: "#1A2E05", accent: "#A3E635", symbol: "SPL" },
  { id: 1098, name: "SPS", slug: "sps-ibm", c1: "#1E3A8A", c2: "#09163B", accent: "#60A5FA", symbol: "1401" },
  { id: 1099, name: "SQR", slug: "sqr-oracle", c1: "#991B1B", c2: "#450A0A", accent: "#FCA5A5", symbol: "SQR" },
  { id: 1100, name: "SR", slug: "sr-arizona", c1: "#4338CA", c2: "#1E1B4B", accent: "#A5B4FC", symbol: "SR" }
];

// Fix #1066 accent/symbol typo cleanly before rendering
entries[15].accent = "#94A3B8";
entries[15].symbol = "[pd]";

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

console.log(`Generated ${entries.length} Section 22 SVG logos (1051-1100) identically in assets/logos/ and public/assets/logos/.`);
