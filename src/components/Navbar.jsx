import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='NavbarContainer'>
      
      <ul className='logo-ul'>
        <Link to='/'><li>Local<span>View</span></li></Link>
      </ul>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`menu-ul ${isOpen ? "active" : ""}`}>
        <Link to='/' onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to='/service' onClick={() => setIsOpen(false)}><li>Services</li></Link>
        <Link to='/contact' onClick={() => setIsOpen(false)}><li>Contact</li></Link>
        <Link to='/login' onClick={() => setIsOpen(false)}><li>Login</li></Link>
      </ul>

    </div>
  )
}

export default Navbar