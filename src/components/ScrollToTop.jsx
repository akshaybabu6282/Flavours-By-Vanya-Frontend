import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const scrollToLocation = () => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        })

        return
      }

      const sectionId = decodeURIComponent(
        hash.replace('#', '')
      )

      const section = document.getElementById(sectionId)

      if (!section) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        })

        return
      }

      const header = document.getElementById('site-header')
      const headerHeight = header?.offsetHeight || 90

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        16

      window.scrollTo({
        top: sectionTop,
        left: 0,
        behavior: 'smooth',
      })
    }

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToLocation)
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
    }
  }, [pathname, hash])

  return null
}