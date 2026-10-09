import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Avenue from '../Components/Avenue/Avenue'
import Services from '../pages/Services'
import Smile from '../Components/Smile/Smile'
import FAQs from '../Components/FAQs/FAQs'
import Footer from '../Components/Footer/Footer'
import HealthCare from '../Components/HealthCare/HealthCare'
import Review from '../Components/Review/Review'
import PatientTrust from '../Components/PatientTrust/PatienTruct'
import Doctors from '../Components/Doctors/Doctors'
import Contact from '../pages/Contact'








function Home() {
  return (
    <div>

        <Navbar />
        <Hero />
        <Avenue />
        <Services />
         <PatientTrust />
         <Doctors />
        <Review />
        <Smile />
        <HealthCare />
        <FAQs />
        <Contact />
        <Footer />
      
    </div>
  )
}

export default Home
