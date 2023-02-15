import React from 'react'
import BasicCourse from '../components/CoursePage/BasicCourse'
import CourseIntro from '../components/CoursePage/CourseIntro'
import Header from '../components/CoursePage/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CoursePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <CourseIntro />
            <BasicCourse />
            <Footer />
        </div>
    )
}

export default CoursePage
