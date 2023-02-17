import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/BeSmart-modified.png'

const Footer = () => {
    return (
        <footer >
            <div className='bg-primary-color flex justify-between p-8 text-white'>
                <div>
                    <div className='flex items-center gap-4'>
                        <img className='w-16' src={Logo} alt="" />
                        <h1 className='font-bold text-3xl'>BeSmart</h1>
                    </div>
                    <p className='my-5'>
                        BeSmart membantu anda untuk <br />berkarir dalam dunia teknologi <br /> untuk masa depan lebih baik
                    </p>
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>TENTANG KAMI</h1>
                    <ul className='mt-6'>
                        <Link to="visi-misi"><li>Visi & Misi Perusahaan</li></Link>
                        <Link to="komunitas"><li>Komunitas</li></Link>
                        <Link to="struktur-perusahaan"><li>Struktur Perusahaan</li></Link>
                    </ul>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl'>BANTUAN</h1>
                        <ul className='mt-6'>
                            <Link to="faq"><li>FAQ</li></Link>
                            <Link to="syarat-kententuan"><li>Syarat dan Ketentuan</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl'>SOSIAL MEDIA</h1>
                        <ul className='mt-6'>
                            <Link to="linkedin"><li>LinkedIn</li></Link>
                            <Link to="instagram"><li>Instagram</li></Link>
                            <Link to="blog"><li>Blog</li></Link>
                            <Link to="youtube"><li>Youtube</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='py-2 px-6 font-semibold text-center'>Copyright ©2022 BeSmart Comunity</h1>
            </div>
        </footer>
    )
}

export default Footer
