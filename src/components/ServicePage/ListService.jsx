import React from 'react'
import Ecomerce from '../../assets/ecomerce.png'
import Forum from '../../assets/forumweb.png'
import Course from '../../assets/course.png'
import ListServiceItem from './ListServiceItem'

const ListService = () => {
    return (
            <div className='container flex justify-between mb-20 px-7'>
                <ListServiceItem
                    img={Ecomerce}
                    title='E-Comerce'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <ListServiceItem
                    img={Course}
                    title='Online Course'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <ListServiceItem
                    img={Forum}
                    title='Forum Social'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
            </div>
    )
}

export default ListService
