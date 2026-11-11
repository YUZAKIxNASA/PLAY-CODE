const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 651. Venture
  "venture.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="venG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#venG)"/>
  <path d="M36 38 L64 92 L92 38" fill="none" stroke="#FDE68A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="64" cy="48" r="8" fill="#F59E0B"/>
</svg>`,

  // 652. Anglican
  "anglican.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="angG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#angG)"/>
  <polygon points="64,28 96,92 32,92" fill="none" stroke="#E9D5FF" stroke-width="9" stroke-linejoin="round"/>
  <circle cx="64" cy="70" r="12" fill="#C084FC"/>
</svg>`,

  // 653. WebPPL
  "webppl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="wpplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#wpplG)"/>
  <path d="M30 64 C30 45 45 32 64 32 C83 32 98 45 98 64 C98 83 83 96 64 96 C45 96 30 83 30 64 Z" fill="none" stroke="#38BDF8" stroke-width="7"/>
  <path d="M40 70 Q64 35 88 70" fill="none" stroke="#BAE6FD" stroke-width="5" stroke-linecap="round"/>
  <circle cx="64" cy="52" r="5" fill="#FFFFFF"/>
</svg>`,

  // 654. Gen
  "gen.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="genG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#genG)"/>
  <path d="M82 46 C76 38 68 34 58 34 C42 34 32 46 32 64 C32 82 42 94 58 94 C72 94 80 84 82 72 H58" fill="none" stroke="#FECDD3" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 655. Futhark GPU
  "futhark-gpu.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="fgpuG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#fgpuG)"/>
  <path d="M42 32 V96 M42 36 H86 M42 62 H74" stroke="#A7F3D0" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="80" y="72" width="16" height="16" rx="4" fill="#6EE7B7"/>
</svg>`,

  // 656. Triton
  "triton.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="triG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#triG)"/>
  <path d="M64 26 V100 M40 38 L64 74 L88 38" fill="none" stroke="#5EEAD4" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="40" cy="38" r="6" fill="#CCFBF1"/>
  <circle cx="88" cy="38" r="6" fill="#CCFBF1"/>
  <circle cx="64" cy="26" r="6" fill="#CCFBF1"/>
</svg>`,

  // 657. Taichi
  "taichi.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="taiG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#taiG)"/>
  <circle cx="64" cy="64" r="34" fill="none" stroke="#C7D2FE" stroke-width="5"/>
  <path d="M64 30 A34 34 0 0 1 64 98 A17 17 0 0 1 64 64 A17 17 0 0 0 64 30 Z" fill="#818CF8"/>
  <circle cx="64" cy="47" r="5" fill="#1E1B4B"/>
  <circle cx="64" cy="81" r="5" fill="#E0E7FF"/>
</svg>`,

  // 658. Mojo Language
  "mojo-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mojG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mojG)"/>
  <path d="M64 26 C44 48 36 68 44 86 C52 102 76 102 84 86 C92 68 84 48 64 26 Z" fill="#FED7AA"/>
  <path d="M64 48 C54 62 50 74 54 84 C58 92 70 92 74 84 C78 74 74 62 64 48 Z" fill="#F97316"/>
</svg>`,

  // 659. Codon
  "codon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="codG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E11D48"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#codG)"/>
  <circle cx="48" cy="48" r="14" fill="#FDA4AF"/>
  <circle cx="80" cy="48" r="14" fill="#F43F5E"/>
  <circle cx="64" cy="80" r="14" fill="#FFE4E6"/>
  <line x1="48" y1="48" x2="80" y2="48" stroke="#FFFFFF" stroke-width="5"/>
  <line x1="48" y1="48" x2="64" y2="80" stroke="#FFFFFF" stroke-width="5"/>
  <line x1="80" y1="48" x2="64" y2="80" stroke="#FFFFFF" stroke-width="5"/>
</svg>`,

  // 660. Lux
  "lux.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="luxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#luxG)"/>
  <polygon points="64,24 74,52 104,52 79,70 88,98 64,80 40,98 49,70 24,52 54,52" fill="#FDE68A"/>
</svg>`,

  // 661. Bend
  "bend.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="benG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A21CAF"/>
      <stop offset="100%" stop-color="#4A044E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#benG)"/>
  <path d="M34 94 C34 50 64 34 94 34" fill="none" stroke="#F5D0FE" stroke-width="12" stroke-linecap="round"/>
  <circle cx="34" cy="94" r="8" fill="#E879F9"/>
  <circle cx="94" cy="34" r="8" fill="#E879F9"/>
</svg>`,

  // 662. Vale
  "vale.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="valG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#valG)"/>
  <polygon points="32,36 64,96 96,36 80,36 64,68 48,36" fill="#93C5FD"/>
</svg>`,

  // 663. Austral
  "austral.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ausG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ausG)"/>
  <polygon points="64,30 94,94 76,94 64,68 52,94 34,94" fill="#FCA5A5"/>
  <line x1="46" y1="72" x2="82" y2="72" stroke="#FFFFFF" stroke-width="6"/>
</svg>`,

  // 664. Verona
  "verona.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="verG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#verG)"/>
  <rect x="36" y="36" width="34" height="34" rx="8" fill="#38BDF8" opacity="0.8"/>
  <rect x="58" y="58" width="34" height="34" rx="8" fill="#0284C7" opacity="0.8"/>
</svg>`,

  // 665. Lobster
  "lobster.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lobG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lobG)"/>
  <ellipse cx="64" cy="68" rx="22" ry="28" fill="#FCA5A5"/>
  <path d="M42 56 C30 42 34 28 46 36 C50 40 48 48 42 56 Z" fill="#EF4444"/>
  <path d="M86 56 C98 42 94 28 82 36 C78 40 80 48 86 56 Z" fill="#EF4444"/>
  <circle cx="56" cy="54" r="4" fill="#7F1D1D"/>
  <circle cx="72" cy="54" r="4" fill="#7F1D1D"/>
</svg>`,

  // 666. Wing
  "wing.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="winG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#winG)"/>
  <path d="M30 76 Q64 30 98 48 Q70 66 58 92 Q42 88 30 76 Z" fill="#DDD6FE"/>
</svg>`,

  // 667. Pluto
  "pluto.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pluG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pluG)"/>
  <circle cx="64" cy="64" r="28" fill="#BAE6FD"/>
  <ellipse cx="64" cy="64" rx="42" ry="12" fill="none" stroke="#FFFFFF" stroke-width="4" transform="rotate(-25 64 64)"/>
</svg>`,

  // 668. Cone
  "cone.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="conG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#conG)"/>
  <polygon points="64,28 94,92 34,92" fill="#FDE68A"/>
  <ellipse cx="64" cy="92" rx="30" ry="10" fill="#D97706"/>
</svg>`,

  // 669. Inko
  "inko.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="inkG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#inkG)"/>
  <circle cx="64" cy="64" r="24" fill="#A5B4FC"/>
  <path d="M64 36 V92 M44 56 L84 72" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 670. Gluon
  "gluon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gluG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gluG)"/>
  <circle cx="44" cy="64" r="14" fill="#6EE7B7"/>
  <circle cx="84" cy="64" r="14" fill="#A7F3D0"/>
  <path d="M44 64 Q64 40 84 64 Q64 88 44 64" fill="none" stroke="#FFFFFF" stroke-width="5"/>
</svg>`,

  // 671. Dyon
  "dyon.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dyoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dyoG)"/>
  <polygon points="64,30 94,54 84,92 44,92 34,54" fill="none" stroke="#5EEAD4" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="64" cy="64" r="8" fill="#99F6E4"/>
</svg>`,

  // 672. Rhai
  "rhai.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rhaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rhaG)"/>
  <path d="M42 34 H72 C84 34 90 42 90 52 C90 62 82 68 70 68 H42 V94 M42 66 H66 L86 94" stroke="#FDBA74" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 673. Gleam Language
  "gleam-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gleG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EC4899"/>
      <stop offset="100%" stop-color="#831843"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gleG)"/>
  <polygon points="64,28 76,56 104,64 76,72 64,100 52,72 24,64 52,56" fill="#FCE7F3"/>
  <circle cx="64" cy="64" r="10" fill="#F472B6"/>
</svg>`,

  // 674. Roc Language
  "roc-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rocG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#155E75"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rocG)"/>
  <polygon points="40,32 88,32 94,64 74,96 34,96 54,64" fill="#CFFAFE"/>
  <polygon points="56,48 80,48 70,80 46,80" fill="#0891B2"/>
</svg>`,

  // 675. Grain Language
  "grain-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="graG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#graG)"/>
  <path d="M64 28 C74 48 84 62 84 76 C84 88 75 98 64 98 C53 98 44 88 44 76 C44 62 54 48 64 28 Z" fill="#FDE68A"/>
  <line x1="64" y1="36" x2="64" y2="92" stroke="#B45309" stroke-width="4"/>
</svg>`,

  // 676. Mojo
  "mojo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="moG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#moG)"/>
  <path d="M64 26 C42 50 36 70 46 88 C54 100 74 100 82 88 C92 70 86 50 64 26 Z" fill="#FFEDD5"/>
  <polygon points="64,54 74,74 54,74" fill="#C2410C"/>
</svg>`,

  // 677. Nim Language
  "nim-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nimG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#14532D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nimG)"/>
  <polygon points="64,28 98,58 84,96 44,96 30,58" fill="#FEF3C7"/>
  <polygon points="64,44 82,62 74,84 54,84 46,62" fill="#F59E0B"/>
</svg>`,

  // 678. Hylo
  "hylo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hylG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hylG)"/>
  <path d="M38 36 V92 M90 36 V92 M38 64 H90" stroke="#C7D2FE" stroke-width="10" stroke-linecap="round"/>
  <circle cx="64" cy="64" r="8" fill="#FFFFFF"/>
</svg>`,

  // 679. Val
  "val.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="vaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#vaG)"/>
  <path d="M36 38 L64 92 L92 38" fill="none" stroke="#93C5FD" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 680. Sorbet
  "sorbet.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sorG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#312E81"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sorG)"/>
  <circle cx="64" cy="50" r="22" fill="#E879F9"/>
  <polygon points="44,58 84,58 64,96" fill="#FDE68A"/>
</svg>`,

  // 681. Mypy
  "mypy.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mypG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mypG)"/>
  <path d="M34 90 V40 L50 64 L66 40 V90" stroke="#93C5FD" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M78 60 L90 76 L102 44" stroke="#67E8F9" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 682. Pyre
  "pyre.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pyrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pyrG)"/>
  <path d="M64 28 C50 48 42 66 50 84 C58 98 78 98 86 84 C94 66 84 48 64 28 Z" fill="#FCA5A5"/>
  <polygon points="56,92 64,74 72,92" fill="#EF4444"/>
</svg>`,

  // 683. Hack Type Checker
  "hack-type-checker.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hacG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hacG)"/>
  <path d="M38 34 V94 M90 34 V94 M38 64 H90" stroke="#7DD3FC" stroke-width="11" stroke-linecap="round"/>
  <polyline points="72,50 82,60 102,40" stroke="#38BDF8" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  // 684. Reason
  "reason.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="reaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#reaG)"/>
  <polygon points="64,30 96,88 32,88" fill="none" stroke="#FDBA74" stroke-width="9" stroke-linejoin="round"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" text-anchor="middle">R</text>
</svg>`,

  // 685. BuckleScript
  "bucklescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bucG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9F1239"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bucG)"/>
  <rect x="34" y="38" width="60" height="52" rx="10" fill="none" stroke="#FECDD3" stroke-width="8"/>
  <rect x="52" y="38" width="24" height="52" fill="#FB7185"/>
</svg>`,

  // 686. Melange
  "melange.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="melG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#melG)"/>
  <path d="M34 90 V40 L64 68 L94 40 V90" stroke="#FDE68A" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 687. Gren
  "gren.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="grnG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#grnG)"/>
  <polygon points="64,28 96,88 32,88" fill="#A7F3D0"/>
  <circle cx="64" cy="56" r="8" fill="#047857"/>
</svg>`,

  // 688. Derw
  "derw.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="derG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#derG)"/>
  <polygon points="64,30 92,54 80,90 48,90 36,54" fill="#DDD6FE"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-weight="900" font-size="28" fill="#5B21B6" text-anchor="middle">D</text>
</svg>`,

  // 689. Elm Review
  "elm-review.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="elmrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#134E4A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#elmrG)"/>
  <polygon points="64,32 94,64 64,96 34,64" fill="#99F6E4"/>
  <circle cx="64" cy="64" r="8" fill="#0F766E"/>
</svg>`,

  // 690. Idris Blodwen
  "idris-blodwen.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="idrbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#idrbG)"/>
  <polygon points="64,28 98,88 30,88" fill="none" stroke="#E9D5FF" stroke-width="8" stroke-linejoin="round"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#C084FC" text-anchor="middle">B</text>
</svg>`,

  // 691. Granule
  "granule.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="grauG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#grauG)"/>
  <circle cx="48" cy="48" r="10" fill="#94A3B8"/>
  <circle cx="78" cy="48" r="10" fill="#CBD5E1"/>
  <circle cx="48" cy="78" r="10" fill="#E2E8F0"/>
  <circle cx="78" cy="78" r="10" fill="#38BDF8"/>
</svg>`,

  // 692. Linear Haskell
  "linear-haskell.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lhG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5B21B6"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lhG)"/>
  <path d="M30 32 L54 64 L30 96 H44 L68 64 L44 32 Z" fill="#DDD6FE"/>
  <path d="M52 32 L76 64 L52 96 H66 L90 64 L66 32 Z" fill="#C4B5FD"/>
  <line x1="74" y1="64" x2="100" y2="64" stroke="#A78BFA" stroke-width="8"/>
</svg>`,

  // 693. Haskell GHCJS
  "haskell-ghcjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ghcjsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ghcjsG)"/>
  <path d="M30 34 L52 64 L30 94 H44 L66 64 L44 34 Z" fill="#C4B5FD"/>
  <rect x="74" y="58" width="24" height="24" rx="4" fill="#FDE047"/>
  <text x="86" y="76" font-family="'Poppins', sans-serif" font-weight="900" font-size="14" fill="#000000" text-anchor="middle">JS</text>
</svg>`,

  // 694. Eta JVM
  "eta-jvm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="etajG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#etajG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#5EEAD4" stroke-width="7"/>
  <text x="64" y="76" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#CCFBF1" text-anchor="middle">η</text>
</svg>`,

  // 695. Asterius
  "asterius.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="astG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#astG)"/>
  <polygon points="64,24 76,52 104,52 80,72 88,100 64,82 40,100 48,72 24,52 52,52" fill="#FDE68A"/>
  <circle cx="64" cy="64" r="10" fill="#B45309"/>
</svg>`,

  // 696. Mu
  "mu.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="muG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#292524"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#muG)"/>
  <text x="64" y="84" font-family="'Poppins', sans-serif" font-weight="900" font-size="64" fill="#FED7AA" text-anchor="middle">μ</text>
</svg>`,

  // 697. Hasura Actions
  "hasura-actions.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hasG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hasG)"/>
  <path d="M40 76 L64 36 L88 76" stroke="#A5F3FC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <polygon points="64,52 74,70 54,70" fill="#0891B2"/>
</svg>`,

  // 698. Prisma Schema
  "prisma-schema.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="priG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#priG)"/>
  <polygon points="64,24 96,88 78,102 38,76" fill="none" stroke="#5EEAD4" stroke-width="8" stroke-linejoin="round"/>
  <polygon points="64,40 84,80 48,70" fill="#2DD4BF"/>
</svg>`,

  // 699. Drizzle
  "drizzle.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="driG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#65A30D"/>
      <stop offset="100%" stop-color="#1A2E05"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#driG)"/>
  <path d="M42 42 L86 42 L52 86 L96 86" stroke="#BEF264" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 700. Sequelize
  "sequelize.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="seqG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#seqG)"/>
  <path d="M80 44 C76 38 68 34 58 34 C44 34 34 44 34 56 C34 76 94 62 94 82 C94 94 84 104 68 104 C56 104 46 98 42 90" stroke="#7DD3FC" stroke-width="10" stroke-linecap="round" fill="none"/>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content.trim(), 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content.trim(), 'utf8');
  count++;
}

console.log(`Generated and synced ${count} Section 13 vector SVG logos to both assets/logos/ and public/assets/logos/`);
