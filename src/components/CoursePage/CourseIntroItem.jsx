import React from 'react'

const CourseIntroItem = (props) => {
    return (
        <div className='w-96 h-auto p-3 bg-white rounded-2xl'>
            <img src={props.img} alt="" />
            <h1 className='my-4 font-bold'>{props.title}</h1>
            <p className='my-4 text-justify'>{props.desk}</p>
            <button className='w-28 h-12 rounded-xl cursor-pointer bg-primary-color text-white'>Learn More</button>
        </div>
    )
}

export default CourseIntroItem
