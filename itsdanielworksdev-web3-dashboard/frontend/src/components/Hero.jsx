import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiMail } from 'react-icons/hi'
import { heroData } from '../utils/constants'

/**
 * Hero Component
 * Main landing section with name, title, introduction,
 * key highlights, and call-to-action buttons
 */
function Hero() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient orbs for visual depth */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-web3-500/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />

      <div className="section-container relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Glowing badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Web3 Projects
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight"
          >
            <span className="text-white">{heroData.name.split(' ')[0]} </span>
            <span className="text-gradient">{heroData.name.split(' ')[1]}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-dark-200 mb-6"
          >
            {heroData.title}
            <span className="inline-block ml-2 text-accent">
              {'</>'}
            </span>
          </motion.h2>

          {/* Introduction */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-dark-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {heroData.introduction}
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {heroData.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-4 py-2 rounded-lg bg-dark-800/60 border border-dark-700/50 text-dark-300 text-sm font-mono"
              >
                <span className="text-accent">$</span> {highlight}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/projects" className="btn-gradient group text-base px-8 py-4">
              View Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a href="#contact" className="btn-outline group text-base px-8 py-4">
              <HiMail className="text-xl" />
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 text-dark-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex items-start justify-center p-1.5">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1.5 h-1.5 rounded-full bg-accent"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero