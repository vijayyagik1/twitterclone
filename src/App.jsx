import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { Home } from './pages/home/Home'
import { Footer } from './components/footer/Footer'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/register"  element={<Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>     
    </>
  )
}

export default App
