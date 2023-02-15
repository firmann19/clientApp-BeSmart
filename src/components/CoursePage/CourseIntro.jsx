import React from 'react'
import CourseIntroItem from './CourseIntroItem'
import Fedev from '../../assets/fedev.png'
import Mobdev from '../../assets/mobdev.png'
import Uxdev from '../../assets/uxdev.png'

const CourseIntro = () => {
    return (
        <div className='bg-bg-color p-7'>
            <div className=' container'>
                <h1 className='font-bold text-black text-center text-3xl'>Our best courses for you</h1>
                <div>
                    <div className='flex justify-between my-7'>
                        <CourseIntroItem
                            img={Fedev}
                            title='Front-End Developer'
                            desk='Learn how to build a website display using HTML, CSS, Bootstrap and React for 4 months which will be guided directly by experienced digital practitioners.' />
                        <CourseIntroItem
                            img={Mobdev}
                            title='Mobile Development'
                            desk='Learn how to build a website display using HTML, CSS, Bootstrap and React for 4 months which will be guided directly by experienced digital practitioners.' />
                        <CourseIntroItem
                            img={Uxdev}
                            title='UI/UX Designer'
                            desk='Learn how to build a website display using HTML, CSS, Bootstrap and React for 4 months which will be guided directly by experienced digital practitioners.' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseIntro
