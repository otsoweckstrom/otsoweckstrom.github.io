import React from 'react'
import '../styles/about.css'
import '../constants/index.js'
import Experience from './ExoerienceTimeline'

const About = () => {
  const { experiences } = require('../constants/index.js')
  return (
    <div className='about'>
      <Experience />
    </div>
  )
}

export default About
