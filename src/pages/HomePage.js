import React from 'react'
import ContactUs from '../components/ContactUs'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Portofolio from '../components/Portofolio'
import Service from '../components/Service'

const HomePage = () => {
  return (
    <div className='bg-bg-color'>
      <Navbar />
      <Header/>
      <Course/>
      <Service/>
      <Portofolio/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default HomePage
