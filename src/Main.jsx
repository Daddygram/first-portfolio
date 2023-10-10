import { useState } from 'react';
import './App.css';
import './mediaqueries.css';
import profilePic from './assets/profile-pic.png'
import profile2 from './assets/about-pic.png'
import linkedinPic from './assets/linkedin.png'
import githubPic from './assets/github.png'
import experience from './assets/experience.png'
import education from './assets/education.png'
import arrow from './assets/arrow.png'
import website1 from './assets/project-1.png'
import website2 from './assets/project-2.png'
import website3 from './assets/project-3.png'
import email from './assets/email.png'
import linkedin from './assets/linkedin.png'
import React from 'react'



const Main = () => {
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
              <li><a href="#profile">Home</a></li>
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
            {/* <img src={profile2} alt="Profile"/> */}
            <div className="box"></div>
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
          onClick={() => window.location.href = '#projects'}/>
        </section>
        <section id="projects">
          <p className="section__text__p1">Explore my</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container color-container">
                <div className="article-container">
                  <img 
                  src={website1} 
                  alt="website" 
                  className='project-img'/>
                </div>
                <h2 
                  className="experience-sub-title project-title"
                  >Project #1</h2>
                <div className="btn-container">
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Github
                  </button>
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Live Demo
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img 
                  src={website2} 
                  alt="website" 
                  className='project-img'/>
                </div>
                <h2 
                  className="experience-sub-title project-title"
                  >Project #2</h2>
                <div className="btn-container">
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Github
                  </button>
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Live Demo
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img 
                  src={website3} 
                  alt="website" 
                  className='project-img'/>
                </div>
                <h2 
                  className="experience-sub-title project-title"
                  >Project #3</h2>
                <div className="btn-container">
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Github
                  </button>
                  <button 
                    className="btn btn-color-2 project-btn"
                    onClick={() => window.location.href = 'https://github.com'}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img 
          src={arrow} 
          alt="Arrow icon" 
          className='icon arrow' 
          onClick={() => window.location.href = '#contact'}/>
        </section>
        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img 
              src={email} 
              alt="Email icon" 
              className='icon contact-icon'/>
              <p><a href="mailto:Cotne.sxvitaridze@gmail.com">Cotne.sxvitaridze@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
              <img 
              src={linkedin} 
              alt="Linkedin icon" 
              className='icon contact-icon'/>
              <p><a href="https://linkedin.com/">Linkedin</a></p>
            </div>
          </div>
        </section>
        <footer>
          <nav>
            <div className='nav-links-container'>
              <ul className='nav-links'>
                <li><a href="#profile">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <p>Copyright &#169; 2023. All Rights Reserved</p>
        </footer>
      </div>
    );
  }
  
  export default Main