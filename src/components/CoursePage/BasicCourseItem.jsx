import React from 'react'
import Learn from '../../assets/learn.png'

const BasicCourseItem = (props) => {
    return (
        <div className='shadow-2xl w-96 rounded-xl'>
            <img src={props.img} alt="" />
            <div className='p-4'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
                <p className='my-1'>{props.desk}</p>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center bg-bg-color p-1 rounded-md'>
                            <img src={Learn} alt="" />
                            <h3 className='font-semibold'>6 Pembelajaran</h3>
                        </div>
                        <h1 className='font-bold text-red-600'>GRATIS</h1>
                    </div>

                </div>
                <button className='bg-primary-color mt-2 w-full text-l text-white font-mediuim h-8 rounded-md'>Selengkapnya</button>
            </div>

        </div>
    )
}

export default BasicCourseItem
