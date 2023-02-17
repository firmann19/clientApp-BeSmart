import React from 'react'
import ReactStars from 'react-stars'

const ListServiceItem = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return (
        <div className='shadow-2xl w-96 rounded-xl'>
            <img className='rounded-t-xl' src={props.img} alt="" />
            <div className='p-4'>
                <h1 className='font-bold text-xl'>{props.title}</h1>
                <p className='my-1'>{props.desk}</p>
                <div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center p-1 rounded-md'>
                            <ReactStars count={5} onChange={ratingChanged} size={24} color2={'#ffd700'}  />
                        </div>
                        <h1 className='font-bold text-red-600'>GRATIS</h1>
                    </div>

                </div>
                <button className='bg-primary-color mt-2 w-full text-l text-white font-mediuim h-8 rounded-md'>Selengkapnya</button>
            </div>

        </div>
    )
}

export default ListServiceItem
