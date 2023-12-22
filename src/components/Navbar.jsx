import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Navbar = () => {
  const { ToggleTheme } = useContext(ThemeContext);

  return (
    <nav id='desktop-nav'>
      <div className='logo'>Cotne.dev</div>
      <div>
        <ul className='nav-links'>
          <li><a href="#profile">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <div className="toggle-switch">
              <label className="switch-label">
                <input type="checkbox" className="checkbox" onChange={ToggleTheme}/>
                <span className="slider"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
