import React from 'react'
import profilePic from '../assets/profile-pic.png'
import experience from '../assets/experience.png'
import education from '../assets/education.png'
import arrow from '../assets/arrow.png'

const About = () => {
  return (
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
                <p>SkillWill`s Frontend course</p>
            </div>
            </div>
            <div className='text-container'>
            <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in 
            HTML, CSS, JavaScript, React, Tailwind, and Next.js. I excel in building and maintaining 
            responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, 
            engaging interfaces through writing clean and optimized code and utilizing cutting-edge 
            development tools and techniques. I am also a team player who thrives in collaborating with 
            cross-functional teams to produce outstanding web applications.
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
  )
}

export default About