/**
 * Utility helper functions for the Web3 Portfolio Dashboard
 */

/**
 * Truncate an Ethereum address for display
 * @param {string} address - Full 0x address
 * @param {number} start - Characters to show at start (default 6)
 * @param {number} end - Characters to show at end (default 4)
 * @returns {string} e.g. "0x1234...abcd"
 */
export function truncateAddress(address, start = 6, end = 4) {
  if (!address) return ''
  return `${address.slice(0, start)}...${address.slice(-end)}`
}

/**
 * Format a Wei value to a readable ETH string
 * @param {bigint|string} wei
 * @param {number} decimals
 * @returns {string} e.g. "1.2345"
 */
export function formatEth(wei, decimals = 4) {
  if (!wei) return '0'
  return (Number(wei) / 1e18).toFixed(decimals)
}

/**
 * Clamp a number between min and max
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Debounce a function call
 * @param {Function} fn
 * @param {number} delay - ms
 * @returns {Function}
 */
export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Get unique technology tags from all projects
 * @param {Array} projects - projectsData array
 * @returns {string[]} sorted unique tech names
 */
export function getUniqueTechs(projects) {
  const all = projects.flatMap((p) => p.technologies)
  return ['All', ...new Set(all)].sort((a, b) =>
    a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)
  )
}

/**
 * Filter projects by technology tag
 * @param {Array} projects
 * @param {string} filter - tech name or "All"
 * @returns {Array}
 */
export function filterProjects(projects, filter) {
  if (!filter || filter === 'All') return projects
  return projects.filter((p) => p.technologies.includes(filter))
}
