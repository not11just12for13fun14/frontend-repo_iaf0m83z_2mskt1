export function MontessoriSection() {
  return (
    <section id="montessori" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Montessori at Yufu</h2>
          <p className="text-slate-700 text-lg">
            Children are naturally curious. Our role is to prepare an environment that invites exploration and independence. Guides observe, follow the child, and introduce materials when children are ready.
          </p>
          <ul className="grid gap-3 text-slate-700">
            <li className="p-4 rounded-xl ring-1 ring-orange-100 bg-orange-50">Prepared environment and freedom within limits</li>
            <li className="p-4 rounded-xl ring-1 ring-orange-100 bg-orange-50">Concrete materials that lead to abstract understanding</li>
            <li className="p-4 rounded-xl ring-1 ring-orange-100 bg-orange-50">Respect for the child and intrinsic motivation</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gradient-to-tr from-orange-200 to-amber-100 h-40" />
          <div className="rounded-2xl bg-gradient-to-tr from-pink-200 to-rose-100 h-40" />
          <div className="rounded-2xl bg-gradient-to-tr from-yellow-200 to-lime-100 h-40" />
          <div className="rounded-2xl bg-gradient-to-tr from-sky-200 to-indigo-100 h-40" />
        </div>
      </div>
    </section>
  )
}

export function ProgramsSection() {
  const programs = [
    { title: 'Toddlers (18-36 months)', desc: 'Gentle introduction to independence, movement, and language.' },
    { title: 'Casa (3-6 years)', desc: 'Mixed-age classroom with practical life, sensorial, math, and language.' },
    { title: 'Enrichment', desc: 'Art, music, nature walks, and Spanish through play.' },
  ]

  return (
    <section id="programs" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8">Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 ring-1 ring-orange-100 shadow-sm">
              <h3 className="font-bold text-lg text-slate-800">{p.title}</h3>
              <p className="text-slate-700 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RhythmSection() {
  const items = [
    { time: '8:30', title: 'Arrival & Practical Life' },
    { time: '9:30', title: 'Work Cycle & Small Group Lessons' },
    { time: '11:00', title: 'Outdoor Play & Nature' },
    { time: '12:00', title: 'Lunch & Community' },
    { time: '1:00', title: 'Rest & Quiet Time' },
  ]

  return (
    <section id="rhythm" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-8">Daily Rhythm</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.time} className="p-5 rounded-2xl ring-1 ring-orange-100 bg-gradient-to-tr from-amber-50 to-orange-50">
              <p className="text-sm font-semibold text-orange-700">{it.time}</p>
              <p className="text-slate-800 font-bold">{it.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    { name: 'Ava’s mom', text: 'We see so much independence at home now. The calm energy of the classroom carries through our evenings.' },
    { name: 'Leo’s dad', text: 'Our child loves the materials and the guides. He can’t wait to come each day!' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-10">What families say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 ring-1 ring-orange-100 shadow-sm">
              <p className="text-slate-700">“{t.text}”</p>
              <p className="text-slate-900 font-semibold mt-4">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Book a school tour</h2>
        <p className="text-slate-700 mt-3">Have questions or want to see our prepared environment in person? Send us a note and we’ll get back to you soon.</p>
        <form className="mt-8 grid gap-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="w-full rounded-xl border border-orange-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Parent name" />
            <input className="w-full rounded-xl border border-orange-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Email" />
          </div>
          <input className="w-full rounded-xl border border-orange-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Child age" />
          <textarea rows="4" className="w-full rounded-xl border border-orange-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Message" />
          <button type="button" className="inline-flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold shadow">Send inquiry</button>
        </form>
      </div>
    </section>
  )
}
