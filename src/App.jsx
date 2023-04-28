import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Login } from './pages/login/Login'
import { Register } from './pages/register/Register'
import { Home } from './pages/home/Home'
import { Footer } from './components/footer/Footer'
import { Sidebar } from './components/sections/sidebar/Sidebar'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore">Explore</Route>
        <Route path="/notifications">Notifications</Route>
        <Route path="/messages">Messages</Route>
        <Route path="/bookmarks">Bookmarks</Route>
        <Route path="/lists">Lists</Route>
        <Route path="/profile">Profile</Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
        <Footer/>
      </BrowserRouter>     
    </>
  )
}

export default App
