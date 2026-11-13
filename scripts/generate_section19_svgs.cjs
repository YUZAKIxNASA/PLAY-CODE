const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

function makeSvg(id, c1, c2, badge, label, symbolSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs><linearGradient id="g${id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
  <rect width="128" height="128" rx="28" fill="url(#g${id})"/>
  ${symbolSvg}
  <text x="64" y="109" font-family="system-ui, sans-serif" font-size="${label.length > 10 ? 11 : label.length > 7 ? 13 : 15}" font-weight="900" fill="${badge}" text-anchor="middle">${label}</text>
</svg>`;
}

const specs = [
  // 901. A# (A sharp)
  [901, 'a-sharp.svg', '#1D4ED8', '#091945', '#DBEAFE', 'A# (.NET)',
    `<rect x="26" y="24" width="76" height="60" rx="14" fill="#1E3A8A" stroke="#93C5FD" stroke-width="3"/>
     <text x="64" y="64" font-family="monospace" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">A#</text>`],
  // 902. A-0 System
  [902, 'a0-system.svg', '#7C2D12', '#2E0F05', '#FED7AA', 'A-0 SYSTEM',
    `<circle cx="48" cy="52" r="18" fill="none" stroke="#FDBA74" stroke-width="4"/>
     <circle cx="80" cy="52" r="18" fill="none" stroke="#FDBA74" stroke-width="4"/>
     <line x1="48" y1="34" x2="80" y2="34" stroke="#FB923C" stroke-width="3"/>
     <text x="64" y="57" font-family="monospace" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">A-0</text>`],
  // 903. ABC
  [903, 'abc-lang.svg', '#0F766E', '#042F2E', '#CCFBF1', 'ABC',
    `<rect x="24" y="24" width="24" height="54" rx="6" fill="#14B8A6"/>
     <rect x="52" y="24" width="24" height="54" rx="6" fill="#2DD4BF"/>
     <rect x="80" y="24" width="24" height="54" rx="6" fill="#5EEAD4"/>
     <text x="36" y="59" font-family="sans-serif" font-size="20" font-weight="900" fill="#042F2E" text-anchor="middle">A</text>
     <text x="64" y="59" font-family="sans-serif" font-size="20" font-weight="900" fill="#042F2E" text-anchor="middle">B</text>
     <text x="92" y="59" font-family="sans-serif" font-size="20" font-weight="900" fill="#042F2E" text-anchor="middle">C</text>`],
  // 904. ACC
  [904, 'acc-compiler.svg', '#334155', '#0F172A', '#E2E8F0', 'ACC 386',
    `<rect x="26" y="24" width="76" height="58" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
     <text x="64" y="61" font-family="monospace" font-size="24" font-weight="900" fill="#38BDF8" text-anchor="middle">ACC</text>`],
  // 905. Accent
  [905, 'accent-grammar.svg', '#6D28D9', '#2E1065', '#EDE9FE', 'ACCENT',
    `<polygon points="64,22 98,52 64,82 30,52" fill="#7C3AED" stroke="#DDD6FE" stroke-width="3"/>
     <text x="64" y="59" font-family="monospace" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">CFG</text>`],
  // 906. Action!
  [906, 'action-atari.svg', '#B91C1C', '#450A0A', '#FEE2E2', 'ACTION!',
    `<polygon points="44,24 92,54 44,84" fill="#EF4444" stroke="#FFFFFF" stroke-width="3"/>
     <text x="61" y="61" font-family="sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">!</text>`],
  // 907. Actor
  [907, 'actor-lang.svg', '#0369A1', '#08283F', '#E0F2FE', 'ACTOR',
    `<rect x="24" y="24" width="80" height="58" rx="8" fill="#0284C7" stroke="#BAE6FD" stroke-width="3"/>
     <line x1="24" y1="38" x2="104" y2="38" stroke="#BAE6FD" stroke-width="2.5"/>
     <text x="64" y="67" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">OOP</text>`],
  // 908. Adenine
  [908, 'adenine.svg', '#9D174D', '#4C0519', '#FCE7F3', 'ADENINE',
    `<circle cx="42" cy="40" r="10" fill="#F472B6"/>
     <circle cx="86" cy="40" r="10" fill="#F472B6"/>
     <circle cx="64" cy="74" r="12" fill="#FBCFE8"/>
     <line x1="48" y1="46" x2="58" y2="66" stroke="#FFFFFF" stroke-width="3"/>
     <line x1="80" y1="46" x2="70" y2="66" stroke="#FFFFFF" stroke-width="3"/>
     <line x1="52" y1="40" x2="76" y2="40" stroke="#FFFFFF" stroke-width="3"/>`],
  // 909. AdvPL
  [909, 'advpl.svg', '#0E7490', '#062C37', '#CFFAFE', 'ADVPL',
    `<rect x="26" y="24" width="76" height="58" rx="12" fill="#0891B2" stroke="#A5F3FC" stroke-width="3"/>
     <text x="64" y="61" font-family="sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">ERP</text>`],
  // 910. Agilent VEE
  [910, 'agilent-vee.svg', '#1E40AF', '#091747', '#DBEAFE', 'AGILENT VEE',
    `<rect x="22" y="34" width="26" height="32" rx="6" fill="#60A5FA"/>
     <rect x="80" y="34" width="26" height="32" rx="6" fill="#38BDF8"/>
     <path d="M48 50 L80 50" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="5,3"/>
     <polygon points="72,43 82,50 72,57" fill="#FFFFFF"/>`],
  // 911. Agora
  [911, 'agora-lang.svg', '#B45309', '#451A03', '#FEF3C7', 'AGORA',
    `<circle cx="64" cy="53" r="28" fill="none" stroke="#FBBF24" stroke-width="4"/>
     <path d="M48 53 L80 53 M64 37 L64 69" stroke="#FDE68A" stroke-width="3.5" stroke-linecap="round"/>`],
  // 912. ALF
  [912, 'alf-lang.svg', '#5B21B6', '#22094A', '#EDE9FE', 'ALF',
    `<text x="44" y="65" font-family="serif" font-size="34" font-weight="900" fill="#C4B5FD" text-anchor="middle">λ</text>
     <text x="82" y="65" font-family="monospace" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">⊢</text>`],
  // 913. ALGOL 58
  [913, 'algol58.svg', '#1E3A8A', '#0A163D', '#DBEAFE', 'ALGOL 58',
    `<rect x="26" y="24" width="76" height="58" rx="12" fill="#1D4ED8" stroke="#93C5FD" stroke-width="3"/>
     <text x="64" y="62" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">IAL58</text>`],
  // 914. ALGOL W
  [914, 'algol-w.svg', '#3730A3', '#17144D', '#E0E7FF', 'ALGOL W',
    `<polygon points="64,22 98,42 98,74 64,86 30,74 30,42" fill="#4338CA" stroke="#A5B4FC" stroke-width="3"/>
     <text x="64" y="63" font-family="serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">W</text>`],
  // 915. Alma-0
  [915, 'alma-0.svg', '#15803D', '#052E16', '#DCFCE7', 'ALMA-0',
    `<path d="M34 72 L52 30 L70 72 M40 58 L64 58" stroke="#86EFAC" stroke-width="5" fill="none" stroke-linecap="round"/>
     <circle cx="88" cy="54" r="12" fill="none" stroke="#FFFFFF" stroke-width="4"/>`],
  // 916. AmbientTalk
  [916, 'ambienttalk.svg', '#0284C7', '#072A45', '#E0F2FE', 'AMBIENTTALK',
    `<circle cx="64" cy="55" r="10" fill="#FFFFFF"/>
     <circle cx="64" cy="55" r="22" fill="none" stroke="#7DD3FC" stroke-width="3" stroke-dasharray="8,6"/>
     <circle cx="64" cy="55" r="33" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="10,8"/>`],
  // 917. Amiga E
  [917, 'amiga-e.svg', '#9F1239', '#3E0718', '#FFE4E6', 'AMIGA E',
    `<path d="M28 74 L48 30 L64 60 L80 30 L100 74" stroke="#FDA4AF" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
     <text x="64" y="84" font-family="monospace" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">E</text>`],
  // 918. Analitik
  [918, 'analitik.svg', '#991B1B', '#3B0A0A', '#FEE2E2', 'ANALITIK',
    `<text x="64" y="66" font-family="serif" font-size="38" font-weight="900" fill="#FCA5A5" text-anchor="middle">∫</text>
     <text x="86" y="56" font-family="monospace" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">dx</text>`],
  // 919. APT
  [919, 'apt-cam.svg', '#475569', '#0F172A', '#F1F5F9', 'APT CNC',
    `<circle cx="64" cy="54" r="24" fill="none" stroke="#94A3B8" stroke-width="6" stroke-dasharray="9,5"/>
     <circle cx="64" cy="54" r="9" fill="#38BDF8"/>`],
  // 920. ArkTS
  [920, 'arkts.svg', '#1D4ED8', '#081845', '#DBEAFE', 'ARKTS',
    `<path d="M30 68 C42 32, 86 32, 98 68" stroke="#60A5FA" stroke-width="6" fill="none" stroke-linecap="round"/>
     <text x="64" y="72" font-family="sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">TS</text>`],
  // 921. ARexx
  [921, 'arexx.svg', '#C2410C', '#431407', '#FFEDD5', 'AREXX',
    `<rect x="26" y="26" width="76" height="56" rx="12" fill="#EA580C" stroke="#FED7AA" stroke-width="3"/>
     <text x="64" y="61" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">REXX</text>`],
  // 922. Argus
  [922, 'argus-lang.svg', '#4338CA', '#1E1B4B', '#E0E7FF', 'ARGUS',
    `<polygon points="64,22 96,44 84,80 44,80 32,44" fill="#4F46E5" stroke="#C7D2FE" stroke-width="3"/>
     <circle cx="64" cy="54" r="10" fill="#FFFFFF"/>`],
  // 923. AutoLISP
  [923, 'autolisp-923.svg', '#BE123C', '#4C0519', '#FFE4E6', 'AUTOLISP',
    `<polygon points="40,78 64,26 88,78 72,78 64,58 56,78" fill="#FB7185" stroke="#FFFFFF" stroke-width="2"/>`],
  // 924. Averest
  [924, 'averest.svg', '#047857', '#022C22', '#D1FAE5', 'AVEREST',
    `<path d="M26 68 L48 30 L64 60 L82 26 L102 68" stroke="#6EE7B7" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
     <circle cx="82" cy="26" r="5" fill="#FFFFFF"/>`],
  // 925. Axum
  [925, 'axum-lang.svg', '#6B21A8', '#2A0845', '#F3E8FF', 'AXUM',
    `<rect x="24" y="34" width="24" height="36" rx="6" fill="#A855F7"/>
     <rect x="80" y="34" width="24" height="36" rx="6" fill="#C084FC"/>
     <path d="M48 52 L80 52" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>`],
  // 926. C--
  [926, 'c-minus-minus.svg', '#1E293B', '#090D16', '#E2E8F0', 'C--',
    `<rect x="24" y="24" width="80" height="58" rx="14" fill="#334155" stroke="#94A3B8" stroke-width="3"/>
     <text x="64" y="62" font-family="monospace" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">C--</text>`],
  // 927. C*
  [927, 'c-star.svg', '#0369A1', '#072236', '#E0F2FE', 'C*',
    `<rect x="24" y="24" width="80" height="58" rx="14" fill="#0284C7" stroke="#BAE6FD" stroke-width="3"/>
     <text x="64" y="64" font-family="monospace" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">C*</text>`],
  // 928. C/AL
  [928, 'c-al.svg', '#0F766E', '#042926', '#CCFBF1', 'C/AL',
    `<rect x="24" y="24" width="80" height="58" rx="12" fill="#0D9488" stroke="#99F6E4" stroke-width="3"/>
     <text x="64" y="61" font-family="monospace" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">C/AL</text>`],
  // 929. Calcpad
  [929, 'calcpad.svg', '#1E40AF', '#0B1A4A', '#DBEAFE', 'CALCPAD',
    `<rect x="30" y="22" width="68" height="62" rx="10" fill="#2563EB" stroke="#BFDBFE" stroke-width="3"/>
     <text x="64" y="62" font-family="serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">fx</text>`],
  // 930. Catrobat
  [930, 'catrobat.svg', '#B45309', '#421B03', '#FEF3C7', 'CATROBAT',
    `<rect x="28" y="28" width="72" height="22" rx="8" fill="#F59E0B"/>
     <rect x="36" y="54" width="64" height="22" rx="8" fill="#FBBF24"/>`],
  // 931. CESIL
  [931, 'cesil.svg', '#374151', '#111827', '#F3F4F6', 'CESIL',
    `<rect x="26" y="24" width="76" height="58" rx="10" fill="#1F2937" stroke="#9CA3AF" stroke-width="3"/>
     <text x="64" y="61" font-family="monospace" font-size="20" font-weight="900" fill="#FDE047" text-anchor="middle">IN/OUT</text>`],
  // 932. CEEMAC
  [932, 'ceemac.svg', '#7E22CE', '#350B5C', '#F3E8FF', 'CEEMAC',
    `<rect x="26" y="26" width="22" height="52" rx="4" fill="#F472B6"/>
     <rect x="53" y="26" width="22" height="52" rx="4" fill="#38BDF8"/>
     <rect x="80" y="26" width="22" height="52" rx="4" fill="#4ADE80"/>`],
  // 933. Céu
  [933, 'ceu.svg', '#059669', '#022C22', '#D1FAE5', 'CÉU',
    `<circle cx="64" cy="53" r="26" fill="#10B981" stroke="#A7F3D0" stroke-width="3"/>
     <path d="M52 53 L62 63 L78 43" stroke="#FFFFFF" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`],
  // 934. CFEngine
  [934, 'cfengine.svg', '#9A3412', '#3D1306', '#FFEDD5', 'CFENGINE',
    `<polygon points="64,22 96,38 90,74 64,86 38,74 32,38" fill="#C2410C" stroke="#FDBA74" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">CF</text>`],
  // 935. Ch
  [935, 'ch-lang.svg', '#1D4ED8', '#0A1D52', '#DBEAFE', 'CH C/C++',
    `<rect x="26" y="24" width="76" height="58" rx="14" fill="#2563EB" stroke="#93C5FD" stroke-width="3"/>
     <text x="64" y="64" font-family="monospace" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">Ch</text>`],
  // 936. Charm
  [936, 'charm-lang.svg', '#0E7490', '#062633', '#CFFAFE', 'CHARM',
    `<polygon points="64,22 98,53 64,84 30,53" fill="#06B6D4" stroke="#FFFFFF" stroke-width="3"/>
     <text x="64" y="59" font-family="sans-serif" font-size="18" font-weight="900" fill="#042F2E" text-anchor="middle">CHM</text>`],
  // 937. CHILL
  [937, 'chill-lang.svg', '#1E3A8A', '#091336', '#DBEAFE', 'CHILL',
    `<path d="M34 54 L94 54 M44 36 L84 72 M84 36 L44 72" stroke="#93C5FD" stroke-width="5" stroke-linecap="round"/>
     <circle cx="64" cy="54" r="10" fill="#FFFFFF"/>`],
  // 938. CHIP-8
  [938, 'chip-8.svg', '#334155', '#0B0F1A', '#E2E8F0', 'CHIP-8',
    `<rect x="26" y="24" width="76" height="56" rx="8" fill="#0F172A" stroke="#4ADE80" stroke-width="3"/>
     <rect x="38" y="36" width="12" height="12" fill="#4ADE80"/>
     <rect x="58" y="48" width="12" height="12" fill="#4ADE80"/>
     <rect x="78" y="36" width="12" height="12" fill="#4ADE80"/>`],
  // 939. ChucK
  [939, 'chuck-lang.svg', '#15803D', '#052E16', '#DCFCE7', 'CHUCK',
    `<path d="M24 54 Q38 30 50 54 T76 54 T102 54" stroke="#4ADE80" stroke-width="5" fill="none" stroke-linecap="round"/>
     <text x="64" y="80" font-family="monospace" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">=&gt;</text>`],
  // 940. Claire
  [940, 'claire-lang.svg', '#5B21B6', '#240E4A', '#EDE9FE', 'CLAIRE',
    `<circle cx="64" cy="53" r="26" fill="none" stroke="#C4B5FD" stroke-width="4"/>
     <text x="64" y="61" font-family="serif" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">Cl</text>`],
  // 941. CLIPS
  [941, 'clips-lang.svg', '#0F766E', '#042F2E', '#CCFBF1', 'CLIPS',
    `<circle cx="44" cy="40" r="10" fill="#5EEAD4"/>
     <circle cx="84" cy="40" r="10" fill="#5EEAD4"/>
     <circle cx="64" cy="70" r="12" fill="#FFFFFF"/>
     <path d="M44 48 L60 62 M84 48 L68 62" stroke="#99F6E4" stroke-width="3.5"/>`],
  // 942. CLIST
  [942, 'clist.svg', '#1E40AF', '#0C1D54', '#DBEAFE', 'CLIST',
    `<rect x="24" y="24" width="80" height="58" rx="10" fill="#1E3A8A" stroke="#93C5FD" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">&amp;TSO</text>`],
  // 943. CLU
  [943, 'clu-lang.svg', '#9F1239', '#3B0716', '#FFE4E6', 'CLU',
    `<rect x="28" y="26" width="72" height="54" rx="14" fill="#BE123C" stroke="#FDA4AF" stroke-width="3"/>
     <text x="64" y="61" font-family="monospace" font-size="24" font-weight="900" fill="#FFFFFF" text-anchor="middle">CLU</text>`],
  // 944. CMS-2
  [944, 'cms-2.svg', '#334155', '#0F172A', '#E2E8F0', 'CMS-2',
    `<polygon points="64,22 96,42 86,78 42,78 32,42" fill="#475569" stroke="#CBD5E1" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">CMS2</text>`],
  // 945. CobolScript
  [945, 'cobolscript.svg', '#0369A1', '#07273E', '#E0F2FE', 'COBOLSCRIPT',
    `<rect x="24" y="24" width="80" height="58" rx="10" fill="#0284C7" stroke="#BAE6FD" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">CBL+</text>`],
  // 946. COMAL
  [946, 'comal.svg', '#B45309', '#451A03', '#FEF3C7', 'COMAL',
    `<rect x="26" y="24" width="76" height="58" rx="12" fill="#D97706" stroke="#FDE68A" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">PROC</text>`],
  // 947. COMIT
  [947, 'comit.svg', '#6D28D9', '#2E1065', '#EDE9FE', 'COMIT',
    `<text x="64" y="58" font-family="monospace" font-size="22" font-weight="900" fill="#DDD6FE" text-anchor="middle">A+B=C</text>
     <line x1="28" y1="72" x2="100" y2="72" stroke="#FFFFFF" stroke-width="3"/>`],
  // 948. COMPASS
  [948, 'compass-asm.svg', '#374151', '#111827', '#E5E7EB', 'COMPASS',
    `<circle cx="64" cy="53" r="25" fill="none" stroke="#9CA3AF" stroke-width="3"/>
     <polygon points="64,26 70,53 64,80 58,53" fill="#38BDF8"/>`],
  // 949. COMTRAN
  [949, 'comtran.svg', '#1E3A8A', '#09163B', '#DBEAFE', 'COMTRAN',
    `<rect x="24" y="24" width="80" height="58" rx="10" fill="#1D4ED8" stroke="#93C5FD" stroke-width="3"/>
     <text x="64" y="60" font-family="monospace" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">1957</text>`],
  // 950. Constraint Handling Rules
  [950, 'chr-lang.svg', '#7C3AED', '#2E1065', '#EDE9FE', 'CHR RULES',
    `<text x="64" y="54" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">&lt;=&gt;</text>
     <text x="64" y="76" font-family="monospace" font-size="18" font-weight="900" fill="#C4B5FD" text-anchor="middle">==&gt;</text>`]
];

specs.forEach(([id, file, c1, c2, badge, label, sym]) => {
  const xml = makeSvg(id, c1, c2, badge, label, sym);
  fs.writeFileSync(path.join(dir1, file), xml, 'utf8');
  fs.writeFileSync(path.join(dir2, file), xml, 'utf8');
});

console.log(`Generated ${specs.length} Section 19 (901-950) SVG logos identically in assets/logos/ and public/assets/logos/.`);
