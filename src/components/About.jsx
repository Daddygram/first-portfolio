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
  )
}

export default About