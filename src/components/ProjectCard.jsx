import '../styles/projectcard.css'

const ProjectCard = ({ title, description, children }) => (
  <div className='card'>
    <div className='head'>{title}</div>
    <div className='content'>
      {description}
      <br />
      {children}
    </div>
    <div className='button'>Read More</div>
  </div>
)

export default ProjectCard
