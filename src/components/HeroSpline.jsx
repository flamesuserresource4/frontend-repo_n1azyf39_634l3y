import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative mx-auto flex h-[520px] w-full max-w-7xl items-stretch overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br from-gray-50 to-white shadow-sm dark:border-gray-800 dark:from-gray-900 dark:to-black">
      <div className="relative hidden flex-1 md:block">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent dark:from-black/60" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-6 p-8 sm:p-12">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">
          New • Cross‑platform Health Tracker
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
          Track steps, sleep, nutrition, and vitals securely
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Email/Google/Apple sign‑in, insights with beautiful charts, reminders, offline support, and exports — designed for simplicity, privacy, and accessibility.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">
            Explore Features
          </a>
          <a href="#insights" className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900">
            See Insights
          </a>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">3D cover by Spline • Dark background with a 3D heart and blue lines</p>
      </div>
    </section>
  );
}
