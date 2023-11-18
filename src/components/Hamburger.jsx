import React, { useState } from 'react'

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(prevIsMenuOpen => !prevIsMenuOpen);
    }
  return (
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
  )
}

export default Hamburger