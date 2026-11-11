const fs = require('fs');
const path = require('path');

const entries = [
  {
    id: 701,
    name: "Ecto",
    slug: "ecto",
    cssClass: "ecto-lang",
    category: "database-orm",
    categoryLabel: "Elixir Database Wrapper & Query Engine",
    logo: "assets/logos/ecto.svg",
    shortDesc: "Elixir database wrapper providing composable queries, validation changesets, schema definitions, and migrations.",
    paradigm: "Functional / Relational / Query Builder",
    designedBy: "José Valim, Eric Meadows-Jönsson (Plataformatec)",
    firstAppeared: "2014",
    fileExtension: ".ex",
    primaryUse: "Data persistence and transactional validation for Phoenix framework web applications and distributed Elixir backends",
    syntaxSummary: "Ecto.Query macros (from, where, select), Ecto.Changeset casting/validation, and schema structs.",
    sampleCode: `defmodule Codeplay.Accounts do
  import Ecto.Query
  alias Codeplay.Repo
  alias Codeplay.Accounts.User

  def list_active_users do
    query = from u in User,
      where: u.active == true,
      order_by: [asc: u.inserted_at],
      select: {u.id, u.name, u.email}
    Repo.all(query)
  end
end`,
    explanation: "Ecto separates data mapping from database operations, using changesets to validate input before writing to PostgreSQL or MySQL.",
    expectedOutput: `[Ecto.Repo] Initializing PostgreSQL connection pool...
QUERY OK db=1.8ms decode=0.4ms
SELECT u0."id", u0."name", u0."email" FROM "users" AS u0 WHERE (u0."active" = TRUE)
Retrieved 3 active user records successfully.`
  },
  {
    id: 702,
    name: "Active Record",
    slug: "active-record",
    cssClass: "active-record-lang",
    category: "database-orm",
    categoryLabel: "Rails Object-Relational Mapping Engine",
    logo: "assets/logos/active-record.svg",
    shortDesc: "Ruby on Rails Object-Relational Mapping system connecting business objects directly to database tables via conventions.",
    paradigm: "Object-Relational Mapping / Convention over Configuration",
    designedBy: "David Heinemeier Hansson (DHH)",
    firstAppeared: "2004",
    fileExtension: ".rb",
    primaryUse: "Relational database modeling, query chaining, callbacks, and automated migrations in Ruby on Rails applications",
    syntaxSummary: "ActiveRecord::Base subclassing with associations (has_many, belongs_to), validations, and scope methods.",
    sampleCode: `class Course < ApplicationRecord
  has_many :lessons, dependent: :destroy
  validates :title, presence: true, length: { minimum: 3 }

  scope :published, -> { where(status: 'published') }
end

active_courses = Course.published.includes(:lessons).limit(5)
puts "Loaded active courses: #{active_courses.count}"`,
    explanation: "Active Record implements Martin Fowler's Active Record pattern, combining database row access and domain business logic in unified models.",
    expectedOutput: `Course Load (0.5ms)  SELECT "courses".* FROM "courses" WHERE "courses"."status" = 'published' LIMIT 5
Lesson Load (0.4ms)  SELECT "lessons".* FROM "lessons" WHERE "lessons"."course_id" IN (1, 2, 3)
Loaded active courses: 3`
  },
  {
    id: 703,
    name: "LINQ",
    slug: "linq",
    cssClass: "linq-lang",
    category: "query-languages",
    categoryLabel: "Language Integrated Query",
    logo: "assets/logos/linq.svg",
    shortDesc: "Microsoft declarative query syntax built natively into C# and VB.NET for querying collections, SQL databases, and XML.",
    paradigm: "Declarative / Functional / Integrated Query",
    designedBy: "Microsoft (Anders Hejlsberg et al.)",
    firstAppeared: "2007",
    fileExtension: ".cs",
    primaryUse: "Querying in-memory collections, Entity Framework Core relational mappings, and JSON/XML datasets in .NET applications",
    syntaxSummary: "Query expressions (from, where, select, group, orderby) and fluent method chains (.Where, .Select, .OrderBy).",
    sampleCode: `using System;
using System.Linq;
using System.Collections.Generic;

var languages = new List<string> { "C#", "F#", "TypeScript", "Python", "Rust" };

var filtered = from lang in languages
               where lang.Length > 2
               orderby lang ascending
               select lang.ToUpper();

Console.WriteLine("Filtered Languages: " + string.Join(", ", filtered));`,
    explanation: "LINQ transforms compile-time verified query syntax into expression trees that translate into optimized SQL or in-memory delegates.",
    expectedOutput: `Filtered Languages: PYTHON, RUST, TYPESCRIPT
LINQ expression tree compiled to optimized runtime IL delegate.`
  },
  {
    id: 704,
    name: "Entity SQL",
    slug: "entity-sql",
    cssClass: "entity-sql-lang",
    category: "query-languages",
    categoryLabel: "Storage-Independent Conceptual Query Language",
    logo: "assets/logos/entity-sql.svg",
    shortDesc: "Storage-independent SQL dialect designed for the ADO.NET Entity Framework to query conceptual Entity Data Models directly.",
    paradigm: "Declarative / Object-Relational Query",
    designedBy: "Microsoft Corporation",
    firstAppeared: "2008",
    fileExtension: ".esql",
    primaryUse: "Querying Entity Framework conceptual schemas, object services, and EntityCommand abstractions without backend SQL dialect lock-in",
    syntaxSummary: "SQL-like statements querying entity sets and complex types with navigational properties and type constructors.",
    sampleCode: `SELECT VALUE c
FROM SchoolEntities.Courses AS c
WHERE c.Credits >= 3
ORDER BY c.Title;`,
    explanation: "Entity SQL queries conceptual Entity Data Models (EDM) directly, generating dialect-specific SQL for SQL Server or Oracle automatically.",
    expectedOutput: `[EntityCommand] Compiling Entity SQL query against SchoolModel...
Translated to T-SQL: SELECT [c].[CourseID], [c].[Title], [c].[Credits] FROM [dbo].[Courses] AS [c] WHERE [c].[Credits] >= 3
Executed with 0 schema translation errors.`
  },
  {
    id: 705,
    name: "HQL",
    slug: "hql",
    cssClass: "hql-lang",
    category: "query-languages",
    categoryLabel: "Hibernate Query Language",
    logo: "assets/logos/hql.svg",
    shortDesc: "Object-oriented query language for the Hibernate ORM translating queries across persistent Java classes and properties.",
    paradigm: "Object-Relational / Declarative Query",
    designedBy: "Gavin King (Hibernate / Red Hat)",
    firstAppeared: "2001",
    fileExtension: ".hql",
    primaryUse: "Enterprise Java enterprise applications, Spring Data repositories, and relational database abstraction in Hibernate",
    syntaxSummary: "SELECT, FROM, WHERE clauses referencing Java class names and entity properties rather than physical table and column names.",
    sampleCode: `SELECT p.name, p.category.title
FROM Product p
WHERE p.price < 50.00 AND p.active = true
ORDER BY p.name ASC`,
    explanation: "HQL understands inheritance, polymorphism, and complex entity associations, compiling abstract object queries into target database SQL.",
    expectedOutput: `[Hibernate ORM v6.4] Compiling HQL query...
Translated SQL: select p1_0.name,c1_0.title from products p1_0 join categories c1_0 on c1_0.id=p1_0.category_id where p1_0.price < ? and p1_0.active=? order by p1_0.name
Query execution time: 3.4ms.`
  },
  {
    id: 706,
    name: "JPQL",
    slug: "jpql",
    cssClass: "jpql-lang",
    category: "query-languages",
    categoryLabel: "Java Persistence Query Language",
    logo: "assets/logos/jpql.svg",
    shortDesc: "Standardized query language for the Jakarta/Java Persistence API (JPA) querying entities in a portable, database-independent format.",
    paradigm: "Declarative / Object-Relational Query",
    designedBy: "Java Community Process (JCP JSR 220 / 317 / 338)",
    firstAppeared: "2006",
    fileExtension: ".jpql",
    primaryUse: "Enterprise Java EE and Jakarta EE enterprise persistence, Spring Boot JPA repositories, and EJB microservices",
    syntaxSummary: "Object queries operating on JPA @Entity models with join fetches, aggregate functions, and constructor expressions (NEW).",
    sampleCode: `SELECT NEW com.codeplay.dto.UserSummary(u.id, u.username, COUNT(o))
FROM User u LEFT JOIN u.orders o
GROUP BY u.id, u.username
HAVING COUNT(o) >= 1`,
    explanation: "JPQL serves as the vendor-neutral standard query language across Hibernate, EclipseLink, and OpenJPA implementations.",
    expectedOutput: `[Jakarta Persistence] Validating JPQL syntax against Entity Graph...
Transformed to native ANSI SQL with parameterized bindings.
Instantiating 14 UserSummary projection DTOs.`
  },
  {
    id: 707,
    name: "OQL",
    slug: "oql",
    cssClass: "oql-lang",
    category: "query-languages",
    categoryLabel: "Object Query Language Standard",
    logo: "assets/logos/oql.svg",
    shortDesc: "Standardized declarative query language developed by ODMG for querying object-oriented database management systems.",
    paradigm: "Declarative / Object-Oriented Query",
    designedBy: "Object Data Management Group (ODMG)",
    firstAppeared: "1993",
    fileExtension: ".oql",
    primaryUse: "Querying native object databases (ObjectStore, Versant, Objectivity), Java heap memory analyzers (MAT), and graph structures",
    syntaxSummary: "SELECT ... FROM ... WHERE with direct object path dereferencing (dept.manager.name) and method invocation.",
    sampleCode: `SELECT struct(name: e.name, department: e.worksIn.name)
FROM Employees e
WHERE e.salary > 80000 AND e.hasCertification("CloudArch")`,
    explanation: "OQL closely models SQL syntax while supporting complex object types, inheritance hierarchies, and direct traversal of object pointer graphs.",
    expectedOutput: `[ODMG OQL Engine] Evaluating path expressions on object store...
Traversed 1,250 persistent object instances.
Returned 18 composite structured records.`
  },
  {
    id: 708,
    name: "DMX",
    slug: "dmx",
    cssClass: "dmx-lang",
    category: "data-mining",
    categoryLabel: "Data Mining Extensions for SQL Server",
    logo: "assets/logos/dmx.svg",
    shortDesc: "Query language for creating, training, and predicting with machine learning and data mining models in Microsoft SQL Server Analysis Services.",
    paradigm: "Declarative / Predictive Analytics / Mining",
    designedBy: "Microsoft Corporation",
    firstAppeared: "2000",
    fileExtension: ".dmx",
    primaryUse: "Decision tree classification, market basket association analysis, clustering, and predictive forecasting in SSAS",
    syntaxSummary: "CREATE MINING MODEL, INSERT INTO for model training, and PREDICTION JOIN for scoring new transactions.",
    sampleCode: `SELECT
  t.CustomerKey,
  PredictProbability([Bike Buyer], 1) AS BuyerProb
FROM
  [Customer Cluster Model]
PREDICTION JOIN
  OPENQUERY([DataWarehouse], 'SELECT CustomerKey, Age, Income FROM Customers') AS t
ON
  [Customer Cluster Model].[Age] = t.Age`,
    explanation: "DMX treats predictive machine learning algorithms as database schema objects, using familiar tabular syntax for training and inferencing.",
    expectedOutput: `[SSAS DMX Processor] Evaluating PREDICTION JOIN against mined cluster...
Predicted buyer probabilities computed across 5,000 scored customer tuples.
Model precision: 88.4%.`
  },
  {
    id: 709,
    name: "MDX",
    slug: "mdx",
    cssClass: "mdx-lang",
    category: "olap-analytics",
    categoryLabel: "MultiDimensional eXpressions",
    logo: "assets/logos/mdx.svg",
    shortDesc: "Industry-standard multidimensional query language for querying OLAP cubes in Microsoft SSAS, Mondrian, and SAP BW.",
    paradigm: "Multidimensional / Declarative Analytics",
    designedBy: "Mosha Pasumansky (Microsoft)",
    firstAppeared: "1997",
    fileExtension: ".mdx",
    primaryUse: "Enterprise business intelligence reporting, financial rollups, multi-axis analytics, and slice-and-dice data exploration",
    syntaxSummary: "SELECT ON COLUMNS, ON ROWS FROM [Cube] WHERE (Slicer), using dimensions, hierarchies, levels, and tuples.",
    sampleCode: `SELECT
  {[Measures].[Sales Amount], [Measures].[Gross Margin]} ON COLUMNS,
  [Date].[Fiscal Year].[Fiscal Year].MEMBERS ON ROWS
FROM [Finance Cube]
WHERE ([Geography].[Country].[United States])`,
    explanation: "MDX treats data as multi-axis hypercubes, allowing financial analysts to compute year-to-date and cross-dimensional calculations efficiently.",
    expectedOutput: `[OLAP Cube Engine] Executing MDX on [Finance Cube]...
Axis 0 (Columns): 2 measures evaluated.
Axis 1 (Rows): 5 fiscal year members resolved.
Returned 10 intersecting metric cells in 12ms.`
  },
  {
    id: 710,
    name: "DAX",
    slug: "dax",
    cssClass: "dax-lang",
    category: "bi-analytics",
    categoryLabel: "Data Analysis Expressions",
    logo: "assets/logos/dax.svg",
    shortDesc: "Formula and query language powering Microsoft Power BI, Power Pivot, and SSAS Tabular relational data models.",
    paradigm: "Functional / Tabular / Analytical",
    designedBy: "Microsoft Corporation (Alberto Ferrari, Marco Russo contributors)",
    firstAppeared: "2009",
    fileExtension: ".dax",
    primaryUse: "Calculating dynamic KPIs, custom columns, time-intelligence comparisons, and financial analytics in Power BI dashboards",
    syntaxSummary: "CALCULATE, FILTER, SUMX, RELATED, and time-intelligence functions operating under filter and row contexts.",
    sampleCode: `Total Sales YTD =
CALCULATE(
    SUM(Sales[Revenue]),
    DATESYTD('Date'[Date]),
    Sales[Status] = "Completed"
)`,
    explanation: "DAX evaluates expressions through filter propagation across tabular relationships, computing calculations on millions of rows in memory.",
    expectedOutput: `[VertiPaq Engine] Computing DAX Measure 'Total Sales YTD'...
Filter context applied: Year-to-Date date window & Status='Completed'.
Calculated metric: $4,829,150.00 (Processed 1.2M rows in 8ms).`
  },
  {
    id: 711,
    name: "M Language",
    slug: "m-language",
    cssClass: "m-language-lang",
    category: "data-transformation",
    categoryLabel: "Power Query Formula Language",
    logo: "assets/logos/m-language.svg",
    shortDesc: "Functional, case-sensitive mashup language driving Microsoft Power Query in Excel and Power BI for ETL workflows.",
    paradigm: "Functional / Declarative / Data Mashup",
    designedBy: "Microsoft Corporation",
    firstAppeared: "2015",
    fileExtension: ".pq",
    primaryUse: "Data extraction, transformation, shaping, pivoting, cleaning, and schema normalization in Power BI and Excel",
    syntaxSummary: "let ... in expressions with step-by-step transformations, records [x = 1], lists {1, 2}, and tables.",
    sampleCode: `let
    Source = Csv.Document(File.Contents("sales_data.csv"), [Delimiter=",", Encoding=65001]),
    PromoteHeaders = Table.PromoteHeaders(Source, [PromoteAllScalars=true]),
    FilterActive = Table.SelectRows(PromoteHeaders, each [Active] = "TRUE"),
    ChangeTypes = Table.TransformColumnTypes(FilterActive, {{"Revenue", type number}, {"Date", type date}})
in
    ChangeTypes`,
    explanation: "M Language operates lazily, pushing transformations back to source SQL servers through query folding to maximize ingest throughput.",
    expectedOutput: `[Power Query Engine] Executing M transformation pipeline...
Query folding active: Remote pushdown to SQL endpoint.
Loaded 45,000 cleaned rows into data model.`
  },
  {
    id: 712,
    name: "Power Fx",
    slug: "power-fx",
    cssClass: "power-fx-lang",
    category: "low-code",
    categoryLabel: "Microsoft Low-Code Formula Language",
    logo: "assets/logos/power-fx.svg",
    shortDesc: "Open-source low-code formula language for the Microsoft Power Platform, designed with human-friendly Excel-like semantics.",
    paradigm: "Declarative / Functional / Reactive",
    designedBy: "Microsoft Corporation",
    firstAppeared: "2021",
    fileExtension: ".fx",
    primaryUse: "Canvas apps, model-driven logic, Microsoft Copilot Studio automation, and Microsoft Dataverse business rules",
    syntaxSummary: "Excel-inspired declarative formulas with reactive binding (If, Filter, LookUp, Patch, Navigate).",
    sampleCode: `// Power Fx Reactive Expression
Set(VarSelectedStatus, "Approved");
Filter(
    Customers,
    City = "Seattle" And CreditScore >= 700
);
Notify("Customer dataset filtered successfully", NotificationType.Success)`,
    explanation: "Power Fx brings full static typing, asynchronous operations, and imperative action execution to visual low-code app makers.",
    expectedOutput: `[Power Fx Interpreter] Evaluating formula AST...
Reactive binding updated: 42 records matched criteria.
Notification dispatched: Customer dataset filtered successfully.`
  },
  {
    id: 713,
    name: "Excel Formulas",
    slug: "excel-formulas",
    cssClass: "excel-formulas-lang",
    category: "spreadsheet",
    categoryLabel: "Worksheet Calculation & Dynamic Array Formulas",
    logo: "assets/logos/excel-formulas.svg",
    shortDesc: "Ubiquitous functional formula language used by hundreds of millions of analysts for numerical calculations and modeling.",
    paradigm: "Functional / Declarative / Reactive / Dynamic Arrays",
    designedBy: "Microsoft Corporation",
    firstAppeared: "1985",
    fileExtension: ".xlsx",
    primaryUse: "Financial modeling, data auditing, operational budgets, statistical calculations, and business dashboards",
    syntaxSummary: "Leading '=' with cell coordinate references (A1:C10), modern dynamic array functions (XLOOKUP, FILTER, LAMBDA, LET).",
    sampleCode: `=LET(
    RawScores, B2:B20,
    PassingScores, FILTER(RawScores, RawScores >= 70),
    AveragePass, AVERAGE(PassingScores),
    "Class Passing Average: " & ROUND(AveragePass, 1)
)`,
    explanation: "Excel Formulas form a Turing-complete reactive functional language with LAMBDA and dynamic array spill regions.",
    expectedOutput: `[Excel Calculation Engine] Recalculating dependency graph...
Formula evaluated in cell D2.
Value: "Class Passing Average: 84.6"`
  },
  {
    id: 714,
    name: "Google Apps Script",
    slug: "google-apps-script",
    cssClass: "google-apps-script-lang",
    category: "scripting-languages",
    categoryLabel: "Google Workspace Cloud Automation Language",
    logo: "assets/logos/google-apps-script.svg",
    shortDesc: "Cloud-based JavaScript execution platform integrating and automating Google Sheets, Docs, Gmail, Drive, and Forms.",
    paradigm: "Object-Oriented / Event-Driven / Cloud Automation",
    designedBy: "Mike Harm (Google)",
    firstAppeared: "2009",
    fileExtension: ".gs",
    primaryUse: "Workflow automation, automated emailing, custom Sheets formulas, webhooks, and Google Workspace add-ons",
    syntaxSummary: "Modern JavaScript (V8 runtime) with built-in Workspace APIs (SpreadsheetApp, GmailApp, DriveApp).",
    sampleCode: `function sendAutomatedReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getRange("A2:C10").getValues();
  const total = data.reduce((acc, row) => acc + Number(row[2]), 0);

  Logger.log("Computed total revenue: $" + total);
}`,
    explanation: "Google Apps Script executes on Google's cloud infrastructure, providing seamless OAuth access to Google services with zero server setup.",
    expectedOutput: `[Apps Script V8 Engine] Executing sendAutomatedReport()...
Spreadsheet API call: 9 rows retrieved from active sheet.
Computed total revenue: $142,500.00
Execution time: 0.62s.`
  },
  {
    id: 715,
    name: "Lotus Script",
    slug: "lotus-script",
    cssClass: "lotus-script-lang",
    category: "enterprise-scripting",
    categoryLabel: "IBM Lotus Notes Object Scripting Language",
    logo: "assets/logos/lotus-script.svg",
    shortDesc: "Object-oriented scripting language embedded in IBM/HCL Lotus Notes and Domino for enterprise document database automation.",
    paradigm: "Object-Oriented / Imperative / Event-Driven",
    designedBy: "Lotus Development Corporation / IBM / HCL",
    firstAppeared: "1995",
    fileExtension: ".lss",
    primaryUse: "Automating enterprise workflow agents, document validations, and replication in Lotus Domino enterprise deployments",
    syntaxSummary: "Visual Basic-like syntax (Dim, Sub, Function) with built-in NotesDocument, NotesDatabase, and NotesSession objects.",
    sampleCode: `Sub Initialize
    Dim session As New NotesSession
    Dim db As NotesDatabase
    Dim doc As NotesDocument
    
    Set db = session.CurrentDatabase
    Set doc = db.CreateDocument
    doc.Form = "ExpenseReport"
    doc.Subject = "CodePlay Enterprise Curriculum"
    Call doc.Save(True, False)
    Print "Document saved to Domino database successfully."
End Sub`,
    explanation: "LotusScript provides object-oriented access to Domino's rich document store, security ACLs, and automated backend mail routers.",
    expectedOutput: `[Domino Agent Manager] Agent 'Initialize' started on server DOMINO01.
Document created: UNID=852585AB0054321A
Document saved to Domino database successfully.
Agent completed with status 0.`
  },
  {
    id: 716,
    name: "Visual FoxPro",
    slug: "visual-foxpro",
    cssClass: "visual-foxpro-lang",
    category: "database-languages",
    categoryLabel: "Object-Oriented Relational DBMS Language",
    logo: "assets/logos/visual-foxpro.svg",
    shortDesc: "Microsoft object-oriented, data-centric programming language with a tightly coupled relational database engine.",
    paradigm: "Object-Oriented / Procedural / Data-Centric",
    designedBy: "Microsoft (Fox Software)",
    firstAppeared: "1995",
    fileExtension: ".prg",
    primaryUse: "High-speed desktop accounting software, inventory databases, rapid desktop forms, and legacy business ERP systems",
    syntaxSummary: "Native SQL statements (SELECT, INSERT) mixed seamlessly into imperative code, WITH/ENDWITH, and visual forms.",
    sampleCode: `* Visual FoxPro Data-Centric Routine
USE customers.dbf SHARED
SELECT cust_id, company, balance ;
  FROM customers ;
  WHERE balance > 1000 ;
  ORDER BY balance DESC ;
  INTO CURSOR curHighDebt

SELECT curHighDebt
BROWSE NORMAL TITLE "High Balance Accounts"`,
    explanation: "Visual FoxPro married high-performance Rushmore indexing technology with an object-oriented GUI builder and native SQL querying.",
    expectedOutput: `[Visual FoxPro Runtime] Rushmore optimization level: FULL.
Cursor 'curHighDebt' created with 84 records in 0.002s.
Browse table active.`
  },
  {
    id: 717,
    name: "FoxPro",
    slug: "foxpro",
    cssClass: "foxpro-lang",
    category: "database-languages",
    categoryLabel: "Fast dBASE-Compatible Database Engine",
    logo: "assets/logos/foxpro.svg",
    shortDesc: "Pioneering fast database engine and programming language developed by Fox Software featuring Rushmore query acceleration.",
    paradigm: "Procedural / Data-Centric",
    designedBy: "Fox Software (Dave Fulton, Richard Ney)",
    firstAppeared: "1989",
    fileExtension: ".prg",
    primaryUse: "DOS and early Windows business database applications, ledger accounting, and inventory tracking systems",
    syntaxSummary: "xBase syntax extensions with Rushmore query optimization, screen generators, and pop-up menu definition commands.",
    sampleCode: `CLEAR
USE INVENTORY INDEX inv_sku
SEEK "CP-1001"
IF FOUND()
    ? "Item Name: ", item_name
    ? "Units in Stock: ", qty_stock
ELSE
    ? "SKU Not Found."
ENDIF
CLOSE DATABASES`,
    explanation: "FoxPro introduced Rushmore technology using bitmap indexing, executing queries up to 100 times faster than competing dBASE engines.",
    expectedOutput: `FoxPro 2.6 for DOS
Index search completed in 1ms.
Item Name:  CodePlay Dev Kit
Units in Stock:  450`
  },
  {
    id: 718,
    name: "dBASE",
    slug: "dbase",
    cssClass: "dbase-lang",
    category: "database-languages",
    categoryLabel: "Pioneering Microcomputer Database Language",
    logo: "assets/logos/dbase.svg",
    shortDesc: "The original microcomputer database management system and programming language that defined the xBase standard in computing history.",
    paradigm: "Procedural / Data-Centric",
    designedBy: "C. Wayne Ratliff (Ashton-Tate)",
    firstAppeared: "1979",
    fileExtension: ".prg",
    primaryUse: "Foundation of PC-based relational databases, accounting systems, business directories, and administrative record management",
    syntaxSummary: "Interactive dot-prompt commands, structured programming (DO WHILE, SCAN, REPLACE), and .dbf file storage.",
    sampleCode: `USE CLIENTS
SET TALK OFF
DO WHILE .NOT. EOF()
    IF STATE = "CA"
        ? TRIM(FIRSTNAME) + " " + TRIM(LASTNAME) + " - " + CITY
    ENDIF
    SKIP
ENDDO
SET TALK ON`,
    explanation: "dBASE launched the desktop software revolution on CP/M and MS-DOS, establishing the .dbf file format that became an industry standard.",
    expectedOutput: `dBASE III PLUS Version 1.1
John Doe - San Francisco
Sarah Connor - Los Angeles
End of database file reached.`
  },
  {
    id: 719,
    name: "Clipper",
    slug: "clipper",
    cssClass: "clipper-lang",
    category: "database-languages",
    categoryLabel: "High-Performance 32-Bit dBASE Compiler",
    logo: "assets/logos/clipper.svg",
    shortDesc: "High-performance compiler for dBASE programs that transformed interpreted scripts into standalone, fast machine executables.",
    paradigm: "Procedural / Object-Oriented / Compiled",
    designedBy: "Nantucket Corporation (Larry Heimendinger et al.)",
    firstAppeared: "1985",
    fileExtension: ".prg",
    primaryUse: "Compiling enterprise accounting systems, point-of-sale software, and manufacturing ERP suites into native MS-DOS binaries",
    syntaxSummary: "dBASE superset with user-defined functions (UDFs), code blocks, C-language FFI interop, and preprocessor macros.",
    sampleCode: `#include "inkey.ch"

FUNCTION Main()
    LOCAL aData := { "HTML", "CSS", "JS", "Clipper" }
    CLEAR SCREEN
    @ 10, 20 SAY "CodePlay Clipper 5.3 System"
    AEVAL(aData, { |x, i| QOUT("Track " + STR(i, 2) + ": " + x) })
    RETURN NIL`,
    explanation: "Clipper added lexical scoping, code blocks, and native C linking to xBase, creating thousands of commercial business applications.",
    expectedOutput: `Clipper (R) 5.3 Compiler
Compiling MAIN.PRG to OBJ ... Linked with BLINKER.
CodePlay Clipper 5.3 System
Track  1: HTML
Track  2: CSS
Track  3: JS
Track  4: Clipper`
  },
  {
    id: 720,
    name: "Harbour",
    slug: "harbour",
    cssClass: "harbour-lang",
    category: "database-languages",
    categoryLabel: "Modern Multiplatform xBase/Clipper Compiler",
    logo: "assets/logos/harbour.svg",
    shortDesc: "Free, open-source multiplatform compiler for xBase and Clipper running on modern Linux, Windows, macOS, and mobile systems.",
    paradigm: "Multi-Paradigm / Compiled / xBase",
    designedBy: "Antonio Linares & The Harbour Project",
    firstAppeared: "1999",
    fileExtension: ".prg",
    primaryUse: "Modernizing legacy Clipper applications, cross-platform GUI database tools, and web-connected business services",
    syntaxSummary: "Full Clipper 5.3 backward compatibility, modern OOP classes (CLASS/ENDCLASS), and native 64-bit C transpilation.",
    sampleCode: `#include "simpleio.ch"

FUNCTION Main()
    LOCAL oCustomer := Customer():New("NASA-YUZAKI", 100)
    ? "Harbour 64-Bit Compiler Online"
    ? "Customer: " + oCustomer:cName
    RETURN NIL

CLASS Customer
    DATA cName
    DATA nID
    METHOD New( cName, nID ) CONSTRUCTOR
ENDCLASS`,
    explanation: "Harbour brings 1990s Clipper code into the 21st century by transpiling xBase code into clean C that compiles with GCC or MSVC.",
    expectedOutput: `hbmk2 main.prg -o main
Compiling 'main.prg'... Generated C code, compiling with GCC.
Harbour 64-Bit Compiler Online
Customer: NASA-YUZAKI`
  },
  {
    id: 721,
    name: "xBase",
    slug: "xbase",
    cssClass: "xbase-lang",
    category: "database-languages",
    categoryLabel: "Universal Desktop Database Language Family",
    logo: "assets/logos/xbase.svg",
    shortDesc: "The universal language family derived from dBASE, encompassing FoxPro, Clipper, FlagShip, and Harbour database environments.",
    paradigm: "Procedural / Relational / Data-Centric",
    designedBy: "Standardization Community (derived from Ratliff dBASE)",
    firstAppeared: "1985",
    fileExtension: ".prg",
    primaryUse: "Cross-platform historical database specifications, financial ledger engines, and table-oriented record operations",
    syntaxSummary: "Standardized record-pointer commands (USE, APPEND, REPLACE, DELETE, PACK, SEEK, BROWSE).",
    sampleCode: `USE courses
APPEND BLANK
REPLACE id WITH 721, ;
        name WITH "xBase Standard", ;
        category WITH "Database"
LIST FOR category = "Database"`,
    explanation: "xBase refers to the shared language dialect, file specifications (.dbf, .ntx, .cdx), and programming conventions of desktop database systems.",
    expectedOutput: `[xBase Engine] Appended record #721.
Record#  ID   NAME            CATEGORY
    721  721  xBase Standard  Database`
  },
  {
    id: 722,
    name: "Progress 4GL",
    slug: "progress-4gl",
    cssClass: "progress-4gl-lang",
    category: "enterprise-4gl",
    categoryLabel: "Rapid Application Development 4GL",
    logo: "assets/logos/progress-4gl.svg",
    shortDesc: "Fourth-generation high-level language combining database access, business rules, and user interface controls in single statements.",
    paradigm: "4GL / Procedural / Transactional",
    designedBy: "Progress Software (Mary Szekely et al.)",
    firstAppeared: "1984",
    fileExtension: ".p",
    primaryUse: "Enterprise resource planning (ERP) systems, healthcare patient records, banking backends, and manufacturing pipelines",
    syntaxSummary: "English-like transaction blocks (FOR EACH, FIND FIRST, ASSIGN) with automatic transaction scoping and record locking.",
    sampleCode: `FOR EACH Customer WHERE Customer.CreditLimit > 50000 NO-LOCK
    BREAK BY Customer.State:
    
    DISPLAY Customer.CustNum Customer.Name Customer.Balance.
END.`,
    explanation: "Progress 4GL eliminated hundreds of lines of boilerplate code by handling database record buffers and pessimistic locks implicitly.",
    expectedOutput: `[Progress OpenEdge Database] Executing query block...
CustNum  Name                     Balance
-------  -----------------------  -------
  1001   Acme Industrial Corp     $12,450.00
  1042   Apex Global Logistics    $34,120.00`
  },
  {
    id: 723,
    name: "OpenEdge ABL",
    slug: "openedge-abl",
    cssClass: "openedge-abl-lang",
    category: "enterprise-4gl",
    categoryLabel: "Advanced Business Language",
    logo: "assets/logos/openedge-abl.svg",
    shortDesc: "The modern object-oriented evolution of Progress 4GL providing enterprise REST APIs, web services, and business logic.",
    paradigm: "Object-Oriented / 4GL / Business Logic",
    designedBy: "Progress Software Corporation",
    firstAppeared: "2006",
    fileExtension: ".cls",
    primaryUse: "Cloud-connected ERP platforms (QAD, Epicor), supply chain automation, and high-throughput transactional enterprise systems",
    syntaxSummary: "CLASS, METHOD, INTERFACE with built-in ProDataSets, strong typing, and backward compatibility with procedural 4GL.",
    sampleCode: `CLASS Business.CustomerService:
    METHOD PUBLIC VOID ProcessOrder( INPUT ipCustId AS INTEGER ):
        FIND FIRST Customer WHERE Customer.CustNum = ipCustId NO-LOCK NO-ERROR.
        IF AVAILABLE Customer THEN
            MESSAGE "Processing order for: " + Customer.Name VIEW-AS ALERT-BOX.
    END METHOD.
END CLASS.`,
    explanation: "OpenEdge ABL combines object-oriented design patterns with Progress's rock-solid multi-tenant database engine.",
    expectedOutput: `[OpenEdge PAS] Executing CustomerService:ProcessOrder()...
Database record locked in shared mode.
Processing order for: Acme Industrial Corp`
  },
  {
    id: 724,
    name: "Informix 4GL",
    slug: "informix-4gl",
    cssClass: "informix-4gl-lang",
    category: "enterprise-4gl",
    categoryLabel: "Relational Database 4GL System",
    logo: "assets/logos/informix-4gl.svg",
    shortDesc: "Comprehensive database programming language by Informix (IBM) designed for writing robust transactional terminal screens and reports.",
    paradigm: "4GL / Procedural / Database-Centric",
    designedBy: "Informix Software (IBM)",
    firstAppeared: "1986",
    fileExtension: ".4gl",
    primaryUse: "Enterprise database applications in telecommunications, retail banking, government agencies, and airline reservation systems",
    syntaxSummary: "DATABASE statement, DECLARE cursor, INPUT BY NAME for forms, and REPORT/OUTPUT blocks for formatted printouts.",
    sampleCode: `DATABASE stores_demo

MAIN
    DEFINE v_name CHAR(30)
    SELECT customer_name INTO v_name FROM customer WHERE customer_num = 101
    DISPLAY "Customer: ", v_name
END MAIN`,
    explanation: "Informix 4GL tightly coupled screen management, SQL queries, and report generation into a single procedural language.",
    expectedOutput: `[Informix 4GL Compiler c4gl] Compiled main.4gl to C executable.
Connected to database 'stores_demo'.
Customer: PlayCode Enterprise User`
  },
  {
    id: 725,
    name: "PowerBuilder",
    slug: "powerbuilder",
    cssClass: "powerbuilder-lang",
    category: "client-server",
    categoryLabel: "Enterprise Client/Server Development Environment",
    logo: "assets/logos/powerbuilder.svg",
    shortDesc: "Legendary visual client/server rapid application development platform featuring the revolutionary DataWindow data presentation technology.",
    paradigm: "Event-Driven / Object-Oriented / 4GL",
    designedBy: "Powersoft / Sybase / SAP / Appeon",
    firstAppeared: "1991",
    fileExtension: ".pbl",
    primaryUse: "Mission-critical financial trading desks, government administrative portals, hospital record management, and ERP systems",
    syntaxSummary: "Visual DataWindow controls coupled with PowerScript event handlers, visual window painters, and multi-DBMS connectivity.",
    sampleCode: `// PowerBuilder Window Event: clicked
dw_customer.SetTransObject(SQLCA)
dw_customer.Retrieve()

IF dw_customer.RowCount() > 0 THEN
    MessageBox("Status", "Customer records retrieved successfully.")
END IF`,
    explanation: "PowerBuilder revolutionized 1990s enterprise IT with its DataWindow, which handled SQL generation, sorting, and user updates with zero manual code.",
    expectedOutput: `[PowerBuilder Application] Connected to Sybase Adaptive Server Enterprise.
dw_customer DataWindow populated with 250 rows.
Status: Customer records retrieved successfully.`
  },
  {
    id: 726,
    name: "PowerScript",
    slug: "powerscript",
    cssClass: "powerscript-lang",
    category: "client-server",
    categoryLabel: "Object-Oriented Event-Driven Language",
    logo: "assets/logos/powerscript.svg",
    shortDesc: "The underlying object-oriented programming language of PowerBuilder executing business logic in response to UI and database events.",
    paradigm: "Object-Oriented / Event-Driven / Procedural",
    designedBy: "Powersoft Corporation",
    firstAppeared: "1991",
    fileExtension: ".srw",
    primaryUse: "Writing business validation rules, DataWindow scripts, window navigations, and transaction commits in PowerBuilder",
    syntaxSummary: "Dot notation for object methods, embedded SQL (CONNECT, COMMIT, ROLLBACK), and event-driven function signatures.",
    sampleCode: `// PowerScript Function: of_calculate_tax
Decimal{2} ld_subtotal, ld_tax, ld_total
ld_subtotal = dw_order.GetItemDecimal(1, "subtotal")
ld_tax = ld_subtotal * 0.0825
ld_total = ld_subtotal + ld_tax
dw_order.SetItem(1, "total", ld_total)
Return ld_total`,
    explanation: "PowerScript blends standard procedural structures with native SQL transactions and event-driven component architectures.",
    expectedOutput: `[PowerScript Engine] Event executed: of_calculate_tax
Subtotal: $1,000.00 | Computed Total with Tax: $1,082.50
Transaction committed successfully.`
  },
  {
    id: 727,
    name: "Gupta SQLWindows",
    slug: "gupta-sqlwindows",
    cssClass: "gupta-sqlwindows-lang",
    category: "client-server",
    categoryLabel: "First Graphical Client/Server Environment",
    logo: "assets/logos/gupta-sqlwindows.svg",
    shortDesc: "Pioneering graphical client/server development tool creating PC frontends connecting to SQL databases via SQLBase.",
    paradigm: "Event-Driven / 4GL / Outline-Based",
    designedBy: "Gupta Technologies (Umang Gupta, Bruce Scott)",
    firstAppeared: "1988",
    fileExtension: ".app",
    primaryUse: "First generation Windows client/server database applications, corporate reporting, and SQLBase network frontends",
    syntaxSummary: "Hierarchical outline editor (System Outline Language) with Message Actions, Windows message handlers, and SQL connectivity.",
    sampleCode: `Window: frmCustomer
  Message Actions
    On SAM_Create
      Call SalCenterWindow( hWndForm )
      Call SqlConnect( hSql )
      Call SqlPrepareAndExecute( hSql, 'SELECT * FROM Customers INTO :sName' )`,
    explanation: "Gupta SQLWindows created the commercial market for client/server database programming on Microsoft Windows 2.x and 3.x.",
    expectedOutput: `[Gupta SQLWindows Runtime] Initializing window frmCustomer...
Connected to Gupta SQLBase database server.
Cursor initialized: 120 customer rows fetched.`
  },
  {
    id: 728,
    name: "Centura",
    slug: "centura",
    cssClass: "centura-lang",
    category: "client-server",
    categoryLabel: "Object-Oriented Client/Server Development",
    logo: "assets/logos/centura.svg",
    shortDesc: "The 32-bit object-oriented successor to Gupta SQLWindows, branded as Centura Team Developer for enterprise applications.",
    paradigm: "Object-Oriented / Client-Server",
    designedBy: "Centura Software (Gupta Technologies)",
    firstAppeared: "1996",
    fileExtension: ".app",
    primaryUse: "Enterprise 32-bit client/server desktop applications connecting to Oracle, Sybase, Informix, and SQL Server",
    syntaxSummary: "Strongly-typed object hierarchies, Visual Toolchest components, QuickObjects, and Sal (SQLWindows Application Language) functions.",
    sampleCode: `Function: ProcessTransactions
  Description: Process daily financial ledger batches
  Actions
    Call SalWaitCursor( TRUE )
    Call SqlImmediate( 'UPDATE Accounts SET Status = "Verified"' )
    Call SalWaitCursor( FALSE )
    Return TRUE`,
    explanation: "Centura Team Developer expanded SQLWindows into full 32-bit Windows architecture with COM component integration and web deployment.",
    expectedOutput: `[Centura Team Developer 2000] Compiling application...
Generated 32-bit executable.
Executed ProcessTransactions: Status='Verified'.`
  },
  {
    id: 729,
    name: "Magic",
    slug: "magic",
    cssClass: "magic-lang",
    category: "low-code-4gl",
    categoryLabel: "Metadata-Driven Rapid Application Development",
    logo: "assets/logos/magic.svg",
    shortDesc: "Pioneering metadata-driven, code-free development platform where business logic and data access are defined through structured tables.",
    paradigm: "Table-Driven / Declarative / Low-Code",
    designedBy: "Magic Software Enterprises (Mishi & David Assia)",
    firstAppeared: "1983",
    fileExtension: ".xml",
    primaryUse: "ERP software suites, multi-tenant banking applications, and legacy business automation without writing raw source code",
    syntaxSummary: "Task definition tables, Data Views, Operations (Select, Update, Block, Call Task), and automatic transaction engines.",
    sampleCode: `Task: CalculateInvoiceTotal
Data View:
  1: Virtual: v_Total (Numeric 10.2)
  2: Real: InvLines.Quantity
  3: Real: InvLines.UnitPrice
Operations:
  1: Evaluate: v_Total = v_Total + (InvLines.Quantity * InvLines.UnitPrice)`,
    explanation: "Magic Software replaced traditional lines of code with matrix-based specification tables, prefiguring modern low-code development.",
    expectedOutput: `[Magic xpa Application Server] Executing task 'CalculateInvoiceTotal'...
Metadata evaluation completed across 12 line items.
Computed invoice balance: $2,450.00`
  },
  {
    id: 730,
    name: "Uniface",
    slug: "uniface",
    cssClass: "uniface-lang",
    category: "enterprise-4gl",
    categoryLabel: "Model-Driven Low-Code Enterprise Platform",
    logo: "assets/logos/uniface.svg",
    shortDesc: "Model-driven enterprise rapid application platform developing mission-critical business software with database and OS portability.",
    paradigm: "Model-Driven / 4GL / Multi-Tier",
    designedBy: "Uniface B.V. (Rocket Software)",
    firstAppeared: "1984",
    fileExtension: ".trx",
    primaryUse: "Large-scale government registries, banking transactions, insurance policy engines, and multi-database enterprise applications",
    syntaxSummary: "Uniface ProcScript language embedded into business models with triggers (exec, read, write) and entity collections.",
    sampleCode: `; Uniface ProcScript trigger: write
retrieve/e "CUSTOMER"
if ($status < 0)
  message/error "Failed to retrieve customer entity."
else
  store/e "CUSTOMER"
  commit
endif`,
    explanation: "Uniface models applications at a conceptual business level, allowing identical code to run across mainframes, Unix, Windows, and browsers.",
    expectedOutput: `[Uniface Runtime v10.4] Connected to Oracle DBMS driver.
Retrieved entity 'CUSTOMER' via primary key.
Transaction committed to relational database.`
  },
  {
    id: 731,
    name: "Natural",
    slug: "natural",
    cssClass: "natural-lang",
    category: "mainframe-4gl",
    categoryLabel: "Software AG Enterprise Mainframe 4GL",
    logo: "assets/logos/natural.svg",
    shortDesc: "Fourth-generation programming language by Software AG running mission-critical transactional applications on IBM mainframes.",
    paradigm: "4GL / Procedural / Transactional",
    designedBy: "Software AG",
    firstAppeared: "1979",
    fileExtension: ".nsp",
    primaryUse: "Core banking platforms, government tax systems, airline flight operations, and Adabas database processing on z/OS",
    syntaxSummary: "READ, FIND, INPUT, DEFINE DATA, WRITE, and END statements optimized for high-volume batch and CICS transaction processing.",
    sampleCode: `DEFINE DATA LOCAL
1 #EMP-VIEW VIEW OF EMPLOYEES
  2 NAME
  2 SALARY
END-DEFINE
FIND #EMP-VIEW WITH CITY = 'DARMSTADT'
  DISPLAY NAME SALARY
END-FIND
END`,
    explanation: "Natural delivers extreme transaction throughput on IBM z/OS mainframes and Unix servers, natively integrated with Software AG's Adabas.",
    expectedOutput: `[Natural 9.2 Execution Monitor] Executing program EMP-VIEW...
NAME                            SALARY
------------------------------  ----------
MUELLER, HANS                   72,000.00
SCHMIDT, ANNA                   85,500.00`
  },
  {
    id: 732,
    name: "Adabas",
    slug: "adabas",
    cssClass: "adabas-lang",
    category: "database-languages",
    categoryLabel: "High-Performance Transactional Database Engine",
    logo: "assets/logos/adabas.svg",
    shortDesc: "Adaptable Database System developed by Software AG providing ultra-high performance non-relational inverted list database operations.",
    paradigm: "Inverted List / Transactional / Mainframe",
    designedBy: "Peter Schnell (Software AG)",
    firstAppeared: "1971",
    fileExtension: ".fdt",
    primaryUse: "Large-scale financial transaction processing, airline passenger reservations, and high-frequency government registry queries",
    syntaxSummary: "Direct Call Interface (Control Blocks, Format Buffers, Record Buffers, Search Buffers) and Natural 4GL integration.",
    sampleCode: `* Adabas Direct Call Interface (Command: L3 - Read by ISN)
COMMAND_CODE: 'L3'
FILE_NUMBER:  001
RECORD_BUFFER: 'SMITH, JOHN, DEPT=502'
SEARCH_CRITERIA: 'ISN=000452'`,
    explanation: "Adabas uses inverted lists to achieve sub-millisecond retrieval of records from databases containing billions of transactions on mainframes.",
    expectedOutput: `[Adabas v8.5 Database Kernel] Command executed: L3
Response code: 0 (Normal completion).
Retrieved ISN 000452 in 0.12 milliseconds.`
  },
  {
    id: 733,
    name: "MUMPS Caché",
    slug: "mumps-cache",
    cssClass: "mumps-cache-lang",
    category: "database-languages",
    categoryLabel: "Multidimensional Healthcare Database Engine",
    logo: "assets/logos/mumps-cache.svg",
    shortDesc: "High-performance multidimensional hierarchical database engine developed by InterSystems powering electronic health records globally.",
    paradigm: "Hierarchical / Multi-Value / Multidimensional",
    designedBy: "InterSystems Corporation (Terry Ragon)",
    firstAppeared: "1997",
    fileExtension: ".m",
    primaryUse: "Hospital healthcare systems (Epic Systems, VA VistA), real-time financial order matching, and high-throughput transaction processing",
    syntaxSummary: "Direct global array access (^Patient(id, 'name')), single-character commands (S, K, W, H, Q), and multi-value nodes.",
    sampleCode: `Set ^Patient(1001,"Name")="Jane Doe"
Set ^Patient(1001,"DOB")="1985-04-12"
Set ^Patient(1001,"Vitals","BP")="120/80"

Write "Patient Name: ",^Patient(1001,"Name"),!
Write "Blood Pressure: ",^Patient(1001,"Vitals","BP"),!`,
    explanation: "InterSystems Caché persists variables directly to disk as sparse B-tree globals without requiring a separate object-relational mapping layer.",
    expectedOutput: `[InterSystems Caché Terminal]
Patient Name: Jane Doe
Blood Pressure: 120/80
Global ^Patient node serialized directly to persistent storage.`
  },
  {
    id: 734,
    name: "ObjectScript",
    slug: "objectscript",
    cssClass: "objectscript-lang",
    category: "database-languages",
    categoryLabel: "InterSystems Object-Oriented Database Language",
    logo: "assets/logos/objectscript.svg",
    shortDesc: "Object-oriented, multi-model programming language of InterSystems IRIS and Caché marrying relational, document, and multidimensional data.",
    paradigm: "Object-Oriented / Multi-Model / Systems",
    designedBy: "InterSystems Corporation",
    firstAppeared: "1997",
    fileExtension: ".cls",
    primaryUse: "InterSystems IRIS enterprise healthcare platforms, hospital data interoperability, and high-volume financial transaction routing",
    syntaxSummary: "Class definitions (Class ... Extends %Persistent), Method, Property, SQL integration (#sql), and global references.",
    sampleCode: `Class Codeplay.Data.Record Extends %Persistent
{
    Property Title As %String;
    Property Score As %Integer;

    ClassMethod DisplayTop() As %Status
    {
        Write "Top InterSystems IRIS Record Loaded",!
        Quit $$$OK
    }
}`,
    explanation: "ObjectScript enables developers to manipulate identical database records simultaneously as relational tables, JSON documents, or native globals.",
    expectedOutput: `USER> Do ##class(Codeplay.Data.Record).DisplayTop()
Top InterSystems IRIS Record Loaded
Status: 1 (Success)`
  },
  {
    id: 735,
    name: "Pick BASIC",
    slug: "pick-basic",
    cssClass: "pick-basic-lang",
    category: "multivalue-languages",
    categoryLabel: "Multi-Value Database BASIC Dialect",
    logo: "assets/logos/pick-basic.svg",
    shortDesc: "Business programming language designed for the Pick operating system and multi-value databases using dynamic arrays.",
    paradigm: "Multi-Value / Procedural / Database-Centric",
    designedBy: "Dick Pick (Pick Systems)",
    firstAppeared: "1965",
    fileExtension: ".b",
    primaryUse: "Automotive inventory systems, wholesale distribution software, supply chain tracking, and MultiValue ERP applications",
    syntaxSummary: "Dynamic array extraction (<attr, val, subval>), READ/WRITE to files, dynamic strings, and procedural flow control.",
    sampleCode: `OPEN 'INVENTORY' TO F.INV ELSE STOP "Cannot open INVENTORY file"
READ ITEM.REC FROM F.INV, "PART-100" ELSE ITEM.REC = ""
QTY = ITEM.REC<4>
PRICE = ITEM.REC<5>
TOTAL = QTY * PRICE
PRINT "Part 100 Inventory Value: $" : TOTAL`,
    explanation: "Pick BASIC natively operates on MultiValue dynamic arrays separated by system delimiters (Item, Attribute, Value, Subvalue marks).",
    expectedOutput: `[Pick D3 / UniVerse Engine]
Opened file 'INVENTORY' successfully.
Part 100 Inventory Value: $4,500.00`
  },
  {
    id: 736,
    name: "UniBasic",
    slug: "unibasic",
    cssClass: "unibasic-lang",
    category: "multivalue-languages",
    categoryLabel: "Rocket UniVerse / UniData Business Language",
    logo: "assets/logos/unibasic.svg",
    shortDesc: "Advanced MultiValue BASIC programming language powering Rocket UniVerse and UniData extended relational database platforms.",
    paradigm: "Multi-Value / Procedural / Extended Relational",
    designedBy: "Rocket Software (Vmark / Ardent)",
    firstAppeared: "1988",
    fileExtension: ".uv",
    primaryUse: "Supply chain management, credit union banking, point-of-sale ERP networks, and MultiValue application modernizations",
    syntaxSummary: "Multi-value dynamic arrays, embedded SQL, nested transaction support (TRANSACTION START / COMMIT), and socket communication.",
    sampleCode: `PROGRAM CalcBalance
    OPEN 'ACCOUNTS' TO F.ACC ELSE ABORT 201, 'ACCOUNTS'
    SELECT F.ACC TO ID.LIST
    LOOP WHILE READNEXT ID FROM ID.LIST DO
        READV BAL FROM F.ACC, ID, 3 ELSE BAL = 0
        PRINT "Account: " : ID : " Balance: $" : BAL
    REPEAT
END`,
    explanation: "UniBasic compiles to bytecode executed inside the UniVerse database engine, delivering rapid data manipulation on non-normalized structures.",
    expectedOutput: `[Rocket UniVerse v11.3] Executing CalcBalance...
Account: ACC-101 Balance: $1,250.00
Account: ACC-102 Balance: $8,400.00
Completed processing 2 accounts.`
  },
  {
    id: 737,
    name: "Business Basic",
    slug: "business-basic",
    cssClass: "business-basic-lang",
    category: "business-languages",
    categoryLabel: "Commercial Business Application BASIC",
    logo: "assets/logos/business-basic.svg",
    shortDesc: "Specialized family of BASIC dialects developed for commercial business computing, inventory accounting, and multi-user minicomputers.",
    paradigm: "Procedural / Business-Oriented",
    designedBy: "Basic FOUR, MAI, Thoroughbred, BASIS (BBx)",
    firstAppeared: "1970",
    fileExtension: ".bbx",
    primaryUse: "Multi-terminal commercial accounting systems, wholesale distribution management, and general ledger operations",
    syntaxSummary: "Fixed decimal arithmetic (no floating-point rounding errors), indexed file access (KEYED/DIRECT), and terminal I/O formatting.",
    sampleCode: `0010 OPEN (1)"CUSTOMERS"
0020 READ (1,KEY="C100")CUST_ID$,NAME$,BALANCE
0030 PRINT "Customer ID: ",CUST_ID$
0040 PRINT "Name: ",NAME$
0050 PRINT "Current Balance: $",BALANCE
0060 CLOSE (1)
0070 END`,
    explanation: "Business Basic solved floating point inaccuracies by implementing precise BCD fixed-point math directly in the runtime.",
    expectedOutput: `[BBx Business Basic Runtime]
Customer ID: C100
Name: CodePlay Commerce Corp
Current Balance: $12,350.50`
  },
  {
    id: 738,
    name: "DIBOL",
    slug: "dibol",
    cssClass: "dibol-lang",
    category: "business-languages",
    categoryLabel: "Digital Business Oriented Language",
    logo: "assets/logos/dibol.svg",
    shortDesc: "Digital Equipment Corporation's high-level business programming language designed for writing commercial software on PDP and VAX systems.",
    paradigm: "Procedural / Business-Oriented",
    designedBy: "Digital Equipment Corporation (DEC)",
    firstAppeared: "1970",
    fileExtension: ".dbl",
    primaryUse: "Enterprise business accounting, billing suites, and hospital patient management on DEC VAX/VMS and Synergy/DE systems",
    syntaxSummary: "RECORD data division, PROCEDURE division, XCALL subroutine invocations, and formatted terminal I/O (WRITES, READS).",
    sampleCode: `RECORD CUST_REC
    ID      ,D5
    NAME    ,A25
    BALANCE ,D8.2

PROCEDURE
    OPEN(1,I,"CUSTOMER.DAT")
    READS(1,CUST_REC)
    WRITES(15,"Loaded Customer: " + NAME)
    CLOSE 1
    STOP`,
    explanation: "DIBOL provided structured data divisions similar to COBOL with a concise syntax optimized for DEC minicomputer environments.",
    expectedOutput: `[Synergy DBR DIBOL Runtime]
Loaded Customer: ACME TRADING COMPANY
Program terminated normally.`
  },
  {
    id: 739,
    name: "DataFlex",
    slug: "dataflex",
    cssClass: "dataflex-lang",
    category: "rapid-application-development",
    categoryLabel: "Object-Oriented Database Application Platform",
    logo: "assets/logos/dataflex.svg",
    shortDesc: "Rapid application development language and database framework by Data Access Corporation for developing Windows and web business apps.",
    paradigm: "Object-Oriented / 4GL / Relational",
    designedBy: "Data Access Worldwide (Chip Casanave et al.)",
    firstAppeared: "1982",
    fileExtension: ".pkg",
    primaryUse: "Commercial ERP applications, business order processing, multi-user accounting databases, and cloud web applications",
    syntaxSummary: "Data Dictionary classes for business rules, Object-oriented visual controls, Clear/Find/Save database commands.",
    sampleCode: `Object oCustomer_DD is a Customer_DataDictionary
End_Object

Procedure OnSaveCustomer
    Send Request_Assign of oCustomer_DD
    Set Field_Changed_Value of oCustomer_DD Field Customer.Name to "NASA-YUZAKI"
    Send Request_Save of oCustomer_DD
    Showln "Customer saved successfully through Data Dictionary."
End_Procedure`,
    explanation: "DataFlex's Data Dictionary architecture encapsulates business validation rules and referential integrity directly at the model layer.",
    expectedOutput: `[DataFlex WebApp Server] Executing OnSaveCustomer...
Data Dictionary validation passed: Required fields populated.
Customer saved successfully through Data Dictionary.`
  },
  {
    id: 740,
    name: "Clarion",
    slug: "clarion",
    cssClass: "clarion-lang",
    category: "rapid-application-development",
    categoryLabel: "Template-Driven 4GL Database System",
    logo: "assets/logos/clarion.svg",
    shortDesc: "Fourth-generation rapid database development environment featuring template-driven code generation and fast desktop applications.",
    paradigm: "Template-Driven / Object-Oriented / 4GL",
    designedBy: "Bruce Barrington (Clarion Software / SoftVelocity)",
    firstAppeared: "1986",
    fileExtension: ".clw",
    primaryUse: "Developing desktop database applications, medical records management, retail invoicing, and commercial billing software",
    syntaxSummary: "PROGRAM, MAP, WINDOW structures, template-generated browse procedures, and TopSpeed database drivers.",
    sampleCode: `  PROGRAM
  MAP
  END

Customer  FILE,DRIVER('TOPSPEED'),NAME('Customer.tps'),PRE(CUS)
IDKey       KEY(CUS:ID),NOCASE,PRIMARY
Record      RECORD,PRE()
ID            LONG
Name          STRING(30)
            END
          END

  CODE
  OPEN(Customer)
  CUS:ID = 740
  GET(Customer, CUS:IDKey)
  MESSAGE('Customer: ' & CUS:Name, 'Clarion 4GL System')
  CLOSE(Customer)`,
    explanation: "Clarion's Application Generator writes structured 4GL code from high-level visual templates, generating compiled Win32 executables.",
    expectedOutput: `[Clarion Application Generator] Compiled CLW to native Win32.
TopSpeed Database (TPS) driver opened 'Customer.tps'.
Customer: CodePlay Enterprise`
  },
  {
    id: 741,
    name: "PL/pgSQL",
    slug: "plpgsql",
    cssClass: "plpgsql-lang",
    category: "procedural-sql",
    categoryLabel: "PostgreSQL Procedural Language",
    logo: "assets/logos/plpgsql.svg",
    shortDesc: "Loadable procedural programming language for PostgreSQL databases supporting control structures, loops, variables, and triggers.",
    paradigm: "Procedural SQL / Server-Side",
    designedBy: "Jan Wieck (PostgreSQL Global Development Group)",
    firstAppeared: "1998",
    fileExtension: ".sql",
    primaryUse: "Complex database triggers, data auditing, financial reconciliations, and server-side stored procedure execution in PostgreSQL",
    syntaxSummary: "DO/CREATE FUNCTION $$ DECLARE ... BEGIN ... EXCEPTION ... END; $$ LANGUAGE plpgsql; with RETURN QUERY and cursors.",
    sampleCode: `CREATE OR REPLACE FUNCTION audit_user_login(p_user_id INT)
RETURNS VOID AS $$
BEGIN
    INSERT INTO user_audit_log (user_id, login_time)
    VALUES (p_user_id, CURRENT_TIMESTAMP);
    
    UPDATE users SET last_login = CURRENT_TIMESTAMP
    WHERE id = p_user_id;
END;
$$ LANGUAGE plpgsql;`,
    explanation: "PL/pgSQL executes directly inside the PostgreSQL backend engine, eliminating client-server network roundtrips for multi-step transactions.",
    expectedOutput: `CREATE FUNCTION
SELECT audit_user_login(101);
Audit log inserted and user table updated in a single atomic server-side transaction.`
  },
  {
    id: 742,
    name: "MySQL Stored Procedures",
    slug: "mysql-stored-procedures",
    cssClass: "mysql-stored-procedures-lang",
    category: "procedural-sql",
    categoryLabel: "MySQL Procedural Routine Language",
    logo: "assets/logos/mysql-stored-procedures.svg",
    shortDesc: "Procedural SQL extensions in MySQL and MariaDB enabling server-side routines, triggers, custom functions, and scheduled events.",
    paradigm: "Procedural SQL / Transactional",
    designedBy: "MySQL AB / Oracle Corporation",
    firstAppeared: "2005",
    fileExtension: ".sql",
    primaryUse: "Encapsulating database business logic, automated batch updates, and enforcing database security rules in MySQL backends",
    syntaxSummary: "DELIMITER // CREATE PROCEDURE ... BEGIN DECLARE ... IF/WHILE ... HANDLER ... END // DELIMITER ; with IN/OUT parameters.",
    sampleCode: `DELIMITER //

CREATE PROCEDURE GetActiveLanguageCount(OUT total_count INT)
BEGIN
    SELECT COUNT(*) INTO total_count
    FROM programming_languages
    WHERE status = 'Active';
END //

DELIMITER ;

CALL GetActiveLanguageCount(@active_count);
SELECT @active_count AS TotalActive;`,
    explanation: "MySQL stored procedures precompile SQL execution plans inside the database engine, reducing parsing overhead and securing data access.",
    expectedOutput: `Query OK, 0 rows affected (0.01 sec)
CALL GetActiveLanguageCount(@active_count);
+-------------+
| TotalActive |
+-------------+
|         750 |
+-------------+`
  },
  {
    id: 743,
    name: "SQLite SQL",
    slug: "sqlite-sql",
    cssClass: "sqlite-sql-lang",
    category: "embedded-database",
    categoryLabel: "Zero-Configuration Serverless SQL Dialect",
    logo: "assets/logos/sqlite-sql.svg",
    shortDesc: "Compact, serverless, self-contained SQL database engine dialect powering billions of mobile devices, browsers, and embedded systems.",
    paradigm: "Relational / Embedded SQL",
    designedBy: "D. Richard Hipp",
    firstAppeared: "2000",
    fileExtension: ".sqlite",
    primaryUse: "Local application storage in iOS/Android apps, browser web storage, desktop local caches, and embedded IoT firmware",
    syntaxSummary: "ANSI SQL-92 dialect with manifest dynamic typing, CTEs (WITH RECURSIVE), JSON functions (json_extract), and UPSERT.",
    sampleCode: `WITH RECURSIVE Fibonacci(n, a, b) AS (
    VALUES(1, 0, 1)
    UNION ALL
    SELECT n + 1, b, a + b
    FROM Fibonacci
    WHERE n < 10
)
SELECT n, a AS FibNumber FROM Fibonacci;`,
    explanation: "SQLite uses manifest dynamic typing, meaning a column's datatype is a property of the stored value rather than the container table schema.",
    expectedOutput: `n   FibNumber
--  ---------
1   0
2   1
3   1
4   2
5   3
6   5
7   8
8   13
9   21
10  34`
  },
  {
    id: 744,
    name: "SQL PL",
    slug: "sql-pl",
    cssClass: "sql-pl-lang",
    category: "procedural-sql",
    categoryLabel: "IBM DB2 SQL Procedural Language",
    logo: "assets/logos/sql-pl.svg",
    shortDesc: "ANSI/ISO SQL-standard procedural extension language implemented in IBM DB2 for writing enterprise triggers and stored procedures.",
    paradigm: "Procedural SQL / Enterprise Relational",
    designedBy: "IBM Corporation",
    firstAppeared: "1999",
    fileExtension: ".sql",
    primaryUse: "High-volume banking core ledgers, insurance claims processing, and high-availability database automation on IBM DB2",
    syntaxSummary: "CREATE PROCEDURE with DECLARE, IF, CASE, WHILE, FOR loop cursor iterations, and SQLCODE/SQLSTATE condition handlers.",
    sampleCode: `CREATE OR REPLACE PROCEDURE UPDATE_BONUS (IN p_dept INT)
LANGUAGE SQL
BEGIN
    DECLARE v_emp_id INT;
    DECLARE at_end INT DEFAULT 0;
    DECLARE not_found CONDITION FOR SQLSTATE '02000';
    DECLARE CONTINUE HANDLER FOR not_found SET at_end = 1;

    UPDATE EMPLOYEES SET BONUS = BONUS * 1.10 WHERE DEPT_ID = p_dept;
END`,
    explanation: "SQL PL adheres strictly to the ISO SQL:1999 persistent stored modules (SQL/PSM) specification, compiling directly into native DB2 plans.",
    expectedOutput: `DB20000I  The SQL command completed successfully.
CALL UPDATE_BONUS(50);
Department 50 employee bonuses updated by 10% in DB2 transactional engine.`
  },
  {
    id: 745,
    name: "Transact-SQL Extended",
    slug: "transact-sql-extended",
    cssClass: "transact-sql-extended-lang",
    category: "procedural-sql",
    categoryLabel: "Microsoft SQL Server Procedural Language",
    logo: "assets/logos/transact-sql-extended.svg",
    shortDesc: "Microsoft's procedural extension to standard SQL in SQL Server providing control flow, local variables, and windowing functions.",
    paradigm: "Procedural SQL / Transactional",
    designedBy: "Sybase / Microsoft Corporation",
    firstAppeared: "1989",
    fileExtension: ".sql",
    primaryUse: "Stored procedures, user-defined functions, database triggers, analytical window functions, and Azure SQL transactions",
    syntaxSummary: "BEGIN...END blocks, @variable declarations, IF/ELSE, WHILE, TRY...CATCH error handling, and CROSS APPLY.",
    sampleCode: `BEGIN TRY
    BEGIN TRANSACTION;
        UPDATE Accounts SET Balance = Balance - 250.00 WHERE AccountID = 1001;
        UPDATE Accounts SET Balance = Balance + 250.00 WHERE AccountID = 1002;
    COMMIT TRANSACTION;
    PRINT 'Funds transfer completed successfully.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0 ROLLBACK TRANSACTION;
    PRINT 'Error encountered: ' + ERROR_MESSAGE();
END CATCH;`,
    explanation: "Transact-SQL (T-SQL) powers the transactional core of Microsoft SQL Server, managing ACID guarantees across mission-critical systems.",
    expectedOutput: `(1 row affected)
(1 row affected)
Funds transfer completed successfully.`
  },
  {
    id: 746,
    name: "Oracle Forms",
    slug: "oracle-forms",
    cssClass: "oracle-forms-lang",
    category: "client-server",
    categoryLabel: "Rapid Enterprise Database Screen Builder",
    logo: "assets/logos/oracle-forms.svg",
    shortDesc: "Oracle's rapid application development tool for constructing high-throughput data entry screens and enterprise database workflows.",
    paradigm: "Event-Driven / Procedural / 4GL",
    designedBy: "Oracle Corporation",
    firstAppeared: "1982",
    fileExtension: ".fmb",
    primaryUse: "Core enterprise banking systems, telecommunications billing portals, and government administrative data entry frontends",
    syntaxSummary: "Block-Record-Item hierarchy with PL/SQL triggers (WHEN-BUTTON-PRESSED, PRE-INSERT, POST-QUERY) and built-in GO_BLOCK.",
    sampleCode: `/* Oracle Forms Trigger: WHEN-BUTTON-PRESSED */
BEGIN
   IF :customer.balance > :customer.credit_limit THEN
      MESSAGE('Warning: Customer balance exceeds approved credit limit.');
      BELL;
   ELSE
      COMMIT_FORM;
      MESSAGE('Transaction saved to Oracle Database.');
   END IF;
END;`,
    explanation: "Oracle Forms runs tightly coupled with Oracle Database, automating record locking, validation, and multi-user concurrency control.",
    expectedOutput: `[Oracle Forms Services 12c] Form module 'CUSTOMER_ENTRY' initialized.
Connected to Oracle Database 19c Enterprise Edition.
Trigger WHEN-BUTTON-PRESSED executed. Transaction committed.`
  },
  {
    id: 747,
    name: "Oracle Reports",
    slug: "oracle-reports",
    cssClass: "oracle-reports-lang",
    category: "reporting-systems",
    categoryLabel: "High-Volume Enterprise Reporting Tool",
    logo: "assets/logos/oracle-reports.svg",
    shortDesc: "Enterprise reporting tool by Oracle for creating, generating, and distributing high-volume pixel-perfect production reports.",
    paradigm: "Reporting / Declarative Layout / Procedural",
    designedBy: "Oracle Corporation",
    firstAppeared: "1988",
    fileExtension: ".rdf",
    primaryUse: "Generating billing statements, invoices, government tax declarations, check printouts, and regulatory compliance reports",
    syntaxSummary: "Data Model queries (Q_1, Q_2), repeating frames, matrix layouts, and PL/SQL formula/format triggers (BeforeReport, AfterReport).",
    sampleCode: `FUNCTION BeforeReport RETURN BOOLEAN IS
BEGIN
    SRW.MESSAGE(1001, 'Beginning execution of Monthly Revenue Statement...');
    IF :P_FISCAL_YEAR IS NULL THEN
        :P_FISCAL_YEAR := TO_CHAR(SYSDATE, 'YYYY');
    END IF;
    RETURN (TRUE);
END;`,
    explanation: "Oracle Reports combines complex relational SQL queries with layout engines capable of outputting to PDF, HTML, XML, and high-speed printers.",
    expectedOutput: `[Oracle Reports Server 12c] Report job 4821 started for 'REVENUE_STATEMENT.rdf'.
Formatting 128 pages with repeating department frames.
Generated output PDF: revenue_2026.pdf (1.4 MB).`
  },
  {
    id: 748,
    name: "Oracle Pro*C",
    slug: "oracle-proc",
    cssClass: "oracle-proc-lang",
    category: "embedded-sql",
    categoryLabel: "Embedded SQL Precompiler for C/C++",
    logo: "assets/logos/oracle-proc.svg",
    shortDesc: "Precompiler allowing developers to embed SQL statements directly inside high-performance C and C++ source code.",
    paradigm: "Embedded SQL / Precompiled Systems",
    designedBy: "Oracle Corporation",
    firstAppeared: "1984",
    fileExtension: ".pc",
    primaryUse: "High-frequency stock trading engines, telecommunication billing mediators, and high-throughput transaction daemons",
    syntaxSummary: "EXEC SQL prefixes, host variables (:variable), EXEC SQL WHENEVER condition DO action, and cursor management.",
    sampleCode: `#include <stdio.h>

EXEC SQL INCLUDE sqlca;

int main() {
    EXEC SQL BEGIN DECLARE SECTION;
        char username[20] = "SCOTT";
        char password[20] = "TIGER";
        char emp_name[50];
        int emp_id = 7369;
    EXEC SQL END DECLARE SECTION;

    EXEC SQL CONNECT :username IDENTIFIED BY :password;
    EXEC SQL SELECT ename INTO :emp_name FROM emp WHERE empno = :emp_id;
    
    printf("Employee Name: %s\\n", emp_name);
    EXEC SQL COMMIT RELEASE;
    return 0;
}`,
    explanation: "Pro*C scans `.pc` files, parses embedded `EXEC SQL` statements, and translates them into native OCI (Oracle Call Interface) C function calls.",
    expectedOutput: `proc iname=employee.pc oname=employee.c
gcc -O2 employee.c -lclntsh -o employee
Connected to Oracle DB.
Employee Name: SMITH`
  },
  {
    id: 749,
    name: "Embedded SQL",
    slug: "embedded-sql",
    cssClass: "embedded-sql-lang",
    category: "embedded-sql",
    categoryLabel: "ANSI/ISO Standard for Inline Database Access",
    logo: "assets/logos/embedded-sql.svg",
    shortDesc: "Standardized technique of embedding SQL statements directly into procedural host languages like C, COBOL, Fortran, and Ada.",
    paradigm: "Embedded SQL / Preprocessor Standard",
    designedBy: "ANSI / ISO SQL Standards Committee",
    firstAppeared: "1986",
    fileExtension: ".sc",
    primaryUse: "Integrating database access into legacy enterprise software (COBOL mainframes, C daemons, and scientific Fortran codebases)",
    syntaxSummary: "EXEC SQL ... END-EXEC (or semicolon in C) with host variables identified by leading colons and SQLCA communication.",
    sampleCode: `/* ANSI Embedded SQL in Host C */
EXEC SQL WHENEVER SQLERROR GOTO handle_error;

EXEC SQL UPDATE accounts 
         SET balance = balance + :deposit_amt 
         WHERE account_num = :target_acct;

EXEC SQL COMMIT WORK;
printf("Deposit successful.\\n");`,
    explanation: "Embedded SQL allows general-purpose programming languages to communicate with databases without raw string concatenation or manual driver calls.",
    expectedOutput: `[Embedded SQL Precompiler] Validated syntax against SQL-92 Standard.
Host variables (:deposit_amt, :target_acct) mapped to parameter buffers.
Transformed to host C code. Deposit successful.`
  },
  {
    id: 750,
    name: "SQLJ",
    slug: "sqlj",
    cssClass: "sqlj-lang",
    category: "embedded-sql",
    categoryLabel: "Embedded SQL for Java Applications",
    logo: "assets/logos/sqlj.svg",
    shortDesc: "ISO standard extending Java syntax to embed static SQL statements with compile-time database syntax and schema checking.",
    paradigm: "Embedded SQL / Static Type Checking",
    designedBy: "SQLJ Consortium (IBM, Oracle, Sun Microsystems, Tandem)",
    firstAppeared: "1997",
    fileExtension: ".sqlj",
    primaryUse: "High-performance enterprise Java applications requiring compile-time SQL verification and static query execution plans",
    syntaxSummary: "#sql clauses, execution contexts, iterator declarations (#sql iterator ...), and host variable binding (:variable).",
    sampleCode: `import java.sql.*;
import sqlj.runtime.ref.*;

public class AccountManager {
    public static void main(String[] args) {
        try {
            int custId = 101;
            String custName;
            
            #sql { SELECT name INTO :custName FROM customers WHERE id = :custId };
            
            System.out.println("Retrieved Customer via SQLJ: " + custName);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`,
    explanation: "SQLJ translates `#sql` clauses into standard JDBC calls at compile-time while checking queries against a live database schema to prevent runtime bugs.",
    expectedOutput: `sqlj AccountManager.sqlj
Connecting to database schema to verify SQL statements...
Query verified: Column 'name' matches type String.
Retrieved Customer via SQLJ: PlayCode Developer`
  }
];

const targetPath = path.resolve(__dirname, '../data/section14-entries.js');
const fileContent = `// Section 14 (Entries 701–750) Authoritative Dataset — CodePlay
// Standard: CARD DESIGN.md | Author: NASA-KUN (@ঔৣ፝ N4!)

export const section14Entries = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Generated data/section14-entries.js with ${entries.length} verified entries (701-750)`);
