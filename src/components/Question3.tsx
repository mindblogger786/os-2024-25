import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q3() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={3} title="Security & Interrupts" />

      {/* 3a */}
      <SubQuestion id="q3-a" label="3a" question="What are the various security issues that arise in multiprogramming and time-shared systems?">
        <Definition title="Security in OS — Introduction">
          <p><strong>Security</strong> in an operating system refers to the mechanisms and policies that protect the system's resources (data, programs, hardware) from unauthorized access, modification, or destruction. In a multiprogramming environment where multiple processes coexist in memory, and in time-sharing systems where multiple users simultaneously access the same computer, security becomes a critical concern. The OS must ensure that each user's data and programs are protected from other users, and that the system itself is protected from malicious or accidental damage.</p>
          <p className="mt-3">Think of a multiprogramming system as an <strong>apartment building</strong>. Multiple families (processes/users) share the same building (computer). Each family has their own apartment (memory space) with a lock (protection), but they share common areas like the lobby, elevators, and parking (CPU, disk, network). Security ensures that no family can enter another's apartment, that common resources are used fairly, and that intruders (hackers/malware) cannot break into any apartment or damage the building's infrastructure.</p>
        </Definition>

        <CoreConcepts title="Security Issues in Multiprogramming Systems">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">1. Unauthorized Memory Access</p>
              <p>In multiprogramming, multiple processes reside in memory simultaneously. A malicious or buggy process might attempt to read or modify another process's memory space. For example, Process A could try to read Process B's confidential data or corrupt Process B's code. The OS must enforce <strong>memory protection</strong> using base/limit registers, segmentation, or paging with access control bits to prevent cross-process memory access.</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
              <p className="font-bold text-orange-800">2. Data Integrity &amp; Race Conditions</p>
              <p>When multiple processes access shared data concurrently without proper synchronization, <strong>race conditions</strong> can corrupt data. A process might read partially-updated data, leading to incorrect results. In a banking system, two concurrent withdrawals could result in incorrect balance calculations. The OS must provide synchronization primitives (semaphores, mutexes, monitors) to ensure data integrity.</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <p className="font-bold text-yellow-800">3. Resource Starvation &amp; Denial of Service</p>
              <p>A process might monopolize system resources (CPU, memory, I/O) causing other processes to starve. In extreme cases, a process could intentionally or accidentally consume all available resources, effectively creating a <strong>denial-of-service (DoS)</strong> condition where other processes cannot function. The OS must enforce resource limits, fair scheduling, and process quotas.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">4. Trojan Horses &amp; Malicious Code</p>
              <p>A malicious program disguised as a legitimate one could exploit the shared environment to steal data, install backdoors, or damage the system. In multiprogramming, since processes share the same CPU and memory hardware, a trojan could use <strong>covert channels</strong> (timing, storage) to leak information from other processes, even without direct memory access. Side-channel attacks like Spectre and Meltdown exploit CPU cache behavior.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">5. File System Security</p>
              <p>Multiple processes may try to access, modify, or delete files belonging to other users. Without proper <strong>access control mechanisms</strong> (permissions, ACLs, capabilities), any process could read sensitive files or corrupt critical system files. The OS must enforce file permissions (read, write, execute) on a per-user/per-group basis.</p>
            </div>
          </div>
        </CoreConcepts>

        <CoreConcepts title="Additional Security Issues in Time-Sharing Systems">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800">6. User Authentication &amp; Impersonation</p>
              <p>In time-sharing systems, multiple users access the same computer through terminals. If authentication is weak, an attacker could <strong>impersonate</strong> another user by guessing or stealing passwords. The OS must implement strong authentication (passwords, biometrics, multi-factor) and protect user credentials from interception. Session management must ensure that logged-out users' sessions are completely terminated.</p>
            </div>
            <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
              <p className="font-bold text-pink-800">7. Data Privacy &amp; Eavesdropping</p>
              <p>In time-sharing, users share the same physical hardware. Sensitive data might remain in memory buffers, swap space, or temporary files after a user logs out. Another user could potentially recover this data. The OS must <strong>sanitize memory</strong> (zero-fill freed pages), securely erase temporary files, and encrypt swap space. Additionally, one user might eavesdrop on another's network traffic or terminal I/O.</p>
            </div>
            <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200">
              <p className="font-bold text-indigo-800">8. Privilege Escalation</p>
              <p>A normal user might exploit OS vulnerabilities to gain <strong>root/administrator privileges</strong>, gaining complete control of the system. This is particularly dangerous in time-sharing systems where many users have accounts. Techniques include exploiting buffer overflows in setuid programs, kernel exploits, or race conditions in privilege-checking code. The OS must minimize privileged code, use capability-based security, and regularly patch vulnerabilities.</p>
            </div>
            <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200">
              <p className="font-bold text-cyan-800">9. System Integrity &amp; Availability</p>
              <p>In time-sharing, a malicious user could attempt to crash the system, corrupt the file system, or modify OS code. The OS must protect its own code and data structures using <strong>kernel mode protection</strong>, read-only system partitions, and integrity checking (checksums, digital signatures). The system must remain available to all authorized users despite any single user's actions.</p>
            </div>
          </div>
        </CoreConcepts>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="University Time-Sharing System">
            <p className="text-sm">A university mainframe serves 500 students simultaneously via terminals. Student A writes a program that attempts to read the memory space of Student B's running program (exam answers). The OS prevents this via memory protection — each process's virtual address space is isolated. If Student A tries to access the grade database, file permissions (UNIX rwx) restrict access. If Student A floods the system with fork bombs (DoS), resource limits (ulimit) prevent excessive process creation.</p>
          </Example>
          <Example num={2} title="Cloud Computing (Modern Time-Sharing)">
            <p className="text-sm">AWS, Azure, and GCP are modern time-sharing systems where multiple organizations share the same physical servers. Security issues include: VM escape (one virtual machine accessing another's memory), side-channel attacks (extracting encryption keys via cache timing), cross-tenant data leakage, and API credential theft. Solutions include hardware enclaves (Intel SGX), hypervisor isolation, encryption at rest, network segmentation, and IAM (Identity and Access Management) policies.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Multiprogramming security: Memory protection, data integrity, resource starvation, trojan horses, file security.",
          "Time-sharing security: Authentication, privacy, privilege escalation, system integrity, eavesdropping.",
          "Hardware protection: Dual-mode (kernel/user), base/limit registers, memory management unit (MMU).",
          "Software protection: Access control lists (ACLs), capabilities, encryption, audit logging.",
          "Authentication methods: Passwords, biometrics, multi-factor authentication (MFA), Kerberos.",
          "Modern concerns: Side-channel attacks, VM escape, zero-day exploits, social engineering.",
          "Defense in depth: Multiple layers of security (hardware + OS + application + network).",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 3b */}
      <SubQuestion id="q3-b" label="3b" question="Explain Interrupt driven operation for operating system and also draw neat and clean diagram for steps of interrupt processing.">
        <Definition title="Interrupt-Driven Operation — Introduction">
          <p>An <strong>interrupt</strong> is a signal to the processor that an event needs immediate attention. The <strong>interrupt-driven I/O</strong> model is the foundation of modern operating systems. Instead of the CPU continuously polling (checking repeatedly) whether an I/O device has data ready — wasting millions of CPU cycles — the device sends an interrupt signal when it's ready, and the CPU handles it only then. This allows the CPU to perform useful work while I/O operations proceed in the background, dramatically improving system efficiency.</p>
          <p className="mt-3">Think of interrupts like a <strong>doorbell at home</strong>. Without a doorbell, you'd have to keep checking the door every few seconds to see if someone's there (polling — wastes your time). With a doorbell, you can do other work around the house, and when someone arrives, they ring the bell (interrupt). You temporarily stop what you're doing, answer the door (handle the interrupt), and then resume your previous activity. This is exactly how an interrupt-driven OS works — the CPU does useful computation until a device signals it needs attention.</p>
        </Definition>

        <CoreConcepts title="Types of Interrupts">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">1. Hardware Interrupts (External)</p>
              <p>Generated by external hardware devices: keyboard press, mouse click, disk I/O completion, timer tick, network packet arrival. These arrive asynchronously via the <strong>interrupt controller</strong> (like Intel 8259A or APIC). The CPU detects these between instruction cycles and handles them immediately.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">2. Software Interrupts (Exceptions/Traps)</p>
              <p>Generated by the CPU itself during instruction execution: <strong>System calls</strong> (int 0x80, syscall instruction), <strong>Division by zero</strong>, <strong>Page faults</strong>, <strong>Invalid memory access</strong> (segmentation fault), <strong>Breakpoints</strong> (debugging). These are synchronous — they occur as a direct result of executing an instruction.</p>
            </div>
          </div>
        </CoreConcepts>

        <DiagramSection title="Interrupt Processing — Step-by-Step Diagram">
          <pre className="text-xs leading-relaxed">{`
DEVICE                  CPU                        OS KERNEL
  │                      │                             │
  │   ┌──────────────┐   │                             │
  │   │ Device has   │   │                             │
  │   │ data ready   │   │                             │
  │   │ or event     │   │                             │
  │   └──────┬───────┘   │                             │
  │          │           │                             │
  │   ┌──────▼───────┐   │                             │
  │   │ Send IRQ     │   │                             │
  │   │ (Interrupt   ├───►                             │
  │   │  Request)    │   │                             │
  │   └──────────────┘   │                             │
  │                      │  ┌───────────────────────┐  │
  │                      │  │ Step 1: CPU finishes   │  │
  │                      │  │ current instruction    │  │
  │                      │  └───────────┬───────────┘  │
  │                      │              │              │
  │                      │  ┌───────────▼───────────┐  │
  │                      │  │ Step 2: CPU saves      │  │
  │                      │  │ PC, PSW (Processor     │  │
  │                      │  │ Status Word) to stack  │  │
  │                      │  └───────────┬───────────┘  │
  │                      │              │              │
  │                      │  ┌───────────▼───────────┐  │
  │                      │  │ Step 3: CPU determines │  │
  │                      │  │ interrupt type & looks │  │
  │                      │  │ up Interrupt Vector    │  │
  │                      │  │ Table (IVT) for ISR   │  │
  │                      │  │ address                │  │
  │                      │  └───────────┬───────────┘  │
  │                      │              │              │
  │                      │  ┌───────────▼───────────┐  │
  │                      │  │ Step 4: Transfer      │  │
  │                      │  │ control to Interrupt  │  │
  │                      │  │ Service Routine (ISR) │  │
  │                      │  │ PC = ISR address      │  │
  │                      │  └───────────┬───────────┘  │
  │                      │              │  ┌───────────▼───────────┐
  │                      │              │  │ Step 5: ISR saves     │
  │                      │              │  │ remaining registers   │
  │                      │              │  │ (general purpose)    │
  │                      │              │  │ onto kernel stack     │
  │                      │              │  └───────────┬───────────┘
  │                      │              │              │
  │                      │              │  ┌───────────▼───────────┐
  │                      │              │  │ Step 6: ISR processes │
  │                      │              │  │ the interrupt         │
  │                      │              │  │ (reads device data,  │
  │                      │              │  │ handles event, etc.)  │
  │                      │              │  └───────────┬───────────┘
  │                      │              │              │
  │                      │              │  ┌───────────▼───────────┐
  │                      │              │  │ Step 7: ISR restores  │
  │                      │              │  │ saved registers       │
  │                      │              │  └───────────┬───────────┘
  │                      │              │              │
  │                      │  ┌───────────▼───────────┐  │
  │                      │  │ Step 8: Execute IRET  │  │
  │                      │  │ (Return from         │  │
  │                      │  │  Interrupt)           │  │
  │                      │  │ Restores PC & PSW    │  │
  │                      │  └───────────┬───────────┘  │
  │                      │              │              │
  │                      │  ┌───────────▼───────────┐  │
  │                      │  │ Step 9: Resume        │  │
  │                      │  │ interrupted program   │  │
  │                      │  │ at saved PC           │  │
  │                      │  └───────────────────────┘  │

INTERRUPT VECTOR TABLE (IVT):
┌─────────────────────────────────────────────┐
│ Vector# │ Device/Event      │ ISR Address  │
├─────────────────────────────────────────────┤
│    0    │ Divide by zero    │ 0x1000       │
│    1    │ Timer interrupt   │ 0x2000       │
│    2    │ Keyboard          │ 0x3000       │
│    3    │ Disk controller   │ 0x4000       │
│   ...   │ ...               │ ...          │
│   128   │ System call (sys) │ 0x8000       │
│   14    │ Page fault        │ 0x9000       │
└─────────────────────────────────────────────┘
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Keyboard Input Handling">
            <p className="text-sm">When you press a key on the keyboard: (1) The keyboard controller detects the keypress and generates IRQ 1. (2) The interrupt controller signals the CPU. (3) CPU finishes current instruction, saves PC and PSW to the kernel stack. (4) CPU looks up IVT entry for IRQ 1 → keyboard ISR address. (5) The keyboard ISR reads the scan code from the keyboard port, converts it to a character, places it in the input buffer. (6) ISR sends EOI (End of Interrupt) to the interrupt controller. (7) ISR executes IRET, restoring the saved PC/PSW. (8) The interrupted program resumes — the character appears on screen. This entire process takes microseconds.</p>
          </Example>
          <Example num={2} title="Disk I/O Completion">
            <p className="text-sm">A program requests to read a file: (1) OS sends read command to disk controller and puts the requesting process to sleep (waiting state). (2) CPU continues executing other processes (efficient use of CPU). (3) Disk controller reads data from disk (slow — milliseconds). (4) When data is ready, disk controller raises an interrupt. (5) The disk ISR copies data from disk buffer to process's memory, marks the process as ready. (6) When the scheduler runs the process again, it resumes with the file data available. This interrupt-driven approach avoids CPU waiting during slow disk operations.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Interrupt-driven I/O: CPU doesn't poll devices; devices signal the CPU when ready.",
          "Two types: Hardware interrupts (external devices) and Software interrupts (traps, exceptions, system calls).",
          "Interrupt processing: Finish instruction → Save context → Look up IVT → Execute ISR → Restore context → Resume.",
          "ISR (Interrupt Service Routine): The function that handles a specific interrupt type.",
          "IVT (Interrupt Vector Table): Maps interrupt numbers to ISR addresses.",
          "Dual-mode operation: Interrupts cause transition from user mode to kernel mode.",
          "Interrupts enable multiprogramming: CPU switches to other processes while I/O completes.",
          "Priority interrupts: Some interrupts can be masked (disabled) temporarily; NMI cannot be masked.",
        ]} />
      </SubQuestion>
    </div>
  );
}
