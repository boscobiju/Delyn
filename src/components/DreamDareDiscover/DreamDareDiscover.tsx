import { useRef, useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './DreamDareDiscover.module.css'

const stages = [
  {
    id: 'dream',
    word: 'DREAM',
    headline: 'Imagine who you can become.',
    body: 'Beauty begins in the imagination. Before the first brushstroke, before the first discovery — there is a vision of who you want to be.',
    accent: '#C8A45C',
    bg: 'radial-gradient(ellipse at 40% 60%, rgba(200, 164, 92, 0.12) 0%, transparent 70%)',
  },
  {
    id: 'dare',
    word: 'DARE',
    headline: 'Step outside your comfort zone.',
    body: 'True beauty is found at the edge of what you know. Every new product, every bold choice, every experiment is an act of courage.',
    accent: '#D4A8A0',
    bg: 'radial-gradient(ellipse at 60% 40%, rgba(212, 168, 160, 0.14) 0%, transparent 70%)',
  },
  {
    id: 'discover',
    word: 'DISCOVER',
    headline: 'Find more of yourself.',
    body: 'Discovery is not just finding a product you love — it is finding a version of yourself you never knew existed.',
    accent: '#B8C4B0',
    bg: 'radial-gradient(ellipse at 50% 50%, rgba(184, 196, 176, 0.12) 0%, transparent 70%)',
  },
]

export default function DreamDareDiscover() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStage, setActiveStage] = useState(0)
  const inView = useInView(sectionRef, { threshold: 0.1 })

  useEffect(() => {
    if (!inView) return
    const handleScroll = () => {
      if (!sectionRef.current) return
      const { top, height } = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))
      setActiveStage(Math.min(2, Math.floor(progress * 3)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [inView])

  const stage = stages[activeStage]

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Dream Dare Discover interactive">
      <div className={styles.sticky}>
        {/* Dynamic background */}
        <div className={styles.bg} style={{ background: stage.bg }} aria-hidden="true" />

        <div className={`${styles.inner} container`}>
          {/* Stage selector dots */}
          <nav className={styles.stageDots} aria-label="Stage navigation">
            {stages.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.dot} ${i === activeStage ? styles.dotActive : ''}`}
                onClick={() => setActiveStage(i)}
                aria-label={s.word}
                aria-current={i === activeStage ? 'true' : undefined}
              />
            ))}
          </nav>

          {/* Content */}
          <div className={styles.content}>
            <span
              className={`t-label ${styles.label}`}
              style={{ color: stage.accent, transition: 'color 0.5s ease' }}
            >
              {String(activeStage + 1).padStart(2, '0')} / 03
            </span>

            <h2
              key={stage.word}
              className={styles.word}
              style={{ color: stage.accent }}
            >
              {stage.word}
            </h2>

            <h3 key={`h-${stage.id}`} className={styles.headline}>
              {stage.headline}
            </h3>

            <p key={`p-${stage.id}`} className={styles.body}>
              {stage.body}
            </p>

            {/* Stage switcher buttons */}
            <div className={styles.stageNav}>
              {stages.map((s, i) => (
                <button
                  key={s.id}
                  className={`${styles.stageBtn} ${i === activeStage ? styles.stageBtnActive : ''}`}
                  onClick={() => setActiveStage(i)}
                  style={{ borderColor: i === activeStage ? s.accent : undefined }}
                >
                  <span className="t-label">{s.word}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right side — large ambient number */}
          <div className={styles.ambient} aria-hidden="true">
            <span className={styles.ambientNum} style={{ color: stage.accent }}>
              {String(activeStage + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Section overline */}
        <div className={styles.topLabel}>
          <span className="t-label" style={{ color: 'var(--color-taupe)' }}>More than beauty products</span>
        </div>
      </div>
    </section>
  )
}
