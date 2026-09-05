import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { visionMission } from '../../config/brand'
import styles from './VisionMission.module.css'

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="vision" ref={sectionRef} className={styles.section} aria-labelledby="vision-mission-heading">
      <h2 id="vision-mission-heading" className="sr-only">Vision & Mission</h2>

      <div className={styles.inner}>
        {/* Vision */}
        <div className={`${styles.panel} ${styles.visionPanel} ${inView ? styles.visible : ''}`}>
          <div className={styles.panelContent}>
            <div className={styles.panelLabel}>
              <span className="t-label">Our Vision</span>
              <div className={styles.labelLine} />
            </div>
            <p className={styles.panelWord}>Vision</p>
            <blockquote className={styles.panelQuote}>
              "{visionMission.vision}"
            </blockquote>
          </div>
          {/* Decorative */}
          <div className={styles.visionDeco} aria-hidden="true" />
        </div>

        {/* Center divider with Delyn symbol */}
        <div className={`${styles.center} ${inView ? styles.centerVisible : ''}`} aria-hidden="true">
          <div className={styles.centerLine} />
          <div className={styles.centerSymbol}>
            <span>D</span>
          </div>
          <div className={styles.centerLine} />
        </div>

        {/* Mission */}
        <div className={`${styles.panel} ${styles.missionPanel} ${inView ? styles.visible : ''}`}
             style={{ transitionDelay: '0.2s' }}>
          <div className={styles.panelContent}>
            <div className={styles.panelLabel}>
              <span className="t-label">Our Mission</span>
              <div className={styles.labelLine} />
            </div>
            <p className={styles.panelWord}>Mission</p>
            <blockquote className={styles.panelQuote}>
              "{visionMission.mission}"
            </blockquote>
          </div>
          <div className={styles.missionDeco} aria-hidden="true" />
        </div>
      </div>

      {/* Bottom statement */}
      <div className={`${styles.bottom} ${inView ? styles.bottomVisible : ''}`}>
        <p className={styles.bottomText}>
          To revolutionize. To make accessible. To inspire.
        </p>
        <span className="t-label" style={{ color: 'var(--color-champagne)' }}>The Delyn Promise</span>
      </div>
    </section>
  )
}
