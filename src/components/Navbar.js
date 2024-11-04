import React from 'react'
import '../styles/navbar.css'

const Navbar = ({ scrollToSection, activeSection, showNavbar }) => {
  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <img
        src='turtel.png'
        alt='logo'
        onClick={() => scrollToSection('home')}
      />
      <ul>
        <li
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => scrollToSection('home')}
        >
          Me
        </li>
        <li
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          Experience
        </li>
        <li
          className={activeSection === 'services' ? 'active' : ''}
          onClick={() => scrollToSection('services')}
        >
          Projects
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
