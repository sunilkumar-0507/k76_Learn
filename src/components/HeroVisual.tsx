import { BarChart3, Code2, GraduationCap, PenTool, Sparkles } from 'lucide-react';

/**
 * Futuristic hero composition: an AI core surrounded by floating glass panels
 * representing coding, design, marketing analytics and career growth.
 * Pure SVG/CSS — no image requests.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
      {/* Glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-tr from-electric-500/40 via-violet-500/30 to-cyan-400/20 blur-3xl" />

      {/* Orbits */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.7" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="core" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stopColor="#c4b5fd" />
            <stop offset="0.45" stopColor="#6366f1" />
            <stop offset="1" stopColor="#1e1b4b" />
          </radialGradient>
        </defs>
        <g className="origin-center animate-spin-slow" style={{ transformBox: 'fill-box' }}>
          <circle cx="200" cy="200" r="170" fill="none" stroke="url(#orbit)" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx="370" cy="200" r="4" fill="#38bdf8" />
          <circle cx="30" cy="200" r="3" fill="#a78bfa" />
        </g>
        <g className="origin-center animate-spin-slower" style={{ transformBox: 'fill-box' }}>
          <circle cx="200" cy="200" r="125" fill="none" stroke="url(#orbit)" strokeWidth="1" />
          <circle cx="200" cy="75" r="5" fill="#8b5cf6" />
          <circle cx="200" cy="325" r="3" fill="#38bdf8" />
        </g>
        <circle cx="200" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.08)" />
        {/* Core */}
        <circle cx="200" cy="200" r="54" fill="url(#core)" />
        <circle cx="200" cy="200" r="54" fill="none" stroke="rgba(255,255,255,0.35)" />
        <g stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M182 186c0-8 6-13 13-13 4 0 7 2 9 4 2-2 5-4 9-4 7 0 12 6 12 12 4 2 6 6 6 10 0 5-3 9-7 10 1 6-4 13-11 13-4 0-7-2-9-4-2 3-6 5-10 5-7 0-12-6-12-12-5-2-8-6-8-11 0-5 3-9 8-10z" />
          <path d="M204 177v50M193 195h-7M215 205h8M193 213h6" />
        </g>
      </svg>

      {/* Floating panels */}
      <div className="glass absolute left-0 top-[8%] w-[46%] animate-float rounded-2xl p-3.5 shadow-glow sm:p-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <Code2 className="ml-auto h-3.5 w-3.5 text-electric-300" />
        </div>
        <pre className="mt-3 overflow-hidden font-mono text-[9px] leading-relaxed text-slate-300 sm:text-[11px]">
          <span className="text-violet-400">const</span> <span className="text-electric-300">future</span> = <span className="text-violet-400">await</span>
          {'\n'}
          {'  '}build(<span className="text-emerald-300">'skills'</span>);{'\n'}
          <span className="text-slate-500">// ship it 🚀</span>
        </pre>
      </div>

      <div className="glass absolute right-0 top-[18%] w-[40%] animate-float-slow rounded-2xl p-3.5 sm:p-4" style={{ animationDelay: '-2s' }}>
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 sm:text-xs">
          <span>Campaign reach</span>
          <BarChart3 className="h-3.5 w-3.5 text-cyan-300" />
        </div>
        <svg viewBox="0 0 120 48" className="mt-2 w-full">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 40 L20 34 L40 36 L60 22 L80 26 L100 12 L120 6 L120 48 L0 48Z" fill="url(#area)" />
          <path d="M0 40 L20 34 L40 36 L60 22 L80 26 L100 12 L120 6" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="glass absolute bottom-[14%] left-[2%] w-[40%] animate-float-slow rounded-2xl p-3.5 sm:p-4" style={{ animationDelay: '-4s' }}>
        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-300 sm:text-xs">
          <span>Design system</span>
          <PenTool className="h-3.5 w-3.5 text-fuchsia-300" />
        </div>
        <div className="mt-3 flex gap-1.5">
          {['bg-electric-500', 'bg-violet-500', 'bg-cyan-400', 'bg-fuchsia-400', 'bg-white'].map((c) => (
            <span key={c} className={`h-5 flex-1 rounded-md ${c}`} />
          ))}
        </div>
        <div className="mt-2.5 space-y-1.5">
          <span className="block h-1.5 w-full rounded bg-white/15" />
          <span className="block h-1.5 w-2/3 rounded bg-white/10" />
        </div>
      </div>

      <div className="glass absolute bottom-[6%] right-[4%] w-[44%] animate-float rounded-2xl p-3.5 sm:p-4" style={{ animationDelay: '-3s' }}>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-[10px] font-semibold text-white sm:text-xs">AI co-pilot</span>
        </div>
        <p className="mt-2 text-[9px] leading-relaxed text-slate-400 sm:text-[11px]">“Draft a launch plan, wireframe the landing page and write the API.”</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric-400" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric-400 [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric-400 [animation-delay:300ms]" />
        </div>
      </div>

      <div className="glass absolute left-1/2 top-0 flex -translate-x-1/2 items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
        <GraduationCap className="h-3.5 w-3.5 text-amber-300" /> Career ready
      </div>
    </div>
  );
}
