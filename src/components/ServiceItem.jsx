import React from 'react'

const ServiceItem = (props) => {
    return (
        <div className='items-center w-80 h-52 bg-white rounded-xl px-6 filter-sd'>
            <div className='flex justify-between items-center'>
                <img src={props.img} alt="" />
                <h1 className='text-lg font-semibold'>{props.title}</h1>
            </div>
            <h3 className='font-regular mt-6'>{props.desk}</h3>
        </div>
    )
}

export default ServiceItem
