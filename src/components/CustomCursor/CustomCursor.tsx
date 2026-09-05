import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnterInteractive = () => {
      ringRef.current?.classList.add(styles.expanded)
      dotRef.current?.classList.add(styles.hidden)
    }
    const onLeaveInteractive = () => {
      ringRef.current?.classList.remove(styles.expanded)
      dotRef.current?.classList.remove(styles.hidden)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    const interactive = document.querySelectorAll('a, button, [role="button"]')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
