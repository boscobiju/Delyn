import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { brandStory } from '../../config/brand'
import styles from './About.module.css'
import FloatingObjects from '../shared/FloatingObjects'

const chapters = [
  { index: '01', title: 'Born in the UAE', body: 'Delyn was created in the UAE for a generation that sees beauty as individuality, exploration and self-expression.' },
  { index: '02', title: 'A world of beauty', body: 'We bring together carefully curated brands across makeup, skincare, haircare, body care and personal care from around the world.' },
  { index: '03', title: 'More than products', body: brandStory.body[2] },
  { index: '04', title: 'DREAM', body: 'Imagine who you can become. Step into a space where every discovery opens a new possibility.' },
  { index: '05', title: 'DARE', body: 'Experiment. Explore. Step outside your comfort zone and let beauty challenge you beautifully.' },
  { index: '06', title: 'DISCOVER', body: 'Find products, styles, routines and experiences that reveal more of yourself.' },
  { index: '07', title: 'A beauty community', body: 'Delyn is more than a store. It is a beauty destination and community — built for everyone who believes in the power of self-discovery.' },
]

function Chapter({ chapter, index: i }: { chapter: typeof chapters[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { threshold: 0.3 })

  return (
    <div
      ref={ref}
      className={`${styles.chapter} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${i * 0.05}s` }}
    >
      <div className={styles.chapterIndex}>{chapter.index}</div>
      <div className={styles.chapterContent}>
        <h3 className={styles.chapterTitle}>{chapter.title}</h3>
        <p className={styles.chapterBody}>{chapter.body}</p>
      </div>
    </div>
  )
}

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.3 })
  const quoteRef = useRef<HTMLDivElement>(null)
  const quoteInView = useInView(quoteRef, { threshold: 0.3 })

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        {/* Section header */}
        <div ref={headerRef} className={`${styles.header} ${headerInView ? styles.visible : ''}`}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Our Story</span>
          <h2 className={`t-display-lg ${styles.headline}`}>
            Discover more<br />of yourself.
          </h2>
          <p className={`t-body-lg ${styles.intro}`}>{brandStory.intro}</p>
        </div>

        <div className={styles.grid}>
          {/* Visual column */}
          <div className={styles.visual}>
            <div className={styles.visualInner}>
              <FloatingObjects variant="about" />
              <div className={styles.visualLabel}>
                <span className="t-label">Sharjah, UAE</span>
              </div>
            </div>
          </div>

          {/* Story chapters */}
          <div className={styles.chapters}>
            {chapters.map((ch, i) => (
              <Chapter key={ch.index} chapter={ch} index={i} />
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div ref={quoteRef} className={`${styles.closing} ${quoteInView ? styles.visible : ''}`}>
          <div className={styles.closingLine} />
          <blockquote className={styles.closingQuote}>
            <p>Because beauty isn't about becoming someone else.</p>
            <p>It's about discovering more of yourself.</p>
          </blockquote>
          <div className={styles.closingTagline}>
            <span className="t-label">Dream. Dare. Discover.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
