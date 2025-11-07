import NavBar from './components/NavBar.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import Features from './components/Features.jsx';
import InsightsPreview from './components/InsightsPreview.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 dark:from-black dark:to-gray-950 dark:text-gray-100">
      <NavBar />
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
        <HeroSpline />
        <Features />
        <InsightsPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
