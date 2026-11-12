import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import EnquiryForm from './components/EnquiryForm'
import Consultation from './components/Consultation'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Footer from './components/Footer'

const SECTION_IDS = [
  'home',
  'services',
  'why-us',
  'free-consultation',
  'reviews',
  'faq',
  'lead-form',
]

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          const id = visible[0].target.id
          if (id === 'lead-form') {
            setActiveSection('free-consultation')
          } else {
            setActiveSection(id)
          }
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.35, 0.55] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-surface text-on-surface font-body text-body-md antialiased">
      <Header activeSection={activeSection} />
      <main className="w-full pt-20 bg-surface">
        <Hero />
        <WhyUs />
        <Services />
        <EnquiryForm />
        <Consultation />
        <Reviews />
        <Faq />
        <Footer />
      </main>
    </div>
  )
}
