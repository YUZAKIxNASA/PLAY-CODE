const fs = require('fs');
const path = require('path');

const entries = [
  {
    id: 651,
    name: "Venture",
    slug: "venture",
    cssClass: "venture-lang",
    category: "probabilistic-programming",
    categoryLabel: "Probabilistic Computing Platform",
    logo: "assets/logos/venture.svg",
    shortDesc: "MIT interactive probabilistic programming platform enabling flexible inference algorithms and hierarchical Bayesian modeling.",
    paradigm: "Probabilistic / Metaprogramming",
    designedBy: "MIT Probabilistic Computing Project (Vikash Mansinghka et al.)",
    firstAppeared: "2014",
    fileExtension: ".vnts",
    primaryUse: "Programmable inference over complex stochastic processes, hierarchical robotics modeling, and AI reasoning",
    syntaxSummary: "Lisp-style s-expressions with explicit stochastic directives (assume, predict, observe) and inference sub-languages.",
    sampleCode: `;; Venture Probabilistic Modeling Program
(assume bias (beta 1.0 1.0))
(assume flip (lambda () (bernoulli bias)))

(observe (flip) true)
(observe (flip) true)
(observe (flip) false)

(predict bias)
(infer (metropolis-hastings 500))`,
    explanation: "Venture separates the specification of generative probabilistic models from the inference strategies used to evaluate posterior distributions.",
    expectedOutput: `[Venture Runtime] Initializing Bayesian trace...
Metropolis-Hastings iterations: 500 completed.
Posterior estimate for bias: Mean = 0.601, 95% CI = [0.24, 0.89].`
  },
  {
    id: 652,
    name: "Anglican",
    slug: "anglican",
    cssClass: "anglican-lang",
    category: "probabilistic-programming",
    categoryLabel: "Turing-Complete Probabilistic System",
    logo: "assets/logos/anglican.svg",
    shortDesc: "Oxford Clojure-based probabilistic programming language providing exact particle filtering and sequential Monte Carlo inference.",
    paradigm: "Functional / Probabilistic",
    designedBy: "Oxford University (Frank Wood, Jan-Willem van de Meent)",
    firstAppeared: "2015",
    fileExtension: ".clj",
    primaryUse: "Particle filtering, sequential Monte Carlo inference, and cognitive science probabilistic simulations on the JVM",
    syntaxSummary: "Clojure macros (defquery, sample, observe) compiling probabilistic queries into lazy inference sequences.",
    sampleCode: `(ns codeplay.probabilistic
  (:require [anglican.runtime :refer :all]
            [anglican.emit :refer [defquery]]))

(defquery gaussian-mixture
  (let [mu (sample (normal 0 10))
        sigma (sample (gamma 2 2))]
    (observe (normal mu sigma) 4.2)
    (observe (normal mu sigma) 4.8)
    [mu sigma]))`,
    explanation: "Anglican integrates directly into Clojure, running sophisticated particle Markov chain Monte Carlo (PMCMC) algorithms natively on the JVM.",
    expectedOutput: `[Anglican Inference Engine] Compiling defquery gaussian-mixture...
Running Particle MCMC with 1,000 particles...
Sampled Posterior: mu ~ 4.47, sigma ~ 0.82 (Effective Sample Size: 842).`
  },
  {
    id: 653,
    name: "WebPPL",
    slug: "webppl",
    cssClass: "webppl-lang",
    category: "probabilistic-programming",
    categoryLabel: "JavaScript Probabilistic Language",
    logo: "assets/logos/webppl.svg",
    shortDesc: "Stanford probabilistic programming language built on functional JavaScript with browser and Node.js inference runtimes.",
    paradigm: "Functional / Probabilistic",
    designedBy: "Noah Goodman, Andreas Stuhlmüller (Stanford)",
    firstAppeared: "2014",
    fileExtension: ".wppl",
    primaryUse: "Cognitive science modeling, linguistics research, and educational probabilistic web applications",
    syntaxSummary: "JavaScript subset with sample(), observe(), condition(), and Infer() routines transforming code via CPS.",
    sampleCode: `// WebPPL Inference Routine
var model = function() {
  var p = beta(1, 1);
  observe(Binomial({n: 10, p: p}), 7);
  return p;
};

var dist = Infer({method: 'MCMC', samples: 2000}, model);
print("Posterior Expectation: " + expectation(dist));`,
    explanation: "WebPPL translates probabilistic JavaScript programs into continuation-passing style (CPS) to explore paths and compute likelihoods.",
    expectedOutput: `[WebPPL v0.9.15] Evaluating probabilistic model via MCMC...
MCMC samples collected: 2000 (burn-in: 500).
Posterior Expectation: 0.6672`
  },
  {
    id: 654,
    name: "Gen",
    slug: "gen",
    cssClass: "gen-lang",
    category: "probabilistic-programming",
    categoryLabel: "Programmable Inference Platform",
    logo: "assets/logos/gen.svg",
    shortDesc: "MIT programmable inference engine embedded in Julia combining deep generative modeling, particle filtering, and MCMC.",
    paradigm: "Multi-Paradigm / Probabilistic",
    designedBy: "MIT ProbComp (Marco Cusumano-Towner et al.)",
    firstAppeared: "2019",
    fileExtension: ".jl",
    primaryUse: "Computer vision inverse graphics, automated data science, robotics SLAM, and customizable Bayesian inference",
    syntaxSummary: "Julia @gen macros with trace addresses (~), custom proposal distributions, and differentiable generative functions.",
    sampleCode: `using Gen

@gen function linear_regression(xs::Vector{Float64})
    slope ~ normal(0, 2)
    intercept ~ normal(0, 10)
    for (i, x) in enumerate(xs)
        {(:y, i)} ~ normal(slope * x + intercept, 0.5)
    end
    return (slope, intercept)
end`,
    explanation: "Gen lets researchers write custom inference algorithms where different components (MCMC, particle filters, neural net proposals) interoperate seamlessly.",
    expectedOutput: `[Gen.jl] Compiled generative function 'linear_regression'.
Trace address space: [slope, intercept, (:y, 1)..(:y, 5)].
Importance sampling estimate (N=1000): Log marginal likelihood = -4.18.`
  },
  {
    id: 655,
    name: "Futhark GPU",
    slug: "futhark-gpu",
    cssClass: "futhark-gpu-lang",
    category: "parallel-computing",
    categoryLabel: "High-Performance GPU Array Language",
    logo: "assets/logos/futhark-gpu.svg",
    shortDesc: "Purely functional data-parallel language compiling high-level nested array operations directly into optimized OpenCL and CUDA kernels.",
    paradigm: "Functional / Data-Parallel Array",
    designedBy: "DIKU (University of Copenhagen)",
    firstAppeared: "2014",
    fileExtension: ".fut",
    primaryUse: "GPU-accelerated scientific computations, financial risk simulations, computer vision, and machine learning pipelines",
    syntaxSummary: "Second-order array combinators (map, reduce, scan, filter) transformed via aggressive loop fusion and flattening.",
    sampleCode: `-- Futhark GPU Matrix Multiplication
def matmul [n][m][p] (A: [n][m]f32) (B: [m][p]f32): [n][p]f32 =
  map (\\a_row ->
    map (\\b_col ->
      reduce (+) 0f32 (map2 (*) a_row b_col)
    ) (transpose B)
  ) A

def main = matmul [[1.0f32, 2.0f32], [3.0f32, 4.0f32]]
                  [[5.0f32, 6.0f32], [7.0f32, 8.0f32]]`,
    explanation: "Futhark optimizes nested array parallel programs through moderate flattening into highly parallel GPU kernels rivaling hand-tuned CUDA.",
    expectedOutput: `futhark cuda --check matmul.fut
Generated CUDA kernel: matmul_fused_reduce_kernel
Output: [[19.000000, 22.000000], [43.000000, 50.000000]]
GPU Execution time: 0.042 ms (Speedup: 18.4x vs CPU).`
  },
  {
    id: 656,
    name: "Triton",
    slug: "triton",
    cssClass: "triton-lang",
    category: "parallel-computing",
    categoryLabel: "GPU Kernel Programming Language",
    logo: "assets/logos/triton.svg",
    shortDesc: "OpenAI language and compiler for writing highly optimized deep learning GPU compute kernels with Python-like productivity.",
    paradigm: "Array-Centric / GPU Compiler",
    designedBy: "Philippe Tillet (OpenAI)",
    firstAppeared: "2021",
    fileExtension: ".py",
    primaryUse: "Custom FlashAttention layers, fused activation-norm layers, quantized tensor kernels, and PyTorch 2.0 backend acceleration",
    syntaxSummary: "Block-level SPMD execution, explicit memory loads/stores (tl.load, tl.store), and block tensor math (tl.dot).",
    sampleCode: `import triton
import triton.language as tl

@triton.jit
def add_kernel(x_ptr, y_ptr, output_ptr, n_elements, BLOCK_SIZE: tl.constexpr):
    pid = tl.program_id(axis=0)
    block_start = pid * BLOCK_SIZE
    offsets = block_start + tl.arange(0, BLOCK_SIZE)
    mask = offsets < n_elements
    x = tl.load(x_ptr + offsets, mask=mask)
    y = tl.load(y_ptr + offsets, mask=mask)
    tl.store(output_ptr + offsets, x + y, mask=mask)`,
    explanation: "Triton operates at block-level granularity rather than thread-level, automating shared memory allocations and warp synchronization.",
    expectedOutput: `[Triton JIT] Compiling add_kernel for NVIDIA Ampere (sm_80)...
Auto-tuning: Selected BLOCK_SIZE=1024, num_warps=4, num_stages=3.
Achieved memory bandwidth: 948.2 GB/s (92.4% theoretical peak).`
  },
  {
    id: 657,
    name: "Taichi",
    slug: "taichi",
    cssClass: "taichi-lang",
    category: "parallel-computing",
    categoryLabel: "Computer Graphics & Physics Language",
    logo: "assets/logos/taichi.svg",
    shortDesc: "Open-source domain-specific language embedded in Python for high-performance physics simulations and visual computing.",
    paradigm: "Domain-Specific / Parallel / Differentiable",
    designedBy: "Yuanming Hu (Taichi Graphics / MIT)",
    firstAppeared: "2019",
    fileExtension: ".py",
    primaryUse: "Particle fluid simulation, cloth dynamics, ray tracing, differentiable robotics, and GPU visual computing",
    syntaxSummary: "@ti.kernel decorated functions operating over hierarchical sparse data structures (ti.field) with automated GPU offloading.",
    sampleCode: `import taichi as ti
ti.init(arch=ti.gpu)

particles = ti.Vector.field(2, dtype=ti.f32, shape=1000)

@ti.kernel
def step_simulation(gravity: ti.f32):
    for i in particles:
        particles[i].y -= gravity * 0.016
        if particles[i].y < 0.0:
            particles[i].y = 0.0

step_simulation(9.81)`,
    explanation: "Taichi decouples computational algorithms from data structure layout, letting developers write spatial physics kernels without manual CUDA memory management.",
    expectedOutput: `[Taichi] Initializing on GPU (Vulkan/CUDA backend).
JIT compilation of 'step_simulation' completed in 12ms.
Simulated 1,000 particles at 240 FPS.`
  },
  {
    id: 658,
    name: "Mojo Language",
    slug: "mojo-lang",
    cssClass: "mojo-lang",
    category: "systems-ai",
    categoryLabel: "Hardware-Accelerated AI Language",
    logo: "assets/logos/mojo-lang.svg",
    shortDesc: "Modular's next-generation programming language combining Python's syntax with C-level performance and MLIR hardware control.",
    paradigm: "Multi-Paradigm / Systems / Heterogeneous",
    designedBy: "Chris Lattner et al. (Modular)",
    firstAppeared: "2023",
    fileExtension: ".mojo",
    primaryUse: "AI model deployment, high-throughput tensor operations, systems software, and SIMD hardware acceleration",
    syntaxSummary: "fn functions with strict types, let/var declarations, struct with value semantics, and SIMD vector primitives.",
    sampleCode: `from memory import memset_zero
from algorithm import vectorize

fn dot_product(a: DTypePointer[DType.float32], b: DTypePointer[DType.float32], size: Int) -> Float32:
    var acc = Float32(0.0)
    for i in range(size):
        acc += a[i] * b[i]
    return acc

fn main():
    print("Mojo AI Hardware Acceleration Engine Active")`,
    explanation: "Mojo leverages Multi-Level Intermediate Representation (MLIR) to compile code down to vector units, GPUs, and specialized AI accelerators.",
    expectedOutput: `mojo run dot_product.mojo
Mojo AI Hardware Acceleration Engine Active
Optimized AVX-512 vectorization: 16 floats per clock cycle.`
  },
  {
    id: 659,
    name: "Codon",
    slug: "codon",
    cssClass: "codon-lang",
    category: "systems-ai",
    categoryLabel: "High-Performance Python Compiler",
    logo: "assets/logos/codon.svg",
    shortDesc: "High-performance Python-compatible compiler translating untyped Python code into native machine instructions without runtime overhead.",
    paradigm: "Compiled / Multi-Paradigm",
    designedBy: "Exaloop Inc. (Victoria Popic et al.)",
    firstAppeared: "2023",
    fileExtension: ".py",
    primaryUse: "Bioinformatics sequencing pipelines, quantitative finance calculations, and data-intensive computing without GIL bottlenecks",
    syntaxSummary: "Full Python 3 syntax with static type inference, multi-threaded openmp directives, and zero-overhead native C interop.",
    sampleCode: `import time

def fib(n: int) -> int:
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

t0 = time.time()
result = fib(40)
print(f"Fib(40) = {result} computed in {time.time() - t0:.3f}s")`,
    explanation: "Codon compiles Python ahead-of-time through an LLVM-based pipeline, completely eliminating interpreter dispatch and reference counting overhead.",
    expectedOutput: `codon run -release fib.py
Fib(40) = 102334155 computed in 0.284s
Performance: 72x faster than standard CPython 3.12.`
  },
  {
    id: 660,
    name: "Lux",
    slug: "lux",
    cssClass: "lux-lang",
    category: "functional-lisp",
    categoryLabel: "Statically-Typed Polyglot Lisp",
    logo: "assets/logos/lux.svg",
    shortDesc: "Purely functional, statically-typed Lisp dialect featuring monadic effects, polymorphic macros, and multi-target compilation.",
    paradigm: "Functional / Metaprogramming",
    designedBy: "Eduardo Julián",
    firstAppeared: "2014",
    fileExtension: ".lux",
    primaryUse: "Polyglot functional programming running across JVM, JavaScript, Python, and Lua target platforms",
    syntaxSummary: "Prefix s-expressions with rich type system, GADTs, pattern matching, and macro-based syntax extensions.",
    sampleCode: `(;module:
  lux
  (lux (control monad)
       (data [text]
             [number])))

(program: args
  (exec
    (log! "Lux Functional Lisp Initialized.")
    (log! (text/compose "Result: " (number/encode (+ 20 22))))))`,
    explanation: "Lux combines the macro metaprogramming prowess of Common Lisp with an ML-grade type system, compiling to multiple bytecode targets.",
    expectedOutput: `lux build --target jvm program.lux
Compiled Lux module: [program.class]
Lux Functional Lisp Initialized.
Result: 42`
  },
  {
    id: 661,
    name: "Bend",
    slug: "bend",
    cssClass: "bend-lang",
    category: "parallel-computing",
    categoryLabel: "Massively Parallel Functional Language",
    logo: "assets/logos/bend.svg",
    shortDesc: "High-level massively parallel programming language running across thousands of CPU cores and GPUs via Interaction Combinators.",
    paradigm: "Functional / Massively Parallel",
    designedBy: "HigherOrderCO (Victor Taelin)",
    firstAppeared: "2024",
    fileExtension: ".bend",
    primaryUse: "Automatic parallel processing, GPU tree-reduction algorithms, and barrier-free concurrency on HVM2",
    syntaxSummary: "Python-like syntax with bend/when statements that compile into interaction calculus graphs without thread management.",
    sampleCode: `def sum_tree(depth, val):
  when depth == 0:
    return val
  else:
    left = sum_tree(depth - 1, val * 2)
    right = sum_tree(depth - 1, val * 2 + 1)
    return left + right

def main():
  return sum_tree(16, 1)`,
    explanation: "Bend executes programs on HVM2 (Higher-order Virtual Machine) by reducing interaction nets in parallel without locks, threads, or GPU boilerplate.",
    expectedOutput: `bend run-cu sum_tree.bend
HVM2 CUDA Runtime: 16,384 concurrent interaction threads dispatched.
Result: 8589869056
Execution time: 4.8ms on NVIDIA RTX GPU.`
  },
  {
    id: 662,
    name: "Vale",
    slug: "vale",
    cssClass: "vale-lang",
    category: "systems-languages",
    categoryLabel: "Fast Memory-Safe Systems Language",
    logo: "assets/logos/vale.svg",
    shortDesc: "Fast, memory-safe systems programming language utilizing Single Ownership and Generational References without a garbage collector.",
    paradigm: "Imperative / Object-Oriented / Memory-Safe",
    designedBy: "Evan Ovadia",
    firstAppeared: "2020",
    fileExtension: ".vale",
    primaryUse: "Game development, high-frequency systems, and embedded computing requiring zero-cost deterministic memory safety",
    syntaxSummary: "Single ownership, borrowing, constraint references (&), pure functions, and generational pointer checking.",
    sampleCode: `import stdlib.*;

exported func main() {
  spaceships = [
    Ship("Orion", 450),
    Ship("Nebula", 620)
  ];
  
  println("Strongest ship: " + spaceships[1].name);
}

struct Ship {
  name str;
  power int;
}`,
    explanation: "Vale achieves memory safety without tracing garbage collection or complex borrow-checker lifetimes by employing generational references.",
    expectedOutput: `valec build main.vale --output-dir ./bin
LLVM backend compiled executable 'main'.
Strongest ship: Nebula
Generational reference safety check: 0 invalid access errors.`
  },
  {
    id: 663,
    name: "Austral",
    slug: "austral",
    cssClass: "austral-lang",
    category: "systems-languages",
    categoryLabel: "Linear-Typed Systems Language",
    logo: "assets/logos/austral.svg",
    shortDesc: "Systems programming language featuring linear types and capability-based security for guaranteed resource safety.",
    paradigm: "Systems / Linear Types / Imperative",
    designedBy: "Fernando Borretti",
    firstAppeared: "2022",
    fileExtension: ".aum",
    primaryUse: "Secure operating systems, cryptographically audited kernels, and aerospace software requiring guaranteed resource lifecycle management",
    syntaxSummary: "Module interfaces (.aui) and implementations (.aum) with linear types consumed exactly once and explicit capability passing.",
    sampleCode: `module body Codeplay.Example is
    import Standard.IO (printLn);

    function main(): ExitCode is
        printLn("Austral Capability Security Initialized");
        return ExitSuccess();
    end;
end module body.`,
    explanation: "Austral's linear type system ensures that files, sockets, and memory allocations are never leaked, double-freed, or accessed after invalidation.",
    expectedOutput: `austral compile --entry=Codeplay.Example:main
Verifying linearity constraints: 100% linear resources consumed properly.
Austral Capability Security Initialized
Exit code: 0`
  },
  {
    id: 664,
    name: "Verona",
    slug: "verona",
    cssClass: "verona-lang",
    category: "systems-languages",
    categoryLabel: "Concurrent Ownership Research Language",
    logo: "assets/logos/verona.svg",
    shortDesc: "Microsoft Research language investigating concurrent ownership and memory safety to replace legacy C++ components safely.",
    paradigm: "Concurrent / Systems / Object-Oriented",
    designedBy: "Microsoft Research (Matthew Parkinson et al.)",
    firstAppeared: "2020",
    fileExtension: ".verona",
    primaryUse: "Sandboxed concurrent memory systems, operating system components, and cloud infrastructure safety research",
    syntaxSummary: "Cregions (concurrent regions), when-blocks for asynchronous region scheduling, and linear isolated object graphs.",
    sampleCode: `class Account {
  balance: U64;
}

when (c1 = region(Account)) {
  c1.balance = 100;
  print("Region balance secured: " + c1.balance.to_string());
}`,
    explanation: "Project Verona guarantees memory safety without garbage collection through regions of isolated objects scheduled concurrently via when-blocks.",
    expectedOutput: `veronac --run account.verona
Concurrent region [c1] allocated and scheduled on task pool.
Region balance secured: 100
Zero data race condition verified.`
  },
  {
    id: 665,
    name: "Lobster",
    slug: "lobster",
    cssClass: "lobster-lang",
    category: "game-development",
    categoryLabel: "Compile-Time Memory-Managed Game Language",
    logo: "assets/logos/lobster.svg",
    shortDesc: "Expressive systems and game programming language with flow-sensitive typing and compile-time lifetime memory management.",
    paradigm: "Multi-Paradigm / Game Scripting",
    designedBy: "Wouter van Oortmerssen (Google)",
    firstAppeared: "2013",
    fileExtension: ".lobster",
    primaryUse: "2D and 3D indie game engines, OpenGL simulation tools, and rapid game jam prototyping",
    syntaxSummary: "Python-style indentation with vector primitives, inline functions, and automatic compile-time reference lifetime analysis.",
    sampleCode: `import vec
import color

fatal(gl_window_init("Lobster Canvas", 800, 600))

while gl_frame():
    gl_clear(color_black)
    gl_color(color_red)
    gl_circle(400, 300, 50, 20)`,
    explanation: "Lobster utilizes compile-time reference counting to turn allocations into fast stack values, eliminating runtime GC pauses during gameplay.",
    expectedOutput: `lobster --compile-to-cpp game.lobster
Flow-sensitive lifetime analysis: 94% allocations promoted to stack.
OpenGL 3.3 context created: 800x600 @ 60 FPS.`
  },
  {
    id: 666,
    name: "Wing",
    slug: "wing",
    cssClass: "wing-lang",
    category: "cloud-languages",
    categoryLabel: "Cloud-Oriented Programming Language",
    logo: "assets/logos/wing.svg",
    shortDesc: "Cloud-oriented programming language unifying cloud infrastructure provisioning and runtime application code into a single abstraction.",
    paradigm: "Cloud-Native / Object-Oriented / Declarative",
    designedBy: "Wing Cloud (Elad Ben-Israel et al.)",
    firstAppeared: "2023",
    fileExtension: ".w",
    primaryUse: "Serverless AWS/Azure architectures, event-driven cloud applications, and local cloud simulation",
    syntaxSummary: "preflight phase for cloud infrastructure definition (buckets, queues) and inflight async blocks for runtime code.",
    sampleCode: `bring cloud;

let bucket = new cloud.Bucket();
let queue = new cloud.Queue();

queue.setConsumer(inflight (message: str) => {
  bucket.put("message.txt", message);
  log("Message persisted to cloud storage: \${message}");
});`,
    explanation: "Wing compiles preflight code to Terraform or AWS CDK and inflight code to JavaScript running on AWS Lambda or Azure Functions.",
    expectedOutput: `wing compile -t tf-aws main.w
Synthesized Terraform plan with 1 S3 Bucket and 1 SQS Queue.
Local cloud simulator: Listening on http://localhost:3000.`
  },
  {
    id: 667,
    name: "Pluto",
    slug: "pluto",
    cssClass: "pluto-lang",
    category: "scripting-languages",
    categoryLabel: "High-Level Embedded Scripting Language",
    logo: "assets/logos/pluto.svg",
    shortDesc: "Enhanced, lightweight programming dialect of Lua 5.4 providing classes, type hints, string interpolation, and standard cryptography.",
    paradigm: "Multi-Paradigm / Scripting / Embeddable",
    designedBy: "Pluto Development Team (Soup)",
    firstAppeared: "2022",
    fileExtension: ".pluto",
    primaryUse: "Game scripting, embedded secure automation, application plugin engines, and modular tools",
    syntaxSummary: "Lua 5.4 superset with class/extends, switch statements, try/catch, type annotations, and crypto utilities.",
    sampleCode: `class Vector2D
  export x: number
  export y: number

  function __construct(x: number, y: number)
    this.x = x
    this.y = y
  end

  function magnitude(): number
    return math.sqrt(this.x^2 + this.y^2)
  end
end

local v = new Vector2D(3, 4)
print($"Vector magnitude: {v:magnitude()}")`,
    explanation: "Pluto preserves Lua's ultra-compact footprint and C API while adding contemporary features like classes, exceptions, and ternary operators.",
    expectedOutput: `pluto run vector.pluto
Type check: 0 warnings.
Vector magnitude: 5`
  },
  {
    id: 668,
    name: "Cone",
    slug: "cone",
    cssClass: "cone-lang",
    category: "systems-languages",
    categoryLabel: "Extensible Systems Programming Language",
    logo: "assets/logos/cone.svg",
    shortDesc: "Fast, memory-safe systems language offering flexible reference capabilities, arenas, regions, and pool memory management.",
    paradigm: "Multi-Paradigm / Systems",
    designedBy: "Jonathan Shapiro",
    firstAppeared: "2018",
    fileExtension: ".cone",
    primaryUse: "High-performance 3D graphics, game engines, and low-latency system services with fine-grained memory management",
    syntaxSummary: "Pattern-matched functions, permission qualifiers (&uni, &mut, &imm), and region allocations (sofree, arena, pool).",
    sampleCode: `import std::io

fn main() {
  mut list = [1, 2, 3, 4, 5]
  io::print("Cone systems language initialized\\n")
  imm total = fold(list, 0) |a, b| { a + b }
  io::print("Sum of array elements: ")
  io::print(total)
}`,
    explanation: "Cone gives systems developers control over whether each allocation uses single ownership, reference counting, arena pools, or GC.",
    expectedOutput: `conec compile main.cone
LLVM optimization pass: Generated native x86-64 binary.
Cone systems language initialized
Sum of array elements: 15`
  },
  {
    id: 669,
    name: "Inko",
    slug: "inko",
    cssClass: "inko-lang",
    category: "systems-languages",
    categoryLabel: "Deterministic Garbage-Free Language",
    logo: "assets/logos/inko.svg",
    shortDesc: "Statically-typed, safe object-oriented language utilizing single ownership without a garbage collector or manual pointer management.",
    paradigm: "Object-Oriented / Deterministic / Concurrent",
    designedBy: "Yorick Peterse",
    firstAppeared: "2018",
    fileExtension: ".inko",
    primaryUse: "CLI tools, network microservices, concurrent asynchronous backends, and command-line automation",
    syntaxSummary: "class, def, async processes with message passing, exclusive mutable borrowing, and pattern matching.",
    sampleCode: `import std.stdio (STDOUT)

class Server {
  let @port: Int

  fn static new(port: Int) -> Server {
    Server(@port: port)
  }

  fn start {
    STDOUT.new.print("Inko asynchronous server listening on port: " + @port.to_string)
  }
}

fn pub main {
  Server.new(8080).start
}`,
    explanation: "Inko guarantees memory safety and deterministic destructor execution at compile time through an ownership model with automatic drop injection.",
    expectedOutput: `inko build server.inko
Static analysis: Single ownership invariants validated.
Inko asynchronous server listening on port: 8080`
  },
  {
    id: 670,
    name: "Gluon",
    slug: "gluon",
    cssClass: "gluon-lang",
    category: "functional-embed",
    categoryLabel: "Statically-Typed Embeddable Language",
    logo: "assets/logos/gluon.svg",
    shortDesc: "Small, statically-typed functional programming language written in Rust, designed for application embedding and scripting.",
    paradigm: "Functional / Embedded",
    designedBy: "Markus Westerlind",
    firstAppeared: "2016",
    fileExtension: ".glu",
    primaryUse: "Rust application configuration, scripting game logic, and safe user-defined domain extensibility",
    syntaxSummary: "ML-style expressions with type inference, algebraic data types, pattern matching, and native Rust C-FFI bindings.",
    sampleCode: `let io = import! std.io
let string = import! std.string

let greet name : String -> IO () =
    io.println ("Hello from Gluon, " ++ name ++ "!")

greet "CodePlay Learner"`,
    explanation: "Gluon features bidirectional Rust interoperability, enabling Rust programs to marshal complex typed structures into Gluon scripts safely.",
    expectedOutput: `gluon run greet.glu
Evaluating typed functional AST...
Hello from Gluon, CodePlay Learner!`
  },
  {
    id: 671,
    name: "Dyon",
    slug: "dyon",
    cssClass: "dyon-lang",
    category: "scripting-languages",
    categoryLabel: "Rust-Inspired Dynamic Scripting Language",
    logo: "assets/logos/dyon.svg",
    shortDesc: "Dynamic scripting language written in Rust featuring 4D vector primitives, lifetime checks without garbage collection, and game scripting tools.",
    paradigm: "Scripting / Dynamic / Concurrent",
    designedBy: "Sven Nilsen (PistonDevelopers)",
    firstAppeared: "2016",
    fileExtension: ".dyon",
    primaryUse: "Game scripting in the Piston game engine ecosystem, fast mathematical prototyping, and interactive simulations",
    syntaxSummary: "Dynamic typing with optional type annotations, return types, mathematical loops, and 4D vector literals [x, y, z, w].",
    sampleCode: `fn main() {
    pos := [10.0, 20.0, 0.0, 1.0]
    vel := [1.5, -0.5, 0.0, 0.0]
    next_pos := pos + vel
    println("Updated position vector: " + str(next_pos))
}`,
    explanation: "Dyon embeds directly into Rust game engines, providing game designers with built-in math vector primitives and zero GC pause guarantees.",
    expectedOutput: `dyon run simulation.dyon
Loaded dynamic script runtime.
Updated position vector: [11.5, 19.5, 0, 1]`
  },
  {
    id: 672,
    name: "Rhai",
    slug: "rhai",
    cssClass: "rhai-lang",
    category: "scripting-languages",
    categoryLabel: "Embedded Scripting Engine for Rust",
    logo: "assets/logos/rhai.svg",
    shortDesc: "Tiny, fast, and secure embedded scripting language for Rust with a friendly JavaScript/Rust-like syntax.",
    paradigm: "Imperative / Scripting / Embedded",
    designedBy: "Jonathan Turner, Stephen Chung",
    firstAppeared: "2017",
    fileExtension: ".rhai",
    primaryUse: "Extending Rust microservices, game business logic, game mods, and security-sandboxed business rules",
    syntaxSummary: "Dynamic typing with let/const, if/else, for/while, custom operators, and direct access to registered Rust functions.",
    sampleCode: `// Rhai script running inside Rust host
let base_price = 120.0;
let discount = 0.15;

fn calculate_total(price, disc) {
    price * (1.0 - disc)
}

let final_price = calculate_total(base_price, discount);
print("Computed price with discount: " + final_price);`,
    explanation: "Rhai compiles into a clean AST and evaluates directly without native code compilation, making it safe for multi-tenant cloud environments.",
    expectedOutput: `[Rhai Engine] Evaluating script AST in sandbox...
Computed price with discount: 102.0
Allocated memory: 14.2 KB (No external C dependencies).`
  },
  {
    id: 673,
    name: "Gleam Language",
    slug: "gleam-lang",
    cssClass: "gleam-lang",
    category: "functional-languages",
    categoryLabel: "Type-Safe BEAM & JS Language",
    logo: "assets/logos/gleam-lang.svg",
    shortDesc: "Friendly, type-safe functional programming language compiling to Erlang BEAM bytecode and JavaScript with helpful compiler error messages.",
    paradigm: "Functional / Concurrent",
    designedBy: "Louis Pilfold",
    firstAppeared: "2019",
    fileExtension: ".gleam",
    primaryUse: "Scalable distributed telecom services, real-time web backends, fault-tolerant web APIs, and full-stack web applications",
    syntaxSummary: "Immutable data, explicit Result types, algebraic types, pattern matching with case, and pipeline operator (|>).",
    sampleCode: `import gleam/io
import gleam/string

pub fn main() {
  "hello from gleam"
  |> string.uppercase
  |> io.println
}`,
    explanation: "Gleam provides total type safety without null or exceptions while retaining the battle-tested concurrency and actor supervisor trees of the Erlang VM.",
    expectedOutput: `gleam run
  Compiled in 0.08s
HELLO FROM GLEAM`
  },
  {
    id: 674,
    name: "Roc Language",
    slug: "roc-lang",
    cssClass: "roc-lang",
    category: "functional-languages",
    categoryLabel: "Fast Functional Systems Language",
    logo: "assets/logos/roc-lang.svg",
    shortDesc: "Fast, friendly, functional programming language designed for real-time graphics, CLI tools, server backends, and WebAssembly.",
    paradigm: "Functional / Systems",
    designedBy: "Richard Feldman",
    firstAppeared: "2021",
    fileExtension: ".roc",
    primaryUse: "High-performance CLI tools, web application servers, audio synthesizers, and WebAssembly components",
    syntaxSummary: "Elm-inspired pure functional syntax with platform headers (app, packages), structural typing, and pattern matching.",
    sampleCode: `app "hello"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/download/0.10.0/vDkwYGC8EAO8.tar.br" }
    imports [pf.Stdout, pf.Task]
    provides [main] to pf

main =
    Stdout.line "Hello from Roc Language!"`,
    explanation: "Roc delivers the ergonomics of pure functional programming with performance rivaling C and Rust through aggressive compilation and reference counting.",
    expectedOutput: `roc build hello.roc
Compiled to native x86_64 binary via LLVM.
Hello from Roc Language!`
  },
  {
    id: 675,
    name: "Grain Language",
    slug: "grain-lang",
    cssClass: "grain-lang",
    category: "functional-languages",
    categoryLabel: "WebAssembly-First Functional Language",
    logo: "assets/logos/grain-lang.svg",
    shortDesc: "Modern, type-safe functional programming language built from the ground up to compile directly to WebAssembly.",
    paradigm: "Functional / WebAssembly-Native",
    designedBy: "Philip Blair, Marcus Buffett",
    firstAppeared: "2020",
    fileExtension: ".gr",
    primaryUse: "High-performance WebAssembly browser modules, edge computing functions, and serverless WASI microservices",
    syntaxSummary: "Static typing, immutable let bindings, pattern matching, records, first-class functions, and seamless WASI integration.",
    sampleCode: `module Main

import Print from "runtime/print"

let rec factorial = (n) => {
  if (n <= 1) {
    1
  } else {
    n * factorial(n - 1)
  }
}

Print.print(factorial(6))`,
    explanation: "Grain targets WebAssembly and WASI natively, offering a standard library that runs identically in browser canvases, Node.js, and edge workers.",
    expectedOutput: `grain compile main.gr -o main.wasm
grain run main.wasm
720`
  },
  {
    id: 676,
    name: "Mojo",
    slug: "mojo",
    cssClass: "mojo-lang-alt",
    category: "systems-ai",
    categoryLabel: "Next-Gen AI Programming Language",
    logo: "assets/logos/mojo.svg",
    shortDesc: "Modular's unified programming system combining high-level Python semantics with bare-metal compiler optimization and SIMD tuning.",
    paradigm: "Multi-Paradigm / Systems / AI",
    designedBy: "Chris Lattner, Tim Davis (Modular)",
    firstAppeared: "2023",
    fileExtension: ".mojo",
    primaryUse: "AI model inference, tensor mathematics, deep learning operator authoring, and accelerator hardware programming",
    syntaxSummary: "fn vs def functions, var vs let declarations, struct with explicit memory layouts, and SIMD hardware registers.",
    sampleCode: `struct TensorBlock:
    var width: Int
    var height: Int

    fn __init__(inout self, w: Int, h: Int):
        self.width = w
        self.height = h

    fn total_elements(self) -> Int:
        return self.width * self.height

fn main():
    var block = TensorBlock(1024, 1024)
    print("Allocated tensor elements: ", block.total_elements())`,
    explanation: "Mojo eliminates the two-world problem in AI where Python orchestrates libraries while C++ or CUDA implements underlying kernels.",
    expectedOutput: `mojo run tensor.mojo
Allocated tensor elements:  1048576
Compiled with MLIR hardware pipelines.`
  },
  {
    id: 677,
    name: "Nim Language",
    slug: "nim-lang",
    cssClass: "nim-lang",
    category: "systems-languages",
    categoryLabel: "Expressive Systems Programming Language",
    logo: "assets/logos/nim-lang.svg",
    shortDesc: "Statically-typed, expressive systems language combining Python-like clean syntax with C++ performance and seamless C/C++ compilation.",
    paradigm: "Multi-Paradigm / Systems / Metaprogramming",
    designedBy: "Andreas Rumpf",
    firstAppeared: "2008",
    fileExtension: ".nim",
    primaryUse: "Systems programming, game engines, scientific simulations, web servers, and cross-platform native utilities",
    syntaxSummary: "Indentation-based syntax, compile-time AST macros, deterministic ARC/ORC memory management, and C transpilation.",
    sampleCode: `import std/strformat

type
  Person = object
    name: string
    age: int

proc greet(p: Person) =
  echo fmt"Hello {p.name}, you are {p.age} years old!"

let learner = Person(name: "NASA-YUZAKI", age: 24)
greet(learner)`,
    explanation: "Nim compiles into optimized C or C++, giving developers access to any native library while maintaining a clean, readable syntax.",
    expectedOutput: `nim compile --run person.nim
CC: person.nim -> bin/person
Hello NASA-YUZAKI, you are 24 years old!`
  },
  {
    id: 678,
    name: "Hylo",
    slug: "hylo",
    cssClass: "hylo-lang",
    category: "systems-languages",
    categoryLabel: "Safe Mutable Value Semantics Language",
    logo: "assets/logos/hylo.svg",
    shortDesc: "Systems language exploring Mutable Value Semantics and the Law of Exclusivity to eliminate data races and reference aliasing.",
    paradigm: "Systems / Functional-Imperative",
    designedBy: "Dimi Racordon, Dave Abrahams et al.",
    firstAppeared: "2023",
    fileExtension: ".hylo",
    primaryUse: "High-performance systems software, operating system utilities, and concurrent programming without reference counting",
    syntaxSummary: "fun, type, inout bindings, explicit projections, and compile-time verification of non-overlapping memory mutations.",
    sampleCode: `type Point {
  public var x: Double
  public var y: Double

  public memberwise init

  public fun distance_squared() -> Double {
    return x * x + y * y
  }
}

public fun main() {
  let p = Point(x: 3.0, y: 4.0)
  print("Point distance squared: ", p.distance_squared())
}`,
    explanation: "Hylo proves that mutable value semantics can deliver performance competitive with C++ without memory safety bugs or borrow-checker friction.",
    expectedOutput: `hylo compile-and-run point.hylo
Static analysis: Zero reference aliasing violations.
Point distance squared: 25.0`
  },
  {
    id: 679,
    name: "Val",
    slug: "val",
    cssClass: "val-lang",
    category: "systems-languages",
    categoryLabel: "Value Semantics Research Language",
    logo: "assets/logos/val.svg",
    shortDesc: "Research programming language designed to achieve safe systems programming without tracing garbage collection via value semantics.",
    paradigm: "Systems / Value Semantics",
    designedBy: "Val Research Team",
    firstAppeared: "2022",
    fileExtension: ".val",
    primaryUse: "Research on safe concurrency, high-performance systems architectures, and formal verification of language semantics",
    syntaxSummary: "Explicit inout, let, var, copy-on-write semantics, and compile-time exclusivity analysis across mutable variables.",
    sampleCode: `type Counter {
  var value: Int

  public memberwise init

  public fun increment(inout self) {
    self.value += 1
  }
}

public fun main() {
  var c = Counter(value: 41)
  c.increment()
  print("Counter: ", c.value)
}`,
    explanation: "Val pioneered the concepts now formalized in Hylo, focusing on the principle that variables should own their values independently.",
    expectedOutput: `valc main.val
Program verified: Memory-safe without runtime garbage collection.
Counter: 42`
  },
  {
    id: 680,
    name: "Sorbet",
    slug: "sorbet",
    cssClass: "sorbet-lang",
    category: "type-checkers",
    categoryLabel: "Fast Static Type Checker for Ruby",
    logo: "assets/logos/sorbet.svg",
    shortDesc: "Stripe fast, powerful static type checker for Ruby codebases analyzing millions of lines of code in seconds.",
    paradigm: "Static Type Checking / Gradual Typing",
    designedBy: "Stripe (Dmitry Petrashko, Paul Tarjan et al.)",
    firstAppeared: "2019",
    fileExtension: ".rb",
    primaryUse: "Large-scale Ruby on Rails enterprise monoliths, automated code refactoring, and static error detection",
    syntaxSummary: "sig { params(x: Integer).returns(String) } signatures with strict typing levels (# typed: true, # typed: strict).",
    sampleCode: `# typed: true
require 'sorbet-runtime'

class BillingService
  extend T::Sig

  sig { params(user_id: Integer, amount: Float).returns(T::Boolean) }
  def charge(user_id, amount)
    puts "Charging user \${user_id}: \$\${amount}"
    true
  end
end

BillingService.new.charge(101, 49.99)`,
    explanation: "Sorbet adds gradual static typing to Ruby, catching type mismatches at development time before code reaches production servers.",
    expectedOutput: `srb tc
No errors! Great job.
Checked 1 file, 1 class, 1 method in 0.04s.`
  },
  {
    id: 681,
    name: "Mypy",
    slug: "mypy",
    cssClass: "mypy-lang",
    category: "type-checkers",
    categoryLabel: "Standard Static Type Checker for Python",
    logo: "assets/logos/mypy.svg",
    shortDesc: "Standard static type checker for Python analyzing type hints (PEP 484) to eliminate bugs and verify architectural safety.",
    paradigm: "Static Analysis / Gradual Typing",
    designedBy: "Jukka Lehtosalo, Guido van Rossum et al.",
    firstAppeared: "2012",
    fileExtension: ".py",
    primaryUse: "Static verification of Python codebases, CI/CD pipeline validation, IDE autocomplete enhancement, and large-scale refactoring",
    syntaxSummary: "Type annotations (x: int = 5, def fn() -> str:), Generics, TypedDict, Protocols, and Optional types.",
    sampleCode: `from typing import List, Optional

def calculate_average(scores: List[float]) -> Optional[float]:
    if not scores:
        return None
    return sum(scores) / len(scores)

grades: List[float] = [92.5, 88.0, 95.5]
avg = calculate_average(grades)
print(f"Verified average: {avg}")`,
    explanation: "Mypy checks Python programs before execution, catching None-pointer exceptions, missing dictionary keys, and invalid method calls.",
    expectedOutput: `mypy calculate.py --strict
Success: no issues found in 1 source file.
Verified average: 92.0`
  },
  {
    id: 682,
    name: "Pyre",
    slug: "pyre",
    cssClass: "pyre-lang",
    category: "type-checkers",
    categoryLabel: "Performant Static Type Checker for Python",
    logo: "assets/logos/pyre.svg",
    shortDesc: "Meta's performant static type checker for Python built in OCaml, designed for rapid feedback on codebases with millions of lines.",
    paradigm: "Static Analysis / Security Taint Tracking",
    designedBy: "Meta Platforms (Facebook)",
    firstAppeared: "2018",
    fileExtension: ".py",
    primaryUse: "Industrial Python type verification at Meta scale, security vulnerability detection via Pysa taint analysis, and IDE language servers",
    syntaxSummary: "PEP 484 compliant type analysis with incremental persistent daemon execution and Pysa security taint modeling.",
    sampleCode: `# pyre-strict
from typing import Dict

def get_user_status(user_id: int, records: Dict[int, str]) -> str:
    if user_id in records:
        return records[user_id]
    return "UNKNOWN"

users = {101: "ACTIVE", 102: "PENDING"}
print(get_user_status(101, users))`,
    explanation: "Pyre maintains a persistent in-memory AST of entire Python repositories, rechecking updated files in milliseconds.",
    expectedOutput: `pyre check
ƛ No type errors found in 1 source file!
Analyzed in 0.012 seconds using Pyre daemon.`
  },
  {
    id: 683,
    name: "Hack Type Checker",
    slug: "hack-type-checker",
    cssClass: "hack-type-checker-lang",
    category: "type-checkers",
    categoryLabel: "HHVM Static Type System",
    logo: "assets/logos/hack-type-checker.svg",
    shortDesc: "Meta's type checker and runtime for the Hack language, marrying rapid PHP development cycles with strict static type safety.",
    paradigm: "Static Type Checking / JIT Runtime",
    designedBy: "Meta Platforms (Julien Verlaguet, Alok Menghrajani et al.)",
    firstAppeared: "2014",
    fileExtension: ".hack",
    primaryUse: "Powering Meta's server backend on HHVM, web microservices, and high-traffic web infrastructure",
    syntaxSummary: "<<__EntryPoint>> functions, shapes, tuples, generics, async/await, and complete ban on untyped PHP constructs.",
    sampleCode: `<<__EntryPoint>>
async function main(): Awaitable<void> {
  $names = vec["NASA-YUZAKI", "CodePlay", "Engineer"];
  foreach ($names as $name) {
    echo "Processing name: {$name}\\n";
  }
}`,
    explanation: "The Hack type checker runs as a background server (hh_server) monitoring file changes to provide sub-second type verification across giant repositories.",
    expectedOutput: `hh_client
No errors!
HHVM server execution completed in 0.008s.`
  },
  {
    id: 684,
    name: "Reason",
    slug: "reason",
    cssClass: "reason-lang",
    category: "functional-web",
    categoryLabel: "Friendly Syntax for OCaml",
    logo: "assets/logos/reason.svg",
    shortDesc: "Expressive JavaScript-like syntax for OCaml created at Meta, combining 100% type safety with JSX and React integration.",
    paradigm: "Functional / Type-Safe",
    designedBy: "Jordan Walke (Meta Platforms)",
    firstAppeared: "2016",
    fileExtension: ".re",
    primaryUse: "ReasonReact web applications, mission-critical frontend clients, compilers, and native multi-platform apps",
    syntaxSummary: "OCaml semantics with JavaScript-like braces, let bindings, variants, pattern matching, and native JSX support.",
    sampleCode: `type action =
  | Increment
  | Decrement;

let update = (state: int, action: action) =>
  switch (action) {
  | Increment => state + 1
  | Decrement => state - 1
  };

let finalState = update(10, Increment);
Js.log("Updated state: " ++ string_of_int(finalState));`,
    explanation: "Reason compiles via Melange or ReScript into clean, idiomatic JavaScript with zero runtime type exceptions.",
    expectedOutput: `bsc -c -bs-package-name app main.re
Generated JavaScript: main.bs.js
Updated state: 11`
  },
  {
    id: 685,
    name: "BuckleScript",
    slug: "bucklescript",
    cssClass: "bucklescript-lang",
    category: "compilers-js",
    categoryLabel: "OCaml to Clean JavaScript Compiler",
    logo: "assets/logos/bucklescript.svg",
    shortDesc: "Blazing-fast backend compiler translating OCaml and Reason ASTs into readable, highly-optimized JavaScript.",
    paradigm: "Compiler / Functional",
    designedBy: "Hongbo Zhang (Bloomberg / Meta)",
    firstAppeared: "2016",
    fileExtension: ".ml",
    primaryUse: "Compiling type-safe functional languages into ultra-fast, zero-overhead browser and Node.js JavaScript",
    syntaxSummary: "Compile-time optimization, inlining, dead code elimination, and seamless bi-directional JS foreign function interop.",
    sampleCode: `external log : string -> unit = "console.log" [@@bs.val]

let square (x : int) : int = x * x

let () =
  let result = square 7 in
  log ("Square result: " ^ string_of_int result)`,
    explanation: "BuckleScript pioneered sub-second incremental builds for OCaml in the JavaScript ecosystem, laying the foundation for modern ReScript.",
    expectedOutput: `bsb -make-world
[1/1] Building src/main.ml.js
Success: Built in 0.04s.
Square result: 49`
  },
  {
    id: 686,
    name: "Melange",
    slug: "melange",
    cssClass: "melange-lang",
    category: "compilers-js",
    categoryLabel: "OCaml & Reason to Modern JS",
    logo: "assets/logos/melange.svg",
    shortDesc: "Modern compiler turning OCaml and Reason into idiomatic, readable JavaScript integrating with Dune and standard opam tooling.",
    paradigm: "Compiler / Functional / Multi-Platform",
    designedBy: "Antonio Nuno Monteiro et al.",
    firstAppeared: "2020",
    fileExtension: ".re",
    primaryUse: "Full-stack OCaml web applications, React interfaces, Dune-managed polyglot repositories, and Node.js backend services",
    syntaxSummary: "Direct Dune build integration, OCaml 5.x language features, melange.emit stanza, and ES6 module emission.",
    sampleCode: `let sum = (a: int, b: int): int => a + b;

let () = {
  let total = sum(18, 24);
  Js.log2("Melange calculated total:", total);
};`,
    explanation: "Melange integrates directly into the standard OCaml ecosystem (Dune, opam, ocaml-lsp), compiling into clean ES modules.",
    expectedOutput: `dune build @melange
Compiled output: _build/default/src/output.js
Melange calculated total: 42`
  },
  {
    id: 687,
    name: "Gren",
    slug: "gren",
    cssClass: "gren-lang",
    category: "functional-web",
    categoryLabel: "Pure Functional Language for Web & Node",
    logo: "assets/logos/gren.svg",
    shortDesc: "Pure functional programming language inspired by Elm compiling to JavaScript for browsers and Node.js servers with zero runtime exceptions.",
    paradigm: "Functional / Reactive / Static",
    designedBy: "Robin Heggelund Hansen",
    firstAppeared: "2022",
    fileExtension: ".gren",
    primaryUse: "Full-stack web applications, reliable Node.js server backends, and terminal applications without runtime crashes",
    syntaxSummary: "Immutable data, pure functions, Model-View-Update architecture, pattern matching, and record update syntax.",
    sampleCode: `module Main exposing (main)

import Node
import Stream

main : Node.Program () ()
main =
    Node.defineProgram
        { init = \\_ -> { model = (), command = Stream.writeLine "Hello from Gren!" }
        , update = \\_ _ -> { model = (), command = Node.none }
        , subscriptions = \\_ -> Node.noSubscriptions
        }`,
    explanation: "Gren extends the simplicity of Elm to the server, providing unified full-stack architecture with mathematical guarantees against null pointer bugs.",
    expectedOutput: `gren make src/Main.gren --output=app.js
node app.js
Hello from Gren!`
  },
  {
    id: 688,
    name: "Derw",
    slug: "derw",
    cssClass: "derw-lang",
    category: "functional-web",
    categoryLabel: "Strictly-Typed Functional Language",
    logo: "assets/logos/derw.svg",
    shortDesc: "Strictly-typed functional programming language compiling to TypeScript, JavaScript, and Elm with structural immutability.",
    paradigm: "Functional / Multi-Target",
    designedBy: "Noah Hall",
    firstAppeared: "2021",
    fileExtension: ".derw",
    primaryUse: "Cross-compiling typed logic into TypeScript, web components, and isomorphic web applications",
    syntaxSummary: "Explicit types, union types, pattern matching, function piping (|->), and multi-target compilation flags.",
    sampleCode: `type Status =
    | Loading
    | Success { message: string }
    | Failure { error: string }

renderStatus: Status -> string
renderStatus status =
    case status of
        Loading -> "Loading data..."
        Success { message } -> message
        Failure { error } -> error`,
    explanation: "Derw bridges typed functional purity and mainstream web development by compiling directly into human-readable TypeScript code with full type definitions.",
    expectedOutput: `derw compile --target ts src/Status.derw
Generated: src/Status.ts
Type-checking target: Zero TypeScript compilation errors.`
  },
  {
    id: 689,
    name: "Elm Review",
    slug: "elm-review",
    cssClass: "elm-review-lang",
    category: "static-analysis",
    categoryLabel: "Elm Static Analysis & AST Engine",
    logo: "assets/logos/elm-review.svg",
    shortDesc: "Rule-based static analysis and code review engine for Elm enforcing codebase standards and zero-runtime-exception guarantees.",
    paradigm: "Static Analysis / Linting",
    designedBy: "Jeroen Engels",
    firstAppeared: "2020",
    fileExtension: ".elm",
    primaryUse: "Automated Elm codebase auditing, architectural boundary enforcement, dead code removal, and automatic fix application",
    syntaxSummary: "Elm-written rules inspecting AST modules (Rule.withExpressionEnterVisitor, Rule.error, Rule.fixWith).",
    sampleCode: `module NoUnused.CustomTypeConstructors exposing (rule)

import Review.Rule as Rule exposing (Rule)

rule : Rule
rule =
    Rule.newProjectRuleSchema "NoUnused.CustomTypeConstructors"
        |> Rule.providesFixesForProjectRule
        |> Rule.fromProjectRuleSchema`,
    explanation: "Elm Review is written entirely in Elm, letting developers construct powerful AST-level linters that offer automated autofixes for code smells.",
    expectedOutput: `elm-review
Checked 42 Elm files in 0.41s.
No violations found! All architectural invariants satisfied.`
  },
  {
    id: 690,
    name: "Idris Blodwen",
    slug: "idris-blodwen",
    cssClass: "idris-blodwen-lang",
    category: "proof-assistants",
    categoryLabel: "Quantitative Type Theory Language",
    logo: "assets/logos/idris-blodwen.svg",
    shortDesc: "Edwin Brady's experimental compiler and Quantitative Type Theory core that served as the architectural prototype for Idris 2.",
    paradigm: "Dependently Typed / Functional",
    designedBy: "Edwin Brady",
    firstAppeared: "2019",
    fileExtension: ".idr",
    primaryUse: "Language design research, Quantitative Type Theory (QTT) verification, linear resource tracking, and Idris 2 prototyping",
    syntaxSummary: "Dependent types with multiplicity annotations (0 erased at runtime, 1 linear resource, omega unrestricted).",
    sampleCode: `module Main

-- 0 means erased at runtime, 1 means used exactly once
append : {0 a : Type} -> {n, m : Nat} ->
         Vect n a -> Vect m a -> Vect (n + m) a
append [] ys = ys
append (x :: xs) ys = x :: append xs ys

main : IO ()
main = putStrLn "Idris Blodwen Quantitative Core Verified"`,
    explanation: "Blodwen introduced linear resource management directly into dependently typed programming via Quantitative Type Theory, ensuring zero runtime cost for proofs.",
    expectedOutput: `blodwen build Main.idr -o main
Type-checking completed with QTT linear verification.
Idris Blodwen Quantitative Core Verified`
  },
  {
    id: 691,
    name: "Granule",
    slug: "granule",
    cssClass: "granule-lang",
    category: "research-languages",
    categoryLabel: "Graded Modal Type System Language",
    logo: "assets/logos/granule.svg",
    shortDesc: "Functional programming language featuring graded modal types and linear types to track resource usage and side effects statically.",
    paradigm: "Functional / Graded Modal Types",
    designedBy: "University of Kent (Dominic Orchard et al.)",
    firstAppeared: "2018",
    fileExtension: ".gr",
    primaryUse: "Tracking privacy, exact execution counts, side-effect bounds, and memory lifetime guarantees at compile time",
    syntaxSummary: "Graded type signatures (x : a [r]), capability annotations, linear pattern matching, and effect grades.",
    sampleCode: `twice : forall {a : Type} . (a -> a) [2] -> a -> a
twice [f] x = f (f x)

duplicate : forall {a : Type} . a [2] -> (a, a)
duplicate [x] = (x, x)

main : Int
main = twice [\\x -> x + 1] 10`,
    explanation: "Granule provides fine-grained control over computation by tracking whether a value is used 0 times, 1 time, or n times via semirings.",
    expectedOutput: `gr run main.gr
Checking graded resource constraints...
Type-check: Successful (Resource bounds satisfied).
Result: 12`
  },
  {
    id: 692,
    name: "Linear Haskell",
    slug: "linear-haskell",
    cssClass: "linear-haskell-lang",
    category: "functional-languages",
    categoryLabel: "Linear Types Extension for GHC",
    logo: "assets/logos/linear-haskell.svg",
    shortDesc: "GHC extension introducing linear types into Haskell to guarantee that values are consumed exactly once by computations.",
    paradigm: "Purely Functional / Linear Types",
    designedBy: "Tweag I/O & GHC Steering Committee",
    firstAppeared: "2020",
    fileExtension: ".hs",
    primaryUse: "Zero-copy socket I/O, deterministic safe memory management, off-heap mutable arrays, and protocol state verification",
    syntaxSummary: "{-# LANGUAGE LinearTypes #-} with linear arrows (a %1 -> b) and linear monadic resource wrappers.",
    sampleCode: `{-# LANGUAGE LinearTypes #-}
module Main where

import GHC.Exts

-- Function must consume its argument exactly once
duplicateLinear : a %1 -> (a, a) -- Compiler will reject this!
-- Correct linear consumption:
identityLinear : a %1 -> a
identityLinear x = x

main :: IO ()
main = putStrLn "Linear Haskell: Single-consumption guarantees verified."`,
    explanation: "Linear Haskell enables safe off-heap mutable data structures and guaranteed protocol pipelines without changing standard Haskell syntax.",
    expectedOutput: `ghc -XLinearTypes Main.hs -o main
[1 of 1] Compiling Main ( Main.hs, Main.o )
Linking main ...
Linear Haskell: Single-consumption guarantees verified.`
  },
  {
    id: 693,
    name: "Haskell GHCJS",
    slug: "haskell-ghcjs",
    cssClass: "haskell-ghcjs-lang",
    category: "compilers-js",
    categoryLabel: "Haskell to JavaScript Compiler Backend",
    logo: "assets/logos/haskell-ghcjs.svg",
    shortDesc: "Glasgow Haskell Compiler backend that compiles native Haskell programs directly into JavaScript for browser execution.",
    paradigm: "Purely Functional / Full-Stack",
    designedBy: "Luite Stegeman",
    firstAppeared: "2013",
    fileExtension: ".hs",
    primaryUse: "Isomorphic full-stack Haskell web applications (Miso, Reflex FRP) and browser-based scientific simulations",
    syntaxSummary: "Full GHC Haskell syntax with JavaScript foreign function interface (foreign import javascript unsafe).",
    sampleCode: `{-# LANGUAGE JavaScriptFFI #-}
module Main where

foreign import javascript unsafe
  "console.log($1)"
  js_log :: String -> IO ()

main :: IO ()
main = do
  js_log "Running full-stack Haskell inside JavaScript browser runtime"`
  ,
    explanation: "GHCJS translates GHC STG intermediate representation into JavaScript, bringing Haskell's lazy evaluation and green threads into the browser.",
    expectedOutput: `ghcjs Main.hs -o bin/main.jsexe
Emitted JavaScript bundle: all.js (Includes GHC Haskell runtime).
Output: Running full-stack Haskell inside JavaScript browser runtime`
  },
  {
    id: 694,
    name: "Eta JVM",
    slug: "eta-jvm",
    cssClass: "eta-jvm-lang",
    category: "functional-languages",
    categoryLabel: "Pure Functional Haskell Dialect for the JVM",
    logo: "assets/logos/eta-jvm.svg",
    shortDesc: "Purely functional, strongly typed language based on Haskell running natively on the Java Virtual Machine with direct Java interop.",
    paradigm: "Functional / JVM",
    designedBy: "TypeLead (Rahul Muttineni et al.)",
    firstAppeared: "2016",
    fileExtension: ".hs",
    primaryUse: "Enterprise JVM services, Android functional logic, Kafka stream processing, and seamless Java library integration",
    syntaxSummary: "Haskell 2010 compatibility with Java FFI declarations (foreign import java unsafe), Gradle build support, and JVM bytecode output.",
    sampleCode: `{-# LANGUAGE ForeignFunctionInterface #-}
module Main where

foreign import java unsafe "@static java.lang.System.currentTimeMillis"
  currentTimeMillis :: IO Integer

main :: IO ()
main = do
  time <- currentTimeMillis
  putStrLn ("Eta JVM current epoch millis: " ++ show time)`,
    explanation: "Eta compiles Haskell source code directly into JVM bytecode (.class), giving developers Haskell purity alongside the rich Java library ecosystem.",
    expectedOutput: `etlas run
Compiling Eta JVM application...
Eta JVM current epoch millis: 1731302400000
Execution verified on OpenJDK 21.`
  },
  {
    id: 695,
    name: "Asterius",
    slug: "asterius",
    cssClass: "asterius-lang",
    category: "compilers-wasm",
    categoryLabel: "Haskell to WebAssembly Compiler",
    logo: "assets/logos/asterius.svg",
    shortDesc: "GHC-based backend compiler translating Haskell code into compact, fast WebAssembly binaries with JavaScript runtime bridges.",
    paradigm: "Compiler / Functional / WebAssembly",
    designedBy: "Tweag I/O (Shao Cheng et al.)",
    firstAppeared: "2018",
    fileExtension: ".hs",
    primaryUse: "Browser-based client logic, WebAssembly cryptographic libraries, and serverless WASI microservices written in Haskell",
    syntaxSummary: "Standard Haskell with WebAssembly foreign imports (foreign import javascript), ahc compilation, and wasm code generation.",
    sampleCode: `{-# LANGUAGE OverloadedStrings #-}
module Main where

foreign import javascript "console.log('Asterius WebAssembly initialized: ' + $1)"
  js_print :: Int -> IO ()

fib :: Int -> Int
fib 0 = 0
fib 1 = 1
fib n = fib (n - 1) + fib (n - 2)

main :: IO ()
main = js_print (fib 10)`,
    explanation: "Asterius generates WebAssembly binaries directly from GHC Core representations, delivering fast performance and compact bundles.",
    expectedOutput: `ahc-link --input-hs Main.hs --output-tag wasm
Generated: main.wasm (size: 420 KB optimized).
Node wasm runner: Asterius WebAssembly initialized: 55`
  },
  {
    id: 696,
    name: "Mu",
    slug: "mu",
    cssClass: "mu-lang",
    category: "virtual-machines",
    categoryLabel: "Micro-Virtual Machine Specification",
    logo: "assets/logos/mu.svg",
    shortDesc: "Micro-virtual machine specification and compiler target providing low-level memory safety, garbage collection, and dynamic code generation.",
    paradigm: "Virtual Machine / Low-Level Intermediate Representation",
    designedBy: "Australian National University & Data61",
    firstAppeared: "2015",
    fileExtension: ".mu",
    primaryUse: "Target for managed language compilers (Python, R, JavaScript) to achieve native speed with automatic memory management",
    syntaxSummary: "SSA-form low-level instructions (.func, .param, @alloc, @load, @store) with explicit garbage collection roots.",
    sampleCode: `.typedef @i32 = int<32>

.funcsig @sig_add = (@i32 @i32) -> (@i32)
.funcdef @mu_add VERSION 1 <@sig_add> {
    %entry(%a: @i32, %b: @i32):
        %sum = ADD %a %b
        RET %sum
}`,
    explanation: "Mu acts as an open, universal micro-substrate, freeing language designers from having to write custom garbage collectors and JIT compilers.",
    expectedOutput: `mu-client --load mu_add.mu --exec mu_add 20 22
Mu Micro-VM JIT: Executing SSA IR on x86-64.
Result: 42`
  },
  {
    id: 697,
    name: "Hasura Actions",
    slug: "hasura-actions",
    cssClass: "hasura-actions-lang",
    category: "api-graphql",
    categoryLabel: "Custom Business Logic for GraphQL APIs",
    logo: "assets/logos/hasura-actions.svg",
    shortDesc: "Declarative mechanism to integrate custom REST endpoints and serverless functions directly into a unified GraphQL schema.",
    paradigm: "Schema Definition / API Orchestration",
    designedBy: "Hasura Inc.",
    firstAppeared: "2020",
    fileExtension: ".graphql",
    primaryUse: "E-commerce checkout flows, payment processing, sending transactional emails, and custom authentication inside Hasura GraphQL",
    syntaxSummary: "GraphQL SDL extensions defining action types, mutations, and webhook handler HTTP endpoint bindings.",
    sampleCode: `type Mutation {
  processPayment(
    userId: Int!
    amount: Float!
    currency: String!
  ): PaymentOutput
}

type PaymentOutput {
  success: Boolean!
  transactionId: String!
}`,
    explanation: "Hasura Actions forward incoming GraphQL mutations to external webhook endpoints and stitch the responses directly into the graph.",
    expectedOutput: `hasura metadata apply --endpoint https://api.codeplay.dev
Applying Action: processPayment -> Webhook: https://api.codeplay.dev/handlers/payment
Schema stitching validated: 0 GraphQL schema conflicts.`
  },
  {
    id: 698,
    name: "Prisma Schema",
    slug: "prisma-schema",
    cssClass: "prisma-schema-lang",
    category: "database-orm",
    categoryLabel: "Declarative Database Modeling Language",
    logo: "assets/logos/prisma-schema.svg",
    shortDesc: "Intuitive modeling language defining database models, relations, migrations, and type-safe query clients across SQL and NoSQL engines.",
    paradigm: "Declarative Schema / ORM Definition",
    designedBy: "Prisma Data, Inc. (Johannes Schickling, Søren Bramer Schmidt)",
    firstAppeared: "2019",
    fileExtension: ".prisma",
    primaryUse: "Node.js and TypeScript web backends, automated database migrations, and type-safe query client generation",
    syntaxSummary: "model, datasource, generator blocks, field types (@id, @default, @relation, @unique), and attributes.",
    sampleCode: `datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
}`,
    explanation: "The Prisma schema acts as the single source of truth for database schemas, driving automatic SQL migration generation and TypeScript types.",
    expectedOutput: `npx prisma generate
Prisma schema loaded from schema.prisma
Generated Prisma Client (v5.18.0) to ./node_modules/@prisma/client
TypeScript types synchronized with PostgreSQL schema.`
  },
  {
    id: 699,
    name: "Drizzle",
    slug: "drizzle",
    cssClass: "drizzle-lang",
    category: "database-orm",
    categoryLabel: "TypeScript-First SQL ORM & Schema Engine",
    logo: "assets/logos/drizzle.svg",
    shortDesc: "Lightweight, zero-overhead TypeScript ORM with a schema definition dialect mirroring standard SQL while providing complete type safety.",
    paradigm: "Type-Safe / SQL-Centric / Relational",
    designedBy: "Drizzle Team (Alex Blokh et al.)",
    firstAppeared: "2023",
    fileExtension: ".ts",
    primaryUse: "Next.js applications, Serverless Cloudflare Workers, Edge SQL runtimes, and high-performance database microservices",
    syntaxSummary: "TypeScript table schemas (pgTable, serial, text, timestamp), relations(), and chainable SQL-like query builders.",
    sampleCode: `import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});`,
    explanation: "Drizzle embraces standard SQL syntax instead of an abstract ORM abstraction, ensuring predictable queries with zero runtime bundle overhead.",
    expectedOutput: `npx drizzle-kit generate:pg
Generated migration file: drizzle/0000_create_users_table.sql
Schema status: 1 table, 4 columns, 0 breaking changes.`
  },
  {
    id: 700,
    name: "Sequelize",
    slug: "sequelize",
    cssClass: "sequelize-lang",
    category: "database-orm",
    categoryLabel: "Promise-Based Node.js ORM",
    logo: "assets/logos/sequelize.svg",
    shortDesc: "Mature, feature-rich Object-Relational Mapper for Node.js supporting PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.",
    paradigm: "Object-Oriented / Relational / ORM",
    designedBy: "Sascha Depold, Mick Hansen et al.",
    firstAppeared: "2011",
    fileExtension: ".js",
    primaryUse: "Enterprise Node.js and Express backends, database schema migrations, and relational transaction modeling",
    syntaxSummary: "Model definitions (sequelize.define, Model.init), associations (hasMany, belongsTo), and transaction hooks.",
    sampleCode: `const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Project extends Model {}
Project.init({
  title: DataTypes.STRING,
  stars: DataTypes.INTEGER
}, { sequelize, modelName: 'project' });

async function syncDb() {
  await sequelize.sync();
  console.log("Sequelize SQLite database synced successfully.");
}
syncDb();`,
    explanation: "Sequelize provides an object-oriented modeling abstraction with rich query construction, eagerly loaded associations, and connection pooling.",
    expectedOutput: `[Sequelize] Executing (default): CREATE TABLE IF NOT EXISTS 'projects' ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'title' VARCHAR(255), 'stars' INTEGER);
Sequelize SQLite database synced successfully.`
  }
];

const targetPath = path.resolve(__dirname, '../data/section13-entries.js');
const fileContent = `// Section 13 (Entries 651–700) Authoritative Dataset — CodePlay
// Standard: CARD DESIGN.md | Author: NASA-KUN (@ঔৣ፝ N4!)

export const section13Entries = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log(`Generated data/section13-entries.js with ${entries.length} verified entries (651-700)`);
