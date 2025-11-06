import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] md:min-h-screen grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10 pt-28 md:pt-32">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-700 bg-blue-50 rounded-full px-3 py-1 w-max ring-1 ring-blue-200">Tech • Interactive • Modern</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building playful experiences for the modern web
          </h1>
          <p className="text-gray-600 md:text-lg">
            I’m a full‑stack developer crafting delightful products with React, TypeScript and cloud‑first backends.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
    </section>
  );
}
