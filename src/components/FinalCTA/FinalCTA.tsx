import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { threshold: 0.3 })

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Final call to action">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgGlow1} />
        <div className={styles.bgGlow2} />
      </div>

      <div className={`${styles.inner} container`}>
        <div className={`${styles.content} ${inView ? styles.visible : ''}`}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Delyn</span>

          <h2 className={styles.line1}>
            Beauty isn't about<br />becoming someone else.
          </h2>

          <div className={styles.separator} aria-hidden="true">
            <div className={styles.sepLine} />
            <div className={styles.sepDot} />
            <div className={styles.sepLine} />
          </div>

          <h2 className={styles.line2}>
            It's about discovering<br />more of yourself.
          </h2>

          <p className={styles.tagline}>Dream. Dare. Discover.</p>

          <button
            id="final-cta-btn"
            className={`btn btn-primary ${styles.cta}`}
            onClick={scrollToContact}
          >
            Discover Delyn
          </button>
        </div>
      </div>
    </section>
  )
}
