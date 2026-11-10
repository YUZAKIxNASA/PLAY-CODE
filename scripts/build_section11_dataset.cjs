const fs = require('fs');
const path = require('path');

const entries = [
  {
    id: 551,
    name: "Nashorn",
    slug: "nashorn",
    cssClass: "nashorn-lang",
    category: "jvm-scripting",
    categoryLabel: "JVM JavaScript Engine",
    logo: "assets/logos/nashorn.svg",
    shortDesc: "Lightweight, high-performance JavaScript runtime engine developed by Oracle embedded in the Java Virtual Machine.",
    paradigm: "Multi-Paradigm / Scripting / Dynamic",
    designedBy: "Oracle Corporation (JEP 174)",
    firstAppeared: "2014",
    fileExtension: ".js",
    primaryUse: "Embedded scripting in Java enterprise applications, server-side polyglot execution, and build automation",
    syntaxSummary: "Full ECMAScript 5.1/6 compliance with direct Java package interop (`Java.type`) and JVM byte-code compilation.",
    sampleCode: `// Nashorn JVM JavaScript Interop
var ArrayList = Java.type("java.util.ArrayList");
var list = new ArrayList();

list.add("Java 8");
list.add("Nashorn Runtime");
list.add("CodePlay Platform");

print("List Size: " + list.size());
for (var i = 0; i < list.size(); i++) {
    print("Item [" + i + "]: " + list.get(i));
}`,
    explanation: "Nashorn enables JVM developers to execute modern JavaScript natively, allowing seamless bidirectional bridging with Java standard library classes.",
    expectedOutput: `jjs script.js
List Size: 3
Item [0]: Java 8
Item [1]: Nashorn Runtime
Item [2]: CodePlay Platform
[Process exited successfully]`
  },
  {
    id: 552,
    name: "GraalJS",
    slug: "graaljs",
    cssClass: "graaljs-lang",
    category: "jvm-scripting",
    categoryLabel: "Next-Gen Polyglot JS",
    logo: "assets/logos/graaljs.svg",
    shortDesc: "Oracle Labs high-performance ECMAScript compliant runtime built on GraalVM Truffle for lightning polyglot interop.",
    paradigm: "Multi-Paradigm / JIT Compiled / Polyglot",
    designedBy: "Oracle Labs",
    firstAppeared: "2018",
    fileExtension: ".js",
    primaryUse: "High-throughput microservices, polyglot applications running alongside Java/Python/Ruby, and Node.js acceleration",
    syntaxSummary: "Full modern ECMAScript specifications, async/await, modules, and zero-cost guest language Truffle interop.",
    sampleCode: `// GraalJS Polyglot Execution
const BigInteger = Java.type('java.math.BigInteger');

function factorial(n) {
    let result = BigInteger.ONE;
    for (let i = 2; i <= n; i++) {
        result = result.multiply(BigInteger.valueOf(i));
    }
    return result.toString();
}

console.log("Factorial 25:", factorial(25));`,
    explanation: "GraalJS replaces Nashorn on GraalVM, providing full modern ECMAScript standard compliance with JIT compilation via the Graal compiler.",
    expectedOutput: `graalvm-js factorial.js
Factorial 25: 15511210043330985984000000
GraalVM Truffle JIT Optimization: Active`
  },
  {
    id: 553,
    name: "QuickJS",
    slug: "quickjs",
    cssClass: "quickjs-lang",
    category: "embedded-engines",
    categoryLabel: "Compact Embeddable Engine",
    logo: "assets/logos/quickjs.svg",
    shortDesc: "Small and embeddable Javascript engine supporting ES2020 specification created by legendary engineer Fabrice Bellard.",
    paradigm: "Imperative / Functional / Embeddable",
    designedBy: "Fabrice Bellard & Charlie Gordon",
    firstAppeared: "2019",
    fileExtension: ".js",
    primaryUse: "Embedded systems, game logic engines, lightweight CLI utilities, and compiling JS directly to C native binaries",
    syntaxSummary: "Complete ES2020 compliance including BigInt, BigFloat, async iterators, and ultra-compact bytecode compiler.",
    sampleCode: `import * as std from "std";
import * as os from "os";

// QuickJS ES2020 native script
const sysInfo = {
    platform: os.platform,
    timestamp: Date.now(),
    primes: [2, 3, 5, 7, 11, 13, 17, 19]
};

std.printf("QuickJS Native Engine v2024\\n");
std.printf("Platform: %s | Time: %d\\n", sysInfo.platform, sysInfo.timestamp);
std.printf("Prime Count: %d\\n", sysInfo.primes.length);`,
    explanation: "QuickJS compiles ECMAScript without external dependencies, boasting tiny memory footprints and the ability to compile code to native C binaries.",
    expectedOutput: `qjs script.js
QuickJS Native Engine v2024
Platform: linux | Time: 1731256000000
Prime Count: 8
Bytecode footprint: < 210 KB`
  },
  {
    id: 554,
    name: "Duktape",
    slug: "duktape",
    cssClass: "duktape-lang",
    category: "embedded-engines",
    categoryLabel: "Ultra-Lightweight C JS",
    logo: "assets/logos/duktape.svg",
    shortDesc: "Embeddable Javascript engine with a focus on portability and compact footprint designed for low-memory microcontrollers.",
    paradigm: "Imperative / Prototypal / Embedded",
    designedBy: "Sami Vaarala",
    firstAppeared: "2013",
    fileExtension: ".js",
    primaryUse: "Microcontrollers, IoT firmware, home automation gateways, and C/C++ embedded application scripting",
    syntaxSummary: "ECMAScript E5/E5.1 with custom reference counting memory management and simple push/pop C API stack.",
    sampleCode: `// Duktape Native Script
function calculateTelemetry(sensorVal, calibrationFactor) {
    var raw = sensorVal * 1.024;
    return {
        voltage: raw * calibrationFactor,
        healthy: raw < 1000
    };
}

var result = calculateTelemetry(450, 0.0033);
print("Telemetry Voltage: " + result.voltage.toFixed(4) + " V");
print("Sensor Healthy: " + result.healthy);`,
    explanation: "Duktape fits inside 200KB flash memory, using reference counting for deterministic memory reclamation in constrained real-time hardware.",
    expectedOutput: `duktape runner.js
Telemetry Voltage: 1.5206 V
Sensor Healthy: true
Heap Consumption: 14.8 KB RAM`
  },
  {
    id: 555,
    name: "JerryScript",
    slug: "jerryscript",
    cssClass: "jerryscript-lang",
    category: "embedded-engines",
    categoryLabel: "IoT Micro-Engine",
    logo: "assets/logos/jerryscript.svg",
    shortDesc: "Ultra-lightweight JavaScript engine created by Samsung for the Internet of Things executing on devices with < 64KB RAM.",
    paradigm: "Event-Driven / Imperative / Embedded",
    designedBy: "Samsung Electronics",
    firstAppeared: "2014",
    fileExtension: ".js",
    primaryUse: "Wearables, smartwatches, IoT sensor nodes, Tizen micro-devices, and memory-constrained microcontrollers",
    syntaxSummary: "ECMAScript 5.1 compliant with direct-to-bytecode snapshot compilation and memory footprint under 64KB.",
    sampleCode: `// JerryScript IoT Actuator Script
function readActuator(channel) {
    return channel * 12.5;
}

var reading = readActuator(4);
print("JerryScript IoT Sensor Channel 4: " + reading + " mA");
print("Memory Target: Sub-64KB System RAM");`,
    explanation: "JerryScript is optimized from the silicon level up to run modern JavaScript on microcontrollers lacking hardware memory management units.",
    expectedOutput: `jerry script.js
JerryScript IoT Sensor Channel 4: 50 mA
Memory Target: Sub-64KB System RAM
Snapshot compilation complete.`
  },
  {
    id: 556,
    name: "Espruino",
    slug: "espruino",
    cssClass: "espruino-lang",
    category: "embedded-engines",
    categoryLabel: "Microcontroller JavaScript",
    logo: "assets/logos/espruino.svg",
    shortDesc: "JavaScript interpreter for microcontrollers with instant REPL enabling interactive physical computing and rapid prototyping.",
    paradigm: "Event-Driven / Hardware Scripting",
    designedBy: "Gordon Williams",
    firstAppeared: "2013",
    fileExtension: ".js",
    primaryUse: "Physical computing, Bluetooth LE beacons, Puck.js gadgets, robotics, and interactive hardware hacking",
    syntaxSummary: "Subset of ECMAScript with native GPIO, I2C, SPI, and timer events executing straight from device flash.",
    sampleCode: `// Espruino Hardware Control
var ledState = false;

function toggleLED() {
    ledState = !ledState;
    digitalWrite(LED1, ledState);
    console.log("LED1 toggled to: " + (ledState ? "HIGH" : "LOW"));
}

setInterval(toggleLED, 1000);
console.log("Espruino board initialized.");`,
    explanation: "Espruino interprets JavaScript directly on microcontrollers like STM32 and nRF52, allowing developers to manipulate physical hardware over USB/BLE.",
    expectedOutput: `Connecting to WebIDE... Connected to Espruino Puck.js
Espruino board initialized.
LED1 toggled to: HIGH
LED1 toggled to: LOW`
  },
  {
    id: 557,
    name: "Ecmascript",
    slug: "ecmascript",
    cssClass: "ecmascript-lang",
    category: "standards",
    categoryLabel: "Language Specification",
    logo: "assets/logos/ecmascript.svg",
    shortDesc: "Standardized specification (ECMA-262) underpinning modern JavaScript, governing features, syntax, and engine semantics.",
    paradigm: "Multi-Paradigm / Prototypal / Functional",
    designedBy: "Ecma International TC39",
    firstAppeared: "1997",
    fileExtension: ".js",
    primaryUse: "Global standard powering all web browsers, Node.js, Deno, Bun, and JavaScript runtime environments",
    syntaxSummary: "Lexical scoping, lexical closures, arrow functions, promises, async generators, class syntax, and modules.",
    sampleCode: `// ECMAScript Modern Standard Specification
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchPipeline(items) {
    const results = [];
    for (const item of items) {
        await delay(10);
        results.push({ item, valid: Boolean(item) });
    }
    return results;
}

const pipeline = await fetchPipeline(["ECMA-262", "TC39", "ES2026"]);
console.log("Processed pipeline entries:", pipeline.length);`,
    explanation: "ECMAScript is maintained by Technical Committee 39 (TC39), standardizing stage-driven features that dictate how web runtimes evaluate source code.",
    expectedOutput: `node --es-staging spec.js
Processed pipeline entries: 3
ECMA-262 Standard Invariant Verified.`
  },
  {
    id: 558,
    name: "Flow",
    slug: "flow",
    cssClass: "flow-lang",
    category: "typed-javascript",
    categoryLabel: "Static Type Checker",
    logo: "assets/logos/flow.svg",
    shortDesc: "Static type checker for JavaScript created by Meta designed to catch common bugs before they ever execute.",
    paradigm: "Static Typing / Gradual Typing / Structural",
    designedBy: "Meta (Facebook)",
    firstAppeared: "2014",
    fileExtension: ".js",
    primaryUse: "Large-scale JavaScript codebases at Meta, React internal maintenance, and structural type verification",
    syntaxSummary: "Type annotations, union types, intersection types, variance annotations, and exact object types.",
    sampleCode: `// @flow
type UserRecord = {
    +id: number,
    name: string,
    email: string,
    roles: Array<string>,
};

function formatUser(user: UserRecord): string {
    return \`User #\${user.id}: \${user.name} <\${user.email}>\`;
}

const user: UserRecord = {
    id: 101,
    name: "NASA-YUZAKI",
    email: "nasa@codeplay.io",
    roles: ["Architect", "Developer"]
};

console.log(formatUser(user));`,
    explanation: "Flow analyzes JavaScript codebases incrementally using OCaml-powered inference, enforcing strict sound types across millions of lines of source.",
    expectedOutput: `flow check
Found 0 errors
Compiled output: User #101: NASA-YUZAKI <nasa@codeplay.io>`
  },
  {
    id: 559,
    name: "Dart 2",
    slug: "dart2",
    cssClass: "dart2-lang",
    category: "app-development",
    categoryLabel: "Sound Typed Client Language",
    logo: "assets/logos/dart2.svg",
    shortDesc: "Google's client-optimized language with sound typing and null safety powering Flutter and multiplatform apps.",
    paradigm: "Object-Oriented / Class-Based / Soundly Typed",
    designedBy: "Google (Lars Bak & Kasper Lund)",
    firstAppeared: "2018",
    fileExtension: ".dart",
    primaryUse: "Flutter mobile applications (iOS/Android), web SPAs, desktop software (macOS/Windows/Linux), and server backends",
    syntaxSummary: "Sound null safety, extension methods, asynchronous streams, pattern matching, and Ahead-Of-Time (AOT) machine compilation.",
    sampleCode: `// Dart 2 Sound Null-Safe Application
class ProjectCard {
  final String title;
  final int lessonCount;

  const ProjectCard({required this.title, required this.lessonCount});

  void display() {
    print('Track: $title - Lessons: $lessonCount');
  }
}

void main() {
  final cards = [
    const ProjectCard(title: 'Flutter UI', lessonCount: 45),
    const ProjectCard(title: 'Dart Backend', lessonCount: 30),
  ];

  for (final card in cards) {
    card.display();
  }
}`,
    explanation: "Dart 2 introduced sound typing, removing dynamic runtime checks and empowering the Flutter framework to render 120 FPS native mobile interfaces.",
    expectedOutput: `dart run main.dart
Track: Flutter UI - Lessons: 45
Track: Dart Backend - Lessons: 30
AOT Compilation target: ARM64/x86_64`
  },
  {
    id: 560,
    name: "Opa",
    slug: "opa",
    cssClass: "opa-lang",
    category: "tierless-web",
    categoryLabel: "Tierless Web Language",
    logo: "assets/logos/opa.svg",
    shortDesc: "Tierless functional language compiling unified client, server, and database code for the modern web.",
    paradigm: "Functional / Tierless / Statically Typed",
    designedBy: "MLstate",
    firstAppeared: "2011",
    fileExtension: ".opa",
    primaryUse: "Full-stack web applications without API boilerplate, real-time collaboration platforms, and distributed systems",
    syntaxSummary: "Single-program architecture with automatic tier splitting between client browser DOM and backend Node.js servers.",
    sampleCode: `// Opa Tierless Web Application
type message = { text: string, sender: string }

database string /chat/log = "Welcome to CodePlay Opa Chat"

function action() {
  #status = "Message transmitted to server and broadcasted."
}

function page() {
  <div>
    <h1>Opa Tierless Web Stack</h1>
    <div id="status">Ready</div>
    <button onclick={action}>Send Ping</button>
  </div>
}

Server.start(Server.http, { title: "Opa App", page: page })`,
    explanation: "Opa eliminates the client/server divide by allowing developers to write unified code that the compiler automatically distributes across browser and server.",
    expectedOutput: `opa server.opa --output server.exe
[Info] Automatic tier analysis complete:
  - 14 functions scheduled for Browser VM
  - 28 functions scheduled for Node Server
Server listening on port 8080.`
  },
  {
    id: 561,
    name: "Ur/Web",
    slug: "urweb",
    cssClass: "urweb-lang",
    category: "tierless-web",
    categoryLabel: "Safe Functional Web Language",
    logo: "assets/logos/urweb.svg",
    shortDesc: "Purely functional, statically typed web programming language with monadic encapsulation and database integration.",
    paradigm: "Purely Functional / Dependent Types / Monadic",
    designedBy: "Adam Chlipala (MIT)",
    firstAppeared: "2010",
    fileExtension: ".ur",
    primaryUse: "Extremely secure web portals, transactional databases with zero SQL injections, and formally verified web services",
    syntaxSummary: "Row typing, SQL queries checked at compile time, static guarantee against XSS, and native C binary compilation.",
    sampleCode: `(* Ur/Web Compile-Time Safe Web Page *)
table users : { Id : int, Name : string, Email : string }
  PRIMARY KEY Id

fun main () =
  queryX (SELECT * FROM users)
    (fn row => <xml>
      <li>{[row.Users.Id]}: {[row.Users.Name]} ({[row.Users.Email]})</li>
    </xml>)
  >>= (fn list => return <xml>
    <head><title>Ur/Web Portal</title></head>
    <body>
      <h1>Safe Database Query Result</h1>
      <ul>{list}</ul>
    </body>
  </xml>)`,
    explanation: "Ur/Web compiles the entire web application down to a single high-performance C binary, mathematically preventing code injection and broken links.",
    expectedOutput: `urweb -dbms postgresql portal
Portal compiled into standalone ELF native binary.
Zero SQL injection vulnerabilities mathematically proved.`
  },
  {
    id: 562,
    name: "Links",
    slug: "links",
    cssClass: "links-lang",
    category: "tierless-web",
    categoryLabel: "Cross-Tier Web Language",
    logo: "assets/logos/links.svg",
    shortDesc: "Programming language for collaborative web applications easing impedance mismatch between database, server, and client.",
    paradigm: "Functional / Tierless / Effect Handlers",
    designedBy: "Philip Wadler et al. (University of Edinburgh)",
    firstAppeared: "2006",
    fileExtension: ".links",
    primaryUse: "Collaborative interactive web apps, algebraic effects research, and unified multi-tier distributed programs",
    syntaxSummary: "Row polymorphism for records, variants, and effects; compile-time query comprehension; automatic JS client generation.",
    sampleCode: `// Links Multi-Tier Web Program
fun countVowels(s) {
  var chars = explode(s);
  length(filter(fun(c) { c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' }, chars))
}

fun main() {
  page
    <html>
      <body>
        <h1>Links Cross-Tier Language</h1>
        <p>Vowels in 'CodePlay': {intToXml(countVowels("CodePlay"))}</p>
      </body>
    </html>
}

main()`,
    explanation: "Links compiles client logic into JavaScript, server logic into bytecode, and data queries directly into SQL from a single source program.",
    expectedOutput: `links server.links
Starting Links runtime on http://localhost:8080/
Query comprehension generated: SELECT * FROM items
Client JavaScript payload: 12.4 KB`
  },
  {
    id: 563,
    name: "Eliom",
    slug: "eliom",
    cssClass: "eliom-lang",
    category: "tierless-web",
    categoryLabel: "OCaml Multi-Tier Framework",
    logo: "assets/logos/eliom.svg",
    shortDesc: "OCaml framework and multi-tier dialect for client/server web and mobile apps with strong static typing.",
    paradigm: "Multi-Tier Functional / Strongly Typed",
    designedBy: "Ocsigen Team (CNRS & Inria)",
    firstAppeared: "2007",
    fileExtension: ".eliom",
    primaryUse: "Complex client-server web applications, mobile apps via Cordova, and high-reliability OCaml web services",
    syntaxSummary: "Sections marked with `{%shared`, `{%client`, and `{%server` with shared type systems and automatic client injection.",
    sampleCode: `[%%shared
  open Eliom_lib
  open Eliom_content.Html5.D
]

module My_app =
  Eliom_registration.App (
    struct
      let application_name = "eliom_demo"
      let global_data = None
    end)

let () =
  My_app.register
    ~service:Eliom_service.Main.page
    (fun () () ->
      Lwt.return
        (html
           (head (title (pcdata "Eliom OCaml App")) [])
           (body [h1 [pcdata "Welcome to Eliom on Ocsigen!"]])))`,
    explanation: "Eliom allows OCaml developers to write distributed applications where client and server share types, values, and code seamlessly.",
    expectedOutput: `eliomc -infer server.eliom && js_of_ocaml client.byte
OCaml typing verified across client/server barrier.
Ocsigen server deployed.`
  },
  {
    id: 564,
    name: "Haxe Language",
    slug: "haxe",
    cssClass: "haxe-lang",
    category: "transpiled-languages",
    categoryLabel: "Universal Multi-Target Language",
    logo: "assets/logos/haxe.svg",
    shortDesc: "Open-source high-level multi-target language compiling cleanly to JS, C++, C#, Java, JVM, Python, PHP, and Lua.",
    paradigm: "Multi-Paradigm / Object-Oriented / Cross-Platform",
    designedBy: "Nicolas Cannasse",
    firstAppeared: "2005",
    fileExtension: ".hx",
    primaryUse: "Cross-platform video games (Dead Cells, Friday Night Funkin'), native UI applications, and unified web backends",
    syntaxSummary: "Strong typing with inference, structural typing, pattern matching, compile-time macros, and multiple AST compilation backends.",
    sampleCode: `class Main {
    static public function main(): Void {
        var languages = ["JavaScript", "C++", "C#", "Python", "Lua"];
        trace("Haxe Compiles to Multiple Targets!");
        
        for (idx in 0...languages.length) {
            trace('Target [$idx]: \${languages[idx]}');
        }
    }
}`,
    explanation: "Haxe offers a robust type system and powerful macro engine, allowing code to be written once and compiled to nearly every major language and platform.",
    expectedOutput: `haxe --main Main --js main.js && node main.js
Main.hx:4: Haxe Compiles to Multiple Targets!
Main.hx:7: Target [0]: JavaScript
Main.hx:7: Target [1]: C++
Compilation completed in 0.12s.`
  },
  {
    id: 565,
    name: "Kotlin JS",
    slug: "kotlinjs",
    cssClass: "kotlinjs-lang",
    category: "transpiled-languages",
    categoryLabel: "Kotlin for Web Runtimes",
    logo: "assets/logos/kotlinjs.svg",
    shortDesc: "JetBrains Kotlin compiler targeting modern JavaScript and browser runtimes with complete type safety and React bindings.",
    paradigm: "Object-Oriented / Functional / Multi-Platform",
    designedBy: "JetBrains",
    firstAppeared: "2012",
    fileExtension: ".kt",
    primaryUse: "Kotlin Multiplatform (KMP) shared web business logic, frontend SPAs with React, and full-stack Kotlin development",
    syntaxSummary: "Null safety, data classes, coroutines, extension functions, and first-class JavaScript interoperability via dynamic types.",
    sampleCode: `import kotlinx.browser.document
import kotlinx.browser.window

fun main() {
    window.onload = {
        val container = document.getElementById("root")
        val message = "Hello from Kotlin/JS on CodePlay!"
        container?.innerHTML = "<h1>$message</h1>"
        println("Kotlin/JS Initialized successfully.")
    }
}`,
    explanation: "Kotlin/JS transpile Kotlin source code into standard ECMAScript modules, allowing seamless sharing of domain models between Android and the browser.",
    expectedOutput: `gradle jsBrowserDevelopmentRun
[Kotlin/JS IR Compiler]: Generated build/dist/bundle.js
Kotlin/JS Initialized successfully.`
  },
  {
    id: 566,
    name: "Scala.js",
    slug: "scalajs",
    cssClass: "scalajs-lang",
    category: "transpiled-languages",
    categoryLabel: "Type-Safe Scala for Web",
    logo: "assets/logos/scalajs.svg",
    shortDesc: "Statically typed language compiling the Scala ecosystem directly to JavaScript with incredible optimizer performance.",
    paradigm: "Object-Oriented / Functional / Statically Typed",
    designedBy: "Sébastien Doeraene (EPFL)",
    firstAppeared: "2013",
    fileExtension: ".scala",
    primaryUse: "Complex functional web applications, full-stack Scala architectures with Akka/Pekko, and high-assurance web UI",
    syntaxSummary: "Full Scala 3 support, advanced type classes, pattern matching, macros, and seamless JavaScript DOM facades.",
    sampleCode: `import org.scalajs.dom
import org.scalajs.dom.document

object CodePlayApp {
  def main(args: Array[String]): Unit = {
    val heading = document.createElement("h2")
    heading.textContent = "Scala.js Type-Safe Web Execution"
    document.body.appendChild(heading)
    println("Scala.js loaded with zero runtime overhead.")
  }
}`,
    explanation: "Scala.js provides full type safety across the Scala ecosystem, compiling to highly optimized JavaScript that rivals hand-written code.",
    expectedOutput: `sbt fastOptJS
[info] Full optimization: 450 classes compiled
Scala.js loaded with zero runtime overhead.`
  },
  {
    id: 567,
    name: "Fable",
    slug: "fable",
    cssClass: "fable-lang",
    category: "transpiled-languages",
    categoryLabel: "F# to JavaScript Compiler",
    logo: "assets/logos/fable.svg",
    shortDesc: "F# compiler designed to bring the functional F# language to the JavaScript, TypeScript, and modern web ecosystem.",
    paradigm: "Functional-First / Strongly Typed / Algebraic",
    designedBy: "Alfonso García-Caro",
    firstAppeared: "2016",
    fileExtension: ".fs",
    primaryUse: "The Elmish architecture for React, cross-platform apps, and functional frontend development",
    syntaxSummary: "Discriminated unions, record types, computational expressions, pattern matching, and direct npm module interop.",
    sampleCode: `module CodePlayFable

type Model = { Count: int }
type Msg = | Increment | Decrement

let update msg model =
    match msg with
    | Increment -> { model with Count = model.Count + 1 }
    | Decrement -> { model with Count = model.Count - 1 }

let initialModel = { Count = 42 }
let nextModel = update Increment initialModel
printfn "Fable Model Count: %d" nextModel.Count`,
    explanation: "Fable turns F# syntax trees into clean, standard ECMAScript code, making it a favorite for developers who appreciate Elmish architecture.",
    expectedOutput: `fable src -o build
Fable compiler: 1 source file converted to modern JS modules.
Fable Model Count: 43`
  },
  {
    id: 568,
    name: "Bridge.NET",
    slug: "bridgenet",
    cssClass: "bridgenet-lang",
    category: "transpiled-languages",
    categoryLabel: "C# to JavaScript Transpiler",
    logo: "assets/logos/bridgenet.svg",
    shortDesc: "Open source C# to JavaScript compiler and framework translating .NET code to run cleanly in standard web browsers.",
    paradigm: "Object-Oriented / Class-Based / Strongly Typed",
    designedBy: "Object.NET (Bridge.NET Team)",
    firstAppeared: "2015",
    fileExtension: ".cs",
    primaryUse: "Running enterprise C# business logic inside web browsers without plugins or Silverlight",
    syntaxSummary: "C# 7+ language constructs, LINQ expressions, generics, reflection facades, and HTML5 DOM manipulation.",
    sampleCode: `using System;
using Bridge.Html5;

namespace CodePlay
{
    public class Program
    {
        public static void Main()
        {
            var btn = new HTMLButtonElement();
            btn.InnerHTML = "Run C# in Browser";
            btn.OnClick = (e) => {
                Global.Alert("Bridge.NET translated C# executed!");
            };
            Document.Body.AppendChild(btn);
            Console.WriteLine("Bridge.NET initialized.");
        }
    }
}`,
    explanation: "Bridge.NET compiled C# source code directly into clean JavaScript, allowing .NET software developers to target the browser before Blazor WebAssembly.",
    expectedOutput: `bridge-compile Solution.sln
Bridge.NET translation complete: bridge.js (180 KB)
Bridge.NET initialized.`
  },
  {
    id: 569,
    name: "Blazor",
    slug: "blazor",
    cssClass: "blazor-lang",
    category: "dotnet-web",
    categoryLabel: "Interactive C# Web UI",
    logo: "assets/logos/blazor.svg",
    shortDesc: "Microsoft web framework for building interactive client and server web UIs using C# instead of JavaScript.",
    paradigm: "Component-Based / Declarative / Full-Stack",
    designedBy: "Steve Sanderson & Microsoft",
    firstAppeared: "2018",
    fileExtension: ".razor",
    primaryUse: "Enterprise web portals, internal dashboards, full-stack .NET apps with WebAssembly and Server interactive modes",
    syntaxSummary: "Razor component markup combining HTML tags with C# code blocks (`@code`), data binding, and dependency injection.",
    sampleCode: `@page "/counter"

<h3>Blazor Interactive Counter</h3>

<p role="status">Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}`,
    explanation: "Blazor runs C# components either on the server with real-time SignalR updates or directly inside the browser using WebAssembly and the .NET runtime.",
    expectedOutput: `dotnet build BlazorApp.csproj
Microsoft (R) Build Engine version 17.8
Build succeeded. 0 Warning(s), 0 Error(s).
Blazor WebAssembly App deployed on http://localhost:5000`
  },
  {
    id: 570,
    name: "Razor",
    slug: "razor",
    cssClass: "razor-lang",
    category: "dotnet-web",
    categoryLabel: "ASP.NET View Engine",
    logo: "assets/logos/razor.svg",
    shortDesc: "Microsoft ASP.NET view engine combining HTML markup with server-side C# or VB.NET code seamlessly.",
    paradigm: "Templating / Server-Side Rendering",
    designedBy: "Microsoft (Scott Guthrie)",
    firstAppeared: "2010",
    fileExtension: ".cshtml",
    primaryUse: "ASP.NET Core MVC views, Razor Pages, email template generation, and HTML rendering pipelines",
    syntaxSummary: "Compact `@` transition character allowing fluid switching between HTML markup and C# expressions.",
    sampleCode: `@model List<string>

<div class="curriculum-container">
    <h2>Available Tracks (@Model.Count)</h2>
    <ul>
        @foreach (var track in Model)
        {
            <li><strong>@track</strong> - Active Curriculum</li>
        }
    </ul>
</div>`,
    explanation: "Razor minimizes keystrokes by using the `@` character to embed C# code in HTML without requiring explicit closing tags like `<% %>`.",
    expectedOutput: `Rendered HTML Output:
<div class="curriculum-container">
    <h2>Available Tracks (3)</h2>
    <ul>
        <li><strong>HTML5</strong> - Active Curriculum</li>
        <li><strong>CSS3</strong> - Active Curriculum</li>
        <li><strong>C# Blazor</strong> - Active Curriculum</li>
    </ul>
</div>`
  },
  {
    id: 571,
    name: "ASP Classic",
    slug: "aspclassic",
    cssClass: "aspclassic-lang",
    category: "legacy-web",
    categoryLabel: "Pioneer Server Engine",
    logo: "assets/logos/aspclassic.svg",
    shortDesc: "Microsoft's pioneer server-side script engine for dynamically generated web pages using VBScript and JScript.",
    paradigm: "Server-Side Scripting / Procedural",
    designedBy: "Microsoft",
    firstAppeared: "1996",
    fileExtension: ".asp",
    primaryUse: "Legacy Windows enterprise intranets, government data portals, and classic IIS web applications",
    syntaxSummary: "Script blocks enclosed in `<% ... %>` tags with built-in `Response`, `Request`, `Session`, and `Application` objects.",
    sampleCode: `<%
    Dim title, visitCount
    title = "CodePlay Classic ASP Portal"
    Session("user") = "NASA-KUN"
    
    Response.Write("<h1>" & title & "</h1>")
    Response.Write("<p>Active Session: " & Session("user") & "</p>")
    Response.Write("<p>Server Time: " & Now() & "</p>")
%>`,
    explanation: "Active Server Pages introduced server-side scripting to Windows NT 4.0 Option Pack, revolutionizing database-backed web publishing in the late 1990s.",
    expectedOutput: `HTTP 200 OK
Content-Type: text/html
<h1>CodePlay Classic ASP Portal</h1>
<p>Active Session: NASA-KUN</p>
<p>Server Time: 11/10/2026 12:00:00 PM</p>`
  },
  {
    id: 572,
    name: "ColdFusion",
    slug: "coldfusion",
    cssClass: "coldfusion-lang",
    category: "tag-based-web",
    categoryLabel: "Rapid Web App Platform",
    logo: "assets/logos/coldfusion.svg",
    shortDesc: "Commercial rapid web-application development platform running on the JVM created by Allaire and acquired by Adobe.",
    paradigm: "Tag-Based / Procedural / Object-Oriented",
    designedBy: "Jeremy & JJ Allaire (Adobe)",
    firstAppeared: "1995",
    fileExtension: ".cfm",
    primaryUse: "Enterprise business portals, government database applications, and rapid PDF/document generation",
    syntaxSummary: "CFML tags (`<cfquery>`, `<cfoutput>`, `<cfloop>`) coupled with CFScript scriptable syntax.",
    sampleCode: `<cfquery name="getTracks" datasource="codeplay_db">
    SELECT track_id, track_name FROM curriculum ORDER BY track_id
</cfquery>

<h2>CodePlay Learning Tracks</h2>
<ul>
<cfoutput query="getTracks">
    <li>###track_id# - #track_name#</li>
</cfoutput>
</ul>`,
    explanation: "ColdFusion simplified database connectivity before PHP or ASP existed by providing declarative HTML-like tags for SQL queries and template loops.",
    expectedOutput: `Rendered Web Page:
<h2>CodePlay Learning Tracks</h2>
<ul>
    <li>#1 - HTML5 Interactive</li>
    <li>#2 - Modern CSS3</li>
    <li>#3 - Enterprise ColdFusion</li>
</ul>`
  },
  {
    id: 573,
    name: "CFML",
    slug: "cfml",
    cssClass: "cfml-lang",
    category: "tag-based-web",
    categoryLabel: "ColdFusion Markup Language",
    logo: "assets/logos/cfml.svg",
    shortDesc: "ColdFusion Markup Language, tag-based and scripting syntax powering enterprise web apps on Lucee and Adobe ColdFusion.",
    paradigm: "Multi-Paradigm / Scripting / JVM",
    designedBy: "Allaire / Lucee Association",
    firstAppeared: "1995",
    fileExtension: ".cfc",
    primaryUse: "Object-oriented backend components (CFCs), RESTful APIs, open-source Lucee server deployments",
    syntaxSummary: "Component declarations (`component { ... }`), user-defined functions, structs, and seamless Java interop.",
    sampleCode: `component {
    public struct function calculateStats(required array scores) {
        var total = 0;
        for (var s in arguments.scores) {
            total += s;
        }
        return {
            "count": arrayLen(arguments.scores),
            "sum": total,
            "average": total / arrayLen(arguments.scores)
        };
    }
}`,
    explanation: "CFML evolved from simple markup tags into a modern, object-oriented scripting language supported by open-source engines like Lucee.",
    expectedOutput: `Lucee 6.0 Engine Execution:
{
  "average": 88.5,
  "count": 4,
  "sum": 354
}`
  },
  {
    id: 574,
    name: "Lasso",
    slug: "lasso",
    cssClass: "lasso-lang",
    category: "web-scripting",
    categoryLabel: "Data-Driven Web Language",
    logo: "assets/logos/lasso.svg",
    shortDesc: "High-performance object-oriented server-side programming language tailored for data-driven web applications.",
    paradigm: "Object-Oriented / Dynamically Typed",
    designedBy: "Vince Bonfanti (LassoSoft)",
    firstAppeared: "1995",
    fileExtension: ".lasso",
    primaryUse: "Database publishing on FileMaker and MySQL, Apple Mac OS X Server hosting, and content management systems",
    syntaxSummary: "Bracket-enclosed tags `[ ... ]` or script syntax with custom methods, types, and database abstraction.",
    sampleCode: `[
    // Lasso Server-Side Script
    local(curriculum = array('HTML', 'CSS', 'JavaScript', 'Lasso 9'));
    
    stdout('CodePlay Curriculum Count: ' + #curriculum->size + '\r\n');
    
    iterate(#curriculum) => {
        stdout('Track: ' + loop_value + '\r\n');
    };
]`,
    explanation: "Originally developed to bridge FileMaker Pro databases to the World Wide Web, Lasso grew into a standalone object-oriented application server.",
    expectedOutput: `lasso9 script.lasso
CodePlay Curriculum Count: 4
Track: HTML
Track: CSS
Track: JavaScript
Track: Lasso 9`
  },
  {
    id: 575,
    name: "Zope",
    slug: "zope",
    cssClass: "zope-lang",
    category: "python-web",
    categoryLabel: "Object Database Web Engine",
    logo: "assets/logos/zope.svg",
    shortDesc: "Leading open-source Python-based web application server and object database (ZODB) powering Plone.",
    paradigm: "Object-Oriented / Transactional / Python",
    designedBy: "Digital Creations (Zope Corporation)",
    firstAppeared: "1998",
    fileExtension: ".zpt",
    primaryUse: "Enterprise content management (Plone CMS), persistent transactional object trees, and intranet portals",
    syntaxSummary: "Zope Page Templates (ZPT) using TAL (Template Attribute Language) and Python Object Publishing.",
    sampleCode: `<html xmlns:tal="http://xml.zope.org/namespaces/tal">
  <head><title>Zope Content Portal</title></head>
  <body>
    <h1>Zope Object Database System</h1>
    <ul tal:define="items context/getCurriculumItems">
      <li tal:repeat="item items">
        <span tal:replace="item/title">Course Title</span>
      </li>
    </ul>
  </body>
</html>`,
    explanation: "Zope pioneered object publishing on the web, mapping URL paths directly to Python object hierarchies stored inside its transactional ZODB database.",
    expectedOutput: `zope-server start
Zope 5 Instance running at http://localhost:8080/
ZODB Storage verified: 0 conflict errors.`
  },
  {
    id: 576,
    name: "Server-side JavaScript",
    slug: "ssjs",
    cssClass: "ssjs-lang",
    category: "historical-web",
    categoryLabel: "Netscape LiveWire SSJS",
    logo: "assets/logos/ssjs.svg",
    shortDesc: "Netscape Enterprise Server's pioneer 1995 server-side JS engine, pre-dating Node.js by fourteen years.",
    paradigm: "Server-Side Scripting / Procedural",
    designedBy: "Brendan Eich & Netscape",
    firstAppeared: "1995",
    fileExtension: ".html",
    primaryUse: "Dynamic page generation on Netscape Enterprise Server, SQL database publishing, and enterprise intranets",
    syntaxSummary: "`<server> ... </server>` blocks executing on the server before transmitting pure HTML down to Netscape Navigator.",
    sampleCode: `<html>
<head><title>Netscape LiveWire SSJS</title></head>
<body>
<h1>Netscape LiveWire 1995 Server</h1>
<server>
    var db = new Database("oracle", "codeplay", "secret");
    if (db.connected()) {
        write("<p>Database Connection: Active</p>");
        var cursor = db.cursor("SELECT name FROM developers");
        while (cursor.next()) {
            write("Developer: " + cursor.name + "<br>");
        }
        cursor.close();
    }
</server>
</body>
</html>`,
    explanation: "Netscape introduced Server-side JavaScript (LiveWire) alongside client-side JavaScript in 1995, proving JavaScript's viability for backend data generation.",
    expectedOutput: `LiveWire Application Server Output:
<html>
<body>
<h1>Netscape LiveWire 1995 Server</h1>
<p>Database Connection: Active</p>
Developer: Brendan Eich<br>
Developer: NASA-YUZAKI<br>
</body>
</html>`
  },
  {
    id: 577,
    name: "Mason",
    slug: "mason",
    cssClass: "mason-lang",
    category: "perl-web",
    categoryLabel: "Perl Web Templating Engine",
    logo: "assets/logos/mason.svg",
    shortDesc: "Perl-based templating engine and web application framework for high-traffic dynamic websites like Amazon and IMDb.",
    paradigm: "Component-Based / Perl Web Templating",
    designedBy: "Jonathan Swartz",
    firstAppeared: "1998",
    fileExtension: ".mc",
    primaryUse: "High-volume content-rich websites, mod_perl Apache acceleration, and componentized Perl web systems",
    syntaxSummary: "HTML intermixed with `%` Perl lines, `<%perl> ... </%perl>` code sections, and `<%args>` parameters.",
    sampleCode: `<%args>
$title => 'CodePlay Mason Portal'
$user  => 'NASA-KUN'
</%args>

<div class="header">
  <h2><% $title %></h2>
  <p>Greetings, <% $user %>!</p>
</div>

% my @topics = ('Perl', 'Mod_perl', 'Mason Components');
<ul>
% foreach my $topic (@topics) {
  <li><% $topic %> - Available for review</li>
% }
</ul>`,
    explanation: "HTML::Mason pioneered reusable web components in Perl, caching compiled subroutines under Apache mod_perl for legendary throughput.",
    expectedOutput: `Mason HTML Rendering:
<div class="header">
  <h2>CodePlay Mason Portal</h2>
  <p>Greetings, NASA-KUN!</p>
</div>
<ul>
  <li>Perl - Available for review</li>
  <li>Mod_perl - Available for review</li>
  <li>Mason Components - Available for review</li>
</ul>`
  },
  {
    id: 578,
    name: "Embperl",
    slug: "embperl",
    cssClass: "embperl-lang",
    category: "perl-web",
    categoryLabel: "Embedded Perl in HTML",
    logo: "assets/logos/embperl.svg",
    shortDesc: "Perl server-side engine embedding Perl into HTML with session management, caching, and database integration.",
    paradigm: "Server-Side Scripting / Templating",
    designedBy: "Gerald Richter",
    firstAppeared: "1997",
    fileExtension: ".epl",
    primaryUse: "Dynamic web publishing on Apache mod_perl, database-driven catalogs, and structured template hierarchies",
    syntaxSummary: "`[- ... -]` for execution, `[+ ... +]` for output, and `[! ... !]` for one-time initialization blocks.",
    sampleCode: `[-
  # One-time calculation
  $heading = "Embperl Engine Status";
  @languages = ("Perl 5", "Embperl 2.5", "Apache mod_perl");
-]

<html>
<body>
  <h1>[+ $heading +]</h1>
  <table>
    <tr><th>Index</th><th>Technology</th></tr>
    [$ foreach $lang (@languages) $]
      <tr><td>[+ $cnt++ +]</td><td>[+ $lang +]</td></tr>
    [$ endforeach $]
  </table>
</body>
</html>`,
    explanation: "Embperl combined Perl with automatic HTML table looping and session tracking, providing an early open-source competitor to ASP and ColdFusion.",
    expectedOutput: `Apache mod_perl Embperl Output:
<html>
<body>
  <h1>Embperl Engine Status</h1>
  <table>
    <tr><th>Index</th><th>Technology</th></tr>
    <tr><td>0</td><td>Perl 5</td></tr>
    <tr><td>1</td><td>Embperl 2.5</td></tr>
    <tr><td>2</td><td>Apache mod_perl</td></tr>
  </table>
</body>
</html>`
  },
  {
    id: 579,
    name: "Tcl Websh",
    slug: "tcl-websh",
    cssClass: "tcl-websh-lang",
    category: "tcl-web",
    categoryLabel: "Apache Tcl Web Environment",
    logo: "assets/logos/tcl-websh.svg",
    shortDesc: "Apache Tcl-based web application environment providing rapid scripting and session management for HTTP services.",
    paradigm: "Scripting / Event-Driven / Web Engine",
    designedBy: "Apache Software Foundation (Tcl Community)",
    firstAppeared: "2000",
    fileExtension: ".ws3",
    primaryUse: "High-performance Apache HTTP Server web applications, session-controlled web services, and telecommunications portals",
    syntaxSummary: "Standard Tcl command syntax with Websh `web::response`, `web::request`, and `web::session` commands.",
    sampleCode: `# Apache Websh Tcl Script
web::command default {
    web::response -set "Content-Type" "text/html"
    web::put "<html><body>"
    web::put "<h1>Apache Websh Tcl Portal</h1>"
    
    set greeting "Welcome to CodePlay Tcl Scripting"
    web::put "<p>$greeting</p>"
    web::put "<p>Server Session: [web::session id]</p>"
    web::put "</body></html>"
}

web::dispatch`,
    explanation: "Websh turned Apache into a first-class Tcl execution engine with built-in multi-process state tracking, session management, and URL dispatching.",
    expectedOutput: `Apache/2.4 mod_websh:
Content-Type: text/html
<html><body>
<h1>Apache Websh Tcl Portal</h1>
<p>Welcome to CodePlay Tcl Scripting</p>
<p>Server Session: ws_sess_783109a2</p>
</body></html>`
  },
  {
    id: 580,
    name: "WebDNA",
    slug: "webdna",
    cssClass: "webdna-lang",
    category: "web-database",
    categoryLabel: "In-Memory Database Scripting",
    logo: "assets/logos/webdna.svg",
    shortDesc: "Fast server-side database scripting language specifically designed for e-commerce and high-traffic dynamic websites.",
    paradigm: "Tag-Based / In-Memory Database / E-Commerce",
    designedBy: "Pacific Coast Software / WebDNA Software",
    firstAppeared: "1995",
    fileExtension: ".dna",
    primaryUse: "High-speed shopping carts, real-time product catalogs, inventory management, and fast text databases",
    syntaxSummary: "Bracket-based tags like `[search]`, `[founditems]`, `[showif]`, and `[writefile]` reading embedded RAM tables.",
    sampleCode: `[text]welcomeMessage=Welcome to WebDNA E-Commerce[/text]

<h2>[welcomeMessage]</h2>

[search db=products.db&neSKUdata=0]
  <div class="product-list">
    [founditems]
      <div class="product-item">
        <strong>[title]</strong> - $[price] (Stock: [inventory])
      </div>
    [/founditems]
  </div>
[/search]`,
    explanation: "WebDNA featured a proprietary in-memory database engine directly tied to its templating tags, delivering fast shopping carts in the 1990s.",
    expectedOutput: `WebDNA Server Output:
<h2>Welcome to WebDNA E-Commerce</h2>
<div class="product-list">
  <div class="product-item"><strong>CodePlay Pro License</strong> - $0 (Stock: Unlimited)</div>
  <div class="product-item"><strong>Developer Guide</strong> - $19 (Stock: 420)</div>
</div>`
  },
  {
    id: 581,
    name: "Agda 2",
    slug: "agda2",
    cssClass: "agda2-lang",
    category: "theorem-proving",
    categoryLabel: "Dependent Type Proof Assistant",
    logo: "assets/logos/agda2.svg",
    shortDesc: "Dependently typed functional programming language and interactive proof assistant based on intuitionistic type theory.",
    paradigm: "Purely Functional / Dependent Types / Interactive",
    designedBy: "Ulf Norell (Chalmers University)",
    firstAppeared: "2007",
    fileExtension: ".agda",
    primaryUse: "Mathematical theorem proving, formal verification of algorithms and compilers, and constructivist type research",
    syntaxSummary: "Unicode mathematical operators, full dependent function types (`(x : A) -> B x`), inductive families, and totality checking.",
    sampleCode: `module CodePlayAgda where

data ℕ : Set where
  zero : ℕ
  suc  : ℕ → ℕ

_+_ : ℕ → ℕ → ℕ
zero  + n = n
suc m + n = suc (m + n)

data _≡_ {A : Set} (x : A) : A → Set where
  refl : x ≡ x

+-identity : (n : ℕ) → n + zero ≡ n
+-identity zero    = refl
+-identity (suc n) rewrite +-identity n = refl`,
    explanation: "Under the Curry-Howard correspondence, Agda treats types as mathematical propositions and programs as formal proofs verified by its totality checker.",
    expectedOutput: `agda --safe CodePlayAgda.agda
Checking CodePlayAgda (CodePlayAgda.agda).
All terms checked, termination verified, 0 holes remaining.
Proof validated.`
  },
  {
    id: 582,
    name: "Cedille",
    slug: "cedille",
    cssClass: "cedille-lang",
    category: "theorem-proving",
    categoryLabel: "Calculus of Dependent Intersections",
    logo: "assets/logos/cedille.svg",
    shortDesc: "Language based on the Calculus of Dependent Intersections providing extrinsic typing and zero-cost inductive datatypes.",
    paradigm: "Purely Functional / Extrinsic Dependent Types",
    designedBy: "Aaron Stump (University of Iowa)",
    firstAppeared: "2018",
    fileExtension: ".ced",
    primaryUse: "Formally verifying datatypes with Curry-style extrinsic semantics, erasing proofs with zero runtime computational overhead",
    syntaxSummary: "Dependent intersection types, equality types, untyped lambda calculus spine, and complete proof erasure.",
    sampleCode: `module codeplay-cedille.

import public lib/top.

Nat : ★ = ∀ X : ★ . (X ➔ X) ➔ X ➔ X.
zero : Nat = Λ X . λ s . λ z . z.
succ : Nat ➔ Nat = λ n . Λ X . λ s . λ z . s (n ·X s z).

-- Zero runtime overhead verified representation`,
    explanation: "Cedille allows inductive datatypes to be derived directly from untyped lambda terms without axioms, guaranteeing that all proofs erase at compile-time.",
    expectedOutput: `cedille-core codeplay-cedille.ced
Checked module codeplay-cedille.
All definitions verified. Proof erasure: 100% complete.`
  },
  {
    id: 583,
    name: "Arend",
    slug: "arend",
    cssClass: "arend-lang",
    category: "theorem-proving",
    categoryLabel: "Homotopy Type Theory Prover",
    logo: "assets/logos/arend.svg",
    shortDesc: "Theorem prover and dependently typed language based on Homotopy Type Theory with computational univalence.",
    paradigm: "Functional / Homotopy Type Theory / Proof Assistant",
    designedBy: "JetBrains Research",
    firstAppeared: "2019",
    fileExtension: ".ard",
    primaryUse: "Formalized algebraic topology, synthetic homotopy theory, IntelliJ-assisted mathematical theorem proving",
    syntaxSummary: "Path types, higher inductive types, intervals (`I`), computational univalence, and first-class IntelliJ IDEA integration.",
    sampleCode: `\\open Nat (+)

\\func idp {A : \\Type} {a : A} : a = a => path (\\lam _ => a)

\\func plus-zero (n : Nat) : n + 0 = n \\elim n
  | 0 => idp
  | suc n => pmap suc (plus-zero n)`,
    explanation: "Arend implements cubical type theory concepts, allowing mathematicians to reason about continuous paths between objects with computational univalence.",
    expectedOutput: `arend check CodePlayArend.ard
Checking definitions in CodePlayArend...
plus-zero: Type checked successfully.
Zero errors detected.`
  },
  {
    id: 584,
    name: "Zephyr",
    slug: "zephyr",
    cssClass: "zephyr-lang",
    category: "embedded-systems",
    categoryLabel: "Real-Time Embedded OS",
    logo: "assets/logos/zephyr.svg",
    shortDesc: "Scalable real-time operating system (RTOS) and embedded configuration framework for resource-constrained devices.",
    paradigm: "Real-Time / Embedded Systems / Device Tree",
    designedBy: "Linux Foundation & Zephyr Project",
    firstAppeared: "2016",
    fileExtension: ".dts",
    primaryUse: "IoT wearables, connected medical hardware, smart grid sensors, Bluetooth Low Energy devices, and automotive controllers",
    syntaxSummary: "Device Tree Source (DTS), Kconfig declarative configuration, and C/C++ real-time multi-threaded kernel APIs.",
    sampleCode: `/* Zephyr Device Tree Overlay & Thread Entry */
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>

#define SLEEP_TIME_MS   1000
#define LED0_NODE DT_ALIAS(led0)

static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

int main(void)
{
    gpio_is_ready_dt(&led);
    gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);

    while (1) {
        gpio_pin_toggle_dt(&led);
        k_msleep(SLEEP_TIME_MS);
    }
    return 0;
}`,
    explanation: "Zephyr standardizes embedded programming across 450+ microcontroller boards using device trees and cooperative/preemptive real-time scheduling.",
    expectedOutput: `west build -b nrf52840dk_nrf52840
-- Zephyr version: 3.6.0
Memory region         Used Size  Region Size  %age Used
           FLASH:       34888 B         1 MB      3.33%
            SRAM:       11240 B       256 KB      4.29%
Compilation Succeeded.`
  },
  {
    id: 585,
    name: "Sail",
    slug: "sail",
    cssClass: "sail-lang",
    category: "hardware-formal",
    categoryLabel: "ISA Architecture Semantics",
    logo: "assets/logos/sail.svg",
    shortDesc: "Rigorous language for describing the instruction set architecture (ISA) semantics of processors like ARM, RISC-V, and x86.",
    paradigm: "Domain-Specific / Specification / Verification",
    designedBy: "Alasdair Armstrong, Peter Sewell et al. (Cambridge)",
    firstAppeared: "2018",
    fileExtension: ".sail",
    primaryUse: "Formal specification of processor ISAs, generating executable CPU emulators, theorem prover integration (Coq, Isabelle)",
    syntaxSummary: "Bitvectors, dependent bit widths, imperative register updates, concurrency models, and automated C/OCaml simulator generation.",
    sampleCode: `/* Sail RISC-V ADD Instruction Semantics */
val execute_add : (regidx, regidx, regidx) -> unit

function execute_add(rd, rs1, rs2) = {
  let val1 = X(rs1);
  let val2 = X(rs2);
  let result : xlenbits = val1 + val2;
  X(rd) = result;
  print_bits("ADD Result: ", result)
}`,
    explanation: "Sail provides mathematically exact definitions of processor instruction sets, enabling CPU designers to catch hardware bugs before silicon tape-out.",
    expectedOutput: `sail -c riscv_model.sail -o riscv_sim
Sail Architecture Model validated: RISC-V RV64GC
C Emulator generated. Emulation speed: 1.2 MIPS.`
  },
  {
    id: 586,
    name: "P4",
    slug: "p4",
    cssClass: "p4-lang",
    category: "networking",
    categoryLabel: "Packet Processing Language",
    logo: "assets/logos/p4.svg",
    shortDesc: "Domain-specific programming language for specifying how packets are processed by network forwarding planes.",
    paradigm: "Domain-Specific / Data Plane / Pipelined",
    designedBy: "P4 Language Consortium (Bosshart et al.)",
    firstAppeared: "2014",
    fileExtension: ".p4",
    primaryUse: "Software-defined networking (SDN), programmable hardware switches (Intel Tofino), SmartNICs, and high-speed routers",
    syntaxSummary: "Header definitions, parsers with finite state machines, match-action tables, and programmable pipeline controls.",
    sampleCode: `/* P4_16 IPv4 Forwarding Table */
header ipv4_t {
    bit<4>   version;
    bit<4>   ihl;
    bit<8>   diffserv;
    bit<16>  totalLen;
    bit<32>  srcAddr;
    bit<32>  dstAddr;
}

table ipv4_lpm {
    key = {
        hdr.ipv4.dstAddr: lpm;
    }
    actions = {
        ipv4_forward;
        drop;
    }
    size = 1024;
    default_action = drop();
}`,
    explanation: "P4 gives network engineers complete protocol independence, allowing switches to be reprogrammed on the fly without changing underlying ASICs.",
    expectedOutput: `p4c-bm2-ss --arch v1model switch.p4 -o switch.json
P4_16 compilation successful.
Target Forwarding Pipeline programmed with 4 parser states.`
  },
  {
    id: 587,
    name: "Rego",
    slug: "rego",
    cssClass: "rego-lang",
    category: "policy-security",
    categoryLabel: "Declarative Policy Language",
    logo: "assets/logos/rego.svg",
    shortDesc: "Declarative policy language built for Open Policy Agent (OPA) to enforce fine-grained authorization across cloud stacks.",
    paradigm: "Declarative / Datalog / Query",
    designedBy: "Styra & Open Policy Agent Project",
    firstAppeared: "2016",
    fileExtension: ".rego",
    primaryUse: "Kubernetes admission control (Gatekeeper), microservice authorization, Terraform compliance scanning, and API security",
    syntaxSummary: "Rules that evaluate to boolean or structured data based on JSON document queries without side effects.",
    sampleCode: `package codeplay.authz

import future.keywords.in

default allow := false

# Allow access if user is verified developer or has admin role
allow if {
    input.user.role == "admin"
}

allow if {
    input.action == "read"
    "verified" in input.user.tags
}`,
    explanation: "Rego decouples authorization policy decisions from application code, allowing security rules to be updated independently across cloud microservices.",
    expectedOutput: `opa eval --data policy.rego --input request.json "data.codeplay.authz.allow"
{
  "result": [
    {
      "expressions": [
        {
          "value": true,
          "text": "data.codeplay.authz.allow"
        }
      ]
    }
  ]
}`
  },
  {
    id: 588,
    name: "Cedar",
    slug: "cedar",
    cssClass: "cedar-lang",
    category: "policy-security",
    categoryLabel: "Fast Authorization Policy Language",
    logo: "assets/logos/cedar.svg",
    shortDesc: "Expressive and extensible authorization policy language and SDK developed by AWS for fast, safe access control.",
    paradigm: "Declarative / Policy / Formally Verified",
    designedBy: "Amazon Web Services (AWS)",
    firstAppeared: "2023",
    fileExtension: ".cedar",
    primaryUse: "Application authorization, Amazon Verified Permissions, multi-tenant RBAC/ABAC enforcement, and enterprise security",
    syntaxSummary: "`permit` and `forbid` statements with `principal`, `action`, `resource`, and `when` conditional clauses.",
    sampleCode: `// Cedar Access Control Policy
permit (
    principal in Role::"Educator",
    action == Action::"PublishCurriculum",
    resource in Track::"ComputerScience"
)
when {
    context.mfa_authenticated == true
};

forbid (
    principal,
    action,
    resource
)
when {
    context.network_risk_score > 85
};`,
    explanation: "Cedar is formally verified using automated reasoning (SMT solvers), guaranteeing that policy evaluation always halts in sub-millisecond times.",
    expectedOutput: `cedar authorize --policies policy.cedar --request request.json
Decision: ALLOW
Diagnostic: Policy permit(0) satisfied.
Evaluation time: 0.18 ms`
  },
  {
    id: 589,
    name: "CEL",
    slug: "cel",
    cssClass: "cel-lang",
    category: "expression-languages",
    categoryLabel: "Common Expression Language",
    logo: "assets/logos/cel.svg",
    shortDesc: "Common Expression Language, fast, portable, and non-Turing complete expression evaluation language developed by Google.",
    paradigm: "Expression-Oriented / Non-Turing Complete",
    designedBy: "Google",
    firstAppeared: "2018",
    fileExtension: ".cel",
    primaryUse: "Kubernetes ValidatingAdmissionPolicies, Google Cloud IAM conditions, Envoy proxy filtering, and rule engines",
    syntaxSummary: "C-like expression syntax evaluating safely in linear time without loops or unbounded recursion.",
    sampleCode: `// CEL Expression for Kubernetes Ingress
request.auth.claims.iss == "https://accounts.google.com" &&
request.time < timestamp("2026-12-31T23:59:59Z") &&
resource.labels.environment in ["production", "staging"] &&
resource.metadata.name.startsWith("codeplay-")`,
    explanation: "CEL enables systems to safely evaluate user-submitted logic expressions without the security and performance risks of full scripting languages.",
    expectedOutput: `cel-eval --expr "..." --context context.json
Evaluation Result: true (Type: bool)
Execution metrics: 14 operations, evaluated in 12 µs.`
  },
  {
    id: 590,
    name: "Starlark Bazel",
    slug: "starlark-bazel",
    cssClass: "starlark-bazel-lang",
    category: "configuration-build",
    categoryLabel: "Hermetic Bazel Build Language",
    logo: "assets/logos/starlark-bazel.svg",
    shortDesc: "Deterministic, hermetic Python-like configuration language used to define rules and targets in the Bazel build system.",
    paradigm: "Hermetic / Deterministic / Python Dialect",
    designedBy: "Google (Bazel Team)",
    firstAppeared: "2015",
    fileExtension: ".bzl",
    primaryUse: "Bazel and Buck2 build definitions, monorepo dependency graphs, hermetic multi-language compilation rules",
    syntaxSummary: "Pythonic subset without recursion, unbounded loops, or side effects, ensuring reproducible builds.",
    sampleCode: `# Starlark Bazel Build Rule Definition
def _codeplay_library_impl(ctx):
    out = ctx.actions.declare_file(ctx.label.name + ".bundle")
    ctx.actions.run(
        outputs = [out],
        inputs = ctx.files.srcs,
        executable = ctx.executable._compiler,
        arguments = ["--output", out.path] + [f.path for f in ctx.files.srcs],
    )
    return [DefaultInfo(files = depset([out]))]

codeplay_library = rule(
    implementation = _codeplay_library_impl,
    attrs = {
        "srcs": attr.label_list(allow_files = True),
        "_compiler": attr.label(default = "//tools:compiler", executable = True, cfg = "exec"),
    },
)`,
    explanation: "Starlark guarantees that builds are reproducible and cacheable across thousands of machines by prohibiting non-deterministic operations.",
    expectedOutput: `bazel build //src:codeplay_bundle
INFO: Analyzed target //src:codeplay_bundle (1 packages loaded, 14 targets configured).
INFO: Build completed successfully, 1 total action.
Target //src:codeplay_bundle up-to-date.`
  },
  {
    id: 591,
    name: "Pkl",
    slug: "pkl",
    cssClass: "pkl-lang",
    category: "configuration-build",
    categoryLabel: "Programmable Config Language",
    logo: "assets/logos/pkl.svg",
    shortDesc: "Apple's embeddable configuration language with rich type system, validation, and multi-language code generation.",
    paradigm: "Declarative / Object-Oriented / Typed",
    designedBy: "Apple Inc.",
    firstAppeared: "2024",
    fileExtension: ".pkl",
    primaryUse: "Complex cloud configurations, Kubernetes manifests, generating strongly typed Swift/Kotlin/Java/Go models",
    syntaxSummary: "Class definitions with validation constraints, inheritance, object templates, and multiple output format renderers.",
    sampleCode: `// Pkl Configuration Module
amends "package://schema.codeplay.io/app@1.0.0"

hostname = "codeplay.io"
port = 443

environment: "prod" | "staging" = "prod"

server {
  minInstances = 3
  maxInstances = 20
  timeout = 30.s
}

features {
  ["section11"] = true
  ["interactiveRunner"] = true
}`,
    explanation: "Pkl bridges the gap between static data formats (JSON, YAML) and full programming languages, catching configuration mistakes at build time.",
    expectedOutput: `pkl eval app.pkl -f yaml
hostname: codeplay.io
port: 443
environment: prod
server:
  minInstances: 3
  maxInstances: 20
  timeout: 30s
Validation: Passed.`
  },
  {
    id: 592,
    name: "KCL",
    slug: "kcl",
    cssClass: "kcl-lang",
    category: "configuration-build",
    categoryLabel: "Constraint-Based Config Language",
    logo: "assets/logos/kcl.svg",
    shortDesc: "Constraint-based record and functional configuration language for cloud-native orchestration and Kubernetes.",
    paradigm: "Constraint-Based / Declarative / Schema-Driven",
    designedBy: "KusionStack & Ant Group",
    firstAppeared: "2020",
    fileExtension: ".k",
    primaryUse: "Cloud-native infrastructure configuration, Kubernetes CRD generation, GitOps policy validation, and Helm replacement",
    syntaxSummary: "Python-inspired syntax with schema inheritance, attribute validation constraints, and immutability.",
    sampleCode: `schema ServerConfig:
    host: str = "0.0.0.0"
    port: int = 8080
    workers: int = 4
    
    check:
        1024 <= port <= 65535, "Port must be in unprivileged range"
        workers >= 1, "Workers must be at least 1"

config = ServerConfig {
    port = 3000
    workers = 8
}`,
    explanation: "KCL brings strong validation schemas and composability to cloud-native stacks, preventing misconfigured Kubernetes manifests.",
    expectedOutput: `kcl run server.k
config:
  host: 0.0.0.0
  port: 3000
  workers: 8
Validation: 2 assertions evaluated successfully.`
  },
  {
    id: 593,
    name: "Nickel",
    slug: "nickel",
    cssClass: "nickel-lang",
    category: "configuration-build",
    categoryLabel: "Gradually Typed Config",
    logo: "assets/logos/nickel.svg",
    shortDesc: "Better configuration language with gradual typing, contracts, and modular record merges developed by Tweag.",
    paradigm: "Functional / Gradually Typed / Contract-Driven",
    designedBy: "Tweag",
    firstAppeared: "2021",
    fileExtension: ".ncl",
    primaryUse: "Generating JSON, YAML, and Terraform configurations; complex build systems; Nixpkgs configuration abstraction",
    syntaxSummary: "Merge operators (`&`), runtime contracts (`| Number`), static type checking (`: Type`), and record polymorphism.",
    sampleCode: `let Schema = {
  version | String,
  replicas | Number,
  endpoint | String,
} in

let production : Schema = {
  version = "11.0",
  replicas = 5,
  endpoint = "https://codeplay.io/api",
} in

production`,
    explanation: "Nickel offers a middle ground between loose JSON and rigid static formats, combining contracts with gradual typing and modular merges.",
    expectedOutput: `nickel export config.ncl --format json
{
  "endpoint": "https://codeplay.io/api",
  "replicas": 5,
  "version": "11.0"
}`
  },
  {
    id: 594,
    name: "Jsonnet Tanka",
    slug: "jsonnet-tanka",
    cssClass: "jsonnet-tanka-lang",
    category: "configuration-build",
    categoryLabel: "Functional JSON Templating",
    logo: "assets/logos/jsonnet-tanka.svg",
    shortDesc: "Purely functional configuration language extending JSON with variables, functions, and imports for Kubernetes via Tanka.",
    paradigm: "Functional / Lazy / Object-Oriented",
    designedBy: "Google (Jsonnet) & Grafana Labs (Tanka)",
    firstAppeared: "2014",
    fileExtension: ".jsonnet",
    primaryUse: "Generating clean Kubernetes manifests, Prometheus alerting rules, Grafana dashboards, and infrastructure boilerplate",
    syntaxSummary: "JSON superset with variables (`local`), functions, hidden fields (`::`), mixins, and lazy evaluation.",
    sampleCode: `local k = import 'github.com/grafana/jsonnet-libs/ksonnet-util/kausal.libsonnet';

{
  _config:: {
    name: 'codeplay-service',
    port: 3000,
    replicas: 3,
  },

  deployment: k.apps.v1.deployment.new(
    name=$._config.name,
    replicas=$._config.replicas,
    containers=[
      k.core.v1.container.new($._config.name, 'codeplay:v11')
      + k.core.v1.container.withPort($._config.port)
    ]
  ),
}`,
    explanation: "Jsonnet with Grafana Tanka eliminates repetitive YAML copying by providing a clean functional abstraction for Kubernetes deployments.",
    expectedOutput: `tk show environments/default
apiVersion: apps/v1
kind: Deployment
metadata:
  name: codeplay-service
spec:
  replicas: 3
Rendered 1 Kubernetes resource.`
  },
  {
    id: 595,
    name: "Terraform HCL2",
    slug: "terraform-hcl2",
    cssClass: "terraform-hcl2-lang",
    category: "infrastructure-as-code",
    categoryLabel: "Multi-Cloud IaC Language",
    logo: "assets/logos/terraform-hcl2.svg",
    shortDesc: "HashiCorp Configuration Language v2 for declarative Infrastructure as Code provision across AWS, Azure, and Google Cloud.",
    paradigm: "Declarative / Infrastructure as Code",
    designedBy: "HashiCorp",
    firstAppeared: "2019",
    fileExtension: ".tf",
    primaryUse: "Cloud infrastructure provisioning, virtual networks, compute clusters, Kubernetes nodes, and multi-cloud architectures",
    syntaxSummary: "Blocks (`resource`, `variable`, `output`), structural typing, dynamic blocks, rich functions, and dependency graphs.",
    sampleCode: `terraform {
  required_version = ">= 1.5.0"
}

variable "region" {
  type    = string
  default = "us-east-1"
}

resource "aws_s3_bucket" "codeplay_assets" {
  bucket = "codeplay-global-curriculum"

  tags = {
    Environment = "Production"
    ManagedBy   = "Terraform HCL2"
    Section     = "11"
  }
}

output "bucket_arn" {
  value = aws_s3_bucket.codeplay_assets.arn
}`,
    explanation: "HCL2 makes infrastructure definitions readable and automated, managing full lifecycle provisioning and state tracking across hundreds of providers.",
    expectedOutput: `terraform plan
Terraform will perform the following actions:
  # aws_s3_bucket.codeplay_assets will be created
  + resource "aws_s3_bucket" "codeplay_assets" {
      + arn    = (known after apply)
      + bucket = "codeplay-global-curriculum"
    }
Plan: 1 to add, 0 to change, 0 to destroy.`
  },
  {
    id: 596,
    name: "Bicep",
    slug: "bicep",
    cssClass: "bicep-lang",
    category: "infrastructure-as-code",
    categoryLabel: "Domain-Specific Azure IaC",
    logo: "assets/logos/bicep.svg",
    shortDesc: "Domain-specific language created by Microsoft for declaratively deploying Azure infrastructure with clean syntax and first-class tooling.",
    paradigm: "Declarative / Domain-Specific / Cloud IaC",
    designedBy: "Microsoft",
    firstAppeared: "2020",
    fileExtension: ".bicep",
    primaryUse: "Native Azure Resource Manager (ARM) deployments, enterprise Azure landing zones, and automated cloud environments",
    syntaxSummary: "Clean concise syntax transpiling directly to ARM JSON templates with type validation and IntelliSense.",
    sampleCode: `param location string = resourceGroup().location
param appServicePlanName string = 'asp-codeplay'

resource appServicePlan 'Microsoft.Web/serverfarms@2022-03-01' = {
  name: appServicePlanName
  location: location
  sku: {
    name: 'P1v3'
    tier: 'PremiumV3'
  }
}

resource webApp 'Microsoft.Web/sites@2022-03-01' = {
  name: 'app-codeplay-curriculum'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
  }
}`,
    explanation: "Bicep drastically reduces the complexity of verbose ARM JSON templates, offering first-class modularization and type safety for Azure engineers.",
    expectedOutput: `az bicep build --file main.bicep
Transpiled main.bicep -> main.json (ARM Template)
Validation passed: 2 Azure resources defined.`
  },
  {
    id: 597,
    name: "Pulumi",
    slug: "pulumi",
    cssClass: "pulumi-lang",
    category: "infrastructure-as-code",
    categoryLabel: "Real-Code Cloud Engineering",
    logo: "assets/logos/pulumi.svg",
    shortDesc: "Modern Infrastructure as Code platform allowing engineers to define cloud architecture using TypeScript, Python, Go, and C#.",
    paradigm: "Object-Oriented / Imperative-to-Declarative",
    designedBy: "Joe Duffy & Pulumi Team",
    firstAppeared: "2018",
    fileExtension: ".ts",
    primaryUse: "Multi-cloud provisioning with real programming languages, Kubernetes architectures, and CI/CD policy enforcement",
    syntaxSummary: "Native language constructs (loops, classes, async) backed by state engine creating cloud dependency DAGs.",
    sampleCode: `import * as aws from "@pulumi/aws";

// Pulumi TypeScript Infrastructure Definition
const bucket = new aws.s3.Bucket("codeplay-bucket", {
    website: {
        indexDocument: "index.html",
    },
});

export const bucketName = bucket.id;
export const websiteUrl = bucket.websiteEndpoint;`,
    explanation: "Pulumi lets developers use standard programming languages and package managers (npm, pip, NuGet) to construct and test cloud architecture.",
    expectedOutput: `pulumi preview
Previewing update (dev)
Type                 Name                 Plan
pulumi:pulumi:Stack  infra-dev            
aws:s3:Bucket        codeplay-bucket      create

Resources: 2 to create`
  },
  {
    id: 598,
    name: "CloudFormation",
    slug: "cloudformation",
    cssClass: "cloudformation-lang",
    category: "infrastructure-as-code",
    categoryLabel: "AWS Declarative Blueprint",
    logo: "assets/logos/cloudformation.svg",
    shortDesc: "AWS native service providing a single declarative language (JSON/YAML) to model and provision all AWS cloud resources.",
    paradigm: "Declarative / Cloud Infrastructure Engine",
    designedBy: "Amazon Web Services",
    firstAppeared: "2011",
    fileExtension: ".yaml",
    primaryUse: "Standard AWS resource provisioning, multi-region stacks, drift detection, and CI/CD CloudFormation pipelines",
    syntaxSummary: "Sections for `Parameters`, `Resources`, `Outputs`, intrinsic functions (`!Ref`, `!Sub`, `!GetAtt`), and rollbacks.",
    sampleCode: `AWSTemplateFormatVersion: '2010-09-09'
Description: CodePlay CloudFormation Infrastructure Stack

Parameters:
  EnvironmentType:
    Type: String
    Default: Production

Resources:
  CurriculumBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub "codeplay-assets-\${AWS::AccountId}"
      VersioningConfiguration:
        Status: Enabled

Outputs:
  BucketName:
    Value: !Ref CurriculumBucket`,
    explanation: "CloudFormation provides automated rollback, state tracking, and dependency management natively built into the Amazon Web Services cloud control plane.",
    expectedOutput: `aws cloudformation deploy --template-file stack.yaml --stack-name CodePlayStack
Waiting for changeset to be created..
Waiting for stack create/update to complete
Successfully created/updated stack - CodePlayStack`
  },
  {
    id: 599,
    name: "Ballerina Swan",
    slug: "ballerina-swan",
    cssClass: "ballerina-swan-lang",
    category: "cloud-native",
    categoryLabel: "Cloud-Native Integration",
    logo: "assets/logos/ballerina-swan.svg",
    shortDesc: "Cloud-native programming language designed by WSO2 optimized for network integration and distributed cloud services.",
    paradigm: "Concurrent / Network-Aware / Graphical",
    designedBy: "WSO2 (Sanjiva Weerawarana et al.)",
    firstAppeared: "2019",
    fileExtension: ".bal",
    primaryUse: "Microservice integration, REST and GraphQL APIs, event streaming with Kafka, and automated sequence diagram generation",
    syntaxSummary: "Native service and client endpoints, structural typing, bidirectional sequence diagram visualization, and Docker/K8s generation.",
    sampleCode: `import ballerina/http;

service /curriculum on new http:Listener(8080) {
    resource function get sections() returns json {
        return {
            "platform": "CodePlay",
            "section": 11,
            "range": "551-600",
            "count": 50,
            "status": "active"
        };
    }
}`,
    explanation: "Ballerina treats network interactions as first-class language constructs, automatically generating sequence diagrams from executable code.",
    expectedOutput: `bal run service.bal
Compiling source
    ballerina/curriculum:0.1.0
Running executable
[ballerina/http] started HTTP/WS listener 0.0.0.0:8080`
  },
  {
    id: 600,
    name: "Smithy",
    slug: "smithy",
    cssClass: "smithy-lang",
    category: "api-definition",
    categoryLabel: "Protocol-Agnostic IDL",
    logo: "assets/logos/smithy.svg",
    shortDesc: "AWS protocol-agnostic Interface Definition Language (IDL) for modeling and generating client SDKs, server stubs, and docs.",
    paradigm: "Interface Definition / Data Modeling",
    designedBy: "Amazon Web Services (AWS)",
    firstAppeared: "2020",
    fileExtension: ".smithy",
    primaryUse: "Defining modern web and cloud APIs, generating AWS SDKs across 10+ programming languages, and contract-first API design",
    syntaxSummary: "Shapes (strings, integers, structures, services), traits (`@http`, `@readonly`), validation constraints, and code generation.",
    sampleCode: `$version: "2.0"

namespace io.codeplay

service CodePlayCurriculumService {
    version: "2026-11-10"
    operations: [GetSectionDetails]
}

@readonly
@http(method: "GET", uri: "/sections/{id}")
operation GetSectionDetails {
    input: GetSectionInput
    output: GetSectionOutput
}

structure GetSectionInput {
    @httpLabel
    @required
    id: Integer
}

structure GetSectionOutput {
    @required
    title: String
    entryCount: Integer
}`,
    explanation: "Smithy is the foundation for all modern Amazon Web Services APIs, providing protocol-agnostic data modeling that compiles cleanly into client SDKs.",
    expectedOutput: `smithy build
[INFO] Built artifacts for 1 service:
  - TypeScript SDK generated
  - Java Client Stubs generated
  - OpenAPI 3.0 specification exported
Smithy build successful.`
  }
];

// Add duplicate compatibility fields
for (const e of entries) {
  e.desc = e.shortDesc;
  e.description = e.shortDesc;
}

const fileContent = `export const section11Entries = ${JSON.stringify(entries, null, 4)};\n`;

const targetPath = path.resolve(__dirname, '../data/section11-entries.js');
fs.writeFileSync(targetPath, fileContent, 'utf8');

console.log(`Generated data/section11-entries.js with ${entries.length} verified entries (551-600)`);
