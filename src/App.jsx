import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Category from './pages/Category'
import Contact from './pages/Contact'
import EmployeeRegister from './pages/Employee'
import BookWork from './pages/BookWork'

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
        <Route path='/employee' element={<EmployeeRegister/>} />
        <Route path='/book' element={<BookWork/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App