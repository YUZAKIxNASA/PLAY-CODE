const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 801. VisualWorks (Cincom Smalltalk) - Deep Ocean Blue & Cyan
  "visualworks.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="vwG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#vwG)"/>
  <path d="M30 38 L50 90 L64 56 L78 90 L98 38" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="56" r="6" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0F2FE" text-anchor="middle">VISUALWORKS</text>
</svg>`,

  // 802. Cuis (Cuis-Smalltalk) - Teal & Solar Gold
  "cuis.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cuisG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cuisG)"/>
  <circle cx="64" cy="54" r="26" stroke="#2DD4BF" stroke-width="6" fill="none"/>
  <circle cx="64" cy="54" r="14" fill="#FACC15"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#CCFBF1" text-anchor="middle">CUIS</text>
</svg>`,

  // 803. Amber Smalltalk (Client-side Smalltalk for the Web) - Warm Amber & Charcoal
  "amber-smalltalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="amberG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#amberG)"/>
  <polygon points="64,28 94,48 94,80 64,100 34,80 34,48" stroke="#FDE68A" stroke-width="6" fill="#F59E0B"/>
  <text x="64" y="70" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#451A03" text-anchor="middle">A</text>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#FEF3C7" text-anchor="middle">AMBER</text>
</svg>`,

  // 804. Etoys (Alan Kay Educational Environment) - Sunny Yellow & Sky Blue
  "etoys.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="etoysG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CA8A04"/>
      <stop offset="100%" stop-color="#422006"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#etoysG)"/>
  <circle cx="50" cy="50" r="18" fill="#38BDF8"/>
  <circle cx="78" cy="50" r="18" fill="#F43F5E"/>
  <rect x="42" y="66" width="44" height="16" rx="8" fill="#4ADE80"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FEF08A" text-anchor="middle">ETOYS</text>
</svg>`,

  // 805. Snap! (UC Berkeley Visual Blocks Language) - Bright Coral & White
  "snap.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="snapG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#snapG)"/>
  <!-- Interlocking Block Glyph -->
  <path d="M34 42 H54 C54 48 60 52 64 52 C68 52 74 48 74 42 H94 V86 H74 C74 80 68 76 64 76 C60 76 54 80 54 86 H34 Z" fill="#FFE4E6" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="70" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#BE123C" text-anchor="middle">Snap!</text>
</svg>`,

  // 806. Alice 3D (Carnegie Mellon 3D Storytelling) - Alice Violet & Mint
  "alice-3d.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="aliceG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#aliceG)"/>
  <!-- 3D Cube Isometric Grid -->
  <polygon points="64,30 94,46 64,62 34,46" fill="#C4B5FD"/>
  <polygon points="34,46 64,62 64,96 34,80" fill="#8B5CF6"/>
  <polygon points="94,46 64,62 64,96 94,80" fill="#6D28D9"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#EDE9FE" text-anchor="middle">ALICE 3D</text>
</svg>`,

  // 807. Blockly (Google Visual Block Programming) - Google Green & Multi-color
  "blockly.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="blocklyG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#blocklyG)"/>
  <!-- Puzzle Connector Tab -->
  <path d="M36 38 H56 C56 46 62 50 66 50 C70 50 76 46 76 38 H92 V68 H84 C78 68 74 72 74 76 C74 80 78 84 84 84 H92 V94 H36 Z" fill="#BBF7D0" stroke="#FFFFFF" stroke-width="4"/>
  <circle cx="66" cy="66" r="8" fill="#059669"/>
</svg>`,

  // 808. MakeCode (Microsoft Block / TypeScript STEM) - Microsoft Azure & Magenta
  "makecode.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="makeG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#makeG)"/>
  <rect x="34" y="36" width="26" height="26" rx="6" fill="#F43F5E"/>
  <rect x="68" y="36" width="26" height="26" rx="6" fill="#10B981"/>
  <rect x="34" y="70" width="26" height="26" rx="6" fill="#3B82F6"/>
  <rect x="68" y="70" width="26" height="26" rx="6" fill="#FBBF24"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0F2FE" text-anchor="middle">MAKECODE</text>
</svg>`,

  // 809. App Inventor (MIT Mobile App Blocks) - MIT Red & Android Green
  "app-inventor.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="appinvG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#appinvG)"/>
  <!-- Phone outline with gear & puzzle -->
  <rect x="42" y="28" width="44" height="72" rx="10" fill="#1E293B" stroke="#FECACA" stroke-width="4"/>
  <circle cx="64" cy="56" r="14" fill="#10B981"/>
  <circle cx="64" cy="90" r="4" fill="#FFFFFF"/>
  <text x="64" y="116" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FEE2E2" text-anchor="middle">APP INVENTOR</text>
</svg>`,

  // 810. Pencil Code (Gymnasium Dual Block / Code) - Pencil Yellow & Coral
  "pencil-code.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pencilG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pencilG)"/>
  <!-- Diagonal Pencil -->
  <polygon points="34,94 48,90 86,52 72,38 34,76" fill="#FDE047"/>
  <polygon points="34,94 42,86 38,82" fill="#1F2937"/>
  <polygon points="86,52 72,38 80,30 94,44" fill="#FB7185"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF3C7" text-anchor="middle">PENCIL CODE</text>
</svg>`,

  // 811. Hopscotch (Visual Coding on iPad / Mobile) - Playful Magenta & Sky
  "hopscotch.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hopG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C026D3"/>
      <stop offset="100%" stop-color="#4A044E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hopG)"/>
  <circle cx="44" cy="46" r="16" fill="#38BDF8"/>
  <circle cx="84" cy="46" r="16" fill="#FACC15"/>
  <circle cx="64" cy="80" r="18" fill="#4ADE80"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FDF4FF" text-anchor="middle">HOPSCOTCH</text>
</svg>`,

  // 812. Tynker (Visual & Text K-12 Coding Platform) - Tynker Cyan & Orange
  "tynker.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="tynkerG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#tynkerG)"/>
  <circle cx="64" cy="54" r="26" stroke="#F97316" stroke-width="7" fill="none"/>
  <circle cx="64" cy="54" r="10" fill="#38BDF8"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" text-anchor="middle">TYNKER</text>
</svg>`,

  // 813. ScratchJr (Early Childhood Block Coding) - Warm Orange Cat
  "scratchjr.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sjrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sjrG)"/>
  <!-- ScratchJr Kitten Silhouette -->
  <circle cx="64" cy="56" r="22" fill="#FED7AA"/>
  <polygon points="46,42 42,26 56,36" fill="#F97316"/>
  <polygon points="82,42 86,26 72,36" fill="#F97316"/>
  <circle cx="56" cy="54" r="3" fill="#431407"/>
  <circle cx="72" cy="54" r="3" fill="#431407"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">SCRATCH JR</text>
</svg>`,

  // 814. Kodu (Microsoft Visual Game Lab) - Xbox Lime Green & Charcoal
  "kodu.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="koduG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#65A30D"/>
      <stop offset="100%" stop-color="#1A2E05"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#koduG)"/>
  <circle cx="64" cy="52" r="24" fill="#A3E635"/>
  <circle cx="54" cy="48" r="5" fill="#1E293B"/>
  <circle cx="74" cy="48" r="5" fill="#1E293B"/>
  <path d="M54 62 Q64 70 74 62" stroke="#1E293B" stroke-width="4" fill="none" stroke-linecap="round"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#ECFCCB" text-anchor="middle">KODU</text>
</svg>`,

  // 815. Greenfoot (Java IDE & Interactive 2D Simulation) - Emerald Green Footprint
  "greenfoot.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gfG)"/>
  <!-- Footprint contour -->
  <ellipse cx="64" cy="62" rx="18" ry="24" fill="#4ADE80"/>
  <circle cx="48" cy="34" r="5" fill="#4ADE80"/>
  <circle cx="58" cy="30" r="5.5" fill="#4ADE80"/>
  <circle cx="68" cy="30" r="5.5" fill="#4ADE80"/>
  <circle cx="78" cy="34" r="5" fill="#4ADE80"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#DCFCE7" text-anchor="middle">GREENFOOT</text>
</svg>`,

  // 816. BlueJ (Java Educational Environment) - Pure Royal Blue Bird
  "bluej.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bjG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bjG)"/>
  <!-- Blue Jay Silhouette -->
  <path d="M40 70 C40 46 64 36 84 46 C94 52 98 62 88 74 C78 84 54 84 40 70 Z" fill="#60A5FA"/>
  <polygon points="84,46 100,52 86,58" fill="#F59E0B"/>
  <circle cx="76" cy="50" r="3" fill="#1E3A8A"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#DBEAFE" text-anchor="middle">BLUEJ</text>
</svg>`,

  // 817. Karel (Karel the Robot / Stanford CS106A) - Industrial Steel & Yellow
  "karel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="karelG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#karelG)"/>
  <!-- Robot Head & Antenna -->
  <line x1="64" y1="26" x2="64" y2="40" stroke="#FDE047" stroke-width="4"/>
  <circle cx="64" cy="24" r="5" fill="#EF4444"/>
  <rect x="36" y="40" width="56" height="46" rx="8" fill="#94A3B8" stroke="#F8FAFC" stroke-width="4"/>
  <circle cx="50" cy="56" r="6" fill="#38BDF8"/>
  <circle cx="78" cy="56" r="6" fill="#38BDF8"/>
  <rect x="50" y="72" width="28" height="6" rx="3" fill="#1E293B"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#F1F5F9" text-anchor="middle">KAREL</text>
</svg>`,

  // 818. Karel++ (Object-Oriented Karel in C++ / Java) - Cobalt & Gold
  "karel-plus-plus.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="kppG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#081846"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#kppG)"/>
  <rect x="34" y="38" width="46" height="42" rx="6" fill="#93C5FD"/>
  <circle cx="48" cy="52" r="5" fill="#1E3A8A"/>
  <circle cx="66" cy="52" r="5" fill="#1E3A8A"/>
  <text x="96" y="66" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FACC15">++</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">KAREL++</text>
</svg>`,

  // 819. Logo Turtle (Seymour Papert Turtle Graphics) - Emerald Turtle Green
  "logo-turtle.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="turtleG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#turtleG)"/>
  <!-- Classic Turtle Shell & Head -->
  <polygon points="64,28 72,42 56,42" fill="#86EFAC"/>
  <circle cx="64" cy="62" r="22" fill="#34D399" stroke="#ECFDF5" stroke-width="4"/>
  <circle cx="42" cy="48" r="6" fill="#86EFAC"/>
  <circle cx="86" cy="48" r="6" fill="#86EFAC"/>
  <circle cx="42" cy="76" r="6" fill="#86EFAC"/>
  <circle cx="86" cy="76" r="6" fill="#86EFAC"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#D1FAE5" text-anchor="middle">LOGO</text>
</svg>`,

  // 820. NetLogo (Multi-Agent Modeling - Uri Wilensky) - Forest Green & Amber
  "netlogo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nlG)"/>
  <!-- Multi-Agent Flock Swarm -->
  <polygon points="64,32 72,48 56,48" fill="#FACC15"/>
  <polygon points="44,54 52,70 36,70" fill="#34D399"/>
  <polygon points="84,54 92,70 76,70" fill="#38BDF8"/>
  <polygon points="64,74 72,90 56,90" fill="#F43F5E"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E6FFFA" text-anchor="middle">NETLOGO</text>
</svg>`,

  // 821. StarLogo (Decentralized Massively Parallel Modeling - MIT) - Star Gold & Deep Navy
  "starlogo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="starG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#starG)"/>
  <!-- Glowing Multi-pointed Star -->
  <polygon points="64,26 74,48 98,52 80,68 86,92 64,78 42,92 48,68 30,52 54,48" fill="#FACC15"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FEF08A" text-anchor="middle">STARLOGO</text>
</svg>`,

  // 822. Squeak Etoys (Media-Rich Authoring on Squeak) - Squeak Teal & Orange
  "squeak-etoys.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sqetG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sqetG)"/>
  <ellipse cx="64" cy="58" rx="22" ry="16" fill="#A7F3D0"/>
  <circle cx="50" cy="40" r="9" fill="#5EEAD4"/>
  <circle cx="78" cy="40" r="9" fill="#5EEAD4"/>
  <circle cx="64" cy="58" r="6" fill="#F97316"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#CCFBF1" text-anchor="middle">SQUEAK ETOYS</text>
</svg>`,

  // 823. LiveCode (English-like Transcript Language - HyperCard lineage) - Cyan / Azure
  "livecode.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lcG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lcG)"/>
  <path d="M42 38 V88 H72" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M72 52 L86 64 L72 76" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#BAE6FD" text-anchor="middle">LIVECODE</text>
</svg>`,

  // 824. SuperCard (Classic Macintosh Rapid Authoring) - Mac Purple & Gold
  "supercard.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="scardG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#scardG)"/>
  <!-- Overlapping Cards Stack -->
  <rect x="42" y="32" width="48" height="58" rx="6" fill="#DDD6FE" stroke="#A78BFA" stroke-width="3"/>
  <rect x="34" y="42" width="48" height="58" rx="6" fill="#FFFFFF" stroke="#C4B5FD" stroke-width="3"/>
  <text x="58" y="78" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#7C3AED">S</text>
  <text x="64" y="114" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#EDE9FE" text-anchor="middle">SUPERCARD</text>
</svg>`,

  // 825. Toolbook (Asymetrix Windows Hypermedia) - Windows Teal & Gold Book
  "toolbook.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="tbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#tbG)"/>
  <!-- Open Book Glyph -->
  <path d="M64 48 C54 42 42 42 32 46 V86 C42 82 54 82 64 88 C74 82 86 82 96 86 V46 C86 42 74 42 64 48 Z" fill="#F0FDFA" stroke="#FDE047" stroke-width="4"/>
  <line x1="64" y1="48" x2="64" y2="88" stroke="#0F766E" stroke-width="4"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#CCFBF1" text-anchor="middle">TOOLBOOK</text>
</svg>`,

  // 826. Director Lingo (Macromedia / Adobe Director Scripting) - Director Amber / Red
  "director-lingo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lingoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lingoG)"/>
  <!-- Director Clapperboard -->
  <rect x="32" y="44" width="64" height="46" rx="4" fill="#1E293B" stroke="#FFFFFF" stroke-width="3"/>
  <polygon points="32,44 46,32 58,44" fill="#FACC15"/>
  <polygon points="58,44 72,32 84,44" fill="#FACC15"/>
  <polygon points="84,44 96,34 96,44" fill="#FACC15"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FED7AA" text-anchor="middle">LINGO</text>
</svg>`,

  // 827. Authorware (Macromedia Flowchart-based eLearning) - Royal Indigo & Cyan Flow
  "authorware.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="authG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#141147"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#authG)"/>
  <line x1="64" y1="30" x2="64" y2="88" stroke="#38BDF8" stroke-width="6"/>
  <circle cx="64" cy="38" r="8" fill="#F43F5E"/>
  <polygon points="64,54 74,66 54,66" fill="#FACC15"/>
  <rect x="56" y="74" width="16" height="16" rx="3" fill="#10B981"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#E0E7FF" text-anchor="middle">AUTHORWARE</text>
</svg>`,

  // 828. Flash ActionScript (Macromedia / Adobe Flash Interactive Scripting) - Flash Crimson
  "flash-actionscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="asG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#580808"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#asG)"/>
  <!-- ActionScript 'As' Badge -->
  <text x="64" y="76" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" text-anchor="middle">As</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEE2E2" text-anchor="middle">ACTIONSCRIPT</text>
</svg>`,

  // 829. Haxe Flixel (Haxe 2D Cross-Platform Game Engine) - Flixel Mustard Gold & Charcoal
  "haxe-flixel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="flixelG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CA8A04"/>
      <stop offset="100%" stop-color="#422006"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#flixelG)"/>
  <polygon points="64,30 92,78 36,78" fill="#FACC15" stroke="#FEF08A" stroke-width="4" stroke-linejoin="round"/>
  <text x="64" y="72" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#422006" text-anchor="middle">f</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF08A" text-anchor="middle">HAXE FLIXEL</text>
</svg>`,

  // 830. Monkey X (Multi-Target 2D Game Programming Language) - Banana Yellow & Chocolate
  "monkey-x.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="monkeyG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#3B1804"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#monkeyG)"/>
  <circle cx="64" cy="54" r="24" fill="#FDE68A"/>
  <circle cx="44" cy="46" r="9" fill="#F59E0B"/>
  <circle cx="84" cy="46" r="9" fill="#F59E0B"/>
  <circle cx="56" cy="52" r="4" fill="#3B1804"/>
  <circle cx="72" cy="52" r="4" fill="#3B1804"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FEF3C7" text-anchor="middle">MONKEY X</text>
</svg>`,

  // 831. BlitzBasic (Mark Sibly High-Performance 2D/3D Game BASIC) - Electric Lightning Blue
  "blitzbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="blitzG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#02213F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#blitzG)"/>
  <!-- Lightning Bolt -->
  <polygon points="68,26 42,64 62,64 56,98 86,56 66,56" fill="#FDE047" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#BAE6FD" text-anchor="middle">BLITZBASIC</text>
</svg>`,

  // 832. BlitzMax (Object-Oriented Cross-Platform Game BASIC) - Royal Indigo & Neon Yellow
  "blitzmax.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bmxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#141147"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bmxG)"/>
  <polygon points="64,28 42,62 60,62 54,94 84,54 66,54" fill="#FDE047"/>
  <text x="96" y="94" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#38BDF8">MAX</text>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0E7FF" text-anchor="middle">BLITZMAX</text>
</svg>`,

  // 833. PureBasic (Fantaisie Software Native Compiled BASIC) - Vibrant Cyan & White
  "purebasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pbG)"/>
  <circle cx="64" cy="54" r="26" stroke="#67E8F9" stroke-width="6" fill="none"/>
  <text x="54" y="64" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF">P</text>
  <text x="74" y="64" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FDE047">B</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">PUREBASIC</text>
</svg>`,

  // 834. DarkBASIC (The Game Creators 3D Game Language) - Dark Crimson / Onyx
  "darkbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B"/>
      <stop offset="100%" stop-color="#260303"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dbG)"/>
  <polygon points="64,28 96,48 96,80 64,100 32,80 32,48" stroke="#F87171" stroke-width="5" fill="#18181B"/>
  <text x="64" y="72" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#EF4444" text-anchor="middle">3D</text>
  <text x="64" y="114" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FEE2E2" text-anchor="middle">DARKBASIC</text>
</svg>`,

  // 835. GLBasic (Gernot Frisch 3D Multi-Platform Game BASIC) - OpenGL Forest Green & Gold
  "glbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="glbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#glbG)"/>
  <path d="M38 72 L64 36 L90 72 Z" stroke="#34D399" stroke-width="6" fill="none"/>
  <circle cx="64" cy="62" r="8" fill="#FACC15"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#D1FAE5" text-anchor="middle">GLBASIC</text>
</svg>`,

  // 836. Gambas (Benoît Minisini Linux Visual BASIC) - Gambas Blue Shrimp / Navy
  "gambas.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gambasG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#081846"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gambasG)"/>
  <!-- Prawn / Shrimp Emblem -->
  <path d="M36 68 C36 46 56 36 78 44 C88 50 94 62 86 74 C78 84 60 84 46 76" stroke="#F43F5E" stroke-width="7" stroke-linecap="round" fill="none"/>
  <circle cx="76" cy="46" r="4" fill="#FFFFFF"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">GAMBAS</text>
</svg>`,

  // 837. RapidQ (Cross-Platform Free BASIC by William Yu) - Teal & White
  "rapidq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rqG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rqG)"/>
  <circle cx="64" cy="52" r="24" stroke="#2DD4BF" stroke-width="7" fill="none"/>
  <line x1="78" y1="66" x2="94" y2="82" stroke="#2DD4BF" stroke-width="7" stroke-linecap="round"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#CCFBF1" text-anchor="middle">RAPID-Q</text>
</svg>`,

  // 838. Liberty BASIC (Carl Gundel Beginner-Friendly Windows BASIC) - Statue Bronze & Teal
  "liberty-basic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lbG)"/>
  <!-- Liberty Torch Torch Flame -->
  <path d="M64 26 Q74 44 64 58 Q54 44 64 26 Z" fill="#FACC15"/>
  <rect x="58" y="58" width="12" height="24" rx="3" fill="#D97706"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#CCFBF1" text-anchor="middle">LIBERTY BASIC</text>
</svg>`,

  // 839. Just BASIC (Free simplified version of Liberty BASIC) - Clean Azure & Gold
  "just-basic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#03264A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jbG)"/>
  <circle cx="64" cy="52" r="24" stroke="#38BDF8" stroke-width="6" fill="none"/>
  <text x="64" y="60" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FACC15" text-anchor="middle">J</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">JUST BASIC</text>
</svg>`,

  // 840. Yabasic (Yet Another BASIC by Marc-Oliver Ihm) - Amber Orange & Charcoal
  "yabasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="yabG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#yabG)"/>
  <path d="M42 36 L64 64 L86 36 M64 64 V92" stroke="#FDE68A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FEF3C7" text-anchor="middle">YABASIC</text>
</svg>`,

  // 841. SmallBASIC (Nicholas Christopoulos Mobile/Desktop BASIC) - Playful Magenta & Cyan
  "smallbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="smbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333EA"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#smbG)"/>
  <circle cx="64" cy="52" r="22" stroke="#F0ABFC" stroke-width="6" fill="none"/>
  <text x="64" y="60" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#38BDF8" text-anchor="middle">SB</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FDF4FF" text-anchor="middle">SMALLBASIC</text>
</svg>`,

  // 842. QB64 (QBasic 4.5 64-bit Extended Compiler) - Retro MS-DOS Blue & Gold
  "qb64.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="qb64G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0055AA"/>
      <stop offset="100%" stop-color="#001A40"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#qb64G)"/>
  <rect x="28" y="32" width="72" height="52" rx="6" fill="#000080" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="65" font-family="monospace" font-size="18" font-weight="900" fill="#FFFF00" text-anchor="middle">QB64</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#E0F2FE" text-anchor="middle">QBASIC 64</text>
</svg>`,

  // 843. ThinBasic (Eros Olmi Modular Windows BASIC) - Steel Blue & Emerald
  "thinbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="thinG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#032D52"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#thinG)"/>
  <line x1="42" y1="40" x2="86" y2="40" stroke="#34D399" stroke-width="7" stroke-linecap="round"/>
  <line x1="64" y1="40" x2="64" y2="88" stroke="#34D399" stroke-width="7" stroke-linecap="round"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">THINBASIC</text>
</svg>`,

  // 844. PowerBASIC (Bob Zale Native Machine Code Turbo BASIC successor) - Crimson Power
  "powerbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pwrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pwrG)"/>
  <!-- Power Switch Ring & Line -->
  <path d="M48 44 C40 50 36 60 36 70 C36 85 49 98 64 98 C79 98 92 85 92 70 C92 60 88 50 80 44" stroke="#FEE2E2" stroke-width="8" stroke-linecap="round" fill="none"/>
  <line x1="64" y1="30" x2="64" y2="60" stroke="#FACC15" stroke-width="8" stroke-linecap="round"/>
  <text x="64" y="114" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FECACA" text-anchor="middle">POWERBASIC</text>
</svg>`,

  // 845. XBasic (Max Reason Windows/Linux Fast GUI BASIC) - Deep Violet & Cyan
  "xbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="xbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#280545"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#xbG)"/>
  <line x1="40" y1="38" x2="88" y2="86" stroke="#38BDF8" stroke-width="9" stroke-linecap="round"/>
  <line x1="88" y1="38" x2="40" y2="86" stroke="#C084FC" stroke-width="9" stroke-linecap="round"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#EDE9FE" text-anchor="middle">XBASIC</text>
</svg>`,

  // 846. Basic4android (Anywhere Software Android RAD) - Android Green & Slate
  "basic4android.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="b4aG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#b4aG)"/>
  <!-- Android Robot Head with '4A' -->
  <path d="M42 54 C42 40 52 32 64 32 C76 32 86 40 86 54 Z" fill="#4ADE80"/>
  <line x1="48" y1="22" x2="54" y2="32" stroke="#4ADE80" stroke-width="4"/>
  <line x1="80" y1="22" x2="74" y2="32" stroke="#4ADE80" stroke-width="4"/>
  <text x="64" y="84" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">B4A</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#DCFCE7" text-anchor="middle">BASIC4ANDROID</text>
</svg>`,

  // 847. B4X (Anywhere Software Multi-Platform Suite B4A, B4J, B4i) - Royal Blue & Orange
  "b4x.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="b4xG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#081846"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#b4xG)"/>
  <rect x="34" y="38" width="60" height="42" rx="8" fill="#F97316"/>
  <text x="64" y="68" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">B4X</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#DBEAFE" text-anchor="middle">RAD SUITE</text>
</svg>`,

  // 848. Xojo (Native Cross-Platform Object-Oriented IDE & Language) - Vibrant Green & Cyan
  "xojo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="xojoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#xojoG)"/>
  <circle cx="64" cy="54" r="26" stroke="#34D399" stroke-width="7" fill="none"/>
  <line x1="46" y1="36" x2="82" y2="72" stroke="#34D399" stroke-width="6" stroke-linecap="round"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#ECFDF5" text-anchor="middle">XOJO</text>
</svg>`,

  // 849. REALbasic (Geoff Perlman Visual BASIC successor) - Classic Crimson & Silver
  "realbasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#3B0707"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rbG)"/>
  <rect x="36" y="36" width="56" height="46" rx="6" fill="#F8FAFC" stroke="#EF4444" stroke-width="4"/>
  <text x="64" y="68" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#991B1B" text-anchor="middle">REAL</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEE2E2" text-anchor="middle">REALBASIC</text>
</svg>`,

  // 850. Lazarus (Free Pascal Cross-Platform RAD IDE / Delphi alternative) - Cheetah Gold & Azure
  "lazarus.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lazG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lazG)"/>
  <!-- Cheetah / Leopard Paw and Pascal Diamond -->
  <polygon points="64,28 88,52 64,76 40,52" fill="#FACC15" stroke="#FFFFFF" stroke-width="3"/>
  <circle cx="64" cy="52" r="8" fill="#0284C7"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#BAE6FD" text-anchor="middle">LAZARUS</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content.trim(), 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content.trim(), 'utf8');
  count++;
}

console.log(`Generated and synced ${count} Section 16 vector SVG logos to both assets/logos/ and public/assets/logos/`);
