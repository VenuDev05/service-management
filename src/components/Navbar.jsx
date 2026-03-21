import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)

  // 🔹 Track logged-in user
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()

  }, [])

  // 🔹 Logout
  const handleLogout = async () => {
    alert("Your account has been logged out")
    await signOut(auth)
    setIsOpen(false)
  }

  // 🔹 Short email (before @)
  const getUserName = (email) => {
    return email.split("@")[0]
  }

  return (
    <div className='NavbarContainer'>
      
      <ul className='logo-ul'>
        <Link to='/'><li id='lap-logo'>Local<span>View</span></li></Link>
        <Link to='/'><li id='mobile-logo'>L<span>V</span></li></Link>
      </ul>

      {/* Hamburger */}
      <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`menu-ul ${isOpen ? "active" : ""}`}>

        <Link to='/' onClick={() => setIsOpen(false)}><li>Home</li></Link>
        <Link to='/service' onClick={() => setIsOpen(false)}><li>Services</li></Link>
        <Link to='/contact' onClick={() => setIsOpen(false)}><li>Contact</li></Link>

        {/* 🔥 Dynamic Login/User */}
        {user ? (
          <li className="user-menu" onClick={handleLogout}>
            {getUserName(user.email)} 
          </li>
        ) : (
          <Link to='/login' onClick={() => setIsOpen(false)}>
            <li>Login</li>
          </Link>
        )}

      </ul>

    </div>
  )
}

export default Navbar