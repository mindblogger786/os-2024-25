import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, AlgorithmSection, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q5() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={5} title="CPU Scheduling & Deadlock Detection" />

      {/* 5a */}
      <SubQuestion id="q5-a" label="5a" question="Consider the following scenario of processes with time quantum = 2. Draw the Gantt chart for the execution of the processes using improved round robin scheduling. Calculate turnaround time, normalized turnaround time and waiting time.">
        <Definition title="Round Robin Scheduling — Introduction">
          <p><strong>Round Robin (RR)</strong> is a preemptive CPU scheduling algorithm where each process gets a fixed time slice (time quantum) to execute. If a process doesn't complete within its time quantum, it is preempted and moved to the end of the ready queue, and the next process gets the CPU. <strong>Improved Round Robin (IRR)</strong> modifies this by allowing a process to complete execution if its remaining time is less than or equal to the time quantum, reducing unnecessary context switches. IRR also gives preference to newly arriving processes by inserting them ahead of processes that have already consumed CPU time.</p>
          <p className="mt-3">Think of RR like a <strong>buffet line</strong> where each person gets exactly 2 minutes to fill their plate. If you need more food, you go to the back of the line for another turn. In IRR, if your plate is almost full (remaining need ≤ 2 min), you can finish without going to the back — this saves everyone time by avoiding an unnecessary round-trip through the line.</p>
        </Definition>

        <CoreConcepts title="Given Data">
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="px-4 py-3 text-left font-bold text-indigo-800">Process</th>
                  <th className="px-4 py-3 text-center font-bold text-indigo-800">P1</th>
                  <th className="px-4 py-3 text-center font-bold text-indigo-800">P2</th>
                  <th className="px-4 py-3 text-center font-bold text-indigo-800">P3</th>
                  <th className="px-4 py-3 text-center font-bold text-indigo-800">P4</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="px-4 py-2 font-semibold">Arrival Time</td><td className="px-4 py-2 text-center">0</td><td className="px-4 py-2 text-center">1</td><td className="px-4 py-2 text-center">2</td><td className="px-4 py-2 text-center">3</td></tr>
                <tr className="bg-slate-50"><td className="px-4 py-2 font-semibold">Execution Time</td><td className="px-4 py-2 text-center">9</td><td className="px-4 py-2 text-center">5</td><td className="px-4 py-2 text-center">3</td><td className="px-4 py-2 text-center">4</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm"><strong>Time Quantum (TQ) = 2</strong></p>
        </CoreConcepts>

        <DiagramSection title="Step-by-Step Execution — Improved Round Robin (TQ=2)">
          <pre className="text-xs leading-relaxed">{`
IMPROVED ROUND ROBIN RULE:
• Each process gets TQ=2 time units per turn
• If remaining time ≤ TQ, process completes (no preemption)
• After preemption, process goes to end of ready queue

READY QUEUE EVOLUTION:
─────────────────────────────────────────────────────────
Time 0:  P1 arrives.       Queue: [P1(9)]
Time 0-2: P1 runs 2 units. Remaining: 7. Queue: [P2(5)]
           P2 arrived at t=1
Time 2-4: P2 runs 2 units. Remaining: 3. 
           P3 arrived at t=2, P4 at t=3
           Queue: [P3(3), P4(4), P1(7)]
Time 4-6: P3 runs 2 units. Remaining: 1.
           Queue: [P4(4), P1(7), P2(3)]
Time 6-8: P4 runs 2 units. Remaining: 2.
           Queue: [P1(7), P2(3), P3(1)]
Time 8-10: P1 runs 2 units. Remaining: 5.
           Queue: [P2(3), P3(1), P4(2)]
Time 10-12: P2 runs 2 units. Remaining: 1.
           Queue: [P3(1), P4(2), P1(5)]
Time 12: P3 remaining=1 ≤ TQ=2 → COMPLETE (no preempt)
Time 12-13: P3 runs 1 unit → DONE at t=13
           Queue: [P4(2), P1(5), P2(1)]
Time 13: P4 remaining=2 ≤ TQ=2 → COMPLETE (no preempt)
Time 13-15: P4 runs 2 units → DONE at t=15
           Queue: [P1(5), P2(1)]
Time 15-17: P1 runs 2 units. Remaining: 3.
           Queue: [P2(1)]
Time 17: P2 remaining=1 ≤ TQ=2 → COMPLETE
Time 17-18: P2 runs 1 unit → DONE at t=18
           Queue: [P1(3)]
Time 18-20: P1 runs 2 units. Remaining: 1.
Time 20: P1 remaining=1 ≤ TQ → COMPLETE
Time 20-21: P1 runs 1 unit → DONE at t=21

GANTT CHART — Improved Round Robin:
┌────┬────┬────┬────┬────┬────┬────┬───┬───┬────┬───┬───┬───┐
│ P1 │ P2 │ P3 │ P4 │ P1 │ P2 │ P3 │P4 │P1 │ P2 │P1 │P1 │   │
0    2    4    6    8   10   12   13  15  17  18  20  21

Context Switches: 10 (reduced compared to standard RR)
          `}</pre>
        </DiagramSection>

        <CoreConcepts title="Calculations — Improved Round Robin">
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-3 py-2 text-left font-bold text-green-800">Process</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">AT</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">BT</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">CT</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">TAT=CT-AT</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">WT=TAT-BT</th>
                  <th className="px-3 py-2 text-center font-bold text-green-800">NTAT=TAT/BT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white"><td className="px-3 py-2 font-semibold">P1</td><td className="px-3 py-2 text-center">0</td><td className="px-3 py-2 text-center">9</td><td className="px-3 py-2 text-center">21</td><td className="px-3 py-2 text-center">21</td><td className="px-3 py-2 text-center">12</td><td className="px-3 py-2 text-center">2.33</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-semibold">P2</td><td className="px-3 py-2 text-center">1</td><td className="px-3 py-2 text-center">5</td><td className="px-3 py-2 text-center">18</td><td className="px-3 py-2 text-center">17</td><td className="px-3 py-2 text-center">12</td><td className="px-3 py-2 text-center">3.40</td></tr>
                <tr className="bg-white"><td className="px-3 py-2 font-semibold">P3</td><td className="px-3 py-2 text-center">2</td><td className="px-3 py-2 text-center">3</td><td className="px-3 py-2 text-center">13</td><td className="px-3 py-2 text-center">11</td><td className="px-3 py-2 text-center">8</td><td className="px-3 py-2 text-center">3.67</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-semibold">P4</td><td className="px-3 py-2 text-center">3</td><td className="px-3 py-2 text-center">4</td><td className="px-3 py-2 text-center">15</td><td className="px-3 py-2 text-center">12</td><td className="px-3 py-2 text-center">8</td><td className="px-3 py-2 text-center">3.00</td></tr>
                <tr className="bg-green-50 font-bold"><td className="px-3 py-2">Average</td><td className="px-3 py-2"></td><td className="px-3 py-2"></td><td className="px-3 py-2"></td><td className="px-3 py-2 text-center">15.25</td><td className="px-3 py-2 text-center">10.00</td><td className="px-3 py-2 text-center">3.10</td></tr>
              </tbody>
            </table>
          </div>
        </CoreConcepts>

        <DiagramSection title="Standard Round Robin — Gantt Chart & Comparison">
          <pre className="text-xs leading-relaxed">{`
STANDARD RR GANTT CHART (same execution order for this data):
┌────┬────┬────┬────┬────┬────┬───┬───┬────┬───┬───┬───┐
│ P1 │ P2 │ P3 │ P4 │ P1 │ P2 │P3 │P4 │ P1 │P2 │P1 │P1 │
0    2    4    6    8   10   12  13  15  17  18  20  21

NOTE: For this particular data, IRR and standard RR produce
the same Gantt chart because all processes naturally finish
when remaining ≤ TQ. The improvement is in reduced context
switches and more efficient queue management.

COMPARISON TABLE:
┌────────────────┬──────────────┬──────────────┐
│    Metric      │ Standard RR  │ Improved RR  │
├────────────────┼──────────────┼──────────────┤
│ Avg TAT        │   15.25      │   15.25      │
│ Avg WT         │   10.00      │   10.00      │
│ Avg Norm. TAT  │   3.10       │   3.10       │
│ Context Switch │   10         │   10         │
└────────────────┴──────────────┴──────────────┘

For this data set, metrics are identical. IRR shows greater
benefits when processes have varied burst times where some
finish just after TQ expiry in standard RR.

KEY FORMULAS:
  TAT (Turnaround Time) = Completion Time - Arrival Time
  WT  (Waiting Time)    = TAT - Burst Time
  NTAT (Normalized TAT) = TAT / Burst Time  (≥ 1.0 always)
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Time-Shared Computing Lab">
            <p className="text-sm">In a university computer lab with 20 terminals sharing one server, Round Robin with TQ=2 ensures fair CPU access. Student P1 running a large compilation (9 time units), Student P2 editing a file (5 units), Student P3 checking email (3 units), and Student P4 browsing (4 units). With RR, no student waits more than 6 time units before getting a response (time between turns = 3 processes × TQ = 6). Without RR, P1 would monopolize the CPU for 9 units.</p>
          </Example>
          <Example num={2} title="Cloud Task Scheduling">
            <p className="text-sm">AWS Lambda uses round-robin-like scheduling for concurrent function executions. If 4 functions with execution times 9ms, 5ms, 3ms, and 4ms are triggered simultaneously, the scheduler allocates small time slices to each. Shorter tasks (3ms, 4ms) complete sooner, freeing resources. The improved RR approach avoids preempting a function that's about to complete, saving the overhead of saving/restoring execution context — critical for cloud cost optimization.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Round Robin: Preemptive, each process gets TQ time units, fair scheduling.",
          "Improved RR: Allows process to complete if remaining ≤ TQ, reduces context switches.",
          "TAT = Completion Time - Arrival Time; WT = TAT - Burst Time; NTAT = TAT/BT.",
          "Average TAT = 15.25, Average WT = 10.00, Average NTAT = 3.10.",
          "IRR advantage: fewer context switches, better for processes with burst times close to TQ.",
          "Time quantum choice is critical: too small → high overhead; too large → degenerates to FCFS.",
          "Typical TQ: 10-100 milliseconds in real systems.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 5b */}
      <SubQuestion id="q5-b" label="5b" question="Explain Banker's Algorithm for Deadlock detection in details with Example?">
        <Definition title="Banker's Algorithm — Introduction">
          <p><strong>Banker's Algorithm</strong> is a deadlock avoidance algorithm developed by Edsger Dijkstra. It is named because it models the behavior of a banker who has a fixed amount of capital (resources) and lends it to multiple clients (processes). The banker must ensure that lending money never leads to a situation where no client can complete their transactions (deadlock). Before granting a loan (resource request), the banker checks whether granting it would leave the system in a <strong>safe state</strong> — a state where there exists some sequence of process completions that allows all processes to eventually finish.</p>
          <p className="mt-3">Imagine a <strong>bank with ₹10,000 capital</strong> and three clients: A needs ₹7,000 total (has ₹3,000), B needs ₹4,000 total (has ₹2,000), C needs ₹5,000 total (has ₹1,000). Currently lent: ₹6,000. Free: ₹4,000. If A asks for ₹2,000 more (total ₹5,000 lent), can the banker grant it? After granting: Free = ₹2,000. Can any client finish with ₹2,000? B needs ₹2,000 more — yes! B completes → returns ₹4,000. Free = ₹6,000. A needs ₹2,000 → A completes → returns ₹7,000. C gets ₹4,000 → C completes. All finish! So it's safe to grant. This is exactly how Banker's Algorithm works.</p>
        </Definition>

        <CoreConcepts title="Data Structures">
          <div className="text-sm space-y-3">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">1. Available[ ] — Available Resources</p>
              <p>Vector of length m (m = number of resource types). Available[j] = number of instances of resource type Rj currently available (not allocated to any process).</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">2. Max[ ][ ] — Maximum Demand</p>
              <p>n × m matrix. Max[i][j] = maximum number of instances of resource Rj that process Pi may ever need. Declared by each process at the beginning.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <p className="font-bold text-amber-800">3. Allocation[ ][ ] — Currently Allocated</p>
              <p>n × m matrix. Allocation[i][j] = number of instances of resource Rj currently allocated to process Pi.</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
              <p className="font-bold text-purple-800">4. Need[ ][ ] — Remaining Need</p>
              <p>n × m matrix. Need[i][j] = Max[i][j] - Allocation[i][j] = remaining resources that Pi may still need from Rj.</p>
            </div>
          </div>
        </CoreConcepts>

        <AlgorithmSection title="Banker's Algorithm — Safety Algorithm">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// SAFETY ALGORITHM: Check if system is in a safe state

1. Initialize Work = Available  (available resources)
   Initialize Finish[i] = false for all i  (no process done)

2. Find an index i such that:
   a) Finish[i] == false
   b) Need[i] ≤ Work  (process can complete with available resources)
   
   If no such i exists → go to step 4

3. Work = Work + Allocation[i]  (pretend Pi finishes, return resources)
   Finish[i] = true
   Go to step 2  (try to find another process)

4. If Finish[i] == true for ALL i → system is in SAFE STATE
   Otherwise → system is in UNSAFE STATE (potential deadlock)

The sequence of processes found in step 2-3 is called the
SAFE SEQUENCE.`}</pre>
        </AlgorithmSection>

        <AlgorithmSection title="Banker's Algorithm — Resource Request Handling">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`// RESOURCE-REQUEST ALGORITHM for Process Pi

// Request[i] = requested resources for Pi
1. If Request[i] > Need[i]:
      ERROR — process exceeded maximum claim

2. If Request[i] > Available:
      WAIT — resources not available, Pi must wait

3. Pretend to allocate (check if safe):
      Available = Available - Request[i]
      Allocation[i] = Allocation[i] + Request[i]
      Need[i] = Need[i] - Request[i]

4. Execute Safety Algorithm:
   If SAFE → Grant the request (resources actually allocated)
   If UNSAFE → Rollback step 3, Pi must wait`}</pre>
        </AlgorithmSection>

        <DiagramSection title="Complete Worked Example">
          <pre className="text-xs leading-relaxed">{`
EXAMPLE: 5 processes (P0-P4), 3 resource types (A, B, C)

TOTAL RESOURCES: A=10, B=5, C=7

     Allocation      Max          Need (= Max - Alloc)
    A  B  C       A  B  C       A  B  C
P0  0  1  0       7  5  3       7  4  3
P1  2  0  0       3  2  2       1  2  2
P2  3  0  2       9  0  2       6  0  0
P3  2  1  1       2  2  2       0  1  1
P4  0  0  2       4  3  3       4  3  1

Allocated Total: A=7, B=2, C=5
Available: A=3, B=3, C=2

SAFETY CHECK:
Step 1: Work = (3,3,2), Finish = [F,F,F,F,F]

Step 2: Find i where Finish[i]=false and Need[i] ≤ Work
  P0: Need=(7,4,3) > Work=(3,3,2)? YES → skip
  P1: Need=(1,2,2) ≤ Work=(3,3,2)? YES → SELECT P1

Step 3: Work = (3,3,2) + (2,0,0) = (5,3,2), Finish[P1]=true

Step 2: 
  P3: Need=(0,1,1) ≤ Work=(5,3,2)? YES → SELECT P3
Step 3: Work = (5,3,2) + (2,1,1) = (7,4,3), Finish[P3]=true

Step 2:
  P0: Need=(7,4,3) ≤ Work=(7,4,3)? YES → SELECT P0
Step 3: Work = (7,4,3) + (0,1,0) = (7,5,3), Finish[P0]=true

Step 2:
  P2: Need=(6,0,0) ≤ Work=(7,5,3)? YES → SELECT P2
Step 3: Work = (7,5,3) + (3,0,2) = (10,5,5), Finish[P2]=true

Step 2:
  P4: Need=(4,3,1) ≤ Work=(10,5,5)? YES → SELECT P4
Step 3: Work = (10,5,5) + (0,0,2) = (10,5,7), Finish[P4]=true

ALL Finish = true → SAFE STATE ✓
SAFE SEQUENCE: P1 → P3 → P0 → P2 → P4

This means all processes can complete in this order.
System is NOT in deadlock.
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Database Connection Pool">
            <p className="text-sm">A web server has a pool of 10 database connections. Service A needs max 4 connections (currently holds 2), Service B needs max 6 (holds 3), Service C needs max 5 (holds 1). Available = 4. If Service B requests 2 more: pretend to grant → Available=2, B holds 5. Check safety: Can A finish? Need=2 ≤ Available=2 → Yes. A returns 4 → Available=6. C needs 4 ≤ 6 → Yes. B needs 1 ≤ 10 → Yes. Safe! Grant the request. This is Banker's Algorithm applied to connection management.</p>
          </Example>
          <Example num={2} title="Cloud Resource Allocation">
            <p className="text-sm">A cloud provider has 100 VMs, 50 GPUs, and 200 TB storage. Three clients declare maximum needs: Client X (50 VMs, 30 GPUs, 80TB), Client Y (40 VMs, 20 GPUs, 100TB), Client Z (30 VMs, 15 GPUs, 60TB). The provider uses Banker's Algorithm to decide if each new resource request can be safely granted without risking a deadlock where no client can complete their workload and release resources.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Banker's Algorithm = Deadlock Avoidance (prevention at runtime).",
          "Named because it models a banker lending money safely to multiple clients.",
          "Four data structures: Available, Max, Allocation, Need (= Max - Allocation).",
          "Safety Algorithm checks if system is in a safe state (safe sequence exists).",
          "Safe state → all processes can complete in some order → no deadlock.",
          "Unsafe state → deadlock MAY occur (not guaranteed, but possible).",
          "Limitation: Requires knowing maximum resource needs in advance (often impractical).",
          "Time complexity: O(m × n²) for safety check with n processes and m resource types.",
        ]} />
      </SubQuestion>
    </div>
  );
}
