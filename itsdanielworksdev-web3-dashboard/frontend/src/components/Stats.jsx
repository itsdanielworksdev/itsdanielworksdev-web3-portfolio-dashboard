import { motion } from 'framer-motion'
import { statsData } from '../utils/constants'

/**
 * StatCard Component
 * Displays individual statistic with icon, value, and description
 */
function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 text-center group hover:border-accent/30 transition-all duration-300"
    >
      {/* Icon */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>

      {/* Value with counter animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-gradient mb-2"
      >
        {stat.value}
      </motion.div>

      {/* Label */}
      <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>

      {/* Description */}
      <p className="text-dark-400 text-sm">{stat.description}</p>

      {/* Decorative bottom bar */}
      <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-accent to-web3-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

/**
 * Stats Component
 * Displays key statistics and achievements in a grid layout
 * with animated counter effects
 */
function Stats() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">By the Numbers</h2>
          <p className="section-subtitle">
            Metrics that reflect my journey and impact in the Web3 ecosystem
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats