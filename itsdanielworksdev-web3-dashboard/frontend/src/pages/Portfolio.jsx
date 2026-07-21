import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import { HiCode, HiLightningBolt, HiGlobe, HiAcademicCap } from 'react-icons/hi'
import Stats from '../components/Stats'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import { socialLinks } from '../utils/constants'

// Journey / timeline milestones
const timeline = [
  {
    year: '2021',
    icon: <HiAcademicCap />,
    title: 'Started Web Development',
    description: 'Learned HTML, CSS, and JavaScript fundamentals. Built first static websites and fell in love with the craft.',
  },
  {
    year: '2022',
    icon: <HiCode />,
    title: 'Full Stack with React & Node.js',
    description: 'Mastered React, Node.js, Express, and MongoDB. Shipped multiple full-stack applications and REST APIs.',
  },
  {
    year: '2023',
    icon: <HiLightningBolt />,
    title: 'Entered the Web3 Ecosystem',
    description: 'Learned Solidity, Ethers.js, and smart contract development. Built DeFi prototypes and NFT contracts on testnets.',
  },
  {
    year: '2024',
    icon: <HiGlobe />,
    title: 'Open Source & Bounties',
    description: 'Started contributing to open source, participating in Superteam bounties, and building production-grade dApps.',
  },
]

// Open source / community contributions
const contributions = [
  {
    title: 'Superteam Bounties',
    description: 'Active participant in Solana ecosystem bounties — UI/UX, smart contract tooling, and documentation.',
    icon: '🏆',
    link: 'https://superteam.fun',
  },
  {
    title: 'GitHub Open Source',
    description: 'Maintaining public repositories for Web3 tools, React component libraries, and developer utilities.',
    icon: '📦',
    link: socialLinks.github,
  },
  {
    title: 'Web3 Community',
    description: 'Contributing to DAO governance discussions, developer forums, and blockchain education initiatives.',
    icon: '🌐',
    link: '#',
  },
]

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

/**
 * Portfolio Page
 * Full "About Me" page: intro, journey timeline, contributions, stats, skills, contact.
 */
function Portfolio() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >

      {/* ── About Hero ─────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 -left-40 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-web3-500/8 rounded-full blur-3xl" />

        <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <FaStar className="text-xs" />
              About Me
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            <span className="text-white">Building the </span>
            <span className="text-gradient">Decentralized Web</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg text-dark-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            I'm Daniel — a Full Stack &amp; Web3 developer passionate about building
            open, permissionless applications. I bridge traditional web development
            with blockchain technology to create experiences that matter.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-6 py-3 text-sm"
            >
              <FaGithub />
              View GitHub
            </a>
            <a href="#contact" className="btn-outline px-6 py-3 text-sm">
              <FaExternalLinkAlt />
              Hire Me
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Journey Timeline ───────────────────────────────── */}
      <section className="relative py-16 md:py-24">
        <div className="section-container max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">From first HTML tag to smart contracts</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-web3-500/30 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ml-14 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card p-5 hover:border-accent/30 transition-all duration-300">
                      <span className="text-xs font-mono text-accent mb-1 block">{item.year}</span>
                      <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-dark-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark-900 border-2 border-accent/50 flex items-center justify-center text-accent text-lg z-10 shrink-0">
                    {item.icon}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Open Source & Contributions ────────────────────── */}
      <section className="relative py-16 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="section-container">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h2 className="section-title">Open Source &amp; Community</h2>
            <p className="section-subtitle">
              Contributing to the Web3 ecosystem beyond just writing code
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contributions.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group block"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">{item.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats, Skills, Contact ─────────────────────────── */}
      <Stats />
      <Skills />
      <Contact />

    </motion.main>
  )
}

export default Portfolio
