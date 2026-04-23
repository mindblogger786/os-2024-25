import { useState } from 'react';
import { osData as pyqData, Question } from './data/osData';
import { 
  BookOpen, 
  ChevronRight, 
  Code, 
  Layers, 
  Info, 
  CheckCircle,
  Menu,
  X,
  FileText,
  Terminal,
  Cpu
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Visualizer = ({ type, content }: { type: string, content: any }) => {
  if (type === 'table') {
    return (
      <div className="overflow-x-auto my-6 border rounded-xl shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {content.headers.map((h: string, i: number) => (
                <th key={i} className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {content.rows.map((row: string[], i: number) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className="px-6 py-4 whitespace-normal text-sm text-gray-600 border-r last:border-r-0">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'diagram' || type === 'flowchart') {
    return (
      <div className="my-6 p-6 bg-indigo-50 border-2 border-indigo-100 rounded-xl">
        <div className="flex items-center gap-2 mb-3 text-indigo-700 font-semibold">
          <Layers size={18} />
          <span>{type.charAt(0).toUpperCase() + type.slice(1)} View</span>
        </div>
        <div className="font-mono text-sm text-indigo-900 bg-white p-4 rounded-lg border border-indigo-200 shadow-sm leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    );
  }

  return null;
};

const CodeBlock = ({ language, content }: { language?: string, content: string }) => {
  return (
    <div className="my-6 rounded-xl overflow-hidden shadow-md border border-slate-700">
      <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
          <Terminal size={14} />
          <span>{language?.toUpperCase() || 'CODE'}</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
        </div>
      </div>
      <pre className="bg-slate-900 p-5 text-indigo-100 font-mono text-sm overflow-x-auto leading-relaxed">
        <code>{content}</code>
      </pre>
    </div>
  );
};

const AnswerDisplay = ({ question }: { question: Question }) => {
  const { answer } = question;
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section>
        <div className="flex items-center gap-2 text-indigo-600 mb-3">
          <Info size={20} className="shrink-0" />
          <h3 className="text-xl font-bold tracking-tight">1. Definition</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg pl-7 border-l-2 border-indigo-100">
          {answer.definition}
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 text-indigo-600 mb-3">
          <Cpu size={20} className="shrink-0" />
          <h3 className="text-xl font-bold tracking-tight">2. Core Concepts & Logic</h3>
        </div>
        <p className="text-gray-700 leading-relaxed pl-7 border-l-2 border-indigo-100">
          {answer.coreConcepts}
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 text-indigo-600 mb-3">
          <Layers size={20} className="shrink-0" />
          <h3 className="text-xl font-bold tracking-tight">3. Visual Representation</h3>
        </div>
        <div className="pl-7 border-l-2 border-indigo-100">
          <Visualizer type={answer.visualRepresentation.type} content={answer.visualRepresentation.content} />
        </div>
      </section>

      {answer.implementation && (
        <section>
          <div className="flex items-center gap-2 text-indigo-600 mb-3">
            <Code size={20} className="shrink-0" />
            <h3 className="text-xl font-bold tracking-tight">4. Technical Implementation</h3>
          </div>
          <div className="pl-7 border-l-2 border-indigo-100">
            {answer.implementation.type === 'code' ? (
              <CodeBlock language={answer.implementation.language} content={answer.implementation.content} />
            ) : (
              <div className="p-5 bg-slate-50 border rounded-xl text-gray-700">
                <span className="font-bold text-slate-900 block mb-2 uppercase text-xs tracking-wider">{answer.implementation.type}:</span>
                {answer.implementation.content}
              </div>
            )}
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center gap-2 text-indigo-600 mb-3">
          <CheckCircle size={20} className="shrink-0" />
          <h3 className="text-xl font-bold tracking-tight">5. Key Points/Conclusion</h3>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-7 border-l-2 border-indigo-100">
          {answer.keyPoints.map((point, i) => (
            <li key={i} className="flex gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-indigo-500 font-bold">•</span>
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default function App() {
  const [activeSetId, setActiveSetId] = useState(pyqData[0].id);
  const [activeQuestionId, setActiveQuestionId] = useState(pyqData[0].questions[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSet = pyqData.find(s => s.id === activeSetId) || pyqData[0];
  const activeQuestion = activeSet.questions.find(q => q.id === activeQuestionId) || activeSet.questions[0];



  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
      {/* Mobile Header */}
      <div className="md:hidden bg-indigo-700 text-white p-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <BookOpen size={24} />
          <h1 className="font-bold tracking-tight">OS Exam Prep</h1>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:static inset-0 z-40 bg-white border-r w-72 transform transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="hidden md:flex items-center gap-3 p-6 border-b bg-indigo-700 text-white">
          <BookOpen className="shrink-0" size={28} />
          <div>
            <h1 className="font-extrabold text-lg leading-none">OS Mastery</h1>
            <p className="text-indigo-200 text-xs font-medium uppercase tracking-widest mt-1">Academic Content Creator</p>
          </div>
        </div>

        <nav className="p-4 space-y-6">
          {pyqData.map(set => (
            <div key={set.id} className="space-y-1">
              <h2 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{set.title}</h2>
              <div className="space-y-1">
                {set.questions.map(q => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setActiveSetId(set.id);
                      setActiveQuestionId(q.id);
                      setIsSidebarOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 group",
                      activeQuestionId === q.id 
                        ? "bg-indigo-50 text-indigo-700 font-semibold ring-1 ring-indigo-200"
                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                    )}
                  >
                    <div className={cn(
                      "w-6 h-6 rounded flex items-center justify-center text-[10px] shrink-0 transition-colors",
                      activeQuestionId === q.id ? "bg-indigo-600 text-white" : "bg-slate-200 text-slate-500 group-hover:bg-indigo-200 group-hover:text-indigo-700"
                    )}>
                      {q.id.toUpperCase()}
                    </div>
                    <span className="truncate">{q.questionText}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative">
        <div className="max-w-4xl mx-auto p-4 md:p-10 pb-20">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FileText size={14} />
              <span>{activeSet.title} • Question {activeQuestion.id.toUpperCase()}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {activeQuestion.questionText}
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-slate-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <div className="p-6 md:p-10">
              <AnswerDisplay question={activeQuestion} />
            </div>
          </div>

          {/* Navigation between questions */}
          <div className="mt-12 flex justify-between items-center bg-white p-6 rounded-2xl border shadow-sm">
             <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Studying</span>
                <span className="text-sm font-semibold text-slate-700">{activeQuestion.questionText.slice(0, 40)}...</span>
             </div>
             <div className="flex gap-2">
                <button 
                   onClick={() => {
                     // Simple prev logic
                     const allQs = pyqData.flatMap(s => s.questions);
                     const idx = allQs.findIndex(q => q.id === activeQuestionId);
                     if (idx > 0) {
                        const prev = allQs[idx - 1];
                        setActiveSetId(pyqData.find(s => s.questions.some(q => q.id === prev.id))!.id);
                        setActiveQuestionId(prev.id);
                     }
                   }}
                   className="p-3 rounded-full hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-colors border"
                >
                   <ChevronRight className="rotate-180" size={20} />
                </button>
                <button 
                   onClick={() => {
                     // Simple next logic
                     const allQs = pyqData.flatMap(s => s.questions);
                     const idx = allQs.findIndex(q => q.id === activeQuestionId);
                     if (idx < allQs.length - 1) {
                        const next = allQs[idx + 1];
                        setActiveSetId(pyqData.find(s => s.questions.some(q => q.id === next.id))!.id);
                        setActiveQuestionId(next.id);
                     }
                   }}
                   className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-200"
                >
                   Next Question
                   <ChevronRight size={20} />
                </button>
             </div>
          </div>
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
