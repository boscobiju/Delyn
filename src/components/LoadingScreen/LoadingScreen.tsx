import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styles from './LoadingScreen.module.css'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const tagRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete,
        })
      },
    })

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.88 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        tagRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.3'
      )
      .to({}, { duration: 0.8 })

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div ref={containerRef} className={styles.loader}>
      <div className={styles.inner}>
        <div ref={logoRef} className={styles.logoCircle}>
          <img src="/delyn-logo-cropped.jpg" alt="Delyn Beauté" className={styles.logoImg} />
        </div>
        <div ref={lineRef} className={styles.line} />
        <div ref={tagRef} className={styles.tag}>Dream. Dare. Discover.</div>
      </div>
    </div>
  )
}

