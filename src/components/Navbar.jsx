import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/BeSmart-modified.png'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-2 px-6 items-center bg-bg-color'>
            <div>
                <Link to="/"><img src={Logo} alt="beSmart" className='w-1/6' /></Link>
            </div>
            <div className='flex gap-6 items-center'>
                <ul className='flex gap-6 font-medium text-l cursor-pointer'>
                    <Link to="/" className='hover:text-secondary-color'>Home</Link>
                    <Link to="/course" className='hover:text-secondary-color'>Course</Link>
                    <Link to="/services" className='hover:text-secondary-color'>Services</Link>
                    <Link to="/portofolio" className='hover:text-secondary-color'>Portofolio</Link>
                    <Link to="/contactus" className='hover:text-secondary-color'>Contact Us</Link>
                </ul>
                <Link to="register"><Button name='Register' /></Link>
                <Link to="login" ><button className='w-28 h-11 rounded-xl text-l font-medium bg-white'>Login</button></Link>
            </div>
        </nav >
    )
}

export default Navbar
