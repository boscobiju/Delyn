import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { ecosystemPillars } from '../../config/brand'
import styles from './Ecosystem.module.css'

export default function Ecosystem() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.3 })

  return (
    <section id="experience" className={styles.section} aria-labelledby="ecosystem-heading">
      <div className="container">
        <div ref={headerRef} className={`${styles.header} ${headerInView ? styles.visible : ''}`}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>The Delyn Ecosystem</span>
          <h2 id="ecosystem-heading" className={`t-display-lg ${styles.headline}`}>
            Beauty doesn't stop<br />at the shelf.
          </h2>
          <p className={`t-body-lg ${styles.sub}`}>
            Delyn is building towards a beauty ecosystem where discovery, education
            and experience come together.
          </p>
        </div>

        <div className={styles.pillars}>
          {ecosystemPillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarCard({ pillar, index }: { pillar: typeof ecosystemPillars[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.25 })
  const isActive = pillar.status === 'Now Open'

  return (
    <div
      ref={ref}
      className={`${styles.pillar} ${isActive ? styles.pillarActive : ''} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      role="article"
    >
      <div className={styles.pillarTop}>
        <span className={styles.pillarIndex}>{String(index + 1).padStart(2, '0')}</span>
        <span
          className={`${styles.pillarStatus} ${isActive ? styles.statusActive : ''}`}
        >
          {pillar.status}
        </span>
      </div>

      <h3 className={styles.pillarLabel}>{pillar.label}</h3>
      <p className={styles.pillarHeadline}>{pillar.headline}</p>
      <p className={styles.pillarDesc}>{pillar.description}</p>

      <div className={styles.pillarDeco} aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" className={styles.decoSvg}>
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>
    </div>
  )
}
