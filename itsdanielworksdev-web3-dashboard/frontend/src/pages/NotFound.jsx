import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiHome, HiArrowLeft } from 'react-icons/hi'

/**
 * NotFound (404) Page
 * Displayed when a route doesn't match any defined path.
 * Required for GitHub Pages SPA routing.
 */
function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />

      <div className="relative z-10 text-center px-4">
        {/* Glitch-style 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <span className="text-[8rem] sm:text-[10rem] font-extrabold leading-none text-gradient select-none">
            404
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Block Not Found
          </h1>
          <p className="text-dark-400 text-base max-w-sm mx-auto mb-8 leading-relaxed">
            This page doesn't exist on-chain. The transaction may have been reverted
            or the address is invalid.
          </p>
        </motion.div>

        {/* Terminal-style error box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass-card p-4 max-w-sm mx-auto mb-8 text-left font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <p className="text-dark-400">
            <span className="text-accent">$</span> navigate to{' '}
            <span className="text-white">unknown_route</span>
          </p>
          <p className="text-red-400 mt-1">
            Error: Route not found (0x404)
          </p>
          <p className="text-dark-500 mt-1">
            Suggestion: Return to <span className="text-accent">home</span>
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link to="/" className="btn-gradient px-6 py-3 text-sm">
            <HiHome />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline px-6 py-3 text-sm"
          >
            <HiArrowLeft />
            Go Back
          </button>
        </motion.div>
      </div>
    </motion.main>
  )
}

export default NotFound
