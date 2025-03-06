import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLock, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/projectcardnew.css'

const ProjectCardNew = ({
  title,
  description,
  styleType = '',
  tags = [],
  image = null,
  source_code_link = null,
  app_link = null,
  professional = false,
  category = '',
}) => {
  // Generate initials for placeholder if no image
  const initials = title
    .split(' ')
    .map((word) => word[0])
    .join('')

  return (
    <div
      className={`project-card ${
        styleType === 'alternative' ? 'project-card-alt' : ''
      }`}
    >
      <div className='project-card-image'>
        {image ? (
          <img src={image} alt={title} className='project-image' />
        ) : (
          <div className='project-placeholder'>{initials}</div>
        )}

        {category && <div className='project-category-badge'>{category}</div>}
        {professional && (
          <div className='project-professional-badge'>Professional</div>
        )}
      </div>

      <div className='project-card-content'>
        <h3 className='project-card-title'>{title}</h3>
        <p className='project-card-description'>{description}</p>

        {tags && tags.length > 0 && (
          <div className='project-card-tags'>
            {tags.map((tag, index) => (
              <span key={index} className='project-card-tag'>
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className='project-card-footer'>
          {source_code_link ? (
            <a
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
              className='project-card-link'
            >
              <FontAwesomeIcon icon={faGithub} />
              <span>Source Code</span>
            </a>
          ) : (
            <div className='project-card-link project-card-link-disabled'>
              <FontAwesomeIcon icon={faLock} />
              <span>Private Repository</span>
            </div>
          )}

          {app_link && (
            <a
              href={app_link}
              target='_blank'
              rel='noopener noreferrer'
              className='project-card-link project-card-link-app'
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              <span>See App</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCardNew
