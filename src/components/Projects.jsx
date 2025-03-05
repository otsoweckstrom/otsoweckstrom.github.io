import React, { useState } from 'react'
import '../styles/projects.css'
import ProjectCardNew from './ProjectCardNew.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { projects, projectIntro } from '../constants/index.js'

const Projects = () => {
  const [visibility, setVisibility] = useState({})

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
        {projectIntro.map((line) => (
          <p key={line.id} className='line'>
            {line.text}
          </p>
        ))}
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
                <ProjectCardNew
                  styleType={
                    project.category === 'Full-Stack Web Applications' ||
                    project.category === ''
                      ? 'alternative'
                      : ''
                  }
                  key={index}
                  title={project.name}
                  description={project.description}
                  image={project.image}
                  source_code_link={project.source_code_link}
                  app_link={project.app_link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
