const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 551. Nashorn
  "nashorn.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nashG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nashG)"/>
  <path d="M36 88 C36 50 64 36 94 36 C80 50 82 72 96 88 Z" fill="#FCA5A5" opacity="0.3"/>
  <path d="M38 92 L38 36 L52 36 L76 72 L76 36 L90 36 L90 92 L76 92 L52 56 L52 92 Z" fill="#FFFFFF"/>
</svg>`,

  // 552. GraalJS
  "graaljs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="graalG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#graalG)"/>
  <polygon points="64,24 100,44 100,84 64,104 28,84 28,44" fill="none" stroke="#FDBA74" stroke-width="4"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" text-anchor="middle">JS</text>
</svg>`,

  // 553. QuickJS
  "quickjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="qjsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#qjsG)"/>
  <path d="M70 24 L38 68 L64 68 L58 104 L90 60 L64 60 Z" fill="#38BDF8"/>
  <text x="64" y="116" font-family="'Poppins', sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">QUICK</text>
</svg>`,

  // 554. Duktape
  "duktape.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dukG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dukG)"/>
  <circle cx="56" cy="52" r="22" fill="#FDE68A"/>
  <circle cx="62" cy="46" r="4" fill="#78350F"/>
  <path d="M68 52 C78 52 88 56 94 62 C88 66 78 66 68 64 Z" fill="#F59E0B"/>
  <path d="M34 68 C34 68 44 94 76 94 C96 94 104 82 104 82" fill="none" stroke="#FDE68A" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 555. JerryScript
  "jerryscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jerryG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jerryG)"/>
  <rect x="34" y="34" width="60" height="60" rx="14" fill="#1E40AF" stroke="#60A5FA" stroke-width="4"/>
  <text x="64" y="76" font-family="'Poppins', sans-serif" font-size="40" font-weight="800" fill="#93C5FD" text-anchor="middle">J</text>
</svg>`,

  // 556. Espruino
  "espruino.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="espG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#espG)"/>
  <rect x="36" y="36" width="56" height="56" rx="8" fill="#10B981" stroke="#A7F3D0" stroke-width="4"/>
  <circle cx="50" cy="50" r="5" fill="#FFFFFF"/>
  <circle cx="78" cy="50" r="5" fill="#FFFFFF"/>
  <circle cx="50" cy="78" r="5" fill="#FFFFFF"/>
  <circle cx="78" cy="78" r="5" fill="#FFFFFF"/>
  <path d="M64 42 L64 86" stroke="#064E3B" stroke-width="4"/>
  <path d="M42 64 L86 64" stroke="#064E3B" stroke-width="4"/>
</svg>`,

  // 557. Ecmascript
  "ecmascript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ecmaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CA8A04"/>
      <stop offset="100%" stop-color="#713F12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ecmaG)"/>
  <rect x="28" y="28" width="72" height="72" rx="10" fill="#FACC15"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="32" font-weight="800" fill="#713F12" text-anchor="middle">ES</text>
</svg>`,

  // 558. Flow
  "flow.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="flowG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#155E75"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#flowG)"/>
  <path d="M38 40 C60 40 68 88 90 88" stroke="#67E8F9" stroke-width="10" stroke-linecap="round" fill="none"/>
  <circle cx="38" cy="40" r="8" fill="#FFFFFF"/>
  <circle cx="90" cy="88" r="8" fill="#FFFFFF"/>
</svg>`,

  // 559. Dart 2
  "dart2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="dartG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#dartG)"/>
  <path d="M34 68 L64 34 L88 34 L48 88 Z" fill="#38BDF8"/>
  <path d="M64 94 L94 64 L94 44 L54 94 Z" fill="#0284C7"/>
  <text x="96" y="104" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#38BDF8">2</text>
</svg>`,

  // 560. Opa
  "opa.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="opaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#4C1D95"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#opaG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#C4B5FD" stroke-width="8"/>
  <path d="M64 32 L64 96" stroke="#EDE9FE" stroke-width="8" stroke-linecap="round"/>
</svg>`,

  // 561. Ur/Web
  "urweb.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="urG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#urG)"/>
  <path d="M38 42 L38 72 C38 84 48 92 60 92 C72 92 82 84 82 72 L82 42" stroke="#60A5FA" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M72 82 L94 42" stroke="#93C5FD" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 562. Links
  "links.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lnkG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#115E59"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lnkG)"/>
  <circle cx="48" cy="64" r="18" fill="none" stroke="#5EEAD4" stroke-width="7"/>
  <circle cx="80" cy="64" r="18" fill="none" stroke="#5EEAD4" stroke-width="7"/>
</svg>`,

  // 563. Eliom
  "eliom.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="eliG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#eliG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#FB923C" stroke-width="8"/>
  <circle cx="64" cy="64" r="12" fill="#FED7AA"/>
</svg>`,

  // 564. Haxe Language
  "haxe.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="hxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#hxG)"/>
  <path d="M42 34 L42 94 M86 34 L86 94 M42 64 L86 64" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
</svg>`,

  // 565. Kotlin JS
  "kotlinjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="kjsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#kjsG)"/>
  <polygon points="34,34 68,34 34,68" fill="#C084FC"/>
  <polygon points="34,68 68,34 94,34 34,94" fill="#A855F7"/>
  <text x="86" y="96" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" fill="#FDE047">JS</text>
</svg>`,

  // 566. Scala.js
  "scalajs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="scjsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#scjsG)"/>
  <path d="M38 40 C60 46 68 52 90 58 L90 70 C68 64 60 58 38 52 Z" fill="#FDA4AF"/>
  <path d="M38 62 C60 68 68 74 90 80 L90 92 C68 86 60 80 38 74 Z" fill="#FB7185"/>
</svg>`,

  // 567. Fable
  "fable.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="fabG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#fabG)"/>
  <polygon points="64,30 96,64 64,98 32,64" fill="#38BDF8"/>
  <polygon points="64,44 82,64 64,84 46,64" fill="#0C4A6E"/>
</svg>`,

  // 568. Bridge.NET
  "bridgenet.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="brdgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#brdgG)"/>
  <path d="M30 84 C48 48 80 48 98 84" stroke="#818CF8" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M30 88 H98" stroke="#C7D2FE" stroke-width="6"/>
</svg>`,

  // 569. Blazor
  "blazor.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="blzG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#512BD4"/>
      <stop offset="100%" stop-color="#1E1035"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#blzG)"/>
  <circle cx="64" cy="64" r="32" fill="#FFFFFF" opacity="0.1"/>
  <path d="M48 40 L72 40 C84 40 90 48 84 60 C80 66 74 68 74 68 C82 70 86 78 82 86 C78 92 68 92 56 92 L48 92 Z" fill="#A78BFA"/>
</svg>`,

  // 570. Razor
  "razor.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rzG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rzG)"/>
  <text x="64" y="82" font-family="'Poppins', sans-serif" font-size="58" font-weight="900" fill="#A5B4FC" text-anchor="middle">@</text>
</svg>`,

  // 571. ASP Classic
  "aspclassic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="aspG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#aspG)"/>
  <text x="64" y="62" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#E0F2FE" text-anchor="middle">ASP</text>
  <text x="64" y="86" font-family="'Poppins', sans-serif" font-size="16" font-weight="600" fill="#38BDF8" text-anchor="middle">CLASSIC</text>
</svg>`,

  // 572. ColdFusion
  "coldfusion.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#07253D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cfG)"/>
  <circle cx="50" cy="54" r="20" fill="none" stroke="#38BDF8" stroke-width="6"/>
  <circle cx="78" cy="74" r="20" fill="none" stroke="#7DD3FC" stroke-width="6"/>
</svg>`,

  // 573. CFML
  "cfml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cfmlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#081B30"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cfmlG)"/>
  <path d="M44 48 L28 64 L44 80" stroke="#38BDF8" stroke-width="7" stroke-linecap="round" fill="none"/>
  <path d="M84 48 L100 64 L84 80" stroke="#38BDF8" stroke-width="7" stroke-linecap="round" fill="none"/>
  <text x="64" y="72" font-family="'Poppins', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle">CF</text>
</svg>`,

  // 574. Lasso
  "lasso.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lasG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lasG)"/>
  <ellipse cx="64" cy="56" rx="34" ry="20" fill="none" stroke="#FDE68A" stroke-width="6" stroke-dasharray="8 4"/>
  <path d="M86 68 C80 96 50 96 36 84" stroke="#FBBF24" stroke-width="6" stroke-linecap="round" fill="none"/>
</svg>`,

  // 575. Zope
  "zope.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="zopeG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#zopeG)"/>
  <path d="M38 40 H88 L44 88 H90" stroke="#6EE7B7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 576. Server-side JavaScript
  "ssjs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ssjsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ssjsG)"/>
  <rect x="30" y="32" width="68" height="24" rx="6" fill="#3B82F6"/>
  <rect x="30" y="64" width="68" height="24" rx="6" fill="#2563EB"/>
  <circle cx="86" cy="44" r="3" fill="#93C5FD"/>
  <circle cx="86" cy="76" r="3" fill="#93C5FD"/>
  <text x="50" y="80" font-family="'Poppins', sans-serif" font-size="14" font-weight="800" fill="#FDE047">JS</text>
</svg>`,

  // 577. Mason
  "mason.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="masG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9A3412"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#masG)"/>
  <rect x="32" y="38" width="30" height="20" rx="3" fill="#FDBA74"/>
  <rect x="66" y="38" width="30" height="20" rx="3" fill="#FB923C"/>
  <rect x="48" y="62" width="32" height="20" rx="3" fill="#EA580C"/>
</svg>`,

  // 578. Embperl
  "embperl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="embG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#embG)"/>
  <circle cx="64" cy="64" r="28" fill="none" stroke="#FDE68A" stroke-width="6"/>
  <text x="64" y="72" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" fill="#FCD34D" text-anchor="middle">[- -]</text>
</svg>`,

  // 579. Tcl Websh
  "tcl-websh.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="tcwG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9F1239"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#tcwG)"/>
  <path d="M38 46 L90 46 M64 46 L64 92" stroke="#FDA4AF" stroke-width="10" stroke-linecap="round"/>
</svg>`,

  // 580. WebDNA
  "webdna.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="wdnaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#wdnaG)"/>
  <path d="M42 34 C58 50 70 78 86 94" stroke="#5EEAD4" stroke-width="6" stroke-linecap="round"/>
  <path d="M86 34 C70 50 58 78 42 94" stroke="#2DD4BF" stroke-width="6" stroke-linecap="round"/>
  <line x1="48" y1="46" x2="80" y2="46" stroke="#99F6E4" stroke-width="4"/>
  <line x1="56" y1="64" x2="72" y2="64" stroke="#99F6E4" stroke-width="4"/>
  <line x1="48" y1="82" x2="80" y2="82" stroke="#99F6E4" stroke-width="4"/>
</svg>`,

  // 581. Agda 2
  "agda2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="agdaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#agdaG)"/>
  <polygon points="64,30 96,88 32,88" fill="none" stroke="#86EFAC" stroke-width="8" stroke-linejoin="round"/>
  <circle cx="64" cy="56" r="6" fill="#FDE047"/>
</svg>`,

  // 582. Cedille
  "cedille.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cedG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cedG)"/>
  <path d="M82 46 C60 40 44 52 44 68 C44 84 60 94 82 88" stroke="#D8B4FE" stroke-width="9" stroke-linecap="round" fill="none"/>
  <path d="M64 92 C68 98 72 102 68 106 C64 110 58 106 58 106" stroke="#E9D5FF" stroke-width="5" stroke-linecap="round" fill="none"/>
</svg>`,

  // 583. Arend
  "arend.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="arndG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86198F"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#arndG)"/>
  <polygon points="64,32 94,92 34,92" fill="#E879F9"/>
  <polygon points="64,54 78,82 50,82" fill="#3B0764"/>
</svg>`,

  // 584. Zephyr
  "zephyr.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="zephG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#zephG)"/>
  <path d="M34 42 H94 L42 86 H94" stroke="#7DD3FC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="48" cy="64" r="5" fill="#FFFFFF"/>
</svg>`,

  // 585. Sail
  "sail.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="sailG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#sailG)"/>
  <path d="M60 28 L60 96 L98 96 Z" fill="#93C5FD"/>
  <path d="M52 44 L52 96 L32 96 Z" fill="#60A5FA"/>
  <line x1="28" y1="102" x2="100" y2="102" stroke="#BFDBFE" stroke-width="4" stroke-linecap="round"/>
</svg>`,

  // 586. P4
  "p4.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="p4G" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#p4G)"/>
  <circle cx="64" cy="64" r="34" fill="none" stroke="#60A5FA" stroke-width="5"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle">P4</text>
</svg>`,

  // 587. Rego
  "rego.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="regoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#134E4A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#regoG)"/>
  <path d="M64 28 L94 44 V76 L64 92 L34 76 V44 Z" fill="none" stroke="#5EEAD4" stroke-width="6"/>
  <polyline points="48,60 60,72 82,48" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 588. Cedar
  "cedar.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cedarG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cedarG)"/>
  <polygon points="64,28 84,52 74,52 90,74 76,74 94,94 34,94 52,74 38,74 54,52 44,52" fill="#86EFAC"/>
  <rect x="60" y="94" width="8" height="10" fill="#A16207"/>
</svg>`,

  // 589. CEL
  "cel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="celG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#celG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#93C5FD" stroke-width="6"/>
  <text x="64" y="73" font-family="'Poppins', sans-serif" font-size="24" font-weight="800" fill="#FFFFFF" text-anchor="middle">CEL</text>
</svg>`,

  // 590. Starlark Bazel
  "starlark-bazel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="stbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#stbG)"/>
  <polygon points="64,26 74,50 98,52 80,68 86,92 64,78 42,92 48,68 30,52 54,50" fill="#4ADE80"/>
</svg>`,

  // 591. Pkl
  "pkl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pklG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pklG)"/>
  <circle cx="50" cy="50" r="16" fill="#FDBA74"/>
  <circle cx="78" cy="50" r="16" fill="#FDBA74"/>
  <path d="M50 66 C50 82 78 82 78 66" stroke="#FED7AA" stroke-width="8" stroke-linecap="round" fill="none"/>
</svg>`,

  // 592. KCL
  "kcl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="kclG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#kclG)"/>
  <path d="M40 36 V92 M40 64 L84 36 M56 54 L88 92" stroke="#38BDF8" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 593. Nickel
  "nickel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nckG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nckG)"/>
  <circle cx="64" cy="64" r="34" fill="#94A3B8" stroke="#E2E8F0" stroke-width="4"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="34" font-weight="900" fill="#0F172A" text-anchor="middle">Ni</text>
</svg>`,

  // 594. Jsonnet Tanka
  "jsonnet-tanka.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jntG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jntG)"/>
  <path d="M50 36 C38 36 38 48 38 56 C38 62 30 64 30 64 C30 64 38 66 38 72 C38 80 38 92 50 92" stroke="#FDE68A" stroke-width="6" stroke-linecap="round" fill="none"/>
  <path d="M78 36 C90 36 90 48 90 56 C90 62 98 64 98 64 C98 64 90 66 90 72 C90 80 90 92 78 92" stroke="#FDE68A" stroke-width="6" stroke-linecap="round" fill="none"/>
  <circle cx="64" cy="64" r="6" fill="#F59E0B"/>
</svg>`,

  // 595. Terraform HCL2
  "terraform-hcl2.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="tfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5B21B6"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#tfG)"/>
  <polygon points="34,36 54,46 54,70 34,60" fill="#A78BFA"/>
  <polygon points="58,48 78,58 78,82 58,72" fill="#8B5CF6"/>
  <polygon points="58,24 78,34 78,46 58,36" fill="#C4B5FD"/>
  <polygon points="82,48 102,38 102,62 82,72" fill="#7C3AED"/>
</svg>`,

  // 596. Bicep
  "bicep.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bcpG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bcpG)"/>
  <path d="M42 86 C42 62 52 42 70 42 C82 42 90 52 86 64 C82 76 68 76 68 76 C80 76 86 86 82 92 C78 98 64 96 56 94" stroke="#60A5FA" stroke-width="8" stroke-linecap="round" fill="none"/>
</svg>`,

  // 597. Pulumi
  "pulumi.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pulG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pulG)"/>
  <polygon points="64,28 88,48 76,80 52,80 40,48" fill="#F43F5E"/>
  <polygon points="64,44 76,56 70,72 58,72 52,56" fill="#8B5CF6"/>
</svg>`,

  // 598. CloudFormation
  "cloudformation.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cfnG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cfnG)"/>
  <path d="M46 76 C38 76 34 70 34 62 C34 54 40 48 48 48 C50 40 58 34 68 34 C78 34 86 42 86 50 C92 50 96 56 96 62 C96 70 90 76 82 76 Z" fill="#FB923C"/>
  <circle cx="64" cy="88" r="5" fill="#FDBA74"/>
</svg>`,

  // 599. Ballerina Swan
  "ballerina-swan.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="balG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#balG)"/>
  <path d="M42 86 C42 66 60 48 80 40 C76 56 68 68 54 74 C74 74 88 80 88 90 C88 96 76 98 64 98 C48 98 42 92 42 86 Z" fill="#2DD4BF"/>
  <circle cx="82" cy="38" r="6" fill="#99F6E4"/>
</svg>`,

  // 600. Smithy
  "smithy.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="smiG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#smiG)"/>
  <path d="M36 44 H92 L84 62 H74 L78 86 H50 L54 62 H44 Z" fill="#F59E0B"/>
  <circle cx="64" cy="52" r="4" fill="#0F172A"/>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  const p1 = path.join(dir1, filename);
  const p2 = path.join(dir2, filename);
  fs.writeFileSync(p1, content.trim(), 'utf8');
  fs.writeFileSync(p2, content.trim(), 'utf8');
  count++;
}

console.log(`Generated and synced ${count} Section 11 vector SVG logos to both assets/logos/ and public/assets/logos/`);
