import website1 from '../assets/project-1.png'
import website2 from '../assets/project-2.png'
import website3 from '../assets/project-3.png'
import website4 from '../assets/project-4.jpg'
import website5 from '../assets/project-5.png'
import website6 from '../assets/project-6.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="projects">
        <p className="section__text__p1">Explore my private</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
            <div className="about-containers">
                <ProjectCard image={website6} name={"Achiever"} github={"https://github.com/SxvitoCodes/archiever-prototype"} live={"https://achiever-demo.vercel.app/"} />
                <ProjectCard image={website5} name={"Twitter Clone"} github={"https://github.com/Daddygram/twitter-clone"} live={"https://unfiltered.wuaze.com/"} />
                <ProjectCard image={website4} name={"Ecommerce Gymbro"} github={"https://github.com/Daddygram/ecommerce-gymbro"} live={"https://ecommerce-gymbro.vercel.app/"} />
                <ProjectCard image={website1} name={"Crypto App"} github={"https://github.com/Daddygram/crypto_app"} live={"https://cotne-crypto.vercel.app/"} />
                <ProjectCard image={website2} name={"Ecommerce Website"} github={"https://github.com/Daddygram/ecommerce"} live={"https://cotne-ecommerce.vercel.app/"} />
                <ProjectCard image={website3} name={"Gym App"} github={"https://github.com/Daddygram/gym_rapid_api"} live={"https://cotne-gym.vercel.app/"} />
            </div>
        </div>
        <a href={'#contact'}>
            <svg className='icon arrow' width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L12.7071 11.2929C12.3166 11.6834 11.6834 11.6834 11.2929 11.2929L5 5" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M19 13L12.7071 19.2929C12.3166 19.6834 11.6834 19.6834 11.2929 19.2929L5 13" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </a>
    </section>
  )
}

export default Projects