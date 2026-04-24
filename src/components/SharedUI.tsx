export function QuestionHeader({ num, title }: { num: number; title: string }) {
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

export function SubQuestion({ id, label, question, children }: { id: string; label: string; question: string; children: React.ReactNode }) {
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

export function Definition({ title, children }: { title: string; children: React.ReactNode }) {
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

export function CoreConcepts({ title, children }: { title: string; children: React.ReactNode }) {
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

export function DiagramSection({ title, children }: { title: string; children: React.ReactNode }) {
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

export function AlgorithmSection({ title, children }: { title: string; children: React.ReactNode }) {
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

export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
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

export function RealWorldExamples({ title, children }: { title: string; children: React.ReactNode }) {
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

export function Example({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <div className="p-3 rounded-lg bg-amber-50 border border-amber-200">
      <p className="text-xs font-bold text-amber-800 mb-1">Example {num}: {title}</p>
      {children}
    </div>
  );
}

export function KeyPoints({ points }: { points: string[] }) {
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

export function Divider() {
  return <hr className="border-t-2 border-indigo-100 my-2" />;
}
