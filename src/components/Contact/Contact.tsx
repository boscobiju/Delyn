import { useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { brand } from '../../config/brand'
import styles from './Contact.module.css'

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="contact" ref={sectionRef} className={styles.section} aria-labelledby="contact-heading">
      <div className={`container ${styles.inner}`}>
        {/* Left */}
        <div className={`${styles.left} ${inView ? styles.visible : ''}`}>
          <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Come discover</span>
          <h2 id="contact-heading" className={styles.headline}>
            Let's discover<br />what's next.
          </h2>
          <p className={styles.sub}>
            Step into a space designed for discovery, exploration and self-expression.
          </p>

          <div className={styles.ctaRow}>
            <a
              id="contact-visit-btn"
              href={brand.location.mapsLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Delyn
            </a>
          </div>
        </div>

        {/* Right — contact details */}
        <div className={`${styles.right} ${inView ? styles.visible : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className={styles.infoGrid}>
            <InfoBlock label="Phone" value={brand.contact.phone} icon="📞" />
            <InfoBlock label="Email" value={brand.contact.email} icon="✉️" />
          </div>


        </div>
      </div>

      {/* UAE badge */}
      <div className={`${styles.uaeBadge} ${inView ? styles.visible : ''}`} style={{ transitionDelay: '0.35s' }}>
        <div className="container">
          <div className={styles.uaeBadgeInner}>
            <div className={styles.uaeBadgeLeft}>
              <span className="t-label" style={{ color: 'var(--color-champagne)' }}>Born in the UAE</span>
              <h3 className={styles.uaeHeadline}>Born in the UAE.</h3>
              <p className={styles.uaeBody}>
                Created in the UAE for a generation that sees beauty as individuality,
                exploration and self-expression.
              </p>
            </div>
            <div className={styles.uaeBadgeRight}>
              <div className={styles.uaeFlag} aria-label="UAE">
                <div className={styles.uaeFlagRed} />
                <div className={styles.uaeFlagStripes}>
                  <div style={{ background: '#00732F' }} />
                  <div style={{ background: '#FFFFFF' }} />
                  <div style={{ background: '#000000' }} />
                </div>
              </div>
              <span className="t-label" style={{ color: 'var(--color-stone)' }}>Sharjah, UAE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ label, value, note, icon }: { label: string; value: string; note?: string; icon: string }) {
  return (
    <div className={styles.infoBlock}>
      <span className={styles.infoIcon} aria-hidden="true">{icon}</span>
      <div>
        <span className={`t-label ${styles.infoLabel}`}>{label}</span>
        <p className={styles.infoValue}>{value}</p>
        {note && <span className={styles.infoNote}>{note}</span>}
      </div>
    </div>
  )
}


