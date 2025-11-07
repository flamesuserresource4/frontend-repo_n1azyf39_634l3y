export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">PulseTrack</h4>
            <p className="mt-2 max-w-md text-sm text-gray-600 dark:text-gray-300">
              A simple, secure, and accessible health tracker. Cross‑platform with privacy by design.
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            <p>
              Built with care. This is a landing preview for a Flutter app concept. Charts, auth, and health data
              integrations are implemented in the native app.
            </p>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} PulseTrack — All rights reserved.</div>
      </div>
    </footer>
  );
}
