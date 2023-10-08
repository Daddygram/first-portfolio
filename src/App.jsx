import { useState } from 'react';
import './App.css';
import './mediaqueries.css';
import profilePic from './assets/profile-pic.png'

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
          <img src={profilePic} alt="Profile" />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Tsotne Skhvitaridze</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            {/* <button className='btn btn-color-2' onClick={window.open('./')}>Download CV</button> */}
            <button className='btn btn-color-1' onClick={location.href=('./#contact')}>Contact Info</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
