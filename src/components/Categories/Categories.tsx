import { useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { categories } from '../../config/brand'
import styles from './Categories.module.css'

const categoryColors: Record<string, string> = {
  makeup:       'rgba(200, 168, 130, 0.18)',
  skincare:     'rgba(184, 196, 176, 0.18)',
  haircare:     'rgba(196, 168, 130, 0.18)',
  bodycare:     'rgba(212, 184, 150, 0.18)',
  personalcare: 'rgba(168, 152, 128, 0.18)',
  viral:        'rgba(200, 180, 160, 0.18)',
}

const categoryIcons: Record<string, string> = {
  makeup:       '◐',
  skincare:     '◎',
  haircare:     '◑',
  bodycare:     '○',
  personalcare: '●',
  viral:        '★',
}

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.2 })
  const isLarge = index === 0 || index === 5

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isLarge ? styles.cardLarge : ''} ${inView ? styles.visible : ''} ${hovered ? styles.hovered : ''}`}
      style={{ transitionDelay: `${index * 0.07}s`, background: hovered ? categoryColors[cat.id] : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      aria-label={cat.name}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardTop}>
          <span className={styles.icon} style={{ color: cat.accent }}>{categoryIcons[cat.id]}</span>
          <span className="t-label" style={{ color: cat.accent }}>{cat.id.toUpperCase()}</span>
        </div>

        <div className={styles.cardBody}>
          <h3 className={styles.cardName}>{cat.name}</h3>
          <p className={styles.cardTagline}>{cat.tagline}</p>
          <p className={`${styles.cardDesc} ${hovered ? styles.descVisible : ''}`}>{cat.description}</p>
        </div>

        <div className={styles.cardArrow} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
        </div>
      </div>

      {/* Decorative circle */}
      <div
        className={styles.circle}
        style={{ background: cat.accent }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function Categories() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.3 })

  return (
    <section id="discover" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} ${headerInView ? styles.visible : ''}`}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>What we carry</span>
          <h2 className={`t-display-lg ${styles.headline}`}>
            Discover your<br />world of beauty.
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
