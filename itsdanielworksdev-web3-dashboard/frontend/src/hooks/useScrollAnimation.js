import { useEffect, useRef, useState } from 'react'

/**
 * useScrollAnimation Custom Hook
 * Tracks whether an element is visible in the viewport
 * Useful for triggering animations on scroll
 *
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around the root
 * @returns {Array} [ref, isVisible] - Ref to attach and visibility state
 *
 * @example
 * const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 })
 * <div ref={ref}>Animate when {isVisible}</div>
 */
function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, stop observing for performance
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options.threshold, options.rootMargin])

  return [ref, isVisible]
}

export default useScrollAnimation