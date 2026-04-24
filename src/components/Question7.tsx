import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, AlgorithmSection, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q7() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={7} title="Memory Allocation & Disk Scheduling" />

      {/* 7a */}
      <SubQuestion id="q7-a" label="7a" question="What is First-fit, Best-fit and Next-fit technique? Given five memory partitions of 100 KB, 500 KB, 200 KB, 300 KB, and 600 KB (in order), how would each of the first-fit, best-fit, and worst-fit algorithms place processes of 212 KB, 417 KB, 112 KB, and 426 KB (in order)? Which algorithm makes the most efficient use of memory?">
        <Definition title="Memory Allocation Strategies — Introduction">
          <p><strong>Memory allocation strategies</strong> determine how the operating system selects a free memory block (hole) from the available list to satisfy a process's memory request. In contiguous memory allocation with variable-sized partitions, free memory blocks of various sizes are maintained in a list. When a process requests memory, the OS must choose which free block to allocate. The choice of strategy significantly impacts memory utilization and the degree of external fragmentation over time.</p>
          <p className="mt-3">Think of these strategies as <strong>different approaches to finding a parking spot</strong>. You need a spot for your car (process). First-Fit: take the first spot that's big enough. Best-Fit: search all spots and take the smallest one that fits (tightest fit). Worst-Fit: take the biggest spot available (leaves the most room for other cars). Next-Fit: start searching from where you left off last time. Each approach has trade-offs in speed and fragmentation.</p>
        </Definition>

        <CoreConcepts title="Allocation Strategy Definitions">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">1. First-Fit</p>
              <p>Allocate the <strong>first hole</strong> that is big enough. Start searching from the beginning of the free list. Once a hole of sufficient size is found, allocate from it (splitting if necessary). <strong>Advantage:</strong> Fast — stops searching as soon as a fit is found. <strong>Disadvantage:</strong> Tends to create many small fragments at the beginning of memory.</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">2. Best-Fit</p>
              <p>Allocate the <strong>smallest hole</strong> that is big enough. Search the entire free list to find the hole whose size is closest to (but ≥) the requested size. <strong>Advantage:</strong> Minimizes wasted space per allocation. <strong>Disadvantage:</strong> Slower (must search entire list); creates many tiny unusable fragments.</p>
            </div>
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
              <p className="font-bold text-amber-800">3. Next-Fit</p>
              <p>Like First-Fit, but starts searching from <strong>where the last allocation was made</strong> (not from the beginning). Uses a roaming pointer. <strong>Advantage:</strong> Distributes allocations more evenly across memory. <strong>Disadvantage:</strong> May break up large free blocks at the end of memory, leaving smaller blocks unusable.</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">4. Worst-Fit</p>
              <p>Allocate the <strong>largest hole</strong> available. Search the entire list to find the biggest free block. <strong>Advantage:</strong> Leaves the largest possible remainder, which might be useful. <strong>Disadvantage:</strong> Slowest (must search entire list); often performs the worst in practice because it breaks up large blocks.</p>
            </div>
          </div>
        </CoreConcepts>

        <CoreConcepts title="Given Data">
          <div className="text-sm space-y-2 mb-4">
            <p><strong>Memory Partitions (in order):</strong> 100 KB, 500 KB, 200 KB, 300 KB, 600 KB</p>
            <p><strong>Processes (in order):</strong> P1 = 212 KB, P2 = 417 KB, P3 = 112 KB, P4 = 426 KB</p>
          </div>
        </CoreConcepts>

        <AlgorithmSection title="Step-by-Step Allocation">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`═══════════════════════════════════════════════════════
FIRST-FIT ALLOCATION
═══════════════════════════════════════════════════════
Initial partitions: [100] [500] [200] [300] [600]

P1 (212 KB): Scan from start
  100 KB → too small        ❌
  500 KB → 500 ≥ 212 ✓ → ALLOCATE HERE
  → 500KB split: 212KB(used) + 288KB(free)
  State: [100] [212|288] [200] [300] [600]

P2 (417 KB): Scan from start
  100 KB → too small        ❌
  288 KB → too small        ❌
  200 KB → too small        ❌
  300 KB → too small        ❌
  600 KB → 600 ≥ 417 ✓ → ALLOCATE HERE
  → 600KB split: 417KB(used) + 183KB(free)
  State: [100] [212|288] [200] [300] [417|183]

P3 (112 KB): Scan from start
  100 KB → too small        ❌
  288 KB → 288 ≥ 112 ✓ → ALLOCATE HERE
  → 288KB split: 112KB(used) + 176KB(free)
  State: [100] [212|112|176] [200] [300] [417|183]

P4 (426 KB): Scan from start
  100 → no, 176 → no, 200 → no, 300 → no, 183 → no
  ❌ CANNOT ALLOCATE P4!

RESULT: 3 of 4 processes placed. P4 waits.

═══════════════════════════════════════════════════════
BEST-FIT ALLOCATION
═══════════════════════════════════════════════════════
Initial partitions: [100] [500] [200] [300] [600]

P1 (212 KB): Find smallest partition ≥ 212
  Candidates: 300(88 wasted), 500(288), 600(388)
  Best = 300 KB (only 88 KB wasted)
  State: [100] [500] [200] [212|88] [600]

P2 (417 KB): Find smallest ≥ 417
  Candidates: 500(83 wasted), 600(183)
  Best = 500 KB (83 KB wasted)
  State: [100] [417|83] [200] [212|88] [600]

P3 (112 KB): Find smallest ≥ 112
  Candidates: 200(88 wasted), 600(488)
  Best = 200 KB (88 KB wasted)
  State: [100] [417|83] [112|88] [212|88] [600]

P4 (426 KB): Find smallest ≥ 426
  Candidates: 600(174 wasted)
  Best = 600 KB (174 KB wasted)
  State: [100] [417|83] [112|88] [212|88] [426|174]

✅ ALL 4 PROCESSES PLACED SUCCESSFULLY!

═══════════════════════════════════════════════════════
WORST-FIT ALLOCATION
═══════════════════════════════════════════════════════
Initial partitions: [100] [500] [200] [300] [600]

P1 (212 KB): Find LARGEST partition
  Largest = 600 KB (388 KB wasted)
  State: [100] [500] [200] [300] [212|388]

P2 (417 KB): Find LARGEST partition
  Largest = 500 KB (83 KB wasted)
  State: [100] [417|83] [200] [300] [212|388]

P3 (112 KB): Find LARGEST partition
  Largest = 388 KB (276 KB wasted)
  State: [100] [417|83] [200] [300] [212|112|276]

P4 (426 KB): Find LARGEST partition
  Largest = 300 KB < 426 KB
  ❌ CANNOT ALLOCATE P4!

RESULT: 3 of 4 processes placed. P4 waits.`}</pre>
        </AlgorithmSection>

        <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-50">
                <th className="px-4 py-3 text-left font-bold text-indigo-800">Algorithm</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">P1 (212KB)</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">P2 (417KB)</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">P3 (112KB)</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">P4 (426KB)</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Placed</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-50"><td className="px-4 py-2 font-semibold">First-Fit</td><td className="px-4 py-2 text-center">500KB</td><td className="px-4 py-2 text-center">600KB</td><td className="px-4 py-2 text-center">288KB</td><td className="px-4 py-2 text-center text-red-600 font-bold">Waiting</td><td className="px-4 py-2 text-center">3/4</td><td className="px-4 py-2 text-center">Moderate</td></tr>
              <tr className="bg-green-50"><td className="px-4 py-2 font-semibold">Best-Fit</td><td className="px-4 py-2 text-center">300KB</td><td className="px-4 py-2 text-center">500KB</td><td className="px-4 py-2 text-center">200KB</td><td className="px-4 py-2 text-center text-green-600 font-bold">600KB</td><td className="px-4 py-2 text-center font-bold">4/4 ✓</td><td className="px-4 py-2 text-center font-bold text-green-700">Best</td></tr>
              <tr className="bg-red-50"><td className="px-4 py-2 font-semibold">Worst-Fit</td><td className="px-4 py-2 text-center">600KB</td><td className="px-4 py-2 text-center">500KB</td><td className="px-4 py-2 text-center">388KB</td><td className="px-4 py-2 text-center text-red-600 font-bold">Waiting</td><td className="px-4 py-2 text-center">3/4</td><td className="px-4 py-2 text-center">Worst</td></tr>
            </tbody>
          </table>
        </div>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Memory Allocation in malloc()">
            <p className="text-sm">The C library's malloc() uses variants of First-Fit (glibc uses a modified first-fit with size-segregated bins). When a program calls malloc(212), the allocator finds the first free block ≥ 212 bytes. This is faster than searching all blocks for the best fit. Modern allocators (jemalloc, tcmalloc) use size-class buckets — small, medium, large — with first-fit within each bucket, achieving both speed and low fragmentation.</p>
          </Example>
          <Example num={2} title="Disk Partition Management">
            <p className="text-sm">When creating virtual machines or disk partitions, the hypervisor must find free disk space. VMware uses best-fit: it finds the smallest contiguous free extent that can hold the VM, minimizing wasted space. This is critical in cloud environments where disk space is expensive and shared among many VMs. First-Fit would be faster but would fragment the disk more quickly, eventually preventing allocation of large VMs.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "First-Fit: First hole ≥ request. Fast but creates small fragments at the beginning.",
          "Best-Fit: Smallest hole ≥ request. Minimizes waste per allocation but creates tiny unusable fragments.",
          "Worst-Fit: Largest hole available. Leaves large remainders but often performs worst overall.",
          "For the given data: Best-Fit places ALL 4 processes; First-Fit and Worst-Fit place only 3.",
          "Best-Fit is most efficient for this particular scenario.",
          "In general practice, First-Fit is recommended — good balance of speed and fragmentation.",
          "Worst-Fit generally performs the worst because it breaks up large free blocks needlessly.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 7b */}
      <SubQuestion id="q7-b" label="7b" question="Consider a disk queue with I/O requests on the following cylinders in their arriving order: 6, 10, 12, 54, 97, 73, 128, 15, 44, 110, 34, 45. The disk head is at cylinder 23 and moving in the direction of decreasing number of cylinders. Calculate and show with diagram the disk head movement using LOOK and C-LOOK scheduling algorithm.">
        <Definition title="Disk Scheduling — LOOK & C-LOOK — Introduction">
          <p><strong>Disk scheduling algorithms</strong> determine the order in which pending I/O requests are serviced to minimize total seek time (the time the disk head moves between cylinders). Efficient disk scheduling is critical because disk I/O is the slowest operation in a computer system — mechanical disk head movement takes orders of magnitude longer than electronic operations. <strong>LOOK</strong> and <strong>C-LOOK (Circular LOOK)</strong> are two elevator-based scheduling algorithms that balance throughput and fairness.</p>
          <p className="mt-3">Think of the disk head as an <strong>elevator in a building</strong>. LOOK is like an elevator that goes up servicing floors, stops at the highest requested floor, then reverses and goes down — it "looks" ahead and reverses when there are no more requests in the current direction. C-LOOK is like a building with a "sky lobby" — the elevator goes up servicing floors, then quickly drops to the lowest floor without stopping, and starts going up again. This provides more uniform waiting times for requests at all floors.</p>
        </Definition>

        <CoreConcepts title="Given Data & Sorted Requests">
          <div className="text-sm space-y-2">
            <p><strong>Request Queue (arrival order):</strong> 6, 10, 12, 54, 97, 73, 128, 15, 44, 110, 34, 45</p>
            <p><strong>Sorted Requests:</strong> 6, 10, 12, 15, 34, 44, 45, 54, 73, 97, 110, 128</p>
            <p><strong>Initial Head Position:</strong> 23</p>
            <p><strong>Direction:</strong> Decreasing (toward cylinder 0)</p>
            <p><strong>Total Cylinders:</strong> 150 (0-149)</p>
            <p className="mt-2"><strong>Below head (23):</strong> 6, 10, 12, 15 &nbsp;&nbsp;|&nbsp;&nbsp; <strong>Above head (23):</strong> 34, 44, 45, 54, 73, 97, 110, 128</p>
          </div>
        </CoreConcepts>

        <DiagramSection title="LOOK Scheduling Algorithm">
          <pre className="text-xs leading-relaxed">{`
LOOK Algorithm:
• Head moves in current direction (decreasing), servicing requests
• Reverses direction when no more requests in current direction
• Does NOT go to disk end — stops at last request ("looks" ahead)

HEAD DIRECTION: Decreasing from 23
═══════════════════════════════════════════════════════

Step 1: Move down from 23 to lowest request
  23 → 15 → 12 → 10 → 6

Step 2: Reverse direction — move UP from 6
  6 → 34 → 44 → 45 → 54 → 73 → 97 → 110 → 128

SERVICE ORDER: 15, 12, 10, 6, 34, 44, 45, 54, 73, 97, 110, 128

MOVEMENT CALCULATION:
┌─────────────┬──────────┬─────────────┐
│  From       │  To      │  Distance   │
├─────────────┼──────────┼─────────────┤
│  23         │  15      │  8          │
│  15         │  12      │  3          │
│  12         │  10      │  2          │
│  10         │  6       │  4          │
│  6          │  34      │  28         │ ← reversal
│  34         │  44      │  10         │
│  44         │  45      │  1          │
│  45         │  54      │  9          │
│  54         │  73      │  19         │
│  73         │  97      │  24         │
│  97         │  110     │  13         │
│  110        │  128     │  18         │
├─────────────┼──────────┼─────────────┤
│       TOTAL HEAD MOVEMENT = 139      │
└─────────────┴──────────┴─────────────┘

VISUAL DIAGRAM (Cylinder positions):
0    10   20   30   40   50   60   70   80   90  100  110  120  130
│    │    │    │    │    │    │    │    │    │    │    │    │    │
│←←←←6←10←12←15
│    ↓(23 start)                                    ↑
│    ↓                                              ↑
│    →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→128
│         34  44 45  54      73         97    110
          `}</pre>
        </DiagramSection>

        <DiagramSection title="C-LOOK Scheduling Algorithm">
          <pre className="text-xs leading-relaxed">{`
C-LOOK (Circular LOOK) Algorithm:
• Head moves in current direction, servicing requests
• When last request in that direction is serviced, jump to
  the request at the OTHER end (circular, not going to disk end)
• Continue in the SAME direction

HEAD DIRECTION: Decreasing from 23
═══════════════════════════════════════════════════════

Step 1: Move DOWN from 23 to lowest request (6)
  23 → 15 → 12 → 10 → 6

Step 2: Circular jump to HIGHEST unserviced request (128)
  6 → [JUMP] → 128

Step 3: Continue DOWN from 128
  128 → 110 → 97 → 73 → 54 → 45 → 44 → 34

SERVICE ORDER: 15, 12, 10, 6, (jump), 128, 110, 97, 73, 54, 45, 44, 34

MOVEMENT CALCULATION:
┌─────────────┬──────────┬─────────────┐
│  From       │  To      │  Distance   │
├─────────────┼──────────┼─────────────┤
│  23         │  15      │  8          │
│  15         │  12      │  3          │
│  12         │  10      │  2          │
│  10         │  6       │  4          │
│  6          │  128     │  122        │ ← circular jump
│  128        │  110     │  18         │
│  110        │  97      │  13         │
│  97         │  73      │  24         │
│  73         │  54      │  19         │
│  54         │  45      │  9          │
│  45         │  44      │  1          │
│  44         │  34      │  10         │
├─────────────┼──────────┼─────────────┤
│       TOTAL HEAD MOVEMENT = 233      │
└─────────────┴──────────┴─────────────┘

VISUAL DIAGRAM (Cylinder positions):
0    10   20   30   40   50   60   70   80   90  100  110  120  130
│    │    │    │    │    │    │    │    │    │    │    │    │    │
│←←←←6←10←12←15
│    ↓(23 start)                       ↗128 (jump)
│    ↓                               ↗  ↓
│    ↓                             ↗    ↓
│    ↓                           ↗      ↓
│    ↓                         ↗        ↓
│                              110→97→73→54→45→44→34

═══════════════════════════════════════════════════════
COMPARISON:
┌────────────┬────────────────┬────────────────┐
│ Metric     │    LOOK        │   C-LOOK       │
├────────────┼────────────────┼────────────────┤
│ Movement   │   139 cylinders│  233 cylinders │
│ Reversal   │   1 (at cyl 6) │  0 (circular)  │
│ Direction  │   Bidirectional│  One-way sweep │
│ Fairness   │   Variable wait│  Uniform wait  │
│ Starvation │   No           │  No            │
│ Best for   │   General use  │  Uniform resp. │
└────────────┴────────────────┴────────────────┘

LOOK has LESS total head movement (139 vs 233)
C-LOOK provides MORE UNIFORM waiting times
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="LOOK in Modern Hard Drives">
            <p className="text-sm">Most modern hard drives use a variant of LOOK (called "elevator seeking" or "deadline scheduling"). Linux's CFQ (Completely Fair Queuing) and Windows' disk scheduler both implement LOOK-like algorithms. When you copy files while browsing, the disk head moves like an elevator — servicing requests in one direction, then reversing. This provides good throughput without starvation. The Linux deadline scheduler uses a per-request deadline (typically 500ms) to prevent any single request from waiting too long.</p>
          </Example>
          <Example num={2} title="C-LOOK in Database Servers">
            <p className="text-sm">Database servers (Oracle, PostgreSQL) often prefer C-LOOK for disk I/O because it provides more predictable response times. In a banking system processing thousands of transactions, C-LOOK ensures that requests for data at both low and high cylinder positions are serviced with similar latency. LOOK would favor requests near the reversal point, potentially causing unpredictable latency spikes for requests at the other end of the disk. C-LOOK's circular sweep treats all regions more equitably.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "LOOK: Head moves in one direction, reverses when no more requests in that direction.",
          "C-LOOK: Like LOOK but jumps circularly from last to first request (no direction reversal).",
          "LOOK total movement = 139 cylinders. C-LOOK total movement = 233 cylinders.",
          "LOOK has less movement; C-LOOK provides more uniform waiting times.",
          "Both prevent starvation — every request is eventually serviced.",
          "LOOK service order: 15→12→10→6→34→44→45→54→73→97→110→128.",
          "C-LOOK service order: 15→12→10→6→(jump)→128→110→97→73→54→45→44→34.",
          "Neither goes to disk end (0 or 149) — they stop at the last request in the direction.",
        ]} />
      </SubQuestion>
    </div>
  );
}
