import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Stats from '../components/Stats'
import Contact from '../components/Contact'

/**
 * Portfolio Page
 * Dedicated portfolio overview page combining
 * hero, stats, skills, and contact sections
 */
function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Stats />
      <Skills />
      <Contact />
    </motion.main>
  )
}

export default Portfolio