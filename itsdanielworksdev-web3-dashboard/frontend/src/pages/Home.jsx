import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Stats from '../components/Stats'
import Contact from '../components/Contact'

/**
 * Home Page
 * Main landing page combining all sections:
 * Hero, Stats, Skills, Projects, and Contact
 */
function Home() {
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
      <Projects />
      <Contact />
    </motion.main>
  )
}

export default Home