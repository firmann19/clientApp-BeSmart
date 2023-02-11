import React from 'react'
import Course from '../components/Course'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className='bg-bg-color'>
      <Navbar />
      <Header/>
      <Course/>
    </div>
  )
}

export default HomePage
