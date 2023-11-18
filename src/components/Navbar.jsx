import React from 'react'

const Navbar = () => {
  return (
    <nav id='desktop-nav'>
        <div className='logo'>Cotne.dev</div>
        <div>
            <ul className='nav-links'>
                <li><a href="#profile">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar