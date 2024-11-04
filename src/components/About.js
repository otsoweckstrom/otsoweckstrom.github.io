import React from 'react'
import '../styles/about.css'
import '../constants/index.js'

const About = () => {
  const { experiences } = require('../constants/index.js')
  return (
    <div className='about'>
      <div className='experience-container'>
        {experiences.map((experience, index) => (
          <div key={index} className='experience'>
            <h3>{experience.title}</h3>
            <p>{experience.company_name}</p>
            <div
              className='icon'
              style={{ backgroundColor: experience.iconBg }}
            >
              <img src={experience.icon} alt={experience.company_name} />
            </div>
            <p>{experience.date}</p>
            <ul>
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
