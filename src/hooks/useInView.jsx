import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}) {
  const elementRef = useRef(null)
  const initialOptionsRef = useRef(options)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      {
        threshold: 0.2,
        ...initialOptionsRef.current,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return [elementRef, inView]
}