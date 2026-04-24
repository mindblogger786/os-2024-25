import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, AlgorithmSection, ComparisonTable, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q2() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={2} title="UNIX, Semaphores, Threads & Memory" />

      {/* 2a */}
      <SubQuestion id="q2-a" label="2a" question="Explain the layered structure of UNIX operating system with suitable diagram.">
        <Definition title="UNIX Operating System — Introduction">
          <p>The <strong>UNIX operating system</strong>, developed at Bell Labs by Ken Thompson and Dennis Ritchie in the early 1970s, is one of the most influential operating systems in computing history. Its design philosophy emphasizes simplicity, modularity, and reusability — principles that have shaped modern OS design including Linux, macOS, and even Windows. UNIX is a multi-user, multitasking operating system that uses a <strong>layered architecture</strong> to organize its components into distinct levels of abstraction, each building upon the services provided by the layer below it.</p>
          <p className="mt-3">The layered approach organizes the UNIX system into concentric rings or layers, with hardware at the innermost layer and user applications at the outermost. Each layer communicates only with the layers immediately above and below it, providing a clean separation of concerns. This design makes the system easier to understand, debug, and maintain. Think of it like a <strong>building with multiple floors</strong> — the foundation (hardware) supports the ground floor (kernel), which supports the upper floors (system services, shell, applications), and each floor only interacts with adjacent floors.</p>
        </Definition>

        <DiagramSection title="UNIX Layered Architecture Diagram">
          <pre className="text-xs leading-relaxed">{`
┌─────────────────────────────────────────────────────────┐
│                    USER LAYER                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  User Applications                                   │ │
│  │  (compilers, editors, databases, web browsers)       │ │
│  └────────────────────────┬────────────────────────────┘ │
│                           │ System Calls / Library Calls │
│  ┌────────────────────────▼────────────────────────────┐ │
│  │  Shell & Utility Programs                            │ │
│  │  (sh, bash, csh, grep, awk, sed, ls, cat, etc.)     │ │
│  └────────────────────────┬────────────────────────────┘ │
│                           │                               │
│  ┌────────────────────────▼────────────────────────────┐ │
│  │  System Call Interface (API Layer)                   │ │
│  │  (open(), read(), write(), fork(), exec(), wait())   │ │
│  └────────────────────────┬────────────────────────────┘ │
├───────────────────────────┼───────────────────────────────┤
│                    KERNEL LAYER                           │
│  ┌────────────────────────▼────────────────────────────┐ │
│  │  File Subsystem                │ I/O Subsystem       │ │
│  │  ┌──────────────────────┐     │ ┌──────────────────┐│ │
│  │  │ VFS (Virtual File    │     │ │ Buffer Cache     ││ │
│  │  │ System)              │     │ │                  ││ │
│  │  │ - Inodes             │     │ │ Device Drivers   ││ │
│  │  │ - Directories        │     │ │ - Block devices  ││ │
│  │  │ - File tables        │     │ │ - Character dev  ││ │
│  │  │ - Superblocks        │     │ │ - Network        ││ │
│  │  └──────────────────────┘     │ └──────────────────┘│ │
│  ├─────────────────────────────────────────────────────┤ │
│  │  Process Management                                 │ │
│  │  (scheduling, creation, termination, signals, IPC)  │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │  Memory Management                                  │ │
│  │  (paging, swapping, virtual memory, malloc/free)    │ │
│  └─────────────────────────────────────────────────────┘ │
├───────────────────────────────────────────────────────────┤
│                    HARDWARE LAYER                          │
│  ┌─────────────────────────────────────────────────────┐ │
│  │  CPU · RAM · Disk · Terminal · Network Interface     │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <CoreConcepts title="Detailed Layer Descriptions">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
              <p className="font-bold text-slate-800">Layer 1 — Hardware</p>
              <p>The physical components: CPU, memory, disks, terminals, network cards. The kernel interacts with hardware through device drivers and interrupt handlers. Hardware provides the basic computing capabilities that the OS manages.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">Layer 2 — Kernel (Core of UNIX)</p>
              <p>The kernel is the heart of UNIX. It runs in kernel mode (privileged mode) and provides: <strong>Process management</strong> (creation, scheduling, termination via fork/exec/wait), <strong>Memory management</strong> (virtual memory, paging, swapping), <strong>File subsystem</strong> (VFS, inodes, directories, file allocation), <strong>I/O subsystem</strong> (buffer cache, device drivers, disk scheduling), and <strong>Inter-process communication</strong> (pipes, signals, shared memory, message queues).</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">Layer 3 — System Call Interface</p>
              <p>The API through which user programs request kernel services. System calls like open(), read(), write(), close(), fork(), exec(), wait(), exit(), ioctl() provide controlled access to hardware. User programs transition from user mode to kernel mode via traps/software interrupts when making system calls.</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800">Layer 4 — Shell &amp; Utilities</p>
              <p>The <strong>shell</strong> (sh, bash, csh, ksh, zsh) is the command interpreter that reads user commands and executes programs. UNIX provides hundreds of utility programs (grep, awk, sed, cat, ls, cp, mv) that follow the "do one thing well" philosophy. The shell supports pipes (|), redirection (&lt;, &gt;, &gt;&gt;), and shell scripting for automation.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <p className="font-bold text-amber-800">Layer 5 — User Applications</p>
              <p>User-level programs: compilers (gcc), editors (vi, emacs), databases (MySQL, PostgreSQL), web browsers, email clients, and custom applications. These programs use system calls and library functions to perform their tasks, never accessing hardware directly.</p>
            </div>
          </div>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Linux — A Modern UNIX Clone">
            <p className="text-sm">Linux follows the UNIX layered architecture. When you type "ls" in the terminal, the shell (Layer 4) parses the command, calls the exec() system call (Layer 3) to run the ls program (Layer 5). The ls program calls open() and read() system calls (Layer 3) to read directory entries. The kernel (Layer 2) uses the file subsystem to locate inodes on disk, and device drivers (Layer 2) issue I/O commands to the physical disk (Layer 1). Results flow back up through all layers to display filenames on screen.</p>
          </Example>
          <Example num={2} title="macOS — UNIX-Based Desktop OS">
            <p className="text-sm">Apple's macOS is a certified UNIX operating system. Its layered structure includes: Mach microkernel at the base (hardware abstraction, task scheduling), BSD layer on top (POSIX API, file system, networking), Core Services (frameworks like Core Foundation), Application Frameworks (Cocoa, AppKit), and finally user applications. Despite its graphical interface, underneath it follows the same layered UNIX philosophy — terminal commands work identically to Linux.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "UNIX follows a layered architecture: Hardware → Kernel → System Calls → Shell/Utilities → Applications.",
          "Kernel is the core: manages processes, memory, file systems, and I/O.",
          "System calls provide the interface between user programs and kernel (fork, exec, read, write).",
          "Shell is the command interpreter; supports piping, redirection, scripting.",
          "Key philosophy: Everything is a file (devices, pipes, sockets represented as files).",
          "UNIX design influenced Linux, macOS, BSD, Android, and most modern operating systems.",
          "The layered approach provides modularity, security (kernel mode vs user mode), and maintainability.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 2b */}
      <SubQuestion id="q2-b" label="2b" question="What is semaphore? Explain producer-consumer problem's solution with semaphore.">
        <Definition title="Semaphore — Definition & Introduction">
          <p>A <strong>semaphore</strong> is a synchronization primitive introduced by Edsger W. Dijkstra in 1965 that provides a mechanism for controlling access to shared resources in concurrent systems. A semaphore is essentially an integer variable (S) that is accessed only through two atomic operations: <strong>wait()</strong> (also called <strong>P()</strong> or <strong>down()</strong>) and <strong>signal()</strong> (also called <strong>V()</strong> or <strong>up()</strong>). The term "P" comes from the Dutch word "proberen" (to test) and "V" from "verhogen" (to increment).</p>
          <p className="mt-3">Think of a semaphore as a <strong>key rack at a hotel front desk</strong>. If the hotel has 5 rooms, there are 5 keys on the rack (semaphore initialized to 5). When a guest arrives, they take a key (wait/P operation — counter decrements). When all keys are taken (semaphore = 0), new guests must wait. When a guest checks out, they return their key (signal/V operation — counter increments), and a waiting guest can proceed. This naturally controls access without explicit coordination between guests.</p>
        </Definition>

        <CoreConcepts title="Types of Semaphores">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">1. Counting Semaphore</p>
              <p>Integer value can range over an unrestricted domain. Used to control access to a resource with <em>multiple instances</em> (e.g., 5 identical printers, 10 database connections). Initialized to the number of available resource instances.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">2. Binary Semaphore (Mutex)</p>
              <p>Integer value can be only 0 or 1. Used to provide <em>mutual exclusion</em> for a single shared resource. Behaves similarly to a mutex lock. Initialized to 1 (resource available).</p>
            </div>
          </div>
        </CoreConcepts>

        <AlgorithmSection title="Semaphore Operations (Atomic)">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// wait() / P() / down() operation
wait(S) {
    while (S <= 0) {
        // busy wait (or block the process)
    }
    S = S - 1;
}

// signal() / V() / up() operation
signal(S) {
    S = S + 1;
}

// NOTE: Both operations are ATOMIC
// (cannot be interrupted mid-execution)

// Binary Semaphore (Mutex) usage pattern:
Semaphore mutex = 1;  // initialized to 1

// Process entering critical section:
wait(mutex);      // acquire lock (mutex becomes 0)
  // CRITICAL SECTION
signal(mutex);    // release lock (mutex becomes 1)`}</pre>
        </AlgorithmSection>

        <AlgorithmSection title="Producer-Consumer Problem Solution with Semaphores">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// Bounded Buffer of size N
#define N 10  // buffer size

// Three semaphores needed:
Semaphore mutex = 1;    // mutual exclusion for buffer access
Semaphore empty = N;    // counts empty slots (initialized to N)
Semaphore full  = 0;    // counts filled slots (initialized to 0)

// Shared circular buffer
int buffer[N];
int in = 0, out = 0;

// ──── PRODUCER PROCESS ────
void producer() {
    int item;
    while (true) {
        item = produce_item();     // generate new item

        wait(empty);    // wait if buffer is full (no empty slots)
        wait(mutex);    // acquire exclusive access to buffer

        // ── CRITICAL SECTION ──
        buffer[in] = item;         // add item to buffer
        in = (in + 1) % N;         // circular increment

        signal(mutex);  // release exclusive access
        signal(full);   // increment count of filled slots
    }
}

// ──── CONSUMER PROCESS ────
void consumer() {
    int item;
    while (true) {
        wait(full);     // wait if buffer is empty (no filled slots)
        wait(mutex);    // acquire exclusive access to buffer

        // ── CRITICAL SECTION ──
        item = buffer[out];         // remove item from buffer
        out = (out + 1) % N;        // circular increment

        signal(mutex);  // release exclusive access
        signal(empty);  // increment count of empty slots

        consume_item(item);          // process the consumed item
    }
}

// KEY INSIGHT: Order of wait() matters!
// Producer: wait(empty) THEN wait(mutex)
// Consumer: wait(full)  THEN wait(mutex)
// Reversing the order can cause DEADLOCK!
// If producer acquires mutex when buffer is full, it waits for
// empty forever while holding mutex → consumer can never consume.`}</pre>
        </AlgorithmSection>

        <DiagramSection title="Producer-Consumer Visualization">
          <pre className="text-xs leading-relaxed">{`
Circular Buffer (N=5):
                ┌─────┬─────┬─────┬─────┬─────┐
buffer[0..4]:   │  A  │  B  │  C  │     │     │
                └─────┴─────┴─────┴─────┴─────┘
                  ▲ out=0           ▲ in=3
                  │                 │
            Consumer reads     Producer writes
            from here         here next

Semaphore States:
  mutex = 1 (available)
  empty = 2 (2 empty slots at positions 3,4)
  full  = 3 (3 items: A, B, C at positions 0,1,2)

Flow:
  Producer produces → wait(empty=2→1), wait(mutex=1→0),
                       buffer[3]=D, signal(mutex=0→1), signal(full=3→4)
  Consumer consumes → wait(full=4→3), wait(mutex=1→0),
                       item=buffer[0]=A, signal(mutex=0→1), signal(empty=1→2)
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Print Spooler (Producer-Consumer)">
            <p className="text-sm">A print spooler is a classic producer-consumer scenario. User applications (producers) submit print jobs to a bounded print queue (buffer). The printer daemon (consumer) removes jobs from the queue and sends them to the printer. If the queue is full, user apps must wait (wait on empty). If the queue is empty, the printer daemon waits (wait on full). The mutex ensures that two apps don't corrupt the queue by adding jobs simultaneously.</p>
          </Example>
          <Example num={2} title="Video Streaming Buffer">
            <p className="text-sm">In video streaming, the network downloader (producer) fills a buffer with video frames. The media player (consumer) reads frames from the buffer for display. The buffer has limited size (N frames). If the network is fast, the producer may fill the buffer and must wait (wait on empty). If the player is faster than the download, it must wait for frames (wait on full). This ensures smooth playback without buffer overflow or underflow.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Semaphore = integer variable + atomic wait() and signal() operations.",
          "Two types: Counting (range unrestricted) and Binary (0 or 1, like mutex).",
          "Producer-Consumer uses 3 semaphores: mutex (mutual exclusion), empty (count empty slots), full (count filled slots).",
          "Order of wait operations is critical — wrong order can cause deadlock.",
          "Producer: wait(empty) → wait(mutex) → produce → signal(mutex) → signal(full).",
          "Consumer: wait(full) → wait(mutex) → consume → signal(mutex) → signal(empty).",
          "All semaphore operations are atomic — cannot be interrupted during execution.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 2c */}
      <SubQuestion id="q2-c" label="2c" question="What is thread? Explain the actions taken by a thread library to context-switch between user level threads.">
        <Definition title="Thread — Definition & Introduction">
          <p>A <strong>thread</strong> is the smallest unit of execution within a process. A process can contain multiple threads, all sharing the same resources — memory space, file descriptors, and code — but each thread has its own program counter, register set, and stack. Threads enable concurrent execution within a single process, allowing programs to perform multiple tasks simultaneously. For example, a web browser might use one thread for rendering, another for downloading content, and a third for playing audio.</p>
          <p className="mt-3">Think of a process as a <strong>kitchen in a restaurant</strong>. The kitchen has shared resources (stoves, ingredients, utensils). Each <strong>thread is a chef</strong> working in that kitchen. Multiple chefs share the same kitchen resources but each chef has their own workstation (stack) and recipe they're currently following (program counter). The chefs can work independently on different dishes but share the same ingredients and equipment. This is much more efficient than giving each chef their own complete kitchen (separate processes).</p>
        </Definition>

        <ComparisonTable headers={["Aspect", "User-Level Threads", "Kernel-Level Threads"]}
          rows={[
            ["Management", "Managed by thread library (user space)", "Managed by the OS kernel"],
            ["OS Awareness", "OS is unaware of threads; sees only process", "OS knows about each thread individually"],
            ["Context Switch", "Fast (no kernel intervention needed)", "Slower (requires system call / mode switch)"],
            ["Blocking", "If one thread blocks, entire process blocks", "Only the blocked thread is affected"],
            ["Scheduling", "Application-specific scheduling possible", "OS schedules each thread independently"],
            ["System Calls", "No system call overhead for switching", "Every switch requires kernel system call"],
            ["Examples", "POSIX Pthreads (many-to-one), Green threads", "Windows threads, Linux pthreads (1-to-1)"],
            ["Multi-core", "Cannot utilize multiple cores", "Can run on multiple cores simultaneously"],
          ]}
        />

        <CoreConcepts title="Thread Library Context-Switch Actions (User-Level Threads)">
          <p className="mb-3">A <strong>thread library</strong> (like POSIX Pthreads in many-to-one mode, or Java Green Threads) manages user-level threads entirely in user space. When switching between user-level threads, the library performs the following actions <strong>without any kernel involvement</strong>:</p>
          <div className="space-y-2 text-sm">
            <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200">
              <p className="font-bold text-indigo-800">Step 1: Save Current Thread Context</p>
              <p>The library saves the current thread's CPU state: program counter (PC), general-purpose registers, stack pointer (SP), and condition codes. This is saved into the Thread Control Block (TCB) in user space. The stack pointer and program counter are critical — they determine where the thread was executing and where its local variables are stored.</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800">Step 2: Update Thread State</p>
              <p>The library updates the state of the current thread from RUNNING to READY (or BLOCKED if it's waiting for something). The library's internal scheduler maintains a ready queue of threads waiting to execute. The current thread's TCB is moved to the appropriate queue.</p>
            </div>
            <div className="p-3 rounded-lg bg-teal-50 border border-teal-200">
              <p className="font-bold text-teal-800">Step 3: Select Next Thread</p>
              <p>The library's scheduler selects the next thread from the ready queue based on its scheduling algorithm (round-robin, priority-based, etc.). The selected thread's TCB is retrieved from the ready queue.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <p className="font-bold text-amber-800">Step 4: Restore New Thread Context</p>
              <p>The library restores the new thread's saved context from its TCB: program counter, registers, and stack pointer. This effectively makes the CPU resume execution where the new thread left off. The stack pointer now points to the new thread's stack, so all local variables are restored correctly.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">Step 5: Resume Execution</p>
              <p>The CPU begins executing the new thread from the restored program counter. To the thread, it appears as if nothing happened — it simply resumed from where it was interrupted. The entire context switch happens in user space without a single system call or kernel mode transition.</p>
            </div>
          </div>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Web Server with User-Level Threads">
            <p className="text-sm">A web server using user-level threads (e.g., early Java with Green Threads) handles multiple client requests concurrently within one process. When Thread A is processing a client request and reaches a point where it can yield (e.g., after sending a response chunk), the thread library saves Thread A's context, loads Thread B's context (serving a different client), and Thread B continues. No kernel call needed — the switch is extremely fast (~100 nanoseconds vs ~10 microseconds for kernel thread switch).</p>
          </Example>
          <Example num={2} title="Goroutines in Go (Similar Concept)">
            <p className="text-sm">Go's goroutines are lightweight user-level threads managed by the Go runtime scheduler. When a goroutine makes a blocking I/O call, the Go runtime (not the OS kernel) switches to another goroutine. The runtime saves the goroutine's stack pointer and registers, picks the next runnable goroutine, and restores its context. This allows Go programs to efficiently manage millions of goroutines with minimal overhead — context switches happen in user space without kernel syscalls.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Thread = smallest unit of execution within a process; shares resources with other threads in same process.",
          "User-level threads are managed by a thread library in user space; OS is unaware of them.",
          "Context switch steps: Save current context → Update state → Select next thread → Restore new context → Resume.",
          "User-level thread switches are fast (no kernel mode transition) but blocking calls block entire process.",
          "Kernel-level threads are managed by OS; can utilize multi-core but switching is slower.",
          "Thread library maintains TCBs (Thread Control Blocks) and ready queues in user space.",
          "Each thread has its own stack, PC, and registers; but shares code, data, and file descriptors.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 2d */}
      <SubQuestion id="q2-d" label="2d" question="What do you mean by thrashing and its cause? Suggest solutions to overcome thrashing in virtual memory.">
        <Definition title="Thrashing — Definition & Introduction">
          <p><strong>Thrashing</strong> is a catastrophic degradation in system performance that occurs when a computer's virtual memory subsystem spends more time paging (swapping pages between RAM and disk) than executing actual application code. When a process doesn't have enough physical memory frames to hold its working set — the set of pages it actively needs — it constantly generates page faults. Each page fault requires a disk I/O operation (extremely slow compared to RAM access), and the process spends most of its time waiting for pages to be loaded rather than making progress.</p>
          <p className="mt-3">Imagine you're <strong>studying with 10 textbooks on a very small desk</strong>. The desk can only hold 3 books at a time. Every time you need a different book, you must return one to the shelf and fetch another. If you're constantly flipping between chapters in different books, you spend more time going to and from the shelf than actually reading. Your effective studying speed drops to near zero. This is exactly what happens during thrashing — the CPU utilization approaches 0% while disk I/O approaches 100%.</p>
        </Definition>

        <CoreConcepts title="Causes of Thrashing">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">1. Insufficient Memory Frames</p>
              <p>When the total memory requirements of all active processes exceed available physical memory, the OS cannot allocate enough frames for each process's working set. This is the primary cause — more processes compete for fewer frames than they need.</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <p className="font-bold text-orange-800">2. Over-Degree of Multiprogramming</p>
              <p>When too many processes are loaded simultaneously, each process gets fewer memory frames. The OS may increase multiprogramming to improve CPU utilization, but this backfires — each process thrashes, CPU drops, OS loads MORE processes (thinking CPU is underutilized), making it worse. This creates a <strong>positive feedback loop</strong>.</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <p className="font-bold text-yellow-800">3. Poor Page Replacement Algorithm</p>
              <p>An inefficient page replacement algorithm (like FIFO on certain reference strings — Belady's Anomaly) may replace pages that are about to be used, increasing page faults unnecessarily.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">4. Large Working Sets</p>
              <p>Processes with large working sets (many actively used pages) need many frames. Programs that access data in a non-local pattern (e.g., scanning a large array sequentially) generate excessive page faults.</p>
            </div>
          </div>

          <p className="mt-4 mb-3 font-semibold">The Thrashing Cycle (Positive Feedback Loop):</p>
          <pre className="text-xs leading-relaxed">{`
CPU utilization drops → OS adds more processes → each gets fewer frames
     ↑                                                    ↓
CPU utilization drops more  ←  more page faults → thrashing worsens
          `}</pre>
        </CoreConcepts>

        <CoreConcepts title="Solutions to Overcome Thrashing">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">1. Working Set Model</p>
              <p>Monitor each process's <strong>working set</strong> (the set of pages accessed in a recent time window Δ). Ensure that each process is allocated at least as many frames as its working set size. If total working sets exceed available memory, <strong>suspend</strong> a process (swap it out) to free frames for others. The working set model prevents thrashing by guaranteeing each active process has the pages it needs.</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <p className="font-bold text-emerald-800">2. Page Fault Frequency (PFF) Strategy</p>
              <p>Monitor the <strong>page fault rate</strong> of each process. Define upper and lower thresholds. If a process's page fault rate exceeds the upper threshold, allocate more frames to it. If the rate falls below the lower threshold, remove frames from it. This dynamic adjustment ensures processes have "just enough" frames without over-allocating. If no frames are available for a faulting process, suspend a process.</p>
            </div>
            <div className="p-3 rounded-lg bg-teal-50 border border-teal-200">
              <p className="font-bold text-teal-800">3. Reduce Degree of Multiprogramming</p>
              <p>Suspend and swap out one or more processes to free memory frames. The remaining processes get more frames, reducing page faults. The suspended processes can be brought back when memory is available. This directly breaks the thrashing feedback loop.</p>
            </div>
            <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200">
              <p className="font-bold text-cyan-800">4. Better Page Replacement Algorithms</p>
              <p>Use efficient algorithms like LRU (Least Recently Used), Clock (Second Chance), or Working Set-based replacement instead of FIFO. These algorithms make better decisions about which pages to evict, reducing unnecessary page faults. Avoid Belady's Anomaly by using stack-based algorithms.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">5. Increase Physical Memory</p>
              <p>The ultimate solution: add more RAM to the system. More memory means more frames, larger working sets can be accommodated, and fewer page faults occur. This is the hardware upgrade approach and is often the most cost-effective solution for persistent thrashing.</p>
            </div>
          </div>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Opening Too Many Browser Tabs">
            <p className="text-sm">When you open many Chrome tabs, each tab is a separate process consuming memory. Eventually, physical RAM fills up. The OS starts swapping tab data to disk. When you switch to an old tab, it page-faults and must be loaded from disk, causing a noticeable delay. Adding more tabs worsens the situation — the browser "freezes" as disk thrashes. The solution: close tabs (reduce multiprogramming) or add more RAM.</p>
          </Example>
          <Example num={2} title="Database Server Under Heavy Load">
            <p className="text-sm">A database server running PostgreSQL with 8GB RAM hosts a 50GB database. Under normal load, frequently accessed pages fit in the buffer pool. During a peak traffic spike, queries access many different data pages, the working set grows beyond available memory, and the server starts thrashing — query response times jump from milliseconds to seconds. The PFF solution detects high page fault rates and allocates more buffer frames, while the working set model suspends low-priority background jobs.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Thrashing = excessive paging where CPU spends more time swapping pages than executing code.",
          "Primary cause: insufficient memory frames for processes' working sets.",
          "Triggered by over-multiprogramming — too many processes competing for limited frames.",
          "Creates a positive feedback loop: low CPU utilization → more processes → more thrashing.",
          "Working Set Model: ensure each process gets frames ≥ its working set size.",
          "Page Fault Frequency: dynamically adjust frame allocation based on fault rate.",
          "Other solutions: reduce multiprogramming, use better replacement algorithms, add more RAM.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 2e */}
      <SubQuestion id="q2-e" label="2e" question="Discuss Contiguous memory allocation in details.">
        <Definition title="Contiguous Memory Allocation — Introduction">
          <p><strong>Contiguous memory allocation</strong> is one of the earliest and simplest memory management schemes where each process is allocated a single contiguous block of memory. The entire process — code, data, stack, and heap — must reside in one continuous region of physical memory. The OS maintains a record of which parts of memory are currently allocated and which are free (holes), and when a process requests memory, the OS searches for a hole large enough to accommodate it.</p>
          <p className="mt-3">Think of contiguous memory allocation like a <strong>theater with row seating</strong>. Each group (process) must sit together in consecutive seats. The theater manager (OS) tracks which seats are empty. When a group of 5 arrives, the manager finds a block of 5 consecutive empty seats. When a group leaves, their seats become available. Over time, empty seats get scattered — small gaps between occupied blocks — making it hard to seat larger groups even though total empty seats might be sufficient. This is the fundamental problem of external fragmentation in contiguous allocation.</p>
        </Definition>

        <CoreConcepts title="Memory Organization">
          <p className="mb-3">In contiguous allocation, main memory is divided into two fixed partitions at system boot:</p>
          <div className="text-sm space-y-2">
            <p><strong>1. OS Partition (Low Memory):</strong> The operating system resides in the lowest memory addresses (or sometimes highest). This area is reserved for the OS kernel, data structures, device drivers, and buffers. It's protected from user processes.</p>
            <p><strong>2. User Partition (Remaining Memory):</strong> All remaining memory is available for user processes. This can be organized as:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Fixed (Static) Partitioning:</strong> Memory divided into fixed-size partitions at system startup. Each partition holds exactly one process. Simple but causes internal fragmentation (wasted space within partitions) and limits the number of active processes to the number of partitions.</li>
              <li><strong>Variable (Dynamic) Partitioning:</strong> Partitions are created dynamically based on process size. No internal fragmentation, but causes external fragmentation (free holes scattered between allocated blocks).</li>
            </ul>
          </div>
        </CoreConcepts>

        <ComparisonTable headers={["Strategy", "Description", "Pros", "Cons"]}
          rows={[
            ["First-Fit", "Allocate first hole big enough", "Fast (stops searching early)", "Many small holes at beginning"],
            ["Best-Fit", "Allocate smallest hole that fits", "Minimizes wasted space per alloc", "Creates many tiny unusable holes"],
            ["Worst-Fit", "Allocate largest hole available", "Leaves large remainder holes", "Performs worst overall (overhead)"],
          ]}
        />

        <AlgorithmSection title="Dynamic Partitioning — Allocation Algorithm">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// Dynamic Partitioning Allocation
// Memory represented as linked list of segments

struct Segment {
    int startAddress;
    int size;
    boolean isFree;   // true = hole, false = allocated
    Segment* next;
};

// FIRST-FIT Allocation Algorithm
Segment* firstFitAllocate(Segment* memory, int requestSize) {
    Segment* current = memory;
    while (current != NULL) {
        if (current->isFree && current->size >= requestSize) {
            // Found a hole large enough
            if (current->size == requestSize) {
                // Exact fit - allocate entire hole
                current->isFree = false;
            } else {
                // Split hole: allocate requested, rest stays free
                Segment* newHole = new Segment();
                newHole->startAddress = current->startAddress + requestSize;
                newHole->size = current->size - requestSize;
                newHole->isFree = true;
                
                current->size = requestSize;
                current->isFree = false;
                newHole->next = current->next;
                current->next = newHole;
            }
            return current;  // allocation successful
        }
        current = current->next;
    }
    return NULL;  // no suitable hole found (external fragmentation)
}

// DEALLOCATION: Free the segment and coalesce adjacent free holes
void deallocate(Segment* seg) {
    seg->isFree = true;
    // Coalesce with next segment if also free
    if (seg->next != NULL && seg->next->isFree) {
        seg->size += seg->next->size;
        seg->next = seg->next->next;
    }
    // Coalesce with previous segment if also free
    // (requires doubly-linked list or traversal)
}`}</pre>
        </AlgorithmSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Early MS-DOS Memory Management">
            <p className="text-sm">MS-DOS used contiguous memory allocation in the 640KB "conventional memory" region. When a program was loaded, DOS found a contiguous block large enough, loaded the program, and executed it. The "TSR" (Terminate and Stay Resident) programs created fragmentation — each TSR left a hole in memory. Over time, loading larger programs failed despite having enough total free memory, because the free space was fragmented into non-contiguous holes. Users had to reboot to defragment memory.</p>
          </Example>
          <Example num={2} title="Calculating Allocation with Different Strategies">
            <p className="text-sm">Memory has holes: 20KB, 10KB, 40KB, 15KB. Process requests 12KB. <strong>First-Fit:</strong> Allocates from 20KB hole → remaining 8KB hole. <strong>Best-Fit:</strong> Finds smallest hole ≥ 12KB → allocates from 15KB hole → remaining 3KB (tiny, likely unusable). <strong>Worst-Fit:</strong> Allocates from largest hole (40KB) → remaining 28KB (large, still useful). This shows each strategy has trade-offs — First-Fit is generally the most practical in practice.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Contiguous allocation assigns each process a single contiguous block of memory.",
          "Two types: Fixed partitioning (internal fragmentation) and Variable partitioning (external fragmentation).",
          "Three placement strategies: First-Fit, Best-Fit, Worst-Fit.",
          "External fragmentation solved by: Compaction (defragmentation), Paging, or Segmentation.",
          "First-Fit is generally fastest and performs well in practice.",
          "Best-Fit creates many tiny unusable fragments; Worst-Fit performs worst overall.",
          "Hardware support: Base register and Limit register define each process's memory bounds.",
          "Protection achieved by checking every memory access against base and limit registers.",
        ]} />
      </SubQuestion>
    </div>
  );
}
