import { brand, navigation } from '../../config/brand'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logoCircle}>
                <img src="/delyn-logo-cropped.jpg" alt="Delyn Beauté" className={styles.logoImg} />
              </div>
              <p className={styles.tagline}>{brand.tagline}</p>
              <p className={styles.subTagline}>{brand.subTagline}</p>
            </div>

            {/* Nav */}
            <nav className={styles.nav} aria-label="Footer navigation">
              <span className="t-label" style={{ color: 'var(--color-stone)' }}>Explore</span>
              <ul className={styles.navList} role="list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.navLink}
                      onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>



            {/* Contact */}
            <div className={styles.contactCol}>
              <span className="t-label" style={{ color: 'var(--color-stone)' }}>Contact</span>
              <p className={styles.address}>{brand.contact.phone}</p>
              <a href={`mailto:${brand.contact.email}`} className={styles.contactLink}>{brand.contact.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.legal}>
              © {new Date().getFullYear()} Delyn. All rights reserved. &nbsp;·&nbsp; United Arab Emirates
            </p>
            <div className={styles.legalLinks}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <span className={styles.dot} aria-hidden="true">·</span>
              <a href="/terms" className={styles.legalLink}>Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

