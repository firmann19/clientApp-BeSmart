import React from 'react'
import Git from '../../assets/git.png'
import ListServiceItem from './ListServiceItem'

const ListService = () => {
    return (
            <div className='container bg-white flex justify-between my-7 px-7'>
                <ListServiceItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <ListServiceItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
                <ListServiceItem
                    img={Git}
                    title='Git & GitHub Dasar'
                    desk='Pernahkah kamu membayangkan bagaimana para programmer berkolaborasi untuk mengerjakan sebuah aplikasi? Ya, tidak lain adalah dengan...' />
            </div>
    )
}

export default ListService
