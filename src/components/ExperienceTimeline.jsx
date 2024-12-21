import React from 'react'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'
import '../styles/experienceTimeline.css'

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			className="experience-card"
			date={experience.date}
			icon={
				<div className="experience-icon-wrapper">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="experience-icon"
					/>
				</div>
			}
		>
			<div className="experience-card-content">
				<h3 className="experience-title">{experience.title}</h3>
				<h1 className="experience-company">
					{experience.company_name}
				</h1>
			</div>
			<ul className="experience-points">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="experience-point"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	)
}

const Experience = () => {
	return (
		<>
			<div className="section-header">
				<h2 className="section-head-text">Work Experience</h2>
				<p className="section-sub-text">
					A summary of what I've been up to
				</p>
			</div>
			<div className="timeline-container">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default Experience
