const fs = require('fs');
const path = require('path');

const dir1 = path.resolve(__dirname, '../assets/logos');
const dir2 = path.resolve(__dirname, '../public/assets/logos');

if (!fs.existsSync(dir1)) fs.mkdirSync(dir1, { recursive: true });
if (!fs.existsSync(dir2)) fs.mkdirSync(dir2, { recursive: true });

const svgs = {
  // 851. Ladder Diagram - Industrial PLC Rails & Rungs (Teal)
  "ladder-diagram.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g851" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#042F2E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g851)"/>
  <line x1="28" y1="26" x2="28" y2="88" stroke="#5EEAD4" stroke-width="6" stroke-linecap="round"/>
  <line x1="100" y1="26" x2="100" y2="88" stroke="#5EEAD4" stroke-width="6" stroke-linecap="round"/>
  <line x1="28" y1="44" x2="48" y2="44" stroke="#FDE047" stroke-width="4"/>
  <line x1="48" y1="34" x2="48" y2="54" stroke="#FDE047" stroke-width="4"/>
  <line x1="60" y1="34" x2="60" y2="54" stroke="#FDE047" stroke-width="4"/>
  <line x1="60" y1="44" x2="80" y2="44" stroke="#FDE047" stroke-width="4"/>
  <circle cx="88" cy="44" r="8" stroke="#FFFFFF" stroke-width="4" fill="none"/>
  <line x1="28" y1="70" x2="76" y2="70" stroke="#99F6E4" stroke-width="4"/>
  <rect x="76" y="62" width="16" height="16" rx="3" stroke="#99F6E4" stroke-width="3" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#CCFBF1" text-anchor="middle">LADDER</text>
</svg>`,

  // 852. Ring Language - Berry Rose Interlocking Ring
  "ring-language.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g852" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9D174D"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g852)"/>
  <circle cx="64" cy="54" r="26" stroke="#F9A8D4" stroke-width="8" fill="none"/>
  <circle cx="64" cy="54" r="14" stroke="#FFFFFF" stroke-width="4" fill="none"/>
  <circle cx="84" cy="36" r="6" fill="#FDE047"/>
  <text x="64" y="108" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FCE7F3" text-anchor="middle">RING LANG</text>
</svg>`,

  // 853. Wolfram Alpha Query - Spikey Polyhedron (Crimson Orange)
  "wolfram-alpha-query.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g853" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#431407"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g853)"/>
  <polygon points="64,20 73,42 96,35 81,55 98,72 74,73 64,95 54,73 30,72 47,55 32,35 55,42" fill="#FB923C" stroke="#FFFFFF" stroke-width="2.5"/>
  <circle cx="64" cy="57" r="8" fill="#FFF7ED"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FFEDD5" text-anchor="middle">WOLFRAM</text>
</svg>`,

  // 854. Eiffel Language - Steel Tower Silhouette (Cobalt Steel)
  "eiffel-lang.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g854" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g854)"/>
  <path d="M64 20 L58 50 L48 76 L34 90 H50 L54 78 H74 L78 90 H94 L80 76 L70 50 Z" fill="#93C5FD" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="48" y1="62" x2="80" y2="62" stroke="#1E3A8A" stroke-width="4"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">EIFFEL</text>
</svg>`,

  // 855. SmartEiffel - Fast Compiler Bolt + Tower (Cobalt)
  "smarteiffel.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g855" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#172554"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g855)"/>
  <path d="M50 24 L42 64 H60 L54 92 L82 52 H62 L70 24 Z" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#E0F2FE" text-anchor="middle">SMARTEIFFEL</text>
</svg>`,

  // 856. Ruby on Rails DSL - Track & Ruby Jewel (Crimson Red)
  "ruby-on-rails-dsl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g856" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g856)"/>
  <path d="M32 88 C36 52, 60 32, 92 32" stroke="#FCA5A5" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M50 88 C52 60, 70 46, 94 46" stroke="#FFFFFF" stroke-width="5" fill="none" stroke-linecap="round"/>
  <polygon points="84,64 98,74 84,88 70,74" fill="#EF4444" stroke="#FFFFFF" stroke-width="2"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEE2E2" text-anchor="middle">RAILS DSL</text>
</svg>`,

  // 857. RSpec - Spec Check & Ruby Diamond (Rose Crimson)
  "rspec.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g857" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BE123C"/>
      <stop offset="100%" stop-color="#4C0519"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g857)"/>
  <circle cx="64" cy="54" r="28" fill="#9F1239" stroke="#FDA4AF" stroke-width="4"/>
  <path d="M48 54 L59 65 L82 42" stroke="#4ADE80" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFE4E6" text-anchor="middle">RSPEC</text>
</svg>`,

  // 858. Gherkin - Given/When/Then Green Leaf (Pickle Green)
  "gherkin.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g858" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g858)"/>
  <rect x="30" y="28" width="68" height="14" rx="4" fill="#86EFAC"/>
  <rect x="30" y="48" width="68" height="14" rx="4" fill="#4ADE80"/>
  <rect x="30" y="68" width="68" height="14" rx="4" fill="#22C55E"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DCFCE7" text-anchor="middle">GHERKIN</text>
</svg>`,

  // 859. Cucumber - BDD Speech Bubble & Check (Emerald Green)
  "cucumber.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g859" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#022C22"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g859)"/>
  <path d="M36 32 H92 A12 12 0 0 1 104 44 V72 A12 12 0 0 1 92 84 H60 L44 96 V84 H36 A12 12 0 0 1 24 72 V44 A12 12 0 0 1 36 32 Z" fill="#10B981" stroke="#FFFFFF" stroke-width="3"/>
  <path d="M48 58 L59 69 L82 46" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="114" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#D1FAE5" text-anchor="middle">CUCUMBER</text>
</svg>`,

  // 860. Robot Framework - Bot Head Icon (Cyan-Teal)
  "robot-framework.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g860" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E7490"/>
      <stop offset="100%" stop-color="#083344"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g860)"/>
  <line x1="64" y1="22" x2="64" y2="34" stroke="#67E8F9" stroke-width="5" stroke-linecap="round"/>
  <circle cx="64" cy="20" r="5" fill="#FDE047"/>
  <rect x="34" y="34" width="60" height="48" rx="12" fill="#06B6D4" stroke="#FFFFFF" stroke-width="3"/>
  <circle cx="50" cy="54" r="6" fill="#083344"/>
  <circle cx="78" cy="54" r="6" fill="#083344"/>
  <rect x="48" y="68" width="32" height="5" rx="2.5" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#CFFAFE" text-anchor="middle">ROBOT FW</text>
</svg>`,

  // 861. TTCN-3 - Telecom Protocol Nodes (ETSI Navy)
  "ttcn-3.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g861" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#091336"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g861)"/>
  <circle cx="38" cy="40" r="10" fill="#60A5FA" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="90" cy="40" r="10" fill="#60A5FA" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="64" cy="76" r="12" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2"/>
  <line x1="46" y1="46" x2="58" y2="66" stroke="#93C5FD" stroke-width="4"/>
  <line x1="82" y1="46" x2="70" y2="66" stroke="#93C5FD" stroke-width="4"/>
  <line x1="48" y1="40" x2="80" y2="40" stroke="#93C5FD" stroke-width="3" stroke-dasharray="4 3"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">TTCN-3</text>
</svg>`,

  // 862. Sikuli Script - Computer Vision Eye / Target (Amber Gold)
  "sikuli-script.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#451A03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g862)"/>
  <path d="M24 56 Q64 24 104 56 Q64 88 24 56 Z" fill="#FDE68A" stroke="#FFFFFF" stroke-width="3"/>
  <circle cx="64" cy="56" r="14" fill="#92400E"/>
  <circle cx="64" cy="56" r="6" fill="#FBBF24"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FEF3C7" text-anchor="middle">SIKULI</text>
</svg>`,

  // 863. Selenese - Selenium Se + Checkmark (Selenium Green)
  "selenese.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g863" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/>
      <stop offset="100%" stop-color="#052E16"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g863)"/>
  <rect x="28" y="26" width="72" height="60" rx="10" fill="#14532D" stroke="#86EFAC" stroke-width="3"/>
  <text x="52" y="66" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">Se</text>
  <path d="M68 58 L76 66 L92 48" stroke="#4ADE80" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DCFCE7" text-anchor="middle">SELENESE</text>
</svg>`,

  // 864. Applescript Objective - Scroll + Cocoa Bridge (Indigo Slate)
  "applescript-objective.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g864" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#1E1B4B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g864)"/>
  <rect x="34" y="26" width="60" height="60" rx="10" fill="#4F46E5" stroke="#C7D2FE" stroke-width="3"/>
  <text x="64" y="64" font-family="monospace" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">ASObjC</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#E0E7FF" text-anchor="middle">APPLESCRIPT OC</text>
</svg>`,

  // 865. JavaScript for Automation - JXA Automation Gear (Amber Slate)
  "javascript-for-automation.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g865" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A16207"/>
      <stop offset="100%" stop-color="#3B1E08"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g865)"/>
  <circle cx="64" cy="54" r="24" stroke="#FACC15" stroke-width="8" stroke-dasharray="10 6" fill="none"/>
  <circle cx="64" cy="54" r="14" fill="#FEF08A"/>
  <text x="64" y="60" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#422006" text-anchor="middle">JXA</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEF9C3" text-anchor="middle">JS AUTOMATION</text>
</svg>`,

  // 866. Swift Playgrounds - Swift Bird in Flame Orange
  "swift-playgrounds.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g866" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#4A1405"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g866)"/>
  <path d="M88 32 C76 48, 58 58, 36 46 C52 60, 62 64, 34 62 C56 76, 74 74, 88 86 C94 74, 94 52, 88 32 Z" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFEDD5" text-anchor="middle">PLAYGROUNDS</text>
</svg>`,

  // 867. SwiftUI - Apple Blue Layered Swift Silhouette (Royal Sapphire)
  "swiftui.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g867" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0A1D4D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g867)"/>
  <rect x="28" y="24" width="72" height="62" rx="14" fill="#2563EB" stroke="#93C5FD" stroke-width="2.5"/>
  <path d="M84 36 C74 50, 58 58, 40 48 C54 60, 62 63, 38 62 C58 74, 74 72, 84 82 C90 70, 90 52, 84 36 Z" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">SWIFTUI</text>
</svg>`,

  // 868. Jetpack Compose - Declarative Layers & Android Emerald
  "jetpack-compose.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g868" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="100%" stop-color="#06281E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g868)"/>
  <polygon points="64,22 92,38 92,70 64,86 36,70 36,38" fill="#10B981" stroke="#FFFFFF" stroke-width="2.5"/>
  <polygon points="64,34 80,44 80,64 64,74 48,64 48,44" fill="#064E3B"/>
  <circle cx="64" cy="54" r="6" fill="#6EE7B7"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#D1FAE5" text-anchor="middle">COMPOSE</text>
</svg>`,

  // 869. Kotlin Multiplatform - Kotlin Ribbon (Violet)
  "kotlin-multiplatform.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g869" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6D28D9"/>
      <stop offset="100%" stop-color="#2E1065"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g869)"/>
  <polygon points="36,28 92,28 64,56 92,84 36,84" fill="#A78BFA" stroke="#FFFFFF" stroke-width="2"/>
  <polygon points="36,28 64,56 36,84" fill="#7C3AED"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#EDE9FE" text-anchor="middle">KOTLIN KMP</text>
</svg>`,

  // 870. Flutter Dart - Flutter Winged F (Sky Blue)
  "flutter-dart.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g870" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g870)"/>
  <polygon points="68,22 36,54 46,64 88,22" fill="#7DD3FC"/>
  <polygon points="68,52 50,70 60,80 88,52" fill="#38BDF8"/>
  <polygon points="60,80 70,90 88,90 70,70" fill="#0EA5E9"/>
  <text x="64" y="112" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0F2FE" text-anchor="middle">FLUTTER DART</text>
</svg>`,

  // 871. React Native - Atom Orbit Rings (Cyan)
  "react-native.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g871" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E7490"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g871)"/>
  <ellipse cx="64" cy="54" rx="34" ry="13" stroke="#67E8F9" stroke-width="3.5" fill="none"/>
  <ellipse cx="64" cy="54" rx="34" ry="13" transform="rotate(60 64 54)" stroke="#67E8F9" stroke-width="3.5" fill="none"/>
  <ellipse cx="64" cy="54" rx="34" ry="13" transform="rotate(120 64 54)" stroke="#67E8F9" stroke-width="3.5" fill="none"/>
  <circle cx="64" cy="54" r="6" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#CFFAFE" text-anchor="middle">REACT NATIVE</text>
</svg>`,

  // 872. NativeScript - NS Emblem Shield (Cobalt Blue)
  "nativescript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g872" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="100%" stop-color="#0F2557"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g872)"/>
  <rect x="34" y="26" width="60" height="58" rx="14" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" text-anchor="middle">NS</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#DBEAFE" text-anchor="middle">NATIVESCRIPT</text>
</svg>`,

  // 873. Xamarin - Hexagon X Emblem (Hex Blue)
  "xamarin.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g873" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0D1B4C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g873)"/>
  <polygon points="44,26 84,26 102,56 84,86 44,86 26,56" fill="#3B82F6" stroke="#FFFFFF" stroke-width="2.5"/>
  <path d="M50 42 L78 70 M78 42 L50 70" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DBEAFE" text-anchor="middle">XAMARIN</text>
</svg>`,

  // 874. MAUI - Multi-platform .NET Purple Badge
  "maui.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g874" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5B21B6"/>
      <stop offset="100%" stop-color="#240E4A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g874)"/>
  <rect x="28" y="26" width="72" height="58" rx="14" fill="#7C3AED" stroke="#DDD6FE" stroke-width="2.5"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle">.NET</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#EDE9FE" text-anchor="middle">MAUI</text>
</svg>`,

  // 875. Ionic - Orbit Circle & Dot (Electric Blue)
  "ionic.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g875" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0B1F54"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g875)"/>
  <circle cx="64" cy="54" r="28" stroke="#93C5FD" stroke-width="4" fill="none"/>
  <circle cx="64" cy="54" r="14" fill="#FFFFFF"/>
  <circle cx="88" cy="34" r="6" fill="#60A5FA" stroke="#FFFFFF" stroke-width="2"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#DBEAFE" text-anchor="middle">IONIC</text>
</svg>`,

  // 876. Cordova - Apache Cordova Robot Cube (Steel Slate)
  "cordova.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g876" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g876)"/>
  <polygon points="36,30 92,30 100,80 28,80" fill="#475569" stroke="#CBD5E1" stroke-width="3"/>
  <rect x="44" y="42" width="40" height="28" rx="4" fill="#0F172A"/>
  <circle cx="54" cy="56" r="4" fill="#38BDF8"/>
  <circle cx="74" cy="56" r="4" fill="#38BDF8"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E2E8F0" text-anchor="middle">CORDOVA</text>
</svg>`,

  // 877. Capacitor - Parallel Plates Icon (Sky Cyan)
  "capacitor.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g877" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#07273E"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g877)"/>
  <polygon points="36,38 92,26 92,42 36,54" fill="#7DD3FC"/>
  <polygon points="36,64 92,52 92,68 36,80" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">CAPACITOR</text>
</svg>`,

  // 878. Tauri - Twin Orbiting Neutrinos (Amber-Teal)
  "tauri.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g878" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#062E2A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g878)"/>
  <path d="M38 56 A26 26 0 0 1 82 36" stroke="#FACC15" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M90 54 A26 26 0 0 1 46 74" stroke="#38BDF8" stroke-width="8" stroke-linecap="round" fill="none"/>
  <circle cx="52" cy="48" r="6" fill="#FACC15"/>
  <circle cx="76" cy="60" r="6" fill="#38BDF8"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#CCFBF1" text-anchor="middle">TAURI</text>
</svg>`,

  // 879. Electron - Atom Nucleus (Orbit Teal)
  "electron.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g879" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E7490"/>
      <stop offset="100%" stop-color="#082633"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g879)"/>
  <circle cx="64" cy="54" r="28" stroke="#99F6E4" stroke-width="3" fill="none"/>
  <ellipse cx="64" cy="54" rx="34" ry="12" transform="rotate(45 64 54)" stroke="#5EEAD4" stroke-width="3.5" fill="none"/>
  <ellipse cx="64" cy="54" rx="34" ry="12" transform="rotate(-45 64 54)" stroke="#5EEAD4" stroke-width="3.5" fill="none"/>
  <circle cx="64" cy="54" r="6" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#CFFAFE" text-anchor="middle">ELECTRON</text>
</svg>`,

  // 880. Qt QML - Qt Rounded Emblem (Forest Green)
  "qt-qml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g880" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#15803D"/>
      <stop offset="100%" stop-color="#072D15"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g880)"/>
  <polygon points="34,26 98,26 98,74 84,86 30,86 30,40" fill="#22C55E" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" text-anchor="middle">QML</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DCFCE7" text-anchor="middle">QT QML</text>
</svg>`,

  // 881. QtScript - Qt Green JS Engine Badge (Olive Emerald)
  "qtscript.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g881" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#166534"/>
      <stop offset="100%" stop-color="#062411"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g881)"/>
  <polygon points="34,26 98,26 98,74 84,86 30,86 30,40" fill="#15803D" stroke="#86EFAC" stroke-width="2.5"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle">Qt</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#DCFCE7" text-anchor="middle">QTSCRIPT</text>
</svg>`,

  // 882. GTK Vala - Vala V + GTK Cube (Violet Indigo)
  "gtk-vala.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g882" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#502496"/>
      <stop offset="100%" stop-color="#27104D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g882)"/>
  <path d="M36 28 L64 84 L92 28" stroke="#C4B5FD" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <circle cx="64" cy="40" r="8" fill="#4ADE80"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#EDE9FE" text-anchor="middle">GTK VALA</text>
</svg>`,

  // 883. Tk - Tcl/Tk Feather Widget (Crimson Rose)
  "tk.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g883" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9F1239"/>
      <stop offset="100%" stop-color="#3E0718"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g883)"/>
  <path d="M34 78 C40 44, 68 24, 96 26 C88 52, 68 72, 34 78 Z" fill="#FB7185" stroke="#FFFFFF" stroke-width="2.5"/>
  <line x1="34" y1="78" x2="88" y2="32" stroke="#FFFFFF" stroke-width="3"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFE4E6" text-anchor="middle">TK GUI</text>
</svg>`,

  // 884. wxPython - Colored GUI Blocks (Ocean Blue)
  "wxpython.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g884" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E40AF"/>
      <stop offset="100%" stop-color="#0C1D54"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g884)"/>
  <rect x="30" y="28" width="30" height="24" rx="5" fill="#FACC15"/>
  <rect x="68" y="28" width="30" height="24" rx="5" fill="#EF4444"/>
  <rect x="30" y="58" width="30" height="24" rx="5" fill="#38BDF8"/>
  <rect x="68" y="58" width="30" height="24" rx="5" fill="#4ADE80"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DBEAFE" text-anchor="middle">WXPYTHON</text>
</svg>`,

  // 885. JavaFX - FX Scene Graph Emblem (Sapphire Amber)
  "javafx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g885" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#421904"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g885)"/>
  <rect x="28" y="26" width="72" height="58" rx="12" fill="#D97706" stroke="#FEF3C7" stroke-width="2.5"/>
  <text x="64" y="66" font-family="system-ui, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" text-anchor="middle">JFX</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FEF3C7" text-anchor="middle">JAVAFX</text>
</svg>`,

  // 886. Swing - Java Desktop Window Emblem (Terracotta)
  "swing.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g886" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#451404"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g886)"/>
  <rect x="26" y="26" width="76" height="56" rx="8" fill="#EA580C" stroke="#FFFFFF" stroke-width="2.5"/>
  <line x1="26" y1="40" x2="102" y2="40" stroke="#FFFFFF" stroke-width="2.5"/>
  <circle cx="36" cy="33" r="3" fill="#FFFFFF"/>
  <circle cx="46" cy="33" r="3" fill="#FFFFFF"/>
  <text x="64" y="68" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">JFrame</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFEDD5" text-anchor="middle">SWING</text>
</svg>`,

  // 887. AWT - Abstract Window Toolkit (Slate Crimson)
  "awt.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g887" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#991B1B"/>
      <stop offset="100%" stop-color="#3B0A0A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g887)"/>
  <rect x="30" y="26" width="68" height="56" rx="6" fill="#7F1D1D" stroke="#FCA5A5" stroke-width="3"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" text-anchor="middle">AWT</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FEE2E2" text-anchor="middle">JAVA AWT</text>
</svg>`,

  // 888. SWT - Eclipse Standard Widget Toolkit (Eclipse Indigo)
  "swt.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g888" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3730A3"/>
      <stop offset="100%" stop-color="#17144D"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g888)"/>
  <circle cx="64" cy="54" r="28" fill="#4338CA" stroke="#FFFFFF" stroke-width="2.5"/>
  <line x1="38" y1="48" x2="90" y2="48" stroke="#FFFFFF" stroke-width="3"/>
  <line x1="38" y1="60" x2="90" y2="60" stroke="#FACC15" stroke-width="3"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#E0E7FF" text-anchor="middle">SWT</text>
</svg>`,

  // 889. WinForms - Classic Windows Form (Microsoft Blue)
  "winforms.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g889" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="100%" stop-color="#0B1D52"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g889)"/>
  <rect x="26" y="24" width="76" height="60" rx="6" fill="#1E3A8A" stroke="#93C5FD" stroke-width="3"/>
  <rect x="26" y="24" width="76" height="14" rx="4" fill="#3B82F6"/>
  <rect x="38" y="48" width="24" height="14" rx="3" fill="#FFFFFF"/>
  <rect x="68" y="48" width="22" height="14" rx="3" fill="#60A5FA"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DBEAFE" text-anchor="middle">WINFORMS</text>
</svg>`,

  // 890. WPF XAML - XAML Angle Brackets & Cube (Deep Royal Blue)
  "wpf-xaml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#09163B"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g890)"/>
  <path d="M44 36 L26 56 L44 76" stroke="#60A5FA" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M84 36 L102 56 L84 76" stroke="#60A5FA" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="63" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">WPF</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#DBEAFE" text-anchor="middle">WPF XAML</text>
</svg>`,

  // 891. UWP XAML - 4-Pane Adaptive Grid (Cerulean Blue)
  "uwp-xaml.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g891" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#08283F"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g891)"/>
  <rect x="34" y="26" width="26" height="26" rx="3" fill="#7DD3FC"/>
  <rect x="66" y="26" width="26" height="26" rx="3" fill="#38BDF8"/>
  <rect x="34" y="58" width="26" height="26" rx="3" fill="#38BDF8"/>
  <rect x="66" y="58" width="26" height="26" rx="3" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#E0F2FE" text-anchor="middle">UWP XAML</text>
</svg>`,

  // 892. WinUI - Fluent Layered Acrylic Panels (Fluent Azure)
  "winui.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g892" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#072B45"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g892)"/>
  <rect x="28" y="26" width="44" height="44" rx="8" fill="#38BDF8" opacity="0.85"/>
  <rect x="52" y="42" width="46" height="44" rx="8" fill="#FFFFFF" opacity="0.92"/>
  <text x="75" y="70" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#0369A1" text-anchor="middle">UI 3</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#E0F2FE" text-anchor="middle">WINUI</text>
</svg>`,

  // 893. Avalonia - A Emblem Mountain Peak (Crimson Violet)
  "avalonia.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g893" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7E22CE"/>
      <stop offset="100%" stop-color="#350B5C"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g893)"/>
  <circle cx="64" cy="54" r="30" fill="#9333EA" stroke="#FFFFFF" stroke-width="2.5"/>
  <path d="M46 72 L64 32 L82 72 M53 60 H75" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#F3E8FF" text-anchor="middle">AVALONIA</text>
</svg>`,

  // 894. Uno Platform - Stylized U Circle (Magenta Violet)
  "uno-platform.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g894" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9333EA"/>
      <stop offset="100%" stop-color="#3B0764"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g894)"/>
  <circle cx="64" cy="54" r="28" fill="#581C87" stroke="#F0ABFC" stroke-width="3"/>
  <path d="M48 38 V60 A16 16 0 0 0 80 60 V38" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" fill="none"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FAE8FF" text-anchor="middle">UNO PLATFORM</text>
</svg>`,

  // 895. Delphi FMX - FireMonkey Flame Helmet (Fire Red)
  "delphi-fmx.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g895" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C"/>
      <stop offset="100%" stop-color="#450909"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g895)"/>
  <path d="M64 22 C84 36, 94 58, 76 84 C64 78, 52 84, 52 84 C34 58, 44 36, 64 22 Z" fill="#F97316" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="64" font-family="system-ui, sans-serif" font-size="17" font-weight="900" fill="#FFFFFF" text-anchor="middle">FMX</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FEE2E2" text-anchor="middle">DELPHI FMX</text>
</svg>`,

  // 896. Lazarus LCL - Cheetah Paw / LCL Cross-Widget (Sky Blue)
  "lazarus-lcl.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g896" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#082F49"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g896)"/>
  <circle cx="44" cy="36" r="7" fill="#FDE047"/>
  <circle cx="64" cy="28" r="7" fill="#FDE047"/>
  <circle cx="84" cy="36" r="7" fill="#FDE047"/>
  <ellipse cx="64" cy="64" rx="22" ry="18" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2.5"/>
  <text x="64" y="69" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#082F49" text-anchor="middle">LCL</text>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0F2FE" text-anchor="middle">LAZARUS LCL</text>
</svg>`,

  // 897. Kivy - Multi-Touch K Emblem (Obsidian Slate)
  "kivy.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g897" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g897)"/>
  <polygon points="38,26 52,26 52,52 78,26 94,26 66,54 94,86 78,86 52,58 52,86 38,86" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#E2E8F0" text-anchor="middle">KIVY</text>
</svg>`,

  // 898. BeeWare - Golden Bee Hexagon (Honey Amber)
  "beeware.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g898" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#421B03"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g898)"/>
  <polygon points="64,22 92,38 92,70 64,86 36,70 36,38" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2.5"/>
  <ellipse cx="64" cy="54" rx="14" ry="18" fill="#422006"/>
  <line x1="52" y1="50" x2="76" y2="50" stroke="#FDE047" stroke-width="4"/>
  <line x1="52" y1="60" x2="76" y2="60" stroke="#FDE047" stroke-width="4"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FEF3C7" text-anchor="middle">BEEWARE</text>
</svg>`,

  // 899. Dear PyGui - GPU Plot & Window (Deep Teal)
  "dear-pygui.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g899" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#052926"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g899)"/>
  <rect x="28" y="26" width="72" height="58" rx="10" fill="#115E59" stroke="#5EEAD4" stroke-width="2.5"/>
  <polyline points="36,68 50,48 64,60 80,38 92,48" stroke="#FACC15" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#CCFBF1" text-anchor="middle">DEAR PYGUI</text>
</svg>`,

  // 900. Dear ImGui - Immediate Mode C++ HUD (Cobalt Charcoal)
  "dear-imgui.svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="g900" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#090E17"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="28" fill="url(#g900)"/>
  <rect x="26" y="24" width="76" height="60" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="2.5"/>
  <rect x="26" y="24" width="76" height="14" rx="6" fill="#0284C7"/>
  <rect x="34" y="46" width="42" height="8" rx="4" fill="#38BDF8"/>
  <rect x="34" y="62" width="58" height="8" rx="4" fill="#475569"/>
  <circle cx="72" cy="66" r="5" fill="#FFFFFF"/>
  <text x="64" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#E0F2FE" text-anchor="middle">DEAR IMGUI</text>
</svg>`
};

let count = 0;
for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir1, filename), content, 'utf8');
  fs.writeFileSync(path.join(dir2, filename), content, 'utf8');
  count++;
}

console.log(`Generated ${count} Section 17 vector SVG logos in both assets/logos and public/assets/logos!`);
