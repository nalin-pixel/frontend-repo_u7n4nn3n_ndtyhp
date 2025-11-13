import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06080f]/60 via-[#06080f]/40 to-[#06080f]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            Interactive • Tech • Futuristic • Minimalist
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            We build bold, scalable IT solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
            From cloud-native platforms to real-time data systems, our team turns complex problems into elegant, resilient software.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/90 border border-white/20 bg-white/5 hover:bg-white/10">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
