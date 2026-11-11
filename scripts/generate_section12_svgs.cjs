const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 601. Protocol Buffers
  "protobuf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pbG)"/>
  <rect x="34" y="34" width="26" height="26" rx="6" fill="#93C5FD"/>
  <rect x="68" y="34" width="26" height="26" rx="6" fill="#60A5FA"/>
  <rect x="34" y="68" width="26" height="26" rx="6" fill="#3B82F6"/>
  <rect x="68" y="68" width="26" height="26" rx="6" fill="#1D4ED8"/>
  <line x1="47" y1="60" x2="47" y2="68" stroke="#FFFFFF" stroke-width="4"/>
  <line x1="81" y1="60" x2="81" y2="68" stroke="#FFFFFF" stroke-width="4"/>
  <line x1="60" y1="47" x2="68" y2="47" stroke="#FFFFFF" stroke-width="4"/>
</svg>`,

  // 602. Thrift
  "thrift.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="thG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#thG)"/>
  <path d="M40 36 H88 M64 36 V94" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
  <circle cx="88" cy="80" r="10" fill="#FDBA74"/>
</svg>`,

  // 603. Avro IDL
  "avro-idl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="avG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#155E75"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#avG)"/>
  <polygon points="64,28 98,88 30,88" fill="none" stroke="#67E8F9" stroke-width="8" stroke-linejoin="round"/>
  <polygon points="64,48 82,82 46,82" fill="#E0F2FE"/>
</svg>`,

  // 604. Cap'n Proto
  "capnproto.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="capG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#capG)"/>
  <path d="M64 30 L88 56 H72 V82 H56 V56 H40 Z" fill="#38BDF8"/>
  <path d="M34 94 C48 86 80 86 94 94" stroke="#BAE6FD" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 605. FlatBuffers
  "flatbuffers.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="fbG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#115E59"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#fbG)"/>
  <rect x="32" y="38" width="64" height="14" rx="4" fill="#5EEAD4"/>
  <rect x="32" y="58" width="64" height="14" rx="4" fill="#2DD4BF"/>
  <rect x="32" y="78" width="64" height="14" rx="4" fill="#14B8A6"/>
</svg>`,

  // 606. OpenAPI
  "openapi.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oaG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#65A30D"/>
      <stop offset="100%" stop-color="#365314"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oaG)"/>
  <circle cx="64" cy="64" r="32" fill="none" stroke="#BEF264" stroke-width="8"/>
  <circle cx="64" cy="64" r="14" fill="#F7FEE7"/>
</svg>`,

  // 607. RAML
  "raml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ramlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ramlG)"/>
  <circle cx="64" cy="50" r="18" fill="none" stroke="#7DD3FC" stroke-width="6"/>
  <path d="M40 88 C40 74 52 68 64 68 C76 68 88 74 88 88" stroke="#38BDF8" stroke-width="6" fill="none" stroke-linecap="round"/>
</svg>`,

  // 608. WSDL
  "wsdl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="wsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#wsG)"/>
  <path d="M30 46 L44 84 L56 54 L68 84 L82 46" stroke="#93C5FD" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="96" y="84" font-family="'Poppins', sans-serif" font-size="18" font-weight="800" fill="#60A5FA">XML</text>
</svg>`,

  // 609. IDL
  "corba-idl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="idlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9F1239"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#idlG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="36" font-weight="900" fill="#FDA4AF" text-anchor="middle">IDL</text>
  <path d="M34 88 H94" stroke="#F43F5E" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 610. MIDL
  "midl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="midlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#081438"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#midlG)"/>
  <rect x="34" y="34" width="26" height="26" fill="#3B82F6"/>
  <rect x="68" y="34" width="26" height="26" fill="#60A5FA"/>
  <rect x="34" y="68" width="26" height="26" fill="#2563EB"/>
  <rect x="68" y="68" width="26" height="26" fill="#93C5FD"/>
</svg>`,

  // 611. ASN.1
  "asn1.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="asnG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#asnG)"/>
  <text x="64" y="66" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#E0E7FF" text-anchor="middle">ASN.1</text>
  <text x="64" y="90" font-family="'Poppins', sans-serif" font-size="14" font-weight="600" fill="#818CF8" text-anchor="middle">BER / DER</text>
</svg>`,

  // 612. ABNF
  "abnf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="abnfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#abnfG)"/>
  <text x="64" y="68" font-family="'Courier New', monospace" font-size="26" font-weight="900" fill="#F8FAFC" text-anchor="middle">::=</text>
  <text x="64" y="92" font-family="'Poppins', sans-serif" font-size="14" font-weight="700" fill="#94A3B8" text-anchor="middle">RFC 5234</text>
</svg>`,

  // 613. EBNF
  "ebnf.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ebnfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ebnfG)"/>
  <text x="64" y="64" font-family="'Poppins', sans-serif" font-size="30" font-weight="900" fill="#FDE68A" text-anchor="middle">{ EBNF }</text>
  <text x="64" y="88" font-family="'Poppins', sans-serif" font-size="13" font-weight="600" fill="#F59E0B" text-anchor="middle">ISO/IEC 14977</text>
</svg>`,

  // 614. ANTLR
  "antlr.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="antG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#antG)"/>
  <path d="M42 88 L64 34 L86 88 M50 72 H78" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="34" r="6" fill="#FDE047"/>
</svg>`,

  // 615. Yacc
  "yacc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="yaccG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#yaccG)"/>
  <path d="M38 38 L64 68 L90 38 M64 68 V92" stroke="#FEF3C7" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

  // 616. Bison
  "bison.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bisG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bisG)"/>
  <path d="M44 46 C34 46 30 58 34 74 C38 88 52 92 64 92 C76 92 90 88 94 74 C98 58 94 46 84 46" stroke="#93C5FD" stroke-width="8" fill="none"/>
  <circle cx="50" cy="62" r="4" fill="#FFFFFF"/>
  <circle cx="78" cy="62" r="4" fill="#FFFFFF"/>
</svg>`,

  // 617. Lex
  "lex.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="lexG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#92400E"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#lexG)"/>
  <path d="M42 36 V92 H86" stroke="#FDE68A" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 618. Flex
  "flex.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="flxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#115E59"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#flxG)"/>
  <path d="M40 36 H88 M40 60 H76 M40 36 V92" stroke="#5EEAD4" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 619. PEG
  "peg.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pegG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#4C1D95"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pegG)"/>
  <path d="M42 38 H70 C82 38 88 46 88 56 C88 66 82 74 70 74 H42 V92" stroke="#C4B5FD" stroke-width="8" stroke-linecap="round" fill="none"/>
</svg>`,

  // 620. Rascal
  "rascal.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="rasG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#rasG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#FDBA74" stroke-width="6"/>
  <path d="M52 52 L76 76 M76 52 L52 76" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
</svg>`,

  // 621. Spoofax
  "spoofax.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="spfG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#spfG)"/>
  <polygon points="64,28 94,54 82,90 46,90 34,54" fill="none" stroke="#7DD3FC" stroke-width="6"/>
  <circle cx="64" cy="62" r="8" fill="#FFFFFF"/>
</svg>`,

  // 622. Stratego
  "stratego.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="strG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4F46E5"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#strG)"/>
  <path d="M34 64 H94 M74 44 L94 64 L74 84" stroke="#818CF8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 623. TXL
  "txl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="txlG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#txlG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="34" font-weight="900" fill="#FCA5A5" text-anchor="middle">TXL</text>
  <path d="M34 86 H94" stroke="#EF4444" stroke-width="5" stroke-linecap="round"/>
</svg>`,

  // 624. Nearley
  "nearley.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="nearG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#nearG)"/>
  <path d="M38 90 V38 L72 74 V38 M90 38 V90" stroke="#6EE7B7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 625. Lark
  "lark.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="larkG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#larkG)"/>
  <path d="M38 78 C54 78 68 64 78 44 C84 56 94 62 98 64 C90 76 74 88 52 88 Z" fill="#86EFAC"/>
  <circle cx="78" cy="46" r="4" fill="#064E3B"/>
</svg>`,

  // 626. Ohm
  "ohm.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ohmG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ohmG)"/>
  <path d="M34 88 H50 C50 68 54 44 64 44 C74 44 78 68 78 88 H94" stroke="#D8B4FE" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`,

  // 627. Prolog SWI
  "swi-prolog.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="swiG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#swiG)"/>
  <circle cx="64" cy="56" r="22" fill="none" stroke="#38BDF8" stroke-width="6"/>
  <path d="M64 78 V96 M52 96 H76" stroke="#38BDF8" stroke-width="6" stroke-linecap="round"/>
  <circle cx="64" cy="56" r="6" fill="#FDE047"/>
</svg>`,

  // 628. Visual Prolog
  "visual-prolog.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="vpG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#vpG)"/>
  <polygon points="36,40 64,88 92,40" fill="none" stroke="#FB7185" stroke-width="8" stroke-linejoin="round"/>
  <rect x="56" y="32" width="16" height="16" rx="4" fill="#FDA4AF"/>
</svg>`,

  // 629. Logtalk
  "logtalk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ltG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ltG)"/>
  <circle cx="48" cy="56" r="14" fill="#60A5FA"/>
  <circle cx="80" cy="56" r="14" fill="#60A5FA"/>
  <circle cx="48" cy="56" r="5" fill="#0F172A"/>
  <circle cx="80" cy="56" r="5" fill="#0F172A"/>
  <polygon points="64,64 58,76 70,76" fill="#F59E0B"/>
</svg>`,

  // 630. Ciao
  "ciao.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ciaoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ciaoG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#FDE68A" stroke-width="7"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">C</text>
</svg>`,

  // 631. Picat
  "picat.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pctG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pctG)"/>
  <polygon points="40,46 54,32 60,50" fill="#C4B5FD"/>
  <polygon points="88,46 74,32 68,50" fill="#C4B5FD"/>
  <ellipse cx="64" cy="68" rx="28" ry="22" fill="#A78BFA"/>
  <circle cx="54" cy="64" r="4" fill="#1E1B4B"/>
  <circle cx="74" cy="64" r="4" fill="#1E1B4B"/>
</svg>`,

  // 632. Answer Set Programming
  "asp-logic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="asplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#asplG)"/>
  <text x="64" y="66" font-family="'Poppins', sans-serif" font-size="30" font-weight="900" fill="#C7D2FE" text-anchor="middle">ASP</text>
  <text x="64" y="90" font-family="'Courier New', monospace" font-size="16" font-weight="700" fill="#818CF8" text-anchor="middle">:- not fail.</text>
</svg>`,

  // 633. Clingo
  "clingo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="clgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#clgG)"/>
  <path d="M84 48 C60 38 42 54 42 70 C42 86 60 98 84 88" stroke="#FED7AA" stroke-width="10" stroke-linecap="round" fill="none"/>
  <circle cx="78" cy="68" r="6" fill="#F97316"/>
</svg>`,

  // 634. MiniZinc
  "minizinc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="mzG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#mzG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="34" font-weight="900" fill="#E0F2FE" text-anchor="middle">mZn</text>
  <line x1="34" y1="88" x2="94" y2="88" stroke="#38BDF8" stroke-width="4"/>
</svg>`,

  // 635. Essence
  "essence.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="essG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C3AED"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#essG)"/>
  <polygon points="64,28 92,64 64,100 36,64" fill="#C4B5FD"/>
  <polygon points="64,42 80,64 64,86 48,64" fill="#3B0764"/>
</svg>`,

  // 636. OPL
  "opl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="oplG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#022D74"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#oplG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="36" font-weight="900" fill="#93C5FD" text-anchor="middle">OPL</text>
  <text x="64" y="96" font-family="'Poppins', sans-serif" font-size="12" font-weight="700" fill="#60A5FA" text-anchor="middle">IBM CPLEX</text>
</svg>`,

  // 637. AMPL
  "ampl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="ampG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#ampG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="32" font-weight="900" fill="#FCA5A5" text-anchor="middle">AMPL</text>
  <polyline points="36,88 54,82 72,86 92,78" fill="none" stroke="#F87171" stroke-width="4"/>
</svg>`,

  // 638. GAMS
  "gams.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="gamG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#gamG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="32" font-weight="900" fill="#E0F2FE" text-anchor="middle">GAMS</text>
  <circle cx="64" cy="92" r="5" fill="#38BDF8"/>
</svg>`,

  // 639. AIMMS
  "aimms.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="aimG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#aimG)"/>
  <circle cx="64" cy="64" r="30" fill="none" stroke="#FDBA74" stroke-width="6"/>
  <circle cx="64" cy="64" r="12" fill="#FFFFFF"/>
</svg>`,

  // 640. LINGO
  "lingo-opt.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="linG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#linG)"/>
  <text x="64" y="72" font-family="'Poppins', sans-serif" font-size="28" font-weight="900" fill="#A7F3D0" text-anchor="middle">LINGO</text>
  <path d="M34 86 H94" stroke="#34D399" stroke-width="4"/>
</svg>`,

  // 641. Pyomo
  "pyomo.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pyoG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pyoG)"/>
  <path d="M40 44 C40 34 52 34 64 34 H72 V50 H56 C48 50 40 54 40 64 Z" fill="#86EFAC"/>
  <path d="M88 84 C88 94 76 94 64 94 H56 V78 H72 C80 78 88 74 88 64 Z" fill="#BBF7D0"/>
</svg>`,

  // 642. JuMP
  "jump.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jmpG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jmpG)"/>
  <circle cx="50" cy="46" r="10" fill="#EF4444"/>
  <circle cx="78" cy="46" r="10" fill="#22C55E"/>
  <circle cx="64" cy="74" r="10" fill="#3B82F6"/>
  <path d="M50 46 L78 46 L64 74 Z" fill="none" stroke="#E9D5FF" stroke-width="4"/>
</svg>`,

  // 643. CVX
  "cvx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="cvxG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#881337"/>
      <stop offset="100%" stop-color="#311B92"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#cvxG)"/>
  <path d="M34 40 C44 80 84 80 94 40" stroke="#F472B6" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="64" cy="70" r="6" fill="#FDE047"/>
</svg>`,

  // 644. Stan
  "stan.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="stanG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#stanG)"/>
  <path d="M46 90 V48 C46 36 82 36 82 48 V90" stroke="#FCA5A5" stroke-width="12" stroke-linecap="round" fill="none"/>
</svg>`,

  // 645. BUGS
  "bugs.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bugG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#bugG)"/>
  <ellipse cx="64" cy="64" rx="22" ry="28" fill="#5EEAD4"/>
  <line x1="64" y1="36" x2="64" y2="92" stroke="#042F2E" stroke-width="4"/>
  <circle cx="56" cy="48" r="3" fill="#042F2E"/>
  <circle cx="72" cy="48" r="3" fill="#042F2E"/>
</svg>`,

  // 646. JAGS
  "jags.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="jagG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0C4A6E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#jagG)"/>
  <text x="64" y="74" font-family="'Poppins', sans-serif" font-size="30" font-weight="900" fill="#BAE6FD" text-anchor="middle">JAGS</text>
  <circle cx="64" cy="92" r="5" fill="#38BDF8"/>
</svg>`,

  // 647. PyMC
  "pymc.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pmcG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0891B2"/>
      <stop offset="100%" stop-color="#164E63"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pmcG)"/>
  <path d="M30 84 C46 84 54 36 64 36 C74 36 82 84 98 84" stroke="#67E8F9" stroke-width="7" stroke-linecap="round" fill="none"/>
  <circle cx="64" cy="36" r="6" fill="#FDE047"/>
</svg>`,

  // 648. Turing.jl
  "turing-jl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="turG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4338CA"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#turG)"/>
  <rect x="36" y="44" width="56" height="40" rx="8" fill="none" stroke="#A5B4FC" stroke-width="6"/>
  <circle cx="52" cy="64" r="5" fill="#818CF8"/>
  <circle cx="76" cy="64" r="5" fill="#818CF8"/>
</svg>`,

  // 649. Pyro
  "pyro.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="pyrG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#7C2D12"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#pyrG)"/>
  <path d="M64 28 C64 28 44 54 44 72 C44 86 52 94 64 94 C76 94 84 86 84 72 C84 54 64 28 64 28 Z" fill="#FDBA74"/>
  <path d="M64 56 C64 56 54 68 54 78 C54 84 58 88 64 88 C70 88 74 84 74 78 C74 68 64 56 64 56 Z" fill="#EA580C"/>
</svg>`,

  // 650. Church
  "church.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="chuG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#151139"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#chuG)"/>
  <path d="M42 90 L60 38 L86 90 M54 72 L76 72" stroke="#C7D2FE" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="54" r="6" fill="#FDE047"/>
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

console.log(`Generated and synced ${count} Section 12 vector SVG logos to both assets/logos/ and public/assets/logos/`);
