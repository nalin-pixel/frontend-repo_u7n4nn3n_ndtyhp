export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-[#06080f]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-indigo-600/10 to-fuchsia-600/10 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Let’s architect your next big thing</h3>
            <p className="mt-3 text-white/80">Tell us about your goals. We’ll respond within one business day with a plan and next steps.</p>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Name" />
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Company" />
              <input className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Email" />
              <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Project details" />
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                <button type="button" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow">
                  Send request
                </button>
                <p className="text-white/60 text-xs">By submitting, you agree to our privacy policy.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
