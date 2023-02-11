import React from 'react'
import Logo from '../assets/BeSmart-modified.png'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-3 px-6 items-center'>
            <div>
                <img src={Logo} alt="beSmart" className='w-1/6' />
            </div>
            <div className='flex gap-6 items-center'>
                <ul className='flex gap-6 font-medium text-l cursor-pointer'>
                    <li className='hover:text-secondary-color'>Home</li>
                    <li className='hover:text-secondary-color'>Services</li>
                    <li className='hover:text-secondary-color'>Portofolio</li>
                    <li className='hover:text-secondary-color'>About Us</li>
                </ul>
                <Button name='Register' />
                <button className='w-28 h-11 rounded-xl text-l font-medium bg-white'>Login</button>
            </div>
        </nav >
    )
}

export default Navbar
