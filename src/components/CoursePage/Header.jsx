import React from 'react'
import Button from '../Button'
import Hero from '../../assets/courseheader.png'

const Header = () => {
    return (
        <div className="w-full flex gap-10 px-7 items-center bg-white p-16">
            <div className="w-1/2">
                <h1 className="font-semibold text-5xl text-black">
                    Search and find
                    your best courses
                    with easy way
                </h1>
                <p className="text-justify my-8">
                    Lorem ipsum dolor sit amet consectetur. Proin amet ac nunc porta volutpat semper donec eget. Bibendum gravida sagittis tortor eu sit. Tempor molestie eget sit lorem.
                </p>
                <Button name="Mulai" />
            </div>
            <div>
                <img src={Hero} alt="hero" />
            </div>
        </div>
    )
}

export default Header
