import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(prevIsMenuOpen => !prevIsMenuOpen);
    }

    const { ToggleTheme } = useContext(ThemeContext);
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
            <li>
            <div className="toggle-switch">
              <label className="switch-label">
                <input type="checkbox" className="checkbox" onChange={ToggleTheme}/>
                <span className="slider"></span>
              </label>
            </div>
          </li>
        </div>
        </div>
    </nav>
  )
}

export default Hamburger