const fs = require('fs');
const path = require('path');

const entries = [
  {
    id: 851,
    name: "Ladder Diagram",
    slug: "ladder-diagram",
    cssClass: "ladder-diagram-lang",
    category: "industrial-plc",
    categoryLabel: "Industrial PLC Logic",
    logo: "assets/logos/ladder-diagram.svg",
    shortDesc: "IEC 61131-3 graphical relay-logic language powering factory automation and programmable logic controllers.",
    paradigm: "Graphical Dataflow / Relay Logic",
    designedBy: "IEC 61131-3 Committee",
    firstAppeared: "1969",
    fileExtension: ".ld, .l5x",
    primaryUse: "Factory assembly robotics, conveyor control, safety interlocks, and industrial PLCs",
    syntaxSummary: "Vertical power rails, normally-open (--[ ]--) and normally-closed (--[/]--) contacts, and output coils (--( )--).",
    sampleCode: `|---[ Start_PB ]---+---[/ Stop_PB ]---( Motor_Run )---|
|                  |                                  |
|---[ Motor_Run ]--+                                  |
|                                                     |
|---[ Motor_Run ]---------------------( Run_Lamp  )---|`,
    explanation: "Ladder Diagram (LD) was modeled after electrical relay schematic racks so plant electricians could program PLCs visually. Rungs scan top-to-bottom in deterministic millisecond cycles.",
    expectedOutput: `[PLC Scan Cycle #001] Start_PB = TRUE, Stop_PB = FALSE\nCoil (Motor_Run) ENERGIZED | Output (Run_Lamp) ON`
  },
  {
    id: 852,
    name: "Ring Language",
    slug: "ring-language",
    cssClass: "ring-language-lang",
    category: "multiparadigm-scripting",
    categoryLabel: "Multi-Paradigm Scripting",
    logo: "assets/logos/ring-language.svg",
    shortDesc: "Practical multi-paradigm dynamic language supporting natural declarative DSLs, OOP, and cross-platform GUIs.",
    paradigm: "Imperative / OOP / Declarative",
    designedBy: "Mahmoud Fayed",
    firstAppeared: "2016",
    fileExtension: ".ring",
    primaryUse: "Desktop applications, 2D games, web backends, and natural-language DSLs",
    syntaxSummary: "Dynamic typing, flexible statement syntax (see/give or C/Pascal braces), and RingQt GUI builders.",
    sampleCode: `# Ring Language Entry #852
see "Welcome to Ring Language on CodePlay!" + nl
langs = ["Ring", "C", "Qt"]
for item in langs
    see "Module ready: " + item + nl
next`,
    explanation: "Ring was created to combine Lua-like embeddability, Ruby expressiveness, and C-speed extension libraries, powering the PWCT visual programming environment.",
    expectedOutput: `Welcome to Ring Language on CodePlay!\nModule ready: Ring\nModule ready: C\nModule ready: Qt`
  },
  {
    id: 853,
    name: "Wolfram Alpha Query",
    slug: "wolfram-alpha-query",
    cssClass: "wolfram-alpha-query-lang",
    category: "computational-knowledge",
    categoryLabel: "Computational Query",
    logo: "assets/logos/wolfram-alpha-query.svg",
    shortDesc: "Natural-language and symbolic query engine computing instant math, physics, and curated factual answers.",
    paradigm: "Symbolic / Computational Knowledge",
    designedBy: "Stephen Wolfram (Wolfram Research)",
    firstAppeared: "2009",
    fileExtension: ".wl, .nb",
    primaryUse: "Symbolic calculus, unit conversions, planetary astronomy, and data lookups",
    syntaxSummary: "Free-form natural queries combined with Mathematica symbolic expressions such as integrate, solve, and plot.",
    sampleCode: `integrate x^2 * sin(x) dx
solve x^2 - 5x + 6 = 0
distance from Earth to Mars today`,
    explanation: "Wolfram|Alpha parses natural-language math and scientific questions directly into Wolfram Language expressions backed by curated knowledge bases.",
    expectedOutput: `Integral: (2 - x^2)*cos(x) + 2*x*sin(x) + C\nRoots: x = 2, x = 3\nEarth-Mars Distance: ~1.48 AU`
  },
  {
    id: 854,
    name: "Eiffel Language",
    slug: "eiffel-lang",
    cssClass: "eiffel-language-lang",
    category: "design-by-contract",
    categoryLabel: "Design by Contract OOP",
    logo: "assets/logos/eiffel-lang.svg",
    shortDesc: "Pioneering object-oriented language built around Design by Contract preconditions, postconditions, and invariants.",
    paradigm: "Object-Oriented / Static Typed",
    designedBy: "Bertrand Meyer",
    firstAppeared: "1986",
    fileExtension: ".e",
    primaryUse: "Safety-critical software engineering, finance platforms, and formal OOP education",
    syntaxSummary: "require/ensure/invariant contract clauses, multiple inheritance with renaming, and void-safety.",
    sampleCode: `class BANK_ACCOUNT
feature
    balance: INTEGER
    deposit (amount: INTEGER)
        require
            positive_amount: amount > 0
        do
            balance := balance + amount
        ensure
            updated: balance = old balance + amount
        end
end`,
    explanation: "Eiffel introduced Design by Contract (DbC), treating software modules as formal contracts verified through explicit preconditions, postconditions, and class invariants.",
    expectedOutput: `[Eiffel Contract Check] Precondition positive_amount: PASS\nPostcondition updated: PASS (balance = 100)`
  },
  {
    id: 855,
    name: "SmartEiffel",
    slug: "smarteiffel",
    cssClass: "smarteiffel-lang",
    category: "eiffel-compiler",
    categoryLabel: "Optimizing Eiffel Compiler",
    logo: "assets/logos/smarteiffel.svg",
    shortDesc: "Former GNU Eiffel compiler featuring whole-program type inference and devirtualization into high-speed C.",
    paradigm: "Object-Oriented / Compiled",
    designedBy: "Dominique Colnet (LORIA / INRIA)",
    firstAppeared: "1994",
    fileExtension: ".e, .ace",
    primaryUse: "High-performance compiled Eiffel applications and compiler type-inference research",
    syntaxSummary: "Standard Eiffel syntax compiled via global type inference to eliminate dynamic dispatch overhead.",
    sampleCode: `class HELLO_SMARTEIFFEL
create make
feature
    make
        do
            io.put_string ("SmartEiffel whole-program binary active.%N")
        end
end`,
    explanation: "SmartEiffel (originally SmallEiffel) pioneered live-code analysis and whole-system C code generation, proving pure object-oriented code could match C speeds.",
    expectedOutput: `SmartEiffel whole-program binary active.`
  },
  {
    id: 856,
    name: "Ruby on Rails DSL",
    slug: "ruby-on-rails-dsl",
    cssClass: "ruby-on-rails-dsl-lang",
    category: "web-framework-dsl",
    categoryLabel: "Web Framework DSL",
    logo: "assets/logos/ruby-on-rails-dsl.svg",
    shortDesc: "Expressive domain-specific language driving Rails routing, ActiveRecord migrations, and model validations.",
    paradigm: "Declarative DSL / Ruby Metaprogramming",
    designedBy: "David Heinemeier Hansson",
    firstAppeared: "2004",
    fileExtension: ".rb",
    primaryUse: "Full-stack web applications, REST API routing, database schemas, and ActiveRecord queries",
    syntaxSummary: "Clean block-based declarations: resources, has_many, validates, scope, and draw routes.",
    sampleCode: `class Article < ApplicationRecord
  belongs_to :author
  has_many :comments, dependent: :destroy
  validates :title, presence: true, length: { minimum: 5 }
  scope :published, -> { where(status: "live") }
end`,
    explanation: "Rails leverages Ruby's open classes, blocks, and method_missing hooks to create highly readable internal DSLs for web routing, ORM associations, and migrations.",
    expectedOutput: `[Rails DSL] Model Article registered: 2 associations, 2 validations, 1 scope.`
  },
  {
    id: 857,
    name: "RSpec",
    slug: "rspec",
    cssClass: "rspec-lang",
    category: "bdd-testing",
    categoryLabel: "Ruby BDD Testing DSL",
    logo: "assets/logos/rspec.svg",
    shortDesc: "Human-readable Behavior-Driven Development testing framework for Ruby using describe, context, and expect.",
    paradigm: "BDD / Declarative Testing DSL",
    designedBy: "Steven Baker, David Chelimsky",
    firstAppeared: "2005",
    fileExtension: "_spec.rb",
    primaryUse: "Unit testing, integration specs, and executable behavior documentation in Ruby and Rails",
    syntaxSummary: "Nested describe/context/it blocks paired with expressive expect(val).to eq(...) matchers.",
    sampleCode: `RSpec.describe "CodePlay Catalog" do
  it "reaches milestone 900 cleanly" do
    total = 900
    expect(total).to eq(900)
    expect(total).to be > 850
  end
end`,
    explanation: "RSpec popularized Behavior-Driven Development (BDD) in the Ruby ecosystem by turning automated test suites into readable behavioral specifications.",
    expectedOutput: `CodePlay Catalog\n  reaches milestone 900 cleanly\n\n1 example, 0 failures`
  },
  {
    id: 858,
    name: "Gherkin",
    slug: "gherkin",
    cssClass: "gherkin-lang",
    category: "bdd-specification",
    categoryLabel: "BDD Specification Language",
    logo: "assets/logos/gherkin.svg",
    shortDesc: "Plain-English Given-When-Then business specification grammar parsed by Cucumber and SpecFlow.",
    paradigm: "Structured Natural Language / BDD",
    designedBy: "Aslak Hellesoy",
    firstAppeared: "2008",
    fileExtension: ".feature",
    primaryUse: "Living documentation, acceptance criteria, and cross-team automated QA scenarios",
    syntaxSummary: "Feature, Scenario, Given, When, Then, And, But keywords with Scenario Outline tables.",
    sampleCode: `Feature: Language Catalog Search
  Scenario: User searches for SwiftUI
    Given the learner is on the CodePlay homepage
    When the learner types "SwiftUI" into search
    Then card 867 "SwiftUI" should be visible`,
    explanation: "Gherkin separates business behavior descriptions from implementation code so product managers, QA engineers, and developers share a single source of truth.",
    expectedOutput: `[Gherkin Parser] Valid Feature: 1 Scenario, 3 Steps parsed cleanly.`
  },
  {
    id: 859,
    name: "Cucumber",
    slug: "cucumber",
    cssClass: "cucumber-lang",
    category: "bdd-automation",
    categoryLabel: "BDD Test Runner",
    logo: "assets/logos/cucumber.svg",
    shortDesc: "Multi-language BDD execution framework binding Gherkin feature steps to Ruby, Java, JS, and Go code.",
    paradigm: "Behavior-Driven Testing / Step Bindings",
    designedBy: "Aslak Hellesoy",
    firstAppeared: "2008",
    fileExtension: ".feature, .rb, .java, .js",
    primaryUse: "End-to-end acceptance testing across web, mobile, and microservice APIs",
    syntaxSummary: "Regular-expression or Cucumber-Expression step definitions mapping Given/When/Then lines to test actions.",
    sampleCode: `Given('the catalog contains {int} entries') do |count|
  @catalog_size = count
end

Then('the final entry number is {int}') do |expected|
  raise "Mismatch" unless @catalog_size == expected
end`,
    explanation: "Cucumber executes Gherkin specifications against live software by matching each natural-language step to reusable automated test step definitions.",
    expectedOutput: `1 scenario (1 passed)\n2 steps (2 passed)\n0m0.042s`
  },
  {
    id: 860,
    name: "Robot Framework",
    slug: "robot-framework",
    cssClass: "robot-framework-lang",
    category: "keyword-testing",
    categoryLabel: "Keyword-Driven RPA & QA",
    logo: "assets/logos/robot-framework.svg",
    shortDesc: "Open-source keyword-driven automation framework for acceptance testing and robotic process automation.",
    paradigm: "Keyword-Driven / Tabular DSL",
    designedBy: "Pekka Klarck (Nokia)",
    firstAppeared: "2008",
    fileExtension: ".robot, .resource",
    primaryUse: "Enterprise QA automation, browser testing (Selenium/Playwright), and RPA workflows",
    syntaxSummary: "Tabular sections (*** Settings ***, *** Variables ***, *** Test Cases ***, *** Keywords ***) with readable keywords.",
    sampleCode: `*** Variables ***
\${GREETING}    Hello Robot Framework

*** Test Cases ***
Verify System Greeting
    Log    \${GREETING}
    Should Contain    \${GREETING}    Robot`,
    explanation: "Robot Framework uses human-readable keywords backed by Python or Java libraries, enabling concise end-to-end test suites with rich HTML reports.",
    expectedOutput: `Verify System Greeting :: PASS\n1 test, 1 passed, 0 failed`
  },
  {
    id: 861,
    name: "TTCN-3",
    slug: "ttcn-3",
    cssClass: "ttcn3-lang",
    category: "protocol-testing",
    categoryLabel: "Telecom Protocol Testing",
    logo: "assets/logos/ttcn-3.svg",
    shortDesc: "ETSI standardized testing and specification notation for 5G telecom, automotive CAN, and network protocols.",
    paradigm: "Concurrent / Message-Based Testing",
    designedBy: "ETSI (European Telecom Standards)",
    firstAppeared: "2000",
    fileExtension: ".ttcn, .ttcn3",
    primaryUse: "3GPP 5G core conformance, SIP/IMS protocol validation, and automotive ECU testing",
    syntaxSummary: "Strongly typed message templates, altstep event matching, parallel test components (PTC), and verdict setting.",
    sampleCode: `module CodePlayProtoTest {
  testcase TC_PingEcho() runs on MTC_Comp {
    p_port.send("PING");
    alt {
      [] p_port.receive("PONG") { setverdict(pass); }
      [] any timer.timeout      { setverdict(fail); }
    }
  }
}`,
    explanation: "TTCN-3 (Testing and Test Control Notation version 3) is the international standard for black-box conformance and interoperability testing of distributed systems.",
    expectedOutput: `[TTCN-3 Runner] Testcase TC_PingEcho finished with verdict: PASS`
  },
  {
    id: 862,
    name: "Sikuli Script",
    slug: "sikuli-script",
    cssClass: "sikuli-script-lang",
    category: "visual-gui-automation",
    categoryLabel: "Visual GUI Automation",
    logo: "assets/logos/sikuli-script.svg",
    shortDesc: "MIT visual automation scripting language using screenshots and OpenCV pattern matching to drive any GUI.",
    paradigm: "Visual Recognition / Python-Jython Scripting",
    designedBy: "Tsung-Hsiang Chang, Tom Yeh (MIT)",
    firstAppeared: "2009",
    fileExtension: ".sikuli, .py",
    primaryUse: "Automating legacy desktop software, Flash/Canvas UIs, and cross-platform games without DOM hooks",
    syntaxSummary: "Visual commands such as click(img), find(img), wait(img), and type('text') anchored to screen captures.",
    sampleCode: `# SikuliX Visual Automation Script
if exists("run_button.png", 5):
    click("run_button.png")
    type("CodePlay Visual Test")`,
    explanation: "Named after the Huichol word for 'God's Eye', Sikuli locates UI buttons strictly by what appears on screen rather than internal accessibility IDs.",
    expectedOutput: `[SikuliX] Pattern "run_button.png" matched (98.4% confidence) -> Clicked.`
  },
  {
    id: 863,
    name: "Selenese",
    slug: "selenese",
    cssClass: "selenese-lang",
    category: "browser-automation",
    categoryLabel: "Selenium Command DSL",
    logo: "assets/logos/selenese.svg",
    shortDesc: "Classic Selenium IDE command language expressing browser clicks, assertions, and navigation in triplet steps.",
    paradigm: "Command-Target-Value Script",
    designedBy: "Jason Huggins, Shinya Kasatani",
    firstAppeared: "2004",
    fileExtension: ".side, .html",
    primaryUse: "Record-and-playback browser regression testing and web form verification",
    syntaxSummary: "Three-column commands (Command, Target locator, Value) such as open, click, type, and assertText.",
    sampleCode: `Command: open       | Target: /index.html
Command: type       | Target: id=explore-search-input | Value: SwiftUI
Command: assertText | Target: css=.card-num           | Value: 867`,
    explanation: "Selenese was the original test command language of Selenium Core and Selenium IDE before WebDriver bindings expanded browser automation across languages.",
    expectedOutput: `[Selenium IDE] 3 commands executed | 0 errors | Status: PASSED`
  },
  {
    id: 864,
    name: "Applescript Objective",
    slug: "applescript-objective",
    cssClass: "applescript-objective-lang",
    category: "macos-automation",
    categoryLabel: "macOS Cocoa Scripting",
    logo: "assets/logos/applescript-objective.svg",
    shortDesc: "AppleScriptObjC bridge giving natural-language AppleScript direct access to Cocoa Objective-C APIs.",
    paradigm: "English-Like Scripting / Objective-C Bridge",
    designedBy: "Apple Inc.",
    firstAppeared: "2009",
    fileExtension: ".applescript, .scpt",
    primaryUse: "macOS native Cocoa automation, Finder workflows, and Xcode utility scripting",
    syntaxSummary: "use framework 'Foundation' directives combined with interleaved Cocoa selector calls.",
    sampleCode: `use framework "Foundation"
set currentApp to current application
set msg to currentApp's NSString's stringWithString:"macOS Cocoa Bridge Ready"
log (msg as text)`,
    explanation: "AppleScriptObjC merges human-readable AppleScript workflows with full Objective-C class access to Foundation, AppKit, and FileManager frameworks.",
    expectedOutput: `(*macOS Cocoa Bridge Ready*)`
  },
  {
    id: 865,
    name: "JavaScript for Automation",
    slug: "javascript-for-automation",
    cssClass: "jxa-lang",
    category: "macos-automation",
    categoryLabel: "macOS JXA Scripting",
    logo: "assets/logos/javascript-for-automation.svg",
    shortDesc: "Apple JXA scripting bridge allowing standard ES6 JavaScript to control macOS apps and Objective-C classes.",
    paradigm: "Scripting / Event Automation",
    designedBy: "Apple Inc. (OS X Yosemite)",
    firstAppeared: "2014",
    fileExtension: ".js, .scpt",
    primaryUse: "macOS system automation via osascript -l JavaScript, Finder scripting, and dialog utilities",
    syntaxSummary: "Application('AppName') proxies, ObjC.import('Foundation'), and standard JavaScript syntax.",
    sampleCode: `const app = Application.currentApplication();
app.includeStandardAdditions = true;
const info = "CodePlay JXA Runtime Active on macOS";
console.log(info);`,
    explanation: "Introduced in OS X 10.10 Yosemite, JavaScript for Automation (JXA) lets JavaScript developers automate macOS applications as an alternative to AppleScript.",
    expectedOutput: `CodePlay JXA Runtime Active on macOS`
  },
  {
    id: 866,
    name: "Swift Playgrounds",
    slug: "swift-playgrounds",
    cssClass: "swift-playgrounds-lang",
    category: "interactive-swift",
    categoryLabel: "Interactive Swift Studio",
    logo: "assets/logos/swift-playgrounds.svg",
    shortDesc: "Apple's interactive Swift coding environment with live sidebar results, 3D puzzles, and instant app previews.",
    paradigm: "Multi-Paradigm / Live Educational Swift",
    designedBy: "Apple Inc.",
    firstAppeared: "2016",
    fileExtension: ".playground, .swiftpm",
    primaryUse: "Learning Swift fundamentals, prototyping iOS/macOS algorithms, and building SwiftUI apps on iPad/Mac",
    syntaxSummary: "Standard Swift syntax enhanced with PlaygroundSupport live views and instant timeline inspection.",
    sampleCode: `import Foundation
let stepCount = 3
for step in 1...stepCount {
    print("Byte moved forward: step \\(step)")
}`,
    explanation: "Swift Playgrounds lowers the barrier to real Swift development by running Swift compiler code interactively with immediate visual and console feedback.",
    expectedOutput: `Byte moved forward: step 1\nByte moved forward: step 2\nByte moved forward: step 3`
  },
  {
    id: 867,
    name: "SwiftUI",
    slug: "swiftui",
    cssClass: "swiftui-lang",
    category: "apple-declarative-ui",
    categoryLabel: "Apple Declarative UI",
    logo: "assets/logos/swiftui.svg",
    shortDesc: "Apple's declarative Swift UI framework for building reactive interfaces across iOS, macOS, watchOS, and visionOS.",
    paradigm: "Declarative / Reactive UI DSL",
    designedBy: "Apple Inc.",
    firstAppeared: "2019",
    fileExtension: ".swift",
    primaryUse: "Native iOS, iPadOS, macOS, tvOS, watchOS, and Apple Vision Pro applications",
    syntaxSummary: "Result-builder View structs, @State/@Binding reactive state, and fluent view modifiers.",
    sampleCode: `import SwiftUI

struct CodePlayCard: View {
    @State private var count = 867
    var body: some View {
        VStack(spacing: 12) {
            Text("SwiftUI Entry #\\(count)").font(.headline)
            Button("Increment") { count += 1 }
        }
    }
}`,
    explanation: "SwiftUI replaces imperative Auto Layout boilerplate with declarative state-driven View structs powered by Swift result builders and property wrappers.",
    expectedOutput: `[SwiftUI Canvas] Rendered VStack -> Text("SwiftUI Entry #867") + Button("Increment")`
  },
  {
    id: 868,
    name: "Jetpack Compose",
    slug: "jetpack-compose",
    cssClass: "jetpack-compose-lang",
    category: "android-declarative-ui",
    categoryLabel: "Android Declarative UI",
    logo: "assets/logos/jetpack-compose.svg",
    shortDesc: "Google's modern declarative UI toolkit for native Android apps built on Kotlin @Composable functions.",
    paradigm: "Declarative / Functional Reactive UI",
    designedBy: "Google Android Team",
    firstAppeared: "2019",
    fileExtension: ".kt",
    primaryUse: "Native Android Material 3 apps, Wear OS, Android TV, and Compose Multiplatform UIs",
    syntaxSummary: "@Composable annotated Kotlin functions, remember { mutableStateOf(...) }, and Modifier chains.",
    sampleCode: `@Composable
fun CodePlayBadge(entryId: Int = 868) {
    Column(modifier = Modifier.padding(16.dp)) {
        Text(text = "Jetpack Compose Active", style = MaterialTheme.typography.titleLarge)
        Text(text = "Catalog #\\$entryId")
    }
}`,
    explanation: "Jetpack Compose eliminates XML view inflation by compiling @Composable functions directly into efficient UI tree recomposition pipelines.",
    expectedOutput: `[Compose Runtime] Recomposition complete: Column -> 2 Text nodes rendered.`
  },
  {
    id: 869,
    name: "Kotlin Multiplatform",
    slug: "kotlin-multiplatform",
    cssClass: "kotlin-multiplatform-lang",
    category: "cross-platform-mobile",
    categoryLabel: "Multiplatform Kotlin",
    logo: "assets/logos/kotlin-multiplatform.svg",
    shortDesc: "JetBrains technology sharing networking, state, and business logic across Android, iOS, Web, and Desktop.",
    paradigm: "Multi-Paradigm / Expect-Actual Native",
    designedBy: "JetBrains",
    firstAppeared: "2017",
    fileExtension: ".kt, .kts",
    primaryUse: "Shared mobile business logic with native SwiftUI/Compose UIs or Compose Multiplatform",
    syntaxSummary: "commonMain source sets using expect declarations matched to platform actual implementations.",
    sampleCode: `// commonMain/Platform.kt
expect fun platformName(): String

fun greeting(): String {
    return "Running Kotlin Multiplatform on " + platformName()
}`,
    explanation: "Kotlin Multiplatform compiles shared Kotlin code to JVM bytecode, LLVM native iOS binaries, JavaScript, and WebAssembly without sacrificing native performance.",
    expectedOutput: `Running Kotlin Multiplatform on Android + iOS + Desktop`
  },
  {
    id: 870,
    name: "Flutter Dart",
    slug: "flutter-dart",
    cssClass: "flutter-dart-lang",
    category: "cross-platform-ui",
    categoryLabel: "Cross-Platform UI Engine",
    logo: "assets/logos/flutter-dart.svg",
    shortDesc: "Google's high-FPS cross-platform UI toolkit compiling Dart into native ARM code rendered via Impeller/Skia.",
    paradigm: "Declarative Widget Tree / OOP",
    designedBy: "Google",
    firstAppeared: "2017",
    fileExtension: ".dart",
    primaryUse: "Single-codebase iOS, Android, Web, Windows, macOS, and Linux applications",
    syntaxSummary: "StatelessWidget and StatefulWidget composition trees with hot reload and sound null safety.",
    sampleCode: `import 'package:flutter/material.dart';

class CodePlayBanner extends StatelessWidget {
  const CodePlayBanner({super.key});
  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Flutter Dart #870 Ready!'));
  }
}`,
    explanation: "Flutter owns every pixel on screen via its Impeller/Skia graphics engine rather than wrapping OEM controls, ensuring consistent 60/120fps animations across platforms.",
    expectedOutput: `[Flutter Engine] Widget tree mounted: Text("Flutter Dart #870 Ready!")`
  },
  {
    id: 871,
    name: "React Native",
    slug: "react-native",
    cssClass: "react-native-lang",
    category: "cross-platform-mobile",
    categoryLabel: "Native Mobile React",
    logo: "assets/logos/react-native.svg",
    shortDesc: "Meta's framework for building true native iOS and Android interfaces using React components and JavaScript.",
    paradigm: "Declarative Component UI / JS-to-Native",
    designedBy: "Meta (Facebook)",
    firstAppeared: "2015",
    fileExtension: ".jsx, .tsx",
    primaryUse: "Cross-platform consumer mobile apps with native views, Hermes engine, and Fabric architecture",
    syntaxSummary: "React JSX primitives (<View>, <Text>, <Pressable>) styled with StyleSheet.create and Yoga Flexbox.",
    sampleCode: `import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View><Text>React Native Bridge Active (#871)</Text></View>
  );
}`,
    explanation: "React Native renders genuine platform UIView and Android View elements driven by React's reconciliation engine and the New Architecture JSI.",
    expectedOutput: `[React Native / Hermes] Native View tree mounted: "React Native Bridge Active (#871)"`
  },
  {
    id: 872,
    name: "NativeScript",
    slug: "nativescript",
    cssClass: "nativescript-lang",
    category: "cross-platform-mobile",
    categoryLabel: "Direct Native JS Runtime",
    logo: "assets/logos/nativescript.svg",
    shortDesc: "Open-source framework granting JavaScript and TypeScript direct zero-wrapper access to iOS and Android APIs.",
    paradigm: "Event-Driven / Native API Reflection",
    designedBy: "Progress / Telerik",
    firstAppeared: "2014",
    fileExtension: ".ts, .js, .xml",
    primaryUse: "Native mobile apps using Angular, Vue, Svelte, or plain TypeScript with full OS SDK access",
    syntaxSummary: "XML declarative layouts paired with JS/TS directly instantiating native Java/Objective-C classes.",
    sampleCode: `import { Application, Label } from '@nativescript/core';
const label = new Label();
label.text = 'NativeScript Direct Native Access Ready!';
console.log(label.text);`,
    explanation: "NativeScript injects metadata into V8/JavaScriptCore so JS code calls Android and iOS native platform APIs directly without writing custom bridge code.",
    expectedOutput: `NativeScript Direct Native Access Ready!`
  },
  {
    id: 873,
    name: "Xamarin",
    slug: "xamarin",
    cssClass: "xamarin-lang",
    category: "dotnet-mobile",
    categoryLabel: ".NET Mobile Framework",
    logo: "assets/logos/xamarin.svg",
    shortDesc: "Microsoft C# and .NET framework compiling shared logic and XAML UIs into native iOS and Android binaries.",
    paradigm: "Object-Oriented / MVVM XAML",
    designedBy: "Nat Friedman, Miguel de Icaza (Microsoft)",
    firstAppeared: "2011",
    fileExtension: ".cs, .xaml",
    primaryUse: "Enterprise C# cross-platform mobile apps with Xamarin.Forms and native bindings",
    syntaxSummary: "C# MVVM view models bound to Xamarin.Forms XAML layouts and native Mono/AOT runtimes.",
    sampleCode: `using Xamarin.Forms;
public class WelcomePage : ContentPage {
    public WelcomePage() {
        Content = new Label { Text = "Xamarin.Forms Active (#873)" };
    }
}`,
    explanation: "Xamarin brought C# and .NET libraries directly to iOS (ahead-of-time compiled) and Android (Mono/ART interop), forming the foundation of .NET MAUI.",
    expectedOutput: `[Xamarin.Forms] ContentPage rendered: Label("Xamarin.Forms Active (#873)")`
  },
  {
    id: 874,
    name: "MAUI",
    slug: "maui",
    cssClass: "maui-lang",
    category: "dotnet-crossplatform",
    categoryLabel: ".NET Multi-platform App UI",
    logo: "assets/logos/maui.svg",
    shortDesc: "Microsoft's unified single-project .NET framework for building native mobile and desktop apps in C# and XAML.",
    paradigm: "Object-Oriented / MVVM / Handler Architecture",
    designedBy: "Microsoft (.NET Team)",
    firstAppeared: "2022",
    fileExtension: ".cs, .xaml",
    primaryUse: "Single-project Android, iOS, macOS Catalyst, and Windows WinUI 3 enterprise apps",
    syntaxSummary: "Unified MauiProgram builder, XAML markup, Blazor Hybrid WebViews, and cross-platform handler mappers.",
    sampleCode: `var builder = MauiApp.CreateBuilder();
builder.UseMauiApp<App>();
Console.WriteLine(".NET MAUI Single-Project Host Built (#874)");`,
    explanation: ".NET MAUI evolves Xamarin.Forms into a unified modern .NET 8+ workload supporting native handlers, single-project resources, and Blazor Hybrid.",
    expectedOutput: `.NET MAUI Single-Project Host Built (#874)`
  },
  {
    id: 875,
    name: "Ionic",
    slug: "ionic",
    cssClass: "ionic-lang",
    category: "hybrid-mobile-ui",
    categoryLabel: "Hybrid Mobile UI Toolkit",
    logo: "assets/logos/ionic.svg",
    shortDesc: "Cross-platform mobile UI component library delivering iOS Cupertino and Material Design aesthetics via Web Components.",
    paradigm: "Web Components / Adaptive UI",
    designedBy: "Max Lynch, Ben Sperry, Adam Bradley",
    firstAppeared: "2013",
    fileExtension: ".html, .tsx, .ts",
    primaryUse: "Hybrid iOS/Android mobile apps and Progressive Web Apps with Angular, React, or Vue",
    syntaxSummary: "Custom Stencil-built Web Components (<ion-app>, <ion-header>, <ion-button>) adapting automatically to OS.",
    sampleCode: `<ion-app>
  <ion-header><ion-toolbar><ion-title>CodePlay Ionic</ion-title></ion-toolbar></ion-header>
  <ion-content class="ion-padding">
    <ion-button color="primary">Launch Hybrid App</ion-button>
  </ion-content>
</ion-app>`,
    explanation: "Ionic provides 100+ adaptive Web Components that automatically style themselves like native iOS or Material Android controls depending on the host device.",
    expectedOutput: `[Ionic Core] Adaptive <ion-app> mounted successfully.`
  },
  {
    id: 876,
    name: "Cordova",
    slug: "cordova",
    cssClass: "cordova-lang",
    category: "hybrid-runtime",
    categoryLabel: "Apache Mobile WebView Bridge",
    logo: "assets/logos/cordova.svg",
    shortDesc: "Apache open-source mobile container wrapping HTML, CSS, and JavaScript web apps with native device plugins.",
    paradigm: "Hybrid WebView / Plugin Bridge",
    designedBy: "Nitobi / Apache Software Foundation",
    firstAppeared: "2009",
    fileExtension: ".js, .xml, .html",
    primaryUse: "Packaging web applications into installable Android APKs and iOS IPAs with camera/GPS access",
    syntaxSummary: "deviceready lifecycle event paired with cordova.exec native plugin invocations.",
    sampleCode: `document.addEventListener('deviceready', () => {
  console.log('Apache Cordova Device Bridge Initialized!');
  console.log('Platform:', cordova.platformId);
}, false);`,
    explanation: "Originally created as PhoneGap, Apache Cordova pioneered hybrid mobile development by exposing native hardware sensors to sandboxed WebViews via JavaScript plugins.",
    expectedOutput: `Apache Cordova Device Bridge Initialized!\nPlatform: webview-native`
  },
  {
    id: 877,
    name: "Capacitor",
    slug: "capacitor",
    cssClass: "capacitor-lang",
    category: "modern-hybrid-runtime",
    categoryLabel: "Native Web App Runtime",
    logo: "assets/logos/capacitor.svg",
    shortDesc: "Ionic's modern drop-in native runtime turning any web application into iOS, Android, and PWA native builds.",
    paradigm: "Native Bridge / Promise-Based JS API",
    designedBy: "Ionic Team",
    firstAppeared: "2018",
    fileExtension: ".ts, .js, .json",
    primaryUse: "Modern React, Vue, Vite, and Ionic web apps deploying natively to App Store and Google Play",
    syntaxSummary: "Clean async/await native plugins (Camera, Filesystem, Geolocation) over first-class Xcode/Gradle projects.",
    sampleCode: `import { Device } from '@capacitor/device';

async function inspectDevice() {
  const info = { platform: 'android', osVersion: '14' };
  console.log('Capacitor Runtime:', info.platform, info.osVersion);
}
inspectDevice();`,
    explanation: "Unlike Cordova's abstracted build folders, Capacitor manages real native Xcode and Android Studio projects directly while providing modern Promise-based JS bridges.",
    expectedOutput: `Capacitor Runtime: android 14`
  },
  {
    id: 878,
    name: "Tauri",
    slug: "tauri",
    cssClass: "tauri-lang",
    category: "rust-desktop-framework",
    categoryLabel: "Rust Desktop & Mobile Framework",
    logo: "assets/logos/tauri.svg",
    shortDesc: "Ultra-lightweight Rust framework building secure, tiny cross-platform apps using the OS native system WebView.",
    paradigm: "Rust Systems Backend + Web Frontend",
    designedBy: "Daniel Thompson-Yvetot, Lucas Nogueira",
    firstAppeared: "2019",
    fileExtension: ".rs, .ts, .json",
    primaryUse: "Fast, low-RAM desktop utilities and secure cross-platform apps under 5 MB bundle size",
    syntaxSummary: "#[tauri::command] Rust IPC functions invoked safely from frontend JavaScript via invoke().",
    sampleCode: `#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello {}, from Tauri Rust core!", name)
}

fn main() {
    println!("{}", greet("CodePlay"));
}`,
    explanation: "Instead of bundling Chromium in every app, Tauri leverages OS WebViews (WebView2, WKWebView, WebKitGTK) paired with a memory-safe Rust backend.",
    expectedOutput: `Hello CodePlay, from Tauri Rust core!`
  },
  {
    id: 879,
    name: "Electron",
    slug: "electron",
    cssClass: "electron-lang",
    category: "desktop-web-framework",
    categoryLabel: "Chromium Desktop Framework",
    logo: "assets/logos/electron.svg",
    shortDesc: "Cross-platform desktop framework combining Chromium and Node.js, powering VS Code, Discord, and Slack.",
    paradigm: "Multi-Process (Main + Renderer) JS/TS",
    designedBy: "Cheng Zhao (GitHub / OpenJS)",
    firstAppeared: "2013",
    fileExtension: ".js, .ts, .html",
    primaryUse: "Full-featured desktop IDEs, messaging clients, and consistent cross-OS applications",
    syntaxSummary: "app.whenReady() creating BrowserWindow instances communicating via contextBridge and ipcMain/ipcRenderer.",
    sampleCode: `const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1024, height: 768 });
  console.log('Electron BrowserWindow initialized:', win.id);
});`,
    explanation: "Electron guarantees pixel-identical rendering across Windows, macOS, and Linux by embedding Chromium alongside full Node.js OS filesystem and native menu APIs.",
    expectedOutput: `Electron BrowserWindow initialized: 1`
  },
  {
    id: 880,
    name: "Qt QML",
    slug: "qt-qml",
    cssClass: "qt-qml-lang",
    category: "declarative-cpp-ui",
    categoryLabel: "Declarative Qt UI Language",
    logo: "assets/logos/qt-qml.svg",
    shortDesc: "Qt's declarative JSON-like UI and property-binding language compiled to hardware-accelerated C++ scene graphs.",
    paradigm: "Declarative Property-Binding / Reactive",
    designedBy: "Nokia / The Qt Company",
    firstAppeared: "2009",
    fileExtension: ".qml",
    primaryUse: "Automotive digital cockpits, embedded touchscreens, KDE Plasma, and cross-platform desktop UIs",
    syntaxSummary: "Hierarchical Item/Rectangle/Text visual nodes with automatic reactive property bindings and signals.",
    sampleCode: `import QtQuick 2.15

Rectangle {
    width: 320; height: 120; color: "#15803D"
    Text {
        anchors.centerIn: parent
        text: "Qt QML Scene Graph Ready"
        color: "white"
    }
}`,
    explanation: "QML separates fluid UI choreography, shaders, and reactive bindings from heavy C++ backend logic, driving modern embedded and desktop Qt 6 applications.",
    expectedOutput: `[Qt Quick SceneGraph] Rendered Rectangle (320x120) with centered Text.`
  },
  {
    id: 881,
    name: "QtScript",
    slug: "qtscript",
    cssClass: "qtscript-lang",
    category: "embedded-qt-scripting",
    categoryLabel: "Qt Embedded ECMAScript",
    logo: "assets/logos/qtscript.svg",
    shortDesc: "ECMAScript-based scripting engine tightly integrated with Qt's QObject signals, slots, and properties.",
    paradigm: "Prototype-Based Scripting / QObject Binding",
    designedBy: "Trolltech / Nokia",
    firstAppeared: "2007",
    fileExtension: ".qs, .js",
    primaryUse: "Extending Qt C++ desktop applications, CAD macros, and dynamic QObject automation",
    syntaxSummary: "Standard ECMAScript connected to C++ QScriptEngine with signal.connect() bindings.",
    sampleCode: `// QtScript Macro Example
var appTitle = "CodePlay QtScript Engine";
function greetUser(name) {
    return appTitle + " -> Ready for " + name;
}
print(greetUser("Developer"));`,
    explanation: "QtScript embedded ECMAScript directly inside Qt 4/5 C++ applications so users could write plugins that connect natively to QObject signals and slots.",
    expectedOutput: `CodePlay QtScript Engine -> Ready for Developer`
  },
  {
    id: 882,
    name: "GTK Vala",
    slug: "gtk-vala",
    cssClass: "gtk-vala-lang",
    category: "gnome-native-ui",
    categoryLabel: "GNOME Native OOP Language",
    logo: "assets/logos/gtk-vala.svg",
    shortDesc: "C#-inspired language compiling directly to C and GObject for native GNOME and elementary OS GTK apps.",
    paradigm: "Object-Oriented / Compiled to C/GObject",
    designedBy: "Jurg Billeter, Raffaele Sandrini",
    firstAppeared: "2006",
    fileExtension: ".vala, .vapi",
    primaryUse: "Native Linux desktop applications using GTK 4, Libadwaita, and GNOME GObject APIs",
    syntaxSummary: "Clean C#-style classes, signals, properties, and async/await compiled straight into C without VM overhead.",
    sampleCode: `public class CodePlayWin : Gtk.ApplicationWindow {
    public static int main (string[] args) {
        stdout.printf("GTK Vala GObject binary active!\\n");
        return 0;
    }
}`,
    explanation: "Vala eliminates the manual boilerplate of writing GObject C code by offering modern OOP syntax that transpiles cleanly to native C at compile time.",
    expectedOutput: `GTK Vala GObject binary active!`
  },
  {
    id: 883,
    name: "Tk",
    slug: "tk",
    cssClass: "tk-lang",
    category: "classic-cross-gui",
    categoryLabel: "Cross-Platform GUI Toolkit",
    logo: "assets/logos/tk.svg",
    shortDesc: "Lightweight cross-platform widget toolkit powering Tcl, Python Tkinter, Ruby Tk, and Perl/Tk.",
    paradigm: "Event-Driven / Widget Hierarchy",
    designedBy: "John Ousterhout",
    firstAppeared: "1991",
    fileExtension: ".tcl, .tk",
    primaryUse: "Zero-dependency desktop GUIs, Python standard library tools (Tkinter), and rapid engineering utilities",
    syntaxSummary: "Widget path creation (button .b -text ...), pack/grid geometry managers, and event command bindings.",
    sampleCode: `package require Tk
wm title . "CodePlay Tk Toolkit"
label .msg -text "Tk GUI Active (#883)"
pack .msg -padx 20 -pady 12`,
    explanation: "Created alongside Tcl, Tk has been one of computing's most enduring cross-platform GUI toolkits, shipped standard inside Python as Tkinter.",
    expectedOutput: `[Tk Window Manager] Packed .msg widget ("Tk GUI Active (#883)")`
  },
  {
    id: 884,
    name: "wxPython",
    slug: "wxpython",
    cssClass: "wxpython-lang",
    category: "python-native-gui",
    categoryLabel: "Python Native wxWidgets",
    logo: "assets/logos/wxpython.svg",
    shortDesc: "Python wrapper around the C++ wxWidgets library rendering true native controls across Windows, macOS, and GTK.",
    paradigm: "Event-Driven / Native Widget Wrapper",
    designedBy: "Robin Dunn",
    firstAppeared: "1998",
    fileExtension: ".py, .pyw",
    primaryUse: "Native-looking Python desktop tools, scientific GUIs, and cross-platform enterprise clients",
    syntaxSummary: "wx.App and wx.Frame classes with sizer-based layout management and Bind(wx.EVT_BUTTON) events.",
    sampleCode: `import wx
app = wx.App(False)
frame = wx.Frame(None, title="wxPython CodePlay #884")
print("wxPython Native Frame Initialized:", frame.GetTitle())`,
    explanation: "Unlike drawn UI toolkits, wxPython calls native OS controls (Win32, Cocoa, GTK) so every button and dialog looks completely native to the host OS.",
    expectedOutput: `wxPython Native Frame Initialized: wxPython CodePlay #884`
  },
  {
    id: 885,
    name: "JavaFX",
    slug: "javafx",
    cssClass: "javafx-lang",
    category: "java-rich-gui",
    categoryLabel: "Modern Java GUI Platform",
    logo: "assets/logos/javafx.svg",
    shortDesc: "Modern hardware-accelerated Java client UI platform featuring FXML markup, CSS styling, and Canvas 2D/3D.",
    paradigm: "OOP / Declarative FXML + CSS",
    designedBy: "Chris Oliver (Sun / OpenJFX)",
    firstAppeared: "2008",
    fileExtension: ".java, .fxml",
    primaryUse: "Enterprise Java desktop applications, scientific dashboards, and data visualization tools",
    syntaxSummary: "Application subclass setting a Stage and Scene graph styled via CSS or loaded from FXML.",
    sampleCode: `import javafx.application.Application;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class CodePlayFX extends Application {
    public void start(Stage stage) {
        Label lbl = new Label("JavaFX Prism Pipeline Ready!");
        System.out.println(lbl.getText());
    }
}`,
    explanation: "OpenJFX replaces Swing with a modern retained-mode scene graph, hardware-accelerated Prism rendering, observable properties, and CSS theming.",
    expectedOutput: `JavaFX Prism Pipeline Ready!`
  },
  {
    id: 886,
    name: "Swing",
    slug: "swing",
    cssClass: "swing-lang",
    category: "java-desktop-gui",
    categoryLabel: "Java Desktop Toolkit",
    logo: "assets/logos/swing.svg",
    shortDesc: "Classic lightweight Java GUI library providing JFrame, JTable, and pluggable Look-and-Feel components.",
    paradigm: "OOP / Event-Driven MVC",
    designedBy: "Sun Microsystems (Java Foundation Classes)",
    firstAppeared: "1997",
    fileExtension: ".java",
    primaryUse: "Cross-platform Java IDEs (IntelliJ, NetBeans, Ghidra), financial terminals, and internal tools",
    syntaxSummary: "JFrame, JPanel, LayoutManagers (BorderLayout, GridBagLayout), and ActionListener event handlers.",
    sampleCode: `import javax.swing.*;

public class SwingDemo {
    public static void main(String[] args) {
        JFrame frame = new JFrame("CodePlay Swing #886");
        JLabel label = new JLabel("Swing EDT Initialized");
        System.out.println(frame.getTitle() + " -> " + label.getText());
    }
}`,
    explanation: "Built atop AWT, Java Swing draws customizable, consistent lightweight components in pure Java and still powers flagship developer tools like IntelliJ IDEA and Ghidra.",
    expectedOutput: `CodePlay Swing #886 -> Swing EDT Initialized`
  },
  {
    id: 887,
    name: "AWT",
    slug: "awt",
    cssClass: "awt-lang",
    category: "java-peer-gui",
    categoryLabel: "Java Abstract Window Toolkit",
    logo: "assets/logos/awt.svg",
    shortDesc: "Java's foundational graphics and windowing toolkit binding heavyweight components to native OS peers.",
    paradigm: "OOP / Heavyweight Peer GUI",
    designedBy: "Sun Microsystems (JDK 1.0)",
    firstAppeared: "1995",
    fileExtension: ".java",
    primaryUse: "Java 2D graphics rendering, system tray integration, event dispatch loops, and Swing foundation",
    syntaxSummary: "Frame, Panel, Graphics2D drawing primitives, and WindowAdapter/ActionListener callbacks.",
    sampleCode: `import java.awt.*;

public class AwtFrameCheck {
    public static void main(String[] args) {
        Frame f = new Frame("Java AWT Peer Window");
        System.out.println("AWT Toolkit Initialized: " + f.getTitle());
    }
}`,
    explanation: "The Abstract Window Toolkit (AWT) shipped in Java 1.0 to give applets and desktop programs portable windows, fonts, and Graphics2D rendering.",
    expectedOutput: `AWT Toolkit Initialized: Java AWT Peer Window`
  },
  {
    id: 888,
    name: "SWT",
    slug: "swt",
    cssClass: "swt-lang",
    category: "eclipse-native-gui",
    categoryLabel: "Eclipse Native Widget Toolkit",
    logo: "assets/logos/swt.svg",
    shortDesc: "Eclipse Foundation's high-speed Java GUI toolkit directly wrapping native Win32, GTK, and macOS Cocoa widgets.",
    paradigm: "OOP / Native JNI Widget Wrapper",
    designedBy: "OTI / IBM / Eclipse Foundation",
    firstAppeared: "2001",
    fileExtension: ".java",
    primaryUse: "Eclipse IDE, DBeaver, Azureus/Vuze, and responsive native-look Java desktop tools",
    syntaxSummary: "Display event loop, Shell window container, explicit widget.dispose() resource discipline.",
    sampleCode: `import org.eclipse.swt.widgets.*;

public class SwtLauncher {
    public static void main(String[] args) {
        System.out.println("Eclipse SWT JNI Widget Bridge Ready (#888)");
    }
}`,
    explanation: "Engineered by IBM/OTI for the Eclipse IDE, SWT bypasses Java-drawn widgets to invoke native OS controls directly via JNI for crisp native responsiveness.",
    expectedOutput: `Eclipse SWT JNI Widget Bridge Ready (#888)`
  },
  {
    id: 889,
    name: "WinForms",
    slug: "winforms",
    cssClass: "winforms-lang",
    category: "dotnet-windows-gui",
    categoryLabel: ".NET Windows Forms GUI",
    logo: "assets/logos/winforms.svg",
    shortDesc: "Classic Microsoft .NET event-driven RAD GUI framework wrapping native Win32 User32/GDI+ controls.",
    paradigm: "Event-Driven / Drag-and-Drop RAD",
    designedBy: "Microsoft",
    firstAppeared: "2002",
    fileExtension: ".cs, .vb, .Designer.cs",
    primaryUse: "Rapid Windows business line-of-business apps, internal utilities, and industrial HMI dashboards",
    syntaxSummary: "Form subclasses with partial InitializeComponent() designer files and C# event handler delegates.",
    sampleCode: `using System;
using System.Windows.Forms;

public class MainForm : Form {
    public MainForm() {
        Text = "CodePlay WinForms #889";
        Console.WriteLine("WinForms Handle Ready: " + Text);
    }
}`,
    explanation: "Windows Forms brought Visual Basic's beloved visual form designer to .NET and C#, remaining actively supported today in modern .NET 8+ on Windows.",
    expectedOutput: `WinForms Handle Ready: CodePlay WinForms #889`
  },
  {
    id: 890,
    name: "WPF XAML",
    slug: "wpf-xaml",
    cssClass: "wpf-xaml-lang",
    category: "dotnet-desktop-xaml",
    categoryLabel: "Windows Presentation Foundation",
    logo: "assets/logos/wpf-xaml.svg",
    shortDesc: "DirectX-accelerated Microsoft .NET desktop UI system pioneering XAML declarative markup and MVVM data binding.",
    paradigm: "Declarative XAML / MVVM Data Binding",
    designedBy: "Microsoft",
    firstAppeared: "2006",
    fileExtension: ".xaml, .xaml.cs",
    primaryUse: "Rich Windows desktop applications, CAD tools, Visual Studio UI, and financial trading terminals",
    syntaxSummary: "Declarative XAML tags (<Window>, <Grid>, <TextBlock Text='{Binding Name}'/>) with DependencyProperties.",
    sampleCode: `<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="CodePlay WPF" Height="200" Width="400">
    <Grid>
        <TextBlock Text="WPF DirectX Vector UI Ready (#890)"
                   HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Grid>
</Window>`,
    explanation: "WPF replaced pixel-bound GDI+ with resolution-independent DirectX vector graphics, ControlTemplates, routed events, and two-way MVVM data binding.",
    expectedOutput: `[WPF Renderer] Visual Tree parsed: Window -> Grid -> TextBlock`
  },
  {
    id: 891,
    name: "UWP XAML",
    slug: "uwp-xaml",
    cssClass: "uwp-xaml-lang",
    category: "windows-universal-ui",
    categoryLabel: "Universal Windows XAML",
    logo: "assets/logos/uwp-xaml.svg",
    shortDesc: "Microsoft Universal Windows Platform adaptive XAML framework targeting Windows 10/11 PCs, Xbox, and HoloLens.",
    paradigm: "Declarative XAML / WinRT Component",
    designedBy: "Microsoft",
    firstAppeared: "2015",
    fileExtension: ".xaml, .cs, .cpp",
    primaryUse: "Sandboxed Microsoft Store apps, Xbox apps, Surface tablets, and Windows Mixed Reality",
    syntaxSummary: "Compiled x:Bind markup expressions, VisualStateManager adaptive triggers, and WinRT async APIs.",
    sampleCode: `<Page xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
      xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <StackPanel HorizontalAlignment="Center" VerticalAlignment="Center">
        <TextBlock Text="UWP Adaptive Shell Ready (#891)" Style="{ThemeResource TitleTextBlockStyle}"/>
    </StackPanel>
</Page>`,
    explanation: "UWP introduced compiled {x:Bind} data bindings and adaptive layouts designed to scale cleanly across desktops, game consoles, and spatial headsets.",
    expectedOutput: `[UWP WinRT] Page layout verified with ThemeResource TitleTextBlockStyle.`
  },
  {
    id: 892,
    name: "WinUI",
    slug: "winui",
    cssClass: "winui-lang",
    category: "fluent-windows-ui",
    categoryLabel: "Windows App SDK Fluent UI",
    logo: "assets/logos/winui.svg",
    shortDesc: "Microsoft's flagship native Fluent Design UI framework powering modern Windows 11 apps via C# and C++/WinRT.",
    paradigm: "Declarative XAML / Native Fluent Composition",
    designedBy: "Microsoft Windows UI Team",
    firstAppeared: "2018",
    fileExtension: ".xaml, .cs, .cpp",
    primaryUse: "Windows 11 system experiences, Windows Terminal, PowerToys, and high-DPI desktop apps",
    syntaxSummary: "Mica/Acrylic backdrop materials, NavigationView, TeachingTip, and compiled XAML decoupled from OS updates.",
    sampleCode: `<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <NavigationView PaneTitle="CodePlay WinUI 3">
        <TextBlock Text="Fluent Design Mica Surface Ready (#892)" Margin="24"/>
    </NavigationView>
</Window>`,
    explanation: "WinUI 3 decouples modern Fluent XAML controls from specific Windows OS builds via the Windows App SDK, bringing native performance to C# and C++ apps.",
    expectedOutput: `[WinUI 3 / Windows App SDK] Fluent NavigationView rendered cleanly.`
  },
  {
    id: 893,
    name: "Avalonia",
    slug: "avalonia",
    cssClass: "avalonia-lang",
    category: "cross-platform-xaml",
    categoryLabel: "Cross-Platform .NET XAML",
    logo: "assets/logos/avalonia.svg",
    shortDesc: "Open-source cross-platform .NET UI framework bringing WPF-inspired XAML and Skia rendering to Linux, macOS, Windows, and Web.",
    paradigm: "Declarative XAML / MVVM / Skia Graphics",
    designedBy: "Steven Kirk & Avalonia Team",
    firstAppeared: "2013",
    fileExtension: ".axaml, .cs",
    primaryUse: "Cross-platform desktop, embedded Linux, mobile, and WebAssembly .NET enterprise apps",
    syntaxSummary: "Avalonia XAML (.axaml), CSS-inspired Selector styling, ReactiveUI bindings, and Skia rendering.",
    sampleCode: `<Window xmlns="https://github.com/avaloniaui"
        Title="CodePlay Avalonia #893" Width="480" Height="220">
    <TextBlock Text="Avalonia Skia Cross-Platform UI Active!"
               HorizontalAlignment="Center" VerticalAlignment="Center"/>
</Window>`,
    explanation: "Avalonia renders every control cleanly via Skia across Windows, macOS, Linux, iOS, Android, and browsers, offering a true cross-platform successor to WPF.",
    expectedOutput: `[Avalonia Skia] Window "CodePlay Avalonia #893" composed on cross-platform surface.`
  },
  {
    id: 894,
    name: "Uno Platform",
    slug: "uno-platform",
    cssClass: "uno-platform-lang",
    category: "cross-platform-winui",
    categoryLabel: "Cross-Platform WinUI Engine",
    logo: "assets/logos/uno-platform.svg",
    shortDesc: "Single-codebase .NET platform compiling WinUI XAML apps natively for WebAssembly, iOS, Android, macOS, and Linux.",
    paradigm: "Declarative WinUI XAML / MVUX & MVVM",
    designedBy: "nventive (Uno Platform Team)",
    firstAppeared: "2018",
    fileExtension: ".xaml, .cs",
    primaryUse: "Pixel-accurate WinUI applications targeting desktop, mobile, and browser WebAssembly simultaneously",
    syntaxSummary: "Standard WinUI 3 XAML and C# Markup running on Skia or native platform view trees.",
    sampleCode: `<Page xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation">
    <Grid Padding="24">
        <TextBlock Text="Uno Platform: 1 Codebase, All Targets (#894)"/>
    </Grid>
</Page>`,
    explanation: "Uno Platform implements the WinUI API contract across non-Windows platforms so teams share 100% of XAML views and C# logic across browsers, phones, and desktops.",
    expectedOutput: `[Uno Platform] WinUI XAML tree compiled for Wasm + Desktop + Mobile.`
  },
  {
    id: 895,
    name: "Delphi FMX",
    slug: "delphi-fmx",
    cssClass: "delphi-fmx-lang",
    category: "pascal-gpu-gui",
    categoryLabel: "FireMonkey GPU Pascal UI",
    logo: "assets/logos/delphi-fmx.svg",
    shortDesc: "Embarcadero FireMonkey GPU-accelerated UI framework for compiling Delphi Object Pascal across 5 platforms.",
    paradigm: "Object-Oriented / Visual Component RAD",
    designedBy: "Embarcadero Technologies (Eugene Kryukov)",
    firstAppeared: "2011",
    fileExtension: ".pas, .fmx",
    primaryUse: "Native GPU-rendered desktop and mobile apps in Delphi across Windows, macOS, iOS, Android, and Linux",
    syntaxSummary: "Object Pascal event handlers coupled with nested .fmx visual control trees and LiveBindings.",
    sampleCode: `procedure TFormMain.BtnRunClick(Sender: TObject);
begin
  LabelStatus.Text := 'Delphi FireMonkey GPU UI Active (#895)';
end;`,
    explanation: "FireMonkey (FMX) complements Windows-only VCL by rendering 2D/3D vector components directly via Direct2D, Metal, OpenGL, and Vulkan.",
    expectedOutput: `[Delphi FMX] LabelStatus updated -> "Delphi FireMonkey GPU UI Active (#895)"`
  },
  {
    id: 896,
    name: "Lazarus LCL",
    slug: "lazarus-lcl",
    cssClass: "lazarus-lcl-lang",
    category: "free-pascal-gui",
    categoryLabel: "Lazarus Component Library",
    logo: "assets/logos/lazarus-lcl.svg",
    shortDesc: "Free Pascal's cross-platform visual component library providing VCL-compatible native widgets across OS widgetsets.",
    paradigm: "Object-Oriented / Native Widgetset RAD",
    designedBy: "Lazarus & Free Pascal Team",
    firstAppeared: "1999",
    fileExtension: ".pas, .lfm",
    primaryUse: "Write-once-compile-anywhere native Win32, GTK2/3, Qt5/6, and macOS Cocoa applications",
    syntaxSummary: "TForm, TButton, TPanel components serialized in .lfm files wired to Free Pascal event procedures.",
    sampleCode: `unit UnitMain;
{$mode objfpc}{$H+}
procedure TMainForm.FormCreate(Sender: TObject);
begin
  Caption := 'Lazarus LCL Cross-Widget Window (#896)';
end;`,
    explanation: "The Lazarus Component Library (LCL) abstracts native operating system widgetsets behind a clean Delphi-compatible Object Pascal API.",
    expectedOutput: `[Lazarus LCL] TMainForm bound to native widgetset (#896)`
  },
  {
    id: 897,
    name: "Kivy",
    slug: "kivy",
    cssClass: "kivy-lang",
    category: "python-nui-gui",
    categoryLabel: "Python Multi-Touch NUI",
    logo: "assets/logos/kivy.svg",
    shortDesc: "Open-source Python framework for GPU-accelerated multi-touch NUI applications and custom KV language layouts.",
    paradigm: "OOP + Declarative KV Rule Language",
    designedBy: "Mathieu Virbel, Thomas Hansen",
    firstAppeared: "2011",
    fileExtension: ".py, .kv",
    primaryUse: "Touchscreen kiosks, cross-platform Android/iOS Python apps, and custom creative interfaces",
    syntaxSummary: "Python App subclasses paired with indentation-based .kv widget layout and property-binding rules.",
    sampleCode: `from kivy.app import App
from kivy.uix.label import Label

class CodePlayApp(App):
    def build(self):
        return Label(text='Kivy OpenGL ES Canvas Active (#897)')

print('Kivy NUI Widget Ready')`,
    explanation: "Kivy builds its own OpenGL ES 2 graphics pipeline wrapped in Cython, allowing Python developers to ship multi-touch mobile and kiosk applications.",
    expectedOutput: `Kivy NUI Widget Ready`
  },
  {
    id: 898,
    name: "BeeWare",
    slug: "beeware",
    cssClass: "beeware-lang",
    category: "python-native-mobile",
    categoryLabel: "Native Python App Suite",
    logo: "assets/logos/beeware.svg",
    shortDesc: "Write-once-deploy-everywhere Python toolchain featuring the Toga native GUI toolkit and Briefcase packager.",
    paradigm: "Object-Oriented / Native OS Widget Bridge",
    designedBy: "Russell Keith-Magee",
    firstAppeared: "2014",
    fileExtension: ".py, .toml",
    primaryUse: "Native Python apps packaged as macOS .app, Windows .msi, Linux AppImage, iOS, and Android apps",
    syntaxSummary: "toga.App and toga.Box CSS-flexbox layouts translated straight into Cocoa, GTK, WinForms, UIKit, or Android.",
    sampleCode: `import toga

def build(app):
    box = toga.Box()
    box.add(toga.Label('BeeWare Toga Native Widget Active (#898)'))
    return box

print('BeeWare Briefcase + Toga Initialized')`,
    explanation: "Rather than drawing custom UI widgets, BeeWare's Toga library bridges Python directly to each operating system's genuine native widget toolkit.",
    expectedOutput: `BeeWare Briefcase + Toga Initialized`
  },
  {
    id: 899,
    name: "Dear PyGui",
    slug: "dear-pygui",
    cssClass: "dear-pygui-lang",
    category: "python-gpu-gui",
    categoryLabel: "Python GPU Immediate GUI",
    logo: "assets/logos/dear-pygui.svg",
    shortDesc: "Blazing-fast GPU-accelerated Python GUI framework wrapping Dear ImGui for real-time scientific plots and dashboards.",
    paradigm: "Immediate Mode C++ Core / Python Context API",
    designedBy: "Jonathan Hoffstadt, Preston Cothren",
    firstAppeared: "2020",
    fileExtension: ".py",
    primaryUse: "High-FPS engineering tools, real-time telemetry plotters, node editors, and ML visualizers",
    syntaxSummary: "Context-manager widget builders (with dpg.window(): dpg.add_button()) backed by DirectX/Metal/Vulkan.",
    sampleCode: `import dearpygui.dearpygui as dpg

dpg.create_context()
with dpg.window(label="CodePlay Telemetry #899"):
    dpg.add_text("Dear PyGui 60fps GPU Viewport Ready")
print("Dear PyGui Context Initialized cleanly.")`,
    explanation: "Dear PyGui exposes a Pythonic retained-style wrapper over an ultra-fast C++ immediate-mode GPU backend capable of plotting millions of points smoothly.",
    expectedOutput: `Dear PyGui Context Initialized cleanly.`
  },
  {
    id: 900,
    name: "Dear ImGui",
    slug: "dear-imgui",
    cssClass: "dear-imgui-lang",
    category: "cpp-immediate-gui",
    categoryLabel: "Immediate-Mode C++ GUI",
    logo: "assets/logos/dear-imgui.svg",
    shortDesc: "Bloat-free immediate-mode C++ graphical user interface library powering game engines, debuggers, and GPU tools.",
    paradigm: "Immediate-Mode Procedural GUI",
    designedBy: "Omar Cornut",
    firstAppeared: "2014",
    fileExtension: ".cpp, .h",
    primaryUse: "AAA game engine editors, graphics debuggers (RenderDoc), and real-time C++ profiling overlays",
    syntaxSummary: "Zero retained state: ImGui::Begin(), ImGui::Button(), ImGui::SliderFloat(), ImGui::End() called every frame.",
    sampleCode: `// Dear ImGui Frame Render Loop (#900)
ImGui::Begin("CodePlay Engine Inspector");
ImGui::Text("900 Programming Languages Catalog Complete!");
if (ImGui::Button("Run Diagnostics")) {
    // Triggered directly on click frame
}
ImGui::End();`,
    explanation: "Dear ImGui revolutionized C++ tooling by eliminating complex widget trees: UI controls are simply imperative function calls emitted every frame straight to vertex buffers.",
    expectedOutput: `[Dear ImGui Frame #1] Emitted 2 draw lists (CodePlay Engine Inspector) | 900 Entries Complete!`
  }
];

const outPath = path.resolve(__dirname, '../data/section17-entries.js');
const fileContent = `// Section 17 Entries Dataset (851-900)\n// Generated for CodePlay - 50 Programming Languages & Technologies\nexport const section17Entries = ${JSON.stringify(entries, null, 2)};\n`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Generated ${entries.length} Section 17 entries into data/section17-entries.js!`);
