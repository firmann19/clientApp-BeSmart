import React from 'react'

const Button = (props) => {
    return (
        <button className='w-28 h-11 rounded-xl text-l font-medium bg-secondary-color text-white'>{props.name}</button>
    )
}

export default Button
