import React from 'react'
import linkedinPic from '../assets/linkedin.png'
import githubPic from '../assets/github.png'
import resume from '../assets/resume.pdf'

const Profile = () => {
  return (
    <section id='profile'>
      <div className="profile-container">
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Tsotne Skhvitaridze</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            <button className='btn btn-color-2' onClick={() => window.open(resume)} >Download CV</button>
            <button className='btn btn-color-1' onClick={() => window.location.href = '#contact'}>Contact Info</button>
          </div>
          <div id='socials-container'>
            <a href="https://www.linkedin.com/in/tsotne-skhvitaridze">
              <img 
              src={linkedinPic} 
              alt="My linkedin" 
              className='icon'/>
            </a>
            <a href="https://github.com/Daddygram">
              <img 
              src={githubPic} 
              alt="My Github" 
              className='icon' />
            </a>
          </div>
        </div>
        <div className='section__pic-container'>
          <div className="box"></div>
        </div>
      </div> 
    </section>
  )
}

export default Profile