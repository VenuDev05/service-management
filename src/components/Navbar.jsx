import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='NavbarContainer'>
        <ul className='logo-ul'>
            <li>LV</li>
        </ul>
        <ul className='menu-ul'>
           <Link to='/'><li>Home</li></Link>
            <li>Services</li>
            <li>Contact</li>
           <Link to='/login'><li>Login</li></Link>
        </ul>
    </div>
  )
}

export default Navbar