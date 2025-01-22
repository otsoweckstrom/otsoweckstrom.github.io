import React, { useState } from 'react'
import '../styles/projects.css'
import ProjectCard from './ProjectCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const { projects } = require('../constants/index.js')

  // Visibility state for each category
  const [visibility, setVisibility] = useState({
    'Data & Machine Learning': false,
    'Frontend & UI': false,
  })

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    const category = project.category || 'Other'
    if (!acc[category]) acc[category] = []
    acc[category].push(project)
    return acc
  }, {})

  return (
    <div className='projects-section-container'>
      <p className='title'>PROJECTS</p>
      <h2 className='subtitle'>
        <p className='line'>
          I've tinkered with all kinds of things throughout the years.
          <br />
          Here I've collected some of the products of all that trial and error,
          please have a look around.
        </p>
        <p className='line'>
          I’ve included source code and demos for my personal projects so you
          can explore them further.
          <br />
          Projects without source code are professional consulting work that I
          unfortunately can't share in more detail on the internet.
        </p>
        <p>Happy to talk more about any of the projects over a coffee! ☕</p>
      </h2>

      <div className='projects-container'>
        {Object.entries(groupedProjects).map(([category, projects]) => (
          <div key={category} className='project-category'>
            <h3
              className='category-title'
              onClick={() =>
                setVisibility((prevVisibility) => ({
                  ...prevVisibility,
                  [category]: !prevVisibility[category],
                }))
              }
            >
              {category} Projects
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`arrow ${
                  visibility[category] ? 'arrow-expanded' : 'arrow-collapsed'
                }`}
              />
            </h3>

            <div
              className={`project-list ${
                visibility[category] ? 'project-list-visible' : ''
              }`}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  styleType={
                    project.category === 'Full-Stack Web Applications' ||
                    project.category === ''
                      ? 'alternative'
                      : ''
                  }
                  key={index}
                  title={project.name}
                  description={project.description}
                ></ProjectCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
