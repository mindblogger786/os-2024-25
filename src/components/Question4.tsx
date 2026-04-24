import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, AlgorithmSection, ComparisonTable, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q4() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={4} title="Critical Section & Synchronization" />

      {/* 4a */}
      <SubQuestion id="q4-a" label="4a" question="What do you mean by algorithmic approach to critical section implementation? How Two-way solution works? How it is different from Dekker's solution and Peterson's solution.">
        <Definition title="Algorithmic Approach to Critical Section — Introduction">
          <p>The <strong>algorithmic approach</strong> to critical section implementation refers to software-only solutions that use shared variables (flags, turn indicators) to coordinate access between competing processes — without any special hardware instructions or OS-level primitives. These algorithms are purely based on the logic of shared variable manipulation and are designed to satisfy the three conditions of the critical section problem: <strong>Mutual Exclusion, Progress, and Bounded Waiting</strong>. The evolution of these algorithms — from simple two-flag approaches to Peterson's elegant solution — represents a fascinating journey in concurrent programming theory.</p>
          <p className="mt-3">Think of these algorithms as different <strong>strategies for two people sharing a telephone booth</strong>. Person A and Person B both want to use the phone. They need a protocol that ensures only one uses it at a time (mutual exclusion), that the booth isn't unnecessarily empty when someone wants to use it (progress), and that no one waits forever (bounded waiting). Each algorithm proposes a different protocol — some simpler but flawed, others more complex but correct.</p>
        </Definition>

        <CoreConcepts title="The Evolution of Software Solutions">
          <div className="space-y-4 text-sm">
            <div className="p-4 rounded-lg bg-slate-100 border border-slate-200">
              <p className="font-bold text-slate-800 mb-2">Algorithm 1 — Alternating Turns (Strict Alternation)</p>
              <p>Uses a shared variable <code>turn</code>. Process can only enter when turn equals its ID. Simple but violates progress — if P0 doesn't want to enter, P1 cannot enter even though the critical section is free. Turn must alternate regardless of intent.</p>
              <pre className="mt-2 text-xs bg-white p-2 rounded border">{`// Shared: int turn = 0;
// Process Pi:
while (turn != i);        // Wait for my turn
// Critical Section
turn = j;                  // Give turn to other
// Remainder Section`}</pre>
              <p className="mt-2 text-red-600">❌ Violates Progress — P0 must take its turn before P1 can re-enter</p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800 mb-2">Two-Way Solution (Algorithm 2 — Flag-Based Approach)</p>
              <p>Each process has a boolean flag indicating its intent to enter. Before entering, a process sets its flag and checks if the other process's flag is also set. If so, it waits. This allows any process to enter when the other isn't interested.</p>
              <pre className="mt-2 text-xs bg-white p-2 rounded border">{`// Shared: boolean flag[2] = {false, false};
// Process Pi (j = 1-i):
flag[i] = true;              // I want to enter
while (flag[j]);             // Wait if other wants to enter
// Critical Section
flag[i] = false;             // I'm done
// Remainder Section`}</pre>
              <p className="mt-2 text-amber-600">⚠️ Problem: Both could set flag simultaneously → both wait forever → DEADLOCK</p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800 mb-2">Dekker's Solution (First Correct Software Solution)</p>
              <p>Combines flags AND turn variable. Uses flags to indicate intent and turn to break ties when both want to enter. When both processes want to enter simultaneously, the turn variable decides who goes first. The other process temporarily lowers its flag to let the favored process proceed.</p>
              <pre className="mt-2 text-xs bg-white p-2 rounded border">{`// Shared: boolean flag[2] = {false, false}; int turn = 0;
// Process Pi (j = 1-i):
flag[i] = true;
while (flag[j]) {
    if (turn == j) {
        flag[i] = false;        // Back off
        while (turn == j);      // Wait for my turn
        flag[i] = true;         // Try again
    }
}
// Critical Section
turn = j;
flag[i] = false;
// Remainder Section`}</pre>
              <p className="mt-2 text-green-600">✅ Satisfies all three conditions — but complex and hard to generalize to N processes</p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800 mb-2">Peterson's Solution (Simplified &amp; Elegant)</p>
              <p>Peterson (1981) combined flags and turn into a remarkably simple solution. Process sets its flag, gives the turn to the other process, and then waits only while the other process wants to enter AND it's the other's turn. This elegantly resolves all conflicts.</p>
              <pre className="mt-2 text-xs bg-white p-2 rounded border">{`// Shared: boolean flag[2] = {false, false}; int turn;
// Process Pi (j = 1-i):
flag[i] = true;              // I want to enter
turn = j;                     // Give other priority
while (flag[j] && turn == j); // Wait if other wants AND it's their turn
// Critical Section
flag[i] = false;              // I'm done
// Remainder Section`}</pre>
              <p className="mt-2 text-green-600">✅ Simple, elegant, satisfies all three conditions. Most widely taught solution.</p>
            </div>
          </div>
        </CoreConcepts>

        <ComparisonTable headers={["Aspect", "Two-Way (Algo 2)", "Dekker's Solution", "Peterson's Solution"]}
          rows={[
            ["Mechanism", "Flags only", "Flags + Turn variable", "Flags + Turn variable"],
            ["Mutual Exclusion", "❌ Possible deadlock", "✅ Guaranteed", "✅ Guaranteed"],
            ["Progress", "❌ Violated (deadlock)", "✅ Satisfied", "✅ Satisfied"],
            ["Bounded Waiting", "❌ Violated", "✅ Satisfied", "✅ Satisfied"],
            ["Deadlock-Free", "❌ No", "✅ Yes", "✅ Yes"],
            ["Complexity", "Very simple", "Complex (nested loops)", "Simple (single wait loop)"],
            ["Lines of Code", "~4 lines", "~10 lines", "~5 lines"],
            ["Generalization", "2 processes only", "Difficult to extend", "Can extend to N processes"],
            ["Year Proposed", "Early attempt", "1965 (Dekker)", "1981 (Peterson)"],
            ["Practical Use", "Educational only", "Historical significance", "Foundation for modern sync"],
          ]}
        />

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Two-Way Solution Deadlock Scenario">
            <p className="text-sm">Two processes P0 and P1 both want to enter their critical sections simultaneously. P0 sets flag[0]=true. P1 sets flag[1]=true (almost simultaneously). Now P0 checks flag[1] → true, so it waits. P1 checks flag[0] → true, so it waits. Both are stuck in their while loops forever — <strong>deadlock!</strong> This is exactly why the two-way solution is flawed. Dekker's and Peterson's solutions handle this by using the turn variable as a tie-breaker.</p>
          </Example>
          <Example num={2} title="Peterson's Solution in Practice">
            <p className="text-sm">Consider P0 and P1 both trying to enter. P0 sets flag[0]=true, turn=1. P1 sets flag[1]=true, turn=0 (overwrites). Since turn=0, P0's wait condition (flag[1] &amp;&amp; turn==1) is false → P0 enters. P1's wait condition (flag[0] &amp;&amp; turn==0) is true → P1 waits. After P0 finishes and sets flag[0]=false, P1's wait becomes false → P1 enters. The last writer of turn gets priority — clean and deterministic resolution.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Algorithmic approach: Software-only solutions using shared variables (flags, turn).",
          "Two-Way Solution: Uses flags only; simple but causes deadlock when both set flags simultaneously.",
          "Dekker's Solution: First correct solution; uses flags + turn to break ties; complex.",
          "Peterson's Solution: Simplified Dekker's; flags + turn in a single elegant loop; most widely taught.",
          "Peterson's is preferred: simpler code, same guarantees, easier to understand and verify.",
          "All three solutions satisfy mutual exclusion; only Dekker's and Peterson's also satisfy progress and bounded waiting.",
          "These solutions assume load/store are atomic (may need memory barriers on modern CPUs).",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 4b */}
      <SubQuestion id="q4-b" label="4b" question="Write and explain the solution for Sleeping-Barber classical synchronization problem using monitors.">
        <Definition title="Sleeping-Barber Problem — Introduction">
          <p>The <strong>Sleeping-Barber Problem</strong> is a classic inter-process communication and synchronization problem that models a barbershop with one barber, a barber chair, and a waiting room with a limited number of chairs. The barber cuts hair in the chair. If there are no customers, the barber goes to sleep in the chair. When a customer arrives: if the barber is sleeping, the customer wakes the barber and gets a haircut; if the barber is busy and waiting chairs are available, the customer sits in a waiting chair; if no chairs are available, the customer leaves.</p>
          <p className="mt-3">This problem beautifully illustrates the need for synchronization between multiple processes. The barber and each customer are separate processes. Shared resources include: the barber chair, waiting chairs, and the barber's state (sleeping/awake). Without proper synchronization, problems arise: a customer might try to wake a barber who is already awake, the barber might start cutting when no customer is in the chair, or two customers might try to occupy the same waiting chair. <strong>Monitors</strong> provide an elegant high-level solution.</p>
        </Definition>

        <CoreConcepts title="What is a Monitor?">
          <p>A <strong>monitor</strong> is a high-level synchronization construct that encapsulates shared data and the procedures that operate on it within a single module. Only one process can be active inside the monitor at any time — mutual exclusion is automatically enforced. Processes that cannot proceed use <strong>condition variables</strong> (with wait and signal operations) to block and resume. This eliminates the complexity of managing semaphores manually.</p>
          <pre className="mt-2 text-xs bg-slate-100 p-3 rounded border leading-relaxed">{`// Monitor syntax:
monitor MonitorName {
    // Shared variable declarations
    
    condition condvar;  // Condition variable
    
    procedure entry P1(...) { ... }  // Entry procedures
    procedure entry P2(...) { ... }
    
    // condvar.wait()  → block calling process, release monitor lock
    // condvar.signal() → wake up one waiting process
}`}</pre>
        </CoreConcepts>

        <AlgorithmSection title="Sleeping-Barber Solution Using Monitors">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`monitor BarberShop {
    const int CHAIRS = 5;      // Number of waiting chairs
    int waiting = 0;            // Current number of waiting customers
    condition barber;           // Barber waits here when no customers
    condition customer;         // Customers wait here when shop is full
    condition chairReady;       // Customer waits for chair to be ready
    boolean barberBusy = false;

    // ─── CUSTOMER ARRIVES ───
    procedure entry getHaircut() {
        // If waiting room is full, leave
        if (waiting == CHAIRS) {
            return;              // Customer leaves — shop is full
        }
        
        waiting = waiting + 1;   // Take a waiting chair
        
        if (barberBusy) {
            // Barber is busy — wait in waiting room
            customer.wait();     // Sleep until barber signals
        }
        
        // Now it's this customer's turn
        barberBusy = true;
        
        // Wake up the barber (if sleeping)
        barber.signal();
        
        // Sit in barber chair and get haircut
        chairReady.wait();       // Wait until haircut is done
        
        waiting = waiting - 1;   // Leave the waiting chair
        
        // Signal next waiting customer
        if (waiting > 0) {
            customer.signal();   // Wake up next customer
        } else {
            barberBusy = false;
        }
    }

    // ─── BARBER GETS NEXT CUSTOMER ───
    procedure entry getNextCustomer() {
        if (waiting == 0) {
            // No customers — barber goes to sleep
            barber.wait();       // Sleep until customer arrives
        }
        // Barber is now awake and customer is in chair
    }

    // ─── BARBER FINISHES HAIRCUT ───
    procedure entry finishHaircut() {
        chairReady.signal();     // Tell customer haircut is done
    }
}

// ─── BARBER PROCESS ───
void Barber() {
    while (true) {
        BarberShop.getNextCustomer();  // Get next customer (sleeps if none)
        // ── CUT HAIR (critical work) ──
        cut_hair();
        BarberShop.finishHaircut();     // Signal customer done
    }
}

// ─── CUSTOMER PROCESS ───
void Customer() {
    BarberShop.getHaircut();      // Get haircut (leaves if full)
    // Customer continues with other activities
}

// KEY INSIGHTS:
// 1. Monitor ensures mutual exclusion — only one process active inside
// 2. barber.wait() blocks barber when no customers
// 3. customer.wait() blocks customer when barber is busy
// 4. chairReady.wait() blocks customer during haircut
// 5. No busy waiting — processes sleep until signaled
// 6. Limited chairs prevent unbounded waiting`}</pre>
        </AlgorithmSection>

        <DiagramSection title="Sleeping-Barber State Transitions">
          <pre className="text-xs leading-relaxed">{`
BARBER STATE MACHINE:
  ┌──────────┐  No customers   ┌──────────┐
  │  AWAKE   │──────────────► │ SLEEPING │
  │ (working)│                 │ (waiting)│
  └────┬─────┘                 └────┬─────┘
       │                            │
       │ Customer arrives           │ barber.signal()
       │ (customer.signal())        │ (customer wakes barber)
       │                            │
       ▼                            ▼
  ┌──────────┐  Haircut done  ┌──────────┐
  │ CUTTING  │──────────────► │ CHECK    │
  │ (busy)   │                │ WAITING  │──► Any waiting? 
  └──────────┘                └──────────┘     │
                                                │ Yes → get next customer
                                                │ No  → go to sleep

CUSTOMER STATE MACHINE:
  Customer arrives → Chairs full? → Yes → LEAVE
                                  → No  → WAIT in chair
                                           ↓
                                    Barber free? → Yes → WAKE barber → GET haircut → DONE
                                                  → No  → Wait for signal → GET haircut → DONE

SCENARIO: 3 waiting chairs, Barber sleeping
  1. Customer A arrives → waiting=0, wakes barber → haircut starts
  2. Customer B arrives → barber busy, waiting=1, sits in chair
  3. Customer C arrives → barber busy, waiting=2, sits in chair
  4. Barber finishes A → signals A → A leaves → signals B
  5. Customer D arrives → barber busy, waiting=2, sits in chair
  6. Barber cuts B → signals B → B leaves → signals C
  ... and so on
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Bank Teller System">
            <p className="text-sm">A bank has 1 teller (barber) and 5 chairs in the waiting area. When no customers are present, the teller takes a break (sleeps). Customer arrives: if teller is on break, they wake the teller. If teller is busy and chairs are available, they wait. If no chairs, they leave. This exactly mirrors the sleeping-barber problem. The monitor ensures that: only one customer is served at a time (mutual exclusion), the teller rests when idle (efficiency), and customers are served in an organized manner.</p>
          </Example>
          <Example num={2} title="Technical Support Help Desk">
            <p className="text-sm">A company has 1 technical support engineer (barber) and a queue with 10 slots (waiting chairs). When no tickets are in the queue, the engineer works on documentation (sleeps). A support ticket arrives: if engineer is free, they pick it up immediately. If busy, the ticket goes to the queue. If queue is full (10 tickets), new tickets are rejected with "please try later." The monitor coordinates the engineer and incoming tickets, ensuring no ticket is lost and the engineer isn't idle when work exists.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Sleeping-Barber: Barber sleeps when idle; customer wakes barber or waits or leaves.",
          "Monitor: High-level synchronization with automatic mutual exclusion and condition variables.",
          "Three condition variables: barber (barber sleeps), customer (customer waits), chairReady (during haircut).",
          "Monitor procedures: getHaircut(), getNextCustomer(), finishHaircut().",
          "Advantages over semaphores: No risk of deadlock from wrong signal/wait order, automatic mutual exclusion.",
          "Bounded buffer (limited chairs) prevents unlimited queuing — customer leaves when full.",
          "Real-world applications: Bank tellers, help desks, single-server queuing systems.",
        ]} />
      </SubQuestion>
    </div>
  );
}
