import { useState, useEffect } from 'react'

/**
 * useActiveSection Hook
 * Tracks which section ID is currently in the viewport using IntersectionObserver.
 * Used for scroll-spy navigation highlighting.
 *
 * @param {string[]} sectionIds - Array of element IDs to observe
 * @param {number} threshold - Visibility threshold (default 0.4)
 * @returns {string} activeId - The currently visible section ID
 *
 * @example
 * const active = useActiveSection(['skills', 'projects', 'contact'])
 */
function useActiveSection(sectionIds, threshold = 0.4) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { threshold }
      )

      observer.observe(el)
      observers.push({ observer, el })
    })

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el))
    }
  }, [sectionIds, threshold])

  return activeId
}

export default useActiveSection
