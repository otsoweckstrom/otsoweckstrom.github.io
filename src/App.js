import React, { useRef, useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  const [showNavbar, setShowNavbar] = useState(false)

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'services':
        servicesRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  const handleScroll = () => {
    const sections = [
      { name: 'home', ref: homeRef },
      { name: 'about', ref: aboutRef },
      { name: 'services', ref: servicesRef },
      //{ name: 'contact', ref: contactRef },
    ]
    const scrollPosition = window.scrollY + window.innerHeight / 2

    for (let section of sections) {
      const element = section.ref.current
      if (
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.clientHeight > scrollPosition
      ) {
        setActiveSection(section.name)
        break
      }
    }
    setShowNavbar(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='App'>
      <Navbar
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        showNavbar={showNavbar}
      />
      <div>
        <section ref={homeRef} id='home'>
          <Home />
        </section>
        <section ref={servicesRef} id='services'>
          <Projects />
        </section>
        <section ref={aboutRef} id='about'>
          <About />
        </section>
        {/*     <section ref={contactRef} id='contact'>
          <Contact />
        </section>*/}
      </div>
    </div>
  )
}

export default App
