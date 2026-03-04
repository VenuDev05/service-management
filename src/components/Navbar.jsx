import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='NavbarContainer'>
      
      <ul className='logo-ul'>
        <Link to='/'><li>LV</li></Link>
      </ul>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`menu-ul ${isOpen ? "active" : ""}`}>
        <Link to='/' onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to='/service' onClick={() => setIsOpen(false)}><li>Services</li></Link>
        <li>Contact</li>
        <Link to='/login' onClick={() => setIsOpen(false)}><li>Login</li></Link>
      </ul>

    </div>
  )
}

export default Navbar