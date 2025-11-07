import { LineChart as LineChartIcon, Sparkles } from 'lucide-react';

export default function InsightsPreview() {
  return (
    <section id="insights" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LineChartIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Insights at a glance</h3>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Demo</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-gray-100 p-4 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">Weight trend (30 days)</p>
            <div className="mt-3 h-28 rounded-md bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-950/40 dark:to-purple-950/40" />
          </div>
          <div className="rounded-lg border border-gray-100 p-4 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">Calories vs goal</p>
            <div className="mt-3 h-28 rounded-md bg-gradient-to-tr from-amber-100 to-rose-100 dark:from-amber-950/40 dark:to-rose-950/40" />
          </div>
          <div className="rounded-lg border border-gray-100 p-4 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">Macro breakdown</p>
            <div className="mt-3 h-28 rounded-md bg-gradient-to-tr from-emerald-100 to-teal-100 dark:from-emerald-950/40 dark:to-teal-950/40" />
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-200">
          <Sparkles className="mt-0.5 h-4 w-4" />
          <p>
            Weekly tips analyze your trends to suggest small, effective changes. Build streaks for water, steps, and sleep to stay motivated.
          </p>
        </div>
      </div>
    </section>
  );
}
