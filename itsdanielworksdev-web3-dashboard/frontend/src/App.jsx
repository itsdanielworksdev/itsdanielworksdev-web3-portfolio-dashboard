import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import ProjectsPage from './pages/ProjectsPage'
import NotFound from './pages/NotFound'

/**
 * App Component
 * Root component with React Router for page navigation,
 * persistent Navbar and Footer, and page transition animations.
 */
function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-dark-950 text-white flex flex-col">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Main Content with Route Animations */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"          element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects"  element={<ProjectsPage />} />
            {/* 404 catch-all — must be last */}
            <Route path="*"          element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Back to Top */}
      <BackToTop />
    </div>
  )
}

export default App
