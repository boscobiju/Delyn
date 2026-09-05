import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { navigation, brand } from '../../config/brand'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuRef.current || !menuLinksRef.current) return
    const links = menuLinksRef.current.querySelectorAll('li')

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.set(menuRef.current, { display: 'flex' })
      gsap.fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
      gsap.fromTo(links, { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.15 })
    } else {
      document.body.style.overflow = ''
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => { if (menuRef.current) gsap.set(menuRef.current, { display: 'none' }) },
      })
    }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
        <div className={styles.inner}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')} aria-label="Delyn — Home">
            <div className={`${styles.logoCircle} ${scrolled ? styles.logoCircleScrolled : ''}`}>
              <img
                src="/delyn-logo-cropped.jpg"
                alt="Delyn Beauté"
                className={styles.logoImg}
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className={styles.desktopNav} role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink} onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className={`btn btn-primary ${styles.ctaBtn}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Visit Delyn
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            id="mobile-menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div ref={menuRef} className={styles.mobileMenu} aria-hidden={!menuOpen} role="dialog" aria-label="Mobile navigation">
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuTop}>
            <div className={styles.mobileLogoCircle}>
              <img src="/delyn-logo-cropped.jpg" alt="Delyn Beauté" className={styles.mobileLogoImg} />
            </div>
            <button className={styles.closeBtn} onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          <ul ref={menuLinksRef} className={styles.mobileNavList} role="list">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                >
                  <span className={styles.mobileNavIndex}>{String(navigation.indexOf(item) + 1).padStart(2, '0')}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileMenuFooter}>
            <a href="#contact" className={`btn btn-ghost-light`} onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}>
              Visit Delyn
            </a>
            <p className={styles.mobileTagline}>{brand.tagline}</p>
          </div>
        </div>
      </div>
    </>
  )
}

