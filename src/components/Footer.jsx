import React from 'react'
import Logo from '../assets/BeSmart-modified.png'

const Footer = () => {
    return (
        <footer >
            <div className='bg-primary-color flex justify-between p-8 text-white'>
                <div>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src={Logo} alt="" />
                        <h1 className='font-bold text-3xl'>Be Smart</h1>
                    </div>
                    <p className='my-5'>
                        BeSmart membantu anda untuk <br />berkarir dalam dunia teknologi <br /> untuk masa depan lebih baik
                    </p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>TENTANG KAMI</h1>
                    <ul className='mt-6'>
                        <li>Visi & Misi Perusahaan</li>
                        <li>Komunitas</li>
                        <li>Strukstur Perusahaan</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl'>BANTUAN</h1>
                        <ul className='mt-6'>
                            <li>FAQ</li>
                            <li>Syarat dan Ketentuan</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl'>SOSIAL MEDIA</h1>
                        <ul className='mt-6'>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Blog</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='py-2 px-6 font-semibold'>Copyright ©2022 BeSmart Comunity</h1>
            </div>
        </footer>
    )
}

export default Footer
