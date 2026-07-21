import { motion } from 'framer-motion'

/**
 * DashboardCard Component
 * Reusable metric card for displaying Web3 dashboard data.
 * Supports icon, value, label, trend indicator, and optional glow.
 *
 * @param {string}  title       - Card label / metric name
 * @param {string}  value       - Primary display value
 * @param {string}  [icon]      - Emoji or React icon element
 * @param {string}  [trend]     - e.g. "+12%" — shown in green if positive, red if negative
 * @param {string}  [subtitle]  - Secondary description text
 * @param {boolean} [glow]      - Enable accent glow border on hover
 * @param {number}  [index]     - Stagger animation index
 *
 * @example
 * <DashboardCard title="ETH Balance" value="1.2345" icon="⚡" trend="+5.2%" />
 */
function DashboardCard({ title, value, icon, trend, subtitle, glow = false, index = 0 }) {
  const isPositive = trend && !trend.startsWith('-')

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className={`glass-card p-5 group transition-all duration-300 ${
        glow ? 'hover:border-accent/40 hover:shadow-[0_0_24px_rgba(0,212,170,0.15)]' : 'hover:border-dark-600/60'
      }`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-3">
        {icon && (
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300 select-none">
            {icon}
          </span>
        )}
        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              isPositive
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="text-2xl md:text-3xl font-extrabold text-gradient mb-1 font-mono">
        {value}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-white group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs text-dark-500 mt-1 leading-relaxed">{subtitle}</p>
      )}

      {/* Bottom accent bar */}
      <div className="mt-4 h-px bg-gradient-to-r from-accent/40 to-web3-500/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
    </motion.div>
  )
}

export default DashboardCard
