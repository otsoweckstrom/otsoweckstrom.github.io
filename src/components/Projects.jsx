import React from 'react'
import '../styles/projects.css'
import '../constants/index.js'

const Projects = () => {
	const { projects } = require('../constants/index.js')
	return (
		<div className="projects">
			<h3 className="title">PROJECTS</h3>
			<h2 className="subtitle">
				<p className="line">
					While I can’t share some of my professional work here, I’d
					be happy to discuss it if you're curious!
				</p>
				<p className="line">
					Take a look at some of my favorite personal projects below.
				</p>
			</h2>

			<div className="projects-container">
				{projects.map((project, index) => (
					<div key={index} className="project">
						<h3 className="project-title">{project.name}</h3>
						<p className="project-description">
							{project.description}
						</p>
						<div className="project-image-container">
							<img
								src={project.image}
								alt={project.name}
								className="project-image"
							/>
						</div>
						<div className="tags">
							{project.tags.map((tag, index) => (
								<div key={index} className="tag">
									<p>{tag.name}</p>
								</div>
							))}
						</div>
						<div className="links-container">
							<a
								className="project-source"
								href={project.source_code_link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.source_code_link}
							</a>
							<a
								className="project-source"
								href={project.youtube_link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.youtube_link}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
