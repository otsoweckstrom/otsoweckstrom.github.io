import '../styles/projectcard.css'

const ProjectCard = ({ title, description, styleType, children }) => (
  <div className={`card ${styleType}`}>
    <div className='head'>{title}</div>
    <div className='content'>
      {description}
      <br />
      {children}
    </div>
    <div className={`button ${styleType}`}>Read More</div>
  </div>
)

export default ProjectCard
