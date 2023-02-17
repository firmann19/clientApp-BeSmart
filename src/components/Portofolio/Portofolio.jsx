import React from 'react'
import PortofolioItem from './PortofolioItem'

const Portofolio = () => {
    return (
        <div className='px-6 items-center mt-8 p-8 bg-white'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Portofolio</h1>
                <p className='font-semibold text-center my-6'>Cari portofolio terbaik menurut anda untuk bahan referensi<br /> dalam menciptakan sebuah inovasi yang bermanfaat</p>
            </div>
            <div className='font-bold text-black h-16 p-4 rounded-2xl mx-28 border-solid border-4 border-black'>
                <ul className='flex justify-around cursor-pointer '>
                    <li >All project</li>
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>UI/UX Designer</li>
                </ul>
            </div>
            <PortofolioItem />
        </div>
    )
}

export default Portofolio
