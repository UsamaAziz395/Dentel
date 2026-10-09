import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Testimonials from './pages/Testimonials'
import Services from './pages/Services'
import AppointmentForm from './Components/AppointmentForm/AppointmentForm'
import HealthCare from './Components/HealthCare/HealthCare'





function App() {
  return (
  <>

  {/* <Home /> */}

  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
       <Route path="/services" element={ <Services />}></Route>
        <Route path="/experience" element={<Experience />}> </Route>
        <Route path="/testimonials" element={<Testimonials />} > </Route>
    <Route path='/contact' element={<Contact />}></Route>
    <Route path='/Appointmentform' element={    <AppointmentForm />}></Route>
    <Route path='/HealthCare' element={    <HealthCare />}></Route>
    


  </Routes>

  </>
  )
}

export default App
