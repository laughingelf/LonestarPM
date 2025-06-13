//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Testimonials from "./pages/Testimonials"
import NoPage from './pages/NoPage'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
///import './App.css'

function App() {

  return (
    <>
      <div className='App'>


        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route index element={<LandingPage/>} />
            <Route path='/home' element={<LandingPage/>} />
            <Route path='/about-us' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/testimonials' element={<Testimonials/>} />
            <Route path='*' element={<NoPage/>} />
          </Routes>
        <Footer />
        </BrowserRouter>



      </div>
    </>
  )
}

export default App
