const ProjectCard = ({image, name, github, live}) => {
  return (
    <div className="details-container color-container">
        
        <div className="article-container">
            <img 
            src={image} 
            alt="website" 
            className='project-img'/>
        </div>
        
        <h2 className="experience-sub-title project-title">{name}</h2>
        
        <div className="btn-container">

            <a href={github} target="_blank" rel="noreferrer">
              <button 
              className="btn btn-color-2 project-btn">
              Github
              </button>
            </a>
            
            <a href={live} target="_blank" rel="noreferrer">
              <button 
              className="btn btn-color-2 project-btn"
              >
              Live Demo
              </button>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard