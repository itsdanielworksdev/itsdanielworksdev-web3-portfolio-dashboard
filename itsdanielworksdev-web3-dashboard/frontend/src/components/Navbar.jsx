import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { navLinks, resumeLink } from '../utils/constants'
import WalletConnect from './WalletConnect'
import useActiveSection from '../hooks/useActiveSection'

const SECTION_IDS = ['stats', 'skills', 'contact']

/**
 * Navbar Component
 * Responsive navigation with mobile menu, active link highlighting,
 * and scroll-based background effects
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const activeSection = useActiveSection(SECTION_IDS)

  // Track scroll position for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Check if a nav link is the current active route or active section
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    if (path === '/#skills')  return location.pathname === '/' && activeSection === 'skills'
    if (path === '/#contact') return location.pathname === '/' && activeSection === 'contact'
    return location.pathname.startsWith(path)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-lg border-b border-dark-800/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-web3-500 flex items-center justify-center text-white font-bold text-sm group-hover:shadow-glow transition-shadow duration-300">
              D
            </span>
            <span className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
              Daniel <span className="text-accent">Works</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.path.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.path}
                  className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-accent transition-colors duration-200 rounded-lg hover:bg-dark-800/50"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-accent bg-accent/10'
                      : 'text-dark-300 hover:text-accent hover:bg-dark-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* GitHub Link */}
            <a
              href="https://github.com/itsdanielworksdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-dark-300 hover:text-accent transition-colors duration-200 rounded-lg hover:bg-dark-800/50"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </a>

            {/* Wallet Connect */}
            <WalletConnect />

            {/* Resume Button */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-gradient text-sm px-5 py-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-300 hover:text-accent hover:bg-dark-800/50 transition-all duration-200"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-lg border-b border-dark-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="block px-4 py-3 text-sm font-medium text-dark-300 hover:text-accent hover:bg-dark-800/50 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-accent bg-accent/10'
                        : 'text-dark-300 hover:text-accent hover:bg-dark-800/50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}

              {/* Mobile GitHub Link */}
              <a
                href="https://github.com/itsdanielworksdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-dark-300 hover:text-accent rounded-lg transition-all duration-200"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>

              {/* Mobile Wallet Connect */}
              <div className="px-4 py-2">
                <WalletConnect />
              </div>

              {/* Mobile Resume Button */}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-3 btn-gradient text-sm py-3"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar