import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useInView(
  ref: React.RefObject<Element | null>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0, rootMargin = '0px', once = true } = options
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observerRef.current?.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observerRef.current.observe(ref.current)

    return () => { observerRef.current?.disconnect() }
  }, [threshold, rootMargin, once])

  return inView
}
