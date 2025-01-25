import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import '../styles/home.css'
import '../constants/index.js'

const HomePage = () => {
  //get home texts from index.js
  const { hello } = require('../constants/index.js')

  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='home'>
      <div className='typewriter-container'>
        {hello.map((item, index) => (
          <div
            key={index}
            className='typing'
            style={{
              '--width': `${item.text.length}ch`,
              '--typing': `${item.text.length * 0.07}s`,
              '--steps': `${item.text.length}`,
              '--blink': `${
                Math.ceil((item.text.length * 0.5 + 0.5) / 2) * 2 - 1
              }`,
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className='socials'>
        <a
          href='https://www.linkedin.com/in/otso-weckstr%C3%B6m/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
        <a
          href='https://github.com/otsoweckstrom'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} size='2x' />
        </a>
      </div>

      <div className={`scroll-down ${!isVisible ? 'hidden' : ''}`}>
        ⬇ scroll down to see my work ⬇
      </div>
    </div>
  )
}

export default HomePage
