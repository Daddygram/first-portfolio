import { useState } from 'react';
import './App.css';
import './mediaqueries.css';
import profilePic from './assets/profile-pic.png'
import linkedinPic from './assets/linkedin.png'
import githubPic from './assets/github.png'
import experience from './assets/experience.png'
import education from './assets/education.png'
import arrow from './assets/arrow.png'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

  return (
    <div className="App">
      <nav id='desktop-nav'>
        <div className='logo'>Cotne.dev</div>
        <div>
          <ul className='nav-links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div className='logo'>Cotne.dev</div>
        <div className='hamburger-menu'>
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id='profile'>
        <div className='section__pic-container'>
          <img src={profilePic} alt="Profile"/>
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Tsotne Skhvitaridze</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            <button className='btn btn-color-2'>Download CV</button>
            <button className='btn btn-color-1' onClick={() => window.location.href = '#contact'}>Contact Info</button>
          </div>
          <div id='socials-container'>
            <img 
            src={linkedinPic} 
            alt="My linkedin" 
            className='icon'
            onClick={() => window.location.href = 'https://linkedin.com'}/>
            <img 
            src={githubPic} 
            alt="My Github" 
            className='icon' 
            onClick={() => window.location.href = 'https://github.com'}/>
          </div>
        </div>
      </section>
      <section id='about'>
        <p className="section__text__p1">Get to know more</p>
        <h1 className="title">About me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img 
            src={profilePic} 
            alt="pfp" 
            className='about-pic' />
          </div>
          <div className="about-details-container">
            <div className='about-containers'>
              <div className="details-container">
                <img 
                src={experience} 
                alt="Experience icon" 
                className='icon'/>
                <h3>Experience</h3>
                <p>year of <br />Frontend Development</p>
              </div>
              <div className='details-container'>
                <img 
                  src={education} 
                  alt="Education icon" 
                  className='icon'/>
                  <h3>Education</h3>
                  <p>B.En. Bachelors degree <br />SkillWill Frontend course</p>
              </div>
            </div>
            <div className='text-container'>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque provident nemo adipisci exercitationem dolorum asperiores
              iusto, consectetur dolores a repudiandae? Quas perferendis 
              fuga eos aperiam provident, dolor est consequatur quos obcaecati
              nesciunt. Assumenda dolor, ratione sit voluptatibus voluptas consequuntur
              officiis voluptates, optio quae aut cumque, odio odit alias harum omnis!
              </p>
            </div>
          </div>
        </div>
        <img 
        src={arrow} 
        alt="Arrow icon" 
        className='icon arrow' 
        onClick={() => window.location.href = '#experience'}/>
      </section>
      <section id="projects">
        <p className="section__text__p1">Explore my</p>
        <h1 className="title">Projects</h1>
      </section>
    </div>
  );
}

export default App;
