const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 701. Ecto
  "ecto.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ectG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#1E0B2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ectG)"/>
  <path d="M64 28 C50 48 42 66 50 84 C58 98 78 98 86 84 C94 66 84 48 64 28 Z" fill="#DDD6FE"/>
  <circle cx="64" cy="74" r="10" fill="#4B275F"/>
</svg>`,

  // 702. Active Record
  "active-record.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="arG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CC0000"/>
      <stop offset="100%" stop-color="#500000"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#arG)"/>
  <rect x="34" y="38" width="60" height="18" rx="5" fill="#FFFFFF"/>
  <rect x="34" y="62" width="60" height="18" rx="5" fill="#FECDD3"/>
  <rect x="34" y="86" width="60" height="18" rx="5" fill="#FFE4E6"/>
</svg>`,

  // 703. LINQ
  "linq.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="linqG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#512BD4"/>
      <stop offset="100%" stop-color="#1E1058"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#linqG)"/>
  <path d="M36 36 V92 H64 M72 48 L88 64 L72 80 M88 64 H64" stroke="#E0E7FF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 704. Entity SQL
  "entity-sql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="esqlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0078D4"/>
      <stop offset="100%" stop-color="#0A2540"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#esqlG)"/>
  <polygon points="64,28 96,48 96,80 64,100 32,80 32,48" fill="none" stroke="#BAE6FD" stroke-width="8" stroke-linejoin="round"/>
  <line x1="32" y1="48" x2="64" y2="68" stroke="#BAE6FD" stroke-width="6"/>
  <line x1="96" y1="48" x2="64" y2="68" stroke="#BAE6FD" stroke-width="6"/>
  <line x1="64" y1="100" x2="64" y2="68" stroke="#BAE6FD" stroke-width="6"/>
</svg>`,

  // 705. HQL
  "hql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hqlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#42340E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hqlG)"/>
  <path d="M42 36 V92 M86 36 V92 M42 64 H86" stroke="#FDE68A" stroke-width="11" stroke-linecap="round"/>
  <circle cx="64" cy="44" r="6" fill="#F59E0B"/>
</svg>`,

  // 706. JPQL
  "jpql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jpqlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA2D2E"/>
      <stop offset="100%" stop-color="#5E0808"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jpqlG)"/>
  <ellipse cx="64" cy="46" rx="28" ry="12" fill="none" stroke="#FECDD3" stroke-width="6"/>
  <path d="M36 46 V80 C36 88 50 94 64 94 C78 94 92 88 92 80 V46" fill="none" stroke="#FECDD3" stroke-width="6"/>
  <line x1="36" y1="63" x2="92" y2="63" stroke="#FECDD3" stroke-width="4"/>
</svg>`,

  // 707. OQL
  "oql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oqlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oqlG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#99F6E4" stroke-width="9"/>
  <line x1="82" y1="82" x2="96" y2="96" stroke="#99F6E4" stroke-width="10" stroke-linecap="round"/>
</svg>`,

  // 708. DMX
  "dmx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dmxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dmxG)"/>
  <circle cx="44" cy="44" r="10" fill="#FDE68A"/>
  <circle cx="84" cy="44" r="10" fill="#FDE68A"/>
  <circle cx="64" cy="84" r="10" fill="#FDE68A"/>
  <line x1="44" y1="44" x2="64" y2="84" stroke="#FEF3C7" stroke-width="5"/>
  <line x1="84" y1="44" x2="64" y2="84" stroke="#FEF3C7" stroke-width="5"/>
</svg>`,

  // 709. MDX
  "mdx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mdxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mdxG)"/>
  <polygon points="64,26 96,44 96,82 64,100 32,82 32,44" fill="none" stroke="#BAE6FD" stroke-width="7" stroke-linejoin="round"/>
  <line x1="32" y1="44" x2="64" y2="62" stroke="#BAE6FD" stroke-width="5"/>
  <line x1="96" y1="44" x2="64" y2="62" stroke="#BAE6FD" stroke-width="5"/>
  <line x1="64" y1="100" x2="64" y2="62" stroke="#BAE6FD" stroke-width="5"/>
</svg>`,

  // 710. DAX
  "dax.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="daxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#543D02"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#daxG)"/>
  <rect x="36" y="64" width="14" height="32" rx="4" fill="#FEF08A"/>
  <rect x="57" y="44" width="14" height="52" rx="4" fill="#FEF08A"/>
  <rect x="78" y="30" width="14" height="66" rx="4" fill="#FEF08A"/>
</svg>`,

  // 711. M Language
  "m-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mlanG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mlanG)"/>
  <path d="M34 92 V36 L64 68 L94 36 V92" stroke="#99F6E4" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 712. Power Fx
  "power-fx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pfxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pfxG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-weight="900" font-size="44" fill="#E9D5FF" text-anchor="middle">fx</text>
</svg>`,

  // 713. Excel Formulas
  "excel-formulas.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="excG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#107C41"/>
      <stop offset="100%" stop-color="#06381C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#excG)"/>
  <rect x="34" y="34" width="60" height="60" rx="8" fill="none" stroke="#BBF7D0" stroke-width="6"/>
  <line x1="34" y1="54" x2="94" y2="54" stroke="#BBF7D0" stroke-width="4"/>
  <line x1="34" y1="74" x2="94" y2="74" stroke="#BBF7D0" stroke-width="4"/>
  <line x1="58" y1="34" x2="58" y2="94" stroke="#BBF7D0" stroke-width="4"/>
</svg>`,

  // 714. Google Apps Script
  "google-apps-script.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gasG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A73E8"/>
      <stop offset="100%" stop-color="#0D3A78"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gasG)"/>
  <path d="M48 46 L34 64 L48 82 M80 46 L94 64 L80 82 M68 40 L60 88" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 715. Lotus Script
  "lotus-script.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lotG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lotG)"/>
  <circle cx="64" cy="54" r="16" fill="#FDE68A"/>
  <path d="M38 88 Q64 54 90 88" fill="#F59E0B"/>
</svg>`,

  // 716. Visual FoxPro
  "visual-foxpro.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="vfpG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#vfpG)"/>
  <polygon points="64,28 88,64 74,96 54,96 40,64" fill="#FED7AA"/>
  <polygon points="64,48 76,68 52,68" fill="#EA580C"/>
</svg>`,

  // 717. FoxPro
  "foxpro.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="foxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#foxG)"/>
  <polygon points="36,44 64,28 92,44 80,94 48,94" fill="#FDBA74"/>
  <circle cx="64" cy="62" r="8" fill="#7C2D12"/>
</svg>`,

  // 718. dBASE
  "dbase.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dbaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dbaG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#FDE68A" text-anchor="middle">dBASE</text>
</svg>`,

  // 719. Clipper
  "clipper.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="clipG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#clipG)"/>
  <path d="M40 76 L64 32 L88 76 Z" fill="#BAE6FD"/>
  <path d="M32 86 C50 82 78 82 96 86" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 720. Harbour
  "harbour.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="harbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#harbG)"/>
  <circle cx="64" cy="46" r="14" fill="#BAE6FD"/>
  <path d="M64 60 V94 M44 76 H84" stroke="#BAE6FD" stroke-width="7" stroke-linecap="round"/>
</svg>`,

  // 721. xBase
  "xbase.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="xbaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#xbaG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-weight="900" font-size="44" fill="#E2E8F0" text-anchor="middle">xB</text>
</svg>`,

  // 722. Progress 4GL
  "progress-4gl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="p4glG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#p4glG)"/>
  <polygon points="40,36 88,64 40,92" fill="#A7F3D0"/>
</svg>`,

  // 723. OpenEdge ABL
  "openedge-abl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oeG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oeG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#BBF7D0" stroke-width="8"/>
  <circle cx="64" cy="64" r="14" fill="#BBF7D0"/>
</svg>`,

  // 724. Informix 4GL
  "informix-4gl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="infG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#infG)"/>
  <rect x="42" y="36" width="44" height="56" rx="8" fill="#93C5FD"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-weight="900" font-size="28" fill="#1E3A8A" text-anchor="middle">4G</text>
</svg>`,

  // 725. PowerBuilder
  "powerbuilder.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pbldG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9F1239"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pbldG)"/>
  <polygon points="64,30 96,88 32,88" fill="#FECDD3"/>
  <polygon points="64,54 80,82 48,82" fill="#BE123C"/>
</svg>`,

  // 726. PowerScript
  "powerscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pscrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6B21A8"/>
      <stop offset="100%" stop-color="#2E0854"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pscrG)"/>
  <path d="M42 36 H74 C86 36 92 46 86 58 C80 70 68 70 56 70 H42 V94 M42 70 H64" stroke="#E9D5FF" stroke-width="8" stroke-linecap="round" fill="none"/>
</svg>`,

  // 727. Gupta SQLWindows
  "gupta-sqlwindows.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gupG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gupG)"/>
  <rect x="36" y="36" width="56" height="56" rx="6" fill="none" stroke="#93C5FD" stroke-width="6"/>
  <line x1="36" y1="64" x2="92" y2="64" stroke="#93C5FD" stroke-width="4"/>
  <line x1="64" y1="36" x2="64" y2="92" stroke="#93C5FD" stroke-width="4"/>
</svg>`,

  // 728. Centura
  "centura.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cenG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#081438"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cenG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#60A5FA" stroke-width="8"/>
  <polygon points="64,40 84,76 44,76" fill="#93C5FD"/>
</svg>`,

  // 729. Magic
  "magic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="magG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#magG)"/>
  <polygon points="64,26 74,52 102,52 80,68 88,96 64,80 40,96 48,68 26,52 54,52" fill="#E9D5FF"/>
</svg>`,

  // 730. Uniface
  "uniface.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="uniG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#uniG)"/>
  <path d="M42 36 V68 C42 82 52 92 64 92 C76 92 86 82 86 68 V36" stroke="#BAE6FD" stroke-width="10" stroke-linecap="round" fill="none"/>
</svg>`,

  // 731. Natural
  "natural.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="natG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#natG)"/>
  <path d="M40 92 V36 L88 92 V36" stroke="#E0F2FE" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 732. Adabas
  "adabas.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="adaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0B132B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#adaG)"/>
  <ellipse cx="64" cy="46" rx="28" ry="12" fill="#60A5FA"/>
  <ellipse cx="64" cy="66" rx="28" ry="12" fill="#3B82F6"/>
  <ellipse cx="64" cy="86" rx="28" ry="12" fill="#2563EB"/>
</svg>`,

  // 733. MUMPS Caché
  "mumps-cache.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mumG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#0C2340"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mumG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#67E8F9" stroke-width="8"/>
  <rect x="52" y="52" width="24" height="24" rx="4" fill="#A5F3FC"/>
</svg>`,

  // 734. ObjectScript
  "objectscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="objscG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0A1C40"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#objscG)"/>
  <circle cx="64" cy="64" r="28" fill="none" stroke="#93C5FD" stroke-width="7"/>
  <path d="M50 78 C44 70 44 58 52 50 C60 42 72 44 78 52" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" fill="none"/>
</svg>`,

  // 735. Pick BASIC
  "pick-basic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pbaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#381E05"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pbaG)"/>
  <path d="M42 36 H68 C80 36 86 44 86 54 C86 64 78 70 66 70 H42 V94" stroke="#FDE68A" stroke-width="9" stroke-linecap="round" fill="none"/>
</svg>`,

  // 736. UniBasic
  "unibasic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="unibG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#unibG)"/>
  <path d="M44 36 V68 C44 80 52 90 64 90 C76 90 84 80 84 68 V36" stroke="#FED7AA" stroke-width="10" stroke-linecap="round" fill="none"/>
</svg>`,

  // 737. Business Basic
  "business-basic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bbaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bbaG)"/>
  <rect x="36" y="44" width="56" height="48" rx="8" fill="#86EFAC"/>
  <path d="M52 44 V36 C52 30 56 28 64 28 C72 28 76 30 76 36 V44" fill="none" stroke="#86EFAC" stroke-width="6"/>
</svg>`,

  // 738. DIBOL
  "dibol.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dibG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dibG)"/>
  <path d="M42 36 H64 C80 36 90 48 90 64 C90 80 80 92 64 92 H42 V36 Z" fill="none" stroke="#93C5FD" stroke-width="9"/>
</svg>`,

  // 739. DataFlex
  "dataflex.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dfxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dfxG)"/>
  <polygon points="64,30 94,54 84,92 44,92 34,54" fill="#FCA5A5"/>
</svg>`,

  // 740. Clarion
  "clarion.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="claG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#claG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#FDE68A" stroke-width="8"/>
  <polygon points="56,48 78,64 56,80" fill="#FDE68A"/>
</svg>`,

  // 741. PL/pgSQL
  "plpgsql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="plpgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#336791"/>
      <stop offset="100%" stop-color="#16324F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#plpgG)"/>
  <circle cx="64" cy="54" r="22" fill="#BAE6FD"/>
  <path d="M48 68 C48 84 56 94 64 94 C72 94 80 84 80 68" fill="#336791"/>
</svg>`,

  // 742. MySQL Stored Procedures
  "mysql-stored-procedures.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="myspG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00758F"/>
      <stop offset="100%" stop-color="#022938"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#myspG)"/>
  <path d="M36 68 C36 46 54 36 74 36 C86 36 94 42 94 42 C94 42 84 52 74 52 C60 52 54 62 54 74 C54 84 64 90 76 90" stroke="#7DD3FC" stroke-width="7" stroke-linecap="round" fill="none"/>
</svg>`,

  // 743. SQLite SQL
  "sqlite-sql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sqlitG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#072B3D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sqlitG)"/>
  <path d="M38 78 C42 86 52 92 64 92 C78 92 90 84 90 70 C90 54 74 50 64 46 C54 42 42 38 42 28 C42 18 52 12 64 12 C74 12 84 18 88 26" stroke="#BAE6FD" stroke-width="8" stroke-linecap="round" fill="none" transform="translate(0, 14)"/>
</svg>`,

  // 744. SQL PL
  "sql-pl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sqlplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0043CE"/>
      <stop offset="100%" stop-color="#051A4D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sqlplG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#A6C8FF" text-anchor="middle">SQL/PL</text>
</svg>`,

  // 745. Transact-SQL Extended
  "transact-sql-extended.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="tsqlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CC292B"/>
      <stop offset="100%" stop-color="#4A0E0F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#tsqlG)"/>
  <path d="M38 36 H90 M64 36 V92" stroke="#FCA5A5" stroke-width="11" stroke-linecap="round"/>
</svg>`,

  // 746. Oracle Forms
  "oracle-forms.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oformG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C74634"/>
      <stop offset="100%" stop-color="#4A150F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oformG)"/>
  <rect x="34" y="34" width="60" height="60" rx="8" fill="none" stroke="#FECDD3" stroke-width="7"/>
  <rect x="44" y="46" width="40" height="12" rx="3" fill="#FECDD3"/>
  <rect x="44" y="66" width="24" height="12" rx="3" fill="#FECDD3"/>
</svg>`,

  // 747. Oracle Reports
  "oracle-reports.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="orepG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#orepG)"/>
  <rect x="38" y="30" width="52" height="68" rx="6" fill="#FDE68A"/>
  <line x1="48" y1="46" x2="80" y2="46" stroke="#B45309" stroke-width="5"/>
  <line x1="48" y1="60" x2="80" y2="60" stroke="#B45309" stroke-width="5"/>
  <line x1="48" y1="74" x2="68" y2="74" stroke="#B45309" stroke-width="5"/>
</svg>`,

  // 748. Oracle Pro*C
  "oracle-proc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oprocG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#380B0B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oprocG)"/>
  <text x="64" y="78" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#FCA5A5" text-anchor="middle">Pro*C</text>
</svg>`,

  // 749. Embedded SQL
  "embedded-sql.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="esqlstdG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#esqlstdG)"/>
  <path d="M42 46 L28 64 L42 82 M86 46 L100 64 L86 82" stroke="#CBD5E1" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="52" y="48" width="24" height="32" rx="4" fill="#38BDF8"/>
</svg>`,

  // 750. SQLJ
  "sqlj.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sqljG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#291802"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sqljG)"/>
  <text x="64" y="80" font-family="'Poppins', sans-serif" font-weight="900" font-size="36" fill="#FDE68A" text-anchor="middle">SQLJ</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content.trim(), 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content.trim(), 'utf8');
  count++;
}

console.log(`Generated and synced ${count} Section 14 vector SVG logos to both assets/logos/ and public/assets/logos/`);
