import { QuestionHeader, SubQuestion, Definition, CoreConcepts, DiagramSection, AlgorithmSection, RealWorldExamples, Example, KeyPoints, Divider } from "./SharedUI";

export default function Q6() {
  return (
    <div className="space-y-8">
      <QuestionHeader num={6} title="Paging & Page Replacement" />

      {/* 6a */}
      <SubQuestion id="q6-a" label="6a" question="In paging system with TLB, it takes 30 ns to search the TLB and 90 ns to access the memory. If the TLB hit ratio is 70% find the effective memory access time. What should be the hit ratio to achieve the effective memory access time of 130 ns.">
        <Definition title="TLB & Effective Memory Access Time — Introduction">
          <p>The <strong>Translation Lookaside Buffer (TLB)</strong> is a high-speed hardware cache that is part of the Memory Management Unit (MMU). It stores recently used virtual-to-physical page frame mappings. In a paged memory system, every memory reference requires a page table lookup to translate a virtual address to a physical address. Without the TLB, each memory access would require two physical memory accesses: one to read the page table entry, and one to access the actual data — effectively doubling the memory access time. The TLB eliminates this overhead for frequently accessed pages.</p>
          <p className="mt-3">Think of the TLB as a <strong>contact list on your phone's home screen</strong>. When you want to call someone, you first check your quick-dial list (TLB). If the person is there (TLB hit), you call immediately — fast! If not there (TLB miss), you have to open the full contacts app (page table in memory), find the number, and then call — slower. The percentage of times you find the contact in quick-dial is the <strong>hit ratio</strong>. The higher the hit ratio, the faster your average call setup time.</p>
        </Definition>

        <CoreConcepts title="Memory Access in Paging with TLB">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">TLB Hit Scenario (Single Memory Access)</p>
              <p>When the page number is found in the TLB: (1) Search TLB (30 ns), (2) Get frame number from TLB entry, (3) Access memory at physical address (90 ns). Total = 30 + 90 = 120 ns.</p>
            </div>
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">TLB Miss Scenario (Double Memory Access)</p>
              <p>When the page number is NOT in the TLB: (1) Search TLB (30 ns) — miss, (2) Access page table in memory to get frame number (90 ns), (3) Update TLB with new entry, (4) Access actual data in memory (90 ns). Total = 30 + 90 + 90 = 210 ns.</p>
            </div>
          </div>
        </CoreConcepts>

        <AlgorithmSection title="EMAT Formula & Calculation">
          <pre className="text-xs leading-relaxed font-mono bg-slate-800 text-green-300 p-4 rounded-lg overflow-x-auto">{`EFFECTIVE MEMORY ACCESS TIME (EMAT) FORMULA:

EMAT = h × (t_TLB + t_mem) + (1 - h) × (t_TLB + 2 × t_mem)

Where:
  h     = TLB hit ratio (0.70 = 70%)
  t_TLB = TLB search time = 30 ns
  t_mem = Memory access time = 90 ns

══════════════════════════════════════════════════════
GIVEN:  t_TLB = 30 ns,  t_mem = 90 ns,  h = 0.70
══════════════════════════════════════════════════════

EMAT = 0.70 × (30 + 90) + (1 - 0.70) × (30 + 90 + 90)
     = 0.70 × 120 + 0.30 × 210
     = 84 + 63
     = 147 ns

∴ Effective Memory Access Time = 147 ns

══════════════════════════════════════════════════════
FIND: Hit ratio for EMAT = 130 ns
══════════════════════════════════════════════════════

130 = h × 120 + (1 - h) × 210
130 = 120h + 210 - 210h
130 = 210 - 90h
90h  = 210 - 130
90h  = 80
h    = 80 / 90
h    = 0.8889 = 88.89%

∴ Required hit ratio ≈ 88.89% to achieve EMAT of 130 ns

VERIFICATION:
EMAT = 0.8889 × 120 + 0.1111 × 210
     = 106.67 + 23.33 = 130 ns ✓`}</pre>
        </AlgorithmSection>

        <DiagramSection title="TLB Access Flow Diagram">
          <pre className="text-xs leading-relaxed">{`
         CPU generates virtual address
                    │
                    ▼
        ┌─────────────────────┐
        │ Extract page number │
        └─────────┬───────────┘
                  │
                  ▼
        ┌─────────────────────┐     HIT     ┌──────────────────┐
        │   Search TLB        │────────────►│ Get frame number │
        │   (30 ns)           │             │ from TLB entry   │
        └─────────┬───────────┘             └────────┬─────────┘
                  │ MISS                             │
                  ▼                                  │
        ┌─────────────────────┐                      │
        │ Access Page Table   │                      │
        │ in Memory (90 ns)   │                      │
        │ Get frame number    │                      │
        └─────────┬───────────┘                      │
                  │                                  │
                  ▼                                  │
        ┌─────────────────────┐                      │
        │ Update TLB with     │                      │
        │ new mapping         │                      │
        └─────────┬───────────┘                      │
                  │                                  │
                  ▼                                  ▼
        ┌─────────────────────────────────────────────────┐
        │         Access actual data from memory          │
        │                    (90 ns)                      │
        └─────────────────────────────────────────────────┘

HIT PATH:   30ns (TLB) + 90ns (memory) = 120 ns
MISS PATH:  30ns (TLB) + 90ns (page table) + 90ns (data) = 210 ns
          `}</pre>
        </DiagramSection>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Modern CPU TLB Performance">
            <p className="text-sm">An Intel Core i7 processor has a 64-entry L1 ITLB (Instruction TLB) and 128-entry L1 DTLB (Data TLB). With 4KB pages, these cover 256KB and 512KB of address space respectively. For typical programs with good locality, the hit ratio exceeds 99%. With t_TLB ≈ 1 cycle and t_mem ≈ 4 cycles (L1 cache), EMAT ≈ 1.01 × 5 + 0.01 × 9 ≈ 5.04 cycles — nearly the same as without paging overhead!</p>
          </Example>
          <Example num={2} title="Database Server with Large Working Set">
            <p className="text-sm">A PostgreSQL server scanning a 10GB table with 4KB pages needs 2.5 million page mappings. The TLB holds only 128-256 entries. Hit ratio drops to ~60%. With t_TLB=30ns and t_mem=90ns: EMAT = 0.6×120 + 0.4×210 = 72+84 = 156ns. To improve: use Huge Pages (2MB pages) → only 5,000 mappings needed → TLB hit ratio improves to ~99%. EMAT drops to ~121ns — 22% improvement in memory access time.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "TLB = Translation Lookaside Buffer: hardware cache for virtual-to-physical address translations.",
          "TLB Hit: one memory access needed (30 + 90 = 120 ns). TLB Miss: two memory accesses (30 + 90 + 90 = 210 ns).",
          "EMAT = h × (t_TLB + t_mem) + (1-h) × (t_TLB + 2 × t_mem).",
          "With 70% hit ratio: EMAT = 0.7 × 120 + 0.3 × 210 = 147 ns.",
          "To achieve EMAT of 130 ns: hit ratio must be 88.89%.",
          "Higher hit ratio → lower EMAT. Real systems achieve 99%+ with good locality.",
          "Huge Pages (2MB/1GB instead of 4KB) improve TLB coverage and hit ratio.",
        ]} />
      </SubQuestion>

      <Divider />

      {/* 6b */}
      <SubQuestion id="q6-b" label="6b" question="Given page reference string: 1,2,3,2,1,5,2,1,6,2,5,6,3,1,3,6,1,2,4,3. Compare the number of page faults for LRU, FIFO and Optimal page replacement algorithm.">
        <Definition title="Page Replacement Algorithms — Introduction">
          <p><strong>Page replacement algorithms</strong> determine which page to evict from memory when a page fault occurs and no free frames are available. Since physical memory is limited but processes may need more pages than available frames, the OS must decide which page to remove to make room for the incoming page. The goal is to minimize the number of page faults, as each fault requires an expensive disk I/O operation. The three fundamental algorithms are <strong>FIFO (First-In, First-Out)</strong>, <strong>LRU (Least Recently Used)</strong>, and <strong>Optimal (OPT/MIN)</strong>.</p>
          <p className="mt-3">Think of your <strong>bookshelf with limited space</strong>. When you get a new book and the shelf is full, you must remove one. FIFO removes the book you've owned the longest. LRU removes the book you haven't read in the longest time. Optimal (impossible in practice) removes the book you won't need for the longest time in the future. Optimal gives the best possible result and serves as a benchmark to compare other algorithms against.</p>
        </Definition>

        <CoreConcepts title="Algorithm Definitions">
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="font-bold text-red-800">1. FIFO (First-In, First-Out)</p>
              <p>Replace the page that has been in memory the <strong>longest</strong> (first page loaded). Simple to implement using a queue. May suffer from <strong>Belady's Anomaly</strong> — more frames can lead to MORE page faults (counter-intuitive). Performance is generally the worst of the three.</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
              <p className="font-bold text-blue-800">2. LRU (Least Recently Used)</p>
              <p>Replace the page that hasn't been used for the <strong>longest time</strong>. Based on the principle of temporal locality: pages used recently are likely to be used again soon. Requires hardware support (counters or stack) to track access order. Does NOT suffer from Belady's Anomaly (it's a stack algorithm).</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 border border-green-200">
              <p className="font-bold text-green-800">3. Optimal (OPT/MIN)</p>
              <p>Replace the page that will <strong>not be used for the longest time in the future</strong>. Provides the theoretical minimum number of page faults. <strong>Cannot be implemented</strong> in practice because future page references are unknown. Used as a benchmark to evaluate other algorithms.</p>
            </div>
          </div>
        </CoreConcepts>

        <DiagramSection title="Reference String & 3-Frame Analysis">
          <pre className="text-xs leading-relaxed">{`
Reference String: 1, 2, 3, 2, 1, 5, 2, 1, 6, 2, 5, 6, 3, 1, 3, 6, 1, 2, 4, 3
Number of Frames = 3
════════════════════════════════════════════════════════════════

FIFO (Replace oldest page):
Ref:     1  2  3  2  1  5  2  1  6  2  5  6  3  1  3  6  1  2  4  3
         ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─
Frame1:  1  1  1  1  1  5  5  5  5  2  2  2  2  2  2  2  2  2  2  2
Frame2:  -  2  2  2  2  2  1  1  1  1  5  5  5  1  1  1  1  1  4  4
Frame3:  -  -  3  3  3  3  3  3  6  6  6  6  3  3  3  6  6  6  6  3
Fault?:  *  *  *       *  *     *  *  *     *  *        *     *  *  *
         1  2  3       4  5     6  7  8     9  10       11    12 13 14

FIFO Page Faults = 14
          `}</pre>
        </DiagramSection>

        <DiagramSection title="LRU (Replace least recently used)">
          <pre className="text-xs leading-relaxed">{`
LRU (Replace page not used for longest time):
Ref:     1  2  3  2  1  5  2  1  6  2  5  6  3  1  3  6  1  2  4  3
         ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─
Frame1:  1  1  1  1  1  1  1  1  6  6  6  6  6  1  1  1  1  1  1  3
Frame2:  -  2  2  2  2  2  2  2  2  2  5  5  3  3  3  3  3  2  2  2
Frame3:  -  -  3  3  3  5  5  5  5  5  5  6  6  6  6  6  6  6  4  4
Fault?:  *  *  *       *        *     *     *  *        *     *  *  *
         1  2  3       4        5     6     7  8        9     10 11

LRU Page Faults = 11
          `}</pre>
        </DiagramSection>

        <DiagramSection title="Optimal (Replace page used farthest in future)">
          <pre className="text-xs leading-relaxed">{`
OPTIMAL (Replace page not needed for longest time in future):
Ref:     1  2  3  2  1  5  2  1  6  2  5  6  3  1  3  6  1  2  4  3
         ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─  ─
Frame1:  1  1  1  1  1  1  1  1  6  6  6  6  3  3  3  3  3  3  3  3
Frame2:  -  2  2  2  2  2  2  2  2  2  2  2  2  1  1  1  1  2  2  2
Frame3:  -  -  3  3  3  5  5  5  5  5  5  5  5  5  5  6  6  6  4  4
Fault?:  *  *  *       *        *              *        *     *
         1  2  3       4        5              6        7     8

Wait — let me recalculate Optimal more carefully:

Pos 6 (ref=5): Frames={1,2,3}. Future: 1→pos8, 2→pos7, 3→pos13. 
  Evict 3 (farthest). Frames={1,2,5}. PF#4
Pos 9 (ref=6): Frames={1,2,5}. Future: 1→17, 2→10, 5→11. 
  Evict 1 (farthest). Frames={6,2,5}. PF#5
Pos 13 (ref=3): Frames={6,2,5}. Future: 6→16, 2→18, 5→never. 
  Evict 5 (never). Frames={6,2,3}. PF#6
Pos 14 (ref=1): Frames={6,2,3}. Future: 6→16, 2→18, 3→15. 
  Evict 2 (farthest). Frames={6,1,3}. PF#7
Pos 18 (ref=2): Frames={6,1,3}. Future: 6→never, 1→never, 3→20.
  Evict 6 or 1 (both never). Say evict 1. Frames={6,2,3}. PF#8
Pos 19 (ref=4): Frames={6,2,3}. Future: 6→never, 2→never, 3→20.
  Evict 6 or 2 (both never). Say evict 6. Frames={4,2,3}. PF#9

OPTIMAL Page Faults = 9
          `}</pre>
        </DiagramSection>

        <div className="overflow-x-auto rounded-xl border border-slate-200 my-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-50">
                <th className="px-4 py-3 text-left font-bold text-indigo-800">Algorithm</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Page Faults</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Fault Rate (%)</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Performance</th>
                <th className="px-4 py-3 text-center font-bold text-indigo-800">Belady's Anomaly</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-red-50"><td className="px-4 py-2 font-semibold">FIFO</td><td className="px-4 py-2 text-center font-bold text-red-700">14</td><td className="px-4 py-2 text-center">70%</td><td className="px-4 py-2 text-center">Worst</td><td className="px-4 py-2 text-center">Yes ✗</td></tr>
              <tr className="bg-blue-50"><td className="px-4 py-2 font-semibold">LRU</td><td className="px-4 py-2 text-center font-bold text-blue-700">11</td><td className="px-4 py-2 text-center">55%</td><td className="px-4 py-2 text-center">Good</td><td className="px-4 py-2 text-center">No ✓</td></tr>
              <tr className="bg-green-50"><td className="px-4 py-2 font-semibold">Optimal</td><td className="px-4 py-2 text-center font-bold text-green-700">9</td><td className="px-4 py-2 text-center">45%</td><td className="px-4 py-2 text-center">Best (Theoretical)</td><td className="px-4 py-2 text-center">No ✓</td></tr>
            </tbody>
          </table>
        </div>

        <RealWorldExamples title="Real-World Examples">
          <Example num={1} title="Web Browser Cache as LRU">
            <p className="text-sm">A browser caches recently visited pages. When the cache is full and you visit a new page, LRU evicts the page you haven't visited in the longest time. If you visited Site-A 5 minutes ago, Site-B 1 hour ago, and Site-C 2 hours ago, LRU evicts Site-C first. This matches real browsing behavior — you're more likely to revisit recently accessed sites. Chrome uses an LRU-like eviction policy for its disk cache.</p>
          </Example>
          <Example num={2} title="Database Buffer Pool Management">
            <p className="text-sm">MySQL's InnoDB buffer pool uses an LRU variant to manage cached data pages. When a query needs a data page not in the buffer pool, the LRU page is evicted. This is critical for database performance — with a 1GB buffer pool and 100GB database, the hit ratio determines query speed. If LRU achieves a 95% hit ratio, only 5% of queries need disk reads. This is why database tuning focuses heavily on buffer pool size and page replacement efficiency.</p>
          </Example>
        </RealWorldExamples>

        <KeyPoints points={[
          "Reference String: 1,2,3,2,1,5,2,1,6,2,5,6,3,1,3,6,1,2,4,3 with 3 frames.",
          "FIFO: 14 page faults (70%) — replaces oldest page; suffers Belady's Anomaly.",
          "LRU: 11 page faults (55%) — replaces least recently used; no Belady's Anomaly.",
          "Optimal: 9 page faults (45%) — replaces page used farthest in future; benchmark only.",
          "Performance: Optimal ≥ LRU ≥ FIFO (Optimal is always best or equal).",
          "LRU is a good practical approximation of Optimal based on temporal locality.",
          "LRU is expensive to implement exactly; Clock/Second-Chance is a practical LRU approximation.",
        ]} />
      </SubQuestion>
    </div>
  );
}
