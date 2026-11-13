const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 301. Bash
  "bash.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g301" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E293B"/><stop offset="100%" stop-color="#090E17"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g301)"/>
  <rect x="24" y="26" width="80" height="58" rx="10" fill="#0F172A" stroke="#4ADE80" stroke-width="3"/>
  <path d="M36 44 L50 54 L36 64" stroke="#4ADE80" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="56" y1="64" x2="76" y2="64" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#E2E8F0" text-anchor="middle">BASH</text>
</svg>`,

  // 302. Zsh
  "zsh.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g302" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0F766E"/><stop offset="100%" stop-color="#042F2E"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g302)"/>
  <polygon points="34,32 94,32 54,68 94,68 94,80 34,80 74,44 34,44" fill="#5EEAD4"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#CCFBF1" text-anchor="middle">ZSH</text>
</svg>`,

  // 303. Fish
  "fish-shell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g303" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B91C1C"/><stop offset="100%" stop-color="#450A0A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g303)"/>
  <path d="M32 56 C46 34, 78 34, 96 56 C78 78, 46 78, 32 56 Z" fill="#FB7185" stroke="#FFFFFF" stroke-width="2.5"/>
  <polygon points="22,42 36,56 22,70" fill="#FCA5A5"/>
  <circle cx="78" cy="52" r="4" fill="#450A0A"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FEE2E2" text-anchor="middle">FISH</text>
</svg>`,

  // 304. PowerShell
  "powershell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g304" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1D4ED8"/><stop offset="100%" stop-color="#091945"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g304)"/>
  <polygon points="32,28 100,28 92,82 24,82" fill="#2563EB" stroke="#FFFFFF" stroke-width="2.5"/>
  <path d="M40 42 L60 54 L40 66" stroke="#FFFFFF" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <line x1="62" y1="68" x2="78" y2="68" stroke="#93C5FD" stroke-width="5" stroke-linecap="round"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#DBEAFE" text-anchor="middle">POWERSHELL</text>
</svg>`,

  // 305. Ksh
  "ksh.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g305" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g305)"/>
  <rect x="28" y="26" width="72" height="58" rx="12" fill="#1E293B" stroke="#94A3B8" stroke-width="2.5"/>
  <text x="64" y="65" font-family="monospace" font-size="28" font-weight="900" fill="#38BDF8" text-anchor="middle">ksh</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E2E8F0" text-anchor="middle">KORN SHELL</text>
</svg>`,

  // 306. Tcsh
  "tcsh.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g306" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E40AF"/><stop offset="100%" stop-color="#0B1A4A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g306)"/>
  <circle cx="64" cy="54" r="28" fill="#1E3A8A" stroke="#93C5FD" stroke-width="3"/>
  <text x="64" y="63" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">tcsh</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#DBEAFE" text-anchor="middle">TCSH</text>
</svg>`,

  // 307. Dash
  "dash-shell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g307" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#374151"/><stop offset="100%" stop-color="#111827"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g307)"/>
  <line x1="30" y1="54" x2="98" y2="54" stroke="#60A5FA" stroke-width="10" stroke-linecap="round"/>
  <circle cx="94" cy="54" r="6" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#F3F4F6" text-anchor="middle">DASH</text>
</svg>`,

  // 308. Nushell
  "nushell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g308" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#022C22"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g308)"/>
  <rect x="28" y="28" width="72" height="54" rx="10" fill="#064E3B" stroke="#6EE7B7" stroke-width="3"/>
  <line x1="28" y1="44" x2="100" y2="44" stroke="#6EE7B7" stroke-width="2.5"/>
  <line x1="64" y1="44" x2="64" y2="82" stroke="#6EE7B7" stroke-width="2.5"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#D1FAE5" text-anchor="middle">NUSHELL</text>
</svg>`,

  // 309. Tcl
  "tcl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g309" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9F1239"/><stop offset="100%" stop-color="#3B0716"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g309)"/>
  <path d="M34 78 C42 42, 70 24, 96 26 C88 54, 68 72, 34 78 Z" fill="#FB7185" stroke="#FFFFFF" stroke-width="2.5"/>
  <line x1="34" y1="78" x2="88" y2="32" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFE4E6" text-anchor="middle">TCL</text>
</svg>`,

  // 310. Expect
  "expect.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g310" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#15803D"/><stop offset="100%" stop-color="#052E16"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g310)"/>
  <rect x="28" y="28" width="72" height="54" rx="12" fill="#14532D" stroke="#86EFAC" stroke-width="3"/>
  <path d="M44 54 L56 66 L82 40" stroke="#4ADE80" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#DCFCE7" text-anchor="middle">EXPECT</text>
</svg>`,

  // 311. Incr Tcl
  "itcl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g311" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0E7490"/><stop offset="100%" stop-color="#082F3D"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g311)"/>
  <circle cx="64" cy="54" r="28" fill="#155E75" stroke="#67E8F9" stroke-width="3"/>
  <text x="64" y="64" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">[incr]</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#CFFAFE" text-anchor="middle">INCR TCL</text>
</svg>`,

  // 312. Awk
  "awk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g312" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B45309"/><stop offset="100%" stop-color="#451A03"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g312)"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#FEF3C7" text-anchor="middle">{$1}</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FEF3C7" text-anchor="middle">AWK</text>
</svg>`,

  // 313. Gawk
  "gawk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g313" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C2410C"/><stop offset="100%" stop-color="#431407"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g313)"/>
  <rect x="26" y="26" width="76" height="56" rx="12" fill="#9A3412" stroke="#FDBA74" stroke-width="2.5"/>
  <text x="64" y="63" font-family="monospace" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">GAWK</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFEDD5" text-anchor="middle">GNU AWK</text>
</svg>`,

  // 314. Sed
  "sed.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g314" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4338CA"/><stop offset="100%" stop-color="#1E1B4B"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g314)"/>
  <text x="64" y="64" font-family="monospace" font-size="28" font-weight="900" fill="#A5B4FC" text-anchor="middle">s/a/b/</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#E0E7FF" text-anchor="middle">SED</text>
</svg>`,

  // 315. M4
  "m4.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g315" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#2E1065"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g315)"/>
  <polygon points="64,22 94,40 94,72 64,90 34,72 34,40" fill="#7C3AED" stroke="#DDD6FE" stroke-width="2.5"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">M4</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#EDE9FE" text-anchor="middle">M4 MACRO</text>
</svg>`,

  // 316. DOS Batch
  "dos-batch.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g316" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E3A8A"/><stop offset="100%" stop-color="#091336"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g316)"/>
  <rect x="24" y="26" width="80" height="56" rx="8" fill="#0F172A" stroke="#60A5FA" stroke-width="2.5"/>
  <text x="64" y="61" font-family="monospace" font-size="22" font-weight="900" fill="#93C5FD" text-anchor="middle">C:\&gt;_</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DBEAFE" text-anchor="middle">DOS BATCH</text>
</svg>`,

  // 317. AppleScript
  "applescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g317" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3730A3"/><stop offset="100%" stop-color="#17144D"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g317)"/>
  <rect x="36" y="24" width="56" height="62" rx="8" fill="#4F46E5" stroke="#C7D2FE" stroke-width="2.5"/>
  <line x1="46" y1="42" x2="82" y2="42" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  <line x1="46" y1="56" x2="76" y2="56" stroke="#C7D2FE" stroke-width="4" stroke-linecap="round"/>
  <line x1="46" y1="70" x2="68" y2="70" stroke="#A5B4FC" stroke-width="4" stroke-linecap="round"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0E7FF" text-anchor="middle">APPLESCRIPT</text>
</svg>`,

  // 318. AutoHotkey
  "autohotkey.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g318" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#16A34A"/><stop offset="100%" stop-color="#052E16"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g318)"/>
  <rect x="28" y="26" width="72" height="58" rx="12" fill="#15803D" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="65" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">AHK</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#DCFCE7" text-anchor="middle">AUTOHOTKEY</text>
</svg>`,

  // 319. AutoIt
  "autoit.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g319" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0369A1"/><stop offset="100%" stop-color="#08283F"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g319)"/>
  <circle cx="64" cy="54" r="28" fill="#0284C7" stroke="#BAE6FD" stroke-width="3"/>
  <polygon points="56,38 82,54 56,70" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E0F2FE" text-anchor="middle">AUTOIT</text>
</svg>`,

  // 320. HyperTalk
  "hypertalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g320" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7E22CE"/><stop offset="100%" stop-color="#350B5C"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g320)"/>
  <rect x="28" y="34" width="62" height="46" rx="6" fill="#A855F7" stroke="#FFFFFF" stroke-width="2"/>
  <rect x="38" y="24" width="62" height="46" rx="6" fill="#6B21A8" stroke="#F3E8FF" stroke-width="2.5"/>
  <text x="69" y="54" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">CARD</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#F3E8FF" text-anchor="middle">HYPERTALK</text>
</svg>`,

  // 321. Visual Basic 6
  "visual-basic-6.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g321" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1D4ED8"/><stop offset="100%" stop-color="#0A1D52"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g321)"/>
  <rect x="28" y="26" width="72" height="56" rx="10" fill="#1E3A8A" stroke="#93C5FD" stroke-width="2.5"/>
  <text x="64" y="65" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">VB6</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#DBEAFE" text-anchor="middle">VISUAL BASIC 6</text>
</svg>`,

  // 322. Visual Basic .NET
  "vb-net.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g322" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5"/><stop offset="100%" stop-color="#1E1B4B"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g322)"/>
  <rect x="26" y="26" width="76" height="56" rx="12" fill="#4338CA" stroke="#C7D2FE" stroke-width="2.5"/>
  <text x="64" y="63" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">VB.NET</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0E7FF" text-anchor="middle">VB .NET</text>
</svg>`,

  // 323. FreeBASIC
  "freebasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g323" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E40AF"/><stop offset="100%" stop-color="#0C1D54"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g323)"/>
  <polygon points="34,26 94,26 88,68 64,86 40,68" fill="#2563EB" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="62" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FDE047" text-anchor="middle">FB</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DBEAFE" text-anchor="middle">FREEBASIC</text>
</svg>`,

  // 324. Turbo Pascal
  "turbo-pascal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g324" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E3A8A"/><stop offset="100%" stop-color="#09163B"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g324)"/>
  <rect x="26" y="26" width="76" height="56" rx="8" fill="#1D4ED8" stroke="#FACC15" stroke-width="3"/>
  <text x="64" y="64" font-family="monospace" font-size="28" font-weight="900" fill="#FACC15" text-anchor="middle">TP7</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF08A" text-anchor="middle">TURBO PASCAL</text>
</svg>`,

  // 325. Delphi
  "delphi.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g325" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B91C1C"/><stop offset="100%" stop-color="#450A0A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g325)"/>
  <polygon points="64,22 96,54 64,86 32,54" fill="#DC2626" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">D</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FEE2E2" text-anchor="middle">DELPHI</text>
</svg>`,

  // 326. Modula-2
  "modula-2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g326" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0F766E"/><stop offset="100%" stop-color="#052926"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g326)"/>
  <rect x="28" y="28" width="32" height="54" rx="6" fill="#14B8A6"/>
  <rect x="68" y="28" width="32" height="54" rx="6" fill="#5EEAD4"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#CCFBF1" text-anchor="middle">MODULA-2</text>
</svg>`,

  // 327. Oberon
  "oberon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g327" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0284C7"/><stop offset="100%" stop-color="#082F49"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g327)"/>
  <circle cx="64" cy="54" r="28" stroke="#7DD3FC" stroke-width="8" fill="none"/>
  <circle cx="64" cy="54" r="10" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#E0F2FE" text-anchor="middle">OBERON</text>
</svg>`,

  // 328. PL/I
  "pl-i.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g328" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1D4ED8"/><stop offset="100%" stop-color="#0B1F54"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g328)"/>
  <rect x="28" y="28" width="72" height="54" rx="8" fill="#1E3A8A" stroke="#60A5FA" stroke-width="2.5"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">PL/I</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">IBM PL/I</text>
</svg>`,

  // 329. Common Lisp
  "common-lisp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g329" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#B45309"/><stop offset="100%" stop-color="#421B03"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g329)"/>
  <circle cx="64" cy="54" r="28" fill="#D97706" stroke="#FEF3C7" stroke-width="3"/>
  <text x="64" y="65" font-family="serif" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle">(λ)</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF3C7" text-anchor="middle">COMMON LISP</text>
</svg>`,

  // 330. SBCL
  "sbcl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g330" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g330)"/>
  <rect x="28" y="28" width="72" height="54" rx="10" fill="#1E293B" stroke="#CBD5E1" stroke-width="2.5"/>
  <text x="64" y="64" font-family="monospace" font-size="24" font-weight="900" fill="#F8FAFC" text-anchor="middle">SBCL</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E2E8F0" text-anchor="middle">STEEL BANK CL</text>
</svg>`,

  // 331. Emacs Lisp
  "emacs-lisp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g331" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#5B21B6"/><stop offset="100%" stop-color="#240E4A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g331)"/>
  <circle cx="64" cy="54" r="28" fill="#7C3AED" stroke="#DDD6FE" stroke-width="3"/>
  <text x="64" y="64" font-family="serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">Eλ</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#EDE9FE" text-anchor="middle">EMACS LISP</text>
</svg>`,

  // 332. AutoLISP
  "autolisp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g332" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#BE123C"/><stop offset="100%" stop-color="#4C0519"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g332)"/>
  <polygon points="44,82 64,26 84,82 72,82 64,58 56,82" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFE4E6" text-anchor="middle">AUTOLISP</text>
</svg>`,

  // 333. Scheme
  "scheme.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g333" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6D28D9"/><stop offset="100%" stop-color="#2E1065"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g333)"/>
  <path d="M44 26 L64 58 L42 84 M64 58 L86 84" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#EDE9FE" text-anchor="middle">SCHEME</text>
</svg>`,

  // 334. Guile
  "guile.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g334" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0369A1"/><stop offset="100%" stop-color="#07273E"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g334)"/>
  <circle cx="64" cy="54" r="26" fill="#0284C7" stroke="#BAE6FD" stroke-width="3"/>
  <text x="64" y="64" font-family="serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">Gλ</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E0F2FE" text-anchor="middle">GNU GUILE</text>
</svg>`,

  // 335. Chez Scheme
  "chez-scheme.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g335" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#991B1B"/><stop offset="100%" stop-color="#3B0A0A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g335)"/>
  <rect x="28" y="28" width="72" height="54" rx="12" fill="#7F1D1D" stroke="#FCA5A5" stroke-width="2.5"/>
  <text x="64" y="64" font-family="serif" font-size="26" font-weight="900" fill="#FFFFFF" text-anchor="middle">Chez</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEE2E2" text-anchor="middle">CHEZ SCHEME</text>
</svg>`,

  // 336. MIT Scheme
  "mit-scheme.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g336" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9F1239"/><stop offset="100%" stop-color="#3E0718"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g336)"/>
  <rect x="30" y="28" width="14" height="54" fill="#FFFFFF"/>
  <rect x="52" y="28" width="14" height="36" fill="#FDA4AF"/>
  <rect x="74" y="28" width="14" height="54" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFE4E6" text-anchor="middle">MIT SCHEME</text>
</svg>`,

  // 337. Chicken Scheme
  "chicken-scheme.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g337" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#A16207"/><stop offset="100%" stop-color="#3B1E08"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g337)"/>
  <circle cx="64" cy="54" r="24" fill="#FACC15" stroke="#FFFFFF" stroke-width="2.5"/>
  <polygon points="86,50 100,56 86,62" fill="#F97316"/>
  <circle cx="72" cy="48" r="4" fill="#422006"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FEF9C3" text-anchor="middle">CHICKEN</text>
</svg>`,

  // 338. PicoLisp
  "picolisp.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g338" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0E7490"/><stop offset="100%" stop-color="#082633"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g338)"/>
  <circle cx="64" cy="54" r="22" fill="#06B6D4" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="62" font-family="monospace" font-size="20" font-weight="900" fill="#082633" text-anchor="middle">(pi)</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#CFFAFE" text-anchor="middle">PICOLISP</text>
</svg>`,

  // 339. ClojureScript
  "clojurescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g339" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#15803D"/><stop offset="100%" stop-color="#062814"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g339)"/>
  <circle cx="64" cy="54" r="28" fill="#16A34A" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">CLJS</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#DCFCE7" text-anchor="middle">CLOJURESCRIPT</text>
</svg>`,

  // 340. Kawa
  "kawa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g340" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#78350F"/><stop offset="100%" stop-color="#2E1305"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g340)"/>
  <rect x="34" y="38" width="60" height="40" rx="8" fill="#D97706" stroke="#FEF3C7" stroke-width="2.5"/>
  <path d="M94 46 H104 A6 6 0 0 1 104 64 H94" stroke="#FEF3C7" stroke-width="4" fill="none"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#FEF3C7" text-anchor="middle">KAWA</text>
</svg>`,

  // 341. BeanShell
  "beanshell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g341" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C2410C"/><stop offset="100%" stop-color="#451404"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g341)"/>
  <ellipse cx="64" cy="54" rx="28" ry="20" fill="#EA580C" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="61" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">bsh</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFEDD5" text-anchor="middle">BEANSHELL</text>
</svg>`,

  // 342. LuaJIT
  "luajit.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g342" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1E3A8A"/><stop offset="100%" stop-color="#091336"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g342)"/>
  <circle cx="60" cy="56" r="24" fill="#2563EB" stroke="#FFFFFF" stroke-width="2.5"/>
  <circle cx="88" cy="30" r="8" fill="#FACC15"/>
  <text x="60" y="64" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">JIT</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#DBEAFE" text-anchor="middle">LUAJIT</text>
</svg>`,

  // 343. Luau
  "luau.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g343" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0284C7"/><stop offset="100%" stop-color="#072B45"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g343)"/>
  <rect x="38" y="28" width="52" height="52" rx="10" transform="rotate(14 64 54)" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2.5"/>
  <rect x="55" y="45" width="18" height="18" rx="3" transform="rotate(14 64 54)" fill="#082F49"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#E0F2FE" text-anchor="middle">LUAU</text>
</svg>`,

  // 344. GameMaker Language
  "gamemaker-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g344" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#047857"/><stop offset="100%" stop-color="#06281E"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g344)"/>
  <polygon points="64,22 96,54 64,86 32,54" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="61" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#06281E" text-anchor="middle">GML</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#D1FAE5" text-anchor="middle">GAMEMAKER</text>
</svg>`,

  // 345. ChaiScript
  "chaiscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g345" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9A3412"/><stop offset="100%" stop-color="#3D1306"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g345)"/>
  <circle cx="64" cy="54" r="28" fill="#C2410C" stroke="#FED7AA" stroke-width="3"/>
  <text x="64" y="63" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">Chai</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FFEDD5" text-anchor="middle">CHAISCRIPT</text>
</svg>`,

  // 346. HHVM
  "hhvm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g346" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g346)"/>
  <rect x="26" y="28" width="76" height="52" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
  <text x="64" y="63" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#38BDF8" text-anchor="middle">HHVM</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E2E8F0" text-anchor="middle">HHVM JIT</text>
</svg>`,

  // 347. Node.js
  "nodejs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g347" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#15803D"/><stop offset="100%" stop-color="#072D15"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g347)"/>
  <polygon points="64,22 94,38 94,70 64,86 34,70 34,38" fill="#16A34A" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="63" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">JS</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DCFCE7" text-anchor="middle">NODE.JS</text>
</svg>`,

  // 348. Deno
  "deno.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g348" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1F2937"/><stop offset="100%" stop-color="#030712"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g348)"/>
  <circle cx="64" cy="54" r="28" fill="#FFFFFF"/>
  <path d="M46 66 C48 44, 62 36, 76 42 C82 46, 82 54, 72 56 L58 58 L58 76 Z" fill="#0F172A"/>
  <circle cx="68" cy="46" r="3" fill="#FFFFFF"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#F9FAFB" text-anchor="middle">DENO</text>
</svg>`,

  // 349. Bun
  "bun.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g349" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6B21A8"/><stop offset="100%" stop-color="#2E0A49"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g349)"/>
  <ellipse cx="64" cy="56" rx="30" ry="22" fill="#FDE68A" stroke="#FFFFFF" stroke-width="2.5"/>
  <circle cx="52" cy="52" r="3.5" fill="#4C1D95"/>
  <circle cx="76" cy="52" r="3.5" fill="#4C1D95"/>
  <path d="M58 60 Q64 66 70 60" stroke="#F43F5E" stroke-width="3" fill="none" stroke-linecap="round"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#F3E8FF" text-anchor="middle">BUN</text>
</svg>`,

  // 350. Koka
  "koka.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g350" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7C3AED"/><stop offset="100%" stop-color="#2E1065"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g350)"/>
  <circle cx="64" cy="54" r="28" fill="#6D28D9" stroke="#DDD6FE" stroke-width="3"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">eff</text>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#EDE9FE" text-anchor="middle">KOKA</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content, 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content, 'utf8');
  count++;
}

console.log(`Generated ${count} Section 7 (301-350) vector SVG logos in both assets/logos and public/assets/logos!`);
