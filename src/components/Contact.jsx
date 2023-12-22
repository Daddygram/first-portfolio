const Contact = () => {
  return (
    <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='icon' viewBox="0 0 128 96"><g data-name="Layer 2">
                <path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z"></path></g></svg>
              <p><a href="mailto:Cotne.sxvitaridze@gmail.com">Cotne.sxvitaridze@gmail.com</a></p>  
            </div>
            <div className="contact-info-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className='icon' viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <p><a href="https://www.linkedin.com/in/tsotne-skhvitaridze" target="_blank" rel="noreferrer">Linkedin</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact