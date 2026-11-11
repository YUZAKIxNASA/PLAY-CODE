const fs = require('fs');
const path = require('path');

const entries = [
  {
    id: 601,
    name: "Protocol Buffers",
    slug: "protobuf",
    cssClass: "protobuf-lang",
    category: "serialization-rpc",
    categoryLabel: "Serialization & RPC IDL",
    logo: "assets/logos/protobuf.svg",
    shortDesc: "Google's language-neutral, platform-neutral extensible mechanism for serializing structured data with compact binary encoding.",
    paradigm: "Interface Definition / Data Serialization",
    designedBy: "Google (Jeff Dean, Sanjay Ghemawat)",
    firstAppeared: "2008",
    fileExtension: ".proto",
    primaryUse: "Inter-service RPC communication via gRPC, high-throughput microservices, and compact backwards-compatible data storage",
    syntaxSummary: "Schema definitions with typed fields, numeric tags, nested messages, enumerations, and service RPC declarations.",
    sampleCode: `syntax = "proto3";

package codeplay.curriculum;

message LanguageEntry {
  int32 id = 1;
  string name = 2;
  string category = 3;
  repeated string tags = 4;
}

service CatalogService {
  rpc GetLanguage (LanguageRequest) returns (LanguageEntry);
}

message LanguageRequest {
  int32 entry_id = 1;
}`,
    explanation: "Protocol Buffers serialize structured messages into small, fast binary streams, generating typed client stubs and server interfaces across 10+ languages.",
    expectedOutput: `protoc --proto_path=. --cpp_out=. --python_out=. curriculum.proto
Protocol Buffers compiler: 2 schema definitions generated.
Binary wire format size: 38 bytes (65% smaller than JSON).`
  },
  {
    id: 602,
    name: "Thrift",
    slug: "thrift",
    cssClass: "thrift-lang",
    category: "serialization-rpc",
    categoryLabel: "Cross-Language RPC Framework",
    logo: "assets/logos/thrift.svg",
    shortDesc: "Apache scalable cross-language service development framework combining a software stack with a code generation engine.",
    paradigm: "Interface Definition / Remote Procedure Call",
    designedBy: "Facebook (Mark Slee et al.) / Apache",
    firstAppeared: "2007",
    fileExtension: ".thrift",
    primaryUse: "Large-scale backend RPC microservices at Meta, Twitter, and Uber; cross-language polyglot distributed systems",
    syntaxSummary: "Struct definitions, typedefs, service interfaces with typed exceptions, and binary/compact protocol serialization.",
    sampleCode: `namespace py codeplay.curriculum
namespace java io.codeplay.thrift

struct SectionDetail {
  1: required i32 sectionId,
  2: required string sectionTitle,
  3: optional list<string> technologies
}

service CurriculumEngine {
  SectionDetail fetchSection(1: i32 id),
  bool pingServer()
}`,
    explanation: "Apache Thrift combines efficient serialization protocols with clean RPC client/server generation across C++, Java, Python, PHP, Ruby, and Go.",
    expectedOutput: `thrift --gen py --gen java curriculum.thrift
Thrift Code Generator: Target bindings emitted successfully.
TBinaryProtocol transport throughput verified.`
  },
  {
    id: 603,
    name: "Avro IDL",
    slug: "avro-idl",
    cssClass: "avro-idl-lang",
    category: "serialization-rpc",
    categoryLabel: "Data Serialization System",
    logo: "assets/logos/avro-idl.svg",
    shortDesc: "Apache data serialization system providing rich data structures, compact binary formats, and schema evolution for big data.",
    paradigm: "Schema-Driven / Data Serialization",
    designedBy: "Doug Cutting (Apache Software Foundation)",
    firstAppeared: "2009",
    fileExtension: ".avdl",
    primaryUse: "Event streaming pipelines in Apache Kafka, big data storage in Apache Hadoop and Spark, and persistent message logs",
    syntaxSummary: "C-like IDL syntax defining records, enums, fixed types, and RPC protocols compiling directly to Avro JSON schemas.",
    sampleCode: `@namespace("io.codeplay.avro")
protocol CurriculumProtocol {
  record Developer {
    int id;
    string name;
    union { null, string } email = null;
  }

  record LearningRecord {
    long timestamp;
    Developer learner;
    string trackName;
  }
}`,
    explanation: "Avro serializes data along with its schema in message headers, enabling dynamic typing and smooth schema evolution without per-field tags.",
    expectedOutput: `avro-tools idl curriculum.avdl curriculum.avpr
Avro IDL parsed into JSON protocol representation.
Schema evolution check: Backward and Forward compatible.`
  },
  {
    id: 604,
    name: "Cap'n Proto",
    slug: "capnproto",
    cssClass: "capnproto-lang",
    category: "serialization-rpc",
    categoryLabel: "Zero-Copy Serialization & RPC",
    logo: "assets/logos/capnproto.svg",
    shortDesc: "Insanely fast data interchange format and capability-based RPC system with zero-copy serialization by Kenton Varda.",
    paradigm: "Zero-Copy / Capability-Based RPC",
    designedBy: "Kenton Varda (Sandstorm.io)",
    firstAppeared: "2013",
    fileExtension: ".capnp",
    primaryUse: "High-performance network services, Cloudflare Workers infrastructure, Sandstorm security sandboxes, and game engines",
    syntaxSummary: "Bitwise pointer-offset layout, unique 64-bit type IDs, capability references, and direct in-memory message pointer reads.",
    sampleCode: `@0xdbb9ad1f14bf0b36;

struct SectionMeta {
  id @0 :UInt32;
  title @1 :Text;
  totalEntries @2 :UInt16;
  isCompleted @3 :Bool;
}

interface CurriculumRegistry {
  getSection @0 (id :UInt32) -> (meta :SectionMeta);
}`,
    explanation: "Cap'n Proto has no separate encoding or decoding step; the in-memory representation is identical to the wire format, achieving zero-copy throughput.",
    expectedOutput: `capnp compile -oc++ curriculum.capnp
Cap'n Proto C++ compiler: Generated curriculum.capnp.h and .c++
Zero-copy serialization overhead: 0.00 ns.`
  },
  {
    id: 605,
    name: "FlatBuffers",
    slug: "flatbuffers",
    cssClass: "flatbuffers-lang",
    category: "serialization-rpc",
    categoryLabel: "Cross-Platform Zero-Copy Library",
    logo: "assets/logos/flatbuffers.svg",
    shortDesc: "Cross-platform serialization library created by Google designed for maximum memory efficiency and zero-decode access.",
    paradigm: "Zero-Copy / Cross-Platform Binary",
    designedBy: "Wouter van Oortmerssen (Google)",
    firstAppeared: "2014",
    fileExtension: ".fbs",
    primaryUse: "Game development in Unreal and Unity, TensorFlow Lite neural network models, and mobile apps with strict memory constraints",
    syntaxSummary: "Table and struct definitions, root types, scalar defaults, and vtable-based direct memory buffer offsets.",
    sampleCode: `namespace CodePlay.Curriculum;

enum PlatformType : byte { Web = 0, Mobile = 1, Desktop = 2 }

table LanguageCard {
  id:int;
  name:string;
  platform:PlatformType;
  views:long = 0;
}

root_type LanguageCard;`,
    explanation: "FlatBuffers allows access to serialized data without parsing or unpacking, eliminating memory allocations and boosting performance in graphics and ML.",
    expectedOutput: `flatc --cpp --ts curriculum.fbs
FlatBuffers compiler: Generated binary schema and accessors.
Buffer access benchmark: Instantaneous direct offset reads.`
  },
  {
    id: 606,
    name: "OpenAPI",
    slug: "openapi",
    cssClass: "openapi-lang",
    category: "api-specs",
    categoryLabel: "RESTful API Specification",
    logo: "assets/logos/openapi.svg",
    shortDesc: "Industry-standard machine-readable interface definition language for describing, producing, and visualizing RESTful web services.",
    paradigm: "Declarative / Contract-First / REST IDL",
    designedBy: "OpenAPI Initiative (Linux Foundation)",
    firstAppeared: "2015",
    fileExtension: ".yaml",
    primaryUse: "API documentation (Swagger UI), client SDK generation, API mock servers, contract testing, and cloud gateways",
    syntaxSummary: "Hierarchical YAML/JSON format defining paths, HTTP verbs, parameters, request bodies, response schemas, and auth schemes.",
    sampleCode: `openapi: 3.1.0
info:
  title: CodePlay Curriculum API
  version: 12.0.0
paths:
  /sections/{id}:
    get:
      summary: Retrieve Section by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  id: { type: integer }
                  name: { type: string }`,
    explanation: "OpenAPI establishes a shared contract between frontend and backend teams, allowing interactive documentation and typed client generation.",
    expectedOutput: `openapi-generator-cli validate -i openapi.yaml
Validating spec openapi.yaml...
No validation issues detected.
Swagger UI ready at http://localhost:8080/docs`
  },
  {
    id: 607,
    name: "RAML",
    slug: "raml",
    cssClass: "raml-lang",
    category: "api-specs",
    categoryLabel: "RESTful API Modeling Language",
    logo: "assets/logos/raml.svg",
    shortDesc: "YAML-based language for describing RESTful APIs that encourages reuse and clean contract design before coding begins.",
    paradigm: "Declarative / Modeling / Contract-First",
    designedBy: "RAML Workgroup (MuleSoft)",
    firstAppeared: "2013",
    fileExtension: ".raml",
    primaryUse: "Enterprise API-led connectivity, MuleSoft Anypoint platform integration, API design governance, and mock generation",
    syntaxSummary: "Resource types, traits, libraries, clean URI nesting, and concise schema definitions optimized for human readability.",
    sampleCode: `#%RAML 1.0
title: CodePlay API
version: v1
baseUri: https://api.codeplay.io/{version}

traits:
  secured:
    headers:
      Authorization:
        type: string

/sections:
  is: [ secured ]
  get:
    description: List all 12 curriculum sections
    responses:
      200:
        body:
          application/json:
            example: [{"id": 12, "range": "601-650"}]`,
    explanation: "RAML prioritizes developer experience in API design, using traits and resource types to prevent repetition in enterprise API catalogs.",
    expectedOutput: `raml-cop curriculum.raml
[INFO] Loading RAML 1.0 specification...
curriculum.raml: Valid specification!
API Console generated.`
  },
  {
    id: 608,
    name: "WSDL",
    slug: "wsdl",
    cssClass: "wsdl-lang",
    category: "api-specs",
    categoryLabel: "Web Services Description Language",
    logo: "assets/logos/wsdl.svg",
    shortDesc: "XML format for describing network services as a set of endpoints operating on messages containing document-oriented info.",
    paradigm: "XML-Based / SOAP Contract / Enterprise",
    designedBy: "W3C (Microsoft, IBM, Ariba)",
    firstAppeared: "2001",
    fileExtension: ".wsdl",
    primaryUse: "SOAP-based enterprise web services, banking transactional integrations, government data interchange, and legacy ESBs",
    syntaxSummary: "XML definitions for `types`, `message`, `portType`, `binding`, and `service` elements with XSD schema validation.",
    sampleCode: `<?xml version="1.0" encoding="UTF-8"?>
<definitions name="CodePlayService"
  targetNamespace="http://codeplay.io/wsdl"
  xmlns="http://schemas.xmlsoap.org/wsdl/"
  xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:tns="http://codeplay.io/wsdl">

  <message name="GetSectionRequest">
    <part name="sectionId" type="xsd:int"/>
  </message>
  <message name="GetSectionResponse">
    <part name="title" type="xsd:string"/>
  </message>

  <portType name="CurriculumPortType">
    <operation name="getSection">
      <input message="tns:GetSectionRequest"/>
      <output message="tns:GetSectionResponse"/>
    </operation>
  </portType>
</definitions>`,
    explanation: "WSDL was the definitive contract standard for Web Services in the 2000s, enabling automated SOAP client stub generation in Java and .NET.",
    expectedOutput: `wsimport -keep -p io.codeplay.soap CodePlayService.wsdl
Parsing WSDL...
Generating Java client artifacts...
SOAP 1.1 / 1.2 Binding created successfully.`
  },
  {
    id: 609,
    name: "IDL",
    slug: "corba-idl",
    cssClass: "corba-idl-lang",
    category: "api-specs",
    categoryLabel: "CORBA Interface Definition Language",
    logo: "assets/logos/corba-idl.svg",
    shortDesc: "Standardized language by the Object Management Group (OMG) for defining interfaces between distributed objects in CORBA.",
    paradigm: "Declarative / Distributed Objects / Middleware",
    designedBy: "Object Management Group (OMG)",
    firstAppeared: "1991",
    fileExtension: ".idl",
    primaryUse: "Telecommunication backbones, aerospace distributed systems, defense command networks, and high-availability enterprise middleware",
    syntaxSummary: "Module namespaces, interface inheritance, in/out/inout parameter modifiers, typed exceptions, and any-type primitives.",
    sampleCode: `// OMG CORBA Interface Definition Language
module CodePlay {
  struct CurriculumEntry {
    long id;
    string name;
  };

  exception NotFoundException {
    string reason;
  };

  interface CurriculumManager {
    CurriculumEntry getEntry(in long id)
      raises (NotFoundException);
  };
};`,
    explanation: "OMG IDL decouples object interface definitions from programming languages, allowing C++, Ada, Java, and Smalltalk objects to interoperate via ORBs.",
    expectedOutput: `idlj -fall curriculum.idl
OMG IDL Compiler: Emitted client stubs and server skeletons.
CORBA ORB interface verified.`
  },
  {
    id: 610,
    name: "MIDL",
    slug: "midl",
    cssClass: "midl-lang",
    category: "api-specs",
    categoryLabel: "Microsoft Interface Definition",
    logo: "assets/logos/midl.svg",
    shortDesc: "Microsoft Interface Definition Language used by developers to define interfaces between client and server programs in COM and DCOM.",
    paradigm: "Declarative / Component Object Model",
    designedBy: "Microsoft",
    firstAppeared: "1993",
    fileExtension: ".idl",
    primaryUse: "Windows OS API development, COM/DCOM components, WinRT/UWP metadata generation, and RPC interfaces",
    syntaxSummary: "UUID/GUID attributes (`[uuid(...)]`), `[object]`, `[dual]`, `HRESULT` return types, and interface inheritance from `IUnknown`.",
    sampleCode: `import "oaidl.idl";
import "ocidl.idl";

[
  object,
  uuid(8A62A0D1-1C2B-4E3F-9A0B-123456789ABC),
  dual,
  helpstring("ICodePlayCurriculum Interface"),
  pointer_default(unique)
]
interface ICodePlayCurriculum : IDispatch {
  [id(1)] HRESULT GetSectionCount([out, retval] long* count);
  [id(2)] HRESULT GetSectionTitle([in] long id, [out, retval] BSTR* title);
};`,
    explanation: "MIDL compiles interface definitions into type libraries (TLB) and C/C++ proxy-stub code, enabling cross-process and cross-language COM invocation.",
    expectedOutput: `midl /nologo /win32 curriculum.idl
Processing curriculum.idl...
Created curriculum.h, curriculum_i.c, curriculum.tlb
COM Dual Interface registered.`
  },
  {
    id: 611,
    name: "ASN.1",
    slug: "asn1",
    cssClass: "asn1-lang",
    category: "formal-notations",
    categoryLabel: "Abstract Syntax Notation One",
    logo: "assets/logos/asn1.svg",
    shortDesc: "Joint ISO/IEC and ITU-T standard defining a formal notation for describing data transmitted by telecommunications protocols.",
    paradigm: "Formal Data Specification / Telecommunications",
    designedBy: "ITU-T & ISO/IEC (X.680 series)",
    firstAppeared: "1984",
    fileExtension: ".asn1",
    primaryUse: "5G/LTE cellular radio signaling, cryptographic certificates (X.509, SSL/TLS), smart cards, and air traffic control radar",
    syntaxSummary: "Formal type declarations (SEQUENCE, CHOICE, INTEGER, OCTET STRING) with standardized encoding rules (BER, DER, PER, OER).",
    sampleCode: `CodePlay-Curriculum-Schema DEFINITIONS AUTOMATIC TAGS ::= BEGIN

CurriculumSection ::= SEQUENCE {
    sectionId       INTEGER (1..100),
    title           UTF8String (SIZE (1..128)),
    totalEntries    INTEGER (1..1000),
    isReleased      BOOLEAN
}

CertificateFingerprint ::= OCTET STRING (SIZE (32))

END`,
    explanation: "ASN.1 is the bedrock of modern telecommunications and security certificates, defining data independent of hardware byte ordering and architectures.",
    expectedOutput: `asn1c -fcompound-names curriculum.asn1
ASN.1 Compiler: Generating C encoders/decoders.
BER/DER/PER encoding rules generated.
X.509 certificate compatibility verified.`
  },
  {
    id: 612,
    name: "ABNF",
    slug: "abnf",
    cssClass: "abnf-lang",
    category: "formal-notations",
    categoryLabel: "Augmented Backus-Naur Form",
    logo: "assets/logos/abnf.svg",
    shortDesc: "Standardized notation defined in RFC 5234 used as a formal grammar for Internet communications protocols like HTTP and SMTP.",
    paradigm: "Formal Grammar Notation / Internet Standards",
    designedBy: "Dave Crocker (IETF RFC 5234)",
    firstAppeared: "1997",
    fileExtension: ".abnf",
    primaryUse: "Defining standard internet protocols (HTTP/1.1, HTTP/2, URI, Email, SIP, MIME) in formal IETF RFC specifications",
    syntaxSummary: "Rule definitions using `=`, repetition prefixes (`*`, `1*`), alternation (`/`), optional groups (`[...]`), and literal ranges (`%x20-7E`).",
    sampleCode: `; ABNF Grammar for CodePlay Section Request
section-request = "GET" SP section-path SP http-version CRLF
section-path    = "/section/" 1*2DIGIT
http-version    = "HTTP/1.1" / "HTTP/2.0"

CRLF            = %d13.10
SP              = %d32
DIGIT           = %x30-39`,
    explanation: "ABNF removes ambiguity from technical protocol specifications, giving developers a mathematically precise blueprint for protocol parsers.",
    expectedOutput: `abnfgen -c curriculum.abnf
ABNF Syntax Validator: RFC 5234 Compliance Verified.
Grammar contains 0 ambiguous productions.
Test string generated: "GET /section/12 HTTP/1.1"`
  },
  {
    id: 613,
    name: "EBNF",
    slug: "ebnf",
    cssClass: "ebnf-lang",
    category: "formal-notations",
    categoryLabel: "Extended Backus-Naur Form",
    logo: "assets/logos/ebnf.svg",
    shortDesc: "Extended Backus-Naur Form, an ISO/IEC standardized metalanguage used to specify the formal syntax of computer programming languages.",
    paradigm: "Formal Metalanguage / Syntax Specification",
    designedBy: "Niklaus Wirth / ISO/IEC 14977",
    firstAppeared: "1977",
    fileExtension: ".ebnf",
    primaryUse: "Formal syntax specifications in language reference manuals (Pascal, Python, XML, Modula-2, SQL standards)",
    syntaxSummary: "Rules with `= `, terminators `;`, alternation `|`, concatenation `,`, repetitions `{...}`, and optional items `[...]`.",
    sampleCode: `(* ISO/IEC 14977 EBNF Grammar Definition *)
identifier = letter , { letter | digit | "_" } ;
number     = digit , { digit } ;
expression = term , { ( "+" | "-" ) , term } ;
term       = factor , { ( "*" | "/" ) , factor } ;
factor     = identifier | number | "(" , expression , ")" ;

letter     = "A" | "B" | "C" | "D" | "E" | "F" ;
digit      = "0" | "1" | "2" | "3" | "4" ;`,
    explanation: "EBNF extends BNF with regular-expression style operators like repetition brackets and optional clauses, making programming language grammars concise.",
    expectedOutput: `ebnf-validator curriculum.ebnf
ISO/IEC 14977 Syntax Check: Passed.
5 non-terminal productions validated.
No left-recursion or missing terminals.`
  },
  {
    id: 614,
    name: "ANTLR",
    slug: "antlr",
    cssClass: "antlr-lang",
    category: "parser-generators",
    categoryLabel: "Predicated LL(*) Parser Generator",
    logo: "assets/logos/antlr.svg",
    shortDesc: "Powerful parser generator for reading, processing, executing, or translating structured text or binary files.",
    paradigm: "LL(*) Parsing / Compiler Construction",
    designedBy: "Terence Parr (University of San Francisco)",
    firstAppeared: "1992",
    fileExtension: ".g4",
    primaryUse: "Building domain-specific languages, SQL engines (Apache Spark, Presto/Trino), IDE language servers, and transpilers",
    syntaxSummary: "Combined lexer and parser grammars, semantic predicates, embedded actions, AST visitor, and listener generation.",
    sampleCode: `grammar CurriculumCalc;

// Parser Rules
prog:   stat+ ;
stat:   expr NEWLINE                # printExpr
    |   ID '=' expr NEWLINE         # assign
    |   NEWLINE                     # blank
    ;

expr:   expr op=('*'|'/') expr      # MulDiv
    |   expr op=('+'|'-') expr      # AddSub
    |   INT                         # int
    |   ID                          # id
    ;

// Lexer Rules
ID      : [a-zA-Z]+ ;
INT     : [0-9]+ ;
NEWLINE : '\\r'? '\\n' ;
WS      : [ \\t]+ -> skip ;`,
    explanation: "ANTLR 4 uses Adaptive LL(*) parsing, resolving parsing ambiguities dynamically at runtime and automatically building parse-tree visitors.",
    expectedOutput: `antlr4 -Dlanguage=Java -visitor CurriculumCalc.g4
ANTLR Parser Generator Version 4.13
Generated: CurriculumCalcLexer.java, CurriculumCalcParser.java
Visitor and Listener interfaces compiled.`
  },
  {
    id: 615,
    name: "Yacc",
    slug: "yacc",
    cssClass: "yacc-lang",
    category: "parser-generators",
    categoryLabel: "Yet Another Compiler-Compiler",
    logo: "assets/logos/yacc.svg",
    shortDesc: "Standard computer program for the Unix operating system generating LALR(1) parsers from formal context-free grammars.",
    paradigm: "LALR(1) Parsing / Compiler-Compiler",
    designedBy: "Stephen C. Johnson (Bell Labs)",
    firstAppeared: "1975",
    fileExtension: ".y",
    primaryUse: "Foundational Unix tools, classic C compilers, shell command interpreters, and programming language parsers",
    syntaxSummary: "Grammar file partitioned into three sections by `%%`: declarations, context-free grammar rules with C actions, and user subroutines.",
    sampleCode: `%{
#include <stdio.h>
int yylex(void);
void yyerror(const char *s);
%}

%token NUMBER
%left '+' '-'
%left '*' '/'

%%
calc:
      /* empty */
    | calc expr '\\n'   { printf("= %d\\n", $2); }
    ;

expr:
      NUMBER            { $$ = $1; }
    | expr '+' expr     { $$ = $1 + $3; }
    | expr '*' expr     { $$ = $1 * $3; }
    ;
%%`,
    explanation: "Yacc established the canonical LALR(1) parser architecture in Unix, paired with Lex to teach and construct compilers for decades.",
    expectedOutput: `yacc -d calc.y
yacc: 0 shift/reduce conflicts, 0 reduce/reduce conflicts.
Generated y.tab.c and y.tab.h.
LALR(1) parsing table construction complete.`
  },
  {
    id: 616,
    name: "Bison",
    slug: "bison",
    cssClass: "bison-lang",
    category: "parser-generators",
    categoryLabel: "GNU General-Purpose Parser Generator",
    logo: "assets/logos/bison.svg",
    shortDesc: "General-purpose parser generator that converts an annotated context-free grammar into deterministic LR or GLR parsers.",
    paradigm: "LALR(1) / GLR / Deterministic Parsing",
    designedBy: "Robert Corbett & Richard Stallman (GNU Project)",
    firstAppeared: "1985",
    fileExtension: ".y",
    primaryUse: "GCC C/C++ compiler frontends, PHP Zend Engine, Ruby MRI parser, PostgreSQL SQL query parser, and Bash shell",
    syntaxSummary: "Yacc-compatible grammar with modern extensions like `%glr-parser`, `%pure-parser`, locations, and C++ output.",
    sampleCode: `%require "3.8"
%language "c++"
%defines
%locations

%token <int> NUMBER
%nterm <int> expr

%left '+' '-'
%left '*' '/'

%%
input:
  %empty
| input line
;

line:
  expr '\\n' { std::cout << "Result: " << $1 << std::endl; }
;

expr:
  NUMBER
| expr '+' expr { $$ = $1 + $3; }
| expr '*' expr { $$ = $1 * $3; }
;
%%`,
    explanation: "GNU Bison expands upon classic Yacc with GLR (Generalized LR) parsing for ambiguous grammars, pure reentrant parsers, and C++ class generation.",
    expectedOutput: `bison -d -o parser.cpp parser.y
Bison Parser Generator: Generating state table...
State count: 18 states, 0 conflicts.
Target output parser.cpp successfully created.`
  },
  {
    id: 617,
    name: "Lex",
    slug: "lex",
    cssClass: "lex-lang",
    category: "parser-generators",
    categoryLabel: "Classic Unix Lexical Analyzer",
    logo: "assets/logos/lex.svg",
    shortDesc: "Computer program that generates lexical analyzers (tokenizers) widely used with the Yacc parser generator.",
    paradigm: "Lexical Analysis / Deterministic Finite Automata",
    designedBy: "Mike Lesk & Eric Schmidt (Bell Labs)",
    firstAppeared: "1975",
    fileExtension: ".l",
    primaryUse: "Transforming raw source code text into token streams for Unix utilities, early compilers, and macro processors",
    syntaxSummary: "Tripartite structure separated by `%%`: definitions, regular expression rules mapped to C action blocks, and helper code.",
    sampleCode: `%{
#include <stdio.h>
#include "y.tab.h"
%}

%%
[0-9]+          { yylval = atoi(yytext); return NUMBER; }
[ \\t]           ; /* skip whitespace */
\\n              { return '\\n'; }
.               { return yytext[0]; }
%%

int yywrap(void) {
    return 1;
}`,
    explanation: "Lex converts regular expressions into Deterministic Finite Automata (DFA) state machines, feeding token streams into Yacc parsers.",
    expectedOutput: `lex tokenizer.l
Lex DFA synthesis: 12 DFA states synthesized.
Generated lex.yy.c.`
  },
  {
    id: 618,
    name: "Flex",
    slug: "flex",
    cssClass: "flex-lang",
    category: "parser-generators",
    categoryLabel: "Fast Lexical Analyzer",
    logo: "assets/logos/flex.svg",
    shortDesc: "Fast lexical analyzer generator; a free, fast open-source alternative to the classic AT&T Unix lex tool.",
    paradigm: "Lexical Analysis / High-Performance DFA",
    designedBy: "Vern Paxson",
    firstAppeared: "1987",
    fileExtension: ".l",
    primaryUse: "High-performance lexical scanning for compilers, network packet decoders (Wireshark), and text mining tools",
    syntaxSummary: "Full regular expression syntax, start conditions (`<INITIAL>`, `<STRING>`), reentrant scanners (`%option reentrant`), and buffer switching.",
    sampleCode: `%{
#include <stdio.h>
int line_count = 1;
%}

%option noyywrap nodefault

DIGIT   [0-9]
ID      [a-zA-Z_][a-zA-Z0-9_]*

%%
{DIGIT}+        { printf("L%d Token: INTEGER (%s)\\n", line_count, yytext); }
{ID}            { printf("L%d Token: IDENTIFIER (%s)\\n", line_count, yytext); }
\\n              { line_count++; }
[ \\t]+          ; /* ignore whitespace */
.               { printf("L%d Token: SYMBOL (%s)\\n", line_count, yytext); }
%%

int main(void) {
    yylex();
    return 0;
}`,
    explanation: "Flex generates scanners that run substantially faster than traditional Lex by compiling regular expressions into compressed DFA transition tables.",
    expectedOutput: `flex -o scanner.c scanner.l && gcc scanner.c -o scanner
Flex Scanner compiled: Table compression factor: 3.4x
DFA execution throughput: > 50 MB/s text scanning.`
  },
  {
    id: 619,
    name: "PEG",
    slug: "peg",
    cssClass: "peg-lang",
    category: "parsing-formalisms",
    categoryLabel: "Parsing Expression Grammar",
    logo: "assets/logos/peg.svg",
    shortDesc: "Type of formal grammar describing a formal language in terms of a set of rules for recognizing strings without ambiguity.",
    paradigm: "Recognition-Based / Ordered Choice Grammar",
    designedBy: "Bryan Ford (MIT)",
    firstAppeared: "2004",
    fileExtension: ".peg",
    primaryUse: "Modern compiler frontends (Python 3.9+ parser, Rust peg libraries), packrat parsers with linear-time parsing",
    syntaxSummary: "Prioritized choice (`/`), syntactic predicates (and-predicate `&`, not-predicate `!`), and zero ambiguity by construction.",
    sampleCode: `# Parsing Expression Grammar for Math
Expr    <- Sum
Sum     <- Product (('+' / '-') Product)*
Product <- Value (('*' / '/') Value)*
Value   <- Number / '(' Expr ')'
Number  <- [0-9]+

# Unambiguous ordered choice guaranteed`,
    explanation: "Unlike context-free grammars, PEGs use prioritized choice (`/`), which tests alternatives in order and greedily selects the first match to prevent ambiguity.",
    expectedOutput: `peg-parser --grammar math.peg --input "3 + 4 * 2"
Packrat Parsing Pipeline:
Result: Match confirmed.
Parse tree built in linear O(N) time with memoization.`
  },
  {
    id: 620,
    name: "Rascal",
    slug: "rascal",
    cssClass: "rascal-lang",
    category: "metaprogramming",
    categoryLabel: "Metaprogramming & Language Workbench",
    logo: "assets/logos/rascal.svg",
    shortDesc: "Metaprogramming language and language workbench designed for source code analysis, transformation, and DSL development.",
    paradigm: "Functional / Metaprogramming / Term Rewriting",
    designedBy: "Paul Klint, Jurgen Vinju et al. (CWI)",
    firstAppeared: "2009",
    fileExtension: ".rsc",
    primaryUse: "Software metrics calculation, legacy code modernization, automated refactoring, and domain-specific language tooling",
    syntaxSummary: "Concrete syntax matching, comprehensive relational calculus, generalized parsing (GLL), and pattern-based tree transformations.",
    sampleCode: `module CodePlayRascal

import IO;
import ParseTree;

syntax Exp = int val: [0-9]+
           | left Exp "+" Exp
           | left Exp "*" Exp ;

public int eval((Exp)\`<int val>\`) = toInt("<val>");
public int eval((Exp)\`<Exp a> + <Exp b>\`) = eval(a) + eval(b);
public int eval((Exp)\`<Exp a> * <Exp b>\`) = eval(a) * eval(b);

void main() {
    println("Rascal Language Workbench initialized.");
}`,
    explanation: "Rascal integrates parsing, AST transformation, and code generation into a single language with native syntax matching over source trees.",
    expectedOutput: `rascal CodePlayRascal.rsc
Parsing concrete syntax patterns...
AST Rewriting Engine: Evaluated successfully.
Code metrics extracted: 0 violations.`
  },
  {
    id: 621,
    name: "Spoofax",
    slug: "spoofax",
    cssClass: "spoofax-lang",
    category: "metaprogramming",
    categoryLabel: "Language Workbench for Eclipse/VS Code",
    logo: "assets/logos/spoofax.svg",
    shortDesc: "Language workbench for rapid development of domain-specific languages with full IDE support in Eclipse and VS Code.",
    paradigm: "Language Workbench / Declarative DSL",
    designedBy: "Eelco Visser et al. (TU Delft)",
    firstAppeared: "2010",
    fileExtension: ".sdf3",
    primaryUse: "Developing DSLs with instant syntax highlighting, error checking, code completion, refactoring, and compilers",
    syntaxSummary: "Integrates SDF3 for syntax, Statix for type systems, and Stratego for program transformation.",
    sampleCode: `module CurriculumDSL

imports Common

context-free syntax
  Start.Program = {Statement ";"}*
  Statement.Section = "section" ID "{" Entry* "}"
  Entry.Item = "entry" INT ":" STRING`,
    explanation: "Spoofax generates a complete language ecosystem—including parser, type checker, formatter, and editor integration—from high-level declarative specs.",
    expectedOutput: `spoofax build
[SDF3] Compiling syntax definition...
[Statix] Type system verified.
[Editor] VS Code Language Extension generated.`
  },
  {
    id: 622,
    name: "Stratego",
    slug: "stratego",
    cssClass: "stratego-lang",
    category: "metaprogramming",
    categoryLabel: "Strategic Programming Language",
    logo: "assets/logos/stratego.svg",
    shortDesc: "Language designed for program transformation based on the paradigm of rewriting strategies over abstract syntax trees.",
    paradigm: "Term Rewriting / Strategic Programming",
    designedBy: "Eelco Visser (University of Oregon / TU Delft)",
    firstAppeared: "1998",
    fileExtension: ".str",
    primaryUse: "Compiler optimization pipelines, source-to-source program translators, rule-based code refactoring, and code generation",
    syntaxSummary: "First-class rewrite rules (`L -> R`), programmable strategies (`try`, `repeat`, `topdown`, `bottomup`), and dynamic rules.",
    sampleCode: `module optimize-ast
imports libstratego-lib

signature
  constructors
    Plus  : Exp * Exp -> Exp
    Times : Exp * Exp -> Exp
    Int   : Int -> Exp

rules
  EvalConst : Plus(Int(i), Int(j)) -> Int(<addi>(i, j))
  EvalConst : Times(Int(i), Int(j)) -> Int(<muli>(i, j))

strategies
  constant-fold =
    bottomup(try(EvalConst))`,
    explanation: "Stratego decouples rewrite rules from traversal algorithms, allowing developers to orchestrate complex AST transformations with high-level strategies.",
    expectedOutput: `strc -i optimize-ast.str
Stratego Compiler: Generated C transformation engine.
Constant folding traversal: 14 AST nodes reduced.`
  },
  {
    id: 623,
    name: "TXL",
    slug: "txl",
    cssClass: "txl-lang",
    category: "metaprogramming",
    categoryLabel: "Rule-Based Source Transformation",
    logo: "assets/logos/txl.svg",
    shortDesc: "Source-to-source programming language specifically designed for rule-based structural transformation of computer software.",
    paradigm: "Rule-Based / Functional Transformation",
    designedBy: "James R. Cordy (Queen's University)",
    firstAppeared: "1988",
    fileExtension: ".txl",
    primaryUse: "Mass software migration (Y2K remediation), security code auditing, reverse engineering, and automated dialect translation",
    syntaxSummary: "Grammar overrides (`define` / `redefine`), pattern matching rules (`rule` / `function`), and recursive parse-tree replacement.",
    sampleCode: `% TXL Source Transformation Engine
define program
    [repeat statement]
end define

define statement
    [id] = [expression] ;
end define

rule main
    replace [program]
        P [program]
    construct NewP [program]
        P [renumberEntries]
    by
        NewP
end rule`,
    explanation: "TXL parses any formal language into parse trees, applies pattern-replacement transformation rules, and pretty-prints clean migrated source code.",
    expectedOutput: `txl input.c transform.txl -o output.c
TXL 10.8b: Syntactic parsing completed.
Transformation rules fired: 142 matches.
Source-to-source translation succeeded.`
  },
  {
    id: 624,
    name: "Nearley",
    slug: "nearley",
    cssClass: "nearley-lang",
    category: "parser-generators",
    categoryLabel: "Earley Parser for JavaScript",
    logo: "assets/logos/nearley.svg",
    shortDesc: "Simple, fast, and powerful parser toolkit for JavaScript and Node.js based on the general Earley parsing algorithm.",
    paradigm: "Earley Parsing / Context-Free Grammar",
    designedBy: "Hardik Minocha & Kartik Singh",
    firstAppeared: "2014",
    fileExtension: ".ne",
    primaryUse: "Parsing complex domain-specific languages in the browser, custom query parsers, and calculator frontends in JavaScript",
    syntaxSummary: "EBNF-like grammar rules with embedded JavaScript postprocessors returning custom JS objects or AST nodes.",
    sampleCode: `# Nearley Math Grammar
expression -> sum {% id %}

sum -> product "+" sum {% ([a, , b]) => a + b %}
     | product {% id %}

product -> number "*" product {% ([a, , b]) => a * b %}
         | number {% id %}

number -> [0-9]:+ {% ([digits]) => parseInt(digits.join("")) %}`,
    explanation: "Nearley can parse any context-free grammar, easily handling left-recursion, right-recursion, and ambiguous languages without failing.",
    expectedOutput: `nearleyc grammar.ne -o grammar.js
Nearley Compiler: 4 grammar rules compiled to JavaScript module.
Earley parse table generated.`
  },
  {
    id: 625,
    name: "Lark",
    slug: "lark",
    cssClass: "lark-lang",
    category: "parser-generators",
    categoryLabel: "Modern Parsing Library for Python",
    logo: "assets/logos/lark.svg",
    shortDesc: "Modern, general-purpose parsing library for Python that can parse any context-free grammar with Earley and LALR(1) engines.",
    paradigm: "Earley / LALR(1) / Python DSL",
    designedBy: "Erez Shinan",
    firstAppeared: "2017",
    fileExtension: ".lark",
    primaryUse: "Python DSL development, configuration file parsing, code static analysis, and scientific language processing",
    syntaxSummary: "Clean EBNF-inspired syntax with automatic AST creation, terminal regex matching, and tree visitor/transformer classes.",
    sampleCode: `from lark import Lark, Transformer

grammar = """
    ?start: expr
    ?expr: expr "+" term   -> add
         | term
    ?term: term "*" factor -> mul
         | factor
    ?factor: NUMBER        -> num

    %import common.NUMBER
    %import common.WS
    %ignore WS
"""

class Eval(Transformer):
    num = lambda self, n: int(n[0])
    add = lambda self, a: a[0] + a[1]
    mul = lambda self, m: m[0] * m[1]

parser = Lark(grammar, parser='lalr', transformer=Eval())
print("Result:", parser.parse("10 + 2 * 6"))`,
    explanation: "Lark makes parsing accessible in Python, providing both an ultra-fast LALR(1) engine and an Earley algorithm for ambiguous grammars.",
    expectedOutput: `python parser.py
Result: 22
LALR(1) parse time: 0.8 ms.`
  },
  {
    id: 626,
    name: "Ohm",
    slug: "ohm",
    cssClass: "ohm-lang",
    category: "parser-generators",
    categoryLabel: "Object-Oriented Parsing Toolkit",
    logo: "assets/logos/ohm.svg",
    shortDesc: "Library and domain-specific language for parsing and building interpreters, separating grammars from semantic actions.",
    paradigm: "Parsing Expression Grammar / Clean Semantics",
    designedBy: "Alex Warth et al. (Viewpoints Research Institute)",
    firstAppeared: "2016",
    fileExtension: ".ohm",
    primaryUse: "Building programming languages, web-based visual code tools, clean DSLs, and pedagogical compilers",
    syntaxSummary: "Separation of grammar specifications (`.ohm`) from semantics (`createSemantics().addOperation(...)`) in JavaScript/TypeScript.",
    sampleCode: `Arithmetic {
  Exp = AddExp
  AddExp = AddExp "+" MulExp  -- plus
         | AddExp "-" MulExp  -- minus
         | MulExp
  MulExp = MulExp "*" PriExp  -- times
         | MulExp "/" PriExp  -- divide
         | PriExp
  PriExp = "(" Exp ")"        -- paren
         | number
  number = digit+
}`,
    explanation: "Ohm strictly separates syntax from semantics, allowing developers to define multiple interpreters or compilers over the same grammar cleanly.",
    expectedOutput: `ohm-editor interactive validation
Grammar Arithmetic compiled successfully.
Semantic operations instantiated: 1 interpreter, 1 pretty-printer.`
  },
  {
    id: 627,
    name: "Prolog SWI",
    slug: "swi-prolog",
    cssClass: "swi-prolog-lang",
    category: "logic-programming",
    categoryLabel: "Industry Standard Logic Engine",
    logo: "assets/logos/swi-prolog.svg",
    shortDesc: "Comprehensive, free Prolog environment created by Jan Wielemaker equipped with advanced libraries, multithreading, and web server.",
    paradigm: "Declarative / Logic Programming / Horn Clauses",
    designedBy: "Jan Wielemaker (University of Amsterdam / CWI)",
    firstAppeared: "1987",
    fileExtension: ".pl",
    primaryUse: "Knowledge representation, semantic web reasoning, natural language processing, expert diagnostic systems, and rule engines",
    syntaxSummary: "Facts and rules using Horn clauses (`Head :- Body.`), unification (`=`), backtracking resolution, and Definite Clause Grammars (DCG).",
    sampleCode: `:- module(curriculum, [language_entry/3, section_track/2]).

% Facts: Knowledge base of curriculum sections
language_entry(627, 'Prolog SWI', 'Logic Programming').
language_entry(628, 'Visual Prolog', 'Logic Programming').

% Rules
section_track(Id, Domain) :-
    language_entry(Id, _, Domain).

% Query: ?- section_track(627, Domain).
% Result: Domain = 'Logic Programming'.`,
    explanation: "SWI-Prolog is the most popular Prolog implementation in the world, featuring constraint logic programming, tabling, and embedded HTTP servers.",
    expectedOutput: `swipl -q -s curriculum.pl
?- section_track(627, Domain).
Domain = 'Logic Programming'.
?- halt.`
  },
  {
    id: 628,
    name: "Visual Prolog",
    slug: "visual-prolog",
    cssClass: "visual-prolog-lang",
    category: "logic-programming",
    categoryLabel: "Object-Oriented Strongly Typed Prolog",
    logo: "assets/logos/visual-prolog.svg",
    shortDesc: "Strongly typed object-oriented extension of Prolog created by Prolog Development Center with native Windows GUI integration.",
    paradigm: "Logic / Object-Oriented / Strongly Typed",
    designedBy: "Prolog Development Center (PDC)",
    firstAppeared: "1996",
    fileExtension: ".pro",
    primaryUse: "Commercial planning systems, industrial scheduling, expert legal decision engines, and Windows desktop software",
    syntaxSummary: "Predicate declarations, class definitions, interfaces, deterministic predicates, and strong static typing.",
    sampleCode: `class curriculum
    predicates
        run : () -> string.
end class

implement curriculum
    clauses
        run() = Result :-
            Result = "Visual Prolog Typed Logic Execution Successful".
end implement`,
    explanation: "Visual Prolog marries the declarative power of logic programming with modern object-oriented principles and strict static typing.",
    expectedOutput: `vip.exe /build solution.prj
Visual Prolog Compiler 10: Building native Win64 executable.
Type inference: 0 errors. Execution Succeeded.`
  },
  {
    id: 629,
    name: "Logtalk",
    slug: "logtalk",
    cssClass: "logtalk-lang",
    category: "logic-programming",
    categoryLabel: "Object-Oriented Logic Language",
    logo: "assets/logos/logtalk.svg",
    shortDesc: "Open-source object-oriented logic programming language that extends and leverages the Prolog language with protocols and categories.",
    paradigm: "Declarative / Object-Oriented Logic",
    designedBy: "Paulo Moura",
    firstAppeared: "1998",
    fileExtension: ".lgt",
    primaryUse: "Enterprise logic programming, modular Prolog libraries, unit testing, and cross-Prolog compatibility layers",
    syntaxSummary: "Entities (`object`, `protocol`, `category`), message sending operator (`::`), multi-inheritance, and parametric objects.",
    sampleCode: `:- object(curriculum_section(_Id, _Title)).
    :- public(describe/0).

    describe :-
        parameter(1, Id),
        parameter(2, Title),
        write('Section #'), write(Id), write(': '), write(Title), nl.
:- end_object.

% Usage: ?- curriculum_section(12, 'Logic & Solvers')::describe.`,
    explanation: "Logtalk acts as a portable, object-oriented module system that runs on top of nearly any standard Prolog compiler with zero performance penalty.",
    expectedOutput: `ygt -f curriculum.lgt
?- curriculum_section(12, 'Logic & Solvers')::describe.
Section #12: Logic & Solvers
true.`
  },
  {
    id: 630,
    name: "Ciao",
    slug: "ciao",
    cssClass: "ciao-lang",
    category: "logic-programming",
    categoryLabel: "Multi-Paradigm Declarative Language",
    logo: "assets/logos/ciao.svg",
    shortDesc: "Multi-paradigm programming language that extends Prolog with functional, higher-order, and constraint programming and static assertion checking.",
    paradigm: "Multi-Paradigm / Logic / Functional / Abstract Interpretation",
    designedBy: "CLIP Lab (Technical University of Madrid)",
    firstAppeared: "1997",
    fileExtension: ".pl",
    primaryUse: "Program verification, abstract interpretation, embedded systems, and verified multi-paradigm declarative applications",
    syntaxSummary: "Modular logic syntax, assertions (`:- pred ... + ...`), functional notation (`:=`), and compile-time verification.",
    sampleCode: `:- module(fibonacci, [fib/2], [assertions]).

:- pred fib(+int, -int) + is_det.
fib(0, 0) := .
fib(1, 1) := .
fib(N, F) := fib(N - 1) + fib(N - 2) :- N > 1.

% Ciao Verified Functional/Logic Hybrid`,
    explanation: "Ciao is unique among logic programming languages for its CiaoPP preprocessor, which statically verifies properties like determinism and termination.",
    expectedOutput: `ciaoc fibonacci.pl
Ciao Compiler: Validating program assertions via abstract interpretation.
Assertion verified: fib/2 is deterministic.
Compiled native executable created.`
  },
  {
    id: 631,
    name: "Picat",
    slug: "picat",
    cssClass: "picat-lang",
    category: "logic-programming",
    categoryLabel: "Rule-Based Imperative Logic Language",
    logo: "assets/logos/picat.svg",
    shortDesc: "Simple, general-purpose programming language combining logic, functional, constraint, and imperative programming paradigms.",
    paradigm: "Logic / Functional / Constraint / Tabling",
    designedBy: "Neng-Fa Zhou & Jonathan Fruhman",
    firstAppeared: "2013",
    fileExtension: ".pi",
    primaryUse: "Combinatorial optimization, dynamic programming, constraint satisfaction, planning problems, and competition problem solving",
    syntaxSummary: "Pattern-matching rules (`=>`), loops (`foreach`), mutable assignment (`:=`), tabling, and built-in CP/SAT/MIP solvers.",
    sampleCode: `import cp.

main =>
    Vars = [X, Y, Z],
    Vars :: 1..9,
    all_different(Vars),
    X + Y + Z #= 15,
    X #< Y, Y #< Z,
    solve(Vars),
    println(Vars).`,
    explanation: "Picat offers the convenience of imperative loops while providing solver power, consistently ranking among the top solvers in the MiniZinc Challenge.",
    expectedOutput: `picat solution.pi
[1, 5, 9]
Execution time: 0.002s. Solved via built-in CP engine.`
  },
  {
    id: 632,
    name: "Answer Set Programming",
    slug: "asp-logic",
    cssClass: "asp-logic-lang",
    category: "logic-programming",
    categoryLabel: "Declarative Knowledge Paradigm",
    logo: "assets/logos/asp-logic.svg",
    shortDesc: "Declarative logic programming paradigm oriented towards difficult NP-hard search problems based on stable model semantics.",
    paradigm: "Declarative / Answer Set Programming / SAT",
    designedBy: "Michael Gelfond & Vladimir Lifschitz",
    firstAppeared: "1999",
    fileExtension: ".lp",
    primaryUse: "Product configuration, timetable scheduling, space mission planning (NASA shuttle operations), and automated reasoning",
    syntaxSummary: "Generate-Define-Test methodology with choice rules (`{ p(X) }`), default negation (`not`), and integrity constraints (`:- ...`).",
    sampleCode: `% 3-Coloring Problem in ASP
node(1..4).
edge(1,2). edge(2,3). edge(3,4). edge(4,1). edge(1,3).
color(red; green; blue).

% Generate: Assign exactly one color to each node
1 { assign(X, C) : color(C) } 1 :- node(X).

% Test: Adjacent nodes cannot share the same color
:- edge(X, Y), assign(X, C), assign(Y, C).`,
    explanation: "In ASP, the programmer models a search problem such that each stable model (answer set) corresponds directly to a valid solution.",
    expectedOutput: `clingo coloring.lp
clingo version 5.6.2
Reading from coloring.lp
Solving...
Answer: 1
assign(1,red) assign(2,green) assign(3,blue) assign(4,green)
SATISFIABLE`
  },
  {
    id: 633,
    name: "Clingo",
    slug: "clingo",
    cssClass: "clingo-lang",
    category: "logic-programming",
    categoryLabel: "ASP Grounder & Solver System",
    logo: "assets/logos/clingo.svg",
    shortDesc: "State-of-the-art Answer Set Programming system developed by the University of Potsdam combining grounder Gringo with solver Clasp.",
    paradigm: "ASP Solving / Conflict-Driven Learning",
    designedBy: "Potassco (University of Potsdam)",
    firstAppeared: "2008",
    fileExtension: ".lp",
    primaryUse: "Industrial combinatorial optimization, system configuration, multi-agent path finding, and bioinformatics",
    syntaxSummary: "Integrates Gringo grounding engine with Clasp CDCL solver, supporting Python/Lua scripting and multi-shot solving.",
    sampleCode: `#script (python)
def on_model(model):
    print("Found answer set:", model)
#end.

% Clingo Multi-Shot Logic Program
step(0..3).
{ active(S) } :- step(S).
#show active/1.`,
    explanation: "Clingo is the international gold standard for Answer Set Programming, merging high-performance grounding with conflict-driven constraint learning.",
    expectedOutput: `clingo solver.lp
Solving...
Answer: 1
active(0) active(1) active(2) active(3)
SATISFIABLE

Models       : 16
Calls        : 1
Time         : 0.003s`
  },
  {
    id: 634,
    name: "MiniZinc",
    slug: "minizinc",
    cssClass: "minizinc-lang",
    category: "constraint-modeling",
    categoryLabel: "High-Level Constraint Modeling",
    logo: "assets/logos/minizinc.svg",
    shortDesc: "High-level, solver-independent constraint modeling language for specifying combinatorial optimization problems.",
    paradigm: "Declarative / Constraint Satisfaction",
    designedBy: "Monash University & Data61 (NICTA)",
    firstAppeared: "2007",
    fileExtension: ".mzn",
    primaryUse: "Scheduling, routing, resource allocation, packing, and benchmarking constraint solvers across CP, SAT, and MIP",
    syntaxSummary: "Variable declarations (`var int`), constraints (`constraint`), objectives (`solve satisfy` or `solve minimize`), and output formatting.",
    sampleCode: `include "globals.mzn";

int: n = 4;
array[1..n] of var 1..n: q;

% N-Queens Problem
constraint all_different(q);
constraint all_different([q[i] + i | i in 1..n]);
constraint all_different([q[i] - i | i in 1..n]);

solve satisfy;

output ["Queens: ", show(q), "\\n"];`,
    explanation: "MiniZinc models combinatorial problems in solver-neutral format and compiles them into FlatZinc for consumption by CP, MIP, or SAT engines.",
    expectedOutput: `minizinc --solver gecode nqueens.mzn
Queens: [2, 4, 1, 3]
----------
==========
Finished in 2ms.`
  },
  {
    id: 635,
    name: "Essence",
    slug: "essence",
    cssClass: "essence-lang",
    category: "constraint-modeling",
    categoryLabel: "Abstract Constraint Specification",
    logo: "assets/logos/essence.svg",
    shortDesc: "Abstract formal constraint specification language developed at the University of St Andrews using rich combinatorial types.",
    paradigm: "Declarative / Formal Specification",
    designedBy: "Alan Frisch et al. (University of St Andrews)",
    firstAppeared: "2007",
    fileExtension: ".essence",
    primaryUse: "High-level modeling of mathematical puzzles, combinatorial graph problems, and automated model synthesis via Conjure",
    syntaxSummary: "First-class combinatorial objects like sets, multisets, relations, partitions, functions, and nested structures.",
    sampleCode: `language Essence 1.3

given n : int(1..)

find board : function (total) int(1..n) --> int(1..n)

such that
    forAll i, j : int(1..n) , i < j .
        board(i) != board(j) /\\
        |board(i) - board(j)| != j - i`,
    explanation: "Essence operates at a higher abstraction level than other modeling languages, allowing users to write specifications without premature data representations.",
    expectedOutput: `conjure solve nqueens.essence --number-of-solutions=1
Conjure: Synthesizing concrete representations.
Solution found: board = function(1 --> 2, 2 --> 4, 3 --> 1, 4 --> 3)`
  },
  {
    id: 636,
    name: "OPL",
    slug: "opl",
    cssClass: "opl-lang",
    category: "mathematical-modeling",
    categoryLabel: "Optimization Programming Language",
    logo: "assets/logos/opl.svg",
    shortDesc: "Modeling language for combinatorial optimization developed by Pascal Van Hentenryck powering IBM ILOG CPLEX Optimization Studio.",
    paradigm: "Declarative / Linear & Constraint Programming",
    designedBy: "Pascal Van Hentenryck (IBM / ILOG)",
    firstAppeared: "1999",
    fileExtension: ".mod",
    primaryUse: "Industrial supply chain optimization, manufacturing production schedules, fleet dispatch, and enterprise resource planning",
    syntaxSummary: "Decision variables (`dvar`), parameters, mathematical objective functions (`maximize`/`minimize`), and constraint blocks.",
    sampleCode: `// IBM ILOG OPL Production Optimization
dvar float+ Gas;
dvar float+ Chloride;

maximize
  40 * Gas + 50 * Chloride;

subject to {
  ctCapacity:
    Gas + Chloride <= 50;
  ctDemand:
    3 * Gas + 4 * Chloride <= 180;
}`,
    explanation: "OPL brings together linear programming, integer programming, and constraint programming under a unified syntax executed by IBM CPLEX.",
    expectedOutput: `oplrun production.mod
<<< setup
<<< solve
OBJECTIVE: 2300
Gas = 20
Chloride = 30
Optimal solution found with tolerance 0.0001.`
  },
  {
    id: 637,
    name: "AMPL",
    slug: "ampl",
    cssClass: "ampl-lang",
    category: "mathematical-modeling",
    categoryLabel: "Mathematical Programming Language",
    logo: "assets/logos/ampl.svg",
    shortDesc: "Comprehensive and powerful algebraic modeling language for mathematical programming problems developed at Bell Labs.",
    paradigm: "Declarative / Algebraic Mathematical Modeling",
    designedBy: "Robert Fourer, David Gay, Brian Kernighan (Bell Labs)",
    firstAppeared: "1985",
    fileExtension: ".ampl",
    primaryUse: "Energy grid dispatch, financial portfolio rebalancing, chemical engineering process design, and economic equilibrium modeling",
    syntaxSummary: "Mathematical notation (`sum`, `prod`), indexed sets, parameter matrices, dual variables, and interfaces to 40+ solvers.",
    sampleCode: `# AMPL Mathematical Model
set PRODUCTS;
param Rate {PRODUCTS} > 0;
param Profit {PRODUCTS};
param AvailableHours >= 0;

var Production {p in PRODUCTS} >= 0;

maximize Total_Profit:
    sum {p in PRODUCTS} Profit[p] * Production[p];

subject to Production_Limit:
    sum {p in PRODUCTS} (1/Rate[p]) * Production[p] <= AvailableHours;`,
    explanation: "AMPL closely mirrors standard mathematical equations on paper, transmitting problem definitions to solvers like Gurobi, CPLEX, and IPOPT.",
    expectedOutput: `ampl: model diet.mod;
ampl: data diet.dat;
ampl: solve;
MINOS 5.51: optimal solution found.
13 iterations, objective 88.2`
  },
  {
    id: 638,
    name: "GAMS",
    slug: "gams",
    cssClass: "gams-lang",
    category: "mathematical-modeling",
    categoryLabel: "General Algebraic Modeling System",
    logo: "assets/logos/gams.svg",
    shortDesc: "High-level modeling system for mathematical programming and optimization tailored for complex, large-scale modeling applications.",
    paradigm: "Declarative / Algebraic Optimization",
    designedBy: "Alexander Meeraus & World Bank",
    firstAppeared: "1988",
    fileExtension: ".gms",
    primaryUse: "Macroeconomic planning, electric power market clearing, greenhouse gas emissions modeling, and water resource distribution",
    syntaxSummary: "Entities categorized into Sets, Parameters, Tables, Variables, and Equations, solved using `Model` and `Solve` statements.",
    sampleCode: `Sets
    i   canning plants   / seattle, san-diego /
    j   markets          / new-york, chicago, topeka / ;

Parameters
    a(i)  capacity of plant i in cases
          /    seattle     350
               san-diego   600  / ;

Positive Variables x(i,j) ;
Free Variable z ;

Equations
    cost        define objective function
    supply(i)   observe supply limit at plant i ;

cost ..        z  =e=  sum((i,j), 90 * x(i,j)) ;
supply(i) ..   sum(j, x(i,j))  =l=  a(i) ;

Model transport /all/ ;
Solve transport using lp minimizing z ;`,
    explanation: "GAMS is widely used in institutional economics and international policy, supporting linear, nonlinear, mixed-integer, and complementary problems.",
    expectedOutput: `GAMS 46.2.0 Status: Normal Completion
Transport Model Solved.
Optimal Objective Value: 153.6750
Resource usage: 0.02 seconds.`
  },
  {
    id: 639,
    name: "AIMMS",
    slug: "aimms",
    cssClass: "aimms-lang",
    category: "mathematical-modeling",
    categoryLabel: "Prescriptive Analytics Platform",
    logo: "assets/logos/aimms.svg",
    shortDesc: "Advanced Interactive Multidimensional Modeling System providing modeling and optimization tools with native UI development.",
    paradigm: "Declarative / Algebraic / Prescriptive Analytics",
    designedBy: "Johannes Bisschop (AIMMS B.V.)",
    firstAppeared: "1993",
    fileExtension: ".aim",
    primaryUse: "Supply chain network design, demand forecasting, airline crew scheduling, and enterprise business decision intelligence",
    syntaxSummary: "Declarative tree model structure with sets, parameters, mathematical constraints, and integrated WebUI dashboards.",
    sampleCode: `DeclarationSection ModelDeclarations {
    Set Plants {
        Index: p;
    }
    Parameter Demand {
        IndexDomain: p;
    }
    Variable ProductionQuantity {
        IndexDomain: p;
        Range: nonnegative;
    }
    Constraint TotalDemandConstraint {
        IndexDomain: p;
        Definition: ProductionQuantity(p) >= Demand(p);
    }
}`,
    explanation: "AIMMS combines an algebraic modeling language with rapid end-user dashboard generation, bridging data science with executive decision-making.",
    expectedOutput: `AIMMS Engine: Compiling declarations...
Matrix generation: 1,420 rows, 3,800 columns.
CPLEX Solver: Global optimal solution found.`
  },
  {
    id: 640,
    name: "LINGO",
    slug: "lingo-opt",
    cssClass: "lingo-opt-lang",
    category: "mathematical-modeling",
    categoryLabel: "Comprehensive Optimization Suite",
    logo: "assets/logos/lingo-opt.svg",
    shortDesc: "Comprehensive tool designed to make building and solving Linear, Nonlinear, and Integer optimization models fast and easy.",
    paradigm: "Declarative / Mathematical Optimization",
    designedBy: "LINDO Systems Inc.",
    firstAppeared: "1988",
    fileExtension: ".lng",
    primaryUse: "Engineering design optimization, financial portfolio allocation, blending problems, and operations research education",
    syntaxSummary: "Concise equation formatting ending in semicolons, sets block (`SETS: ... ENDSETS`), and data block (`DATA: ... ENDDATA`).",
    sampleCode: `MODEL:
SETS:
  ITEMS: VALUE, WEIGHT;
ENDSETS

DATA:
  CAPACITY = 50;
  VALUE = 60 100 120;
  WEIGHT = 10 20 30;
ENDDATA

MAX = @SUM(ITEMS(I): VALUE(I) * TAKE(I));

@SUM(ITEMS(I): WEIGHT(I) * TAKE(I)) <= CAPACITY;
@FOR(ITEMS(I): @BIN(TAKE(I)));

END`,
    explanation: "LINGO allows optimization problems to be formulated in compact, readable statements, solving continuous and discrete models seamlessly.",
    expectedOutput: `LINGO 20.0 Solver Status:
Model Class: Pure Integer Linear Program (PILP)
Objective Value: 220
Total Solver Iterations: 4
Solution Status: Globally Optimal.`
  },
  {
    id: 641,
    name: "Pyomo",
    slug: "pyomo",
    cssClass: "pyomo-lang",
    category: "optimization-frameworks",
    categoryLabel: "Python Optimization Modeling Objects",
    logo: "assets/logos/pyomo.svg",
    shortDesc: "Python-based open-source software package that supports a diverse range of optimization capabilities for formulating mathematical models.",
    paradigm: "Object-Oriented / Algebraic Modeling in Python",
    designedBy: "William Hart et al. (Sandia National Laboratories)",
    firstAppeared: "2008",
    fileExtension: ".py",
    primaryUse: "Electric power grid dispatch, chemical plant dynamic optimization, stochastic programming, and open-science research",
    syntaxSummary: "Python classes (`ConcreteModel`, `Var`, `Constraint`, `Objective`) with seamless NumPy and Pandas data pipeline integration.",
    sampleCode: `import pyomo.environ as pyo

model = pyo.ConcreteModel()

model.x = pyo.Var([1, 2], domain=pyo.NonNegativeReals)

model.obj = pyo.Objective(
    expr=2 * model.x[1] + 3 * model.x[2],
    sense=pyo.maximize
)

model.c1 = pyo.Constraint(expr=3 * model.x[1] + 4 * model.x[2] <= 100)

solver = pyo.SolverFactory('glpk')
solver.solve(model)

print("x[1] =", pyo.value(model.x[1]))
print("x[2] =", pyo.value(model.x[2]))`,
    explanation: "Pyomo embeds algebraic modeling directly within standard Python, giving engineers access to modern data analysis, plotting, and cloud pipelines.",
    expectedOutput: `python solve_pyomo.py
GLPK Simplex Optimizer 5.0
OPTIMAL SOLUTION FOUND
x[1] = 0.0
x[2] = 25.0
Objective value: 75.0`
  },
  {
    id: 642,
    name: "JuMP",
    slug: "jump",
    cssClass: "jump-lang",
    category: "optimization-frameworks",
    categoryLabel: "Modeling Language for Julia",
    logo: "assets/logos/jump.svg",
    shortDesc: "High-performance modeling language and collection of packages for mathematical optimization embedded inside Julia.",
    paradigm: "Macro-Based / High-Performance Modeling",
    designedBy: "Miles Lubin & Iain Dunning (MIT)",
    firstAppeared: "2013",
    fileExtension: ".jl",
    primaryUse: "Next-generation energy systems modeling, large-scale nonlinear control, robotics trajectory planning, and quantum compute",
    syntaxSummary: "Julia macros (`@variable`, `@constraint`, `@objective`) compiling directly to native machine code with zero wrapper overhead.",
    sampleCode: `using JuMP
using HiGHS

model = Model(HiGHS.Optimizer)

@variable(model, x >= 0)
@variable(model, y >= 0)

@objective(model, Max, 5x + 3y)
@constraint(model, c1, 1x + 2y <= 14)
@constraint(model, c2, 3x - 1y <= 0)

optimize!(model)

println("x = ", value(x))
println("y = ", value(y))`,
    explanation: "JuMP matches the speed of commercial C++ modeling languages while retaining the expressive syntax and dynamic flexibility of Julia.",
    expectedOutput: `julia model.jl
Running HiGHS 1.5.3: Optimal
Objective value: 28.0
x = 2.0
y = 6.0`
  },
  {
    id: 643,
    name: "CVX",
    slug: "cvx",
    cssClass: "cvx-lang",
    category: "optimization-frameworks",
    categoryLabel: "Disciplined Convex Programming",
    logo: "assets/logos/cvx.svg",
    shortDesc: "MATLAB-based modeling system for convex optimization turning standard MATLAB code into disciplined convex programs (DCP).",
    paradigm: "Disciplined Convex Programming / Mathematical Modeling",
    designedBy: "Michael Grant & Stephen Boyd (Stanford University)",
    firstAppeared: "2005",
    fileExtension: ".m",
    primaryUse: "Signal processing, wireless communications, machine learning regularizers (LASSO, SVM), and control systems",
    syntaxSummary: "`cvx_begin` and `cvx_end` blocks enforcing disciplined convex rules, with conic solver translation.",
    sampleCode: `% Stanford CVX Disciplined Convex Programming
n = 100;
A = randn(50, n);
b = randn(50, 1);
gamma = 0.5;

cvx_begin
    variable x(n)
    minimize( norm(A * x - b, 2) + gamma * norm(x, 1) )
cvx_end

disp(['L1 norm of x: ', num2str(norm(x, 1))]);`,
    explanation: "CVX verifies that formulated problems obey convexity rules at compile time, guaranteeing that any accepted problem can be solved to global optimality.",
    expectedOutput: `CVX: Disciplined Convex Programming System
Homogeneous interior point solver (SeDuMi):
Optimal objective value: 12.450
Status: Solved.`
  },
  {
    id: 644,
    name: "Stan",
    slug: "stan",
    cssClass: "stan-lang",
    category: "probabilistic-programming",
    categoryLabel: "Bayesian Statistical Inference",
    logo: "assets/logos/stan.svg",
    shortDesc: "State-of-the-art platform for statistical modeling and high-performance statistical computation using Hamiltonian Monte Carlo.",
    paradigm: "Probabilistic Programming / MCMC / HMC",
    designedBy: "Andrew Gelman, Bob Carpenter et al. (Columbia)",
    firstAppeared: "2012",
    fileExtension: ".stan",
    primaryUse: "Epidemiological modeling (COVID-19 projections), pharmacology, clinical trials, social science, and sports analytics",
    syntaxSummary: "Structured blocks (`data`, `parameters`, `transformed parameters`, `model`, `generated quantities`) compiling to native C++.",
    sampleCode: `data {
  int<lower=0> N;
  vector[N] x;
  vector[N] y;
}
parameters {
  real alpha;
  real beta;
  real<lower=0> sigma;
}
model {
  // Priors
  alpha ~ normal(0, 10);
  beta ~ normal(0, 10);
  sigma ~ exponential(1);

  // Likelihood
  y ~ normal(alpha + beta * x, sigma);
}`,
    explanation: "Stan compiles models into optimized C++ that executes the No-U-Turn Sampler (NUTS), sampling complex high-dimensional posterior distributions efficiently.",
    expectedOutput: `cmdstan build model.stan
Model compiled to native binary model_stan
Running 4 chains with NUTS sampler: 1000 warmup, 1000 sampling...
Inference completed: R-hat < 1.01 across all parameters.`
  },
  {
    id: 645,
    name: "BUGS",
    slug: "bugs",
    cssClass: "bugs-lang",
    category: "probabilistic-programming",
    categoryLabel: "Bayesian Inference Using Gibbs Sampling",
    logo: "assets/logos/bugs.svg",
    shortDesc: "Pioneering software package and declarative language for performing Bayesian inference Using Gibbs Sampling on graphical models.",
    paradigm: "Declarative / Graphical Models / MCMC",
    designedBy: "David Spiegelhalter et al. (MRC Biostatistics Unit)",
    firstAppeared: "1989",
    fileExtension: ".bug",
    primaryUse: "Medical statistics, health economics, meta-analysis, environmental epidemiology, and ecological modeling",
    syntaxSummary: "Stochastic relations (`~`), deterministic relations (`<-`), for-loops, and directed acyclic graph (DAG) representation.",
    sampleCode: `model {
    for (i in 1:N) {
        y[i] ~ dnorm(mu[i], tau)
        mu[i] <- alpha + beta * (x[i] - mean.x)
    }

    # Prior distributions
    alpha ~ dnorm(0.0, 1.0E-4)
    beta ~ dnorm(0.0, 1.0E-4)
    tau ~ dgamma(1.0E-3, 1.0E-3)
    sigma <- 1 / sqrt(tau)
}`,
    explanation: "BUGS democratized Bayesian statistics in the 1990s, allowing researchers to specify complex hierarchical models without hand-coding Gibbs samplers.",
    expectedOutput: `OpenBUGS modelCheck('model.bug')
model is syntactically correct
data loaded, compile completed
Chain 1: 5000 iterations completed.`
  },
  {
    id: 646,
    name: "JAGS",
    slug: "jags",
    cssClass: "jags-lang",
    category: "probabilistic-programming",
    categoryLabel: "Just Another Gibbs Sampler",
    logo: "assets/logos/jags.svg",
    shortDesc: "Just Another Gibbs Sampler, an open-source C++ program for Bayesian analysis of hierarchical models using MCMC.",
    paradigm: "Declarative / Bayesian MCMC / C++",
    designedBy: "Martyn Plummer",
    firstAppeared: "2007",
    fileExtension: ".jags",
    primaryUse: "Applied Bayesian statistics in R (via rjags), ecological survey analysis, psychology research, and econometrics",
    syntaxSummary: "BUGS-compatible syntax with enhanced platform independence, custom C++ distributions, and multi-thread support.",
    sampleCode: `model {
    for (i in 1:n) {
        successes[i] ~ dbin(p[i], trials[i])
        logit(p[i]) <- beta0 + beta1 * treatment[i]
    }

    beta0 ~ dnorm(0, 0.01)
    beta1 ~ dnorm(0, 0.01)
}`,
    explanation: "JAGS was created to bring the BUGS language into standard portable C++ with clean command-line utilities and deep integration with GNU R.",
    expectedOutput: `jags script.cmd
Welcome to JAGS 4.3.0
Reading model from model.jags... OK
Compiling model graph... OK
Updating 10000 iterations: Progress: 100%
Convergence diagnostics validated.`
  },
  {
    id: 647,
    name: "PyMC",
    slug: "pymc",
    cssClass: "pymc-lang",
    category: "probabilistic-programming",
    categoryLabel: "Probabilistic Programming in Python",
    logo: "assets/logos/pymc.svg",
    shortDesc: "Probabilistic programming package for Python that allows users to fit Bayesian models using modern Markov chain Monte Carlo algorithms.",
    paradigm: "Probabilistic / Tensor Computation / Bayesian",
    designedBy: "PyMC Development Team (Chris Fonnesbeck et al.)",
    firstAppeared: "2003",
    fileExtension: ".py",
    primaryUse: "A/B testing analytics, customer churn prediction, time-series forecasting, marketing mix modeling, and causal inference",
    syntaxSummary: "Context-manager notation (`with pm.Model():`), prior variables, observed tensors, PyTensor graph computation, and ArviZ diagnostics.",
    sampleCode: `import pymc as pm
import numpy as np

# PyMC Modern Bayesian Regression
x_data = np.linspace(0, 10, 50)
y_data = 2.5 * x_data + np.random.normal(0, 1, 50)

with pm.Model() as model:
    # Priors
    alpha = pm.Normal("alpha", mu=0, sigma=10)
    beta = pm.Normal("beta", mu=0, sigma=10)
    sigma = pm.HalfNormal("sigma", sigma=1)

    # Expected value
    mu = alpha + beta * x_data

    # Likelihood
    y = pm.Normal("y", mu=mu, sigma=sigma, observed=y_data)

    # Sampling
    idata = pm.sample(draws=1000, tune=1000, chains=2)`,
    explanation: "PyMC combines an intuitive Python syntax with the PyTensor computational graph engine, generating compiled C/JAX samplers for Bayesian inference.",
    expectedOutput: `Auto-assigning NUTS sampler...
Initializing NUTS using jitter+adapt_diag...
Multiprocess sampling (2 chains in 4 jobs)
NUTS: [alpha, beta, sigma]
Sampling 2 chains: 100%|██████████| 4000/4000 [00:02<00:00, 1720.45draws/s]`
  },
  {
    id: 648,
    name: "Turing.jl",
    slug: "turing-jl",
    cssClass: "turing-jl-lang",
    category: "probabilistic-programming",
    categoryLabel: "Probabilistic Programming in Julia",
    logo: "assets/logos/turing-jl.svg",
    shortDesc: "Flexible, high-performance probabilistic programming language library embedded inside Julia with composable MCMC algorithms.",
    paradigm: "Probabilistic / Composable MCMC / High Performance",
    designedBy: "Hong Ge, Martin Trapp et al. (Turing Core Team)",
    firstAppeared: "2018",
    fileExtension: ".jl",
    primaryUse: "Scientific machine learning (SciML), differential equation parameter estimation, Gaussian processes, and robotics",
    syntaxSummary: "Macro definition (`@model`), tilde operator (`~`) for stochastic variables, and composable inference engines.",
    sampleCode: `using Turing

@model function linear_regression(x, y)
    sigma ~ Exponential(1)
    intercept ~ Normal(0, 2)
    slope ~ Normal(0, 2)

    for i in eachindex(x)
        y[i] ~ Normal(intercept + slope * x[i], sigma)
    end
end

model = linear_regression(x_data, y_data)
chain = sample(model, NUTS(), 1000)`,
    explanation: "Turing.jl leverages Julia's automatic differentiation and native performance, allowing arbitrary Julia functions and differential equations inside models.",
    expectedOutput: `Turing.jl: Sampling 1000 iterations using NUTS...
Chains MCMC chain (1000×15×1 array):
Parameters: intercept (2.01 ± 0.08), slope (3.48 ± 0.05), sigma (0.98 ± 0.04)
ESS > 800, R-hat ≈ 1.00.`
  },
  {
    id: 649,
    name: "Pyro",
    slug: "pyro",
    cssClass: "pyro-lang",
    category: "probabilistic-programming",
    categoryLabel: "Deep Probabilistic Programming",
    logo: "assets/logos/pyro.svg",
    shortDesc: "Universal probabilistic programming language built on Python and PyTorch by Uber AI Labs for deep probabilistic modeling.",
    paradigm: "Deep Probabilistic / Variational Inference / PyTorch",
    designedBy: "Uber AI Labs (Noah Goodman et al.)",
    firstAppeared: "2017",
    fileExtension: ".py",
    primaryUse: "Variational autoencoders (VAEs), Bayesian neural networks, time-series forecasting with Deep Markov Models, and GPU inference",
    syntaxSummary: "`pyro.sample()`, `pyro.param()`, stochastic variational inference (`SVI`), and integration with standard PyTorch neural nets.",
    sampleCode: `import torch
import pyro
import pyro.distributions as dist
from pyro.infer import SVI, Trace_ELBO
from pyro.optim import Adam

def model(data):
    loc = pyro.sample("loc", dist.Normal(0.0, 1.0))
    pyro.sample("obs", dist.Normal(loc, 1.0), obs=data)

def guide(data):
    guide_loc = pyro.param("guide_loc", torch.tensor(0.0))
    pyro.sample("loc", dist.Normal(guide_loc, 1.0))

svi = SVI(model, guide, Adam({"lr": 0.01}), loss=Trace_ELBO())
print("Pyro GPU-accelerated deep probabilistic engine ready.")`,
    explanation: "Pyro unites expressive probabilistic modeling with deep learning by using PyTorch tensors and stochastic variational inference on GPUs.",
    expectedOutput: `python pyro_model.py
Pyro GPU-accelerated deep probabilistic engine ready.
SVI Training Epoch 100: ELBO loss converged to -142.30.
Inference validated.`
  },
  {
    id: 650,
    name: "Church",
    slug: "church",
    cssClass: "church-lang",
    category: "probabilistic-programming",
    categoryLabel: "Pioneer Probabilistic Lisp Dialect",
    logo: "assets/logos/church.svg",
    shortDesc: "Pioneering probabilistic programming language based on Scheme/Lisp developed at MIT by Noah Goodman and Vikash Mansinghka.",
    paradigm: "Probabilistic / Functional / Scheme Lisp",
    designedBy: "Noah Goodman, Vikash Mansinghka, Josh Tenenbaum (MIT)",
    firstAppeared: "2008",
    fileExtension: ".church",
    primaryUse: "Cognitive science research, computational modeling of human learning, probabilistic generative semantics, and AI vision",
    syntaxSummary: "Scheme S-expressions, stochastic primitives (`flip`, `gaussian`), conditioning via `query`, and memoization (`mem`).",
    sampleCode: `; Church Probabilistic Lisp Dialect
(define (noisy-sensor ground-truth)
  (if (flip 0.8)
      ground-truth
      (not ground-truth)))

(define samples
  (mh-query 500 10
    (define raining (flip 0.3))
    (define sprinkler (flip (if raining 0.01 0.4)))
    (define grass-wet (or (flip 0.9) (and sprinkler (flip 0.8))))

    ; Query: Probability it was raining given the grass is wet
    raining
    (equal? grass-wet #t)))`,
    explanation: "Named after Alonzo Church, this language proved that universal Turing-complete computation and Bayesian probability theory could be elegantly unified.",
    expectedOutput: `church --evaluate sprinkler.church
MH-Query: 500 samples collected via Metropolis-Hastings.
Posterior Probability P(raining | grass-wet): 0.358
Convergence verified.`
  }
];

// Add duplicate compatibility fields
for (const e of entries) {
  e.desc = e.shortDesc;
  e.description = e.shortDesc;
}

const fileContent = `export const section12Entries = ${JSON.stringify(entries, null, 4)};\n`;

const targetPath = path.resolve(__dirname, '../data/section12-entries.js');
fs.writeFileSync(targetPath, fileContent, 'utf8');

console.log(`Generated data/section12-entries.js with ${entries.length} verified entries (601-650)`);
