import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiNodedotjs, SiExpress, SiMongodb,
  SiSolidity, SiEthereum,
  SiGit, SiGithub, SiVscodium,
} from 'react-icons/si'
import { skillsData } from '../utils/constants'

// Map skill names to react-icons components + brand colors
const SKILL_ICONS = {
  'HTML':               { Icon: SiHtml5,     color: '#E34F26' },
  'CSS':                { Icon: SiCss,       color: '#1572B6' },
  'JavaScript':         { Icon: SiJavascript,color: '#F7DF1E' },
  'React':              { Icon: SiReact,     color: '#61DAFB' },
  'Node.js':            { Icon: SiNodedotjs, color: '#339933' },
  'Express':            { Icon: SiExpress,   color: '#94a3b8' },
  'MongoDB':            { Icon: SiMongodb,   color: '#47A248' },
  'Solidity':           { Icon: SiSolidity,  color: '#00d4aa' },
  'Ethers.js':          { Icon: SiEthereum,  color: '#627EEA' },
  'Wallet Integration': { Icon: SiEthereum,  color: '#627EEA' },
  'Git':                { Icon: SiGit,       color: '#F05032' },
  'GitHub':             { Icon: SiGithub,    color: '#94a3b8' },
  'VS Code':            { Icon: SiVscodium,  color: '#007ACC' },
}

function SkillBadge({ name, level, index }) {
  const meta = SKILL_ICONS[name]

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {meta && (
            <meta.Icon style={{ color: meta.color, fontSize: 15 }} className="shrink-0" />
          )}
          <span className="text-sm font-medium text-dark-200 group-hover:text-accent transition-colors duration-200">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-dark-500">{level}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-dark-700/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: index * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-web3-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-dark-950" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with daily to build production-ready Web3 and full-stack applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl select-none">{category.icon}</span>
                <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors duration-200">
                  {category.category}
                </h3>
                <span className="ml-auto text-xs text-dark-500 font-mono">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
