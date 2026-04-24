export default function Q1() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={1} title="OS Fundamentals & Concepts" />

      {/* 1a */}
      <SubQuestion id="q1-a" label="1a" question="Define operating system and its goals.">
        <Definition title="Operating System — Definition & Introduction">
          <p>An Operating System (OS) is a system software that acts as an intermediary between computer hardware and the user. It is the most critical program that runs on a computer — every general-purpose computer must have an operating system to run other programs and applications. The OS manages all hardware resources (CPU, memory, disk, I/O devices) and provides a systematic, controlled, and consistent interface for application programs to access these resources.</p>
          <p className="mt-3">Think of the operating system as a <strong>government of a country</strong>. Just as a government manages the resources of a nation, allocates funds to different departments, enforces laws, resolves disputes, and provides services to citizens, an operating system manages hardware resources, allocates CPU time and memory to processes, enforces access control, resolves resource conflicts, and provides services to user applications. Without a government, a nation would descend into chaos; similarly, without an OS, a computer would be an unusable collection of electronic components.</p>
        </Definition>

        <CoreConcepts title="Core Concepts — Goals of an Operating System">
          <p>The primary goals of an operating system can be broadly categorized into two perspectives: <strong>(1) User Perspective</strong> and <strong>(2) System Perspective</strong>.</p>
          <div className="mt-3 space-y-2">
            <p><strong>From the User's Perspective:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li><strong>Convenience:</strong> The OS should make the computer easy and convenient to use. A user should not need to understand disk scheduling or memory management to browse the web or write a document.</li>
              <li><strong>Ease of Use:</strong> Provide Graphical User Interfaces (GUIs), command-line interfaces, and application programming interfaces (APIs) that simplify interaction with the computer.</li>
              <li><strong>Reliability:</strong> The system should operate without errors and crashes, providing a stable environment for user applications.</li>
            </ul>
          </div>
          <div className="mt-3 space-y-2">
            <p><strong>From the System's Perspective:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
              <li><strong>Efficiency:</strong> Maximize the utilization of all hardware resources — CPU, memory, and I/O devices. The OS ensures that no resource sits idle when there is work to do.</li>
              <li><strong>Resource Management:</strong> Manage CPU time (scheduling), memory space (allocation/deallocation), disk space (file systems), and I/O devices (device drivers, spooling).</li>
              <li><strong>Throughput:</strong> Maximize the number of tasks completed per unit time.</li>
              <li><strong>Fairness:</strong> Ensure that all processes get a fair share of resources, preventing any single process from monopolizing the system.</li>
              <li><strong>Security & Protection:</strong> Prevent unauthorized access to data, programs, and hardware resources. Provide mechanisms for user authentication, access control, and data encryption.</li>
            </ul>
          </div>
          <p className="mt-3">The fundamental trade-off in OS design is between <strong>convenience</strong> and <strong>efficiency</strong>. A system optimized for user convenience (like a graphical OS) may sacrifice some raw performance, while a system optimized for efficiency (like a real-time OS) may be less user-friendly.</p>
        </CoreConcepts>

        <DiagramSection title="Structured Component Diagram — OS Architecture Layers">
          <pre className="text-xs leading-relaxed">{`
┌─────────────────────────────────────────────────┐
│                  USER LAYER                      │
│   Applications, Utilities, User Programs         │
├─────────────────────────────────────────────────┤
│               SYSTEM CALL INTERFACE              │
├─────────────────────────────────────────────────┤
│                 OPERATING SYSTEM                 │
│  ┌──────────┬──────────┬──────────┬───────────┐ │
│  │ Process  │  Memory  │   I/O    │   File    │ │
│  │Management│Management│ Manager  │  System   │ │
│  ├──────────┴──────────┴──────────┴───────────┤ │
│  │            Protection & Security             │ │
│  ├─────────────────────────────────────────────┤ │
│  │          Kernel & System Services            │ │
│  └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│              HARDWARE LAYER                       │
│   CPU · RAM · Disk · Network · I/O Devices       │
└─────────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Resource Management in a Restaurant">
            <p className="text-sm">Imagine a busy restaurant. The <strong>OS is the restaurant manager</strong>, the <strong>CPU is the kitchen</strong>, the <strong>memory is the dining tables</strong>, and the <strong>processes are customer orders</strong>. The manager (OS) decides which orders (processes) get cooked first (CPU scheduling), which customers get seated at which tables (memory allocation), and ensures no kitchen equipment is sitting idle while orders pile up (resource utilization). The manager's goal is to keep all customers happy (convenience) while serving as many as possible (throughput/efficiency).</p>
          </Example>
          <Example num={2} title="Traffic Management System">
            <p className="text-sm">Consider a city traffic management system. The OS acts as the <strong>traffic controller</strong>. The roads are like the <strong>system bus</strong>, vehicles are like <strong>processes</strong>, and intersections are like <strong>shared resources</strong>. The controller ensures vehicles move efficiently (throughput), no intersection gets gridlocked (deadlock prevention), emergency vehicles get priority (scheduling with priorities), and traffic rules are enforced (protection and security). Without the controller, chaos would reign — accidents, gridlock, and inefficient movement.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "An OS is system software that manages hardware and provides services to application programs.",
          "Primary goals: Convenience (user perspective) and Efficiency (system perspective).",
          "Key functions: Process management, Memory management, I/O management, File system management, Protection & Security.",
          "The OS acts as a resource manager, allocating CPU time, memory, and I/O devices to competing processes.",
          "OS provides abstraction — hides hardware complexity behind simple interfaces (system calls, APIs).",
          "Examples: Windows, Linux, macOS, Android, iOS — each designed with different goals (desktop, server, mobile).",
          "The kernel is the core part of the OS that runs in privileged mode (kernel mode) with full hardware access.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1b */}
      <SubQuestion id="q1-b" label="1b" question="Differentiate between monolithic and micro kernel.">
        <Definition title="Kernel Architecture — Introduction">
          <p>The <strong>kernel</strong> is the core component of an operating system that has complete control over everything in the system. It is the first program loaded on system startup and remains in memory throughout the system's operation. The kernel manages hardware devices, allocates system resources, handles memory management, CPU scheduling, and provides an interface for user programs to request services through system calls.</p>
          <p className="mt-3">There are two primary kernel architectures: <strong>Monolithic Kernel</strong> and <strong>Micro Kernel</strong>. A <strong>Monolithic Kernel</strong> runs all essential OS services (file system, device drivers, network stack, etc.) in the kernel space — a single large block of code running in privileged mode. Think of it like a <strong>large factory</strong> where all operations happen under one roof. A <strong>Micro Kernel</strong>, on the other hand, strips the kernel down to only the most essential services (IPC, basic scheduling, memory management) and runs other services as user-space processes. Think of it like a <strong>small headquarters</strong> that coordinates independent departments.</p>
        </Definition>

        <ComparisonTable headers={["Aspect", "Monolithic Kernel", "Micro Kernel"]}
          rows={[
            ["Size", "Large (all services in kernel)", "Small (minimal services in kernel)"],
            ["Performance", "Fast (direct function calls)", "Slower (IPC overhead for communication)"],
            ["Design", "All OS services in kernel space", "Only essential services in kernel space"],
            ["Communication", "System calls directly invoke services", "Message passing via IPC"],
            ["Security", "Less secure (all in kernel mode)", "More secure (services in user mode)"],
            ["Stability", "One bug can crash entire system", "Failed service can be restarted; system stable"],
            ["Development", "Harder to debug and maintain", "Easier to develop, test, and debug"],
            ["Extensibility", "Adding features requires recompilation", "Easy to add services as user processes"],
            ["Examples", "Linux, MS-DOS, Unix, FreeBSD", "MINIX 3, QNX, L4, Mach, seL4"],
            ["Code Running", "Runs entirely in kernel mode", "Most runs in user mode"],
          ]}
        />

        <CoreConcepts title="Core Concepts — Why the Difference Matters">
          <p><strong>Monolithic Kernel — The "Big Bang" Approach:</strong> In a monolithic kernel, a single address space contains all the kernel code. When a user program makes a system call, it transitions to kernel mode via a trap/interrupt, and the kernel directly executes the requested service. Since everything is in one address space, function calls are direct and fast — no context switches or message passing overhead. However, a bug in ANY service (e.g., a faulty device driver) can corrupt the entire kernel and crash the system.</p>
          <p className="mt-3"><strong>Micro Kernel — The "Minimalist" Approach:</strong> The micro kernel philosophy is: keep the kernel as small as possible. Only the bare essentials — inter-process communication (IPC), basic memory management, and CPU scheduling — run in kernel mode. All other services (file systems, device drivers, network protocols) run as separate user-level processes called "servers." If a file system crashes, it can be restarted without bringing down the entire system. The trade-off is performance: every service request requires message passing through the micro kernel, adding overhead.</p>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Monolithic — Linux Kernel">
            <p className="text-sm">Linux uses a monolithic kernel where the entire OS (VFS, TCP/IP stack, device drivers) runs in kernel space. This gives Linux excellent performance for server workloads. For example, when a web server reads a file, the read() system call goes directly to the file system code in the kernel — no intermediate message passing. However, a buggy graphics driver can cause a complete kernel panic (system crash).</p>
          </Example>
          <Example num={2} title="Micro Kernel — QNX in Automotive Systems">
            <p className="text-sm">QNX, a micro kernel OS, is used in cars (BMW, Tesla infotainment), medical devices, and industrial systems where reliability is paramount. If the audio system crashes, the navigation and safety-critical systems continue running independently because each runs as a separate user-space process. The micro kernel only handles basic scheduling and IPC, keeping the trusted computing base (TCB) extremely small and verifiable.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Monolithic kernel: All OS services run in kernel space → fast but less secure/stable.",
          "Micro kernel: Only essential services in kernel → slower (IPC overhead) but more secure/stable.",
          "Monolithic uses direct function calls; Micro kernel uses message passing.",
          "Monolithic examples: Linux, UNIX, FreeBSD. Micro kernel examples: QNX, MINIX 3, Mach.",
          "Hybrid kernels (like Windows NT) combine features of both approaches.",
          "Micro kernel is preferred for critical/real-time systems; monolithic for high-performance computing.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1c */}
      <SubQuestion id="q1-c" label="1c" question="Discuss principle of concurrency.">
        <Definition title="Principle of Concurrency — Definition & Introduction">
          <p><strong>Concurrency</strong> refers to the ability of an operating system to manage multiple processes or threads that are in execution simultaneously. These processes may or may not be executing at the exact same instant — concurrency means they are all making progress, with their execution overlapping in time. Concurrency is a fundamental principle in modern operating systems because it enables resource sharing, improved throughput, and better system responsiveness.</p>
          <p className="mt-3">Imagine a <strong>chef in a kitchen</strong> preparing multiple dishes. While one dish is simmering on the stove, the chef chops vegetables for another, and preheats the oven for a third. The chef isn't working on all dishes at the exact same instant, but all dishes are making progress toward completion. This is concurrency — interleaved execution that gives the illusion of simultaneous progress. On a multi-core processor, true parallelism is also possible where multiple processes execute simultaneously on different cores.</p>
        </Definition>

        <CoreConcepts title="Core Concepts — Why Concurrency Matters">
          <p>Concurrency introduces several fundamental challenges that the OS must address:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-sm mt-2">
            <li><strong>Shared Resource Access:</strong> Multiple processes may need to access the same memory, file, or device simultaneously. Without proper coordination, data corruption (race conditions) can occur.</li>
            <li><strong>Mutual Exclusion:</strong> When processes share a resource, they must take turns. The section of code where a process accesses shared resources is called the <strong>critical section</strong>, and only one process should be in its critical section at any given time.</li>
            <li><strong>Synchronization:</strong> Processes need mechanisms to coordinate their execution order — for example, a producer process must wait if the buffer is full, and a consumer must wait if the buffer is empty.</li>
            <li><strong>Deadlock & Starvation:</strong> Concurrent processes can enter states where they are all waiting for each other (deadlock) or where a process is perpetually denied access to resources (starvation).</li>
            <li><strong>Non-determinism:</strong> The exact order of execution of concurrent processes is unpredictable, making bugs difficult to reproduce and debug.</li>
          </ul>
          <p className="mt-3">The principle of concurrency is realized through mechanisms like <strong>semaphores, mutexes, monitors, condition variables,</strong> and <strong>message passing</strong>. The OS provides these as primitives for programmers to coordinate concurrent execution safely.</p>
        </CoreConcepts>

        <DiagramSection title="Concurrency Visualization — Interleaved Execution">
          <pre className="text-xs leading-relaxed">{`
Time ──────────────────────────────────────────────►

Process P1: |===|   |=======|   |===|   |====|
Process P2:    |====|   |===|   |======|   |==|
Process P3:       |==|   |=====|   |===|   |====|

Legend: === = Executing   | = Context Switch
Note: On a single CPU, processes share time via interleaving.
      On multi-core, P1, P2, P3 may truly run in parallel.

Benefits of Concurrency:
┌──────────────────────────────────────────────┐
│  • Resource Sharing — multiple programs share │
│    CPU, memory, and I/O devices              │
│  • Increased Throughput — more work per unit  │
│    time                                       │
│  • Improved Responsiveness — user can interact│
│    while background tasks run                 │
│  • Better Utilization — CPU busy while I/O   │
│    operations complete for other processes    │
└──────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Web Server Handling Multiple Requests">
            <p className="text-sm">A web server like Apache handles hundreds of concurrent client requests. When User A requests a webpage, User B uploads a file, and User C queries a database — all happen concurrently. The OS schedules these requests across threads/processes, ensuring responsive service for all users. Without concurrency, users would have to wait in a queue — User B waits until User A's request fully completes.</p>
          </Example>
          <Example num={2} title="Banking System — Race Condition">
            <p className="text-sm">Consider a joint bank account with ₹50,000 balance. Both account holders simultaneously withdraw ₹30,000 from different ATMs. Without concurrency control: ATM-1 reads balance (₹50,000), ATM-2 reads balance (₹50,000), ATM-1 deducts ₹30,000 → writes ₹20,000, ATM-2 deducts ₹30,000 → writes ₹20,000. Final balance: ₹20,000 instead of expected result (which should fail for one transaction). This is a <strong>race condition</strong> — concurrency control (locks, transactions) prevents this.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Concurrency = managing multiple processes/threads making simultaneous progress.",
          "Key challenges: Race conditions, mutual exclusion, deadlock, starvation.",
          "Mechanisms: Semaphores, Mutexes, Monitors, Condition Variables.",
          "Concurrency ≠ Parallelism: Concurrency is about structure; parallelism is about simultaneous execution.",
          "Benefits: Better resource utilization, increased throughput, improved responsiveness.",
          "Critical section problem is the central challenge of concurrency.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1d */}
      <SubQuestion id="q1-d" label="1d" question="Describe the solution to critical-section problem in brief.">
        <Definition title="Critical-Section Problem — Introduction">
          <p>The <strong>critical-section problem</strong> is one of the most fundamental problems in concurrent programming. When multiple processes execute concurrently and share data or resources, they may each have a segment of code — called the <strong>critical section</strong> — where they access and modify shared variables or resources. The challenge is to ensure that when one process is executing in its critical section, no other process is allowed to execute in its critical section simultaneously. This prevents race conditions and data inconsistency.</p>
          <p className="mt-3">Think of it like a <strong>shared bathroom in a house</strong>. Only one person can use it at a time. You need a mechanism (a lock on the door) to ensure exclusive access. The person enters (entry section), uses the bathroom (critical section), and exits (exit section). The rest of the time, they're doing other things (remainder section). The lock must ensure that no two people enter simultaneously, everyone eventually gets a turn, and the lock itself doesn't malfunction.</p>
        </Definition>

        <CoreConcepts title="Three Required Conditions for a Valid Solution">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">1. Mutual Exclusion</p>
              <p>If process Pi is executing in its critical section, then no other processes can be executing in their critical sections. This is the fundamental guarantee.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">2. Progress</p>
              <p>If no process is executing in its critical section and some processes wish to enter their critical sections, then only those processes that are NOT executing in their remainder section can participate in the decision, and this decision cannot be postponed indefinitely.</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800">3. Bounded Waiting</p>
              <p>There exists a bound on the number of times other processes can enter their critical sections after a process has made a request to enter its critical section and before that request is granted. This prevents starvation.</p>
            </div>
          </div>
        </CoreConcepts>

        <DiagramSection title="Process Structure for Critical Section">
          <pre className="text-xs leading-relaxed">{`
Each process Pi follows this structure:

┌─────────────────────────────┐
│     ENTRY SECTION            │ ← Request permission to enter
│  (acquire lock / wait)       │
├─────────────────────────────┤
│     CRITICAL SECTION         │ ← Access shared resource
│  (access shared variables)   │
├─────────────────────────────┤
│     EXIT SECTION             │ ← Release lock / signal others
│  (release lock / signal)     │
├─────────────────────────────┤
│     REMAINDER SECTION        │ ← Other computation
│  (non-critical work)         │
└─────────────────────────────┘

Solutions (in order of evolution):
1. Disabling Interrupts (single CPU only)
2. Peterson's Algorithm (software-based, 2 processes)
3. Hardware Instructions: TestAndSet, Swap/Compare-and-Swap
4. Semaphores (Dijkstra, 1965)
5. Mutex Locks
6. Monitors (high-level synchronization)
          `}</pre>
        </DiagramSection>

        <AlgorithmSection title="Algorithm — Peterson's Solution (Two Processes)">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// Shared variables
boolean flag[2] = {false, false};  // Interest flag
int turn = 0;                       // Whose turn it is

// Process Pi (where j = 1 - i)
do {
    flag[i] = true;           // I want to enter
    turn = j;                  // Give other process a chance
    while (flag[j] && turn == j);  // Wait if other wants in & it's their turn
                                     // (BUSY WAIT)

    // ── CRITICAL SECTION ──
    // Access shared resources here

    flag[i] = false;          // I'm done, leaving critical section

    // ── REMAINDER SECTION ──
} while (true);

// Satisfies all three conditions:
// ✅ Mutual Exclusion: If both try to enter, turn decides who goes first
// ✅ Progress: If Pj doesn't want to enter, flag[j]=false, Pi enters
// ✅ Bounded Waiting: At most one alternation of turns required`}</pre>
        </AlgorithmSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Printer Sharing Between Two Computers">
            <p className="text-sm">Two computers share one printer. When Computer A sends a print job, it sets flag[A]=true and turn=B. If Computer B is also printing, Computer A waits (busy-waiting). Once Computer B finishes, it sets flag[B]=false, allowing Computer A to proceed. This ensures the printer is never used by both simultaneously (mutual exclusion), no unnecessary waiting when idle (progress), and neither computer waits forever (bounded waiting).</p>
          </Example>
          <Example num={2} title="Railway Track Sharing">
            <p className="text-sm">Two trains need to share a single-track section. A semaphore acts as the signal: when Train A approaches, it acquires the semaphore (signal turns red for Train B). Train A passes through the single track (critical section). After exiting, Train A releases the semaphore (signal turns green), allowing Train B to proceed. If both arrive simultaneously, the semaphore ensures only one enters, preventing collision (mutual exclusion).</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Critical section = code segment where shared resources are accessed.",
          "Three conditions: Mutual Exclusion, Progress, Bounded Waiting.",
          "Software solutions: Peterson's algorithm (satisfies all 3 conditions for 2 processes).",
          "Hardware solutions: TestAndSet, Compare-and-Swap (atomic instructions).",
          "OS-level solutions: Semaphores, Mutex locks, Monitors.",
          "Race condition occurs when outcome depends on execution order — critical section prevents this.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1e */}
      <SubQuestion id="q1-e" label="1e" question="Draw process state transaction diagram.">
        <Definition title="Process States — Introduction">
          <p>A <strong>process</strong> is a program in execution. As a process executes, it transitions through various states, from creation to termination. The operating system manages these state transitions as the process moves through its lifecycle. Understanding process states is crucial for comprehending how the OS schedules processes, manages resources, and handles events like I/O operations and interrupts.</p>
          <p className="mt-3">Think of a process like a <strong>student in a university system</strong>. The student applies (New), gets admitted and is ready for classes (Ready), is currently attending a lecture (Running), waits for the library to open (Waiting/Blocked), and eventually graduates (Terminated). At any point, the registrar's office (OS) knows exactly which state each student is in and manages transitions between states.</p>
        </Definition>

        <DiagramSection title="Process State Transition Diagram (5-State Model)">
          <pre className="text-xs leading-relaxed">{`
                         ┌───────────┐
                         │   NEW     │ (Process being created)
                         │(Created)  │
                         └─────┬─────┘
                               │ Admitted
                               ▼
                    ┌──────────────────────┐
          ┌────────►│       READY          │◄───────┐
          │         │  (Waiting for CPU)    │        │
          │         └──────────┬───────────┘        │
          │                    │ Scheduler Dispatch   │
          │         ┌──────────▼───────────┐        │
          │    ┌────│      RUNNING         │────┐   │
          │    │    │  (Executing on CPU)  │    │   │
          │    │    └──────────┬───────────┘    │   │
          │    │               │                │   │
          │    │  Interrupt/  │ I/O or         │   │
          │    │  Time Slice  │ Event Wait     │   │
          │    │               │                │   │
          │    │               ▼                │   │
          │    │    ┌──────────────────────┐    │   │
          │    │    │   WAITING/BLOCKED    │    │   │
          │    │    │ (Waiting for event)   │    │   │
          │    │    └──────────┬───────────┘    │   │
          │    │               │                │   │
          │    │     I/O Complete /            │   │
          │    │     Event Occurs              │   │
          │    │               │                │   │
          │    └───────────────┘    Exit        │   │
          │                         │            │   │
          │               ┌────────▼──────────┐ │   │
          │               │   TERMINATED       │─┘   │
          │               │  (Process ended)   │     │
          │               └───────────────────┘     │
          │                                           │
          └───────── Preemption ─────────────────────┘

STATE TRANSITIONS:
1. New → Ready       : Process is admitted to the ready queue
2. Ready → Running   : Scheduler selects process for CPU allocation
3. Running → Ready   : Time slice expires (preemption) or interrupt
4. Running → Waiting : Process requests I/O, waits for event/child
5. Waiting → Ready   : I/O completes or awaited event occurs
6. Running → Terminated: Process completes execution or is killed
          `}</pre>
        </DiagramSection>

        <CoreConcepts title="Detailed State Descriptions">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <p className="font-bold text-amber-800">1. New State</p>
              <p>The process is being created. The OS allocates resources, creates the Process Control Block (PCB), and initializes the process. The process is not yet ready to execute.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">2. Ready State</p>
              <p>The process is loaded into main memory and is waiting to be assigned to a processor. Multiple processes may be in the ready queue simultaneously, and the short-term scheduler decides which one runs next.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">3. Running State</p>
              <p>The process has been selected by the scheduler and is executing on the CPU. In a single-processor system, only ONE process can be in the running state at any time.</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">4. Waiting/Blocked State</p>
              <p>The process cannot execute until some event occurs (e.g., I/O completion, resource availability, child process termination). It is moved out of the ready queue and placed in a waiting queue.</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-300">
              <p className="font-bold text-slate-800">5. Terminated State</p>
              <p>The process has finished execution (normal exit, error exit, or killed by another process). The OS deallocates resources and removes the PCB.</p>
            </div>
          </div>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Word Processor Application">
            <p className="text-sm">When you click MS Word icon: process is created (New). OS loads it into memory (Ready). CPU starts executing Word's code (Running). You click "Save" → Word initiates disk write, waits for I/O (Waiting/Blocked). Disk write completes (Ready). Word resumes (Running). You close Word (Terminated).</p>
          </Example>
          <Example num={2} title="Compiler Processing Multiple Files">
            <p className="text-sm">A compiler is compiling 5 source files. File 1 is being compiled (Running). Its time slice expires → moved to Ready queue. File 2 starts compiling (Running). File 2 needs to read from disk → moved to Waiting. File 3 starts (Running). When File 2's disk read completes, File 2 moves back to Ready, waiting for CPU. This cycle continues until all files are compiled.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Five states: New, Ready, Running, Waiting/Blocked, Terminated.",
          "Only one process can be Running on a single-CPU system at any time.",
          "Ready → Running transition is made by the short-term scheduler (CPU scheduler).",
          "Running → Waiting occurs when process requests I/O or waits for an event.",
          "Running → Ready occurs due to preemption (time slice expiry or higher priority process).",
          "The PCB (Process Control Block) stores all information about a process including its current state.",
          "A 7-state model adds 'Suspended Ready' and 'Suspended Blocked' for swapped-out processes.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1f */}
      <SubQuestion id="q1-f" label="1f" question="What are the characteristics of Deadlock?">
        <Definition title="Deadlock — Definition & Introduction">
          <p><strong>Deadlock</strong> is a situation in concurrent computing where a set of processes are permanently blocked because each process holds a resource and waits to acquire a resource held by another process in the same set. No process can proceed, no process can release its resources, and the system appears to hang indefinitely. Deadlock is a critical problem in operating systems that can bring the entire system to a standstill.</p>
          <p className="mt-3">Imagine a <strong>narrow bridge where two cars meet in the middle</strong>. Car A is heading north and occupies the south-bound lane; Car B is heading south and occupies the north-bound lane. Neither car can move forward (the other car is in the way), and neither car can move backward (there's traffic behind it). Both cars are stuck — this is deadlock. Similarly, in an OS, Process A holds Printer and needs Scanner; Process B holds Scanner and needs Printer. Neither will release its resource, and both wait forever.</p>
        </Definition>

        <CoreConcepts title="Four Necessary Conditions (Coffman Conditions)">
          <p className="mb-3 text-sm font-semibold">Deadlock can occur if and only if ALL FOUR conditions hold simultaneously:</p>
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">1. Mutual Exclusion</p>
              <p>At least one resource must be held in a non-shareable mode. Only one process can use the resource at any given time. If another process requests that resource, it must wait. Example: A printer cannot be shared simultaneously by two processes.</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <p className="font-bold text-orange-800">2. Hold and Wait</p>
              <p>A process must be holding at least one resource and simultaneously waiting to acquire additional resources held by other processes. The process does not release its currently held resources while waiting. Example: Process holds a tape drive and waits for a printer.</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <p className="font-bold text-yellow-800">3. No Preemption</p>
              <p>Resources cannot be forcibly taken away from a process. A resource can be released only voluntarily by the process holding it after the process has completed its task. The OS cannot forcibly preempt a held resource. Example: You cannot forcibly take away a file that a process has locked.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="font-bold text-emerald-800">4. Circular Wait</p>
              <p>There must exist a circular chain of processes such that P0 waits for a resource held by P1, P1 waits for a resource held by P2, ..., and Pn waits for a resource held by P0. This circular dependency ensures no process can ever proceed. Example: P1→P2→P3→P1 forming a circle.</p>
            </div>
          </div>
        </CoreConcepts>

        <DiagramSection title="Deadlock Visualization — Resource Allocation Graph">
          <pre className="text-xs leading-relaxed">{`
Resource Allocation Graph showing DEADLOCK:

    P1 ──holds──► [R1: Printer]     P2 ──holds──► [R2: Scanner]
    ▲                                 ▲
    │                                 │
    waits                             waits
    │                                 │
    [R2: Scanner] ◄──holds── P1      [R1: Printer] ◄──holds── P2

Wait... Let me show it more clearly:

  P1 ──holds──► R1 ◄──waits── P2
  P1 ──waits──► R2 ◄──holds── P2

  Circle: P1 → R2 → P2 → R1 → P1  (DEADLOCK!)

Strategies to handle deadlock:
┌────────────────────────────────────────────────┐
│ 1. Prevention: Ensure one of 4 conditions      │
│    never holds (e.g., ordered resource alloc)  │
│ 2. Avoidance: Dynamically check if granting    │
│    a resource could lead to deadlock (Banker's)│
│ 3. Detection & Recovery: Allow deadlock, then  │
│    detect and terminate processes               │
│ 4. Ignorance: Pretend it never happens (used   │
│    by most OSes including Linux/Windows)        │
└────────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Database Transaction Deadlock">
            <p className="text-sm">Transaction T1 locks Row A and tries to lock Row B. Transaction T2 locks Row B and tries to lock Row A. Both transactions hold one row and wait for the other. This satisfies all four conditions: Mutual Exclusion (only one transaction locks a row), Hold and Wait (each holds one and waits for another), No Preemption (locks aren't forcibly removed), Circular Wait (T1→T2→T1). Database systems detect this and roll back one transaction.</p>
          </Example>
          <Example num={2} title="Traffic Gridlock at an Intersection">
            <p className="text-sm">Four cars arrive at a 4-way intersection simultaneously. Each car occupies one road segment and needs the next segment to proceed, but it's occupied by the next car. Car-North holds North-approach, waits for intersection-center (held by Car-East). Car-East holds East-approach, waits for intersection-center. All four cars form a circular wait. No car can back up (no preemption), the intersection allows only one car (mutual exclusion), and each holds its position while waiting (hold and wait).</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Deadlock = permanent blocking of a set of processes in a circular wait.",
          "Four necessary conditions (Coffman): Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
          "ALL four must hold simultaneously for deadlock to occur.",
          "Prevention: Eliminate one of the four conditions.",
          "Avoidance: Use Banker's algorithm to check safe state before granting resources.",
          "Detection: Use wait-for graphs; recover by process termination or resource preemption.",
          "Most modern OSes (Linux, Windows) use the 'ignore' approach and rely on manual intervention.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 1g */}
      <SubQuestion id="q1-g" label="1g" question="What is fragmentation and its types?">
        <Definition title="Fragmentation — Definition & Introduction">
          <p><strong>Fragmentation</strong> is a phenomenon in computer memory allocation where available memory is broken into small, non-contiguous pieces over time. Even though the total amount of free memory may be sufficient to satisfy a request, the individual free blocks are too small and scattered to be useful. Fragmentation reduces memory utilization efficiency and can prevent processes from loading even when adequate total free memory exists.</p>
          <p className="mt-3">Think of fragmentation like a <strong>bookshelf</strong>. Imagine you have a bookshelf with 100 slots and several books of varying sizes. As you add and remove books over time, gaps appear between remaining books. Eventually, you might have 30 empty slots scattered as individual gaps of 1-2 slots each. You need 5 consecutive slots for a new book, but the largest contiguous gap is only 3 slots. Total free space (30 slots) &gt; required space (5 slots), but you can't fit the book. This is fragmentation.</p>
        </Definition>

        <CoreConcepts title="Types of Fragmentation">
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800 text-base mb-2">1. Internal Fragmentation</p>
              <p><strong>Definition:</strong> Occurs when allocated memory is larger than the memory requested by the process. The difference between allocated and requested memory is wasted <em>inside</em> the allocated block.</p>
              <p className="mt-2"><strong>Cause:</strong> Memory is allocated in fixed-size blocks. If a process requests 85 KB and the system allocates in blocks of 100 KB, the extra 15 KB within the allocated block is wasted — this is internal fragmentation.</p>
              <p className="mt-2"><strong>Analogy:</strong> Booking a hotel room for one person but getting a room with 3 beds. The extra 2 beds are "internal fragmentation" — they're in your allocated space but unused.</p>
              <p className="mt-2"><strong>Common in:</strong> Fixed (static) partitioning, paging systems (last page is usually not completely filled).</p>
            </div>
            <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
              <p className="font-bold text-orange-800 text-base mb-2">2. External Fragmentation</p>
              <p><strong>Definition:</strong> Occurs when total free memory is sufficient to satisfy a request, but the free memory is scattered into non-contiguous small blocks. No single contiguous block is large enough.</p>
              <p className="mt-2"><strong>Cause:</strong> As processes are loaded and removed, they create alternating used and free blocks. Over time, free memory becomes fragmented into small, non-adjacent holes.</p>
              <p className="mt-2"><strong>Analogy:</strong> A parking lot where cars have parked and left in random order. The empty spaces are scattered — you have enough total empty space for a bus, but no single contiguous space large enough.</p>
              <p className="mt-2"><strong>Common in:</strong> Variable (dynamic) partitioning, contiguous memory allocation.</p>
            </div>
          </div>
        </CoreConcepts>

        <DiagramSection title="Fragmentation Visualization">
          <pre className="text-xs leading-relaxed">{`
INTERNAL FRAGMENTATION:
┌─────────────────────────────────┐
│ Process needs 85KB              │
│ Allocated 100KB partition       │
│ ┌───────────────────────┬─────┐ │
│ │  85KB (used)          │15KB │ │
│ │                       │WASTE│ │
│ └───────────────────────┴─────┘ │
│              100KB partition     │
│  15KB wasted INSIDE the block   │ ← INTERNAL FRAGMENTATION
└─────────────────────────────────┘

EXTERNAL FRAGMENTATION:
Memory:  [Used 50KB][Free 20KB][Used 30KB][Free 25KB][Used 20KB][Free 30KB]
                              Total Free = 75KB
                              Process needs 50KB contiguous
                              ❌ Cannot allocate! (largest free = 30KB)
                              ← EXTERNAL FRAGMENTATION

SOLUTIONS TO EXTERNAL FRAGMENTATION:
┌─────────────────────────────────────────────┐
│ 1. Compaction (Defragmentation):            │
│    Move all used blocks together to create   │
│    one large free block.                     │
│    [Used 50][Used 30][Used 20][Free 75KB]   │
│                                              │
│ 2. Paging:                                   │
│    Eliminates external fragmentation by      │
│    allocating non-contiguous pages.          │
│                                              │
│ 3. Segmentation:                             │
│    Logical view of memory with variable      │
│    sized segments.                            │
└─────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Internal Fragmentation in Paging">
            <p className="text-sm">A system uses pages of 4 KB. A process needs 13 KB of memory. The OS allocates 4 pages (16 KB). The last page only uses 1 KB out of 4 KB, wasting 3 KB. If 100 processes run simultaneously, that's potentially 300 KB wasted just from the last page of each process. This is internal fragmentation — inherent in paging systems.</p>
          </Example>
          <Example num={2} title="External Fragmentation in Dynamic Partitioning">
            <p className="text-sm">Memory starts with 640 KB free. Process A (100KB), B (200KB), C (150KB) load and leave gaps. After B terminates: 100KB free (between A and C) + 190KB free (after C) = 290KB total free. Now Process D needs 200KB contiguous. The first free block is only 100KB, the second is 190KB — neither is large enough! External fragmentation prevents D from loading despite having 290KB free. Compaction would move A and C together, creating a single 290KB block.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Fragmentation = memory wasted because of how memory is allocated and freed.",
          "Internal fragmentation: Wasted space INSIDE an allocated block (fixed partitions, paging).",
          "External fragmentation: Wasted space OUTSIDE allocated blocks as scattered free holes.",
          "Solutions: Compaction (move processes), Paging (non-contiguous allocation), Segmentation.",
          "Paging eliminates external fragmentation but causes internal fragmentation.",
          "Compaction is expensive — requires relocating all processes and updating address references.",
          "The 50% rule: With first-fit, 1/3 of memory can be wasted due to external fragmentation.",
        ]} />
      </SubQuestion>
    </div>
  );
}

/* ─── Reusable UI Components ─── */

function QuestionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-200">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center font-bold text-lg">Q{num}</span>
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold">{title}</h2>
          <p className="text-indigo-200 text-xs">MCA Operating Systems — Previous Year Question</p>
        </div>
      </div>
    </div>
  );
}

function SubQuestion({ id, label, question, children }: { id: string; label: string; question: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-50 to-indigo-50 border-b border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-800">
            <span className="text-indigo-600 mr-2">{label}.</span>{question}
          </h3>
        </div>
        <div className="p-4 sm:p-6 space-y-6">{children}</div>
      </div>
    </section>
  );
}

function Definition({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-indigo-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs">📖</span>
        {title}
      </h4>
      <div className="text-sm text-slate-700 leading-relaxed pl-8">{children}</div>
    </div>
  );
}

function CoreConcepts({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-purple-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-xs">🧠</span>
        {title}
      </h4>
      <div className="text-sm text-slate-700 leading-relaxed pl-8">{children}</div>
    </div>
  );
}

function DiagramSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-teal-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-xs">📊</span>
        {title}
      </h4>
      <div className="pl-8 bg-slate-50 rounded-xl p-4 border border-slate-200 overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

function AlgorithmSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-emerald-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-xs">⚙️</span>
        {title}
      </h4>
      <div className="pl-8 overflow-x-auto">{children}</div>
    </div>
  );
}

function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-indigo-50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-bold text-indigo-800 text-xs uppercase tracking-wider border-b border-indigo-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 text-xs border-b border-slate-100 ${j === 0 ? "font-semibold text-slate-700" : "text-slate-600"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RealWorldExamples({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-amber-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs">🌍</span>
        {title}
      </h4>
      <div className="pl-8 space-y-3">{children}</div>
    </div>
  );
}

function Example({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
      <p className="text-xs font-bold text-amber-800 mb-1">Example {num}: {title}</p>
      {children}
    </div>
  );
}

function KeyPoints({ points }: { points: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-rose-700 mb-2 flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-xs">🎯</span>
        Key Points for Revision
      </h4>
      <ul className="pl-8 space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
            <span className="text-rose-500 mt-0.5 flex-shrink-0">✦</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Divider() {
  return <hr className="border-t-2 border-indigo-100 my-2" />;
}
