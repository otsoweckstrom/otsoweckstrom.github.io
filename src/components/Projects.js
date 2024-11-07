import React from 'react'
import '../styles/projects.css'
import '../constants/index.js'

const Projects = () => {
  const { projects } = require('../constants/index.js')
  return (
    <div className='projects'>
      <h3 className='title'>PROJECTS</h3>
      <div className='projects-container'>
        {projects.map((project, index) => (
          <div key={index} className='project'>
            <h3 className='project-title'>{project.name}</h3>
            <div className='project-content'>
              <p>{project.description}</p>
              <div className='tags'>
                {project.tags.map((tag, index) => (
                  <div key={index} className='tag'>
                    <p>{tag.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className='project-source'>{project.source_code_link}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
