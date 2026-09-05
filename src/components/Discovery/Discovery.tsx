import { useRef, useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { discoveryProducts, globalMarkets } from '../../config/brand'
import styles from './Discovery.module.css'

const tagColors: Record<string, string> = {
  'Trending':      '#C8A45C',
  'Viral':         '#D4A8A0',
  'New Arrival':   '#B8C4B0',
  'Cult Favourite':'#C8B4A0',
  'Editor\'s Pick':'#A89880',
}

// Abstract product visual using CSS + SVG
function ProductVisual({ id, accent }: { id: number; accent: string }) {
  return (
    <div className={styles.productVisual} aria-hidden="true">
      <div className={styles.productShape} style={{ background: accent }}>
        <svg width="100%" height="100%" viewBox="0 0 100 140" fill="none">
          {id % 3 === 0 && (
            <>
              <rect x="30" y="20" width="40" height="90" rx="20" fill="currentColor" opacity="0.9"/>
              <rect x="38" y="10" width="24" height="16" rx="8" fill="currentColor" opacity="0.6"/>
              <circle cx="50" cy="65" r="8" fill="white" opacity="0.3"/>
            </>
          )}
          {id % 3 === 1 && (
            <>
              <ellipse cx="50" cy="70" rx="28" ry="50" fill="currentColor" opacity="0.85"/>
              <ellipse cx="50" cy="25" rx="14" ry="10" fill="currentColor" opacity="0.6"/>
              <rect x="44" y="15" width="12" height="12" rx="3" fill="currentColor" opacity="0.5"/>
            </>
          )}
          {id % 3 === 2 && (
            <>
              <rect x="20" y="30" width="60" height="80" rx="8" fill="currentColor" opacity="0.85"/>
              <rect x="35" y="18" width="30" height="18" rx="4" fill="currentColor" opacity="0.6"/>
              <rect x="25" y="55" width="50" height="1" fill="white" opacity="0.3"/>
              <circle cx="50" cy="85" r="6" fill="white" opacity="0.25"/>
            </>
          )}
        </svg>
      </div>
    </div>
  )
}

const productAccents = ['#C8A882', '#D4A8A0', '#B8C4B0', '#C4A882', '#D4B896', '#A89880']

export default function Discovery() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { threshold: 0.3 })
  const railRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(0)
  const scrollStart = useRef(0)

  // Mouse drag scroll
  const onMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return
    setIsDragging(true)
    dragStart.current = e.clientX
    scrollStart.current = railRef.current.scrollLeft
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !railRef.current) return
    railRef.current.scrollLeft = scrollStart.current - (e.clientX - dragStart.current)
  }
  const onMouseUp = () => setIsDragging(false)

  return (
    <section className={styles.section} aria-label="Beauty discovery rail">
      <div className={styles.header}>
        <div className="container" ref={headerRef}>
          <div className={`${styles.headerInner} ${headerInView ? styles.visible : ''}`}>
            <div>
              <span className="t-label" style={{ color: 'var(--color-champagne)' }}>What's everyone talking about?</span>
              <h2 className={`t-display-lg ${styles.headline}`}>
                Discover<br />what's next.
              </h2>
            </div>
            <p className={`t-body-lg ${styles.sub}`}>
              From viral beauty discoveries to cult favorites from around the world,
              Delyn brings together products worth discovering.
            </p>
          </div>

          {/* Market labels */}
          <div className={styles.markets}>
            {globalMarkets.map((m) => (
              <span key={m} className={styles.marketTag}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Draggable horizontal rail */}
      <div
        ref={railRef}
        className={`${styles.rail} ${isDragging ? styles.dragging : ''}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        role="list"
        aria-label="Product discovery rail"
      >
        <div className={styles.railInner}>
          {discoveryProducts.map((p, i) => (
            <div key={p.id} className={styles.productCard} role="listitem" aria-label={p.name}>
              <ProductVisual id={p.id} accent={productAccents[i % productAccents.length]} />
              <div className={styles.productInfo}>
                <div className={styles.productTop}>
                  <span className={styles.productCategory}>{p.category}</span>
                  {p.tag && (
                    <span
                      className={styles.productTag}
                      style={{ borderColor: tagColors[p.tag] || 'var(--color-champagne)', color: tagColors[p.tag] }}
                    >
                      {p.tag}
                    </span>
                  )}
                </div>
                <p className={styles.productName}>{p.name}</p>
                <span className={styles.productOrigin}>From {p.origin}</span>
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className={styles.comingSoonCard} role="listitem">
            <div className={styles.comingSoonInner}>
              <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Always discovering</span>
              <p className={styles.comingSoonText}>More beauty discoveries arriving soon.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dragHint} aria-hidden="true">
        <span className="t-label" style={{ color: 'var(--color-taupe)' }}>← Drag to explore →</span>
      </div>
    </section>
  )
}
