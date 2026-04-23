export interface Answer {
  definition: string;
  coreConcepts: string;
  visualRepresentation: {
    type: 'table' | 'diagram' | 'flowchart';
    content: any;
  };
  implementation?: {
    type: 'code' | 'example' | 'algorithm' | 'numerical';
    language?: string;
    content: string;
  };
  keyPoints: string[];
}

export interface Question {
  id: string;
  questionText: string;
  answer: Answer;
}

export interface QuestionSet {
  id: string;
  title: string;
  questions: Question[];
}

export const osData: QuestionSet[] = [
  {
    id: "set1",
    title: "Question Set 1: OS Fundamentals",
    questions: [
      {
        id: "1a",
        questionText: "Define operating system and its goals.",
        answer: {
          definition: "An Operating System (OS) is a specialized system software that acts as an intermediary between a computer user and the computer hardware. It manages hardware resources like CPU, memory, and I/O devices while providing an environment where users can execute their programs conveniently and efficiently. Without an OS, a user would have to write complex code to interact directly with hardware components, which is practically impossible for modern systems.",
          coreConcepts: "The OS logic revolves around resource allocation and process management. It ensures that multiple users or programs don't conflict while accessing the same hardware. It handles the 'How' of task execution by scheduling processes and the 'Why' of efficiency by maximizing CPU utilization and throughput. It also provides abstraction by hiding the complexities of hardware from the end-user.",
          visualRepresentation: {
            type: "diagram",
            content: "Architecture: [User] <-> [Application Software] <-> [Operating System] <-> [Computer Hardware]"
          },
          implementation: {
            type: "example",
            content: "Primary Goals: 1. Convenience (User-friendly interface). 2. Efficiency (Optimized resource usage). 3. Ability to evolve (Modular design for new updates). 4. Throughput (Maximum work in minimum time)."
          },
          keyPoints: [
            "Acts as a resource allocator.",
            "Provides an interface (GUI/CLI) to the user.",
            "Manages file systems and storage.",
            "Ensures system security and error detection."
          ]
        }
      },
      {
        id: "1b",
        questionText: "Differentiate between monolithic and micro kernel.",
        answer: {
          definition: "A kernel is the core component of an OS that manages system resources. A Monolithic kernel is an architecture where all OS services (file system, drivers, memory management) run in the same address space as the kernel. A Microkernel, on the other hand, minimizes the kernel's size by moving non-essential services into the 'user space', communicating via Inter-Process Communication (IPC). This fundamental difference impacts system stability and performance.",
          coreConcepts: "Monolithic kernels are fast because services communicate directly via function calls within the same space. However, a single bug in a driver can crash the entire system. Microkernels are more stable and secure because if a service (like a driver) fails, it doesn't bring down the whole kernel. However, they are generally slower due to the overhead of IPC message passing between user and kernel modes.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Monolithic Kernel", "Microkernel"],
              rows: [
                ["Size", "Large (complex code)", "Small (minimal code)"],
                ["Execution", "All services in Kernel Space", "Services in User Space"],
                ["Performance", "Fast (Direct calls)", "Slower (IPC overhead)"],
                ["Stability", "Low (One bug crashes all)", "High (Service failures are isolated)"],
                ["Example", "Linux, MS-DOS, Unix", "QNX, Symbian, Mach (Mac OS)"]
              ]
            }
          },
          keyPoints: [
            "Monolithic is efficient but harder to maintain.",
            "Microkernel is modular and highly secure.",
            "Linux is monolithic but uses modules to gain flexibility.",
            "IPC is the bottleneck for Microkernels."
          ]
        }
      },
      {
        id: "1c",
        questionText: "Discuss principle of concurrency.",
        answer: {
          definition: "Concurrency is the ability of an operating system to manage multiple tasks that start, run, and complete in overlapping time periods. It doesn't necessarily mean they run at the exact same instant (parallelism), but rather that the OS switches between them so rapidly that it appears they are running simultaneously. In a multiprogramming environment, concurrency is achieved by the OS interleaving the execution of various processes to ensure progress for all.",
          coreConcepts: "Concurrency arises in three contexts: Multiple applications, Structured applications, and OS structure itself. The 'How' involves process synchronization and communication. The 'Why' is to improve resource utilization (e.g., using CPU while a process waits for I/O). However, concurrency introduces problems like Race Conditions, Deadlocks, and Starvation, requiring mechanisms like Semaphores and Mutexes for safe execution.",
          visualRepresentation: {
            type: "flowchart",
            content: "Process A Running -> Interrupt/Wait -> Context Switch -> Process B Running -> Context Switch -> Process A Resumes"
          },
          keyPoints: [
            "Improves system throughput and responsiveness.",
            "Can lead to Race Conditions if not synchronized.",
            "Requires hardware support (Interrupts).",
            "Critical section management is the core of concurrency logic."
          ]
        }
      },
      {
        id: "1d",
        questionText: "Describe the solution to critical-section problem in brief.",
        answer: {
          definition: "A Critical Section is a segment of code where a process accesses shared resources (like variables or files). The Critical-Section Problem is to design a protocol that processes can use to cooperate so that no two processes are in their critical sections at the same time. A valid solution must satisfy three requirements: Mutual Exclusion, Progress, and Bounded Waiting, ensuring data consistency and system fairness.",
          coreConcepts: "The solution logic typically follows a structure: Entry Section (check if entry is allowed), Critical Section (perform task), Exit Section (signal that task is done), and Remainder Section (other code). Solutions can be Software-based (Peterson's algorithm), Hardware-based (Test-and-Set instructions), or OS-level (Semaphores and Monitors).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Requirement", "Description"],
              rows: [
                ["Mutual Exclusion", "Only one process can be in the CS at a time."],
                ["Progress", "If no one is in CS, a waiting process should enter without delay."],
                ["Bounded Waiting", "There is a limit on how many times others can enter before a specific process."]
              ]
            }
          },
          keyPoints: [
            "Prevents Race Conditions.",
            "Mutual Exclusion is the most critical requirement.",
            "Hardware solutions are more efficient on modern CPUs.",
            "Semaphores provide a robust high-level abstraction."
          ]
        }
      },
      {
        id: "1e",
        questionText: "Draw process state transaction diagram.",
        answer: {
          definition: "A Process State Transaction Diagram illustrates the various stages a process goes through during its lifecycle in an operating system. From the moment it is created until it finishes execution, a process moves between different states managed by the process scheduler. Understanding these transitions is fundamental to understanding CPU scheduling and resource management in modern operating systems.",
          coreConcepts: "The five primary states are: New (being created), Ready (waiting for CPU), Running (instructions executing), Waiting (waiting for an event/IO), and Terminated (finished). Transitions occur based on events: 'Admitted' to move to Ready, 'Scheduler Dispatch' to move to Running, 'Interrupt' to go back to Ready, or 'I/O event' to move between Waiting and Ready.",
          visualRepresentation: {
            type: "diagram",
            content: "State Flow: [New] --(Admitted)--> [Ready] --(Dispatch)--> [Running] --(Exit)--> [Terminated] \n [Running] --(Interrupt)--> [Ready] \n [Running] --(I/O Request)--> [Waiting] --(I/O Complete)--> [Ready]"
          },
          keyPoints: [
            "Ready Queue holds processes waiting for CPU.",
            "Only one process can be in Running state per CPU core.",
            "Context switching occurs during transitions.",
            "Waiting state is for processes blocked by external events."
          ]
        }
      },
      {
        id: "1f",
        questionText: "What are the characteristics of Deadlock?",
        answer: {
          definition: "A Deadlock is a state in which a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process in the set. No process can proceed, leading to a system-wide halt for those specific tasks. For a deadlock to occur, four specific conditions must hold simultaneously within the system, known as the Coffman Conditions.",
          coreConcepts: "The four conditions are: 1. **Mutual Exclusion** (Resources cannot be shared). 2. **Hold and Wait** (Process holds a resource while waiting for another). 3. **No Preemption** (Resources cannot be forcibly taken). 4. **Circular Wait** (A chain of processes exists where each waits for a resource held by the next). If any one of these is prevented, deadlock cannot occur.",
          visualRepresentation: {
            type: "diagram",
            content: "Circular Wait Diagram: [P1] --waits for--> [R1] --held by--> [P2] --waits for--> [R2] --held by--> [P1]"
          },
          keyPoints: [
            "Deadlock is a 'deadly embrace' of processes.",
            "All 4 Coffman conditions must be met simultaneously.",
            "Resource Allocation Graphs (RAG) help in detecting deadlocks.",
            "Deadlock prevention focuses on breaking one of the 4 conditions."
          ]
        }
      },
      {
        id: "1g",
        questionText: "What is fragmentation and its types?",
        answer: {
          definition: "Fragmentation is a phenomenon in which storage space is used inefficiently, reducing capacity or performance. In the context of OS memory management, it occurs when processes are loaded and removed from memory, leaving small, unusable gaps. It prevents the system from allocating memory to a process even if the total free space is sufficient, leading to degraded system performance and wasted resources.",
          coreConcepts: "There are two main types: 1. **Internal Fragmentation**: Memory is wasted inside a fixed-size block allocated to a process (e.g., giving 50KB to a 40KB request). 2. **External Fragmentation**: Total free memory is sufficient for a request, but it is not contiguous (scattered in small holes). The solution for internal is variable-sized blocks, and for external is 'Compaction' or 'Paging'.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Type", "Occurrence", "Solution"],
              rows: [
                ["Internal", "Fixed-size partitioning", "Dynamic partitioning"],
                ["External", "Variable-size partitioning", "Compaction or Paging"]
              ]
            }
          },
          keyPoints: [
            "Internal fragmentation happens due to over-allocation.",
            "External fragmentation happens due to process churn.",
            "Paging completely eliminates external fragmentation.",
            "Compaction is expensive as it requires moving data."
          ]
        }
      }
    ]
  },
  {
    id: "set2",
    title: "Question Set 2: Memory & Process Management",
    questions: [
      {
        id: "2a",
        questionText: "Explain the layered structure of UNIX operating system with suitable diagram.",
        answer: {
          definition: "The UNIX operating system is designed with a layered (onion-like) architecture that promotes modularity and security. At its core is the Hardware, which is wrapped by the Kernel, followed by the System Call Interface, and finally the Shell and User Applications. This design ensures that user-level programs do not interact directly with hardware, but instead use a standardized interface provided by the kernel.",
          coreConcepts: "1. **Hardware**: The physical machine. 2. **Kernel**: The heart of UNIX; manages CPU, memory, and devices. 3. **Shell**: An interface (CLI) that interprets user commands and calls kernel functions. 4. **User Programs**: Tools like compilers, editors, and user applications. The logic of 'Everything is a file' in UNIX simplifies resource management across these layers.",
          visualRepresentation: {
            type: "diagram",
            content: "Layers: [Hardware] -> [Kernel] -> [System Call Interface] -> [Shell & Utilities] -> [User Applications]"
          },
          keyPoints: [
            "Kernel acts as the primary resource manager.",
            "Shell is the command interpreter.",
            "System calls provide a secure bridge to the kernel.",
            "Layered structure simplifies debugging and updates."
          ]
        }
      },
      {
        id: "2b",
        questionText: "What is semaphore? Explain producer-consumer problem’s solution with semaphore.",
        answer: {
          definition: "A Semaphore is a synchronization tool consisting of an integer variable that is accessed through two standard atomic operations: wait() (or P) and signal() (or V). It is used to manage concurrent access to shared resources. In the Producer-Consumer problem, a producer creates data and puts it in a buffer, while a consumer takes data out. Semaphores ensure that the producer doesn't add to a full buffer and the consumer doesn't take from an empty one.",
          coreConcepts: "Three semaphores are used: 1. **Mutex** (binary semaphore) for mutual exclusion on the buffer. 2. **Empty** (counting semaphore) to track empty slots. 3. **Full** (counting semaphore) to track filled slots. The producer waits for 'empty', locks 'mutex', adds data, unlocks, and signals 'full'. The consumer waits for 'full', locks 'mutex', takes data, unlocks, and signals 'empty'.",
          visualRepresentation: {
            type: "flowchart",
            content: "Producer: wait(empty) -> wait(mutex) -> Add Data -> signal(mutex) -> signal(full) \n Consumer: wait(full) -> wait(mutex) -> Take Data -> signal(mutex) -> signal(empty)"
          },
          implementation: {
            type: "code",
            language: "c",
            content: `// Producer logic
void producer() {
  while(true) {
    produce_item();
    wait(empty);   // Check for empty space
    wait(mutex);   // Enter Critical Section
    add_to_buffer();
    signal(mutex); // Exit Critical Section
    signal(full);  // Increment full count
  }
}`
          },
          keyPoints: [
            "Semaphores prevent race conditions in shared buffers.",
            "Wait operation decrements; Signal operation increments.",
            "Binary semaphores are similar to mutex locks.",
            "Atomic operations ensure thread safety."
          ]
        }
      },
      {
        id: "2c",
        questionText: "What is thread? Explain context-switch between user level threads.",
        answer: {
          definition: "A thread is the smallest unit of execution within a process, sharing the same address space but having its own stack and program counter. User-level threads are managed by a thread library without kernel involvement. Because the kernel is unaware of them, switching between user-level threads is extremely fast as it doesn't require a mode switch from user to kernel mode.",
          coreConcepts: "When a context switch occurs, the library saves the current thread's state (registers, PC, stack pointer) into its Thread Control Block (TCB) in user memory. It then selects another thread from the run queue and restores its state from its TCB. The OS kernel only sees one process and doesn't know that multiple threads are being interleaved inside it.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Action", "Process Switch", "User-Thread Switch"],
              rows: [
                ["Mode Switch", "Required (User to Kernel)", "Not Required"],
                ["Speed", "Slow (Heavyweight)", "Very Fast (Lightweight)"],
                ["Address Space", "Changed", "Remains Same"],
                ["Management", "By Kernel", "By Library"]
              ]
            }
          },
          keyPoints: [
            "Threads share code, data, and files.",
            "User threads are faster but lack parallel execution on multicore if kernel-mapped 1-to-N.",
            "Context switch involves saving/restoring registers.",
            "Library-managed scheduling is invisible to the OS."
          ]
        }
      },
      {
        id: "2d",
        questionText: "What do you mean by thrashing and its cause? Suggest solutions.",
        answer: {
          definition: "Thrashing is a state in which the CPU spends more time swapping pages in and out of memory than executing actual instructions. It occurs when the system's total 'Working Set' (the collection of pages frequently used by processes) exceeds the available physical memory. This leads to a high page fault rate, causing the CPU to wait for disk I/O constantly, resulting in near-zero system throughput.",
          coreConcepts: "The cause is often over-allocation or poor scheduling. When the OS detects low CPU utilization, it might try to increase the degree of multiprogramming by adding more processes. If memory is already tight, this causes more page faults, further decreasing CPU utilization, leading to a vicious cycle. The 'elbow' in the CPU utilization vs. Multiprogramming graph indicates the start of thrashing.",
          visualRepresentation: {
            type: "diagram",
            content: "Cycle: High Page Faults -> CPU Idle (waiting for disk) -> OS adds more processes -> Less memory per process -> Even more Page Faults -> Throughput drops to 0."
          },
          keyPoints: [
            "Working Set Model: Allocate frames based on locality.",
            "Solution: Reduce the degree of multiprogramming.",
            "Solution: Page Fault Frequency (PFF) strategy.",
            "More RAM is the ultimate hardware solution."
          ]
        }
      },
      {
        id: "2e",
        questionText: "Discuss Contiguous memory allocation in details.",
        answer: {
          definition: "Contiguous Memory Allocation is a memory management technique where each process is contained in a single contiguous block of memory. When a process arrives, the OS searches for a large enough hole (a block of free memory) to accommodate it. It is one of the simplest methods but suffers from external fragmentation as processes are created and deleted over time.",
          coreConcepts: "Memory is typically divided into two partitions: one for the OS (usually in low memory) and one for user processes. Allocation strategies include: 1. **First Fit**: Allocate the first hole that is big enough. 2. **Best Fit**: Allocate the smallest hole that is big enough (requires searching all). 3. **Worst Fit**: Allocate the largest available hole. Protection is handled by relocation and limit registers.",
          visualRepresentation: {
            type: "diagram",
            content: "Layout: [OS (0-100K)] | [Process A (100-300K)] | [Free Hole (300-400K)] | [Process B (400-550K)]"
          },
          keyPoints: [
            "Relocation register allows dynamic address translation.",
            "Limit register ensures memory protection.",
            "Suffers from External Fragmentation.",
            "Compaction can be used to merge free holes."
          ]
        }
      }
    ]
  },
  {
    id: "set3",
    title: "Question Set 3: Security & Interrupts",
    questions: [
      {
        id: "3a",
        questionText: "Various security issues in multiprogramming and time-shared systems.",
        answer: {
          definition: "In multiprogramming and time-shared systems, multiple users and processes share common resources like CPU, memory, and disks. This environment introduces significant security risks because a malicious or buggy process could potentially read or overwrite another user's data. The goal of security is to ensure confidentiality, integrity, and availability for all users in the shared ecosystem.",
          coreConcepts: "1. **Data Leakage**: One process accessing another's memory. 2. **Denial of Service (DoS)**: One user hogging all CPU/RAM, preventing others from working. 3. **Unauthorized Access**: Users accessing files they don't own. 4. **Trojan Horses**: Programs that look innocent but perform malicious actions. The OS must implement strict memory protection (Base/Limit registers) and access control lists (ACLs).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Security Goal", "Threat", "OS Defense"],
              rows: [
                ["Confidentiality", "Memory Snooping", "Virtual Memory / Paging"],
                ["Availability", "Resource Exhaustion", "Quotas and Scheduling"],
                ["Integrity", "Unauthorized Write", "File Permissions (chmod)"]
              ]
            }
          },
          keyPoints: [
            "Dual-mode operation (User/Kernel) is the first line of defense.",
            "Virtual memory provides isolated address spaces.",
            "Passwords and Biometrics handle authentication.",
            "Auditing logs help in detecting breaches."
          ]
        }
      },
      {
        id: "3b",
        questionText: "Explain Interrupt driven operation and interrupt processing steps.",
        answer: {
          definition: "An Interrupt is a signal sent by hardware or software to the CPU indicating an event that needs immediate attention. Interrupt-driven operation allows the CPU to perform other tasks instead of constantly polling devices to see if they are ready. This significantly improves efficiency, as the CPU only reacts when a device explicitly 'interrupts' its current execution flow.",
          coreConcepts: "When an interrupt occurs, the CPU saves its current state, identifies the interrupt source, and jumps to a specific piece of code called the Interrupt Service Routine (ISR). After the ISR finishes, the CPU restores its previous state and resumes where it left off. The 'Logic' is to handle asynchronous events without wasting CPU cycles on 'busy waiting'.",
          visualRepresentation: {
            type: "flowchart",
            content: "1. Device issues Interrupt -> 2. CPU finishes current instruction -> 3. Save PC and Registers -> 4. Load ISR address from Vector Table -> 5. Execute ISR -> 6. Restore State -> 7. Resume Program."
          },
          keyPoints: [
            "Asynchronous: Can happen at any time.",
            "Interrupt Vector Table stores ISR addresses.",
            "Maskable vs. Non-maskable interrupts.",
            "Software interrupts are called 'traps' or 'exceptions'."
          ]
        }
      }
    ]
  },
  {
    id: "set4",
    title: "Question Set 4: Critical Section & Synchronization",
    questions: [
      {
        id: "4a",
        questionText: "Differentiate between Algorithmic CS, Dekker’s, and Peterson’s solution.",
        answer: {
          definition: "Algorithmic approaches to the Critical Section problem are software-based synchronization protocols that don't rely on hardware instructions. They use shared variables to coordinate entry into the critical section. While early attempts (Two-way solutions) often failed one of the three requirements (Mutual Exclusion, Progress, Bounded Waiting), Dekker's and Peterson's algorithms provided the first complete solutions for two-process synchronization.",
          coreConcepts: "A **Two-way solution** using just a 'turn' variable ensures Mutual Exclusion but fails Progress. One using a 'flag' array might lead to Deadlock. **Dekker's Algorithm** was the first complete solution using both turn and flag, but it is complex. **Peterson's Algorithm** simplified this into a more elegant 2-line entry protocol that is easier to prove and implement.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Feature", "Dekker's", "Peterson's"],
              rows: [
                ["Complexity", "High (complex nested logic)", "Low (simple and elegant)"],
                ["Variables", "flag[2] and turn", "flag[2] and turn"],
                ["Logic", "Favors the process whose turn it is", "Favors the other process (yielding)"],
                ["Status", "Historically significant", "Standard textbook solution"]
              ]
            }
          },
          keyPoints: [
            "Peterson's is restricted to two processes.",
            "Requires atomic load and store operations.",
            "Modern architectures use hardware locks (Mutex) instead.",
            "Both ensure all three CS requirements are met."
          ]
        }
      },
      {
        id: "4b",
        questionText: "Sleeping-Barber synchronization problem using monitors.",
        answer: {
          definition: "The Sleeping-Barber problem is a classic inter-process communication and synchronization problem. A barber has one chair for cutting hair and a few chairs for waiting customers. If there are no customers, the barber sleeps. If a customer arrives and all waiting chairs are full, they leave. If the barber is busy but chairs are available, the customer sits. Monitors provide a high-level abstraction (encapsulating data and functions) to solve this without the complexity of raw semaphores.",
          coreConcepts: "A Monitor `BarberShop` would contain variables: `waiting` (count of customers), `barberReady` (condition), and `customerReady` (condition). The `getHaircut()` method for customers increments `waiting`, signals `customerReady`, and waits on `barberReady`. The `cutHair()` method for the barber waits on `customerReady`, signals `barberReady`, and performs the work. The monitor's mutual exclusion ensures the `waiting` count is updated safely.",
          visualRepresentation: {
            type: "diagram",
            content: "Monitor BarberShop { \n int waiting; \n condition barber, customer; \n entry cutHair() { ... } \n entry getHaircut() { ... } \n }"
          },
          keyPoints: [
            "Monitors ensure mutual exclusion automatically.",
            "Condition variables handle signaling between threads.",
            "Eliminates potential for deadlock common in semaphores.",
            "Logic: Barber sleeps if waiting == 0."
          ]
        }
      }
    ]
  },
  {
    id: "set5",
    title: "Question Set 5: Scheduling & Deadlocks (Numerical)",
    questions: [
      {
        id: "5a",
        questionText: "Round Robin Scheduling Numerical Analysis (P1-P4).",
        answer: {
          definition: "Round Robin (RR) is a preemptive scheduling algorithm where each process is assigned a small unit of CPU time called a time quantum. If a process doesn't finish within its quantum, it is moved to the back of the ready queue. This ensures fairness and is ideal for time-sharing systems. In this example, we calculate the performance metrics for four processes with specific arrival and execution times.",
          coreConcepts: "Quantum = 2. Calculations: 1. Turnaround Time (TAT) = Exit Time - Arrival Time. 2. Waiting Time (WT) = TAT - Execution Time. 3. Normalized TAT = TAT / Execution Time. The Gantt chart tracks the CPU allocation in intervals of 2 units.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Process", "Arrival", "Burst", "Exit", "TAT", "WT", "NTAT"],
              rows: [
                ["P1", "0", "9", "21", "21", "12", "2.33"],
                ["P2", "1", "5", "18", "17", "12", "3.4"],
                ["P3", "2", "3", "12", "10", "7", "3.33"],
                ["P4", "3", "4", "16", "13", "9", "3.25"]
              ]
            }
          },
          implementation: {
            type: "numerical",
            content: "Gantt Chart: P1(0-2) -> P2(2-4) -> P3(4-6) -> P1(6-8) -> P4(8-10) -> P2(10-12) -> P3(12-13) -> P1(13-15) -> P4(15-17) -> P2(17-18) -> P1(18-20) -> P1(20-21). \n Averages: Avg TAT = 15.25, Avg WT = 10.0, Avg NTAT = 3.08."
          },
          keyPoints: [
            "RR is fair and prevents starvation.",
            "Efficiency depends heavily on the time quantum.",
            "Context switch overhead increases as quantum decreases.",
            "TAT is the total time from submission to completion."
          ]
        }
      },
      {
        id: "5b",
        questionText: "Explain Banker’s Algorithm for Deadlock avoidance in details.",
        answer: {
          definition: "The Banker's Algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources. It makes a 's-check' before actually allocating resources to ensure the system doesn't enter an unsafe state. It is named so because it is used in banking systems to ensure that the bank never runs out of cash to meet the needs of all its customers.",
          coreConcepts: "The algorithm uses several data structures: `Available` (current free resources), `Max` (maximum demand), `Allocation` (currently held), and `Need` (Max - Allocation). When a process requests resources, the system checks if `Request <= Available`. If so, it pretends to allocate and checks if a 'Safe Sequence' exists where all processes can finish. If yes, allocation is granted; otherwise, the process must wait.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Matrix", "Calculation Logic"],
              rows: [
                ["Allocation", "Currently held resources"],
                ["Max", "Maximum resources required"],
                ["Need", "Need = Max - Allocation"],
                ["Available", "Resources left in the system"]
              ]
            }
          },
          implementation: {
            type: "numerical",
            content: "Example: System with 3 resources (A:10, B:5, C:7). P0 has Allocation (0,1,0) and Max (7,5,3). Need = (7,4,3). If Request is (1,0,2), system checks if this leads to a Safe State where at least one process can fulfill its Need with current Available resources."
          },
          keyPoints: [
            "Avoidance is better than detection/recovery.",
            "Requires processes to declare max needs in advance.",
            "Guarantees that a deadlock will never occur.",
            "Can be slow for systems with many resources/processes."
          ]
        }
      }
    ]
  },
  {
    id: "set6",
    title: "Question Set 6: Paging & Replacement (Numerical)",
    questions: [
      {
        id: "6a",
        questionText: "Effective Memory Access Time (EMAT) with TLB.",
        answer: {
          definition: "The Translation Lookaside Buffer (TLB) is a high-speed cache used to reduce the time taken to access a user's memory location. In a paging system, the CPU must look up the page table to find the frame number, which requires a memory access. TLB stores recent translations, allowing the CPU to skip the page table lookup most of the time. EMAT is the weighted average time to access memory considering both TLB hits and misses.",
          coreConcepts: "EMAT = (Hit Ratio * Time during Hit) + (Miss Ratio * Time during Miss). Hit Time = TLB Search + Memory Access. Miss Time = TLB Search + Page Table Access (Memory) + Memory Access. The goal of TLB is to keep EMAT as close to the hardware memory speed as possible.",
          visualRepresentation: {
            type: "diagram",
            content: "EMAT Components: [TLB Lookup] + [Memory Access]. \n Miss Path: [TLB Lookup] + [Page Table Lookup] + [Memory Access]."
          },
          implementation: {
            type: "numerical",
            content: "Given: TLB Search = 30ns, Mem Access = 90ns, Hit Ratio = 0.7. \n 1. EMAT = 0.7 * (30 + 90) + 0.3 * (30 + 90 + 90) = 0.7 * 120 + 0.3 * 210 = 84 + 63 = 147 ns. \n 2. For EMAT = 130: 130 = x * 120 + (1-x) * 210 => 130 = 120x + 210 - 210x => -80 = -90x => x = 8/9 ≈ 88.8%."
          },
          keyPoints: [
            "TLB is essential for paging performance.",
            "High hit ratio is critical for efficiency.",
            "Misses double the memory access time.",
            "TLB is implemented in hardware (MMU)."
          ]
        }
      },
      {
        id: "6b",
        questionText: "Page Replacement Algorithms Comparison (FIFO, LRU, Optimal).",
        answer: {
          definition: "Page replacement algorithms are used in demand paging to decide which page to remove from memory when a new page needs to be loaded and no frames are free. The goal is to minimize the number of page faults. FIFO is the simplest but can suffer from Belady's Anomaly. LRU (Least Recently Used) approximates the future by looking at the past. Optimal is the theoretical best but impossible to implement as it requires knowledge of the future.",
          coreConcepts: "Reference String: 1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3, 6, 1, 2, 4, 3. (Assuming 3 frames). \n 1. **FIFO**: Replaces the oldest page. \n 2. **LRU**: Replaces the page that hasn't been used for the longest time. \n 3. **Optimal**: Replaces the page that will not be used for the longest period in the future.",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Algorithm", "Page Faults (Estimated for 3 frames)"],
              rows: [
                ["FIFO", "13"],
                ["LRU", "11"],
                ["Optimal", "9"]
              ]
            }
          },
          keyPoints: [
            "Optimal is the benchmark for performance.",
            "LRU is widely used in real systems (via clock algorithm).",
            "FIFO is poor because it ignores frequency and recency.",
            "More frames usually reduce faults (except in FIFO)."
          ]
        }
      }
    ]
  },
  {
    id: "set7",
    title: "Question Set 7: Memory Allocation & Disk Scheduling",
    questions: [
      {
        id: "7a",
        questionText: "Memory Partitioning: First-fit, Best-fit, and Worst-fit Numerical.",
        answer: {
          definition: "Memory allocation strategies determine where to place a process in fixed or dynamic partitions. **First-fit** allocates the first hole that's large enough. **Best-fit** searches for the smallest hole that fits, minimizing wasted space within that block. **Worst-fit** chooses the largest available hole, aiming to leave a large enough remaining hole for other processes. Each has trade-offs in terms of speed and fragmentation.",
          coreConcepts: "Partitions: 100K, 500K, 200K, 300K, 600K. Processes: 212K, 417K, 112K, 426K. \n 1. **First-fit**: 212->500K, 417->600K, 112->200K, 426->None (Failed). \n 2. **Best-fit**: 212->300K, 417->500K, 112->200K, 426->600K (All pass!). \n 3. **Worst-fit**: 212->600K, 417->500K, 112->300K, 426->None (Failed).",
          visualRepresentation: {
            type: "table",
            content: {
              headers: ["Algorithm", "Placement (P1, P2, P3, P4)", "Efficiency"],
              rows: [
                ["First-fit", "500, 600, 200, Failed", "Moderate"],
                ["Best-fit", "300, 500, 200, 600", "High (Most efficient)"],
                ["Worst-fit", "600, 500, 300, Failed", "Low"]
              ]
            }
          },
          keyPoints: [
            "Best-fit reduces internal fragmentation in the chosen block.",
            "First-fit is the fastest to execute.",
            "Worst-fit is often the least effective.",
            "In this scenario, Best-fit is the only one that can accommodate all processes."
          ]
        }
      },
      {
        id: "7b",
        questionText: "Disk Scheduling: LOOK and C-LOOK Analysis.",
        answer: {
          definition: "Disk scheduling algorithms manage the order in which I/O requests for the disk are handled. The goal is to minimize the seek time (the time taken for the disk head to move to the desired cylinder). **LOOK** is a variation of SCAN where the head only goes as far as the last request in each direction. **C-LOOK** (Circular LOOK) always moves in one direction, then jumps back to the start of the first request without servicing on the way back.",
          coreConcepts: "Queue: 6, 10, 12, 15, 34, 44, 45, 54, 73, 97, 110, 128. Head at 23, moving towards 0. \n 1. **LOOK**: 23 -> 15 -> 12 -> 10 -> 6 -> (Reverse) -> 34 -> 44 -> 45 -> 54 -> 73 -> 97 -> 110 -> 128. \n Total Movement = (23-6) + (128-6) = 17 + 122 = 139 cylinders. \n 2. **C-LOOK**: 23 -> 15 -> 12 -> 10 -> 6 -> (Jump) -> 128 -> 110 -> ... -> 34. (Moving decreasing).",
          visualRepresentation: {
            type: "diagram",
            content: "LOOK: Starts at 23 -> sweeps left to 6 -> sweeps right to 128. \n C-LOOK: Starts at 23 -> sweeps left to 6 -> jumps to 128 -> sweeps left back to 34."
          },
          keyPoints: [
            "LOOK avoids going to the edges (0 and 150) if no requests exist.",
            "C-LOOK provides a more uniform waiting time.",
            "Jumps in C-LOOK don't count as 'servicing' time.",
            "Direction of movement is critical for initial scheduling."
          ]
        }
      }
    ]
  }
];
