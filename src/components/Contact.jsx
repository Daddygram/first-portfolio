import email from '../assets/email.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
  return (
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
                <p><a href="www.linkedin.com/in/tsotne-skhvitaridze">Linkedin</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact