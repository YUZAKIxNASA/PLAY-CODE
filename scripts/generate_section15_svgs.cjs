const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 751. IBM EGL (Enterprise Generation Language) - IBM Blue & Gold
  "ibm-egl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="eglG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F62FE"/>
      <stop offset="100%" stop-color="#001D6C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#eglG)"/>
  <rect x="24" y="32" width="80" height="10" rx="3" fill="#FFFFFF"/>
  <rect x="24" y="48" width="80" height="10" rx="3" fill="#78A9FF"/>
  <rect x="24" y="64" width="80" height="10" rx="3" fill="#BAE6FD"/>
  <text x="64" y="98" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#F1C21B" text-anchor="middle">EGL</text>
</svg>`,

  // 752. IBM Rexx (Restructured Extended Executor) - Red / Burgundy & Cyan
  "ibm-rexx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rexxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A2191F"/>
      <stop offset="100%" stop-color="#40070A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rexxG)"/>
  <path d="M36 34 H68 C80 34 88 42 88 52 C88 62 80 68 68 68 H52 V94 H36 Z M52 46 V56 H66 C70 56 74 54 74 51 C74 48 70 46 66 46 Z M68 68 L88 94 H72 L56 72" fill="#FFFFFF"/>
  <circle cx="94" cy="40" r="8" fill="#33B1FF"/>
</svg>`,

  // 753. IBM RPG IV (Report Program Generator / ILE RPG) - Steel Blue & Teal
  "ibm-rpg-iv.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rpgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00539A"/>
      <stop offset="100%" stop-color="#001736"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rpgG)"/>
  <path d="M30 36 H62 C74 36 82 44 82 54 C82 64 74 70 62 70 H46 V92 H30 Z M46 48 V58 H60 C64 58 68 56 68 53 C68 50 64 48 60 48 Z M62 70 L82 92 H66 L50 72" fill="#E0F2FE"/>
  <text x="96" y="92" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#38BDF8">IV</text>
</svg>`,

  // 754. IBM CL (Control Language - AS/400 / IBM i) - Deep Emerald & Cyan
  "ibm-cl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="clG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#057A55"/>
      <stop offset="100%" stop-color="#012B1C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#clG)"/>
  <path d="M54 42 C40 42 32 50 32 64 C32 78 40 86 54 86 C64 86 70 80 72 76" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" fill="none"/>
  <path d="M78 42 V86 H98" stroke="#34D399" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 755. IBM Assembler HLASM (High Level Assembler) - Slate Black & Bronze
  "ibm-assembler-hlasm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hlasmG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#374151"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hlasmG)"/>
  <path d="M34 38 V90 H48 V68 H74 V90 H88 V38 H74 V56 H48 V38 Z" fill="#F59E0B"/>
  <text x="64" y="106" font-family="system-ui, monospace" font-size="12" font-weight="900" fill="#E5E7EB" text-anchor="middle">HLASM 390</text>
</svg>`,

  // 756. IBM PL/S (Programming Language / Systems) - Royal Indigo & Mint
  "ibm-pls.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="plsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#plsG)"/>
  <text x="44" y="66" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">PL</text>
  <text x="78" y="70" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#6EE7B7">/</text>
  <text x="94" y="90" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#A5B4FC">S</text>
</svg>`,

  // 757. IBM Pascal VS (Pascal for IBM S/370) - Maroon / Plum & White
  "ibm-pascal-vs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pascalvsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#831843"/>
      <stop offset="100%" stop-color="#350619"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pascalvsG)"/>
  <circle cx="64" cy="54" r="28" stroke="#FCE7F3" stroke-width="7" fill="none"/>
  <path d="M50 40 V68 M50 40 H66 C72 40 76 44 76 49 C76 54 72 58 66 58 H50" stroke="#FCE7F3" stroke-width="6" stroke-linecap="round" fill="none"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#F472B6" text-anchor="middle">PASCAL/VS</text>
</svg>`,

  // 758. JCL Procs (Job Control Language Cataloged Procedures) - Punch Card Orange
  "jcl-procs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jclG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jclG)"/>
  <rect x="24" y="32" width="80" height="52" rx="6" fill="#FEF3C7" stroke="#92400E" stroke-width="3"/>
  <line x1="32" y1="44" x2="52" y2="44" stroke="#92400E" stroke-width="4"/>
  <line x1="32" y1="56" x2="88" y2="56" stroke="#92400E" stroke-width="4"/>
  <line x1="32" y1="68" x2="74" y2="68" stroke="#92400E" stroke-width="4"/>
  <text x="64" y="106" font-family="system-ui, monospace" font-size="16" font-weight="900" fill="#FDE68A" text-anchor="middle">//PROC</text>
</svg>`,

  // 759. Easytrieve (Broadcom / CA Reporting Language) - Bright Cobalt & Cyan
  "easytrieve.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="easyG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0F2B6B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#easyG)"/>
  <path d="M36 34 H88 V46 H48 V58 H80 V70 H48 V82 H88 V94 H36 Z" fill="#93C5FD"/>
  <circle cx="86" cy="40" r="6" fill="#60A5FA"/>
  <circle cx="86" cy="88" r="6" fill="#38BDF8"/>
</svg>`,

  // 760. CICS (Customer Information Control System) - Crimson / Burgundy Mainframe
  "cics.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cicsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cicsG)"/>
  <rect x="28" y="32" width="72" height="48" rx="8" fill="#1E293B" stroke="#FECDD3" stroke-width="4"/>
  <text x="64" y="62" font-family="monospace" font-size="15" font-weight="900" fill="#4ADE80" text-anchor="middle">&gt;CESN_</text>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">CICS</text>
</svg>`,

  // 761. IMS DL/I (Data Language/I - Hierarchical Database) - Ocean Teal & Yellow
  "ims-dli.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="imsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#imsG)"/>
  <circle cx="64" cy="38" r="12" fill="#FACC15"/>
  <line x1="64" y1="50" x2="42" y2="70" stroke="#CCFBF1" stroke-width="4"/>
  <line x1="64" y1="50" x2="86" y2="70" stroke="#CCFBF1" stroke-width="4"/>
  <circle cx="42" cy="74" r="10" fill="#5EEAD4"/>
  <circle cx="86" cy="74" r="10" fill="#5EEAD4"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">DL/I</text>
</svg>`,

  // 762. IDMS (Integrated Database Management System - Network Model) - Purple Plum
  "idms.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="idmsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#2E0854"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#idmsG)"/>
  <polygon points="64,30 96,52 84,88 44,88 32,52" fill="none" stroke="#E9D5FF" stroke-width="5"/>
  <circle cx="64" cy="30" r="7" fill="#C084FC"/>
  <circle cx="96" cy="52" r="7" fill="#C084FC"/>
  <circle cx="84" cy="88" r="7" fill="#C084FC"/>
  <circle cx="44" cy="88" r="7" fill="#C084FC"/>
  <circle cx="32" cy="52" r="7" fill="#C084FC"/>
  <text x="64" y="68" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" text-anchor="middle">IDMS</text>
</svg>`,

  // 763. NATURAL ADABAS (Software AG 4GL & Inverted List DB) - Forest Green & Emerald
  "natural-adabas.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="natadaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#natadaG)"/>
  <path d="M34 88 V40 L64 70 L94 40 V88" stroke="#BBF7D0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#4ADE80" text-anchor="middle">NATURAL / ADABAS</text>
</svg>`,

  // 764. MARK IV (Informatics File Management 4GL) - Classic Navy & Gold
  "mark-iv.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="markivG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#08102B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#markivG)"/>
  <circle cx="64" cy="56" r="30" stroke="#FDE047" stroke-width="5" fill="none"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">MARK</text>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FACC15" text-anchor="middle">IV</text>
</svg>`,

  // 765. FOCUS (Information Builders 4GL) - Cyan / Azure & White
  "focus.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="focusG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#focusG)"/>
  <circle cx="64" cy="64" r="32" stroke="#BAE6FD" stroke-width="5" fill="none"/>
  <circle cx="64" cy="64" r="16" stroke="#38BDF8" stroke-width="4" fill="none"/>
  <circle cx="64" cy="64" r="6" fill="#FFFFFF"/>
  <line x1="64" y1="24" x2="64" y2="34" stroke="#BAE6FD" stroke-width="4"/>
  <line x1="64" y1="94" x2="64" y2="104" stroke="#BAE6FD" stroke-width="4"/>
  <line x1="24" y1="64" x2="34" y2="64" stroke="#BAE6FD" stroke-width="4"/>
  <line x1="94" y1="64" x2="104" y2="64" stroke="#BAE6FD" stroke-width="4"/>
</svg>`,

  // 766. NOMAD (Must Software 4GL/DBMS) - Dark Violet & Amber
  "nomad.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nomadG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#280545"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nomadG)"/>
  <polygon points="64,28 100,88 28,88" stroke="#FBBF24" stroke-width="6" fill="none" stroke-linejoin="round"/>
  <circle cx="64" cy="68" r="8" fill="#FDE68A"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E9D5FF" text-anchor="middle">NOMAD2</text>
</svg>`,

  // 767. RAMIS (Mathematica Products 4GL) - Crimson Amber
  "ramis.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ramisG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ramisG)"/>
  <path d="M34 38 H66 C78 38 86 46 86 56 C86 66 78 72 66 72 H48 V92 H34 Z M48 50 V60 H64 C68 60 72 58 72 55 C72 52 68 50 64 50 Z M66 72 L88 92 H72 L52 74" fill="#FED7AA"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFEDD5" text-anchor="middle">RAMIS II</text>
</svg>`,

  // 768. Santa Claus Language (Concurrency Paradigm / Formal Specification) - Festive Red & Ice White
  "santa-claus-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="santaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#5B0808"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#santaG)"/>
  <polygon points="64,30 92,68 36,68" fill="#FFFFFF"/>
  <rect x="30" y="66" width="68" height="14" rx="7" fill="#FEE2E2"/>
  <circle cx="64" cy="30" r="10" fill="#FFFFFF"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FEF2F2" text-anchor="middle">SANTA CLAUS</text>
</svg>`,

  // 769. LabTalk (OriginLab Origin Scripting) - Origin Orange & Sky Blue
  "labtalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="labtalkG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#591C03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#labtalkG)"/>
  <path d="M32 86 L48 46 L64 74 L80 38 L96 86" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="80" cy="38" r="6" fill="#38BDF8"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#FED7AA" text-anchor="middle">LABTALK</text>
</svg>`,

  // 770. IGOR Pro (WaveMetrics Scientific Analysis) - Vibrant Blue & Cyan Wave
  "igor-pro.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="igorG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#igorG)"/>
  <path d="M26 64 C40 36 50 36 64 64 C78 92 88 92 102 64" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="64" cy="64" r="6" fill="#FFFFFF"/>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E0F2FE" text-anchor="middle">IGOR PRO</text>
</svg>`,

  // 771. IDL Interactive Data Language (L3Harris Geospatial / Astronomy) - Solar Yellow & Navy
  "idl-interactive-data-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="idlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#03264A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#idlG)"/>
  <circle cx="64" cy="52" r="26" stroke="#FACC15" stroke-width="5" fill="none"/>
  <ellipse cx="64" cy="52" rx="34" ry="14" stroke="#38BDF8" stroke-width="4" fill="none"/>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">IDL</text>
</svg>`,

  // 772. PV-WAVE (Visual Numerics / Rogue Wave) - Teal & Indigo Wave
  "pv-wave.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pvwG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pvwG)"/>
  <path d="M28 56 Q46 36 64 56 T100 56" stroke="#2DD4BF" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M28 72 Q46 52 64 72 T100 72" stroke="#A7F3D0" stroke-width="6" fill="none" stroke-linecap="round"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#F0FDFA" text-anchor="middle">PV-WAVE</text>
</svg>`,

  // 773. Yorick (LLNL Numerical & Scientific Language) - Emerald & Lime
  "yorick.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="yorG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#yorG)"/>
  <path d="M34 38 L64 68 L94 38 M64 68 V94" stroke="#DCFCE7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="68" r="6" fill="#86EFAC"/>
</svg>`,

  // 774. NCL (NCAR Command Language - Atmospheric Science) - Atmospheric Blue & Cyan
  "ncl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nclG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nclG)"/>
  <circle cx="64" cy="50" r="26" stroke="#67E8F9" stroke-width="4" stroke-dasharray="6,4" fill="none"/>
  <path d="M42 50 C50 40 78 40 86 50 C78 60 50 60 42 50 Z" fill="#38BDF8"/>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">NCL</text>
</svg>`,

  // 775. GrADS (Grid Analysis and Display System - Meteorology) - Royal Navy & Solar Yellow
  "grads.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gradsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0A163B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gradsG)"/>
  <line x1="32" y1="40" x2="96" y2="40" stroke="#93C5FD" stroke-width="3"/>
  <line x1="32" y1="56" x2="96" y2="56" stroke="#93C5FD" stroke-width="3"/>
  <line x1="32" y1="72" x2="96" y2="72" stroke="#93C5FD" stroke-width="3"/>
  <line x1="48" y1="30" x2="48" y2="82" stroke="#93C5FD" stroke-width="3"/>
  <line x1="64" y1="30" x2="64" y2="82" stroke="#93C5FD" stroke-width="3"/>
  <line x1="80" y1="30" x2="80" y2="82" stroke="#93C5FD" stroke-width="3"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FACC15" text-anchor="middle">GrADS</text>
</svg>`,

  // 776. ROOT C++ CINT (CERN Particle Physics Framework & C++ Interpreter) - CERN Blue & Orange
  "root-cpp-cint.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rootG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C2442"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rootG)"/>
  <circle cx="64" cy="46" r="22" stroke="#F97316" stroke-width="5" fill="none"/>
  <line x1="64" y1="68" x2="64" y2="92" stroke="#38BDF8" stroke-width="6"/>
  <line x1="64" y1="92" x2="44" y2="104" stroke="#38BDF8" stroke-width="5"/>
  <line x1="64" y1="92" x2="84" y2="104" stroke="#38BDF8" stroke-width="5"/>
  <text x="64" y="52" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FFFFFF" text-anchor="middle">ROOT</text>
</svg>`,

  // 777. Mathcad Prime (PTC Mathematical Scratchpad) - Crimson / Red & White
  "mathcad-prime.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mathcadG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mathcadG)"/>
  <path d="M34 88 V40 L54 66 L74 40 V88" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="94" y="54" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FCA5A5">′</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FECACA" text-anchor="middle">MATHCAD</text>
</svg>`,

  // 778. ASCEND (Chemical Engineering & Mathematical Modeling) - Purple & Amber
  "ascend.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ascG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ascG)"/>
  <path d="M64 30 L94 86 H34 Z" stroke="#FDE047" stroke-width="6" stroke-linejoin="round" fill="none"/>
  <path d="M64 48 L80 80 H48 Z" fill="#A78BFA"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DDD6FE" text-anchor="middle">ASCEND</text>
</svg>`,

  // 779. GNU Data Language (GDL - Free IDL clone) - Red GNU / Indigo
  "gnu-data-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gdlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#831843"/>
      <stop offset="100%" stop-color="#300516"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gdlG)"/>
  <circle cx="64" cy="52" r="24" stroke="#F472B6" stroke-width="5" fill="none"/>
  <path d="M46 52 Q64 32 82 52 T118 52" stroke="#FDE047" stroke-width="4" fill="none"/>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">GDL</text>
</svg>`,

  // 780. Euler Math Toolbox (Numerical & Symbolic Mathematics) - Royal Emerald & Gold
  "euler-math-toolbox.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="eulerG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#eulerG)"/>
  <text x="64" y="74" font-family="serif" font-size="52" font-style="italic" font-weight="700" fill="#FEF08A" text-anchor="middle">e</text>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#A7F3D0" text-anchor="middle">EULER MATH</text>
</svg>`,

  // 781. Mercury Logic (Pure Logic / Functional Programming Language) - Mercury Silver & Deep Teal
  "mercury-logic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mercG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E7490"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mercG)"/>
  <circle cx="64" cy="56" r="22" stroke="#E2E8F0" stroke-width="6" fill="none"/>
  <path d="M52 34 C58 40 70 40 76 34" stroke="#E2E8F0" stroke-width="6" stroke-linecap="round" fill="none"/>
  <line x1="64" y1="78" x2="64" y2="102" stroke="#E2E8F0" stroke-width="6" stroke-linecap="round"/>
  <line x1="52" y1="90" x2="76" y2="90" stroke="#E2E8F0" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 782. Gödel (Declarative Logic Programming Language) - Deep Bronze & Gold
  "godel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="godelG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#92400E"/>
      <stop offset="100%" stop-color="#3B1804"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#godelG)"/>
  <text x="64" y="74" font-family="serif" font-size="48" font-weight="900" fill="#FDE68A" text-anchor="middle">G</text>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FEF3C7" text-anchor="middle">GÖDEL</text>
</svg>`,

  // 783. Oz Mozart (Multi-Paradigm Programming Language) - Magical Violet & Mint
  "oz-mozart.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ozG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#230438"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ozG)"/>
  <circle cx="50" cy="62" r="20" stroke="#6EE7B7" stroke-width="6" fill="none"/>
  <circle cx="78" cy="62" r="20" stroke="#F472B6" stroke-width="6" fill="none"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#EDE9FE" text-anchor="middle">OZ / MOZART</text>
</svg>`,

  // 784. Aldor (High-Performance Computer Algebra & Axiom) - Dark Indigo & Cyan
  "aldor.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="aldorG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#141147"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#aldorG)"/>
  <path d="M40 88 L64 36 L88 88 M48 72 H80" stroke="#A5B4FC" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="36" r="6" fill="#38BDF8"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0E7FF" text-anchor="middle">ALDOR</text>
</svg>`,

  // 785. Sather-K (Eiffel-derived Object-Oriented Language) - Forest Teal & Yellow
  "sather-k.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="satherG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#satherG)"/>
  <path d="M44 48 C44 40 52 36 64 36 C76 36 82 42 82 48 C82 60 46 58 46 72 C46 80 54 84 64 84 C76 84 84 78 84 70" stroke="#FACC15" stroke-width="7" stroke-linecap="round" fill="none"/>
  <text x="96" y="86" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#2DD4BF">-K</text>
</svg>`,

  // 786. Obliq (Cardelli's Distributed Lexically-Scoped Language) - Cyber Cyan & Midnight Blue
  "obliq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="obliqG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#021C35"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#obliqG)"/>
  <line x1="36" y1="88" x2="92" y2="36" stroke="#38BDF8" stroke-width="9" stroke-linecap="round"/>
  <circle cx="36" cy="88" r="9" fill="#F43F5E"/>
  <circle cx="92" cy="36" r="9" fill="#10B981"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#BAE6FD" text-anchor="middle">OBLIQ</text>
</svg>`,

  // 787. Modula-3 SRC (DEC Systems Research Center Modula-3) - Deep Royal Blue & Silver
  "modula-3-src.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="m3G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#081846"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#m3G)"/>
  <path d="M32 86 V40 L52 64 L72 40 V86" stroke="#93C5FD" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="94" y="78" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#F59E0B">3</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#E2E8F0" text-anchor="middle">DEC SRC</text>
</svg>`,

  // 788. Oberon-2 (Wirth & Mössenböck ETH Zurich) - Alpine Blue & White
  "oberon-2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ob2G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#032D52"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ob2G)"/>
  <circle cx="56" cy="56" r="26" stroke="#FFFFFF" stroke-width="6" fill="none"/>
  <text x="88" y="72" font-family="system-ui, sans-serif" font-size="32" font-weight="900" fill="#FBBF24">-2</text>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#E0F2FE" text-anchor="middle">OBERON</text>
</svg>`,

  // 789. Active Oberon (ETH Zurich Concurrency & Active Objects) - Electric Amber & Orange
  "active-oberon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="actobG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#actobG)"/>
  <circle cx="64" cy="52" r="24" stroke="#FDE68A" stroke-width="5" fill="none"/>
  <polygon points="64,34 76,50 64,50 64,70 52,54 64,54" fill="#F59E0B"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF3C7" text-anchor="middle">ACTIVE OBERON</text>
</svg>`,

  // 790. Zonnon (ETH Zurich .NET Modular Language) - Deep Slate & Emerald
  "zonnon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="zonG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#zonG)"/>
  <path d="M40 38 H88 L40 88 H88" stroke="#34D399" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#A7F3D0" text-anchor="middle">ZONNON</text>
</svg>`,

  // 791. Lagoona (ETH Component-Oriented Language) - Ocean Lagoon Teal & White
  "lagoona.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lagG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lagG)"/>
  <path d="M32 76 C44 56 60 56 64 64 C68 72 84 72 96 52" stroke="#67E8F9" stroke-width="7" stroke-linecap="round" fill="none"/>
  <circle cx="64" cy="40" r="12" fill="#A5F3FC"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">LAGOONA</text>
</svg>`,

  // 792. Component Oberon (BlackBox Component Pascal precursor) - Dark Sapphire & Crimson
  "component-oberon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="compobG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0B132B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#compobG)"/>
  <rect x="36" y="34" width="24" height="24" rx="4" fill="#60A5FA"/>
  <rect x="68" y="34" width="24" height="24" rx="4" fill="#F43F5E"/>
  <rect x="36" y="66" width="24" height="24" rx="4" fill="#34D399"/>
  <rect x="68" y="66" width="24" height="24" rx="4" fill="#FBBF24"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#E2E8F0" text-anchor="middle">COMPONENT OBERON</text>
</svg>`,

  // 793. Blue (Kölling & Rosenberg Educational OO Language - BlueJ precursor) - Pure Royal Blue
  "blue.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="blueG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#blueG)"/>
  <circle cx="64" cy="56" r="26" fill="#3B82F6" stroke="#BFDBFE" stroke-width="4"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">B</text>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#93C5FD" text-anchor="middle">BLUE</text>
</svg>`,

  // 794. Mesa (Xerox PARC Systems Programming Language) - Xerox Red & Slate
  "mesa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mesaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mesaG)"/>
  <polygon points="32,76 48,42 80,42 96,76" fill="#FECDD3" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">MESA</text>
</svg>`,

  // 795. Cedar Mesa (Xerox PARC Garbage-Collected Mesa) - Forest Cedar Green & Gold
  "cedar-mesa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cedarG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cedarG)"/>
  <polygon points="64,28 84,52 74,52 90,74 78,74 94,92 34,92 50,74 38,74 54,52 44,52" fill="#86EFAC"/>
  <rect x="60" y="92" width="8" height="8" fill="#FDE047"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#DCFCE7" text-anchor="middle">CEDAR</text>
</svg>`,

  // 796. Smalltalk-80 (Xerox PARC Gold Standard OOP) - Golden Amber & Rich Bronze
  "smalltalk-80.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="st80G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#st80G)"/>
  <circle cx="64" cy="52" r="24" stroke="#FDE68A" stroke-width="5" fill="none"/>
  <circle cx="64" cy="52" r="14" fill="#F59E0B"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FEF3C7" text-anchor="middle">SMALLTALK-80</text>
</svg>`,

  // 797. Squeak (Open Smalltalk Environment - Dan Ingalls & Alan Kay) - Squeak Teal / Emerald
  "squeak.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="squeakG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#squeakG)"/>
  <!-- Squeak Mouse Glyph -->
  <ellipse cx="64" cy="62" rx="24" ry="18" fill="#A7F3D0"/>
  <circle cx="48" cy="42" r="10" fill="#6EE7B7"/>
  <circle cx="80" cy="42" r="10" fill="#6EE7B7"/>
  <circle cx="56" cy="58" r="3" fill="#065F46"/>
  <circle cx="72" cy="58" r="3" fill="#065F46"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#D1FAE5" text-anchor="middle">SQUEAK</text>
</svg>`,

  // 798. Pharo (Modern Pure Object-Oriented Smalltalk) - Deep Indigo / Purple & Cyan Star
  "pharo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pharoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pharoG)"/>
  <!-- Lighthouse Beacon Beam -->
  <polygon points="64,30 54,82 74,82" fill="#E0E7FF"/>
  <circle cx="64" cy="38" r="9" fill="#38BDF8"/>
  <polygon points="64,38 24,56 24,70" fill="rgba(56, 189, 248, 0.4)"/>
  <polygon points="64,38 104,56 104,70" fill="rgba(56, 189, 248, 0.4)"/>
  <text x="64" y="106" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">PHARO</text>
</svg>`,

  // 799. Dolphin Smalltalk (Windows Native Smalltalk Development) - Ocean Dolphin Cyan & Navy
  "dolphin-smalltalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dolphinG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#072744"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dolphinG)"/>
  <path d="M34 76 C38 46 64 36 84 46 C94 52 98 60 92 68 C84 76 70 66 60 70 C48 76 42 78 34 76 Z" fill="#BAE6FD"/>
  <circle cx="78" cy="50" r="3" fill="#0369A1"/>
  <text x="64" y="104" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">DOLPHIN</text>
</svg>`,

  // 800. GNU Smalltalk (Headless GNU dialect of Smalltalk) - GNU Burgundy & Gold
  "gnu-smalltalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gnustG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#831843"/>
      <stop offset="100%" stop-color="#3B071E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gnustG)"/>
  <circle cx="64" cy="50" r="22" stroke="#FDE68A" stroke-width="5" fill="none"/>
  <path d="M42 36 C44 26 56 24 64 30 C72 24 84 26 86 36" stroke="#F472B6" stroke-width="5" stroke-linecap="round" fill="none"/>
  <text x="64" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" text-anchor="middle">GST</text>
  <text x="64" y="102" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FCE7F3" text-anchor="middle">GNU SMALLTALK</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content.trim(), 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content.trim(), 'utf8');
  count++;
}

console.log(`Generated and synced ${count} Section 15 vector SVG logos to both assets/logos/ and public/assets/logos/`);
