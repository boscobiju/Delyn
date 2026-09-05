import { useRef, useEffect, Suspense, lazy } from 'react'
import { gsap } from 'gsap'
import styles from './Hero.module.css'

const Hero3D = lazy(() => import('./Hero3D'))

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const dream = useRef<HTMLSpanElement>(null)
  const dare = useRef<HTMLSpanElement>(null)
  const discover = useRef<HTMLSpanElement>(null)
  const sub = useRef<HTMLParagraphElement>(null)
  const copy = useRef<HTMLParagraphElement>(null)
  const ctas = useRef<HTMLDivElement>(null)
  const scrollHint = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 })

    tl.fromTo(dream.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' })
      .fromTo(dare.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, '-=0.6')
      .fromTo(discover.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out' }, '-=0.6')
      .fromTo(sub.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .fromTo(copy.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .fromTo(ctas.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
      .fromTo(scrollHint.current, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2')

    return () => { tl.kill() }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={sectionRef} className={styles.hero} aria-label="Hero — Dream Dare Discover">
      {/* 3D Canvas */}
      <div className={styles.canvasWrapper} aria-hidden="true">
        <Suspense fallback={<div className={styles.canvasFallback} />}>
          <Hero3D />
        </Suspense>
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Content */}
      <div className={`${styles.content} container`}>
        <div className={styles.eyebrow}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Born in the UAE</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <h1 className={styles.headline} aria-label="Dream. Dare. Discover.">
          <span ref={dream} className={styles.headlineWord} style={{ opacity: 0 }}>DREAM.</span>
          <span ref={dare}  className={styles.headlineWord} style={{ opacity: 0 }}>DARE.</span>
          <span ref={discover} className={styles.headlineWord} style={{ opacity: 0 }}>DISCOVER.</span>
        </h1>

        <p ref={sub} className={styles.subHeadline} style={{ opacity: 0 }}>
          Discover yourself with Delyn.
        </p>

        <p ref={copy} className={styles.copy} style={{ opacity: 0 }}>
          A modern beauty and personal care destination born in the UAE,<br className={styles.desktopBreak} />
          bringing the world's most inspiring beauty discoveries together.
        </p>

        <div ref={ctas} className={styles.ctas} style={{ opacity: 0 }}>
          <button
            id="hero-discover-btn"
            className="btn btn-primary"
            onClick={() => scrollToSection('#discover')}
          >
            Discover Delyn
          </button>
          <button
            id="hero-story-btn"
            className="btn btn-ghost-light"
            onClick={() => scrollToSection('#about')}
          >
            Our Story
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollHint} className={styles.scrollHint} style={{ opacity: 0 }} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className="t-label" style={{ color: 'rgba(248,242,234,0.4)' }}>Scroll</span>
      </div>
    </section>
  )
}
