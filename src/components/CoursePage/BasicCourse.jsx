import React from 'react'
import BasicCourseItem from './BasicCourseItem'
import Git from '../../assets/git.png'

const BasicCourse = () => {
    return (
        <div className='bg-white my-10'>
            <div>
                <h1 className='text-center font-bold text-3xl text-black'>Basic Course</h1>
            </div>
            <div className='container flex justify-between my-7'>
                <BasicCourseItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <BasicCourseItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <BasicCourseItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
            </div>
        </div>
    )
}

export default BasicCourse
