import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { statsData } from '../utils/constants'

/**
 * useCountUp — animates a number from 0 to `target` over `duration` ms
 * Only starts when `start` is true (triggered by scroll into view)
 */
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    // Strip non-numeric suffix (e.g. "15+" → 15)
    const numeric = parseInt(target, 10)
    const suffix  = target.replace(String(numeric), '')
    let startTime = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numeric) + suffix)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [start, target, duration])

  return count || '0'
}

/** Individual stat card with count-up animation */
function StatCard({ stat, index }) {
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(stat.value, 1800, hasStarted)

  // Trigger counter when card enters viewport
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHasStarted(true); observer.unobserve(el) } },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 md:p-8 text-center group hover:border-accent/30 transition-all duration-300"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">
        {stat.icon}
      </div>

      {/* Animated counter value */}
      <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2 font-mono tabular-nums">
        {count}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
      <p className="text-dark-400 text-sm">{stat.description}</p>

      <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-accent to-web3-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

function Stats() {
  return (
    <section id="stats" className="relative py-20 md:py-32">
      <div className="section-container">
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
