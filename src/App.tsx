import { useState, useEffect } from "react";
import Q1 from "./components/Question1";
import Q2 from "./components/Question2";
import Q3 from "./components/Question3";
import Q4 from "./components/Question4";
import Q5 from "./components/Question5";
import Q6 from "./components/Question6";
import Q7 from "./components/Question7";

const sections = [
  { id: "q1", label: "Q1", title: "OS Fundamentals & Concepts", subs: ["a) OS Definition & Goals", "b) Monolithic vs Micro Kernel", "c) Principle of Concurrency", "d) Critical-Section Problem", "e) Process State Diagram", "f) Deadlock Characteristics", "g) Fragmentation & Types"] },
  { id: "q2", label: "Q2", title: "UNIX, Semaphores, Threads & Memory", subs: ["a) UNIX Layered Structure", "b) Semaphore & Producer-Consumer", "c) Threads & Context Switch", "d) Thrashing & Solutions", "e) Contiguous Memory Allocation"] },
  { id: "q3", label: "Q3", title: "Security & Interrupts", subs: ["a) Security in Multiprogramming", "b) Interrupt-Driven Operation"] },
  { id: "q4", label: "Q4", title: "Critical Section & Synchronization", subs: ["a) Algorithmic Approach to CS", "b) Sleeping-Barber Problem"] },
  { id: "q5", label: "Q5", title: "CPU Scheduling & Deadlock Detection", subs: ["a) Improved Round Robin Scheduling", "b) Banker's Algorithm"] },
  { id: "q6", label: "Q6", title: "Paging & Page Replacement", subs: ["a) TLB & Effective Memory Access", "b) LRU, FIFO & Optimal Page Replacement"] },
  { id: "q7", label: "Q7", title: "Memory Allocation & Disk Scheduling", subs: ["a) Fit Algorithms", "b) LOOK & C-LOOK Scheduling"] },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("q1");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedQ, setExpandedQ] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-[Inter,system-ui,sans-serif]">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">OS</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-slate-900 leading-tight">Operating Systems</h1>
                <p className="text-[10px] text-slate-500 leading-tight">MCA Previous Year Solutions</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeSection === s.id ? "bg-indigo-100 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}>
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full font-medium">✓ 7 Questions Solved</span>
          </div>
        </div>
      </nav>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 z-40 w-72 bg-white border-r border-slate-200 overflow-y-auto transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4">
          <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
            <p className="text-xs font-semibold text-indigo-700 mb-1">📚 Complete Exam Guide</p>
            <p className="text-[10px] text-slate-600">Every answer structured for 10-15 marks with definitions, diagrams, examples & key points.</p>
          </div>
          {sections.map((s) => (
            <div key={s.id} className="mb-2">
              <button onClick={() => { scrollTo(s.id); setExpandedQ(expandedQ === s.id ? null : s.id); }}
                className={`w-full text-left px-3 py-2.5 rounded-lg transition-all flex items-center justify-between group ${activeSection === s.id ? "bg-indigo-50 border border-indigo-200" : "hover:bg-slate-50"}`}>
                <div>
                  <span className={`text-xs font-bold ${activeSection === s.id ? "text-indigo-700" : "text-slate-700"}`}>{s.label}</span>
                  <p className="text-[10px] text-slate-500 mt-0.5">{s.title}</p>
                </div>
                <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${expandedQ === s.id ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
              {expandedQ === s.id && (
                <div className="ml-3 mt-1 space-y-0.5">
                  {s.subs.map((sub, i) => (
                    <button key={i} onClick={() => scrollTo(`${s.id}-${String.fromCharCode(97 + i)}`)}
                      className="w-full text-left px-3 py-1.5 text-[11px] text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-md transition">
                      {sub}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-20 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium backdrop-blur">MCA Semester Exam</span>
                <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium backdrop-blur">Operating Systems</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Previous Year Question Solutions</h1>
              <p className="text-indigo-100 text-sm max-w-2xl">Comprehensive, exam-oriented answers designed to help you score 100%. Each answer includes definitions, diagrams, algorithms, examples, and revision points.</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <div className="px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur"><span className="text-xs font-semibold">7</span><span className="text-[10px] text-indigo-200 ml-1">Questions</span></div>
                <div className="px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur"><span className="text-xs font-semibold">22</span><span className="text-[10px] text-indigo-200 ml-1">Sub-parts</span></div>
                <div className="px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur"><span className="text-xs font-semibold">100%</span><span className="text-[10px] text-indigo-200 ml-1">Coverage</span></div>
              </div>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-10">
            <div id="q1"><Q1 /></div>
            <div id="q2"><Q2 /></div>
            <div id="q3"><Q3 /></div>
            <div id="q4"><Q4 /></div>
            <div id="q5"><Q5 /></div>
            <div id="q6"><Q6 /></div>
            <div id="q7"><Q7 /></div>
          </div>

          {/* Footer */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 text-center">
            <p className="text-sm font-semibold text-slate-700 mb-1">📚 All 7 Questions Solved Comprehensively</p>
            <p className="text-xs text-slate-500">Each answer structured for maximum marks — Definitions → Concepts → Diagrams → Examples → Key Points</p>
            <p className="text-[10px] text-slate-400 mt-2">Prepared with ❤️ for MCA Operating Systems Exam Preparation</p>
          </div>
        </div>
      </main>
    </div>
  );
}
