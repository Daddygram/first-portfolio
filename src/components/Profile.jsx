import React from 'react'
import linkedinPic from '../assets/linkedin.png'
import githubPic from '../assets/github.png'

const Profile = () => {
  return (
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
  )
}

export default Profile