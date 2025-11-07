import { useEffect, useState } from 'react';
import { Activity, Moon, Sun, Github } from 'lucide-react';

export default function NavBar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 dark:text-white">
          <Activity className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span>PulseTrack</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex dark:text-gray-300">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white">Features</a>
          <a href="#insights" className="hover:text-gray-900 dark:hover:text-white">Insights</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
            aria-label="View source on GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">Star</span>
          </a>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
