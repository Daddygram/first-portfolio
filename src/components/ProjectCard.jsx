const ProjectCard = ({image, name, github, live}) => {
  return (
    <div className="details-container color-container">
        <div className="article-container">
            <img 
            src={image} 
            alt="website" 
            className='project-img'/>
        </div>
        <h2 
            className="experience-sub-title project-title"
            >{name}</h2>
        <div className="btn-container">
            <button 
            className="btn btn-color-2 project-btn"
            onClick={() => window.location.href = `${github}`}>
            Github
            </button>
            <button 
            className="btn btn-color-2 project-btn"
            onClick={() => window.location.href = `${live}`}>
            Live Demo
            </button>
        </div>
    </div>
  )
}

export default ProjectCard