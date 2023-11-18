import arrow from '../assets/arrow.png'
import website1 from '../assets/project-1.png'
import website2 from '../assets/project-2.png'
import website3 from '../assets/project-3.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
        <p className="section__text__p1">Explore my</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
            <div className="about-containers">
                <ProjectCard image={website1} name={"Project #1"} github={"https://github.com"} live={"https://github.com"} />
                <ProjectCard image={website2} name={"Project #2"} github={"https://github.com"} live={"https://github.com"} />
                <ProjectCard image={website3} name={"Project #3"} github={"https://github.com"} live={"https://github.com"} />
            </div>
        </div>
        <img 
        src={arrow} 
        alt="Arrow icon" 
        className='icon arrow' 
        onClick={() => window.location.href = '#contact'}/>
    </section>
  )
}

export default Projects