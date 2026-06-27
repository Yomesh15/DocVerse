import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import BookAppointmentCTA from '../components/BookAppointmentCTA'
import Footer from '../components/Footer'
import FeaturedDoctors from '../components/FeaturedDoctors'
import Speciality from '../components/Speciality'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Speciality/>
        <FeaturedDoctors/>
        <HowItWorks/>
        <BookAppointmentCTA/>
        <Footer/>
    </div>
  )
}

export default Home