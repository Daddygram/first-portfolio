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
                <ProjectCard image={website1} name={"Crypto App"} github={"https://github.com/Daddygram/crypto_app"} live={"https://cotne-crypto.vercel.app/"} />
                <ProjectCard image={website2} name={"Ecommerce Website"} github={"https://github.com/Daddygram/ecommerce"} live={"https://cotne-ecommerce.vercel.app/"} />
                <ProjectCard image={website3} name={"Gym App"} github={"https://github.com/Daddygram/gym_rapid_api"} live={"https://cotne-gym.vercel.app/"} />
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