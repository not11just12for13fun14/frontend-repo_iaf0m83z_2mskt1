import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80dvh] flex items-center overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 py-24">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
            Montessori-inspired, play-first learning
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-800">
            Yufu Kindergarten
          </h1>
          <p className="text-lg text-slate-700 max-w-prose">
            A joyful place where curiosity blossoms. Our guides follow the Montessori philosophy to nurture independence, creativity, and a lifelong love of learning.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#programs" className="inline-flex items-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-semibold shadow">
              Explore programs
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur text-orange-700 ring-1 ring-orange-200 px-5 py-3 font-semibold hover:bg-white">
              Book a visit
            </a>
          </div>
          <ul className="grid grid-cols-2 gap-4 pt-6 text-sm text-slate-600">
            <li className="bg-white/70 backdrop-blur rounded-xl p-4 ring-1 ring-orange-100">
              Hands-on, self-paced activities
            </li>
            <li className="bg-white/70 backdrop-blur rounded-xl p-4 ring-1 ring-orange-100">
              Mixed-age, collaborative classrooms
            </li>
            <li className="bg-white/70 backdrop-blur rounded-xl p-4 ring-1 ring-orange-100">
              Outdoor play and nature exploration
            </li>
            <li className="bg-white/70 backdrop-blur rounded-xl p-4 ring-1 ring-orange-100">
              Daily rhythm for calm and focus
            </li>
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/60" />
    </section>
  )
}
