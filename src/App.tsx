import { useState, useEffect, lazy, Suspense } from 'react'
import './index.css'

import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import DreamDareDiscover from './components/DreamDareDiscover/DreamDareDiscover'
import VisionMission from './components/VisionMission/VisionMission'
import Ecosystem from './components/Ecosystem/Ecosystem'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = () => {
    setLoading(false)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    // Prevent scroll during loading
    if (loading) document.body.style.overflow = 'hidden'
  }, [loading])

  return (
    <>
      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main site */}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
        <Navbar />

        <main id="main-content" aria-label="Main content">
          <Hero />
          <About />
          <DreamDareDiscover />
          <VisionMission />
          <Ecosystem />
          <FinalCTA />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  )
}
