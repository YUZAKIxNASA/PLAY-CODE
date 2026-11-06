const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  "flix.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="flixG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#9F1239"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#flixG)"/>
  <path d="M38 32 H90 V46 H54 V58 H82 V72 H54 V96 H38 Z" fill="#FFFFFF"/>
  <circle cx="94" cy="88" r="8" fill="#FDE047"/>
</svg>`,

  "idris2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="idrisG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#831843"/>
      <stop offset="100%" stop-color="#500724"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#idrisG)"/>
  <text x="36" y="82" font-family="'Poppins', sans-serif" font-size="54" font-weight="800" fill="#FFFFFF">I</text>
  <text x="64" y="82" font-family="'Poppins', sans-serif" font-size="54" font-weight="800" fill="#F472B6">2</text>
  <path d="M32 94 H96" stroke="#EC4899" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  "liquid-haskell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="liqG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#liqG)"/>
  <path d="M64 24 C64 24 36 58 36 78 C36 94 48 104 64 104 C80 104 92 94 92 78 C92 58 64 24 64 24 Z" fill="#38BDF8"/>
  <path d="M54 70 L62 82 L76 60" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  "purescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="psG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#psG)"/>
  <path d="M36 34 L66 64 L36 94" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M56 34 L86 64 L56 94" fill="none" stroke="#99F6E4" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  "grain.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="grainG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#grainG)"/>
  <ellipse cx="64" cy="64" rx="22" ry="38" transform="rotate(-30 64 64)" fill="#FEF08A"/>
  <path d="M44 80 C56 64 72 48 84 32" stroke="#854D0E" stroke-width="5" stroke-linecap="round"/>
  <path d="M52 56 L44 52 M60 68 L52 64 M68 44 L60 40" stroke="#854D0E" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  "assemblyscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ascG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#4338CA"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ascG)"/>
  <text x="64" y="82" font-family="'Poppins', sans-serif" font-size="44" font-weight="800" text-anchor="middle" fill="#FFFFFF">AS</text>
  <path d="M34 94 H94" stroke="#A5B4FC" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  "wasm-text.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="watG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#654FF0"/>
      <stop offset="100%" stop-color="#4E33E4"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#watG)"/>
  <text x="64" y="60" font-family="'Poppins', monospace" font-size="28" font-weight="700" text-anchor="middle" fill="#FFFFFF">WAT</text>
  <text x="64" y="90" font-family="'Poppins', monospace" font-size="22" font-weight="600" text-anchor="middle" fill="#C7D2FE">(module)</text>
</svg>`,

  "moonbit.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333EA"/>
      <stop offset="100%" stop-color="#6B21A8"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mbG)"/>
  <path d="M72 32 A 32 32 0 1 0 96 86 A 38 38 0 1 1 72 32 Z" fill="#F3E8FF"/>
  <circle cx="88" cy="42" r="5" fill="#E9D5FF"/>
</svg>`,

  "vlang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="vG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F79A7"/>
      <stop offset="100%" stop-color="#2D4D73"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#vG)"/>
  <path d="M30 36 L64 96 L98 36 H78 L64 68 L50 36 Z" fill="#FFFFFF"/>
</svg>`,

  "odin.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="odinG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#odinG)"/>
  <circle cx="64" cy="64" r="34" fill="none" stroke="#FFFFFF" stroke-width="8"/>
  <circle cx="64" cy="64" r="14" fill="#38BDF8"/>
</svg>`,

  "jai.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jaiG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jaiG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-size="44" font-weight="800" text-anchor="middle" fill="#FFFFFF">JAI</text>
  <polygon points="64,28 72,40 56,40" fill="#FDE68A"/>
</svg>`,

  "c3.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="c3G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E40AF"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#c3G)"/>
  <text x="44" y="82" font-family="'Poppins', sans-serif" font-size="52" font-weight="800" fill="#FFFFFF">C</text>
  <text x="80" y="82" font-family="'Poppins', sans-serif" font-size="40" font-weight="800" fill="#60A5FA">3</text>
</svg>`,

  "hare.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hareG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78716C"/>
      <stop offset="100%" stop-color="#44403C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hareG)"/>
  <path d="M50 28 C46 44 48 58 56 68 C46 72 40 82 44 94 C48 102 60 102 70 96 C82 102 92 98 94 88 C96 74 88 64 74 62 C82 52 82 36 78 28 C74 40 70 54 64 56 C58 52 54 38 50 28 Z" fill="#F5F5F4"/>
</svg>`,

  "zig-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="zigG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#zigG)"/>
  <path d="M34 38 H94 L50 88 H94" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  "cyclone.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cycG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#115E59"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cycG)"/>
  <path d="M64 30 A34 34 0 0 1 98 64 A34 34 0 0 1 64 98 A24 24 0 0 1 40 74 A16 16 0 0 1 56 58" fill="none" stroke="#5EEAD4" stroke-width="8" stroke-linecap="round"/>
  <circle cx="64" cy="64" r="6" fill="#FFFFFF"/>
</svg>`,

  "vala-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="valaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#5B21B6"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#valaG)"/>
  <path d="M34 36 L64 96 L94 36 H76 L64 68 L52 36 Z" fill="#C4B5FD"/>
  <circle cx="64" cy="40" r="6" fill="#FFFFFF"/>
</svg>`,

  "seed7.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="seedG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#166534"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#seedG)"/>
  <text x="44" y="80" font-family="'Poppins', sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">S</text>
  <text x="76" y="80" font-family="'Poppins', sans-serif" font-size="48" font-weight="800" fill="#86EFAC">7</text>
</svg>`,

  "euphoria.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="euphG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#euphG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#FFFFFF" stroke-width="6"/>
  <circle cx="52" cy="54" r="5" fill="#FFFFFF"/>
  <circle cx="76" cy="54" r="5" fill="#FFFFFF"/>
  <path d="M48 72 Q64 88 80 72" fill="none" stroke="#FDBA74" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  "boo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="booG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#booG)"/>
  <path d="M64 28 C44 28 36 44 36 64 C36 84 40 96 46 96 C50 96 54 90 64 90 C74 90 78 96 82 96 C88 96 92 84 92 64 C92 44 84 28 64 28 Z" fill="#F8FAFC"/>
  <circle cx="52" cy="56" r="6" fill="#0F172A"/>
  <circle cx="76" cy="56" r="6" fill="#0F172A"/>
  <ellipse cx="64" cy="74" rx="8" ry="10" fill="#0F172A"/>
</svg>`,

  "nemerle.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nemG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nemG)"/>
  <path d="M38 34 V94 L90 34 V94" fill="none" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  "cobra.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cobG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#14532D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cobG)"/>
  <path d="M44 48 C44 34 60 26 72 32 C82 38 84 52 74 60 C64 68 52 74 56 86 C60 94 72 96 84 90" fill="none" stroke="#BBF7D0" stroke-width="10" stroke-linecap="round"/>
  <circle cx="70" cy="38" r="4" fill="#FFFFFF"/>
</svg>`,

  "ironruby.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="irG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#irG)"/>
  <polygon points="64,30 96,52 82,94 46,94 32,52" fill="#FCA5A5" stroke="#FFFFFF" stroke-width="4"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="28" font-weight="800" text-anchor="middle" fill="#7F1D1D">Fe</text>
</svg>`,

  "rubinius.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rbxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#881337"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rbxG)"/>
  <polygon points="64,34 94,56 80,92 48,92 34,56" fill="#F87171"/>
  <polygon points="64,44 84,58 74,82 54,82 44,58" fill="#FFFFFF"/>
</svg>`,

  "truffleruby.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="trG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#trG)"/>
  <polygon points="64,28 98,54 84,96 44,96 30,54" fill="#FDA4AF"/>
  <circle cx="64" cy="64" r="16" fill="#FFF1F2"/>
</svg>`,

  "opal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="opalG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="50%" stop-color="#8B5CF6"/>
      <stop offset="100%" stop-color="#EC4899"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#opalG)"/>
  <polygon points="64,28 96,52 80,96 48,96 32,52" fill="none" stroke="#FFFFFF" stroke-width="6"/>
  <polygon points="64,42 82,56 72,82 56,82 46,56" fill="#FFFFFF" opacity="0.8"/>
</svg>`,

  "crystal-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="crysG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1F2937"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#crysG)"/>
  <polygon points="64,26 98,46 98,82 64,102 30,82 30,46" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <polygon points="64,38 84,52 84,76 64,90 44,76 44,52" fill="#E0F2FE"/>
</svg>`,

  "mint.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mintG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mintG)"/>
  <path d="M40 34 L64 60 L88 34 V94 H72 V58 L64 68 L56 58 V94 H40 Z" fill="#D1FAE5"/>
</svg>`,

  "imba.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="imbaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#E11D48"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#imbaG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#FFFFFF">imba</text>
</svg>`,

  "livescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lsG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-size="44" font-weight="800" text-anchor="middle" fill="#FFFFFF">LS</text>
</svg>`,

  "dart-native.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dnG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0081C9"/>
      <stop offset="100%" stop-color="#005B8F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dnG)"/>
  <polygon points="36,36 76,36 96,56 56,96 36,96" fill="#00D2B4"/>
  <polygon points="56,56 96,56 76,96 36,96" fill="#FFFFFF" opacity="0.9"/>
</svg>`,

  "algol60.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="a60G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#312E81"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#a60G)"/>
  <text x="64" y="60" font-family="'Poppins', sans-serif" font-size="28" font-weight="800" text-anchor="middle" fill="#FFFFFF">ALGOL</text>
  <text x="64" y="94" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#A5B4FC">60</text>
</svg>`,

  "algol68.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="a68G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#a68G)"/>
  <text x="64" y="60" font-family="'Poppins', sans-serif" font-size="28" font-weight="800" text-anchor="middle" fill="#FFFFFF">ALGOL</text>
  <text x="64" y="94" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#C7D2FE">68</text>
</svg>`,

  "simula.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="simG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#simG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#A7F3D0" stroke-width="8"/>
  <circle cx="64" cy="64" r="16" fill="#FFFFFF"/>
</svg>`,

  "bcpl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bcplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C2D12"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bcplG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#FFEDD5">BCPL</text>
</svg>`,

  "b-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bG)"/>
  <text x="64" y="86" font-family="'Poppins', sans-serif" font-size="64" font-weight="800" text-anchor="middle" fill="#93C5FD">B</text>
</svg>`,

  "cpl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cplG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#E2E8F0">CPL</text>
</svg>`,

  "plm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="plmG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#plmG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="36" font-weight="800" text-anchor="middle" fill="#BAE6FD">PL/M</text>
</svg>`,

  "pl0.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pl0G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#312E81"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pl0G)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="36" font-weight="800" text-anchor="middle" fill="#E0E7FF">PL/0</text>
</svg>`,

  "snobol.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="snoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D946EF"/>
      <stop offset="100%" stop-color="#86198F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#snoG)"/>
  <circle cx="64" cy="46" r="16" fill="#FDF4FF"/>
  <circle cx="64" cy="80" r="22" fill="#FDF4FF"/>
  <circle cx="58" cy="42" r="3" fill="#86198F"/>
  <circle cx="70" cy="42" r="3" fill="#86198F"/>
</svg>`,

  "mumps.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mumG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E7490"/>
      <stop offset="100%" stop-color="#155E75"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mumG)"/>
  <text x="64" y="60" font-family="'Poppins', sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#FFFFFF">MUMPS</text>
  <text x="64" y="86" font-family="'Poppins', sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#67E8F9">(M)</text>
</svg>`,

  "jovial.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jovG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jovG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="30" font-weight="800" text-anchor="middle" fill="#E0F2FE">JOVIAL</text>
</svg>`,

  "coral.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="corG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FB7185"/>
      <stop offset="100%" stop-color="#E11D48"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#corG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="30" font-weight="800" text-anchor="middle" fill="#FFFFFF">CORAL</text>
</svg>`,

  "coral66.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="c66G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F43F5E"/>
      <stop offset="100%" stop-color="#9F1239"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#c66G)"/>
  <text x="64" y="58" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" text-anchor="middle" fill="#FFFFFF">CORAL</text>
  <text x="64" y="92" font-family="'Poppins', sans-serif" font-size="32" font-weight="800" text-anchor="middle" fill="#FECDD3">66</text>
</svg>`,

  "neliac.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nelG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nelG)"/>
  <text x="64" y="76" font-family="'Poppins', sans-serif" font-size="28" font-weight="800" text-anchor="middle" fill="#CBD5E1">NELIAC</text>
</svg>`,

  "flow-matic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="flowG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14B8A6"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#flowG)"/>
  <text x="64" y="58" font-family="'Poppins', sans-serif" font-size="22" font-weight="800" text-anchor="middle" fill="#FFFFFF">FLOW</text>
  <text x="64" y="88" font-family="'Poppins', sans-serif" font-size="22" font-weight="800" text-anchor="middle" fill="#99F6E4">MATIC</text>
</svg>`,

  "fortran77.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="f77G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#4C1D95"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#f77G)"/>
  <text x="64" y="56" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" text-anchor="middle" fill="#FFFFFF">FORTRAN</text>
  <text x="64" y="92" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#DDD6FE">77</text>
</svg>`,

  "fortran90.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="f90G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#f90G)"/>
  <text x="64" y="56" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" text-anchor="middle" fill="#FFFFFF">Fortran</text>
  <text x="64" y="92" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" text-anchor="middle" fill="#E9D5FF">90</text>
</svg>`,

  "hpf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hpfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hpfG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#BFDBFE">HPF</text>
</svg>`,

  "cilk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cilkG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cilkG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="38" font-weight="800" text-anchor="middle" fill="#A7F3D0">Cilk</text>
</svg>`,

  "upc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="upcG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333EA"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#upcG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-size="40" font-weight="800" text-anchor="middle" fill="#F3E8FF">UPC</text>
</svg>`
};

const keys = Object.keys(svgs);
console.log('Writing', keys.length, 'SVGs to', dir1, 'and', dir2);

keys.forEach(file => {
  fs.writeFileSync(path.join(dir1, file), svgs[file].trim());
  fs.writeFileSync(path.join(dir2, file), svgs[file].trim());
});

console.log('Successfully wrote', keys.length, 'SVG logo assets!');
