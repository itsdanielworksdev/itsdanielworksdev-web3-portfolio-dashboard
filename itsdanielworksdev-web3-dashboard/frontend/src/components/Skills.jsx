import { motion } from 'framer-motion'
import { skillsData } from '../utils/constants'

/**
 * SkillBadge Component
 * Displays individual skill with proficiency level bar
 */
function SkillBadge({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-dark-200 group-hover:text-accent transition-colors duration-200">
          {name}
        </span>
        <span className="text-xs font-mono text-dark-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-web3-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

/**
 * Skills Component
 * Displays technical skills organized by category with
 * animated proficiency bars
 */
function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dark-950" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with daily to build production-ready Web3 and full-stack applications
          </p>
        </motion.div>

        {/* Skills grid */}
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
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-200">
                  {category.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
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