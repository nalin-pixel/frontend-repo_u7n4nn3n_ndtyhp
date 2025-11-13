import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Analytics Platform',
    desc: 'Stream processing with millisecond latency and autoscaling microservices.',
  },
  {
    title: 'Cloud Cost Optimizer',
    desc: 'Usage-aware resources and policy-driven orchestration to reduce spend by 32%.',
  },
  {
    title: 'AI Document Intelligence',
    desc: 'LLM-powered extraction, semantic search, and workflow automation.',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-[#06080f]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-indigo-300 text-sm">Selected work</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white tracking-tight">Case Studies</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-medium text-lg">{p.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                </div>
                <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
