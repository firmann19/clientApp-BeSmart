import React from 'react'

const CourseItem = (props) => {
    return (
        <div className='bg-white items-center p-8 text-center w-80 h-96 rounded-xl filter-sd'>
            <img src={props.img} alt="" className='mx-14 w-2/4' />
            <h1 className='text-2xl font-bold text-primary-color my-6'>{props.title}</h1>
            <p className='text-center'>{props.desk}</p>
        </div>
    )
}

export default CourseItem
