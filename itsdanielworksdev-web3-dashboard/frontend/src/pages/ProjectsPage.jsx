import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSearch, HiX } from 'react-icons/hi'
import { projectsData } from '../utils/constants'
import { getUniqueTechs, filterProjects } from '../utils/helpers'
import ProjectCard from '../components/ProjectCard'

/**
 * ProjectsPage
 * Full projects listing with live search and technology filter tabs.
 */
function ProjectsPage() {
  const [search, setSearch]   = useState('')
  const [activeTag, setActiveTag] = useState('All')

  const tags = useMemo(() => getUniqueTechs(projectsData), [])

  const filtered = useMemo(() => {
    const byTag = filterProjects(projectsData, activeTag)
    if (!search.trim()) return byTag
    const q = search.toLowerCase()
    return byTag.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    )
  }, [search, activeTag])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20 md:pt-24"
    >
      <section className="relative py-16 md:py-24">
        <div className="section-container">

          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">All Projects</h1>
            <p className="section-subtitle">
              {projectsData.length} Web3 &amp; full-stack projects — search or filter by technology
            </p>
          </motion.div>

          {/* Search + Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-10 space-y-4"
          >
            {/* Search input */}
            <div className="relative max-w-md mx-auto">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400 text-lg pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects or technologies..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-dark-800/60 border border-dark-700/50 text-white placeholder-dark-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 hover:text-accent transition-colors duration-200"
                  aria-label="Clear search"
                >
                  <HiX />
                </button>
              )}
            </div>

            {/* Technology filter tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeTag === tag
                      ? 'bg-accent/20 border-accent/50 text-accent'
                      : 'bg-dark-800/40 border-dark-700/40 text-dark-400 hover:text-accent hover:border-accent/30'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-dark-500 text-sm text-center mb-8">
            Showing <span className="text-accent font-semibold">{filtered.length}</span> of {projectsData.length} projects
          </p>

          {/* Projects grid with AnimatePresence for filter transitions */}
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="grid"
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </motion.div>
            ) : (
              /* Empty state */
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-20"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p className="text-dark-400 mb-6">
                  Try a different search term or filter tag.
                </p>
                <button
                  onClick={() => { setSearch(''); setActiveTag('All') }}
                  className="btn-outline px-6 py-2 text-sm"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </motion.main>
  )
}

export default ProjectsPage
