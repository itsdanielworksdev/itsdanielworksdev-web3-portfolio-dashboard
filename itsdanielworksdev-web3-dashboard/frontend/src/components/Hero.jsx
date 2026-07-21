import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail, HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { SiEthereum, SiReact, SiSolidity } from 'react-icons/si'
import { heroData, socialLinks, resumeLink } from '../utils/constants'

// Roles that cycle in the typewriter
const ROLES = [
  'Full Stack Developer',
  'Web3 Developer',
  'Smart Contract Dev',
  'DeFi Builder',
  'Open Source Contributor',
]

/** Typewriter hook — cycles through an array of strings */
function useTypewriter(strings, typingSpeed = 70, pauseMs = 1800, deleteSpeed = 40) {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typingSpeed)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex((r) => (r + 1) % strings.length)
    }

    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex, strings, typingSpeed, pauseMs, deleteSpeed])

  return displayed
}

// Floating tech icons around the avatar orb
const ORBIT_ICONS = [
  { Icon: SiEthereum,  color: '#627EEA', label: 'Ethereum',  angle: 0   },
  { Icon: SiReact,     color: '#61DAFB', label: 'React',     angle: 72  },
  { Icon: SiSolidity,  color: '#00d4aa', label: 'Solidity',  angle: 144 },
  { Icon: FaGithub,    color: '#94a3b8', label: 'GitHub',    angle: 216 },
]

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
}

function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-web3-500/8 rounded-full blur-3xl animate-pulse-slow delay-500" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Web3 Projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight leading-none"
            >
              <span className="text-white">{heroData.name.split(' ')[0]} </span>
              <span className="text-gradient">{heroData.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Typewriter title */}
            <motion.div variants={itemVariants} className="mb-6 h-10 flex items-center">
              <span className="text-xl sm:text-2xl font-semibold text-dark-200">
                {role}
                <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-400 max-w-xl mb-8 leading-relaxed"
            >
              {heroData.introduction}
            </motion.p>

            {/* Highlight tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
              {heroData.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 text-sm font-mono"
                >
                  <span className="text-accent">$</span> {h}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link to="/projects" className="btn-gradient group text-base px-7 py-3.5">
                View Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a href="#contact" className="btn-outline group text-base px-7 py-3.5">
                <HiMail />
                Contact Me
              </a>
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-accent hover:border-accent/30 transition-all duration-200 text-sm font-medium"
              >
                <HiDownload />
                Resume
              </a>
            </motion.div>

            {/* Social quick links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-400 hover:text-accent transition-colors duration-200 text-sm"
              >
                <FaGithub className="text-lg" />
                GitHub
              </a>
              <span className="w-px h-4 bg-dark-700" />
              <span className="text-dark-500 text-sm font-mono">
                <span className="text-accent">{'>'}</span> open to work
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Avatar Orb ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-web3-500/20 blur-2xl animate-pulse-slow" />

              {/* Main avatar circle */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-6 rounded-full bg-gradient-to-br from-dark-800 to-dark-900 border-2 border-accent/30 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                {/* Avatar initials — replace with <img> when you have a photo */}
                <div className="text-center select-none">
                  <div className="text-6xl font-extrabold text-gradient leading-none">DW</div>
                  <div className="text-xs text-dark-400 font-mono mt-2">{'<dev />'}</div>
                </div>

                {/* Inner shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-web3-500/5 rounded-full" />
              </motion.div>

              {/* Orbiting tech icons */}
              {ORBIT_ICONS.map(({ Icon, color, label, angle }) => {
                const rad = (angle * Math.PI) / 180
                const r   = 148 // orbit radius px
                const cx  = 160 // center of 320px container
                const cy  = 160
                const x   = cx + r * Math.cos(rad) - 20
                const y   = cy + r * Math.sin(rad) - 20
                return (
                  <motion.div
                    key={label}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', left: x, top: y, transformOrigin: `${cx - x + 20}px ${cy - y + 20}px` }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-10 h-10 rounded-xl bg-dark-800/80 border border-dark-700/60 flex items-center justify-center backdrop-blur-sm shadow-lg"
                      title={label}
                    >
                      <Icon style={{ color, fontSize: 20 }} />
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Dashed orbit ring */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 320 320">
                <circle cx="160" cy="160" r="148" fill="none" stroke="#00d4aa" strokeWidth="1" strokeDasharray="6 8" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2 text-dark-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
