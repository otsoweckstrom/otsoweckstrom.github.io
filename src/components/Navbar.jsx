import React, { useState } from 'react'
import '../styles/navbar.css'

const Navbar = ({ scrollToSection, activeSection, showNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : ''}`}>
      <button className='menu-toggle' onClick={handleMenuToggle}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => {
            scrollToSection('home')
            setIsMenuOpen(false)
          }}
        >
          Home
        </li>
        <li
          className={activeSection === 'services' ? 'active' : ''}
          onClick={() => {
            scrollToSection('services')
            setIsMenuOpen(false)
          }}
        >
          Projects
        </li>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => {
            scrollToSection('about')
            setIsMenuOpen(false)
          }}
        >
          Experience
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => {
            scrollToSection('contact')
            setIsMenuOpen(false)
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
