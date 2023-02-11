import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';

import Porto1 from '../assets/porto1.png'
import Porto2 from '../assets/porto2.png'
import Porto3 from '../assets/porto3.png'
import Porto4 from '../assets/porto3.png'

const images = [Porto1, Porto2, Porto3, Porto4];

function SampleNextArrow({ onClick }) {
    return (
        <div className='arrow arrow-right' onClick={onClick}>
            <BsArrowRight />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div className='arrow arrow-left' onClick={onClick}>
            <BsArrowLeft />
        </div>
    );
}
function EmptyArrow({ onClick }) {
    return (
        <div></div>
    );
}

function App() {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (current, next) => (
            <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    nextArrow: <EmptyArrow />,
                    prevArrow: <EmptyArrow />,
                }
            }]
    };

    return (
        <div className="container">
            <div className="slider">
                <Slider {...settings}>
                    {
                        images.map((img, index) => (
                            <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default App;