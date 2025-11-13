import { Code2, Cloud, Lock, Cpu, Sparkles, Rocket } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Full-cycle development of web and mobile applications with clean, maintainable architectures.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Scalable infrastructure, CI/CD pipelines, and observability baked in from day one.',
  },
  {
    icon: Lock,
    title: 'Security Engineering',
    desc: 'Threat modeling, secure SDLC, and automated security testing to protect what matters.',
  },
  {
    icon: Cpu,
    title: 'AI & Data Systems',
    desc: 'Intelligent services powered by data pipelines, vector search, and LLM integrations.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#06080f]">
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/10 to-indigo-600/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-sky-400" />
          <span className="text-sky-200 text-sm">Our capabilities</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white tracking-tight">Services</h2>
        <p className="mt-3 text-white/70 max-w-2xl">We combine engineering rigor with product intuition to deliver systems that scale, adapt, and delight.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center shadow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {['React', 'Next.js', 'FastAPI', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Terraform'].map((chip) => (
            <span key={chip} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{chip}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
