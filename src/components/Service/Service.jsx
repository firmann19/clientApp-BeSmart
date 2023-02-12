import React from 'react'
import ServiceItem from './ServiceItem'
import Webdev from '../../assets/webdev.png'
import Appdev from '../../assets/appdev.png'
import Uidev from '../../assets/uidev.png'

const Service = () => {
    return (
        <div className="px-6 items-center mt-8 p-8">
            <h1 className="text-4xl font-bold text-center">Service</h1>
            <p className="font-semibold text-center my-6">
                Menyediakan berbagai jasa pelayanan untuk anda<br /> menciptakan sebuah inovasi masa depan
            </p>
            <div className='flex gap-18 mx-20 justify-between'>
                <ServiceItem
                    img={Webdev}
                    title='Web Development'
                    desk='Membangun website sesuai kebutuhan industri global dan sesuai  kebutuhan' />
                <ServiceItem
                    img={Appdev}
                    title='Aplication 
                    Development'
                    desk='Membangun aplikasi berdasarkan user experience dan tampilan yang menarik' />
                <ServiceItem
                    img={Uidev}
                    title='UI / UX Design'
                    desk='Membuat desain berkualitas tinggi yang bisa disesuaikan dengan kebutuhan bisnis' />
            </div>
        </div>
    )
}

export default Service
