import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Contact from './pages/Contact'

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/service' element={<Category/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App