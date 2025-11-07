import { Shield, LineChart, Bell, CloudLightning, Apple, Footprints, Droplets, Salad } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Auth',
    desc: 'Email, Google, and Apple Sign‑in with Firebase. Private profiles and synced data.',
  },
  {
    icon: Footprints,
    title: 'Activity & Steps',
    desc: 'Connect Apple Health/Google Fit, pedometer tracking, and daily streaks.',
  },
  {
    icon: Salad,
    title: 'Nutrition & Water',
    desc: 'Nutritionix search, macro targets, and simple water logging with reminders.',
  },
  {
    icon: LineChart,
    title: 'Beautiful Insights',
    desc: 'Weight trends and macro breakdowns powered by responsive charts.',
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    desc: 'Push notifications to stay on track with sleep, water, and activity goals.',
  },
  {
    icon: CloudLightning,
    title: 'Offline First',
    desc: 'Seamless offline mode with local storage and auto‑sync when online.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center gap-2">
        <Apple className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Designed for everyday wellness</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-3 inline-flex rounded-lg bg-blue-50 p-2 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
